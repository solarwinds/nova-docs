(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-panel-panel-module"],{

/***/ "/BCT":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-collapse/panel-collapse.example.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-panel-collapse-example\",\n    templateUrl: \"./panel-collapse.example.component.html\",\n})\nexport class PanelCollapseExampleComponent {\n    public isCollapsible = true;\n    public isCollapsed = false;\n    public headerIcon = \"filter\";\n    public headerIconCounter = 7;\n\n    public onCollapseChange($event: boolean) {\n        this.isCollapsed = $event;\n    }\n}\n");

/***/ }),

/***/ "/K3t":
/*!********************************************************!*\
  !*** ./demo/src/components/demo/panel/panel.module.ts ***!
  \********************************************************/
/*! exports provided: PanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return PanelModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "r/BD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["PanelDocsExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "panel-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["PanelVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "basic",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["PanelBasicExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "collapsible",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["PanelCollapseExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "hidden",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["PanelHideExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "floating",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["PanelFloatExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "resize",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["PanelResizeExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
class PanelModule {
}
PanelModule.ɵfac = function PanelModule_Factory(t) { return new (t || PanelModule)(); };
PanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PanelModule });
PanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("ktjt"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPanelModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMenuModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSwitchModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiIconModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PanelModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["PanelBasicExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PanelCollapseExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PanelCollapseOutsideControlExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PanelSizeExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PanelEmbeddedContentExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PanelHoverableExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PanelCustomStylesExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PanelDocsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PanelFloatExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PanelHideExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PanelHideOutsideControlExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PanelNestedExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PanelPositionExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PanelResizeExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PanelCollapseTopOrientedExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PanelVisualTestComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPanelModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMenuModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSwitchModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiIconModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "1C32":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-float/panel-float.example.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <nui-panel panelMode=\"collapsible\"\n               [displacePrimaryContent]=\"false\"\n               id=\"nui-demo-floating-panel\">\n        <div nuiPanelEmbeddedBody>\n            <div>\n                <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                    quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                    Nulla ac mattis tortor, quis iaculis sapien.</p>\n            </div>\n        </div>\n        <div>\n            <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                porttitor laoreet dui a mollis.</p>\n            </div>\n    </nui-panel>\n</div>\n");

/***/ }),

/***/ "2Nzq":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-embedded-content/panel-embedded-content.example.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject } from \"@angular/core\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-panel-embedded-content-example\",\n    templateUrl: \"./panel-embedded-content.example.component.html\",\n})\n\nexport class PanelEmbeddedContentExampleComponent {\n    public isCollapsed = false;\n    public headerIcon = \"filter\";\n    public displayFooter = true;\n\n    constructor(@Inject(ToastService) private toastService: ToastService) {\n    }\n\n    onClickCancel() {\n        this.toastService.info({\n            message: $localize `Cancel clicked!`,\n            title: $localize `Action`,\n        });\n    }\n\n    onClickConfirm() {\n        this.toastService.success({\n            message: $localize `Confirm clicked!`,\n            title: $localize `Action`,\n        });\n    }\n\n    public toggleFooter() {\n        this.displayFooter = !this.displayFooter;\n    }\n\n}\n");

/***/ }),

/***/ "4GJP":
/*!*****************************************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-custom-styles/panel-сustom-styles.example.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PanelCustomStylesExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelCustomStylesExampleComponent", function() { return PanelCustomStylesExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/panel/panel.component */ "Xk8b");



class PanelCustomStylesExampleComponent {
    constructor() {
        this.panelColor = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["PanelBackgroundColor"].colorBgSecondary;
        this.heading = $localize `No Padding Header`;
    }
}
PanelCustomStylesExampleComponent.ɵfac = function PanelCustomStylesExampleComponent_Factory(t) { return new (t || PanelCustomStylesExampleComponent)(); };
PanelCustomStylesExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PanelCustomStylesExampleComponent, selectors: [["nui-panel-custom-styles-example"]], decls: 9, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4308027435225433498$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_CUSTOM_STYLES_PANEL__USTOM_STYLES_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis.");
        i18n_0 = MSG_EXTERNAL_4308027435225433498$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_CUSTOM_STYLES_PANEL__USTOM_STYLES_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟c2dd1c21221fcaa49d215db2e3ea715d086ce75f␟4308027435225433498:Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis.`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_CUSTOM_STYLES_PANEL__USTOM_STYLES_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        i18n_2 = MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_CUSTOM_STYLES_PANEL__USTOM_STYLES_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟35b1e65604a5a673483b9f3a32811a7a8eef18a5␟5217306585722864337:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.`;
    } return [["id", "nui-demo-custom-styles-panel", "orientation", "left", 3, "darkBorder", "heading", "headerPadding", "sidePaneBodyPadding", "panelBackgroundColor"], ["nuiPanelEmbeddedBody", ""], i18n_0, i18n_2]; }, template: function PanelCustomStylesExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("darkBorder", true)("heading", ctx.heading)("headerPadding", false)("sidePaneBodyPadding", false)("panelBackgroundColor", ctx.panelColor);
    } }, directives: [_src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"]], encapsulation: 2 });


/***/ }),

/***/ "5foY":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-basic/panel-basic.example.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <nui-panel id=\"nui-demo-basic-panel\">\n        <div nuiPanelEmbeddedBody>\n            <div>\n                <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                    quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                    Nulla ac mattis tortor, quis iaculis sapien.</p>\n            </div>\n        </div>\n        <div>\n            <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                porttitor laoreet dui a mollis.</p>\n            </div>\n    </nui-panel>\n</div>\n");

/***/ }),

/***/ "7672":
/*!*******************************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-collapse/panel-collapse.example.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PanelCollapseExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelCollapseExampleComponent", function() { return PanelCollapseExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/panel/panel.component */ "Xk8b");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/icon/icon.component */ "45Bz");




function PanelCollapseExampleComponent_nui_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-icon", 10);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.headerIcon);
} }
function PanelCollapseExampleComponent_nui_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-icon", 11);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.headerIcon)("counter", ctx_r1.headerIconCounter);
} }
class PanelCollapseExampleComponent {
    constructor() {
        this.isCollapsible = true;
        this.isCollapsed = false;
        this.headerIcon = "filter";
        this.headerIconCounter = 7;
    }
    onCollapseChange($event) {
        this.isCollapsed = $event;
    }
}
PanelCollapseExampleComponent.ɵfac = function PanelCollapseExampleComponent_Factory(t) { return new (t || PanelCollapseExampleComponent)(); };
PanelCollapseExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelCollapseExampleComponent, selectors: [["nui-panel-collapse-example"]], decls: 16, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4365587150167205841$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_PANEL_COLLAPSE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("TRANSCLUDED");
        i18n_0 = MSG_EXTERNAL_4365587150167205841$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_PANEL_COLLAPSE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟b06b57cdb3f689b1f500012806fe23caa9ad335b␟4365587150167205841:TRANSCLUDED`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_PANEL_COLLAPSE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        i18n_2 = MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_PANEL_COLLAPSE_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟dd7629c4ea22682a8b186a97ee20dfe30e95ac88␟6513607865111590520:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_PANEL_COLLAPSE_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        i18n_4 = MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_PANEL_COLLAPSE_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟35b1e65604a5a673483b9f3a32811a7a8eef18a5␟5217306585722864337:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.`;
    } return [["panelMode", "collapsible", "id", "nui-demo-collapsible-panel", "orientation", "left", 3, "isCollapsed", "collapsed"], ["nuiPanelEmbeddedHeading", "", 1, "d-flex", "flex-row", "align-items-center"], ["class", "mr-1", "iconColor", "gray", 3, "icon", 4, "ngIf"], [1, "my-0"], i18n_0, ["nuiPanelEmbeddedIcon", "", 1, "mt-1"], [3, "icon", "counter", 4, "ngIf"], ["nuiPanelEmbeddedBody", ""], i18n_2, i18n_4, ["iconColor", "gray", 1, "mr-1", 3, "icon"], [3, "icon", "counter"]]; }, template: function PanelCollapseExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collapsed", function PanelCollapseExampleComponent_Template_nui_panel_collapsed_1_listener($event) { return ctx.onCollapseChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PanelCollapseExampleComponent_nui_icon_3_Template, 1, 1, "nui-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PanelCollapseExampleComponent_nui_icon_8_Template, 1, 2, "nui-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isCollapsed", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed);
    } }, directives: [_src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__["PanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]], encapsulation: 2 });


/***/ }),

/***/ "8WIg":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-hoverable/panel-hoverable.example.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-panel-hoverable-example\",\n    templateUrl: \"./panel-hoverable.example.component.html\",\n})\n\nexport class PanelHoverableExampleComponent {}\n");

/***/ }),

/***/ "9WqS":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-hide-outside-control/panel-hide-outside-control.example.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n        <button [disabled] = \"isHidden\" type=\"button\" nui-button (click)=\"hide()\">Hide</button>\n        <button [disabled] = \"!isHidden\" type=\"button\" nui-button (click)=\"reveal()\">Reveal</button>\n    <nui-panel\n        [isHidden] = \"isHidden\"\n        (hidden) = \"getHideStateChanged($event)\"\n        orientation=\"left\"\n        panelMode=\"closable\"\n        heading=\"Header\"\n        i18n-heading\n        id=\"nui-demo-hidden-panel-external\">\n        <div nuiPanelEmbeddedBody>\n            <div>\n                <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                    quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                    Nulla ac mattis tortor, quis iaculis sapien.</p>\n            </div>\n        </div>\n        <div>\n            <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                porttitor laoreet dui a mollis.</p>\n        </div>\n    </nui-panel>\n</div>\n");

/***/ }),

/***/ "BdGv":
/*!***********************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-docs/panel-docs.example.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PanelDocsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelDocsExampleComponent", function() { return PanelDocsExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _panel_basic_panel_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../panel-basic/panel-basic.example.component */ "HpYj");
/* harmony import */ var _panel_position_panel_position_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../panel-position/panel-position.example.component */ "SwJS");
/* harmony import */ var _panel_size_panel_size_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panel-size/panel-size.example.component */ "bd4U");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/message/message.component */ "4pDv");
/* harmony import */ var _panel_embedded_content_panel_embedded_content_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../panel-embedded-content/panel-embedded-content.example.component */ "SthW");
/* harmony import */ var _panel_custom_styles_panel_ustom_styles_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../panel-custom-styles/panel-сustom-styles.example.component */ "4GJP");
/* harmony import */ var _panel_collapse_panel_collapse_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../panel-collapse/panel-collapse.example.component */ "7672");
/* harmony import */ var _panel_hide_panel_hide_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../panel-hide/panel-hide.example.component */ "pp2q");
/* harmony import */ var _panel_hoverable_panel_hoverable_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../panel-hoverable/panel-hoverable.example.component */ "cpBZ");
/* harmony import */ var _panel_float_panel_float_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../panel-float/panel-float.example.component */ "rrpG");
/* harmony import */ var _panel_resize_panel_resize_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../panel-resize/panel-resize.example.component */ "v1nj");
/* harmony import */ var _panel_collapse_top_oriented_panel_collapse_top_oriented_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../panel-collapse-top-oriented/panel-collapse-top-oriented.example.component */ "lHae");
/* harmony import */ var _panel_collapse_outside_control_panel_collapse_outside_control_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../panel-collapse-outside-control/panel-collapse-outside-control.example.component */ "YZEd");
/* harmony import */ var _panel_hide_outside_control_panel_hide_outside_control_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../panel-hide-outside-control/panel-hide-outside-control.example.component */ "zt29");
/* harmony import */ var _panel_nested_panel_nested_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../panel-nested/panel-nested.example.component */ "c+2O");

















