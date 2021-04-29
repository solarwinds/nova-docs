(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-dialog-dialog-module"],{

/***/ "+Rq8":
/*!**********************************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/dialog-inside-overlay/dialog-inside-overlay.example.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DialogInsideOverlayExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogInsideOverlayExampleComponent", function() { return DialogInsideOverlayExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");










function DialogInsideOverlayExampleComponent_nui_select_v2_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogInsideOverlayExampleComponent_nui_select_v2_option_1_Template_nui_select_v2_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx_r4.openInOverlay(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3, " ");
} }
function DialogInsideOverlayExampleComponent_ng_template_2_nui_select_v2_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r8, " ");
} }
function DialogInsideOverlayExampleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DialogInsideOverlayExampleComponent_ng_template_2_Template_nui_dialog_header_closed_0_listener() { const close_r6 = ctx.close; return close_r6(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-select-v2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DialogInsideOverlayExampleComponent_ng_template_2_nui_select_v2_option_4_Template, 2, 2, "nui-select-v2-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogInsideOverlayExampleComponent_ng_template_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogInsideOverlayExampleComponent_ng_template_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onDone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.options2);
} }
class DialogInsideOverlayExampleComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.options1 = Array.from({ length: 25 }).map((_, i) => $localize `Item ${i}`);
        this.options2 = Array.from({ length: 25 }).map((_, i) => $localize `Item ${i}`);
    }
    /**
     * Notice that the 'useOverlay' option is being passed in here
     */
    openInOverlay(content) {
        this.activeDialog = this.dialogService.open(content, { size: "sm", useOverlay: true });
    }
    onDone() {
        this.activeDialog.close();
    }
    onCancel() {
        this.activeDialog.close();
    }
}
DialogInsideOverlayExampleComponent.ɵfac = function DialogInsideOverlayExampleComponent_Factory(t) { return new (t || DialogInsideOverlayExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
DialogInsideOverlayExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogInsideOverlayExampleComponent, selectors: [["nui-dialog-inside-overlay-example"]], decls: 4, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7047139230806437035$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_DIALOG_INSIDE_OVERLAY_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select an item");
        i18n_0 = MSG_EXTERNAL_7047139230806437035$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_DIALOG_INSIDE_OVERLAY_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟23c6ea3ae96a11999a1e288414771d31e81cd7f9␟7047139230806437035:Select an item`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6048569446453718997$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_DIALOG_INSIDE_OVERLAY_EXAMPLE_COMPONENT_TS__3 = goog.getMsg("Dialog Title");
        i18n_2 = MSG_EXTERNAL_6048569446453718997$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_DIALOG_INSIDE_OVERLAY_EXAMPLE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟3adbb5e2eb76ed612cb6cea384dae8481bba9cbb␟6048569446453718997:Dialog Title`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7047139230806437035$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_DIALOG_INSIDE_OVERLAY_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("Select an item");
        i18n_4 = MSG_EXTERNAL_7047139230806437035$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_DIALOG_INSIDE_OVERLAY_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟23c6ea3ae96a11999a1e288414771d31e81cd7f9␟7047139230806437035:Select an item`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2159130950882492111$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_DIALOG_INSIDE_OVERLAY_EXAMPLE_COMPONENT_TS__7 = goog.getMsg("Cancel");
        i18n_6 = MSG_EXTERNAL_2159130950882492111$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_DIALOG_INSIDE_OVERLAY_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟d7b35c384aecd25a516200d6921836374613dfe7␟2159130950882492111:Cancel`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9216117865911519658$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_DIALOG_INSIDE_OVERLAY_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Action");
        i18n_8 = MSG_EXTERNAL_9216117865911519658$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_DIALOG_INSIDE_OVERLAY_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟1bd5e17c9582661e20763a7634ef07881e33bbd7␟9216117865911519658:Action`;
    } return [["id", "select-to-open-dialog", "placeholder", i18n_0, 3, "popupViewportMargin"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["headerButtonsContent", ""], [3, "value", "click"], ["title", i18n_2, 3, "closed"], [1, "dialog-body"], ["placeholder", i18n_4], [3, "value", 4, "ngFor", "ngForOf"], ["nui-button", "", "type", "button", 3, "click"], i18n_6, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_8, [3, "value"]]; }, template: function DialogInsideOverlayExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DialogInsideOverlayExampleComponent_nui_select_v2_option_1_Template, 2, 2, "nui-select-v2-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogInsideOverlayExampleComponent_ng_template_2_Template, 11, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popupViewportMargin", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options1);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__["SelectV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_5__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_6__["DialogFooterComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"]], encapsulation: 2 });


/***/ }),

/***/ "+fpV":
/*!**************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/dialog-actions-before-closure/dialog-actions-before-closure.example.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: DialogActionBeforeClosureExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogActionBeforeClosureExampleComponent", function() { return DialogActionBeforeClosureExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");








function DialogActionBeforeClosureExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DialogActionBeforeClosureExampleComponent_ng_template_0_Template_nui_dialog_header_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.closeFromHeader(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogActionBeforeClosureExampleComponent_ng_template_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.actionCanceled(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogActionBeforeClosureExampleComponent_ng_template_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.actionDone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DialogActionBeforeClosureExampleComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    open(content) {
        // You can return 'false' from the optional beforeDismiss function anytime you want to prevent the dialog from closing.
        this.activeDialog = this.dialogService.open(content, { size: "sm", beforeDismiss: this.beforeDismiss });
        // You can use the beforeDismissed$ event to execute actions right before the dialog gets closed
        this.activeDialog
            .beforeDismissed$
            .pipe(
        // Be sure to unsubscribe on dialog closure
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.activeDialog.closed$))
            .subscribe(event => {
            // A dialog will typically close in response to the escape key
            if (event === _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDialogEvent"].EscapeKey) {
                console.log($localize `ESC CLOSED`);
            }
            // Covering the 'BACKDROP_CLICK' event in case of clearing the dialog by clicking the backdrop
            if (event === _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDialogEvent"].BackdropClick) {
                console.log($localize `BACKDROP CLICK CLOSED`);
                return;
            }
            // Here we cover the custom 'DONE' event which you can create and then capture within the 'beforeDismissed$' subscription
            // to run your custom logic in response to that event right before the dialog closure.  See 'actionDone' implementation below.
            if (event === "DONE") {
                console.log($localize `DONE`);
                return;
            }
            // Set of actions for all event origins before the dialog closes
            console.log($localize `BEFORE CLOSED`);
            // Manually close the dialog since the `beforeDismiss` implementation below short-circuits dismissal with its 'false' return value
            this.activeDialog.close();
        });
        // You can perform any required actions just after dialog closure here
        this.activeDialog.closed$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(() => {
            console.log($localize `CLOSED`);
        });
    }
    actionDone() {
        console.log($localize `ACTION DONE`);
        this.activeDialog.dismiss("DONE");
    }
    actionCanceled() {
        console.log($localize `ACTION CANCELED`);
        this.activeDialog.dismiss();
    }
    beforeDismiss() {
        return false;
    }
    closeFromHeader() {
        console.log($localize `CLOSE BUTTON CLICKED`);
        this.activeDialog.dismiss();
    }
}
DialogActionBeforeClosureExampleComponent.ɵfac = function DialogActionBeforeClosureExampleComponent_Factory(t) { return new (t || DialogActionBeforeClosureExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
DialogActionBeforeClosureExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogActionBeforeClosureExampleComponent, selectors: [["nui-dialog-actions-before-closure-example"]], decls: 4, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ACTIONS_BEFORE_CLOSURE_DIALOG_ACTIONS_BEFORE_CLOSURE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Click me!");
        i18n_0 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ACTIONS_BEFORE_CLOSURE_DIALOG_ACTIONS_BEFORE_CLOSURE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟b37956781d4525308454d483be8c66447da39538␟2590927982756485133:Click me!`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ACTIONS_BEFORE_CLOSURE_DIALOG_ACTIONS_BEFORE_CLOSURE_EXAMPLE_COMPONENT_TS__3 = goog.getMsg("Dialog title");
        i18n_2 = MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ACTIONS_BEFORE_CLOSURE_DIALOG_ACTIONS_BEFORE_CLOSURE_EXAMPLE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟eeb379308b8767b98aa0d27308f4f8dd6b46e559␟5892089246202495025:Dialog title`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ACTIONS_BEFORE_CLOSURE_DIALOG_ACTIONS_BEFORE_CLOSURE_EXAMPLE_COMPONENT_TS__5 = goog.getMsg(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
        i18n_4 = MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ACTIONS_BEFORE_CLOSURE_DIALOG_ACTIONS_BEFORE_CLOSURE_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟f62f9e2e728dea80e19b1e7a6f61424d55bab5ea␟7188163738299238705: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ACTIONS_BEFORE_CLOSURE_DIALOG_ACTIONS_BEFORE_CLOSURE_EXAMPLE_COMPONENT_TS__7 = goog.getMsg(" Cancel ");
        i18n_6 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ACTIONS_BEFORE_CLOSURE_DIALOG_ACTIONS_BEFORE_CLOSURE_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟bf844a41a29961b6dacc48a20eaf97bef0cf5013␟7452095619502551190: Cancel `;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ACTIONS_BEFORE_CLOSURE_DIALOG_ACTIONS_BEFORE_CLOSURE_EXAMPLE_COMPONENT_TS__9 = goog.getMsg(" Action ");
        i18n_8 = MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ACTIONS_BEFORE_CLOSURE_DIALOG_ACTIONS_BEFORE_CLOSURE_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟01b5385da84ee4b609f8273d7ae56600c3fb3cbe␟4946554391652567902: Action `;
    } return [["content", ""], ["id", "nui-demo-default-dialog-btn", "nui-button", "", "type", "button", 3, "click"], i18n_0, ["title", i18n_2, 3, "closed"], [1, "dialog-body"], i18n_4, ["nui-button", "", "type", "button", 3, "click"], i18n_6, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_8]; }, template: function DialogActionBeforeClosureExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogActionBeforeClosureExampleComponent_ng_template_0_Template, 9, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogActionBeforeClosureExampleComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_4__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_5__["DialogFooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "/3M5":
/*!******************************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/dialog-custom-class/dialog-custom-class.example.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DialogCustomClassExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogCustomClassExampleComponent", function() { return DialogCustomClassExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");







function DialogCustomClassExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DialogCustomClassExampleComponent_ng_template_0_Template_nui_dialog_header_closed_0_listener() { const close_r2 = ctx.close; return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogCustomClassExampleComponent_ng_template_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onButtonClick("Cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogCustomClassExampleComponent_ng_template_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onButtonClick("Action"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DialogCustomClassExampleComponent {
    constructor(dialogService, toastService) {
        this.dialogService = dialogService;
        this.toastService = toastService;
    }
    open(content) {
        this.activeDialog = this.dialogService.open(content, { windowClass: "demoDialogCustomClass" });
    }
    onButtonClick(title) {
        title === "Action" ? this.actionDone() : this.actionCanceled();
        this.activeDialog.close();
    }
    actionDone() {
        this.toastService.success({ message: $localize `Action Done!`, title: $localize `Event` });
    }
    actionCanceled() {
        this.toastService.info({ message: $localize `Action Cancelled!`, title: $localize `Event` });
    }
}
DialogCustomClassExampleComponent.ɵfac = function DialogCustomClassExampleComponent_Factory(t) { return new (t || DialogCustomClassExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
DialogCustomClassExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogCustomClassExampleComponent, selectors: [["nui-dialog-custom-class-example"]], decls: 4, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8039140947571424017$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_CUSTOM_CLASS_DIALOG_CUSTOM_CLASS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Custom width dialog");
        i18n_0 = MSG_EXTERNAL_8039140947571424017$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_CUSTOM_CLASS_DIALOG_CUSTOM_CLASS_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟43c6d1bd6891efd2b5f058a770bbad2944ef9f33␟8039140947571424017:Custom width dialog`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_CUSTOM_CLASS_DIALOG_CUSTOM_CLASS_EXAMPLE_COMPONENT_TS__3 = goog.getMsg("Dialog title");
        i18n_2 = MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_CUSTOM_CLASS_DIALOG_CUSTOM_CLASS_EXAMPLE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟eeb379308b8767b98aa0d27308f4f8dd6b46e559␟5892089246202495025:Dialog title`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_CUSTOM_CLASS_DIALOG_CUSTOM_CLASS_EXAMPLE_COMPONENT_TS__5 = goog.getMsg(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
        i18n_4 = MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_CUSTOM_CLASS_DIALOG_CUSTOM_CLASS_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟f62f9e2e728dea80e19b1e7a6f61424d55bab5ea␟7188163738299238705: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_CUSTOM_CLASS_DIALOG_CUSTOM_CLASS_EXAMPLE_COMPONENT_TS__7 = goog.getMsg(" Cancel ");
        i18n_6 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_CUSTOM_CLASS_DIALOG_CUSTOM_CLASS_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟bf844a41a29961b6dacc48a20eaf97bef0cf5013␟7452095619502551190: Cancel `;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_CUSTOM_CLASS_DIALOG_CUSTOM_CLASS_EXAMPLE_COMPONENT_TS__9 = goog.getMsg(" Action ");
        i18n_8 = MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_CUSTOM_CLASS_DIALOG_CUSTOM_CLASS_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟01b5385da84ee4b609f8273d7ae56600c3fb3cbe␟4946554391652567902: Action `;
    } return [["content", ""], ["id", "nui-demo-custom-class-btn", "nui-button", "", "type", "button", 3, "click"], i18n_0, ["title", i18n_2, 3, "closed"], [1, "dialog-body"], i18n_4, ["nui-button", "", "type", "button", 3, "click"], i18n_6, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_8]; }, template: function DialogCustomClassExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogCustomClassExampleComponent_ng_template_0_Template, 9, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogCustomClassExampleComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_4__["DialogFooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "28cg":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/component-as-content/dialog-content.example.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-dialog-header [title]=\"name\" (closed)=\"activeDialog.close()\"></nui-dialog-header>\n<div class=\"dialog-body\">\n    <p i18n>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n        Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n        Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n        Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n        Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n        Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n    </p>\n</div>\n<nui-dialog-footer>\n    <button nui-button type=\"button\"\n            [isEmpty]=\"false\"\n            (click)=\"onButtonClick('Cancel')\"\n            i18n>\n        Cancel\n    </button>\n    <button nui-button type=\"button\"\n            displayStyle=\"primary\"\n            [isEmpty]=\"false\"\n            (click)=\"onButtonClick('Action')\"\n            i18n>\n        Action\n    </button>\n</nui-dialog-footer>\n");

/***/ }),

/***/ "2bQm":
/*!**************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/dialog-docs/dialog-docs.example.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DialogDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDocsComponent", function() { return DialogDocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _simple_dialog_simple_dialog_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../simple-dialog/simple-dialog.example.component */ "b7fi");
/* harmony import */ var _component_as_content_component_as_content_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component-as-content/component-as-content.example.component */ "UJKN");
/* harmony import */ var _dialog_severity_dialog_severity_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog-severity/dialog-severity.example.component */ "JOKZ");
/* harmony import */ var _header_buttons_header_buttons_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header-buttons/header-buttons.example.component */ "GXFr");
/* harmony import */ var _dialog_sizes_dialog_sizes_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog-sizes/dialog-sizes.example.component */ "WQXM");
/* harmony import */ var _dialog_position_dialog_position_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialog-position/dialog-position.example.component */ "N9CE");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/message/message.component */ "4pDv");
/* harmony import */ var _dialog_custom_class_dialog_custom_class_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialog-custom-class/dialog-custom-class.example.component */ "/3M5");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.example.component */ "fcXS");
/* harmony import */ var _dialog_keyboard_dialog_with_keyboard_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dialog-keyboard/dialog-with-keyboard.example.component */ "HqCK");
/* harmony import */ var _dialog_static_backdrop_dialog_with_static_backdrop_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dialog-static-backdrop/dialog-with-static-backdrop.example.component */ "QPNM");
/* harmony import */ var _dialog_inside_overlay_dialog_inside_overlay_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dialog-inside-overlay/dialog-inside-overlay.example.component */ "+Rq8");
/* harmony import */ var _dialog_actions_before_closure_dialog_actions_before_closure_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dialog-actions-before-closure/dialog-actions-before-closure.example.component */ "+fpV");
/* harmony import */ var _dialog_after_opened_dialog_after_opened_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../dialog-after-opened/dialog-after-opened.example.component */ "cRSG");
















class DialogDocsComponent {
}
DialogDocsComponent.ɵfac = function DialogDocsComponent_Factory(t) { return new (t || DialogDocsComponent)(); };
DialogDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogDocsComponent, selectors: [["ng-component"]], decls: 335, vars: 6, consts: [["filenamePrefix", "simple-dialog", "exampleTitle", "Simple dialog"], ["filenamePrefix", "component-as-content", "exampleTitle", "Component as content for dialog"], ["filenamePrefix", "dialog-content", "exampleTitle", "Dialog Content Example Component"], ["filenamePrefix", "dialog-severity", "exampleTitle", "Dialog Severity"], ["filenamePrefix", "header-buttons", "exampleTitle", "Custom Dialog Header"], ["filenamePrefix", "dialog-sizes", "exampleTitle", "Dialog Sizes"], ["filenamePrefix", "dialog-position", "exampleTitle", "Dialog Positions"], ["type", "info"], ["filenamePrefix", "dialog-custom-class", "exampleTitle", "Custom Class"], ["target", "_parent", "href", "../interfaces/IConfirmationDialogOptions.html"], ["filenamePrefix", "confirmation-dialog", "exampleTitle", "Confirmation Dialog"], ["filenamePrefix", "dialog-with-keyboard", "exampleTitle", "Dialog With Keyboard"], ["filenamePrefix", "dialog-with-static-backdrop", "exampleTitle", "Dialog With Static Backdrop"], ["filenamePrefix", "dialog-inside-overlay", "exampleTitle", "Dialog Inside Overlay"], ["type", "info", 3, "allowDismiss"], ["filenamePrefix", "dialog-actions-before-closure", "exampleTitle", "Dialog Actions Before Closure"], ["filenamePrefix", "dialog-after-opened", "exampleTitle", "Perform an action on dialog open"]], template: function DialogDocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " NuiDialogModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Dialog can be added by passing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "DialogService's open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " method. You can pass the result of the dialog or the reason why dialog is dismissed by using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "dismiss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " methods in your ng-template. All passed data can be handled by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " property of dialog's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " method.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nui-example-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nui-simple-dialog-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Usage as a Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "You can pass an existing component as content of the dialog window. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "In this case remember to add content component as an entryComponents section of your NgModule.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "For this case you need to pass the component's class name to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " method of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "DialogService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "See both example panels below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "nui-component-as-content-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "The code of this example panel is related to the example above. It only shows code.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Severity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "You can pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "severity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " property to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "dialog-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\ncomponent and it will show different severity styles. Possible values are: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "critical, warning, info.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "You can also add custom action buttons to the Dialog header. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "In order to do so, you need to define them inside ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "dialog-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " component, as shown in the example below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nui-example-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "nui-dialog-severity-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Custom Dialog header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "You can add custom action buttons to the Dialog header. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "In order to do so, you need to define them inside ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "dialog-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " component, as shown in the example below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "nui-header-buttons-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Dialog Sizes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "You can define size of the dialog by passing it as second argument to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "DialogService's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " method. Possible sizes are: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "sm,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "md,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, ". Default size is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "nui-example-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "nui-dialog-sizes-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Position on screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "When content is longer than available screen, dialog grows vertically by default.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "By adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "responsive-mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " class to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "dialog-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, ", dialog will fit the available screen and content will be scrollable inside the dialog. Also it's possible to remove padding from content in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "dialog-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "by adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "compact-mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "nui-example-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "nui-dialog-position-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Custom class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "It is possible to add custom class to the dialog window. In order to do it, you need to pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "windowClass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\noption into ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "DialogService open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " method as second argument. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Here's an example: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " It will allow you to apply custom styles to the dialog if needed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Example below shows dialog with custom width (500px). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " NOTE: custom class is applied to the dialog component which appended into the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " element.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " That's why this class must be specified as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " descendant class.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "nui-message", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Custom class styles can be overriden by default styles of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "nui-dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " component. In this case please make custom class selector more specific in your styles.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "nui-example-wrapper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "nui-dialog-custom-class-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Confirmation Dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " You can use Confirmation Dialog by calling the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " method of DialogService. Set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " input to a string value that will serve as the confirmation message. Optionally, you can customize the title and button labels using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "confirmText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "dismissText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "severity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " properties defined in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "IConfirmationDialogOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "nui-message", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " By default, when the confirmation dialog opens, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " button is focused. Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "setFocus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " input to set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Dismiss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " button focused on dialog open. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "nui-example-wrapper", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "nui-confirmation-dialog-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Keyboard Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " There is a field in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " that allows dialog to be interacted with via keyboard. Usage: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "nui-example-wrapper", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "nui-dialog-with-keyboard-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Static Backdrop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " By default, nui-dialog closes if user clicks outside the dialog. It is handy though to keep the dialog on no matter where user clicks. To achieve this behavior, it is recommended to use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "backdrop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " input of the component and set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "static");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " string to it.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "nui-example-wrapper", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "nui-dialog-with-static-backdrop-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Dialog Inside Overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " The implementation of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "nui-dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " is not currently based on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "nui-overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, ", which means there might be a need to display the dialog properly with overlay-based components, including nested ones. To make the dialog open inside the overlay container it is enough to passe in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "useOverlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " option when opening the dialog.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "nui-example-wrapper", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "nui-dialog-inside-overlay-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Dialog Closure Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "nui-dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " provides you with a number of ways to perform actions on it's closure. There are two built-in events ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "ESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "BACKDROP_CLICK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " which are triggered by the keyboard escape key and clicking the dialog's backdrop respectively. However, the user is able to create their own events, which they can pass as an argument into the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "dismiss(event)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, " method of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "dialogRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, ". To capture the events there are two types of EventEmitters of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "dialogRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "closed$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "beforeDismissed$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, ". As can be determined from their names, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "closed$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " event emitter will emit an event right after the dialog window is closed, while the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "beforeDismissed$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " emits right before the dialog is dismissed.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "nui-message", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "beforeDissmissed$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " is only emitted on dialog dismissal (or cancellation); it is not emitted on dialog submission. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "beforeDismissed$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "works best in conjunction with the special ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "beforeDismiss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " function, which can be configured as an optional configuration parameter of the dialog. This function, if it returns ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, ", will prevent the dialog from closing, until the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " method is called. All this lets you be very flexible in how exactly you want the dialog to be dismissed and when to perform certain actions.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " The example of the dialog's closure actions below shows how flexible a simple dialog can be in terms of performing certain actions at certain points of the dialog's lifecycle\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " For this example:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "BACKDROP click");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " - The logic specific to the backdrop click is performed, and the dialog stays open in this case. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "ESC key pressed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " - First, the logic specific to the ESC button click is performed. Then, general logic before the dialog dismissal is performed. And, finally, the logic to perform right after dialog closure is run. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "ACTION button pressed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " - The logic specific to the ACTION button click is performed. Then, the custom DONE event is sent, and finally the event is captured and custom logic is run in response. The dialog stays open in this case. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "CANCEL button pressed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " - The logic specific to the CANCEL button click is performed. Then, general logic before the dialog dismissal is performed. And, finally, the logic to perform right after dialog closure is run. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Header Close button pressed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, " - The logic specific to the header Close button click is performed. Then, general logic before the dialog dismissal is performed. And, finally, the logic to perform right after dialog closure is run. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "nui-example-wrapper", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "nui-dialog-actions-before-closure-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Dialog Open Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, " It's possible to perform some actions in your code when a dialog is opened by subscribing to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "DialogService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "'s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "afterOpened$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, " observable. It emits a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "NuiDialogRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, " that contains the component's data. This works for both a confirmation dialog and a dialog containing a consumer-defined component. The examples below trigger a toast on the top right of the page when each dialog is opened.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "nui-message", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, " To see the source code of the consumer-defined component used in this example, open the source expander of the second example panel in this section.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "nui-example-wrapper", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "nui-dialog-after-opened-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "The code of this example panel is related to the example above. It only shows code.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("DialogService.open(content, ", "{", " windowClass: \"myCustomClass\" ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", "{", " keyboard: false ", "}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
    } }, directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _simple_dialog_simple_dialog_example_component__WEBPACK_IMPORTED_MODULE_2__["SimpleDialogExampleComponent"], _component_as_content_component_as_content_example_component__WEBPACK_IMPORTED_MODULE_3__["ComponentAsContentExampleComponent"], _dialog_severity_dialog_severity_example_component__WEBPACK_IMPORTED_MODULE_4__["DialogSeverityExampleComponent"], _header_buttons_header_buttons_example_component__WEBPACK_IMPORTED_MODULE_5__["HeaderButtonsExampleComponent"], _dialog_sizes_dialog_sizes_example_component__WEBPACK_IMPORTED_MODULE_6__["DialogSizesExampleComponent"], _dialog_position_dialog_position_example_component__WEBPACK_IMPORTED_MODULE_7__["DialogPositionExampleComponent"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"], _dialog_custom_class_dialog_custom_class_example_component__WEBPACK_IMPORTED_MODULE_9__["DialogCustomClassExampleComponent"], _confirmation_dialog_confirmation_dialog_example_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialogExampleComponent"], _dialog_keyboard_dialog_with_keyboard_example_component__WEBPACK_IMPORTED_MODULE_11__["DialogWithKeyboardExampleComponent"], _dialog_static_backdrop_dialog_with_static_backdrop_example_component__WEBPACK_IMPORTED_MODULE_12__["DialogWithStaticBackdropExampleComponent"], _dialog_inside_overlay_dialog_inside_overlay_example_component__WEBPACK_IMPORTED_MODULE_13__["DialogInsideOverlayExampleComponent"], _dialog_actions_before_closure_dialog_actions_before_closure_example_component__WEBPACK_IMPORTED_MODULE_14__["DialogActionBeforeClosureExampleComponent"], _dialog_after_opened_dialog_after_opened_example_component__WEBPACK_IMPORTED_MODULE_15__["DialogAfterOpenedExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "2ll4":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-sizes/dialog-sizes.example.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject, TemplateRef } from \"@angular/core\";\nimport { DialogService, NuiDialogRef, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-dialog-sizes-example\",\n    templateUrl: \"./dialog-sizes.example.component.html\",\n})\nexport class DialogSizesExampleComponent {\n    private activeDialog: NuiDialogRef;\n\n    constructor(@Inject(DialogService) private dialogService: DialogService,\n                @Inject(ToastService) private toastService: ToastService) {\n    }\n\n    public open(content: TemplateRef<string>, size: any) {\n        this.activeDialog = this.dialogService.open(content, {size});\n    }\n\n    public onButtonClick(title: string) {\n        title === \"Action\" ? this.actionDone() : this.actionCanceled();\n        this.activeDialog.close();\n    }\n\n    private actionDone(): void {\n        this.toastService.success({message: $localize `Action Done!`, title: $localize `Event`});\n    }\n\n    private actionCanceled(): void {\n        this.toastService.info({message: $localize `Action Cancelled!`, title: $localize `Event`});\n    }\n}\n");

/***/ }),

/***/ "5Tta":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-custom-class/dialog-custom-class.example.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject, TemplateRef } from \"@angular/core\";\nimport { DialogService, NuiDialogRef, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-dialog-custom-class-example\",\n    templateUrl: \"./dialog-custom-class.example.component.html\",\n})\nexport class DialogCustomClassExampleComponent {\n    private activeDialog: NuiDialogRef;\n\n    constructor(@Inject(DialogService) private dialogService: DialogService,\n                @Inject(ToastService) private toastService: ToastService) {\n    }\n\n    public open(content: TemplateRef<string>) {\n        this.activeDialog = this.dialogService.open(content, {windowClass: \"demoDialogCustomClass\"});\n    }\n\n    public onButtonClick(title: string) {\n        title === \"Action\" ? this.actionDone() : this.actionCanceled();\n        this.activeDialog.close();\n    }\n\n    private actionDone(): void {\n        this.toastService.success({message: $localize `Action Done!`, title: $localize `Event`});\n    }\n\n    private actionCanceled(): void {\n        this.toastService.info({message: $localize `Action Cancelled!`, title: $localize `Event`});\n    }\n}\n");

/***/ }),

/***/ "6BiM":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-docs/dialog-docs.example.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    templateUrl: \"./dialog-docs.example.component.html\",\n})\nexport class DialogDocsComponent {}\n");

/***/ }),

/***/ "7Osd":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-after-opened/dialog-after-opened.example.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject, OnDestroy, OnInit } from \"@angular/core\";\nimport { DialogService, NuiDialogRef, ToastService } from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\nimport { takeUntil } from \"rxjs/operators\";\n\nimport { DialogContentExampleComponent } from \"../component-as-content/dialog-content.example.component\";\n\n@Component({\n    selector: \"nui-dialog-after-opened-example\",\n    templateUrl: \"./dialog-after-opened.example.component.html\",\n})\nexport class DialogAfterOpenedExampleComponent implements OnInit, OnDestroy {\n    constructor(@Inject(DialogService) private dialogService: DialogService,\n                @Inject(ToastService) private toastService: ToastService) {\n    }\n\n    public destroy$$: Subject<void> = new Subject<void>();\n\n    public ngOnInit() {\n        this.dialogService.afterOpened$.pipe(\n            takeUntil(this.destroy$$)\n        ).subscribe((dialog: NuiDialogRef) => {\n            if (dialog.componentInstance) {\n                this.toastService.info({ message: `${dialog.componentInstance.constructor.name} was opened` });\n            }\n        });\n    }\n\n    public ngOnDestroy() {\n        this.destroy$$.next();\n        this.destroy$$.complete();\n    }\n\n    public openConfirmationDialog() {\n        this.dialogService.confirm({\n            message: $localize`Are you sure you want to do it?`,\n            severity: \"info\",\n            setFocus: \"confirm\",\n            title: \"Confirmation dialog\",\n        });\n    }\n\n    public openWithComponent() {\n        const dialogRef = this.dialogService.open(DialogContentExampleComponent, { size: \"sm\" });\n        dialogRef.componentInstance.name = $localize `Dialog title`;\n    }\n}\n");

/***/ }),

/***/ "9ByO":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-severity/dialog-severity.example.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-close=\"close\">\n    <nui-dialog-header title=\"Dialog title\" i18n-title [severity]=\"severity\" (closed)=\"close()\"></nui-dialog-header>\n    <div class=\"dialog-body\">\n        <p i18n>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n            Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n            Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n            Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n            Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n        </p>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\"\n                [isEmpty]=\"false\"\n                (click)=\"onButtonClick('Cancel')\" i18n>\n            Cancel\n        </button>\n        <button nui-button type=\"button\"\n                displayStyle=\"primary\"\n                [isEmpty]=\"false\"\n                (click)=\"onButtonClick('Action')\" i18n>\n            Action\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n\n<button id=\"nui-demo-critical-dialog-btn\" nui-button type=\"button\" (click)=\"open(content, 'critical')\" i18n>Show Critical</button>\n<button id=\"nui-demo-warning-dialog-btn\" class=\"ml-4\" nui-button type=\"button\" (click)=\"open(content, 'warning')\" i18n>Show Warning</button>\n<button id=\"nui-demo-info-dialog-btn\" class=\"ml-4\" nui-button type=\"button\" (click)=\"open(content, 'info')\" i18n>Show Info</button>\n");

/***/ }),

/***/ "9hzO":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-test/dialog-test.example.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-simple-dialog-example></nui-simple-dialog-example> \n\n<nui-dialog-with-keyboard-example></nui-dialog-with-keyboard-example>\n\n<nui-dialog-severity-example></nui-dialog-severity-example>\n\n<nui-dialog-custom-class-example></nui-dialog-custom-class-example>\n\n<nui-dialog-with-static-backdrop-example></nui-dialog-with-static-backdrop-example>\n\n<nui-dialog-inside-overlay-example></nui-dialog-inside-overlay-example>\n\n<nui-dialog-inside-overlay-with-date-time-picker-example></nui-dialog-inside-overlay-with-date-time-picker-example>\n");

/***/ }),

/***/ "Auv2":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/component-as-content/component-as-content.example.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject } from \"@angular/core\";\nimport { DialogService } from \"@nova-ui/bits\";\n\nimport { DialogContentExampleComponent } from \"./dialog-content.example.component\";\n\n@Component({\n    selector: \"nui-component-as-content-example\",\n    templateUrl: \"./component-as-content.example.component.html\",\n})\nexport class ComponentAsContentExampleComponent {\n    constructor(@Inject(DialogService) private dialogService: DialogService) {}\n\n    public openWithComponent() {\n        const dialogRef = this.dialogService.open(DialogContentExampleComponent, { size: \"sm\" });\n        dialogRef.componentInstance.name = $localize `Dialog title`;\n    }\n}\n");

/***/ }),

/***/ "BV87":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-zindex-test/dialog-zindex-test.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Overlay, OverlayRef} from \"@angular/cdk/overlay\";\nimport {TemplatePortal} from \"@angular/cdk/portal\";\nimport {Component, OnInit, TemplateRef, ViewContainerRef, ViewEncapsulation} from \"@angular/core\";\nimport {DialogService, ITimeframe, NuiDialogRef, ToastService} from \"@nova-ui/bits\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-dialog-zindex--test\",\n    templateUrl: \"./dialog-zindex-test.component.html\",\n    styleUrls: [\"./dialog-zindex-test.component.less\"],\n    encapsulation: ViewEncapsulation.None,\n})\nexport class DialogZIndexTestComponent implements OnInit {\n    public busy: boolean = false;\n    public appendToBody: boolean = false;\n\n    public timeFrame: ITimeframe;\n\n    public dt = moment(\"2018-02-02\");\n    public items = [\"Long description item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\", \"Item 6\"];\n    public longTextTooltip = `\n    which should appear on top of any other components (popup, popover, menu,etc.) even if it's displayed after the popover has been displayed.\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n    Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n    Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n    Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n    Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n    `;\n\n    private activeDialogs: NuiDialogRef[] = [];\n    private overlayRef: OverlayRef;\n    private baseDate = moment([2018, 5, 1, 15, 0, 0]);\n\n    constructor(private dialogService: DialogService,\n                private toastService: ToastService,\n                private overlay: Overlay,\n                private viewContainerRef: ViewContainerRef\n    ) {}\n\n    public ngOnInit(): void {\n        this.timeFrame = {\n            startDatetime: this.baseDate.clone().subtract(1, \"weeks\"),\n            endDatetime: this.baseDate.clone(),\n        };\n    }\n\n    public toggleBusy() {\n        this.busy = !this.busy;\n    }\n\n    public toggleAppendToBody() {\n        this.appendToBody = !this.appendToBody;\n    }\n\n    public openOverlay(templateRef: TemplateRef<string>, width: string, height: string) {\n        const positionStrategy = this.overlay.position().global()\n            .centerHorizontally()\n            .centerVertically();\n\n        this.overlayRef = this.overlay.create({\n            positionStrategy,\n            hasBackdrop: true,\n            panelClass: [\"main-overlay-panel\", \"d-flex\", \"flex-column\"],\n            width: width,\n            height: height,\n            scrollStrategy: this.overlay.scrollStrategies.block(),\n\n        });\n        const portal = new TemplatePortal(templateRef, this.viewContainerRef);\n        this.overlayRef.attach(portal);\n    }\n\n    public closeOverlay() {\n        this.overlayRef.detach();\n    }\n\n    public openInnerDialog(templateRef: TemplateRef<string>) {\n        this.activeDialogs.push(this.dialogService.open(templateRef, {windowClass: \"inner-dialog\"}));\n    }\n\n    public closeDialog() {\n        this.activeDialogs.pop()?.close();\n    }\n\n    public showToast(): void {\n        this.toastService.success({message: $localize`Sample toast displayed!`, title: $localize`Event`});\n    }\n}\n");

/***/ }),

