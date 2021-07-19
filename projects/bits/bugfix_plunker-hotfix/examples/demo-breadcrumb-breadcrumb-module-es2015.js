(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-breadcrumb-breadcrumb-module"],{

/***/ "2JLQ":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/breadcrumb/breadcrumb.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiBreadcrumbModule, NuiButtonModule, NuiDocsModule, SrlcStage } from \"@nova-ui/bits\";\n\nimport {\n    BreadcrumbBasicExampleComponent,\n    BreadcrumbCountriesSubviewComponent,\n    BreadcrumbDocsExampleComponent,\n    BreadcrumbFirstSubviewLevelComponent,\n    BreadcrumbOfficesSubviewComponent,\n    BreadcrumbSecondSubviewLevelComponent,\n    BreadcrumbSingleCountryComponent,\n    BreadcrumbVisualTestComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: BreadcrumbDocsExampleComponent,\n        data: {\n            breadcrumb: \"Root\",\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n        children: [\n            {\n                path: \"countries\",\n                component: BreadcrumbCountriesSubviewComponent,\n                data: {\n                    breadcrumb: \"Countries\",\n                    url: \"https://tesla.com\",\n                    showThemeSwitcher: true,\n                },\n                children: [\n                    {\n                        path: \"usa\",\n                        component: BreadcrumbSingleCountryComponent,\n                        data: {\n                            breadcrumb: \"USA\",\n                            showThemeSwitcher: true,\n                        },\n                    },\n                    {\n                        path: \"ukraine\",\n                        component: BreadcrumbSingleCountryComponent,\n                        data: {\n                            breadcrumb: \"Ukraine\",\n                            showThemeSwitcher: true,\n                        },\n                    },\n                ],\n            },\n            {\n                path: \"offices\",\n                component: BreadcrumbOfficesSubviewComponent,\n                data: {\n                    breadcrumb: \"Offices\",\n                    showThemeSwitcher: true,\n                },\n            },\n        ],\n    },\n    {\n        path: \"breadcrumb-visual-test\",\n        component: BreadcrumbVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n            breadcrumb: \"Root\",\n        },\n        children: [\n            {\n                path: \"first-subroute\",\n                component: BreadcrumbFirstSubviewLevelComponent,\n                data: {\n                    breadcrumb: \"First Level\",\n                    \"srlc\": {\n                        \"hideIndicator\": true,\n                    },\n                },\n                children: [\n                    {\n                        path: \"second-subroute\",\n                        component: BreadcrumbSecondSubviewLevelComponent,\n                        data: {\n                            breadcrumb: \"Second Level\",\n                            \"srlc\": {\n                                \"hideIndicator\": true,\n                            },\n                        },\n                    },\n                ],\n            },\n        ],\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiDocsModule,\n        NuiBreadcrumbModule,\n        NuiButtonModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        BreadcrumbDocsExampleComponent,\n        BreadcrumbBasicExampleComponent,\n        BreadcrumbCountriesSubviewComponent,\n        BreadcrumbSingleCountryComponent,\n        BreadcrumbOfficesSubviewComponent,\n        BreadcrumbVisualTestComponent,\n        BreadcrumbFirstSubviewLevelComponent,\n        BreadcrumbSecondSubviewLevelComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class BreadcrumbModule {\n}\n");

/***/ }),