class PanelDocsExampleComponent {
}
PanelDocsExampleComponent.ɵfac = function PanelDocsExampleComponent_Factory(t) { return new (t || PanelDocsExampleComponent)(); };
PanelDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelDocsExampleComponent, selectors: [["nui-panel-docs-example"]], decls: 216, vars: 0, consts: [["filenamePrefix", "panel-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "panel-position", "exampleTitle", "Custom Position"], ["filenamePrefix", "panel-size", "exampleTitle", "Panel Sizes"], ["type", "info"], ["filenamePrefix", "panel-embedded-content", "exampleTitle", "Embedded Content"], ["href", "../miscellaneous/enumerations.html#BackgroundColor", "target", "_blank"], ["filenamePrefix", "panel-custom-styles", "exampleTitle", "Custom Styles"], ["filenamePrefix", "panel-collapse", "exampleTitle", "Collapsible Panel"], ["filenamePrefix", "panel-hide", "exampleTitle", "Closable Panel"], ["filenamePrefix", "panel-hoverable", "exampleTitle", "Hoverable Panel"], ["filenamePrefix", "panel-float", "exampleTitle", "Overlapping Main Content"], ["filenamePrefix", "panel-resize", "exampleTitle", "Resizable panel"], ["filenamePrefix", "panel-collapse-top-oriented", "exampleTitle", "Collapsible Top Oriented Panel"], ["filenamePrefix", "panel-collapse-outside-control", "exampleTitle", "External Collapse Toggle"], ["filenamePrefix", "panel-hide-outside-control", "exampleTitle", "External Hide/Show Toggle"], ["filenamePrefix", "panel-nested", "exampleTitle", "Nested Panels"]], template: function PanelDocsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiPanelModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " To use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "<nui-panel>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " wrap the content with an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "<nui-panel>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " element. To pass content to the side panel, put the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "nuiPanelPaneBodyContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " attribute on the element containing the side panel content.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nui-example-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "nui-panel-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Custom Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "<nui-panel>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " provides four position options for the side pane ('left','right', 'top' and 'bottom'). By default it is positioned to the left. To position it on the top, pass 'top' to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "<nui-panel>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "'s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "orientation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " input, works similarly for the other directions.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "nui-panel-position-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Size Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "paneSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " binding in order to set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "<nui-panel>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " size(width or height - depends on panel position), by default panel size is '250px', percents also can be used as well as pixels. To define max and min panel sizes, use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "paneMaxSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "paneMinSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " bindings correspondingly. Default min-size value for width is '150px', for height - '40px', default max-size value is '90%'. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "nui-panel-size-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Embedded Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Additional content can be added inside the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "<nui-panel>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " component. To pass header to the side panel, put the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "nuiPanelEmbeddedHeading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " attribute on the element containing the side panel header or use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " binding for the simple text header. To pass embedded icon put the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "nuiPanelEmbeddedIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " attribute on the transcluded element, for the embedded footer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "nuiPanelEmbeddedIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " attribute must be applied to the element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nui-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Footer can be added only for left and right panel orientations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "nuiPanelEmbeddedIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " will be visible in both collapsed and expanded states, while ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "nuiPanelEmbeddedHeading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " is visible only in expanded state. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "nui-panel-embedded-content-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Custom Styles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " To modify the background color of the side panel, set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "panelBackgroundColor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " input to a value of type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "BackgroundColor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, ". The default is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "BackgroundColor.colorBgLight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, ". To use dark panel border instead of default one, set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "darkBorder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " binding to 'true', by default 'false' is assigned. Default header padding also can be removed, pass 'false' value to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "headerPadding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " binding to reach this, by default 'true' value is assigned. Similarly, side pane body paddings can also be removed by passing 'false' to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "sidePaneBodyPadding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "nui-example-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "nui-panel-custom-styles-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Collapsible Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " To make ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "<nui-panel>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " collapsible, set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "panelMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " input to 'collapsible'. You can set the collapsed state of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "nui-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " externally by setting the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "isCollapsed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " input. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "nui-example-wrapper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "nui-panel-collapse-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Closable Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " To make ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "<nui-panel>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " closable(hidden), set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "panelMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " input to 'closable'. You can hide or show the panel by setting the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "isHidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " 'boolean' input.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "nui-example-wrapper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "nui-panel-hide-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Hoverable Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " To make ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "<nui-panel>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " collapsed/expanded with the mouse hovering, set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "panelMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " input to 'hoverable'. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "nui-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Note, in this case panel can't be collapsed or expanded by the click.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "nui-example-wrapper", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "nui-panel-hoverable-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Overlapping the Main Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " To make main content overlapped by panel, set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "displacePrimaryContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " input to 'false', by default 'true' value is assigned.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "nui-example-wrapper", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "nui-panel-float-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Enabling Resizability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " To make ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "<nui-panel>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " resizable, set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "isResizable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " input to 'true'. The size of panel by default is bordered by corresponding min/max values. To modify this behaviour, boundary values can be set to 'auto'. To make percentage sized 'top' panel resizable, absolute height of parent block should be set. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "nui-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Note, collapsed state panel can't be resizable. Resize of bottom-oriented panel is not currently supported.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "nui-example-wrapper", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "nui-panel-resize-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Top Oriented Collapsible Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " To make top oriented collapsible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "<nui-panel>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, ", set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "panelMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " input to 'collapsible' and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "orientation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " input to 'top'. In this case expand/collapse button will be always centered, but the position of other transcluded elements remains flexible.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "nui-example-wrapper", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "nui-panel-collapse-top-oriented-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "External Collapse Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " To change the collapsed state of the side pane manually, set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "isCollapsed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " boolean input. After the side pane has been collapsed or expanded, a 'collapsed' event is emitted with a boolean of true if the side pane has been collapsed or false if the side pane has been expanded.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "nui-example-wrapper", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "nui-panel-collapse-outside-control-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "External Hide/Show Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " To change the hidden state of the side pane manually, set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "isHidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " boolean input. On hiding/showing of the side pane, a 'hidden' event is emitted with a boolean of true if the side pane has been hidden or false if the side pane has been shown.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "nui-example-wrapper", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "nui-panel-hide-outside-control-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Nested");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Users can easily implement advanced layouts using nested panels. This requires no additional features or knowledge.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "nui-example-wrapper", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "nui-panel-nested-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _panel_basic_panel_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["PanelBasicExampleComponent"], _panel_position_panel_position_example_component__WEBPACK_IMPORTED_MODULE_3__["PanelPositionExampleComponent"], _panel_size_panel_size_example_component__WEBPACK_IMPORTED_MODULE_4__["PanelSizeExampleComponent"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"], _panel_embedded_content_panel_embedded_content_example_component__WEBPACK_IMPORTED_MODULE_6__["PanelEmbeddedContentExampleComponent"], _panel_custom_styles_panel_ustom_styles_example_component__WEBPACK_IMPORTED_MODULE_7__["PanelCustomStylesExampleComponent"], _panel_collapse_panel_collapse_example_component__WEBPACK_IMPORTED_MODULE_8__["PanelCollapseExampleComponent"], _panel_hide_panel_hide_example_component__WEBPACK_IMPORTED_MODULE_9__["PanelHideExampleComponent"], _panel_hoverable_panel_hoverable_example_component__WEBPACK_IMPORTED_MODULE_10__["PanelHoverableExampleComponent"], _panel_float_panel_float_example_component__WEBPACK_IMPORTED_MODULE_11__["PanelFloatExampleComponent"], _panel_resize_panel_resize_example_component__WEBPACK_IMPORTED_MODULE_12__["PanelResizeExampleComponent"], _panel_collapse_top_oriented_panel_collapse_top_oriented_example_component__WEBPACK_IMPORTED_MODULE_13__["PanelCollapseTopOrientedExampleComponent"], _panel_collapse_outside_control_panel_collapse_outside_control_example_component__WEBPACK_IMPORTED_MODULE_14__["PanelCollapseOutsideControlExampleComponent"], _panel_hide_outside_control_panel_hide_outside_control_example_component__WEBPACK_IMPORTED_MODULE_15__["PanelHideOutsideControlExampleComponent"], _panel_nested_panel_nested_example_component__WEBPACK_IMPORTED_MODULE_16__["PanelNestedExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "G+v3":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-custom-styles/panel-custom-styles.example.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <nui-panel id=\"nui-demo-custom-styles-panel\"\n               orientation=\"left\"\n               [darkBorder]=\"true\"\n               [heading]=\"heading\"\n               [headerPadding]=\"false\"\n               [sidePaneBodyPadding]=\"false\"\n               [panelBackgroundColor]=\"panelColor\">\n        <div nuiPanelEmbeddedBody>\n            <div>\n                <p i18n>Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                    tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                    magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                    Aenean dictum at dui sit amet mollis.</p>\n            </div>\n        </div>\n        <div>\n            <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                porttitor laoreet dui a mollis.</p>\n        </div>\n    </nui-panel>\n</div>\n\n");

/***/ }),

/***/ "GxQ5":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-visual-test/panel-visual-test.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Input } from \"@angular/core\";\nimport { IMenuGroup, PanelBackgroundColor } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-panel-visual-test\",\n    templateUrl: \"./panel-visual-test.component.html\",\n})\n\nexport class PanelVisualTestComponent {\n    @Input() isOn = true;\n    public isCollapsible = true;\n    public isCollapsed = false;\n    public headerIcon = \"filter\";\n    public headerIconCounter = 7;\n    public displayFooter = true;\n    public panelColor: PanelBackgroundColor = PanelBackgroundColor.colorBgSecondary;\n    public heading = \"No Padding Header\";\n    public itemsSource: IMenuGroup[] = [\n        {header: \"section title\", itemsSource: [\n                {title: \"Menu Item\", itemType: \"action\"},\n                {title: \"Hover me\", itemType: \"action\"},\n                {title: \"Selected menu item\", isSelected: true},\n                {title: \"Menu item\", itemType: \"switch\", checked: true},\n                {title: \"Menu disabled item\", itemType: \"switch\", checked: false, disabled: true},\n                {title: \"Menu item with checkbox\", itemType: \"option\", disabled: true},\n                {title: \"Menu item with icon\", itemType: \"action\", icon: \"table\"},\n                {title: \"Link menu item\", itemType: \"link\", url: \"#button\", disabled: true},\n                {title: \"Export PDF\", itemType: \"link\", icon: \"export-pdf\", url: \"#button\"},\n            ]},\n    ];\n\n    constructor() {}\n\n    public toggleFooter() {\n        this.displayFooter = !this.displayFooter;\n    }\n\n    public onCollapseChange($event: boolean) {\n        this.isCollapsed = $event;\n    }\n}\n");

/***/ }),

/***/ "HJd5":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-hide/panel-hide.example.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <nui-panel orientation=\"left\" panelMode=\"closable\" heading=\"Header\" i18n-heading id=\"nui-demo-hidden-panel\" [isResizable]=\"true\">\n        <div nuiPanelEmbeddedBody>\n            <div>\n                <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                    quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                    Nulla ac mattis tortor, quis iaculis sapien.</p>\n            </div>\n        </div>\n        <div>\n            <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                porttitor laoreet dui a mollis.</p>\n        </div>\n        <div nuiPanelEmbeddedFooter class=\"font-weight-bold\">EMBEDDED FOOTER</div>\n    </nui-panel>\n</div>\n");

/***/ }),

/***/ "HpYj":
/*!*************************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-basic/panel-basic.example.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PanelBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelBasicExampleComponent", function() { return PanelBasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/panel/panel.component */ "Xk8b");


