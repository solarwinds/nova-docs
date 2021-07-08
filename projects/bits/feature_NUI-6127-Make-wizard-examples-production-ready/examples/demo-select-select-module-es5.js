(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-select-select-module"], {
    /***/
    "0sxz":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-docs/select-docs.example.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sxz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    <code>&lt;nui-select&gt;</code> allows user to select one item from a list. <strong>Note:</strong> maximum width\n    of select dropdown menu is 400px (except for stretched select, where select itself and select dropdown menu are\n    justified to the width of container element).\n</p>\n\n<h2>Basic Usage</h2>\n<p>\n    To implement basic select you need to pass data via <code>itemsSource</code> input. Use <code>placeholder</code>\n    input to display placeholder. <code>value</code> receives item that will be selected before user starts to\n    communicate with select component. <code>itemsSource</code> data must be an array of strings.\n</p>\n<nui-example-wrapper filenamePrefix=\"select-basic\" exampleTitle=\"Basic Usage\">\n    <nui-select-basic-example></nui-select-basic-example>\n</nui-example-wrapper>\n\n<h2>Disabled</h2>\n<p>\n    To disable select use <code>isDisabled</code> property.\n</p>\n<nui-example-wrapper filenamePrefix=\"select-disabled\" exampleTitle=\"Disabled\">\n    <nui-select-disabled-example></nui-select-disabled-example>\n</nui-example-wrapper>\n\n<h2>Required</h2>\n<p>\n    The option <code>isInErrorState</code> is used to set/change conditional \"required\" validation.\n    This is quick way to set select as required instead of passing config object into validator.\n    Use it to highlight error if field is set to empty and you are not interested in specific message.\n    To subscribe to <code>changed</code> event you should pass a function, argument of which is\n    <code><a href=\"../interfaces/ISelectChangedEvent.html\" target=\"_blank\">ISelectChangedEvent</a></code> object.\n</p>\n<nui-example-wrapper filenamePrefix=\"select-required\" exampleTitle=\"Required\">\n    <nui-select-required-example></nui-select-required-example>\n</nui-example-wrapper>\n\n<h2>Inline</h2>\n<p>\n    To make select inline you need to use <code>inline</code> property. <strong>Note:</strong> As you see there are\n    no spacings between <code>nui-select</code>s in this example because spacings should be handled by users themselves\n    (users should use <code>@nui-space-md</code> spacing if they want to have several selects next to each other).\n</p>\n<nui-example-wrapper filenamePrefix=\"select-inline\" exampleTitle=\"Inline\">\n    <nui-select-inline-example></nui-select-inline-example>\n</nui-example-wrapper>\n\n<h2>Separators</h2>\n<p>\n    If you want to have grouped data you need to pass data as an array of\n    <code><a href=\"../interfaces/ISelectGroup.html\" target=\"_blank\">ISelectGroup</a></code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"select-separators\" exampleTitle=\"Select with separators\">\n    <nui-select-separators-example></nui-select-separators-example>\n</nui-example-wrapper>\n\n<h2>Filling the Parent Width</h2>\n<p>\n    For select to fill it's parent width you may pass <code>true</code> to the <code>justified</code> property.\n</p>\n<nui-example-wrapper filenamePrefix=\"select-justified\" exampleTitle=\"Filling the Parent Width\">\n    <nui-select-justified-example></nui-select-justified-example>\n</nui-example-wrapper>\n\n<h2>Using a Custom Template</h2>\n<p>\n    To provide custom template for every item in select you need to link <code>customTemplate</code> input with\n    <code>TemplateRef</code> that represents custom template.\n</p>\n<nui-example-wrapper filenamePrefix=\"select-custom-template\" exampleTitle=\"Select with custom template\">\n    <nui-select-custom-template-example></nui-select-custom-template-example>\n</nui-example-wrapper>\n\n<h2>Using With Reactive Forms</h2>\n<p>\n    To use <code>nui-select</code> in reactive forms you need to create <code>FormGroup</code> that represents our form\n    model. After that you can bind <code>nui-select</code> to this form element using <code>formControlName</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"select-reactive-form\" exampleTitle=\"Using With Reactive Forms\">\n    <nui-select-reactive-form></nui-select-reactive-form>\n</nui-example-wrapper>\n\n<h2>Select with a Possibility to Unselect Item</h2>\n<p>\n    To have a possibility to use unselect value <code>isRemoveValueEnabled</code> input set to <code>true</code> should be provided.\n    This in turn will add an item to dropdown with <code>Unspecified</code> label.\n    To customize this label text, please use <code>removeValueText</code> input.\n</p>\n<nui-example-wrapper filenamePrefix=\"select-remove-value\" exampleTitle=\"Using With Default Value\">\n    <nui-select-remove-value></nui-select-remove-value>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "3n+k":
    /*!**********************************************************************************************!*\
      !*** ./demo/src/components/demo/select/select-required/select-required.example.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: SelectRequiredExampleComponent */

    /***/
    function nK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectRequiredExampleComponent", function () {
        return SelectRequiredExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/select.component */
      "8Za4");

      var SelectRequiredExampleComponent = /*#__PURE__*/function () {
        function SelectRequiredExampleComponent() {
          _classCallCheck(this, SelectRequiredExampleComponent);

          this.isRequired = true;
          this.dataset = {
            items: [$localize(_templateObject || (_templateObject = _taggedTemplateLiteral(["Element 1"]))), $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Element 2"]))), $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Element 3"]))), $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Element 4"]))), $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Element 5"]))), $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Element 6"]))), $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Element 7"]))), $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Element 8"]))), $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Element 9"]))), $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Element 10"])))],
            selectedItem: ""
          };
        }

        _createClass(SelectRequiredExampleComponent, [{
          key: "valueChange",
          value: function valueChange(changedEvent) {
            this.dataset.selectedItem = changedEvent.newValue;
          }
        }, {
          key: "isInErrorState",
          value: function isInErrorState() {
            return this.isRequired && !this.dataset.selectedItem;
          }
        }]);

        return SelectRequiredExampleComponent;
      }();

      SelectRequiredExampleComponent.ɵfac = function SelectRequiredExampleComponent_Factory(t) {
        return new (t || SelectRequiredExampleComponent)();
      };

      SelectRequiredExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectRequiredExampleComponent,
        selectors: [["nui-select-required-example"]],
        decls: 1,
        vars: 3,
        consts: [["id", "nui-demo-basic-select-required", 3, "itemsSource", "isInErrorState", "value", "changed"]],
        template: function SelectRequiredExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function SelectRequiredExampleComponent_Template_nui_select_changed_0_listener($event) {
              return ctx.valueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.dataset.items)("isInErrorState", ctx.isInErrorState())("value", ctx.dataset.selectedItem);
          }
        },
        directives: [_src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__["SelectComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "4VQ1":
    /*!****************************************************************************************!*\
      !*** ./demo/src/components/demo/select/select-basic/select-basic.example.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: SelectBasicExampleComponent */

    /***/
    function VQ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectBasicExampleComponent", function () {
        return SelectBasicExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/select.component */
      "8Za4");

      var SelectBasicExampleComponent = function SelectBasicExampleComponent() {
        _classCallCheck(this, SelectBasicExampleComponent);

        this.dataset = {
          items: [$localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Item 1"]))), $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Item 2"]))), $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Item 3"]))), $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Item 4"]))), $localize(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Item 5"]))), $localize(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Item 6"]))), $localize(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Item 7"]))), $localize(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Item 8"]))), $localize(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["Item 9"]))), $localize(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["Item 10"]))), $localize(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["Item 11"]))), $localize(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["Item 12"]))), $localize(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["Item 13"]))), $localize(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["Item 14"]))), $localize(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Item 15"]))), $localize(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["Item 16"]))), $localize(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Item 17"]))), $localize(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Item 18"]))), $localize(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["Item 19"]))), $localize(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["Item 20"])))]
        };
      };

      SelectBasicExampleComponent.ɵfac = function SelectBasicExampleComponent_Factory(t) {
        return new (t || SelectBasicExampleComponent)();
      };

      SelectBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectBasicExampleComponent,
        selectors: [["nui-select-basic-example"]],
        decls: 1,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_BASIC_SELECT_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select item");
            i18n_0 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_BASIC_SELECT_BASIC_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          return [["id", "nui-demo-basic-select", "placeholder", i18n_0, 3, "itemsSource"]];
        },
        template: function SelectBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-select", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.dataset.items);
          }
        },
        directives: [_src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__["SelectComponent"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    "5afS":
    /*!********************************************************************************************************!*\
      !*** ./demo/src/components/demo/select/select-reactive-form/select-reactive-form.example.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: SelectReactiveFormExampleComponent */

    /***/
    function afS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectReactiveFormExampleComponent", function () {
        return SelectReactiveFormExampleComponent;
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


      var _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/select.component */
      "8Za4");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var SelectReactiveFormExampleComponent = /*#__PURE__*/function () {
        function SelectReactiveFormExampleComponent(formBuilder, toastService) {
          _classCallCheck(this, SelectReactiveFormExampleComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.dataset = {
            items: [$localize(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["Item 1"]))), $localize(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["Item 2"]))), $localize(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["Item 3"]))), $localize(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["Item 4"]))), $localize(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["Item 5"])))],
            selectedItem: ""
          };
        }

        _createClass(SelectReactiveFormExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.formBuilder.group({
              item: this.formBuilder.control(this.dataset.selectedItem, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            });
            this.myForm.controls["item"].valueChanges.subscribe(function (value) {
              return console.log("Value changed to", value);
            });
          }
        }, {
          key: "valueChange",
          value: function valueChange(changedEvent) {
            this.dataset.selectedItem = changedEvent.newValue;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            if (this.myForm.valid) {
              this.toastService.success({
                message: $localize(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["Your form is valid!"])))
              });
            } else {
              // if form is invalid mark all controls as touched to trigger isInErrorState
              Object.keys(this.myForm.controls).forEach(function (field) {
                var control = _this.myForm.get(field);

                control === null || control === void 0 ? void 0 : control.markAsTouched({
                  onlySelf: true
                });
              });
              this.toastService.error({
                message: $localize(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Your form is invalid!"])))
              });
            }
          }
        }]);

        return SelectReactiveFormExampleComponent;
      }();

      SelectReactiveFormExampleComponent.ɵfac = function SelectReactiveFormExampleComponent_Factory(t) {
        return new (t || SelectReactiveFormExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
      };

      SelectReactiveFormExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SelectReactiveFormExampleComponent,
        selectors: [["nui-select-reactive-form"]],
        decls: 5,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_935187492052582731$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_REACTIVE_FORM_SELECT_REACTIVE_FORM_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Submit");
            i18n_0 = MSG_EXTERNAL_935187492052582731$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_REACTIVE_FORM_SELECT_REACTIVE_FORM_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral([":\u241F71c77bb8cecdf11ec3eead24dd1ba506573fa9cd\u241F935187492052582731:Submit"])));
          }

          return [[3, "formGroup", "submit"], [1, "form-group"], ["placeholder", "Select item", "id", "nui-demo-basic-select-reactive-form", "formControlName", "item", 3, "isInErrorState", "itemsSource", "changed"], ["nui-button", "", "type", "submit", 1, "mt-1"], i18n_0];
        },
        template: function SelectReactiveFormExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function SelectReactiveFormExampleComponent_Template_form_submit_0_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nui-select", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("changed", function SelectReactiveFormExampleComponent_Template_nui_select_changed_2_listener($event) {
              return ctx.valueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isInErrorState", ctx.myForm.controls["item"].invalid && ctx.myForm.controls["item"].touched)("itemsSource", ctx.dataset.items);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "5ceo":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-separators/select-separators.example.component.ts ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ceo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { ISelectChangedEvent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-select-separators-example\",\n    templateUrl: \"./select-separators.example.component.html\",\n})\nexport class SelectSeparatorsExampleComponent {\n    public dataset = {\n        itemsInGroups: [\n            {\n                header: $localize `Group 1 header`, items: [$localize `Item 1`, $localize `Item 2`, $localize `Item 3`],\n            },\n            {\n                header: $localize `Group 2 header`,\n                items: [$localize `Item 4`, $localize `Item 5`, $localize `Item 6`],\n            },\n            {\n                header: $localize `Group 3 header`,\n                items: [$localize `Item 7`, $localize `Item 8`, $localize `Item 9`],\n            },\n        ],\n        selectedItem: $localize `Item 1`,\n    };\n\n    constructor() { }\n\n    public valueChange(changedEvent: ISelectChangedEvent<string>) {\n        this.dataset.selectedItem = changedEvent.newValue;\n    }\n}\n";
      /***/
    },

    /***/
    "7PM3":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-custom-template/select-custom-template.example.component.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PM3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-select-custom-template-example\",\n    templateUrl: \"./select-custom-template.example.component.html\",\n    styleUrls: [\n        \"./select-custom-template.example.component.less\",\n    ],\n})\nexport class SelectCustomTemplateExampleComponent {\n    public dataset = {\n        displayValue: \"value\",\n        selectedItem: \"\",\n        items: [\n            {name: \"item_1\", value: \"Bonobo\", icon: \"severity_ok\", progress: 78},\n            {name: \"item_2\", value: \"Zelda\", icon: \"severity_ok\", progress: 66},\n            {name: \"item_3\", value: \"Max\", icon: \"severity_critical\", progress: 7},\n            {name: \"item_4\", value: \"Apple\", icon: \"severity_ok\", progress: 24},\n            {name: \"item_5\", value: \"Quartz\", icon: \"severity_warning\", progress: 89},\n        ],\n    };\n\n    constructor() { }\n}\n";
      /***/
    },

    /***/
    "879K":
    /*!**************************************************!*\
      !*** ./demo/src/components/demo/select/index.ts ***!
      \**************************************************/

    /*! exports provided: SelectDocsComponent, SelectBasicExampleComponent, SelectDisabledExampleComponent, SelectCustomTemplateExampleComponent, SelectSeparatorsExampleComponent, SelectJustifiedExampleComponent, SelectRequiredExampleComponent, SelectReactiveFormExampleComponent, SelectInlineExampleComponent, SelectVisualTestComponent, SelectRemoveValueExampleComponent */

    /***/
    function K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _select_docs_select_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./select-docs/select-docs.example.component */
      "aKIF");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SelectDocsComponent", function () {
        return _select_docs_select_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["SelectDocsComponent"];
      });
      /* harmony import */


      var _select_basic_select_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./select-basic/select-basic.example.component */
      "4VQ1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SelectBasicExampleComponent", function () {
        return _select_basic_select_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["SelectBasicExampleComponent"];
      });
      /* harmony import */


      var _select_disabled_select_disabled_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./select-disabled/select-disabled.example.component */
      "wRB6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SelectDisabledExampleComponent", function () {
        return _select_disabled_select_disabled_example_component__WEBPACK_IMPORTED_MODULE_2__["SelectDisabledExampleComponent"];
      });
      /* harmony import */


      var _select_custom_template_select_custom_template_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./select-custom-template/select-custom-template.example.component */
      "kAxb");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SelectCustomTemplateExampleComponent", function () {
        return _select_custom_template_select_custom_template_example_component__WEBPACK_IMPORTED_MODULE_3__["SelectCustomTemplateExampleComponent"];
      });
      /* harmony import */


      var _select_separators_select_separators_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./select-separators/select-separators.example.component */
      "CgI5");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SelectSeparatorsExampleComponent", function () {
        return _select_separators_select_separators_example_component__WEBPACK_IMPORTED_MODULE_4__["SelectSeparatorsExampleComponent"];
      });
      /* harmony import */


      var _select_justified_select_justified_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./select-justified/select-justified.example.component */
      "LUxX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SelectJustifiedExampleComponent", function () {
        return _select_justified_select_justified_example_component__WEBPACK_IMPORTED_MODULE_5__["SelectJustifiedExampleComponent"];
      });
      /* harmony import */


      var _select_required_select_required_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./select-required/select-required.example.component */
      "3n+k");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SelectRequiredExampleComponent", function () {
        return _select_required_select_required_example_component__WEBPACK_IMPORTED_MODULE_6__["SelectRequiredExampleComponent"];
      });
      /* harmony import */


      var _select_reactive_form_select_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./select-reactive-form/select-reactive-form.example.component */
      "5afS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SelectReactiveFormExampleComponent", function () {
        return _select_reactive_form_select_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_7__["SelectReactiveFormExampleComponent"];
      });
      /* harmony import */


      var _select_inline_select_inline_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./select-inline/select-inline.example.component */
      "muPb");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SelectInlineExampleComponent", function () {
        return _select_inline_select_inline_example_component__WEBPACK_IMPORTED_MODULE_8__["SelectInlineExampleComponent"];
      });
      /* harmony import */


      var _select_visual_test_select_visual_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./select-visual-test/select-visual-test.component */
      "RUy/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SelectVisualTestComponent", function () {
        return _select_visual_test_select_visual_test_component__WEBPACK_IMPORTED_MODULE_9__["SelectVisualTestComponent"];
      });
      /* harmony import */


      var _select_remove_value_select_remove_value_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./select-remove-value/select-remove-value.example.component */
      "kqDR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SelectRemoveValueExampleComponent", function () {
        return _select_remove_value_select_remove_value_example_component__WEBPACK_IMPORTED_MODULE_10__["SelectRemoveValueExampleComponent"];
      });
      /***/

    },

    /***/
    "92Pb":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-reactive-form/select-reactive-form.example.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Pb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form [formGroup]=\"myForm\" (submit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <nui-select placeholder=\"Select item\"\n                    id=\"nui-demo-basic-select-reactive-form\"\n                    formControlName=\"item\"\n                    [isInErrorState]=\"myForm.controls['item'].invalid && myForm.controls['item'].touched\"\n                    [itemsSource]=\"dataset.items\"\n                    (changed)=\"valueChange($event)\"></nui-select>\n        <button nui-button\n                type=\"submit\"\n                class=\"mt-1\"\n                i18n>Submit</button>\n    </div>\n</form>\n";
      /***/
    },

    /***/
    "CgI5":
    /*!**************************************************************************************************!*\
      !*** ./demo/src/components/demo/select/select-separators/select-separators.example.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: SelectSeparatorsExampleComponent */

    /***/
    function CgI5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectSeparatorsExampleComponent", function () {
        return SelectSeparatorsExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/select.component */
      "8Za4");

      var SelectSeparatorsExampleComponent = /*#__PURE__*/function () {
        function SelectSeparatorsExampleComponent() {
          _classCallCheck(this, SelectSeparatorsExampleComponent);

          this.dataset = {
            itemsInGroups: [{
              header: $localize(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["Group 1 header"]))),
              items: [$localize(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["Item 1"]))), $localize(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["Item 2"]))), $localize(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["Item 3"])))]
            }, {
              header: $localize(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["Group 2 header"]))),
              items: [$localize(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["Item 4"]))), $localize(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["Item 5"]))), $localize(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["Item 6"])))]
            }, {
              header: $localize(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["Group 3 header"]))),
              items: [$localize(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["Item 7"]))), $localize(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["Item 8"]))), $localize(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["Item 9"])))]
            }],
            selectedItem: $localize(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["Item 1"])))
          };
        }

        _createClass(SelectSeparatorsExampleComponent, [{
          key: "valueChange",
          value: function valueChange(changedEvent) {
            this.dataset.selectedItem = changedEvent.newValue;
          }
        }]);

        return SelectSeparatorsExampleComponent;
      }();

      SelectSeparatorsExampleComponent.ɵfac = function SelectSeparatorsExampleComponent_Factory(t) {
        return new (t || SelectSeparatorsExampleComponent)();
      };

      SelectSeparatorsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectSeparatorsExampleComponent,
        selectors: [["nui-select-separators-example"]],
        decls: 1,
        vars: 2,
        consts: [["id", "nui-demo-select-separators", 3, "itemsSource", "value", "changed"]],
        template: function SelectSeparatorsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function SelectSeparatorsExampleComponent_Template_nui_select_changed_0_listener($event) {
              return ctx.valueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.dataset.itemsInGroups)("value", ctx.dataset.selectedItem);
          }
        },
        directives: [_src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__["SelectComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "D5oe":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-required/select-required.example.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function D5oe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { ISelectChangedEvent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-select-required-example\",\n    templateUrl: \"./select-required.example.component.html\",\n})\nexport class SelectRequiredExampleComponent {\n    public isRequired = true;\n    public dataset = {\n        items: [\n            $localize `Element 1`,\n            $localize `Element 2`,\n            $localize `Element 3`,\n            $localize `Element 4`,\n            $localize `Element 5`,\n            $localize `Element 6`,\n            $localize `Element 7`,\n            $localize `Element 8`,\n            $localize `Element 9`,\n            $localize `Element 10`,\n        ],\n        selectedItem: \"\",\n    };\n\n    constructor() { }\n\n    public valueChange(changedEvent: ISelectChangedEvent<string>) {\n        this.dataset.selectedItem = changedEvent.newValue;\n    }\n\n    public isInErrorState() {\n        return this.isRequired && !this.dataset.selectedItem;\n    }\n}\n";
      /***/
    },

    /***/
    "H24h":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-inline/select-inline.example.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function H24h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p><span class=\"nui-text-default\" i18n>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>\n    <nui-select id=\"nui-demo-inline-select\"\n                [inline]=\"true\"\n                [itemsSource]=\"dataset.itemsSource1\"\n                i18n-placeholder\n                placeholder=\"Select item\"></nui-select>\n    <nui-select [itemsSource]=\"dataset.itemsSource2\"\n                [inline]=\"true\"\n                i18n-placeholder\n                placeholder=\"Select item\"></nui-select>\n    <span class=\"nui-text-default\" i18n>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>\n</p>\n";
      /***/
    },

    /***/
    "HbR3":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-visual-test/select-visual-test.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HbR3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Basic Select</h3>\n            <nui-select id=\"nui-demo-basic-select\"\n                        [itemsSource]=\"datasetBasic.items\"\n                        placeholder=\"Select item\">\n            </nui-select>\n        </div>\n        <div class=\"col\">\n            <h3>Disabled Select</h3>\n            <nui-select id=\"nui-demo-basic-select-disabled\"\n                        [itemsSource]=\"datasetDisabled.items\"\n                        [value]=\"datasetDisabled.selectedItem\"\n                        [isDisabled]=\"true\">\n            </nui-select>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Required Select</h3>\n            <nui-select id=\"nui-demo-basic-select-required\"\n                        [itemsSource]=\"datasetBasic.items\"\n                        [isInErrorState]=\"isInErrorState()\"\n                        [value]=\"datasetBasic.selectedItem\"\n                        (changed)=\"valueChange($event)\">\n            </nui-select>\n        </div>\n        <div class=\"col\">\n            <h3>Select with separators</h3>\n            <nui-select id=\"nui-demo-select-separators\"\n                        [itemsSource]=\"datasetSeparator.itemsInGroups\"\n                        [value]=\"datasetSeparator.selectedItem\"\n                        (changed)=\"valueChange($event)\">\n            </nui-select>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Inline Select</h3>\n            <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>\n                <nui-select id=\"nui-demo-inline-select\"\n                            [inline]=\"true\"\n                            [itemsSource]=\"datasetBasic.items\"\n                            placeholder=\"Select item\">\n                </nui-select>\n                <span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Filling the Parent Width</h3>\n            <nui-select [value]=\"datasetBasic.selectedItem\"\n                        id=\"nui-demo-select-justified\"\n                        [justified]=\"true\"\n                        [itemsSource]=\"datasetBasic.items\">\n            </nui-select>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Custom Template for Select</h3>\n            <ng-template #customSelectTemplate let-item=\"context\">\n                <div class=\"w-100\">\n                    <nui-icon [icon]=\"item.icon\"></nui-icon>\n                    <div class=\"media-body\" class=\"select-examples-custom-template\">\n                        <h2>{{item.value}}</h2>\n                        <h5>{{item.name}}</h5>\n                        <nui-progress [showProgress]=\"true\"\n                                      [show]=\"true\"\n                                      [percent]=\"item.progress\">\n                        </nui-progress>\n                    </div>\n                </div>\n            </ng-template>\n            <nui-select [value]=\"datasetCustom.selectedItem\"\n                        id=\"nui-demo-select-with-template\"\n                        [justified]=\"true\"\n                        [itemsSource]=\"datasetCustom.items\"\n                        [displayValue]=\"datasetCustom.displayValue\"\n                        [customTemplate]=\"customSelectTemplate\"></nui-select>\n        </div>\n        <div class=\"col\">\n            <h3>Select with Reactive Forms</h3>\n            <form [formGroup]=\"myForm\" (submit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <nui-select placeholder=\"Select item\"\n                                id=\"nui-demo-basic-select-reactive-form\"\n                                formControlName=\"item\"\n                                [isInErrorState]=\"myForm.controls['item'].invalid && myForm.controls['item'].touched\"\n                                [itemsSource]=\"datasetBasic.items\"\n                                (changed)=\"valueChange($event)\"></nui-select>\n                    <button nui-button\n                            type=\"submit\"\n                            class=\"mt-1\">Submit\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "LUxX":
    /*!************************************************************************************************!*\
      !*** ./demo/src/components/demo/select/select-justified/select-justified.example.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: SelectJustifiedExampleComponent */

    /***/
    function LUxX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectJustifiedExampleComponent", function () {
        return SelectJustifiedExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/select.component */
      "8Za4");

      var SelectJustifiedExampleComponent = function SelectJustifiedExampleComponent() {
        _classCallCheck(this, SelectJustifiedExampleComponent);

        this.dataset = {
          items: [$localize(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["Item 1"]))), $localize(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["Item 2"]))), $localize(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["Item 3"]))), $localize(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["Item 4"]))), $localize(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["Item 5"])))],
          selectedItem: $localize(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["Item 1"])))
        };
      };

      SelectJustifiedExampleComponent.ɵfac = function SelectJustifiedExampleComponent_Factory(t) {
        return new (t || SelectJustifiedExampleComponent)();
      };

      SelectJustifiedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectJustifiedExampleComponent,
        selectors: [["nui-select-justified-example"]],
        decls: 1,
        vars: 3,
        consts: [["id", "nui-demo-select-justified", 3, "value", "justified", "itemsSource"]],
        template: function SelectJustifiedExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-select", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.dataset.selectedItem)("justified", true)("itemsSource", ctx.dataset.items);
          }
        },
        directives: [_src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__["SelectComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "LnjU":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-basic/select-basic.example.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LnjU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-select id=\"nui-demo-basic-select\"\n            [itemsSource]=\"dataset.items\"\n            i18n-placeholder\n            placeholder=\"Select item\"></nui-select>\n";
      /***/
    },

    /***/
    "N8sl":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-remove-value/select-remove-value.example.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function N8sl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-select id=\"nui-demo-select-remove-value\"\n    [itemsSource]=\"dataset.items\"\n    i18n-removeValueText\n    i18n-placeholder\n    [isRemoveValueEnabled]=\"true\"\n    removeValueText=\"None\"\n    placeholder=\"Please select...\"\n></nui-select>\n";
      /***/
    },

    /***/
    "NlVU":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-disabled/select-disabled.example.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NlVU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-select id=\"nui-demo-basic-select-disabled\"\n            [itemsSource]=\"dataset.items\"\n            [value]=\"dataset.selectedItem\"\n            [isDisabled]=\"true\"></nui-select>\n";
      /***/
    },

    /***/
    "O4m/":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-remove-value/select-remove-value.example.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function O4m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { ChangeDetectionStrategy, Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-select-remove-value\",\n    templateUrl: \"./select-remove-value.example.component.html\",\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SelectRemoveValueExampleComponent {\n    public dataset = {\n        items: [\n            $localize `Item 1`,\n            $localize `Item 2`,\n            $localize `Item 3`,\n            $localize `Item 4`,\n            $localize `Item 5`,\n        ],\n    };\n\n    constructor() { }\n}\n";
      /***/
    },

    /***/
    "RUy/":
    /*!********************************************************************************************!*\
      !*** ./demo/src/components/demo/select/select-visual-test/select-visual-test.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: SelectVisualTestComponent */

    /***/
    function RUy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectVisualTestComponent", function () {
        return SelectVisualTestComponent;
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


      var _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/select.component */
      "8Za4");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icon.component */
      "45Bz");
      /* harmony import */


      var _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/progress/progress.component */
      "FA8p");

      function SelectVisualTestComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nui-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "nui-progress", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.context;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", item_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showProgress", true)("show", true)("percent", item_r2.progress);
        }
      }

      var SelectVisualTestComponent = /*#__PURE__*/function () {
        function SelectVisualTestComponent(formBuilder) {
          _classCallCheck(this, SelectVisualTestComponent);

          this.formBuilder = formBuilder;
          this.isRequired = true;
          this.datasetBasic = {
            items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"],
            selectedItem: ""
          };
          this.datasetDisabled = {
            items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
            selectedItem: "Item 1"
          };
          this.datasetSeparator = {
            itemsInGroups: [{
              header: $localize(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["Group 1 header"]))),
              items: [$localize(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["Item 1"]))), $localize(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["Item 2"]))), $localize(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["Item 3"])))]
            }, {
              header: $localize(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["Group 2 header"]))),
              items: [$localize(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["Item 4"]))), $localize(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["Item 5"]))), $localize(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["Item 6"])))]
            }, {
              header: $localize(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["Group 3 header"]))),
              items: [$localize(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["Item 7"]))), $localize(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["Item 8"]))), $localize(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["Item 9"])))]
            }],
            selectedItem: $localize(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["Item 1"])))
          };
          this.datasetCustom = {
            displayValue: "value",
            selectedItem: "",
            items: [{
              name: "item_1",
              value: "Bonobo",
              icon: "severity_ok",
              progress: 78
            }, {
              name: "item_2",
              value: "Zelda",
              icon: "severity_ok",
              progress: 66
            }, {
              name: "item_3",
              value: "Max",
              icon: "severity_critical",
              progress: 7
            }, {
              name: "item_4",
              value: "Apple",
              icon: "severity_ok",
              progress: 24
            }, {
              name: "item_5",
              value: "Quartz",
              icon: "severity_warning",
              progress: 89
            }]
          };
        }

        _createClass(SelectVisualTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.formBuilder.group({
              item: this.formBuilder.control(this.datasetBasic.selectedItem, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            if (!this.myForm.valid) {
              // if form is invalid mark all controls as touched to trigger isInErrorState
              Object.keys(this.myForm.controls).forEach(function (field) {
                var control = _this2.myForm.get(field);

                control === null || control === void 0 ? void 0 : control.markAsTouched({
                  onlySelf: true
                });
              });
            }
          }
        }, {
          key: "valueChange",
          value: function valueChange(changedEvent) {
            this.datasetBasic.selectedItem = changedEvent.newValue;
          }
        }, {
          key: "isInErrorState",
          value: function isInErrorState() {
            return this.isRequired && !this.datasetBasic.selectedItem;
          }
        }]);

        return SelectVisualTestComponent;
      }();

      SelectVisualTestComponent.ɵfac = function SelectVisualTestComponent_Factory(t) {
        return new (t || SelectVisualTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      SelectVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SelectVisualTestComponent,
        selectors: [["nui-select-visual"]],
        decls: 49,
        vars: 22,
        consts: [[1, "container"], [1, "row"], [1, "col"], ["id", "nui-demo-basic-select", "placeholder", "Select item", 3, "itemsSource"], ["id", "nui-demo-basic-select-disabled", 3, "itemsSource", "value", "isDisabled"], ["id", "nui-demo-basic-select-required", 3, "itemsSource", "isInErrorState", "value", "changed"], ["id", "nui-demo-select-separators", 3, "itemsSource", "value", "changed"], ["id", "nui-demo-inline-select", "placeholder", "Select item", 3, "inline", "itemsSource"], ["id", "nui-demo-select-justified", 3, "value", "justified", "itemsSource"], ["customSelectTemplate", ""], ["id", "nui-demo-select-with-template", 3, "value", "justified", "itemsSource", "displayValue", "customTemplate"], [3, "formGroup", "submit"], [1, "form-group"], ["placeholder", "Select item", "id", "nui-demo-basic-select-reactive-form", "formControlName", "item", 3, "isInErrorState", "itemsSource", "changed"], ["nui-button", "", "type", "submit", 1, "mt-1"], [1, "w-100"], [3, "icon"], [1, "select-examples-custom-template"], [3, "showProgress", "show", "percent"]],
        template: function SelectVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Basic Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nui-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Disabled Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "nui-select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Required Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nui-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function SelectVisualTestComponent_Template_nui_select_changed_14_listener($event) {
              return ctx.valueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Select with separators");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nui-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function SelectVisualTestComponent_Template_nui_select_changed_18_listener($event) {
              return ctx.valueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Inline Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "nui-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Filling the Parent Width");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "nui-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Custom Template for Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, SelectVisualTestComponent_ng_template_38_Template, 8, 6, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "nui-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Select with Reactive Forms");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SelectVisualTestComponent_Template_form_submit_44_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "nui-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function SelectVisualTestComponent_Template_nui_select_changed_46_listener($event) {
              return ctx.valueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.datasetBasic.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.datasetDisabled.items)("value", ctx.datasetDisabled.selectedItem)("isDisabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.datasetBasic.items)("isInErrorState", ctx.isInErrorState())("value", ctx.datasetBasic.selectedItem);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.datasetSeparator.itemsInGroups)("value", ctx.datasetSeparator.selectedItem);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inline", true)("itemsSource", ctx.datasetBasic.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.datasetBasic.selectedItem)("justified", true)("itemsSource", ctx.datasetBasic.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.datasetCustom.selectedItem)("justified", true)("itemsSource", ctx.datasetCustom.items)("displayValue", ctx.datasetCustom.displayValue)("customTemplate", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isInErrorState", ctx.myForm.controls["item"].invalid && ctx.myForm.controls["item"].touched)("itemsSource", ctx.datasetBasic.items);
          }
        },
        directives: [_src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_2__["SelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_5__["ProgressComponent"]],
        styles: [".select-examples-custom-template[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1jdXN0b20tdGVtcGxhdGUuZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0FBQVIiLCJmaWxlIjoic2VsZWN0LWN1c3RvbS10ZW1wbGF0ZS5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdC1leGFtcGxlcyB7XG4gICAgJi1jdXN0b20tdGVtcGxhdGUge1xuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "SATo":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-disabled/select-disabled.example.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SATo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-select-disabled-example\",\n    templateUrl: \"./select-disabled.example.component.html\",\n})\nexport class SelectDisabledExampleComponent {\n    public dataset = {\n        items: [$localize `Item 1`, $localize `Item 2`, $localize `Item 3`, $localize `Item 4`, $localize `Item 5`],\n        selectedItem: $localize `Item 1`,\n    };\n\n    constructor() { }\n}\n";
      /***/
    },

    /***/
    "SxoB":
    /*!*********************************************************************************************************!*\
      !*** ./demo/src/components/demo/select sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*********************************************************************************************************/

    /*! no static exports found */

    /***/
    function SxoB(module, exports, __webpack_require__) {
      var map = {
        "./index.ts": "s14o",
        "./select-basic/select-basic.example.component.html": "LnjU",
        "./select-basic/select-basic.example.component.ts": "aGeM",
        "./select-custom-template/select-custom-template.example.component.html": "pijc",
        "./select-custom-template/select-custom-template.example.component.less": "ikI2",
        "./select-custom-template/select-custom-template.example.component.ts": "7PM3",
        "./select-disabled/select-disabled.example.component.html": "NlVU",
        "./select-disabled/select-disabled.example.component.ts": "SATo",
        "./select-docs/select-docs.example.component.html": "0sxz",
        "./select-docs/select-docs.example.component.ts": "e2fp",
        "./select-inline/select-inline.example.component.html": "H24h",
        "./select-inline/select-inline.example.component.ts": "snUl",
        "./select-justified/select-justified.example.component.html": "X7dD",
        "./select-justified/select-justified.example.component.ts": "y602",
        "./select-reactive-form/select-reactive-form.example.component.html": "92Pb",
        "./select-reactive-form/select-reactive-form.example.component.ts": "sMOD",
        "./select-remove-value/select-remove-value.example.component.html": "N8sl",
        "./select-remove-value/select-remove-value.example.component.ts": "O4m/",
        "./select-required/select-required.example.component.html": "its0",
        "./select-required/select-required.example.component.ts": "D5oe",
        "./select-separators/select-separators.example.component.html": "m2ve",
        "./select-separators/select-separators.example.component.ts": "5ceo",
        "./select-visual-test/select-visual-test.component.html": "HbR3",
        "./select-visual-test/select-visual-test.component.ts": "eFhT",
        "./select.module.ts": "nTYk"
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
      webpackContext.id = "SxoB";
      /***/
    },

    /***/
    "X7dD":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-justified/select-justified.example.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X7dD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-select [value]=\"dataset.selectedItem\"\n            id=\"nui-demo-select-justified\"\n            [justified]=\"true\"\n            [itemsSource]=\"dataset.items\"></nui-select>\n";
      /***/
    },

    /***/
    "aGeM":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-basic/select-basic.example.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aGeM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { ChangeDetectionStrategy, Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-select-basic-example\",\n    templateUrl: \"./select-basic.example.component.html\",\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SelectBasicExampleComponent {\n    public dataset = {\n        items: [\n            $localize `Item 1`,\n            $localize `Item 2`,\n            $localize `Item 3`,\n            $localize `Item 4`,\n            $localize `Item 5`,\n            $localize `Item 6`,\n            $localize `Item 7`,\n            $localize `Item 8`,\n            $localize `Item 9`,\n            $localize `Item 10`,\n            $localize `Item 11`,\n            $localize `Item 12`,\n            $localize `Item 13`,\n            $localize `Item 14`,\n            $localize `Item 15`,\n            $localize `Item 16`,\n            $localize `Item 17`,\n            $localize `Item 18`,\n            $localize `Item 19`,\n            $localize `Item 20`,\n        ],\n    };\n\n    constructor() { }\n}\n";
      /***/
    },

    /***/
    "aKIF":
    /*!**************************************************************************************!*\
      !*** ./demo/src/components/demo/select/select-docs/select-docs.example.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: SelectDocsComponent */

    /***/
    function aKIF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectDocsComponent", function () {
        return SelectDocsComponent;
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


      var _select_basic_select_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../select-basic/select-basic.example.component */
      "4VQ1");
      /* harmony import */


      var _select_disabled_select_disabled_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../select-disabled/select-disabled.example.component */
      "wRB6");
      /* harmony import */


      var _select_required_select_required_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../select-required/select-required.example.component */
      "3n+k");
      /* harmony import */


      var _select_inline_select_inline_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../select-inline/select-inline.example.component */
      "muPb");
      /* harmony import */


      var _select_separators_select_separators_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../select-separators/select-separators.example.component */
      "CgI5");
      /* harmony import */


      var _select_justified_select_justified_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../select-justified/select-justified.example.component */
      "LUxX");
      /* harmony import */


      var _select_custom_template_select_custom_template_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../select-custom-template/select-custom-template.example.component */
      "kAxb");
      /* harmony import */


      var _select_reactive_form_select_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../select-reactive-form/select-reactive-form.example.component */
      "5afS");
      /* harmony import */


      var _select_remove_value_select_remove_value_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../select-remove-value/select-remove-value.example.component */
      "kqDR");

      var SelectDocsComponent = function SelectDocsComponent() {
        _classCallCheck(this, SelectDocsComponent);
      };

      SelectDocsComponent.ɵfac = function SelectDocsComponent_Factory(t) {
        return new (t || SelectDocsComponent)();
      };

      SelectDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectDocsComponent,
        selectors: [["nui-select-docs-example"]],
        decls: 138,
        vars: 0,
        consts: [["filenamePrefix", "select-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "select-disabled", "exampleTitle", "Disabled"], ["href", "../interfaces/ISelectChangedEvent.html", "target", "_blank"], ["filenamePrefix", "select-required", "exampleTitle", "Required"], ["filenamePrefix", "select-inline", "exampleTitle", "Inline"], ["href", "../interfaces/ISelectGroup.html", "target", "_blank"], ["filenamePrefix", "select-separators", "exampleTitle", "Select with separators"], ["filenamePrefix", "select-justified", "exampleTitle", "Filling the Parent Width"], ["filenamePrefix", "select-custom-template", "exampleTitle", "Select with custom template"], ["filenamePrefix", "select-reactive-form", "exampleTitle", "Using With Reactive Forms"], ["filenamePrefix", "select-remove-value", "exampleTitle", "Using With Default Value"]],
        template: function SelectDocsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<nui-select>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " allows user to select one item from a list. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " maximum width of select dropdown menu is 400px (except for stretched select, where select itself and select dropdown menu are justified to the width of container element).\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " To implement basic select you need to pass data via ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "itemsSource");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " input. Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " input to display placeholder. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " receives item that will be selected before user starts to communicate with select component. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "itemsSource");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " data must be an array of strings.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-example-wrapper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "nui-select-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " To disable select use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "isDisabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " property.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "nui-select-disabled-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " The option ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "isInErrorState");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " is used to set/change conditional \"required\" validation. This is quick way to set select as required instead of passing config object into validator. Use it to highlight error if field is set to empty and you are not interested in specific message. To subscribe to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "changed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " event you should pass a function, argument of which is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "ISelectChangedEvent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " object.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "nui-select-required-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Inline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " To make select inline you need to use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "inline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " property. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " As you see there are no spacings between ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "nui-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "s in this example because spacings should be handled by users themselves (users should use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "@nui-space-md");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " spacing if they want to have several selects next to each other).\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "nui-example-wrapper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nui-select-inline-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Separators");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " If you want to have grouped data you need to pass data as an array of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "ISelectGroup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "nui-select-separators-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Filling the Parent Width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " For select to fill it's parent width you may pass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "justified");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " property.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "nui-example-wrapper", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "nui-select-justified-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Using a Custom Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " To provide custom template for every item in select you need to link ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "customTemplate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " input with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "TemplateRef");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " that represents custom template.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "nui-example-wrapper", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "nui-select-custom-template-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Using With Reactive Forms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " To use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "nui-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " in reactive forms you need to create ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "FormGroup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " that represents our form model. After that you can bind ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "nui-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " to this form element using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "formControlName");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "nui-example-wrapper", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "nui-select-reactive-form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Select with a Possibility to Unselect Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " To have a possibility to use unselect value ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "isRemoveValueEnabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " input set to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " should be provided. This in turn will add an item to dropdown with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Unspecified");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " label. To customize this label text, please use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "removeValueText");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "nui-example-wrapper", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "nui-select-remove-value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _select_basic_select_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["SelectBasicExampleComponent"], _select_disabled_select_disabled_example_component__WEBPACK_IMPORTED_MODULE_3__["SelectDisabledExampleComponent"], _select_required_select_required_example_component__WEBPACK_IMPORTED_MODULE_4__["SelectRequiredExampleComponent"], _select_inline_select_inline_example_component__WEBPACK_IMPORTED_MODULE_5__["SelectInlineExampleComponent"], _select_separators_select_separators_example_component__WEBPACK_IMPORTED_MODULE_6__["SelectSeparatorsExampleComponent"], _select_justified_select_justified_example_component__WEBPACK_IMPORTED_MODULE_7__["SelectJustifiedExampleComponent"], _select_custom_template_select_custom_template_example_component__WEBPACK_IMPORTED_MODULE_8__["SelectCustomTemplateExampleComponent"], _select_reactive_form_select_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_9__["SelectReactiveFormExampleComponent"], _select_remove_value_select_remove_value_example_component__WEBPACK_IMPORTED_MODULE_10__["SelectRemoveValueExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "ddGX":
    /*!**********************************************************!*\
      !*** ./demo/src/components/demo/select/select.module.ts ***!
      \**********************************************************/

    /*! exports provided: SelectModule */

    /***/
    function ddGX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectModule", function () {
        return SelectModule;
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
      "879K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["SelectDocsComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].support,
            "eolDate": new Date("2020-07-09")
          },
          showThemeSwitcher: true
        }
      }, {
        path: "basic",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["SelectBasicExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "select-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["SelectVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "select-reactive-form",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["SelectReactiveFormExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var SelectModule = function SelectModule() {
        _classCallCheck(this, SelectModule);
      };

      SelectModule.ɵfac = function SelectModule_Factory(t) {
        return new (t || SelectModule)();
      };

      SelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: SelectModule
      });
      SelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("SxoB");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiProgressModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SelectModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["SelectBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["SelectCustomTemplateExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["SelectDisabledExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["SelectDocsComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["SelectInlineExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["SelectJustifiedExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["SelectReactiveFormExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["SelectRequiredExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["SelectSeparatorsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["SelectVisualTestComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["SelectRemoveValueExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiProgressModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "e2fp":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-docs/select-docs.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e2fp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-select-docs-example\",\n    templateUrl: \"./select-docs.example.component.html\",\n})\nexport class SelectDocsComponent {\n}\n";
      /***/
    },

    /***/
    "eFhT":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-visual-test/select-visual-test.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eFhT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport { ISelectChangedEvent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-select-visual\",\n    templateUrl: \"./select-visual-test.component.html\",\n    styleUrls: [\"../select-custom-template/select-custom-template.example.component.less\"],\n\n})\nexport class SelectVisualTestComponent implements OnInit {\n    public isRequired = true;\n    public myForm: FormGroup;\n    public datasetBasic = {\n        items: [\"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\", \"Item 6\", \"Item 7\", \"Item 8\", \"Item 9\", \"Item 10\"],\n        selectedItem: \"\",\n    };\n    public datasetDisabled = {\n        items: [\"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\"],\n        selectedItem: \"Item 1\",\n    };\n\n    public datasetSeparator = {\n        itemsInGroups: [\n            {\n                header: $localize `Group 1 header`,\n                items: [$localize `Item 1`, $localize `Item 2`, $localize `Item 3`],\n            },\n            {\n                header: $localize `Group 2 header`,\n                items: [$localize `Item 4`, $localize `Item 5`, $localize `Item 6`],\n            },\n            {\n                header: $localize `Group 3 header`,\n                items: [$localize `Item 7`, $localize `Item 8`, $localize `Item 9`],\n            },\n        ],\n        selectedItem: $localize `Item 1`,\n    };\n\n\n    constructor(private formBuilder: FormBuilder) {\n    }\n\n    public datasetCustom = {\n        displayValue: \"value\",\n        selectedItem: \"\",\n        items: [\n            {name: \"item_1\", value: \"Bonobo\", icon: \"severity_ok\", progress: 78},\n            {name: \"item_2\", value: \"Zelda\", icon: \"severity_ok\", progress: 66},\n            {name: \"item_3\", value: \"Max\", icon: \"severity_critical\", progress: 7},\n            {name: \"item_4\", value: \"Apple\", icon: \"severity_ok\", progress: 24},\n            {name: \"item_5\", value: \"Quartz\", icon: \"severity_warning\", progress: 89},\n        ],\n    };\n\n    public ngOnInit() {\n        this.myForm = this.formBuilder.group({\n            item: this.formBuilder.control(this.datasetBasic.selectedItem, [Validators.required]),\n        });\n    }\n\n    public onSubmit() {\n        if (!this.myForm.valid) {\n            // if form is invalid mark all controls as touched to trigger isInErrorState\n            Object.keys(this.myForm.controls).forEach(field => {\n                const control = this.myForm.get(field);\n                control?.markAsTouched({onlySelf: true});\n            });\n        }\n    }\n\n    public valueChange(changedEvent: ISelectChangedEvent<string>) {\n        this.datasetBasic.selectedItem = changedEvent.newValue;\n    }\n\n    public isInErrorState() {\n        return this.isRequired && !this.datasetBasic.selectedItem;\n    }\n\n}\n";
      /***/
    },

    /***/
    "ikI2":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-custom-template/select-custom-template.example.component.less ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ikI2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".select-examples {\n    &-custom-template {\n        min-width: 300px;\n    }\n}\n";
      /***/
    },

    /***/
    "its0":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-required/select-required.example.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function its0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-select id=\"nui-demo-basic-select-required\"\n            [itemsSource]=\"dataset.items\"\n            [isInErrorState]=\"isInErrorState()\"\n            [value]=\"dataset.selectedItem\"\n            (changed)=\"valueChange($event)\"></nui-select>\n";
      /***/
    },

    /***/
    "kAxb":
    /*!************************************************************************************************************!*\
      !*** ./demo/src/components/demo/select/select-custom-template/select-custom-template.example.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: SelectCustomTemplateExampleComponent */

    /***/
    function kAxb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectCustomTemplateExampleComponent", function () {
        return SelectCustomTemplateExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/select.component */
      "8Za4");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icon.component */
      "45Bz");
      /* harmony import */


      var _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/progress/progress.component */
      "FA8p");

      function SelectCustomTemplateExampleComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nui-progress", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.context;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showProgress", true)("show", true)("percent", item_r2.progress);
        }
      }

      var SelectCustomTemplateExampleComponent = function SelectCustomTemplateExampleComponent() {
        _classCallCheck(this, SelectCustomTemplateExampleComponent);

        this.dataset = {
          displayValue: "value",
          selectedItem: "",
          items: [{
            name: "item_1",
            value: "Bonobo",
            icon: "severity_ok",
            progress: 78
          }, {
            name: "item_2",
            value: "Zelda",
            icon: "severity_ok",
            progress: 66
          }, {
            name: "item_3",
            value: "Max",
            icon: "severity_critical",
            progress: 7
          }, {
            name: "item_4",
            value: "Apple",
            icon: "severity_ok",
            progress: 24
          }, {
            name: "item_5",
            value: "Quartz",
            icon: "severity_warning",
            progress: 89
          }]
        };
      };

      SelectCustomTemplateExampleComponent.ɵfac = function SelectCustomTemplateExampleComponent_Factory(t) {
        return new (t || SelectCustomTemplateExampleComponent)();
      };

      SelectCustomTemplateExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectCustomTemplateExampleComponent,
        selectors: [["nui-select-custom-template-example"]],
        decls: 3,
        vars: 4,
        consts: [["customSelectTemplate", ""], ["id", "nui-demo-select-with-template", 3, "value", "itemsSource", "displayValue", "customTemplate"], [3, "icon"], [1, "select-examples-custom-template"], [3, "showProgress", "show", "percent"]],
        template: function SelectCustomTemplateExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectCustomTemplateExampleComponent_ng_template_0_Template, 7, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-select", 1);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.dataset.selectedItem)("itemsSource", ctx.dataset.items)("displayValue", ctx.dataset.displayValue)("customTemplate", _r0);
          }
        },
        directives: [_src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__["SelectComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"], _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_3__["ProgressComponent"]],
        styles: [".select-examples-custom-template[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1jdXN0b20tdGVtcGxhdGUuZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0FBQVIiLCJmaWxlIjoic2VsZWN0LWN1c3RvbS10ZW1wbGF0ZS5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdC1leGFtcGxlcyB7XG4gICAgJi1jdXN0b20tdGVtcGxhdGUge1xuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "kqDR":
    /*!******************************************************************************************************!*\
      !*** ./demo/src/components/demo/select/select-remove-value/select-remove-value.example.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: SelectRemoveValueExampleComponent */

    /***/
    function kqDR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectRemoveValueExampleComponent", function () {
        return SelectRemoveValueExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/select.component */
      "8Za4");

      var SelectRemoveValueExampleComponent = function SelectRemoveValueExampleComponent() {
        _classCallCheck(this, SelectRemoveValueExampleComponent);

        this.dataset = {
          items: [$localize(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["Item 1"]))), $localize(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["Item 2"]))), $localize(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["Item 3"]))), $localize(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["Item 4"]))), $localize(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["Item 5"])))]
        };
      };

      SelectRemoveValueExampleComponent.ɵfac = function SelectRemoveValueExampleComponent_Factory(t) {
        return new (t || SelectRemoveValueExampleComponent)();
      };

      SelectRemoveValueExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectRemoveValueExampleComponent,
        selectors: [["nui-select-remove-value"]],
        decls: 1,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6252070156626006029$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_REMOVE_VALUE_SELECT_REMOVE_VALUE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("None");
            i18n_0 = MSG_EXTERNAL_6252070156626006029$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_REMOVE_VALUE_SELECT_REMOVE_VALUE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral([":\u241Fa2f14a73f7a6e94479f67423cc51102da8d6f524\u241F6252070156626006029:None"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1503905231656505102$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_REMOVE_VALUE_SELECT_REMOVE_VALUE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Please select...");
            i18n_2 = MSG_EXTERNAL_1503905231656505102$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_REMOVE_VALUE_SELECT_REMOVE_VALUE_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral([":\u241F3de6ec1b3ee4731206abe12363a5534d3cbca5d6\u241F1503905231656505102:Please select..."])));
          }

          return [["id", "nui-demo-select-remove-value", "removeValueText", i18n_0, "placeholder", i18n_2, 3, "itemsSource", "isRemoveValueEnabled"]];
        },
        template: function SelectRemoveValueExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-select", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.dataset.items)("isRemoveValueEnabled", true);
          }
        },
        directives: [_src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__["SelectComponent"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    "m2ve":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-separators/select-separators.example.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function m2ve(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-select id=\"nui-demo-select-separators\"\n            [itemsSource]=\"dataset.itemsInGroups\"\n            [value]=\"dataset.selectedItem\"\n            (changed)=\"valueChange($event)\"></nui-select>\n";
      /***/
    },

    /***/
    "muPb":
    /*!******************************************************************************************!*\
      !*** ./demo/src/components/demo/select/select-inline/select-inline.example.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: SelectInlineExampleComponent */

    /***/
    function muPb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectInlineExampleComponent", function () {
        return SelectInlineExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/select.component */
      "8Za4");

      var SelectInlineExampleComponent = function SelectInlineExampleComponent() {
        _classCallCheck(this, SelectInlineExampleComponent);

        this.dataset = {
          itemsSource1: [$localize(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["Item 1"]))), $localize(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["Item 2"]))), $localize(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["Item 3"]))), $localize(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["Item 4"]))), $localize(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["Item 5"])))],
          itemsSource2: [$localize(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["Item 6"]))), $localize(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["Item 7"]))), $localize(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["Item 8"]))), $localize(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["Item 9"]))), $localize(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["Item 10"])))]
        };
      };

      SelectInlineExampleComponent.ɵfac = function SelectInlineExampleComponent_Factory(t) {
        return new (t || SelectInlineExampleComponent)();
      };

      SelectInlineExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectInlineExampleComponent,
        selectors: [["nui-select-inline-example"]],
        decls: 7,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1001210701612150946$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_INLINE_SELECT_INLINE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.");
            i18n_0 = MSG_EXTERNAL_1001210701612150946$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_INLINE_SELECT_INLINE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral([":\u241F41c1b736fcff876ec288fbaeaf95bde14966c836\u241F1001210701612150946:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_INLINE_SELECT_INLINE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Select item");
            i18n_2 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_INLINE_SELECT_INLINE_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_INLINE_SELECT_INLINE_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Select item");
            i18n_4 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_INLINE_SELECT_INLINE_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2287774527777683722$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_INLINE_SELECT_INLINE_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
            i18n_6 = MSG_EXTERNAL_2287774527777683722$$DEMO_SRC_COMPONENTS_DEMO_SELECT_SELECT_INLINE_SELECT_INLINE_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral([":\u241F14968d651221ff5c8870c3472288cd3334b70534\u241F2287774527777683722:Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."])));
          }

          return [[1, "nui-text-default"], i18n_0, ["id", "nui-demo-inline-select", "placeholder", i18n_2, 3, "inline", "itemsSource"], ["placeholder", i18n_4, 3, "itemsSource", "inline"], i18n_6];
        },
        template: function SelectInlineExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-select", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nui-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true)("itemsSource", ctx.dataset.itemsSource1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.dataset.itemsSource2)("inline", true);
          }
        },
        directives: [_src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__["SelectComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "nTYk":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nTYk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiDocsModule,\n    NuiIconModule,\n    NuiProgressModule,\n    NuiSelectModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    SelectBasicExampleComponent,\n    SelectCustomTemplateExampleComponent,\n    SelectDisabledExampleComponent,\n    SelectDocsComponent,\n    SelectInlineExampleComponent,\n    SelectJustifiedExampleComponent,\n    SelectReactiveFormExampleComponent,\n    SelectRemoveValueExampleComponent,\n    SelectRequiredExampleComponent,\n    SelectSeparatorsExampleComponent,\n    SelectVisualTestComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: SelectDocsComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.support,\n                \"eolDate\": new Date(\"2020-07-09\"),\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"basic\",\n        component: SelectBasicExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"select-visual-test\",\n        component: SelectVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"select-reactive-form\",\n        component: SelectReactiveFormExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiIconModule,\n        NuiProgressModule,\n        NuiSelectModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        SelectBasicExampleComponent,\n        SelectCustomTemplateExampleComponent,\n        SelectDisabledExampleComponent,\n        SelectDocsComponent,\n        SelectInlineExampleComponent,\n        SelectJustifiedExampleComponent,\n        SelectReactiveFormExampleComponent,\n        SelectRequiredExampleComponent,\n        SelectSeparatorsExampleComponent,\n        SelectVisualTestComponent,\n        SelectRemoveValueExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class SelectModule {\n}\n";
      /***/
    },

    /***/
    "pijc":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-custom-template/select-custom-template.example.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pijc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-template #customSelectTemplate let-item=\"context\">\n    <nui-icon [icon]=\"item.icon\"></nui-icon>\n    <div class=\"media-body\" class=\"select-examples-custom-template\">\n        <h2>{{item.value}}</h2>\n        <h5>{{item.name}}</h5>\n        <nui-progress [showProgress]=\"true\"\n                      [show]=\"true\"\n                      [percent]=\"item.progress\"></nui-progress>\n    </div>\n</ng-template>\n<nui-select [value]=\"dataset.selectedItem\"\n            id=\"nui-demo-select-with-template\"\n            [itemsSource]=\"dataset.items\"\n            [displayValue]=\"dataset.displayValue\"\n            [customTemplate]=\"customSelectTemplate\"></nui-select>\n";
      /***/
    },

    /***/
    "s14o":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/index.ts ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function s14o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./select-docs/select-docs.example.component\";\nexport * from \"./select-basic/select-basic.example.component\";\nexport * from \"./select-disabled/select-disabled.example.component\";\nexport * from \"./select-custom-template/select-custom-template.example.component\";\nexport * from \"./select-separators/select-separators.example.component\";\nexport * from \"./select-justified/select-justified.example.component\";\nexport * from \"./select-required/select-required.example.component\";\nexport * from \"./select-reactive-form/select-reactive-form.example.component\";\nexport * from \"./select-inline/select-inline.example.component\";\nexport * from \"./select-visual-test/select-visual-test.component\";\nexport * from \"./select-remove-value/select-remove-value.example.component\";\n";
      /***/
    },

    /***/
    "sMOD":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-reactive-form/select-reactive-form.example.component.ts ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sMOD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport { ISelectChangedEvent, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-select-reactive-form\",\n    templateUrl: \"./select-reactive-form.example.component.html\",\n})\nexport class SelectReactiveFormExampleComponent implements OnInit {\n    public myForm: FormGroup;\n    public dataset = {\n        items: [$localize `Item 1`, $localize `Item 2`, $localize `Item 3`, $localize `Item 4`, $localize `Item 5`],\n        selectedItem: \"\",\n    };\n\n    constructor(private formBuilder: FormBuilder,\n        @Inject(ToastService) private toastService: ToastService) { }\n\n    public ngOnInit() {\n        this.myForm = this.formBuilder.group({\n            item: this.formBuilder.control( this.dataset.selectedItem, [Validators.required]),\n        });\n        this.myForm.controls[\"item\"].valueChanges.subscribe(value => console.log(\"Value changed to\", value));\n    }\n\n    public valueChange(changedEvent: ISelectChangedEvent<string>) {\n        this.dataset.selectedItem = changedEvent.newValue;\n    }\n\n    public onSubmit() {\n        if (this.myForm.valid) {\n            this.toastService.success({message: $localize `Your form is valid!`});\n        } else {\n            // if form is invalid mark all controls as touched to trigger isInErrorState\n            Object.keys(this.myForm.controls).forEach(field => {\n                const control = this.myForm.get(field);\n                control?.markAsTouched({onlySelf: true});\n            });\n            this.toastService.error({message: $localize `Your form is invalid!`});\n        }\n    }\n}\n";
      /***/
    },

    /***/
    "snUl":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-inline/select-inline.example.component.ts ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function snUl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-select-inline-example\",\n    templateUrl: \"select-inline.example.component.html\",\n})\n\nexport class SelectInlineExampleComponent {\n    public dataset = {\n        itemsSource1: [$localize `Item 1`, $localize `Item 2`, $localize `Item 3`, $localize `Item 4`, $localize `Item 5`],\n        itemsSource2: [$localize `Item 6`, $localize `Item 7`, $localize `Item 8`, $localize `Item 9`, $localize `Item 10`],\n    };\n\n    constructor() { }\n}\n";
      /***/
    },

    /***/
    "wRB6":
    /*!**********************************************************************************************!*\
      !*** ./demo/src/components/demo/select/select-disabled/select-disabled.example.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: SelectDisabledExampleComponent */

    /***/
    function wRB6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectDisabledExampleComponent", function () {
        return SelectDisabledExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/select.component */
      "8Za4");

      var SelectDisabledExampleComponent = function SelectDisabledExampleComponent() {
        _classCallCheck(this, SelectDisabledExampleComponent);

        this.dataset = {
          items: [$localize(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["Item 1"]))), $localize(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["Item 2"]))), $localize(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["Item 3"]))), $localize(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["Item 4"]))), $localize(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["Item 5"])))],
          selectedItem: $localize(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["Item 1"])))
        };
      };

      SelectDisabledExampleComponent.ɵfac = function SelectDisabledExampleComponent_Factory(t) {
        return new (t || SelectDisabledExampleComponent)();
      };

      SelectDisabledExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectDisabledExampleComponent,
        selectors: [["nui-select-disabled-example"]],
        decls: 1,
        vars: 3,
        consts: [["id", "nui-demo-basic-select-disabled", 3, "itemsSource", "value", "isDisabled"]],
        template: function SelectDisabledExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-select", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.dataset.items)("value", ctx.dataset.selectedItem)("isDisabled", true);
          }
        },
        directives: [_src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_1__["SelectComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "y602":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select/select-justified/select-justified.example.component.ts ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function y602(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-select-justified-example\",\n    templateUrl: \"./select-justified.example.component.html\",\n})\nexport class SelectJustifiedExampleComponent {\n    public dataset = {\n        items: [$localize `Item 1`, $localize `Item 2`, $localize `Item 3`, $localize `Item 4`, $localize `Item 5`],\n        selectedItem: $localize `Item 1`,\n    };\n\n    constructor() { }\n}\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-select-select-module-es5.js.map