/***/ "5Eqh":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/breadcrumb/breadcrumb-visual-test/breadcrumb-visual-test.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnDestroy, OnInit } from \"@angular/core\";\nimport { ActivatedRoute, Router } from \"@angular/router\";\nimport { BreadcrumbItem, BreadcrumbStateService } from \"@nova-ui/bits\";\nimport { Subscription } from \"rxjs\";\n\n@Component({\n    selector: \"nui-breadcrumb-visual-test\",\n    templateUrl: \"./breadcrumb-visual-test.component.html\",\n})\nexport class BreadcrumbVisualTestComponent implements OnInit, OnDestroy {\n    public breadcrumbSource: Array<BreadcrumbItem>;\n    private routerSubscription: Subscription;\n\n    constructor(private router: Router,\n                private routerState: ActivatedRoute,\n                private breadcrumbStateService: BreadcrumbStateService) { }\n\n    ngOnInit() {\n        this.breadcrumbSource = this.breadcrumbStateService.getBreadcrumbState(this.routerState);\n        this.routerSubscription = this.breadcrumbStateService.getNavigationSubscription(this.router)\n            .subscribe(() => this.breadcrumbSource = this.breadcrumbStateService.getBreadcrumbState(this.routerState));\n    }\n\n    public onNavigation(routerState: string): void {\n        this.router.navigate([routerState]);\n    }\n\n    public relativeNavigation(routerState: string): void {\n        this.router.navigate([routerState], {relativeTo: this.routerState});\n    }\n\n    ngOnDestroy() {\n        this.routerSubscription.unsubscribe();\n    }\n}\n\n\n@Component({\n    selector: \"nui-breadcrumb-first-level\",\n    template: `\n        <div class=\"container\">\n            <div>\n                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi\n                optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda\n                est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus\n                saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur\n                a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus\n                asperiores repellat.\n            </div>\n            <button id=\"nui-demo-breadcrumb-show-third-view\" (click)=\"goNext()\">Show second level</button>\n            <router-outlet></router-outlet>\n        </div>`,\n})\nexport class BreadcrumbFirstSubviewLevelComponent {\n    constructor(private router: Router,\n                private routerState: ActivatedRoute) {\n    }\n\n    goNext() {\n        this.router.navigate([\"second-subroute\"], {relativeTo: this.routerState});\n    }\n}\n\n@Component({\n    selector: \"nui-breadcrumb-second-level\",\n    template: `\n        <div>\n            <p>Some data here</p>\n        </div>`,\n})\nexport class BreadcrumbSecondSubviewLevelComponent {\n}\n");

/***/ }),

/***/ "7eMc":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/breadcrumb/breadcrumb-basic/breadcrumb-basic.example.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-breadcrumb id=\"nui-demo-breadcrumb-basic\"\n                [items]=\"breadcrumbSource\"\n                (navigation)=\"onNavigation($event)\"></nui-breadcrumb>\n<div class=\"container\">\n    <div i18n class=\"nui-text-default\">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem\n        aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo\n        enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos,\n        qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet,\n        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam\n        quaerat voluptatem.\n    </div>\n    <button id=\"nui-demo-breadcrumb-show-countries\"\n            nui-button\n            type=\"button\"\n            (click)=\"relativeNavigation('countries')\"\n            i18n>Show countries\n    </button>\n    <button id=\"nui-demo-breadcrumb-show-offices\"\n            nui-button\n            class=\"ml-1\"\n            type=\"button\"\n            (click)=\"relativeNavigation('offices')\"\n            i18n>Show offices\n    </button>\n    <router-outlet></router-outlet>\n\n</div>\n");

/***/ }),