class PanelBasicExampleComponent {
}
PanelBasicExampleComponent.ɵfac = function PanelBasicExampleComponent_Factory(t) { return new (t || PanelBasicExampleComponent)(); };
PanelBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelBasicExampleComponent, selectors: [["nui-panel-basic-example"]], decls: 9, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_BASIC_PANEL_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        i18n_0 = MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_BASIC_PANEL_BASIC_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟dd7629c4ea22682a8b186a97ee20dfe30e95ac88␟6513607865111590520:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_BASIC_PANEL_BASIC_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        i18n_2 = MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_BASIC_PANEL_BASIC_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟35b1e65604a5a673483b9f3a32811a7a8eef18a5␟5217306585722864337:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.`;
    } return [["id", "nui-demo-basic-panel"], ["nuiPanelEmbeddedBody", ""], i18n_0, i18n_2]; }, template: function PanelBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__["PanelComponent"]], encapsulation: 2 });


/***/ }),

/***/ "LGMO":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-position/panel-position.example.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-panel-position-example\",\n    templateUrl: \"./panel-position.example.component.html\",\n})\n\nexport class PanelPositionExampleComponent {}\n");

/***/ }),

/***/ "MgXE":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-size/panel-size.example.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-panel-size-example\",\n    templateUrl: \"./panel-size.example.component.html\",\n})\n\nexport class PanelSizeExampleComponent {}\n");

/***/ }),

/***/ "NO/K":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-resize/panel-resize.example.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 300px\">\n    <nui-panel id=\"nui-demo-resizable-panel\"\n               panelMode=\"collapsible\"\n               isResizable=\"true\"\n               heading=\"Header\"\n               i18n-heading\n               paneSize=\"20%\">\n        <div nuiPanelEmbeddedBody>\n            <div>\n                <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                    quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                    Nulla ac mattis tortor, quis iaculis sapien.</p>\n            </div>\n        </div>\n        <div>\n            <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                porttitor laoreet dui a mollis.</p>\n            </div>\n    </nui-panel>\n</div>\n");

/***/ }),

/***/ "S0gk":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-nested/panel-nested.example.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-panel-nested-example\",\n    templateUrl: \"./panel-nested.example.component.html\",\n})\nexport class PanelNestedExampleComponent {\n    public isCollapsible = true;\n    public isCollapsed = false;\n    public isInnerCollapsed = true;\n    public outerRepeat = [\n        {\n            name: \"AvantiA\",\n            type: \"V12\",\n            disabled: true,\n        }, {\n            name: \"AvantiA\",\n            type: \"V12\",\n            disabled: true,\n        }, {\n            name: \"AvantiA\",\n            type: \"V12\",\n            disabled: true,\n        }, {\n            name: \"AvantiA\",\n            type: \"V12\",\n            disabled: true,\n        }];\n    public innerRepeat = [\n        {\n            name: `AvantiA Item-${Math.round(Math.random() * 100)}`,\n            type: \"V12\",\n            disabled: true,\n        }, {\n            name: `AvantiA Item-${Math.round(Math.random() * 100)}`,\n            type: \"V12\",\n            disabled: true,\n        }, {\n            name: `AvantiA Item-${Math.round(Math.random() * 100)}`,\n            type: \"V12\",\n            disabled: true,\n        }, {\n            name: `AvantiA Item-${Math.round(Math.random() * 100)}`,\n            type: \"V12\",\n            disabled: true,\n        }];\n    public headerIcon = \"filter\";\n    public headerIconCounter = 4;\n\n    public onCollapseChange($event: boolean) {\n        this.isCollapsed = $event;\n    }\n}\n");

/***/ }),

/***/ "SthW":
/*!***********************************************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-embedded-content/panel-embedded-content.example.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PanelEmbeddedContentExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelEmbeddedContentExampleComponent", function() { return PanelEmbeddedContentExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/panel/panel.component */ "Xk8b");
/* harmony import */ var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/icon/icon.component */ "45Bz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PanelEmbeddedContentExampleComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PanelEmbeddedContentExampleComponent_div_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.onClickCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PanelEmbeddedContentExampleComponent_div_17_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onClickConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PanelEmbeddedContentExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.isCollapsed = false;
        this.headerIcon = "filter";
        this.displayFooter = true;
    }
    onClickCancel() {
        this.toastService.info({
            message: $localize `Cancel clicked!`,
            title: $localize `Action`,
        });
    }
    onClickConfirm() {
        this.toastService.success({
            message: $localize `Confirm clicked!`,
            title: $localize `Action`,
        });
    }
    toggleFooter() {
        this.displayFooter = !this.displayFooter;
    }
}
PanelEmbeddedContentExampleComponent.ɵfac = function PanelEmbeddedContentExampleComponent_Factory(t) { return new (t || PanelEmbeddedContentExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
PanelEmbeddedContentExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PanelEmbeddedContentExampleComponent, selectors: [["nui-panel-embedded-content-example"]], decls: 18, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5859086942995726634$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_EMBEDDED_CONTENT_PANEL_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Toggle Footer");
        i18n_0 = MSG_EXTERNAL_5859086942995726634$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_EMBEDDED_CONTENT_PANEL_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟7b28bcb3b9ab7ff8272bccf04356c4a2553de4da␟5859086942995726634:Toggle Footer`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4365587150167205841$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_EMBEDDED_CONTENT_PANEL_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("TRANSCLUDED");
        i18n_2 = MSG_EXTERNAL_4365587150167205841$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_EMBEDDED_CONTENT_PANEL_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟b06b57cdb3f689b1f500012806fe23caa9ad335b␟4365587150167205841:TRANSCLUDED`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_EMBEDDED_CONTENT_PANEL_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        i18n_4 = MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_EMBEDDED_CONTENT_PANEL_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟dd7629c4ea22682a8b186a97ee20dfe30e95ac88␟6513607865111590520:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_EMBEDDED_CONTENT_PANEL_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        i18n_6 = MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_EMBEDDED_CONTENT_PANEL_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟35b1e65604a5a673483b9f3a32811a7a8eef18a5␟5217306585722864337:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2159130950882492111$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_EMBEDDED_CONTENT_PANEL_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Cancel");
        i18n_8 = MSG_EXTERNAL_2159130950882492111$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_EMBEDDED_CONTENT_PANEL_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟d7b35c384aecd25a516200d6921836374613dfe7␟2159130950882492111:Cancel`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9178182467454450952$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_EMBEDDED_CONTENT_PANEL_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS__11 = goog.getMsg("Confirm");
        i18n_10 = MSG_EXTERNAL_9178182467454450952$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_EMBEDDED_CONTENT_PANEL_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS__11;
    }
    else {
        i18n_10 = $localize `:␟68e710782ccb5398b3acb8844caf0b199da2c3da␟9178182467454450952:Confirm`;
    } return [["nui-button", "", "type", "button", 3, "click"], i18n_0, ["id", "nui-demo-embedded-content-panel", "orientation", "left"], ["nuiPanelEmbeddedIcon", "", 1, "d-flex", "mr-1"], ["iconColor", "gray", 3, "icon"], ["nuiPanelEmbeddedHeading", ""], [1, "my-0"], i18n_2, ["nuiPanelEmbeddedBody", ""], i18n_4, i18n_6, ["nuiPanelEmbeddedFooter", "", "class", "d-flex justify-content-between", 4, "ngIf"], ["nuiPanelEmbeddedFooter", "", 1, "d-flex", "justify-content-between"], i18n_8, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_10]; }, template: function PanelEmbeddedContentExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PanelEmbeddedContentExampleComponent_Template_button_click_0_listener() { return ctx.toggleFooter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nui-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nui-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PanelEmbeddedContentExampleComponent_div_17_Template, 5, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.headerIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayFooter);
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "SwJS":
/*!*******************************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-position/panel-position.example.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PanelPositionExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelPositionExampleComponent", function() { return PanelPositionExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/panel/panel.component */ "Xk8b");


class PanelPositionExampleComponent {
}
PanelPositionExampleComponent.ɵfac = function PanelPositionExampleComponent_Factory(t) { return new (t || PanelPositionExampleComponent)(); };
PanelPositionExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelPositionExampleComponent, selectors: [["nui-panel-position-example"]], decls: 9, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4651617917857970886$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_POSITION_PANEL_POSITION_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congueerat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismodtincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim.");
        i18n_0 = MSG_EXTERNAL_4651617917857970886$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_POSITION_PANEL_POSITION_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟3da763d8d074d94292f3c66c857f47af0de991d6␟4651617917857970886:Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congueerat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismodtincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim.`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_POSITION_PANEL_POSITION_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        i18n_2 = MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_POSITION_PANEL_POSITION_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟35b1e65604a5a673483b9f3a32811a7a8eef18a5␟5217306585722864337:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.`;
    } return [["orientation", "top"], ["nuiPanelEmbeddedBody", ""], i18n_0, i18n_2]; }, template: function PanelPositionExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__["PanelComponent"]], encapsulation: 2 });


/***/ }),

/***/ "TzLV":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-custom-styles/panel-сustom-styles.example.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { PanelBackgroundColor } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-panel-custom-styles-example\",\n    templateUrl: \"./panel-custom-styles.example.component.html\",\n})\n\nexport class PanelCustomStylesExampleComponent {\n    constructor() {\n    }\n    public panelColor: PanelBackgroundColor = PanelBackgroundColor.colorBgSecondary;\n    public heading = $localize `No Padding Header`;\n}\n");

/***/ }),

/***/ "Vddm":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-collapse-top-oriented/panel-collapse-top-oriented.example.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject, Input } from \"@angular/core\";\nimport { IMenuGroup, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-panel-collapse-top-oriented-example\",\n    templateUrl: \"./panel-collapse-top-oriented.example.component.html\",\n})\n\nexport class PanelCollapseTopOrientedExampleComponent {\n    @Input() isOn = true;\n\n    constructor(@Inject(ToastService) private toastService: ToastService) {\n    }\n\n    public itemsSource: IMenuGroup[] = [\n        {header: $localize `section title`, itemsSource: [\n                {title: $localize `Menu Item`, itemType: \"action\", action: this.actionDone.bind(this)},\n                {title: $localize `Hover me`, itemType: \"action\", action: this.actionDone.bind(this)},\n                {title: $localize `Selected menu item`, isSelected: true},\n                {title: $localize `Menu item`, itemType: \"switch\", checked: true},\n                {title: $localize `Menu disabled item`, itemType: \"switch\", checked: false, disabled: true},\n                {title: $localize `Menu item with checkbox`, itemType: \"option\", disabled: true},\n                {title: $localize `Menu item with icon`, itemType: \"action\", icon: \"table\"},\n                {title: $localize `Link menu item`, itemType: \"link\", url: \"#button\", disabled: true},\n                {title: $localize `Export PDF`, itemType: \"link\", icon: \"export-pdf\", url: \"#button\"},\n            ]},\n    ];\n\n    private actionDone(): void {\n        this.toastService.info({\n            message: $localize `Action Done!!`,\n            title: $localize `Menu Action`,\n        });\n    }\n}\n");

/***/ }),

/***/ "YZEd":
/*!***************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-collapse-outside-control/panel-collapse-outside-control.example.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: PanelCollapseOutsideControlExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelCollapseOutsideControlExampleComponent", function() { return PanelCollapseOutsideControlExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/panel/panel.component */ "Xk8b");





class PanelCollapseOutsideControlExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.isCollapsed = false;
        this.heading = $localize `Header`;
    }
    collapse() {
        this.isCollapsed = true;
    }
    expand() {
        this.isCollapsed = false;
    }
    onCollapseChange($event) {
        this.isCollapsed = $event;
        this.toastService.info({
            message: this.isCollapsed ? $localize `Collapsed` : $localize `Expanded`,
            title: $localize `Panel State`,
        });
    }
}
PanelCollapseOutsideControlExampleComponent.ɵfac = function PanelCollapseOutsideControlExampleComponent_Factory(t) { return new (t || PanelCollapseOutsideControlExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
PanelCollapseOutsideControlExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PanelCollapseOutsideControlExampleComponent, selectors: [["nui-panel-collapse-outside-control-example"]], decls: 13, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3679728470255391383$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_OUTSIDE_CONTROL_PANEL_COLLAPSE_OUTSIDE_CONTROL_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        i18n_0 = MSG_EXTERNAL_3679728470255391383$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_OUTSIDE_CONTROL_PANEL_COLLAPSE_OUTSIDE_CONTROL_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟33ee92465bea7db785f50c6ef8a8088e2d23b197␟3679728470255391383:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_429514778800823218$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_OUTSIDE_CONTROL_PANEL_COLLAPSE_OUTSIDE_CONTROL_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        i18n_2 = MSG_EXTERNAL_429514778800823218$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_OUTSIDE_CONTROL_PANEL_COLLAPSE_OUTSIDE_CONTROL_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟6905d57a0e9a414aa338333a65394ee2cae94928␟429514778800823218:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.`;
    } return [["type", "button", "nui-button", "", 3, "disabled", "click"], ["panelMode", "collapsible", "id", "nui-demo-collapsible-externally-panel", "orientation", "left", 3, "heading", "isCollapsed", "collapsed"], ["nuiPanelEmbeddedBody", ""], i18n_0, i18n_2]; }, template: function PanelCollapseOutsideControlExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PanelCollapseOutsideControlExampleComponent_Template_button_click_1_listener() { return ctx.collapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PanelCollapseOutsideControlExampleComponent_Template_button_click_3_listener() { return ctx.expand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Expand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("collapsed", function PanelCollapseOutsideControlExampleComponent_Template_nui_panel_collapsed_5_listener($event) { return ctx.onCollapseChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](9, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](12, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("heading", ctx.heading)("isCollapsed", ctx.isCollapsed);
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Z/z+":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-nested/panel-nested.example.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <nui-panel panelMode=\"collapsible\"\n               orientation=\"left\"\n               [isCollapsed]=\"false\"\n               (collapsed)=\"onCollapseChange($event)\">\n        <div nuiPanelEmbeddedHeading class=\"flex flex-row align-items-center\">\n            <span>\n                <h4 i18n class=\"my-0\">Outer Panel</h4>\n            </span>\n        </div>\n        <div nuiPanelEmbeddedBody>\n            <div>\n                <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                    quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                    Nulla ac mattis tortor, quis iaculis sapien.</p>\n            </div>\n        </div>\n        <div>\n            <nui-panel class=\"w-100\"\n                       panelMode=\"collapsible\"\n                       orientation=\"left\"\n                       [isCollapsed]=\"false\">\n                <div nuiPanelEmbeddedHeading class=\"flex flex-row align-items-center\">\n                    <span>\n                        <h4 i18n class=\"my-0\">Inner Panel</h4>\n                    </span>\n                </div>\n                <div nuiPanelEmbeddedBody>\n                    <div>\n                        <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt\n                            non massa\n                            quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit\n                            nunc.\n                            Nulla ac mattis tortor, quis iaculis sapien.</p>\n                    </div>\n                </div>\n                <div>\n                    <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id\n                        vulputate.\n                        Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id,\n                        congue\n                        erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem\n                        ac\n                        vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                        tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                        magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                        Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                        amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu\n                        et\n                        bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                        porttitor laoreet dui a mollis.</p>\n                </div>\n            </nui-panel>\n        </div>\n    </nui-panel>\n</div>\n");

/***/ }),

/***/ "Z7rG":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-hoverable/panel-hoverable.example.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <nui-panel panelMode=\"hoverable\"\n               orientation=\"left\"\n               [displacePrimaryContent]=\"false\"\n               id=\"nui-demo-hoverable-panel\">\n        <div nuiPanelEmbeddedBody>\n            <div>\n                <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                    quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                    Nulla ac mattis tortor, quis iaculis sapien.</p>\n            </div>\n        </div>\n        <div>\n            <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                porttitor laoreet dui a mollis.</p>\n        </div>\n    </nui-panel>\n</div>\n");

/***/ }),

/***/ "aops":
/*!*****************************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-visual-test/panel-visual-test.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PanelVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelVisualTestComponent", function() { return PanelVisualTestComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/panel/panel.component */ "Xk8b");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu/menu.component */ "JG2v");
/* harmony import */ var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/icon/icon.component */ "45Bz");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");







function PanelVisualTestComponent_nui_icon_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nui-icon", 40);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.headerIcon)("counter", ctx_r0.headerIconCounter);
} }
function PanelVisualTestComponent_nui_icon_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nui-icon", 41);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.headerIcon);
} }
function PanelVisualTestComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PanelVisualTestComponent {
    constructor() {
        this.isOn = true;
        this.isCollapsible = true;
        this.isCollapsed = false;
        this.headerIcon = "filter";
        this.headerIconCounter = 7;
        this.displayFooter = true;
        this.panelColor = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["PanelBackgroundColor"].colorBgSecondary;
        this.heading = "No Padding Header";
        this.itemsSource = [
            { header: "section title", itemsSource: [
                    { title: "Menu Item", itemType: "action" },
                    { title: "Hover me", itemType: "action" },
                    { title: "Selected menu item", isSelected: true },
                    { title: "Menu item", itemType: "switch", checked: true },
                    { title: "Menu disabled item", itemType: "switch", checked: false, disabled: true },
                    { title: "Menu item with checkbox", itemType: "option", disabled: true },
                    { title: "Menu item with icon", itemType: "action", icon: "table" },
                    { title: "Link menu item", itemType: "link", url: "#button", disabled: true },
                    { title: "Export PDF", itemType: "link", icon: "export-pdf", url: "#button" },
                ] },
        ];
    }
    toggleFooter() {
        this.displayFooter = !this.displayFooter;
    }
    onCollapseChange($event) {
        this.isCollapsed = $event;
    }
}
PanelVisualTestComponent.ɵfac = function PanelVisualTestComponent_Factory(t) { return new (t || PanelVisualTestComponent)(); };
PanelVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PanelVisualTestComponent, selectors: [["nui-panel-visual-test"]], inputs: { isOn: "isOn" }, decls: 148, vars: 12, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7148244173591151030$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_VISUAL_TEST_PANEL_VISUAL_TEST_COMPONENT_TS_1 = goog.getMsg("Outer Panel");
        i18n_0 = MSG_EXTERNAL_7148244173591151030$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_VISUAL_TEST_PANEL_VISUAL_TEST_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟b553018b7040c6c2e72c001d0dc6cbc1316a93c4␟7148244173591151030:Outer Panel`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2429158923144868532$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_VISUAL_TEST_PANEL_VISUAL_TEST_COMPONENT_TS_3 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        i18n_2 = MSG_EXTERNAL_2429158923144868532$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_VISUAL_TEST_PANEL_VISUAL_TEST_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟0dad891b157a0949f580c1ca20b4b7de0018a817␟2429158923144868532:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4884023130777560503$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_VISUAL_TEST_PANEL_VISUAL_TEST_COMPONENT_TS_5 = goog.getMsg("Inner Panel");
        i18n_4 = MSG_EXTERNAL_4884023130777560503$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_VISUAL_TEST_PANEL_VISUAL_TEST_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟e811393bdeb052db75fba3062665471c2e1b324a␟4884023130777560503:Inner Panel`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3552996750452120486$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_VISUAL_TEST_PANEL_VISUAL_TEST_COMPONENT_TS_7 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        i18n_6 = MSG_EXTERNAL_3552996750452120486$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_VISUAL_TEST_PANEL_VISUAL_TEST_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟f59ba17f908a294a39779d8d59d7bd23f67f8249␟3552996750452120486:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_89861161956067230$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_VISUAL_TEST_PANEL_VISUAL_TEST_COMPONENT_TS_9 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        i18n_8 = MSG_EXTERNAL_89861161956067230$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_VISUAL_TEST_PANEL_VISUAL_TEST_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟1804d34d1d7a5a3fdf16a1fa90a9b365788ee38a␟89861161956067230:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.`;
    } return [[1, "container"], ["id", "nui-visual-basic-panel-details"], ["id", "nui-visual-test-basic-panel"], ["nuiPanelEmbeddedBody", ""], ["id", "nui-visual-custom-size-panel-details"], ["id", "nui-visual-test-size-panel", "orientation", "right", "paneMinSize", "150px", "paneMaxSize", "550px", "paneSize", "350px"], ["id", "nui-visual-hoverable-panel-details"], ["panelMode", "hoverable", "orientation", "left", "id", "nui-visual-test-hoverable-panel", 3, "displacePrimaryContent"], ["id", "nui-visual-closable-panel-details"], ["orientation", "left", "panelMode", "closable", "heading", "panel header", "id", "nui-visual-test-hidden-panel"], ["nuiPanelEmbeddedFooter", "", 1, "font-weight-bold"], ["id", "nui-visual-with-embedded-details"], ["type", "button", "id", "nui-visual-test-panel-footer-toggle-btn", 3, "click"], ["panelMode", "collapsible", "id", "nui-visual-test-embedded-content-panel", "orientation", "left", 3, "isCollapsed", "collapsed"], ["nuiPanelEmbeddedIcon", ""], [3, "icon", "counter", 4, "ngIf"], ["nuiPanelEmbeddedHeading", "", 1, "d-flex", "flex-row", "align-items-center"], ["iconColor", "gray", 3, "icon", 4, "ngIf"], [1, "my-0"], ["nuiPanelEmbeddedFooter", "", "class", "d-flex justify-content-between", 4, "ngIf"], ["id", "nui-visual-custom-style-panel-details"], ["id", "nui-visual-test-custom-styles-panel", "orientation", "left", "panelMode", "collapsible", 3, "darkBorder", "headerPadding", "panelBackgroundColor"], ["nuiPanelEmbeddedHeading", "", 1, "d-flex", "flex-row", "align-items-center", "w-100"], [1, "ml-1"], [1, "ml-auto"], ["displayStyle", "action", "icon", "menu", 3, "itemsSource"], ["id", "nui-visual-resizable-details"], ["id", "nui-visual-test-resizable-panel", "panelMode", "collapsible", "isResizable", "true", "heading", "Panel Header", "paneSize", "20%"], ["id", "nui-visual-top-oriented-panel-details"], ["panelMode", "collapsible", "orientation", "top", "id", "nui-visual-test-top-oriented-panel"], ["nuiPanelEmbeddedHeading", "", 1, "d-flex", "align-items-center"], ["id", "nui-visual-nested-panel-details"], ["panelMode", "collapsible", "orientation", "left", "id", "nui-visual-test-nested-panel-outer", 3, "isCollapsed"], ["nuiPanelEmbeddedHeading", "", 1, "flex", "flex-row", "align-items-center"], i18n_0, i18n_2, ["panelMode", "collapsible", "orientation", "left", 1, "w-100", 3, "isCollapsed"], i18n_4, i18n_6, i18n_8, [3, "icon", "counter"], ["iconColor", "gray", 3, "icon"], ["nuiPanelEmbeddedFooter", "", 1, "d-flex", "justify-content-between"], ["nui-button", "", "type", "button"], ["nui-button", "", "type", "button", "displayStyle", "primary"]]; }, template: function PanelVisualTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "summary", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Basic Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit ameAt mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "summary", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Panel With Custom Sizes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nui-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "summary", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Hoverable Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "nui-panel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "summary", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Closable Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "nui-panel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "EMBEDDED FOOTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "summary", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Panel's Collapsible Mode With Embedded Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PanelVisualTestComponent_Template_button_click_55_listener() { return ctx.toggleFooter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Toggle Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "nui-panel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("collapsed", function PanelVisualTestComponent_Template_nui_panel_collapsed_58_listener($event) { return ctx.onCollapseChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, PanelVisualTestComponent_nui_icon_60_Template, 1, 2, "nui-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, PanelVisualTestComponent_nui_icon_62_Template, 1, 1, "nui-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "TRANSCLUDED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, PanelVisualTestComponent_div_73_Template, 5, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "summary", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Custom Styles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "nui-panel", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Custom Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "nui-menu", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "summary", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Resizable Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "nui-panel", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "summary", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Top Oriented Collapsible Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "nui-panel", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "nui-menu", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Path History");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congueerat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismodtincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "summary", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Nested Panels");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "nui-panel", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](129, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](133, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "nui-panel", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](139, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](143, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](146, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displacePrimaryContent", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isCollapsed", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("darkBorder", true)("headerPadding", false)("panelBackgroundColor", ctx.panelColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.itemsSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.itemsSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isCollapsed", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isCollapsed", false);
    } }, directives: [_src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"]], encapsulation: 2 });


/***/ }),

/***/ "bd4U":
/*!***********************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-size/panel-size.example.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PanelSizeExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelSizeExampleComponent", function() { return PanelSizeExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/panel/panel.component */ "Xk8b");


class PanelSizeExampleComponent {
}
PanelSizeExampleComponent.ɵfac = function PanelSizeExampleComponent_Factory(t) { return new (t || PanelSizeExampleComponent)(); };
PanelSizeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelSizeExampleComponent, selectors: [["nui-panel-size-example"]], decls: 9, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_SIZE_PANEL_SIZE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        i18n_0 = MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_SIZE_PANEL_SIZE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟dd7629c4ea22682a8b186a97ee20dfe30e95ac88␟6513607865111590520:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_SIZE_PANEL_SIZE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        i18n_2 = MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_SIZE_PANEL_SIZE_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟35b1e65604a5a673483b9f3a32811a7a8eef18a5␟5217306585722864337:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.`;
    } return [["id", "nui-demo-size-panel", "orientation", "right", "paneMinSize", "150px", "paneMaxSize", "550px", "paneSize", "350px"], ["nuiPanelEmbeddedBody", ""], i18n_0, i18n_2]; }, template: function PanelSizeExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__["PanelComponent"]], encapsulation: 2 });


/***/ }),

/***/ "c+2O":
/*!***************************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-nested/panel-nested.example.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PanelNestedExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelNestedExampleComponent", function() { return PanelNestedExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/panel/panel.component */ "Xk8b");


class PanelNestedExampleComponent {
    constructor() {
        this.isCollapsible = true;
        this.isCollapsed = false;
        this.isInnerCollapsed = true;
        this.outerRepeat = [
            {
                name: "AvantiA",
                type: "V12",
                disabled: true,
            }, {
                name: "AvantiA",
                type: "V12",
                disabled: true,
            }, {
                name: "AvantiA",
                type: "V12",
                disabled: true,
            }, {
                name: "AvantiA",
                type: "V12",
                disabled: true,
            }
        ];
        this.innerRepeat = [
            {
                name: `AvantiA Item-${Math.round(Math.random() * 100)}`,
                type: "V12",
                disabled: true,
            }, {
                name: `AvantiA Item-${Math.round(Math.random() * 100)}`,
                type: "V12",
                disabled: true,
            }, {
                name: `AvantiA Item-${Math.round(Math.random() * 100)}`,
                type: "V12",
                disabled: true,
            }, {
                name: `AvantiA Item-${Math.round(Math.random() * 100)}`,
                type: "V12",
                disabled: true,
            }
        ];
        this.headerIcon = "filter";
        this.headerIconCounter = 4;
    }
    onCollapseChange($event) {
        this.isCollapsed = $event;
    }
}
PanelNestedExampleComponent.ɵfac = function PanelNestedExampleComponent_Factory(t) { return new (t || PanelNestedExampleComponent)(); };
PanelNestedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelNestedExampleComponent, selectors: [["nui-panel-nested-example"]], decls: 23, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7148244173591151030$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_NESTED_PANEL_NESTED_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Outer Panel");
        i18n_0 = MSG_EXTERNAL_7148244173591151030$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_NESTED_PANEL_NESTED_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟b553018b7040c6c2e72c001d0dc6cbc1316a93c4␟7148244173591151030:Outer Panel`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_NESTED_PANEL_NESTED_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        i18n_2 = MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_NESTED_PANEL_NESTED_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟dd7629c4ea22682a8b186a97ee20dfe30e95ac88␟6513607865111590520:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4884023130777560503$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_NESTED_PANEL_NESTED_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Inner Panel");
        i18n_4 = MSG_EXTERNAL_4884023130777560503$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_NESTED_PANEL_NESTED_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟e811393bdeb052db75fba3062665471c2e1b324a␟4884023130777560503:Inner Panel`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1528658045178283867$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_NESTED_PANEL_NESTED_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        i18n_6 = MSG_EXTERNAL_1528658045178283867$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_NESTED_PANEL_NESTED_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟b2746a72cc47c2f91e27f68509473692df4ef092␟1528658045178283867:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4512657034747235875$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_NESTED_PANEL_NESTED_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        i18n_8 = MSG_EXTERNAL_4512657034747235875$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_NESTED_PANEL_NESTED_EXAMPLE_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟89b0a1871618cf3e4bb5d23d4d2a3b421a574c06␟4512657034747235875:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.`;
    } return [["panelMode", "collapsible", "orientation", "left", 3, "isCollapsed", "collapsed"], ["nuiPanelEmbeddedHeading", "", 1, "flex", "flex-row", "align-items-center"], [1, "my-0"], i18n_0, ["nuiPanelEmbeddedBody", ""], i18n_2, ["panelMode", "collapsible", "orientation", "left", 1, "w-100", 3, "isCollapsed"], i18n_4, i18n_6, i18n_8]; }, template: function PanelNestedExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collapsed", function PanelNestedExampleComponent_Template_nui_panel_collapsed_1_listener($event) { return ctx.onCollapseChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nui-panel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](19, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](22, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isCollapsed", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isCollapsed", false);
    } }, directives: [_src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__["PanelComponent"]], encapsulation: 2 });


/***/ }),