/***/ "DHxQ":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/index.ts ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./dialog-docs/dialog-docs.example.component\";\nexport * from \"./simple-dialog/simple-dialog.example.component\";\nexport * from \"./component-as-content/component-as-content.example.component\";\nexport * from \"./component-as-content/dialog-content.example.component\";\nexport * from \"./dialog-severity/dialog-severity.example.component\";\nexport * from \"./dialog-sizes/dialog-sizes.example.component\";\nexport * from \"./dialog-position/dialog-position.example.component\";\nexport * from \"./header-buttons/header-buttons.example.component\";\nexport * from \"./dialog-custom-class/dialog-custom-class.example.component\";\nexport * from \"./confirmation-dialog/confirmation-dialog.example.component\";\nexport * from \"./dialog-visual-test/dialog-visual-test.component\";\nexport * from \"./dialog-keyboard/dialog-with-keyboard.example.component\";\nexport * from \"./dialog-static-backdrop/dialog-with-static-backdrop.example.component\";\nexport * from \"./dialog-inside-overlay/dialog-inside-overlay.example.component\";\nexport * from \"./dialog-actions-before-closure/dialog-actions-before-closure.example.component\";\nexport * from \"./dialog-zindex-test/dialog-zindex-test.component\";\nexport * from \"./dialog-after-opened/dialog-after-opened.example.component\";\nexport * from \"./dialog-actions-before-closure/dialog-actions-before-closure.example.component\";\nexport * from \"./dialog-test/dialog-test.example.component\";\nexport * from \"./dialog-inside-overlay-with-date-time-picker/dialog-inside-overlay-with-date-time-picker.example.component\";\n");

/***/ }),

/***/ "DiX9":
/*!**************************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/component-as-content/dialog-content.example.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DialogContentExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentExampleComponent", function() { return DialogContentExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");





class DialogContentExampleComponent {
    constructor(activeDialog, toastService) {
        this.activeDialog = activeDialog;
        this.toastService = toastService;
    }
    onButtonClick(title) {
        title === "Action" ? this.actionDone() : this.actionCanceled();
        this.activeDialog.close();
    }
    actionDone() {
        this.toastService.success({ message: $localize `Action Done!`, title: $localize `Event` });
    }
    actionCanceled() {
        this.toastService.info({ message: $localize `Action Cancelled!`, title: $localize `Event` });
    }
}
DialogContentExampleComponent.ɵfac = function DialogContentExampleComponent_Factory(t) { return new (t || DialogContentExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["NuiActiveDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
DialogContentExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogContentExampleComponent, selectors: [["nui-dialog-content-example"]], inputs: { name: "name" }, decls: 9, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6900186018354325445$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_COMPONENT_AS_CONTENT_DIALOG_CONTENT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
        i18n_0 = MSG_EXTERNAL_6900186018354325445$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_COMPONENT_AS_CONTENT_DIALOG_CONTENT_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟a05ea014ccc11f2468181df0230bbed04fee1819␟6900186018354325445: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_291367070349484556$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_COMPONENT_AS_CONTENT_DIALOG_CONTENT_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Cancel ");
        i18n_2 = MSG_EXTERNAL_291367070349484556$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_COMPONENT_AS_CONTENT_DIALOG_CONTENT_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟36aeaa3aa0bb417618e3ef872f34921199bedbf7␟291367070349484556: Cancel `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3651875409722336778$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_COMPONENT_AS_CONTENT_DIALOG_CONTENT_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" Action ");
        i18n_4 = MSG_EXTERNAL_3651875409722336778$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_COMPONENT_AS_CONTENT_DIALOG_CONTENT_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟c01eaf0a097eff65664aea5e26d8850cc5aaab96␟3651875409722336778: Action `;
    } return [[3, "title", "closed"], [1, "dialog-body"], i18n_0, ["nui-button", "", "type", "button", 3, "isEmpty", "click"], i18n_2, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "isEmpty", "click"], i18n_4]; }, template: function DialogContentExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-dialog-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function DialogContentExampleComponent_Template_nui_dialog_header_closed_0_listener() { return ctx.activeDialog.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-dialog-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogContentExampleComponent_Template_button_click_5_listener() { return ctx.onButtonClick("Cancel"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogContentExampleComponent_Template_button_click_7_listener() { return ctx.onButtonClick("Action"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isEmpty", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isEmpty", false);
    } }, directives: [_src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_2__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_3__["DialogFooterComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]], encapsulation: 2 });


/***/ }),

/***/ "EGah":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-severity/dialog-severity.example.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject, TemplateRef } from \"@angular/core\";\nimport { DialogService, NuiDialogRef, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-dialog-severity-example\",\n    templateUrl: \"./dialog-severity.example.component.html\",\n})\nexport class DialogSeverityExampleComponent {\n    public severity: string;\n    private activeDialog: NuiDialogRef;\n\n    constructor(@Inject(DialogService) private dialogService: DialogService,\n                @Inject(ToastService) private toastService: ToastService) {\n    }\n\n    public open(content: TemplateRef<string>, severity = \"\") {\n        this.severity = severity;\n        this.activeDialog = this.dialogService.open(content, {size: \"sm\"});\n    }\n\n    public onButtonClick(title: string) {\n        title === \"Action\" ? this.actionDone() : this.actionCanceled();\n        this.activeDialog.close();\n    }\n\n    private actionDone(): void {\n        this.toastService.success({message: $localize `Action Done!`, title: $localize `Event`});\n    }\n\n    private actionCanceled(): void {\n        this.toastService.info({message: $localize `Action Cancelled!`, title: $localize `Event`});\n    }\n}\n");

/***/ }),

/***/ "EKUP":
/*!**************************************************!*\
  !*** ./demo/src/components/demo/dialog/index.ts ***!
  \**************************************************/
/*! exports provided: DialogDocsComponent, SimpleDialogExampleComponent, ComponentAsContentExampleComponent, DialogContentExampleComponent, DialogSeverityExampleComponent, DialogSizesExampleComponent, DialogPositionExampleComponent, HeaderButtonsExampleComponent, DialogCustomClassExampleComponent, ConfirmationDialogExampleComponent, DialogVisualTestComponent, DialogWithKeyboardExampleComponent, DialogWithStaticBackdropExampleComponent, DialogInsideOverlayExampleComponent, DialogActionBeforeClosureExampleComponent, DialogZIndexTestComponent, DialogAfterOpenedExampleComponent, DialogTestComponent, DialogInsideOverlayWithDateTimePickerExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dialog_docs_dialog_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog-docs/dialog-docs.example.component */ "2bQm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogDocsComponent", function() { return _dialog_docs_dialog_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["DialogDocsComponent"]; });

/* harmony import */ var _simple_dialog_simple_dialog_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-dialog/simple-dialog.example.component */ "b7fi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleDialogExampleComponent", function() { return _simple_dialog_simple_dialog_example_component__WEBPACK_IMPORTED_MODULE_1__["SimpleDialogExampleComponent"]; });

/* harmony import */ var _component_as_content_component_as_content_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-as-content/component-as-content.example.component */ "UJKN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentAsContentExampleComponent", function() { return _component_as_content_component_as_content_example_component__WEBPACK_IMPORTED_MODULE_2__["ComponentAsContentExampleComponent"]; });

/* harmony import */ var _component_as_content_dialog_content_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-as-content/dialog-content.example.component */ "DiX9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogContentExampleComponent", function() { return _component_as_content_dialog_content_example_component__WEBPACK_IMPORTED_MODULE_3__["DialogContentExampleComponent"]; });

/* harmony import */ var _dialog_severity_dialog_severity_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-severity/dialog-severity.example.component */ "JOKZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogSeverityExampleComponent", function() { return _dialog_severity_dialog_severity_example_component__WEBPACK_IMPORTED_MODULE_4__["DialogSeverityExampleComponent"]; });

/* harmony import */ var _dialog_sizes_dialog_sizes_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-sizes/dialog-sizes.example.component */ "WQXM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogSizesExampleComponent", function() { return _dialog_sizes_dialog_sizes_example_component__WEBPACK_IMPORTED_MODULE_5__["DialogSizesExampleComponent"]; });

/* harmony import */ var _dialog_position_dialog_position_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-position/dialog-position.example.component */ "N9CE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogPositionExampleComponent", function() { return _dialog_position_dialog_position_example_component__WEBPACK_IMPORTED_MODULE_6__["DialogPositionExampleComponent"]; });

/* harmony import */ var _header_buttons_header_buttons_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header-buttons/header-buttons.example.component */ "GXFr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderButtonsExampleComponent", function() { return _header_buttons_header_buttons_example_component__WEBPACK_IMPORTED_MODULE_7__["HeaderButtonsExampleComponent"]; });

/* harmony import */ var _dialog_custom_class_dialog_custom_class_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog-custom-class/dialog-custom-class.example.component */ "/3M5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogCustomClassExampleComponent", function() { return _dialog_custom_class_dialog_custom_class_example_component__WEBPACK_IMPORTED_MODULE_8__["DialogCustomClassExampleComponent"]; });

/* harmony import */ var _confirmation_dialog_confirmation_dialog_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.example.component */ "fcXS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogExampleComponent", function() { return _confirmation_dialog_confirmation_dialog_example_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationDialogExampleComponent"]; });

/* harmony import */ var _dialog_visual_test_dialog_visual_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog-visual-test/dialog-visual-test.component */ "XlTl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogVisualTestComponent", function() { return _dialog_visual_test_dialog_visual_test_component__WEBPACK_IMPORTED_MODULE_10__["DialogVisualTestComponent"]; });

/* harmony import */ var _dialog_keyboard_dialog_with_keyboard_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog-keyboard/dialog-with-keyboard.example.component */ "HqCK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogWithKeyboardExampleComponent", function() { return _dialog_keyboard_dialog_with_keyboard_example_component__WEBPACK_IMPORTED_MODULE_11__["DialogWithKeyboardExampleComponent"]; });

/* harmony import */ var _dialog_static_backdrop_dialog_with_static_backdrop_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialog-static-backdrop/dialog-with-static-backdrop.example.component */ "QPNM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogWithStaticBackdropExampleComponent", function() { return _dialog_static_backdrop_dialog_with_static_backdrop_example_component__WEBPACK_IMPORTED_MODULE_12__["DialogWithStaticBackdropExampleComponent"]; });

/* harmony import */ var _dialog_inside_overlay_dialog_inside_overlay_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialog-inside-overlay/dialog-inside-overlay.example.component */ "+Rq8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogInsideOverlayExampleComponent", function() { return _dialog_inside_overlay_dialog_inside_overlay_example_component__WEBPACK_IMPORTED_MODULE_13__["DialogInsideOverlayExampleComponent"]; });

/* harmony import */ var _dialog_actions_before_closure_dialog_actions_before_closure_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog-actions-before-closure/dialog-actions-before-closure.example.component */ "+fpV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogActionBeforeClosureExampleComponent", function() { return _dialog_actions_before_closure_dialog_actions_before_closure_example_component__WEBPACK_IMPORTED_MODULE_14__["DialogActionBeforeClosureExampleComponent"]; });

/* harmony import */ var _dialog_zindex_test_dialog_zindex_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialog-zindex-test/dialog-zindex-test.component */ "TXQN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogZIndexTestComponent", function() { return _dialog_zindex_test_dialog_zindex_test_component__WEBPACK_IMPORTED_MODULE_15__["DialogZIndexTestComponent"]; });

/* harmony import */ var _dialog_after_opened_dialog_after_opened_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialog-after-opened/dialog-after-opened.example.component */ "cRSG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogAfterOpenedExampleComponent", function() { return _dialog_after_opened_dialog_after_opened_example_component__WEBPACK_IMPORTED_MODULE_16__["DialogAfterOpenedExampleComponent"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _dialog_test_dialog_test_example_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialog-test/dialog-test.example.component */ "w9bX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogTestComponent", function() { return _dialog_test_dialog_test_example_component__WEBPACK_IMPORTED_MODULE_17__["DialogTestComponent"]; });

/* harmony import */ var _dialog_inside_overlay_with_date_time_picker_dialog_inside_overlay_with_date_time_picker_example_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialog-inside-overlay-with-date-time-picker/dialog-inside-overlay-with-date-time-picker.example.component */ "ed45");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogInsideOverlayWithDateTimePickerExampleComponent", function() { return _dialog_inside_overlay_with_date_time_picker_dialog_inside_overlay_with_date_time_picker_example_component__WEBPACK_IMPORTED_MODULE_18__["DialogInsideOverlayWithDateTimePickerExampleComponent"]; });























/***/ }),

/***/ "FEGv":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-actions-before-closure/dialog-actions-before-closure.example.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-close=\"close\" let-dismiss=\"dismiss\">\n    <nui-dialog-header title=\"Dialog title\" i18n-title (closed)=\"closeFromHeader()\"></nui-dialog-header>\n    <div class=\"dialog-body\">\n        <p i18n>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n            Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n            Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n            Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n            Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n        </p>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\" (click)=\"actionCanceled()\" i18n>\n            Cancel\n        </button>\n        <button nui-button type=\"button\" displayStyle=\"primary\" (click)=\"actionDone()\" i18n>\n            Action\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n\n<button id=\"nui-demo-default-dialog-btn\" nui-button type=\"button\" (click)=\"open(content)\" i18n>Click me!</button>\n");

/***/ }),

/***/ "GEiY":
/*!*********************************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./component-as-content/component-as-content.example.component.html": "l1BV",
	"./component-as-content/component-as-content.example.component.ts": "Auv2",
	"./component-as-content/dialog-content.example.component.html": "28cg",
	"./component-as-content/dialog-content.example.component.ts": "jj5D",
	"./confirmation-dialog/confirmation-dialog.example.component.html": "L5Ws",
	"./confirmation-dialog/confirmation-dialog.example.component.ts": "Zep8",
	"./dialog-actions-before-closure/dialog-actions-before-closure.example.component.html": "FEGv",
	"./dialog-actions-before-closure/dialog-actions-before-closure.example.component.ts": "Xe06",
	"./dialog-after-opened/dialog-after-opened.example.component.html": "h9xv",
	"./dialog-after-opened/dialog-after-opened.example.component.ts": "7Osd",
	"./dialog-custom-class/dialog-custom-class.example.component.html": "QIXJ",
	"./dialog-custom-class/dialog-custom-class.example.component.ts": "5Tta",
	"./dialog-docs/dialog-docs.example.component.html": "e0nl",
	"./dialog-docs/dialog-docs.example.component.ts": "6BiM",
	"./dialog-inside-overlay-with-date-time-picker/dialog-inside-overlay-with-date-time-picker.example.component.html": "xeBr",
	"./dialog-inside-overlay-with-date-time-picker/dialog-inside-overlay-with-date-time-picker.example.component.ts": "o0H5",
	"./dialog-inside-overlay/dialog-inside-overlay.example.component.html": "ggfY",
	"./dialog-inside-overlay/dialog-inside-overlay.example.component.ts": "N0bp",
	"./dialog-keyboard/dialog-with-keyboard.example.component.html": "yajv",
	"./dialog-keyboard/dialog-with-keyboard.example.component.ts": "ataZ",
	"./dialog-position/dialog-position.example.component.html": "bfkP",
	"./dialog-position/dialog-position.example.component.ts": "Ttcr",
	"./dialog-severity/dialog-severity.example.component.html": "9ByO",
	"./dialog-severity/dialog-severity.example.component.ts": "EGah",
	"./dialog-sizes/dialog-sizes.example.component.html": "q8+I",
	"./dialog-sizes/dialog-sizes.example.component.ts": "2ll4",
	"./dialog-static-backdrop/dialog-with-static-backdrop.example.component.html": "Lstl",
	"./dialog-static-backdrop/dialog-with-static-backdrop.example.component.ts": "lbYS",
	"./dialog-test/dialog-test.example.component.html": "9hzO",
	"./dialog-test/dialog-test.example.component.ts": "zLy7",
	"./dialog-visual-test/dialog-visual-test.component.html": "LfRD",
	"./dialog-visual-test/dialog-visual-test.component.ts": "W/vu",
	"./dialog-zindex-test/dialog-zindex-test.component.html": "fERX",
	"./dialog-zindex-test/dialog-zindex-test.component.less": "qmXi",
	"./dialog-zindex-test/dialog-zindex-test.component.ts": "BV87",
	"./dialog.module.ts": "mX2p",
	"./header-buttons/header-buttons.example.component.html": "Pj5b",
	"./header-buttons/header-buttons.example.component.ts": "zhgJ",
	"./index.ts": "DHxQ",
	"./simple-dialog/simple-dialog.example.component.html": "PNRQ",
	"./simple-dialog/simple-dialog.example.component.ts": "WRkj"
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
webpackContext.id = "GEiY";

/***/ }),

/***/ "GXFr":
/*!********************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/header-buttons/header-buttons.example.component.ts ***!
  \********************************************************************************************/