/***/ "CCq/":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/breadcrumb/breadcrumb-basic/breadcrumb-basic.example.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnDestroy, OnInit } from \"@angular/core\";\nimport { ActivatedRoute, Router } from \"@angular/router\";\nimport { BreadcrumbItem, BreadcrumbStateService } from \"@nova-ui/bits\";\nimport { Subscription } from \"rxjs\";\n\n@Component({\n    selector: \"nui-breadcrumb-basic-example\",\n    templateUrl: \"./breadcrumb-basic.example.component.html\",\n})\nexport class BreadcrumbBasicExampleComponent implements OnInit, OnDestroy {\n    public breadcrumbSource: Array<BreadcrumbItem>;\n    private routerSubscription: Subscription;\n\n    constructor(private router: Router,\n                private routerState: ActivatedRoute,\n                private breadcrumbStateService: BreadcrumbStateService) { }\n\n    ngOnInit() {\n        this.breadcrumbSource = this.breadcrumbStateService.getBreadcrumbState(this.routerState, \"/breadcrumb/\");\n        this.routerSubscription = this.breadcrumbStateService.getNavigationSubscription(this.router)\n            .subscribe(() => this.breadcrumbSource = this.breadcrumbStateService.getBreadcrumbState(this.routerState, \"/breadcrumb/\"));\n    }\n\n    public onNavigation(routerState: string): void {\n        void this.router.navigate([routerState]);\n    }\n\n    public relativeNavigation(routerState: string): void {\n        void this.router.navigate([routerState], {relativeTo: this.routerState});\n    }\n\n    ngOnDestroy() {\n        this.routerSubscription.unsubscribe();\n    }\n}\n\n\n@Component({\n    selector: \"nui-breadcrumb-first-subview\",\n    template: `\n        <div class=\"container\">\n            <div i18n class=\"nui-text-default\">\n                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi\n                optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda\n                est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus\n                saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur\n                a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus\n                asperiores repellat.\n            </div>\n            <button id=\"nui-demo-breadcrumb-show-first-country\"\n                    nui-button\n                    type=\"button\"\n                    (click)=\"relativeNavigation('usa')\"\n                    i18n>USA</button>\n            <button id=\"nui-demo-breadcrumb-show-second-country\"\n                    class=\"ml-1\"\n                    nui-button\n                    type=\"button\"\n                    (click)=\"relativeNavigation('ukraine')\"\n                    i18n>Ukraine</button>\n            <router-outlet></router-outlet>\n        </div>`,\n})\nexport class BreadcrumbCountriesSubviewComponent {\n    constructor(private router: Router,\n                private routerState: ActivatedRoute) {\n    }\n\n    public relativeNavigation(routerState: string): void {\n        this.router.navigate([routerState], {relativeTo: this.routerState});\n    }\n}\n\n@Component({\n    selector: \"nui-breadcrumb-second-subview\",\n    template: `\n        <div>\n            <p i18n class=\"nui-text-default\">Some data about country here</p>\n        </div>`,\n})\nexport class BreadcrumbSingleCountryComponent {\n}\n\n@Component({\n    selector: \"nui-breadcrumb-offices-subview\",\n    template: `\n        <div>\n            <p i18n class=\"nui-text-default\">Some data about offices here</p>\n        </div>`,\n})\nexport class BreadcrumbOfficesSubviewComponent {\n}\n");

/***/ }),

/***/ "GXaX":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/breadcrumb/breadcrumb-visual-test/breadcrumb-visual-test.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-breadcrumb id=\"nui-demo-breadcrumb-visual-test\"\n                [items]=\"breadcrumbSource\"\n                (navigation)=\"onNavigation($event)\"></nui-breadcrumb>\n<div class=\"container\">\n    <div>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem\n        aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo\n        enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos,\n        qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet,\n        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam\n        quaerat voluptatem.\n    </div>\n    <button id=\"nui-demo-breadcrumb-show-second-view\" (click)=\"relativeNavigation('first-subroute')\">Show first level</button>\n    <router-outlet></router-outlet>\n\n</div>\n");

/***/ }),

/***/ "P4pz":
/*!**************************************************************************************************!*\
  !*** ./demo/src/components/demo/breadcrumb/breadcrumb-docs/breadcrumb-docs.example.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: BreadcrumbDocsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbDocsExampleComponent", function() { return BreadcrumbDocsExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_code_example_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-code/example-code.component */ "DTer");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _breadcrumb_basic_breadcrumb_basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../breadcrumb-basic/breadcrumb-basic.example.component */ "l34F");