/***/ "cpBZ":
/*!*********************************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-hoverable/panel-hoverable.example.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PanelHoverableExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelHoverableExampleComponent", function() { return PanelHoverableExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/panel/panel.component */ "Xk8b");


class PanelHoverableExampleComponent {
}
PanelHoverableExampleComponent.ɵfac = function PanelHoverableExampleComponent_Factory(t) { return new (t || PanelHoverableExampleComponent)(); };
PanelHoverableExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelHoverableExampleComponent, selectors: [["nui-panel-hoverable-example"]], decls: 9, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HOVERABLE_PANEL_HOVERABLE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        i18n_0 = MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HOVERABLE_PANEL_HOVERABLE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟dd7629c4ea22682a8b186a97ee20dfe30e95ac88␟6513607865111590520:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HOVERABLE_PANEL_HOVERABLE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        i18n_2 = MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HOVERABLE_PANEL_HOVERABLE_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟35b1e65604a5a673483b9f3a32811a7a8eef18a5␟5217306585722864337:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.`;
    } return [["panelMode", "hoverable", "orientation", "left", "id", "nui-demo-hoverable-panel", 3, "displacePrimaryContent"], ["nuiPanelEmbeddedBody", ""], i18n_0, i18n_2]; }, template: function PanelHoverableExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displacePrimaryContent", false);
    } }, directives: [_src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__["PanelComponent"]], encapsulation: 2 });


/***/ }),

/***/ "e/8e":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-collapse-outside-control/panel-collapse-outside-control.example.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <button [disabled]=\"isCollapsed\" type=\"button\" nui-button (click)=\"collapse()\">Collapse</button>\n    <button [disabled]=\"!isCollapsed\" type=\"button\" nui-button (click)=\"expand()\">Expand</button>\n    <nui-panel panelMode=\"collapsible\"\n        id=\"nui-demo-collapsible-externally-panel\"\n        orientation=\"left\"\n        [heading]=\"heading\"\n        [isCollapsed]=\"isCollapsed\"\n        (collapsed)=\"onCollapseChange($event)\">\n        <div nuiPanelEmbeddedBody>\n            <div>\n                <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis,\n                    efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis\n                    tortor, quis iaculis sapien.</p>\n            </div>\n        </div>\n        <div>\n            <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer\n                eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi\n                lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis\n                purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget\n                commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non\n                ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit\n                id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo\n                lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                porttitor laoreet dui a mollis.</p>\n        </div>\n    </nui-panel>\n</div>\n");

/***/ }),

/***/ "eRuV":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-resize/panel-resize.example.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-panel-resize-example\",\n    templateUrl: \"./panel-resize.example.component.html\",\n})\n\nexport class PanelResizeExampleComponent {}\n");

/***/ }),

/***/ "g7KL":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-collapse/panel-collapse.example.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <nui-panel panelMode=\"collapsible\"\n               id=\"nui-demo-collapsible-panel\"\n               orientation=\"left\"\n               [isCollapsed]=\"true\"\n               (collapsed)=\"onCollapseChange($event)\">\n        <div nuiPanelEmbeddedHeading class=\"d-flex flex-row align-items-center\">\n            <nui-icon *ngIf=\"!isCollapsed\"\n                      class=\"mr-1\"\n                      [icon]=\"headerIcon\"\n                      iconColor=\"gray\">\n            </nui-icon>\n            <span>\n                <h4 i18n class=\"my-0\">TRANSCLUDED</h4>\n            </span>\n        </div>\n        <div nuiPanelEmbeddedIcon class=\"mt-1\">\n            <nui-icon *ngIf=\"isCollapsed\"\n                      [icon]=\"headerIcon\"\n                      [counter]=\"headerIconCounter\">\n            </nui-icon>\n        </div>\n        <div nuiPanelEmbeddedBody>\n            <div>\n                <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                    quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                    Nulla ac mattis tortor, quis iaculis sapien.</p>\n            </div>\n        </div>\n        <div>\n            <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                porttitor laoreet dui a mollis.</p>\n        </div>\n    </nui-panel>\n</div>\n");

/***/ }),

/***/ "ktjt":
/*!********************************************************************************************************!*\
  !*** ./demo/src/components/demo/panel sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.ts": "tnZV",
	"./panel-basic/panel-basic.example.component.html": "5foY",
	"./panel-basic/panel-basic.example.component.ts": "p1Ou",
	"./panel-collapse-outside-control/panel-collapse-outside-control.example.component.html": "e/8e",
	"./panel-collapse-outside-control/panel-collapse-outside-control.example.component.ts": "vVaX",
	"./panel-collapse-top-oriented/panel-collapse-top-oriented.example.component.html": "mzKP",
	"./panel-collapse-top-oriented/panel-collapse-top-oriented.example.component.ts": "Vddm",
	"./panel-collapse/panel-collapse.example.component.html": "g7KL",
	"./panel-collapse/panel-collapse.example.component.ts": "/BCT",
	"./panel-custom-styles/panel-custom-styles.example.component.html": "G+v3",
	"./panel-custom-styles/panel-сustom-styles.example.component.ts": "TzLV",
	"./panel-docs/panel-docs.example.component.html": "ohJX",
	"./panel-docs/panel-docs.example.component.ts": "vKpZ",
	"./panel-embedded-content/panel-embedded-content.example.component.html": "qG8U",
	"./panel-embedded-content/panel-embedded-content.example.component.ts": "2Nzq",
	"./panel-float/panel-float.example.component.html": "1C32",
	"./panel-float/panel-float.example.component.ts": "xmU5",
	"./panel-hide-outside-control/panel-hide-outside-control.example.component.html": "9WqS",
	"./panel-hide-outside-control/panel-hide-outside-control.example.component.ts": "lprR",
	"./panel-hide/panel-hide.example.component.html": "HJd5",
	"./panel-hide/panel-hide.example.component.ts": "rid6",
	"./panel-hoverable/panel-hoverable.example.component.html": "Z7rG",
	"./panel-hoverable/panel-hoverable.example.component.ts": "8WIg",
	"./panel-nested/panel-nested.example.component.html": "Z/z+",
	"./panel-nested/panel-nested.example.component.ts": "S0gk",
	"./panel-position/panel-position.example.component.html": "tVc2",
	"./panel-position/panel-position.example.component.ts": "LGMO",
	"./panel-resize/panel-resize.example.component.html": "NO/K",
	"./panel-resize/panel-resize.example.component.ts": "eRuV",
	"./panel-size/panel-size.example.component.html": "wUx3",
	"./panel-size/panel-size.example.component.ts": "MgXE",
	"./panel-visual-test/panel-visual-test.component.html": "z/oI",
	"./panel-visual-test/panel-visual-test.component.ts": "GxQ5",
	"./panel.module.ts": "nB2A"
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
webpackContext.id = "ktjt";

/***/ }),

/***/ "lHae":
/*!*********************************************************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-collapse-top-oriented/panel-collapse-top-oriented.example.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: PanelCollapseTopOrientedExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelCollapseTopOrientedExampleComponent", function() { return PanelCollapseTopOrientedExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/panel/panel.component */ "Xk8b");
/* harmony import */ var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu/menu.component */ "JG2v");
/* harmony import */ var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/switch/switch.component */ "6CEj");






class PanelCollapseTopOrientedExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.isOn = true;
        this.itemsSource = [
            { header: $localize `section title`, itemsSource: [
                    { title: $localize `Menu Item`, itemType: "action", action: this.actionDone.bind(this) },
                    { title: $localize `Hover me`, itemType: "action", action: this.actionDone.bind(this) },
                    { title: $localize `Selected menu item`, isSelected: true },
                    { title: $localize `Menu item`, itemType: "switch", checked: true },
                    { title: $localize `Menu disabled item`, itemType: "switch", checked: false, disabled: true },
                    { title: $localize `Menu item with checkbox`, itemType: "option", disabled: true },
                    { title: $localize `Menu item with icon`, itemType: "action", icon: "table" },
                    { title: $localize `Link menu item`, itemType: "link", url: "#button", disabled: true },
                    { title: $localize `Export PDF`, itemType: "link", icon: "export-pdf", url: "#button" },
                ] },
        ];
    }
    actionDone() {
        this.toastService.info({
            message: $localize `Action Done!!`,
            title: $localize `Menu Action`,
        });
    }
}
PanelCollapseTopOrientedExampleComponent.ɵfac = function PanelCollapseTopOrientedExampleComponent_Factory(t) { return new (t || PanelCollapseTopOrientedExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
PanelCollapseTopOrientedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PanelCollapseTopOrientedExampleComponent, selectors: [["nui-panel-collapse-top-oriented-example"]], inputs: { isOn: "isOn" }, decls: 17, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3321977306108954851$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_TOP_ORIENTED_PANEL_COLLAPSE_TOP_ORIENTED_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Path History");
        i18n_0 = MSG_EXTERNAL_3321977306108954851$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_TOP_ORIENTED_PANEL_COLLAPSE_TOP_ORIENTED_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟f373e617c7781d9a2115c469c5300f9f7751f96e␟3321977306108954851:Path History`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1633334502269684251$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_TOP_ORIENTED_PANEL_COLLAPSE_TOP_ORIENTED_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congueerat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismodtincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam.");
        i18n_2 = MSG_EXTERNAL_1633334502269684251$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_TOP_ORIENTED_PANEL_COLLAPSE_TOP_ORIENTED_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟82dc47594d6d7ccb2b0ede00fd000f193e0579c2␟1633334502269684251:Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congueerat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismodtincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam.`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_TOP_ORIENTED_PANEL_COLLAPSE_TOP_ORIENTED_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        i18n_4 = MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_COLLAPSE_TOP_ORIENTED_PANEL_COLLAPSE_TOP_ORIENTED_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟35b1e65604a5a673483b9f3a32811a7a8eef18a5␟5217306585722864337:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.`;
    } return [["panelMode", "collapsible", "orientation", "top"], ["nuiPanelEmbeddedHeading", "", 1, "d-flex", "align-items-center"], ["displayStyle", "action", "icon", "menu", 3, "itemsSource"], [1, "ml-1"], [1, "my-0"], i18n_0, ["nuiPanelEmbeddedIcon", "", 1, "d-flex", "align-items-center", "order-2", "ml-auto"], [3, "value", "valueChange"], ["nuiPanelEmbeddedBody", ""], i18n_2, i18n_4]; }, template: function PanelCollapseTopOrientedExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nui-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nui-switch", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function PanelCollapseTopOrientedExampleComponent_Template_nui_switch_valueChange_8_listener($event) { return ctx.isOn = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.itemsSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.isOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Live ", ctx.isOn ? "On" : "Off", " ");
    } }, directives: [_src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"], _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"]], encapsulation: 2 });


/***/ }),

/***/ "lprR":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-hide-outside-control/panel-hide-outside-control.example.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ChangeDetectorRef, Component, Inject } from \"@angular/core\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-panel-hide-outside-control-example\",\n    templateUrl: \"./panel-hide-outside-control.example.component.html\",\n})\n\nexport class PanelHideOutsideControlExampleComponent {\n    public isHidden = false;\n\n    public hide() {\n        this.isHidden = true;\n        this.changeDetectorRef.detectChanges();\n    }\n\n    public reveal() {\n        this.isHidden = false;\n        this.changeDetectorRef.detectChanges();\n    }\n\n    public getHideStateChanged($event: boolean) {\n        this.isHidden = $event;\n        this.toastService.info({\n            message: this.isHidden ? $localize `Hidden` : $localize `Revealed`,\n            title: $localize `Panel State`,\n        });\n    }\n\n    constructor(@Inject(ToastService) private toastService: ToastService,\n                private changeDetectorRef: ChangeDetectorRef) {\n    }\n}\n");

/***/ }),

/***/ "mzKP":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-collapse-top-oriented/panel-collapse-top-oriented.example.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <nui-panel panelMode=\"collapsible\"\n               orientation=\"top\">\n        <div nuiPanelEmbeddedHeading class=\"d-flex align-items-center\">\n            <nui-menu displayStyle=\"action\" [itemsSource]=\"itemsSource\" icon=\"menu\"></nui-menu>\n            <span class=\"ml-1\">\n                <h4 i18n class=\"my-0\">Path History</h4>\n            </span>\n        </div>\n        <div nuiPanelEmbeddedIcon class=\"d-flex align-items-center order-2 ml-auto\">\n            <nui-switch [(value)]=\"isOn\">\n                Live {{isOn ? 'On' : 'Off'}}\n            </nui-switch>\n        </div>\n        <div nuiPanelEmbeddedBody>\n            <div>\n                <p i18n>Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id,\n                    congueerat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo\n                    sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismodtincidunt,\n                    felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat,\n                    vitae hendrerit mi aliquam.</p>\n            </div>\n        </div>\n        <div>\n            <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                porttitor laoreet dui a mollis.</p>\n            </div>\n    </nui-panel>\n</div>\n");

/***/ }),