/*! exports provided: HeaderButtonsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderButtonsExampleComponent", function() { return HeaderButtonsExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");







function HeaderButtonsExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function HeaderButtonsExampleComponent_ng_template_0_Template_nui_dialog_header_closed_0_listener() { const close_r2 = ctx.close; return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderButtonsExampleComponent_ng_template_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onButtonClick("Cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderButtonsExampleComponent_ng_template_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onButtonClick("Action"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderButtonsExampleComponent {
    constructor(dialogService, toastService) {
        this.dialogService = dialogService;
        this.toastService = toastService;
    }
    open(content) {
        this.activeDialog = this.dialogService.open(content, { size: "sm" });
    }
    onButtonClick(title) {
        title === "Action" ? this.actionDone() : this.actionCanceled();
        this.activeDialog.close();
    }
    actionDone() {
        this.toastService.success({
            message: $localize `Action Done!`,
            title: $localize `Event`,
        });
    }
    actionCanceled() {
        this.toastService.info({
            message: $localize `Action Cancelled!`,
            title: $localize `Event`,
        });
    }
}
HeaderButtonsExampleComponent.ɵfac = function HeaderButtonsExampleComponent_Factory(t) { return new (t || HeaderButtonsExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
HeaderButtonsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderButtonsExampleComponent, selectors: [["nui-header-buttons-example"]], decls: 4, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_117068237894470695$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_HEADER_BUTTONS_HEADER_BUTTONS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("More actions");
        i18n_0 = MSG_EXTERNAL_117068237894470695$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_HEADER_BUTTONS_HEADER_BUTTONS_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟421896c15898320005cd994b38334d8f78458b8f␟117068237894470695:More actions`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_HEADER_BUTTONS_HEADER_BUTTONS_EXAMPLE_COMPONENT_TS__3 = goog.getMsg("Dialog title");
        i18n_2 = MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_HEADER_BUTTONS_HEADER_BUTTONS_EXAMPLE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟eeb379308b8767b98aa0d27308f4f8dd6b46e559␟5892089246202495025:Dialog title`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_HEADER_BUTTONS_HEADER_BUTTONS_EXAMPLE_COMPONENT_TS__5 = goog.getMsg(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
        i18n_4 = MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_HEADER_BUTTONS_HEADER_BUTTONS_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟f62f9e2e728dea80e19b1e7a6f61424d55bab5ea␟7188163738299238705: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_HEADER_BUTTONS_HEADER_BUTTONS_EXAMPLE_COMPONENT_TS__7 = goog.getMsg(" Cancel ");
        i18n_6 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_HEADER_BUTTONS_HEADER_BUTTONS_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟bf844a41a29961b6dacc48a20eaf97bef0cf5013␟7452095619502551190: Cancel `;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_HEADER_BUTTONS_HEADER_BUTTONS_EXAMPLE_COMPONENT_TS__9 = goog.getMsg(" Action ");
        i18n_8 = MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_HEADER_BUTTONS_HEADER_BUTTONS_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟01b5385da84ee4b609f8273d7ae56600c3fb3cbe␟4946554391652567902: Action `;
    } return [["headerButtonsContent", ""], ["id", "nui-demo-custom-actions", "nui-button", "", "type", "button", 3, "click"], i18n_0, ["title", i18n_2, 3, "closed"], ["nui-button", "", "type", "button", "displayStyle", "action", "icon", "fullscreen"], ["nui-button", "", "type", "button", "displayStyle", "action", "icon", "menu"], [1, "dialog-body"], i18n_4, ["nui-button", "", "type", "button", 3, "click"], i18n_6, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_8]; }, template: function HeaderButtonsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderButtonsExampleComponent_ng_template_0_Template, 11, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderButtonsExampleComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_4__["DialogFooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "HqCK":
/*!***************************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/dialog-keyboard/dialog-with-keyboard.example.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DialogWithKeyboardExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogWithKeyboardExampleComponent", function() { return DialogWithKeyboardExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");







function DialogWithKeyboardExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DialogWithKeyboardExampleComponent_ng_template_0_Template_nui_dialog_header_closed_0_listener() { const close_r2 = ctx.close; return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogWithKeyboardExampleComponent_ng_template_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const close_r2 = ctx.close; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r5.actionCanceled(); return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogWithKeyboardExampleComponent_ng_template_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const close_r2 = ctx.close; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r7.actionDone(); return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DialogWithKeyboardExampleComponent {
    constructor(dialogService, toastService) {
        this.dialogService = dialogService;
        this.toastService = toastService;
    }
    openWith(content) {
        this.activeDialog = this.dialogService.open(content, { size: "sm" });
    }
    openWithout(content) {
        this.activeDialog = this.dialogService.open(content, { size: "sm", keyboard: false });
    }
    actionDone() {
        this.toastService.success({ message: $localize `Action Done!`, title: $localize `Event` });
        this.activeDialog.close();
    }
    actionCanceled() {
        this.toastService.info({ message: $localize `Action Cancelled!`, title: $localize `Event` });
        this.activeDialog.close();
    }
}
DialogWithKeyboardExampleComponent.ɵfac = function DialogWithKeyboardExampleComponent_Factory(t) { return new (t || DialogWithKeyboardExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
DialogWithKeyboardExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogWithKeyboardExampleComponent, selectors: [["nui-dialog-with-keyboard-example"]], decls: 6, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2178043089026509688$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_KEYBOARD_DIALOG_WITH_KEYBOARD_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Close me with ESC button");
        i18n_0 = MSG_EXTERNAL_2178043089026509688$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_KEYBOARD_DIALOG_WITH_KEYBOARD_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟f603fbc94550952ff8270858e84857571b5d083a␟2178043089026509688:Close me with ESC button`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2838117655883808293$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_KEYBOARD_DIALOG_WITH_KEYBOARD_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("ESC button won't close me");
        i18n_2 = MSG_EXTERNAL_2838117655883808293$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_KEYBOARD_DIALOG_WITH_KEYBOARD_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟cf0f2ca5e5b2ab7e32774004856def17453cc487␟2838117655883808293:ESC button won't close me`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_KEYBOARD_DIALOG_WITH_KEYBOARD_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("Dialog title");
        i18n_4 = MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_KEYBOARD_DIALOG_WITH_KEYBOARD_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟eeb379308b8767b98aa0d27308f4f8dd6b46e559␟5892089246202495025:Dialog title`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_KEYBOARD_DIALOG_WITH_KEYBOARD_EXAMPLE_COMPONENT_TS__7 = goog.getMsg(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
        i18n_6 = MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_KEYBOARD_DIALOG_WITH_KEYBOARD_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟f62f9e2e728dea80e19b1e7a6f61424d55bab5ea␟7188163738299238705: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. `;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_KEYBOARD_DIALOG_WITH_KEYBOARD_EXAMPLE_COMPONENT_TS__9 = goog.getMsg(" Cancel ");
        i18n_8 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_KEYBOARD_DIALOG_WITH_KEYBOARD_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟bf844a41a29961b6dacc48a20eaf97bef0cf5013␟7452095619502551190: Cancel `;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_KEYBOARD_DIALOG_WITH_KEYBOARD_EXAMPLE_COMPONENT_TS__11 = goog.getMsg(" Action ");
        i18n_10 = MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_KEYBOARD_DIALOG_WITH_KEYBOARD_EXAMPLE_COMPONENT_TS__11;
    }
    else {
        i18n_10 = $localize `:␟01b5385da84ee4b609f8273d7ae56600c3fb3cbe␟4946554391652567902: Action `;
    } return [["content", ""], ["id", "nui-demo-with-keyboard-dialog-btn", "nui-button", "", "type", "button", 3, "click"], i18n_0, ["id", "nui-demo-without-keyboard-dialog-btn", "nui-button", "", "type", "button", 1, "ml-4", 3, "click"], i18n_2, ["title", i18n_4, 3, "closed"], [1, "dialog-body"], i18n_6, ["nui-button", "", "type", "button", 3, "click"], i18n_8, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_10]; }, template: function DialogWithKeyboardExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogWithKeyboardExampleComponent_ng_template_0_Template, 9, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogWithKeyboardExampleComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.openWith(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogWithKeyboardExampleComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.openWithout(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_4__["DialogFooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "JOKZ":
/*!**********************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/dialog-severity/dialog-severity.example.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DialogSeverityExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSeverityExampleComponent", function() { return DialogSeverityExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");







function DialogSeverityExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DialogSeverityExampleComponent_ng_template_0_Template_nui_dialog_header_closed_0_listener() { const close_r2 = ctx.close; return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogSeverityExampleComponent_ng_template_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onButtonClick("Cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogSeverityExampleComponent_ng_template_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onButtonClick("Action"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("severity", ctx_r1.severity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isEmpty", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isEmpty", false);
} }
class DialogSeverityExampleComponent {
    constructor(dialogService, toastService) {
        this.dialogService = dialogService;
        this.toastService = toastService;
    }
    open(content, severity = "") {
        this.severity = severity;
        this.activeDialog = this.dialogService.open(content, { size: "sm" });
    }
    onButtonClick(title) {
        title === "Action" ? this.actionDone() : this.actionCanceled();
        this.activeDialog.close();
    }
    actionDone() {
        this.toastService.success({ message: $localize `Action Done!`, title: $localize `Event` });
    }
    actionCanceled() {
        this.toastService.info({ message: $localize `Action Cancelled!`, title: $localize `Event` });
    }
}
DialogSeverityExampleComponent.ɵfac = function DialogSeverityExampleComponent_Factory(t) { return new (t || DialogSeverityExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
DialogSeverityExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogSeverityExampleComponent, selectors: [["nui-dialog-severity-example"]], decls: 8, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6838967965966268985$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SEVERITY_DIALOG_SEVERITY_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Show Critical");
        i18n_0 = MSG_EXTERNAL_6838967965966268985$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SEVERITY_DIALOG_SEVERITY_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟c9ce2b5395924a2c0f9fb6a7199462eac6509381␟6838967965966268985:Show Critical`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6733834865283779912$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SEVERITY_DIALOG_SEVERITY_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Show Warning");
        i18n_2 = MSG_EXTERNAL_6733834865283779912$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SEVERITY_DIALOG_SEVERITY_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟333ae2cc5c54fd41778d40fd05abca37b67d0e88␟6733834865283779912:Show Warning`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4529234074694187518$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SEVERITY_DIALOG_SEVERITY_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Show Info");
        i18n_4 = MSG_EXTERNAL_4529234074694187518$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SEVERITY_DIALOG_SEVERITY_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟b9f3e2b977451493f187b380f735583d7f7ffb6d␟4529234074694187518:Show Info`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SEVERITY_DIALOG_SEVERITY_EXAMPLE_COMPONENT_TS__7 = goog.getMsg("Dialog title");
        i18n_6 = MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SEVERITY_DIALOG_SEVERITY_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟eeb379308b8767b98aa0d27308f4f8dd6b46e559␟5892089246202495025:Dialog title`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SEVERITY_DIALOG_SEVERITY_EXAMPLE_COMPONENT_TS__9 = goog.getMsg(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
        i18n_8 = MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SEVERITY_DIALOG_SEVERITY_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟f62f9e2e728dea80e19b1e7a6f61424d55bab5ea␟7188163738299238705: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. `;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SEVERITY_DIALOG_SEVERITY_EXAMPLE_COMPONENT_TS__11 = goog.getMsg(" Cancel ");
        i18n_10 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SEVERITY_DIALOG_SEVERITY_EXAMPLE_COMPONENT_TS__11;
    }
    else {
        i18n_10 = $localize `:␟bf844a41a29961b6dacc48a20eaf97bef0cf5013␟7452095619502551190: Cancel `;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SEVERITY_DIALOG_SEVERITY_EXAMPLE_COMPONENT_TS__13 = goog.getMsg(" Action ");
        i18n_12 = MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SEVERITY_DIALOG_SEVERITY_EXAMPLE_COMPONENT_TS__13;
    }
    else {
        i18n_12 = $localize `:␟01b5385da84ee4b609f8273d7ae56600c3fb3cbe␟4946554391652567902: Action `;
    } return [["content", ""], ["id", "nui-demo-critical-dialog-btn", "nui-button", "", "type", "button", 3, "click"], i18n_0, ["id", "nui-demo-warning-dialog-btn", "nui-button", "", "type", "button", 1, "ml-4", 3, "click"], i18n_2, ["id", "nui-demo-info-dialog-btn", "nui-button", "", "type", "button", 1, "ml-4", 3, "click"], i18n_4, ["title", i18n_6, 3, "severity", "closed"], [1, "dialog-body"], i18n_8, ["nui-button", "", "type", "button", 3, "isEmpty", "click"], i18n_10, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "isEmpty", "click"], i18n_12]; }, template: function DialogSeverityExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogSeverityExampleComponent_ng_template_0_Template, 9, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogSeverityExampleComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.open(_r0, "critical"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogSeverityExampleComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.open(_r0, "warning"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogSeverityExampleComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.open(_r0, "info"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_4__["DialogFooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "L5Ws":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/confirmation-dialog/confirmation-dialog.example.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button id=\"nui-demo-confirmation-dialog-btn-info\" nui-button type=\"button\" (click)=\"openInfo()\" i18n>Show Info Confirmation</button>\n<button id=\"nui-demo-confirmation-dialog-btn-warning\" class=\"ml-4\" nui-button type=\"button\" (click)=\"openWarning()\" i18n>Show Warning Confirmation</button>\n<button id=\"nui-demo-confirmation-dialog-btn-critical\" class=\"ml-4\" nui-button type=\"button\" (click)=\"openCritical()\" i18n>Show Critical Confirmation</button>\n");

/***/ }),

/***/ "LfRD":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-visual-test/dialog-visual-test.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div>\n        <ng-template #content let-close=\"close\">\n            <nui-dialog-header title=\"Dialog title\"\n                               [severity]=\"severity\"\n                               (closed)=\"close()\">\n            </nui-dialog-header>\n            <div class=\"dialog-body\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n                    Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n                    Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n                    Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n                    Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n                    Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n                </p>\n            </div>\n            <nui-dialog-footer>\n                <button nui-button type=\"button\"\n                        [isEmpty]=\"false\"\n                        (click)=\"onButtonClick('Cancel')\">\n                    Cancel\n                </button>\n                <button nui-button type=\"button\"\n                        displayStyle=\"primary\"\n                        [isEmpty]=\"false\"\n                        (click)=\"onButtonClick('Action')\">\n                    Action\n                </button>\n            </nui-dialog-footer>\n        </ng-template>\n\n        <div>\n            <h3>Basic Dialog</h3>\n            <button id=\"nui-visual-test-default-dialog-btn\" (click)=\"open(content)\">\n                Click me!\n            </button>\n            <hr/>\n        </div>\n\n        <div>\n            <h3>Dialogs with Different Severity</h3>\n            <button id=\"nui-visual-test-critical-dialog-btn\" (click)=\"open(content, 'critical')\">\n                Show Critical\n            </button>\n            <button id=\"nui-visual-test-warning-dialog-btn\" (click)=\"open(content, 'warning')\">\n                Show Warning\n            </button>\n            <button id=\"nui-visual-test-info-dialog-btn\" (click)=\"open(content, 'info')\">\n                Show Info\n            </button>\n            <hr/>\n        </div>\n\n        <div>\n            <h3>Dialogs with Different Sizes</h3>\n            <button id=\"nui-visual-test-small-dialog-btn\" (click)=\"openSizes(content, 'sm')\">\n                Show Small Dialog\n            </button>\n            <button id=\"nui-visual-test-medium-dialog-btn\" (click)=\"openSizes(content, 'md')\">\n                Show Medium Dialog\n            </button>\n            <button id=\"nui-visual-test-large-dialog-btn\" (click)=\"openSizes(content, 'lg')\">\n                Show Large Dialog\n            </button>\n            <hr/>\n        </div>\n    </div>\n\n    <div>\n        <ng-template  #headerButtonsContent let-close=\"close\">\n            <nui-dialog-header title=\"Dialog title\" (closed)=\"close()\">\n                <button nui-button type=\"button\" displayStyle=\"action\" icon=\"fullscreen\"></button>\n                <button nui-button type=\"button\" displayStyle=\"action\" icon=\"menu\"></button>\n            </nui-dialog-header>\n            <div class=\"dialog-body\">\n                <p>\n                    <nui-select id=\"nui-visual-basic-select\"\n                                [itemsSource]=\"dataset.items\"\n                                placeholder=\"Select item\"></nui-select>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n                    Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n                    Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n                    Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n                    Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n                    Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n                </p>\n            </div>\n            <nui-dialog-footer>\n                <button nui-button type=\"button\"\n                        (click)=\"onButtonClick('Cancel')\">\n                    Cancel\n                </button>\n                <button nui-button type=\"button\"\n                        displayStyle=\"primary\"\n                        (click)=\"onButtonClick('Action')\">\n                    Action\n                </button>\n            </nui-dialog-footer>\n        </ng-template>\n\n        <div>\n            <h3>Custom Dialog Header</h3>\n            <button id=\"nui-visual-test-custom-actions-dialog-btn\" (click)=\"open(headerButtonsContent)\">\n                More actions\n            </button>\n            <hr/>\n        </div>\n    </div>\n\n    <div>\n        <h3>Confirmation Dialogs with Defaults and Overrides</h3>\n        <button id=\"nui-visual-test-confirmation-dialog-defaults-btn\" (click)=\"confirmationDefaults()\">\n            Show Confirmation with defaults\n        </button>\n        <button id=\"nui-visual-test-confirmation-dialog-overrides-btn\" (click)=\"confirmationOverrides()\">\n            Show Confirmation with overrides\n        </button>\n        <hr />\n    </div>\n\n    <div>\n        <ng-template #contentResponsiveMode let-close=\"close\">\n            <nui-dialog-header title=\"Dialog title\" (closed)=\"close()\"></nui-dialog-header>\n            <div class=\"dialog-body\" [ngClass]=\"{'responsive-mode': isResponsiveMode}\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n                    Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n                    Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n                    Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n                    Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n                    Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n                </p>\n\n                <p>\n                    Quisque ut pellentesque augue. Ut finibus malesuada lacus, a elementum odio eleifend ac.\n                    Duis faucibus vehicula elit.\n                    Pellentesque id metus enim. Praesent vestibulum ipsum vel venenatis vehicula. Donec vel erat ex.\n                    Vivamus porta risus vitae risus tempus accumsan.\n                </p>\n\n                <p>\n                    Duis euismod erat id metus euismod, interdum iaculis turpis tempus. Nulla facilisi.\n                    Pellentesque ut purus nec lorem aliquam dictum ut sit amet enim.\n                    Mauris laoreet vel mi eget suscipit. Aliquam ipsum lacus, varius sed felis non, aliquet ultrices nisl.\n                    In tincidunt quam sed faucibus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Duis pellentesque elit sem, id aliquet metus egestas sit amet. Maecenas quis justo in turpis lacinia aliquet.\n                    Donec dignissim dolor nunc, in ultricies ligula sodales tincidunt.\n                    Phasellus in nisi ac metus rutrum efficitur eu sed mi. Praesent et porta leo.\n                    Curabitur sed maximus lectus. Aenean ac ex metus. Integer facilisis id sapien quis sodales. Nam at eros sapien.\n                </p>\n\n                <p>\n                    Mauris consequat lectus diam. Cras auctor vestibulum lectus, id pharetra nisl dapibus id.\n                    Sed tempor enim vel diam tincidunt condimentum.\n                    Ut elementum, ante in ultricies pulvinar, elit metus faucibus mauris, eu sodales lectus risus sit amet odio.\n                    Sed ullamcorper maximus ante, ut lobortis libero rutrum lacinia.\n                    Nam pretium erat ac velit egestas rutrum ultrices vel libero. Etiam sollicitudin tempus leo.\n                    Quisque a elit a orci fringilla molestie. Curabitur luctus dui risus, eget commodo lectus ullamcorper sit amet.\n                    Nulla turpis ante, venenatis tempor ex semper, semper vulputate enim.\n                    Duis sem nulla, egestas eu rhoncus et, egestas malesuada neque.\n                </p>\n\n                <p>\n                    Fusce ut malesuada est. Ut ut placerat nunc. Vivamus mauris nisi, luctus nec turpis quis, luctus porta ante.\n                    Aliquam erat volutpat. Nulla facilisi. Maecenas id vehicula sem. Sed vitae sodales orci, sed pretium mauris.\n                    Maecenas orci est, volutpat sit amet elit in, gravida finibus justo.\n                    Vestibulum eget eros id risus elementum interdum eu quis nisi.\n                    Donec ullamcorper enim tincidunt, volutpat sem et, gravida sem.\n                    Fusce vitae tellus mauris. Nam non bibendum urna. Ut vel pellentesque est, quis egestas ex.\n                    Nam lobortis quam eget arcu tristique, id suscipit enim volutpat.\n                    Quisque pretium vel nisl eu aliquet.\n                </p>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n                    Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n                    Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n                    Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n                    Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n                    Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n                </p>\n\n                <p>\n                    Quisque ut pellentesque augue. Ut finibus malesuada lacus, a elementum odio eleifend ac.\n                    Duis faucibus vehicula elit.\n                    Pellentesque id metus enim. Praesent vestibulum ipsum vel venenatis vehicula. Donec vel erat ex.\n                    Vivamus porta risus vitae risus tempus accumsan.\n                </p>\n\n                <p>\n                    Duis euismod erat id metus euismod, interdum iaculis turpis tempus. Nulla facilisi.\n                    Pellentesque ut purus nec lorem aliquam dictum ut sit amet enim.\n                    Mauris laoreet vel mi eget suscipit. Aliquam ipsum lacus, varius sed felis non, aliquet ultrices nisl.\n                    In tincidunt quam sed faucibus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Duis pellentesque elit sem, id aliquet metus egestas sit amet. Maecenas quis justo in turpis lacinia aliquet.\n                    Donec dignissim dolor nunc, in ultricies ligula sodales tincidunt.\n                    Phasellus in nisi ac metus rutrum efficitur eu sed mi. Praesent et porta leo.\n                    Curabitur sed maximus lectus. Aenean ac ex metus. Integer facilisis id sapien quis sodales. Nam at eros sapien.\n                </p>\n\n                <p>\n                    Mauris consequat lectus diam. Cras auctor vestibulum lectus, id pharetra nisl dapibus id.\n                    Sed tempor enim vel diam tincidunt condimentum.\n                    Ut elementum, ante in ultricies pulvinar, elit metus faucibus mauris, eu sodales lectus risus sit amet odio.\n                    Sed ullamcorper maximus ante, ut lobortis libero rutrum lacinia.\n                    Nam pretium erat ac velit egestas rutrum ultrices vel libero. Etiam sollicitudin tempus leo.\n                    Quisque a elit a orci fringilla molestie. Curabitur luctus dui risus, eget commodo lectus ullamcorper sit amet.\n                    Nulla turpis ante, venenatis tempor ex semper, semper vulputate enim.\n                    Duis sem nulla, egestas eu rhoncus et, egestas malesuada neque.\n                </p>\n\n                <p>\n                    Fusce ut malesuada est. Ut ut placerat nunc. Vivamus mauris nisi, luctus nec turpis quis, luctus porta ante.\n                    Aliquam erat volutpat. Nulla facilisi. Maecenas id vehicula sem. Sed vitae sodales orci, sed pretium mauris.\n                    Maecenas orci est, volutpat sit amet elit in, gravida finibus justo.\n                    Vestibulum eget eros id risus elementum interdum eu quis nisi.\n                    Donec ullamcorper enim tincidunt, volutpat sem et, gravida sem.\n                    Fusce vitae tellus mauris. Nam non bibendum urna. Ut vel pellentesque est, quis egestas ex.\n                    Nam lobortis quam eget arcu tristique, id suscipit enim volutpat.\n                    Quisque pretium vel nisl eu aliquet.\n                </p>\n            </div>\n            <nui-dialog-footer>\n                <button (click)=\"onButtonClick('Cancel')\" nui-button type=\"button\">\n                    Cancel\n                </button>\n                <button displayStyle=\"primary\" (click)=\"onButtonClick('Action')\" nui-button type=\"button\">\n                    Action\n                </button>\n            </nui-dialog-footer>\n        </ng-template>\n\n        <div>\n            <h3>Position on Screen</h3>\n            <button id=\"nui-visual-test-long-dialog-btn\" (click)=\"openResponsive(contentResponsiveMode, { isResponsiveMode: false })\">\n                Default mode\n            </button>\n            <button id=\"nui-visual-test-responsive-dialog-btn\" (click)=\"openResponsive(contentResponsiveMode, { isResponsiveMode: true })\">\n                Responsive mode\n            </button>\n            <hr />\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "Lstl":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-static-backdrop/dialog-with-static-backdrop.example.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-close=\"close\" let-dismiss=\"dismiss\">\n    <nui-dialog-header title=\"Dialog title\" i18n-title (closed)=\"close()\"></nui-dialog-header>\n    <div class=\"dialog-body\">\n        <p i18n>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n            Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n            Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n            Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n            Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n        </p>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\"\n                (click)=\"actionCanceled(); close()\" i18n>\n            Cancel\n        </button>\n        <button nui-button type=\"button\"\n                displayStyle=\"primary\"\n                (click)=\"actionDone(); close()\" i18n>\n            Action\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n\n<p>\n    This example blocks the user from closing the dialog with a click outside of the dialog. Still able to close via the ESC key or dialog <code>Cancel</code> and\n    <code>Close</code> buttons:\n</p>\n<button id=\"nui-demo-static-backdrop-dialog-btn\" nui-button type=\"button\" (click)=\"openWith(content)\" i18n>Static Backdrop Only</button>\n<p class=\"mt-3\">\n    This example allows the user to close the dialog only with the <code>Cancel</code> and <code>Close</code> buttons:\n</p>\n<button id=\"nui-demo-static-backdrop-ESC-dialog-btn\" nui-button type=\"button\" (click)=\"openWithout(content)\" i18n>Static Backdrop + ESC Key</button>\n");

/***/ }),

/***/ "N0bp":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-inside-overlay/dialog-inside-overlay.example.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from \"@angular/core\";\nimport { DialogService, NuiDialogRef } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-dialog-inside-overlay-example\",\n    templateUrl: \"./dialog-inside-overlay.example.component.html\",\n})\nexport class DialogInsideOverlayExampleComponent {\n    public options1 = Array.from({ length: 25 }).map((_, i) => $localize `Item ${i}`);\n    public options2 = Array.from({ length: 25 }).map((_, i) => $localize `Item ${i}`);\n\n    private activeDialog: NuiDialogRef;\n\n    constructor(private dialogService: DialogService) {}\n\n    /**\n     * Notice that the 'useOverlay' option is being passed in here\n     */\n    public openInOverlay(content: TemplateRef<string>) {\n        this.activeDialog = this.dialogService.open(content, {size: \"sm\", useOverlay: true});\n    }\n\n    public onDone(): void {\n        this.activeDialog.close();\n    }\n\n    public onCancel(): void {\n        this.activeDialog.close();\n    }\n}\n");

/***/ }),