class BreadcrumbDocsExampleComponent {
    constructor() {
        this.routesExample = `{
        path: "breadcrumb",
        component: components.BreadcrumbDocsExampleComponent,
        data: { breadcrumb: "Root" },
        children: [
            {
                path: "first-subroute",
                component: components.BreadcrumbFirstSubviewComponent,
                data: {
                    breadcrumb: "First Level",
                    url: "https://spacex.com"
                },
                children: [
                    {
                        path: "second-subroute",
                        component: components.BreadcrumbSecondSubviewComponent,
                        data: { breadcrumb: "Second Level" },
                    },
                ],
            },
        ],
    }`;
    }
}
BreadcrumbDocsExampleComponent.ɵfac = function BreadcrumbDocsExampleComponent_Factory(t) { return new (t || BreadcrumbDocsExampleComponent)(); };
BreadcrumbDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbDocsExampleComponent, selectors: [["nui-breadcrumb-docs-example"]], decls: 73, vars: 1, consts: [["language", "typescript"], ["href", "../injectables/BreadcrumbStateService.html", "target", "_blank"], ["filenamePrefix", "breadcrumb-basic", "exampleTitle", "Basic Usage"]], template: function BreadcrumbDocsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "<nui-breadcrumb>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " component represents a structure of nested items. Its state is based on data from each route that takes part in this structure.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Required Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "NuiBreadcrumbModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "To use breadcrumb do the following:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Place an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "<nui-breadcrumb>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " in the template of a top level component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Configure a RoutingModule with a tree structure of routes similar to the following: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-example-code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Specify a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " item name in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "route.data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " object.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Optionally, specify a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " - the external url for the breadcrumb to navigate (using CTRL + Click, or simple Middle Click events). This setting should also be in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "route.data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " object.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "NOTE: regular left mouse click events will still navigate you using the angular router.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Get the initial data set for the breadcrumb via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " BreadcrumbStateService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ".getBreadcrumbState(routerState: ActivatedRoute)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Subscribe to router changes using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " BreadcrumbStateService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ".getNavigationSubscription(router: Router)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " and update input data for the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "BreadcrumbComponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "To perform navigation via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "<nui-breadcrumb>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " component items, subscribe to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " output. The subscription event payload is an absolute route path that can be used to trigger the navigation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " In addition to the above, the following example also illustrates how to perform a relative navigation.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "nui-breadcrumb-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.routesExample);
    } }, directives: [_src_lib_docs_example_code_example_code_component__WEBPACK_IMPORTED_MODULE_1__["ExampleCodeComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["ExampleWrapperComponent"], _breadcrumb_basic_breadcrumb_basic_example_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbBasicExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Pdp6":
/*!********************************************************************************************************!*\
  !*** ./demo/src/components/demo/breadcrumb/breadcrumb-visual-test/breadcrumb-visual-test.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: BreadcrumbVisualTestComponent, BreadcrumbFirstSubviewLevelComponent, BreadcrumbSecondSubviewLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbVisualTestComponent", function() { return BreadcrumbVisualTestComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbFirstSubviewLevelComponent", function() { return BreadcrumbFirstSubviewLevelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbSecondSubviewLevelComponent", function() { return BreadcrumbSecondSubviewLevelComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/breadcrumb/breadcrumb.component */ "xaw9");






class BreadcrumbVisualTestComponent {
    constructor(router, routerState, breadcrumbStateService) {
        this.router = router;
        this.routerState = routerState;
        this.breadcrumbStateService = breadcrumbStateService;
    }
    ngOnInit() {
        this.breadcrumbSource = this.breadcrumbStateService.getBreadcrumbState(this.routerState);
        this.routerSubscription = this.breadcrumbStateService.getNavigationSubscription(this.router)
            .subscribe(() => this.breadcrumbSource = this.breadcrumbStateService.getBreadcrumbState(this.routerState));
    }
    onNavigation(routerState) {
        this.router.navigate([routerState]);
    }
    relativeNavigation(routerState) {
        this.router.navigate([routerState], { relativeTo: this.routerState });
    }
    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }
}
BreadcrumbVisualTestComponent.ɵfac = function BreadcrumbVisualTestComponent_Factory(t) { return new (t || BreadcrumbVisualTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbStateService"])); };
BreadcrumbVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BreadcrumbVisualTestComponent, selectors: [["nui-breadcrumb-visual-test"]], decls: 7, vars: 1, consts: [["id", "nui-demo-breadcrumb-visual-test", 3, "items", "navigation"], [1, "container"], ["id", "nui-demo-breadcrumb-show-second-view", 3, "click"]], template: function BreadcrumbVisualTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("navigation", function BreadcrumbVisualTestComponent_Template_nui_breadcrumb_navigation_0_listener($event) { return ctx.onNavigation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BreadcrumbVisualTestComponent_Template_button_click_4_listener() { return ctx.relativeNavigation("first-subroute"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Show first level");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.breadcrumbSource);
    } }, directives: [_src_lib_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]], encapsulation: 2 });
class BreadcrumbFirstSubviewLevelComponent {
    constructor(router, routerState) {
        this.router = router;
        this.routerState = routerState;
    }
    goNext() {
        this.router.navigate(["second-subroute"], { relativeTo: this.routerState });
    }
}
BreadcrumbFirstSubviewLevelComponent.ɵfac = function BreadcrumbFirstSubviewLevelComponent_Factory(t) { return new (t || BreadcrumbFirstSubviewLevelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"])); };
BreadcrumbFirstSubviewLevelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BreadcrumbFirstSubviewLevelComponent, selectors: [["nui-breadcrumb-first-level"]], decls: 6, vars: 0, consts: [[1, "container"], ["id", "nui-demo-breadcrumb-show-third-view", 3, "click"]], template: function BreadcrumbFirstSubviewLevelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BreadcrumbFirstSubviewLevelComponent_Template_button_click_3_listener() { return ctx.goNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Show second level");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]], encapsulation: 2 });
class BreadcrumbSecondSubviewLevelComponent {
}
BreadcrumbSecondSubviewLevelComponent.ɵfac = function BreadcrumbSecondSubviewLevelComponent_Factory(t) { return new (t || BreadcrumbSecondSubviewLevelComponent)(); };
BreadcrumbSecondSubviewLevelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BreadcrumbSecondSubviewLevelComponent, selectors: [["nui-breadcrumb-second-level"]], decls: 3, vars: 0, template: function BreadcrumbSecondSubviewLevelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Some data here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "buaM":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/breadcrumb/index.ts ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./breadcrumb-docs/breadcrumb-docs.example.component\";\nexport * from \"./breadcrumb-basic/breadcrumb-basic.example.component\";\nexport * from \"./breadcrumb-visual-test/breadcrumb-visual-test.component\";\n");

/***/ }),

/***/ "dUiJ":
/*!******************************************************!*\
  !*** ./demo/src/components/demo/breadcrumb/index.ts ***!
  \******************************************************/
/*! exports provided: BreadcrumbDocsExampleComponent, BreadcrumbBasicExampleComponent, BreadcrumbCountriesSubviewComponent, BreadcrumbSingleCountryComponent, BreadcrumbOfficesSubviewComponent, BreadcrumbVisualTestComponent, BreadcrumbFirstSubviewLevelComponent, BreadcrumbSecondSubviewLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breadcrumb_docs_breadcrumb_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb-docs/breadcrumb-docs.example.component */ "P4pz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbDocsExampleComponent", function() { return _breadcrumb_docs_breadcrumb_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["BreadcrumbDocsExampleComponent"]; });

