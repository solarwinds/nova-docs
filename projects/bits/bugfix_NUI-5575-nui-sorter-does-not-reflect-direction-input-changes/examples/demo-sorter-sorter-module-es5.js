(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-sorter-sorter-module"], {
    /***/
    "11e0":
    /*!**********************************************************!*\
      !*** ./demo/src/components/demo/sorter/sorter.module.ts ***!
      \**********************************************************/

    /*! exports provided: SorterModule */

    /***/
    function e0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SorterModule", function () {
        return SorterModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _sorter_basic_sorter_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sorter-basic/sorter-basic.example.component */
      "4GVW");
      /* harmony import */


      var _sorter_docs_sorter_docs_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sorter-docs/sorter-docs.example.component */
      "82zx");
      /* harmony import */


      var _sorter_visual_test_sorter_legacy_string_input_usage_sorter_legacy_string_input_usage_visual_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sorter-visual-test/sorter-legacy-string-input-usage/sorter-legacy-string-input-usage-visual-test.component */
      "vqNU");
      /* harmony import */


      var _sorter_visual_test_sorter_recommended_usage_sorter_recommended_usage_visual_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sorter-visual-test/sorter-recommended-usage/sorter-recommended-usage-visual-test.component */
      "ux5i");
      /* harmony import */


      var _sorter_visual_test_sorter_visual_test_harness_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sorter-visual-test/sorter-visual-test-harness.component */
      "o7Q4");
      /* harmony import */


      var _sorter_test_sorter_test_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sorter-test/sorter-test.example.component */
      "nqcq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _sorter_docs_sorter_docs_example_component__WEBPACK_IMPORTED_MODULE_3__["SorterExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "sorter-test",
        component: _sorter_test_sorter_test_example_component__WEBPACK_IMPORTED_MODULE_7__["SorterTestExampleComponent"]
      }, {
        path: "visual-test",
        component: _sorter_visual_test_sorter_visual_test_harness_component__WEBPACK_IMPORTED_MODULE_6__["SorterVisualTestHarnessComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var SorterModule = function SorterModule() {
        _classCallCheck(this, SorterModule);
      };

      SorterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: SorterModule
      });
      SorterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function SorterModule_Factory(t) {
          return new (t || SorterModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("vU4O");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSorterModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiRepeatModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SorterModule, {
          declarations: [_sorter_basic_sorter_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["SorterBasicExampleComponent"], _sorter_visual_test_sorter_legacy_string_input_usage_sorter_legacy_string_input_usage_visual_test_component__WEBPACK_IMPORTED_MODULE_4__["SorterLegacyStringInputUsageVisualTestComponent"], _sorter_docs_sorter_docs_example_component__WEBPACK_IMPORTED_MODULE_3__["SorterExampleComponent"], _sorter_visual_test_sorter_recommended_usage_sorter_recommended_usage_visual_test_component__WEBPACK_IMPORTED_MODULE_5__["SorterRecommendedUsageVisualTestComponent"], _sorter_visual_test_sorter_visual_test_harness_component__WEBPACK_IMPORTED_MODULE_6__["SorterVisualTestHarnessComponent"], _sorter_test_sorter_test_example_component__WEBPACK_IMPORTED_MODULE_7__["SorterTestExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSorterModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiRepeatModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "4GVW":
    /*!****************************************************************************************!*\
      !*** ./demo/src/components/demo/sorter/sorter-basic/sorter-basic.example.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: SorterBasicExampleComponent */

    /***/
    function GVW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SorterBasicExampleComponent", function () {
        return SorterBasicExampleComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! lodash/orderBy */
      "k8Y/");
      /* harmony import */


      var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/sorter/sorter.component */
      "3WNR");
      /* harmony import */


      var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/repeat/repeat.component */
      "v2n/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SorterBasicExampleComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](col_r3.title);
        }
      }

      function SorterBasicExampleComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.item;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.director);
        }
      }

      var SorterBasicExampleComponent = /*#__PURE__*/function () {
        function SorterBasicExampleComponent() {
          _classCallCheck(this, SorterBasicExampleComponent);

          this.columns = [{
            title: $localize(_templateObject || (_templateObject = _taggedTemplateLiteral(["Title"]))),
            value: "title"
          }, {
            title: $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Year"]))),
            value: "year"
          }, {
            title: $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Director"]))),
            value: "director"
          }];
          this.initialSortDirection = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SorterDirection"].ascending;
          this.sortBy = this.columns[1].value;
          this.items = getData();
        }

        _createClass(SorterBasicExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sortItems(this.sortBy, this.initialSortDirection);
          }
        }, {
          key: "onSorterAction",
          value: function onSorterAction(changeEvent) {
            this.sortBy = changeEvent.newValue.sortBy;
            this.sortItems(changeEvent.newValue.sortBy, changeEvent.newValue.direction);
          }
        }, {
          key: "sortItems",
          value: function sortItems(sortBy, direction) {
            this.items = lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(this.items, [sortBy], [direction]);
          }
        }]);

        return SorterBasicExampleComponent;
      }();

      SorterBasicExampleComponent.ɵfac = function SorterBasicExampleComponent_Factory(t) {
        return new (t || SorterBasicExampleComponent)();
      };

      SorterBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SorterBasicExampleComponent,
        selectors: [["nui-sorter-basic-example"]],
        decls: 8,
        vars: 6,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6216206084382868401$$DEMO_SRC_COMPONENTS_DEMO_SORTER_SORTER_BASIC_SORTER_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Sorter Caption");
            i18n_0 = MSG_EXTERNAL_6216206084382868401$$DEMO_SRC_COMPONENTS_DEMO_SORTER_SORTER_BASIC_SORTER_BASIC_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241F6fa73bd96af6604034e29044457c7a3fb23c502c\u241F6216206084382868401:Sorter Caption"])));
          }

          return [["id", "nui-demo-sorter", "caption", i18n_0, 3, "itemsSource", "selectedItem", "sortDirection", "sorterAction"], [3, "itemsSource", "repeatItemTemplateRef"], ["repeatHeaderTemplate", ""], [1, "sorter-flex-header"], [1, "sorter-flex-row"], ["class", "sorter-flex-item header-item", 4, "ngFor", "ngForOf"], ["repeatItemTemplate", ""], [1, "sorter-flex-item", "header-item"], [1, "sorter-flex-item"]];
        },
        template: function SorterBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-sorter", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sorterAction", function SorterBasicExampleComponent_Template_nui_sorter_sorterAction_0_listener($event) {
              return ctx.onSorterAction($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-repeat", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SorterBasicExampleComponent_div_5_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SorterBasicExampleComponent_ng_template_6_Template, 7, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx.columns)("selectedItem", ctx.sortBy)("sortDirection", ctx.initialSortDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx.items)("repeatItemTemplateRef", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columns);
          }
        },
        directives: [_src_lib_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_3__["SorterComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_4__["RepeatComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: [".sorter-flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 0;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 0px 10px;\n}\n.sorter-flex-header[_ngcontent-%COMP%] {\n  padding-left: 3px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.header-item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-top: 10px;\n}\n.sorter-flex-item[_ngcontent-%COMP%] {\n  padding: 5px;\n  flex-grow: 1;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding-right: 10px;\n  width: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvcnRlci1iYXNpYy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUdBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFESiIsImZpbGUiOiJzb3J0ZXItYmFzaWMuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjb2wtd2lkdGg6IDE4MHB4O1xuXG4uc29ydGVyLWZsZXgtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4OyAgICBcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG4uc29ydGVyLWZsZXgtaGVhZGVye1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmhlYWRlci1pdGVtIHtcbiAgICBmb250LXdlaWdodDogYm9sZDsgIFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc29ydGVyLWZsZXgtaXRlbSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB3aWR0aDogQGNvbC13aWR0aDtcbn1cbiJdfQ== */"]
      });

      function getData() {
        return [{
          title: "Vertigo",
          year: "1958",
          director: "Alfred Hitchcock"
        }, {
          title: "Citizen Kane",
          year: "1941",
          director: "Orson Welles"
        }, {
          title: "2001: A Space Odyssey",
          year: "1968",
          director: "Stanley Kubrick"
        }, {
          title: "The Godfather",
          year: "1972",
          director: "Francis Ford Coppola"
        }, {
          title: "Mulholland Dr.",
          year: "2001",
          director: "David Lynch"
        }, {
          title: "Taxi Driver",
          year: "1976",
          director: "Martin Scorsese"
        }, {
          title: "La Dolce Vita",
          year: "1960",
          director: "Federico Fellini"
        }, {
          title: "The Silence of the Lambs",
          year: "1991",
          director: "Jonathan Demme"
        }, {
          title: "The Terminator",
          year: "1984",
          director: "James Cameron"
        }];
      }
      /***/

    },

    /***/
    "6gPP":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-docs/sorter-docs.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gPP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { IMenuItem, ISortedItem, ISorterChanges, SorterComponent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-sorter-docs-example\",\n    templateUrl: \"./sorter-docs.example.component.html\",\n})\nexport class SorterExampleComponent {\n    getSorterPropKey(key: keyof SorterComponent): string {\n        return key;\n    }\n\n    getISorterChangesInterfaceKey(key: keyof ISorterChanges): string {\n        return key;\n    }\n\n    getISortedItemInterfaceKey(key: keyof ISortedItem): string {\n        return key;\n    }\n\n    getIMenuItemInterfaceKey(key: keyof IMenuItem): string {\n        return key;\n    }\n}\n";
      /***/
    },

    /***/
    "82zx":
    /*!**************************************************************************************!*\
      !*** ./demo/src/components/demo/sorter/sorter-docs/sorter-docs.example.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: SorterExampleComponent */

    /***/
    function zx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SorterExampleComponent", function () {
        return SorterExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");
      /* harmony import */


      var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */
      "CVg4");
      /* harmony import */


      var _sorter_basic_sorter_basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../sorter-basic/sorter-basic.example.component */
      "4GVW");

      var SorterExampleComponent = /*#__PURE__*/function () {
        function SorterExampleComponent() {
          _classCallCheck(this, SorterExampleComponent);
        }

        _createClass(SorterExampleComponent, [{
          key: "getSorterPropKey",
          value: function getSorterPropKey(key) {
            return key;
          }
        }, {
          key: "getISorterChangesInterfaceKey",
          value: function getISorterChangesInterfaceKey(key) {
            return key;
          }
        }, {
          key: "getISortedItemInterfaceKey",
          value: function getISortedItemInterfaceKey(key) {
            return key;
          }
        }, {
          key: "getIMenuItemInterfaceKey",
          value: function getIMenuItemInterfaceKey(key) {
            return key;
          }
        }]);

        return SorterExampleComponent;
      }();

      SorterExampleComponent.ɵfac = function SorterExampleComponent_Factory(t) {
        return new (t || SorterExampleComponent)();
      };

      SorterExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SorterExampleComponent,
        selectors: [["nui-sorter-docs-example"]],
        decls: 107,
        vars: 21,
        consts: [["href", "../interfaces/IMenuItem.html", "target", "_blank"], ["href", "../miscellaneous/enumerations.html#SorterDirection", "target", "_blank"], ["href", "../interfaces/ISorterChanges.html", "target", "_blank"], ["href", "../interfaces/ISortedItem.html", "target", "_blank"], ["type", "info", 3, "allowDismiss"], ["filenamePrefix", "sorter-basic", "exampleTitle", "Simple Sorter"]],
        template: function SorterExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "nui-sorter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " component provides a toggle mechanism for sorting a set of items in ascending or descending order. The value to sort by can be selected by the user via a dropdown.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "NuiSorterModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Inputs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " - To get the sorter working, provide an array of type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "IMenuItem[]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " input. Each item in the array should be set with a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " for populating the sorter dropdown. The title property is for display and can be localized. The value property is what's actually used for sorting.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " - To specify an initial value to sort by, optionally set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " input with an item's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " from the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " array. By default, the initial sort-by value is the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " of the first item in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " - To specify an initial sorting direction, optionally set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " input with a value of type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "SorterDirection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ". By default, the initial sorting direction is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "SorterDirection.ascending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " - To specify a caption, optionally set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " input with a string value.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Sorter Action Output");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " The sorter responds to user interaction by emitting a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " output with an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "ISorterChanges");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " payload. The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " in the payload are each of type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "ISortedItem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, ". User actions that trigger the output include changing the sorting direction and selecting a new item to sort by. Bind to this output to set a new value for the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " input and to sort your items according to the payload's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " value.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "nui-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " The sorter component does not emit an initial sorterAction output. As a result, be sure to perform an initial sorting of your items in your component's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "ngOnInit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, ". Thereafter, user-initiated sorting can be handled via your sorterAction output handler.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "nui-sorter-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSorterPropKey("itemsSource"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSorterPropKey("itemsSource"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getIMenuItemInterfaceKey("title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getIMenuItemInterfaceKey("value"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSorterPropKey("selectedItem"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSorterPropKey("selectedItem"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getIMenuItemInterfaceKey("value"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSorterPropKey("itemsSource"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getIMenuItemInterfaceKey("value"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSorterPropKey("itemsSource"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSorterPropKey("sortDirection"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSorterPropKey("sortDirection"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSorterPropKey("caption"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSorterPropKey("caption"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSorterPropKey("sorterAction"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getISorterChangesInterfaceKey("oldValue"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getISorterChangesInterfaceKey("newValue"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSorterPropKey("selectedItem"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.getISorterChangesInterfaceKey("newValue"), ".", ctx.getISortedItemInterfaceKey("sortBy"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["ExampleWrapperComponent"], _sorter_basic_sorter_basic_example_component__WEBPACK_IMPORTED_MODULE_3__["SorterBasicExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "8flc":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function flc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiDocsModule,\n    NuiMessageModule,\n    NuiRepeatModule,\n    NuiSorterModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport { SorterBasicExampleComponent } from \"./sorter-basic/sorter-basic.example.component\";\nimport { SorterExampleComponent } from \"./sorter-docs/sorter-docs.example.component\";\nimport { SorterLegacyStringInputUsageVisualTestComponent } from \"./sorter-visual-test/sorter-legacy-string-input-usage/sorter-legacy-string-input-usage-visual-test.component\";\nimport { SorterRecommendedUsageVisualTestComponent } from \"./sorter-visual-test/sorter-recommended-usage/sorter-recommended-usage-visual-test.component\";\nimport { SorterVisualTestHarnessComponent } from \"./sorter-visual-test/sorter-visual-test-harness.component\";\nimport {SorterTestExampleComponent} from \"./sorter-test/sorter-test.example.component\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: SorterExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"sorter-test\",\n        component: SorterTestExampleComponent,\n    },\n    {\n        path: \"visual-test\",\n        component: SorterVisualTestHarnessComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiSorterModule,\n        NuiRepeatModule,\n        NuiMessageModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        SorterBasicExampleComponent,\n        SorterLegacyStringInputUsageVisualTestComponent,\n        SorterExampleComponent,\n        SorterRecommendedUsageVisualTestComponent,\n        SorterVisualTestHarnessComponent,\n        SorterTestExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class SorterModule {\n}\n";
      /***/
    },

    /***/
    "9z4P":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-test/sorter-test.example.component.less ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function z4P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@col-width: 180px;\n\n.sorter-flex-row {\n    display: flex;    \n    flex-grow: 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n    padding: 0px 10px;\n}\n.sorter-flex-header{\n    padding-left: 3px;\n    margin-left: 5px;\n    margin-right: 10px;\n}\n.header-item {\n    font-weight: bold;  \n    margin-top: 10px;\n}\n.sorter-flex-item {\n    padding: 5px;\n    flex-grow: 1;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    padding-right: 10px;\n    width: @col-width;\n}\n";
      /***/
    },

    /***/
    "E4VQ":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-visual-test/sorter-visual-test-harness.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function E4VQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <h2>Sorter</h2>\n    <nui-sorter-recommended-usage-visual-test></nui-sorter-recommended-usage-visual-test>\n    <br>\n    <h2>Sorter With Legacy String Input</h2>\n    <nui-sorter-legacy-string-input-usage-visual-test></nui-sorter-legacy-string-input-usage-visual-test>\n</div>\n";
      /***/
    },

    /***/
    "Fq5Q":
    /*!***********************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-visual-test/sorter-legacy-string-input-usage/sorter-legacy-string-input-usage-visual-test.component.html ***!
      \***********************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Fq5Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-sorter id=\"nui-demo-sorter-legacy-string-input\"\n            caption=\"Sorter Caption\"\n            [itemsSource]=\"columns\"\n            [selectedItem]=\"sortBy\"\n            [sortDirection]=\"initialSortDirection\"\n            (sorterAction)=\"onSorterAction($event)\">\n</nui-sorter>\n<nui-repeat [itemsSource]=\"items\" [repeatItemTemplateRef]=\"repeatItemTemplate\">\n    <div repeatHeaderTemplate>\n        <div class=\"sorter-flex-header\">\n            <div class=\"sorter-flex-row\">\n                <div class=\"sorter-flex-item header-item\" *ngFor=\"let col of columns;\">{{ col | titlecase }}</div>\n            </div>\n        </div>\n    </div>\n</nui-repeat>\n<ng-template #repeatItemTemplate let-item=\"item\">\n    <div class=\"sorter-flex-row\">\n        <div class=\"sorter-flex-item\">{{item.title}}</div>\n        <div class=\"sorter-flex-item\">{{item.year}}</div>\n        <div class=\"sorter-flex-item\">{{item.director}}</div>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "I+9q":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-docs/sorter-docs.example.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function I9q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    The <code>nui-sorter</code> component provides a toggle mechanism for sorting a set of items in\n    ascending or descending order. The value to sort by can be selected by the user via a dropdown.\n</p>\n\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiSorterModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<h3>Inputs</h3>\n<p>\n    <code>{{ getSorterPropKey(\"itemsSource\") }}</code> - To get the sorter working, provide an array of\n    type <code><a href=\"../interfaces/IMenuItem.html\" target=\"_blank\">IMenuItem[]</a></code> to the\n    <code>{{ getSorterPropKey(\"itemsSource\") }}</code> input. Each item in the array should be set with a\n    <code>{{ getIMenuItemInterfaceKey(\"title\") }}</code> and\n    <code>{{ getIMenuItemInterfaceKey(\"value\") }}</code> for populating the sorter dropdown. The title\n    property is for display and can be localized. The value property is what's actually used for sorting.\n</p>\n<p>\n    <code>{{ getSorterPropKey(\"selectedItem\") }}</code> - To specify an initial value to sort by,\n    optionally set the <code>{{ getSorterPropKey(\"selectedItem\") }}</code> input with an item's\n    <code>{{ getIMenuItemInterfaceKey(\"value\") }}</code> from the\n    <code>{{ getSorterPropKey(\"itemsSource\") }}</code> array. By default, the initial sort-by value is\n    the <code>{{ getIMenuItemInterfaceKey(\"value\") }}</code> of the first item in the\n    <code>{{ getSorterPropKey(\"itemsSource\") }}</code>\n</p>\n<p>\n    <code>{{ getSorterPropKey(\"sortDirection\") }}</code> - To specify an initial sorting direction,\n    optionally set the <code>{{ getSorterPropKey(\"sortDirection\") }}</code> input with a value of type\n    <code><a href=\"../miscellaneous/enumerations.html#SorterDirection\" target=\"_blank\">SorterDirection</a></code>.\n    By default, the initial sorting direction is <code>SorterDirection.ascending</code>.\n</p>\n<p>\n    <code>{{ getSorterPropKey(\"caption\") }}</code> - To specify a caption, optionally set the\n    <code>{{ getSorterPropKey(\"caption\") }}</code> input with a string value.\n</p>\n\n<h3>Sorter Action Output</h3>\n<p>\n    The sorter responds to user interaction by emitting a\n    <code>{{ getSorterPropKey(\"sorterAction\") }}</code> output with an\n    <code><a href=\"../interfaces/ISorterChanges.html\" target=\"_blank\">ISorterChanges</a></code> payload.\n    The <code>{{ getISorterChangesInterfaceKey(\"oldValue\") }}</code> and\n    <code>{{ getISorterChangesInterfaceKey(\"newValue\") }}</code> in the payload are each of type\n    <code><a href=\"../interfaces/ISortedItem.html\" target=\"_blank\">ISortedItem</a></code>. User\n    actions that trigger the output include changing the sorting direction and selecting a new item\n    to sort by. Bind to this output to set a new value for the\n    <code>{{ getSorterPropKey(\"selectedItem\") }}</code> input and to sort your items according to the\n    payload's\n    <code>{{ getISorterChangesInterfaceKey(\"newValue\") }}.{{ getISortedItemInterfaceKey(\"sortBy\") }}</code>\n    value.\n</p>\n\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> The sorter component does not emit an initial sorterAction output. As a\n    result, be sure to perform an initial sorting of your items in your component's\n    <code>ngOnInit</code>. Thereafter, user-initiated sorting can be handled via your sorterAction output\n    handler.\n</nui-message>\n\n<nui-example-wrapper filenamePrefix=\"sorter-basic\" exampleTitle=\"Simple Sorter\">\n    <nui-sorter-basic-example></nui-sorter-basic-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "IFsN":
    /*!***********************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-visual-test/sorter-legacy-string-input-usage/sorter-legacy-string-input-usage-visual-test.component.less ***!
      \***********************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IFsN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@col-width: 180px;\n\n.sorter-flex-row {\n    display: flex;    \n    flex-grow: 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n    padding: 0px 10px;\n}\n.sorter-flex-header{\n    padding-left: 3px;\n    margin-left: 5px;\n    margin-right: 10px;\n}\n.header-item {\n    font-weight: bold;  \n    margin-top: 10px;\n}\n.sorter-flex-item {\n    padding: 5px;\n    flex-grow: 1;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    padding-right: 10px;\n    width: @col-width;\n}\n";
      /***/
    },

    /***/
    "KxaQ":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-test/sorter-test.example.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KxaQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-sorter id=\"nui-demo-sorter\"\n            i18n-caption\n            caption=\"Sorter Caption\"\n            [itemsSource]=\"columns\"\n            [selectedItem]=\"sortBy\"\n            [sortDirection]=\"sortDirection\"\n            (sorterAction)=\"onSorterAction($event)\">\n</nui-sorter>\n<button (click)=\"resetSorter()\">reset sorter</button>\n<button (click)=\"updateSorterByProperty()\">update sorter by property</button>\n<button (click)=\"updateSorterByMethod()\">update sorter by method</button>\n<button (click)=\"updateSorterDirection()\">update sorter direction</button>\n\n<nui-repeat [itemsSource]=\"items\" [repeatItemTemplateRef]=\"repeatItemTemplate\">\n    <div repeatHeaderTemplate>\n        <div class=\"sorter-flex-header\">\n            <div class=\"sorter-flex-row\">\n                <div class=\"sorter-flex-item header-item\" *ngFor=\"let col of columns;\">{{ col.title }}</div>\n            </div>\n        </div>\n    </div>\n</nui-repeat>\n<ng-template #repeatItemTemplate let-item=\"item\">\n    <div class=\"sorter-flex-row\">\n        <div class=\"sorter-flex-item\">{{item.title}}</div>\n        <div class=\"sorter-flex-item\">{{item.year}}</div>\n        <div class=\"sorter-flex-item\">{{item.director}}</div>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "MYqL":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-basic/sorter-basic.example.component.less ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MYqL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@col-width: 180px;\n\n.sorter-flex-row {\n    display: flex;    \n    flex-grow: 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n    padding: 0px 10px;\n}\n.sorter-flex-header{\n    padding-left: 3px;\n    margin-left: 5px;\n    margin-right: 10px;\n}\n.header-item {\n    font-weight: bold;  \n    margin-top: 10px;\n}\n.sorter-flex-item {\n    padding: 5px;\n    flex-grow: 1;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    padding-right: 10px;\n    width: @col-width;\n}\n";
      /***/
    },

    /***/
    "Msn7":
    /*!*****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-visual-test/sorter-recommended-usage/sorter-recommended-usage-visual-test.component.ts ***!
      \*****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Msn7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { IMenuItem, ISorterChanges, SorterDirection } from \"@nova-ui/bits\";\nimport _orderBy from \"lodash/orderBy\";\n\ninterface IFilm {\n    title: string;\n    year: string;\n    director: string;\n}\n\n@Component({\n    selector: \"nui-sorter-recommended-usage-visual-test\",\n    templateUrl: \"./sorter-recommended-usage-visual-test.component.html\",\n    styleUrls: [\"./sorter-recommended-usage-visual-test.component.less\"],\n})\nexport class SorterRecommendedUsageVisualTestComponent implements OnInit {\n    public readonly columns: IMenuItem[] = [\n        {\n            title: $localize`LongColumnNameForTitleLongColumnNameForTitle`,\n            value: \"title\",\n        },\n        {\n            title: $localize`Year`,\n            value: \"year\",\n        },\n        {\n            title: $localize`Director`,\n            value: \"director\",\n        },\n    ];\n\n    public readonly initialSortDirection = SorterDirection.ascending;\n    public sortBy = this.columns[1].value;\n\n    public items: IFilm[] = [\n        { title: \"Vertigo\", year: \"1958\", director: \"Alfred Hitchcock\" },\n        { title: \"Citizen Kane\", year: \"1941\", director: \"Orson Welles\" },\n        { title: \"2001: A Space Odyssey\", year: \"1968\", director: \"Stanley Kubrick\" },\n        { title: \"The Godfather\", year: \"1972\", director: \"Francis Ford Coppola\" },\n        { title: \"Mulholland Dr.\", year: \"2001\", director: \"David Lynch\" },\n        { title: \"Taxi Driver\", year: \"1976\", director: \"Martin Scorsese\" },\n        { title: \"La Dolce Vita\", year: \"1960\", director: \"Federico Fellini\" },\n        { title: \"The Silence of the Lambs\", year: \"1991\", director: \"Jonathan Demme\" },\n        { title: \"The Terminator\", year: \"1984\", director: \"James Cameron\" },\n    ];\n\n    ngOnInit() {\n        this.sortItems(this.sortBy, this.initialSortDirection);\n    }\n\n    onSorterAction(changeEvent: ISorterChanges) {\n        this.sortBy = changeEvent.newValue.sortBy;\n        this.sortItems(changeEvent.newValue.sortBy, changeEvent.newValue.direction);\n    }\n\n    private sortItems(sortBy: string, direction: SorterDirection) {\n        this.items = _orderBy(this.items, [sortBy],\n            [direction as (SorterDirection.ascending | SorterDirection.descending)]) as IFilm[];\n    }\n}\n";
      /***/
    },

    /***/
    "bSMB":
    /*!*******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-visual-test/sorter-recommended-usage/sorter-recommended-usage-visual-test.component.less ***!
      \*******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bSMB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@col-width: 180px;\n\n.sorter-flex-row {\n    display: flex;\n    flex-grow: 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n    padding: 0px 10px;\n}\n.sorter-flex-header{\n    padding-left: 3px;\n    margin-left: 5px;\n    margin-right: 10px;\n}\n.header-item {\n    font-weight: bold;\n    margin-top: 10px;\n}\n.sorter-flex-item {\n    padding: 5px;\n    flex-grow: 1;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    padding-right: 10px;\n    width: @col-width;\n}\n";
      /***/
    },

    /***/
    "dkSH":
    /*!*******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-visual-test/sorter-recommended-usage/sorter-recommended-usage-visual-test.component.html ***!
      \*******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dkSH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-sorter id=\"nui-demo-sorter\"\n            caption=\"Sorter Caption\"\n            [itemsSource]=\"columns\"\n            [selectedItem]=\"sortBy\"\n            [sortDirection]=\"initialSortDirection\"\n            (sorterAction)=\"onSorterAction($event)\">\n</nui-sorter>\n<nui-repeat [itemsSource]=\"items\" [repeatItemTemplateRef]=\"repeatItemTemplate\">\n    <div repeatHeaderTemplate>\n        <div class=\"sorter-flex-header\">\n            <div class=\"sorter-flex-row\">\n                <div class=\"sorter-flex-item header-item\" *ngFor=\"let col of columns;\">\n                    {{ col.title }}\n                </div>\n            </div>\n        </div>\n    </div>\n</nui-repeat>\n<ng-template #repeatItemTemplate let-item=\"item\">\n    <div class=\"sorter-flex-row\">\n        <div class=\"sorter-flex-item\">{{item.title}}</div>\n        <div class=\"sorter-flex-item\">{{item.year}}</div>\n        <div class=\"sorter-flex-item\">{{item.director}}</div>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "e/4S":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-basic/sorter-basic.example.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e4S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-sorter id=\"nui-demo-sorter\"\n            i18n-caption\n            caption=\"Sorter Caption\"\n            [itemsSource]=\"columns\"\n            [selectedItem]=\"sortBy\"\n            [sortDirection]=\"initialSortDirection\"\n            (sorterAction)=\"onSorterAction($event)\">\n</nui-sorter>\n<nui-repeat [itemsSource]=\"items\" [repeatItemTemplateRef]=\"repeatItemTemplate\">\n    <div repeatHeaderTemplate>\n        <div class=\"sorter-flex-header\">\n            <div class=\"sorter-flex-row\">\n                <div class=\"sorter-flex-item header-item\" *ngFor=\"let col of columns;\">{{ col.title }}</div>\n            </div>\n        </div>\n    </div>\n</nui-repeat>\n<ng-template #repeatItemTemplate let-item=\"item\">\n    <div class=\"sorter-flex-row\">\n        <div class=\"sorter-flex-item\">{{item.title}}</div>\n        <div class=\"sorter-flex-item\">{{item.year}}</div>\n        <div class=\"sorter-flex-item\">{{item.director}}</div>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "fmNZ":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-visual-test/sorter-visual-test-harness.component.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fmNZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    templateUrl: \"./sorter-visual-test-harness.component.html\",\n})\nexport class SorterVisualTestHarnessComponent { }\n";
      /***/
    },

    /***/
    "hs6M":
    /*!*********************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-visual-test/sorter-legacy-string-input-usage/sorter-legacy-string-input-usage-visual-test.component.ts ***!
      \*********************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hs6M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { AfterViewInit, Component } from \"@angular/core\";\nimport { ISorterChanges, SorterDirection } from \"@nova-ui/bits\";\nimport _orderBy from \"lodash/orderBy\";\n\ninterface IFilm {\n    title: string;\n    year: string;\n    director: string;\n}\n\n@Component({\n    selector: \"nui-sorter-legacy-string-input-usage-visual-test\",\n    templateUrl: \"./sorter-legacy-string-input-usage-visual-test.component.html\",\n    styleUrls: [\"./sorter-legacy-string-input-usage-visual-test.component.less\"],\n})\nexport class SorterLegacyStringInputUsageVisualTestComponent implements AfterViewInit {\n    public readonly columns = [\"title\", \"year\", \"director\"];\n    public readonly initialSortDirection = SorterDirection.ascending;\n    public sortBy = this.columns[1];\n\n    public items: IFilm[] = [\n        { title: \"Vertigo\", year: \"1958\", director: \"Alfred Hitchcock\" },\n        { title: \"Citizen Kane\", year: \"1941\", director: \"Orson Welles\" },\n        { title: \"2001: A Space Odyssey\", year: \"1968\", director: \"Stanley Kubrick\" },\n        { title: \"The Godfather\", year: \"1972\", director: \"Francis Ford Coppola\" },\n        { title: \"Mulholland Dr.\", year: \"2001\", director: \"David Lynch\" },\n        { title: \"Taxi Driver\", year: \"1976\", director: \"Martin Scorsese\" },\n        { title: \"La Dolce Vita\", year: \"1960\", director: \"Federico Fellini\" },\n        { title: \"The Silence of the Lambs\", year: \"1991\", director: \"Jonathan Demme\" },\n        { title: \"The Terminator\", year: \"1984\", director: \"James Cameron\" },\n    ];\n\n    ngAfterViewInit() {\n        this.sortItems(this.sortBy, this.initialSortDirection);\n    }\n\n    onSorterAction(changeEvent: ISorterChanges) {\n        this.sortBy = changeEvent.newValue.sortBy;\n        this.sortItems(changeEvent.newValue.sortBy, changeEvent.newValue.direction);\n    }\n\n    private sortItems(sortBy: string, direction: SorterDirection) {\n        this.items = _orderBy(this.items, [sortBy],\n            [direction as (SorterDirection.ascending | SorterDirection.descending)]) as IFilm[];\n    }\n}\n";
      /***/
    },

    /***/
    "miG2":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-basic/sorter-basic.example.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function miG2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { IMenuItem, ISorterChanges, SorterDirection } from \"@nova-ui/bits\";\nimport _orderBy from \"lodash/orderBy\";\n\ninterface IFilm {\n    title: string;\n    year: string;\n    director: string;\n}\n\n@Component({\n    selector: \"nui-sorter-basic-example\",\n    templateUrl: \"./sorter-basic.example.component.html\",\n    styleUrls: [\"./sorter-basic.example.component.less\"],\n})\nexport class SorterBasicExampleComponent implements OnInit {\n    public readonly columns: IMenuItem[] = [\n        {\n            title: $localize`Title`,\n            value: \"title\",\n        },\n        {\n            title: $localize`Year`,\n            value: \"year\",\n        },\n        {\n            title: $localize`Director`,\n            value: \"director\",\n        },\n    ];\n\n    public readonly initialSortDirection = SorterDirection.ascending;\n    public sortBy = this.columns[1].value;\n    public items: IFilm[] = getData();\n\n    public ngOnInit() {\n        this.sortItems(this.sortBy, this.initialSortDirection);\n    }\n\n    public onSorterAction(changeEvent: ISorterChanges) {\n        this.sortBy = changeEvent.newValue.sortBy;\n        this.sortItems(changeEvent.newValue.sortBy, changeEvent.newValue.direction);\n    }\n\n    private sortItems(sortBy: string, direction: SorterDirection) {\n        this.items = _orderBy(this.items, [sortBy], [direction as (SorterDirection.ascending | SorterDirection.descending)]) as IFilm[];\n    }\n}\n\nfunction getData(): IFilm[] {\n    return [\n        { title: \"Vertigo\", year: \"1958\", director: \"Alfred Hitchcock\" },\n        { title: \"Citizen Kane\", year: \"1941\", director: \"Orson Welles\" },\n        { title: \"2001: A Space Odyssey\", year: \"1968\", director: \"Stanley Kubrick\" },\n        { title: \"The Godfather\", year: \"1972\", director: \"Francis Ford Coppola\" },\n        { title: \"Mulholland Dr.\", year: \"2001\", director: \"David Lynch\" },\n        { title: \"Taxi Driver\", year: \"1976\", director: \"Martin Scorsese\" },\n        { title: \"La Dolce Vita\", year: \"1960\", director: \"Federico Fellini\" },\n        { title: \"The Silence of the Lambs\", year: \"1991\", director: \"Jonathan Demme\" },\n        { title: \"The Terminator\", year: \"1984\", director: \"James Cameron\" },\n    ];\n}\n";
      /***/
    },

    /***/
    "nqcq":
    /*!**************************************************************************************!*\
      !*** ./demo/src/components/demo/sorter/sorter-test/sorter-test.example.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: SorterTestExampleComponent */

    /***/
    function nqcq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SorterTestExampleComponent", function () {
        return SorterTestExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var lodash_orderBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash/orderBy */
      "k8Y/");
      /* harmony import */


      var lodash_orderBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/sorter/sorter.component */
      "3WNR");
      /* harmony import */


      var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/repeat/repeat.component */
      "v2n/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SorterTestExampleComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](col_r3.title);
        }
      }

      function SorterTestExampleComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.item;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.director);
        }
      }

      var SorterTestExampleComponent = /*#__PURE__*/function () {
        function SorterTestExampleComponent() {
          _classCallCheck(this, SorterTestExampleComponent);

          this.emptyColumns = [{
            title: $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Empty"]))),
            value: ""
          }];
          this.dataColumns = [{
            title: $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Title"]))),
            value: "title"
          }, {
            title: $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Year"]))),
            value: "year"
          }, {
            title: $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Director"]))),
            value: "director"
          }];
          this.columns = this.dataColumns;
          this.showSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
          this.show$ = this.showSubject.asObservable();
          this.sortDirection = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SorterDirection"].ascending;
          this.sortBy = this.columns[0].value;
          this.items = getData();
        }

        _createClass(SorterTestExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sortItems(this.sortBy, this.sortDirection);
          }
        }, {
          key: "updateSorterDirection",
          value: function updateSorterDirection() {
            var old = this.sortDirection;
            this.sortDirection = old === _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SorterDirection"].ascending ? _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SorterDirection"].descending : _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SorterDirection"].ascending;
          }
        }, {
          key: "onSorterAction",
          value: function onSorterAction(changeEvent) {
            this.sortBy = changeEvent.newValue.sortBy;
            this.sortItems(changeEvent.newValue.sortBy, changeEvent.newValue.direction);
          }
        }, {
          key: "delayPromise",
          value: function delayPromise() {
            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            return new Promise(function (resolve) {
              setTimeout(resolve, delay);
            });
          }
        }, {
          key: "resetSorter",
          value: function resetSorter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.showSubject.next(false);
                      _context.next = 3;
                      return this.delayPromise();

                    case 3:
                      this.columns = this.emptyColumns;
                      this.sortBy = "";
                      this.showSubject.next(true);
                      console.log("THIS", this);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "updateSorterByProperty",
          value: function updateSorterByProperty() {
            this.columns = this.dataColumns;
            this.sortBy = this.dataColumns[1].value;
          }
        }, {
          key: "updateSorterByMethod",
          value: function updateSorterByMethod() {
            this.columns = this.dataColumns;
            this.sorter.select(this.dataColumns[2]);
          }
        }, {
          key: "sortItems",
          value: function sortItems(sortBy, direction) {
            this.items = lodash_orderBy__WEBPACK_IMPORTED_MODULE_2___default()(this.items, [sortBy], [direction]);
          }
        }]);

        return SorterTestExampleComponent;
      }();

      SorterTestExampleComponent.ɵfac = function SorterTestExampleComponent_Factory(t) {
        return new (t || SorterTestExampleComponent)();
      };

      SorterTestExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: SorterTestExampleComponent,
        selectors: [["nui-sorter-test-example"]],
        viewQuery: function SorterTestExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SorterComponent"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sorter = _t.first);
          }
        },
        decls: 16,
        vars: 6,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6216206084382868401$$DEMO_SRC_COMPONENTS_DEMO_SORTER_SORTER_TEST_SORTER_TEST_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Sorter Caption");
            i18n_0 = MSG_EXTERNAL_6216206084382868401$$DEMO_SRC_COMPONENTS_DEMO_SORTER_SORTER_TEST_SORTER_TEST_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([":\u241F6fa73bd96af6604034e29044457c7a3fb23c502c\u241F6216206084382868401:Sorter Caption"])));
          }

          return [["id", "nui-demo-sorter", "caption", i18n_0, 3, "itemsSource", "selectedItem", "sortDirection", "sorterAction"], [3, "click"], [3, "itemsSource", "repeatItemTemplateRef"], ["repeatHeaderTemplate", ""], [1, "sorter-flex-header"], [1, "sorter-flex-row"], ["class", "sorter-flex-item header-item", 4, "ngFor", "ngForOf"], ["repeatItemTemplate", ""], [1, "sorter-flex-item", "header-item"], [1, "sorter-flex-item"]];
        },
        template: function SorterTestExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-sorter", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sorterAction", function SorterTestExampleComponent_Template_nui_sorter_sorterAction_0_listener($event) {
              return ctx.onSorterAction($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SorterTestExampleComponent_Template_button_click_1_listener() {
              return ctx.resetSorter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "reset sorter");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SorterTestExampleComponent_Template_button_click_3_listener() {
              return ctx.updateSorterByProperty();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "update sorter by property");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SorterTestExampleComponent_Template_button_click_5_listener() {
              return ctx.updateSorterByMethod();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "update sorter by method");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SorterTestExampleComponent_Template_button_click_7_listener() {
              return ctx.updateSorterDirection();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "update sorter direction");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "nui-repeat", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, SorterTestExampleComponent_div_13_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SorterTestExampleComponent_ng_template_14_Template, 7, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("itemsSource", ctx.columns)("selectedItem", ctx.sortBy)("sortDirection", ctx.sortDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("itemsSource", ctx.items)("repeatItemTemplateRef", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.columns);
          }
        },
        directives: [_src_lib_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_5__["SorterComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_6__["RepeatComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        styles: [".sorter-flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 0;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 0px 10px;\n}\n.sorter-flex-header[_ngcontent-%COMP%] {\n  padding-left: 3px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.header-item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-top: 10px;\n}\n.sorter-flex-item[_ngcontent-%COMP%] {\n  padding: 5px;\n  flex-grow: 1;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding-right: 10px;\n  width: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvcnRlci10ZXN0LmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQURKO0FBR0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUdBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBR0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURKIiwiZmlsZSI6InNvcnRlci10ZXN0LmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY29sLXdpZHRoOiAxODBweDtcblxuLnNvcnRlci1mbGV4LXJvdyB7XG4gICAgZGlzcGxheTogZmxleDsgICAgXG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuLnNvcnRlci1mbGV4LWhlYWRlcntcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5oZWFkZXItaXRlbSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICBcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnNvcnRlci1mbGV4LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IEBjb2wtd2lkdGg7XG59XG4iXX0= */"]
      });

      function getData() {
        return [{
          title: "Vertigo",
          year: "1958",
          director: "Alfred Hitchcock"
        }, {
          title: "Citizen Kane",
          year: "1941",
          director: "Orson Welles"
        }, {
          title: "2001: A Space Odyssey",
          year: "1968",
          director: "Stanley Kubrick"
        }, {
          title: "The Godfather",
          year: "1972",
          director: "Francis Ford Coppola"
        }, {
          title: "Mulholland Dr.",
          year: "2001",
          director: "David Lynch"
        }, {
          title: "Taxi Driver",
          year: "1976",
          director: "Martin Scorsese"
        }, {
          title: "La Dolce Vita",
          year: "1960",
          director: "Federico Fellini"
        }, {
          title: "The Silence of the Lambs",
          year: "1991",
          director: "Jonathan Demme"
        }, {
          title: "The Terminator",
          year: "1984",
          director: "James Cameron"
        }];
      }
      /***/

    },

    /***/
    "o7Q4":
    /*!****************************************************************************************************!*\
      !*** ./demo/src/components/demo/sorter/sorter-visual-test/sorter-visual-test-harness.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: SorterVisualTestHarnessComponent */

    /***/
    function o7Q4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SorterVisualTestHarnessComponent", function () {
        return SorterVisualTestHarnessComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sorter_recommended_usage_sorter_recommended_usage_visual_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sorter-recommended-usage/sorter-recommended-usage-visual-test.component */
      "ux5i");
      /* harmony import */


      var _sorter_legacy_string_input_usage_sorter_legacy_string_input_usage_visual_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sorter-legacy-string-input-usage/sorter-legacy-string-input-usage-visual-test.component */
      "vqNU");

      var SorterVisualTestHarnessComponent = function SorterVisualTestHarnessComponent() {
        _classCallCheck(this, SorterVisualTestHarnessComponent);
      };

      SorterVisualTestHarnessComponent.ɵfac = function SorterVisualTestHarnessComponent_Factory(t) {
        return new (t || SorterVisualTestHarnessComponent)();
      };

      SorterVisualTestHarnessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SorterVisualTestHarnessComponent,
        selectors: [["ng-component"]],
        decls: 8,
        vars: 0,
        consts: [[1, "container"]],
        template: function SorterVisualTestHarnessComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sorter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-sorter-recommended-usage-visual-test");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sorter With Legacy String Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nui-sorter-legacy-string-input-usage-visual-test");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_sorter_recommended_usage_sorter_recommended_usage_visual_test_component__WEBPACK_IMPORTED_MODULE_1__["SorterRecommendedUsageVisualTestComponent"], _sorter_legacy_string_input_usage_sorter_legacy_string_input_usage_visual_test_component__WEBPACK_IMPORTED_MODULE_2__["SorterLegacyStringInputUsageVisualTestComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "ux5i":
    /*!***************************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/sorter/sorter-visual-test/sorter-recommended-usage/sorter-recommended-usage-visual-test.component.ts ***!
      \***************************************************************************************************************************************/

    /*! exports provided: SorterRecommendedUsageVisualTestComponent */

    /***/
    function ux5i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SorterRecommendedUsageVisualTestComponent", function () {
        return SorterRecommendedUsageVisualTestComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! lodash/orderBy */
      "k8Y/");
      /* harmony import */


      var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../../src/lib/sorter/sorter.component */
      "3WNR");
      /* harmony import */


      var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../src/lib/repeat/repeat.component */
      "v2n/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SorterRecommendedUsageVisualTestComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r3.title, " ");
        }
      }

      function SorterRecommendedUsageVisualTestComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.item;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.director);
        }
      }

      var SorterRecommendedUsageVisualTestComponent = /*#__PURE__*/function () {
        function SorterRecommendedUsageVisualTestComponent() {
          _classCallCheck(this, SorterRecommendedUsageVisualTestComponent);

          this.columns = [{
            title: $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["LongColumnNameForTitleLongColumnNameForTitle"]))),
            value: "title"
          }, {
            title: $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Year"]))),
            value: "year"
          }, {
            title: $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Director"]))),
            value: "director"
          }];
          this.initialSortDirection = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SorterDirection"].ascending;
          this.sortBy = this.columns[1].value;
          this.items = [{
            title: "Vertigo",
            year: "1958",
            director: "Alfred Hitchcock"
          }, {
            title: "Citizen Kane",
            year: "1941",
            director: "Orson Welles"
          }, {
            title: "2001: A Space Odyssey",
            year: "1968",
            director: "Stanley Kubrick"
          }, {
            title: "The Godfather",
            year: "1972",
            director: "Francis Ford Coppola"
          }, {
            title: "Mulholland Dr.",
            year: "2001",
            director: "David Lynch"
          }, {
            title: "Taxi Driver",
            year: "1976",
            director: "Martin Scorsese"
          }, {
            title: "La Dolce Vita",
            year: "1960",
            director: "Federico Fellini"
          }, {
            title: "The Silence of the Lambs",
            year: "1991",
            director: "Jonathan Demme"
          }, {
            title: "The Terminator",
            year: "1984",
            director: "James Cameron"
          }];
        }

        _createClass(SorterRecommendedUsageVisualTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sortItems(this.sortBy, this.initialSortDirection);
          }
        }, {
          key: "onSorterAction",
          value: function onSorterAction(changeEvent) {
            this.sortBy = changeEvent.newValue.sortBy;
            this.sortItems(changeEvent.newValue.sortBy, changeEvent.newValue.direction);
          }
        }, {
          key: "sortItems",
          value: function sortItems(sortBy, direction) {
            this.items = lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(this.items, [sortBy], [direction]);
          }
        }]);

        return SorterRecommendedUsageVisualTestComponent;
      }();

      SorterRecommendedUsageVisualTestComponent.ɵfac = function SorterRecommendedUsageVisualTestComponent_Factory(t) {
        return new (t || SorterRecommendedUsageVisualTestComponent)();
      };

      SorterRecommendedUsageVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SorterRecommendedUsageVisualTestComponent,
        selectors: [["nui-sorter-recommended-usage-visual-test"]],
        decls: 8,
        vars: 6,
        consts: [["id", "nui-demo-sorter", "caption", "Sorter Caption", 3, "itemsSource", "selectedItem", "sortDirection", "sorterAction"], [3, "itemsSource", "repeatItemTemplateRef"], ["repeatHeaderTemplate", ""], [1, "sorter-flex-header"], [1, "sorter-flex-row"], ["class", "sorter-flex-item header-item", 4, "ngFor", "ngForOf"], ["repeatItemTemplate", ""], [1, "sorter-flex-item", "header-item"], [1, "sorter-flex-item"]],
        template: function SorterRecommendedUsageVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-sorter", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sorterAction", function SorterRecommendedUsageVisualTestComponent_Template_nui_sorter_sorterAction_0_listener($event) {
              return ctx.onSorterAction($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-repeat", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SorterRecommendedUsageVisualTestComponent_div_5_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SorterRecommendedUsageVisualTestComponent_ng_template_6_Template, 7, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx.columns)("selectedItem", ctx.sortBy)("sortDirection", ctx.initialSortDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx.items)("repeatItemTemplateRef", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columns);
          }
        },
        directives: [_src_lib_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_3__["SorterComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_4__["RepeatComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: [".sorter-flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 0;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 0px 10px;\n}\n.sorter-flex-header[_ngcontent-%COMP%] {\n  padding-left: 3px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.header-item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-top: 10px;\n}\n.sorter-flex-item[_ngcontent-%COMP%] {\n  padding: 5px;\n  flex-grow: 1;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding-right: 10px;\n  width: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvcnRlci1yZWNvbW1lbmRlZC11c2FnZS12aXN1YWwtdGVzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBREo7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBREo7QUFHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBREoiLCJmaWxlIjoic29ydGVyLXJlY29tbWVuZGVkLXVzYWdlLXZpc3VhbC10ZXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGNvbC13aWR0aDogMTgwcHg7XG5cbi5zb3J0ZXItZmxleC1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuLnNvcnRlci1mbGV4LWhlYWRlcntcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5oZWFkZXItaXRlbSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5zb3J0ZXItZmxleC1pdGVtIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiBAY29sLXdpZHRoO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "v+OT":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/sorter/sorter-test/sorter-test.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vOT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit, ViewChild } from \"@angular/core\";\nimport { IMenuItem, ISorterChanges, SorterComponent, SorterDirection } from \"@nova-ui/bits\";\nimport _orderBy from \"lodash/orderBy\";\nimport { BehaviorSubject } from \"rxjs\";\n\ninterface IFilm {\n    title: string;\n    year: string;\n    director: string;\n}\n\n@Component({\n    selector: \"nui-sorter-test-example\",\n    templateUrl: \"./sorter-test.example.component.html\",\n    styleUrls: [\"./sorter-test.example.component.less\"],\n})\nexport class SorterTestExampleComponent implements OnInit {\n    private readonly emptyColumns: IMenuItem[] = [{\n        title: $localize`Empty`,\n        value: \"\",\n    }];\n    public readonly dataColumns: IMenuItem[] = [\n        {\n            title: $localize`Title`,\n            value: \"title\",\n        },\n        {\n            title: $localize`Year`,\n            value: \"year\",\n        },\n        {\n            title: $localize`Director`,\n            value: \"director\",\n        },\n    ];\n\n    public columns: IMenuItem[] = this.dataColumns;\n\n    @ViewChild(SorterComponent)\n    private sorter: SorterComponent;\n\n    private readonly showSubject = new BehaviorSubject(true);\n    public readonly show$ = this.showSubject.asObservable();\n    public sortDirection = SorterDirection.ascending;\n    public sortBy = this.columns[0].value;\n    public items: IFilm[] = getData();\n\n    public ngOnInit() {\n        this.sortItems(this.sortBy, this.sortDirection);\n    }\n\n    public updateSorterDirection() {\n        const old = this.sortDirection;\n        this.sortDirection = (old === SorterDirection.ascending) ?\n        SorterDirection.descending : SorterDirection.ascending;\n    }\n\n    public onSorterAction(changeEvent: ISorterChanges) {\n        this.sortBy = changeEvent.newValue.sortBy;\n        this.sortItems(changeEvent.newValue.sortBy, changeEvent.newValue.direction);\n    }\n\n    private delayPromise(delay: number = 0): Promise<void> {\n        return new Promise((resolve) => {\n            setTimeout(resolve, delay);\n        });\n    }\n\n    public async resetSorter() {\n        this.showSubject.next(false);\n        await this.delayPromise();\n        this.columns = this.emptyColumns;\n        this.sortBy = \"\";\n        this.showSubject.next(true);\n        console.log(\"THIS\", this);\n    }\n\n    public updateSorterByProperty() {\n        this.columns = this.dataColumns;\n        this.sortBy = this.dataColumns[1].value;\n    }\n\n    public updateSorterByMethod() {\n        this.columns = this.dataColumns;\n        this.sorter.select(this.dataColumns[2]);\n    }\n\n    private sortItems(sortBy: string, direction: SorterDirection) {\n        this.items = _orderBy(this.items, [sortBy], [direction as (SorterDirection.ascending | SorterDirection.descending)]) as IFilm[];\n    }\n}\n\nfunction getData(): IFilm[] {\n    return [\n        { title: \"Vertigo\", year: \"1958\", director: \"Alfred Hitchcock\" },\n        { title: \"Citizen Kane\", year: \"1941\", director: \"Orson Welles\" },\n        { title: \"2001: A Space Odyssey\", year: \"1968\", director: \"Stanley Kubrick\" },\n        { title: \"The Godfather\", year: \"1972\", director: \"Francis Ford Coppola\" },\n        { title: \"Mulholland Dr.\", year: \"2001\", director: \"David Lynch\" },\n        { title: \"Taxi Driver\", year: \"1976\", director: \"Martin Scorsese\" },\n        { title: \"La Dolce Vita\", year: \"1960\", director: \"Federico Fellini\" },\n        { title: \"The Silence of the Lambs\", year: \"1991\", director: \"Jonathan Demme\" },\n        { title: \"The Terminator\", year: \"1984\", director: \"James Cameron\" },\n    ];\n}\n";
      /***/
    },

    /***/
    "vU4O":
    /*!*********************************************************************************************************!*\
      !*** ./demo/src/components/demo/sorter sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*********************************************************************************************************/

    /*! no static exports found */

    /***/
    function vU4O(module, exports, __webpack_require__) {
      var map = {
        "./sorter-basic/sorter-basic.example.component.html": "e/4S",
        "./sorter-basic/sorter-basic.example.component.less": "MYqL",
        "./sorter-basic/sorter-basic.example.component.ts": "miG2",
        "./sorter-docs/sorter-docs.example.component.html": "I+9q",
        "./sorter-docs/sorter-docs.example.component.ts": "6gPP",
        "./sorter-test/sorter-test.example.component.html": "KxaQ",
        "./sorter-test/sorter-test.example.component.less": "9z4P",
        "./sorter-test/sorter-test.example.component.ts": "v+OT",
        "./sorter-visual-test/sorter-legacy-string-input-usage/sorter-legacy-string-input-usage-visual-test.component.html": "Fq5Q",
        "./sorter-visual-test/sorter-legacy-string-input-usage/sorter-legacy-string-input-usage-visual-test.component.less": "IFsN",
        "./sorter-visual-test/sorter-legacy-string-input-usage/sorter-legacy-string-input-usage-visual-test.component.ts": "hs6M",
        "./sorter-visual-test/sorter-recommended-usage/sorter-recommended-usage-visual-test.component.html": "dkSH",
        "./sorter-visual-test/sorter-recommended-usage/sorter-recommended-usage-visual-test.component.less": "bSMB",
        "./sorter-visual-test/sorter-recommended-usage/sorter-recommended-usage-visual-test.component.ts": "Msn7",
        "./sorter-visual-test/sorter-visual-test-harness.component.html": "E4VQ",
        "./sorter-visual-test/sorter-visual-test-harness.component.ts": "fmNZ",
        "./sorter.module.ts": "8flc"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
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
      webpackContext.id = "vU4O";
      /***/
    },

    /***/
    "vqNU":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/sorter/sorter-visual-test/sorter-legacy-string-input-usage/sorter-legacy-string-input-usage-visual-test.component.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: SorterLegacyStringInputUsageVisualTestComponent */

    /***/
    function vqNU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SorterLegacyStringInputUsageVisualTestComponent", function () {
        return SorterLegacyStringInputUsageVisualTestComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! lodash/orderBy */
      "k8Y/");
      /* harmony import */


      var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../../src/lib/sorter/sorter.component */
      "3WNR");
      /* harmony import */


      var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../src/lib/repeat/repeat.component */
      "v2n/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SorterLegacyStringInputUsageVisualTestComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, col_r3));
        }
      }

      function SorterLegacyStringInputUsageVisualTestComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.item;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.director);
        }
      }

      var SorterLegacyStringInputUsageVisualTestComponent = /*#__PURE__*/function () {
        function SorterLegacyStringInputUsageVisualTestComponent() {
          _classCallCheck(this, SorterLegacyStringInputUsageVisualTestComponent);

          this.columns = ["title", "year", "director"];
          this.initialSortDirection = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SorterDirection"].ascending;
          this.sortBy = this.columns[1];
          this.items = [{
            title: "Vertigo",
            year: "1958",
            director: "Alfred Hitchcock"
          }, {
            title: "Citizen Kane",
            year: "1941",
            director: "Orson Welles"
          }, {
            title: "2001: A Space Odyssey",
            year: "1968",
            director: "Stanley Kubrick"
          }, {
            title: "The Godfather",
            year: "1972",
            director: "Francis Ford Coppola"
          }, {
            title: "Mulholland Dr.",
            year: "2001",
            director: "David Lynch"
          }, {
            title: "Taxi Driver",
            year: "1976",
            director: "Martin Scorsese"
          }, {
            title: "La Dolce Vita",
            year: "1960",
            director: "Federico Fellini"
          }, {
            title: "The Silence of the Lambs",
            year: "1991",
            director: "Jonathan Demme"
          }, {
            title: "The Terminator",
            year: "1984",
            director: "James Cameron"
          }];
        }

        _createClass(SorterLegacyStringInputUsageVisualTestComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.sortItems(this.sortBy, this.initialSortDirection);
          }
        }, {
          key: "onSorterAction",
          value: function onSorterAction(changeEvent) {
            this.sortBy = changeEvent.newValue.sortBy;
            this.sortItems(changeEvent.newValue.sortBy, changeEvent.newValue.direction);
          }
        }, {
          key: "sortItems",
          value: function sortItems(sortBy, direction) {
            this.items = lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(this.items, [sortBy], [direction]);
          }
        }]);

        return SorterLegacyStringInputUsageVisualTestComponent;
      }();

      SorterLegacyStringInputUsageVisualTestComponent.ɵfac = function SorterLegacyStringInputUsageVisualTestComponent_Factory(t) {
        return new (t || SorterLegacyStringInputUsageVisualTestComponent)();
      };

      SorterLegacyStringInputUsageVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SorterLegacyStringInputUsageVisualTestComponent,
        selectors: [["nui-sorter-legacy-string-input-usage-visual-test"]],
        decls: 8,
        vars: 6,
        consts: [["id", "nui-demo-sorter-legacy-string-input", "caption", "Sorter Caption", 3, "itemsSource", "selectedItem", "sortDirection", "sorterAction"], [3, "itemsSource", "repeatItemTemplateRef"], ["repeatHeaderTemplate", ""], [1, "sorter-flex-header"], [1, "sorter-flex-row"], ["class", "sorter-flex-item header-item", 4, "ngFor", "ngForOf"], ["repeatItemTemplate", ""], [1, "sorter-flex-item", "header-item"], [1, "sorter-flex-item"]],
        template: function SorterLegacyStringInputUsageVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-sorter", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sorterAction", function SorterLegacyStringInputUsageVisualTestComponent_Template_nui_sorter_sorterAction_0_listener($event) {
              return ctx.onSorterAction($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-repeat", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SorterLegacyStringInputUsageVisualTestComponent_div_5_Template, 3, 3, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SorterLegacyStringInputUsageVisualTestComponent_ng_template_6_Template, 7, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx.columns)("selectedItem", ctx.sortBy)("sortDirection", ctx.initialSortDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx.items)("repeatItemTemplateRef", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columns);
          }
        },
        directives: [_src_lib_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_3__["SorterComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_4__["RepeatComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]],
        styles: [".sorter-flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 0;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 0px 10px;\n}\n.sorter-flex-header[_ngcontent-%COMP%] {\n  padding-left: 3px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.header-item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-top: 10px;\n}\n.sorter-flex-item[_ngcontent-%COMP%] {\n  padding: 5px;\n  flex-grow: 1;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding-right: 10px;\n  width: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvcnRlci1sZWdhY3ktc3RyaW5nLWlucHV0LXVzYWdlLXZpc3VhbC10ZXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUdBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFESiIsImZpbGUiOiJzb3J0ZXItbGVnYWN5LXN0cmluZy1pbnB1dC11c2FnZS12aXN1YWwtdGVzdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjb2wtd2lkdGg6IDE4MHB4O1xuXG4uc29ydGVyLWZsZXgtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4OyAgICBcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG4uc29ydGVyLWZsZXgtaGVhZGVye1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmhlYWRlci1pdGVtIHtcbiAgICBmb250LXdlaWdodDogYm9sZDsgIFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc29ydGVyLWZsZXgtaXRlbSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB3aWR0aDogQGNvbC13aWR0aDtcbn1cbiJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-sorter-sorter-module-es5.js.map