/***/ "N9CE":
/*!**********************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/dialog-position/dialog-position.example.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DialogPositionExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPositionExampleComponent", function() { return DialogPositionExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");








const _c30 = function (a0) { return { "responsive-mode": a0 }; };
function DialogPositionExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-dialog-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DialogPositionExampleComponent_ng_template_0_Template_nui_dialog_header_closed_1_listener() { const close_r2 = ctx.close; return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](16, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](18, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](20, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](22, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogPositionExampleComponent_ng_template_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onButtonClick("Cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](25, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogPositionExampleComponent_ng_template_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onButtonClick("Action"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](27, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.test, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c30, ctx_r1.isResponsiveMode));
} }
class DialogPositionExampleComponent {
    constructor(dialogService, toastService) {
        this.dialogService = dialogService;
        this.toastService = toastService;
        this.isResponsiveMode = false;
    }
    open(content, options) {
        this.isResponsiveMode = options.isResponsiveMode;
        this.activeDialog = this.dialogService.open(content);
    }
    onButtonClick(title) {
        title === "Action" ? this.actionDone() : this.actionCanceled();
        this.activeDialog.close();
    }
    actionDone() {
        this.toastService.success({ message: $localize `Action Done!`, title: $localize `Event` });
    }
    actionCanceled() {
        this.toastService.info({ message: $localize `Action Cancelled!`, title: $localize `Event` });
    }
}
DialogPositionExampleComponent.ɵfac = function DialogPositionExampleComponent_Factory(t) { return new (t || DialogPositionExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
DialogPositionExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogPositionExampleComponent, selectors: [["nui-dialog-position-example"]], decls: 6, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5781555974105650227$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Default mode");
        i18n_0 = MSG_EXTERNAL_5781555974105650227$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟32e454deb277d13a4c0c31f346dc56d3ca8f41a6␟5781555974105650227:Default mode`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5571745808206778674$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Responsive mode");
        i18n_2 = MSG_EXTERNAL_5571745808206778674$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟c0aaf031ce2eb64e0c38fbb44d96113ab73cdebb␟5571745808206778674:Responsive mode`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("Dialog title");
        i18n_4 = MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟eeb379308b8767b98aa0d27308f4f8dd6b46e559␟5892089246202495025:Dialog title`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__7 = goog.getMsg(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
        i18n_6 = MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟f62f9e2e728dea80e19b1e7a6f61424d55bab5ea␟7188163738299238705: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. `;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_574573474436855315$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__9 = goog.getMsg(" Quisque ut pellentesque augue. Ut finibus malesuada lacus, a elementum odio eleifend ac. Duis faucibus vehicula elit. Pellentesque id metus enim. Praesent vestibulum ipsum vel venenatis vehicula. Donec vel erat ex. Vivamus porta risus vitae risus tempus accumsan. ");
        i18n_8 = MSG_EXTERNAL_574573474436855315$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟43e841ee613b8906b3c5cf710990ccec7b84ecb1␟574573474436855315: Quisque ut pellentesque augue. Ut finibus malesuada lacus, a elementum odio eleifend ac. Duis faucibus vehicula elit. Pellentesque id metus enim. Praesent vestibulum ipsum vel venenatis vehicula. Donec vel erat ex. Vivamus porta risus vitae risus tempus accumsan. `;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1932613973105726302$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__11 = goog.getMsg(" Duis euismod erat id metus euismod, interdum iaculis turpis tempus. Nulla facilisi. Pellentesque ut purus nec lorem aliquam dictum ut sit amet enim. Mauris laoreet vel mi eget suscipit. Aliquam ipsum lacus, varius sed felis non, aliquet ultrices nisl. In tincidunt quam sed faucibus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque elit sem, id aliquet metus egestas sit amet. Maecenas quis justo in turpis lacinia aliquet. Donec dignissim dolor nunc, in ultricies ligula sodales tincidunt. Phasellus in nisi ac metus rutrum efficitur eu sed mi. Praesent et porta leo. Curabitur sed maximus lectus. Aenean ac ex metus. Integer facilisis id sapien quis sodales. Nam at eros sapien. ");
        i18n_10 = MSG_EXTERNAL_1932613973105726302$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__11;
    }
    else {
        i18n_10 = $localize `:␟3eb4cda5f592cadbba88332f59247930f2fd44ac␟1932613973105726302: Duis euismod erat id metus euismod, interdum iaculis turpis tempus. Nulla facilisi. Pellentesque ut purus nec lorem aliquam dictum ut sit amet enim. Mauris laoreet vel mi eget suscipit. Aliquam ipsum lacus, varius sed felis non, aliquet ultrices nisl. In tincidunt quam sed faucibus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque elit sem, id aliquet metus egestas sit amet. Maecenas quis justo in turpis lacinia aliquet. Donec dignissim dolor nunc, in ultricies ligula sodales tincidunt. Phasellus in nisi ac metus rutrum efficitur eu sed mi. Praesent et porta leo. Curabitur sed maximus lectus. Aenean ac ex metus. Integer facilisis id sapien quis sodales. Nam at eros sapien. `;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8504794081242486370$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__13 = goog.getMsg(" Mauris consequat lectus diam. Cras auctor vestibulum lectus, id pharetra nisl dapibus id. Sed tempor enim vel diam tincidunt condimentum. Ut elementum, ante in ultricies pulvinar, elit metus faucibus mauris, eu sodales lectus risus sit amet odio. Sed ullamcorper maximus ante, ut lobortis libero rutrum lacinia. Nam pretium erat ac velit egestas rutrum ultrices vel libero. Etiam sollicitudin tempus leo. Quisque a elit a orci fringilla molestie. Curabitur luctus dui risus, eget commodo lectus ullamcorper sit amet. Nulla turpis ante, venenatis tempor ex semper, semper vulputate enim. Duis sem nulla, egestas eu rhoncus et, egestas malesuada neque. ");
        i18n_12 = MSG_EXTERNAL_8504794081242486370$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__13;
    }
    else {
        i18n_12 = $localize `:␟957d5aa27060dc1764360df3ccf9908a0479c0a1␟8504794081242486370: Mauris consequat lectus diam. Cras auctor vestibulum lectus, id pharetra nisl dapibus id. Sed tempor enim vel diam tincidunt condimentum. Ut elementum, ante in ultricies pulvinar, elit metus faucibus mauris, eu sodales lectus risus sit amet odio. Sed ullamcorper maximus ante, ut lobortis libero rutrum lacinia. Nam pretium erat ac velit egestas rutrum ultrices vel libero. Etiam sollicitudin tempus leo. Quisque a elit a orci fringilla molestie. Curabitur luctus dui risus, eget commodo lectus ullamcorper sit amet. Nulla turpis ante, venenatis tempor ex semper, semper vulputate enim. Duis sem nulla, egestas eu rhoncus et, egestas malesuada neque. `;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8112245443176516614$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__15 = goog.getMsg(" Fusce ut malesuada est. Ut ut placerat nunc. Vivamus mauris nisi, luctus nec turpis quis, luctus porta ante. Aliquam erat volutpat. Nulla facilisi. Maecenas id vehicula sem. Sed vitae sodales orci, sed pretium mauris. Maecenas orci est, volutpat sit amet elit in, gravida finibus justo. Vestibulum eget eros id risus elementum interdum eu quis nisi. Donec ullamcorper enim tincidunt, volutpat sem et, gravida sem. Fusce vitae tellus mauris. Nam non bibendum urna. Ut vel pellentesque est, quis egestas ex. Nam lobortis quam eget arcu tristique, id suscipit enim volutpat. Quisque pretium vel nisl eu aliquet. ");
        i18n_14 = MSG_EXTERNAL_8112245443176516614$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__15;
    }
    else {
        i18n_14 = $localize `:␟5926720c7ed649521bf4ef0673a15433278ab70f␟8112245443176516614: Fusce ut malesuada est. Ut ut placerat nunc. Vivamus mauris nisi, luctus nec turpis quis, luctus porta ante. Aliquam erat volutpat. Nulla facilisi. Maecenas id vehicula sem. Sed vitae sodales orci, sed pretium mauris. Maecenas orci est, volutpat sit amet elit in, gravida finibus justo. Vestibulum eget eros id risus elementum interdum eu quis nisi. Donec ullamcorper enim tincidunt, volutpat sem et, gravida sem. Fusce vitae tellus mauris. Nam non bibendum urna. Ut vel pellentesque est, quis egestas ex. Nam lobortis quam eget arcu tristique, id suscipit enim volutpat. Quisque pretium vel nisl eu aliquet. `;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__17 = goog.getMsg(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
        i18n_16 = MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__17;
    }
    else {
        i18n_16 = $localize `:␟f62f9e2e728dea80e19b1e7a6f61424d55bab5ea␟7188163738299238705: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. `;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_574573474436855315$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__19 = goog.getMsg(" Quisque ut pellentesque augue. Ut finibus malesuada lacus, a elementum odio eleifend ac. Duis faucibus vehicula elit. Pellentesque id metus enim. Praesent vestibulum ipsum vel venenatis vehicula. Donec vel erat ex. Vivamus porta risus vitae risus tempus accumsan. ");
        i18n_18 = MSG_EXTERNAL_574573474436855315$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__19;
    }
    else {
        i18n_18 = $localize `:␟43e841ee613b8906b3c5cf710990ccec7b84ecb1␟574573474436855315: Quisque ut pellentesque augue. Ut finibus malesuada lacus, a elementum odio eleifend ac. Duis faucibus vehicula elit. Pellentesque id metus enim. Praesent vestibulum ipsum vel venenatis vehicula. Donec vel erat ex. Vivamus porta risus vitae risus tempus accumsan. `;
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1932613973105726302$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__21 = goog.getMsg(" Duis euismod erat id metus euismod, interdum iaculis turpis tempus. Nulla facilisi. Pellentesque ut purus nec lorem aliquam dictum ut sit amet enim. Mauris laoreet vel mi eget suscipit. Aliquam ipsum lacus, varius sed felis non, aliquet ultrices nisl. In tincidunt quam sed faucibus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque elit sem, id aliquet metus egestas sit amet. Maecenas quis justo in turpis lacinia aliquet. Donec dignissim dolor nunc, in ultricies ligula sodales tincidunt. Phasellus in nisi ac metus rutrum efficitur eu sed mi. Praesent et porta leo. Curabitur sed maximus lectus. Aenean ac ex metus. Integer facilisis id sapien quis sodales. Nam at eros sapien. ");
        i18n_20 = MSG_EXTERNAL_1932613973105726302$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__21;
    }
    else {
        i18n_20 = $localize `:␟3eb4cda5f592cadbba88332f59247930f2fd44ac␟1932613973105726302: Duis euismod erat id metus euismod, interdum iaculis turpis tempus. Nulla facilisi. Pellentesque ut purus nec lorem aliquam dictum ut sit amet enim. Mauris laoreet vel mi eget suscipit. Aliquam ipsum lacus, varius sed felis non, aliquet ultrices nisl. In tincidunt quam sed faucibus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque elit sem, id aliquet metus egestas sit amet. Maecenas quis justo in turpis lacinia aliquet. Donec dignissim dolor nunc, in ultricies ligula sodales tincidunt. Phasellus in nisi ac metus rutrum efficitur eu sed mi. Praesent et porta leo. Curabitur sed maximus lectus. Aenean ac ex metus. Integer facilisis id sapien quis sodales. Nam at eros sapien. `;
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8504794081242486370$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__23 = goog.getMsg(" Mauris consequat lectus diam. Cras auctor vestibulum lectus, id pharetra nisl dapibus id. Sed tempor enim vel diam tincidunt condimentum. Ut elementum, ante in ultricies pulvinar, elit metus faucibus mauris, eu sodales lectus risus sit amet odio. Sed ullamcorper maximus ante, ut lobortis libero rutrum lacinia. Nam pretium erat ac velit egestas rutrum ultrices vel libero. Etiam sollicitudin tempus leo. Quisque a elit a orci fringilla molestie. Curabitur luctus dui risus, eget commodo lectus ullamcorper sit amet. Nulla turpis ante, venenatis tempor ex semper, semper vulputate enim. Duis sem nulla, egestas eu rhoncus et, egestas malesuada neque. ");
        i18n_22 = MSG_EXTERNAL_8504794081242486370$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__23;
    }
    else {
        i18n_22 = $localize `:␟957d5aa27060dc1764360df3ccf9908a0479c0a1␟8504794081242486370: Mauris consequat lectus diam. Cras auctor vestibulum lectus, id pharetra nisl dapibus id. Sed tempor enim vel diam tincidunt condimentum. Ut elementum, ante in ultricies pulvinar, elit metus faucibus mauris, eu sodales lectus risus sit amet odio. Sed ullamcorper maximus ante, ut lobortis libero rutrum lacinia. Nam pretium erat ac velit egestas rutrum ultrices vel libero. Etiam sollicitudin tempus leo. Quisque a elit a orci fringilla molestie. Curabitur luctus dui risus, eget commodo lectus ullamcorper sit amet. Nulla turpis ante, venenatis tempor ex semper, semper vulputate enim. Duis sem nulla, egestas eu rhoncus et, egestas malesuada neque. `;
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8112245443176516614$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__25 = goog.getMsg(" Fusce ut malesuada est. Ut ut placerat nunc. Vivamus mauris nisi, luctus nec turpis quis, luctus porta ante. Aliquam erat volutpat. Nulla facilisi. Maecenas id vehicula sem. Sed vitae sodales orci, sed pretium mauris. Maecenas orci est, volutpat sit amet elit in, gravida finibus justo. Vestibulum eget eros id risus elementum interdum eu quis nisi. Donec ullamcorper enim tincidunt, volutpat sem et, gravida sem. Fusce vitae tellus mauris. Nam non bibendum urna. Ut vel pellentesque est, quis egestas ex. Nam lobortis quam eget arcu tristique, id suscipit enim volutpat. Quisque pretium vel nisl eu aliquet. ");
        i18n_24 = MSG_EXTERNAL_8112245443176516614$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__25;
    }
    else {
        i18n_24 = $localize `:␟5926720c7ed649521bf4ef0673a15433278ab70f␟8112245443176516614: Fusce ut malesuada est. Ut ut placerat nunc. Vivamus mauris nisi, luctus nec turpis quis, luctus porta ante. Aliquam erat volutpat. Nulla facilisi. Maecenas id vehicula sem. Sed vitae sodales orci, sed pretium mauris. Maecenas orci est, volutpat sit amet elit in, gravida finibus justo. Vestibulum eget eros id risus elementum interdum eu quis nisi. Donec ullamcorper enim tincidunt, volutpat sem et, gravida sem. Fusce vitae tellus mauris. Nam non bibendum urna. Ut vel pellentesque est, quis egestas ex. Nam lobortis quam eget arcu tristique, id suscipit enim volutpat. Quisque pretium vel nisl eu aliquet. `;
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__27 = goog.getMsg(" Cancel ");
        i18n_26 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__27;
    }
    else {
        i18n_26 = $localize `:␟bf844a41a29961b6dacc48a20eaf97bef0cf5013␟7452095619502551190: Cancel `;
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__29 = goog.getMsg(" Action ");
        i18n_28 = MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_POSITION_DIALOG_POSITION_EXAMPLE_COMPONENT_TS__29;
    }
    else {
        i18n_28 = $localize `:␟01b5385da84ee4b609f8273d7ae56600c3fb3cbe␟4946554391652567902: Action `;
    } return [["content", ""], ["id", "long-dialog", "nui-button", "", "type", "button", 3, "click"], i18n_0, ["id", "responsive-dialog", "nui-button", "", "type", "button", 1, "ml-4", 3, "click"], i18n_2, ["title", i18n_4, 3, "closed"], [1, "dialog-body", 3, "ngClass"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, ["nui-button", "", "type", "button", 3, "click"], i18n_26, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_28]; }, template: function DialogPositionExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogPositionExampleComponent_ng_template_0_Template, 28, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogPositionExampleComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.open(_r0, { isResponsiveMode: false }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogPositionExampleComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.open(_r0, { isResponsiveMode: true }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__["DialogHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_5__["DialogFooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "PNRQ":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/simple-dialog/simple-dialog.example.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-close=\"close\" let-dismiss=\"dismiss\">\n    <nui-dialog-header title=\"Dialog title\" i18n-title (closed)=\"close()\"></nui-dialog-header>\n    <div class=\"dialog-body\">\n        <p i18n>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n            Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n            Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n            Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n            Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n        </p>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\" (click)=\"actionCanceled(); close()\" i18n>\n            Cancel\n        </button>\n        <button nui-button type=\"button\" displayStyle=\"primary\" (click)=\"actionDone(); close()\" i18n>\n            Action\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n\n<button id=\"nui-demo-default-dialog-btn\" nui-button type=\"button\" (click)=\"open(content)\" i18n>Click me!</button>\n");

/***/ }),

/***/ "Pj5b":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/header-buttons/header-buttons.example.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #headerButtonsContent let-close=\"close\">\n    <nui-dialog-header title=\"Dialog title\" i18n-title (closed)=\"close()\">\n        <button nui-button type=\"button\" displayStyle=\"action\" icon=\"fullscreen\"></button>\n        <button nui-button type=\"button\" displayStyle=\"action\" icon=\"menu\"></button>\n    </nui-dialog-header>\n    <div class=\"dialog-body\">\n        <p i18n>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n            Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n            Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n            Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n            Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n        </p>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\"\n                (click)=\"onButtonClick('Cancel')\" i18n>\n            Cancel\n        </button>\n        <button nui-button type=\"button\"\n                displayStyle=\"primary\"\n                (click)=\"onButtonClick('Action')\" i18n>\n            Action\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n\n<button id=\"nui-demo-custom-actions\" nui-button type=\"button\" (click)=\"open(headerButtonsContent)\" i18n>More actions</button>\n");

/***/ }),

/***/ "QIXJ":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-custom-class/dialog-custom-class.example.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-close=\"close\">\n    <nui-dialog-header title=\"Dialog title\" i18n-title (closed)=\"close()\"></nui-dialog-header>\n    <div class=\"dialog-body\">\n        <p i18n>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n            Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n            Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n            Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n            Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n        </p>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\"\n                (click)=\"onButtonClick('Cancel')\" i18n>\n            Cancel\n        </button>\n        <button nui-button type=\"button\"\n                displayStyle=\"primary\"\n                (click)=\"onButtonClick('Action')\" i18n>\n            Action\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n\n<button id=\"nui-demo-custom-class-btn\" nui-button type=\"button\" (click)=\"open(content)\" i18n>Custom width dialog</button>\n");

/***/ }),

/***/ "QPNM":
/*!*****************************************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/dialog-static-backdrop/dialog-with-static-backdrop.example.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DialogWithStaticBackdropExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogWithStaticBackdropExampleComponent", function() { return DialogWithStaticBackdropExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");







function DialogWithStaticBackdropExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DialogWithStaticBackdropExampleComponent_ng_template_0_Template_nui_dialog_header_closed_0_listener() { const close_r2 = ctx.close; return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogWithStaticBackdropExampleComponent_ng_template_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const close_r2 = ctx.close; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r5.actionCanceled(); return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogWithStaticBackdropExampleComponent_ng_template_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const close_r2 = ctx.close; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r7.actionDone(); return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DialogWithStaticBackdropExampleComponent {
    constructor(dialogService, toastService) {
        this.dialogService = dialogService;
        this.toastService = toastService;
    }
    openWith(content) {
        this.activeDialog = this.dialogService.open(content, { size: "sm", backdrop: "static" });
    }
    openWithout(content) {
        this.activeDialog = this.dialogService.open(content, { size: "sm", keyboard: false, backdrop: "static" });
    }
    actionDone() {
        this.toastService.success({ message: $localize `Action Done!`, title: $localize `Event` });
        this.activeDialog.close();
    }
    actionCanceled() {
        this.toastService.info({ message: $localize `Action Cancelled!`, title: $localize `Event` });
        this.activeDialog.close();
    }
}
DialogWithStaticBackdropExampleComponent.ɵfac = function DialogWithStaticBackdropExampleComponent_Factory(t) { return new (t || DialogWithStaticBackdropExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
DialogWithStaticBackdropExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogWithStaticBackdropExampleComponent, selectors: [["nui-dialog-with-static-backdrop-example"]], decls: 22, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5234517373866016246$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_STATIC_BACKDROP_DIALOG_WITH_STATIC_BACKDROP_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Static Backdrop Only");
        i18n_0 = MSG_EXTERNAL_5234517373866016246$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_STATIC_BACKDROP_DIALOG_WITH_STATIC_BACKDROP_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟c1edc968ad849b1189119c9bcc6738d99cf75a9d␟5234517373866016246:Static Backdrop Only`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2291591479393622119$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_STATIC_BACKDROP_DIALOG_WITH_STATIC_BACKDROP_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Static Backdrop + ESC Key");
        i18n_2 = MSG_EXTERNAL_2291591479393622119$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_STATIC_BACKDROP_DIALOG_WITH_STATIC_BACKDROP_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟73c9e8282978a3d5e4112721fdf4852b5f88f203␟2291591479393622119:Static Backdrop + ESC Key`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_STATIC_BACKDROP_DIALOG_WITH_STATIC_BACKDROP_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("Dialog title");
        i18n_4 = MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_STATIC_BACKDROP_DIALOG_WITH_STATIC_BACKDROP_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟eeb379308b8767b98aa0d27308f4f8dd6b46e559␟5892089246202495025:Dialog title`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_STATIC_BACKDROP_DIALOG_WITH_STATIC_BACKDROP_EXAMPLE_COMPONENT_TS__7 = goog.getMsg(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
        i18n_6 = MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_STATIC_BACKDROP_DIALOG_WITH_STATIC_BACKDROP_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟f62f9e2e728dea80e19b1e7a6f61424d55bab5ea␟7188163738299238705: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. `;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_STATIC_BACKDROP_DIALOG_WITH_STATIC_BACKDROP_EXAMPLE_COMPONENT_TS__9 = goog.getMsg(" Cancel ");
        i18n_8 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_STATIC_BACKDROP_DIALOG_WITH_STATIC_BACKDROP_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟bf844a41a29961b6dacc48a20eaf97bef0cf5013␟7452095619502551190: Cancel `;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_STATIC_BACKDROP_DIALOG_WITH_STATIC_BACKDROP_EXAMPLE_COMPONENT_TS__11 = goog.getMsg(" Action ");
        i18n_10 = MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_STATIC_BACKDROP_DIALOG_WITH_STATIC_BACKDROP_EXAMPLE_COMPONENT_TS__11;
    }
    else {
        i18n_10 = $localize `:␟01b5385da84ee4b609f8273d7ae56600c3fb3cbe␟4946554391652567902: Action `;
    } return [["content", ""], ["id", "nui-demo-static-backdrop-dialog-btn", "nui-button", "", "type", "button", 3, "click"], i18n_0, [1, "mt-3"], ["id", "nui-demo-static-backdrop-ESC-dialog-btn", "nui-button", "", "type", "button", 3, "click"], i18n_2, ["title", i18n_4, 3, "closed"], [1, "dialog-body"], i18n_6, ["nui-button", "", "type", "button", 3, "click"], i18n_8, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_10]; }, template: function DialogWithStaticBackdropExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogWithStaticBackdropExampleComponent_ng_template_0_Template, 9, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " This example blocks the user from closing the dialog with a click outside of the dialog. Still able to close via the ESC key or dialog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " buttons:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogWithStaticBackdropExampleComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.openWith(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " This example allows the user to close the dialog only with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " buttons:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogWithStaticBackdropExampleComponent_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.openWithout(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](21, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_4__["DialogFooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "TXQN":
/*!********************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/dialog-zindex-test/dialog-zindex-test.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DialogZIndexTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogZIndexTestComponent", function() { return DialogZIndexTestComponent; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _simple_dialog_simple_dialog_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../simple-dialog/simple-dialog.example.component */ "b7fi");
/* harmony import */ var _component_as_content_component_as_content_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component-as-content/component-as-content.example.component */ "UJKN");
/* harmony import */ var _dialog_severity_dialog_severity_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialog-severity/dialog-severity.example.component */ "JOKZ");
/* harmony import */ var _header_buttons_header_buttons_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header-buttons/header-buttons.example.component */ "GXFr");
/* harmony import */ var _dialog_sizes_dialog_sizes_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialog-sizes/dialog-sizes.example.component */ "WQXM");
/* harmony import */ var _dialog_position_dialog_position_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialog-position/dialog-position.example.component */ "N9CE");
/* harmony import */ var _dialog_custom_class_dialog_custom_class_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dialog-custom-class/dialog-custom-class.example.component */ "/3M5");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.example.component */ "fcXS");
/* harmony import */ var _dialog_keyboard_dialog_with_keyboard_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dialog-keyboard/dialog-with-keyboard.example.component */ "HqCK");
/* harmony import */ var _dialog_static_backdrop_dialog_with_static_backdrop_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dialog-static-backdrop/dialog-with-static-backdrop.example.component */ "QPNM");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");
/* harmony import */ var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu/menu.component */ "JG2v");
/* harmony import */ var _src_lib_menu_menu_item_menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-action/menu-action.component */ "6sIJ");
/* harmony import */ var _src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../src/lib/popup-adapter/popup-adapter.component */ "tUgt");
/* harmony import */ var _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../src/lib/popup/popup-toggle.directive */ "Yclq");
/* harmony import */ var _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-item/menu-item.component */ "fNSn");
/* harmony import */ var _src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../src/lib/tooltip/tooltip.directive */ "mgRW");
/* harmony import */ var _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../src/lib/select/select.component */ "8Za4");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");
/* harmony import */ var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../src/lib/select/combobox/combobox.component */ "KXc3");
/* harmony import */ var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */ "eZSC");
/* harmony import */ var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */ "Mjyr");
/* harmony import */ var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../../src/lib/spinner/spinner.component */ "NFOm");
/* harmony import */ var _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../../src/lib/busy/busy.component */ "3XPh");
/* harmony import */ var _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../../../src/lib/date-time-picker/date-time-picker.component */ "/NB1");
/* harmony import */ var _src_lib_convenience_time_frame_bar_time_frame_bar_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../../../src/lib/convenience/time-frame-bar/time-frame-bar.component */ "SKIm");
/* harmony import */ var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../../../src/lib/icon/icon.component */ "45Bz");
/* harmony import */ var _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../../../src/lib/time-frame-picker/quick-picker/quick-picker.component */ "KiNg");
/* harmony import */ var _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../../../src/lib/time-frame-picker/time-frame-picker.component */ "chzP");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");
/* harmony import */ var _src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../../../../src/lib/time-frame-picker/time-frame-format.pipe */ "Y/g/");











