/* harmony import */ var _breadcrumb_basic_breadcrumb_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumb-basic/breadcrumb-basic.example.component */ "l34F");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbBasicExampleComponent", function() { return _breadcrumb_basic_breadcrumb_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbBasicExampleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbCountriesSubviewComponent", function() { return _breadcrumb_basic_breadcrumb_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbCountriesSubviewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbSingleCountryComponent", function() { return _breadcrumb_basic_breadcrumb_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbSingleCountryComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbOfficesSubviewComponent", function() { return _breadcrumb_basic_breadcrumb_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbOfficesSubviewComponent"]; });

/* harmony import */ var _breadcrumb_visual_test_breadcrumb_visual_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb-visual-test/breadcrumb-visual-test.component */ "Pdp6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbVisualTestComponent", function() { return _breadcrumb_visual_test_breadcrumb_visual_test_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbVisualTestComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbFirstSubviewLevelComponent", function() { return _breadcrumb_visual_test_breadcrumb_visual_test_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbFirstSubviewLevelComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbSecondSubviewLevelComponent", function() { return _breadcrumb_visual_test_breadcrumb_visual_test_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbSecondSubviewLevelComponent"]; });






/***/ }),

/***/ "flZM":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/breadcrumb/breadcrumb-docs/breadcrumb-docs.example.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-breadcrumb-docs-example\",\n    templateUrl: \"./breadcrumb-docs.example.component.html\",\n})\nexport class BreadcrumbDocsExampleComponent {\n    public routesExample = `{\n        path: \"breadcrumb\",\n        component: components.BreadcrumbDocsExampleComponent,\n        data: { breadcrumb: \"Root\" },\n        children: [\n            {\n                path: \"first-subroute\",\n                component: components.BreadcrumbFirstSubviewComponent,\n                data: {\n                    breadcrumb: \"First Level\",\n                    url: \"https://spacex.com\"\n                },\n                children: [\n                    {\n                        path: \"second-subroute\",\n                        component: components.BreadcrumbSecondSubviewComponent,\n                        data: { breadcrumb: \"Second Level\" },\n                    },\n                ],\n            },\n        ],\n    }`;\n}\n");

/***/ }),