/***/ "nB2A":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiDocsModule,\n    NuiIconModule,\n    NuiMenuModule,\n    NuiMessageModule,\n    NuiPanelModule,\n    NuiSwitchModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    PanelBasicExampleComponent,\n    PanelCollapseExampleComponent,\n    PanelCollapseOutsideControlExampleComponent,\n    PanelCollapseTopOrientedExampleComponent,\n    PanelCustomStylesExampleComponent,\n    PanelDocsExampleComponent,\n    PanelEmbeddedContentExampleComponent,\n    PanelFloatExampleComponent,\n    PanelHideExampleComponent,\n    PanelHideOutsideControlExampleComponent,\n    PanelHoverableExampleComponent,\n    PanelNestedExampleComponent,\n    PanelPositionExampleComponent,\n    PanelResizeExampleComponent,\n    PanelSizeExampleComponent,\n    PanelVisualTestComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: PanelDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"panel-visual-test\",\n        component: PanelVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"basic\",\n        component: PanelBasicExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"collapsible\",\n        component: PanelCollapseExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"hidden\",\n        component: PanelHideExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"floating\",\n        component: PanelFloatExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"resize\",\n        component: PanelResizeExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiPanelModule,\n        NuiDocsModule,\n        NuiMenuModule,\n        NuiSwitchModule,\n        NuiIconModule,\n        NuiMessageModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        PanelBasicExampleComponent,\n        PanelCollapseExampleComponent,\n        PanelCollapseOutsideControlExampleComponent,\n        PanelSizeExampleComponent,\n        PanelEmbeddedContentExampleComponent,\n        PanelHoverableExampleComponent,\n        PanelCustomStylesExampleComponent,\n        PanelDocsExampleComponent,\n        PanelFloatExampleComponent,\n        PanelHideExampleComponent,\n        PanelHideOutsideControlExampleComponent,\n        PanelNestedExampleComponent,\n        PanelPositionExampleComponent,\n        PanelResizeExampleComponent,\n        PanelCollapseTopOrientedExampleComponent,\n        PanelVisualTestComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class PanelModule {\n}\n");

/***/ }),

/***/ "ohJX":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-docs/panel-docs.example.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiPanelModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    To use <code>&lt;nui-panel&gt;</code> wrap the content with an <code>&lt;nui-panel&gt;</code> element. To pass content to the side panel,\n    put the <code>nuiPanelPaneBodyContent</code> attribute on the element containing the side panel content.\n</p>\n<nui-example-wrapper filenamePrefix=\"panel-basic\" exampleTitle=\"Basic Usage\">\n    <nui-panel-basic-example></nui-panel-basic-example>\n</nui-example-wrapper>\n\n<h2>Custom Position</h2>\n<p>\n    <code>&lt;nui-panel&gt;</code> provides four position options for the side pane ('left','right', 'top' and 'bottom'). By default it is positioned to the left.\n    To position it on the top, pass 'top' to <code>&lt;nui-panel&gt;</code>'s <code>orientation</code> input, works\n    similarly for the other directions.\n</p>\n<nui-example-wrapper filenamePrefix=\"panel-position\" exampleTitle=\"Custom Position\">\n    <nui-panel-position-example></nui-panel-position-example>\n</nui-example-wrapper>\n\n<h2>Size Options</h2>\n<p>\n    Use <code>paneSize</code> binding in order to set <code>&lt;nui-panel&gt;</code> size(width or height - depends on panel position),\n    by default panel size is '250px', percents also can be used as well as pixels.\n    To define max and min panel sizes, use <code>paneMaxSize</code> and <code>paneMinSize</code> bindings correspondingly.\n    Default min-size value for width is '150px', for height - '40px', default max-size value is '90%'.\n\n</p>\n<nui-example-wrapper filenamePrefix=\"panel-size\" exampleTitle=\"Panel Sizes\">\n    <nui-panel-size-example></nui-panel-size-example>\n</nui-example-wrapper>\n\n<h2>Embedded Content</h2>\n<p>\n    Additional content can be added inside the <code>&lt;nui-panel&gt;</code> component.\n    To pass header to the side panel, put the <code>nuiPanelEmbeddedHeading</code> attribute on the\n    element containing the side panel header or use <code>heading</code> binding for the simple text header.\n    To pass embedded icon put the <code>nuiPanelEmbeddedIcon</code> attribute on the transcluded\n    element, for the embedded footer <code>nuiPanelEmbeddedIcon</code> attribute must be applied\n    to the element.\n    <nui-message type=\"info\">Footer can be added only for left and right panel orientations.\n        <code>nuiPanelEmbeddedIcon</code> will be visible in both collapsed and expanded states,\n        while <code>nuiPanelEmbeddedHeading</code> is visible only in expanded state.\n    </nui-message>\n</p>\n<nui-example-wrapper filenamePrefix=\"panel-embedded-content\" exampleTitle=\"Embedded Content\">\n    <nui-panel-embedded-content-example></nui-panel-embedded-content-example>\n</nui-example-wrapper>\n\n<h2>Custom Styles</h2>\n<p>\n    To modify the background color of the side panel, set the <code>panelBackgroundColor</code> input to a value of type\n    <code><a href=\"../miscellaneous/enumerations.html#BackgroundColor\" target=\"_blank\">BackgroundColor</a></code>. The default\n    is <code>BackgroundColor.colorBgLight</code>. To use dark panel border instead of default one, set <code>darkBorder</code>\n    binding to 'true', by default 'false' is assigned. Default header padding also can be removed, pass 'false' value\n    to the <code>headerPadding</code> binding to reach this, by default 'true' value is assigned. Similarly, side pane\n    body paddings can also be removed by passing 'false' to the <code>sidePaneBodyPadding</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"panel-custom-styles\" exampleTitle=\"Custom Styles\">\n    <nui-panel-custom-styles-example></nui-panel-custom-styles-example>\n</nui-example-wrapper>\n\n<h2>Collapsible Mode</h2>\n<p>\n    To make <code>&lt;nui-panel&gt;</code> collapsible, set the <code>panelMode</code> input to 'collapsible'.\n    You can set the collapsed state of <code>nui-panel</code> externally by setting the <code>isCollapsed</code> input.\n\n</p>\n<nui-example-wrapper filenamePrefix=\"panel-collapse\" exampleTitle=\"Collapsible Panel\">\n    <nui-panel-collapse-example></nui-panel-collapse-example>\n</nui-example-wrapper>\n\n<h2>Closable Mode</h2>\n<p>\n    To make <code>&lt;nui-panel&gt;</code> closable(hidden), set the <code>panelMode</code> input to 'closable'.\n    You can hide or show the panel by setting the <code>isHidden</code> 'boolean' input.\n</p>\n<nui-example-wrapper filenamePrefix=\"panel-hide\" exampleTitle=\"Closable Panel\">\n    <nui-panel-hide-example></nui-panel-hide-example>\n</nui-example-wrapper>\n\n<h2>Hoverable Mode</h2>\n<p>\n    To make <code>&lt;nui-panel&gt;</code> collapsed/expanded with the mouse hovering, set the <code>panelMode</code> input to 'hoverable'.\n    <nui-message type=\"info\">Note, in this case panel can't be collapsed or expanded by the click.</nui-message>\n</p>\n<nui-example-wrapper filenamePrefix=\"panel-hoverable\" exampleTitle=\"Hoverable Panel\">\n    <nui-panel-hoverable-example></nui-panel-hoverable-example>\n</nui-example-wrapper>\n\n<h2>Overlapping the Main Content</h2>\n<p>\n    To make main content overlapped by panel, set the <code>displacePrimaryContent</code> input to 'false', by default 'true' value is assigned.\n</p>\n<nui-example-wrapper filenamePrefix=\"panel-float\" exampleTitle=\"Overlapping Main Content\">\n    <nui-panel-float-example></nui-panel-float-example>\n</nui-example-wrapper>\n\n<h2>Enabling Resizability</h2>\n<p>\n    To make <code>&lt;nui-panel&gt;</code> resizable, set the <code>isResizable</code> input to 'true'.\n    The size of panel by default is bordered by corresponding min/max values. To modify this behaviour, boundary values can be set to 'auto'.\n    To make percentage sized 'top' panel resizable, absolute height of parent block should be set.\n    <nui-message type=\"info\">Note, collapsed state panel can't be resizable. Resize of bottom-oriented panel is not currently supported.</nui-message>\n</p>\n<nui-example-wrapper filenamePrefix=\"panel-resize\" exampleTitle=\"Resizable panel\">\n    <nui-panel-resize-example></nui-panel-resize-example>\n</nui-example-wrapper>\n\n<h2>Top Oriented Collapsible Mode</h2>\n<p>\n    To make top oriented collapsible <code>&lt;nui-panel&gt;</code>, set the <code>panelMode</code> input to 'collapsible'\n    and <code>orientation</code> input to 'top'. In this case expand/collapse button will be always centered, but the position of\n    other transcluded elements remains flexible.\n</p>\n<nui-example-wrapper filenamePrefix=\"panel-collapse-top-oriented\" exampleTitle=\"Collapsible Top Oriented Panel\">\n    <nui-panel-collapse-top-oriented-example></nui-panel-collapse-top-oriented-example>\n</nui-example-wrapper>\n\n<h2>External Collapse Toggle</h2>\n<p>\n    To change the collapsed state of the side pane manually, set the <code>isCollapsed</code> boolean input. After the side pane has been collapsed\n    or expanded, a 'collapsed' event is emitted with a boolean of true if the side pane has been collapsed or false if the side pane has\n    been expanded.\n</p>\n<nui-example-wrapper filenamePrefix=\"panel-collapse-outside-control\" exampleTitle=\"External Collapse Toggle\">\n    <nui-panel-collapse-outside-control-example></nui-panel-collapse-outside-control-example>\n</nui-example-wrapper>\n\n<h2>External Hide/Show Toggle</h2>\n<p>\n    To change the hidden state of the side pane manually, set the <code>isHidden</code> boolean input. On hiding/showing of the side pane, a 'hidden'\n    event is emitted with a boolean of true if the side pane has been hidden or false if the side pane has been shown.\n</p>\n<nui-example-wrapper filenamePrefix=\"panel-hide-outside-control\" exampleTitle=\"External Hide/Show Toggle\">\n    <nui-panel-hide-outside-control-example></nui-panel-hide-outside-control-example>\n</nui-example-wrapper>\n\n<h2>Nested</h2>\n<p>\n    Users can easily implement advanced layouts using nested panels. This requires no additional features or knowledge.\n</p>\n<nui-example-wrapper filenamePrefix=\"panel-nested\" exampleTitle=\"Nested Panels\">\n    <nui-panel-nested-example></nui-panel-nested-example>\n</nui-example-wrapper>\n\n");

/***/ }),

/***/ "p1Ou":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-basic/panel-basic.example.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-panel-basic-example\",\n    templateUrl: \"./panel-basic.example.component.html\",\n})\n\nexport class PanelBasicExampleComponent {}\n");

/***/ }),

/***/ "pp2q":
/*!***********************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-hide/panel-hide.example.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PanelHideExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelHideExampleComponent", function() { return PanelHideExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/panel/panel.component */ "Xk8b");


class PanelHideExampleComponent {
    constructor() {
        this.isHidden = false;
    }
}
PanelHideExampleComponent.ɵfac = function PanelHideExampleComponent_Factory(t) { return new (t || PanelHideExampleComponent)(); };
PanelHideExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelHideExampleComponent, selectors: [["nui-panel-hide-example"]], decls: 11, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3597932961286677186$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HIDE_PANEL_HIDE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Header");
        i18n_0 = MSG_EXTERNAL_3597932961286677186$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HIDE_PANEL_HIDE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟3f697d568eab3702a7a136ef2192d9fd9ca5b1eb␟3597932961286677186:Header`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HIDE_PANEL_HIDE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        i18n_2 = MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HIDE_PANEL_HIDE_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟dd7629c4ea22682a8b186a97ee20dfe30e95ac88␟6513607865111590520:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HIDE_PANEL_HIDE_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        i18n_4 = MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HIDE_PANEL_HIDE_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟35b1e65604a5a673483b9f3a32811a7a8eef18a5␟5217306585722864337:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.`;
    } return [["orientation", "left", "panelMode", "closable", "heading", i18n_0, "id", "nui-demo-hidden-panel", 3, "isResizable"], ["nuiPanelEmbeddedBody", ""], i18n_2, i18n_4, ["nuiPanelEmbeddedFooter", "", 1, "font-weight-bold"]]; }, template: function PanelHideExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "EMBEDDED FOOTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
    } }, directives: [_src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__["PanelComponent"]], encapsulation: 2 });


/***/ }),

/***/ "qG8U":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-embedded-content/panel-embedded-content.example.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button nui-button type=\"button\" (click)=\"toggleFooter()\" i18n>Toggle Footer</button>\n<div>\n    <nui-panel id=\"nui-demo-embedded-content-panel\"\n               orientation=\"left\">\n        <div class=\"d-flex mr-1\"\n             nuiPanelEmbeddedIcon>\n            <nui-icon [icon]=\"headerIcon\"\n                      iconColor=\"gray\">\n            </nui-icon>\n        </div>\n        <div nuiPanelEmbeddedHeading>\n            <span>\n                <h4 i18n class=\"my-0\">TRANSCLUDED</h4>\n            </span>\n        </div>\n        <div nuiPanelEmbeddedBody>\n            <div>\n                <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                    quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                    Nulla ac mattis tortor, quis iaculis sapien.</p>\n            </div>\n        </div>\n        <div>\n            <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                porttitor laoreet dui a mollis.</p>\n        </div>\n        <div *ngIf=\"displayFooter\" nuiPanelEmbeddedFooter class=\"d-flex justify-content-between\">\n            <button nui-button type=\"button\" (click)=\"onClickCancel()\" i18n>Cancel</button>\n            <button nui-button type=\"button\" displayStyle=\"primary\"(click)=\"onClickConfirm()\" i18n>Confirm</button>\n        </div>\n    </nui-panel>\n</div>\n");