function DialogZIndexTestComponent_ng_template_34_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DialogZIndexTestComponent_ng_template_34_ng_container_2_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogZIndexTestComponent_ng_template_34_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39); return ctx_r31.openInnerDialog(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Open small Dialog ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogZIndexTestComponent_ng_template_34_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r33.closeOverlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Close overlay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r28);
} }
function DialogZIndexTestComponent_ng_template_36_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_36_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_36_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_36_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_36_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_36_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_36_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_36_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_36_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_36_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
const _c4 = function () { return { text: "Main overlay tooltip" }; };
const _c5 = function () { return { text: "Inner overlay tooltip" }; };
function DialogZIndexTestComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "This is the content of an CDK overlay container.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DialogZIndexTestComponent_ng_template_36_ng_container_4_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DialogZIndexTestComponent_ng_template_36_ng_container_5_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DialogZIndexTestComponent_ng_template_36_ng_container_6_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DialogZIndexTestComponent_ng_template_36_ng_container_7_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DialogZIndexTestComponent_ng_template_36_ng_container_8_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DialogZIndexTestComponent_ng_template_36_ng_container_9_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DialogZIndexTestComponent_ng_template_36_ng_container_10_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DialogZIndexTestComponent_ng_template_36_ng_container_11_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DialogZIndexTestComponent_ng_template_36_ng_container_12_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DialogZIndexTestComponent_ng_template_36_ng_container_13_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogZIndexTestComponent_ng_template_36_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r44.showToast(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Show toast ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogZIndexTestComponent_ng_template_36_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r46.toggleAppendToBody(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](18, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogZIndexTestComponent_ng_template_36_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r47.toggleBusy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](20, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogZIndexTestComponent_ng_template_36_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](41); return ctx_r48.openInnerDialog(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Open Inner Dialog ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogZIndexTestComponent_ng_template_36_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r49.closeOverlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Close overlay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](61);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](57);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](43);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](45);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](47);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](49);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](59);
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](55);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](51);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r26)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r18)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nExp"](ctx_r3.appendToBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nApply"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nExp"](ctx_r3.busy);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nApply"](20);
} }
function DialogZIndexTestComponent_ng_template_38_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-dialog-header", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function DialogZIndexTestComponent_ng_template_38_Template_nui_dialog_header_closed_0_listener() { const close_r50 = ctx.close; return close_r50(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DialogZIndexTestComponent_ng_template_38_ng_container_2_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogZIndexTestComponent_ng_template_38_Template_button_click_4_listener() { const close_r50 = ctx.close; return close_r50(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r28);
} }
function DialogZIndexTestComponent_ng_template_40_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_40_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_40_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_40_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_40_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_40_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_40_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_40_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_40_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_40_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
const _c8 = function () { return { text: "Inner dialog tooltip" }; };
function DialogZIndexTestComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-dialog-header", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function DialogZIndexTestComponent_ng_template_40_Template_nui_dialog_header_closed_0_listener() { const close_r55 = ctx.close; return close_r55(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "This is the content of a dialog.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DialogZIndexTestComponent_ng_template_40_ng_container_4_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DialogZIndexTestComponent_ng_template_40_ng_container_5_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DialogZIndexTestComponent_ng_template_40_ng_container_6_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DialogZIndexTestComponent_ng_template_40_ng_container_7_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DialogZIndexTestComponent_ng_template_40_ng_container_8_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DialogZIndexTestComponent_ng_template_40_ng_container_9_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DialogZIndexTestComponent_ng_template_40_ng_container_10_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DialogZIndexTestComponent_ng_template_40_ng_container_11_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DialogZIndexTestComponent_ng_template_40_ng_container_12_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DialogZIndexTestComponent_ng_template_40_ng_container_13_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogZIndexTestComponent_ng_template_40_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35); return ctx_r68.openOverlay(_r0, "40%", "200px"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " +Overlay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogZIndexTestComponent_ng_template_40_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39); return ctx_r70.openInnerDialog(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " +Dialog ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogZIndexTestComponent_ng_template_40_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r71.toggleBusy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](20, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogZIndexTestComponent_ng_template_40_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r72.showToast(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Show toast");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogZIndexTestComponent_ng_template_40_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const close_r55 = ctx.close; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r73.closeDialog(); return close_r55(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](61);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](57);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](43);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](45);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](47);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](49);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](59);
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](55);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](51);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r26)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r18)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c8));
} }
function DialogZIndexTestComponent_ng_template_42_nui_menu_action_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-menu-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r75);
} }
function DialogZIndexTestComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-menu", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DialogZIndexTestComponent_ng_template_42_nui_menu_action_1_Template, 2, 1, "nui-menu-action", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appendToBody", ctx_r9.appendToBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r9.items);
} }
function DialogZIndexTestComponent_ng_template_44_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-menu-item", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r77);
} }
function DialogZIndexTestComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-popup", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](2, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DialogZIndexTestComponent_ng_template_44_ng_container_4_Template, 3, 1, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appendToBody", ctx_r11.appendToBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iconRight", true)("isEmpty", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r11.items);
} }
function DialogZIndexTestComponent_ng_template_46_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-select-v2-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](2, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nExp"](item_r79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nApply"](2);
} }
function DialogZIndexTestComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-select-v2", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DialogZIndexTestComponent_ng_template_46_ng_container_2_Template, 3, 2, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx_r13.items)("inline", true)("appendToBody", ctx_r13.appendToBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r13.items);
} }
function DialogZIndexTestComponent_ng_template_48_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-select-v2-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r81);
} }
function DialogZIndexTestComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-combobox", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-combobox-v2", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DialogZIndexTestComponent_ng_template_48_ng_container_2_Template, 4, 2, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx_r15.items)("inline", true)("appendToBody", ctx_r15.appendToBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r15.items);
} }
function DialogZIndexTestComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-spinner", 51);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("show", true);
} }
function DialogZIndexTestComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " We used focus trigger so that the popover with a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " big tooltip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " will remain open even after we move the mouse away from it even. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const text_r82 = ctx.text;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("busy", ctx_r19.busy);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("nuiTooltip", "", text_r82, " ", ctx_r19.longTextTooltip, "");
} }
function DialogZIndexTestComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nui-date-time-picker", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appendToBody", ctx_r21.appendToBody)("model", ctx_r21.dt);
} }
function DialogZIndexTestComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-time-frame-bar", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("timeFrameChange", function DialogZIndexTestComponent_ng_template_56_Template_nui_time_frame_bar_timeFrameChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r83.timeFrame = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nui-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "timeFrame");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nui-quick-picker", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "nui-time-frame-picker");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("timeFrame", ctx_r23.timeFrame);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx_r23.timeFrame), " ");
} }
function DialogZIndexTestComponent_ng_template_58_ng_template_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DialogZIndexTestComponent_ng_template_58_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "I'm a popover with some content with a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "tooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u00A0inside. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DialogZIndexTestComponent_ng_template_58_ng_template_5_ng_container_6_Template, 1, 0, "ng-container", 18);
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("nuiTooltip", "Tooltip inside popover ", ctx_r86.longTextTooltip, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r28);
} }
function DialogZIndexTestComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " I'm a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-popover", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "popover");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " with Focus Trigger ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DialogZIndexTestComponent_ng_template_58_ng_template_5_Template, 7, 2, "ng-template", null, 61, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r85);
} }
function DialogZIndexTestComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "I'm a long text tooltip! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DialogZIndexTestComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class DialogZIndexTestComponent {
    constructor(dialogService, toastService, overlay, viewContainerRef) {
        this.dialogService = dialogService;
        this.toastService = toastService;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.busy = false;
        this.appendToBody = false;
        this.dt = moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-02-02");
        this.items = ["Long description item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
        this.longTextTooltip = `
    which should appear on top of any other components (popup, popover, menu,etc.) even if it's displayed after the popover has been displayed.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.
    Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.
    Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.
    Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.
    Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.
    `;
        this.activeDialogs = [];
        this.baseDate = moment_moment__WEBPACK_IMPORTED_MODULE_4___default()([2018, 5, 1, 15, 0, 0]);
    }
    ngOnInit() {
        this.timeFrame = {
            startDatetime: this.baseDate.clone().subtract(1, "weeks"),
            endDatetime: this.baseDate.clone(),
        };
    }
    toggleBusy() {
        this.busy = !this.busy;
    }
    toggleAppendToBody() {
        this.appendToBody = !this.appendToBody;
    }
    openOverlay(templateRef, width, height) {
        const positionStrategy = this.overlay.position().global()
            .centerHorizontally()
            .centerVertically();
        this.overlayRef = this.overlay.create({
            positionStrategy,
            hasBackdrop: true,
            panelClass: ["main-overlay-panel", "d-flex", "flex-column"],
            width: width,
            height: height,
            scrollStrategy: this.overlay.scrollStrategies.block(),
        });
        const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](templateRef, this.viewContainerRef);
        this.overlayRef.attach(portal);
    }
    closeOverlay() {
        this.overlayRef.detach();
    }
    openInnerDialog(templateRef) {
        this.activeDialogs.push(this.dialogService.open(templateRef, { windowClass: "inner-dialog" }));
    }
    closeDialog() {
        var _a;
        (_a = this.activeDialogs.pop()) === null || _a === void 0 ? void 0 : _a.close();
    }
    showToast() {
        this.toastService.success({ message: $localize `Sample toast displayed!`, title: $localize `Event` });
    }
}
DialogZIndexTestComponent.ɵfac = function DialogZIndexTestComponent_Factory(t) { return new (t || DialogZIndexTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"])); };
DialogZIndexTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DialogZIndexTestComponent, selectors: [["nui-dialog-zindex--test"]], decls: 64, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2572580832429526198$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS__1 = goog.getMsg(" appendToBody={$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_0 = MSG_EXTERNAL_2572580832429526198$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS__1;
    }
    else {
        i18n_0 = $localize `:␟4817379f179376c5d5db06a9a19289c38c4a2088␟2572580832429526198: appendToBody=${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8906943059497155563$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS__3 = goog.getMsg(" busy={$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_2 = MSG_EXTERNAL_8906943059497155563$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟e1e3bda292b8bc713dfe7e9129b59ee328b9c268␟8906943059497155563: busy=${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1603682264641628393$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS__7 = goog.getMsg(" Switch busy ");
        i18n_6 = MSG_EXTERNAL_1603682264641628393$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟56bd0d88d7f8b94de09397ed861f787676c43bd0␟1603682264641628393: Switch busy `;
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3013441546499596593$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS__10 = goog.getMsg(" Popup ");
        i18n_9 = MSG_EXTERNAL_3013441546499596593$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS__10;
    }
    else {
        i18n_9 = $localize `:␟349152e79d4998da4e5ba75d4d65f65ed4b52ab5␟3013441546499596593: Popup `;
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1628382286062172232$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS___12 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_11 = MSG_EXTERNAL_1628382286062172232$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS___12;
    }
    else {
        i18n_11 = $localize `:␟bbffadc040d79a90f05c750b360e43a0cadce635␟1628382286062172232:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } let i18n_13; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7640074618766962714$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS__14 = goog.getMsg("Combobox v1");
        i18n_13 = MSG_EXTERNAL_7640074618766962714$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS__14;
    }
    else {
        i18n_13 = $localize `:␟fd0eb1f8a5bb5b6f11bc7132ee0fe30ea1eb12f8␟7640074618766962714:Combobox v1`;
    } let i18n_15; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1236517560182531840$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS__16 = goog.getMsg("Spinner");
        i18n_15 = MSG_EXTERNAL_1236517560182531840$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS__16;
    }
    else {
        i18n_15 = $localize `:␟7104de91c8c73253641d3792fb3b4e2fb8c9c2d2␟1236517560182531840:Spinner`;
    } let i18n_17; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_533206746245095297$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS__18 = goog.getMsg("Optional spinner description");
        i18n_17 = MSG_EXTERNAL_533206746245095297$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_ZINDEX_TEST_DIALOG_ZINDEX_TEST_COMPONENT_TS__18;
    }
    else {
        i18n_17 = $localize `:␟91ccfaf08fe940b3e859dd3eaa40073cb40a0610␟533206746245095297:Optional spinner description`;
    } return [["id", "nui-visual-test-open-overlay-btn", "nui-button", "", "type", "button", 3, "click"], ["smallOverlayContent", ""], ["mainOverlayContent", ""], ["smallDialogContent", ""], ["innerDialogContent", ""], ["menu", ""], ["popup", ""], ["select", ""], ["combobox", ""], ["spinner", ""], ["busyTemplate", ""], ["dtPicker", ""], ["timeframeBarTemplate", ""], ["popover", ""], ["tooltip", ""], ["loremIpsum", ""], [1, "overlay-container"], [1, "overlay-body"], [4, "ngTemplateOutlet"], [1, "overlay-footer"], ["id", "nui-visual-test-open-small-dialog-btn", "nui-button", "", "type", "button", 3, "click"], ["id", "nui-visual-test-close-overlay-from-small-btn", "nui-button", "", "type", "button", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nui-button", "", "type", "button", 3, "click"], ["id", "nui-visual-test-switch-appendToBody-btn", "nui-button", "", "type", "button", 3, "click"], i18n_0, ["id", "nui-visual-test-switch-busy-btn", "nui-button", "", "type", "button", 3, "click"], i18n_2, ["id", "nui-visual-test-inner-dialog-btn", "nui-button", "", "type", "button", 3, "click"], ["title", "Small Dialog Title", 3, "closed"], [1, "dialog-body"], ["id", "nui-visual-test-close-small-dialog-btn", "nui-button", "", "type", "button", 3, "click"], ["title", "Inner Dialog Title", 3, "closed"], ["id", "nui-visual-test-open-overlay-from-dialog-btn", "nui-button", "", "type", "button", 3, "click"], ["id", "nui-visual-test-open-small-dialog-from-dialog-btn", "nui-button", "", "type", "button", 3, "click"], i18n_6, ["title", "Menu", 1, "clickable-visual-item", 3, "appendToBody"], [4, "ngFor", "ngForOf"], [1, "clickable-visual-item", 3, "appendToBody"], ["nui-button", "", "nuiPopupToggle", "", "type", "button", "icon", "caret-down", 1, "menu-button", 3, "iconRight", "isEmpty"], i18n_9, ["popupAreaContent", ""], ["tabindex", "0", "nuiTooltip", "This tooltip is part of a menu item"], ["placeholder", "Select v1", 1, "clickable-visual-item", 3, "itemsSource", "inline", "appendToBody"], ["placeholder", "Select v2", 1, "clickable-visual-item", "d-inline-flex"], [3, "value"], i18n_11, ["placeholder", i18n_13, 1, "clickable-visual-item", 3, "itemsSource", "inline", "appendToBody"], ["placeholder", "Combobox v2", 1, "clickable-visual-item", "d-inline-flex"], [1, "d-flex", "align-items-center"], [3, "nuiComboboxV2OptionHighlight"], ["size", "large", "message", i18n_15, "helpText", i18n_17, 3, "show"], ["nui-busy", "", 1, "busy-content", 3, "busy"], ["tooltipPlacement", "bottom", 1, "nui-text-widget--hoverable", 3, "nuiTooltip"], [1, "inline-flex"], ["displayMode", "inline", 1, "clickable-visual-item", 3, "appendToBody", "model"], [3, "timeFrame", "timeFrameChange"], ["icon", "calendar", 1, "pr-3"], ["timeFrameSelection", ""], ["tabindex", "1", "trigger", "focus", 1, "clickable-visual-item", 3, "template"], [1, "nui-text-widget--hoverable"], ["popoverWithBasicUsage", ""], [1, "nui-text-widget--hoverable", 3, "nuiTooltip"], ["id", "long-text-tooltip", "nuiTooltip", "Tooltip should appear on top of any other components (popup, popover, menu,etc.) even if it's displayed after the popover has been displayed.", "tooltipPlacement", "bottom", 1, "nui-text-widget--hoverable"]]; }, template: function DialogZIndexTestComponent_Template(rf, ctx) { if (rf & 1) {
        const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "nui-simple-dialog-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Usage as a Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "nui-component-as-content-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Severity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "nui-dialog-severity-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Custom Dialog header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "nui-header-buttons-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Dialog Sizes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "nui-dialog-sizes-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Position on screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "nui-dialog-position-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Custom class");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "nui-dialog-custom-class-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Confirmation Dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "nui-confirmation-dialog-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Keyboard Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "nui-dialog-with-keyboard-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Static Backdrop");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "nui-dialog-with-static-backdrop-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Z-Index Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogZIndexTestComponent_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r89); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](37); return ctx.openOverlay(_r2, "60%", "400px"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Open overlay\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, DialogZIndexTestComponent_ng_template_34_Template, 8, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, DialogZIndexTestComponent_ng_template_36_Template, 25, 16, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, DialogZIndexTestComponent_ng_template_38_Template, 6, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, DialogZIndexTestComponent_ng_template_40_Template, 25, 14, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, DialogZIndexTestComponent_ng_template_42_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, DialogZIndexTestComponent_ng_template_44_Template, 5, 4, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, DialogZIndexTestComponent_ng_template_46_Template, 3, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, DialogZIndexTestComponent_ng_template_48_Template, 3, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, DialogZIndexTestComponent_ng_template_50_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, DialogZIndexTestComponent_ng_template_52_Template, 5, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, DialogZIndexTestComponent_ng_template_54_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, DialogZIndexTestComponent_ng_template_56_Template, 6, 4, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, DialogZIndexTestComponent_ng_template_58_Template, 7, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, DialogZIndexTestComponent_ng_template_60_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, DialogZIndexTestComponent_ng_template_62_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_simple_dialog_simple_dialog_example_component__WEBPACK_IMPORTED_MODULE_5__["SimpleDialogExampleComponent"], _component_as_content_component_as_content_example_component__WEBPACK_IMPORTED_MODULE_6__["ComponentAsContentExampleComponent"], _dialog_severity_dialog_severity_example_component__WEBPACK_IMPORTED_MODULE_7__["DialogSeverityExampleComponent"], _header_buttons_header_buttons_example_component__WEBPACK_IMPORTED_MODULE_8__["HeaderButtonsExampleComponent"], _dialog_sizes_dialog_sizes_example_component__WEBPACK_IMPORTED_MODULE_9__["DialogSizesExampleComponent"], _dialog_position_dialog_position_example_component__WEBPACK_IMPORTED_MODULE_10__["DialogPositionExampleComponent"], _dialog_custom_class_dialog_custom_class_example_component__WEBPACK_IMPORTED_MODULE_11__["DialogCustomClassExampleComponent"], _confirmation_dialog_confirmation_dialog_example_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationDialogExampleComponent"], _dialog_keyboard_dialog_with_keyboard_example_component__WEBPACK_IMPORTED_MODULE_13__["DialogWithKeyboardExampleComponent"], _dialog_static_backdrop_dialog_with_static_backdrop_example_component__WEBPACK_IMPORTED_MODULE_14__["DialogWithStaticBackdropExampleComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_15__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgTemplateOutlet"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_17__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_18__["DialogFooterComponent"], _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_19__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _src_lib_menu_menu_item_menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_20__["MenuActionComponent"], _src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_21__["PopupComponent"], _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_22__["PopupToggleDirective"], _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_23__["MenuItemComponent"], _src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_24__["TooltipDirective"], _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_25__["SelectComponent"], _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_26__["SelectV2Component"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_27__["SelectV2OptionComponent"], _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_28__["ComboboxComponent"], _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_29__["ComboboxV2Component"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_30__["ComboboxV2OptionHighlightDirective"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_31__["SpinnerComponent"], _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_32__["BusyComponent"], _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_33__["DateTimePickerComponent"], _src_lib_convenience_time_frame_bar_time_frame_bar_component__WEBPACK_IMPORTED_MODULE_34__["TimeFrameBarComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_35__["IconComponent"], _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_36__["QuickPickerComponent"], _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_37__["TimeFramePickerComponent"], _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_38__["PopoverComponent"]], pipes: [_src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_39__["TimeFrameFormatPipe"]], styles: [".main-overlay-panel {\n  padding: 10px;\n  background: #fff;\n}\n.main-overlay-panel .overlay-footer {\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px;\n}\n.main-overlay-panel .overlay-footer button {\n  margin-left: 15px;\n}\n.busy-content {\n  border: 1px #d9d9d9 solid;\n  padding: 10px;\n}\n.inline-flex {\n  display: inline-flex;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy16aW5kZXgtdGVzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQURKO0FBREE7RUFLUSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBRFI7QUFOQTtFQVNZLGlCQUFBO0FBQVo7QUFLQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQUhKO0FBTUE7RUFDSSxvQkFBQTtBQUpKIiwiZmlsZSI6ImRpYWxvZy16aW5kZXgtdGVzdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJudWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG4ubWFpbi1vdmVybGF5LXBhbmVsIHtcbiAgICBwYWRkaW5nOiBAbnVpLXNwYWNlLXNtO1xuICAgIGJhY2tncm91bmQ6IEBudWktY29sb3ItYmctY29udGVudDtcblxuICAgIC5vdmVybGF5LWZvb3RlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIHBhZGRpbmc6IEBudWktc3BhY2Utc207XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJ1c3ktY29udGVudCB7XG4gICAgYm9yZGVyOiAxcHggQG51aS1jb2xvci1saW5lLWRlZmF1bHQgc29saWQ7XG4gICAgcGFkZGluZzogQG51aS1zcGFjZS1zbTtcbn1cblxuLmlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ "Ttcr":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-position/dialog-position.example.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject, TemplateRef } from \"@angular/core\";\nimport { DialogService, NuiDialogRef, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-dialog-position-example\",\n    templateUrl: \"./dialog-position.example.component.html\",\n})\nexport class DialogPositionExampleComponent {\n    public isResponsiveMode = false;\n    private activeDialog: NuiDialogRef;\n\n    constructor(@Inject(DialogService) private dialogService: DialogService,\n                @Inject(ToastService) private toastService: ToastService) {\n    }\n\n    public open(content: TemplateRef<string>, options: any) {\n        this.isResponsiveMode = options.isResponsiveMode;\n        this.activeDialog = this.dialogService.open(content);\n    }\n\n    public onButtonClick(title: string) {\n        title === \"Action\" ? this.actionDone() : this.actionCanceled();\n        this.activeDialog.close();\n    }\n\n    private actionDone(): void {\n        this.toastService.success({message: $localize `Action Done!`, title: $localize `Event`});\n    }\n\n    private actionCanceled(): void {\n        this.toastService.info({message: $localize `Action Cancelled!`, title: $localize `Event`});\n    }\n}\n");

/***/ }),

/***/ "UJKN":
/*!********************************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/component-as-content/component-as-content.example.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ComponentAsContentExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentAsContentExampleComponent", function() { return ComponentAsContentExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _dialog_content_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-content.example.component */ "DiX9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");





class ComponentAsContentExampleComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    openWithComponent() {
        const dialogRef = this.dialogService.open(_dialog_content_example_component__WEBPACK_IMPORTED_MODULE_1__["DialogContentExampleComponent"], { size: "sm" });
        dialogRef.componentInstance.name = $localize `Dialog title`;
    }
}
ComponentAsContentExampleComponent.ɵfac = function ComponentAsContentExampleComponent_Factory(t) { return new (t || ComponentAsContentExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["DialogService"])); };
ComponentAsContentExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ComponentAsContentExampleComponent, selectors: [["nui-component-as-content-example"]], decls: 2, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_COMPONENT_AS_CONTENT_COMPONENT_AS_CONTENT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Click me!");
        i18n_0 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_COMPONENT_AS_CONTENT_COMPONENT_AS_CONTENT_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟b37956781d4525308454d483be8c66447da39538␟2590927982756485133:Click me!`;
    } return [["nui-button", "", "type", "button", 3, "click"], i18n_0]; }, template: function ComponentAsContentExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ComponentAsContentExampleComponent_Template_button_click_0_listener() { return ctx.openWithComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], encapsulation: 2 });


/***/ }),

/***/ "W/vu":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-visual-test/dialog-visual-test.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject, TemplateRef } from \"@angular/core\";\nimport { DialogService, NuiDialogRef } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-dialog-visual-test\",\n    templateUrl: \"./dialog-visual-test.component.html\",\n})\nexport class DialogVisualTestComponent {\n    public severity: string;\n    private activeDialog: NuiDialogRef;\n    public isResponsiveMode = false;\n    public dataset = {\n        items: [\n            \"Item 1\",\n            \"Item 2\",\n            \"Item 3\",\n            \"Item 4\",\n            \"Item 5\",\n            \"Item 6\",\n            \"Item 7\",\n            \"Item 8\",\n            \"Item 9\",\n            \"Item 10\",\n            \"Item 11\",\n            \"Item 12\",\n            \"Item 13\",\n            \"Item 14\",\n            \"Item 15\",\n            \"Item 16\",\n            \"Item 17\",\n            \"Item 18\",\n            \"Item 19\",\n            \"Item 20\",\n        ],\n    };\n\n    constructor(@Inject(DialogService) private dialogService: DialogService) {}\n\n    public open(content: TemplateRef<string>, severity = \"\") {\n        this.severity = severity;\n        this.activeDialog = this.dialogService.open(content, {size: \"sm\"});\n    }\n\n    public openSizes(content: TemplateRef<string>, size: any) {\n        this.activeDialog = this.dialogService.open(content, {size});\n    }\n\n    public openResponsive(content: TemplateRef<string>, options: any) {\n        this.isResponsiveMode = options.isResponsiveMode;\n        this.activeDialog = this.dialogService.open(content);\n    }\n\n    public onButtonClick() {\n        this.activeDialog.close();\n    }\n\n    public confirmationDefaults() {\n        this.dialogService.confirm({\n            message: \"Should I do it?\",\n        });\n    }\n\n    public confirmationOverrides() {\n        this.dialogService.confirm({\n            message: \"Are you sure you want to do it?\",\n            title: \"Format hard drive\",\n            confirmText: \"Format\",\n            dismissText: \"No!\",\n            severity: \"warning\",\n        });\n    }\n}\n");

/***/ }),