/***/ "l2UY":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/breadcrumb/breadcrumb-docs/breadcrumb-docs.example.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    The <code>&lt;nui-breadcrumb&gt;</code> component represents a structure of nested items. Its state is based on data from each route that\n    takes part in this structure.\n</p>\n\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiBreadcrumbModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>To use breadcrumb do the following:</p>\n<ol>\n    <li>Place an <code>&lt;nui-breadcrumb&gt;</code> in the template of a top level component.</li>\n    <li>Configure a RoutingModule with a tree structure of routes similar to the following:\n        <nui-example-code language=\"typescript\">{{routesExample}}</nui-example-code>\n    </li>\n    <li>Specify a <code>breadcrumb</code> item name in the <code>route.data</code> object.</li>\n    <li>Optionally, specify a <code>url</code> - the external url for the breadcrumb to navigate (using CTRL + Click, or simple Middle Click events). \n        This setting should also be in the <code>route.data</code> object.<br />\n        <mark>NOTE: regular left mouse click events will still navigate you using the angular router.</mark>\n    </li>\n    <li>Get the initial data set for the breadcrumb via <code><a href=\"../injectables/BreadcrumbStateService.html\" target=\"_blank\">\n        BreadcrumbStateService</a>.getBreadcrumbState(routerState: ActivatedRoute)</code>.\n    </li>\n    <li>Subscribe to router changes using <code><a href=\"../injectables/BreadcrumbStateService.html\" target=\"_blank\">\n        BreadcrumbStateService</a>.getNavigationSubscription(router: Router)</code> and update input data for the\n        <code>BreadcrumbComponent</code>.\n    </li>\n    <li>To perform navigation via <code>&lt;nui-breadcrumb&gt;</code> component items, subscribe to the <code>navigation</code>\n        output. The subscription event payload is an absolute route path that can be used to trigger the navigation.\n    </li>\n</ol>\n<p>\n    In addition to the above, the following example also illustrates how to perform a relative navigation.\n</p>\n<nui-example-wrapper filenamePrefix=\"breadcrumb-basic\" exampleTitle=\"Basic Usage\">\n    <nui-breadcrumb-basic-example></nui-breadcrumb-basic-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "l34F":
/*!****************************************************************************************************!*\
  !*** ./demo/src/components/demo/breadcrumb/breadcrumb-basic/breadcrumb-basic.example.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: BreadcrumbBasicExampleComponent, BreadcrumbCountriesSubviewComponent, BreadcrumbSingleCountryComponent, BreadcrumbOfficesSubviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbBasicExampleComponent", function() { return BreadcrumbBasicExampleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbCountriesSubviewComponent", function() { return BreadcrumbCountriesSubviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbSingleCountryComponent", function() { return BreadcrumbSingleCountryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbOfficesSubviewComponent", function() { return BreadcrumbOfficesSubviewComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/breadcrumb/breadcrumb.component */ "xaw9");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");







class BreadcrumbBasicExampleComponent {
    constructor(router, routerState, breadcrumbStateService) {
        this.router = router;
        this.routerState = routerState;
        this.breadcrumbStateService = breadcrumbStateService;
    }
    ngOnInit() {
        this.breadcrumbSource = this.breadcrumbStateService.getBreadcrumbState(this.routerState, "/breadcrumb/");
        this.routerSubscription = this.breadcrumbStateService.getNavigationSubscription(this.router)
            .subscribe(() => this.breadcrumbSource = this.breadcrumbStateService.getBreadcrumbState(this.routerState, "/breadcrumb/"));
    }
    onNavigation(routerState) {
        void this.router.navigate([routerState]);
    }
    relativeNavigation(routerState) {
        void this.router.navigate([routerState], { relativeTo: this.routerState });
    }
    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }
}
BreadcrumbBasicExampleComponent.ɵfac = function BreadcrumbBasicExampleComponent_Factory(t) { return new (t || BreadcrumbBasicExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbStateService"])); };
BreadcrumbBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BreadcrumbBasicExampleComponent, selectors: [["nui-breadcrumb-basic-example"]], decls: 9, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3917462226492836314$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. ");
        i18n_0 = MSG_EXTERNAL_3917462226492836314$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟5402775b7c540f723eb01a796b7f18412365635a␟3917462226492836314:Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7338618360288097956$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Show countries ");
        i18n_2 = MSG_EXTERNAL_7338618360288097956$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟ed4f03d59b3a14af682df62edafb7ccc6ed7954e␟7338618360288097956:Show countries `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6001394596157574188$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Show offices ");
        i18n_4 = MSG_EXTERNAL_6001394596157574188$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟5663d5cb6f568de0caa2d730c31343f2a82222ff␟6001394596157574188:Show offices `;
    } return [["id", "nui-demo-breadcrumb-basic", 3, "items", "navigation"], [1, "container"], [1, "nui-text-default"], i18n_0, ["id", "nui-demo-breadcrumb-show-countries", "nui-button", "", "type", "button", 3, "click"], i18n_2, ["id", "nui-demo-breadcrumb-show-offices", "nui-button", "", "type", "button", 1, "ml-1", 3, "click"], i18n_4]; }, template: function BreadcrumbBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("navigation", function BreadcrumbBasicExampleComponent_Template_nui_breadcrumb_navigation_0_listener($event) { return ctx.onNavigation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BreadcrumbBasicExampleComponent_Template_button_click_4_listener() { return ctx.relativeNavigation("countries"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BreadcrumbBasicExampleComponent_Template_button_click_6_listener() { return ctx.relativeNavigation("offices"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](7, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.breadcrumbSource);
    } }, directives: [_src_lib_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]], encapsulation: 2 });
