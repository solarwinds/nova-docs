(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-combobox-combobox-module"], {
    /***/
    "+vj5":
    /*!**************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-reactive-form/combobox-reactive-form.example.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: ComboboxReactiveFormExampleComponent */

    /***/
    function vj5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxReactiveFormExampleComponent", function () {
        return ComboboxReactiveFormExampleComponent;
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


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ComboboxReactiveFormExampleComponent = /*#__PURE__*/function () {
        function ComboboxReactiveFormExampleComponent(formBuilder, toastService) {
          _classCallCheck(this, ComboboxReactiveFormExampleComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.dataset = {
            items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
            selectedItem: "Item 2"
          };
        }

        _createClass(ComboboxReactiveFormExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.formBuilder.group({
              item: this.formBuilder.control(this.dataset.selectedItem, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            });
            this.myForm.controls["item"].valueChanges.subscribe(function (value) {
              return console.log(value);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.myForm.valid ? this.toastService.success({
              message: "Your form is valid!"
            }) : this.toastService.error({
              message: "Your form is invalid!"
            });
          }
        }]);

        return ComboboxReactiveFormExampleComponent;
      }();

      ComboboxReactiveFormExampleComponent.ɵfac = function ComboboxReactiveFormExampleComponent_Factory(t) {
        return new (t || ComboboxReactiveFormExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
      };

      ComboboxReactiveFormExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ComboboxReactiveFormExampleComponent,
        selectors: [["nui-combobox-reactive-form"]],
        decls: 5,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_REACTIVE_FORM_COMBOBOX_REACTIVE_FORM_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select item");
            i18n_0 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_REACTIVE_FORM_COMBOBOX_REACTIVE_FORM_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_935187492052582731$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_REACTIVE_FORM_COMBOBOX_REACTIVE_FORM_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Submit");
            i18n_2 = MSG_EXTERNAL_935187492052582731$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_REACTIVE_FORM_COMBOBOX_REACTIVE_FORM_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241F71c77bb8cecdf11ec3eead24dd1ba506573fa9cd\u241F935187492052582731:Submit"])));
          }

          return [[3, "formGroup", "submit"], [1, "form-group"], ["formControlName", "item", "placeholder", i18n_0, "required", "", 3, "isInErrorState", "itemsSource"], ["nui-button", "", "type", "submit", 1, "mt-1"], i18n_2];
        },
        template: function ComboboxReactiveFormExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function ComboboxReactiveFormExampleComponent_Template_form_submit_0_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "nui-combobox", 2);

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
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_3__["ComboboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "0LIt":
    /*!************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-inline/combobox-inline.example.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: ComboboxInlineExampleComponent */

    /***/
    function LIt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxInlineExampleComponent", function () {
        return ComboboxInlineExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");

      var ComboboxInlineExampleComponent = function ComboboxInlineExampleComponent() {
        _classCallCheck(this, ComboboxInlineExampleComponent);

        this.dataset = {
          itemsSource1: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
          itemsSource2: ["Item 6", "Item 7", "Item 8", "Item 9", "Item 10"]
        };
      };

      ComboboxInlineExampleComponent.ɵfac = function ComboboxInlineExampleComponent_Factory(t) {
        return new (t || ComboboxInlineExampleComponent)();
      };

      ComboboxInlineExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxInlineExampleComponent,
        selectors: [["nui-combobox-inline-example"]],
        decls: 4,
        vars: 4,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_INLINE_COMBOBOX_INLINE_EXAMPLE_COMPONENT_TS_2 = goog.getMsg("Select item");
            i18n_1 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_INLINE_COMBOBOX_INLINE_EXAMPLE_COMPONENT_TS_2;
          } else {
            i18n_1 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          var i18n_3;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_INLINE_COMBOBOX_INLINE_EXAMPLE_COMPONENT_TS_4 = goog.getMsg("Select item");
            i18n_3 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_INLINE_COMBOBOX_INLINE_EXAMPLE_COMPONENT_TS_4;
          } else {
            i18n_3 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3827509756629881099$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_INLINE_COMBOBOX_INLINE_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Lorem ipsum dolor sit amet. {$startTagNuiCombobox}{$closeTagNuiCombobox}{$startTagNuiCombobox_1}{$closeTagNuiCombobox} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n", {
              "startTagNuiCombobox": "\uFFFD#2\uFFFD",
              "closeTagNuiCombobox": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]",
              "startTagNuiCombobox_1": "\uFFFD#3\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_3827509756629881099$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_INLINE_COMBOBOX_INLINE_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_0 = $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([":\u241Ff3624d6498feafd73fe584f1929df9ba97a37e60\u241F3827509756629881099:Lorem ipsum dolor sit amet. ", ":START_TAG_NUI_COMBOBOX:", ":CLOSE_TAG_NUI_COMBOBOX:", ":START_TAG_NUI_COMBOBOX_1:", ":CLOSE_TAG_NUI_COMBOBOX: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n"])), "\uFFFD#2\uFFFD", "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]", "\uFFFD#3\uFFFD", "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]");
          }

          i18n_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](i18n_0);
          return [[1, "nui-text-default"], i18n_0, ["placeholder", i18n_1, 3, "itemsSource", "inline"], ["placeholder", i18n_3, 3, "itemsSource", "inline"]];
        },
        template: function ComboboxInlineExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-combobox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-combobox", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.dataset.itemsSource1)("inline", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.dataset.itemsSource2)("inline", true);
          }
        },
        directives: [_src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__["ComboboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "0WBa":
    /*!********************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-docs/combobox-docs.example.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: ComboboxDocsComponent */

    /***/
    function WBa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxDocsComponent", function () {
        return ComboboxDocsComponent;
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


      var _combobox_basic_combobox_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../combobox-basic/combobox-basic.example.component */
      "k0aK");
      /* harmony import */


      var _combobox_disabled_combobox_disabled_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../combobox-disabled/combobox-disabled.example.component */
      "jFL5");
      /* harmony import */


      var _combobox_required_combobox_required_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../combobox-required/combobox-required.example.component */
      "F4Up");
      /* harmony import */


      var _combobox_inline_combobox_inline_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../combobox-inline/combobox-inline.example.component */
      "0LIt");
      /* harmony import */


      var _combobox_clear_combobox_clear_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../combobox-clear/combobox-clear.example.component */
      "GKFH");
      /* harmony import */


      var _combobox_icon_combobox_icon_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../combobox-icon/combobox-icon.example.component */
      "VZ+c");
      /* harmony import */


      var _combobox_justified_combobox_justified_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../combobox-justified/combobox-justified.example.component */
      "xYKM");
      /* harmony import */


      var _combobox_display_value_combobox_display_value_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../combobox-display-value/combobox-display-value.example.component */
      "JPwj");
      /* harmony import */


      var _combobox_reactive_form_combobox_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../combobox-reactive-form/combobox-reactive-form.example.component */
      "+vj5");
      /* harmony import */


      var _combobox_typeahead_combobox_typeahead_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../combobox-typeahead/combobox-typeahead.example.component */
      "yvaV");
      /* harmony import */


      var _combobox_separators_combobox_separators_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../combobox-separators/combobox-separators.example.component */
      "PUXB");
      /* harmony import */


      var _combobox_custom_template_combobox_custom_template_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../combobox-custom-template/combobox-custom-template.example.component */
      "1ZAq");
      /* harmony import */


      var _combobox_append_to_body_combobox_append_to_body_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../combobox-append-to-body/combobox-append-to-body.example.component */
      "jKlT");
      /* harmony import */


      var _combobox_with_remove_value_combobox_with_remove_value_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../combobox-with-remove-value/combobox-with-remove-value.example.component */
      "4Kix");

      var ComboboxDocsComponent = function ComboboxDocsComponent() {
        _classCallCheck(this, ComboboxDocsComponent);
      };

      ComboboxDocsComponent.ɵfac = function ComboboxDocsComponent_Factory(t) {
        return new (t || ComboboxDocsComponent)();
      };

      ComboboxDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxDocsComponent,
        selectors: [["nui-combobox-docs-example"]],
        decls: 230,
        vars: 0,
        consts: [["filenamePrefix", "combobox-basic", "exampleTitle", "Basic usage"], ["filenamePrefix", "combobox-disabled", "exampleTitle", "Disabled"], ["href", "../interfaces/ISelectChangedEvent.html", "target", "_blank"], ["filenamePrefix", "combobox-required", "exampleTitle", "Required"], ["filenamePrefix", "combobox-inline", "exampleTitle", "Inline"], ["filenamePrefix", "combobox-clear", "exampleTitle", "Clear on Blur"], ["filenamePrefix", "combobox-icon", "exampleTitle", "Icon Adjustment"], ["filenamePrefix", "combobox-justified", "exampleTitle", "Filling the Parent Width"], ["filenamePrefix", "combobox-display-value", "exampleTitle", "Display value"], ["filenamePrefix", "combobox-reactive-form", "exampleTitle", "Using With Reactive Forms"], ["filenamePrefix", "combobox-typeahead", "exampleTitle", "Typeahead"], ["href", "../interfaces/ISelectGroup.html", "target", "_blank"], ["filenamePrefix", "combobox-separators", "exampleTitle", "Separators"], ["filenamePrefix", "combobox-custom-template", "exampleTitle", "Combobox with custom template"], ["filenamePrefix", "combobox-append-to-body", "exampleTitle", "Append to Body"], ["filenamePrefix", "combobox-with-remove-value", "exampleTitle", "Remove value button"]],
        template: function ComboboxDocsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<nui-combobox>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " allows user to select one item from a list. User may filter the list by typing a query into the accompanying input field. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " maximum width of combobox dropdown menu is 400px (except for stretched combobox, where combobox itself and combobox dropdown menu are justified to the width of container element).\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Accessibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " to navigate through form controls. Focus in and out with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " will, respectively, open and close popup.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " When input focused and popup is closed press ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "shift + arrow down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " (or just ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "arrow down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ") to open popup. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " When opened: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Arrow top/bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " - navigate through items in a list; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Make an item active with arrows and press ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Enter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " to select it; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Esc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " - close popup; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " When datasource in combobox is changed - key control is reset; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " If an item was active and then datasource is changed - first item will become active; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " To implement basic combobox you need to pass data via ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "itemsSource");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " input. Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " input to display placeholder. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " receives item that will be selected before user starts to communicate with select component. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "itemsSource");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " data must be an array of strings.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "nui-example-wrapper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nui-combobox-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " To disable combobox use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "isDisabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " property.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "nui-combobox-disabled-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " The option ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "isInErrorState");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " is used to set/change conditional \"required\" validation. To subscribe to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "changed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " event you should pass a function, argument of which is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "ISelectChangedEvent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " object. The option ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "isInErrorState");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " is used to set/change conditional \"required\" validation. This is quick way to set combobox as required instead of passing config object into validator. Use it to highlight error if field is set to empty or if user input doesn't corresponds to any item in the the source array and you are not interested in specific message. To subscribe to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "changed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " event you should pass a function, argument of which is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "ISelectChangedEvent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " object.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "nui-combobox-required-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Inline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " To make combobox inline you need to use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "inline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " property. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " As you see there are no spacings between ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "nui-combobox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "es in this example because spacings should be handled by users themselves (users should use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "@nui-space-md");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " spacing if they want to have several comboboxes next to each other).\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "nui-example-wrapper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "nui-combobox-inline-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Clear on Blur");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " If you want to clear combobox input if it's value is not in the source array you need to pass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "clearOnBlur");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " property.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "nui-combobox-clear-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Icon Adjustment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " To adjust an icon to the combobox use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " property and pass in the name of the icon.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "nui-combobox-icon-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Filling the Parent Width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " For combobox to fill it's parent width you may pass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "justified");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " property.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "nui-example-wrapper", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "nui-combobox-justified-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Display value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " If you want to have ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "itemsSource");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " as an array of object you need to pass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "displayValue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " property with name of the item property that will be shown in the dropdown menu.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "nui-example-wrapper", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "nui-combobox-display-value-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Using With Reactive Forms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " To use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "nui-combobox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " in reactive forms you need to create ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "FormGroup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " that represents our form model. After that you can bind ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "nui-combobox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " to this form element using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "formControlName");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "nui-example-wrapper", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "nui-combobox-reactive-form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Typeahead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " To add typeahead-like behavior to combobox you need to change ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "itemsSource");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " in select in subscription to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "(changed)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " event. Then combobox dropdown will be re-rendered with new set of items.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "nui-example-wrapper", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "nui-combobox-typeahead-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Separators");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " If you want to have grouped data, you need to pass data as an array of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "ISelectGroup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "nui-example-wrapper", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "nui-combobox-separators-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Using a Custom Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " To provide custom template for every item in combobox you need to link ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "customTemplate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " input with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "TemplateRef");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " that represents custom template.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "nui-example-wrapper", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "nui-combobox-custom-template-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Append to Body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "To attach menu popup to <body> use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "appendToBody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " input. It allows menu to ignore containers and overlap them.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "nui-example-wrapper", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "nui-combobox-append-to-body-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Using with X button for removing value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "To enable \"X\" button for removing combobox value, use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "isRemoveValueEnabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " input set to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, ". The button will be shown in case value is typed.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "nui-example-wrapper", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "nui-combobox-with-remove-value-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _combobox_basic_combobox_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxBasicExampleComponent"], _combobox_disabled_combobox_disabled_example_component__WEBPACK_IMPORTED_MODULE_3__["ComboboxDisabledExampleComponent"], _combobox_required_combobox_required_example_component__WEBPACK_IMPORTED_MODULE_4__["ComboboxRequiredExampleComponent"], _combobox_inline_combobox_inline_example_component__WEBPACK_IMPORTED_MODULE_5__["ComboboxInlineExampleComponent"], _combobox_clear_combobox_clear_example_component__WEBPACK_IMPORTED_MODULE_6__["ComboboxClearExampleComponent"], _combobox_icon_combobox_icon_example_component__WEBPACK_IMPORTED_MODULE_7__["ComboboxIconExampleComponent"], _combobox_justified_combobox_justified_example_component__WEBPACK_IMPORTED_MODULE_8__["ComboboxJustifiedExampleComponent"], _combobox_display_value_combobox_display_value_example_component__WEBPACK_IMPORTED_MODULE_9__["ComboboxDisplayValueExampleComponent"], _combobox_reactive_form_combobox_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_10__["ComboboxReactiveFormExampleComponent"], _combobox_typeahead_combobox_typeahead_example_component__WEBPACK_IMPORTED_MODULE_11__["ComboboxTypeaheadExampleComponent"], _combobox_separators_combobox_separators_example_component__WEBPACK_IMPORTED_MODULE_12__["ComboboxSeparatorsExampleComponent"], _combobox_custom_template_combobox_custom_template_example_component__WEBPACK_IMPORTED_MODULE_13__["ComboboxCustomTemplateExampleComponent"], _combobox_append_to_body_combobox_append_to_body_example_component__WEBPACK_IMPORTED_MODULE_14__["ComboboxAppendToBodyExampleComponent"], _combobox_with_remove_value_combobox_with_remove_value_example_component__WEBPACK_IMPORTED_MODULE_15__["ComboboxWithRemoveValueExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "0clh":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-docs/combobox-docs.example.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function clh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-combobox-docs-example\",\n    templateUrl: \"./combobox-docs.example.component.html\",\n})\nexport class ComboboxDocsComponent {\n}\n";
      /***/
    },

    /***/
    "1ZAq":
    /*!******************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-custom-template/combobox-custom-template.example.component.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: ComboboxCustomTemplateExampleComponent */

    /***/
    function ZAq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxCustomTemplateExampleComponent", function () {
        return ComboboxCustomTemplateExampleComponent;
      });
      /* harmony import */


      var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash/cloneDeep */
      "BkRI");
      /* harmony import */


      var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");

      function ComboboxCustomTemplateExampleComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nui-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "nui-progress", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.context;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", item_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showProgress", true)("show", true)("percent", item_r2.progress);
        }
      }

      var ComboboxCustomTemplateExampleComponent = /*#__PURE__*/function () {
        function ComboboxCustomTemplateExampleComponent() {
          _classCallCheck(this, ComboboxCustomTemplateExampleComponent);

          this.dataset = {
            displayValue: "value",
            selectedItem: "",
            items: [{
              name: "item_1",
              value: "Bonobo 112",
              icon: "severity_ok",
              progress: 78
            }, {
              name: "item_2",
              value: "Zelda 113",
              icon: "severity_ok",
              progress: 66
            }, {
              name: "item_3",
              value: "Max 123",
              icon: "severity_critical",
              progress: 7
            }, {
              name: "item_4",
              value: "Apple 234",
              icon: "severity_ok",
              progress: 24
            }, {
              name: "item_5",
              value: "Quartz 124",
              icon: "severity_warning",
              progress: 89
            }]
          };
          this.displayedItems = this.dataset.items;
        }

        _createClass(ComboboxCustomTemplateExampleComponent, [{
          key: "textboxChanged",
          value: function textboxChanged(searchQuery) {
            this.displayedItems = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(this.dataset.items);
            this.displayedItems = this.displayedItems.filter(function (item) {
              return item.value.includes(searchQuery.newValue);
            });
          }
        }]);

        return ComboboxCustomTemplateExampleComponent;
      }();

      ComboboxCustomTemplateExampleComponent.ɵfac = function ComboboxCustomTemplateExampleComponent_Factory(t) {
        return new (t || ComboboxCustomTemplateExampleComponent)();
      };

      ComboboxCustomTemplateExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ComboboxCustomTemplateExampleComponent,
        selectors: [["nui-combobox-custom-template-example"]],
        decls: 3,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_CUSTOM_TEMPLATE_COMBOBOX_CUSTOM_TEMPLATE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select item");
            i18n_0 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_CUSTOM_TEMPLATE_COMBOBOX_CUSTOM_TEMPLATE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          return [["customComboboxTemplate", ""], ["placeholder", i18n_0, 3, "value", "itemsSource", "displayValue", "customTemplate", "changed"], [3, "icon"], [1, "combobox-examples-custom-template"], [3, "showProgress", "show", "percent"]];
        },
        template: function ComboboxCustomTemplateExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ComboboxCustomTemplateExampleComponent_ng_template_0_Template, 7, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-combobox", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function ComboboxCustomTemplateExampleComponent_Template_nui_combobox_changed_2_listener($event) {
              return ctx.textboxChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.dataset.selectedItem)("itemsSource", ctx.displayedItems)("displayValue", ctx.dataset.displayValue)("customTemplate", _r0);
          }
        },
        directives: [_src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxComponent"]],
        styles: [".combobox-examples-custom-template[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJvYm94LWN1c3RvbS10ZW1wbGF0ZS5leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUFBUiIsImZpbGUiOiJjb21ib2JveC1jdXN0b20tdGVtcGxhdGUuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21ib2JveC1leGFtcGxlcyB7XG4gICAgJi1jdXN0b20tdGVtcGxhdGUge1xuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "1u2i":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-append-to-body/combobox-append-to-body.example.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u2i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox   [itemsSource]=\"dataset.items\"\n                [appendToBody]=\"true\" placeholder=\"Select item\" i18n-placeholder>\n</nui-combobox>\n\n";
      /***/
    },

    /***/
    "2JYu":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-custom-template/combobox-custom-template.example.component.less ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JYu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".combobox-examples {\n    &-custom-template {\n        min-width: 300px;\n    }\n}\n";
      /***/
    },

    /***/
    "3DfZ":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-inline/combobox-inline.example.component.ts ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DfZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-combobox-inline-example\",\n    templateUrl: \"combobox-inline.example.component.html\",\n})\n\nexport class ComboboxInlineExampleComponent {\n    public dataset = {\n        itemsSource1: [\"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\"],\n        itemsSource2: [\"Item 6\", \"Item 7\", \"Item 8\", \"Item 9\", \"Item 10\"],\n    };\n}\n";
      /***/
    },

    /***/
    "3v5s":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-justified/combobox-justified.example.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function v5s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox [itemsSource]=\"dataset.items\"\n              placeholder=\"Select item\"\n              i18n-placeholder\n              [justified]=\"true\"></nui-combobox>\n";
      /***/
    },

    /***/
    "4Kix":
    /*!**********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-with-remove-value/combobox-with-remove-value.example.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: ComboboxWithRemoveValueExampleComponent */

    /***/
    function Kix(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxWithRemoveValueExampleComponent", function () {
        return ComboboxWithRemoveValueExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");

      var ComboboxWithRemoveValueExampleComponent = function ComboboxWithRemoveValueExampleComponent() {
        _classCallCheck(this, ComboboxWithRemoveValueExampleComponent);

        this.dataset = {
          items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12", "Item 13", "Item 14", "Item 15"]
        };
      };

      ComboboxWithRemoveValueExampleComponent.ɵfac = function ComboboxWithRemoveValueExampleComponent_Factory(t) {
        return new (t || ComboboxWithRemoveValueExampleComponent)();
      };

      ComboboxWithRemoveValueExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxWithRemoveValueExampleComponent,
        selectors: [["nui-combobox-with-remove-value-example"]],
        decls: 1,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_WITH_REMOVE_VALUE_COMBOBOX_WITH_REMOVE_VALUE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select item");
            i18n_0 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_WITH_REMOVE_VALUE_COMBOBOX_WITH_REMOVE_VALUE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          return [["placeholder", i18n_0, 3, "itemsSource", "isRemoveValueEnabled"]];
        },
        template: function ComboboxWithRemoveValueExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-combobox", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.dataset.items)("isRemoveValueEnabled", true);
          }
        },
        directives: [_src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__["ComboboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "6P8o":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-reactive-form/combobox-reactive-form.example.component.ts ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function P8o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-combobox-reactive-form\",\n    templateUrl: \"./combobox-reactive-form.example.component.html\",\n})\nexport class ComboboxReactiveFormExampleComponent implements OnInit {\n    public myForm: FormGroup;\n    public dataset = {\n        items: [\"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\"],\n        selectedItem: \"Item 2\",\n    };\n\n    constructor(private formBuilder: FormBuilder,\n                @Inject(ToastService) private toastService: ToastService) {}\n\n    public ngOnInit() {\n        this.myForm = this.formBuilder.group({\n            item: this.formBuilder.control(this.dataset.selectedItem, [Validators.required]),\n        });\n\n        this.myForm.controls[\"item\"].valueChanges.subscribe(value => console.log(value));\n    }\n\n    public onSubmit() {\n        this.myForm.valid ? this.toastService.success({message: \"Your form is valid!\"}) :\n            this.toastService.error({message: `Your form is invalid!`});\n    }\n}\n";
      /***/
    },

    /***/
    "71dZ":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-with-remove-value/combobox-with-remove-value.example.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox [itemsSource]=\"dataset.items\"\n              [isRemoveValueEnabled]=\"true\"\n              placeholder=\"Select item\"\n              i18n-placeholder></nui-combobox>\n";
      /***/
    },

    /***/
    "7AGm":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-reactive-form/combobox-reactive-form.example.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AGm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form [formGroup]=\"myForm\" (submit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <nui-combobox formControlName=\"item\"\n                      [isInErrorState]=\"myForm.controls['item'].invalid && myForm.controls['item'].touched\"\n                      [itemsSource]=\"dataset.items\"\n                      placeholder=\"Select item\" i18n-placeholder required></nui-combobox>\n        <button nui-button\n                type=\"submit\"\n                class=\"mt-1\" i18n>Submit</button>\n    </div>\n</form>\n";
      /***/
    },

    /***/
    "Cybm":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-basic/combobox-basic.example.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Cybm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox [itemsSource]=\"dataset.items\"\n              placeholder=\"Select item\" i18n-placeholder></nui-combobox>\n";
      /***/
    },

    /***/
    "E1Lg":
    /*!***********************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \***********************************************************************************************************/

    /*! no static exports found */

    /***/
    function E1Lg(module, exports, __webpack_require__) {
      var map = {
        "./combobox-append-to-body/combobox-append-to-body.example.component.html": "1u2i",
        "./combobox-append-to-body/combobox-append-to-body.example.component.ts": "PnZb",
        "./combobox-basic/combobox-basic.example.component.html": "Cybm",
        "./combobox-basic/combobox-basic.example.component.ts": "q1cQ",
        "./combobox-clear/combobox-clear.example.component.html": "Vm/Q",
        "./combobox-clear/combobox-clear.example.component.ts": "g7jM",
        "./combobox-custom-template/combobox-custom-template.example.component.html": "XpAg",
        "./combobox-custom-template/combobox-custom-template.example.component.less": "2JYu",
        "./combobox-custom-template/combobox-custom-template.example.component.ts": "tVco",
        "./combobox-disabled/combobox-disabled.example.component.html": "RfRs",
        "./combobox-disabled/combobox-disabled.example.component.ts": "g4Vi",
        "./combobox-display-value/combobox-display-value.example.component.html": "fihq",
        "./combobox-display-value/combobox-display-value.example.component.ts": "JiA7",
        "./combobox-docs/combobox-docs.example.component.html": "rvz8",
        "./combobox-docs/combobox-docs.example.component.ts": "0clh",
        "./combobox-icon/combobox-icon.example.component.html": "Gb9h",
        "./combobox-icon/combobox-icon.example.component.ts": "WR2J",
        "./combobox-inline/combobox-inline.example.component.html": "h4JG",
        "./combobox-inline/combobox-inline.example.component.ts": "3DfZ",
        "./combobox-justified/combobox-justified.example.component.html": "3v5s",
        "./combobox-justified/combobox-justified.example.component.ts": "FM5K",
        "./combobox-reactive-form/combobox-reactive-form.example.component.html": "7AGm",
        "./combobox-reactive-form/combobox-reactive-form.example.component.ts": "6P8o",
        "./combobox-required/combobox-required.example.component.html": "w54Q",
        "./combobox-required/combobox-required.example.component.ts": "IYU1",
        "./combobox-separators/combobox-separators.example.component.html": "ngvm",
        "./combobox-separators/combobox-separators.example.component.ts": "Sqdr",
        "./combobox-test/combobox-test.component.html": "s0kV",
        "./combobox-test/combobox-test.component.ts": "t5fG",
        "./combobox-typeahead/combobox-typeahead.example.component.html": "qel9",
        "./combobox-typeahead/combobox-typeahead.example.component.ts": "RVkz",
        "./combobox-visual-test/combobox-visual-test.component.html": "XVIq",
        "./combobox-visual-test/combobox-visual-test.component.ts": "hVB7",
        "./combobox-with-remove-value/combobox-with-remove-value.example.component.html": "71dZ",
        "./combobox-with-remove-value/combobox-with-remove-value.example.component.ts": "Qrjd",
        "./combobox.module.ts": "EQOX",
        "./index.ts": "fK3O"
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
      webpackContext.id = "E1Lg";
      /***/
    },

    /***/
    "EQOX":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EQOX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiDocsModule,\n    NuiSelectModule,\n    NuiTextboxModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    ComboboxAppendToBodyExampleComponent,\n    ComboboxBasicExampleComponent,\n    ComboboxClearExampleComponent,\n    ComboboxCustomTemplateExampleComponent,\n    ComboboxDisabledExampleComponent,\n    ComboboxDisplayValueExampleComponent,\n    ComboboxDocsComponent,\n    ComboboxIconExampleComponent,\n    ComboboxInlineExampleComponent,\n    ComboboxJustifiedExampleComponent,\n    ComboboxReactiveFormExampleComponent,\n    ComboboxRequiredExampleComponent,\n    ComboboxSeparatorsExampleComponent,\n    ComboboxTestComponent,\n    ComboboxTypeaheadExampleComponent,\n    ComboboxVisualTestComponent,\n    ComboboxWithRemoveValueExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: ComboboxDocsComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.support,\n                \"eolDate\": new Date(\"2020-07-09\"),\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"combobox-test\",\n        component: ComboboxTestComponent,\n    },\n    {\n        path: \"combobox-visual-test\",\n        component: ComboboxVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"basic\",\n        component: ComboboxBasicExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiSelectModule,\n        NuiTextboxModule,\n        FormsModule,\n        ReactiveFormsModule,\n        NuiButtonModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        ComboboxBasicExampleComponent,\n        ComboboxClearExampleComponent,\n        ComboboxCustomTemplateExampleComponent,\n        ComboboxDisabledExampleComponent,\n        ComboboxDisplayValueExampleComponent,\n        ComboboxDocsComponent,\n        ComboboxIconExampleComponent,\n        ComboboxInlineExampleComponent,\n        ComboboxJustifiedExampleComponent,\n        ComboboxReactiveFormExampleComponent,\n        ComboboxRequiredExampleComponent,\n        ComboboxSeparatorsExampleComponent,\n        ComboboxTestComponent,\n        ComboboxTypeaheadExampleComponent,\n        ComboboxVisualTestComponent,\n        ComboboxAppendToBodyExampleComponent,\n        ComboboxWithRemoveValueExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class ComboboxModule {\n}\n";
      /***/
    },

    /***/
    "F4Up":
    /*!****************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-required/combobox-required.example.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: ComboboxRequiredExampleComponent */

    /***/
    function F4Up(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxRequiredExampleComponent", function () {
        return ComboboxRequiredExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");

      var ComboboxRequiredExampleComponent = /*#__PURE__*/function () {
        function ComboboxRequiredExampleComponent() {
          _classCallCheck(this, ComboboxRequiredExampleComponent);

          this.isRequired = true;
          this.errorState = true;
          this.dataset = {
            items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
            selectedItem: ""
          };
        }

        _createClass(ComboboxRequiredExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isInErrorState();
          }
        }, {
          key: "valueChange",
          value: function valueChange(changedEvent) {
            this.dataset.selectedItem = changedEvent.newValue;
            this.isInErrorState();
          }
        }, {
          key: "isInErrorState",
          value: function isInErrorState() {
            this.errorState = this.isRequired && (!this.dataset.selectedItem || !(this.dataset.items.indexOf(this.dataset.selectedItem) !== -1));
          }
        }]);

        return ComboboxRequiredExampleComponent;
      }();

      ComboboxRequiredExampleComponent.ɵfac = function ComboboxRequiredExampleComponent_Factory(t) {
        return new (t || ComboboxRequiredExampleComponent)();
      };

      ComboboxRequiredExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxRequiredExampleComponent,
        selectors: [["nui-combobox-required-example"]],
        decls: 1,
        vars: 3,
        consts: [[3, "value", "isInErrorState", "itemsSource", "changed"]],
        template: function ComboboxRequiredExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-combobox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function ComboboxRequiredExampleComponent_Template_nui_combobox_changed_0_listener($event) {
              return ctx.valueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.dataset.selectedItem)("isInErrorState", ctx.errorState)("itemsSource", ctx.dataset.items);
          }
        },
        directives: [_src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__["ComboboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "FM5K":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-justified/combobox-justified.example.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FM5K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-combobox-justified-example\",\n    templateUrl: \"./combobox-justified.example.component.html\",\n})\nexport class ComboboxJustifiedExampleComponent {\n    public dataset = {\n        items: [\"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\"],\n    };\n}\n";
      /***/
    },

    /***/
    "GKFH":
    /*!**********************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-clear/combobox-clear.example.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ComboboxClearExampleComponent */

    /***/
    function GKFH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxClearExampleComponent", function () {
        return ComboboxClearExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");

      var ComboboxClearExampleComponent = function ComboboxClearExampleComponent() {
        _classCallCheck(this, ComboboxClearExampleComponent);

        this.dataset = {
          items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
        };
      };

      ComboboxClearExampleComponent.ɵfac = function ComboboxClearExampleComponent_Factory(t) {
        return new (t || ComboboxClearExampleComponent)();
      };

      ComboboxClearExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxClearExampleComponent,
        selectors: [["nui-combobox-clear-example"]],
        decls: 1,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_CLEAR_COMBOBOX_CLEAR_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
            i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_CLEAR_COMBOBOX_CLEAR_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          return [["placeholder", i18n_0, 3, "itemsSource", "clearOnBlur"]];
        },
        template: function ComboboxClearExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-combobox", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.dataset.items)("clearOnBlur", true);
          }
        },
        directives: [_src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__["ComboboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Gb9h":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-icon/combobox-icon.example.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Gb9h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox [value]=\"dataset.selectedItem\"\n              icon=\"add\"\n              [itemsSource]=\"dataset.items\"\n              (changed)=\"valueChange($event)\"></nui-combobox>\n";
      /***/
    },

    /***/
    "IYU1":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-required/combobox-required.example.component.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IYU1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { ISelectChangedEvent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-combobox-required-example\",\n    templateUrl: \"./combobox-required.example.component.html\",\n})\nexport class ComboboxRequiredExampleComponent implements OnInit {\n    public isRequired: boolean = true;\n    public errorState: boolean = true;\n    public dataset = {\n        items: [\"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\"],\n        selectedItem: \"\",\n    };\n\n    ngOnInit() {\n        this.isInErrorState();\n    }\n\n    public valueChange(changedEvent: ISelectChangedEvent<string>): void {\n        this.dataset.selectedItem = changedEvent.newValue;\n        this.isInErrorState();\n    }\n\n    public isInErrorState(): void {\n        this.errorState = this.isRequired &&\n            (!this.dataset.selectedItem || !(this.dataset.items.indexOf(this.dataset.selectedItem) !== -1));\n    }\n}\n";
      /***/
    },

    /***/
    "JPwj":
    /*!**************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-display-value/combobox-display-value.example.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: ComboboxDisplayValueExampleComponent */

    /***/
    function JPwj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxDisplayValueExampleComponent", function () {
        return ComboboxDisplayValueExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ComboboxDisplayValueExampleComponent = /*#__PURE__*/function () {
        function ComboboxDisplayValueExampleComponent() {
          _classCallCheck(this, ComboboxDisplayValueExampleComponent);

          this.dataset = {
            items: [{
              value: "Value 1",
              name: "Item 1"
            }, {
              value: "Value 2",
              name: "Item 2"
            }, {
              value: "Value 3",
              name: "Item 3"
            }, {
              value: "Value 4",
              name: "Item 4"
            }, {
              value: "Value 5",
              name: "Item 5"
            }]
          };
        }

        _createClass(ComboboxDisplayValueExampleComponent, [{
          key: "onValueChange",
          value: function onValueChange(changedEvent) {
            this.selectedItem = changedEvent.newValue;
          }
        }]);

        return ComboboxDisplayValueExampleComponent;
      }();

      ComboboxDisplayValueExampleComponent.ɵfac = function ComboboxDisplayValueExampleComponent_Factory(t) {
        return new (t || ComboboxDisplayValueExampleComponent)();
      };

      ComboboxDisplayValueExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxDisplayValueExampleComponent,
        selectors: [["nui-combobox-display-value-example"]],
        decls: 4,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_DISPLAY_VALUE_COMBOBOX_DISPLAY_VALUE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select item");
            i18n_0 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_DISPLAY_VALUE_COMBOBOX_DISPLAY_VALUE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          return [["displayValue", "name", "placeholder", i18n_0, 3, "itemsSource", "changed"], [1, "nui-text-default"]];
        },
        template: function ComboboxDisplayValueExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-combobox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function ComboboxDisplayValueExampleComponent_Template_nui_combobox_changed_0_listener($event) {
              return ctx.onValueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.dataset.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You selected: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.selectedItem), "");
          }
        },
        directives: [_src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__["ComboboxComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "JiA7":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-display-value/combobox-display-value.example.component.ts ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JiA7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { ISelectChangedEvent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-combobox-display-value-example\",\n    templateUrl: \"combobox-display-value.example.component.html\",\n})\n\nexport class ComboboxDisplayValueExampleComponent {\n    public dataset = {\n        items: [\n            {value: \"Value 1\", name: \"Item 1\"},\n            {value: \"Value 2\", name: \"Item 2\"},\n            {value: \"Value 3\", name: \"Item 3\"},\n            {value: \"Value 4\", name: \"Item 4\"},\n            {value: \"Value 5\", name: \"Item 5\"},\n        ],\n    };\n    public selectedItem: any;\n\n    public onValueChange(changedEvent: ISelectChangedEvent<any>) {\n        this.selectedItem = changedEvent.newValue;\n    }\n}\n";
      /***/
    },

    /***/
    "PUXB":
    /*!********************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-separators/combobox-separators.example.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ComboboxSeparatorsExampleComponent */

    /***/
    function PUXB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxSeparatorsExampleComponent", function () {
        return ComboboxSeparatorsExampleComponent;
      });
      /* harmony import */


      var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash/cloneDeep */
      "BkRI");
      /* harmony import */


      var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");

      var ComboboxSeparatorsExampleComponent = /*#__PURE__*/function () {
        function ComboboxSeparatorsExampleComponent() {
          _classCallCheck(this, ComboboxSeparatorsExampleComponent);

          this.dataset = {
            itemsInGroups: [{
              header: "Group 1 header",
              items: ["Item 111", "Item 211", "Item 311"]
            }, {
              header: "Group 2 header",
              items: ["Item 112", "Item 212", "Item 312"]
            }, {
              header: "Group 3 header",
              items: ["Item 113", "Item 213", "Item 313"]
            }]
          };
          this.displayedItems = this.dataset.itemsInGroups;
        }

        _createClass(ComboboxSeparatorsExampleComponent, [{
          key: "textboxChanged",
          value: function textboxChanged(searchQuery) {
            this.displayedItems = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(this.dataset.itemsInGroups);
            this.displayedItems.forEach(function (items) {
              items.items = items.items.filter(function (item) {
                return item.includes(searchQuery.newValue);
              });
            });
          }
        }]);

        return ComboboxSeparatorsExampleComponent;
      }();

      ComboboxSeparatorsExampleComponent.ɵfac = function ComboboxSeparatorsExampleComponent_Factory(t) {
        return new (t || ComboboxSeparatorsExampleComponent)();
      };

      ComboboxSeparatorsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ComboboxSeparatorsExampleComponent,
        selectors: [["nui-combobox-separators-example"]],
        decls: 1,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_SEPARATORS_COMBOBOX_SEPARATORS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select item");
            i18n_0 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_SEPARATORS_COMBOBOX_SEPARATORS_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          return [["placeholder", i18n_0, 3, "itemsSource", "changed"]];
        },
        template: function ComboboxSeparatorsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-combobox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function ComboboxSeparatorsExampleComponent_Template_nui_combobox_changed_0_listener($event) {
              return ctx.textboxChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.displayedItems);
          }
        },
        directives: [_src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "PnZb":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-append-to-body/combobox-append-to-body.example.component.ts ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PnZb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-combobox-append-to-body-example\",\n    templateUrl: \"./combobox-append-to-body.example.component.html\",\n})\nexport class ComboboxAppendToBodyExampleComponent {\n    public dataset = {\n        items: [\n            \"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\",\n            \"Item 6\", \"Item 7\", \"Item 8\", \"Item 9\", \"Item 10\",\n            \"Item 11\", \"Item 12\", \"Item 13\", \"Item 14\", \"Item 15\",\n        ],\n    };\n}\n";
      /***/
    },

    /***/
    "Qrjd":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-with-remove-value/combobox-with-remove-value.example.component.ts ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qrjd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-combobox-with-remove-value-example\",\n    templateUrl: \"./combobox-with-remove-value.example.component.html\",\n})\nexport class ComboboxWithRemoveValueExampleComponent {\n    public dataset = {\n        items: [\n            \"Item 1\",\n            \"Item 2\",\n            \"Item 3\",\n            \"Item 4\",\n            \"Item 5\",\n            \"Item 6\",\n            \"Item 7\",\n            \"Item 8\",\n            \"Item 9\",\n            \"Item 10\",\n            \"Item 11\",\n            \"Item 12\",\n            \"Item 13\",\n            \"Item 14\",\n            \"Item 15\",\n        ],\n    };\n}\n";
      /***/
    },

    /***/
    "RVkz":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-typeahead/combobox-typeahead.example.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RVkz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { ISelectChangedEvent, ISelectGroup } from \"@nova-ui/bits\";\nimport _cloneDeep from \"lodash/cloneDeep\";\n\n@Component({\n    selector: \"nui-combobox-typeahead-example\",\n    templateUrl: \"./combobox-typeahead.example.component.html\",\n})\nexport class ComboboxTypeaheadExampleComponent {\n    public dataset: ISelectGroup[] = [\n        {\n            header: \"Group 1 header\",\n            items: [\n                {label: \"Item 111\", value: \"Value 1\"},\n                {label: \"Item 112\", value: \"Value 2\"},\n                {label: \"Item 123\", value: \"Value 3\"},\n            ],\n        },\n        {\n            header: \"Group 2 header\",\n            items: [\n                {label: \"Item 111\", value: \"Value 5\"},\n                {label: \"Item 212\", value: \"Value 6\"},\n                {label: \"Item 312\", value: \"Value 7\"},\n            ],\n        },\n        {\n            header: \"Group 3 header\",\n            items: [\n                {label: \"Item 456\", value: \"Value 7\"},\n                {label: \"Item 345\", value: \"Value 8\"},\n                {label: \"Item 414\", value: \"Value 9\"},\n            ],\n        },\n    ];\n    public displayedItems = this.dataset;\n\n    public textboxChanged(searchQuery: ISelectChangedEvent<any>) {\n        this.displayedItems = _cloneDeep(this.dataset);\n        this.displayedItems.forEach(group => {\n            group.items = group.items.filter(item => {\n                // searchQuery.newValue.label is necessary, since combobox can emit event with 2 possible values:\n                // either string or complex object ({label: x, value: y} in this case). Users should be careful dealing with this emitters\n                // and handle them properly.\n                const itemLabel = item.label.toLowerCase();\n                const val = searchQuery.newValue;\n                return itemLabel.includes(val.toLowerCase())\n                || itemLabel.includes(val.label && val.label.toLowerCase());\n            });\n        });\n    }\n}\n";
      /***/
    },

    /***/
    "RfRs":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-disabled/combobox-disabled.example.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RfRs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox [value]=\"dataset.selectedItem\"\n              [isDisabled]=\"true\"\n              [itemsSource]=\"dataset.items\"></nui-combobox>\n";
      /***/
    },

    /***/
    "Sqdr":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-separators/combobox-separators.example.component.ts ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Sqdr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { ISelectChangedEvent } from \"@nova-ui/bits\";\nimport _cloneDeep from \"lodash/cloneDeep\";\n\n@Component({\n    selector: \"nui-combobox-separators-example\",\n    templateUrl: \"./combobox-separators.example.component.html\",\n})\nexport class ComboboxSeparatorsExampleComponent {\n    public dataset = {\n        itemsInGroups: [\n            {\n                header: `Group 1 header`,\n                items: [`Item 111`, `Item 211`, `Item 311`],\n            },\n            {\n                header: `Group 2 header`,\n                items: [`Item 112`, `Item 212`, `Item 312`],\n            },\n            {\n                header: `Group 3 header`,\n                items: [`Item 113`, `Item 213`, `Item 313`],\n            },\n        ],\n    };\n    public displayedItems = this.dataset.itemsInGroups;\n\n    constructor() { }\n\n    public textboxChanged(searchQuery: ISelectChangedEvent<string>) {\n        this.displayedItems = _cloneDeep(this.dataset.itemsInGroups);\n        this.displayedItems.forEach(items => {\n            items.items = items.items.filter(item => item.includes(searchQuery.newValue));\n        });\n    }\n}\n";
      /***/
    },

    /***/
    "Ts2d":
    /*!**************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox.module.ts ***!
      \**************************************************************/

    /*! exports provided: ComboboxModule */

    /***/
    function Ts2d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxModule", function () {
        return ComboboxModule;
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


      var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./index */
      "WdPW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxDocsComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].support,
            "eolDate": new Date("2020-07-09")
          },
          showThemeSwitcher: true
        }
      }, {
        path: "combobox-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxTestComponent"]
      }, {
        path: "combobox-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "basic",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxBasicExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ComboboxModule = function ComboboxModule() {
        _classCallCheck(this, ComboboxModule);
      };

      ComboboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: ComboboxModule
      });
      ComboboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function ComboboxModule_Factory(t) {
          return new (t || ComboboxModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("E1Lg");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ComboboxModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["ComboboxBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxClearExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxCustomTemplateExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxDisabledExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxDisplayValueExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxDocsComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxIconExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxInlineExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxJustifiedExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxReactiveFormExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxRequiredExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxSeparatorsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxTypeaheadExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxVisualTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxAppendToBodyExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ComboboxWithRemoveValueExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "VZ+c":
    /*!********************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-icon/combobox-icon.example.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: ComboboxIconExampleComponent */

    /***/
    function VZC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxIconExampleComponent", function () {
        return ComboboxIconExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");

      var ComboboxIconExampleComponent = /*#__PURE__*/function () {
        function ComboboxIconExampleComponent() {
          _classCallCheck(this, ComboboxIconExampleComponent);

          this.dataset = {
            items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
            selectedItem: "Item 1"
          };
        }

        _createClass(ComboboxIconExampleComponent, [{
          key: "valueChange",
          value: function valueChange(changedEvent) {
            this.dataset.selectedItem = changedEvent.newValue;
          }
        }]);

        return ComboboxIconExampleComponent;
      }();

      ComboboxIconExampleComponent.ɵfac = function ComboboxIconExampleComponent_Factory(t) {
        return new (t || ComboboxIconExampleComponent)();
      };

      ComboboxIconExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxIconExampleComponent,
        selectors: [["nui-combobox-icon-example"]],
        decls: 1,
        vars: 2,
        consts: [["icon", "add", 3, "value", "itemsSource", "changed"]],
        template: function ComboboxIconExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-combobox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function ComboboxIconExampleComponent_Template_nui_combobox_changed_0_listener($event) {
              return ctx.valueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.dataset.selectedItem)("itemsSource", ctx.dataset.items);
          }
        },
        directives: [_src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__["ComboboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Vm/Q":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-clear/combobox-clear.example.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VmQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox [itemsSource]=\"dataset.items\"\n              [clearOnBlur]=\"true\"\n              placeholder=\"Select Item\" i18n-placeholder></nui-combobox>\n";
      /***/
    },

    /***/
    "WR2J":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-icon/combobox-icon.example.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WR2J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { ISelectChangedEvent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-combobox-icon-example\",\n    templateUrl: \"./combobox-icon.example.component.html\",\n})\nexport class ComboboxIconExampleComponent {\n    public dataset = {\n        items: [\"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\"],\n        selectedItem: \"Item 1\",\n    };\n\n    public valueChange(changedEvent: ISelectChangedEvent<string>) {\n        this.dataset.selectedItem = changedEvent.newValue;\n    }\n}\n";
      /***/
    },

    /***/
    "WdPW":
    /*!****************************************************!*\
      !*** ./demo/src/components/demo/combobox/index.ts ***!
      \****************************************************/

    /*! exports provided: ComboboxAppendToBodyExampleComponent, ComboboxBasicExampleComponent, ComboboxClearExampleComponent, ComboboxCustomTemplateExampleComponent, ComboboxDisabledExampleComponent, ComboboxDisplayValueExampleComponent, ComboboxDocsComponent, ComboboxIconExampleComponent, ComboboxInlineExampleComponent, ComboboxJustifiedExampleComponent, ComboboxReactiveFormExampleComponent, ComboboxRequiredExampleComponent, ComboboxSeparatorsExampleComponent, ComboboxTestComponent, ComboboxTypeaheadExampleComponent, ComboboxVisualTestComponent, ComboboxWithRemoveValueExampleComponent */

    /***/
    function WdPW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _combobox_append_to_body_combobox_append_to_body_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./combobox-append-to-body/combobox-append-to-body.example.component */
      "jKlT");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxAppendToBodyExampleComponent", function () {
        return _combobox_append_to_body_combobox_append_to_body_example_component__WEBPACK_IMPORTED_MODULE_0__["ComboboxAppendToBodyExampleComponent"];
      });
      /* harmony import */


      var _combobox_basic_combobox_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./combobox-basic/combobox-basic.example.component */
      "k0aK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxBasicExampleComponent", function () {
        return _combobox_basic_combobox_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["ComboboxBasicExampleComponent"];
      });
      /* harmony import */


      var _combobox_clear_combobox_clear_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./combobox-clear/combobox-clear.example.component */
      "GKFH");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxClearExampleComponent", function () {
        return _combobox_clear_combobox_clear_example_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxClearExampleComponent"];
      });
      /* harmony import */


      var _combobox_custom_template_combobox_custom_template_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./combobox-custom-template/combobox-custom-template.example.component */
      "1ZAq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxCustomTemplateExampleComponent", function () {
        return _combobox_custom_template_combobox_custom_template_example_component__WEBPACK_IMPORTED_MODULE_3__["ComboboxCustomTemplateExampleComponent"];
      });
      /* harmony import */


      var _combobox_disabled_combobox_disabled_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./combobox-disabled/combobox-disabled.example.component */
      "jFL5");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxDisabledExampleComponent", function () {
        return _combobox_disabled_combobox_disabled_example_component__WEBPACK_IMPORTED_MODULE_4__["ComboboxDisabledExampleComponent"];
      });
      /* harmony import */


      var _combobox_display_value_combobox_display_value_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./combobox-display-value/combobox-display-value.example.component */
      "JPwj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxDisplayValueExampleComponent", function () {
        return _combobox_display_value_combobox_display_value_example_component__WEBPACK_IMPORTED_MODULE_5__["ComboboxDisplayValueExampleComponent"];
      });
      /* harmony import */


      var _combobox_docs_combobox_docs_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./combobox-docs/combobox-docs.example.component */
      "0WBa");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxDocsComponent", function () {
        return _combobox_docs_combobox_docs_example_component__WEBPACK_IMPORTED_MODULE_6__["ComboboxDocsComponent"];
      });
      /* harmony import */


      var _combobox_icon_combobox_icon_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./combobox-icon/combobox-icon.example.component */
      "VZ+c");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxIconExampleComponent", function () {
        return _combobox_icon_combobox_icon_example_component__WEBPACK_IMPORTED_MODULE_7__["ComboboxIconExampleComponent"];
      });
      /* harmony import */


      var _combobox_inline_combobox_inline_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./combobox-inline/combobox-inline.example.component */
      "0LIt");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxInlineExampleComponent", function () {
        return _combobox_inline_combobox_inline_example_component__WEBPACK_IMPORTED_MODULE_8__["ComboboxInlineExampleComponent"];
      });
      /* harmony import */


      var _combobox_justified_combobox_justified_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./combobox-justified/combobox-justified.example.component */
      "xYKM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxJustifiedExampleComponent", function () {
        return _combobox_justified_combobox_justified_example_component__WEBPACK_IMPORTED_MODULE_9__["ComboboxJustifiedExampleComponent"];
      });
      /* harmony import */


      var _combobox_reactive_form_combobox_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./combobox-reactive-form/combobox-reactive-form.example.component */
      "+vj5");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxReactiveFormExampleComponent", function () {
        return _combobox_reactive_form_combobox_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_10__["ComboboxReactiveFormExampleComponent"];
      });
      /* harmony import */


      var _combobox_required_combobox_required_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./combobox-required/combobox-required.example.component */
      "F4Up");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxRequiredExampleComponent", function () {
        return _combobox_required_combobox_required_example_component__WEBPACK_IMPORTED_MODULE_11__["ComboboxRequiredExampleComponent"];
      });
      /* harmony import */


      var _combobox_separators_combobox_separators_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./combobox-separators/combobox-separators.example.component */
      "PUXB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxSeparatorsExampleComponent", function () {
        return _combobox_separators_combobox_separators_example_component__WEBPACK_IMPORTED_MODULE_12__["ComboboxSeparatorsExampleComponent"];
      });
      /* harmony import */


      var _combobox_test_combobox_test_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./combobox-test/combobox-test.component */
      "YwPP");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxTestComponent", function () {
        return _combobox_test_combobox_test_component__WEBPACK_IMPORTED_MODULE_13__["ComboboxTestComponent"];
      });
      /* harmony import */


      var _combobox_typeahead_combobox_typeahead_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./combobox-typeahead/combobox-typeahead.example.component */
      "yvaV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxTypeaheadExampleComponent", function () {
        return _combobox_typeahead_combobox_typeahead_example_component__WEBPACK_IMPORTED_MODULE_14__["ComboboxTypeaheadExampleComponent"];
      });
      /* harmony import */


      var _combobox_visual_test_combobox_visual_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./combobox-visual-test/combobox-visual-test.component */
      "kfZy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxVisualTestComponent", function () {
        return _combobox_visual_test_combobox_visual_test_component__WEBPACK_IMPORTED_MODULE_15__["ComboboxVisualTestComponent"];
      });
      /* harmony import */


      var _combobox_with_remove_value_combobox_with_remove_value_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./combobox-with-remove-value/combobox-with-remove-value.example.component */
      "4Kix");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxWithRemoveValueExampleComponent", function () {
        return _combobox_with_remove_value_combobox_with_remove_value_example_component__WEBPACK_IMPORTED_MODULE_16__["ComboboxWithRemoveValueExampleComponent"];
      });
      /***/

    },

    /***/
    "XVIq":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-visual-test/combobox-visual-test.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XVIq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Basic Combobox</h3>\n            <nui-combobox id=\"nui-visual-test-basic-combobox\"\n                          [itemsSource]=\"dataset.items\">\n            </nui-combobox>\n            <hr />\n        </div>\n        <div class=\"col\">\n            <h3>Combobox with Placeholder</h3>\n            <nui-combobox id=\"nui-visual-test-combobox-with-placeholder\"\n                          [itemsSource]=\"dataset.items\"\n                          placeholder=\"Select item\">\n            </nui-combobox>\n            <hr />\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col\">\n            <h3>Disabled Combobox</h3>\n            <nui-combobox id=\"nui-visual-test-combobox-disabled\"\n                          [value]=\"dataset.selectedItem\"\n                          [isDisabled]=\"true\"\n                          [itemsSource]=\"dataset.items\">\n            </nui-combobox>\n            <hr />\n        </div>\n        <div class=\"col\">\n            <h3>Required Combobox</h3>\n            <nui-combobox id=\"nui-visual-test-combobox-required\"\n                          value=\"\"\n                          [isInErrorState]=\"errorState\"\n                          [itemsSource]=\"dataset.items\"\n                          (changed)=\"valueChange($event)\">\n            </nui-combobox>\n            <hr />\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col\">\n            <h3>Justified Combobox</h3>\n                <nui-combobox id=\"nui-visual-test-justified-combobox\"\n                              [itemsSource]=\"dataset.items\"\n                              placeholder=\"Select item\"\n                              [justified]=\"true\">\n                </nui-combobox>\n            <hr />\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col\">\n            <h3>Combobox with Groups</h3>\n            <nui-combobox id=\"nui-visual-test-combobox-separators\"\n                          [itemsSource]=\"displayedItems\"\n                          (changed)=\"textboxChanged($event)\">\n            </nui-combobox>\n            <hr />\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "XpAg":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-custom-template/combobox-custom-template.example.component.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XpAg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-template #customComboboxTemplate let-item=\"context\">\n    <nui-icon [icon]=\"item.icon\"></nui-icon>\n    <div class=\"media-body\" class=\"combobox-examples-custom-template\">\n        <h2>{{item.value}}</h2>\n        <h5>{{item.name}}</h5>\n        <nui-progress [showProgress]=\"true\"\n                      [show]=\"true\"\n                      [percent]=\"item.progress\"></nui-progress>\n    </div>\n</ng-template>\n<nui-combobox [value]=\"dataset.selectedItem\"\n              [itemsSource]=\"displayedItems\"\n              (changed)=\"textboxChanged($event)\"\n              [displayValue]=\"dataset.displayValue\"\n              [customTemplate]=\"customComboboxTemplate\"\n              placeholder=\"Select item\" i18n-placeholder></nui-combobox>\n";
      /***/
    },

    /***/
    "YwPP":
    /*!************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-test/combobox-test.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ComboboxTestComponent */

    /***/
    function YwPP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxTestComponent", function () {
        return ComboboxTestComponent;
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


      var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash/cloneDeep */
      "BkRI");
      /* harmony import */


      var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox-number/textbox-number.component */
      "ShSb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ComboboxTestComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nui-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "nui-progress", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.context;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", item_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showProgress", true)("show", true)("percent", item_r2.progress);
        }
      }

      var ComboboxTestComponent = /*#__PURE__*/function () {
        function ComboboxTestComponent(formBuilder, toastService) {
          _classCallCheck(this, ComboboxTestComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.dataset = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12", "Item 13", "Item 14", "Item 15"];
          this.displayValueDataset = [{
            value: "Value 1",
            name: "Item 1"
          }, {
            value: "Value 2",
            name: "Item 2"
          }, {
            value: "Value 3",
            name: "Item 3"
          }, {
            value: "Value 4",
            name: "Item 4"
          }, {
            value: "Value 5",
            name: "Item 5"
          }];
          this.reactiveFormDataset = {
            items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
            selectedItem: "Item 2"
          };
          this.requiredDataset = {
            items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
            selectedItem: ""
          };
          this.separatorsDataset = {
            itemsInGroups: [{
              header: "Group 1 header",
              items: ["Item 111", "Item 211", "Item 311"]
            }, {
              header: "Group 2 header",
              items: ["Item 112", "Item 212", "Item 312"]
            }, {
              header: "Group 3 header",
              items: ["Item 113", "Item 213", "Item 313"]
            }]
          };
          this.typeaheadDataset = [{
            header: "Group 1 header",
            items: [{
              label: "Item 111",
              value: "Value 1"
            }, {
              label: "Item 112",
              value: "Value 2"
            }, {
              label: "Item 123",
              value: "Value 3"
            }]
          }, {
            header: "Group 2 header",
            items: [{
              label: "Item 111",
              value: "Value 5"
            }, {
              label: "Item 212",
              value: "Value 6"
            }, {
              label: "Item 312",
              value: "Value 7"
            }]
          }, {
            header: "Group 3 header",
            items: [{
              label: "Item 456",
              value: "Value 7"
            }, {
              label: "Item 345",
              value: "Value 8"
            }, {
              label: "Item 414",
              value: "Value 9"
            }]
          }];
          this.htmlDisplayedItems = ["<>Item 111</>", "<button>Button 1</button>", "<input type='button' value='Button 2'>", "<input type='text'>", "<p>Some paragraph</p>"];
          this.customTemplateItems = [{
            name: "item_1",
            value: "Bonobo 112",
            icon: "severity_ok",
            progress: 78
          }, {
            name: "item_2",
            value: "Zelda 113",
            icon: "severity_ok",
            progress: 66
          }, {
            name: "item_3",
            value: "Max 123",
            icon: "severity_critical",
            progress: 7
          }, {
            name: "item_4",
            value: "Apple 234",
            icon: "severity_ok",
            progress: 24
          }, {
            name: "item_5",
            value: "Quartz 124",
            icon: "severity_warning",
            progress: 89
          }];
          this.typeaheadDisplayedItems = this.typeaheadDataset;
          this.width = 500;
          this.isRequired = true;
          this.errorState = true;
          this.separatorsDisplayedItems = this.separatorsDataset.itemsInGroups;
        }

        _createClass(ComboboxTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.formBuilder.group({
              item: this.formBuilder.control(this.reactiveFormDataset.selectedItem, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            });
            this.myForm.controls["item"].valueChanges.subscribe(function (value) {
              return console.log(value);
            });
            this.isInErrorState();
          }
        }, {
          key: "requiredValueChange",
          value: function requiredValueChange(changedEvent) {
            this.requiredDataset.selectedItem = changedEvent.newValue;
            this.isInErrorState();
          }
        }, {
          key: "separatorsTextboxChanged",
          value: function separatorsTextboxChanged(searchQuery) {
            this.separatorsDisplayedItems = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(this.separatorsDataset.itemsInGroups);
            this.separatorsDisplayedItems.forEach(function (items) {
              items.items = items.items.filter(function (item) {
                return item.includes(searchQuery.newValue);
              });
            });
          }
        }, {
          key: "isInErrorState",
          value: function isInErrorState() {
            this.errorState = this.isRequired && (!this.requiredDataset.selectedItem || !(this.requiredDataset.items.indexOf(this.requiredDataset.selectedItem) !== -1));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.myForm.valid ? this.toastService.success({
              message: "Your form is valid!"
            }) : this.toastService.error({
              message: "Your form is invalid!"
            });
          }
        }, {
          key: "onDisplayValueChange",
          value: function onDisplayValueChange(changedEvent) {
            this.displayValueSelectedItem = changedEvent.newValue;
          }
        }, {
          key: "typeaheadTextboxChanged",
          value: function typeaheadTextboxChanged(searchQuery) {
            this.typeaheadDisplayedItems = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(this.typeaheadDataset);
            this.typeaheadDisplayedItems.forEach(function (group) {
              group.items = group.items.filter(function (item) {
                return item.label.includes(searchQuery.newValue) || item.label.includes(searchQuery.newValue.label);
              });
            });
          }
        }, {
          key: "changeWidth",
          value: function changeWidth(newValue) {
            this.width = newValue;
          }
        }]);

        return ComboboxTestComponent;
      }();

      ComboboxTestComponent.ɵfac = function ComboboxTestComponent_Factory(t) {
        return new (t || ComboboxTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
      };

      ComboboxTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: ComboboxTestComponent,
        selectors: [["nui-combobox-test"]],
        decls: 71,
        vars: 32,
        consts: [["id", "nui-demo-basic-combobox", "placeholder", "Select item", 3, "itemsSource"], ["id", "nui-demo-combobox-with-clear-on-blur", "placeholder", "Select Item", 3, "itemsSource", "clearOnBlur"], ["id", "nui-demo-combobox-disabled", "value", "Item 1", 3, "isDisabled", "itemsSource"], ["id", "nui-demo-display-value-combobox", "displayValue", "name", "placeholder", "Select item", 3, "itemsSource", "changed"], ["id", "nui-demo-combobox-with-icon", "value", "Item 1", "icon", "add", 3, "itemsSource"], ["id", "nui-demo-inline-combobox", "placeholder", "Select item", 3, "itemsSource", "inline"], [3, "formGroup", "submit"], [1, "form-group"], ["id", "nui-demo-combobox-reactive-form", "formControlName", "item", "placeholder", "Select item", "required", "", 3, "isInErrorState", "itemsSource"], ["nui-button", "", "type", "submit", 1, "mt-1"], ["id", "nui-demo-combobox-required", "value", "Item 1", 3, "isInErrorState", "itemsSource", "changed"], ["id", "nui-demo-combobox-separators", "placeholder", "Select item", 3, "itemsSource", "changed"], ["id", "nui-demo-combobox-typeahead", "displayValue", "label", "placeholder", "Select item", 3, "itemsSource", "clearOnBlur", "changed"], [1, "w-25"], ["id", "nui-test-width-input", 3, "value", "valueChange"], ["id", "nui-demo-justified-combobox-container"], ["id", "nui-demo-justified-combobox", "placeholder", "Select item", 3, "itemsSource", "justified"], ["id", "nui-demo-combobox-html-in-items", 3, "itemsSource"], ["id", "nui-demo-combobox-with-template", "displayValue", "value", 3, "itemsSource", "customTemplate"], ["customComboboxTemplate", ""], ["id", "nui-demo-combobox-append-to-body", "placeholder", "Select item", 3, "itemsSource", "appendToBody"], ["id", "nui-demo-combobox-remove-value-button", "placeholder", "Select item", 3, "itemsSource", "isRemoveValueEnabled"], [3, "icon"], [1, "combobox-examples-custom-template"], [3, "showProgress", "show", "percent"]],
        template: function ComboboxTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "nui-combobox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Clear On Blur");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "nui-combobox", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "nui-combobox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Display Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "nui-combobox", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changed", function ComboboxTestComponent_Template_nui_combobox_changed_14_listener($event) {
              return ctx.onDisplayValueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "With Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "nui-combobox", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Inline");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "nui-combobox", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Reactive Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function ComboboxTestComponent_Template_form_submit_29_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "nui-combobox", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Required");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "nui-combobox", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changed", function ComboboxTestComponent_Template_nui_combobox_changed_37_listener($event) {
              return ctx.requiredValueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "With Separators");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "nui-combobox", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changed", function ComboboxTestComponent_Template_nui_combobox_changed_41_listener($event) {
              return ctx.separatorsTextboxChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Typeahead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "nui-combobox", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changed", function ComboboxTestComponent_Template_nui_combobox_changed_45_listener($event) {
              return ctx.typeaheadTextboxChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Justified");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "nui-textbox-number", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function ComboboxTestComponent_Template_nui_textbox_number_valueChange_50_listener($event) {
              return ctx.changeWidth($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "nui-combobox", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "HTML in menu items");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "nui-combobox", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Custom template");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "nui-combobox", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, ComboboxTestComponent_ng_template_61_Template, 7, 6, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Append to body");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "nui-combobox", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Remove value button");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "nui-combobox", 21);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx.dataset);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx.dataset)("clearOnBlur", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isDisabled", true)("itemsSource", ctx.dataset);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx.displayValueDataset);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("You selected: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 30, ctx.displayValueSelectedItem), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx.dataset);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx.dataset)("inline", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.myForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isInErrorState", ctx.myForm.controls["item"].invalid && ctx.myForm.controls["item"].touched)("itemsSource", ctx.dataset);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isInErrorState", ctx.errorState)("itemsSource", ctx.dataset);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx.separatorsDisplayedItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx.typeaheadDisplayedItems)("clearOnBlur", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.width);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx.width, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx.dataset)("justified", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx.htmlDisplayedItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx.customTemplateItems)("customTemplate", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx.dataset)("appendToBody", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx.dataset)("isRemoveValueEnabled", true);
          }
        },
        directives: [_src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_4__["ComboboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_6__["TextboxNumberComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "fK3O":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/index.ts ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function fK3O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./combobox-append-to-body/combobox-append-to-body.example.component\";\nexport * from \"./combobox-basic/combobox-basic.example.component\";\nexport * from \"./combobox-clear/combobox-clear.example.component\";\nexport * from \"./combobox-custom-template/combobox-custom-template.example.component\";\nexport * from \"./combobox-disabled/combobox-disabled.example.component\";\nexport * from \"./combobox-display-value/combobox-display-value.example.component\";\nexport * from \"./combobox-docs/combobox-docs.example.component\";\nexport * from \"./combobox-icon/combobox-icon.example.component\";\nexport * from \"./combobox-inline/combobox-inline.example.component\";\nexport * from \"./combobox-justified/combobox-justified.example.component\";\nexport * from \"./combobox-reactive-form/combobox-reactive-form.example.component\";\nexport * from \"./combobox-required/combobox-required.example.component\";\nexport * from \"./combobox-separators/combobox-separators.example.component\";\nexport * from \"./combobox-test/combobox-test.component\";\nexport * from \"./combobox-typeahead/combobox-typeahead.example.component\";\nexport * from \"./combobox-visual-test/combobox-visual-test.component\";\nexport * from \"./combobox-with-remove-value/combobox-with-remove-value.example.component\";\n";
      /***/
    },

    /***/
    "fihq":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-display-value/combobox-display-value.example.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fihq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox [itemsSource]=\"dataset.items\"\n              displayValue=\"name\"\n              (changed)=\"onValueChange($event)\"\n              placeholder=\"Select item\"\n              i18n-placeholder></nui-combobox>\n<p class=\"nui-text-default\">You selected: {{selectedItem | json}}</p>\n";
      /***/
    },

    /***/
    "g4Vi":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-disabled/combobox-disabled.example.component.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function g4Vi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-combobox-disabled-example\",\n    templateUrl: \"./combobox-disabled.example.component.html\",\n})\nexport class ComboboxDisabledExampleComponent {\n    public dataset = {\n        items: [\"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\"],\n        selectedItem: \"\",\n    };\n}\n";
      /***/
    },

    /***/
    "g7jM":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-clear/combobox-clear.example.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function g7jM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-combobox-clear-example\",\n    templateUrl: \"./combobox-clear.example.component.html\",\n})\nexport class ComboboxClearExampleComponent {\n    public dataset = {\n        items: [\"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\"],\n    };\n}\n";
      /***/
    },

    /***/
    "h4JG":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-inline/combobox-inline.example.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function h4JG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p i18n class=\"nui-text-default\">Lorem ipsum dolor sit amet.\n    <nui-combobox [itemsSource]=\"dataset.itemsSource1\"\n                  [inline]=\"true\"\n                  i18n-placeholder\n                  placeholder=\"Select item\"></nui-combobox>\n    <nui-combobox [itemsSource]=\"dataset.itemsSource2\"\n                  [inline]=\"true\"\n                  i18n-placeholder\n                  placeholder=\"Select item\"></nui-combobox>\n    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n</p>\n";
      /***/
    },

    /***/
    "hVB7":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-visual-test/combobox-visual-test.component.ts ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hVB7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { ISelectChangedEvent } from \"@nova-ui/bits\";\nimport _cloneDeep from \"lodash/cloneDeep\";\n\n@Component({\n    selector: \"combobox-visual-test\",\n    templateUrl: \"./combobox-visual-test.component.html\",\n})\n\nexport class ComboboxVisualTestComponent implements OnInit {\n    public isRequired: boolean = true;\n    public errorState: boolean = true;\n    public dataset = {\n        items: [\n            \"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\",\n            \"Item 6\", \"Item 7\", \"Item 8\", \"Item 9\", \"Item 10\",\n        ],\n        selectedItem: \"\",\n    };\n    public datasetInGroups = {\n        itemsInGroups: [\n            {\n                header: \"Group 1 header\",\n                items: [\"Item 111\", \"Item 211\", \"Item 311\"],\n            },\n            {\n                header: \"Group 2 header\",\n                items: [\"Item 112\", \"Item 212\", \"Item 312\"],\n            },\n            {\n                header: \"Group 3 header\",\n                items: [\"Item 113\", \"Item 213\", \"Item 313\"],\n            },\n        ],\n    };\n    public displayedItems = this.datasetInGroups.itemsInGroups;\n\n    public textboxChanged(searchQuery: ISelectChangedEvent<string>) {\n        this.displayedItems = _cloneDeep(this.datasetInGroups.itemsInGroups);\n        this.displayedItems.forEach(items => {\n            items.items = items.items.filter(item => item.includes(searchQuery.newValue));\n        });\n    }\n\n    ngOnInit() {\n        this.isInErrorState();\n    }\n\n    public valueChange(changedEvent: ISelectChangedEvent<string>): void {\n        this.dataset.selectedItem = changedEvent.newValue;\n        this.isInErrorState();\n    }\n\n    public isInErrorState(): void {\n        this.errorState = this.isRequired &&\n            (!this.dataset.selectedItem || !(this.dataset.items.indexOf(this.dataset.selectedItem) !== -1));\n    }\n}\n";
      /***/
    },

    /***/
    "jFL5":
    /*!****************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-disabled/combobox-disabled.example.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: ComboboxDisabledExampleComponent */

    /***/
    function jFL5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxDisabledExampleComponent", function () {
        return ComboboxDisabledExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");

      var ComboboxDisabledExampleComponent = function ComboboxDisabledExampleComponent() {
        _classCallCheck(this, ComboboxDisabledExampleComponent);

        this.dataset = {
          items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
          selectedItem: ""
        };
      };

      ComboboxDisabledExampleComponent.ɵfac = function ComboboxDisabledExampleComponent_Factory(t) {
        return new (t || ComboboxDisabledExampleComponent)();
      };

      ComboboxDisabledExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxDisabledExampleComponent,
        selectors: [["nui-combobox-disabled-example"]],
        decls: 1,
        vars: 3,
        consts: [[3, "value", "isDisabled", "itemsSource"]],
        template: function ComboboxDisabledExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-combobox", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.dataset.selectedItem)("isDisabled", true)("itemsSource", ctx.dataset.items);
          }
        },
        directives: [_src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__["ComboboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "jKlT":
    /*!****************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-append-to-body/combobox-append-to-body.example.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: ComboboxAppendToBodyExampleComponent */

    /***/
    function jKlT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxAppendToBodyExampleComponent", function () {
        return ComboboxAppendToBodyExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");

      var ComboboxAppendToBodyExampleComponent = function ComboboxAppendToBodyExampleComponent() {
        _classCallCheck(this, ComboboxAppendToBodyExampleComponent);

        this.dataset = {
          items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12", "Item 13", "Item 14", "Item 15"]
        };
      };

      ComboboxAppendToBodyExampleComponent.ɵfac = function ComboboxAppendToBodyExampleComponent_Factory(t) {
        return new (t || ComboboxAppendToBodyExampleComponent)();
      };

      ComboboxAppendToBodyExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxAppendToBodyExampleComponent,
        selectors: [["nui-combobox-append-to-body-example"]],
        decls: 1,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_APPEND_TO_BODY_COMBOBOX_APPEND_TO_BODY_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select item");
            i18n_0 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_APPEND_TO_BODY_COMBOBOX_APPEND_TO_BODY_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          return [["placeholder", i18n_0, 3, "itemsSource", "appendToBody"]];
        },
        template: function ComboboxAppendToBodyExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-combobox", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.dataset.items)("appendToBody", true);
          }
        },
        directives: [_src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__["ComboboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "k0aK":
    /*!**********************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-basic/combobox-basic.example.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ComboboxBasicExampleComponent */

    /***/
    function k0aK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxBasicExampleComponent", function () {
        return ComboboxBasicExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");

      var ComboboxBasicExampleComponent = function ComboboxBasicExampleComponent() {
        _classCallCheck(this, ComboboxBasicExampleComponent);

        this.dataset = {
          items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12", "Item 13", "Item 14", "Item 15"]
        };
      };

      ComboboxBasicExampleComponent.ɵfac = function ComboboxBasicExampleComponent_Factory(t) {
        return new (t || ComboboxBasicExampleComponent)();
      };

      ComboboxBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxBasicExampleComponent,
        selectors: [["nui-combobox-basic-example"]],
        decls: 1,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_BASIC_COMBOBOX_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select item");
            i18n_0 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_BASIC_COMBOBOX_BASIC_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          return [["placeholder", i18n_0, 3, "itemsSource"]];
        },
        template: function ComboboxBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-combobox", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.dataset.items);
          }
        },
        directives: [_src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__["ComboboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "kfZy":
    /*!**************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-visual-test/combobox-visual-test.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ComboboxVisualTestComponent */

    /***/
    function kfZy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxVisualTestComponent", function () {
        return ComboboxVisualTestComponent;
      });
      /* harmony import */


      var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash/cloneDeep */
      "BkRI");
      /* harmony import */


      var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");

      var ComboboxVisualTestComponent = /*#__PURE__*/function () {
        function ComboboxVisualTestComponent() {
          _classCallCheck(this, ComboboxVisualTestComponent);

          this.isRequired = true;
          this.errorState = true;
          this.dataset = {
            items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"],
            selectedItem: ""
          };
          this.datasetInGroups = {
            itemsInGroups: [{
              header: "Group 1 header",
              items: ["Item 111", "Item 211", "Item 311"]
            }, {
              header: "Group 2 header",
              items: ["Item 112", "Item 212", "Item 312"]
            }, {
              header: "Group 3 header",
              items: ["Item 113", "Item 213", "Item 313"]
            }]
          };
          this.displayedItems = this.datasetInGroups.itemsInGroups;
        }

        _createClass(ComboboxVisualTestComponent, [{
          key: "textboxChanged",
          value: function textboxChanged(searchQuery) {
            this.displayedItems = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(this.datasetInGroups.itemsInGroups);
            this.displayedItems.forEach(function (items) {
              items.items = items.items.filter(function (item) {
                return item.includes(searchQuery.newValue);
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isInErrorState();
          }
        }, {
          key: "valueChange",
          value: function valueChange(changedEvent) {
            this.dataset.selectedItem = changedEvent.newValue;
            this.isInErrorState();
          }
        }, {
          key: "isInErrorState",
          value: function isInErrorState() {
            this.errorState = this.isRequired && (!this.dataset.selectedItem || !(this.dataset.items.indexOf(this.dataset.selectedItem) !== -1));
          }
        }]);

        return ComboboxVisualTestComponent;
      }();

      ComboboxVisualTestComponent.ɵfac = function ComboboxVisualTestComponent_Factory(t) {
        return new (t || ComboboxVisualTestComponent)();
      };

      ComboboxVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ComboboxVisualTestComponent,
        selectors: [["combobox-visual-test"]],
        decls: 35,
        vars: 10,
        consts: [[1, "container"], [1, "row"], [1, "col"], ["id", "nui-visual-test-basic-combobox", 3, "itemsSource"], ["id", "nui-visual-test-combobox-with-placeholder", "placeholder", "Select item", 3, "itemsSource"], [1, "w-100"], ["id", "nui-visual-test-combobox-disabled", 3, "value", "isDisabled", "itemsSource"], ["id", "nui-visual-test-combobox-required", "value", "", 3, "isInErrorState", "itemsSource", "changed"], ["id", "nui-visual-test-justified-combobox", "placeholder", "Select item", 3, "itemsSource", "justified"], ["id", "nui-visual-test-combobox-separators", 3, "itemsSource", "changed"]],
        template: function ComboboxVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Basic Combobox");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nui-combobox", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Combobox with Placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "nui-combobox", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Disabled Combobox");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "nui-combobox", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Required Combobox");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nui-combobox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function ComboboxVisualTestComponent_Template_nui_combobox_changed_21_listener($event) {
              return ctx.valueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Justified Combobox");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "nui-combobox", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Combobox with Groups");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nui-combobox", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function ComboboxVisualTestComponent_Template_nui_combobox_changed_33_listener($event) {
              return ctx.textboxChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.dataset.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.dataset.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.dataset.selectedItem)("isDisabled", true)("itemsSource", ctx.dataset.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isInErrorState", ctx.errorState)("itemsSource", ctx.dataset.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.dataset.items)("justified", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.displayedItems);
          }
        },
        directives: [_src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "ngvm":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-separators/combobox-separators.example.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ngvm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox [itemsSource]=\"displayedItems\"\n              (changed)=\"textboxChanged($event)\"\n              placeholder=\"Select item\" i18n-placeholder></nui-combobox>\n";
      /***/
    },

    /***/
    "q1cQ":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-basic/combobox-basic.example.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function q1cQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-combobox-basic-example\",\n    templateUrl: \"./combobox-basic.example.component.html\",\n})\nexport class ComboboxBasicExampleComponent {\n    public dataset = {\n        items: [\n            \"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\",\n            \"Item 6\", \"Item 7\", \"Item 8\", \"Item 9\", \"Item 10\",\n            \"Item 11\", \"Item 12\", \"Item 13\", \"Item 14\", \"Item 15\",\n        ],\n    };\n}\n";
      /***/
    },

    /***/
    "qel9":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-typeahead/combobox-typeahead.example.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qel9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox [itemsSource]=\"displayedItems\"\n              [clearOnBlur]=\"true\"\n              displayValue=\"label\"\n              (changed)=\"textboxChanged($event)\"\n              placeholder=\"Select item\" i18n-placeholder></nui-combobox>\n";
      /***/
    },

    /***/
    "rvz8":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-docs/combobox-docs.example.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rvz8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    <code>&lt;nui-combobox&gt;</code> allows user to select one item from a list. User may filter the list by typing\n    a query into the accompanying input field. <strong>Note:</strong> maximum width of combobox dropdown menu is 400px\n    (except for stretched combobox, where combobox itself and combobox dropdown menu are justified to the width of\n    container element).\n</p>\n<h2>Accessibility</h2>\n<p>\n    Use <code>Tab</code> to navigate through form controls. Focus in and out with <code>Tab</code> will,\n    respectively, open and close popup.<br>\n    When input focused and popup is closed press <code>shift + arrow down</code> (or just  <code>arrow down</code>)\n    to open popup. <br>\n    When opened: <br>\n    <code>Arrow top/bottom</code> - navigate through items in a list; <br>\n    Make an item active with arrows and press <code>Enter</code> to select it; <br>\n    <code>Esc</code> - close popup; <br>\n    When datasource in combobox is changed - key control is reset; <br>\n    If an item was active and then datasource is changed - first item will become active; <br>\n</p>\n<h2>Basic Usage</h2>\n<p>\n    To implement basic combobox you need to pass data via <code>itemsSource</code> input. Use <code>placeholder</code>\n    input to display placeholder. <code>value</code> receives item that will be selected before user starts to\n    communicate with select component. <code>itemsSource</code> data must be an array of strings.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-basic\" exampleTitle=\"Basic usage\">\n    <nui-combobox-basic-example></nui-combobox-basic-example>\n</nui-example-wrapper>\n\n\n<h2>Disabled</h2>\n<p>\n    To disable combobox use <code>isDisabled</code> property.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-disabled\" exampleTitle=\"Disabled\">\n    <nui-combobox-disabled-example></nui-combobox-disabled-example>\n</nui-example-wrapper>\n\n<h2>Required</h2>\n<p>\n    The option <code>isInErrorState</code> is used to set/change conditional \"required\" validation.\n    To subscribe to <code>changed</code> event you should pass a function, argument of which is\n    <code><a href=\"../interfaces/ISelectChangedEvent.html\" target=\"_blank\">ISelectChangedEvent</a></code> object.\n\n    The option <code>isInErrorState</code> is used to set/change conditional \"required\" validation.\n    This is quick way to set combobox as required instead of passing config object into validator.\n    Use it to highlight error if field is set to empty or if user input doesn't corresponds to any item in the the\n    source array and you are not interested in specific message. To subscribe to <code>changed</code> event you should\n    pass a function, argument of which is\n    <code><a href=\"../interfaces/ISelectChangedEvent.html\" target=\"_blank\">ISelectChangedEvent</a></code> object.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-required\" exampleTitle=\"Required\">\n    <nui-combobox-required-example></nui-combobox-required-example>\n</nui-example-wrapper>\n\n<h2>Inline</h2>\n<p>\n    To make combobox inline you need to use <code>inline</code> property. <strong>Note:</strong> As you see there are\n    no spacings between <code>nui-combobox</code>es in this example because spacings should be handled by users\n    themselves (users should use <code>@nui-space-md</code> spacing if they want to have several comboboxes next to\n    each other).\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-inline\" exampleTitle=\"Inline\">\n    <nui-combobox-inline-example></nui-combobox-inline-example>\n</nui-example-wrapper>\n\n<h2>Clear on Blur</h2>\n<p>\n    If you want to clear combobox input if it's value is not in the source array you need to pass\n    <code>clearOnBlur</code> property.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-clear\" exampleTitle=\"Clear on Blur\">\n    <nui-combobox-clear-example></nui-combobox-clear-example>\n</nui-example-wrapper>\n\n<h2>Icon Adjustment</h2>\n<p>\n    To adjust an icon to the combobox use <code>icon</code> property and pass in the name of the icon.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-icon\" exampleTitle=\"Icon Adjustment\">\n    <nui-combobox-icon-example></nui-combobox-icon-example>\n</nui-example-wrapper>\n\n<h2>Filling the Parent Width</h2>\n<p>\n    For combobox to fill it's parent width you may pass <code>true</code> to the <code>justified</code> property.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-justified\" exampleTitle=\"Filling the Parent Width\">\n    <nui-combobox-justified-example></nui-combobox-justified-example>\n</nui-example-wrapper>\n\n<h2>Display value</h2>\n<p>\n    If you want to have <code>itemsSource</code> as an array of object you need to pass <code>displayValue</code>\n    property with name of the item property that will be shown in the dropdown menu.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"combobox-display-value\" exampleTitle=\"Display value\">\n    <nui-combobox-display-value-example></nui-combobox-display-value-example>\n</nui-example-wrapper>\n\n<h2>Using With Reactive Forms</h2>\n<p>\n    To use <code>nui-combobox</code> in reactive forms you need to create <code>FormGroup</code> that represents our\n    form model. After that you can bind <code>nui-combobox</code> to this form element using\n    <code>formControlName</code>\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-reactive-form\" exampleTitle=\"Using With Reactive Forms\">\n    <nui-combobox-reactive-form></nui-combobox-reactive-form>\n</nui-example-wrapper>\n\n<h2>Typeahead</h2>\n<p>\n    To add typeahead-like behavior to combobox you need to change <code>itemsSource</code> in select in subscription to\n    <code>(changed)</code> event. Then combobox dropdown will be re-rendered with new set of items.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-typeahead\" exampleTitle=\"Typeahead\">\n    <nui-combobox-typeahead-example></nui-combobox-typeahead-example>\n</nui-example-wrapper>\n\n<h2>Separators</h2>\n<p>\n    If you want to have grouped data, you need to pass data as an array of\n    <code><a href=\"../interfaces/ISelectGroup.html\" target=\"_blank\">ISelectGroup</a></code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-separators\" exampleTitle=\"Separators\">\n    <nui-combobox-separators-example></nui-combobox-separators-example>\n</nui-example-wrapper>\n\n<h2>Using a Custom Template</h2>\n<p>\n    To provide custom template for every item in combobox you need to link <code>customTemplate</code> input with\n    <code>TemplateRef</code> that represents custom template.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-custom-template\" exampleTitle=\"Combobox with custom template\">\n    <nui-combobox-custom-template-example></nui-combobox-custom-template-example>\n</nui-example-wrapper>\n\n<h2>Append to Body</h2>\n<p>To attach menu popup to &lt;body&gt; use <code>appendToBody</code> input.\n   It allows menu to ignore containers and overlap them.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-append-to-body\" exampleTitle=\"Append to Body\">\n    <nui-combobox-append-to-body-example></nui-combobox-append-to-body-example>\n</nui-example-wrapper>\n\n<h2>Using with X button for removing value</h2>\n<p>To enable \"X\" button for removing combobox value, use <code>isRemoveValueEnabled</code>\n    input set to <code>true</code>. The button will be shown in case value is typed.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-with-remove-value\"\n                     exampleTitle=\"Remove value button\">\n    <nui-combobox-with-remove-value-example></nui-combobox-with-remove-value-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "s0kV":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-test/combobox-test.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function s0kV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Basic</h1>\n<nui-combobox id=\"nui-demo-basic-combobox\"\n              [itemsSource]=\"dataset\"\n              placeholder=\"Select item\"></nui-combobox>\n<hr>\n<h1>Clear On Blur</h1>\n<nui-combobox id=\"nui-demo-combobox-with-clear-on-blur\"\n              [itemsSource]=\"dataset\"\n              [clearOnBlur]=\"true\"\n              placeholder=\"Select Item\"></nui-combobox>\n<hr>\n<h1>Disabled</h1>\n<nui-combobox id=\"nui-demo-combobox-disabled\"\n              value=\"Item 1\"\n              [isDisabled]=\"true\"\n              [itemsSource]=\"dataset\"></nui-combobox>\n<hr>\n<h1>Display Value</h1>\n<nui-combobox id=\"nui-demo-display-value-combobox\"\n              [itemsSource]=\"displayValueDataset\"\n              displayValue=\"name\"\n              (changed)=\"onDisplayValueChange($event)\"\n              placeholder=\"Select item\"></nui-combobox>\n<p>You selected: {{displayValueSelectedItem | json}}</p>\n<hr>\n<h1>With Icon</h1>\n<nui-combobox id=\"nui-demo-combobox-with-icon\"\n              value=\"Item 1\"\n              icon=\"add\"\n              [itemsSource]=\"dataset\"></nui-combobox>\n<hr>\n<h1>Inline</h1>\n<nui-combobox id=\"nui-demo-inline-combobox\"\n              [itemsSource]=\"dataset\"\n              [inline]=\"true\"\n              placeholder=\"Select item\"></nui-combobox>\n<hr>\n<h1>Reactive Form</h1>\n<form [formGroup]=\"myForm\" (submit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <nui-combobox id=\"nui-demo-combobox-reactive-form\"\n                      formControlName=\"item\"\n                      [isInErrorState]=\"myForm.controls['item'].invalid && myForm.controls['item'].touched\"\n                      [itemsSource]=\"dataset\"\n                      placeholder=\"Select item\" required></nui-combobox>\n        <button nui-button\n                type=\"submit\"\n                class=\"mt-1\">Submit</button>\n    </div>\n</form>\n<hr>\n<h1>Required</h1>\n<nui-combobox id=\"nui-demo-combobox-required\"\n              value=\"Item 1\"\n              [isInErrorState]=\"errorState\"\n              [itemsSource]=\"dataset\"\n              (changed)=\"requiredValueChange($event)\"></nui-combobox>\n<hr>\n<h1>With Separators</h1>\n<nui-combobox id=\"nui-demo-combobox-separators\"\n              [itemsSource]=\"separatorsDisplayedItems\"\n              (changed)=\"separatorsTextboxChanged($event)\"\n              placeholder=\"Select item\"></nui-combobox>\n<hr>\n<h1>Typeahead</h1>\n<nui-combobox id=\"nui-demo-combobox-typeahead\"\n              [itemsSource]=\"typeaheadDisplayedItems\"\n              [clearOnBlur]=\"true\"\n              displayValue=\"label\"\n              (changed)=\"typeaheadTextboxChanged($event)\"\n              placeholder=\"Select item\"></nui-combobox>\n<hr>\n<h1>Justified</h1>\n<div class=\"w-25\">\n    <nui-textbox-number id=\"nui-test-width-input\"\n                        [value]=\"width\"\n                        (valueChange)=\"changeWidth($event)\"></nui-textbox-number>\n</div>\n<div [style.width.px]=\"width\" id=\"nui-demo-justified-combobox-container\">\n    <nui-combobox id=\"nui-demo-justified-combobox\"\n                  [itemsSource]=\"dataset\"\n                  placeholder=\"Select item\"\n                  [justified]=\"true\"></nui-combobox>\n</div>\n<hr>\n<h1>HTML in menu items</h1>\n<nui-combobox id=\"nui-demo-combobox-html-in-items\"\n              [itemsSource]=\"htmlDisplayedItems\"></nui-combobox>\n<hr>\n<h1>Custom template</h1>\n<nui-combobox id=\"nui-demo-combobox-with-template\"\n              [itemsSource]=\"customTemplateItems\"\n              displayValue=\"value\"\n              [customTemplate]=\"customComboboxTemplate\"></nui-combobox>\n<ng-template #customComboboxTemplate let-item=\"context\">\n    <nui-icon [icon]=\"item.icon\"></nui-icon>\n    <div class=\"media-body\" class=\"combobox-examples-custom-template\">\n        <h2>{{item.value}}</h2>\n        <h5>{{item.name}}</h5>\n        <nui-progress [showProgress]=\"true\"\n                      [show]=\"true\"\n                      [percent]=\"item.progress\"></nui-progress>\n    </div>\n</ng-template>\n<hr>\n<h1>Append to body</h1>\n<nui-combobox id=\"nui-demo-combobox-append-to-body\"\n              [itemsSource]=\"dataset\"\n              [appendToBody]=\"true\"\n              placeholder=\"Select item\"></nui-combobox>\n<hr>\n<h1>Remove value button</h1>\n<nui-combobox id=\"nui-demo-combobox-remove-value-button\"\n              [itemsSource]=\"dataset\"\n              [isRemoveValueEnabled]=\"true\"\n              placeholder=\"Select item\"></nui-combobox>\n";
      /***/
    },

    /***/
    "t5fG":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-test/combobox-test.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function t5fG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport { ISelectChangedEvent, ISelectGroup, ToastService } from \"@nova-ui/bits\";\nimport _cloneDeep from \"lodash/cloneDeep\";\n\n@Component({\n    selector: \"nui-combobox-test\",\n    templateUrl: \"./combobox-test.component.html\",\n})\nexport class ComboboxTestComponent implements OnInit {\n    public myForm: FormGroup;\n    public dataset = [\n        \"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\",\n        \"Item 6\", \"Item 7\", \"Item 8\", \"Item 9\", \"Item 10\",\n        \"Item 11\", \"Item 12\", \"Item 13\", \"Item 14\", \"Item 15\",\n    ];\n    public displayValueDataset = [\n        {value: \"Value 1\", name: \"Item 1\"},\n        {value: \"Value 2\", name: \"Item 2\"},\n        {value: \"Value 3\", name: \"Item 3\"},\n        {value: \"Value 4\", name: \"Item 4\"},\n        {value: \"Value 5\", name: \"Item 5\"},\n    ];\n    public reactiveFormDataset = {\n        items: [\"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\"],\n        selectedItem: \"Item 2\",\n    };\n    public requiredDataset = {\n        items: [\"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\"],\n        selectedItem: \"\",\n    };\n    public separatorsDataset = {\n        itemsInGroups: [\n            {\n                header: `Group 1 header`,\n                items: [`Item 111`, `Item 211`, `Item 311`],\n            },\n            {\n                header: `Group 2 header`,\n                items: [`Item 112`, `Item 212`, `Item 312`],\n            },\n            {\n                header: `Group 3 header`,\n                items: [`Item 113`, `Item 213`, `Item 313`],\n            },\n        ],\n    };\n    public typeaheadDataset: ISelectGroup[] = [\n        {\n            header: \"Group 1 header\",\n            items: [\n                {label: \"Item 111\", value: \"Value 1\"},\n                {label: \"Item 112\", value: \"Value 2\"},\n                {label: \"Item 123\", value: \"Value 3\"},\n            ],\n        },\n        {\n            header: \"Group 2 header\",\n            items: [\n                {label: \"Item 111\", value: \"Value 5\"},\n                {label: \"Item 212\", value: \"Value 6\"},\n                {label: \"Item 312\", value: \"Value 7\"},\n            ],\n        },\n        {\n            header: \"Group 3 header\",\n            items: [\n                {label: \"Item 456\", value: \"Value 7\"},\n                {label: \"Item 345\", value: \"Value 8\"},\n                {label: \"Item 414\", value: \"Value 9\"},\n            ],\n        },\n    ];\n    public htmlDisplayedItems = [\n        \"<>Item 111</>\",\n        \"<button>Button 1</button>\",\n        \"<input type='button' value='Button 2'>\",\n        \"<input type='text'>\",\n        \"<p>Some paragraph</p>\",\n    ];\n    public customTemplateItems = [\n        {name: \"item_1\", value: \"Bonobo 112\", icon: \"severity_ok\", progress: 78},\n        {name: \"item_2\", value: \"Zelda 113\", icon: \"severity_ok\", progress: 66},\n        {name: \"item_3\", value: \"Max 123\", icon: \"severity_critical\", progress: 7},\n        {name: \"item_4\", value: \"Apple 234\", icon: \"severity_ok\", progress: 24},\n        {name: \"item_5\", value: \"Quartz 124\", icon: \"severity_warning\", progress: 89},\n    ];\n    public typeaheadDisplayedItems = this.typeaheadDataset;\n    public displayValueSelectedItem: any;\n    public width: number = 500;\n    public isRequired: boolean = true;\n    public errorState: boolean = true;\n    public separatorsDisplayedItems = this.separatorsDataset.itemsInGroups;\n\n    constructor(private formBuilder: FormBuilder,\n                @Inject(ToastService) private toastService: ToastService) {\n    }\n\n    public ngOnInit() {\n        this.myForm = this.formBuilder.group({\n            item: this.formBuilder.control(this.reactiveFormDataset.selectedItem, [Validators.required]),\n        });\n\n        this.myForm.controls[\"item\"].valueChanges.subscribe(value => console.log(value));\n        this.isInErrorState();\n    }\n\n    public requiredValueChange(changedEvent: ISelectChangedEvent<string>): void {\n        this.requiredDataset.selectedItem = changedEvent.newValue;\n        this.isInErrorState();\n    }\n\n    public separatorsTextboxChanged(searchQuery: ISelectChangedEvent<string>) {\n        this.separatorsDisplayedItems = _cloneDeep(this.separatorsDataset.itemsInGroups);\n        this.separatorsDisplayedItems.forEach(items => {\n            items.items = items.items.filter(item => item.includes(searchQuery.newValue));\n        });\n    }\n\n    public isInErrorState(): void {\n        this.errorState = this.isRequired &&\n            (!this.requiredDataset.selectedItem || !(this.requiredDataset.items.indexOf(this.requiredDataset.selectedItem) !== -1));\n    }\n\n    public onSubmit() {\n        this.myForm.valid ? this.toastService.success({message: `Your form is valid!`}) :\n            this.toastService.error({message: `Your form is invalid!`});\n    }\n\n    public onDisplayValueChange(changedEvent: ISelectChangedEvent<any>) {\n        this.displayValueSelectedItem = changedEvent.newValue;\n    }\n\n    public typeaheadTextboxChanged(searchQuery: ISelectChangedEvent<any>) {\n        this.typeaheadDisplayedItems = _cloneDeep(this.typeaheadDataset);\n        this.typeaheadDisplayedItems.forEach(group => {\n            group.items = group.items.filter(item =>\n                item.label.includes(searchQuery.newValue) || item.label.includes(searchQuery.newValue.label));\n        });\n    }\n\n    public changeWidth(newValue: number): void {\n        this.width = newValue;\n    }\n}\n";
      /***/
    },

    /***/
    "tVco":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-custom-template/combobox-custom-template.example.component.ts ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tVco(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { ISelectChangedEvent } from \"@nova-ui/bits\";\nimport _cloneDeep from \"lodash/cloneDeep\";\n\n@Component({\n    selector: \"nui-combobox-custom-template-example\",\n    templateUrl: \"./combobox-custom-template.example.component.html\",\n    styleUrls: [\n        \"./combobox-custom-template.example.component.less\",\n    ],\n})\nexport class ComboboxCustomTemplateExampleComponent {\n    public dataset = {\n        displayValue: \"value\",\n        selectedItem: \"\",\n        items: [\n            {name: \"item_1\", value: \"Bonobo 112\", icon: \"severity_ok\", progress: 78},\n            {name: \"item_2\", value: \"Zelda 113\", icon: \"severity_ok\", progress: 66},\n            {name: \"item_3\", value: \"Max 123\", icon: \"severity_critical\", progress: 7},\n            {name: \"item_4\", value: \"Apple 234\", icon: \"severity_ok\", progress: 24},\n            {name: \"item_5\", value: \"Quartz 124\", icon: \"severity_warning\", progress: 89},\n        ],\n    };\n    public displayedItems = this.dataset.items;\n\n    constructor() { }\n\n    public textboxChanged(searchQuery: ISelectChangedEvent<string>) {\n        this.displayedItems = _cloneDeep(this.dataset.items);\n        this.displayedItems = this.displayedItems.filter((item: any) => item.value.includes(searchQuery.newValue));\n    }\n}\n";
      /***/
    },

    /***/
    "w54Q":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox/combobox-required/combobox-required.example.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function w54Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox [value]=\"dataset.selectedItem\"\n              [isInErrorState]=\"errorState\"\n              [itemsSource]=\"dataset.items\"\n              (changed)=\"valueChange($event)\"></nui-combobox>\n";
      /***/
    },

    /***/
    "xYKM":
    /*!******************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-justified/combobox-justified.example.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ComboboxJustifiedExampleComponent */

    /***/
    function xYKM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxJustifiedExampleComponent", function () {
        return ComboboxJustifiedExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");

      var ComboboxJustifiedExampleComponent = function ComboboxJustifiedExampleComponent() {
        _classCallCheck(this, ComboboxJustifiedExampleComponent);

        this.dataset = {
          items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
        };
      };

      ComboboxJustifiedExampleComponent.ɵfac = function ComboboxJustifiedExampleComponent_Factory(t) {
        return new (t || ComboboxJustifiedExampleComponent)();
      };

      ComboboxJustifiedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxJustifiedExampleComponent,
        selectors: [["nui-combobox-justified-example"]],
        decls: 1,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_JUSTIFIED_COMBOBOX_JUSTIFIED_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select item");
            i18n_0 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_JUSTIFIED_COMBOBOX_JUSTIFIED_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          return [["placeholder", i18n_0, 3, "itemsSource", "justified"]];
        },
        template: function ComboboxJustifiedExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-combobox", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.dataset.items)("justified", true);
          }
        },
        directives: [_src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_1__["ComboboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "yvaV":
    /*!******************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox/combobox-typeahead/combobox-typeahead.example.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ComboboxTypeaheadExampleComponent */

    /***/
    function yvaV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxTypeaheadExampleComponent", function () {
        return ComboboxTypeaheadExampleComponent;
      });
      /* harmony import */


      var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash/cloneDeep */
      "BkRI");
      /* harmony import */


      var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");

      var ComboboxTypeaheadExampleComponent = /*#__PURE__*/function () {
        function ComboboxTypeaheadExampleComponent() {
          _classCallCheck(this, ComboboxTypeaheadExampleComponent);

          this.dataset = [{
            header: "Group 1 header",
            items: [{
              label: "Item 111",
              value: "Value 1"
            }, {
              label: "Item 112",
              value: "Value 2"
            }, {
              label: "Item 123",
              value: "Value 3"
            }]
          }, {
            header: "Group 2 header",
            items: [{
              label: "Item 111",
              value: "Value 5"
            }, {
              label: "Item 212",
              value: "Value 6"
            }, {
              label: "Item 312",
              value: "Value 7"
            }]
          }, {
            header: "Group 3 header",
            items: [{
              label: "Item 456",
              value: "Value 7"
            }, {
              label: "Item 345",
              value: "Value 8"
            }, {
              label: "Item 414",
              value: "Value 9"
            }]
          }];
          this.displayedItems = this.dataset;
        }

        _createClass(ComboboxTypeaheadExampleComponent, [{
          key: "textboxChanged",
          value: function textboxChanged(searchQuery) {
            this.displayedItems = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(this.dataset);
            this.displayedItems.forEach(function (group) {
              group.items = group.items.filter(function (item) {
                // searchQuery.newValue.label is necessary, since combobox can emit event with 2 possible values:
                // either string or complex object ({label: x, value: y} in this case). Users should be careful dealing with this emitters
                // and handle them properly.
                var itemLabel = item.label.toLowerCase();
                var val = searchQuery.newValue;
                return itemLabel.includes(val.toLowerCase()) || itemLabel.includes(val.label && val.label.toLowerCase());
              });
            });
          }
        }]);

        return ComboboxTypeaheadExampleComponent;
      }();

      ComboboxTypeaheadExampleComponent.ɵfac = function ComboboxTypeaheadExampleComponent_Factory(t) {
        return new (t || ComboboxTypeaheadExampleComponent)();
      };

      ComboboxTypeaheadExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ComboboxTypeaheadExampleComponent,
        selectors: [["nui-combobox-typeahead-example"]],
        decls: 1,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_TYPEAHEAD_COMBOBOX_TYPEAHEAD_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select item");
            i18n_0 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_COMBOBOX_TYPEAHEAD_COMBOBOX_TYPEAHEAD_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          return [["displayValue", "label", "placeholder", i18n_0, 3, "itemsSource", "clearOnBlur", "changed"]];
        },
        template: function ComboboxTypeaheadExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-combobox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function ComboboxTypeaheadExampleComponent_Template_nui_combobox_changed_0_listener($event) {
              return ctx.textboxChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.displayedItems)("clearOnBlur", true);
          }
        },
        directives: [_src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxComponent"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-combobox-combobox-module-es5.js.map