/***/ "WQXM":
/*!****************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/dialog-sizes/dialog-sizes.example.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DialogSizesExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSizesExampleComponent", function() { return DialogSizesExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");







function DialogSizesExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DialogSizesExampleComponent_ng_template_0_Template_nui_dialog_header_closed_0_listener() { const close_r2 = ctx.close; return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogSizesExampleComponent_ng_template_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onButtonClick("Cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogSizesExampleComponent_ng_template_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onButtonClick("Action"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DialogSizesExampleComponent {
    constructor(dialogService, toastService) {
        this.dialogService = dialogService;
        this.toastService = toastService;
    }
    open(content, size) {
        this.activeDialog = this.dialogService.open(content, { size });
    }
    onButtonClick(title) {
        title === "Action" ? this.actionDone() : this.actionCanceled();
        this.activeDialog.close();
    }
    actionDone() {
        this.toastService.success({ message: $localize `Action Done!`, title: $localize `Event` });
    }
    actionCanceled() {
        this.toastService.info({ message: $localize `Action Cancelled!`, title: $localize `Event` });
    }
}
DialogSizesExampleComponent.ɵfac = function DialogSizesExampleComponent_Factory(t) { return new (t || DialogSizesExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
DialogSizesExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogSizesExampleComponent, selectors: [["nui-dialog-sizes-example"]], decls: 8, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SIZES_DIALOG_SIZES_EXAMPLE_COMPONENT_TS__1 = goog.getMsg("Dialog title");
        i18n_0 = MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SIZES_DIALOG_SIZES_EXAMPLE_COMPONENT_TS__1;
    }
    else {
        i18n_0 = $localize `:␟eeb379308b8767b98aa0d27308f4f8dd6b46e559␟5892089246202495025:Dialog title`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SIZES_DIALOG_SIZES_EXAMPLE_COMPONENT_TS__3 = goog.getMsg(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
        i18n_2 = MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SIZES_DIALOG_SIZES_EXAMPLE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟f62f9e2e728dea80e19b1e7a6f61424d55bab5ea␟7188163738299238705: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SIZES_DIALOG_SIZES_EXAMPLE_COMPONENT_TS__5 = goog.getMsg(" Cancel ");
        i18n_4 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SIZES_DIALOG_SIZES_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟bf844a41a29961b6dacc48a20eaf97bef0cf5013␟7452095619502551190: Cancel `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SIZES_DIALOG_SIZES_EXAMPLE_COMPONENT_TS__7 = goog.getMsg(" Action ");
        i18n_6 = MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_SIZES_DIALOG_SIZES_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟01b5385da84ee4b609f8273d7ae56600c3fb3cbe␟4946554391652567902: Action `;
    } return [["content", ""], ["id", "nui-demo-small-dialog-btn", "nui-button", "", "type", "button", 3, "click"], ["id", "nui-demo-medium-dialog-btn", "nui-button", "", "type", "button", 1, "ml-4", 3, "click"], ["id", "nui-demo-large-dialog-btn", "nui-button", "", "type", "button", 1, "ml-4", 3, "click"], ["title", i18n_0, 3, "closed"], [1, "dialog-body"], i18n_2, ["nui-button", "", "type", "button", 3, "click"], i18n_4, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_6]; }, template: function DialogSizesExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogSizesExampleComponent_ng_template_0_Template, 9, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogSizesExampleComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.open(_r0, "sm"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Show Small Dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogSizesExampleComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.open(_r0, "md"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Show Medium Dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogSizesExampleComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.open(_r0, "lg"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Show Large Dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_4__["DialogFooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "WRkj":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/simple-dialog/simple-dialog.example.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from \"@angular/core\";\nimport { DialogService, NuiDialogRef, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-simple-dialog-example\",\n    templateUrl: \"./simple-dialog.example.component.html\",\n})\nexport class SimpleDialogExampleComponent {\n    private activeDialog: NuiDialogRef;\n\n    constructor(private dialogService: DialogService, private toastService: ToastService) {}\n\n    public open(content: TemplateRef<string>) {\n        this.activeDialog = this.dialogService.open(content, {size: \"sm\"});\n    }\n\n    private actionDone(): void {\n        this.toastService.success({message: $localize `Action Done!`, title: $localize `Event`});\n        this.activeDialog.close();\n    }\n\n    private actionCanceled(): void {\n        this.toastService.info({message: $localize `Action Cancelled!`, title: $localize `Event`});\n        this.activeDialog.close();\n    }\n}\n");

/***/ }),

/***/ "Xe06":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-actions-before-closure/dialog-actions-before-closure.example.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from \"@angular/core\";\nimport { DialogService, NuiDialogEvent, NuiDialogRef } from \"@nova-ui/bits\";\nimport { take, takeUntil } from \"rxjs/operators\";\n\n@Component({\n    selector: \"nui-dialog-actions-before-closure-example\",\n    templateUrl: \"./dialog-actions-before-closure.example.component.html\",\n})\nexport class DialogActionBeforeClosureExampleComponent {\n    private activeDialog: NuiDialogRef;\n\n    constructor(private dialogService: DialogService) {}\n\n    public open(content: TemplateRef<string>) {\n        // You can return 'false' from the optional beforeDismiss function anytime you want to prevent the dialog from closing.\n        this.activeDialog = this.dialogService.open(content, {size: \"sm\", beforeDismiss: this.beforeDismiss});\n\n        // You can use the beforeDismissed$ event to execute actions right before the dialog gets closed\n        this.activeDialog\n            .beforeDismissed$\n            .pipe(\n                // Be sure to unsubscribe on dialog closure\n                takeUntil(this.activeDialog.closed$)\n            )\n            .subscribe(event => {\n                // A dialog will typically close in response to the escape key\n                if (event === NuiDialogEvent.EscapeKey) {\n                    console.log($localize`ESC CLOSED`);\n                }\n                // Covering the 'BACKDROP_CLICK' event in case of clearing the dialog by clicking the backdrop\n                if (event === NuiDialogEvent.BackdropClick) {\n                    console.log($localize`BACKDROP CLICK CLOSED`);\n                    return;\n                }\n                // Here we cover the custom 'DONE' event which you can create and then capture within the 'beforeDismissed$' subscription\n                // to run your custom logic in response to that event right before the dialog closure.  See 'actionDone' implementation below.\n                if (event === \"DONE\") {\n                    console.log($localize`DONE`);\n                    return;\n                }\n                // Set of actions for all event origins before the dialog closes\n                console.log($localize`BEFORE CLOSED`);\n                // Manually close the dialog since the `beforeDismiss` implementation below short-circuits dismissal with its 'false' return value\n                this.activeDialog.close();\n            });\n\n        // You can perform any required actions just after dialog closure here\n        this.activeDialog.closed$.pipe(take(1)).subscribe(() => {\n            console.log($localize`CLOSED`);\n        });\n    }\n\n    public actionDone(): void {\n        console.log($localize`ACTION DONE`);\n        this.activeDialog.dismiss(\"DONE\");\n    }\n\n    public actionCanceled(): void {\n        console.log($localize`ACTION CANCELED`);\n        this.activeDialog.dismiss();\n    }\n\n    public beforeDismiss() {\n        return false;\n    }\n\n    public closeFromHeader() {\n        console.log($localize`CLOSE BUTTON CLICKED`);\n        this.activeDialog.dismiss();\n    }\n}\n");

/***/ }),

/***/ "XlTl":
/*!********************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/dialog-visual-test/dialog-visual-test.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DialogVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogVisualTestComponent", function() { return DialogVisualTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/select/select.component */ "8Za4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function DialogVisualTestComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DialogVisualTestComponent_ng_template_2_Template_nui_dialog_header_closed_0_listener() { const close_r6 = ctx.close; return close_r6(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_ng_template_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onButtonClick("Cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_ng_template_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onButtonClick("Action"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("severity", ctx_r1.severity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isEmpty", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isEmpty", false);
} }
function DialogVisualTestComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DialogVisualTestComponent_ng_template_31_Template_nui_dialog_header_closed_0_listener() { const close_r11 = ctx.close; return close_r11(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_ng_template_31_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onButtonClick("Cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_ng_template_31_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onButtonClick("Action"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx_r3.dataset.items);
} }
const _c0 = function (a0) { return { "responsive-mode": a0 }; };
function DialogVisualTestComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DialogVisualTestComponent_ng_template_48_Template_nui_dialog_header_closed_0_listener() { const close_r16 = ctx.close; return close_r16(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Quisque ut pellentesque augue. Ut finibus malesuada lacus, a elementum odio eleifend ac. Duis faucibus vehicula elit. Pellentesque id metus enim. Praesent vestibulum ipsum vel venenatis vehicula. Donec vel erat ex. Vivamus porta risus vitae risus tempus accumsan. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Duis euismod erat id metus euismod, interdum iaculis turpis tempus. Nulla facilisi. Pellentesque ut purus nec lorem aliquam dictum ut sit amet enim. Mauris laoreet vel mi eget suscipit. Aliquam ipsum lacus, varius sed felis non, aliquet ultrices nisl. In tincidunt quam sed faucibus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque elit sem, id aliquet metus egestas sit amet. Maecenas quis justo in turpis lacinia aliquet. Donec dignissim dolor nunc, in ultricies ligula sodales tincidunt. Phasellus in nisi ac metus rutrum efficitur eu sed mi. Praesent et porta leo. Curabitur sed maximus lectus. Aenean ac ex metus. Integer facilisis id sapien quis sodales. Nam at eros sapien. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Mauris consequat lectus diam. Cras auctor vestibulum lectus, id pharetra nisl dapibus id. Sed tempor enim vel diam tincidunt condimentum. Ut elementum, ante in ultricies pulvinar, elit metus faucibus mauris, eu sodales lectus risus sit amet odio. Sed ullamcorper maximus ante, ut lobortis libero rutrum lacinia. Nam pretium erat ac velit egestas rutrum ultrices vel libero. Etiam sollicitudin tempus leo. Quisque a elit a orci fringilla molestie. Curabitur luctus dui risus, eget commodo lectus ullamcorper sit amet. Nulla turpis ante, venenatis tempor ex semper, semper vulputate enim. Duis sem nulla, egestas eu rhoncus et, egestas malesuada neque. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Fusce ut malesuada est. Ut ut placerat nunc. Vivamus mauris nisi, luctus nec turpis quis, luctus porta ante. Aliquam erat volutpat. Nulla facilisi. Maecenas id vehicula sem. Sed vitae sodales orci, sed pretium mauris. Maecenas orci est, volutpat sit amet elit in, gravida finibus justo. Vestibulum eget eros id risus elementum interdum eu quis nisi. Donec ullamcorper enim tincidunt, volutpat sem et, gravida sem. Fusce vitae tellus mauris. Nam non bibendum urna. Ut vel pellentesque est, quis egestas ex. Nam lobortis quam eget arcu tristique, id suscipit enim volutpat. Quisque pretium vel nisl eu aliquet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Quisque ut pellentesque augue. Ut finibus malesuada lacus, a elementum odio eleifend ac. Duis faucibus vehicula elit. Pellentesque id metus enim. Praesent vestibulum ipsum vel venenatis vehicula. Donec vel erat ex. Vivamus porta risus vitae risus tempus accumsan. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Duis euismod erat id metus euismod, interdum iaculis turpis tempus. Nulla facilisi. Pellentesque ut purus nec lorem aliquam dictum ut sit amet enim. Mauris laoreet vel mi eget suscipit. Aliquam ipsum lacus, varius sed felis non, aliquet ultrices nisl. In tincidunt quam sed faucibus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque elit sem, id aliquet metus egestas sit amet. Maecenas quis justo in turpis lacinia aliquet. Donec dignissim dolor nunc, in ultricies ligula sodales tincidunt. Phasellus in nisi ac metus rutrum efficitur eu sed mi. Praesent et porta leo. Curabitur sed maximus lectus. Aenean ac ex metus. Integer facilisis id sapien quis sodales. Nam at eros sapien. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Mauris consequat lectus diam. Cras auctor vestibulum lectus, id pharetra nisl dapibus id. Sed tempor enim vel diam tincidunt condimentum. Ut elementum, ante in ultricies pulvinar, elit metus faucibus mauris, eu sodales lectus risus sit amet odio. Sed ullamcorper maximus ante, ut lobortis libero rutrum lacinia. Nam pretium erat ac velit egestas rutrum ultrices vel libero. Etiam sollicitudin tempus leo. Quisque a elit a orci fringilla molestie. Curabitur luctus dui risus, eget commodo lectus ullamcorper sit amet. Nulla turpis ante, venenatis tempor ex semper, semper vulputate enim. Duis sem nulla, egestas eu rhoncus et, egestas malesuada neque. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Fusce ut malesuada est. Ut ut placerat nunc. Vivamus mauris nisi, luctus nec turpis quis, luctus porta ante. Aliquam erat volutpat. Nulla facilisi. Maecenas id vehicula sem. Sed vitae sodales orci, sed pretium mauris. Maecenas orci est, volutpat sit amet elit in, gravida finibus justo. Vestibulum eget eros id risus elementum interdum eu quis nisi. Donec ullamcorper enim tincidunt, volutpat sem et, gravida sem. Fusce vitae tellus mauris. Nam non bibendum urna. Ut vel pellentesque est, quis egestas ex. Nam lobortis quam eget arcu tristique, id suscipit enim volutpat. Quisque pretium vel nisl eu aliquet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_ng_template_48_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onButtonClick("Cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_ng_template_48_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onButtonClick("Action"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r5.isResponsiveMode));
} }
class DialogVisualTestComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.isResponsiveMode = false;
        this.dataset = {
            items: [
                "Item 1",
                "Item 2",
                "Item 3",
                "Item 4",
                "Item 5",
                "Item 6",
                "Item 7",
                "Item 8",
                "Item 9",
                "Item 10",
                "Item 11",
                "Item 12",
                "Item 13",
                "Item 14",
                "Item 15",
                "Item 16",
                "Item 17",
                "Item 18",
                "Item 19",
                "Item 20",
            ],
        };
    }
    open(content, severity = "") {
        this.severity = severity;
        this.activeDialog = this.dialogService.open(content, { size: "sm" });
    }
    openSizes(content, size) {
        this.activeDialog = this.dialogService.open(content, { size });
    }
    openResponsive(content, options) {
        this.isResponsiveMode = options.isResponsiveMode;
        this.activeDialog = this.dialogService.open(content);
    }
    onButtonClick() {
        this.activeDialog.close();
    }
    confirmationDefaults() {
        this.dialogService.confirm({
            message: "Should I do it?",
        });
    }
    confirmationOverrides() {
        this.dialogService.confirm({
            message: "Are you sure you want to do it?",
            title: "Format hard drive",
            confirmText: "Format",
            dismissText: "No!",
            severity: "warning",
        });
    }
}
DialogVisualTestComponent.ɵfac = function DialogVisualTestComponent_Factory(t) { return new (t || DialogVisualTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
DialogVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogVisualTestComponent, selectors: [["nui-dialog-visual-test"]], decls: 58, vars: 0, consts: [[1, "container"], ["content", ""], ["id", "nui-visual-test-default-dialog-btn", 3, "click"], ["id", "nui-visual-test-critical-dialog-btn", 3, "click"], ["id", "nui-visual-test-warning-dialog-btn", 3, "click"], ["id", "nui-visual-test-info-dialog-btn", 3, "click"], ["id", "nui-visual-test-small-dialog-btn", 3, "click"], ["id", "nui-visual-test-medium-dialog-btn", 3, "click"], ["id", "nui-visual-test-large-dialog-btn", 3, "click"], ["headerButtonsContent", ""], ["id", "nui-visual-test-custom-actions-dialog-btn", 3, "click"], ["id", "nui-visual-test-confirmation-dialog-defaults-btn", 3, "click"], ["id", "nui-visual-test-confirmation-dialog-overrides-btn", 3, "click"], ["contentResponsiveMode", ""], ["id", "nui-visual-test-long-dialog-btn", 3, "click"], ["id", "nui-visual-test-responsive-dialog-btn", 3, "click"], ["title", "Dialog title", 3, "severity", "closed"], [1, "dialog-body"], ["nui-button", "", "type", "button", 3, "isEmpty", "click"], ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "isEmpty", "click"], ["title", "Dialog title", 3, "closed"], ["nui-button", "", "type", "button", "displayStyle", "action", "icon", "fullscreen"], ["nui-button", "", "type", "button", "displayStyle", "action", "icon", "menu"], ["id", "nui-visual-basic-select", "placeholder", "Select item", 3, "itemsSource"], ["nui-button", "", "type", "button", 3, "click"], ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], [1, "dialog-body", 3, "ngClass"], ["displayStyle", "primary", "nui-button", "", "type", "button", 3, "click"]], template: function DialogVisualTestComponent_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogVisualTestComponent_ng_template_2_Template, 9, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Basic Dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Click me! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dialogs with Different Severity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.open(_r0, "critical"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Show Critical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.open(_r0, "warning"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Show Warning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.open(_r0, "info"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Show Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Dialogs with Different Sizes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.openSizes(_r0, "sm"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Show Small Dialog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.openSizes(_r0, "md"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Show Medium Dialog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.openSizes(_r0, "lg"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Show Large Dialog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DialogVisualTestComponent_ng_template_31_Template, 12, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Custom Dialog Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return ctx.open(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " More actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Confirmation Dialogs with Defaults and Overrides");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_Template_button_click_42_listener() { return ctx.confirmationDefaults(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Show Confirmation with defaults ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_Template_button_click_44_listener() { return ctx.confirmationOverrides(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Show Confirmation with overrides ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DialogVisualTestComponent_ng_template_48_Template, 27, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Position on Screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49); return ctx.openResponsive(_r4, { isResponsiveMode: false }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Default mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogVisualTestComponent_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49); return ctx.openResponsive(_r4, { isResponsiveMode: true }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Responsive mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_2__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_3__["DialogFooterComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], encapsulation: 2 });


/***/ }),

/***/ "Zep8":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/confirmation-dialog/confirmation-dialog.example.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject } from \"@angular/core\";\nimport { DialogService, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-confirmation-dialog-example\",\n    templateUrl: \"./confirmation-dialog.example.component.html\",\n})\nexport class ConfirmationDialogExampleComponent {\n    constructor(@Inject(DialogService) private dialogService: DialogService,\n                @Inject(ToastService) private toastService: ToastService) {\n    }\n\n    public openInfo() {\n        this.dialogService.confirm({ message: $localize `Are you sure you want to do it?`, severity: \"info\", setFocus: \"confirm\" }).result\n            .then((result) => {\n                this.toastService.info({message: result ? $localize `Confirmed` : $localize `Dismissed`});\n            }, (reason) => {\n                console.log(\"Rejected:\", reason);\n            });\n    }\n    public openWarning() {\n        this.dialogService.confirm({ message: $localize `Are you sure you want to do it?`, severity: \"warning\", setFocus: \"dismiss\" }).result\n            .then((result) => {\n                this.toastService.info({message: result ? $localize `Confirmed` : $localize `Dismissed`});\n            }, (reason) => {\n                console.log(\"Rejected:\", reason);\n            });\n    }\n    public openCritical() {\n        this.dialogService.confirm({ message: $localize `Are you sure you want to do it?`, severity: \"critical\", setFocus: \"dismiss\" }).result\n            .then((result) => {\n                this.toastService.info({message: result ? $localize `Confirmed` : $localize `Dismissed`});\n            }, (reason) => {\n                console.log(\"Rejected:\", reason);\n            });\n    }\n}\n");

/***/ }),

/***/ "ataZ":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-keyboard/dialog-with-keyboard.example.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject, TemplateRef } from \"@angular/core\";\nimport { DialogService, NuiDialogRef, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-dialog-with-keyboard-example\",\n    templateUrl: \"./dialog-with-keyboard.example.component.html\",\n})\nexport class DialogWithKeyboardExampleComponent {\n    private activeDialog: NuiDialogRef;\n\n    constructor(@Inject(DialogService) private dialogService: DialogService,\n                @Inject(ToastService) private toastService: ToastService) {\n    }\n\n    public openWith(content: TemplateRef<string>) {\n        this.activeDialog = this.dialogService.open(content, {size: \"sm\"});\n    }\n    public openWithout(content: TemplateRef<string>) {\n        this.activeDialog = this.dialogService.open(content, {size: \"sm\", keyboard: false});\n    }\n\n    private actionDone(): void {\n        this.toastService.success({message: $localize `Action Done!`, title: $localize `Event`});\n        this.activeDialog.close();\n    }\n\n    private actionCanceled(): void {\n        this.toastService.info({message: $localize `Action Cancelled!`, title: $localize `Event`});\n        this.activeDialog.close();\n    }\n}\n");

/***/ }),

/***/ "b7fi":
/*!******************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/simple-dialog/simple-dialog.example.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SimpleDialogExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleDialogExampleComponent", function() { return SimpleDialogExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");







function SimpleDialogExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function SimpleDialogExampleComponent_ng_template_0_Template_nui_dialog_header_closed_0_listener() { const close_r2 = ctx.close; return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleDialogExampleComponent_ng_template_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const close_r2 = ctx.close; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r5.actionCanceled(); return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleDialogExampleComponent_ng_template_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const close_r2 = ctx.close; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r7.actionDone(); return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SimpleDialogExampleComponent {
    constructor(dialogService, toastService) {
        this.dialogService = dialogService;
        this.toastService = toastService;
    }
    open(content) {
        this.activeDialog = this.dialogService.open(content, { size: "sm" });
    }
    actionDone() {
        this.toastService.success({ message: $localize `Action Done!`, title: $localize `Event` });
        this.activeDialog.close();
    }
    actionCanceled() {
        this.toastService.info({ message: $localize `Action Cancelled!`, title: $localize `Event` });
        this.activeDialog.close();
    }
}
SimpleDialogExampleComponent.ɵfac = function SimpleDialogExampleComponent_Factory(t) { return new (t || SimpleDialogExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
SimpleDialogExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimpleDialogExampleComponent, selectors: [["nui-simple-dialog-example"]], decls: 4, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_SIMPLE_DIALOG_SIMPLE_DIALOG_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Click me!");
        i18n_0 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_SIMPLE_DIALOG_SIMPLE_DIALOG_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟b37956781d4525308454d483be8c66447da39538␟2590927982756485133:Click me!`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_SIMPLE_DIALOG_SIMPLE_DIALOG_EXAMPLE_COMPONENT_TS__3 = goog.getMsg("Dialog title");
        i18n_2 = MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_SIMPLE_DIALOG_SIMPLE_DIALOG_EXAMPLE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟eeb379308b8767b98aa0d27308f4f8dd6b46e559␟5892089246202495025:Dialog title`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_SIMPLE_DIALOG_SIMPLE_DIALOG_EXAMPLE_COMPONENT_TS__5 = goog.getMsg(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
        i18n_4 = MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_SIMPLE_DIALOG_SIMPLE_DIALOG_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟f62f9e2e728dea80e19b1e7a6f61424d55bab5ea␟7188163738299238705: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_SIMPLE_DIALOG_SIMPLE_DIALOG_EXAMPLE_COMPONENT_TS__7 = goog.getMsg(" Cancel ");
        i18n_6 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_SIMPLE_DIALOG_SIMPLE_DIALOG_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟bf844a41a29961b6dacc48a20eaf97bef0cf5013␟7452095619502551190: Cancel `;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_SIMPLE_DIALOG_SIMPLE_DIALOG_EXAMPLE_COMPONENT_TS__9 = goog.getMsg(" Action ");
        i18n_8 = MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_SIMPLE_DIALOG_SIMPLE_DIALOG_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟01b5385da84ee4b609f8273d7ae56600c3fb3cbe␟4946554391652567902: Action `;
    } return [["content", ""], ["id", "nui-demo-default-dialog-btn", "nui-button", "", "type", "button", 3, "click"], i18n_0, ["title", i18n_2, 3, "closed"], [1, "dialog-body"], i18n_4, ["nui-button", "", "type", "button", 3, "click"], i18n_6, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_8]; }, template: function SimpleDialogExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SimpleDialogExampleComponent_ng_template_0_Template, 9, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleDialogExampleComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_3__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_4__["DialogFooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "bfkP":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-position/dialog-position.example.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-close=\"close\">\n    {{test}}\n\n    <nui-dialog-header title=\"Dialog title\" i18n-title (closed)=\"close()\"></nui-dialog-header>\n    <div class=\"dialog-body\" [ngClass]=\"{'responsive-mode': isResponsiveMode}\">\n        <p i18n>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n            Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n            Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n            Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n            Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n        </p>\n\n        <p i18n>\n            Quisque ut pellentesque augue. Ut finibus malesuada lacus, a elementum odio eleifend ac.\n            Duis faucibus vehicula elit.\n            Pellentesque id metus enim. Praesent vestibulum ipsum vel venenatis vehicula. Donec vel erat ex.\n            Vivamus porta risus vitae risus tempus accumsan.\n        </p>\n\n        <p i18n>\n            Duis euismod erat id metus euismod, interdum iaculis turpis tempus. Nulla facilisi.\n            Pellentesque ut purus nec lorem aliquam dictum ut sit amet enim.\n            Mauris laoreet vel mi eget suscipit. Aliquam ipsum lacus, varius sed felis non, aliquet ultrices nisl.\n            In tincidunt quam sed faucibus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Duis pellentesque elit sem, id aliquet metus egestas sit amet. Maecenas quis justo in turpis lacinia aliquet.\n            Donec dignissim dolor nunc, in ultricies ligula sodales tincidunt.\n            Phasellus in nisi ac metus rutrum efficitur eu sed mi. Praesent et porta leo.\n            Curabitur sed maximus lectus. Aenean ac ex metus. Integer facilisis id sapien quis sodales. Nam at eros sapien.\n        </p>\n\n        <p i18n>\n            Mauris consequat lectus diam. Cras auctor vestibulum lectus, id pharetra nisl dapibus id.\n            Sed tempor enim vel diam tincidunt condimentum.\n            Ut elementum, ante in ultricies pulvinar, elit metus faucibus mauris, eu sodales lectus risus sit amet odio.\n            Sed ullamcorper maximus ante, ut lobortis libero rutrum lacinia.\n            Nam pretium erat ac velit egestas rutrum ultrices vel libero. Etiam sollicitudin tempus leo.\n            Quisque a elit a orci fringilla molestie. Curabitur luctus dui risus, eget commodo lectus ullamcorper sit amet.\n            Nulla turpis ante, venenatis tempor ex semper, semper vulputate enim.\n            Duis sem nulla, egestas eu rhoncus et, egestas malesuada neque.\n        </p>\n\n        <p i18n>\n            Fusce ut malesuada est. Ut ut placerat nunc. Vivamus mauris nisi, luctus nec turpis quis, luctus porta ante.\n            Aliquam erat volutpat. Nulla facilisi. Maecenas id vehicula sem. Sed vitae sodales orci, sed pretium mauris.\n            Maecenas orci est, volutpat sit amet elit in, gravida finibus justo.\n            Vestibulum eget eros id risus elementum interdum eu quis nisi.\n            Donec ullamcorper enim tincidunt, volutpat sem et, gravida sem.\n            Fusce vitae tellus mauris. Nam non bibendum urna. Ut vel pellentesque est, quis egestas ex.\n            Nam lobortis quam eget arcu tristique, id suscipit enim volutpat.\n            Quisque pretium vel nisl eu aliquet.\n        </p>\n\n        <p i18n>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n            Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n            Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n            Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n            Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n        </p>\n\n        <p i18n>\n            Quisque ut pellentesque augue. Ut finibus malesuada lacus, a elementum odio eleifend ac.\n            Duis faucibus vehicula elit.\n            Pellentesque id metus enim. Praesent vestibulum ipsum vel venenatis vehicula. Donec vel erat ex.\n            Vivamus porta risus vitae risus tempus accumsan.\n        </p>\n\n        <p i18n>\n            Duis euismod erat id metus euismod, interdum iaculis turpis tempus. Nulla facilisi.\n            Pellentesque ut purus nec lorem aliquam dictum ut sit amet enim.\n            Mauris laoreet vel mi eget suscipit. Aliquam ipsum lacus, varius sed felis non, aliquet ultrices nisl.\n            In tincidunt quam sed faucibus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Duis pellentesque elit sem, id aliquet metus egestas sit amet. Maecenas quis justo in turpis lacinia aliquet.\n            Donec dignissim dolor nunc, in ultricies ligula sodales tincidunt.\n            Phasellus in nisi ac metus rutrum efficitur eu sed mi. Praesent et porta leo.\n            Curabitur sed maximus lectus. Aenean ac ex metus. Integer facilisis id sapien quis sodales. Nam at eros sapien.\n        </p>\n\n        <p i18n>\n            Mauris consequat lectus diam. Cras auctor vestibulum lectus, id pharetra nisl dapibus id.\n            Sed tempor enim vel diam tincidunt condimentum.\n            Ut elementum, ante in ultricies pulvinar, elit metus faucibus mauris, eu sodales lectus risus sit amet odio.\n            Sed ullamcorper maximus ante, ut lobortis libero rutrum lacinia.\n            Nam pretium erat ac velit egestas rutrum ultrices vel libero. Etiam sollicitudin tempus leo.\n            Quisque a elit a orci fringilla molestie. Curabitur luctus dui risus, eget commodo lectus ullamcorper sit amet.\n            Nulla turpis ante, venenatis tempor ex semper, semper vulputate enim.\n            Duis sem nulla, egestas eu rhoncus et, egestas malesuada neque.\n        </p>\n\n        <p i18n>\n            Fusce ut malesuada est. Ut ut placerat nunc. Vivamus mauris nisi, luctus nec turpis quis, luctus porta ante.\n            Aliquam erat volutpat. Nulla facilisi. Maecenas id vehicula sem. Sed vitae sodales orci, sed pretium mauris.\n            Maecenas orci est, volutpat sit amet elit in, gravida finibus justo.\n            Vestibulum eget eros id risus elementum interdum eu quis nisi.\n            Donec ullamcorper enim tincidunt, volutpat sem et, gravida sem.\n            Fusce vitae tellus mauris. Nam non bibendum urna. Ut vel pellentesque est, quis egestas ex.\n            Nam lobortis quam eget arcu tristique, id suscipit enim volutpat.\n            Quisque pretium vel nisl eu aliquet.\n        </p>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\"\n                (click)=\"onButtonClick('Cancel')\" i18n>\n            Cancel\n        </button>\n        <button nui-button type=\"button\"\n                displayStyle=\"primary\"\n                (click)=\"onButtonClick('Action')\" i18n>\n            Action\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n\n<button id=\"long-dialog\" nui-button type=\"button\" (click)=\"open(content, { isResponsiveMode: false })\" i18n>Default mode</button>\n<button id=\"responsive-dialog\" class=\"ml-4\" nui-button type=\"button\" (click)=\"open(content, { isResponsiveMode: true })\" i18n>Responsive mode</button>\n");

/***/ }),

