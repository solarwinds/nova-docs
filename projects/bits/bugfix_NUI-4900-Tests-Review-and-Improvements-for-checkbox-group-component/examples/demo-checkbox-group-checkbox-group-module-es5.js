(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-checkbox-group-checkbox-group-module"], {
    /***/
    "+Uf0":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/checkbox-group-docs/checkbox-group-docs.example.component.ts ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Uf0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-checkbox-group-docs-example\",\n    templateUrl: \"./checkbox-group-docs.example.component.html\",\n})\nexport class CheckboxGroupExampleComponent {}\n";
      /***/
    },

    /***/
    "19SM":
    /*!*****************************************************************************************************************!*\
      !*** ./demo/src/components/demo/checkbox-group sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*****************************************************************************************************************/

    /*! no static exports found */

    /***/
    function SM(module, exports, __webpack_require__) {
      var map = {
        "./checkbox-group-basic/checkbox-group-basic.example.component.html": "dmI9",
        "./checkbox-group-basic/checkbox-group-basic.example.component.ts": "Z7g5",
        "./checkbox-group-docs/checkbox-group-docs.example.component.html": "lGTv",
        "./checkbox-group-docs/checkbox-group-docs.example.component.ts": "+Uf0",
        "./checkbox-group-in-form/checkbox-group-in-form.example.component.html": "NvPO",
        "./checkbox-group-in-form/checkbox-group-in-form.example.component.ts": "Y7Yd",
        "./checkbox-group-inline/checkbox-group-inline.example.component.html": "FsbB",
        "./checkbox-group-inline/checkbox-group-inline.example.component.ts": "8Z72",
        "./checkbox-group-justified/checkbox-group-justified.example.component.html": "JoKC",
        "./checkbox-group-justified/checkbox-group-justified.example.component.ts": "EiW/",
        "./checkbox-group-test/checkbox-group-test.component.html": "Ut/2",
        "./checkbox-group-test/checkbox-group-test.component.ts": "fuQ5",
        "./checkbox-group-visual-test/checkbox-group-visual-test.component.html": "j3x3",
        "./checkbox-group-visual-test/checkbox-group-visual-test.component.ts": "EFDT",
        "./checkbox-group.module.ts": "JpOM",
        "./index.ts": "FDVP"
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
      webpackContext.id = "19SM";
      /***/
    },

    /***/
    "5OyA":
    /*!********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/checkbox-group/checkbox-group-in-form/checkbox-group-in-form.example.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: CheckboxGroupInFormExampleComponent */

    /***/
    function OyA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxGroupInFormExampleComponent", function () {
        return CheckboxGroupInFormExampleComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox-group.component */
      "s1l0");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");

      function CheckboxGroupInFormExampleComponent_nui_message_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-message", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](2, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("allowDismiss", true);
        }
      }

      function CheckboxGroupInFormExampleComponent_nui_checkbox_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vegetable_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", vegetable_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", vegetable_r2, " ");
        }
      }

      var CheckboxGroupInFormExampleComponent = /*#__PURE__*/function () {
        function CheckboxGroupInFormExampleComponent(formBuilder, toastService) {
          _classCallCheck(this, CheckboxGroupInFormExampleComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.cabbage = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral(["Cabbage"])));
          this.potato = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Potato"])));
          this.tomato = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Tomato"])));
          this.carrot = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Carrot"])));
          this.vegetables = [this.cabbage, this.potato, this.tomato, this.carrot];
          this.selectedVegetables = [this.cabbage];
        }

        _createClass(CheckboxGroupInFormExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.formBuilder.group({
              checkboxGroup: this.formBuilder.control([this.cabbage, this.potato], [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)])
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            console.log(this.myForm);
            this.toastService.success({
              message: $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Your form is valid!"])))
            });
          }
        }, {
          key: "isChecked",
          value: function isChecked(vegetable) {
            return this.selectedVegetables.indexOf(vegetable) > -1;
          }
        }]);

        return CheckboxGroupInFormExampleComponent;
      }();

      CheckboxGroupInFormExampleComponent.ɵfac = function CheckboxGroupInFormExampleComponent_Factory(t) {
        return new (t || CheckboxGroupInFormExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
      };

      CheckboxGroupInFormExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CheckboxGroupInFormExampleComponent,
        selectors: [["nui-checkbox-group-in-form-example"]],
        decls: 7,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_935187492052582731$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_GROUP_CHECKBOX_GROUP_IN_FORM_CHECKBOX_GROUP_IN_FORM_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Submit");
            i18n_0 = MSG_EXTERNAL_935187492052582731$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_GROUP_CHECKBOX_GROUP_IN_FORM_CHECKBOX_GROUP_IN_FORM_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([":\u241F71c77bb8cecdf11ec3eead24dd1ba506573fa9cd\u241F935187492052582731:Submit"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3498101055154698277$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_GROUP_CHECKBOX_GROUP_IN_FORM_CHECKBOX_GROUP_IN_FORM_EXAMPLE_COMPONENT_TS__3 = goog.getMsg("Select minimum 3 checkboxes!");
            i18n_2 = MSG_EXTERNAL_3498101055154698277$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_GROUP_CHECKBOX_GROUP_IN_FORM_CHECKBOX_GROUP_IN_FORM_EXAMPLE_COMPONENT_TS__3;
          } else {
            i18n_2 = $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([":\u241Faaf9b8331666795542f417fe39c78014513ca737\u241F3498101055154698277:Select minimum 3 checkboxes!"])));
          }

          return [[3, "formGroup", "submit"], [1, "form-group"], ["type", "critical", 3, "allowDismiss", 4, "ngIf"], ["id", "nui-demo-checkbox-group-in-form", "formControlName", "checkboxGroup", "name", "vegetable", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["nui-button", "", "type", "submit", 3, "disabled"], i18n_0, ["type", "critical", 3, "allowDismiss"], i18n_2, [3, "value"]];
        },
        template: function CheckboxGroupInFormExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function CheckboxGroupInFormExampleComponent_Template_form_submit_0_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CheckboxGroupInFormExampleComponent_nui_message_2_Template, 3, 1, "nui-message", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nui-checkbox-group", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CheckboxGroupInFormExampleComponent_nui_checkbox_4_Template, 2, 2, "nui-checkbox", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](6, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.myForm.controls["checkboxGroup"].valid && ctx.myForm.controls["checkboxGroup"].touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.vegetables);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.myForm.disabled || ctx.myForm.controls["checkboxGroup"].invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "8Z72":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/checkbox-group-inline/checkbox-group-inline.example.component.ts ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Z72(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-checkbox-group-inline-example\",\n    templateUrl: \"./checkbox-group-inline.example.component.html\",\n})\nexport class CheckboxGroupInlineExampleComponent {\n    public cabbage = $localize `Cabbage`;\n    public potato = $localize `Potato`;\n    public tomato = $localize `Tomato`;\n    public carrot = $localize `Carrot`;\n    public vegetables = [this.cabbage, this.potato, this.tomato, this.carrot];\n    public selectedVegetables = [this.potato, this.tomato];\n\n    constructor() {}\n}\n";
      /***/
    },

    /***/
    "Cb63":
    /*!******************************************************************************************************!*\
      !*** ./demo/src/components/demo/checkbox-group/checkbox-group-test/checkbox-group-test.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: CheckboxGroupTestComponent */

    /***/
    function Cb63(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxGroupTestComponent", function () {
        return CheckboxGroupTestComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox-group.component */
      "s1l0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");
      /* harmony import */


      var _checkbox_group_in_form_checkbox_group_in_form_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../checkbox-group-in-form/checkbox-group-in-form.example.component */
      "5OyA");

      function CheckboxGroupTestComponent_nui_checkbox_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-checkbox", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vegetable_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", vegetable_r2)("checked", ctx_r0.isChecked(vegetable_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vegetable_r2, " ");
        }
      }

      function CheckboxGroupTestComponent_nui_checkbox_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-checkbox", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vegetable_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", vegetable_r3)("hint", ctx_r1.hints.indexOf(vegetable_r3) >= 0 ? ctx_r1.hints[ctx_r1.hints.indexOf(vegetable_r3)] : null)("checked", ctx_r1.isChecked(vegetable_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vegetable_r3, " ");
        }
      }

      var CheckboxGroupTestComponent = /*#__PURE__*/function () {
        function CheckboxGroupTestComponent(formBuilder) {
          _classCallCheck(this, CheckboxGroupTestComponent);

          this.formBuilder = formBuilder;
          this.cabbage = "Cabbage";
          this.potato = "Potato";
          this.tomato = "Tomato";
          this.carrot = "Carrot";
          this.disabledOne = "DISABLED";
          this.vegetables = [this.cabbage, this.potato, this.tomato, this.carrot];
          this.hints = [this.cabbage, this.tomato];
          this.selectedVegetables = [this.potato, this.tomato, this.disabledOne];
        }

        _createClass(CheckboxGroupTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.testForm = this.formBuilder.group({
              checkboxGroup: this.formBuilder.control({
                value: this.selectedVegetables,
                disabled: true
              }),
              checkboxGroup2: this.formBuilder.control({
                value: this.selectedVegetables,
                disabled: false
              })
            });
          }
        }, {
          key: "isChecked",
          value: function isChecked(vegetable) {
            return this.selectedVegetables.indexOf(vegetable) > -1;
          }
        }]);

        return CheckboxGroupTestComponent;
      }();

      CheckboxGroupTestComponent.ɵfac = function CheckboxGroupTestComponent_Factory(t) {
        return new (t || CheckboxGroupTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      CheckboxGroupTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CheckboxGroupTestComponent,
        selectors: [["nui-checkbox-group-test-example"]],
        decls: 22,
        vars: 24,
        consts: [[1, "container", "d-flex"], [1, "d-flex", "flex-column", "mr-5"], ["id", "nui-demo-checkbox-group-basic", "name", "vegetable", 3, "values"], ["hint", "This is some help text", 3, "value", "checked", 4, "ngFor", "ngForOf"], ["hint", "If it's not disabled ring the alarm!", "id", "nui-demo-checkbox-group-1-disabled-checkbox", "disabled", "true", 3, "value", "checked"], [1, "d-flex", "flex-column", "mt-5"], ["id", "nui-demo-checkbox-group-justified", "name", "vegetable", 3, "values"], ["class", "nui-checkbox--justified", 3, "value", "hint", "checked", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["id", "nui-demo-checkbox-group-in-form-disabled-checkboxes", "name", "vegetable", "formControlName", "checkboxGroup2"], [3, "value", "disabled", "checked"], ["id", "nui-demo-checkbox-group-part-of-form"], ["hint", "This is some help text", 3, "value", "checked"], [1, "nui-checkbox--justified", 3, "value", "hint", "checked"]],
        template: function CheckboxGroupTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-checkbox-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CheckboxGroupTestComponent_nui_checkbox_3_Template, 2, 3, "nui-checkbox", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-checkbox", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nui-checkbox-group", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CheckboxGroupTestComponent_nui_checkbox_8_Template, 2, 4, "nui-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nui-checkbox-group", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nui-checkbox", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nui-checkbox", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nui-checkbox", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nui-checkbox", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "nui-checkbox-group-in-form-example", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("values", ctx.selectedVegetables);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.vegetables);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.disabledOne)("checked", !ctx.isChecked(ctx.disabledOne));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.disabledOne);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("values", ctx.selectedVegetables);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.vegetables);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.testForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.vegetables[0])("disabled", true)("checked", ctx.isChecked(ctx.vegetables[0]));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.vegetables[0], "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.vegetables[1])("disabled", false)("checked", ctx.isChecked(ctx.vegetables[1]));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.vegetables[1], "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.vegetables[2])("disabled", true)("checked", ctx.isChecked(ctx.vegetables[2]));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.vegetables[2], "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.vegetables[3])("disabled", false)("checked", ctx.isChecked(ctx.vegetables[3]));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.vegetables[3], "");
          }
        },
        directives: [_src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _checkbox_group_in_form_checkbox_group_in_form_example_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxGroupInFormExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "EFDT":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/checkbox-group-visual-test/checkbox-group-visual-test.component.ts ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EFDT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-checkbox-group-visual-test\",\n    templateUrl: \"./checkbox-group-visual-test.component.html\",\n})\nexport class CheckboxGroupVisualTestComponent implements OnInit {\n    public testForm: FormGroup;\n    public cabbage = \"Cabbage\";\n    public potato = \"Potato\";\n    public tomato = \"Tomato\";\n    public carrot = \"Carrot\";\n    public disabledOne = \"DISABLED\";\n    public vegetables = [this.cabbage, this.potato, this.tomato, this.carrot];\n    public selectedVegetables = [this.potato, this.tomato, this.disabledOne];\n\n    constructor(private formBuilder: FormBuilder) {}\n\n    ngOnInit() {\n        this.testForm = this.formBuilder.group({\n            checkboxGroup: this.formBuilder.control({\n                value: this.selectedVegetables, disabled: true,\n            }),\n            checkboxGroup2: this.formBuilder.control({\n                value: this.selectedVegetables, disabled: false,\n            }),\n        });\n    }\n\n    public isChecked(vegetable: string): boolean {\n        return this.selectedVegetables.indexOf(vegetable) > -1;\n    }\n}\n";
      /***/
    },

    /***/
    "EiW/":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/checkbox-group-justified/checkbox-group-justified.example.component.ts ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EiW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-checkbox-group-justified-example\",\n    templateUrl: \"./checkbox-group-justified.example.component.html\",\n})\nexport class CheckboxGroupJustifiedExampleComponent {\n    public cabbage = $localize `Cabbage`;\n    public potato = $localize `Potato`;\n    public tomato = $localize `Tomato`;\n    public carrot = $localize `Carrot`;\n    public vegetables = [this.cabbage, this.potato, this.tomato, this.carrot];\n    public hints = [this.cabbage, this.tomato];\n    public selectedVegetables = [this.potato, this.tomato];\n\n    constructor() { }\n\n    public isChecked(vegetable: string): boolean {\n        return this.selectedVegetables.indexOf(vegetable) > -1;\n    }\n}\n";
      /***/
    },

    /***/
    "FDVP":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/index.ts ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FDVP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./checkbox-group-docs/checkbox-group-docs.example.component\";\nexport * from \"./checkbox-group-inline/checkbox-group-inline.example.component\";\nexport * from \"./checkbox-group-basic/checkbox-group-basic.example.component\";\nexport * from \"./checkbox-group-in-form/checkbox-group-in-form.example.component\";\nexport * from \"./checkbox-group-visual-test/checkbox-group-visual-test.component\";\nexport * from \"./checkbox-group-justified/checkbox-group-justified.example.component\";\nexport * from \"./checkbox-group-test/checkbox-group-test.component\";\n";
      /***/
    },

    /***/
    "FsbB":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/checkbox-group-inline/checkbox-group-inline.example.component.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FsbB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-checkbox-group id=\"nui-demo-checkbox-group-inline\"\n                    class=\"nui-checkbox-group-inline\"\n                    [values]=\"selectedVegetables\"\n                    name=\"vegetable\">\n    <nui-checkbox *ngFor=\"let vegetable of vegetables\"\n                  [value]=\"vegetable\">\n        {{vegetable}}\n    </nui-checkbox>\n</nui-checkbox-group>\n";
      /***/
    },

    /***/
    "JFDX":
    /*!**************************************************************************************************************!*\
      !*** ./demo/src/components/demo/checkbox-group/checkbox-group-docs/checkbox-group-docs.example.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: CheckboxGroupExampleComponent */

    /***/
    function JFDX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxGroupExampleComponent", function () {
        return CheckboxGroupExampleComponent;
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


      var _checkbox_group_basic_checkbox_group_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../checkbox-group-basic/checkbox-group-basic.example.component */
      "uamy");
      /* harmony import */


      var _checkbox_group_inline_checkbox_group_inline_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../checkbox-group-inline/checkbox-group-inline.example.component */
      "vcgD");
      /* harmony import */


      var _checkbox_group_in_form_checkbox_group_in_form_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../checkbox-group-in-form/checkbox-group-in-form.example.component */
      "5OyA");
      /* harmony import */


      var _checkbox_group_justified_checkbox_group_justified_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../checkbox-group-justified/checkbox-group-justified.example.component */
      "vhRs");

      var CheckboxGroupExampleComponent = function CheckboxGroupExampleComponent() {
        _classCallCheck(this, CheckboxGroupExampleComponent);
      };

      CheckboxGroupExampleComponent.ɵfac = function CheckboxGroupExampleComponent_Factory(t) {
        return new (t || CheckboxGroupExampleComponent)();
      };

      CheckboxGroupExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CheckboxGroupExampleComponent,
        selectors: [["nui-checkbox-group-docs-example"]],
        decls: 74,
        vars: 0,
        consts: [["filenamePrefix", "checkbox-group-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "checkbox-group-inline", "exampleTitle", "Inline"], ["filenamePrefix", "checkbox-group-in-form", "exampleTitle", "Part of Form"], ["filenamePrefix", "checkbox-group-justified", "exampleTitle", "Justified"]],
        template: function CheckboxGroupExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiCheckboxModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "<nui-checkbox-group>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " component is used for combining ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "<nui-checkbox>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " components into a group. Use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " input to set the \"name\" attribute for the inner ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "<nui-checkbox>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " input elements. To get the values of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "<nui-checkbox>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " child components use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "values");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " input which is an array of checked state values. To act on checkbox value changes, bind to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "(valuesChange)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " output.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nui-example-wrapper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "nui-checkbox-group-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Inline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "nui-checkbox-group-inline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " class to display checkbox group inline.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "nui-checkbox-group-inline-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Part of Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "<nui-checkbox-group>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " can be used in reactive forms.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "nui-checkbox-group-in-form-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Justified");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " To justify ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "<nui-checkbox>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " to the width of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "<nui-checkbox-group>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " (or simply parent element, in case ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "<nui-checkbox>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " is used not as a part of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "<nui-checkbox-group>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "), add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "nui-checkbox--justified");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " class to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "<nui-checkbox>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "nui-checkbox-group-justified-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _checkbox_group_basic_checkbox_group_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxGroupBasicExampleComponent"], _checkbox_group_inline_checkbox_group_inline_example_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxGroupInlineExampleComponent"], _checkbox_group_in_form_checkbox_group_in_form_example_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupInFormExampleComponent"], _checkbox_group_justified_checkbox_group_justified_example_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxGroupJustifiedExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "JoKC":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/checkbox-group-justified/checkbox-group-justified.example.component.html ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JoKC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-checkbox-group id=\"nui-demo-checkbox-group-justified\"\n                    name=\"vegetable\"\n                    [values]=\"selectedVegetables\">\n    <nui-checkbox *ngFor=\"let vegetable of vegetables\"\n                  [value]=\"vegetable\"\n                  i18n-hint\n                  [hint]=\"(hints.indexOf(vegetable) >=0) ? hints[hints.indexOf(vegetable)] : null\"\n                  [checked]=\"isChecked(vegetable)\"\n                  class=\"nui-checkbox--justified\">\n        {{vegetable}}\n    </nui-checkbox>\n</nui-checkbox-group>\n";
      /***/
    },

    /***/
    "JpOM":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/checkbox-group.module.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JpOM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiButtonModule, NuiCheckboxModule, NuiDocsModule, SrlcStage } from \"@nova-ui/bits\";\n\nimport { CheckboxGroupTestComponent } from \"./checkbox-group-test/checkbox-group-test.component\";\nimport {\n    CheckboxGroupBasicExampleComponent,\n    CheckboxGroupExampleComponent,\n    CheckboxGroupInFormExampleComponent,\n    CheckboxGroupInlineExampleComponent,\n    CheckboxGroupJustifiedExampleComponent,\n    CheckboxGroupVisualTestComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: CheckboxGroupExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"checkbox-group-visual-test\",\n        component: CheckboxGroupVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"checkbox-group-test\",\n        component: CheckboxGroupTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiCheckboxModule,\n        NuiDocsModule,\n        FormsModule,\n        ReactiveFormsModule,\n        NuiButtonModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        CheckboxGroupExampleComponent,\n        CheckboxGroupInlineExampleComponent,\n        CheckboxGroupInFormExampleComponent,\n        CheckboxGroupBasicExampleComponent,\n        CheckboxGroupVisualTestComponent,\n        CheckboxGroupJustifiedExampleComponent,\n        CheckboxGroupTestComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class CheckboxGroupModule {\n}\n";
      /***/
    },

    /***/
    "NvPO":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/checkbox-group-in-form/checkbox-group-in-form.example.component.html ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NvPO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form [formGroup]=\"myForm\" (submit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <nui-message [allowDismiss]=\"true\" type=\"critical\" *ngIf=\"!myForm.controls['checkboxGroup'].valid && myForm.controls['checkboxGroup'].touched\" >\n            <b i18n>Select minimum 3 checkboxes!</b>\n        </nui-message>\n        <nui-checkbox-group id=\"nui-demo-checkbox-group-in-form\"\n                            formControlName=\"checkboxGroup\"\n                            name=\"vegetable\" required>\n            <nui-checkbox *ngFor=\"let vegetable of vegetables\"\n                          [value]=\"vegetable\">\n                {{vegetable}}\n            </nui-checkbox>\n        </nui-checkbox-group>\n    </div>\n    <button nui-button type=\"submit\" [disabled]=\"myForm.disabled || myForm.controls['checkboxGroup'].invalid\" i18n>Submit</button>\n</form>\n";
      /***/
    },

    /***/
    "Ut/2":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/checkbox-group-test/checkbox-group-test.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ut2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container d-flex\">\n    <div class=\"d-flex flex-column mr-5\">\n        <nui-checkbox-group id=\"nui-demo-checkbox-group-basic\"\n                            name=\"vegetable\"\n                            [values]=\"selectedVegetables\">\n            <nui-checkbox *ngFor=\"let vegetable of vegetables\"\n                          [value]=\"vegetable\"\n                          hint=\"This is some help text\"\n                          [checked]=\"isChecked(vegetable)\">\n                {{vegetable}}\n            </nui-checkbox>\n            <nui-checkbox hint=\"If it's not disabled ring the alarm!\"\n                          id=\"nui-demo-checkbox-group-1-disabled-checkbox\"\n                          [value]=\"disabledOne\"\n                          [checked]=\"!isChecked(disabledOne)\"\n                          disabled=\"true\">{{disabledOne}}</nui-checkbox>\n        </nui-checkbox-group>\n    </div>\n    <div class=\"d-flex flex-column mt-5\">\n        <nui-checkbox-group id=\"nui-demo-checkbox-group-justified\"\n                        name=\"vegetable\"\n                        [values]=\"selectedVegetables\">\n            <nui-checkbox *ngFor=\"let vegetable of vegetables\"\n                        [value]=\"vegetable\"\n                        [hint]=\"(hints.indexOf(vegetable) >=0) ? hints[hints.indexOf(vegetable)] : null\"\n                        [checked]=\"isChecked(vegetable)\"\n                        class=\"nui-checkbox--justified\">\n                {{vegetable}}\n            </nui-checkbox>\n        </nui-checkbox-group>\n    </div>\n    <div class=\"d-flex flex-column mt-5\">\n        <form [formGroup]=\"testForm\">\n            <nui-checkbox-group id=\"nui-demo-checkbox-group-in-form-disabled-checkboxes\"\n                            name=\"vegetable\"\n                            formControlName=\"checkboxGroup2\">\n                <nui-checkbox [value]=\"vegetables[0]\"\n                                [disabled]=\"true\"\n                                [checked]=\"isChecked(vegetables[0])\">\n                    {{vegetables[0]}}</nui-checkbox>\n                <nui-checkbox [value]=\"vegetables[1]\"\n                                [disabled]=\"false\"\n                                [checked]=\"isChecked(vegetables[1])\">\n                    {{vegetables[1]}}</nui-checkbox>\n                <nui-checkbox [value]=\"vegetables[2]\"\n                                [disabled]=\"true\"\n                                [checked]=\"isChecked(vegetables[2])\">\n                    {{vegetables[2]}}</nui-checkbox>\n                <nui-checkbox [value]=\"vegetables[3]\"\n                                [disabled]=\"false\"\n                                [checked]=\"isChecked(vegetables[3])\">\n                    {{vegetables[3]}}</nui-checkbox>\n            </nui-checkbox-group>\n        </form>\n    </div>\n    <div class=\"d-flex flex-column mr-5\">\n        <nui-checkbox-group-in-form-example id=\"nui-demo-checkbox-group-part-of-form\"></nui-checkbox-group-in-form-example>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "Y7Yd":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/checkbox-group-in-form/checkbox-group-in-form.example.component.ts ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Y7Yd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-checkbox-group-in-form-example\",\n    templateUrl: \"./checkbox-group-in-form.example.component.html\",\n})\nexport class CheckboxGroupInFormExampleComponent implements OnInit {\n    public myForm: FormGroup;\n    public cabbage = $localize `Cabbage`;\n    public potato = $localize `Potato`;\n    public tomato = $localize `Tomato`;\n    public carrot = $localize `Carrot`;\n    public vegetables = [this.cabbage, this.potato, this.tomato, this.carrot];\n    public selectedVegetables = [this.cabbage];\n\n    constructor(private formBuilder: FormBuilder,\n                private toastService: ToastService) {}\n\n    public ngOnInit() {\n        this.myForm = this.formBuilder.group({\n            checkboxGroup: this.formBuilder.control([this.cabbage, this.potato], [\n                Validators.required, Validators.minLength(3)]),\n        });\n    }\n\n    public onSubmit() {\n        console.log(this.myForm);\n        this.toastService.success({message: $localize `Your form is valid!`});\n    }\n\n    public isChecked(vegetable: string): boolean {\n        return this.selectedVegetables.indexOf(vegetable) > -1;\n    }\n}\n";
      /***/
    },

    /***/
    "Z7g5":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/checkbox-group-basic/checkbox-group-basic.example.component.ts ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Z7g5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-checkbox-group-basic-example\",\n    templateUrl: \"./checkbox-group-basic.example.component.html\",\n})\nexport class CheckboxGroupBasicExampleComponent {\n    public cabbage = $localize `Cabbage`;\n    public potato = $localize `Potato`;\n    public tomato = $localize `Tomato`;\n    public carrot = $localize `Carrot`;\n    public vegetables = [this.cabbage, this.potato, this.tomato, this.carrot];\n    public selectedVegetables = [this.potato, this.tomato];\n\n    constructor(private toastService: ToastService) {}\n\n    public isChecked(vegetable: string): boolean {\n        return this.selectedVegetables.indexOf(vegetable) > -1;\n    }\n\n    public onValueChange (event: any) {\n        this.toastService.success({message: $localize `Selected checkboxes: ` + event});\n    }\n\n}\n";
      /***/
    },

    /***/
    "dMfj":
    /*!**************************************************************************!*\
      !*** ./demo/src/components/demo/checkbox-group/checkbox-group.module.ts ***!
      \**************************************************************************/

    /*! exports provided: CheckboxGroupModule */

    /***/
    function dMfj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxGroupModule", function () {
        return CheckboxGroupModule;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _checkbox_group_test_checkbox_group_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkbox-group-test/checkbox-group-test.component */
      "Cb63");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./index */
      "oH+E");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "checkbox-group-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "checkbox-group-test",
        component: _checkbox_group_test_checkbox_group_test_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxGroupTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var CheckboxGroupModule = function CheckboxGroupModule() {
        _classCallCheck(this, CheckboxGroupModule);
      };

      CheckboxGroupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: CheckboxGroupModule
      });
      CheckboxGroupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function CheckboxGroupModule_Factory(t) {
          return new (t || CheckboxGroupModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("19SM");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CheckboxGroupModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupInlineExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupInFormExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupVisualTestComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupJustifiedExampleComponent"], _checkbox_group_test_checkbox_group_test_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxGroupTestComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "dmI9":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/checkbox-group-basic/checkbox-group-basic.example.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dmI9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-checkbox-group id=\"nui-demo-checkbox-group-basic\"\n                    name=\"vegetable\"\n                    [values]=\"selectedVegetables\"\n                    (valuesChange)=\"onValueChange($event)\">\n    <nui-checkbox *ngFor=\"let vegetable of vegetables\"\n                  [value]=\"vegetable\"\n                  i18n-hint\n                  hint=\"This is some help text\"\n                  [checked]=\"isChecked(vegetable)\">\n        {{vegetable}}\n    </nui-checkbox>\n</nui-checkbox-group>\n";
      /***/
    },

    /***/
    "fuQ5":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/checkbox-group-test/checkbox-group-test.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fuQ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-checkbox-group-test-example\",\n    templateUrl: \"checkbox-group-test.component.html\",\n})\n\nexport class CheckboxGroupTestComponent implements OnInit {\n    public testForm: FormGroup;\n    public cabbage = \"Cabbage\";\n    public potato = \"Potato\";\n    public tomato = \"Tomato\";\n    public carrot = \"Carrot\";\n    public disabledOne = \"DISABLED\";\n    public vegetables = [this.cabbage, this.potato, this.tomato, this.carrot];\n    public hints = [this.cabbage, this.tomato];\n    public selectedVegetables = [this.potato, this.tomato, this.disabledOne];\n\n    constructor(private formBuilder: FormBuilder) {}\n\n    ngOnInit() {\n        this.testForm = this.formBuilder.group({\n            checkboxGroup: this.formBuilder.control({\n                value: this.selectedVegetables, disabled: true,\n            }),\n            checkboxGroup2: this.formBuilder.control({\n                value: this.selectedVegetables, disabled: false,\n            }),\n        });\n    }\n\n    public isChecked(vegetable: string): boolean {\n        return this.selectedVegetables.indexOf(vegetable) > -1;\n    }\n}\n";
      /***/
    },

    /***/
    "j3x3":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/checkbox-group-visual-test/checkbox-group-visual-test.component.html ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function j3x3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Basic Checkbox-Group with Hint Text</h3>\n            <nui-checkbox-group id=\"nui-demo-checkbox-group-basic\"\n                                name=\"vegetable\"\n                                [values]=\"selectedVegetables\">\n                <nui-checkbox *ngFor=\"let vegetable of vegetables\"\n                              [value]=\"vegetable\"\n                              hint=\"This is some help text\"\n                              [checked]=\"isChecked(vegetable)\">\n                    {{vegetable}}\n                </nui-checkbox>\n                <nui-checkbox hint=\"If it's not disabled ring the alarm!\"\n                                id=\"nui-demo-checkbox-group-1-disabled-checkbox\"\n                                [value]=\"disabledOne\"\n                                [checked]=\"!isChecked(disabledOne)\"\n                                disabled=\"true\">{{disabledOne}}</nui-checkbox>\n            </nui-checkbox-group>\n            <hr />\n        </div>\n        <div class=\"col\">\n            <h3>Inline Checkbox-Group</h3>\n            <nui-checkbox-group id=\"nui-demo-checkbox-group-inline\"\n                                class=\"nui-checkbox-group-inline\"\n                                [values]=\"selectedVegetables\"\n                                name=\"vegetable\">\n                <nui-checkbox *ngFor=\"let vegetable of vegetables\"\n                              [value]=\"vegetable\">\n                    {{vegetable}}\n                </nui-checkbox>\n            </nui-checkbox-group>\n            <hr />\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col\">\n            <h3>Justified Checkbox-Group</h3>\n            <nui-checkbox-group id=\"nui-demo-checkbox-group-justified\"\n                                name=\"vegetable\"\n                                [values]=\"selectedVegetables\">\n                <nui-checkbox *ngFor=\"let vegetable of vegetables\"\n                              [value]=\"vegetable\"\n                              [checked]=\"isChecked(vegetable)\"\n                              class=\"nui-checkbox--justified\">\n                    {{vegetable}}\n                </nui-checkbox>\n            </nui-checkbox-group>\n            <hr />\n        </div>\n        <div class=\"col\">\n            <h3>Disabled checkboxes within the form</h3>\n            <form [formGroup]=\"testForm\">\n                <nui-checkbox-group id=\"nui-demo-checkbox-group-in-form-disabled-checkboxes\"\n                                name=\"vegetable\"\n                                formControlName=\"checkboxGroup2\">\n                    <nui-checkbox [value]=\"vegetables[0]\"\n                                    [disabled]=\"true\"\n                                    [checked]=\"isChecked(vegetables[0])\">\n                        {{vegetables[0]}}</nui-checkbox>\n                    <nui-checkbox [value]=\"vegetables[1]\"\n                                    [disabled]=\"false\"\n                                    [checked]=\"isChecked(vegetables[1])\">\n                        {{vegetables[1]}}</nui-checkbox>\n                    <nui-checkbox [value]=\"vegetables[2]\"\n                                    [disabled]=\"true\"\n                                    [checked]=\"isChecked(vegetables[2])\">\n                        {{vegetables[2]}}</nui-checkbox>\n                    <nui-checkbox [value]=\"vegetables[3]\"\n                                    [disabled]=\"false\"\n                                    [checked]=\"isChecked(vegetables[3])\">\n                        {{vegetables[3]}}</nui-checkbox>\n                </nui-checkbox-group>\n            </form>\n        </div>\n    </div>\n    <div class=\"d-flex flex-column mt-5\">\n        <h3>Disabled checkboxes within the disabled form</h3>\n        <form [formGroup]=\"testForm\">\n            <nui-checkbox-group id=\"nui-demo-checkbox-group-in-form\"\n                            name=\"vegetable\"\n                            formControlName=\"checkboxGroup\">\n                <nui-checkbox *ngFor=\"let vegetable of vegetables\"\n                            [value]=\"vegetable\"\n                            [checked]=\"isChecked(vegetable)\">\n                    {{vegetable}}\n                </nui-checkbox>\n            </nui-checkbox-group>\n        </form>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "l9ft":
    /*!********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/checkbox-group/checkbox-group-visual-test/checkbox-group-visual-test.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: CheckboxGroupVisualTestComponent */

    /***/
    function l9ft(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxGroupVisualTestComponent", function () {
        return CheckboxGroupVisualTestComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox-group.component */
      "s1l0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");

      function CheckboxGroupVisualTestComponent_nui_checkbox_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-checkbox", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vegetable_r4 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", vegetable_r4)("checked", ctx_r0.isChecked(vegetable_r4));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vegetable_r4, " ");
        }
      }

      function CheckboxGroupVisualTestComponent_nui_checkbox_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-checkbox", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vegetable_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", vegetable_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vegetable_r5, " ");
        }
      }

      function CheckboxGroupVisualTestComponent_nui_checkbox_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-checkbox", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vegetable_r6 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", vegetable_r6)("checked", ctx_r2.isChecked(vegetable_r6));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vegetable_r6, " ");
        }
      }

      function CheckboxGroupVisualTestComponent_nui_checkbox_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-checkbox", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vegetable_r7 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", vegetable_r7)("checked", ctx_r3.isChecked(vegetable_r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vegetable_r7, " ");
        }
      }

      var CheckboxGroupVisualTestComponent = /*#__PURE__*/function () {
        function CheckboxGroupVisualTestComponent(formBuilder) {
          _classCallCheck(this, CheckboxGroupVisualTestComponent);

          this.formBuilder = formBuilder;
          this.cabbage = "Cabbage";
          this.potato = "Potato";
          this.tomato = "Tomato";
          this.carrot = "Carrot";
          this.disabledOne = "DISABLED";
          this.vegetables = [this.cabbage, this.potato, this.tomato, this.carrot];
          this.selectedVegetables = [this.potato, this.tomato, this.disabledOne];
        }

        _createClass(CheckboxGroupVisualTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.testForm = this.formBuilder.group({
              checkboxGroup: this.formBuilder.control({
                value: this.selectedVegetables,
                disabled: true
              }),
              checkboxGroup2: this.formBuilder.control({
                value: this.selectedVegetables,
                disabled: false
              })
            });
          }
        }, {
          key: "isChecked",
          value: function isChecked(vegetable) {
            return this.selectedVegetables.indexOf(vegetable) > -1;
          }
        }]);

        return CheckboxGroupVisualTestComponent;
      }();

      CheckboxGroupVisualTestComponent.ɵfac = function CheckboxGroupVisualTestComponent_Factory(t) {
        return new (t || CheckboxGroupVisualTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      CheckboxGroupVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CheckboxGroupVisualTestComponent,
        selectors: [["nui-checkbox-group-visual-test"]],
        decls: 42,
        vars: 28,
        consts: [[1, "container"], [1, "row"], [1, "col"], ["id", "nui-demo-checkbox-group-basic", "name", "vegetable", 3, "values"], ["hint", "This is some help text", 3, "value", "checked", 4, "ngFor", "ngForOf"], ["hint", "If it's not disabled ring the alarm!", "id", "nui-demo-checkbox-group-1-disabled-checkbox", "disabled", "true", 3, "value", "checked"], ["id", "nui-demo-checkbox-group-inline", "name", "vegetable", 1, "nui-checkbox-group-inline", 3, "values"], [3, "value", 4, "ngFor", "ngForOf"], [1, "w-100"], ["id", "nui-demo-checkbox-group-justified", "name", "vegetable", 3, "values"], ["class", "nui-checkbox--justified", 3, "value", "checked", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["id", "nui-demo-checkbox-group-in-form-disabled-checkboxes", "name", "vegetable", "formControlName", "checkboxGroup2"], [3, "value", "disabled", "checked"], [1, "d-flex", "flex-column", "mt-5"], ["id", "nui-demo-checkbox-group-in-form", "name", "vegetable", "formControlName", "checkboxGroup"], [3, "value", "checked", 4, "ngFor", "ngForOf"], ["hint", "This is some help text", 3, "value", "checked"], [3, "value"], [1, "nui-checkbox--justified", 3, "value", "checked"], [3, "value", "checked"]],
        template: function CheckboxGroupVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Basic Checkbox-Group with Hint Text");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-checkbox-group", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CheckboxGroupVisualTestComponent_nui_checkbox_6_Template, 2, 3, "nui-checkbox", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nui-checkbox", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Inline Checkbox-Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nui-checkbox-group", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CheckboxGroupVisualTestComponent_nui_checkbox_14_Template, 2, 2, "nui-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Justified Checkbox-Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nui-checkbox-group", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CheckboxGroupVisualTestComponent_nui_checkbox_21_Template, 2, 3, "nui-checkbox", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Disabled checkboxes within the form");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nui-checkbox-group", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "nui-checkbox", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nui-checkbox", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nui-checkbox", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "nui-checkbox", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Disabled checkboxes within the disabled form");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "nui-checkbox-group", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, CheckboxGroupVisualTestComponent_nui_checkbox_41_Template, 2, 3, "nui-checkbox", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("values", ctx.selectedVegetables);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.vegetables);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.disabledOne)("checked", !ctx.isChecked(ctx.disabledOne));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.disabledOne);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("values", ctx.selectedVegetables);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.vegetables);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("values", ctx.selectedVegetables);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.vegetables);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.testForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.vegetables[0])("disabled", true)("checked", ctx.isChecked(ctx.vegetables[0]));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.vegetables[0], "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.vegetables[1])("disabled", false)("checked", ctx.isChecked(ctx.vegetables[1]));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.vegetables[1], "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.vegetables[2])("disabled", true)("checked", ctx.isChecked(ctx.vegetables[2]));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.vegetables[2], "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.vegetables[3])("disabled", false)("checked", ctx.isChecked(ctx.vegetables[3]));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.vegetables[3], "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.testForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.vegetables);
          }
        },
        directives: [_src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "lGTv":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox-group/checkbox-group-docs/checkbox-group-docs.example.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lGTv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiCheckboxModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    The <code>&lt;nui-checkbox-group&gt;</code> component is used for combining <code>&lt;nui-checkbox&gt;</code> components into a\n    group. Use the <code>name</code> input to set the \"name\" attribute for the inner <code>&lt;nui-checkbox&gt;</code> input elements. To get the\n    values of the <code>&lt;nui-checkbox&gt;</code> child components use the <code>values</code> input which is an array of checked state values.\n    To act on checkbox value changes, bind to the <code>(valuesChange)</code> output.\n</p>\n<nui-example-wrapper filenamePrefix=\"checkbox-group-basic\" exampleTitle=\"Basic Usage\">\n    <nui-checkbox-group-basic-example></nui-checkbox-group-basic-example>\n</nui-example-wrapper>\n\n<h2>Inline</h2>\n<p>\n    Use the <code>nui-checkbox-group-inline</code> class to display checkbox group inline.\n</p>\n<nui-example-wrapper filenamePrefix=\"checkbox-group-inline\" exampleTitle=\"Inline\">\n    <nui-checkbox-group-inline-example></nui-checkbox-group-inline-example>\n</nui-example-wrapper>\n\n<h2>Part of Form</h2>\n<p>\n    <code>&lt;nui-checkbox-group&gt;</code> can be used in reactive forms.\n</p>\n<nui-example-wrapper filenamePrefix=\"checkbox-group-in-form\" exampleTitle=\"Part of Form\">\n    <nui-checkbox-group-in-form-example></nui-checkbox-group-in-form-example>\n</nui-example-wrapper>\n\n<h2>Justified</h2>\n<p>\n    To justify <code>&lt;nui-checkbox&gt;</code> to the width of <code>&lt;nui-checkbox-group&gt;</code> (or simply parent element,\n    in case <code>&lt;nui-checkbox&gt;</code> is used not as a part of <code>&lt;nui-checkbox-group&gt;</code>), add\n    <code>nui-checkbox--justified</code> class to the <code>&lt;nui-checkbox&gt;</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"checkbox-group-justified\" exampleTitle=\"Justified\">\n    <nui-checkbox-group-justified-example></nui-checkbox-group-justified-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "oH+E":
    /*!**********************************************************!*\
      !*** ./demo/src/components/demo/checkbox-group/index.ts ***!
      \**********************************************************/

    /*! exports provided: CheckboxGroupExampleComponent, CheckboxGroupInlineExampleComponent, CheckboxGroupBasicExampleComponent, CheckboxGroupInFormExampleComponent, CheckboxGroupVisualTestComponent, CheckboxGroupJustifiedExampleComponent, CheckboxGroupTestComponent */

    /***/
    function oHE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _checkbox_group_docs_checkbox_group_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./checkbox-group-docs/checkbox-group-docs.example.component */
      "JFDX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CheckboxGroupExampleComponent", function () {
        return _checkbox_group_docs_checkbox_group_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["CheckboxGroupExampleComponent"];
      });
      /* harmony import */


      var _checkbox_group_inline_checkbox_group_inline_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./checkbox-group-inline/checkbox-group-inline.example.component */
      "vcgD");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CheckboxGroupInlineExampleComponent", function () {
        return _checkbox_group_inline_checkbox_group_inline_example_component__WEBPACK_IMPORTED_MODULE_1__["CheckboxGroupInlineExampleComponent"];
      });
      /* harmony import */


      var _checkbox_group_basic_checkbox_group_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkbox-group-basic/checkbox-group-basic.example.component */
      "uamy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CheckboxGroupBasicExampleComponent", function () {
        return _checkbox_group_basic_checkbox_group_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxGroupBasicExampleComponent"];
      });
      /* harmony import */


      var _checkbox_group_in_form_checkbox_group_in_form_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkbox-group-in-form/checkbox-group-in-form.example.component */
      "5OyA");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CheckboxGroupInFormExampleComponent", function () {
        return _checkbox_group_in_form_checkbox_group_in_form_example_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxGroupInFormExampleComponent"];
      });
      /* harmony import */


      var _checkbox_group_visual_test_checkbox_group_visual_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./checkbox-group-visual-test/checkbox-group-visual-test.component */
      "l9ft");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CheckboxGroupVisualTestComponent", function () {
        return _checkbox_group_visual_test_checkbox_group_visual_test_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupVisualTestComponent"];
      });
      /* harmony import */


      var _checkbox_group_justified_checkbox_group_justified_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkbox-group-justified/checkbox-group-justified.example.component */
      "vhRs");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CheckboxGroupJustifiedExampleComponent", function () {
        return _checkbox_group_justified_checkbox_group_justified_example_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxGroupJustifiedExampleComponent"];
      });
      /* harmony import */


      var _checkbox_group_test_checkbox_group_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkbox-group-test/checkbox-group-test.component */
      "Cb63");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CheckboxGroupTestComponent", function () {
        return _checkbox_group_test_checkbox_group_test_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxGroupTestComponent"];
      });
      /***/

    },

    /***/
    "uamy":
    /*!****************************************************************************************************************!*\
      !*** ./demo/src/components/demo/checkbox-group/checkbox-group-basic/checkbox-group-basic.example.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: CheckboxGroupBasicExampleComponent */

    /***/
    function uamy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxGroupBasicExampleComponent", function () {
        return CheckboxGroupBasicExampleComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox-group.component */
      "s1l0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");

      function CheckboxGroupBasicExampleComponent_nui_checkbox_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-checkbox", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vegetable_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", vegetable_r1)("checked", ctx_r0.isChecked(vegetable_r1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vegetable_r1, " ");
        }
      }

      var CheckboxGroupBasicExampleComponent = /*#__PURE__*/function () {
        function CheckboxGroupBasicExampleComponent(toastService) {
          _classCallCheck(this, CheckboxGroupBasicExampleComponent);

          this.toastService = toastService;
          this.cabbage = $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Cabbage"])));
          this.potato = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Potato"])));
          this.tomato = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Tomato"])));
          this.carrot = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Carrot"])));
          this.vegetables = [this.cabbage, this.potato, this.tomato, this.carrot];
          this.selectedVegetables = [this.potato, this.tomato];
        }

        _createClass(CheckboxGroupBasicExampleComponent, [{
          key: "isChecked",
          value: function isChecked(vegetable) {
            return this.selectedVegetables.indexOf(vegetable) > -1;
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(event) {
            this.toastService.success({
              message: $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Selected checkboxes: "]))) + event
            });
          }
        }]);

        return CheckboxGroupBasicExampleComponent;
      }();

      CheckboxGroupBasicExampleComponent.ɵfac = function CheckboxGroupBasicExampleComponent_Factory(t) {
        return new (t || CheckboxGroupBasicExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      CheckboxGroupBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CheckboxGroupBasicExampleComponent,
        selectors: [["nui-checkbox-group-basic-example"]],
        decls: 2,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_829155627086234075$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_GROUP_CHECKBOX_GROUP_BASIC_CHECKBOX_GROUP_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("This is some help text");
            i18n_0 = MSG_EXTERNAL_829155627086234075$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_GROUP_CHECKBOX_GROUP_BASIC_CHECKBOX_GROUP_BASIC_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([":\u241Fba785d6cbb33a003a3ce1d20077ba67264374284\u241F829155627086234075:This is some help text"])));
          }

          return [["id", "nui-demo-checkbox-group-basic", "name", "vegetable", 3, "values", "valuesChange"], ["hint", i18n_0, 3, "value", "checked", 4, "ngFor", "ngForOf"], ["hint", i18n_0, 3, "value", "checked"]];
        },
        template: function CheckboxGroupBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-checkbox-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valuesChange", function CheckboxGroupBasicExampleComponent_Template_nui_checkbox_group_valuesChange_0_listener($event) {
              return ctx.onValueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CheckboxGroupBasicExampleComponent_nui_checkbox_1_Template, 2, 3, "nui-checkbox", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("values", ctx.selectedVegetables);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.vegetables);
          }
        },
        directives: [_src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "vcgD":
    /*!******************************************************************************************************************!*\
      !*** ./demo/src/components/demo/checkbox-group/checkbox-group-inline/checkbox-group-inline.example.component.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: CheckboxGroupInlineExampleComponent */

    /***/
    function vcgD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxGroupInlineExampleComponent", function () {
        return CheckboxGroupInlineExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox-group.component */
      "s1l0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");

      function CheckboxGroupInlineExampleComponent_nui_checkbox_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-checkbox", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vegetable_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", vegetable_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vegetable_r1, " ");
        }
      }

      var CheckboxGroupInlineExampleComponent = function CheckboxGroupInlineExampleComponent() {
        _classCallCheck(this, CheckboxGroupInlineExampleComponent);

        this.cabbage = $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Cabbage"])));
        this.potato = $localize(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Potato"])));
        this.tomato = $localize(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Tomato"])));
        this.carrot = $localize(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Carrot"])));
        this.vegetables = [this.cabbage, this.potato, this.tomato, this.carrot];
        this.selectedVegetables = [this.potato, this.tomato];
      };

      CheckboxGroupInlineExampleComponent.ɵfac = function CheckboxGroupInlineExampleComponent_Factory(t) {
        return new (t || CheckboxGroupInlineExampleComponent)();
      };

      CheckboxGroupInlineExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CheckboxGroupInlineExampleComponent,
        selectors: [["nui-checkbox-group-inline-example"]],
        decls: 2,
        vars: 2,
        consts: [["id", "nui-demo-checkbox-group-inline", "name", "vegetable", 1, "nui-checkbox-group-inline", 3, "values"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function CheckboxGroupInlineExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-checkbox-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckboxGroupInlineExampleComponent_nui_checkbox_1_Template, 2, 2, "nui-checkbox", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("values", ctx.selectedVegetables);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vegetables);
          }
        },
        directives: [_src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_1__["CheckboxGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "vhRs":
    /*!************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/checkbox-group/checkbox-group-justified/checkbox-group-justified.example.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: CheckboxGroupJustifiedExampleComponent */

    /***/
    function vhRs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxGroupJustifiedExampleComponent", function () {
        return CheckboxGroupJustifiedExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox-group.component */
      "s1l0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");

      function CheckboxGroupJustifiedExampleComponent_nui_checkbox_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-checkbox", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vegetable_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", vegetable_r1)("hint", ctx_r0.hints.indexOf(vegetable_r1) >= 0 ? ctx_r0.hints[ctx_r0.hints.indexOf(vegetable_r1)] : null)("checked", ctx_r0.isChecked(vegetable_r1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vegetable_r1, " ");
        }
      }

      var CheckboxGroupJustifiedExampleComponent = /*#__PURE__*/function () {
        function CheckboxGroupJustifiedExampleComponent() {
          _classCallCheck(this, CheckboxGroupJustifiedExampleComponent);

          this.cabbage = $localize(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Cabbage"])));
          this.potato = $localize(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["Potato"])));
          this.tomato = $localize(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["Tomato"])));
          this.carrot = $localize(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["Carrot"])));
          this.vegetables = [this.cabbage, this.potato, this.tomato, this.carrot];
          this.hints = [this.cabbage, this.tomato];
          this.selectedVegetables = [this.potato, this.tomato];
        }

        _createClass(CheckboxGroupJustifiedExampleComponent, [{
          key: "isChecked",
          value: function isChecked(vegetable) {
            return this.selectedVegetables.indexOf(vegetable) > -1;
          }
        }]);

        return CheckboxGroupJustifiedExampleComponent;
      }();

      CheckboxGroupJustifiedExampleComponent.ɵfac = function CheckboxGroupJustifiedExampleComponent_Factory(t) {
        return new (t || CheckboxGroupJustifiedExampleComponent)();
      };

      CheckboxGroupJustifiedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CheckboxGroupJustifiedExampleComponent,
        selectors: [["nui-checkbox-group-justified-example"]],
        decls: 2,
        vars: 2,
        consts: [["id", "nui-demo-checkbox-group-justified", "name", "vegetable", 3, "values"], ["class", "nui-checkbox--justified", 3, "value", "hint", "checked", 4, "ngFor", "ngForOf"], [1, "nui-checkbox--justified", 3, "value", "hint", "checked"]],
        template: function CheckboxGroupJustifiedExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-checkbox-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckboxGroupJustifiedExampleComponent_nui_checkbox_1_Template, 2, 4, "nui-checkbox", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("values", ctx.selectedVegetables);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vegetables);
          }
        },
        directives: [_src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_1__["CheckboxGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-checkbox-group-checkbox-group-module-es5.js.map