class BreadcrumbCountriesSubviewComponent {
    constructor(router, routerState) {
        this.router = router;
        this.routerState = routerState;
    }
    relativeNavigation(routerState) {
        this.router.navigate([routerState], { relativeTo: this.routerState });
    }
}
BreadcrumbCountriesSubviewComponent.ɵfac = function BreadcrumbCountriesSubviewComponent_Factory(t) { return new (t || BreadcrumbCountriesSubviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"])); };
BreadcrumbCountriesSubviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BreadcrumbCountriesSubviewComponent, selectors: [["nui-breadcrumb-first-subview"]], decls: 8, vars: 0, consts: function () { let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_57314280434499106$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_7 = goog.getMsg(" Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. ");
        i18n_6 = MSG_EXTERNAL_57314280434499106$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟91180e46df58bac68f482220b4da806e010f36ca␟57314280434499106: Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. `;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5160719833325947804$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("USA");
        i18n_8 = MSG_EXTERNAL_5160719833325947804$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟c3a094a7d12298ac94a6aece04f2a9ebc17568ba␟5160719833325947804:USA`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4346283537747431562$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("Ukraine");
        i18n_10 = MSG_EXTERNAL_4346283537747431562$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_11;
    }
    else {
        i18n_10 = $localize `:␟24e877c3dab6f6025a97bd95c562811a84b56c6a␟4346283537747431562:Ukraine`;
    } return [[1, "container"], [1, "nui-text-default"], i18n_6, ["id", "nui-demo-breadcrumb-show-first-country", "nui-button", "", "type", "button", 3, "click"], i18n_8, ["id", "nui-demo-breadcrumb-show-second-country", "nui-button", "", "type", "button", 1, "ml-1", 3, "click"], i18n_10]; }, template: function BreadcrumbCountriesSubviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BreadcrumbCountriesSubviewComponent_Template_button_click_3_listener() { return ctx.relativeNavigation("usa"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BreadcrumbCountriesSubviewComponent_Template_button_click_5_listener() { return ctx.relativeNavigation("ukraine"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]], encapsulation: 2 });
class BreadcrumbSingleCountryComponent {
}
BreadcrumbSingleCountryComponent.ɵfac = function BreadcrumbSingleCountryComponent_Factory(t) { return new (t || BreadcrumbSingleCountryComponent)(); };
BreadcrumbSingleCountryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BreadcrumbSingleCountryComponent, selectors: [["nui-breadcrumb-second-subview"]], decls: 3, vars: 0, consts: function () { let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5355741015140412943$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_13 = goog.getMsg("Some data about country here");
        i18n_12 = MSG_EXTERNAL_5355741015140412943$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_13;
    }
    else {
        i18n_12 = $localize `:␟8aa1743fc03fff67433697d72dd033f08d82ec08␟5355741015140412943:Some data about country here`;
    } return [[1, "nui-text-default"], i18n_12]; }, template: function BreadcrumbSingleCountryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