/***/ "cRSG":
/*!******************************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/dialog-after-opened/dialog-after-opened.example.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DialogAfterOpenedExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAfterOpenedExampleComponent", function() { return DialogAfterOpenedExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _component_as_content_dialog_content_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component-as-content/dialog-content.example.component */ "DiX9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");







class DialogAfterOpenedExampleComponent {
    constructor(dialogService, toastService) {
        this.dialogService = dialogService;
        this.toastService = toastService;
        this.destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.dialogService.afterOpened$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$$)).subscribe((dialog) => {
            if (dialog.componentInstance) {
                this.toastService.info({ message: `${dialog.componentInstance.constructor.name} was opened` });
            }
        });
    }
    ngOnDestroy() {
        this.destroy$$.next();
        this.destroy$$.complete();
    }
    openConfirmationDialog() {
        this.dialogService.confirm({
            message: $localize `Are you sure you want to do it?`,
            severity: "info",
            setFocus: "confirm",
            title: "Confirmation dialog",
        });
    }
    openWithComponent() {
        const dialogRef = this.dialogService.open(_component_as_content_dialog_content_example_component__WEBPACK_IMPORTED_MODULE_3__["DialogContentExampleComponent"], { size: "sm" });
        dialogRef.componentInstance.name = $localize `Dialog title`;
    }
}
DialogAfterOpenedExampleComponent.ɵfac = function DialogAfterOpenedExampleComponent_Factory(t) { return new (t || DialogAfterOpenedExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
DialogAfterOpenedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DialogAfterOpenedExampleComponent, selectors: [["nui-dialog-after-opened-example"]], decls: 4, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1234709746630139322$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_AFTER_OPENED_DIALOG_AFTER_OPENED_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Confirmation");
        i18n_0 = MSG_EXTERNAL_1234709746630139322$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_AFTER_OPENED_DIALOG_AFTER_OPENED_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟0295e37c88ba1f28e569a35e3c6871b90529f8fa␟1234709746630139322:Confirmation`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3430685457871714277$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_AFTER_OPENED_DIALOG_AFTER_OPENED_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Custom Component");
        i18n_2 = MSG_EXTERNAL_3430685457871714277$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_AFTER_OPENED_DIALOG_AFTER_OPENED_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟7c0d61347451ea1341c14bb971c57c24cd4165e6␟3430685457871714277:Custom Component`;
    } return [["nui-button", "", "type", "button", 3, "click"], i18n_0, ["nui-button", "", "type", "button", 1, "ml-4", 3, "click"], i18n_2]; }, template: function DialogAfterOpenedExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogAfterOpenedExampleComponent_Template_button_click_0_listener() { return ctx.openConfirmationDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogAfterOpenedExampleComponent_Template_button_click_2_listener() { return ctx.openWithComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]], encapsulation: 2 });


/***/ }),

/***/ "e0nl":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-docs/dialog-docs.example.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code> NuiDialogModule </code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n\n<p>\n    Dialog can be added by passing <code>template</code> to the <code>DialogService's open</code> method.\n    You can pass the result of the dialog or the reason why dialog is dismissed by using <code>close</code> or <code>dismiss</code> methods in your ng-template.\n    All passed data can be handled by <code>result</code> property of dialog's <code>open</code> method.\n</p>\n<nui-example-wrapper filenamePrefix=\"simple-dialog\" exampleTitle=\"Simple dialog\">\n    <nui-simple-dialog-example></nui-simple-dialog-example>\n</nui-example-wrapper>\n\n<h2>Usage as a Component</h2>\n\n<p>You can pass an existing component as content of the dialog window. </p>\n<p>In this case remember to add content component as an entryComponents section of your NgModule.</p>\n<p>For this case you need to pass the component's class name to the <code>open</code> method of <code>DialogService</code>.</p>\n<p>See both example panels below.</p>\n<nui-example-wrapper filenamePrefix=\"component-as-content\" exampleTitle=\"Component as content for dialog\">\n    <nui-component-as-content-example></nui-component-as-content-example>\n</nui-example-wrapper>\n<nui-example-wrapper filenamePrefix=\"dialog-content\" exampleTitle=\"Dialog Content Example Component\">\n    <p>The code of this example panel is related to the example above. It only shows code.</p>\n</nui-example-wrapper>\n\n<h2>Severity</h2>\n\n<p>You can pass <code>severity</code> property to the <code>dialog-header</code>\ncomponent and it will show different severity styles. Possible values are: <code>critical, warning, info.</code></p>\n<p>You can also add custom action buttons to the Dialog header. </p>\n<p>In order to do so, you need to define them inside <code>dialog-header</code> component, as shown in the example below.</p>\n<nui-example-wrapper filenamePrefix=\"dialog-severity\" exampleTitle=\"Dialog Severity\">\n    <nui-dialog-severity-example></nui-dialog-severity-example>\n</nui-example-wrapper>\n\n<h2>Custom Dialog header</h2>\n\n<p>You can add custom action buttons to the Dialog header. </p>\n<p>In order to do so, you need to define them inside <code>dialog-header</code> component, as shown in the example below.</p>\n<nui-example-wrapper filenamePrefix=\"header-buttons\" exampleTitle=\"Custom Dialog Header\">\n    <nui-header-buttons-example></nui-header-buttons-example>\n</nui-example-wrapper>\n\n<h2>Dialog Sizes</h2>\n\n<p>You can define size of the dialog by passing it as second argument to <code>DialogService's</code>\n    <code>open</code> method. Possible sizes are: <code>sm,</code><code>md,</code> and <code>lg</code>.\n    Default size is <code>md</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"dialog-sizes\" exampleTitle=\"Dialog Sizes\">\n    <nui-dialog-sizes-example></nui-dialog-sizes-example>\n</nui-example-wrapper>\n\n<h2>Position on screen</h2>\n\n<p>When content is longer than available screen, dialog grows vertically by default.</p>\n<p>By adding <code>responsive-mode</code> class to the <code>dialog-body</code>, dialog will fit the available screen\n    and content will be scrollable inside the dialog. Also it's possible to remove padding from content in\n    <code>dialog-body</code>by adding <code>compact-mode</code> class</p>\n<nui-example-wrapper filenamePrefix=\"dialog-position\" exampleTitle=\"Dialog Positions\">\n    <nui-dialog-position-example></nui-dialog-position-example>\n</nui-example-wrapper>\n\n<h2>Custom class</h2>\n\n<p>It is possible to add custom class to the dialog window. In order to do it, you need to pass <code>windowClass</code>\noption into <code>DialogService open</code> method as second argument. </p>\n<p> Here's an example: <code>DialogService.open(content, {{ '{' }} windowClass: \"myCustomClass\" {{ '}' }}) </code> </p>\n<p> It will allow you to apply custom styles to the dialog if needed. </p>\n<p> Example below shows dialog with custom width (500px). </p>\n<p> NOTE: custom class is applied to the dialog component which appended into the <code>body</code> element.\n<p> That's why this class must be specified as <code>body</code> descendant class.</p>\n<nui-message type=\"info\">\n    Custom class styles can be overriden by default styles of <code>nui-dialog</code> component. In this case please make custom class selector more specific in your styles.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"dialog-custom-class\" exampleTitle=\"Custom Class\">\n    <nui-dialog-custom-class-example></nui-dialog-custom-class-example>\n</nui-example-wrapper>\n\n<h2>Confirmation Dialog</h2>\n\n<p>\n    You can use Confirmation Dialog by calling the <code>confirm</code> method of DialogService. Set the <code>message</code> input\n    to a string value that will serve as the confirmation message. Optionally, you can customize the title and button labels using\n    the <code>title</code>, <code>confirmText</code>, <code>dismissText</code> and <code>severity</code> properties defined in\n    <a target=\"_parent\" href=\"../interfaces/IConfirmationDialogOptions.html\">IConfirmationDialogOptions</a>.\n\n    <nui-message type=\"info\">\n        By default, when the confirmation dialog opens, the <code>Confirm</code> button is focused. Use <code>setFocus</code> input to\n        set the <code>Dismiss</code> button focused on dialog open.\n    </nui-message>\n</p>\n<nui-example-wrapper filenamePrefix=\"confirmation-dialog\" exampleTitle=\"Confirmation Dialog\">\n    <nui-confirmation-dialog-example></nui-confirmation-dialog-example>\n</nui-example-wrapper>\n\n<h2>Keyboard Options</h2>\n\n<p>\n    There is a field in <code>options</code> that allows dialog to be interacted with via keyboard. Usage: <code>{{ '{' }} keyboard: false {{ '}' }}</code>\n</p>\n\n<nui-example-wrapper filenamePrefix=\"dialog-with-keyboard\" exampleTitle=\"Dialog With Keyboard\">\n    <nui-dialog-with-keyboard-example></nui-dialog-with-keyboard-example>\n</nui-example-wrapper>\n\n<h2>Static Backdrop</h2>\n<p>\n    By default, nui-dialog closes if user clicks outside the dialog. It is handy though to keep the dialog on no matter where user clicks. To achieve this behavior,\n    it is recommended to use the <code>backdrop</code> input of the component and set <code>static</code> string to it.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"dialog-with-static-backdrop\" exampleTitle=\"Dialog With Static Backdrop\">\n    <nui-dialog-with-static-backdrop-example></nui-dialog-with-static-backdrop-example>\n</nui-example-wrapper>\n\n<h2>Dialog Inside Overlay</h2>\n<p>\n    The implementation of the <code>nui-dialog</code> is not currently based on <code>nui-overlay</code>, which means there might be a need to display the dialog properly\n    with overlay-based components, including nested ones. To make the dialog open inside the overlay container it is enough to passe in the <code>useOverlay</code> option\n    when opening the dialog.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"dialog-inside-overlay\" exampleTitle=\"Dialog Inside Overlay\">\n    <nui-dialog-inside-overlay-example></nui-dialog-inside-overlay-example>\n</nui-example-wrapper>\n\n<h2>Dialog Closure Actions</h2>\n<p>\n    The <code>nui-dialog</code> provides you with a number of ways to perform actions on it's closure. There are two built-in events <code>ESC</code> and <code>BACKDROP_CLICK</code>\n    which are triggered by the keyboard escape key and clicking the dialog's backdrop respectively. However, the user is able to create their own events, which they can pass as an argument into the\n    <code>dismiss(event)</code> method of the <code>dialogRef</code>. To capture the events there are two types of EventEmitters of the <code>dialogRef</code> - <code>closed$</code>\n    and <code>beforeDismissed$</code>. As can be determined from their names, the <code>closed$</code> event emitter will emit an event right after the dialog window is closed, while the\n    <code>beforeDismissed$</code> emits right before the dialog is dismissed.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> <code>beforeDissmissed$</code> is only emitted on dialog dismissal (or cancellation); it is not emitted on dialog submission.\n    <code>beforeDismissed$</code>works best in conjunction with the special <code>beforeDismiss</code> function, which can\n    be configured as an optional configuration parameter of the dialog. This function, if it returns <code>false</code>, will prevent the dialog from closing, until the <code>close</code>\n    method is called. All this lets you be very flexible in how exactly you want the dialog to be dismissed and when to perform certain actions.\n</nui-message>\n<p>\n    The example of the dialog's closure actions below shows how flexible a simple dialog can be in terms of performing certain actions at certain points of the dialog's lifecycle\n</p>\n\n<p>\n    For this example:\n</p>\n<ol>\n    <li>\n        <strong>BACKDROP click</strong> - The logic specific to the backdrop click is performed, and the dialog stays open in this case.\n    </li>\n    <li>\n        <strong>ESC key pressed</strong> - First, the logic specific to the ESC button click is performed. Then, general logic before the dialog dismissal is performed. And, finally, the logic to perform right after dialog closure is run.\n    </li>\n    <li>\n        <strong>ACTION button pressed</strong> - The logic specific to the ACTION button click is performed. Then, the custom DONE event is sent, and finally the event is captured and custom logic is run in response. The dialog stays open in this case.\n    </li>\n    <li>\n        <strong>CANCEL button pressed</strong> - The logic specific to the CANCEL button click is performed. Then, general logic before the dialog dismissal is performed. And, finally, the logic to perform right after dialog closure is run.\n    </li>\n    <li>\n        <strong>Header Close button pressed</strong> - The logic specific to the header Close button click is performed. Then, general logic before the dialog dismissal is performed. And, finally, the logic to perform right after dialog closure is run.\n    </li>\n</ol>\n\n\n<nui-example-wrapper filenamePrefix=\"dialog-actions-before-closure\" exampleTitle=\"Dialog Actions Before Closure\">\n    <nui-dialog-actions-before-closure-example></nui-dialog-actions-before-closure-example>\n</nui-example-wrapper>\n\n<h2>Dialog Open Actions</h2>\n<p>\n    It's possible to perform some actions in your code when a dialog is opened by subscribing to the\n    <code>DialogService</code>'s <code>afterOpened$</code> observable. It emits a\n    <code>NuiDialogRef</code> that contains the component's data. This works for both a confirmation\n    dialog and a dialog containing a consumer-defined component. The examples below trigger a toast on\n    the top right of the page when each dialog is opened.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    To see the source code of the consumer-defined component used in this example, open the source\n    expander of the second example panel in this section.\n</nui-message>\n\n<nui-example-wrapper filenamePrefix=\"dialog-after-opened\" exampleTitle=\"Perform an action on dialog open\">\n    <nui-dialog-after-opened-example></nui-dialog-after-opened-example>\n</nui-example-wrapper>\n<nui-example-wrapper filenamePrefix=\"dialog-content\" exampleTitle=\"Dialog Content Example Component\">\n    <p>The code of this example panel is related to the example above. It only shows code.</p>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "ed45":
/*!******************************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/dialog-inside-overlay-with-date-time-picker/dialog-inside-overlay-with-date-time-picker.example.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: DialogInsideOverlayWithDateTimePickerExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogInsideOverlayWithDateTimePickerExampleComponent", function() { return DialogInsideOverlayWithDateTimePickerExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/date-time-picker/date-time-picker.component */ "/NB1");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");









function DialogInsideOverlayWithDateTimePickerExampleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DialogInsideOverlayWithDateTimePickerExampleComponent_ng_template_2_Template_nui_dialog_header_closed_0_listener() { const close_r2 = ctx.close; return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-date-time-picker", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChanged", function DialogInsideOverlayWithDateTimePickerExampleComponent_ng_template_2_Template_nui_date_time_picker_modelChanged_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onModelChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogInsideOverlayWithDateTimePickerExampleComponent_ng_template_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogInsideOverlayWithDateTimePickerExampleComponent_ng_template_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onDone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r1.dt)("appendToBody", true);
} }
class DialogInsideOverlayWithDateTimePickerExampleComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.dt = moment_moment__WEBPACK_IMPORTED_MODULE_2___default()();
        this.selectedDate = new Date(this.dt.valueOf());
    }
    /**
     * Notice that the 'useOverlay' option is being passed in here
     */
    openInOverlay(content) {
        this.activeDialog = this.dialogService.open(content, { size: "sm", useOverlay: true });
    }
    onDone() {
        this.activeDialog.close();
    }
    onCancel() {
        this.activeDialog.close();
    }
    onModelChanged(event) {
        this.selectedDate = new Date(event.valueOf());
    }
}
DialogInsideOverlayWithDateTimePickerExampleComponent.ɵfac = function DialogInsideOverlayWithDateTimePickerExampleComponent_Factory(t) { return new (t || DialogInsideOverlayWithDateTimePickerExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
DialogInsideOverlayWithDateTimePickerExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogInsideOverlayWithDateTimePickerExampleComponent, selectors: [["nui-dialog-inside-overlay-with-date-time-picker-example"]], decls: 4, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5021721454568914986$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Open Dialog");
        i18n_0 = MSG_EXTERNAL_5021721454568914986$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟51bea37436ab02915bfceb958edc654551491ac1␟5021721454568914986:Open Dialog`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6048569446453718997$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_EXAMPLE_COMPONENT_TS__3 = goog.getMsg("Dialog Title");
        i18n_2 = MSG_EXTERNAL_6048569446453718997$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_EXAMPLE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟3adbb5e2eb76ed612cb6cea384dae8481bba9cbb␟6048569446453718997:Dialog Title`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2159130950882492111$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("Cancel");
        i18n_4 = MSG_EXTERNAL_2159130950882492111$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟d7b35c384aecd25a516200d6921836374613dfe7␟2159130950882492111:Cancel`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9216117865911519658$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_EXAMPLE_COMPONENT_TS__7 = goog.getMsg("Action");
        i18n_6 = MSG_EXTERNAL_9216117865911519658$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_DIALOG_INSIDE_OVERLAY_WITH_DATE_TIME_PICKER_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟1bd5e17c9582661e20763a7634ef07881e33bbd7␟9216117865911519658:Action`;
    } return [["id", "nui-dialog-inside-overlay-with-date-time-picker-btn", "nui-button", "", "type", "button", 3, "click"], i18n_0, ["headerButtonsContent", ""], ["title", i18n_2, 3, "closed"], [1, "dialog-body"], ["id", "date-time-picker", "displayMode", "inline", 3, "model", "appendToBody", "modelChanged"], ["nui-button", "", "type", "button", 3, "click"], i18n_4, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_6]; }, template: function DialogInsideOverlayWithDateTimePickerExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogInsideOverlayWithDateTimePickerExampleComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.openInOverlay(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogInsideOverlayWithDateTimePickerExampleComponent_ng_template_2_Template, 10, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_4__["DialogHeaderComponent"], _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_5__["DateTimePickerComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_6__["DialogFooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "fERX":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-zindex-test/dialog-zindex-test.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Basic Usage</h2>\n<nui-simple-dialog-example></nui-simple-dialog-example>\n\n<h2>Usage as a Component</h2>\n<nui-component-as-content-example></nui-component-as-content-example>\n\n<h2>Severity</h2>\n<nui-dialog-severity-example></nui-dialog-severity-example>\n\n<h2>Custom Dialog header</h2>\n<nui-header-buttons-example></nui-header-buttons-example>\n\n<h2>Dialog Sizes</h2>\n<nui-dialog-sizes-example></nui-dialog-sizes-example>\n\n<h2>Position on screen</h2>\n<nui-dialog-position-example></nui-dialog-position-example>\n\n<h2>Custom class</h2>\n<nui-dialog-custom-class-example></nui-dialog-custom-class-example>\n\n<h2>Confirmation Dialog</h2>\n<nui-confirmation-dialog-example></nui-confirmation-dialog-example>\n\n<h2>Keyboard Options</h2>\n<nui-dialog-with-keyboard-example></nui-dialog-with-keyboard-example>\n\n<h2>Static Backdrop</h2>\n<nui-dialog-with-static-backdrop-example></nui-dialog-with-static-backdrop-example>\n\n<h2>Z-Index Strategy</h2>\n<button id=\"nui-visual-test-open-overlay-btn\" nui-button type=\"button\"\n        (click)=\"openOverlay(mainOverlayContent, '60%', '400px')\">\n    Open overlay\n</button>\n\n<ng-template #smallOverlayContent>\n    <div class=\"overlay-container\">\n        <div class=\"overlay-body\">\n            <ng-container *ngTemplateOutlet=\"loremIpsum\"></ng-container>\n        </div>\n    </div>\n    <div class=\"overlay-footer\">\n        <button id=\"nui-visual-test-open-small-dialog-btn\" nui-button type=\"button\"\n                (click)=\"openInnerDialog(smallDialogContent)\">\n            Open small Dialog\n        </button>\n        <button id=\"nui-visual-test-close-overlay-from-small-btn\" nui-button type=\"button\" (click)=\"closeOverlay()\">\n            Close overlay\n        </button>\n    </div>\n</ng-template>\n<ng-template #mainOverlayContent>\n    <div class=\"overlay-container\">\n        <div class=\"overlay-body\">\n            <p>This is the content of an CDK overlay container.</p>\n            <ng-container *ngTemplateOutlet=\"tooltip;context: {text:'Main overlay tooltip'}\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"timeframeBarTemplate\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"menu\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"popup\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"select\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"combobox\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"popover\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"dtPicker\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"spinner\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"busyTemplate;context: {text:'Inner overlay tooltip'}\"></ng-container>\n        </div>\n    </div>\n    <div class=\"overlay-footer\">\n        <button nui-button type=\"button\" (click)=\"showToast()\">\n            Show toast\n        </button>\n        <button id=\"nui-visual-test-switch-appendToBody-btn\"\n                nui-button\n                type=\"button\"\n                (click)=\"toggleAppendToBody()\"\n                i18n>\n            appendToBody={{appendToBody}}\n        </button>\n        <button id=\"nui-visual-test-switch-busy-btn\"\n                nui-button\n                type=\"button\"\n                (click)=\"toggleBusy()\"\n                i18n>\n            busy={{busy}}\n        </button>\n        <button id=\"nui-visual-test-inner-dialog-btn\" nui-button type=\"button\"\n                (click)=\"openInnerDialog(innerDialogContent)\">\n            Open Inner Dialog\n        </button>\n        <button nui-button type=\"button\" (click)=\"closeOverlay()\">\n            Close overlay\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #smallDialogContent let-close=\"close\" let-dismiss=\"dismiss\">\n    <nui-dialog-header title=\"Small Dialog Title\" (closed)=\"close()\"></nui-dialog-header>\n    <div class=\"dialog-body\">\n        <ng-container *ngTemplateOutlet=\"loremIpsum\"></ng-container>\n    </div>\n    <nui-dialog-footer>\n        <button id=\"nui-visual-test-close-small-dialog-btn\" nui-button type=\"button\" (click)=\"close()\">\n            Close\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n\n<ng-template #innerDialogContent let-close=\"close\" let-dismiss=\"dismiss\">\n    <nui-dialog-header title=\"Inner Dialog Title\" (closed)=\"close()\"></nui-dialog-header>\n    <div class=\"dialog-body\">\n        <p>This is the content of a dialog.</p>\n        <ng-container *ngTemplateOutlet=\"tooltip;context: {text:'Inner dialog tooltip'}\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"timeframeBarTemplate\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"menu\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"popup\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"select\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"combobox\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"popover\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"dtPicker\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"spinner\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"busyTemplate;context: {text:'Inner dialog tooltip'}\"></ng-container>\n    </div>\n    <nui-dialog-footer>\n        <button id=\"nui-visual-test-open-overlay-from-dialog-btn\" nui-button type=\"button\"\n                (click)=\"openOverlay(smallOverlayContent, '40%', '200px')\">\n            +Overlay\n        </button>\n        <button id=\"nui-visual-test-open-small-dialog-from-dialog-btn\" nui-button type=\"button\"\n                (click)=\"openInnerDialog(smallDialogContent)\">\n            +Dialog\n        </button>\n        <button nui-button\n                type=\"button\"\n                (click)=\"toggleBusy()\"\n                i18n>\n            Switch busy\n        </button>\n        <button nui-button type=\"button\" (click)=\"showToast()\">Show toast</button>\n        <button nui-button type=\"button\" (click)=\"closeDialog();close()\">Close</button>\n    </nui-dialog-footer>\n</ng-template>\n\n<ng-template #menu>\n    <nui-menu [appendToBody]=\"appendToBody\" title=\"Menu\"class=\"clickable-visual-item\">\n        <nui-menu-action *ngFor=\"let item of items\">{{item}}</nui-menu-action>\n    </nui-menu>\n</ng-template>\n\n<ng-template #popup>\n    <nui-popup [appendToBody]=\"appendToBody\" class=\"clickable-visual-item\">\n        <button nui-button\n                nuiPopupToggle\n                type=\"button\"\n                icon=\"caret-down\"\n                [iconRight]=\"true\"\n                class=\"menu-button\"\n                [isEmpty]=\"false\"\n                i18n>\n            Popup\n        </button>\n        <div popupAreaContent>\n            <ng-container *ngFor=\"let item of items\">\n                <nui-menu-item tabindex=\"0\" nuiTooltip=\"This tooltip is part of a menu item\">{{item}}</nui-menu-item>\n            </ng-container>\n        </div>\n    </nui-popup>\n</ng-template>\n\n<ng-template #select>\n    <!-- select v1 -->\n    <nui-select\n        class=\"clickable-visual-item\"\n        [itemsSource]=\"items\"\n        [inline]=\"true\"\n        [appendToBody]=\"appendToBody\"\n        placeholder=\"Select v1\"\n    ></nui-select>\n\n    <!-- select v2 -->\n    <nui-select-v2\n        class=\"clickable-visual-item d-inline-flex\"\n        placeholder=\"Select v2\">\n        <ng-container *ngFor=\"let item of items\">\n            <nui-select-v2-option [value]=\"item\" i18n>{{item}}</nui-select-v2-option>\n        </ng-container>\n    </nui-select-v2>\n\n</ng-template>\n\n<ng-template #combobox>\n    <nui-combobox\n        class=\"clickable-visual-item\"\n        [itemsSource]=\"items\"\n        [inline]=\"true\"\n        [appendToBody]=\"appendToBody\"\n        i18n-placeholder\n        placeholder=\"Combobox v1\"></nui-combobox>\n\n    <nui-combobox-v2\n        class=\"clickable-visual-item d-inline-flex\"\n        placeholder=\"Combobox v2\">\n        <ng-container *ngFor=\"let item of items\">\n            <nui-select-v2-option [value]=\"item\">\n                <div class=\"d-flex align-items-center\">\n                    <span [nuiComboboxV2OptionHighlight]=\"item\"></span>\n                </div>\n            </nui-select-v2-option>\n        </ng-container>\n    </nui-combobox-v2>\n</ng-template>\n\n<ng-template #spinner>\n    <nui-spinner size=\"large\"\n                 [show]=\"true\"\n                 message=\"Spinner\" i18n-message\n                 helpText=\"Optional spinner description\" i18n-helpText>\n    </nui-spinner>\n</ng-template>\n\n<ng-template #busyTemplate let-text=\"text\">\n    <div nui-busy [busy]=\"busy\" class=\"busy-content\">\n        We used focus trigger so that the popover with a\n        <span nuiTooltip=\"{{text}} {{longTextTooltip}}\"\n            tooltipPlacement=\"bottom\"\n            class=\"nui-text-widget--hoverable\">\n            big tooltip\n        </span> will remain open even after we move the mouse away from it even.\n    </div>\n</ng-template>\n\n<ng-template #dtPicker>\n    <div class=\"inline-flex\">\n        <nui-date-time-picker\n            class=\"clickable-visual-item\"\n            [appendToBody]=\"appendToBody\"\n            [model]=\"dt\"\n            displayMode=\"inline\">\n        </nui-date-time-picker>\n    </div>\n</ng-template>\n\n<ng-template #timeframeBarTemplate>\n    <nui-time-frame-bar [(timeFrame)]=\"timeFrame\">\n\n        <!-- content for default projection slot -->\n        <nui-icon icon=\"calendar\" class=\"pr-3\"></nui-icon>\n        {{timeFrame | timeFrame}}\n\n        <!-- content for time frame selection projection slot -->\n        <nui-quick-picker timeFrameSelection>\n            <nui-time-frame-picker></nui-time-frame-picker>\n        </nui-quick-picker>\n\n    </nui-time-frame-bar>\n</ng-template>\n\n<ng-template #popover>\n    I'm a\n    <nui-popover tabindex=\"1\"\n                 class=\"clickable-visual-item\"\n                 trigger=\"focus\"\n                 [template]=\"popoverWithBasicUsage\">\n        <span class=\"nui-text-widget--hoverable\">popover</span>\n    </nui-popover>\n    with Focus Trigger\n    <ng-template #popoverWithBasicUsage>\n        <span>I'm a popover with some content with a</span>&nbsp;\n        <span nuiTooltip=\"Tooltip inside popover {{longTextTooltip}}\" class=\"nui-text-widget--hoverable\">tooltip</span>\n        &nbsp;inside.\n        <ng-container *ngTemplateOutlet=\"loremIpsum\"></ng-container>\n    </ng-template>\n</ng-template>\n\n<ng-template #tooltip let-text=\"text\">\n    <span id=\"long-text-tooltip\"\n          nuiTooltip=\"Tooltip should appear on top of any other components (popup, popover, menu,etc.) even if it's displayed after the popover has been displayed.\"\n          tooltipPlacement=\"bottom\"\n          class=\"nui-text-widget--hoverable\">I'm a long text tooltip!\n    </span>\n</ng-template>\n\n<ng-template #loremIpsum>\n    <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n        Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n        Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n        Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n    </p>\n</ng-template>\n");

/***/ }),

