(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-progress-progress-module"], {
    /***/
    "+G8x":
    /*!**************************************************************!*\
      !*** ./demo/src/components/demo/progress/progress.module.ts ***!
      \**************************************************************/

    /*! exports provided: ProgressModule */

    /***/
    function G8x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressModule", function () {
        return ProgressModule;
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


      var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index */
      "ol/H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["ProgressExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "progress-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["ProgressVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "progress-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["ProgressTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ProgressModule = function ProgressModule() {
        _classCallCheck(this, ProgressModule);
      };

      ProgressModule.ɵfac = function ProgressModule_Factory(t) {
        return new (t || ProgressModule)();
      };

      ProgressModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: ProgressModule
      });
      ProgressModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("egSN");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiProgressModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProgressModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["BasicProgressExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["IndeterminateProgressExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ProgressCompactExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ProgressExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ProgressVisualTestComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ProgressTestComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ProgressWithHelpTemplateExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["StackedHeaderProgressExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiProgressModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "0b2H":
    /*!**************************************************************************************************************!*\
      !*** ./demo/src/components/demo/progress/indeterminate-progress/indeterminate-progress.example.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: IndeterminateProgressExampleComponent */

    /***/
    function b2H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndeterminateProgressExampleComponent", function () {
        return IndeterminateProgressExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/progress/progress.component */
      "FA8p");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var IndeterminateProgressExampleComponent = /*#__PURE__*/function () {
        function IndeterminateProgressExampleComponent() {
          _classCallCheck(this, IndeterminateProgressExampleComponent);

          this.show = false;
          this.isCanceled = false;
          this.stop = undefined;
        }

        _createClass(IndeterminateProgressExampleComponent, [{
          key: "startProgress",
          value: function startProgress() {
            this.clearInterval();
            this.show = true;
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.clearInterval();
            this.isCanceled = true;
            this.show = false;
            this.stop = undefined;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.clearInterval();
          }
        }, {
          key: "clearInterval",
          value: function (_clearInterval) {
            function clearInterval() {
              return _clearInterval.apply(this, arguments);
            }

            clearInterval.toString = function () {
              return _clearInterval.toString();
            };

            return clearInterval;
          }(function () {
            if (this.stop) {
              clearInterval(this.stop);
            }
          })
        }]);

        return IndeterminateProgressExampleComponent;
      }();

      IndeterminateProgressExampleComponent.ɵfac = function IndeterminateProgressExampleComponent_Factory(t) {
        return new (t || IndeterminateProgressExampleComponent)();
      };

      IndeterminateProgressExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IndeterminateProgressExampleComponent,
        selectors: [["nui-indeterminate-progress-example"]],
        decls: 3,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6272229524073167827$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_INDETERMINATE_PROGRESS_INDETERMINATE_PROGRESS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Task Label");
            i18n_0 = MSG_EXTERNAL_6272229524073167827$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_INDETERMINATE_PROGRESS_INDETERMINATE_PROGRESS_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241F0e90f0b5f7219bbb39234ecaf2933b0f8f437345\u241F6272229524073167827:Task Label"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5479956740377309255$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_INDETERMINATE_PROGRESS_INDETERMINATE_PROGRESS_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Optional description");
            i18n_2 = MSG_EXTERNAL_5479956740377309255$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_INDETERMINATE_PROGRESS_INDETERMINATE_PROGRESS_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241F2212c4ea193c4d34f96198c84673338800cf7da5\u241F5479956740377309255:Optional description"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6742822694647502685$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_INDETERMINATE_PROGRESS_INDETERMINATE_PROGRESS_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" Start progress\n");
            i18n_4 = MSG_EXTERNAL_6742822694647502685$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_INDETERMINATE_PROGRESS_INDETERMINATE_PROGRESS_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241F022abd151cbf28d551dbdfca8f42965f6c41a363\u241F6742822694647502685: Start progress\n"])));
          }

          return [["id", "nui-demo-indeterminate-progress", "message", i18n_0, "helpText", i18n_2, 3, "show", "allowCancel", "cancel"], ["id", "nui-demo-indeterminate-progress-btn", "nui-button", "", "type", "button", "displayStyle", "primary", 1, "mt-1", 3, "click"], i18n_4];
        },
        template: function IndeterminateProgressExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-progress", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancel", function IndeterminateProgressExampleComponent_Template_nui_progress_cancel_0_listener() {
              return ctx.onCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndeterminateProgressExampleComponent_Template_button_click_1_listener() {
              return ctx.startProgress();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("allowCancel", true);
          }
        },
        directives: [_src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_1__["ProgressComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "3ILb":
    /*!************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/progress/progress-with-help-template/progress-with-help-template-example.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: ProgressWithHelpTemplateExampleComponent */

    /***/
    function ILb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressWithHelpTemplateExampleComponent", function () {
        return ProgressWithHelpTemplateExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/progress/progress.component */
      "FA8p");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      function ProgressWithHelpTemplateExampleComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ProgressWithHelpTemplateExampleComponent = /*#__PURE__*/function () {
        function ProgressWithHelpTemplateExampleComponent() {
          _classCallCheck(this, ProgressWithHelpTemplateExampleComponent);

          this.show = false;
          this.percent = 0;
        }

        _createClass(ProgressWithHelpTemplateExampleComponent, [{
          key: "toggleProgress",
          value: function toggleProgress() {
            var _this = this;

            this.show = !this.show;

            if (!this.show) {
              this.clearInterval();
              this.percent = 0;
            } else {
              this.intervalId = setInterval(function () {
                if (_this.percent < 100) {
                  _this.percent += 10;
                } else {
                  _this.clearInterval();

                  _this.show = false;
                }
              }, 1000);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.clearInterval();
          }
        }, {
          key: "clearInterval",
          value: function (_clearInterval2) {
            function clearInterval() {
              return _clearInterval2.apply(this, arguments);
            }

            clearInterval.toString = function () {
              return _clearInterval2.toString();
            };

            return clearInterval;
          }(function () {
            if (this.intervalId) {
              clearInterval(this.intervalId);
              this.intervalId = undefined;
            }
          })
        }]);

        return ProgressWithHelpTemplateExampleComponent;
      }();

      ProgressWithHelpTemplateExampleComponent.ɵfac = function ProgressWithHelpTemplateExampleComponent_Factory(t) {
        return new (t || ProgressWithHelpTemplateExampleComponent)();
      };

      ProgressWithHelpTemplateExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgressWithHelpTemplateExampleComponent,
        selectors: [["nui-progress-with-help-template-example"]],
        decls: 5,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6272229524073167827$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_PROGRESS_WITH_HELP_TEMPLATE_PROGRESS_WITH_HELP_TEMPLATE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Task Label");
            i18n_0 = MSG_EXTERNAL_6272229524073167827$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_PROGRESS_WITH_HELP_TEMPLATE_PROGRESS_WITH_HELP_TEMPLATE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241F0e90f0b5f7219bbb39234ecaf2933b0f8f437345\u241F6272229524073167827:Task Label"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1188051607297463158$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_PROGRESS_WITH_HELP_TEMPLATE_PROGRESS_WITH_HELP_TEMPLATE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Start/stop progress\n");
            i18n_2 = MSG_EXTERNAL_1188051607297463158$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_PROGRESS_WITH_HELP_TEMPLATE_PROGRESS_WITH_HELP_TEMPLATE_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([":\u241F111657fbd8e05c9f68da1bb281a64c3284b4a134\u241F1188051607297463158: Start/stop progress\n"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2495235867150799805$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_PROGRESS_WITH_HELP_TEMPLATE_PROGRESS_WITH_HELP_TEMPLATE_EXAMPLE_COMPONENT_TS__5 = goog.getMsg(" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ");
            i18n_4 = MSG_EXTERNAL_2495235867150799805$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_PROGRESS_WITH_HELP_TEMPLATE_PROGRESS_WITH_HELP_TEMPLATE_EXAMPLE_COMPONENT_TS__5;
          } else {
            i18n_4 = $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([":\u241F535e1384a824cf17049910cd7873220ac6a7e127\u241F2495235867150799805: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "])));
          }

          return [["id", "nui-demo-basic-progress", "message", i18n_0, 3, "show", "helpTemplateRef", "percent"], ["helpTemplate", ""], ["nui-button", "", "type", "button", "displayStyle", "primary", 1, "mt-1", 3, "click"], i18n_2, i18n_4];
        },
        template: function ProgressWithHelpTemplateExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-progress", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressWithHelpTemplateExampleComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgressWithHelpTemplateExampleComponent_Template_button_click_3_listener() {
              return ctx.toggleProgress();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("helpTemplateRef", _r0)("percent", ctx.percent);
          }
        },
        directives: [_src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_1__["ProgressComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "4eJT":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/progress-visual-test/progress-visual-test.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eJT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"container\">\n        <h3>Basic Popover</h3>\n            <nui-progress\n                id=\"nui-demo-basic-progress\"\n                message=\"Task Label\"\n                helpText=\"Optional description\"\n                [show]=\"show\"\n                [percent]=\"percent\">\n            </nui-progress>\n\n            <button id=\"nui-demo-start-basic-progress\" style=\"margin-top: 15px\" nui-button type=\"button\"\n                    (click)=\"startProgress()\"\n                    displayStyle=\"primary\">\n                Start progress\n            </button>\n        <hr />\n\n        <h3>Popover with stacked header and progress percentage</h3>\n            <nui-progress\n                id=\"nui-demo-stacked-header\"\n                [show]=\"show\"\n                [stacked]=\"true\"\n                [percent]=\"percent\"\n                [showNumber]=\"true\"\n                [allowCancel]=\"true\"\n                message=\"Task Label\"\n                helpText=\"Optional description\"\n                (cancel)=\"onCancel()\">\n            </nui-progress>\n        <hr />\n\n        <h3>Indeterminate Popover</h3>\n            <nui-progress\n                id=\"nui-demo-indeterminate-progress\"\n                [show]=\"show\"\n                [allowCancel]=\"true\"\n                message=\"Task Label\"\n                helpText=\"Optional description\"\n                (cancel)=\"onCancel()\">\n            </nui-progress>\n        <hr />\n</div>\n";
      /***/
    },

    /***/
    "6Rop":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/indeterminate-progress/indeterminate-progress.example.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Rop(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-progress id=\"nui-demo-indeterminate-progress\"\n              [show]=\"show\"\n              [allowCancel]=\"true\"\n              i18n-message\n              message=\"Task Label\"\n              i18n-helpText\n              helpText=\"Optional description\"\n              (cancel)=\"onCancel()\">\n</nui-progress>\n\n<button id=\"nui-demo-indeterminate-progress-btn\"\n        nui-button\n        class=\"mt-1\"\n        type=\"button\"\n        (click)=\"startProgress()\"\n        displayStyle=\"primary\"\n        i18n>\n    Start progress\n</button>\n";
      /***/
    },

    /***/
    "7I05":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/basic-progress/basic-progress.example.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function I05(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-progress id=\"nui-demo-basic-progress\"\n              i18n-message\n              message=\"Task Label\"\n              i18n-helpText\n              helpText=\"Optional description\"\n              [show]=\"show\"\n              [percent]=\"percent\">\n</nui-progress>\n\n<button id=\"nui-demo-start-basic-progress\"\n        nui-button\n        class=\"mt-1\"\n        type=\"button\"\n        (click)=\"startProgress()\"\n        displayStyle=\"primary\"\n        i18n>\n    Start progress\n</button>\n";
      /***/
    },

    /***/
    "8qdf":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/progress-compact/progress-compact.example.component.ts ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qdf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-progress-compact-example\",\n    templateUrl: \"./progress-compact.example.component.html\",\n})\nexport class ProgressCompactExampleComponent {\n    public show = false;\n\n    public toggleProgress() {\n        this.show = !this.show;\n    }\n}\n";
      /***/
    },

    /***/
    "AuMd":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/stacked-header/stacked-header.example.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AuMd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-progress id=\"nui-demo-stacked-header\"\n              [show]=\"show\"\n              [stacked]=\"true\"\n              [percent]=\"percent\"\n              [showNumber]=\"true\"\n              [allowCancel]=\"true\"\n              i18n-message\n              message=\"Task Label\"\n              i18n-helpText\n              helpText=\"Optional description\"\n              (cancel)=\"onCancel()\">\n</nui-progress>\n\n<button id=\"nui-demo-stacked-header-btn\"\n        nui-button\n        class=\"mt-1\"\n        type=\"button\"\n        (click)=\"startProgress()\"\n        displayStyle=\"primary\"\n        i18n>\n    Start progress\n</button>\n";
      /***/
    },

    /***/
    "EUBV":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/progress-visual-test/progress-visual-test.component.ts ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EUBV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-progress-visual-test\",\n    templateUrl: \"./progress-visual-test.component.html\",\n})\nexport class ProgressVisualTestComponent {\n    public show = false;\n    public percent = 50;\n    public isCanceled = false;\n\n    public startProgress() {\n        this.show = true;\n    }\n\n    public onCancel() {\n        this.isCanceled = true;\n        this.show = false;\n        this.percent = 0;\n    }\n}\n";
      /***/
    },

    /***/
    "F/go":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/progress-with-help-template/progress-with-help-template-example.component.ts ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FGo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import {Component, OnDestroy} from \"@angular/core\";\n\n@Component({\n    selector: \"nui-progress-with-help-template-example\",\n    templateUrl: \"./progress-with-help-template-example.component.html\",\n})\nexport class ProgressWithHelpTemplateExampleComponent implements OnDestroy {\n\n    public show = false;\n    public percent = 0;\n    private intervalId?: NodeJS.Timeout;\n\n    public toggleProgress() {\n        this.show = !this.show;\n\n        if (!this.show) {\n            this.clearInterval();\n            this.percent = 0;\n        } else {\n            this.intervalId = setInterval(() => {\n                if (this.percent < 100) {\n                    this.percent += 10;\n                } else {\n                    this.clearInterval();\n                    this.show = false;\n                }\n            }, 1000);\n        }\n    }\n\n    public ngOnDestroy() {\n        this.clearInterval();\n    }\n\n    private clearInterval() {\n        if (this.intervalId) {\n            clearInterval(this.intervalId);\n            this.intervalId = undefined;\n        }\n    }\n}\n";
      /***/
    },

    /***/
    "Ha/3":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/progress-compact/progress-compact.example.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ha3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-progress [show]=\"show\"\n              compactMode=\"true\">\n</nui-progress>\n\n<button nui-button\n        class=\"mt-1\"\n        type=\"button\"\n        (click)=\"toggleProgress()\"\n        displayStyle=\"primary\"\n        i18n>\n    Start/stop progress\n</button>\n";
      /***/
    },

    /***/
    "IiRQ":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/index.ts ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function IiRQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export { ProgressExampleComponent } from \"./progress-docs/progress-docs.example.component\";\nexport { BasicProgressExampleComponent } from \"./basic-progress/basic-progress.example.component\";\nexport { StackedHeaderProgressExampleComponent } from \"./stacked-header/stacked-header.example.component\";\nexport { IndeterminateProgressExampleComponent } from \"./indeterminate-progress/indeterminate-progress.example.component\";\nexport { ProgressVisualTestComponent } from \"./progress-visual-test/progress-visual-test.component\";\nexport { ProgressTestComponent } from \"./progress-test/progress-test.component\";\nexport { ProgressCompactExampleComponent } from \"./progress-compact/progress-compact.example.component\";\nexport { ProgressWithHelpTemplateExampleComponent } from \"./progress-with-help-template/progress-with-help-template-example.component\";\n";
      /***/
    },

    /***/
    "LwzK":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/progress.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LwzK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiDocsModule,\n    NuiMessageModule,\n    NuiProgressModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    BasicProgressExampleComponent,\n    IndeterminateProgressExampleComponent,\n    ProgressCompactExampleComponent,\n    ProgressExampleComponent,\n    ProgressVisualTestComponent,\n    ProgressTestComponent,\n    ProgressWithHelpTemplateExampleComponent,\n    StackedHeaderProgressExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: ProgressExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"progress-visual-test\",\n        component: ProgressVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"progress-test\",\n        component: ProgressTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiProgressModule,\n        NuiMessageModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        BasicProgressExampleComponent,\n        IndeterminateProgressExampleComponent,\n        ProgressCompactExampleComponent,\n        ProgressExampleComponent,\n        ProgressVisualTestComponent,\n        ProgressTestComponent,\n        ProgressWithHelpTemplateExampleComponent,\n        StackedHeaderProgressExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class ProgressModule {\n}\n";
      /***/
    },

    /***/
    "VWtZ":
    /*!**********************************************************************************************!*\
      !*** ./demo/src/components/demo/progress/basic-progress/basic-progress.example.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: BasicProgressExampleComponent */

    /***/
    function VWtZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicProgressExampleComponent", function () {
        return BasicProgressExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/progress/progress.component */
      "FA8p");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var BasicProgressExampleComponent = /*#__PURE__*/function () {
        function BasicProgressExampleComponent() {
          _classCallCheck(this, BasicProgressExampleComponent);

          this.show = false;
          this.percent = 0;
          this.isCanceled = false;
          this.stop = undefined;
        }

        _createClass(BasicProgressExampleComponent, [{
          key: "startProgress",
          value: function startProgress() {
            var _this2 = this;

            this.clearInterval();
            this.show = true;
            this.stop = setInterval(function () {
              if (_this2.percent < 100) {
                _this2.percent += 10;
              } else {
                _this2.onCancel();
              }
            }, 1000);
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.clearInterval();
            this.isCanceled = true;
            this.show = false;
            this.stop = undefined;
            this.percent = 0;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.clearInterval();
          }
        }, {
          key: "clearInterval",
          value: function (_clearInterval3) {
            function clearInterval() {
              return _clearInterval3.apply(this, arguments);
            }

            clearInterval.toString = function () {
              return _clearInterval3.toString();
            };

            return clearInterval;
          }(function () {
            if (this.stop) {
              clearInterval(this.stop);
            }
          })
        }]);

        return BasicProgressExampleComponent;
      }();

      BasicProgressExampleComponent.ɵfac = function BasicProgressExampleComponent_Factory(t) {
        return new (t || BasicProgressExampleComponent)();
      };

      BasicProgressExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BasicProgressExampleComponent,
        selectors: [["nui-basic-progress-example"]],
        decls: 3,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6272229524073167827$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_BASIC_PROGRESS_BASIC_PROGRESS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Task Label");
            i18n_0 = MSG_EXTERNAL_6272229524073167827$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_BASIC_PROGRESS_BASIC_PROGRESS_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([":\u241F0e90f0b5f7219bbb39234ecaf2933b0f8f437345\u241F6272229524073167827:Task Label"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5479956740377309255$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_BASIC_PROGRESS_BASIC_PROGRESS_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Optional description");
            i18n_2 = MSG_EXTERNAL_5479956740377309255$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_BASIC_PROGRESS_BASIC_PROGRESS_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([":\u241F2212c4ea193c4d34f96198c84673338800cf7da5\u241F5479956740377309255:Optional description"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6742822694647502685$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_BASIC_PROGRESS_BASIC_PROGRESS_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" Start progress\n");
            i18n_4 = MSG_EXTERNAL_6742822694647502685$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_BASIC_PROGRESS_BASIC_PROGRESS_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([":\u241F022abd151cbf28d551dbdfca8f42965f6c41a363\u241F6742822694647502685: Start progress\n"])));
          }

          return [["id", "nui-demo-basic-progress", "message", i18n_0, "helpText", i18n_2, 3, "show", "percent"], ["id", "nui-demo-start-basic-progress", "nui-button", "", "type", "button", "displayStyle", "primary", 1, "mt-1", 3, "click"], i18n_4];
        },
        template: function BasicProgressExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-progress", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicProgressExampleComponent_Template_button_click_1_listener() {
              return ctx.startProgress();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("percent", ctx.percent);
          }
        },
        directives: [_src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_1__["ProgressComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "YAEd":
    /*!**************************************************************************************************!*\
      !*** ./demo/src/components/demo/progress/progress-compact/progress-compact.example.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ProgressCompactExampleComponent */

    /***/
    function YAEd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressCompactExampleComponent", function () {
        return ProgressCompactExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/progress/progress.component */
      "FA8p");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ProgressCompactExampleComponent = /*#__PURE__*/function () {
        function ProgressCompactExampleComponent() {
          _classCallCheck(this, ProgressCompactExampleComponent);

          this.show = false;
        }

        _createClass(ProgressCompactExampleComponent, [{
          key: "toggleProgress",
          value: function toggleProgress() {
            this.show = !this.show;
          }
        }]);

        return ProgressCompactExampleComponent;
      }();

      ProgressCompactExampleComponent.ɵfac = function ProgressCompactExampleComponent_Factory(t) {
        return new (t || ProgressCompactExampleComponent)();
      };

      ProgressCompactExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgressCompactExampleComponent,
        selectors: [["nui-progress-compact-example"]],
        decls: 3,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1188051607297463158$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_PROGRESS_COMPACT_PROGRESS_COMPACT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Start/stop progress\n");
            i18n_0 = MSG_EXTERNAL_1188051607297463158$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_PROGRESS_COMPACT_PROGRESS_COMPACT_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([":\u241F111657fbd8e05c9f68da1bb281a64c3284b4a134\u241F1188051607297463158: Start/stop progress\n"])));
          }

          return [["compactMode", "true", 3, "show"], ["nui-button", "", "type", "button", "displayStyle", "primary", 1, "mt-1", 3, "click"], i18n_0];
        },
        template: function ProgressCompactExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-progress", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgressCompactExampleComponent_Template_button_click_1_listener() {
              return ctx.toggleProgress();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show);
          }
        },
        directives: [_src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_1__["ProgressComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Zq7a":
    /*!**************************************************************************************************!*\
      !*** ./demo/src/components/demo/progress/progress-visual-test/progress-visual-test.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ProgressVisualTestComponent */

    /***/
    function Zq7a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressVisualTestComponent", function () {
        return ProgressVisualTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/progress/progress.component */
      "FA8p");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ProgressVisualTestComponent = /*#__PURE__*/function () {
        function ProgressVisualTestComponent() {
          _classCallCheck(this, ProgressVisualTestComponent);

          this.show = false;
          this.percent = 50;
          this.isCanceled = false;
        }

        _createClass(ProgressVisualTestComponent, [{
          key: "startProgress",
          value: function startProgress() {
            this.show = true;
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.isCanceled = true;
            this.show = false;
            this.percent = 0;
          }
        }]);

        return ProgressVisualTestComponent;
      }();

      ProgressVisualTestComponent.ɵfac = function ProgressVisualTestComponent_Factory(t) {
        return new (t || ProgressVisualTestComponent)();
      };

      ProgressVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgressVisualTestComponent,
        selectors: [["nui-progress-visual-test"]],
        decls: 15,
        vars: 9,
        consts: [[1, "container"], ["id", "nui-demo-basic-progress", "message", "Task Label", "helpText", "Optional description", 3, "show", "percent"], ["id", "nui-demo-start-basic-progress", "nui-button", "", "type", "button", "displayStyle", "primary", 2, "margin-top", "15px", 3, "click"], ["id", "nui-demo-stacked-header", "message", "Task Label", "helpText", "Optional description", 3, "show", "stacked", "percent", "showNumber", "allowCancel", "cancel"], ["id", "nui-demo-indeterminate-progress", "message", "Task Label", "helpText", "Optional description", 3, "show", "allowCancel", "cancel"]],
        template: function ProgressVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Basic Popover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-progress", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgressVisualTestComponent_Template_button_click_4_listener() {
              return ctx.startProgress();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Start progress ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Popover with stacked header and progress percentage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nui-progress", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancel", function ProgressVisualTestComponent_Template_nui_progress_cancel_9_listener() {
              return ctx.onCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Indeterminate Popover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-progress", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancel", function ProgressVisualTestComponent_Template_nui_progress_cancel_13_listener() {
              return ctx.onCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("percent", ctx.percent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("stacked", true)("percent", ctx.percent)("showNumber", true)("allowCancel", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("allowCancel", true);
          }
        },
        directives: [_src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_1__["ProgressComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "bgV1":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/progress-docs/progress-docs.example.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bgV1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-progress-docs-example\",\n    templateUrl: \"./progress-docs.example.component.html\",\n})\nexport class ProgressExampleComponent {}\n";
      /***/
    },

    /***/
    "eBzQ":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/progress-with-help-template/progress-with-help-template-example.component.html ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eBzQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-progress id=\"nui-demo-basic-progress\"\n              i18n-message\n              message=\"Task Label\"\n              [show]=\"show\"\n              [helpTemplateRef]=\"helpTemplate\"\n              [percent]=\"percent\">\n</nui-progress>\n<ng-template #helpTemplate>\n    <span i18n>\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',\n        making it look like readable English.\n    </span>\n</ng-template>\n<button nui-button class=\"mt-1\" type=\"button\" (click)=\"toggleProgress()\" displayStyle=\"primary\" i18n>\n    Start/stop progress\n</button>\n";
      /***/
    },

    /***/
    "egSN":
    /*!***********************************************************************************************************!*\
      !*** ./demo/src/components/demo/progress sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \***********************************************************************************************************/

    /*! no static exports found */

    /***/
    function egSN(module, exports, __webpack_require__) {
      var map = {
        "./basic-progress/basic-progress.example.component.html": "7I05",
        "./basic-progress/basic-progress.example.component.ts": "xgmB",
        "./indeterminate-progress/indeterminate-progress.example.component.html": "6Rop",
        "./indeterminate-progress/indeterminate-progress.example.component.ts": "gpQx",
        "./index.ts": "IiRQ",
        "./progress-compact/progress-compact.example.component.html": "Ha/3",
        "./progress-compact/progress-compact.example.component.ts": "8qdf",
        "./progress-docs/progress-docs.example.component.html": "eqow",
        "./progress-docs/progress-docs.example.component.ts": "bgV1",
        "./progress-test/progress-test.component.html": "rmCn",
        "./progress-test/progress-test.component.ts": "oFs4",
        "./progress-visual-test/progress-visual-test.component.html": "4eJT",
        "./progress-visual-test/progress-visual-test.component.ts": "EUBV",
        "./progress-with-help-template/progress-with-help-template-example.component.html": "eBzQ",
        "./progress-with-help-template/progress-with-help-template-example.component.ts": "F/go",
        "./progress.module.ts": "LwzK",
        "./stacked-header/stacked-header.example.component.html": "AuMd",
        "./stacked-header/stacked-header.example.component.ts": "jF77"
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
      webpackContext.id = "egSN";
      /***/
    },

    /***/
    "eqow":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/progress-docs/progress-docs.example.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eqow(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Required Modules</h2>\n    <ul>\n        <li>\n            <code>NuiProgressModule</code>\n        </li>\n    </ul>\n\n<h2>Basic Usage</h2>\n\n<p>In order to use progress component, you need to pass <code>show</code>, <code>percent</code> and <code>message</code> bindings.</p>\n\n<nui-example-wrapper filenamePrefix=\"basic-progress\" exampleTitle=\"Basic Usage\">\n    <nui-basic-progress-example></nui-basic-progress-example>\n</nui-example-wrapper>\n\n<h2>Stacked Header</h2>\n\n<p>\n    Progress header could be placed on the left side. You need to pass <code>stacked</code> as true for that.\n    Progress percents could be shown by using <code>showNumber</code> as true.\n    Progress could be canceled by passing <code>allowCancel</code> as true and <code>cancelProgress</code> function.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"stacked-header\" exampleTitle=\"Stacked Header\">\n    <nui-stacked-header-example></nui-stacked-header-example>\n</nui-example-wrapper>\n\n<h2>Indeterminate</h2>\n\n<p>In case <code>percent</code> was not passed, indeterminate progress will be used.</p>\n\n<nui-example-wrapper filenamePrefix=\"indeterminate-progress\" exampleTitle=\"Indeterminate\">\n    <nui-indeterminate-progress-example></nui-indeterminate-progress-example>\n</nui-example-wrapper>\n\n<h2>Compact</h2>\n\n<p>\n    To hide all elements from Progress, except for progress bar, and to remove all margins from progress bar set\n    <code>compactMode</code> to true.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"progress-compact\" exampleTitle=\"Compact\">\n    <nui-progress-compact-example></nui-progress-compact-example>\n</nui-example-wrapper>\n\n<h2>Custom Help Template</h2>\n\n<p>\n    In order to customize the help content that appears below the progress bar, you can pass a template\n    via the <code>helpTemplateRef</code> input.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    When the <code>helpTemplateRef</code> input is used, there's no need to pass a value to the\n    <code>helpText</code> input.\n</nui-message>\n\n<nui-example-wrapper filenamePrefix=\"progress-with-help-template\" exampleTitle=\"Custom Help Template\">\n    <nui-progress-with-help-template-example></nui-progress-with-help-template-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "fnoY":
    /*!**********************************************************************************************!*\
      !*** ./demo/src/components/demo/progress/stacked-header/stacked-header.example.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: StackedHeaderProgressExampleComponent */

    /***/
    function fnoY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StackedHeaderProgressExampleComponent", function () {
        return StackedHeaderProgressExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/progress/progress.component */
      "FA8p");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var StackedHeaderProgressExampleComponent = /*#__PURE__*/function () {
        function StackedHeaderProgressExampleComponent() {
          _classCallCheck(this, StackedHeaderProgressExampleComponent);

          this.show = false;
          this.percent = 0;
          this.isCanceled = false;
          this.stop = undefined;
        }

        _createClass(StackedHeaderProgressExampleComponent, [{
          key: "startProgress",
          value: function startProgress() {
            var _this3 = this;

            this.clearInterval();
            this.show = true;
            this.stop = setInterval(function () {
              if (_this3.percent < 100) {
                _this3.percent += 10;
              } else {
                _this3.onCancel();
              }
            }, 1000);
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.clearInterval();
            this.isCanceled = true;
            this.show = false;
            this.stop = undefined;
            this.percent = 0;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.clearInterval();
          }
        }, {
          key: "clearInterval",
          value: function (_clearInterval4) {
            function clearInterval() {
              return _clearInterval4.apply(this, arguments);
            }

            clearInterval.toString = function () {
              return _clearInterval4.toString();
            };

            return clearInterval;
          }(function () {
            if (this.stop) {
              clearInterval(this.stop);
            }
          })
        }]);

        return StackedHeaderProgressExampleComponent;
      }();

      StackedHeaderProgressExampleComponent.ɵfac = function StackedHeaderProgressExampleComponent_Factory(t) {
        return new (t || StackedHeaderProgressExampleComponent)();
      };

      StackedHeaderProgressExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StackedHeaderProgressExampleComponent,
        selectors: [["nui-stacked-header-example"]],
        decls: 3,
        vars: 5,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6272229524073167827$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_STACKED_HEADER_STACKED_HEADER_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Task Label");
            i18n_0 = MSG_EXTERNAL_6272229524073167827$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_STACKED_HEADER_STACKED_HEADER_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([":\u241F0e90f0b5f7219bbb39234ecaf2933b0f8f437345\u241F6272229524073167827:Task Label"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5479956740377309255$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_STACKED_HEADER_STACKED_HEADER_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Optional description");
            i18n_2 = MSG_EXTERNAL_5479956740377309255$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_STACKED_HEADER_STACKED_HEADER_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([":\u241F2212c4ea193c4d34f96198c84673338800cf7da5\u241F5479956740377309255:Optional description"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6742822694647502685$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_STACKED_HEADER_STACKED_HEADER_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" Start progress\n");
            i18n_4 = MSG_EXTERNAL_6742822694647502685$$DEMO_SRC_COMPONENTS_DEMO_PROGRESS_STACKED_HEADER_STACKED_HEADER_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([":\u241F022abd151cbf28d551dbdfca8f42965f6c41a363\u241F6742822694647502685: Start progress\n"])));
          }

          return [["id", "nui-demo-stacked-header", "message", i18n_0, "helpText", i18n_2, 3, "show", "stacked", "percent", "showNumber", "allowCancel", "cancel"], ["id", "nui-demo-stacked-header-btn", "nui-button", "", "type", "button", "displayStyle", "primary", 1, "mt-1", 3, "click"], i18n_4];
        },
        template: function StackedHeaderProgressExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-progress", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancel", function StackedHeaderProgressExampleComponent_Template_nui_progress_cancel_0_listener() {
              return ctx.onCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StackedHeaderProgressExampleComponent_Template_button_click_1_listener() {
              return ctx.startProgress();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("stacked", true)("percent", ctx.percent)("showNumber", true)("allowCancel", true);
          }
        },
        directives: [_src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_1__["ProgressComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "gilO":
    /*!********************************************************************************************!*\
      !*** ./demo/src/components/demo/progress/progress-docs/progress-docs.example.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: ProgressExampleComponent */

    /***/
    function gilO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressExampleComponent", function () {
        return ProgressExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */
      "CVg4");
      /* harmony import */


      var _basic_progress_basic_progress_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../basic-progress/basic-progress.example.component */
      "VWtZ");
      /* harmony import */


      var _stacked_header_stacked_header_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../stacked-header/stacked-header.example.component */
      "fnoY");
      /* harmony import */


      var _indeterminate_progress_indeterminate_progress_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../indeterminate-progress/indeterminate-progress.example.component */
      "0b2H");
      /* harmony import */


      var _progress_compact_progress_compact_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../progress-compact/progress-compact.example.component */
      "YAEd");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");
      /* harmony import */


      var _progress_with_help_template_progress_with_help_template_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../progress-with-help-template/progress-with-help-template-example.component */
      "3ILb");

      var ProgressExampleComponent = function ProgressExampleComponent() {
        _classCallCheck(this, ProgressExampleComponent);
      };

      ProgressExampleComponent.ɵfac = function ProgressExampleComponent_Factory(t) {
        return new (t || ProgressExampleComponent)();
      };

      ProgressExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgressExampleComponent,
        selectors: [["nui-progress-docs-example"]],
        decls: 74,
        vars: 1,
        consts: [["filenamePrefix", "basic-progress", "exampleTitle", "Basic Usage"], ["filenamePrefix", "stacked-header", "exampleTitle", "Stacked Header"], ["filenamePrefix", "indeterminate-progress", "exampleTitle", "Indeterminate"], ["filenamePrefix", "progress-compact", "exampleTitle", "Compact"], ["type", "info", 3, "allowDismiss"], ["filenamePrefix", "progress-with-help-template", "exampleTitle", "Custom Help Template"]],
        template: function ProgressExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiProgressModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "In order to use progress component, you need to pass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "show");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "percent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " bindings.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nui-example-wrapper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "nui-basic-progress-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Stacked Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Progress header could be placed on the left side. You need to pass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "stacked");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " as true for that. Progress percents could be shown by using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "showNumber");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " as true. Progress could be canceled by passing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "allowCancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " as true and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "cancelProgress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " function.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "nui-stacked-header-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Indeterminate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "In case ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "percent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " was not passed, indeterminate progress will be used.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "nui-indeterminate-progress-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Compact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " To hide all elements from Progress, except for progress bar, and to remove all margins from progress bar set ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "compactMode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " to true.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "nui-progress-compact-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Custom Help Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " In order to customize the help content that appears below the progress bar, you can pass a template via the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "helpTemplateRef");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nui-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " When the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "helpTemplateRef");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " input is used, there's no need to pass a value to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "helpText");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "nui-progress-with-help-template-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _basic_progress_basic_progress_example_component__WEBPACK_IMPORTED_MODULE_2__["BasicProgressExampleComponent"], _stacked_header_stacked_header_example_component__WEBPACK_IMPORTED_MODULE_3__["StackedHeaderProgressExampleComponent"], _indeterminate_progress_indeterminate_progress_example_component__WEBPACK_IMPORTED_MODULE_4__["IndeterminateProgressExampleComponent"], _progress_compact_progress_compact_example_component__WEBPACK_IMPORTED_MODULE_5__["ProgressCompactExampleComponent"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"], _progress_with_help_template_progress_with_help_template_example_component__WEBPACK_IMPORTED_MODULE_7__["ProgressWithHelpTemplateExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "gpQx":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/indeterminate-progress/indeterminate-progress.example.component.ts ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gpQx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnDestroy } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-indeterminate-progress-example\",\n    templateUrl: \"./indeterminate-progress.example.component.html\",\n})\nexport class IndeterminateProgressExampleComponent implements OnDestroy {\n    public show = false;\n    public isCanceled = false;\n    private stop: any = undefined;\n\n    public startProgress() {\n        this.clearInterval();\n        this.show = true;\n    }\n\n    public onCancel() {\n        this.clearInterval();\n        this.isCanceled = true;\n        this.show = false;\n        this.stop = undefined;\n    }\n\n    public ngOnDestroy() {\n        this.clearInterval();\n    }\n\n    private clearInterval() {\n        if (this.stop) {\n            clearInterval(this.stop);\n        }\n    }\n}\n";
      /***/
    },

    /***/
    "jF77":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/stacked-header/stacked-header.example.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jF77(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnDestroy } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-stacked-header-example\",\n    templateUrl: \"./stacked-header.example.component.html\",\n})\nexport class StackedHeaderProgressExampleComponent implements OnDestroy {\n\n    public show = false;\n    public percent = 0;\n    public isCanceled = false;\n    private stop: any = undefined;\n\n    public startProgress() {\n        this.clearInterval();\n\n        this.show = true;\n        this.stop = setInterval(() => {\n            if (this.percent < 100) {\n                this.percent += 10;\n            } else {\n                this.onCancel();\n            }\n        }, 1000);\n    }\n\n    public onCancel() {\n        this.clearInterval();\n        this.isCanceled = true;\n        this.show = false;\n        this.stop = undefined;\n        this.percent = 0;\n    }\n\n    public ngOnDestroy() {\n        this.clearInterval();\n    }\n\n    private clearInterval() {\n        if (this.stop) {\n            clearInterval(this.stop);\n        }\n    }\n}\n";
      /***/
    },

    /***/
    "oFs4":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/progress-test/progress-test.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oFs4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-progress-test\",\n    templateUrl: \"./progress-test.component.html\",\n})\nexport class ProgressTestComponent {\n    public show = false;\n    public percent = 50;\n    public isCanceled = false;\n\n    public startProgress() {\n        this.show = true;\n    }\n\n    public toggleProgress() {\n        this.show = !this.show;\n    }\n\n    public onCancel() {\n        this.isCanceled = true;\n        this.show = false;\n        this.percent = 0;\n    }\n}\n";
      /***/
    },

    /***/
    "ol/H":
    /*!****************************************************!*\
      !*** ./demo/src/components/demo/progress/index.ts ***!
      \****************************************************/

    /*! exports provided: ProgressExampleComponent, BasicProgressExampleComponent, StackedHeaderProgressExampleComponent, IndeterminateProgressExampleComponent, ProgressVisualTestComponent, ProgressTestComponent, ProgressCompactExampleComponent, ProgressWithHelpTemplateExampleComponent */

    /***/
    function olH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _progress_docs_progress_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./progress-docs/progress-docs.example.component */
      "gilO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProgressExampleComponent", function () {
        return _progress_docs_progress_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["ProgressExampleComponent"];
      });
      /* harmony import */


      var _basic_progress_basic_progress_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basic-progress/basic-progress.example.component */
      "VWtZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BasicProgressExampleComponent", function () {
        return _basic_progress_basic_progress_example_component__WEBPACK_IMPORTED_MODULE_1__["BasicProgressExampleComponent"];
      });
      /* harmony import */


      var _stacked_header_stacked_header_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stacked-header/stacked-header.example.component */
      "fnoY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StackedHeaderProgressExampleComponent", function () {
        return _stacked_header_stacked_header_example_component__WEBPACK_IMPORTED_MODULE_2__["StackedHeaderProgressExampleComponent"];
      });
      /* harmony import */


      var _indeterminate_progress_indeterminate_progress_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./indeterminate-progress/indeterminate-progress.example.component */
      "0b2H");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IndeterminateProgressExampleComponent", function () {
        return _indeterminate_progress_indeterminate_progress_example_component__WEBPACK_IMPORTED_MODULE_3__["IndeterminateProgressExampleComponent"];
      });
      /* harmony import */


      var _progress_visual_test_progress_visual_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./progress-visual-test/progress-visual-test.component */
      "Zq7a");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProgressVisualTestComponent", function () {
        return _progress_visual_test_progress_visual_test_component__WEBPACK_IMPORTED_MODULE_4__["ProgressVisualTestComponent"];
      });
      /* harmony import */


      var _progress_test_progress_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./progress-test/progress-test.component */
      "v3M+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProgressTestComponent", function () {
        return _progress_test_progress_test_component__WEBPACK_IMPORTED_MODULE_5__["ProgressTestComponent"];
      });
      /* harmony import */


      var _progress_compact_progress_compact_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./progress-compact/progress-compact.example.component */
      "YAEd");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProgressCompactExampleComponent", function () {
        return _progress_compact_progress_compact_example_component__WEBPACK_IMPORTED_MODULE_6__["ProgressCompactExampleComponent"];
      });
      /* harmony import */


      var _progress_with_help_template_progress_with_help_template_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./progress-with-help-template/progress-with-help-template-example.component */
      "3ILb");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProgressWithHelpTemplateExampleComponent", function () {
        return _progress_with_help_template_progress_with_help_template_example_component__WEBPACK_IMPORTED_MODULE_7__["ProgressWithHelpTemplateExampleComponent"];
      });
      /***/

    },

    /***/
    "rmCn":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/progress-test/progress-test.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rmCn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <nui-indeterminate-progress-example></nui-indeterminate-progress-example>\n    <hr />\n    <nui-progress-compact-example id=\"nui-demo-compact-progress\"></nui-progress-compact-example>\n</div>";
      /***/
    },

    /***/
    "v3M+":
    /*!************************************************************************************!*\
      !*** ./demo/src/components/demo/progress/progress-test/progress-test.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ProgressTestComponent */

    /***/
    function v3M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressTestComponent", function () {
        return ProgressTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _indeterminate_progress_indeterminate_progress_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../indeterminate-progress/indeterminate-progress.example.component */
      "0b2H");
      /* harmony import */


      var _progress_compact_progress_compact_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../progress-compact/progress-compact.example.component */
      "YAEd");

      var ProgressTestComponent = /*#__PURE__*/function () {
        function ProgressTestComponent() {
          _classCallCheck(this, ProgressTestComponent);

          this.show = false;
          this.percent = 50;
          this.isCanceled = false;
        }

        _createClass(ProgressTestComponent, [{
          key: "startProgress",
          value: function startProgress() {
            this.show = true;
          }
        }, {
          key: "toggleProgress",
          value: function toggleProgress() {
            this.show = !this.show;
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.isCanceled = true;
            this.show = false;
            this.percent = 0;
          }
        }]);

        return ProgressTestComponent;
      }();

      ProgressTestComponent.ɵfac = function ProgressTestComponent_Factory(t) {
        return new (t || ProgressTestComponent)();
      };

      ProgressTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgressTestComponent,
        selectors: [["nui-progress-test"]],
        decls: 4,
        vars: 0,
        consts: [[1, "container"], ["id", "nui-demo-compact-progress"]],
        template: function ProgressTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nui-indeterminate-progress-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-progress-compact-example", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_indeterminate_progress_indeterminate_progress_example_component__WEBPACK_IMPORTED_MODULE_1__["IndeterminateProgressExampleComponent"], _progress_compact_progress_compact_example_component__WEBPACK_IMPORTED_MODULE_2__["ProgressCompactExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "xgmB":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/progress/basic-progress/basic-progress.example.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xgmB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnDestroy } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-basic-progress-example\",\n    templateUrl: \"./basic-progress.example.component.html\",\n})\nexport class BasicProgressExampleComponent implements OnDestroy {\n\n    public show = false;\n    public percent = 0;\n    public isCanceled = false;\n    private stop: any = undefined;\n\n    public startProgress() {\n        this.clearInterval();\n\n        this.show = true;\n        this.stop = setInterval(() => {\n            if (this.percent < 100) {\n                this.percent += 10;\n            } else {\n                this.onCancel();\n            }\n        }, 1000);\n    }\n\n    private onCancel() {\n        this.clearInterval();\n        this.isCanceled = true;\n        this.show = false;\n        this.stop = undefined;\n        this.percent = 0;\n    }\n\n    public ngOnDestroy() {\n        this.clearInterval();\n    }\n\n    private clearInterval() {\n        if (this.stop) {\n            clearInterval(this.stop);\n        }\n    }\n}\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-progress-progress-module-es5.js.map