class BreadcrumbOfficesSubviewComponent {
}
BreadcrumbOfficesSubviewComponent.ɵfac = function BreadcrumbOfficesSubviewComponent_Factory(t) { return new (t || BreadcrumbOfficesSubviewComponent)(); };
BreadcrumbOfficesSubviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BreadcrumbOfficesSubviewComponent, selectors: [["nui-breadcrumb-offices-subview"]], decls: 3, vars: 0, consts: function () { let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5009522150453843399$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_15 = goog.getMsg("Some data about offices here");
        i18n_14 = MSG_EXTERNAL_5009522150453843399$$DEMO_SRC_COMPONENTS_DEMO_BREADCRUMB_BREADCRUMB_BASIC_BREADCRUMB_BASIC_EXAMPLE_COMPONENT_TS_15;
    }
    else {
        i18n_14 = $localize `:␟a12cfa3bf5b31c10213b5a36d9d6b9070f297817␟5009522150453843399:Some data about offices here`;
    } return [[1, "nui-text-default"], i18n_14]; }, template: function BreadcrumbOfficesSubviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "poqR":
/*!*************************************************************************************************************!*\
  !*** ./demo/src/components/demo/breadcrumb sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./breadcrumb-basic/breadcrumb-basic.example.component.html": "7eMc",
	"./breadcrumb-basic/breadcrumb-basic.example.component.ts": "CCq/",
	"./breadcrumb-docs/breadcrumb-docs.example.component.html": "l2UY",
	"./breadcrumb-docs/breadcrumb-docs.example.component.ts": "flZM",
	"./breadcrumb-visual-test/breadcrumb-visual-test.component.html": "GXaX",
	"./breadcrumb-visual-test/breadcrumb-visual-test.component.ts": "5Eqh",
	"./breadcrumb.module.ts": "2JLQ",
	"./index.ts": "buaM"
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
webpackContext.id = "poqR";

/***/ }),

/***/ "qmWs":
/*!******************************************************************!*\
  !*** ./demo/src/components/demo/breadcrumb/breadcrumb.module.ts ***!
  \******************************************************************/
/*! exports provided: BreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return BreadcrumbModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "dUiJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbDocsExampleComponent"],
        data: {
            breadcrumb: "Root",
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
        children: [
            {
                path: "countries",
                component: _index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbCountriesSubviewComponent"],
                data: {
                    breadcrumb: "Countries",
                    url: "https://tesla.com",
                    showThemeSwitcher: true,
                },
                children: [
                    {
                        path: "usa",
                        component: _index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbSingleCountryComponent"],
                        data: {
                            breadcrumb: "USA",
                            showThemeSwitcher: true,
                        },
                    },
                    {
                        path: "ukraine",
                        component: _index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbSingleCountryComponent"],
                        data: {
                            breadcrumb: "Ukraine",
                            showThemeSwitcher: true,
                        },
                    },
                ],
            },
            {
                path: "offices",
                component: _index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbOfficesSubviewComponent"],
                data: {
                    breadcrumb: "Offices",
                    showThemeSwitcher: true,
                },
            },
        ],
    },
    {
        path: "breadcrumb-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
            breadcrumb: "Root",
        },
        children: [
            {
                path: "first-subroute",
                component: _index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbFirstSubviewLevelComponent"],
                data: {
                    breadcrumb: "First Level",
                    "srlc": {
                        "hideIndicator": true,
                    },
                },
                children: [
                    {
                        path: "second-subroute",
                        component: _index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbSecondSubviewLevelComponent"],
                        data: {
                            breadcrumb: "Second Level",
                            "srlc": {
                                "hideIndicator": true,
                            },
                        },
                    },
                ],
            },
        ],
    },
];
class BreadcrumbModule {
}
BreadcrumbModule.ɵfac = function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); };
BreadcrumbModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BreadcrumbModule });
BreadcrumbModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("poqR"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiBreadcrumbModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BreadcrumbModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbDocsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbBasicExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbCountriesSubviewComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbSingleCountryComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbOfficesSubviewComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbVisualTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbFirstSubviewLevelComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbSecondSubviewLevelComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiBreadcrumbModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=demo-breadcrumb-breadcrumb-module-es2015.js.map