/***/ }),

/***/ "r/BD":
/*!*************************************************!*\
  !*** ./demo/src/components/demo/panel/index.ts ***!
  \*************************************************/
/*! exports provided: PanelBasicExampleComponent, PanelCollapseExampleComponent, PanelCollapseOutsideControlExampleComponent, PanelDocsExampleComponent, PanelFloatExampleComponent, PanelHideExampleComponent, PanelHideOutsideControlExampleComponent, PanelPositionExampleComponent, PanelResizeExampleComponent, PanelCustomStylesExampleComponent, PanelEmbeddedContentExampleComponent, PanelHoverableExampleComponent, PanelNestedExampleComponent, PanelSizeExampleComponent, PanelCollapseTopOrientedExampleComponent, PanelVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panel_basic_panel_basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-basic/panel-basic.example.component */ "HpYj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelBasicExampleComponent", function() { return _panel_basic_panel_basic_example_component__WEBPACK_IMPORTED_MODULE_0__["PanelBasicExampleComponent"]; });

/* harmony import */ var _panel_collapse_panel_collapse_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-collapse/panel-collapse.example.component */ "7672");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelCollapseExampleComponent", function() { return _panel_collapse_panel_collapse_example_component__WEBPACK_IMPORTED_MODULE_1__["PanelCollapseExampleComponent"]; });

/* harmony import */ var _panel_collapse_outside_control_panel_collapse_outside_control_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel-collapse-outside-control/panel-collapse-outside-control.example.component */ "YZEd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelCollapseOutsideControlExampleComponent", function() { return _panel_collapse_outside_control_panel_collapse_outside_control_example_component__WEBPACK_IMPORTED_MODULE_2__["PanelCollapseOutsideControlExampleComponent"]; });

/* harmony import */ var _panel_docs_panel_docs_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel-docs/panel-docs.example.component */ "BdGv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelDocsExampleComponent", function() { return _panel_docs_panel_docs_example_component__WEBPACK_IMPORTED_MODULE_3__["PanelDocsExampleComponent"]; });

/* harmony import */ var _panel_float_panel_float_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel-float/panel-float.example.component */ "rrpG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelFloatExampleComponent", function() { return _panel_float_panel_float_example_component__WEBPACK_IMPORTED_MODULE_4__["PanelFloatExampleComponent"]; });

/* harmony import */ var _panel_hide_panel_hide_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel-hide/panel-hide.example.component */ "pp2q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelHideExampleComponent", function() { return _panel_hide_panel_hide_example_component__WEBPACK_IMPORTED_MODULE_5__["PanelHideExampleComponent"]; });

/* harmony import */ var _panel_hide_outside_control_panel_hide_outside_control_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel-hide-outside-control/panel-hide-outside-control.example.component */ "zt29");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelHideOutsideControlExampleComponent", function() { return _panel_hide_outside_control_panel_hide_outside_control_example_component__WEBPACK_IMPORTED_MODULE_6__["PanelHideOutsideControlExampleComponent"]; });

/* harmony import */ var _panel_position_panel_position_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel-position/panel-position.example.component */ "SwJS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelPositionExampleComponent", function() { return _panel_position_panel_position_example_component__WEBPACK_IMPORTED_MODULE_7__["PanelPositionExampleComponent"]; });

/* harmony import */ var _panel_resize_panel_resize_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panel-resize/panel-resize.example.component */ "v1nj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelResizeExampleComponent", function() { return _panel_resize_panel_resize_example_component__WEBPACK_IMPORTED_MODULE_8__["PanelResizeExampleComponent"]; });

/* harmony import */ var _panel_custom_styles_panel_ustom_styles_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./panel-custom-styles/panel-сustom-styles.example.component */ "4GJP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelCustomStylesExampleComponent", function() { return _panel_custom_styles_panel_ustom_styles_example_component__WEBPACK_IMPORTED_MODULE_9__["PanelCustomStylesExampleComponent"]; });

/* harmony import */ var _panel_embedded_content_panel_embedded_content_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./panel-embedded-content/panel-embedded-content.example.component */ "SthW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelEmbeddedContentExampleComponent", function() { return _panel_embedded_content_panel_embedded_content_example_component__WEBPACK_IMPORTED_MODULE_10__["PanelEmbeddedContentExampleComponent"]; });

/* harmony import */ var _panel_hoverable_panel_hoverable_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panel-hoverable/panel-hoverable.example.component */ "cpBZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelHoverableExampleComponent", function() { return _panel_hoverable_panel_hoverable_example_component__WEBPACK_IMPORTED_MODULE_11__["PanelHoverableExampleComponent"]; });

/* harmony import */ var _panel_nested_panel_nested_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./panel-nested/panel-nested.example.component */ "c+2O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelNestedExampleComponent", function() { return _panel_nested_panel_nested_example_component__WEBPACK_IMPORTED_MODULE_12__["PanelNestedExampleComponent"]; });

/* harmony import */ var _panel_size_panel_size_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./panel-size/panel-size.example.component */ "bd4U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelSizeExampleComponent", function() { return _panel_size_panel_size_example_component__WEBPACK_IMPORTED_MODULE_13__["PanelSizeExampleComponent"]; });

/* harmony import */ var _panel_collapse_top_oriented_panel_collapse_top_oriented_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./panel-collapse-top-oriented/panel-collapse-top-oriented.example.component */ "lHae");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelCollapseTopOrientedExampleComponent", function() { return _panel_collapse_top_oriented_panel_collapse_top_oriented_example_component__WEBPACK_IMPORTED_MODULE_14__["PanelCollapseTopOrientedExampleComponent"]; });

/* harmony import */ var _panel_visual_test_panel_visual_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./panel-visual-test/panel-visual-test.component */ "aops");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelVisualTestComponent", function() { return _panel_visual_test_panel_visual_test_component__WEBPACK_IMPORTED_MODULE_15__["PanelVisualTestComponent"]; });



















/***/ }),

/***/ "rid6":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-hide/panel-hide.example.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-panel-hide-example\",\n    templateUrl: \"./panel-hide.example.component.html\",\n})\n\nexport class PanelHideExampleComponent {\n    public isHidden = false;\n}\n");

/***/ }),

/***/ "rrpG":
/*!*************************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-float/panel-float.example.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PanelFloatExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelFloatExampleComponent", function() { return PanelFloatExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/panel/panel.component */ "Xk8b");