/***/ "fcXS":
/*!******************************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/confirmation-dialog/confirmation-dialog.example.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ConfirmationDialogExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogExampleComponent", function() { return ConfirmationDialogExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");




class ConfirmationDialogExampleComponent {
    constructor(dialogService, toastService) {
        this.dialogService = dialogService;
        this.toastService = toastService;
    }
    openInfo() {
        this.dialogService.confirm({ message: $localize `Are you sure you want to do it?`, severity: "info", setFocus: "confirm" }).result
            .then((result) => {
            this.toastService.info({ message: result ? $localize `Confirmed` : $localize `Dismissed` });
        }, (reason) => {
            console.log("Rejected:", reason);
        });
    }
    openWarning() {
        this.dialogService.confirm({ message: $localize `Are you sure you want to do it?`, severity: "warning", setFocus: "dismiss" }).result
            .then((result) => {
            this.toastService.info({ message: result ? $localize `Confirmed` : $localize `Dismissed` });
        }, (reason) => {
            console.log("Rejected:", reason);
        });
    }
    openCritical() {
        this.dialogService.confirm({ message: $localize `Are you sure you want to do it?`, severity: "critical", setFocus: "dismiss" }).result
            .then((result) => {
            this.toastService.info({ message: result ? $localize `Confirmed` : $localize `Dismissed` });
        }, (reason) => {
            console.log("Rejected:", reason);
        });
    }
}
ConfirmationDialogExampleComponent.ɵfac = function ConfirmationDialogExampleComponent_Factory(t) { return new (t || ConfirmationDialogExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
ConfirmationDialogExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmationDialogExampleComponent, selectors: [["nui-confirmation-dialog-example"]], decls: 6, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_759561659186912897$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_CONFIRMATION_DIALOG_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Show Info Confirmation");
        i18n_0 = MSG_EXTERNAL_759561659186912897$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_CONFIRMATION_DIALOG_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟e83098871e718979bd9ec465fb60d040847ebef8␟759561659186912897:Show Info Confirmation`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6799688820077119522$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_CONFIRMATION_DIALOG_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Show Warning Confirmation");
        i18n_2 = MSG_EXTERNAL_6799688820077119522$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_CONFIRMATION_DIALOG_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟c5146eee525bc60ab1bbb1ce7132ccec9036d340␟6799688820077119522:Show Warning Confirmation`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6513111493489650446$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_CONFIRMATION_DIALOG_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Show Critical Confirmation");
        i18n_4 = MSG_EXTERNAL_6513111493489650446$$DEMO_SRC_COMPONENTS_DEMO_DIALOG_CONFIRMATION_DIALOG_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟0f5e12fe64cd4abde79891256e703c878f320f5c␟6513111493489650446:Show Critical Confirmation`;
    } return [["id", "nui-demo-confirmation-dialog-btn-info", "nui-button", "", "type", "button", 3, "click"], i18n_0, ["id", "nui-demo-confirmation-dialog-btn-warning", "nui-button", "", "type", "button", 1, "ml-4", 3, "click"], i18n_2, ["id", "nui-demo-confirmation-dialog-btn-critical", "nui-button", "", "type", "button", 1, "ml-4", 3, "click"], i18n_4]; }, template: function ConfirmationDialogExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationDialogExampleComponent_Template_button_click_0_listener() { return ctx.openInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationDialogExampleComponent_Template_button_click_2_listener() { return ctx.openWarning(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationDialogExampleComponent_Template_button_click_4_listener() { return ctx.openCritical(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], encapsulation: 2 });


/***/ }),

/***/ "ggfY":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-inside-overlay/dialog-inside-overlay.example.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-select-v2 id=\"select-to-open-dialog\" placeholder=\"Select an item\"\n               i18n-placeholder\n               [popupViewportMargin]=\"100\">\n    <nui-select-v2-option *ngFor=\"let option of options1\"\n                          [value]=\"option\"\n                          (click)=\"openInOverlay(headerButtonsContent)\">\n        {{ option }}\n    </nui-select-v2-option>\n</nui-select-v2>\n\n<ng-template  #headerButtonsContent let-close=\"close\">\n    <nui-dialog-header title=\"Dialog Title\" i18n-title (closed)=\"close()\"></nui-dialog-header>\n    <div class=\"dialog-body\">\n        <p>\n            <nui-select-v2 placeholder=\"Select an item\" i18n-placeholder>\n                <nui-select-v2-option *ngFor=\"let option of options2\" [value]=\"option\">\n                    {{ option }}\n                </nui-select-v2-option>\n            </nui-select-v2>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n            Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n            Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n            Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n            Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n        </p>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\" (click)=\"onCancel()\" i18n>Cancel</button>\n        <button nui-button type=\"button\" displayStyle=\"primary\" (click)=\"onDone()\" i18n>Action</button>\n    </nui-dialog-footer>\n</ng-template>\n");

/***/ }),

/***/ "h9xv":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-after-opened/dialog-after-opened.example.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button nui-button type=\"button\" (click)=\"openConfirmationDialog()\" i18n>Confirmation</button>\n<button class=\"ml-4\" nui-button type=\"button\" (click)=\"openWithComponent()\" i18n>Custom Component</button>\n");

/***/ }),

/***/ "jj5D":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/component-as-content/dialog-content.example.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject, Input } from \"@angular/core\";\nimport { IToastService, NuiActiveDialog, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-dialog-content-example\",\n    templateUrl: \"./dialog-content.example.component.html\",\n})\nexport class DialogContentExampleComponent {\n    @Input() name: string;\n\n    constructor(@Inject(NuiActiveDialog) public activeDialog: any,\n                @Inject(ToastService) private toastService: IToastService) {\n    }\n\n    public onButtonClick(title: string) {\n        title === \"Action\" ? this.actionDone() : this.actionCanceled();\n        this.activeDialog.close();\n    }\n\n    private actionDone(): void {\n        this.toastService.success({message: $localize `Action Done!`, title: $localize `Event`});\n    }\n\n    private actionCanceled(): void {\n        this.toastService.info({message: $localize `Action Cancelled!`, title: $localize `Event`});\n    }\n}\n");

/***/ }),

/***/ "l1BV":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/component-as-content/component-as-content.example.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button nui-button type=\"button\" (click)=\"openWithComponent()\" i18n>Click me!</button>\n");

/***/ }),

/***/ "lbYS":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-static-backdrop/dialog-with-static-backdrop.example.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject, TemplateRef } from \"@angular/core\";\nimport { DialogService, NuiDialogRef, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-dialog-with-static-backdrop-example\",\n    templateUrl: \"./dialog-with-static-backdrop.example.component.html\",\n})\nexport class DialogWithStaticBackdropExampleComponent {\n    private activeDialog: NuiDialogRef;\n\n    constructor(@Inject(DialogService) private dialogService: DialogService,\n                @Inject(ToastService) private toastService: ToastService) {\n    }\n\n    public openWith(content: TemplateRef<string>) {\n        this.activeDialog = this.dialogService.open(content, {size: \"sm\", backdrop: \"static\"});\n    }\n    public openWithout(content: TemplateRef<string>) {\n        this.activeDialog = this.dialogService.open(content, {size: \"sm\", keyboard: false, backdrop: \"static\"});\n    }\n\n    public actionDone(): void {\n        this.toastService.success({message: $localize `Action Done!`, title: $localize `Event`});\n        this.activeDialog.close();\n    }\n\n    public actionCanceled(): void {\n        this.toastService.info({message: $localize `Action Cancelled!`, title: $localize `Event`});\n        this.activeDialog.close();\n    }\n}\n");

/***/ }),

/***/ "mX2p":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog.module.ts ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiBusyModule,\n    NuiButtonModule,\n    NuiDateTimePickerModule,\n    NuiDialogModule,\n    NuiDocsModule,\n    NuiIconModule,\n    NuiMenuModule,\n    NuiMessageModule,\n    NuiPopoverModule,\n    NuiPopupModule,\n    NuiSelectModule,\n    NuiSelectV2Module,\n    NuiSpinnerModule,\n    NuiTimeFrameBarModule,\n    NuiTimeFramePickerModule,\n    NuiTooltipModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    ComponentAsContentExampleComponent,\n    ConfirmationDialogExampleComponent,\n    DialogActionBeforeClosureExampleComponent,\n    DialogAfterOpenedExampleComponent,\n    DialogContentExampleComponent,\n    DialogCustomClassExampleComponent,\n    DialogDocsComponent,\n    DialogInsideOverlayExampleComponent,\n    DialogInsideOverlayWithDateTimePickerExampleComponent,\n    DialogPositionExampleComponent,\n    DialogSeverityExampleComponent,\n    DialogSizesExampleComponent,\n    DialogTestComponent,\n    DialogVisualTestComponent,\n    DialogWithKeyboardExampleComponent,\n    DialogWithStaticBackdropExampleComponent,\n    DialogZIndexTestComponent,\n    HeaderButtonsExampleComponent,\n    SimpleDialogExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: DialogDocsComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"dialog-test\",\n        component: DialogTestComponent,\n        data: {\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"zindex-test\",\n        component: DialogZIndexTestComponent,\n    },\n    {\n        path: \"dialog-overlay\",\n        component: DialogVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"dialog-actions-before-closure\",\n        component: DialogActionBeforeClosureExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"dialog-visual-test\",\n        component: DialogVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiDialogModule,\n        NuiDocsModule,\n        NuiButtonModule,\n        NuiMessageModule,\n        NuiSelectV2Module,\n        RouterModule.forChild(routes),\n        NuiSelectModule,\n        NuiDialogModule,\n        NuiDocsModule,\n        NuiButtonModule,\n        NuiMessageModule,\n        NuiSelectModule,\n        NuiPopoverModule,\n        NuiTooltipModule,\n        NuiDateTimePickerModule,\n        NuiBusyModule,\n        NuiSpinnerModule,\n        NuiSelectV2Module,\n        NuiMenuModule,\n        NuiPopupModule,\n        NuiTimeFrameBarModule,\n        NuiTimeFramePickerModule,\n        NuiIconModule,\n    ],\n    declarations: [\n        DialogContentExampleComponent,\n        ComponentAsContentExampleComponent,\n        ConfirmationDialogExampleComponent,\n        DialogCustomClassExampleComponent,\n        DialogDocsComponent,\n        DialogTestComponent,\n        DialogWithKeyboardExampleComponent,\n        DialogPositionExampleComponent,\n        DialogSeverityExampleComponent,\n        DialogSizesExampleComponent,\n        DialogInsideOverlayExampleComponent,\n        DialogVisualTestComponent,\n        HeaderButtonsExampleComponent,\n        SimpleDialogExampleComponent,\n        DialogWithStaticBackdropExampleComponent,\n        DialogZIndexTestComponent,\n        DialogInsideOverlayWithDateTimePickerExampleComponent,\n        DialogActionBeforeClosureExampleComponent,\n        DialogAfterOpenedExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n    entryComponents: [DialogContentExampleComponent],\n})\nexport class DialogModule {\n}\n");

/***/ }),

/***/ "n1CC":
/*!**********************************************************!*\
  !*** ./demo/src/components/demo/dialog/dialog.module.ts ***!
  \**********************************************************/
/*! exports provided: DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "EKUP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["DialogDocsComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "dialog-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["DialogTestComponent"],
        data: {
            showThemeSwitcher: true,
        },
    },
    {
        path: "zindex-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["DialogZIndexTestComponent"],
    },
    {
        path: "dialog-overlay",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["DialogVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "dialog-actions-before-closure",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["DialogActionBeforeClosureExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "dialog-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["DialogVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
class DialogModule {
}
DialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DialogModule });
DialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function DialogModule_Factory(t) { return new (t || DialogModule)(); }, providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("GEiY"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDialogModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectV2Module"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDialogModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPopoverModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTooltipModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDateTimePickerModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiBusyModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSpinnerModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectV2Module"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMenuModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPopupModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTimeFrameBarModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTimeFramePickerModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiIconModule"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DialogModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["DialogContentExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["ComponentAsContentExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["DialogCustomClassExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["DialogDocsComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["DialogTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["DialogWithKeyboardExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["DialogPositionExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["DialogSeverityExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["DialogSizesExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["DialogInsideOverlayExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["DialogVisualTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["HeaderButtonsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["SimpleDialogExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["DialogWithStaticBackdropExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["DialogZIndexTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["DialogInsideOverlayWithDateTimePickerExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["DialogActionBeforeClosureExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["DialogAfterOpenedExampleComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDialogModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectV2Module"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDialogModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPopoverModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTooltipModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDateTimePickerModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiBusyModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSpinnerModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectV2Module"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMenuModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPopupModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTimeFrameBarModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTimeFramePickerModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiIconModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "o0H5":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-inside-overlay-with-date-time-picker/dialog-inside-overlay-with-date-time-picker.example.component.ts ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from \"@angular/core\";\nimport { DialogService, NuiDialogRef } from \"@nova-ui/bits\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-dialog-inside-overlay-with-date-time-picker-example\",\n    templateUrl: \"./dialog-inside-overlay-with-date-time-picker.example.component.html\",\n})\nexport class DialogInsideOverlayWithDateTimePickerExampleComponent {\n    public dt: Moment;\n    public selectedDate: Date;\n\n    private activeDialog: NuiDialogRef;\n\n    constructor(private dialogService: DialogService) {\n        this.dt = moment();\n        this.selectedDate = new Date(this.dt.valueOf());\n    }\n\n    /**\n     * Notice that the 'useOverlay' option is being passed in here\n     */\n    public openInOverlay(content: TemplateRef<string>) {\n        this.activeDialog = this.dialogService.open(content, {size: \"sm\", useOverlay: true});\n    }\n\n    public onDone(): void {\n        this.activeDialog.close();\n    }\n\n    public onCancel(): void {\n        this.activeDialog.close();\n    }\n\n    public onModelChanged(event: any) {\n        this.selectedDate = new Date(event.valueOf());\n    }\n}\n");

/***/ }),

/***/ "q8+I":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-sizes/dialog-sizes.example.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-close=\"close\">\n    <nui-dialog-header title=\"Dialog title\" i18n-title (closed)=\"close()\"></nui-dialog-header>\n    <div class=\"dialog-body\">\n        <p i18n>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n            Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n            Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n            Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n            Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n        </p>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\"\n                (click)=\"onButtonClick('Cancel')\" i18n>\n            Cancel\n        </button>\n        <button nui-button type=\"button\"\n                displayStyle=\"primary\"\n                (click)=\"onButtonClick('Action')\" i18n>\n            Action\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n\n<button id=\"nui-demo-small-dialog-btn\" nui-button type=\"button\" (click)=\"open(content, 'sm')\">Show Small Dialog</button>\n<button id=\"nui-demo-medium-dialog-btn\" class=\"ml-4\" nui-button type=\"button\" (click)=\"open(content, 'md')\">Show Medium Dialog</button>\n<button id=\"nui-demo-large-dialog-btn\" class=\"ml-4\" nui-button type=\"button\" (click)=\"open(content, 'lg')\">Show Large Dialog</button>\n");

/***/ }),

/***/ "qmXi":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-zindex-test/dialog-zindex-test.component.less ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n\n.main-overlay-panel {\n    padding: @nui-space-sm;\n    background: @nui-color-bg-content;\n\n    .overlay-footer {\n        display: flex;\n        justify-content: flex-end;\n        padding: @nui-space-sm;\n        button {\n            margin-left: 15px;\n        }\n    }\n}\n\n.busy-content {\n    border: 1px @nui-color-line-default solid;\n    padding: @nui-space-sm;\n}\n\n.inline-flex {\n    display: inline-flex;\n}\n\n");

/***/ }),

/***/ "w9bX":
/*!**************************************************************************************!*\
  !*** ./demo/src/components/demo/dialog/dialog-test/dialog-test.example.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DialogTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogTestComponent", function() { return DialogTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _simple_dialog_simple_dialog_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../simple-dialog/simple-dialog.example.component */ "b7fi");
/* harmony import */ var _dialog_keyboard_dialog_with_keyboard_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog-keyboard/dialog-with-keyboard.example.component */ "HqCK");
/* harmony import */ var _dialog_severity_dialog_severity_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog-severity/dialog-severity.example.component */ "JOKZ");
/* harmony import */ var _dialog_custom_class_dialog_custom_class_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog-custom-class/dialog-custom-class.example.component */ "/3M5");
/* harmony import */ var _dialog_static_backdrop_dialog_with_static_backdrop_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog-static-backdrop/dialog-with-static-backdrop.example.component */ "QPNM");
/* harmony import */ var _dialog_inside_overlay_dialog_inside_overlay_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog-inside-overlay/dialog-inside-overlay.example.component */ "+Rq8");
/* harmony import */ var _dialog_inside_overlay_with_date_time_picker_dialog_inside_overlay_with_date_time_picker_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialog-inside-overlay-with-date-time-picker/dialog-inside-overlay-with-date-time-picker.example.component */ "ed45");








class DialogTestComponent {
}
DialogTestComponent.ɵfac = function DialogTestComponent_Factory(t) { return new (t || DialogTestComponent)(); };
DialogTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogTestComponent, selectors: [["ng-component"]], decls: 7, vars: 0, template: function DialogTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-simple-dialog-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nui-dialog-with-keyboard-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-dialog-severity-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-dialog-custom-class-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nui-dialog-with-static-backdrop-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-dialog-inside-overlay-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nui-dialog-inside-overlay-with-date-time-picker-example");
    } }, directives: [_simple_dialog_simple_dialog_example_component__WEBPACK_IMPORTED_MODULE_1__["SimpleDialogExampleComponent"], _dialog_keyboard_dialog_with_keyboard_example_component__WEBPACK_IMPORTED_MODULE_2__["DialogWithKeyboardExampleComponent"], _dialog_severity_dialog_severity_example_component__WEBPACK_IMPORTED_MODULE_3__["DialogSeverityExampleComponent"], _dialog_custom_class_dialog_custom_class_example_component__WEBPACK_IMPORTED_MODULE_4__["DialogCustomClassExampleComponent"], _dialog_static_backdrop_dialog_with_static_backdrop_example_component__WEBPACK_IMPORTED_MODULE_5__["DialogWithStaticBackdropExampleComponent"], _dialog_inside_overlay_dialog_inside_overlay_example_component__WEBPACK_IMPORTED_MODULE_6__["DialogInsideOverlayExampleComponent"], _dialog_inside_overlay_with_date_time_picker_dialog_inside_overlay_with_date_time_picker_example_component__WEBPACK_IMPORTED_MODULE_7__["DialogInsideOverlayWithDateTimePickerExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "xeBr":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-inside-overlay-with-date-time-picker/dialog-inside-overlay-with-date-time-picker.example.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button id=\"nui-dialog-inside-overlay-with-date-time-picker-btn\" nui-button type=\"button\" (click)=\"openInOverlay(headerButtonsContent)\" i18n>Open Dialog</button>\n\n<ng-template  #headerButtonsContent let-close=\"close\">\n    <nui-dialog-header title=\"Dialog Title\" i18n-title (closed)=\"close()\"></nui-dialog-header>\n    <div class=\"dialog-body\">\n        <p>\n            <nui-date-time-picker id=\"date-time-picker\" (modelChanged)=\"onModelChanged($event)\" displayMode=\"inline\" [model]=\"dt\" [appendToBody]=\"true\"></nui-date-time-picker>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n            Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n            Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n            Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n            Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n        </p>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\" (click)=\"onCancel()\" i18n>Cancel</button>\n        <button nui-button type=\"button\" displayStyle=\"primary\" (click)=\"onDone()\" i18n>Action</button>\n    </nui-dialog-footer>\n</ng-template>\n");

/***/ }),

/***/ "yajv":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-keyboard/dialog-with-keyboard.example.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-close=\"close\" let-dismiss=\"dismiss\">\n    <nui-dialog-header title=\"Dialog title\" i18n-title (closed)=\"close()\"></nui-dialog-header>\n    <div class=\"dialog-body\">\n        <p i18n>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n            Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n            Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n            Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n            Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n        </p>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\"\n                (click)=\"actionCanceled(); close()\" i18n>\n            Cancel\n        </button>\n        <button nui-button type=\"button\"\n                displayStyle=\"primary\"\n                (click)=\"actionDone(); close()\" i18n>\n            Action\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n\n<button id=\"nui-demo-with-keyboard-dialog-btn\" nui-button type=\"button\" (click)=\"openWith(content)\" i18n>Close me with ESC button</button>\n<button id=\"nui-demo-without-keyboard-dialog-btn\" class=\"ml-4\" nui-button type=\"button\" (click)=\"openWithout(content)\" i18n>ESC button won't close me</button>\n");

/***/ }),

/***/ "zLy7":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/dialog-test/dialog-test.example.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    templateUrl: \"./dialog-test.example.component.html\",\n})\nexport class DialogTestComponent {}\n");

/***/ }),

/***/ "zhgJ":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dialog/header-buttons/header-buttons.example.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject, TemplateRef } from \"@angular/core\";\nimport { DialogService, NuiDialogRef, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-header-buttons-example\",\n    templateUrl: \"./header-buttons.example.component.html\",\n})\nexport class HeaderButtonsExampleComponent {\n    private activeDialog: NuiDialogRef;\n\n    constructor(@Inject(DialogService) private dialogService: DialogService,\n                @Inject(ToastService) private toastService: ToastService) {\n    }\n\n    public open(content: TemplateRef<string>) {\n        this.activeDialog = this.dialogService.open(content, {size: \"sm\"});\n    }\n\n    public onButtonClick(title: string) {\n        title === \"Action\" ? this.actionDone() : this.actionCanceled();\n        this.activeDialog.close();\n    }\n\n    private actionDone(): void {\n        this.toastService.success({\n            message: $localize `Action Done!`,\n            title: $localize `Event`,\n        });\n    }\n\n    private actionCanceled(): void {\n        this.toastService.info({\n            message: $localize `Action Cancelled!`,\n            title: $localize `Event`,\n        });\n    }\n\n}\n");

/***/ })

}]);
//# sourceMappingURL=demo-dialog-dialog-module-es2015.js.map