class PanelFloatExampleComponent {
}
PanelFloatExampleComponent.ɵfac = function PanelFloatExampleComponent_Factory(t) { return new (t || PanelFloatExampleComponent)(); };
PanelFloatExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelFloatExampleComponent, selectors: [["nui-panel-float-example"]], decls: 9, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_FLOAT_PANEL_FLOAT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        i18n_0 = MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_FLOAT_PANEL_FLOAT_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟dd7629c4ea22682a8b186a97ee20dfe30e95ac88␟6513607865111590520:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_FLOAT_PANEL_FLOAT_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        i18n_2 = MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_FLOAT_PANEL_FLOAT_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟35b1e65604a5a673483b9f3a32811a7a8eef18a5␟5217306585722864337:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.`;
    } return [["panelMode", "collapsible", "id", "nui-demo-floating-panel", 3, "displacePrimaryContent"], ["nuiPanelEmbeddedBody", ""], i18n_0, i18n_2]; }, template: function PanelFloatExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displacePrimaryContent", false);
    } }, directives: [_src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__["PanelComponent"]], encapsulation: 2 });


/***/ }),

/***/ "tVc2":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-position/panel-position.example.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <nui-panel orientation=\"top\">\n        <div nuiPanelEmbeddedBody>\n            <div>\n                <p i18n>Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id,\n                    congueerat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo\n                    sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismodtincidunt,\n                    felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat,\n                    vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                    Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                    amet enim.</p>\n            </div>\n        </div>\n        <div>\n            <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                porttitor laoreet dui a mollis.</p>\n            </div>\n    </nui-panel>\n</div>\n");

/***/ }),

/***/ "tnZV":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/index.ts ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./panel-basic/panel-basic.example.component\";\nexport * from \"./panel-collapse/panel-collapse.example.component\";\nexport * from \"./panel-collapse-outside-control/panel-collapse-outside-control.example.component\";\nexport * from \"./panel-docs/panel-docs.example.component\";\nexport * from \"./panel-float/panel-float.example.component\";\nexport * from \"./panel-hide/panel-hide.example.component\";\nexport * from \"./panel-hide-outside-control/panel-hide-outside-control.example.component\";\nexport * from \"./panel-position/panel-position.example.component\";\nexport * from \"./panel-resize/panel-resize.example.component\";\nexport * from \"./panel-custom-styles/panel-сustom-styles.example.component\";\nexport * from \"./panel-embedded-content/panel-embedded-content.example.component\";\nexport * from \"./panel-hoverable/panel-hoverable.example.component\";\nexport * from \"./panel-nested/panel-nested.example.component\";\nexport * from \"./panel-size/panel-size.example.component\";\nexport * from \"./panel-collapse-top-oriented/panel-collapse-top-oriented.example.component\";\nexport * from \"./panel-visual-test/panel-visual-test.component\";\n");

/***/ }),

/***/ "v1nj":
/*!***************************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-resize/panel-resize.example.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PanelResizeExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelResizeExampleComponent", function() { return PanelResizeExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/panel/panel.component */ "Xk8b");


class PanelResizeExampleComponent {
}
PanelResizeExampleComponent.ɵfac = function PanelResizeExampleComponent_Factory(t) { return new (t || PanelResizeExampleComponent)(); };
PanelResizeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelResizeExampleComponent, selectors: [["nui-panel-resize-example"]], decls: 9, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3597932961286677186$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_RESIZE_PANEL_RESIZE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Header");
        i18n_0 = MSG_EXTERNAL_3597932961286677186$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_RESIZE_PANEL_RESIZE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟3f697d568eab3702a7a136ef2192d9fd9ca5b1eb␟3597932961286677186:Header`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_RESIZE_PANEL_RESIZE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        i18n_2 = MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_RESIZE_PANEL_RESIZE_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟dd7629c4ea22682a8b186a97ee20dfe30e95ac88␟6513607865111590520:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_RESIZE_PANEL_RESIZE_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        i18n_4 = MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_RESIZE_PANEL_RESIZE_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟35b1e65604a5a673483b9f3a32811a7a8eef18a5␟5217306585722864337:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.`;
    } return [[2, "height", "300px"], ["id", "nui-demo-resizable-panel", "panelMode", "collapsible", "isResizable", "true", "heading", i18n_0, "paneSize", "20%"], ["nuiPanelEmbeddedBody", ""], i18n_2, i18n_4]; }, template: function PanelResizeExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__["PanelComponent"]], encapsulation: 2 });


/***/ }),

/***/ "vKpZ":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-docs/panel-docs.example.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-panel-docs-example\",\n    templateUrl: \"./panel-docs.example.component.html\",\n})\n\nexport class PanelDocsExampleComponent {}\n");

/***/ }),

/***/ "vVaX":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-collapse-outside-control/panel-collapse-outside-control.example.component.ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject } from \"@angular/core\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-panel-collapse-outside-control-example\",\n    templateUrl: \"./panel-collapse-outside-control.example.component.html\",\n})\n\nexport class PanelCollapseOutsideControlExampleComponent {\n    public isCollapsed: boolean = false;\n    public heading = $localize `Header`;\n\n    public collapse() {\n        this.isCollapsed = true;\n    }\n\n    public expand() {\n        this.isCollapsed = false;\n    }\n\n    public onCollapseChange($event: boolean) {\n        this.isCollapsed = $event;\n        this.toastService.info({\n            message: this.isCollapsed ? $localize `Collapsed` : $localize `Expanded`,\n            title: $localize `Panel State`,\n        });\n    }\n\n    constructor(@Inject(ToastService) private toastService: ToastService) {\n    }\n\n}\n");

/***/ }),

/***/ "wUx3":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-size/panel-size.example.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <nui-panel id=\"nui-demo-size-panel\"\n               orientation=\"right\"\n               paneMinSize=\"150px\"\n               paneMaxSize=\"550px\"\n               paneSize=\"350px\">\n        <div nuiPanelEmbeddedBody>\n            <div>\n                <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                    quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                    Nulla ac mattis tortor, quis iaculis sapien.</p>\n            </div>\n        </div>\n        <div>\n            <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                porttitor laoreet dui a mollis.</p>\n            </div>\n    </nui-panel>\n</div>\n");

/***/ }),

/***/ "xmU5":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-float/panel-float.example.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-panel-float-example\",\n    templateUrl: \"./panel-float.example.component.html\",\n})\n\nexport class PanelFloatExampleComponent {}\n");

/***/ }),

/***/ "z/oI":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/panel/panel-visual-test/panel-visual-test.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <details>\n        <summary id=\"nui-visual-basic-panel-details\">Basic Panel</summary>\n        <nui-panel id=\"nui-visual-test-basic-panel\">\n            <div nuiPanelEmbeddedBody>\n                <div>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                        quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                        Nulla ac mattis tortor, quis iaculis sapien.</p>\n                </div>\n            </div>\n            <div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                    Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                    erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                    vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                    tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                    magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                    Aenean dictum at dui sit ameAt mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                    amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                    bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                    porttitor laoreet dui a mollis.</p>\n            </div>\n        </nui-panel>\n        <hr />\n    </details>\n\n\n    <details>\n        <summary id=\"nui-visual-custom-size-panel-details\">Panel With Custom Sizes</summary>\n        <nui-panel id=\"nui-visual-test-size-panel\"\n                   orientation=\"right\"\n                   paneMinSize=\"150px\"\n                   paneMaxSize=\"550px\"\n                   paneSize=\"350px\">\n            <div nuiPanelEmbeddedBody>\n                <div>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                        quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                        Nulla ac mattis tortor, quis iaculis sapien.</p>\n                </div>\n            </div>\n            <div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                    Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                    erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                    vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                    tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                    magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                    Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                    amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                    bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                    porttitor laoreet dui a mollis.</p>\n            </div>\n        </nui-panel>\n        <hr />\n    </details>\n\n\n    <details>\n        <summary id=\"nui-visual-hoverable-panel-details\">Hoverable Mode</summary>\n        <nui-panel panelMode=\"hoverable\"\n                   orientation=\"left\"\n                   [displacePrimaryContent]=\"false\"\n                   id=\"nui-visual-test-hoverable-panel\">\n            <div nuiPanelEmbeddedBody>\n                <div>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                        quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                        Nulla ac mattis tortor, quis iaculis sapien.</p>\n                </div>\n            </div>\n            <div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                    Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                    erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                    vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                    tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                    magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                    Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                    amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                    bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                    porttitor laoreet dui a mollis.</p>\n            </div>\n        </nui-panel>\n        <hr />\n    </details>\n\n\n    <details>\n        <summary id=\"nui-visual-closable-panel-details\">Closable Panel</summary>\n        <nui-panel orientation=\"left\" panelMode=\"closable\" heading=\"panel header\" id=\"nui-visual-test-hidden-panel\">\n            <div nuiPanelEmbeddedBody>\n                <div>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                        quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                        Nulla ac mattis tortor, quis iaculis sapien.</p>\n                </div>\n            </div>\n            <div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                    Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                    erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                    vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                    tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                    magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                    Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                    amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                    bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                    porttitor laoreet dui a mollis.</p>\n            </div>\n            <div nuiPanelEmbeddedFooter class=\"font-weight-bold\">EMBEDDED FOOTER</div>\n        </nui-panel>\n        <hr />\n    </details>\n\n\n    <details>\n        <summary id=\"nui-visual-with-embedded-details\">Panel's Collapsible Mode With Embedded Content</summary>\n        <div>\n            <button type=\"button\" id=\"nui-visual-test-panel-footer-toggle-btn\" (click)=\"toggleFooter()\">Toggle Footer</button>\n            <div>\n                <nui-panel panelMode=\"collapsible\"\n                           id=\"nui-visual-test-embedded-content-panel\"\n                           orientation=\"left\"\n                           [isCollapsed]=\"false\"\n                           (collapsed)=\"onCollapseChange($event)\">\n                    <div nuiPanelEmbeddedIcon>\n                        <nui-icon *ngIf=\"isCollapsed\"\n                                  [icon]=\"headerIcon\"\n                                  [counter]=\"headerIconCounter\">\n                        </nui-icon>\n                    </div>\n                    <div nuiPanelEmbeddedHeading class=\"d-flex flex-row align-items-center\">\n                        <nui-icon *ngIf=\"!isCollapsed\"\n                                  [icon]=\"headerIcon\"\n                                  iconColor=\"gray\">\n                        </nui-icon>\n                        <span>\n                            <h4 class=\"my-0\">TRANSCLUDED</h4>\n                        </span>\n                    </div>\n                    <div nuiPanelEmbeddedBody>\n                        <div>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                                quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                                Nulla ac mattis tortor, quis iaculis sapien.</p>\n                        </div>\n                    </div>\n                    <div>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                            Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                            erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                            vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                            tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                            magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                            Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                            amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                            bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                            porttitor laoreet dui a mollis.</p>\n                    </div>\n                    <div *ngIf=\"displayFooter\" nuiPanelEmbeddedFooter class=\"d-flex justify-content-between\">\n                        <button nui-button type=\"button\">Cancel</button>\n                        <button nui-button type=\"button\" displayStyle=\"primary\">Confirm</button>\n                    </div>\n                </nui-panel>\n            </div>\n        </div>\n        <hr />\n    </details>\n\n\n    <details>\n        <summary id=\"nui-visual-custom-style-panel-details\">Custom Styles</summary>\n        <nui-panel id=\"nui-visual-test-custom-styles-panel\"\n                   orientation=\"left\"\n                   panelMode=\"collapsible\"\n                   [darkBorder]=\"true\"\n                   [headerPadding]=\"false\"\n                   [panelBackgroundColor]=\"panelColor\">\n            <div nuiPanelEmbeddedHeading class=\"d-flex flex-row align-items-center w-100\">\n                <span class=\"ml-1\">\n                    <h4>Custom Heading</h4>\n                </span>\n                <div class=\"ml-auto\">\n                    <nui-menu displayStyle=\"action\" [itemsSource]=\"itemsSource\" icon=\"menu\"></nui-menu>\n                </div>\n            </div>\n            <div nuiPanelEmbeddedBody>\n                <div>\n                    <p>Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                        tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                        magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                        Aenean dictum at dui sit amet mollis.</p>\n                </div>\n            </div>\n            <div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                    Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                    erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                    vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                    tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                    magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                    Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                    amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                    bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                    porttitor laoreet dui a mollis.</p>\n            </div>\n        </nui-panel>\n        <hr />\n    </details>\n\n\n    <details>\n        <summary id=\"nui-visual-resizable-details\">Resizable Panel</summary>\n        <nui-panel id=\"nui-visual-test-resizable-panel\"\n                   panelMode=\"collapsible\"\n                   isResizable=\"true\"\n                   heading=\"Panel Header\"\n                   paneSize=\"20%\">\n            <div nuiPanelEmbeddedBody>\n                <div>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                        quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                        Nulla ac mattis tortor, quis iaculis sapien.</p>\n                </div>\n            </div>\n            <div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                    Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                    erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                    vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                    tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                    magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                    Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                    amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                    bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                    porttitor laoreet dui a mollis.</p>\n            </div>\n        </nui-panel>\n        <hr />\n    </details>\n\n\n    <details>\n        <summary id=\"nui-visual-top-oriented-panel-details\">Top Oriented Collapsible Mode</summary>\n        <nui-panel panelMode=\"collapsible\"\n                   orientation=\"top\"\n                   id=\"nui-visual-test-top-oriented-panel\">\n            <div nuiPanelEmbeddedHeading class=\"d-flex align-items-center\">\n                <nui-menu displayStyle=\"action\" [itemsSource]=\"itemsSource\" icon=\"menu\"></nui-menu>\n                <span class=\"ml-1\">\n                    <h4 class=\"my-0\">Path History</h4>\n                </span>\n            </div>\n            <div nuiPanelEmbeddedBody>\n                <div>\n                    <p>Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id,\n                        congueerat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo\n                        sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismodtincidunt,\n                        felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat,\n                        vitae hendrerit mi aliquam.</p>\n                </div>\n            </div>\n            <div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n                    Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue\n                    erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac\n                    vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                    tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                    magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                    Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                    amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et\n                    bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                    porttitor laoreet dui a mollis.</p>\n            </div>\n        </nui-panel>\n        <hr />\n    </details>\n\n    <details>\n        <summary id=\"nui-visual-nested-panel-details\">Nested Panels</summary>\n        <nui-panel panelMode=\"collapsible\"\n                   orientation=\"left\"\n                   [isCollapsed]=\"false\" id=\"nui-visual-test-nested-panel-outer\">\n            <div nuiPanelEmbeddedHeading class=\"flex flex-row align-items-center\">\n            <span>\n                <h4 i18n class=\"my-0\">Outer Panel</h4>\n            </span>\n            </div>\n            <div nuiPanelEmbeddedBody>\n                <div>\n                    <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa\n                        quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc.\n                        Nulla ac mattis tortor, quis iaculis sapien.</p>\n                </div>\n            </div>\n            <div>\n                <nui-panel class=\"w-100\"\n                           panelMode=\"collapsible\"\n                           orientation=\"left\"\n                           [isCollapsed]=\"false\">\n                    <div nuiPanelEmbeddedHeading class=\"flex flex-row align-items-center\">\n                    <span>\n                        <h4 i18n class=\"my-0\">Inner Panel</h4>\n                    </span>\n                    </div>\n                    <div nuiPanelEmbeddedBody>\n                        <div>\n                            <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt\n                                non massa\n                                quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit\n                                nunc.\n                                Nulla ac mattis tortor, quis iaculis sapien.</p>\n                        </div>\n                    </div>\n                    <div>\n                        <p i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id\n                            vulputate.\n                            Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id,\n                            congue\n                            erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem\n                            ac\n                            vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod\n                            tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo\n                            magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est.\n                            Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum\n                            amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu\n                            et\n                            bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce\n                            porttitor laoreet dui a mollis.</p>\n                    </div>\n                </nui-panel>\n            </div>\n        </nui-panel>\n        <hr />\n    </details>\n</div>\n");

/***/ }),

/***/ "zt29":
/*!*******************************************************************************************************************!*\
  !*** ./demo/src/components/demo/panel/panel-hide-outside-control/panel-hide-outside-control.example.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PanelHideOutsideControlExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelHideOutsideControlExampleComponent", function() { return PanelHideOutsideControlExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/panel/panel.component */ "Xk8b");






class PanelHideOutsideControlExampleComponent {
    constructor(toastService, changeDetectorRef) {
        this.toastService = toastService;
        this.changeDetectorRef = changeDetectorRef;
        this.isHidden = false;
    }
    hide() {
        this.isHidden = true;
        this.changeDetectorRef.detectChanges();
    }
    reveal() {
        this.isHidden = false;
        this.changeDetectorRef.detectChanges();
    }
    getHideStateChanged($event) {
        this.isHidden = $event;
        this.toastService.info({
            message: this.isHidden ? $localize `Hidden` : $localize `Revealed`,
            title: $localize `Panel State`,
        });
    }
}
PanelHideOutsideControlExampleComponent.ɵfac = function PanelHideOutsideControlExampleComponent_Factory(t) { return new (t || PanelHideOutsideControlExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PanelHideOutsideControlExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelHideOutsideControlExampleComponent, selectors: [["nui-panel-hide-outside-control-example"]], decls: 13, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3597932961286677186$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HIDE_OUTSIDE_CONTROL_PANEL_HIDE_OUTSIDE_CONTROL_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Header");
        i18n_0 = MSG_EXTERNAL_3597932961286677186$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HIDE_OUTSIDE_CONTROL_PANEL_HIDE_OUTSIDE_CONTROL_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟3f697d568eab3702a7a136ef2192d9fd9ca5b1eb␟3597932961286677186:Header`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HIDE_OUTSIDE_CONTROL_PANEL_HIDE_OUTSIDE_CONTROL_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.");
        i18n_2 = MSG_EXTERNAL_6513607865111590520$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HIDE_OUTSIDE_CONTROL_PANEL_HIDE_OUTSIDE_CONTROL_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟dd7629c4ea22682a8b186a97ee20dfe30e95ac88␟6513607865111590520:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nibh, tincidunt non massa quis, efficitur porttitor lacus. In quis tellus euismod, tincidunt libero quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis sapien.`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HIDE_OUTSIDE_CONTROL_PANEL_HIDE_OUTSIDE_CONTROL_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.");
        i18n_4 = MSG_EXTERNAL_5217306585722864337$$DEMO_SRC_COMPONENTS_DEMO_PANEL_PANEL_HIDE_OUTSIDE_CONTROL_PANEL_HIDE_OUTSIDE_CONTROL_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟35b1e65604a5a673483b9f3a32811a7a8eef18a5␟5217306585722864337:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate. Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat. Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis. Phasellus mauris arcu, blandit id congue vitae, elementum amet enim. Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum. Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor laoreet dui a mollis.`;
    } return [["type", "button", "nui-button", "", 3, "disabled", "click"], ["orientation", "left", "panelMode", "closable", "heading", i18n_0, "id", "nui-demo-hidden-panel-external", 3, "isHidden", "hidden"], ["nuiPanelEmbeddedBody", ""], i18n_2, i18n_4]; }, template: function PanelHideOutsideControlExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelHideOutsideControlExampleComponent_Template_button_click_1_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelHideOutsideControlExampleComponent_Template_button_click_3_listener() { return ctx.reveal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reveal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hidden", function PanelHideOutsideControlExampleComponent_Template_nui_panel_hidden_5_listener($event) { return ctx.getHideStateChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isHidden", ctx.isHidden);
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=demo-panel-panel-module-es2015.js.map