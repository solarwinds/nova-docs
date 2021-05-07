(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-combobox-v2-combobox-v2-module"], {
    /***/
    "+HcL":
    /*!*****************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-test/combobox-v2-test.example.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ComboboxV2TestExampleComponent */

    /***/
    function HcL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2TestExampleComponent", function () {
        return ComboboxV2TestExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/form-field/form-field.component */
      "L5T1");
      /* harmony import */


      var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/validation-message/validation-message.component */
      "Dm7Q");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");
      /* harmony import */


      var _src_lib_overlay_overlay_item_overlay_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../../src/lib/overlay/overlay-item/overlay-item.component */
      "WpiY");
      /* harmony import */


      var _src_lib_chips_chip_chip_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../../src/lib/chips/chip/chip.component */
      "PEYr");
      /* harmony import */


      var _src_lib_select_v2_mark_as_selected_item_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/mark-as-selected-item.directive */
      "2vPf");
      /* harmony import */


      var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-header.component */
      "skCw");
      /* harmony import */


      var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-footer.component */
      "NHEo");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/select/select-v2.component */
      "UpNd");
      /* harmony import */


      var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../../../../src/lib/popover/popover.component */
      "N1kL");
      /* harmony import */


      var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../../../../src/lib/menu/menu/menu.component */
      "JG2v");
      /* harmony import */


      var _src_lib_menu_menu_item_menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../../../../src/lib/menu/menu-item/menu-action/menu-action.component */
      "6sIJ");

      var _c0 = ["comboboxSingle"];
      var _c1 = ["comboboxMultiDimensions"];

      function ComboboxV2TestExampleComponent_nui_select_v2_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r29);
        }
      }

      function ComboboxV2TestExampleComponent_nui_select_v2_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r30);
        }
      }

      function ComboboxV2TestExampleComponent_nui_select_v2_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r31);
        }
      }

      function ComboboxV2TestExampleComponent_nui_select_v2_option_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r32 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r32)("isDisabled", ctx_r7.isDisabled(option_r32));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", option_r32);
        }
      }

      function ComboboxV2TestExampleComponent_nui_overlay_item_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-overlay-item", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2TestExampleComponent_nui_overlay_item_35_Template_nui_overlay_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

            return ctx_r33.createOption(_r6.inputValue);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Create option \"", _r6.inputValue, "\" ");
        }
      }

      function ComboboxV2TestExampleComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ComboboxV2TestExampleComponent_nui_chip_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-chip", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function ComboboxV2TestExampleComponent_nui_chip_45_Template_nui_chip_remove_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var item_r35 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

            return _r10.deselectItem(item_r35);
          })("mouseup", function ComboboxV2TestExampleComponent_nui_chip_45_Template_nui_chip_mouseup_0_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r35 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r11.convertToChip(item_r35));
        }
      }

      function ComboboxV2TestExampleComponent_nui_select_v2_option_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", option_r39.name);
        }
      }

      function ComboboxV2TestExampleComponent_nui_overlay_item_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-overlay-item", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2TestExampleComponent_nui_overlay_item_47_Template_nui_overlay_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

            return ctx_r40.createOptionMulti(_r10.inputValue);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Create option \"", _r10.inputValue, "\" ");
        }
      }

      function ComboboxV2TestExampleComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ComboboxV2TestExampleComponent_nui_select_v2_option_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r42 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r42)("isDisabled", item_r42.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r42.name);
        }
      }

      function ComboboxV2TestExampleComponent_nui_select_v2_option_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r43);
        }
      }

      function ComboboxV2TestExampleComponent_nui_chip_75_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-chip", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function ComboboxV2TestExampleComponent_nui_chip_75_Template_nui_chip_remove_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var item_r44 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](73);

            return _r19.deselectItem(item_r44);
          })("mouseup", function ComboboxV2TestExampleComponent_nui_chip_75_Template_nui_chip_mouseup_0_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r44 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r20.convertToChip(item_r44));
        }
      }

      function ComboboxV2TestExampleComponent_nui_select_v2_option_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", option_r48.name);
        }
      }

      function ComboboxV2TestExampleComponent_nui_chip_89_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-chip", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function ComboboxV2TestExampleComponent_nui_chip_89_Template_nui_chip_remove_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var item_r49 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](87);

            return _r22.deselectItem(item_r49);
          })("mouseup", function ComboboxV2TestExampleComponent_nui_chip_89_Template_nui_chip_mouseup_0_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r49 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r23.convertToChip(item_r49));
        }
      }

      function ComboboxV2TestExampleComponent_nui_select_v2_option_90_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2TestExampleComponent_nui_select_v2_option_90_Template_nui_select_v2_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](96);

            return ctx_r54.openInOverlay(_r27);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", option_r53.name);
        }
      }

      function ComboboxV2TestExampleComponent_ng_template_93_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function ComboboxV2TestExampleComponent_ng_template_93_Template_nui_dialog_header_closed_0_listener() {
            var close_r56 = ctx.close;
            return close_r56();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-dialog-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2TestExampleComponent_ng_template_93_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

            var close_r56 = ctx.close;

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r59.actionCanceled();
            return close_r56();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2TestExampleComponent_ng_template_93_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

            var close_r56 = ctx.close;

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r61.actionDone();
            return close_r56();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ComboboxV2TestExampleComponent_ng_template_95_nui_select_v2_option_6_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2TestExampleComponent_ng_template_95_nui_select_v2_option_6_ng_template_12_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r72.closePopover();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2TestExampleComponent_ng_template_95_nui_select_v2_option_6_ng_template_12_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r74.closePopover();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ComboboxV2TestExampleComponent_ng_template_95_nui_select_v2_option_6_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 84);
        }
      }

      function ComboboxV2TestExampleComponent_ng_template_95_nui_select_v2_option_6_nui_menu_16_nui_menu_action_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-menu-action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r76 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r76, " ");
        }
      }

      function ComboboxV2TestExampleComponent_ng_template_95_nui_select_v2_option_6_nui_menu_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-menu", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComboboxV2TestExampleComponent_ng_template_95_nui_select_v2_option_6_nui_menu_16_nui_menu_action_1_Template, 2, 1, "nui-menu-action", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r71.items);
        }
      }

      function ComboboxV2TestExampleComponent_ng_template_95_nui_select_v2_option_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2TestExampleComponent_ng_template_95_nui_select_v2_option_6_Template_button_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r77.confirm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "boom!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 68, 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-popover", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nui-popover", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ComboboxV2TestExampleComponent_ng_template_95_nui_select_v2_option_6_ng_template_12_Template, 7, 0, "ng-template", null, 75, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ComboboxV2TestExampleComponent_ng_template_95_nui_select_v2_option_6_ng_template_14_Template, 1, 0, "ng-template", null, 76, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ComboboxV2TestExampleComponent_ng_template_95_nui_select_v2_option_6_nui_menu_16_Template, 2, 1, "nui-menu", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r64 = ctx.$implicit;
          var i_r65 = ctx.index;

          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r64, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("container", _r66)("template", _r69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r67)("modal", true)("preventClosing", true)("closePopover", ctx_r63.closePopoverSubject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !i_r65);
        }
      }

      function ComboboxV2TestExampleComponent_ng_template_95_Template(rf, ctx) {
        if (rf & 1) {
          var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function ComboboxV2TestExampleComponent_ng_template_95_Template_nui_dialog_header_closed_0_listener() {
            var close_r62 = ctx.close;
            return close_r62();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-select-v2", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ComboboxV2TestExampleComponent_ng_template_95_nui_select_v2_option_6_Template, 17, 9, "nui-select-v2-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-dialog-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2TestExampleComponent_ng_template_95_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r80.onButtonClick("Cancel");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2TestExampleComponent_ng_template_95_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r82.onButtonClick("Action");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.dataset.items);
        }
      }

      var ComboboxV2TestExampleComponent = /*#__PURE__*/function () {
        function ComboboxV2TestExampleComponent(formBuilder, dialogService, toastService) {
          _classCallCheck(this, ComboboxV2TestExampleComponent);

          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.toastService = toastService; // Testing only

          this.overlayConfig = {
            panelClass: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["OVERLAY_WITH_POPUP_STYLES_CLASS"], "combobox-v2-test-pane"]
          }; // Data

          this.options = Array.from({
            length: 3
          }).map(function (_, i) {
            return $localize(_templateObject || (_templateObject = _taggedTemplateLiteral(["Item ", ""])), i);
          });
          this.optionsMulti = Array.from({
            length: 3
          }).map(function (_, i) {
            return {
              id: "value-".concat(i),
              name: $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Item ", ""])), i),
              disabled: i % 2 ? true : false
            };
          });
          this.optionsMultiDimensions = this.getOptions(50, false);
          this.items = Array.from({
            length: 100
          }).map(function (_, i) {
            return $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Item ", ""])), i);
          });
          this.isComboboxDisabled = false;
          this.dataset = {
            items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12", "Item 13", "Item 14", "Item 15", "Item 16", "Item 17", "Item 18", "Item 19", "Item 20"]
          }; // Form

          this.error = true;
          this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.comboboxControlSingle = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.comboboxControlMulti = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.closePopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }

        _createClass(ComboboxV2TestExampleComponent, [{
          key: "closePopover",
          value: function closePopover() {
            this.closePopoverSubject.next();
          }
        }, {
          key: "createOption",
          value: function createOption(option) {
            this.options.push(option);
            this.comboboxControlSingle.setValue(option);
          }
        }, {
          key: "createOptionMulti",
          value: function createOptionMulti(optionName) {
            var option = {
              id: "value-".concat(this.options.length),
              name: optionName
            };
            this.optionsMulti.push(option);
            this.comboboxControlMulti.setValue([].concat(_toConsumableArray(this.comboboxControlMulti.value || []), [option]));
          }
        }, {
          key: "displayFn",
          value: function displayFn(item) {
            return (item === null || item === void 0 ? void 0 : item.name) || "";
          }
        }, {
          key: "convertToChip",
          value: function convertToChip(value) {
            return {
              id: value.id,
              label: value.name
            };
          }
        }, {
          key: "isInErrorState",
          value: function isInErrorState() {
            return !!this.selectedItem;
          }
        }, {
          key: "isDisabled",
          value: function isDisabled(option) {
            return !!(parseInt(option.slice(-1), 10) % 2);
          }
        }, {
          key: "getOptions",
          value: function getOptions(amount, isDisabled) {
            return Array.from({
              length: amount
            }).map(function (_, i) {
              return {
                id: "value-".concat(i),
                name: $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Item ", ""])), i),
                disabled: isDisabled || i % 2 ? true : false
              };
            });
          }
        }, {
          key: "showList",
          value: function showList(event) {
            event.stopPropagation();
            this.comboboxMultiDimensions.showDropdown();
            this.comboboxMultiDimensions.inputElement.nativeElement.focus();
          }
        }, {
          key: "hideList",
          value: function hideList(event) {
            event.stopPropagation();
            this.comboboxMultiDimensions.hideDropdown();
          }
        }, {
          key: "toggleList",
          value: function toggleList(event) {
            event.stopPropagation();
            this.comboboxMultiDimensions.toggleDropdown();
            this.comboboxMultiDimensions.inputElement.nativeElement.focus();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.fancyForm = this.formBuilder.group({
              combobox: this.formBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
            this.comboboxControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (value) {
              _this.selectedItem = value;
            });
            this.comboboxControlSingle.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (value) {
              _this.selectedSingleItem = value;
            });
          }
        }, {
          key: "open",
          value: function open(content) {
            this.activeDialog = this.dialogService.open(content, {
              size: "sm"
            });
          }
        }, {
          key: "confirm",
          value: function confirm(event) {
            event === null || event === void 0 ? void 0 : event.stopPropagation();
            this.activeDialog = this.dialogService.confirm({
              message: "IS THIS SPARTA?",
              useOverlay: true
            });
          }
        }, {
          key: "openInOverlay",
          value: function openInOverlay(content) {
            this.activeDialog = this.dialogService.open(content, {
              size: "lg",
              useOverlay: true
            });
          }
        }, {
          key: "actionDone",
          value: function actionDone() {
            this.toastService.success({
              message: $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Action Done!"]))),
              title: $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Event"])))
            });
            this.activeDialog.close();
          }
        }, {
          key: "actionCanceled",
          value: function actionCanceled() {
            this.toastService.info({
              message: $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Action Cancelled!"]))),
              title: $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Event"])))
            });
            this.activeDialog.close();
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(title) {
            title === "Action" ? this.actionDone() : this.actionCanceled();
            this.activeDialog.close();
          }
        }]);

        return ComboboxV2TestExampleComponent;
      }();

      ComboboxV2TestExampleComponent.ɵfac = function ComboboxV2TestExampleComponent_Factory(t) {
        return new (t || ComboboxV2TestExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["ToastService"]));
      };

      ComboboxV2TestExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxV2TestExampleComponent,
        selectors: [["nui-combobox-v2-test-example"]],
        viewQuery: function ComboboxV2TestExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.comboboxSingle = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.comboboxMultiDimensions = _t.first);
          }
        },
        hostAttrs: [1, "combobox-container"],
        decls: 97,
        vars: 54,
        consts: function consts() {
          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Select Item");
            i18n_2 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Select Item");
            i18n_4 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8999046125839025839$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS_7 = goog.getMsg(" This field is required ");
            i18n_6 = MSG_EXTERNAL_8999046125839025839$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([":\u241F8eb0e5b7a8ec1199d38c9e92ca26bd4b3aae7f2c\u241F8999046125839025839: This field is required "])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Select Item");
            i18n_8 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("Select Item");
            i18n_10 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS_13 = goog.getMsg("Select Item");
            i18n_12 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS_13;
          } else {
            i18n_12 = $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS_15 = goog.getMsg("Select Item");
            i18n_14 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS_15;
          } else {
            i18n_14 = $localize(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          var i18n_16;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8369340007679658038$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS__17 = goog.getMsg("No other existing item available");
            i18n_16 = MSG_EXTERNAL_8369340007679658038$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS__17;
          } else {
            i18n_16 = $localize(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral([":\u241Fa13fa43d609e19a3057da12ceaba187af03aca4c\u241F8369340007679658038:No other existing item available"])));
          }

          var i18n_18;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8369340007679658038$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS__19 = goog.getMsg("No other existing item available");
            i18n_18 = MSG_EXTERNAL_8369340007679658038$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS__19;
          } else {
            i18n_18 = $localize(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral([":\u241Fa13fa43d609e19a3057da12ceaba187af03aca4c\u241F8369340007679658038:No other existing item available"])));
          }

          var i18n_20;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS__21 = goog.getMsg("Dialog title");
            i18n_20 = MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS__21;
          } else {
            i18n_20 = $localize(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral([":\u241Feeb379308b8767b98aa0d27308f4f8dd6b46e559\u241F5892089246202495025:Dialog title"])));
          }

          var i18n_22;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS__23 = goog.getMsg(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
            i18n_22 = MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS__23;
          } else {
            i18n_22 = $localize(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral([":\u241Ff62f9e2e728dea80e19b1e7a6f61424d55bab5ea\u241F7188163738299238705: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. "])));
          }

          var i18n_24;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS__25 = goog.getMsg(" Cancel ");
            i18n_24 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS__25;
          } else {
            i18n_24 = $localize(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral([":\u241Fbf844a41a29961b6dacc48a20eaf97bef0cf5013\u241F7452095619502551190: Cancel "])));
          }

          var i18n_26;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS__27 = goog.getMsg(" Action ");
            i18n_26 = MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS__27;
          } else {
            i18n_26 = $localize(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral([":\u241F01b5385da84ee4b609f8273d7ae56600c3fb3cbe\u241F4946554391652567902: Action "])));
          }

          var i18n_28;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_167039734477168235$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS___29 = goog.getMsg(" Hover over me! ");
            i18n_28 = MSG_EXTERNAL_167039734477168235$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS___29;
          } else {
            i18n_28 = $localize(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral([":\u241Fe7d81531abf8afb5fb5df163bf0363eceb3fd6df\u241F167039734477168235: Hover over me! "])));
          }

          var i18n_30;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2225120696754473064$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS___31 = goog.getMsg("Modal Popover");
            i18n_30 = MSG_EXTERNAL_2225120696754473064$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS___31;
          } else {
            i18n_30 = $localize(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral([":\u241F2bb1310acc94ca030f411cf84e6cf45466547208\u241F2225120696754473064:Modal Popover"])));
          }

          var i18n_32;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_525370094671006187$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS___33 = goog.getMsg(" Show modal popover ");
            i18n_32 = MSG_EXTERNAL_525370094671006187$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS___33;
          } else {
            i18n_32 = $localize(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral([":\u241Ff8e95c0ef397f32a2834f97791b7969e075e0079\u241F525370094671006187: Show modal popover "])));
          }

          var i18n_34;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3280198363419758787$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS____35 = goog.getMsg("A modal popover can be used to grab the user's attention.");
            i18n_34 = MSG_EXTERNAL_3280198363419758787$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS____35;
          } else {
            i18n_34 = $localize(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral([":\u241F4bd5316f7df0a71ad3b1c125358dbcba1e601fbb\u241F3280198363419758787:A modal popover can be used to grab the user's attention."])));
          }

          var i18n_36;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7819314041543176992$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS____37 = goog.getMsg("Close");
            i18n_36 = MSG_EXTERNAL_7819314041543176992$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS____37;
          } else {
            i18n_36 = $localize(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral([":\u241Ff4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8\u241F7819314041543176992:Close"])));
          }

          var i18n_38;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9178182467454450952$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS____39 = goog.getMsg("Confirm");
            i18n_38 = MSG_EXTERNAL_9178182467454450952$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS____39;
          } else {
            i18n_38 = $localize(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral([":\u241F68e710782ccb5398b3acb8844caf0b199da2c3da\u241F9178182467454450952:Confirm"])));
          }

          var i18n_40;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2702908186743920542$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS____41 = goog.getMsg(" I'm appended to a container! ");
            i18n_40 = MSG_EXTERNAL_2702908186743920542$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TEST_COMBOBOX_V2_TEST_EXAMPLE_COMPONENT_TS____41;
          } else {
            i18n_40 = $localize(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral([":\u241F3f21ed67af406c27eed3fc212dd1e90089424459\u241F2702908186743920542: I'm appended to a container! "])));
          }

          return [["tabindex", "-1", 1, "focus-drop"], [1, "row", "mb-3", "justify-content-center"], [1, "row", "mb-3"], [1, "col"], ["placeholder", i18n_2, "id", "error", 3, "isInErrorState", "formControl", "overlayConfig"], ["comboboxError", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "nui-edge-definer", 3, "formGroup"], [3, "control"], ["placeholder", i18n_4, "formControlName", "combobox", "id", "form", 3, "overlayConfig"], ["comboboxReactive", ""], ["for", "required"], i18n_6, ["placeholder", i18n_8, "id", "basic", 3, "overlayConfig"], ["comboboxBasic", ""], ["placeholder", i18n_10, "id", "single", 3, "formControl", "overlayConfig"], ["comboboxSingle", ""], [3, "value", "isDisabled", 4, "ngFor", "ngForIndex", "ngForOf"], ["class", "nui-combobox-v2__create-option", 3, "click", 4, "ngIf"], ["class", "nui-combobox-v2__empty-search", 4, "ngIf"], ["id", "multi", 3, "placeholder", "formControl", "displayWith", "multiselect", "overlayConfig"], ["combobox", ""], ["selectedItems", ""], ["nuiMarkAsSelectedItem", "", "class", "ml-2", "closeButtonTooltip", "Remove", 3, "item", "remove", "mouseup", 4, "ngFor", "ngForOf"], ["class", "d-flex align-items-center", 3, "value", 4, "ngFor", "ngForOf"], [1, "row", "m-auto"], ["placeholder", i18n_12, "id", "disabled", 1, "flex-grow-1", 3, "isDisabled", "displayWith", "overlayConfig"], ["comboboxDisabled", ""], [3, "value", "isDisabled", 4, "ngFor", "ngForOf"], ["id", "trigger-disabled", 1, "ml-auto", 3, "click"], ["placeholder", i18n_14, "id", "removal", 3, "isRemoveValueEnabled", "overlayConfig"], ["comboboxValueRemoval", ""], [1, "w-100"], ["id", "custom-control", 3, "placeholder", "displayWith", "multiselect", "manualDropdownControl", "overlayConfig"], ["comboboxMultiDimensions", ""], ["id", "show", 1, "ml-3", 3, "click"], ["id", "hide", 1, "ml-3", 3, "click"], ["id", "toggle", 1, "ml-3", 3, "click"], ["tabindex", "-1", 1, "row", "mb-3", 2, "position", "fixed", "bottom", "0"], [1, "w-100", 3, "placeholder", "displayWith", "multiselect", "manualDropdownControl", "overlayConfig"], ["comboboxWithDialog", ""], ["class", "d-flex align-items-center", 3, "value", "click", 4, "ngFor", "ngForOf"], [1, "ml-3", 3, "click"], ["content", ""], ["headerButtonsContent", ""], [3, "value"], [3, "nuiComboboxV2OptionHighlight"], [3, "value", "isDisabled"], [1, "d-flex", "align-items-center"], [1, "mr-3", "nui-select-v2-option__label", 3, "nuiComboboxV2OptionHighlight"], [1, "nui-combobox-v2__create-option", 3, "click"], [1, "nui-combobox-v2__empty-search"], i18n_16, ["nuiMarkAsSelectedItem", "", "closeButtonTooltip", "Remove", 1, "ml-2", 3, "item", "remove", "mouseup"], [1, "d-flex", "align-items-center", 3, "value"], i18n_18, [1, "d-flex", "align-items-center", 3, "value", "click"], ["title", i18n_20, 3, "closed"], [1, "dialog-body"], i18n_22, ["nui-button", "", "type", "button", 3, "click"], i18n_24, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_26, ["title", "Dialog title", 3, "closed"], ["nui-button", "", "type", "button", "displayStyle", "action", "icon", "fullscreen"], ["nui-button", "", "type", "button", "displayStyle", "action", "icon", "menu"], ["placeholder", "Select Item"], ["id", "nui-demo-popover-container"], ["popoverContainer", ""], ["id", "nui-demo-popover-with-container", 3, "container", "template"], i18n_28, ["popoverTitle", i18n_30, "trigger", "click", "placement", "right", 3, "template", "modal", "preventClosing", "closePopover"], ["nui-button", "", "type", "button", "id", "nui-demo-popover-modal"], i18n_32, ["popoverModal", ""], ["popoverWithContainerTemplate", ""], ["icon", "menu", 4, "ngIf"], i18n_34, [1, "mt-2", "d-flex", "justify-content-end"], ["id", "nui-demo-custom-close-popover", "nui-button", "", "type", "button", "displayStyle", "action", 3, "click"], i18n_36, ["nui-button", "", "type", "button", "displayStyle", "primary", 1, "ml-3", 3, "click"], i18n_38, i18n_40, ["icon", "menu"], [4, "ngFor", "ngForOf"]];
        },
        template: function ComboboxV2TestExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Combobox V2 Testing Page ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Error State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-combobox-v2", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ComboboxV2TestExampleComponent_nui_select_v2_option_10_Template, 2, 2, "nui-select-v2-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Reactive form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nui-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nui-combobox-v2", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ComboboxV2TestExampleComponent_nui_select_v2_option_18_Template, 2, 2, "nui-select-v2-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nui-validation-message", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](20, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nui-combobox-v2", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ComboboxV2TestExampleComponent_nui_select_v2_option_27_Template, 2, 2, "nui-select-v2-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Single select with create option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nui-combobox-v2", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ComboboxV2TestExampleComponent_nui_select_v2_option_34_Template, 3, 3, "nui-select-v2-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ComboboxV2TestExampleComponent_nui_overlay_item_35_Template, 2, 1, "nui-overlay-item", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ComboboxV2TestExampleComponent_div_37_Template, 2, 0, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Multiselect with create option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nui-combobox-v2", 20, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](44, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ComboboxV2TestExampleComponent_nui_chip_45_Template, 1, 1, "nui-chip", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ComboboxV2TestExampleComponent_nui_select_v2_option_46_Template, 2, 2, "nui-select-v2-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ComboboxV2TestExampleComponent_nui_overlay_item_47_Template, 2, 1, "nui-overlay-item", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ComboboxV2TestExampleComponent_div_49_Template, 2, 0, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Disabled combobox and items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nui-combobox-v2", 26, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ComboboxV2TestExampleComponent_nui_select_v2_option_57_Template, 2, 3, "nui-select-v2-option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2TestExampleComponent_Template_button_click_58_listener() {
              return ctx.isComboboxDisabled = !ctx.isComboboxDisabled;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Value removal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nui-combobox-v2", 30, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ComboboxV2TestExampleComponent_nui_select_v2_option_66_Template, 2, 2, "nui-select-v2-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h4", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Multiselect with manual dropdown control");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nui-combobox-v2", 33, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](74, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ComboboxV2TestExampleComponent_nui_chip_75_Template, 1, 1, "nui-chip", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ComboboxV2TestExampleComponent_nui_select_v2_option_76_Template, 2, 2, "nui-select-v2-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2TestExampleComponent_Template_button_click_77_listener($event) {
              return ctx.showList($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Show");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2TestExampleComponent_Template_button_click_79_listener($event) {
              return ctx.hideList($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Hide");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2TestExampleComponent_Template_button_click_81_listener($event) {
              return ctx.toggleList($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h4", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Multiselect with manual dropdown control");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "nui-combobox-v2", 39, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](88, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, ComboboxV2TestExampleComponent_nui_chip_89_Template, 1, 1, "nui-chip", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, ComboboxV2TestExampleComponent_nui_select_v2_option_90_Template, 2, 2, "nui-select-v2-option", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2TestExampleComponent_Template_button_click_91_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

              var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](87);

              return _r22.toggleDropdown();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, ComboboxV2TestExampleComponent_ng_template_93_Template, 9, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, ComboboxV2TestExampleComponent_ng_template_95_Template, 13, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](73);

            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isInErrorState", !ctx.selectedItem)("formControl", ctx.comboboxControl)("overlayConfig", ctx.overlayConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fancyForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.fancyForm.controls["combobox"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlayConfig", ctx.overlayConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlayConfig", ctx.overlayConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.comboboxControlSingle)("overlayConfig", ctx.overlayConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 46, _r6.canCreateOption));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 48, _r6.searchEmpty));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _r10.selectedOptions.length ? "" : "Select Items")("formControl", ctx.comboboxControlMulti)("displayWith", ctx.displayFn)("multiselect", true)("overlayConfig", ctx.overlayConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r10 == null ? null : _r10.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.optionsMulti);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 50, _r10.canCreateOption));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 52, _r10.searchEmpty));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDisabled", ctx.isComboboxDisabled)("displayWith", ctx.displayFn)("overlayConfig", ctx.overlayConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.optionsMulti.slice());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isComboboxDisabled ? "enable" : "disable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isRemoveValueEnabled", false)("overlayConfig", ctx.overlayConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _r19.selectedOptions.length ? "" : "Select Items")("displayWith", ctx.displayFn)("multiselect", true)("manualDropdownControl", true)("overlayConfig", ctx.overlayConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r19 == null ? null : _r19.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.optionsMultiDimensions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _r22.selectedOptions.length ? "" : "Select Items")("displayWith", ctx.displayFn)("multiselect", true)("manualDropdownControl", true)("overlayConfig", ctx.overlayConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r22 == null ? null : _r22.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.optionsMultiDimensions);
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_5__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_7__["FormFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_8__["ValidationMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_9__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_10__["ComboboxV2OptionHighlightDirective"], _src_lib_overlay_overlay_item_overlay_item_component__WEBPACK_IMPORTED_MODULE_11__["OverlayItemComponent"], _src_lib_chips_chip_chip_component__WEBPACK_IMPORTED_MODULE_12__["ChipComponent"], _src_lib_select_v2_mark_as_selected_item_directive__WEBPACK_IMPORTED_MODULE_13__["MarkAsSelectedItemDirective"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_14__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_15__["DialogFooterComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_16__["ButtonComponent"], _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_17__["SelectV2Component"], _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_18__["PopoverComponent"], _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_19__["MenuComponent"], _src_lib_menu_menu_item_menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_20__["MenuActionComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
        styles: [".active[_ngcontent-%COMP%] {\n  background-color: var(--nui-color-selected,rgba(0, 196, 210, 0.1));\n  outline: none;\n  z-index: 500;\n  box-shadow: inset 0 0 0 2px rgba(0, 196, 210, 0.5);\n}\nnui-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  cursor: pointer;\n  margin-bottom: 5px;\n  border-radius: 9px;\n}\n.focus-drop[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJvYm94LXYyLXRlc3QuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2Nzcy12YXJpYWJsZXMubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2ZvY3VzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUNFSSxrRUFBQTtFQ0pBLGFBQUE7RUFDQSxZQUFBO0VBVUEsa0RBQUE7QUZQSjtBQUVBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBR0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQURKIiwiZmlsZSI6ImNvbWJvYm94LXYyLXRlc3QuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJudWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcImNvbXBvbmVudHMvY29tYm9ib3gtdjItYWRkb25zLmxlc3NcIjtcblxuLmFjdGl2ZSB7XG4gICAgLmFjdGl2ZS1pdGVtKCk7XG59XG5cbm51aS1jaGlwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbn1cblxuLmZvY3VzLWRyb3Age1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG59XG4iLCIuc2V0Q3NzVmFyaWFibGUoQHByb3BlcnR5LCBAdmFsdWUpe1xuICAgIEBldmFsdWF0ZWQgOiBcIkB7dmFsdWV9XCI7XG4gICAgLy90aGUgZG91YmxlIEAgZm9yY2VzIGEgaW5kaXJlY3Rpb24gZXZhbHVhdGlvbiwga2luZGEgbGlrZSBhIHBvaW50ZXJcbiAgICBAZmFsbGJhY2sgOiBAQGV2YWx1YXRlZDtcblxuICAgIEB7cHJvcGVydHl9OiB+XCJ2YXIoLS1Ae3ZhbHVlfSxAe2ZhbGxiYWNrfSlcIjtcbn1cbiIsIi5mb2N1cy1vdXRsaW5lLWJhc2UoKSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB6LWluZGV4OiBAemluZGV4LWFjdGl2ZTtcbn1cblxuLmZvY3VzLW91dGxpbmUoKSB7XG4gICAgLmZvY3VzLW91dGxpbmUtYmFzZSgpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIEBudWktbGluZS1tZWRpdW0gZmFkZShAbnVpLWNvbG9yLXNlbGVjdGVkLWNvbnRyYXN0LCA1MCUpO1xufVxuXG4uZm9jdXMtb3V0bGluZS1pbnNldCgpIHtcbiAgICAuZm9jdXMtb3V0bGluZS1iYXNlKCk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgQG51aS1saW5lLW1lZGl1bSBmYWRlKEBudWktY29sb3Itc2VsZWN0ZWQtY29udHJhc3QsIDUwJSk7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "+WWY":
    /*!*******************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-error/combobox-v2-error.example.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: ComboboxV2ErrorExampleComponent */

    /***/
    function WWY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2ErrorExampleComponent", function () {
        return ComboboxV2ErrorExampleComponent;
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


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/switch/switch.component */
      "6CEj");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");

      function ComboboxV2ErrorExampleComponent_nui_select_v2_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r2);
        }
      }

      var ComboboxV2ErrorExampleComponent = function ComboboxV2ErrorExampleComponent() {
        _classCallCheck(this, ComboboxV2ErrorExampleComponent);

        this.items = Array.from({
          length: 100
        }).map(function (_, i) {
          return $localize(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["Item ", ""])), i);
        });
        this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.error = true;
      };

      ComboboxV2ErrorExampleComponent.ɵfac = function ComboboxV2ErrorExampleComponent_Factory(t) {
        return new (t || ComboboxV2ErrorExampleComponent)();
      };

      ComboboxV2ErrorExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ComboboxV2ErrorExampleComponent,
        selectors: [["nui-combobox-v2-error-example"]],
        hostAttrs: [1, "combobox-container"],
        decls: 5,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_ERROR_COMBOBOX_V2_ERROR_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
            i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_ERROR_COMBOBOX_V2_ERROR_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6222469594242551638$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_ERROR_COMBOBOX_V2_ERROR_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Toggle error state\n");
            i18n_2 = MSG_EXTERNAL_6222469594242551638$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_ERROR_COMBOBOX_V2_ERROR_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral([":\u241F8be663d50519e814efd0a41e9f01c07ed108c259\u241F6222469594242551638: Toggle error state\n"])));
          }

          return [["placeholder", i18n_0, 1, "d-inline-flex", 2, "width", "50%", 3, "isInErrorState", "formControl"], ["combobox", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-inline-flex", 2, "padding-left", "15px", 3, "value", "valueChange"], i18n_2, [3, "value"], [1, "mr-3", 3, "nuiComboboxV2OptionHighlight"]];
        },
        template: function ComboboxV2ErrorExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ComboboxV2ErrorExampleComponent_nui_select_v2_option_2_Template, 2, 2, "nui-select-v2-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nui-switch", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ComboboxV2ErrorExampleComponent_Template_nui_switch_valueChange_3_listener($event) {
              return ctx.error = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isInErrorState", ctx.error)("formControl", ctx.comboboxControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.error);
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_5__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_6__["ComboboxV2OptionHighlightDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "0Riz":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-styling/combobox-v2-styling.example.component.ts ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Riz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { OverlayConfig } from \"@angular/cdk/overlay\";\nimport { Component, ViewEncapsulation } from \"@angular/core\";\nimport { OVERLAY_WITH_POPUP_STYLES_CLASS } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-combobox-v2-styling-example\",\n    templateUrl: \"combobox-v2-styling.example.component.html\",\n    styleUrls: [\"combobox-v2-styling.example.component.less\"],\n    // This is done to make class from the less file global.\n    // Make sure the class from the less file is added to your global style sheet.\n    encapsulation: ViewEncapsulation.None,\n})\nexport class ComboboxV2StylingExampleComponent {\n    public items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);\n\n    public config: OverlayConfig = {\n        panelClass: [OVERLAY_WITH_POPUP_STYLES_CLASS, \"nui-overlay-styling-demo-custom-class\"],\n    };\n}\n";
      /***/
    },

    /***/
    "1Idt":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-setting-value/combobox-v2-setting-value.example.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Idt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<b>Setting value using <code>value</code> input</b>\n<nui-combobox-v2 [value]=\"items[0]\" placeholder=\"Select Item\" i18n-placeholder>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</nui-select-v2-option>\n</nui-combobox-v2>\n\n<br>\n\n<b>Setting value using <code>FormControl</code></b>\n<nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder [formControl]=\"comboboxControl\">\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</nui-select-v2-option>\n</nui-combobox-v2>\n";
      /***/
    },

    /***/
    "1bJa":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-overlay-config/combobox-v2-overlay-config.example.component.ts ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bJa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { OverlayConfig } from \"@angular/cdk/overlay\";\nimport { Component } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\nimport { OVERLAY_WITH_POPUP_STYLES_CLASS } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-combobox-v2-overlay-config-example\",\n    templateUrl: \"./combobox-v2-overlay-config.example.component.html\",\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2OverlayConfigExampleComponent {\n    public items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);\n\n    public overlayConfig: OverlayConfig = {\n        width: 300,\n        height: 200,\n        panelClass: [OVERLAY_WITH_POPUP_STYLES_CLASS, \"overlay-config-demo-custom-class\"],\n    };\n\n    public comboboxControl = new FormControl();\n}\n";
      /***/
    },

    /***/
    "1xtr":
    /*!*********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-remove-value/combobox-v2-remove-value.example.component.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: ComboboxV2RemoveValueExampleComponent */

    /***/
    function xtr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2RemoveValueExampleComponent", function () {
        return ComboboxV2RemoveValueExampleComponent;
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


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");

      function ComboboxV2RemoveValueExampleComponent_nui_select_v2_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r2);
        }
      }

      var ComboboxV2RemoveValueExampleComponent = function ComboboxV2RemoveValueExampleComponent() {
        _classCallCheck(this, ComboboxV2RemoveValueExampleComponent);

        this.items = Array.from({
          length: 100
        }).map(function (_, i) {
          return $localize(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["Item ", ""])), i);
        });
        this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
      };

      ComboboxV2RemoveValueExampleComponent.ɵfac = function ComboboxV2RemoveValueExampleComponent_Factory(t) {
        return new (t || ComboboxV2RemoveValueExampleComponent)();
      };

      ComboboxV2RemoveValueExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ComboboxV2RemoveValueExampleComponent,
        selectors: [["nui-combobox-v2-remove-value-example"]],
        hostAttrs: [1, "combobox-container"],
        decls: 3,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_REMOVE_VALUE_COMBOBOX_V2_REMOVE_VALUE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
            i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_REMOVE_VALUE_COMBOBOX_V2_REMOVE_VALUE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          return [["placeholder", i18n_0, 3, "formControl", "isRemoveValueEnabled"], ["combobox", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "nuiComboboxV2OptionHighlight"]];
        },
        template: function ComboboxV2RemoveValueExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ComboboxV2RemoveValueExampleComponent_nui_select_v2_option_2_Template, 2, 2, "nui-select-v2-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.comboboxControl)("isRemoveValueEnabled", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_5__["ComboboxV2OptionHighlightDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "2aiT":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-test/combobox-v2-test.example.component.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aiT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { OverlayConfig } from \"@angular/cdk/overlay\";\nimport { Component, OnInit, TemplateRef, ViewChild } from \"@angular/core\";\nimport { FormBuilder, FormControl, FormGroup, Validators } from \"@angular/forms\";\nimport { ComboboxV2Component, DialogService, NuiDialogRef, OVERLAY_WITH_POPUP_STYLES_CLASS, ToastService } from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\nimport { takeUntil } from \"rxjs/operators\";\n\ninterface IExampleItem {\n    id: string;\n    name: string;\n    icon?: string;\n    disabled?: boolean;\n}\n\n@Component({\n    selector: \"nui-combobox-v2-test-example\",\n    templateUrl: \"combobox-v2-test.example.component.html\",\n    styleUrls: [\"combobox-v2-test.example.component.less\"],\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2TestExampleComponent implements OnInit {\n    private activeDialog: NuiDialogRef;\n    // Testing only\n    public overlayConfig: OverlayConfig = {\n        panelClass: [OVERLAY_WITH_POPUP_STYLES_CLASS, \"combobox-v2-test-pane\"],\n    };\n\n    // Data\n    public options = Array.from({ length: 3 }).map((_, i) => $localize `Item ${i}`);\n    public optionsMulti: IExampleItem[] = Array.from({ length: 3 }).map((_, i) =>\n        ({\n            id: `value-${i}`,\n            name: $localize `Item ${i}`,\n            disabled: i % 2 ? true : false,\n        }));\n    public optionsMultiDimensions = this.getOptions(50, false);\n    public items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);\n    public selectedItem: IExampleItem;\n    public selectedSingleItem: IExampleItem;\n    public isComboboxDisabled = false;\n\n    public dataset = {\n        items: [\n            \"Item 1\",\n            \"Item 2\",\n            \"Item 3\",\n            \"Item 4\",\n            \"Item 5\",\n            \"Item 6\",\n            \"Item 7\",\n            \"Item 8\",\n            \"Item 9\",\n            \"Item 10\",\n            \"Item 11\",\n            \"Item 12\",\n            \"Item 13\",\n            \"Item 14\",\n            \"Item 15\",\n            \"Item 16\",\n            \"Item 17\",\n            \"Item 18\",\n            \"Item 19\",\n            \"Item 20\",\n        ],\n    };\n\n    // Form\n    public error: boolean = true;\n    public comboboxControl = new FormControl();\n    public comboboxControlSingle = new FormControl();\n    public comboboxControlMulti = new FormControl();\n    public fancyForm: FormGroup;\n\n    public closePopoverSubject: Subject<void> = new Subject<void>();\n\n    private destroy$: Subject<any> = new Subject<any>();\n\n    @ViewChild(\"comboboxSingle\") public comboboxSingle: ComboboxV2Component;\n    @ViewChild(\"comboboxMultiDimensions\") public comboboxMultiDimensions: ComboboxV2Component;\n\n    constructor(private formBuilder: FormBuilder, private dialogService: DialogService, private toastService: ToastService) {}\n\n    public closePopover() {\n        this.closePopoverSubject.next();\n    }\n\n    public createOption(option: string) {\n        this.options.push(option);\n        this.comboboxControlSingle.setValue(option);\n    }\n\n    public createOptionMulti(optionName: string) {\n        const option = {\n            id: `value-${this.options.length}`,\n            name: optionName,\n        };\n\n        this.optionsMulti.push(option);\n        this.comboboxControlMulti.setValue([...(this.comboboxControlMulti.value || []), option]);\n    }\n\n    public displayFn(item: IExampleItem): string {\n        return item?.name || \"\";\n    }\n\n    public convertToChip(value: IExampleItem) {\n        return ({\n            id: value.id,\n            label: value.name,\n        });\n    }\n\n    public isInErrorState() {\n        return !!this.selectedItem;\n    }\n\n    public isDisabled(option: string) {\n        return !!(parseInt(option.slice(-1) , 10) % 2);\n    }\n\n    public getOptions(amount: number, isDisabled?: boolean) {\n        return Array.from({ length: amount }).map((_, i) =>\n            ({\n                id: `value-${i}`,\n                name: $localize `Item ${i}`,\n                disabled: isDisabled || i % 2 ? true : false,\n            }));\n    }\n\n    public showList(event: Event): void {\n        event.stopPropagation();\n        this.comboboxMultiDimensions.showDropdown();\n        this.comboboxMultiDimensions.inputElement.nativeElement.focus();\n    }\n\n    public hideList(event: Event): void {\n        event.stopPropagation();\n        this.comboboxMultiDimensions.hideDropdown();\n    }\n\n    public toggleList(event: Event): void {\n        event.stopPropagation();\n        this.comboboxMultiDimensions.toggleDropdown();\n        this.comboboxMultiDimensions.inputElement.nativeElement.focus();\n    }\n\n    ngOnInit() {\n        this.fancyForm = this.formBuilder.group({\n            combobox: this.formBuilder.control(\"\", Validators.required),\n        });\n\n        this.comboboxControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => { this.selectedItem = value; });\n        this.comboboxControlSingle.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => { this.selectedSingleItem = value; });\n    }\n\n    public open(content: TemplateRef<string>) {\n        this.activeDialog = this.dialogService.open(content, {size: \"sm\"});\n    }\n\n    public confirm(event: MouseEvent) {\n        event?.stopPropagation();\n        this.activeDialog = this.dialogService.confirm({\n            message: \"IS THIS SPARTA?\",\n            useOverlay: true,\n        });\n    }\n\n    public openInOverlay(content: TemplateRef<string>) {\n        this.activeDialog = this.dialogService.open(content, {size: \"lg\", useOverlay: true});\n    }\n\n    public actionDone(): void {\n        this.toastService.success({message: $localize `Action Done!`, title: $localize `Event`});\n        this.activeDialog.close();\n    }\n\n    public actionCanceled(): void {\n        this.toastService.info({message: $localize `Action Cancelled!`, title: $localize `Event`});\n        this.activeDialog.close();\n    }\n\n    public onButtonClick(title: string) {\n        title === \"Action\" ? this.actionDone() : this.actionCanceled();\n        this.activeDialog.close();\n    }\n}\n";
      /***/
    },

    /***/
    "2cql":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-grouped-options/combobox-v2-grouped-options.example.component.html ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cql(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder\n    [formControl]=\"comboboxControl\"\n    [displayWith]=\"displayFn\"\n    #combobox>\n    <ng-container *ngFor=\"let itemGroup of items; let last = last\">\n        <nui-select-v2-option-group>\n            <span class=\"nui-select-v2-option-group--header\">{{itemGroup.header}}</span>\n            <nui-select-v2-option *ngFor=\"let item of itemGroup.items\"\n                [value]=\"item\">\n                <span [nuiComboboxV2OptionHighlight]=\"item.name\"></span>\n            </nui-select-v2-option>\n            <nui-divider *ngIf=\"!last\" size=\"extra-small\"></nui-divider>\n        </nui-select-v2-option-group>\n    </ng-container>\n</nui-combobox-v2>\n";
      /***/
    },

    /***/
    "57W8":
    /*!********************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2.module.ts ***!
      \********************************************************************/

    /*! exports provided: ComboboxV2Module */

    /***/
    function W8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2Module", function () {
        return ComboboxV2Module;
      });
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./index */
      "Gd/J");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2DocsComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "basic",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2BasicExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "getting-value",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2GettingValueExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "setting-value",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2SettingValueExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "customize-options",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2CustomizeOptionsExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "typeahead",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2TypeaheadExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "grouped",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2GroupedOptionsExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "remove-value",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2RemoveValueExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "multiselect",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2MultiselectExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "virtual-scroll",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2VirtualScrollExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "overlay-config",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2OverlayConfigExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "disabled",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2DisabledExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "error",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2ErrorExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "inline",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2InlineExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "styling",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2StylingExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "custom-typeahead",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2CustomTypeaheadExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "reactive-form-field",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2ReactiveFormFieldExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "create-option",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2CreateOptionExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "create-option-multiselect",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2CreateOptionMultiselectExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "custom-control",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2CustomControlExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "options-changed",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2OpitionsChangedExampleComponent"],
        data: {
          showThemeSwitcher: true,
          srlc: {
            stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "test",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2TestExampleComponent"],
        data: {
          "srlc": {
            hideIndicator: true
          }
        }
      }];
      /** @ignore */

      var ComboboxV2Module = function ComboboxV2Module() {
        _classCallCheck(this, ComboboxV2Module);
      };

      ComboboxV2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: ComboboxV2Module
      });
      ComboboxV2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function ComboboxV2Module_Factory(t) {
          return new (t || ComboboxV2Module)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("O5V+");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiChipsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDividerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiValidationMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiFormFieldModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMenuModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiPopoverModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSwitchModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSelectModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSelectV2Module"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiOverlayModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDialogModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiOverlayAdditionsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ComboboxV2Module, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2BasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2DocsComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2GroupedOptionsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2RemoveValueExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2VirtualScrollExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2OverlayConfigExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2DisabledExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2ErrorExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2InlineExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2StylingExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2MultiselectExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2CustomTypeaheadExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2ReactiveFormFieldExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2CreateOptionExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2CreateOptionMultiselectExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2CustomizeOptionsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2CustomControlExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2TestExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2OpitionsChangedExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2TypeaheadExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2GettingValueExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2SettingValueExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiChipsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDividerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiValidationMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiFormFieldModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMenuModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiPopoverModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSwitchModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSelectModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSelectV2Module"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiOverlayModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDialogModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiOverlayAdditionsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "7RT0":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-error/combobox-v2-error.example.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RT0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 class=\"d-inline-flex\"\n    [isInErrorState]=\"error\"\n    placeholder=\"Select Item\" i18n-placeholder\n    [formControl]=\"comboboxControl\"\n    style=\"width: 50%;\"\n    #combobox>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n        <span class=\"mr-3\" [nuiComboboxV2OptionHighlight]=\"item\"></span>\n    </nui-select-v2-option>\n</nui-combobox-v2>\n\n<nui-switch class=\"d-inline-flex\"\n    style=\"padding-left: 15px;\"\n    [(value)]=\"error\" i18n>\n    Toggle error state\n</nui-switch>\n";
      /***/
    },

    /***/
    "7ws5":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-disabled/combobox-v2-disabled.example.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ws5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 [isDisabled]=\"isComboboxDisabled\"\n    placeholder=\"Select Item\" i18n-placeholder\n    [formControl]=\"comboboxControl\"\n    [displayWith]=\"displayFn\"\n    class=\"w-50 d-inline-flex\"\n    #combobox>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\" [isDisabled]=\"item.disabled\">\n        <span class=\"mr-3\" [nuiComboboxV2OptionHighlight]=\"item.name\"></span>\n    </nui-select-v2-option>\n</nui-combobox-v2>\n\n<nui-switch class=\"d-inline-flex\"\n    style=\"padding-left: 15px;\"\n    [(value)]=\"isComboboxDisabled\" i18n>\n    Toggle disabling\n</nui-switch>\n";
      /***/
    },

    /***/
    "8QfD":
    /*!***************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-reactive-form-field/combobox-v2-reactive-form-field.example.component.html ***!
      \***************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QfD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form [formGroup]=\"fancyForm\" class=\"nui-edge-definer\">\n    <nui-form-field caption=\"Combobox\" i18n-caption\n                        hint=\"Some pretty long text with hint\" i18n-hint\n                        info=\"text\"\n                        [control]=\"fancyForm.controls['combobox']\">\n       <nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder\n            formControlName=\"combobox\"\n            #combobox>\n            <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n                <span [nuiComboboxV2OptionHighlight]=\"item\"></span>\n            </nui-select-v2-option>\n        </nui-combobox-v2>\n        <nui-validation-message for=\"required\" i18n>\n            This field is required\n        </nui-validation-message>\n    </nui-form-field>\n</form>\n";
      /***/
    },

    /***/
    "927l":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-test/combobox-v2-test.example.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Focus drop is an invisible item which can be used to drop the focus state to the start of the page if needed -->\n<div class=\"focus-drop\" tabindex=\"-1\"></div>\n<div class=\"row mb-3 justify-content-center\">\n    <h1>\n        Combobox V2 Testing Page\n    </h1>\n</div>\n<div class=\"row mb-3\">\n    <div class=\"col\">\n        <h4>Error State</h4>\n        <nui-combobox-v2 [isInErrorState]=\"!selectedItem\"\n                          placeholder=\"Select Item\" i18n-placeholder\n                          [formControl]=\"comboboxControl\"\n                          id=\"error\"\n                          [overlayConfig]=\"overlayConfig\"\n                          #comboboxError>\n            <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n                <span [nuiComboboxV2OptionHighlight]=\"item\"></span>\n            </nui-select-v2-option>\n        </nui-combobox-v2>\n    </div>\n    <div class=\"col\">\n        <h4>Reactive form</h4>\n        <form [formGroup]=\"fancyForm\" class=\"nui-edge-definer\">\n            <nui-form-field [control]=\"fancyForm.controls['combobox']\">\n               <nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder\n                                formControlName=\"combobox\"\n                                id=\"form\"\n                                [overlayConfig]=\"overlayConfig\"\n                                #comboboxReactive>\n                    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n                        <span [nuiComboboxV2OptionHighlight]=\"item\"></span>\n                    </nui-select-v2-option>\n                </nui-combobox-v2>\n                <nui-validation-message for=\"required\" i18n>\n                    This field is required\n                </nui-validation-message>\n            </nui-form-field>\n        </form>\n    </div>\n</div>\n<div class=\"row mb-3\">\n    <div class=\"col\">\n        <h4>Basic</h4>\n        <nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder\n                         id=\"basic\"\n                         [overlayConfig]=\"overlayConfig\"\n                         #comboboxBasic>\n            <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n                <span [nuiComboboxV2OptionHighlight]=\"item\"></span>\n            </nui-select-v2-option>\n        </nui-combobox-v2>\n    </div>\n</div>\n<div class=\"row mb-3\">\n    <div class=\"col\">\n        <h4>Single select with create option</h4>\n        <nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder\n                         [formControl]=\"comboboxControlSingle\"\n                         id=\"single\"\n                         [overlayConfig]=\"overlayConfig\"\n                         #comboboxSingle>\n            <nui-select-v2-option *ngFor=\"let option of options; index\" [value]=\"option\" [isDisabled]=\"isDisabled(option)\">\n                <div class=\"d-flex align-items-center\">\n                    <span class=\"mr-3 nui-select-v2-option__label\" [nuiComboboxV2OptionHighlight]=\"option\"></span>\n                </div>\n            </nui-select-v2-option>\n\n            <nui-overlay-item *ngIf=\"comboboxSingle.canCreateOption | async\" class=\"nui-combobox-v2__create-option\" (click)=\"createOption(comboboxSingle.inputValue)\">\n                Create option \"{{comboboxSingle.inputValue}}\"\n            </nui-overlay-item>\n            <div *ngIf=\"comboboxSingle.searchEmpty | async\" class=\"nui-combobox-v2__empty-search\" i18n>No other existing item available</div>\n        </nui-combobox-v2>\n    </div>\n    <div class=\"col\">\n        <h4>Multiselect with create option</h4>\n        <nui-combobox-v2 [placeholder]=\"combobox.selectedOptions.length ? '' : 'Select Items'\"\n                         [formControl]=\"comboboxControlMulti\"\n                         [displayWith]=\"displayFn\"\n                         [multiselect]=\"true\"\n                         [overlayConfig]=\"overlayConfig\"\n                         id=\"multi\"\n                         #combobox>\n\n            <ng-container selectedItems>\n                <nui-chip nuiMarkAsSelectedItem\n                          *ngFor=\"let item of combobox?.value\"\n                          class=\"ml-2\"\n                          closeButtonTooltip=\"Remove\"\n                          [item]=\"convertToChip(item)\"\n                          (remove)=\"combobox.deselectItem(item)\"\n                          (mouseup)=\"$event.stopPropagation()\">\n                </nui-chip>\n            </ng-container>\n\n            <nui-select-v2-option *ngFor=\"let option of optionsMulti\"\n                                  [value]=\"option\"\n                                  class=\"d-flex align-items-center\">\n                <span class=\"mr-3 nui-select-v2-option__label\" [nuiComboboxV2OptionHighlight]=\"option.name\"></span>\n            </nui-select-v2-option>\n\n            <nui-overlay-item *ngIf=\"combobox.canCreateOption | async\" class=\"nui-combobox-v2__create-option\" (click)=\"createOptionMulti(combobox.inputValue)\">\n                Create option \"{{combobox.inputValue}}\"\n            </nui-overlay-item>\n            <div *ngIf=\"combobox.searchEmpty | async\" class=\"nui-combobox-v2__empty-search\" i18n>No other existing item available</div>\n        </nui-combobox-v2>\n    </div>\n    <div class=\"col\">\n        <h4>Disabled combobox and items</h4>\n        <div class=\"row m-auto\">\n            <nui-combobox-v2 [isDisabled]=\"isComboboxDisabled\"\n                             placeholder=\"Select Item\" i18n-placeholder\n                             [displayWith]=\"displayFn\"\n                             id=\"disabled\"\n                             [overlayConfig]=\"overlayConfig\"\n                             class=\"flex-grow-1\"\n                             #comboboxDisabled>\n                <nui-select-v2-option *ngFor=\"let item of optionsMulti.slice()\" [value]=\"item\" [isDisabled]=\"item.disabled\">\n                    <span [nuiComboboxV2OptionHighlight]=\"item.name\"></span>\n                </nui-select-v2-option>\n            </nui-combobox-v2>\n            <button id=\"trigger-disabled\"\n                    (click)=\"isComboboxDisabled = !isComboboxDisabled\"\n                    class=\"ml-auto\">{{ isComboboxDisabled ? \"enable\" : \"disable\" }}</button>\n        </div>\n    </div>\n</div>\n<div class=\"row mb-3\">\n    <div class=\"col\">\n        <h4>Value removal</h4>\n        <nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder\n                         [isRemoveValueEnabled]=\"false\"\n                         id=\"removal\"\n                         [overlayConfig]=\"overlayConfig\"\n                         #comboboxValueRemoval>\n            <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n                <span [nuiComboboxV2OptionHighlight]=\"item\"></span>\n            </nui-select-v2-option>\n        </nui-combobox-v2>\n    </div>\n    <div class=\"col\">\n\n    </div>\n    <div class=\"col\">\n\n    </div>\n</div>\n<div class=\"row m-auto\">\n    <h4 class=\"w-100\">Multiselect with manual dropdown control</h4>\n        <nui-combobox-v2 [placeholder]=\"comboboxMultiDimensions.selectedOptions.length ? '' : 'Select Items'\"\n                         [displayWith]=\"displayFn\"\n                         [multiselect]=\"true\"\n                         [manualDropdownControl]=\"true\"\n                         id=\"custom-control\"\n                         [overlayConfig]=\"overlayConfig\"\n                         #comboboxMultiDimensions>\n    <ng-container selectedItems>\n        <nui-chip nuiMarkAsSelectedItem\n                    class=\"ml-2\"\n                    *ngFor=\"let item of comboboxMultiDimensions?.value\"\n                    closeButtonTooltip=\"Remove\"\n                    [item]=\"convertToChip(item)\"\n                    (remove)=\"comboboxMultiDimensions.deselectItem(item)\"\n                    (mouseup)=\"$event.stopPropagation()\">\n        </nui-chip>\n    </ng-container>\n    <nui-select-v2-option *ngFor=\"let option of optionsMultiDimensions\"\n        [value]=\"option\"\n        class=\"d-flex align-items-center\">\n      <span class=\"mr-3 nui-select-v2-option__label\" [nuiComboboxV2OptionHighlight]=\"option.name\"></span>\n  </nui-select-v2-option>\n</nui-combobox-v2>\n    <button id=\"show\" class=\"ml-3\" (click)=\"showList($event)\">Show</button>\n    <button id=\"hide\" class=\"ml-3\" (click)=\"hideList($event)\">Hide</button>\n    <button id=\"toggle\" class=\"ml-3\" (click)=\"toggleList($event)\">Toggle</button>\n</div>\n\n<div class=\"row mb-3\" style=\"position: fixed; bottom: 0\" tabindex=\"-1\">\n    <h4 class=\"w-100\">Multiselect with manual dropdown control</h4>\n        <nui-combobox-v2 [placeholder]=\"comboboxWithDialog.selectedOptions.length ? '' : 'Select Items'\"\n                         [displayWith]=\"displayFn\"\n                         [multiselect]=\"true\"\n                         [manualDropdownControl]=\"true\"\n                         [overlayConfig]=\"overlayConfig\"\n                         class=\"w-100\"\n                         #comboboxWithDialog>\n\n            <ng-container selectedItems>\n                <nui-chip nuiMarkAsSelectedItem\n                            class=\"ml-2\"\n                            *ngFor=\"let item of comboboxWithDialog?.value\"\n                            closeButtonTooltip=\"Remove\"\n                            [item]=\"convertToChip(item)\"\n                            (remove)=\"comboboxWithDialog.deselectItem(item)\"\n                            (mouseup)=\"$event.stopPropagation()\">\n                </nui-chip>\n            </ng-container>\n\n            <nui-select-v2-option *ngFor=\"let option of optionsMultiDimensions\"\n                                  [value]=\"option\"\n                                  class=\"d-flex align-items-center\"\n                                  (click)=\"openInOverlay(headerButtonsContent)\">\n                <span class=\"mr-3 nui-select-v2-option__label\" [nuiComboboxV2OptionHighlight]=\"option.name\"></span>\n            </nui-select-v2-option>\n        </nui-combobox-v2>\n    <button class=\"ml-3\" (click)=\"comboboxWithDialog.toggleDropdown()\">Toggle</button>\n</div>\n\n<ng-template #content let-close=\"close\" let-dismiss=\"dismiss\">\n    <nui-dialog-header title=\"Dialog title\" i18n-title (closed)=\"close()\"></nui-dialog-header>\n    <div class=\"dialog-body\">\n        <p i18n>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n            Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n            Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n            Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n            Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n        </p>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\" (click)=\"actionCanceled(); close()\" i18n>\n            Cancel\n        </button>\n        <button nui-button type=\"button\" displayStyle=\"primary\" (click)=\"actionDone(); close()\" i18n>\n            Action\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n\n<ng-template  #headerButtonsContent let-close=\"close\">\n    <nui-dialog-header title=\"Dialog title\" (closed)=\"close()\">\n        <button nui-button type=\"button\" displayStyle=\"action\" icon=\"fullscreen\"></button>\n        <button nui-button type=\"button\" displayStyle=\"action\" icon=\"menu\"></button>\n    </nui-dialog-header>\n    <div class=\"dialog-body\">\n        <p>\n            <nui-select-v2 placeholder=\"Select Item\">\n                <nui-select-v2-option *ngFor=\"let item of dataset.items; let i = index;\" [value]=\"item\">\n                    <div class=\"d-flex align-items-center\">\n                        <button nui-button type=\"button\" (click)=\"confirm($event)\">boom!</button>\n                        {{item}}\n                        <div #popoverContainer id=\"nui-demo-popover-container\"></div>\n                        <nui-popover id=\"nui-demo-popover-with-container\"\n                                    [container]=\"popoverContainer\"\n                                    [template]=\"popoverWithContainerTemplate\"\n                                    i18n>\n                            Hover over me!\n                        </nui-popover>\n\n                        <nui-popover popoverTitle=\"Modal Popover\" i18n-popoverTitle\n                                    trigger=\"click\"\n                                    placement=\"right\"\n                                    [template]=\"popoverModal\"\n                                    [modal]=\"true\"\n                                    [preventClosing]=\"true\"\n                                    [closePopover]=\"closePopoverSubject\">\n                            <button nui-button type=\"button\" id=\"nui-demo-popover-modal\" i18n>\n                                Show modal popover\n                            </button>\n                        </nui-popover>\n\n                        <ng-template #popoverModal>\n                            <span i18n>A modal popover can be used to grab the user's attention.</span>\n                            <div class=\"mt-2 d-flex justify-content-end\">\n                                <button id=\"nui-demo-custom-close-popover\"\n                                        nui-button\n                                        type=\"button\"\n                                        displayStyle=\"action\"\n                                        (click)=\"closePopover()\" i18n>Close</button>\n                                <button nui-button\n                                        class=\"ml-3\"\n                                        type=\"button\"\n                                        displayStyle=\"primary\"\n                                        (click)=\"closePopover()\" i18n>Confirm</button>\n                            </div>\n                        </ng-template>\n\n                        <ng-template #popoverWithContainerTemplate i18n>\n                            I'm appended to a container!\n                        </ng-template>\n                        <nui-menu icon=\"menu\" *ngIf=\"!i\">\n                            <nui-menu-action *ngFor=\"let item of items\">\n                                {{item}}\n                            </nui-menu-action>\n                        </nui-menu>\n                    </div>\n                </nui-select-v2-option>\n            </nui-select-v2>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n            Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n            Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n            Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n            Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n        </p>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\"\n                (click)=\"onButtonClick('Cancel')\">\n            Cancel\n        </button>\n        <button nui-button type=\"button\"\n                displayStyle=\"primary\"\n                (click)=\"onButtonClick('Action')\">\n            Action\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n\n";
      /***/
    },

    /***/
    "AmCs":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-docs/combobox-v2-docs.example.component.less ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AmCs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n    .combobox-container { margin: 0; };\n    ul {\n        padding-left: 40px;\n\n        li {\n            list-style: disc;\n        }\n    }\n    a {\n        cursor: pointer;\n    }\n}\n";
      /***/
    },

    /***/
    "BR9L":
    /*!*************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-disabled/combobox-v2-disabled.example.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: ComboboxV2DisabledExampleComponent */

    /***/
    function BR9L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2DisabledExampleComponent", function () {
        return ComboboxV2DisabledExampleComponent;
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


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/switch/switch.component */
      "6CEj");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");

      function ComboboxV2DisabledExampleComponent_nui_select_v2_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r2)("isDisabled", item_r2.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r2.name);
        }
      }

      var ComboboxV2DisabledExampleComponent = /*#__PURE__*/function () {
        function ComboboxV2DisabledExampleComponent() {
          _classCallCheck(this, ComboboxV2DisabledExampleComponent);

          this.items = Array.from({
            length: 100
          }).map(function (_, i) {
            return {
              id: "value-".concat(i),
              name: $localize(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["Item ", ""])), i),
              disabled: Boolean(Math.round(Math.random()))
            };
          });
          this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
          this.isComboboxDisabled = false;
        }

        _createClass(ComboboxV2DisabledExampleComponent, [{
          key: "displayFn",
          value: function displayFn(item) {
            return (item === null || item === void 0 ? void 0 : item.name) || "";
          }
        }]);

        return ComboboxV2DisabledExampleComponent;
      }();

      ComboboxV2DisabledExampleComponent.ɵfac = function ComboboxV2DisabledExampleComponent_Factory(t) {
        return new (t || ComboboxV2DisabledExampleComponent)();
      };

      ComboboxV2DisabledExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ComboboxV2DisabledExampleComponent,
        selectors: [["nui-combobox-v2-disabled-example"]],
        hostAttrs: [1, "combobox-container"],
        decls: 5,
        vars: 5,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_DISABLED_COMBOBOX_V2_DISABLED_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
            i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_DISABLED_COMBOBOX_V2_DISABLED_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5704424605088380008$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_DISABLED_COMBOBOX_V2_DISABLED_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Toggle disabling\n");
            i18n_2 = MSG_EXTERNAL_5704424605088380008$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_DISABLED_COMBOBOX_V2_DISABLED_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral([":\u241F4fd336b63e20279fcb27a6a9db9e6c774507ccee\u241F5704424605088380008: Toggle disabling\n"])));
          }

          return [["placeholder", i18n_0, 1, "w-50", "d-inline-flex", 3, "isDisabled", "formControl", "displayWith"], ["combobox", ""], [3, "value", "isDisabled", 4, "ngFor", "ngForOf"], [1, "d-inline-flex", 2, "padding-left", "15px", 3, "value", "valueChange"], i18n_2, [3, "value", "isDisabled"], [1, "mr-3", 3, "nuiComboboxV2OptionHighlight"]];
        },
        template: function ComboboxV2DisabledExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ComboboxV2DisabledExampleComponent_nui_select_v2_option_2_Template, 2, 3, "nui-select-v2-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nui-switch", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ComboboxV2DisabledExampleComponent_Template_nui_switch_valueChange_3_listener($event) {
              return ctx.isComboboxDisabled = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isDisabled", ctx.isComboboxDisabled)("formControl", ctx.comboboxControl)("displayWith", ctx.displayFn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.isComboboxDisabled);
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_5__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_6__["ComboboxV2OptionHighlightDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "BRq2":
    /*!***************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-create-option-multiselect/combobox-v2-create-option-multiselect.example.component.html ***!
      \***************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BRq2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 [placeholder]=\"combobox.selectedOptions.length ? '' : 'Select Items'\"\n    [formControl]=\"comboboxControl\"\n    [multiselect]=\"true\"\n    #combobox>\n\n    <ng-container selectedItems>\n            <nui-chip nuiMarkAsSelectedItem\n                      class=\"ml-2\"\n                      *ngFor=\"let item of combobox?.value\"\n                      closeButtonTooltip=\"Remove\"\n                      [item]=\"convertToChip(item)\"\n                      (remove)=\"combobox.deselectItem(item)\"\n                      (mouseup)=\"$event.stopPropagation()\">\n            </nui-chip>\n    </ng-container>\n\n    <nui-select-v2-option *ngFor=\"let option of options\" [value]=\"option\" class=\"d-flex align-items-center\">\n        <span [nuiComboboxV2OptionHighlight]=\"option\"></span>\n    </nui-select-v2-option>\n\n    <nui-overlay-item *ngIf=\"combobox.canCreateOption | async\" class=\"nui-combobox-v2__create-option\" (click)=\"createOption(combobox.inputValue)\">\n        Create option \"{{combobox.inputValue}}\"\n    </nui-overlay-item>\n    <div *ngIf=\"combobox.searchEmpty | async\" class=\"nui-combobox-v2__empty-search\" i18n>No other existing item available</div>\n</nui-combobox-v2>\n";
      /***/
    },

    /***/
    "D1aw":
    /*!*************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-virtual-scroll/combobox-v2-virtual-scroll.example.component.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: ComboboxV2VirtualScrollExampleComponent */

    /***/
    function D1aw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2VirtualScrollExampleComponent", function () {
        return ComboboxV2VirtualScrollExampleComponent;
      });
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ComboboxV2VirtualScrollExampleComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nui-select-v2-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r2);
        }
      }

      var defaultContainerHeight = 300;

      var ComboboxV2VirtualScrollExampleComponent = /*#__PURE__*/function () {
        function ComboboxV2VirtualScrollExampleComponent() {
          var _this2 = this;

          _classCallCheck(this, ComboboxV2VirtualScrollExampleComponent);

          this.items = Array.from({
            length: 100000
          }).map(function (_, i) {
            return $localize(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["Item ", ""])), i);
          });
          this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.filteredItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_toConsumableArray(this.items));
          this.containerHeight = defaultContainerHeight;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.scrollOffset = 0;

          this.calculateContainerHeight = function () {
            if (_this2.combobox.inputValue && _this2.viewport.measureRenderedContentSize() < defaultContainerHeight) {
              _this2.containerHeight = _this2.viewport.measureRenderedContentSize();
              return;
            }

            _this2.containerHeight = defaultContainerHeight;
          };
        }

        _createClass(ComboboxV2VirtualScrollExampleComponent, [{
          key: "handleClick",
          value: function handleClick() {
            if (this.viewport) {
              this.viewport.scrollToOffset(this.scrollOffset);
              this.viewport.checkViewportSize();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            this.combobox.valueSelected.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function () {
              _this3.scrollOffset = _this3.viewport.measureScrollOffset();
            });
            this.combobox.valueChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (v) {
              return _this3.calculateContainerHeight();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return ComboboxV2VirtualScrollExampleComponent;
      }();

      ComboboxV2VirtualScrollExampleComponent.ɵfac = function ComboboxV2VirtualScrollExampleComponent_Factory(t) {
        return new (t || ComboboxV2VirtualScrollExampleComponent)();
      };

      ComboboxV2VirtualScrollExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: ComboboxV2VirtualScrollExampleComponent,
        selectors: [["nui-combobox-v2-virtual-scroll-example"]],
        viewQuery: function ComboboxV2VirtualScrollExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["ComboboxV2Component"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.viewport = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.combobox = _t.first);
          }
        },
        hostAttrs: [1, "combobox-container"],
        hostBindings: function ComboboxV2VirtualScrollExampleComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ComboboxV2VirtualScrollExampleComponent_click_HostBindingHandler() {
              return ctx.handleClick();
            });
          }
        },
        decls: 5,
        vars: 9,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_VIRTUAL_SCROLL_COMBOBOX_V2_VIRTUAL_SCROLL_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
            i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_VIRTUAL_SCROLL_COMBOBOX_V2_VIRTUAL_SCROLL_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          return [["placeholder", i18n_0, 3, "formControl", "isTypeaheadEnabled"], ["combobox", ""], ["itemSize", "30", 3, "minBufferPx", "maxBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "d-flex", "align-items-center", 3, "value"], [3, "nuiComboboxV2OptionHighlight"]];
        },
        template: function ComboboxV2VirtualScrollExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "cdk-virtual-scroll-viewport", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ComboboxV2VirtualScrollExampleComponent_div_3_Template, 3, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.comboboxControl)("isTypeaheadEnabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("height", ctx.containerHeight, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("minBufferPx", 300)("maxBufferPx", 600);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkVirtualForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 7, ctx.filteredItems));
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_6__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_7__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_8__["ComboboxV2OptionHighlightDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "DD0J":
    /*!*******************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-basic/combobox-v2-basic.example.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: ComboboxV2BasicExampleComponent */

    /***/
    function DD0J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2BasicExampleComponent", function () {
        return ComboboxV2BasicExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");

      function ComboboxV2BasicExampleComponent_nui_select_v2_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
        }
      }

      var ComboboxV2BasicExampleComponent = function ComboboxV2BasicExampleComponent() {
        _classCallCheck(this, ComboboxV2BasicExampleComponent);

        this.items = Array.from({
          length: 50
        }).map(function (_, i) {
          return $localize(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["Item ", ""])), i);
        });
      };

      ComboboxV2BasicExampleComponent.ɵfac = function ComboboxV2BasicExampleComponent_Factory(t) {
        return new (t || ComboboxV2BasicExampleComponent)();
      };

      ComboboxV2BasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxV2BasicExampleComponent,
        selectors: [["nui-combobox-v2-basic-example"]],
        hostAttrs: [1, "combobox-container"],
        decls: 2,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_BASIC_COMBOBOX_V2_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
            i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_BASIC_COMBOBOX_V2_BASIC_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          return [["placeholder", i18n_0], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]];
        },
        template: function ComboboxV2BasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-combobox-v2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComboboxV2BasicExampleComponent_nui_select_v2_option_1_Template, 2, 2, "nui-select-v2-option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_1__["ComboboxV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_3__["SelectV2OptionComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "DPim":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-custom-typeahead/combobox-v2-custom-typeahead.example.component.ts ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DPim(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\nimport { Observable } from \"rxjs\";\nimport { map, startWith } from \"rxjs/operators\";\n\ninterface IExampleItem {\n    id: string;\n    name: string;\n}\n@Component({\n    selector: \"nui-combobox-v2-custom-typeahead-example\",\n    templateUrl: \"combobox-v2-custom-typeahead.example.component.html\",\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2CustomTypeaheadExampleComponent implements OnInit {\n    public items: IExampleItem[] = Array.from({ length: 100 }).map((_, i) =>\n        ({\n            id: `value-${i}`,\n            name: $localize `Item ${i}`,\n        }));\n    public comboboxControl = new FormControl();\n    public filteredItems$: Observable<any[]>;\n\n    ngOnInit() {\n        this.filteredItems$ = this.comboboxControl.valueChanges.pipe(\n            startWith(\"\"),\n            map((value) => value?.name || value),\n            map((name) =>\n                name ? this.filterItems(name) : this.items.slice()\n            )\n        );\n    }\n\n    public displayFn(item: IExampleItem): string {\n        return item?.name || \"\";\n    }\n\n    private filterItems(value: string): IExampleItem[] {\n        const filterValue = value.toLowerCase();\n\n        return this.items.filter(option => option.name.toLowerCase().includes(filterValue));\n    }\n}\n";
      /***/
    },

    /***/
    "DWcQ":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-typeahead/combobox-v2-typeahead.example.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DWcQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder [formControl]=\"comboboxControl\">\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n        <span [nuiComboboxV2OptionHighlight]=\"item\"></span>\n    </nui-select-v2-option>\n</nui-combobox-v2>\n";
      /***/
    },

    /***/
    "Dfbc":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-setting-value/combobox-v2-setting-value.example.component.ts ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dfbc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-combobox-v2-setting-value-example\",\n    templateUrl: \"combobox-v2-setting-value.example.component.html\",\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2SettingValueExampleComponent implements OnInit {\n    public items = Array.from({ length : 50 }).map((_, i) => $localize `Item ${i}`);\n    public comboboxControl: FormControl = new FormControl();\n\n    ngOnInit(): void {\n        this.comboboxControl.setValue(this.items[1]);\n    }\n}\n";
      /***/
    },

    /***/
    "EoMk":
    /*!*********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-custom-typeahead/combobox-v2-custom-typeahead.example.component.html ***!
      \*********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EoMk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder\n    [formControl]=\"comboboxControl\"\n    [displayWith]=\"displayFn\"\n    [isTypeaheadEnabled]=\"false\"\n    #combobox>\n    <nui-select-v2-option *ngFor=\"let item of filteredItems$ | async\" [value]=\"item\">\n        <span [nuiComboboxV2OptionHighlight]=\"item.name\"></span>\n    </nui-select-v2-option>\n</nui-combobox-v2>\n";
      /***/
    },

    /***/
    "FMcY":
    /*!***************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-options-changed/combobox-v2-options-changed.example.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: ComboboxV2OpitionsChangedExampleComponent */

    /***/
    function FMcY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2OpitionsChangedExampleComponent", function () {
        return ComboboxV2OpitionsChangedExampleComponent;
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


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/divider/divider.component */
      "UGtJ");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");
      /* harmony import */


      var _src_lib_chips_chip_chip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/chips/chip/chip.component */
      "PEYr");
      /* harmony import */


      var _src_lib_select_v2_mark_as_selected_item_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/mark-as-selected-item.directive */
      "2vPf");

      function ComboboxV2OpitionsChangedExampleComponent_nui_select_v2_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r5);
        }
      }

      function ComboboxV2OpitionsChangedExampleComponent_nui_chip_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-chip", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("remove", function ComboboxV2OpitionsChangedExampleComponent_nui_chip_19_Template_nui_chip_remove_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var option_r6 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

            return _r2.deselectItem(option_r6);
          })("mouseup", function ComboboxV2OpitionsChangedExampleComponent_nui_chip_19_Template_nui_chip_mouseup_0_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r6 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", ctx_r3.convertToChip(option_r6));
        }
      }

      function ComboboxV2OpitionsChangedExampleComponent_nui_select_v2_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r10);
        }
      }

      var ComboboxV2OpitionsChangedExampleComponent = /*#__PURE__*/function () {
        function ComboboxV2OpitionsChangedExampleComponent() {
          _classCallCheck(this, ComboboxV2OpitionsChangedExampleComponent);

          this.items = [];
          this.multiselectItems = [];
          this.itemSet = [[$localize(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["Item 1"]))), $localize(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["Item 2"]))), $localize(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["Item 3"]))), $localize(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["Item 4"])))], [$localize(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["Item 3"]))), $localize(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["Item 4"]))), $localize(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["Item 5"]))), $localize(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["Item 6"])))]];
          this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
          this.multiselectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        }

        _createClass(ComboboxV2OpitionsChangedExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.items = this.itemSet[0];
            this.multiselectItems = this.itemSet[0];
          }
        }, {
          key: "setItems",
          value: function setItems(i) {
            this.items = this.itemSet[i];
          }
        }, {
          key: "setMultiselectItems",
          value: function setMultiselectItems(i) {
            this.items = this.itemSet[i];
          }
        }, {
          key: "convertToChip",
          value: function convertToChip(value) {
            return {
              label: value
            };
          }
        }]);

        return ComboboxV2OpitionsChangedExampleComponent;
      }();

      ComboboxV2OpitionsChangedExampleComponent.ɵfac = function ComboboxV2OpitionsChangedExampleComponent_Factory(t) {
        return new (t || ComboboxV2OpitionsChangedExampleComponent)();
      };

      ComboboxV2OpitionsChangedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ComboboxV2OpitionsChangedExampleComponent,
        selectors: [["nui-combobox-v2-options-changed-example"]],
        hostAttrs: [1, "combobox-container"],
        decls: 25,
        vars: 10,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_OPTIONS_CHANGED_COMBOBOX_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
            i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_OPTIONS_CHANGED_COMBOBOX_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6602753656016090774$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_OPTIONS_CHANGED_COMBOBOX_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Set items: 1, 2, 3, 4");
            i18n_2 = MSG_EXTERNAL_6602753656016090774$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_OPTIONS_CHANGED_COMBOBOX_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral([":\u241F88907de97f07da173cbae35e528068baaa303a9f\u241F6602753656016090774:Set items: 1, 2, 3, 4"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3366342520245221259$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_OPTIONS_CHANGED_COMBOBOX_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Set items: 3, 4, 5, 6");
            i18n_4 = MSG_EXTERNAL_3366342520245221259$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_OPTIONS_CHANGED_COMBOBOX_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral([":\u241F546d7c2a5e1a2d4b895c66a8507f43a9800c1ef2\u241F3366342520245221259:Set items: 3, 4, 5, 6"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6602753656016090774$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_OPTIONS_CHANGED_COMBOBOX_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Set items: 1, 2, 3, 4");
            i18n_6 = MSG_EXTERNAL_6602753656016090774$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_OPTIONS_CHANGED_COMBOBOX_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral([":\u241F88907de97f07da173cbae35e528068baaa303a9f\u241F6602753656016090774:Set items: 1, 2, 3, 4"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3366342520245221259$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_OPTIONS_CHANGED_COMBOBOX_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Set items: 3, 4, 5, 6");
            i18n_8 = MSG_EXTERNAL_3366342520245221259$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_OPTIONS_CHANGED_COMBOBOX_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral([":\u241F546d7c2a5e1a2d4b895c66a8507f43a9800c1ef2\u241F3366342520245221259:Set items: 3, 4, 5, 6"])));
          }

          return [["placeholder", i18n_0, 3, "formControl"], ["combobox", ""], [3, "value", 4, "ngFor", "ngForOf"], ["nui-button", "", "type", "button", "displayStyle", "action", 3, "click"], i18n_2, i18n_4, ["size", "medium"], [3, "formControl", "multiselect"], ["multiselect", ""], ["selectedItems", ""], ["nuiMarkAsSelectedItem", "", "class", "ml-2", "closeButtonTooltip", "Remove", 3, "item", "remove", "mouseup", 4, "ngFor", "ngForOf"], i18n_6, i18n_8, [3, "value"], [3, "nuiComboboxV2OptionHighlight"], ["nuiMarkAsSelectedItem", "", "closeButtonTooltip", "Remove", 1, "ml-2", 3, "item", "remove", "mouseup"]];
        },
        template: function ComboboxV2OpitionsChangedExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ComboboxV2OpitionsChangedExampleComponent_nui_select_v2_option_6_Template, 2, 2, "nui-select-v2-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComboboxV2OpitionsChangedExampleComponent_Template_button_click_7_listener() {
              return ctx.setItems(0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComboboxV2OpitionsChangedExampleComponent_Template_button_click_9_listener() {
              return ctx.setItems(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "nui-divider", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nui-combobox-v2", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ComboboxV2OpitionsChangedExampleComponent_nui_chip_19_Template, 1, 1, "nui-chip", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ComboboxV2OpitionsChangedExampleComponent_nui_select_v2_option_20_Template, 2, 2, "nui-select-v2-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComboboxV2OpitionsChangedExampleComponent_Template_button_click_21_listener() {
              return ctx.setMultiselectItems(0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](22, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComboboxV2OpitionsChangedExampleComponent_Template_button_click_23_listener() {
              return ctx.setMultiselectItems(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](24, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Value: ", _r0.value, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("FormControl.value: ", ctx.comboboxControl.value, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.comboboxControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Value: ", _r2.value, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("FormControl.value: ", _r2.value, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.multiselectControl)("multiselect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r2 == null ? null : _r2.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_5__["DividerComponent"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_6__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_7__["ComboboxV2OptionHighlightDirective"], _src_lib_chips_chip_chip_component__WEBPACK_IMPORTED_MODULE_8__["ChipComponent"], _src_lib_select_v2_mark_as_selected_item_directive__WEBPACK_IMPORTED_MODULE_9__["MarkAsSelectedItemDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "G/AQ":
    /*!*************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-reactive-form-field/combobox-v2-reactive-form-field.example.component.ts ***!
      \*************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GAQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-combobox-v2-reactive-form-field-example\",\n    templateUrl: \"combobox-v2-reactive-form-field.example.component.html\",\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2ReactiveFormFieldExampleComponent implements OnInit {\n    public icons: any[] = [\"check\", \"email\", \"execute\"];\n    public items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);\n    public fancyForm: FormGroup;\n\n    constructor(private formBuilder: FormBuilder) {}\n\n    ngOnInit() {\n        this.fancyForm = this.formBuilder.group({\n            combobox: this.formBuilder.control(\"\", Validators.required),\n        });\n    }\n}\n";
      /***/
    },

    /***/
    "Gd/J":
    /*!*******************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/index.ts ***!
      \*******************************************************/

    /*! exports provided: ComboboxV2DocsComponent, ComboboxV2BasicExampleComponent, ComboboxV2GroupedOptionsExampleComponent, ComboboxV2VirtualScrollExampleComponent, ComboboxV2RemoveValueExampleComponent, ComboboxV2DisabledExampleComponent, ComboboxV2ErrorExampleComponent, ComboboxV2InlineExampleComponent, ComboboxV2StylingExampleComponent, ComboboxV2OverlayConfigExampleComponent, ComboboxV2MultiselectExampleComponent, ComboboxV2CustomTypeaheadExampleComponent, ComboboxV2ReactiveFormFieldExampleComponent, ComboboxV2CreateOptionExampleComponent, ComboboxV2CreateOptionMultiselectExampleComponent, ComboboxV2CustomizeOptionsExampleComponent, ComboboxV2CustomControlExampleComponent, ComboboxV2TestExampleComponent, ComboboxV2OpitionsChangedExampleComponent, ComboboxV2TypeaheadExampleComponent, ComboboxV2GettingValueExampleComponent, ComboboxV2SettingValueExampleComponent */

    /***/
    function GdJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _combobox_v2_docs_combobox_v2_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./combobox-v2-docs/combobox-v2-docs.example.component */
      "ZwzC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2DocsComponent", function () {
        return _combobox_v2_docs_combobox_v2_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["ComboboxV2DocsComponent"];
      });
      /* harmony import */


      var _combobox_v2_basic_combobox_v2_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./combobox-v2-basic/combobox-v2-basic.example.component */
      "DD0J");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2BasicExampleComponent", function () {
        return _combobox_v2_basic_combobox_v2_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["ComboboxV2BasicExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_grouped_options_combobox_v2_grouped_options_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./combobox-v2-grouped-options/combobox-v2-grouped-options.example.component */
      "crPb");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2GroupedOptionsExampleComponent", function () {
        return _combobox_v2_grouped_options_combobox_v2_grouped_options_example_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxV2GroupedOptionsExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_virtual_scroll_combobox_v2_virtual_scroll_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./combobox-v2-virtual-scroll/combobox-v2-virtual-scroll.example.component */
      "D1aw");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2VirtualScrollExampleComponent", function () {
        return _combobox_v2_virtual_scroll_combobox_v2_virtual_scroll_example_component__WEBPACK_IMPORTED_MODULE_3__["ComboboxV2VirtualScrollExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_remove_value_combobox_v2_remove_value_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./combobox-v2-remove-value/combobox-v2-remove-value.example.component */
      "1xtr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2RemoveValueExampleComponent", function () {
        return _combobox_v2_remove_value_combobox_v2_remove_value_example_component__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2RemoveValueExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_disabled_combobox_v2_disabled_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./combobox-v2-disabled/combobox-v2-disabled.example.component */
      "BR9L");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2DisabledExampleComponent", function () {
        return _combobox_v2_disabled_combobox_v2_disabled_example_component__WEBPACK_IMPORTED_MODULE_5__["ComboboxV2DisabledExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_error_combobox_v2_error_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./combobox-v2-error/combobox-v2-error.example.component */
      "+WWY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2ErrorExampleComponent", function () {
        return _combobox_v2_error_combobox_v2_error_example_component__WEBPACK_IMPORTED_MODULE_6__["ComboboxV2ErrorExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_inline_combobox_v2_inline_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./combobox-v2-inline/combobox-v2-inline.example.component */
      "mtyX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2InlineExampleComponent", function () {
        return _combobox_v2_inline_combobox_v2_inline_example_component__WEBPACK_IMPORTED_MODULE_7__["ComboboxV2InlineExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_styling_combobox_v2_styling_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./combobox-v2-styling/combobox-v2-styling.example.component */
      "IavT");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2StylingExampleComponent", function () {
        return _combobox_v2_styling_combobox_v2_styling_example_component__WEBPACK_IMPORTED_MODULE_8__["ComboboxV2StylingExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_overlay_config_combobox_v2_overlay_config_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./combobox-v2-overlay-config/combobox-v2-overlay-config.example.component */
      "LLdU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2OverlayConfigExampleComponent", function () {
        return _combobox_v2_overlay_config_combobox_v2_overlay_config_example_component__WEBPACK_IMPORTED_MODULE_9__["ComboboxV2OverlayConfigExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_multiselect_combobox_v2_multiselect_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./combobox-v2-multiselect/combobox-v2-multiselect.example.component */
      "OWSK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2MultiselectExampleComponent", function () {
        return _combobox_v2_multiselect_combobox_v2_multiselect_example_component__WEBPACK_IMPORTED_MODULE_10__["ComboboxV2MultiselectExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_custom_typeahead_combobox_v2_custom_typeahead_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./combobox-v2-custom-typeahead/combobox-v2-custom-typeahead.example.component */
      "SRBs");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2CustomTypeaheadExampleComponent", function () {
        return _combobox_v2_custom_typeahead_combobox_v2_custom_typeahead_example_component__WEBPACK_IMPORTED_MODULE_11__["ComboboxV2CustomTypeaheadExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_reactive_form_field_combobox_v2_reactive_form_field_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./combobox-v2-reactive-form-field/combobox-v2-reactive-form-field.example.component */
      "Xzca");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2ReactiveFormFieldExampleComponent", function () {
        return _combobox_v2_reactive_form_field_combobox_v2_reactive_form_field_example_component__WEBPACK_IMPORTED_MODULE_12__["ComboboxV2ReactiveFormFieldExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_create_option_combobox_v2_create_option_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./combobox-v2-create-option/combobox-v2-create-option.example.component */
      "Z+F+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2CreateOptionExampleComponent", function () {
        return _combobox_v2_create_option_combobox_v2_create_option_example_component__WEBPACK_IMPORTED_MODULE_13__["ComboboxV2CreateOptionExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_create_option_multiselect_combobox_v2_create_option_multiselect_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./combobox-v2-create-option-multiselect/combobox-v2-create-option-multiselect.example.component */
      "L9JI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2CreateOptionMultiselectExampleComponent", function () {
        return _combobox_v2_create_option_multiselect_combobox_v2_create_option_multiselect_example_component__WEBPACK_IMPORTED_MODULE_14__["ComboboxV2CreateOptionMultiselectExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_customize_options_combobox_v2_customize_options_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./combobox-v2-customize-options/combobox-v2-customize-options.example.component */
      "h39t");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2CustomizeOptionsExampleComponent", function () {
        return _combobox_v2_customize_options_combobox_v2_customize_options_example_component__WEBPACK_IMPORTED_MODULE_15__["ComboboxV2CustomizeOptionsExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_custom_control_combobox_v2_custom_control_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./combobox-v2-custom-control/combobox-v2-custom-control.example.component */
      "wHeG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2CustomControlExampleComponent", function () {
        return _combobox_v2_custom_control_combobox_v2_custom_control_example_component__WEBPACK_IMPORTED_MODULE_16__["ComboboxV2CustomControlExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_test_combobox_v2_test_example_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./combobox-v2-test/combobox-v2-test.example.component */
      "+HcL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2TestExampleComponent", function () {
        return _combobox_v2_test_combobox_v2_test_example_component__WEBPACK_IMPORTED_MODULE_17__["ComboboxV2TestExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_options_changed_combobox_v2_options_changed_example_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./combobox-v2-options-changed/combobox-v2-options-changed.example.component */
      "FMcY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2OpitionsChangedExampleComponent", function () {
        return _combobox_v2_options_changed_combobox_v2_options_changed_example_component__WEBPACK_IMPORTED_MODULE_18__["ComboboxV2OpitionsChangedExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_typeahead_combobox_v2_typeahead_example_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./combobox-v2-typeahead/combobox-v2-typeahead.example.component */
      "fEv4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2TypeaheadExampleComponent", function () {
        return _combobox_v2_typeahead_combobox_v2_typeahead_example_component__WEBPACK_IMPORTED_MODULE_19__["ComboboxV2TypeaheadExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_getting_value_combobox_v2_getting_value_example_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./combobox-v2-getting-value/combobox-v2-getting-value.example.component */
      "WshB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2GettingValueExampleComponent", function () {
        return _combobox_v2_getting_value_combobox_v2_getting_value_example_component__WEBPACK_IMPORTED_MODULE_20__["ComboboxV2GettingValueExampleComponent"];
      });
      /* harmony import */


      var _combobox_v2_setting_value_combobox_v2_setting_value_example_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./combobox-v2-setting-value/combobox-v2-setting-value.example.component */
      "O8c5");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2SettingValueExampleComponent", function () {
        return _combobox_v2_setting_value_combobox_v2_setting_value_example_component__WEBPACK_IMPORTED_MODULE_21__["ComboboxV2SettingValueExampleComponent"];
      });
      /***/

    },

    /***/
    "HdWF":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-custom-control/combobox-v2-custom-control.example.component.less ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HdWF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import (reference) \"nui-framework-variables\";\n@import (reference) \"../../../../../../src/styles/components/combobox-v2-addons.less\";\n\n.active {\n    .active-item();\n}\n\nnui-chip {\n    display: inline-flex;\n    cursor: pointer;\n    border-radius: 9px;\n    margin-bottom: 5px;\n}\n";
      /***/
    },

    /***/
    "IavT":
    /*!***********************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-styling/combobox-v2-styling.example.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: ComboboxV2StylingExampleComponent */

    /***/
    function IavT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2StylingExampleComponent", function () {
        return ComboboxV2StylingExampleComponent;
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


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");

      function ComboboxV2StylingExampleComponent_nui_select_v2_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r2);
        }
      }

      var ComboboxV2StylingExampleComponent = function ComboboxV2StylingExampleComponent() {
        _classCallCheck(this, ComboboxV2StylingExampleComponent);

        this.items = Array.from({
          length: 100
        }).map(function (_, i) {
          return $localize(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["Item ", ""])), i);
        });
        this.config = {
          panelClass: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["OVERLAY_WITH_POPUP_STYLES_CLASS"], "nui-overlay-styling-demo-custom-class"]
        };
      };

      ComboboxV2StylingExampleComponent.ɵfac = function ComboboxV2StylingExampleComponent_Factory(t) {
        return new (t || ComboboxV2StylingExampleComponent)();
      };

      ComboboxV2StylingExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ComboboxV2StylingExampleComponent,
        selectors: [["nui-combobox-v2-styling-example"]],
        decls: 3,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_STYLING_COMBOBOX_V2_STYLING_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
            i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_STYLING_COMBOBOX_V2_STYLING_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          return [["placeholder", i18n_0, 2, "width", "50%", 3, "overlayConfig"], ["combobox", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "nuiComboboxV2OptionHighlight"]];
        },
        template: function ComboboxV2StylingExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ComboboxV2StylingExampleComponent_nui_select_v2_option_2_Template, 2, 2, "nui-select-v2-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlayConfig", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_5__["ComboboxV2OptionHighlightDirective"]],
        styles: [".nui-overlay-styling-demo-custom-class {\n  border: 1px solid red;\n}\n.nui-overlay-styling-demo-custom-class .nui-overlay {\n  border: 2px red dashed;\n  padding: 10px;\n  background-color: antiquewhite;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJvYm94LXYyLXN0eWxpbmcuZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFBO0FBREo7QUFBQTtFQUlRLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRFIiLCJmaWxlIjoiY29tYm9ib3gtdjItc3R5bGluZy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyBob3cgdGhlIGdsb2JhbCBzdHlsZXMgbG9vayBsaWtlXG5cbi5udWktb3ZlcmxheS1zdHlsaW5nLWRlbW8tY3VzdG9tLWNsYXNzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG5cbiAgICAubnVpLW92ZXJsYXkge1xuICAgICAgICBib3JkZXI6IDJweCByZWQgZGFzaGVkO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gICAgfVxufVxuIl19 */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Jg4y":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-styling/combobox-v2-styling.example.component.less ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Jg4y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "// This is how the global styles look like\n\n.nui-overlay-styling-demo-custom-class {\n    border: 1px solid red;\n\n    .nui-overlay {\n        border: 2px red dashed;\n        padding: 10px;\n        background-color: antiquewhite;\n    }\n}\n";
      /***/
    },

    /***/
    "KD3D":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-virtual-scroll/combobox-v2-virtual-scroll.example.component.html ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KD3D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder\n                 [formControl]=\"comboboxControl\"\n                 [isTypeaheadEnabled]=\"true\"\n                 #combobox>\n\n    <cdk-virtual-scroll-viewport itemSize=\"30\"\n                                 [minBufferPx]=\"300\"\n                                 [maxBufferPx]=\"600\"\n                                 [style.height.px]=\"containerHeight\">\n\n        <div *cdkVirtualFor=\"let item of filteredItems | async; index as i\">\n            <nui-select-v2-option [value]=\"item\" class=\"d-flex align-items-center\">\n                <span [nuiComboboxV2OptionHighlight]=\"item\"></span>\n            </nui-select-v2-option>\n        </div>\n    </cdk-virtual-scroll-viewport>\n</nui-combobox-v2>\n";
      /***/
    },

    /***/
    "L9JI":
    /*!***********************************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-create-option-multiselect/combobox-v2-create-option-multiselect.example.component.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: ComboboxV2CreateOptionMultiselectExampleComponent */

    /***/
    function L9JI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2CreateOptionMultiselectExampleComponent", function () {
        return ComboboxV2CreateOptionMultiselectExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_chips_chip_chip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/chips/chip/chip.component */
      "PEYr");
      /* harmony import */


      var _src_lib_select_v2_mark_as_selected_item_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/mark-as-selected-item.directive */
      "2vPf");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");
      /* harmony import */


      var _src_lib_overlay_overlay_item_overlay_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/overlay/overlay-item/overlay-item.component */
      "WpiY");

      function ComboboxV2CreateOptionMultiselectExampleComponent_nui_chip_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-chip", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function ComboboxV2CreateOptionMultiselectExampleComponent_nui_chip_3_Template_nui_chip_remove_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var item_r5 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.deselectItem(item_r5);
          })("mouseup", function ComboboxV2CreateOptionMultiselectExampleComponent_nui_chip_3_Template_nui_chip_mouseup_0_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r1.convertToChip(item_r5));
        }
      }

      function ComboboxV2CreateOptionMultiselectExampleComponent_nui_select_v2_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", option_r9);
        }
      }

      function ComboboxV2CreateOptionMultiselectExampleComponent_nui_overlay_item_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-overlay-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2CreateOptionMultiselectExampleComponent_nui_overlay_item_5_Template_nui_overlay_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx_r10.createOption(_r0.inputValue);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Create option \"", _r0.inputValue, "\" ");
        }
      }

      function ComboboxV2CreateOptionMultiselectExampleComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ComboboxV2CreateOptionMultiselectExampleComponent = /*#__PURE__*/function () {
        function ComboboxV2CreateOptionMultiselectExampleComponent(domSanitizer) {
          _classCallCheck(this, ComboboxV2CreateOptionMultiselectExampleComponent);

          this.domSanitizer = domSanitizer;
          this.options = Array.from({
            length: 3
          }).map(function (_, i) {
            return $localize(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["Item ", ""])), i);
          });
          this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        }

        _createClass(ComboboxV2CreateOptionMultiselectExampleComponent, [{
          key: "createOption",
          value: function createOption(optionName) {
            var _a;

            var sanitizedOption = (_a = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, optionName)) === null || _a === void 0 ? void 0 : _a.trim();

            if (sanitizedOption) {
              this.options.push(sanitizedOption);
              this.comboboxControl.setValue([].concat(_toConsumableArray(this.comboboxControl.value || []), [optionName]));
            }
          }
        }, {
          key: "convertToChip",
          value: function convertToChip(value) {
            return {
              label: value
            };
          }
        }]);

        return ComboboxV2CreateOptionMultiselectExampleComponent;
      }();

      ComboboxV2CreateOptionMultiselectExampleComponent.ɵfac = function ComboboxV2CreateOptionMultiselectExampleComponent_Factory(t) {
        return new (t || ComboboxV2CreateOptionMultiselectExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      ComboboxV2CreateOptionMultiselectExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxV2CreateOptionMultiselectExampleComponent,
        selectors: [["nui-combobox-v2-create-option-multiselect-example"]],
        decls: 9,
        vars: 11,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8369340007679658038$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_CREATE_OPTION_MULTISELECT_COMBOBOX_V2_CREATE_OPTION_MULTISELECT_EXAMPLE_COMPONENT_TS__1 = goog.getMsg("No other existing item available");
            i18n_0 = MSG_EXTERNAL_8369340007679658038$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_CREATE_OPTION_MULTISELECT_COMBOBOX_V2_CREATE_OPTION_MULTISELECT_EXAMPLE_COMPONENT_TS__1;
          } else {
            i18n_0 = $localize(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral([":\u241Fa13fa43d609e19a3057da12ceaba187af03aca4c\u241F8369340007679658038:No other existing item available"])));
          }

          return [[3, "placeholder", "formControl", "multiselect"], ["combobox", ""], ["selectedItems", ""], ["nuiMarkAsSelectedItem", "", "class", "ml-2", "closeButtonTooltip", "Remove", 3, "item", "remove", "mouseup", 4, "ngFor", "ngForOf"], ["class", "d-flex align-items-center", 3, "value", 4, "ngFor", "ngForOf"], ["class", "nui-combobox-v2__create-option", 3, "click", 4, "ngIf"], ["class", "nui-combobox-v2__empty-search", 4, "ngIf"], ["nuiMarkAsSelectedItem", "", "closeButtonTooltip", "Remove", 1, "ml-2", 3, "item", "remove", "mouseup"], [1, "d-flex", "align-items-center", 3, "value"], [3, "nuiComboboxV2OptionHighlight"], [1, "nui-combobox-v2__create-option", 3, "click"], [1, "nui-combobox-v2__empty-search"], i18n_0];
        },
        template: function ComboboxV2CreateOptionMultiselectExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ComboboxV2CreateOptionMultiselectExampleComponent_nui_chip_3_Template, 1, 1, "nui-chip", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ComboboxV2CreateOptionMultiselectExampleComponent_nui_select_v2_option_4_Template, 2, 2, "nui-select-v2-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ComboboxV2CreateOptionMultiselectExampleComponent_nui_overlay_item_5_Template, 2, 1, "nui-overlay-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ComboboxV2CreateOptionMultiselectExampleComponent_div_7_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _r0.selectedOptions.length ? "" : "Select Items")("formControl", ctx.comboboxControl)("multiselect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0 == null ? null : _r0.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, _r0.canCreateOption));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, _r0.searchEmpty));
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_3__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _src_lib_chips_chip_chip_component__WEBPACK_IMPORTED_MODULE_5__["ChipComponent"], _src_lib_select_v2_mark_as_selected_item_directive__WEBPACK_IMPORTED_MODULE_6__["MarkAsSelectedItemDirective"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_7__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_8__["ComboboxV2OptionHighlightDirective"], _src_lib_overlay_overlay_item_overlay_item_component__WEBPACK_IMPORTED_MODULE_9__["OverlayItemComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%]   nui-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  cursor: pointer;\n  margin-bottom: 5px;\n  border-radius: 9px;\n}\n[_nghost-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: var(--nui-color-selected,rgba(0, 196, 210, 0.1));\n  outline: none;\n  z-index: 500;\n  box-shadow: inset 0 0 0 2px rgba(0, 196, 210, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJvYm94LXYyLWNyZWF0ZS1vcHRpb24tbXVsdGlzZWxlY3QuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2Nzcy12YXJpYWJsZXMubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2ZvY3VzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSFI7QUFGQTtFQ0VJLGtFQUFBO0VDSkEsYUFBQTtFQUNBLFlBQUE7RUFVQSxrREFBQTtBRkRKIiwiZmlsZSI6ImNvbWJvYm94LXYyLWNyZWF0ZS1vcHRpb24tbXVsdGlzZWxlY3QuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJudWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9jb21ib2JveC12Mi1hZGRvbnMubGVzc1wiO1xuXG46aG9zdCB7XG4gICAgbnVpLWNoaXAge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICB9XG5cbiAgICAuYWN0aXZlIHtcbiAgICAgICAgLmFjdGl2ZS1pdGVtKCk7XG4gICAgfVxufVxuIiwiLnNldENzc1ZhcmlhYmxlKEBwcm9wZXJ0eSwgQHZhbHVlKXtcbiAgICBAZXZhbHVhdGVkIDogXCJAe3ZhbHVlfVwiO1xuICAgIC8vdGhlIGRvdWJsZSBAIGZvcmNlcyBhIGluZGlyZWN0aW9uIGV2YWx1YXRpb24sIGtpbmRhIGxpa2UgYSBwb2ludGVyXG4gICAgQGZhbGxiYWNrIDogQEBldmFsdWF0ZWQ7XG5cbiAgICBAe3Byb3BlcnR5fTogflwidmFyKC0tQHt2YWx1ZX0sQHtmYWxsYmFja30pXCI7XG59XG4iLCIuZm9jdXMtb3V0bGluZS1iYXNlKCkge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgei1pbmRleDogQHppbmRleC1hY3RpdmU7XG59XG5cbi5mb2N1cy1vdXRsaW5lKCkge1xuICAgIC5mb2N1cy1vdXRsaW5lLWJhc2UoKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCBAbnVpLWxpbmUtbWVkaXVtIGZhZGUoQG51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdCwgNTAlKTtcbn1cblxuLmZvY3VzLW91dGxpbmUtaW5zZXQoKSB7XG4gICAgLmZvY3VzLW91dGxpbmUtYmFzZSgpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIEBudWktbGluZS1tZWRpdW0gZmFkZShAbnVpLWNvbG9yLXNlbGVjdGVkLWNvbnRyYXN0LCA1MCUpO1xufVxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "LLdU":
    /*!*************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-overlay-config/combobox-v2-overlay-config.example.component.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: ComboboxV2OverlayConfigExampleComponent */

    /***/
    function LLdU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2OverlayConfigExampleComponent", function () {
        return ComboboxV2OverlayConfigExampleComponent;
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


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");

      function ComboboxV2OverlayConfigExampleComponent_nui_select_v2_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-select-v2-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r2);
        }
      }

      var ComboboxV2OverlayConfigExampleComponent = function ComboboxV2OverlayConfigExampleComponent() {
        _classCallCheck(this, ComboboxV2OverlayConfigExampleComponent);

        this.items = Array.from({
          length: 100
        }).map(function (_, i) {
          return $localize(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["Item ", ""])), i);
        });
        this.overlayConfig = {
          width: 300,
          height: 200,
          panelClass: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["OVERLAY_WITH_POPUP_STYLES_CLASS"], "overlay-config-demo-custom-class"]
        };
        this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
      };

      ComboboxV2OverlayConfigExampleComponent.ɵfac = function ComboboxV2OverlayConfigExampleComponent_Factory(t) {
        return new (t || ComboboxV2OverlayConfigExampleComponent)();
      };

      ComboboxV2OverlayConfigExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ComboboxV2OverlayConfigExampleComponent,
        selectors: [["nui-combobox-v2-overlay-config-example"]],
        hostAttrs: [1, "combobox-container"],
        decls: 3,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_OVERLAY_CONFIG_COMBOBOX_V2_OVERLAY_CONFIG_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
            i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_OVERLAY_CONFIG_COMBOBOX_V2_OVERLAY_CONFIG_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          return [["placeholder", i18n_0, 3, "formControl", "overlayConfig", "syncWidth"], ["combobox", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "nuiComboboxV2OptionHighlight"]];
        },
        template: function ComboboxV2OverlayConfigExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ComboboxV2OverlayConfigExampleComponent_nui_select_v2_option_2_Template, 2, 2, "nui-select-v2-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.comboboxControl)("overlayConfig", ctx.overlayConfig)("syncWidth", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_3__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_5__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_6__["ComboboxV2OptionHighlightDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Nd3F":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-remove-value/combobox-v2-remove-value.example.component.ts ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nd3F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-combobox-v2-remove-value-example\",\n    templateUrl: \"combobox-v2-remove-value.example.component.html\",\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2RemoveValueExampleComponent {\n    public items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);\n    public comboboxControl = new FormControl();\n}\n";
      /***/
    },

    /***/
    "NvzZ":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-typeahead/combobox-v2-typeahead.example.component.ts ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NvzZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-combobox-v2-typeahead-example\",\n    templateUrl: \"combobox-v2-typeahead.example.component.html\",\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2TypeaheadExampleComponent {\n    public items = Array.from({ length : 50 }).map((_, i) => $localize `Item ${i}`);\n    public comboboxControl = new FormControl();\n}\n";
      /***/
    },

    /***/
    "O5V+":
    /*!**************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2 sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \**************************************************************************************************************/

    /*! no static exports found */

    /***/
    function O5V(module, exports, __webpack_require__) {
      var map = {
        "./combobox-v2-basic/combobox-v2-basic.example.component.html": "mmgv",
        "./combobox-v2-basic/combobox-v2-basic.example.component.ts": "YNV4",
        "./combobox-v2-create-option-multiselect/combobox-v2-create-option-multiselect.example.component.html": "BRq2",
        "./combobox-v2-create-option-multiselect/combobox-v2-create-option-multiselect.example.component.less": "nHIs",
        "./combobox-v2-create-option-multiselect/combobox-v2-create-option-multiselect.example.component.ts": "fYMa",
        "./combobox-v2-create-option/combobox-v2-create-option.example.component.html": "W/8Q",
        "./combobox-v2-create-option/combobox-v2-create-option.example.component.ts": "nl7e",
        "./combobox-v2-custom-control/combobox-v2-custom-control.example.component.html": "U5Hd",
        "./combobox-v2-custom-control/combobox-v2-custom-control.example.component.less": "HdWF",
        "./combobox-v2-custom-control/combobox-v2-custom-control.example.component.ts": "nP3H",
        "./combobox-v2-custom-typeahead/combobox-v2-custom-typeahead.example.component.html": "EoMk",
        "./combobox-v2-custom-typeahead/combobox-v2-custom-typeahead.example.component.ts": "DPim",
        "./combobox-v2-customize-options/combobox-v2-customize-options.example.component.html": "swIN",
        "./combobox-v2-customize-options/combobox-v2-customize-options.example.component.ts": "tN+o",
        "./combobox-v2-disabled/combobox-v2-disabled.example.component.html": "7ws5",
        "./combobox-v2-disabled/combobox-v2-disabled.example.component.ts": "nmQ0",
        "./combobox-v2-docs/combobox-v2-docs.example.component.html": "vSxS",
        "./combobox-v2-docs/combobox-v2-docs.example.component.less": "AmCs",
        "./combobox-v2-docs/combobox-v2-docs.example.component.ts": "VQ+K",
        "./combobox-v2-error/combobox-v2-error.example.component.html": "7RT0",
        "./combobox-v2-error/combobox-v2-error.example.component.ts": "vh0p",
        "./combobox-v2-getting-value/combobox-v2-getting-value.example.component.html": "eaNp",
        "./combobox-v2-getting-value/combobox-v2-getting-value.example.component.ts": "nRMg",
        "./combobox-v2-grouped-options/combobox-v2-grouped-options.example.component.html": "2cql",
        "./combobox-v2-grouped-options/combobox-v2-grouped-options.example.component.ts": "uNRc",
        "./combobox-v2-inline/combobox-v2-inline.example.component.html": "dVHB",
        "./combobox-v2-inline/combobox-v2-inline.example.component.ts": "vL/x",
        "./combobox-v2-multiselect/combobox-v2-multiselect.example.component.html": "ZIR1",
        "./combobox-v2-multiselect/combobox-v2-multiselect.example.component.less": "rY15",
        "./combobox-v2-multiselect/combobox-v2-multiselect.example.component.ts": "oJO8",
        "./combobox-v2-options-changed/combobox-v2-options-changed.example.component.html": "X++5",
        "./combobox-v2-options-changed/combobox-v2-options-changed.example.component.ts": "rdzx",
        "./combobox-v2-overlay-config/combobox-v2-overlay-config.example.component.html": "sgey",
        "./combobox-v2-overlay-config/combobox-v2-overlay-config.example.component.ts": "1bJa",
        "./combobox-v2-reactive-form-field/combobox-v2-reactive-form-field.example.component.html": "8QfD",
        "./combobox-v2-reactive-form-field/combobox-v2-reactive-form-field.example.component.ts": "G/AQ",
        "./combobox-v2-remove-value/combobox-v2-remove-value.example.component.html": "UJU6",
        "./combobox-v2-remove-value/combobox-v2-remove-value.example.component.ts": "Nd3F",
        "./combobox-v2-setting-value/combobox-v2-setting-value.example.component.html": "1Idt",
        "./combobox-v2-setting-value/combobox-v2-setting-value.example.component.ts": "Dfbc",
        "./combobox-v2-styling/combobox-v2-styling.example.component.html": "jh5C",
        "./combobox-v2-styling/combobox-v2-styling.example.component.less": "Jg4y",
        "./combobox-v2-styling/combobox-v2-styling.example.component.ts": "0Riz",
        "./combobox-v2-test/combobox-v2-test.example.component.html": "927l",
        "./combobox-v2-test/combobox-v2-test.example.component.less": "pQWV",
        "./combobox-v2-test/combobox-v2-test.example.component.ts": "2aiT",
        "./combobox-v2-typeahead/combobox-v2-typeahead.example.component.html": "DWcQ",
        "./combobox-v2-typeahead/combobox-v2-typeahead.example.component.ts": "NvzZ",
        "./combobox-v2-virtual-scroll/combobox-v2-virtual-scroll.example.component.html": "KD3D",
        "./combobox-v2-virtual-scroll/combobox-v2-virtual-scroll.example.component.ts": "eGYR",
        "./combobox-v2.module.ts": "Tr0+",
        "./index.ts": "ianl"
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
      webpackContext.id = "O5V+";
      /***/
    },

    /***/
    "O8c5":
    /*!***********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-setting-value/combobox-v2-setting-value.example.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: ComboboxV2SettingValueExampleComponent */

    /***/
    function O8c5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2SettingValueExampleComponent", function () {
        return ComboboxV2SettingValueExampleComponent;
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


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");

      function ComboboxV2SettingValueExampleComponent_nui_select_v2_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2);
        }
      }

      function ComboboxV2SettingValueExampleComponent_nui_select_v2_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3);
        }
      }

      var ComboboxV2SettingValueExampleComponent = /*#__PURE__*/function () {
        function ComboboxV2SettingValueExampleComponent() {
          _classCallCheck(this, ComboboxV2SettingValueExampleComponent);

          this.items = Array.from({
            length: 50
          }).map(function (_, i) {
            return $localize(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["Item ", ""])), i);
          });
          this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        }

        _createClass(ComboboxV2SettingValueExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.comboboxControl.setValue(this.items[1]);
          }
        }]);

        return ComboboxV2SettingValueExampleComponent;
      }();

      ComboboxV2SettingValueExampleComponent.ɵfac = function ComboboxV2SettingValueExampleComponent_Factory(t) {
        return new (t || ComboboxV2SettingValueExampleComponent)();
      };

      ComboboxV2SettingValueExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ComboboxV2SettingValueExampleComponent,
        selectors: [["nui-combobox-v2-setting-value-example"]],
        hostAttrs: [1, "combobox-container"],
        decls: 14,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_SETTING_VALUE_COMBOBOX_V2_SETTING_VALUE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
            i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_SETTING_VALUE_COMBOBOX_V2_SETTING_VALUE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_SETTING_VALUE_COMBOBOX_V2_SETTING_VALUE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Select Item");
            i18n_2 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_SETTING_VALUE_COMBOBOX_V2_SETTING_VALUE_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          return [["placeholder", i18n_0, 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", i18n_2, 3, "formControl"], [3, "value"]];
        },
        template: function ComboboxV2SettingValueExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Setting value using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " input");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-combobox-v2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ComboboxV2SettingValueExampleComponent_nui_select_v2_option_6_Template, 2, 2, "nui-select-v2-option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Setting value using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "FormControl");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nui-combobox-v2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ComboboxV2SettingValueExampleComponent_nui_select_v2_option_13_Template, 2, 2, "nui-select-v2-option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.items[0]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.comboboxControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "OWSK":
    /*!*******************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-multiselect/combobox-v2-multiselect.example.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: ComboboxV2MultiselectExampleComponent */

    /***/
    function OWSK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2MultiselectExampleComponent", function () {
        return ComboboxV2MultiselectExampleComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_chips_chip_chip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/chips/chip/chip.component */
      "PEYr");
      /* harmony import */


      var _src_lib_select_v2_mark_as_selected_item_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/mark-as-selected-item.directive */
      "2vPf");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");

      function ComboboxV2MultiselectExampleComponent_nui_chip_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-chip", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("remove", function ComboboxV2MultiselectExampleComponent_nui_chip_3_Template_nui_chip_remove_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var option_r3 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            return _r0.deselectItem(option_r3);
          })("mouseup", function ComboboxV2MultiselectExampleComponent_nui_chip_3_Template_nui_chip_mouseup_0_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", ctx_r1.convertToChip(option_r3));
        }
      }

      function ComboboxV2MultiselectExampleComponent_nui_select_v2_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-select-v2-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r7);
        }
      }

      var ComboboxV2MultiselectExampleComponent = /*#__PURE__*/function () {
        function ComboboxV2MultiselectExampleComponent() {
          _classCallCheck(this, ComboboxV2MultiselectExampleComponent);

          this.items = Array.from({
            length: 100
          }).map(function (_, i) {
            return $localize(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["Item ", ""])), i);
          });
          this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
          this.placeholder = $localize(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["Select Item"])));
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(ComboboxV2MultiselectExampleComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "convertToChip",
          value: function convertToChip(value) {
            return {
              label: value
            };
          }
        }, {
          key: "setModel",
          value: function setModel() {
            this.comboboxControl.setValue([$localize(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["Item 10"]))), $localize(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["Item 12"]))), $localize(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["Item 14"])))]);
          }
        }]);

        return ComboboxV2MultiselectExampleComponent;
      }();

      ComboboxV2MultiselectExampleComponent.ɵfac = function ComboboxV2MultiselectExampleComponent_Factory(t) {
        return new (t || ComboboxV2MultiselectExampleComponent)();
      };

      ComboboxV2MultiselectExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ComboboxV2MultiselectExampleComponent,
        selectors: [["nui-combobox-v2-multiselect-example"]],
        hostAttrs: [1, "combobox-container"],
        decls: 7,
        vars: 5,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_103164820180529136$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_MULTISELECT_COMBOBOX_V2_MULTISELECT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Set model");
            i18n_0 = MSG_EXTERNAL_103164820180529136$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_MULTISELECT_COMBOBOX_V2_MULTISELECT_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral([":\u241Fb0a98d3d9e4cac8d58b407e56eeaaf67681e9dfb\u241F103164820180529136:Set model"])));
          }

          return [[3, "placeholder", "formControl", "multiselect"], ["combobox", ""], ["selectedItems", ""], ["nuiMarkAsSelectedItem", "", "class", "ml-2", "closeButtonTooltip", "Remove", 3, "item", "remove", "mouseup", 4, "ngFor", "ngForOf"], [3, "value", 4, "ngFor", "ngForOf"], ["nui-button", "", "type", "button", "displayStyle", "action", 3, "click"], i18n_0, ["nuiMarkAsSelectedItem", "", "closeButtonTooltip", "Remove", 1, "ml-2", 3, "item", "remove", "mouseup"], [3, "value"], [1, "mr-3", 3, "nuiComboboxV2OptionHighlight"]];
        },
        template: function ComboboxV2MultiselectExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ComboboxV2MultiselectExampleComponent_nui_chip_3_Template, 1, 1, "nui-chip", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ComboboxV2MultiselectExampleComponent_nui_select_v2_option_4_Template, 2, 2, "nui-select-v2-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ComboboxV2MultiselectExampleComponent_Template_button_click_5_listener() {
              return ctx.setModel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](6, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _r0.selectedOptions.length ? "" : ctx.placeholder)("formControl", ctx.comboboxControl)("multiselect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r0 == null ? null : _r0.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_3__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _src_lib_chips_chip_chip_component__WEBPACK_IMPORTED_MODULE_6__["ChipComponent"], _src_lib_select_v2_mark_as_selected_item_directive__WEBPACK_IMPORTED_MODULE_7__["MarkAsSelectedItemDirective"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_8__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_9__["ComboboxV2OptionHighlightDirective"]],
        styles: [".active[_ngcontent-%COMP%] {\n  background-color: var(--nui-color-selected,rgba(0, 196, 210, 0.1));\n  outline: none;\n  z-index: 500;\n  box-shadow: inset 0 0 0 2px rgba(0, 196, 210, 0.5);\n}\nnui-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  cursor: pointer;\n  border-radius: 9px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJvYm94LXYyLW11bHRpc2VsZWN0LmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9jc3MtdmFyaWFibGVzLmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9mb2N1cy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDRUksa0VBQUE7RUNKQSxhQUFBO0VBQ0EsWUFBQTtFQVVBLGtEQUFBO0FGUEo7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJjb21ib2JveC12Mi1tdWx0aXNlbGVjdC5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIm51aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9jb21wb25lbnRzL2NvbWJvYm94LXYyLWFkZG9ucy5sZXNzXCI7XG5cbi5hY3RpdmUge1xuICAgIC5hY3RpdmUtaXRlbSgpO1xufVxuXG5udWktY2hpcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4iLCIuc2V0Q3NzVmFyaWFibGUoQHByb3BlcnR5LCBAdmFsdWUpe1xuICAgIEBldmFsdWF0ZWQgOiBcIkB7dmFsdWV9XCI7XG4gICAgLy90aGUgZG91YmxlIEAgZm9yY2VzIGEgaW5kaXJlY3Rpb24gZXZhbHVhdGlvbiwga2luZGEgbGlrZSBhIHBvaW50ZXJcbiAgICBAZmFsbGJhY2sgOiBAQGV2YWx1YXRlZDtcblxuICAgIEB7cHJvcGVydHl9OiB+XCJ2YXIoLS1Ae3ZhbHVlfSxAe2ZhbGxiYWNrfSlcIjtcbn1cbiIsIi5mb2N1cy1vdXRsaW5lLWJhc2UoKSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB6LWluZGV4OiBAemluZGV4LWFjdGl2ZTtcbn1cblxuLmZvY3VzLW91dGxpbmUoKSB7XG4gICAgLmZvY3VzLW91dGxpbmUtYmFzZSgpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIEBudWktbGluZS1tZWRpdW0gZmFkZShAbnVpLWNvbG9yLXNlbGVjdGVkLWNvbnRyYXN0LCA1MCUpO1xufVxuXG4uZm9jdXMtb3V0bGluZS1pbnNldCgpIHtcbiAgICAuZm9jdXMtb3V0bGluZS1iYXNlKCk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgQG51aS1saW5lLW1lZGl1bSBmYWRlKEBudWktY29sb3Itc2VsZWN0ZWQtY29udHJhc3QsIDUwJSk7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "SRBs":
    /*!*****************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-custom-typeahead/combobox-v2-custom-typeahead.example.component.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: ComboboxV2CustomTypeaheadExampleComponent */

    /***/
    function SRBs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2CustomTypeaheadExampleComponent", function () {
        return ComboboxV2CustomTypeaheadExampleComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");

      function ComboboxV2CustomTypeaheadExampleComponent_nui_select_v2_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-select-v2-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r2.name);
        }
      }

      var ComboboxV2CustomTypeaheadExampleComponent = /*#__PURE__*/function () {
        function ComboboxV2CustomTypeaheadExampleComponent() {
          _classCallCheck(this, ComboboxV2CustomTypeaheadExampleComponent);

          this.items = Array.from({
            length: 100
          }).map(function (_, i) {
            return {
              id: "value-".concat(i),
              name: $localize(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["Item ", ""])), i)
            };
          });
          this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        }

        _createClass(ComboboxV2CustomTypeaheadExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.filteredItems$ = this.comboboxControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (value) {
              return (value === null || value === void 0 ? void 0 : value.name) || value;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (name) {
              return name ? _this4.filterItems(name) : _this4.items.slice();
            }));
          }
        }, {
          key: "displayFn",
          value: function displayFn(item) {
            return (item === null || item === void 0 ? void 0 : item.name) || "";
          }
        }, {
          key: "filterItems",
          value: function filterItems(value) {
            var filterValue = value.toLowerCase();
            return this.items.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }]);

        return ComboboxV2CustomTypeaheadExampleComponent;
      }();

      ComboboxV2CustomTypeaheadExampleComponent.ɵfac = function ComboboxV2CustomTypeaheadExampleComponent_Factory(t) {
        return new (t || ComboboxV2CustomTypeaheadExampleComponent)();
      };

      ComboboxV2CustomTypeaheadExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ComboboxV2CustomTypeaheadExampleComponent,
        selectors: [["nui-combobox-v2-custom-typeahead-example"]],
        hostAttrs: [1, "combobox-container"],
        decls: 4,
        vars: 6,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_CUSTOM_TYPEAHEAD_COMBOBOX_V2_CUSTOM_TYPEAHEAD_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
            i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_CUSTOM_TYPEAHEAD_COMBOBOX_V2_CUSTOM_TYPEAHEAD_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          return [["placeholder", i18n_0, 3, "formControl", "displayWith", "isTypeaheadEnabled"], ["combobox", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "nuiComboboxV2OptionHighlight"]];
        },
        template: function ComboboxV2CustomTypeaheadExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ComboboxV2CustomTypeaheadExampleComponent_nui_select_v2_option_2_Template, 2, 2, "nui-select-v2-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.comboboxControl)("displayWith", ctx.displayFn)("isTypeaheadEnabled", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx.filteredItems$));
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_3__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_5__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_6__["ComboboxV2OptionHighlightDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Tr0+":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2.module.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tr0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { ScrollingModule } from \"@angular/cdk/scrolling\";\nimport { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiChipsModule,\n    NuiDialogModule,\n    NuiDividerModule,\n    NuiDocsModule,\n    NuiFormFieldModule,\n    NuiIconModule,\n    NuiMenuModule,\n    NuiMessageModule,\n    NuiOverlayAdditionsModule,\n    NuiOverlayModule,\n    NuiPopoverModule,\n    NuiSelectModule,\n    NuiSelectV2Module,\n    NuiSwitchModule,\n    NuiValidationMessageModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    ComboboxV2BasicExampleComponent,\n    ComboboxV2CreateOptionExampleComponent,\n    ComboboxV2CreateOptionMultiselectExampleComponent,\n    ComboboxV2CustomControlExampleComponent,\n    ComboboxV2CustomizeOptionsExampleComponent,\n    ComboboxV2CustomTypeaheadExampleComponent,\n    ComboboxV2DisabledExampleComponent,\n    ComboboxV2DocsComponent,\n    ComboboxV2ErrorExampleComponent,\n    ComboboxV2GettingValueExampleComponent,\n    ComboboxV2GroupedOptionsExampleComponent,\n    ComboboxV2InlineExampleComponent,\n    ComboboxV2MultiselectExampleComponent,\n    ComboboxV2OpitionsChangedExampleComponent,\n    ComboboxV2OverlayConfigExampleComponent,\n    ComboboxV2ReactiveFormFieldExampleComponent,\n    ComboboxV2RemoveValueExampleComponent,\n    ComboboxV2SettingValueExampleComponent,\n    ComboboxV2StylingExampleComponent,\n    ComboboxV2TestExampleComponent,\n    ComboboxV2TypeaheadExampleComponent,\n    ComboboxV2VirtualScrollExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: ComboboxV2DocsComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"basic\",\n        component: ComboboxV2BasicExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"getting-value\",\n        component: ComboboxV2GettingValueExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"setting-value\",\n        component: ComboboxV2SettingValueExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"customize-options\",\n        component: ComboboxV2CustomizeOptionsExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"typeahead\",\n        component: ComboboxV2TypeaheadExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"grouped\",\n        component: ComboboxV2GroupedOptionsExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"remove-value\",\n        component: ComboboxV2RemoveValueExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"multiselect\",\n        component: ComboboxV2MultiselectExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"virtual-scroll\",\n        component: ComboboxV2VirtualScrollExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"overlay-config\",\n        component: ComboboxV2OverlayConfigExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"disabled\",\n        component: ComboboxV2DisabledExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"error\",\n        component: ComboboxV2ErrorExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"inline\",\n        component: ComboboxV2InlineExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"styling\",\n        component: ComboboxV2StylingExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"custom-typeahead\",\n        component: ComboboxV2CustomTypeaheadExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"reactive-form-field\",\n        component: ComboboxV2ReactiveFormFieldExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"create-option\",\n        component: ComboboxV2CreateOptionExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"create-option-multiselect\",\n        component: ComboboxV2CreateOptionMultiselectExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"custom-control\",\n        component: ComboboxV2CustomControlExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"options-changed\",\n        component: ComboboxV2OpitionsChangedExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"test\",\n        component: ComboboxV2TestExampleComponent,\n        data: {\n            \"srlc\": {\n                hideIndicator: true,\n            },\n        },\n    },\n];\n\n/** @ignore */\n@NgModule({\n    imports: [\n        NuiIconModule,\n        NuiChipsModule,\n        FormsModule,\n        ReactiveFormsModule,\n        NuiDividerModule,\n        NuiValidationMessageModule,\n        NuiFormFieldModule,\n        NuiMenuModule,\n        NuiPopoverModule,\n        NuiSwitchModule,\n        NuiSelectModule,\n        NuiSelectV2Module,\n        NuiMessageModule,\n        NuiButtonModule,\n        NuiDocsModule,\n        NuiOverlayModule,\n        NuiDialogModule,\n        ScrollingModule,\n        NuiOverlayAdditionsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        ComboboxV2BasicExampleComponent,\n        ComboboxV2DocsComponent,\n        ComboboxV2GroupedOptionsExampleComponent,\n        ComboboxV2RemoveValueExampleComponent,\n        ComboboxV2VirtualScrollExampleComponent,\n        ComboboxV2OverlayConfigExampleComponent,\n        ComboboxV2DisabledExampleComponent,\n        ComboboxV2ErrorExampleComponent,\n        ComboboxV2InlineExampleComponent,\n        ComboboxV2StylingExampleComponent,\n        ComboboxV2MultiselectExampleComponent,\n        ComboboxV2CustomTypeaheadExampleComponent,\n        ComboboxV2ReactiveFormFieldExampleComponent,\n        ComboboxV2CreateOptionExampleComponent,\n        ComboboxV2CreateOptionMultiselectExampleComponent,\n        ComboboxV2CustomizeOptionsExampleComponent,\n        ComboboxV2CustomControlExampleComponent,\n        ComboboxV2TestExampleComponent,\n        ComboboxV2OpitionsChangedExampleComponent,\n        ComboboxV2TypeaheadExampleComponent,\n        ComboboxV2GettingValueExampleComponent,\n        ComboboxV2SettingValueExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class ComboboxV2Module {\n}\n";
      /***/
    },

    /***/
    "U5Hd":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-custom-control/combobox-v2-custom-control.example.component.html ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function U5Hd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 [placeholder]=\"combobox.selectedOptions.length ? '' : placeholder\"\n                 [formControl]=\"comboboxControl\"\n                 [isTypeaheadEnabled]=\"true\"\n                 [multiselect]=\"true\"\n                 [manualDropdownControl]=\"true\"\n                 #combobox\n                 >\n    <ng-container selectedItems>\n            <nui-chip nuiMarkAsSelectedItem\n                      class=\"ml-2\"\n                      *ngFor=\"let option of combobox?.value\"\n                      closeButtonTooltip=\"Remove\"\n                      [item]=\"convertToChip(option)\"\n                      (remove)=\"onChipRemoved(option)\">\n            </nui-chip>\n    </ng-container>\n\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n        <div class=\"d-flex align-items-center\">\n            <span [nuiComboboxV2OptionHighlight]=\"item\"></span>\n        </div>\n    </nui-select-v2-option>\n</nui-combobox-v2>\n\n<div class=\"ml-4 d-flex w-75\">\n    <button #show\n            nui-button\n            type=\"button\"\n            class=\"mr-3\"\n            (click)=\"showList($event)\">Show</button>\n\n    <button #hide\n            nui-button\n            type=\"button\"\n            class=\"mr-3\"\n            (click)=\"hideList($event)\">Hide</button>\n\n    <button #toggle\n            nui-button\n            type=\"button\"\n            class=\"mr-3\"\n            (click)=\"toggleList($event)\">Toggle</button>\n\n    <div class=\"d-flex align-items-center\">\n        <nui-switch [(value)]=\"handleClicksOutside\" i18n>\n            Close on focus-out\n        </nui-switch>\n    </div>\n\n</div>\n";
      /***/
    },

    /***/
    "UJU6":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-remove-value/combobox-v2-remove-value.example.component.html ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UJU6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder\n    [formControl]=\"comboboxControl\"\n    [isRemoveValueEnabled]=\"false\"\n    #combobox>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n        <span [nuiComboboxV2OptionHighlight]=\"item\"></span>\n    </nui-select-v2-option>\n</nui-combobox-v2>\n\n";
      /***/
    },

    /***/
    "VQ+K":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-docs/combobox-v2-docs.example.component.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VQK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-combobox-v2-docs-example\",\n    templateUrl: \"./combobox-v2-docs.example.component.html\",\n    styleUrls: [\"combobox-v2-docs.example.component.less\"],\n})\nexport class ComboboxV2DocsComponent {\n    public scrollTo($element: HTMLElement): void {\n        $element.scrollIntoView(true);\n        const scrolledY = window.scrollY;\n\n        if (scrolledY) {\n            window.scroll(0, scrolledY - 40);\n        }\n    }\n}\n";
      /***/
    },

    /***/
    "W/8Q":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-create-option/combobox-v2-create-option.example.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function W8Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder\n    [formControl]=\"comboboxControl\"\n    #combobox>\n    <nui-select-v2-option *ngFor=\"let option of options\" [value]=\"option\">\n        <div class=\"d-flex align-items-center\">\n            <span [nuiComboboxV2OptionHighlight]=\"option\"></span>\n        </div>\n    </nui-select-v2-option>\n\n    <nui-overlay-item *ngIf=\"combobox.canCreateOption | async\" class=\"nui-combobox-v2__create-option\" (click)=\"createOption(combobox.inputValue)\">\n        Create option \"{{combobox.inputValue}}\"\n    </nui-overlay-item>\n\n    <div *ngIf=\"combobox.searchEmpty | async\" class=\"nui-combobox-v2__empty-search\" i18n>No other existing item available</div>\n</nui-combobox-v2>\n";
      /***/
    },

    /***/
    "WshB":
    /*!***********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-getting-value/combobox-v2-getting-value.example.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: ComboboxV2GettingValueExampleComponent */

    /***/
    function WshB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2GettingValueExampleComponent", function () {
        return ComboboxV2GettingValueExampleComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");

      var _c0 = ["comboboxValueSelectedExample"];
      var _c1 = ["comboboxValueChangedExample"];

      function ComboboxV2GettingValueExampleComponent_nui_select_v2_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-select-v2-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6);
        }
      }

      function ComboboxV2GettingValueExampleComponent_nui_select_v2_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-select-v2-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7);
        }
      }

      function ComboboxV2GettingValueExampleComponent_nui_select_v2_option_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-select-v2-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8);
        }
      }

      var ComboboxV2GettingValueExampleComponent = /*#__PURE__*/function () {
        function ComboboxV2GettingValueExampleComponent() {
          _classCallCheck(this, ComboboxV2GettingValueExampleComponent);

          this.items = Array.from({
            length: 50
          }).map(function (_, i) {
            return $localize(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["Item ", ""])), i);
          });
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(ComboboxV2GettingValueExampleComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this5 = this;

            this.comboboxValueSelectedExample.valueSelected.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (value) {
              return _this5.comboboxValueSelectedValue = value;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe();
            this.comboboxValueChangedExample.valueChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (value) {
              return _this5.comboboxValueChangedValue = value;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe();
          }
        }]);

        return ComboboxV2GettingValueExampleComponent;
      }();

      ComboboxV2GettingValueExampleComponent.ɵfac = function ComboboxV2GettingValueExampleComponent_Factory(t) {
        return new (t || ComboboxV2GettingValueExampleComponent)();
      };

      ComboboxV2GettingValueExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: ComboboxV2GettingValueExampleComponent,
        selectors: [["nui-combobox-v2-getting-value-example"]],
        viewQuery: function ComboboxV2GettingValueExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.comboboxValueSelectedExample = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.comboboxValueChangedExample = _t.first);
          }
        },
        hostAttrs: [1, "combobox-container"],
        decls: 29,
        vars: 6,
        consts: function consts() {
          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_GETTING_VALUE_COMBOBOX_V2_GETTING_VALUE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Select Item");
            i18n_2 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_GETTING_VALUE_COMBOBOX_V2_GETTING_VALUE_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_GETTING_VALUE_COMBOBOX_V2_GETTING_VALUE_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Select Item");
            i18n_4 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_GETTING_VALUE_COMBOBOX_V2_GETTING_VALUE_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_GETTING_VALUE_COMBOBOX_V2_GETTING_VALUE_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Select Item");
            i18n_6 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_GETTING_VALUE_COMBOBOX_V2_GETTING_VALUE_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          return [["placeholder", i18n_2], ["comboboxValueExample", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "my-3"], ["placeholder", i18n_4], ["comboboxValueSelectedExample", ""], ["placeholder", i18n_6], ["comboboxValueChangedExample", ""], [3, "value"]];
        },
        template: function ComboboxV2GettingValueExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Accessing value using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ComboboxV2GettingValueExampleComponent_nui_select_v2_option_6_Template, 2, 2, "nui-select-v2-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Accessing value using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "valueSelected");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " output");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "nui-combobox-v2", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ComboboxV2GettingValueExampleComponent_nui_select_v2_option_16_Template, 2, 2, "nui-select-v2-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Accessing value using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "valueChanged");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " output");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "nui-combobox-v2", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ComboboxV2GettingValueExampleComponent_nui_select_v2_option_26_Template, 2, 2, "nui-select-v2-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("You selected: ", _r0.value, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("You selected: ", ctx.comboboxValueSelectedValue, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("You typed: ", ctx.comboboxValueChangedValue, "");
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_6__["SelectV2OptionComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "X++5":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-options-changed/combobox-v2-options-changed.example.component.html ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>Value: {{combobox.value}}</p>\n<p>FormControl.value: {{comboboxControl.value}}</p>\n<nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder\n    [formControl]=\"comboboxControl\"\n    #combobox>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n        <span [nuiComboboxV2OptionHighlight]=\"item\"></span>\n    </nui-select-v2-option>\n</nui-combobox-v2>\n\n<button nui-button type=\"button\" displayStyle=\"action\" i18n (click)=\"setItems(0)\">Set items: 1, 2, 3, 4</button>\n<button nui-button type=\"button\" displayStyle=\"action\" i18n (click)=\"setItems(1)\">Set items: 3, 4, 5, 6</button>\n\n<nui-divider size=\"medium\"></nui-divider>\n\n<p>Value: {{multiselect.value}}</p>\n<p>FormControl.value: {{multiselect.value}}</p>\n<nui-combobox-v2 [formControl]=\"multiselectControl\"\n    [multiselect]=\"true\"\n    #multiselect>\n\n    <ng-container selectedItems>\n        <nui-chip nuiMarkAsSelectedItem\n                  class=\"ml-2\"\n                  *ngFor=\"let option of multiselect?.value\"\n                  closeButtonTooltip=\"Remove\"\n                  [item]=\"convertToChip(option)\"\n                  (remove)=\"multiselect.deselectItem(option)\"\n                  (mouseup)=\"$event.stopPropagation()\">\n        </nui-chip>\n    </ng-container>\n\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n        <span [nuiComboboxV2OptionHighlight]=\"item\"></span>\n    </nui-select-v2-option>\n\n</nui-combobox-v2>\n<button nui-button type=\"button\" displayStyle=\"action\" i18n (click)=\"setMultiselectItems(0)\">Set items: 1, 2, 3, 4</button>\n<button nui-button type=\"button\" displayStyle=\"action\" i18n (click)=\"setMultiselectItems(1)\">Set items: 3, 4, 5, 6</button>\n";
      /***/
    },

    /***/
    "Xzca":
    /*!***********************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-reactive-form-field/combobox-v2-reactive-form-field.example.component.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: ComboboxV2ReactiveFormFieldExampleComponent */

    /***/
    function Xzca(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2ReactiveFormFieldExampleComponent", function () {
        return ComboboxV2ReactiveFormFieldExampleComponent;
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


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/form-field/form-field.component */
      "L5T1");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/validation-message/validation-message.component */
      "Dm7Q");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");

      function ComboboxV2ReactiveFormFieldExampleComponent_nui_select_v2_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r2);
        }
      }

      var ComboboxV2ReactiveFormFieldExampleComponent = /*#__PURE__*/function () {
        function ComboboxV2ReactiveFormFieldExampleComponent(formBuilder) {
          _classCallCheck(this, ComboboxV2ReactiveFormFieldExampleComponent);

          this.formBuilder = formBuilder;
          this.icons = ["check", "email", "execute"];
          this.items = Array.from({
            length: 100
          }).map(function (_, i) {
            return $localize(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["Item ", ""])), i);
          });
        }

        _createClass(ComboboxV2ReactiveFormFieldExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fancyForm = this.formBuilder.group({
              combobox: this.formBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
            });
          }
        }]);

        return ComboboxV2ReactiveFormFieldExampleComponent;
      }();

      ComboboxV2ReactiveFormFieldExampleComponent.ɵfac = function ComboboxV2ReactiveFormFieldExampleComponent_Factory(t) {
        return new (t || ComboboxV2ReactiveFormFieldExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      ComboboxV2ReactiveFormFieldExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ComboboxV2ReactiveFormFieldExampleComponent,
        selectors: [["nui-combobox-v2-reactive-form-field-example"]],
        hostAttrs: [1, "combobox-container"],
        decls: 7,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4057674572904126532$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_REACTIVE_FORM_FIELD_COMBOBOX_V2_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Combobox");
            i18n_0 = MSG_EXTERNAL_4057674572904126532$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_REACTIVE_FORM_FIELD_COMBOBOX_V2_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral([":\u241F87214bc47494038695c4ef242cf20b73af4cd899\u241F4057674572904126532:Combobox"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_REACTIVE_FORM_FIELD_COMBOBOX_V2_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Some pretty long text with hint");
            i18n_2 = MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_REACTIVE_FORM_FIELD_COMBOBOX_V2_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral([":\u241Fe157d4486793f15c2f27fb0f1011c4e2781f6936\u241F3367498155686111134:Some pretty long text with hint"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_REACTIVE_FORM_FIELD_COMBOBOX_V2_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Select Item");
            i18n_4 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_REACTIVE_FORM_FIELD_COMBOBOX_V2_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_REACTIVE_FORM_FIELD_COMBOBOX_V2_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_7 = goog.getMsg(" This field is required ");
            i18n_6 = MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_REACTIVE_FORM_FIELD_COMBOBOX_V2_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral([":\u241Fedc4fcd264a4bd6edce2df03111f9dcd9e32a620\u241F3149237552980170786: This field is required "])));
          }

          return [[1, "nui-edge-definer", 3, "formGroup"], ["caption", i18n_0, "hint", i18n_2, "info", "text", 3, "control"], ["placeholder", i18n_4, "formControlName", "combobox"], ["combobox", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "required"], i18n_6, [3, "value"], [3, "nuiComboboxV2OptionHighlight"]];
        },
        template: function ComboboxV2ReactiveFormFieldExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-combobox-v2", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ComboboxV2ReactiveFormFieldExampleComponent_nui_select_v2_option_4_Template, 2, 2, "nui-select-v2-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-validation-message", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.fancyForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.fancyForm.controls["combobox"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__["FormFieldComponent"], _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_3__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__["ValidationMessageComponent"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_6__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_7__["ComboboxV2OptionHighlightDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "YNV4":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-basic/combobox-v2-basic.example.component.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YNV4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-combobox-v2-basic-example\",\n    templateUrl: \"combobox-v2-basic.example.component.html\",\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2BasicExampleComponent {\n    public items = Array.from({ length : 50 }).map((_, i) => $localize `Item ${i}`);\n}\n";
      /***/
    },

    /***/
    "Z+F+":
    /*!***********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-create-option/combobox-v2-create-option.example.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: ComboboxV2CreateOptionExampleComponent */

    /***/
    function ZF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2CreateOptionExampleComponent", function () {
        return ComboboxV2CreateOptionExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");
      /* harmony import */


      var _src_lib_overlay_overlay_item_overlay_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/overlay/overlay-item/overlay-item.component */
      "WpiY");

      var _c0 = ["combobox"];

      function ComboboxV2CreateOptionExampleComponent_nui_select_v2_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", option_r4);
        }
      }

      function ComboboxV2CreateOptionExampleComponent_nui_overlay_item_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-overlay-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2CreateOptionExampleComponent_nui_overlay_item_3_Template_nui_overlay_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx_r5.createOption(_r0.inputValue);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Create option \"", _r0.inputValue, "\" ");
        }
      }

      function ComboboxV2CreateOptionExampleComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ComboboxV2CreateOptionExampleComponent = /*#__PURE__*/function () {
        function ComboboxV2CreateOptionExampleComponent(domSanitizer) {
          _classCallCheck(this, ComboboxV2CreateOptionExampleComponent);

          this.domSanitizer = domSanitizer;
          this.options = Array.from({
            length: 3
          }).map(function (_, i) {
            return $localize(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["Item ", ""])), i);
          });
          this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        }

        _createClass(ComboboxV2CreateOptionExampleComponent, [{
          key: "createOption",
          value: function createOption(option) {
            var _a;

            var sanitizedOption = (_a = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, option)) === null || _a === void 0 ? void 0 : _a.trim();

            if (sanitizedOption) {
              this.options.push(sanitizedOption);
              this.comboboxControl.setValue(sanitizedOption);
            }
          }
        }]);

        return ComboboxV2CreateOptionExampleComponent;
      }();

      ComboboxV2CreateOptionExampleComponent.ɵfac = function ComboboxV2CreateOptionExampleComponent_Factory(t) {
        return new (t || ComboboxV2CreateOptionExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      ComboboxV2CreateOptionExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxV2CreateOptionExampleComponent,
        selectors: [["nui-combobox-v2-create-option-example"]],
        viewQuery: function ComboboxV2CreateOptionExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.combobox = _t.first);
          }
        },
        decls: 7,
        vars: 8,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_CREATE_OPTION_COMBOBOX_V2_CREATE_OPTION_EXAMPLE_COMPONENT_TS_2 = goog.getMsg("Select Item");
            i18n_1 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_CREATE_OPTION_COMBOBOX_V2_CREATE_OPTION_EXAMPLE_COMPONENT_TS_2;
          } else {
            i18n_1 = $localize(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          var i18n_3;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8369340007679658038$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_CREATE_OPTION_COMBOBOX_V2_CREATE_OPTION_EXAMPLE_COMPONENT_TS__4 = goog.getMsg("No other existing item available");
            i18n_3 = MSG_EXTERNAL_8369340007679658038$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_CREATE_OPTION_COMBOBOX_V2_CREATE_OPTION_EXAMPLE_COMPONENT_TS__4;
          } else {
            i18n_3 = $localize(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral([":\u241Fa13fa43d609e19a3057da12ceaba187af03aca4c\u241F8369340007679658038:No other existing item available"])));
          }

          return [["placeholder", i18n_1, 3, "formControl"], ["combobox", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "nui-combobox-v2__create-option", 3, "click", 4, "ngIf"], ["class", "nui-combobox-v2__empty-search", 4, "ngIf"], [3, "value"], [1, "d-flex", "align-items-center"], [3, "nuiComboboxV2OptionHighlight"], [1, "nui-combobox-v2__create-option", 3, "click"], [1, "nui-combobox-v2__empty-search"], i18n_3];
        },
        template: function ComboboxV2CreateOptionExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ComboboxV2CreateOptionExampleComponent_nui_select_v2_option_2_Template, 3, 2, "nui-select-v2-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ComboboxV2CreateOptionExampleComponent_nui_overlay_item_3_Template, 2, 1, "nui-overlay-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ComboboxV2CreateOptionExampleComponent_div_5_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.comboboxControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, _r0.canCreateOption));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, _r0.searchEmpty));
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_6__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_7__["ComboboxV2OptionHighlightDirective"], _src_lib_overlay_overlay_item_overlay_item_component__WEBPACK_IMPORTED_MODULE_8__["OverlayItemComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    "ZIR1":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-multiselect/combobox-v2-multiselect.example.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZIR1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 [placeholder]=\"combobox.selectedOptions.length ? '' : placeholder\"\n                 [formControl]=\"comboboxControl\"\n                 [multiselect]=\"true\"\n                 #combobox\n>\n\n    <ng-container selectedItems>\n        <nui-chip nuiMarkAsSelectedItem\n                  class=\"ml-2\"\n                  *ngFor=\"let option of combobox?.value\"\n                  closeButtonTooltip=\"Remove\"\n                  [item]=\"convertToChip(option)\"\n                  (remove)=\"combobox.deselectItem(option)\"\n                  (mouseup)=\"$event.stopPropagation()\">\n        </nui-chip>\n    </ng-container>\n\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n        <span class=\"mr-3\" [nuiComboboxV2OptionHighlight]=\"item\"></span>\n    </nui-select-v2-option>\n\n</nui-combobox-v2>\n\n<button nui-button type=\"button\" displayStyle=\"action\" i18n (click)=\"setModel()\">Set model</button>\n";
      /***/
    },

    /***/
    "ZwzC":
    /*!*****************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-docs/combobox-v2-docs.example.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ComboboxV2DocsComponent */

    /***/
    function ZwzC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2DocsComponent", function () {
        return ComboboxV2DocsComponent;
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


      var _combobox_v2_basic_combobox_v2_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../combobox-v2-basic/combobox-v2-basic.example.component */
      "DD0J");
      /* harmony import */


      var _combobox_v2_getting_value_combobox_v2_getting_value_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../combobox-v2-getting-value/combobox-v2-getting-value.example.component */
      "WshB");
      /* harmony import */


      var _combobox_v2_setting_value_combobox_v2_setting_value_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../combobox-v2-setting-value/combobox-v2-setting-value.example.component */
      "O8c5");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");
      /* harmony import */


      var _combobox_v2_typeahead_combobox_v2_typeahead_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../combobox-v2-typeahead/combobox-v2-typeahead.example.component */
      "fEv4");
      /* harmony import */


      var _combobox_v2_customize_options_combobox_v2_customize_options_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../combobox-v2-customize-options/combobox-v2-customize-options.example.component */
      "h39t");
      /* harmony import */


      var _combobox_v2_grouped_options_combobox_v2_grouped_options_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../combobox-v2-grouped-options/combobox-v2-grouped-options.example.component */
      "crPb");
      /* harmony import */


      var _combobox_v2_reactive_form_field_combobox_v2_reactive_form_field_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../combobox-v2-reactive-form-field/combobox-v2-reactive-form-field.example.component */
      "Xzca");
      /* harmony import */


      var _combobox_v2_multiselect_combobox_v2_multiselect_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../combobox-v2-multiselect/combobox-v2-multiselect.example.component */
      "OWSK");
      /* harmony import */


      var _combobox_v2_create_option_combobox_v2_create_option_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../combobox-v2-create-option/combobox-v2-create-option.example.component */
      "Z+F+");
      /* harmony import */


      var _combobox_v2_create_option_multiselect_combobox_v2_create_option_multiselect_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../combobox-v2-create-option-multiselect/combobox-v2-create-option-multiselect.example.component */
      "L9JI");
      /* harmony import */


      var _combobox_v2_virtual_scroll_combobox_v2_virtual_scroll_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../combobox-v2-virtual-scroll/combobox-v2-virtual-scroll.example.component */
      "D1aw");
      /* harmony import */


      var _combobox_v2_disabled_combobox_v2_disabled_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../combobox-v2-disabled/combobox-v2-disabled.example.component */
      "BR9L");
      /* harmony import */


      var _combobox_v2_error_combobox_v2_error_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../combobox-v2-error/combobox-v2-error.example.component */
      "+WWY");
      /* harmony import */


      var _combobox_v2_styling_combobox_v2_styling_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../combobox-v2-styling/combobox-v2-styling.example.component */
      "IavT");
      /* harmony import */


      var _combobox_v2_inline_combobox_v2_inline_example_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../combobox-v2-inline/combobox-v2-inline.example.component */
      "mtyX");
      /* harmony import */


      var _combobox_v2_remove_value_combobox_v2_remove_value_example_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../combobox-v2-remove-value/combobox-v2-remove-value.example.component */
      "1xtr");
      /* harmony import */


      var _combobox_v2_overlay_config_combobox_v2_overlay_config_example_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../combobox-v2-overlay-config/combobox-v2-overlay-config.example.component */
      "LLdU");
      /* harmony import */


      var _combobox_v2_custom_typeahead_combobox_v2_custom_typeahead_example_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../combobox-v2-custom-typeahead/combobox-v2-custom-typeahead.example.component */
      "SRBs");
      /* harmony import */


      var _combobox_v2_custom_control_combobox_v2_custom_control_example_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../combobox-v2-custom-control/combobox-v2-custom-control.example.component */
      "wHeG");

      var ComboboxV2DocsComponent = /*#__PURE__*/function () {
        function ComboboxV2DocsComponent() {
          _classCallCheck(this, ComboboxV2DocsComponent);
        }

        _createClass(ComboboxV2DocsComponent, [{
          key: "scrollTo",
          value: function scrollTo($element) {
            $element.scrollIntoView(true);
            var scrolledY = window.scrollY;

            if (scrolledY) {
              window.scroll(0, scrolledY - 40);
            }
          }
        }]);

        return ComboboxV2DocsComponent;
      }();

      ComboboxV2DocsComponent.ɵfac = function ComboboxV2DocsComponent_Factory(t) {
        return new (t || ComboboxV2DocsComponent)();
      };

      ComboboxV2DocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxV2DocsComponent,
        selectors: [["nui-combobox-v2-docs-example"]],
        decls: 556,
        vars: 14,
        consts: [["href", "../components/SelectV2Component.html", "target", "_blank"], [3, "click"], ["filenamePrefix", "combobox-v2-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "combobox-v2-getting-value", "exampleTitle", "Getting Value"], ["href", "https://angular.io/guide/reactive-forms#replacing-a-form-control-value", "target", "_blank"], ["filenamePrefix", "combobox-v2-setting-value", "exampleTitle", "Setting Value"], ["typeahead", ""], ["type", "info", 3, "allowDismiss"], ["href", "../pipes/HighlightPipe.html", "target", "_blank"], ["filenamePrefix", "combobox-v2-typeahead", "exampleTitle", "Typeahead"], ["filenamePrefix", "combobox-v2-customize-options", "exampleTitle", "Options Customization"], ["filenamePrefix", "combobox-v2-grouped-options", "exampleTitle", "Grouped Options Usage"], ["reactiveForms", ""], ["href", "../components/FormFieldComponent.html", "target", "_blank"], ["filenamePrefix", "combobox-v2-reactive-form-field", "exampleTitle", "Reactive Form Field"], ["href", "../components/ChipsComponent.html", "target", "_blank"], ["filenamePrefix", "combobox-v2-multiselect", "exampleTitle", "Multiselect"], ["type", "warning", 3, "allowDismiss"], ["filenamePrefix", "combobox-v2-create-option", "exampleTitle", "Create option"], ["filenamePrefix", "combobox-v2-create-option-multiselect", "exampleTitle", "Create option (Multiselect)"], ["href", "https://material.angular.io/cdk/scrolling/overview#virtual-scrolling", "target", "_blank"], ["href", "https://material.angular.io/cdk/scrolling/api"], ["filenamePrefix", "combobox-v2-virtual-scroll", "exampleTitle", "Virtual Scroll"], ["filenamePrefix", "combobox-v2-disabled", "exampleTitle", "Disabled Mode"], ["filenamePrefix", "combobox-v2-error", "exampleTitle", "Error State"], ["filenamePrefix", "combobox-v2-styling", "exampleTitle", "Styling"], ["filenamePrefix", "combobox-v2-inline", "exampleTitle", "Inline"], ["filenamePrefix", "combobox-v2-remove-value", "exampleTitle", "Value Removal"], ["href", "https://material.angular.io/cdk/overlay/api#OverlayConfig"], ["filenamePrefix", "combobox-v2-overlay-config", "exampleTitle", "Overlay configuration"], ["filenamePrefix", "combobox-v2-custom-typeahead", "exampleTitle", "Custom typeahead"], ["filenamePrefix", "combobox-v2-custom-control", "exampleTitle", "Combobox custom dropdown control"]],
        template: function ComboboxV2DocsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "<nui-combobox-v2>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " component allows users to select item(s) from a list.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Combobox works best when the options list is big enough and you need to filter it using typeahead. In case your list contains few items or you need to use custom input, consider using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select Component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "NuiSelectV2Module");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "To use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "<nui-combobox-v2>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ", wrap each of the options within a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "<select-v2-option>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " instance. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "<select-v2-option>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " has the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " input so that it's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "unique");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " for each option.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " You can use a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " or an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "object");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " as a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ". In some cases, e.g. if using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Grouped items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ", it's recommended to use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "object");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " and provide some id's, because you can have the same option title in the different groups and it's necessary to distinguish them somehow. Also, using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " may cause ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "i18n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " issues as far as the same value is used for model and displaying on the view.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Wrap all of the options inside a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "<nui-combobox-v2>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " instance as a content projection for the dropdown.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "You can put pretty much anything inside a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "<nui-combobox-v2>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " dropdown. For example, if you need the dropdown to display some info text, you can project ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "standard HTML");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " into the dropdown and it will be shown as ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "standard HTML");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " rather than a select option.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Highlighting of the searching string is the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " functionality, read more about it in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2DocsComponent_Template_a_click_78_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](124);

              return ctx.scrollTo(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Typeahead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " section.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "nui-combobox-v2-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Getting and setting the combobox value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Getting a Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "You can use the following ways to get a value from a combobox component:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Access the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " property on the component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Bind to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "valueSelected");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " output - emits the selected value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Bind to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "valueChanged");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " output - emits after ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " was changed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "nui-combobox-v2-getting-value-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Setting a Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " To set a value for a combobox, you can use either the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " input or the reactive form control ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "setValue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " method, to provide an option from the list.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "nui-combobox-v2-setting-value-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h2", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Typeahead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "<nui-combobox-v2>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " comes with built-in typeahead functionality so you can filter options in the list.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " To enable highlighting of the search string within the combobox options, you can use the default highlighting functionality provided by the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "nuiComboboxV2OptionHighlight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " directive:\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "<span [nuiComboboxV2OptionHighlight]=\"item\"><span>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " For more detail on how to get this working, take a look at the code inside the source expander of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " example above.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "nui-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " If you want more customization, you can implement custom highlighting via the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "HighlightPipe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " instead of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "nuiComboboxV2OptionHighlight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "nui-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " You can disable or use custom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "typeahead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " behavior if the default behavior doesn't meet your requirements. For that, please see the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Custom Typeahead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " section. As always, before implementing a custom behavior, it's important to consult with UX leadership. This will ensure that the desired behavior conforms to the Nova Design Language.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "nui-example-wrapper", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "nui-combobox-v2-typeahead-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Options Customization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " It's possible to use a custom template for the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "s in the list. You can use pretty much any layout for the options by putting the template inside a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "<select-v2-option>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " instance.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "nui-example-wrapper", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "nui-combobox-v2-customize-options-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Grouped Options");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " If you want to group options you can wrap them in a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "<nui-select-v2-option-group>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " instance. You can also provide a header for a group (optionally).\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " To use default styles for a header (as in the example below), apply ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, ".nui-select-v2-option-group--header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " class to the header.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "nui-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Technically you can use any template instead of, or in addition to, the header.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "nui-example-wrapper", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "nui-combobox-v2-grouped-options-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h2", null, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Using With Reactive Forms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " To use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "nui-combobox-v2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " with reactive forms, create a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "FormControl");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " that represents the form model. Then, bind ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "nui-combobox-v2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " to this form element.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "nui-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " It's recommended to use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "<nui-form-field>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " component as a wrapper if you are going to use validation, captions, labels, etc.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "nui-example-wrapper", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "nui-combobox-v2-reactive-form-field-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Multiselect");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " Combobox has a multiselect mode. To turn it on, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "multiselect");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " input to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, ". This allows the template you pass to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "inputTemplate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " input to render the selected items in a special container within the main input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "nui-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " It's possible to use another component for this feature in place of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "nui-chips");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, ". In fact, you can technically pass any template to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "inputTemplate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "nui-example-wrapper", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "nui-combobox-v2-multiselect-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Creating an Option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " You can create new options and add them to the list. To do that, just add the option to the initial list e.g. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "options.push(option);");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, ". To immediately set an added option as the selected value you can use either ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "FormControl.setValue(option);");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " or the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " input on the component.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " If you want to add options using the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Create Option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " button as in the example below, you should add the button as a content projection along with the options themselves.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "nui-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, " You can use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, ".nui-combobox-v2__create-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " class for the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Create Option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " block to have the same styles as the example.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "nui-combobox-v2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " comes with the following outputs which are useful when implementing the create-option functionality:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "canCreateOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " - emits ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " when there's no such option already");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "searchEmpty");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " - emits ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, " when there's no option that fits search term in the textbox. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "nui-message", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " This is valid only if the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "isTypeaheadEnabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " property is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, " (default behavior). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Single select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "nui-example-wrapper", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "nui-combobox-v2-create-option-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Multiselect");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "nui-example-wrapper", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "nui-combobox-v2-create-option-multiselect-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Virtual Scroll");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, " The options dropdown can use virtual scroll. For that, wrap the options list in a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "cdk-virtual-scroll-viewport");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, ". You can adjust virtual scroll container to your needs according to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "Virtual Scroll API");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "nui-message", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Warning:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, " All the items inside a dropdown ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "must");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, " be of the same height!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, " You should set ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "itemSize");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, " property of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "cdk-virtual-scroll-viewport");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, " to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "exact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, " value of an option height. Otherwise, some features may not work.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "nui-message", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " If using virtual scroll, custom typeahead must be used. See the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Custom Typeahead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, " section for how to implement that.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "nui-example-wrapper", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "nui-combobox-v2-virtual-scroll-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Disabled Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, " It is possible to disable either the entire ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "combobox-v2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, " or one or more ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "select-v2-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "s. To do that, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "isDisabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, " input to true on the appropriate component.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "nui-example-wrapper", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "nui-combobox-v2-disabled-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Error State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, " The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "isInErrorState");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, " input is used to set/change the visual validation state of the component. This can be used in custom situations in which you need to manually indicate that the component is in error state.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "nui-message", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, " If you want to use a combobox as a form field with validation, consider using the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "nui-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, " component. For information about that, see the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Using With Reactive Forms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, " section.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "nui-example-wrapper", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "nui-combobox-v2-error-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Styling");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, " To style the combobox's dropdown simply use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "overlayConfig");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, " input and fill in its ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "panelClass");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, " property with the global CSS class with the desired styles.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "nui-example-wrapper", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "nui-combobox-v2-styling-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Inline Display Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, " To put a combobox in inline display mode, add necessary styles to the component. For example, you can add bootstrap ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "d-inline-flex");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, " style.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "nui-example-wrapper", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "nui-combobox-v2-inline-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Value Removal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, " Combobox has a \"remove value\" button by default. If you don't want to use it, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "isRemoveValueEnabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, " input to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "nui-message", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, " You should probably add validation as in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboboxV2DocsComponent_Template_a_click_419_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](197);

              return ctx.scrollTo(_r1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "Reactive Forms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, " section.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "nui-example-wrapper", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](423, "nui-combobox-v2-remove-value-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Overlay Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, " To adjust ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "ComboboxComponent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "'s popup overlay properties, such as ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "height");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, " or other properties, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "overlayConfig");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, " input in accordance with the Angular CDK Overlay Config ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "interface");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "NOTE: in case you need to set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, " using the overlay config make sure you disable the automatic width synchronization, which is enabled by default. This can be done by setting the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "syncWidth");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, " input to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "nui-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, " Select-v2 and Combobox-v2 contain default ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "with-popup-styles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, " (you can import it ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "POPUP_STYLES_CLASS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, " from ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "@nova-ui/bits");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, ") class which styles the popup according to the Nova Design Language. Setting custom styles through the global classes using the `panelClass` will override the default styles of the overlay. If you want to preserve default overlay styles please consider adding the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "with-popup-styles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, " class when setting styles using the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "overlayConfig");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, ". Please see the example below. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "nui-example-wrapper", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](474, "nui-combobox-v2-overlay-config-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "Custom Typeahead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, " Combobox comes with default typeahead functionality. Nevertheless, it's possible to use custom typeahead logic. To do so, disable the default typeahead by setting the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "isTypeaheadEnabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, " input to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, ". Custom typeahead involves filtering the options list and updating it manually.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "nui-example-wrapper", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](486, "nui-combobox-v2-custom-typeahead-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "Custom Dropdown Control");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, " Similar to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "select-v2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, ", the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "manualDropdownControl");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, " boolean input gives you total control over opening and closing the dropdown. When set to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, ", the default behavior of the dropdown is blocked, and you can provide your own behavior.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "nui-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, " The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "clickOutsideDropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, " output can be used to close the dropdown manually on clicks outside both the host element and the dropdown.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "nui-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, " In order for keyboard navigation work as you open the dropdown you have to manually set focus to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "inputElement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, " in case you are triggering the dropdown outside the host element. For that, you can do ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "combobox.inputElement.nativeElement.focus()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "nui-example-wrapper", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](517, "nui-combobox-v2-custom-control-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "Keyboard interaction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "<nui-combobox-v2>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, " comes with built-in accessibility features:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "TAB/Shift+TAB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, " for focusing the component.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531, "ARROW UP/ARROW DOWN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, " for navigation inside an option list.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "PAGE UP/PAGE DOWN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, " for navigation inside the list to top/bottom.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "ENTER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, " to select an option.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "Multiselect only:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "BACKSPACE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, " to remove a selected item.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "LEFT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, " to navigate the selected items.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, "RIGHT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, " to navigate the selected items.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](143);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _combobox_v2_basic_combobox_v2_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxV2BasicExampleComponent"], _combobox_v2_getting_value_combobox_v2_getting_value_example_component__WEBPACK_IMPORTED_MODULE_3__["ComboboxV2GettingValueExampleComponent"], _combobox_v2_setting_value_combobox_v2_setting_value_example_component__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2SettingValueExampleComponent"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"], _combobox_v2_typeahead_combobox_v2_typeahead_example_component__WEBPACK_IMPORTED_MODULE_6__["ComboboxV2TypeaheadExampleComponent"], _combobox_v2_customize_options_combobox_v2_customize_options_example_component__WEBPACK_IMPORTED_MODULE_7__["ComboboxV2CustomizeOptionsExampleComponent"], _combobox_v2_grouped_options_combobox_v2_grouped_options_example_component__WEBPACK_IMPORTED_MODULE_8__["ComboboxV2GroupedOptionsExampleComponent"], _combobox_v2_reactive_form_field_combobox_v2_reactive_form_field_example_component__WEBPACK_IMPORTED_MODULE_9__["ComboboxV2ReactiveFormFieldExampleComponent"], _combobox_v2_multiselect_combobox_v2_multiselect_example_component__WEBPACK_IMPORTED_MODULE_10__["ComboboxV2MultiselectExampleComponent"], _combobox_v2_create_option_combobox_v2_create_option_example_component__WEBPACK_IMPORTED_MODULE_11__["ComboboxV2CreateOptionExampleComponent"], _combobox_v2_create_option_multiselect_combobox_v2_create_option_multiselect_example_component__WEBPACK_IMPORTED_MODULE_12__["ComboboxV2CreateOptionMultiselectExampleComponent"], _combobox_v2_virtual_scroll_combobox_v2_virtual_scroll_example_component__WEBPACK_IMPORTED_MODULE_13__["ComboboxV2VirtualScrollExampleComponent"], _combobox_v2_disabled_combobox_v2_disabled_example_component__WEBPACK_IMPORTED_MODULE_14__["ComboboxV2DisabledExampleComponent"], _combobox_v2_error_combobox_v2_error_example_component__WEBPACK_IMPORTED_MODULE_15__["ComboboxV2ErrorExampleComponent"], _combobox_v2_styling_combobox_v2_styling_example_component__WEBPACK_IMPORTED_MODULE_16__["ComboboxV2StylingExampleComponent"], _combobox_v2_inline_combobox_v2_inline_example_component__WEBPACK_IMPORTED_MODULE_17__["ComboboxV2InlineExampleComponent"], _combobox_v2_remove_value_combobox_v2_remove_value_example_component__WEBPACK_IMPORTED_MODULE_18__["ComboboxV2RemoveValueExampleComponent"], _combobox_v2_overlay_config_combobox_v2_overlay_config_example_component__WEBPACK_IMPORTED_MODULE_19__["ComboboxV2OverlayConfigExampleComponent"], _combobox_v2_custom_typeahead_combobox_v2_custom_typeahead_example_component__WEBPACK_IMPORTED_MODULE_20__["ComboboxV2CustomTypeaheadExampleComponent"], _combobox_v2_custom_control_combobox_v2_custom_control_example_component__WEBPACK_IMPORTED_MODULE_21__["ComboboxV2CustomControlExampleComponent"]],
        styles: ["[_nghost-%COMP%]   .combobox-container[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: disc;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJvYm94LXYyLWRvY3MuZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUMwQixTQUFBO0FBQzFCO0FBRkE7RUFHUSxrQkFBQTtBQUVSO0FBTEE7RUFNWSxnQkFBQTtBQUVaO0FBUkE7RUFVUSxlQUFBO0FBQ1IiLCJmaWxlIjoiY29tYm9ib3gtdjItZG9jcy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC5jb21ib2JveC1jb250YWluZXIgeyBtYXJnaW46IDA7IH07XG4gICAgdWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogZGlzYztcbiAgICAgICAgfVxuICAgIH1cbiAgICBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "crPb":
    /*!***************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-grouped-options/combobox-v2-grouped-options.example.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: ComboboxV2GroupedOptionsExampleComponent */

    /***/
    function crPb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2GroupedOptionsExampleComponent", function () {
        return ComboboxV2GroupedOptionsExampleComponent;
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


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_select_v2_option_group_select_v2_option_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option-group/select-v2-option-group.component */
      "2nXI");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");
      /* harmony import */


      var _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/divider/divider.component */
      "UGtJ");

      function ComboboxV2GroupedOptionsExampleComponent_ng_container_2_nui_select_v2_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r6.name);
        }
      }

      function ComboboxV2GroupedOptionsExampleComponent_ng_container_2_nui_divider_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nui-divider", 8);
        }
      }

      function ComboboxV2GroupedOptionsExampleComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-select-v2-option-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ComboboxV2GroupedOptionsExampleComponent_ng_container_2_nui_select_v2_option_4_Template, 2, 2, "nui-select-v2-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ComboboxV2GroupedOptionsExampleComponent_ng_container_2_nui_divider_5_Template, 1, 0, "nui-divider", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var itemGroup_r2 = ctx.$implicit;
          var last_r3 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](itemGroup_r2.header);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", itemGroup_r2.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !last_r3);
        }
      }

      var getRandomNumberTo = function getRandomNumberTo(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
      };

      var ComboboxV2GroupedOptionsExampleComponent = /*#__PURE__*/function () {
        function ComboboxV2GroupedOptionsExampleComponent() {
          _classCallCheck(this, ComboboxV2GroupedOptionsExampleComponent);

          this.items = Array.from({
            length: 10
          }).map(function (_, i) {
            return {
              header: $localize(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["Header line ", ""])), i + 1),
              items: Array.from({
                length: getRandomNumberTo(5)
              }).map(function (v, n) {
                return {
                  id: "value-".concat(i),
                  name: $localize(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["Item ", ""])), n + 1)
                };
              })
            };
          });
          this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        }

        _createClass(ComboboxV2GroupedOptionsExampleComponent, [{
          key: "displayFn",
          value: function displayFn(item) {
            return (item === null || item === void 0 ? void 0 : item.name) || "";
          }
        }]);

        return ComboboxV2GroupedOptionsExampleComponent;
      }();

      ComboboxV2GroupedOptionsExampleComponent.ɵfac = function ComboboxV2GroupedOptionsExampleComponent_Factory(t) {
        return new (t || ComboboxV2GroupedOptionsExampleComponent)();
      };

      ComboboxV2GroupedOptionsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ComboboxV2GroupedOptionsExampleComponent,
        selectors: [["nui-combobox-v2-grouped-options-example"]],
        hostAttrs: [1, "combobox-container"],
        decls: 3,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_GROUPED_OPTIONS_COMBOBOX_V2_GROUPED_OPTIONS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
            i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_GROUPED_OPTIONS_COMBOBOX_V2_GROUPED_OPTIONS_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          return [["placeholder", i18n_0, 3, "formControl", "displayWith"], ["combobox", ""], [4, "ngFor", "ngForOf"], [1, "nui-select-v2-option-group--header"], [3, "value", 4, "ngFor", "ngForOf"], ["size", "extra-small", 4, "ngIf"], [3, "value"], [3, "nuiComboboxV2OptionHighlight"], ["size", "extra-small"]];
        },
        template: function ComboboxV2GroupedOptionsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ComboboxV2GroupedOptionsExampleComponent_ng_container_2_Template, 6, 3, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.comboboxControl)("displayWith", ctx.displayFn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_select_v2_option_group_select_v2_option_group_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_5__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_6__["ComboboxV2OptionHighlightDirective"], _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_7__["DividerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "dVHB":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-inline/combobox-v2-inline.example.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dVHB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 class=\"d-inline-flex\"\n    placeholder=\"Select Item\" i18n-placeholder\n    style=\"margin-right: 15px;\"\n    #combobox>\n        <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n            <span class=\"mr-3\" [nuiComboboxV2OptionHighlight]=\"item\"></span>\n        </nui-select-v2-option>\n</nui-combobox-v2>\n\n<nui-combobox-v2 class=\"d-inline-flex\"\n    placeholder=\"Select Item\"\n    #combobox2>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n        <span class=\"mr-3\" [nuiComboboxV2OptionHighlight]=\"item\"></span>\n    </nui-select-v2-option>\n</nui-combobox-v2>\n";
      /***/
    },

    /***/
    "eGYR":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-virtual-scroll/combobox-v2-virtual-scroll.example.component.ts ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eGYR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { CdkVirtualScrollViewport } from \"@angular/cdk/scrolling\";\nimport { AfterViewInit, Component, HostListener, OnDestroy, ViewChild } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\nimport { ComboboxV2Component } from \"@nova-ui/bits\";\nimport { Observable, of, Subject } from \"rxjs\";\nimport { delay, takeUntil, tap } from \"rxjs/operators\";\n\nconst defaultContainerHeight: number = 300;\n\n@Component({\n    selector: \"nui-combobox-v2-virtual-scroll-example\",\n    templateUrl: \"combobox-v2-virtual-scroll.example.component.html\",\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2VirtualScrollExampleComponent implements OnDestroy, AfterViewInit {\n    public items = Array.from({ length: 100000 }).map((_, i) => $localize `Item ${i}`);\n    public comboboxControl = new FormControl();\n    public filteredItems: Observable<any[]> = of([...this.items]);\n    public containerHeight: number = defaultContainerHeight;\n\n    private destroy$: Subject<void> = new Subject();\n    private scrollOffset: number = 0;\n\n    @ViewChild(CdkVirtualScrollViewport) private viewport: CdkVirtualScrollViewport;\n    @ViewChild(ComboboxV2Component) private combobox: ComboboxV2Component;\n\n    @HostListener(\"click\")\n    public handleClick() {\n        if (this.viewport) {\n            this.viewport.scrollToOffset(this.scrollOffset);\n            this.viewport.checkViewportSize();\n        }\n    }\n\n    ngAfterViewInit(): void {\n        this.combobox.valueSelected.pipe(takeUntil(this.destroy$)).subscribe(() => {\n            this.scrollOffset = this.viewport.measureScrollOffset();\n        });\n\n        this.combobox.valueChanged.pipe(\n            delay(0),\n            tap(v => this.calculateContainerHeight()),\n            takeUntil(this.destroy$)\n        ).subscribe();\n    }\n\n    private calculateContainerHeight = (): void => {\n        if (this.combobox.inputValue && (this.viewport.measureRenderedContentSize() < defaultContainerHeight)) {\n            this.containerHeight = this.viewport.measureRenderedContentSize();\n            return;\n        }\n        this.containerHeight = defaultContainerHeight;\n    }\n\n    ngOnDestroy() {\n        this.destroy$.next();\n        this.destroy$.complete();\n    }\n}\n";
      /***/
    },

    /***/
    "eaNp":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-getting-value/combobox-v2-getting-value.example.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eaNp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<b>Accessing value using <code>value</code></b>\n<nui-combobox-v2 #comboboxValueExample placeholder=\"Select Item\" i18n-placeholder>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</nui-select-v2-option>\n</nui-combobox-v2>\n<p class=\"my-3\">You selected: {{ comboboxValueExample.value }}</p>\n\n<b>Accessing value using <code>valueSelected</code> output</b>\n<nui-combobox-v2 #comboboxValueSelectedExample placeholder=\"Select Item\" i18n-placeholder>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</nui-select-v2-option>\n</nui-combobox-v2>\n<p class=\"my-3\">You selected: {{ comboboxValueSelectedValue }}</p>\n\n<b>Accessing value using <code>valueChanged</code> output</b>\n<nui-combobox-v2 #comboboxValueChangedExample placeholder=\"Select Item\" i18n-placeholder>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</nui-select-v2-option>\n</nui-combobox-v2>\n<p class=\"my-3\">You typed: {{ comboboxValueChangedValue }}</p>\n";
      /***/
    },

    /***/
    "fEv4":
    /*!***************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-typeahead/combobox-v2-typeahead.example.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: ComboboxV2TypeaheadExampleComponent */

    /***/
    function fEv4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2TypeaheadExampleComponent", function () {
        return ComboboxV2TypeaheadExampleComponent;
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


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");

      function ComboboxV2TypeaheadExampleComponent_nui_select_v2_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r1);
        }
      }

      var ComboboxV2TypeaheadExampleComponent = function ComboboxV2TypeaheadExampleComponent() {
        _classCallCheck(this, ComboboxV2TypeaheadExampleComponent);

        this.items = Array.from({
          length: 50
        }).map(function (_, i) {
          return $localize(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["Item ", ""])), i);
        });
        this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
      };

      ComboboxV2TypeaheadExampleComponent.ɵfac = function ComboboxV2TypeaheadExampleComponent_Factory(t) {
        return new (t || ComboboxV2TypeaheadExampleComponent)();
      };

      ComboboxV2TypeaheadExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ComboboxV2TypeaheadExampleComponent,
        selectors: [["nui-combobox-v2-typeahead-example"]],
        hostAttrs: [1, "combobox-container"],
        decls: 2,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TYPEAHEAD_COMBOBOX_V2_TYPEAHEAD_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
            i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_TYPEAHEAD_COMBOBOX_V2_TYPEAHEAD_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          return [["placeholder", i18n_0, 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "nuiComboboxV2OptionHighlight"]];
        },
        template: function ComboboxV2TypeaheadExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-combobox-v2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ComboboxV2TypeaheadExampleComponent_nui_select_v2_option_1_Template, 2, 2, "nui-select-v2-option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.comboboxControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_5__["ComboboxV2OptionHighlightDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "fYMa":
    /*!*************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-create-option-multiselect/combobox-v2-create-option-multiselect.example.component.ts ***!
      \*************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fYMa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { ChangeDetectionStrategy, Component, SecurityContext } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\nimport { DomSanitizer } from \"@angular/platform-browser\";\n\n@Component({\n    selector: \"nui-combobox-v2-create-option-multiselect-example\",\n    templateUrl: \"combobox-v2-create-option-multiselect.example.component.html\",\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    styleUrls: [\"combobox-v2-create-option-multiselect.example.component.less\"],\n})\nexport class ComboboxV2CreateOptionMultiselectExampleComponent {\n    public options = Array.from({ length: 3 }).map((_, i) => $localize `Item ${i}`);\n\n    public comboboxControl = new FormControl();\n\n    constructor(private domSanitizer: DomSanitizer) {}\n\n    public createOption(optionName: string) {\n        const sanitizedOption = this.domSanitizer.sanitize(SecurityContext.HTML, optionName)?.trim();\n        if (sanitizedOption) {\n            this.options.push(sanitizedOption);\n            this.comboboxControl.setValue([...(this.comboboxControl.value || []), optionName]);\n        }\n    }\n\n    public convertToChip(value: string) {\n        return ({ label: value });\n    }\n}\n";
      /***/
    },

    /***/
    "h39t":
    /*!*******************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-customize-options/combobox-v2-customize-options.example.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: ComboboxV2CustomizeOptionsExampleComponent */

    /***/
    function h39t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2CustomizeOptionsExampleComponent", function () {
        return ComboboxV2CustomizeOptionsExampleComponent;
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


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icon.component */
      "45Bz");

      function ComboboxV2CustomizeOptionsExampleComponent_nui_select_v2_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", item_r2.icon);
        }
      }

      var ComboboxV2CustomizeOptionsExampleComponent = /*#__PURE__*/function () {
        function ComboboxV2CustomizeOptionsExampleComponent() {
          var _this6 = this;

          _classCallCheck(this, ComboboxV2CustomizeOptionsExampleComponent);

          this.icons = ["check", "email", "execute"];
          this.items = Array.from({
            length: 100
          }).map(function (_, i) {
            return {
              id: "value-".concat(i),
              name: $localize(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["Item ", ""])), i),
              icon: _this6.getRandomIcon()
            };
          });
          this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        }

        _createClass(ComboboxV2CustomizeOptionsExampleComponent, [{
          key: "displayFn",
          value: function displayFn(item) {
            return (item === null || item === void 0 ? void 0 : item.name) || "";
          }
        }, {
          key: "getRandomIcon",
          value: function getRandomIcon() {
            return this.icons[Math.round(Math.random() * 2)];
          }
        }]);

        return ComboboxV2CustomizeOptionsExampleComponent;
      }();

      ComboboxV2CustomizeOptionsExampleComponent.ɵfac = function ComboboxV2CustomizeOptionsExampleComponent_Factory(t) {
        return new (t || ComboboxV2CustomizeOptionsExampleComponent)();
      };

      ComboboxV2CustomizeOptionsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ComboboxV2CustomizeOptionsExampleComponent,
        selectors: [["nui-combobox-v2-customize-options-example"]],
        hostAttrs: [1, "combobox-container"],
        decls: 3,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_CUSTOMIZE_OPTIONS_COMBOBOX_V2_CUSTOMIZE_OPTIONS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
            i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_CUSTOMIZE_OPTIONS_COMBOBOX_V2_CUSTOMIZE_OPTIONS_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          return [["placeholder", i18n_0, 3, "formControl", "displayWith"], ["combobox", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mr-3", 3, "nuiComboboxV2OptionHighlight"], [3, "icon"]];
        },
        template: function ComboboxV2CustomizeOptionsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ComboboxV2CustomizeOptionsExampleComponent_nui_select_v2_option_2_Template, 3, 3, "nui-select-v2-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.comboboxControl)("displayWith", ctx.displayFn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_2__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_5__["ComboboxV2OptionHighlightDirective"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "ianl":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/index.ts ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function ianl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./combobox-v2-docs/combobox-v2-docs.example.component\";\nexport * from \"./combobox-v2-basic/combobox-v2-basic.example.component\";\nexport * from \"./combobox-v2-grouped-options/combobox-v2-grouped-options.example.component\";\nexport * from \"./combobox-v2-virtual-scroll/combobox-v2-virtual-scroll.example.component\";\nexport * from \"./combobox-v2-remove-value/combobox-v2-remove-value.example.component\";\nexport * from \"./combobox-v2-disabled/combobox-v2-disabled.example.component\";\nexport * from \"./combobox-v2-error/combobox-v2-error.example.component\";\nexport * from \"./combobox-v2-inline/combobox-v2-inline.example.component\";\nexport * from \"./combobox-v2-styling/combobox-v2-styling.example.component\";\nexport * from \"./combobox-v2-overlay-config/combobox-v2-overlay-config.example.component\";\nexport * from \"./combobox-v2-multiselect/combobox-v2-multiselect.example.component\";\nexport * from \"./combobox-v2-custom-typeahead/combobox-v2-custom-typeahead.example.component\";\nexport * from \"./combobox-v2-reactive-form-field/combobox-v2-reactive-form-field.example.component\";\nexport * from \"./combobox-v2-create-option/combobox-v2-create-option.example.component\";\nexport * from \"./combobox-v2-create-option-multiselect/combobox-v2-create-option-multiselect.example.component\";\nexport * from \"./combobox-v2-customize-options/combobox-v2-customize-options.example.component\";\nexport * from \"./combobox-v2-custom-control/combobox-v2-custom-control.example.component\";\nexport * from \"./combobox-v2-test/combobox-v2-test.example.component\";\nexport * from \"./combobox-v2-options-changed/combobox-v2-options-changed.example.component\";\nexport * from \"./combobox-v2-typeahead/combobox-v2-typeahead.example.component\";\nexport * from \"./combobox-v2-getting-value/combobox-v2-getting-value.example.component\";\nexport * from \"./combobox-v2-setting-value/combobox-v2-setting-value.example.component\";\n";
      /***/
    },

    /***/
    "jh5C":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-styling/combobox-v2-styling.example.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jh5C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder\n                 [overlayConfig]=\"config\"\n                 style=\"width: 50%;\"\n                 #combobox>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n        <span [nuiComboboxV2OptionHighlight]=\"item\"></span>\n    </nui-select-v2-option>\n</nui-combobox-v2>\n";
      /***/
    },

    /***/
    "mmgv":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-basic/combobox-v2-basic.example.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mmgv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{ item }}</nui-select-v2-option>\n</nui-combobox-v2>\n";
      /***/
    },

    /***/
    "mtyX":
    /*!*********************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-inline/combobox-v2-inline.example.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: ComboboxV2InlineExampleComponent */

    /***/
    function mtyX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2InlineExampleComponent", function () {
        return ComboboxV2InlineExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");

      function ComboboxV2InlineExampleComponent_nui_select_v2_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r4);
        }
      }

      function ComboboxV2InlineExampleComponent_nui_select_v2_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r5);
        }
      }

      var ComboboxV2InlineExampleComponent = function ComboboxV2InlineExampleComponent() {
        _classCallCheck(this, ComboboxV2InlineExampleComponent);

        this.items = Array.from({
          length: 100
        }).map(function (_, i) {
          return $localize(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["Item ", ""])), i);
        });
      };

      ComboboxV2InlineExampleComponent.ɵfac = function ComboboxV2InlineExampleComponent_Factory(t) {
        return new (t || ComboboxV2InlineExampleComponent)();
      };

      ComboboxV2InlineExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComboboxV2InlineExampleComponent,
        selectors: [["nui-combobox-v2-inline-example"]],
        hostAttrs: [1, "combobox-container"],
        decls: 6,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_INLINE_COMBOBOX_V2_INLINE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
            i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_INLINE_COMBOBOX_V2_INLINE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral([":\u241F42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c\u241F8325381706328570325:Select Item"])));
          }

          return [["placeholder", i18n_0, 1, "d-inline-flex", 2, "margin-right", "15px"], ["combobox", ""], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Select Item", 1, "d-inline-flex"], ["combobox2", ""], [3, "value"], [1, "mr-3", 3, "nuiComboboxV2OptionHighlight"]];
        },
        template: function ComboboxV2InlineExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ComboboxV2InlineExampleComponent_nui_select_v2_option_2_Template, 2, 2, "nui-select-v2-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-combobox-v2", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ComboboxV2InlineExampleComponent_nui_select_v2_option_5_Template, 2, 2, "nui-select-v2-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_1__["ComboboxV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_3__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2OptionHighlightDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "nHIs":
    /*!***************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-create-option-multiselect/combobox-v2-create-option-multiselect.example.component.less ***!
      \***************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nHIs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import (reference) \"nui-framework-variables\";\n@import (reference) \"../../../../../../src/styles/components/combobox-v2-addons.less\";\n\n:host {\n    nui-chip {\n        display: inline-flex;\n        cursor: pointer;\n        margin-bottom: 5px;\n        border-radius: 9px;\n    }\n\n    .active {\n        .active-item();\n    }\n}\n";
      /***/
    },

    /***/
    "nP3H":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-custom-control/combobox-v2-custom-control.example.component.ts ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nP3H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { AfterViewInit, Component, OnDestroy, ViewChild } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\nimport { ComboboxV2Component } from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\n\ninterface IExampleItem {\n    id: string;\n    name: string;\n}\n@Component({\n    selector: \"nui-combobox-v2-custom-control-example\",\n    templateUrl: \"combobox-v2-custom-control.example.component.html\",\n    styleUrls: [\"combobox-v2-custom-control.example.component.less\"],\n    host: { class: \"combobox-container d-flex\" },\n})\nexport class ComboboxV2CustomControlExampleComponent implements OnDestroy, AfterViewInit {\n    public items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);\n    public comboboxControl = new FormControl();\n    public placeholder: string = $localize `Select Item`;\n    public handleClicksOutside: boolean = false;\n\n    @ViewChild(\"combobox\") public combobox: ComboboxV2Component;\n\n    private destroy$: Subject<void> = new Subject();\n\n    public ngAfterViewInit() {\n        this.combobox.clickOutsideDropdown.subscribe(() => {\n            if (this.handleClicksOutside) { this.combobox.hideDropdown(); }\n        });\n    }\n\n    public ngOnDestroy() {\n        this.destroy$.next();\n        this.destroy$.complete();\n    }\n\n    public onChipRemoved(item: IExampleItem) {\n        this.combobox.deselectItem(item);\n    }\n\n    public convertToChip(value: IExampleItem) {\n        return ({ label: value });\n    }\n\n    public showList(event: Event): void {\n        event.stopPropagation();\n        this.combobox.showDropdown();\n        this.combobox.inputElement.nativeElement.focus();\n\n    }\n\n    public hideList(event: Event): void {\n        event.stopPropagation();\n        this.combobox.hideDropdown();\n    }\n\n    public toggleList(event: Event): void {\n        event.stopPropagation();\n        this.combobox.toggleDropdown();\n        this.combobox.inputElement.nativeElement.focus();\n    }\n}\n";
      /***/
    },

    /***/
    "nRMg":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-getting-value/combobox-v2-getting-value.example.component.ts ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nRMg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { AfterViewInit, Component, ViewChild } from \"@angular/core\";\nimport { ComboboxV2Component } from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\nimport { takeUntil, tap } from \"rxjs/operators\";\n\n@Component({\n    selector: \"nui-combobox-v2-getting-value-example\",\n    templateUrl: \"combobox-v2-getting-value.example.component.html\",\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2GettingValueExampleComponent implements AfterViewInit {\n    public items = Array.from({ length : 50 }).map((_, i) => $localize `Item ${i}`);\n    public comboboxValueSelectedValue: string;\n    public comboboxValueChangedValue: string;\n\n    @ViewChild(\"comboboxValueSelectedExample\") private comboboxValueSelectedExample: ComboboxV2Component;\n    @ViewChild(\"comboboxValueChangedExample\") private comboboxValueChangedExample: ComboboxV2Component;\n    private destroy$: Subject<any> = new Subject<any>();\n\n    ngAfterViewInit(): void {\n        this.comboboxValueSelectedExample.valueSelected.pipe(\n            tap(value => this.comboboxValueSelectedValue = value as string),\n            takeUntil(this.destroy$)\n        ).subscribe();\n\n        this.comboboxValueChangedExample.valueChanged.pipe(\n            tap(value => this.comboboxValueChangedValue = value as string),\n            takeUntil(this.destroy$)\n        ).subscribe();\n    }\n}\n";
      /***/
    },

    /***/
    "nl7e":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-create-option/combobox-v2-create-option.example.component.ts ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nl7e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { ChangeDetectionStrategy, Component, SecurityContext, ViewChild } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\nimport { DomSanitizer } from \"@angular/platform-browser\";\nimport { ComboboxV2Component } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-combobox-v2-create-option-example\",\n    templateUrl: \"combobox-v2-create-option.example.component.html\",\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ComboboxV2CreateOptionExampleComponent {\n    public options = Array.from({ length: 3 }).map((_, i) => $localize `Item ${i}`);\n    @ViewChild(\"combobox\") public combobox: ComboboxV2Component;\n\n    public comboboxControl = new FormControl();\n\n    constructor(private domSanitizer: DomSanitizer) {}\n\n    public createOption(option: string) {\n        const sanitizedOption = this.domSanitizer.sanitize(SecurityContext.HTML, option)?.trim();\n        if (sanitizedOption) {\n            this.options.push(sanitizedOption);\n            this.comboboxControl.setValue(sanitizedOption);\n        }\n    }\n}\n";
      /***/
    },

    /***/
    "nmQ0":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-disabled/combobox-v2-disabled.example.component.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nmQ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\n\ninterface IExampleItem {\n    id: string;\n    name: string;\n    disabled: boolean;\n}\n@Component({\n    selector: \"nui-combobox-v2-disabled-example\",\n    templateUrl: \"combobox-v2-disabled.example.component.html\",\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2DisabledExampleComponent {\n    public items: IExampleItem[] = Array.from({ length: 100 }).map((_, i) =>\n        ({\n            id: `value-${i}`,\n            name: $localize `Item ${i}`,\n            disabled: Boolean(Math.round(Math.random())),\n        }));\n    public comboboxControl = new FormControl();\n    public isComboboxDisabled = false;\n\n    public displayFn(item: IExampleItem): string {\n        return item?.name || \"\";\n    }\n}\n";
      /***/
    },

    /***/
    "oJO8":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-multiselect/combobox-v2-multiselect.example.component.ts ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oJO8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnDestroy } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\nimport { Subject } from \"rxjs\";\n\n@Component({\n    selector: \"nui-combobox-v2-multiselect-example\",\n    templateUrl: \"combobox-v2-multiselect.example.component.html\",\n    styleUrls: [\"combobox-v2-multiselect.example.component.less\"],\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2MultiselectExampleComponent implements OnDestroy {\n    public items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);\n    public comboboxControl = new FormControl();\n    public placeholder: string = $localize `Select Item`;\n\n    private destroy$: Subject<void> = new Subject();\n\n    ngOnDestroy() {\n        this.destroy$.next();\n        this.destroy$.complete();\n    }\n\n    public convertToChip(value: string) {\n        return ({ label: value });\n    }\n\n    public setModel() {\n        this.comboboxControl.setValue([\n            $localize `Item 10`,\n            $localize `Item 12`,\n            $localize `Item 14`,\n        ]);\n    }\n}\n";
      /***/
    },

    /***/
    "pQWV":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-test/combobox-v2-test.example.component.less ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pQWV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import (reference) \"nui-framework-variables\";\n@import (reference) \"components/combobox-v2-addons.less\";\n\n.active {\n    .active-item();\n}\n\nnui-chip {\n    display: inline-flex;\n    cursor: pointer;\n    margin-bottom: 5px;\n    border-radius: 9px;\n}\n\n.focus-drop {\n    height: 1px;\n    width: 1px;\n}\n";
      /***/
    },

    /***/
    "rY15":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-multiselect/combobox-v2-multiselect.example.component.less ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rY15(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import (reference) \"nui-framework-variables\";\n@import (reference) \"../../../../../../src/styles/components/combobox-v2-addons.less\";\n\n.active {\n    .active-item();\n}\n\nnui-chip {\n    display: inline-flex;\n    cursor: pointer;\n    border-radius: 9px;\n    margin-bottom: 5px;\n}\n";
      /***/
    },

    /***/
    "rdzx":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-options-changed/combobox-v2-options-changed.example.component.ts ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rdzx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-combobox-v2-options-changed-example\",\n    templateUrl: \"combobox-v2-options-changed.example.component.html\",\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2OpitionsChangedExampleComponent implements OnInit {\n    public items: string[] = [];\n    public multiselectItems: string[] = [];\n    private itemSet = [\n        [\n            $localize `Item 1`,\n            $localize `Item 2`,\n            $localize `Item 3`,\n            $localize `Item 4`,\n        ],\n        [\n            $localize `Item 3`,\n            $localize `Item 4`,\n            $localize `Item 5`,\n            $localize `Item 6`,\n        ],\n    ];\n    public comboboxControl = new FormControl();\n    public multiselectControl = new FormControl();\n\n    public ngOnInit() {\n        this.items = this.itemSet[0];\n        this.multiselectItems = this.itemSet[0];\n    }\n\n    public setItems(i: number) {\n        this.items = this.itemSet[i];\n    }\n\n    public setMultiselectItems(i: number) {\n        this.items = this.itemSet[i];\n    }\n\n    public convertToChip(value: string) {\n        return ({ label: value });\n    }\n}\n";
      /***/
    },

    /***/
    "sgey":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-overlay-config/combobox-v2-overlay-config.example.component.html ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sgey(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder\n                 [formControl]=\"comboboxControl\"\n                 [overlayConfig]=\"overlayConfig\"\n                 [syncWidth]=\"false\"\n                 #combobox>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n        <span [nuiComboboxV2OptionHighlight]=\"item\"></span>\n    </nui-select-v2-option>\n</nui-combobox-v2>\n";
      /***/
    },

    /***/
    "swIN":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-customize-options/combobox-v2-customize-options.example.component.html ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function swIN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-combobox-v2 placeholder=\"Select Item\" i18n-placeholder\n    [formControl]=\"comboboxControl\"\n    [displayWith]=\"displayFn\"\n    #combobox>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n        <span class=\"mr-3\" [nuiComboboxV2OptionHighlight]=\"item.name\"></span>\n        <nui-icon [icon]=\"item.icon\"></nui-icon>\n    </nui-select-v2-option>\n</nui-combobox-v2>\n";
      /***/
    },

    /***/
    "tN+o":
    /*!*********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-customize-options/combobox-v2-customize-options.example.component.ts ***!
      \*********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tNO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\n\ninterface IExampleItem {\n    id: string;\n    name: string;\n    icon: string;\n}\n@Component({\n    selector: \"nui-combobox-v2-customize-options-example\",\n    templateUrl: \"combobox-v2-customize-options.example.component.html\",\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2CustomizeOptionsExampleComponent {\n    public icons: any[] = [\"check\", \"email\", \"execute\"];\n    public items: IExampleItem[] = Array.from({ length: 100 }).map((_, i) =>\n        ({\n            id: `value-${i}`,\n            name: $localize `Item ${i}`,\n            icon: this.getRandomIcon(),\n        }));\n    public comboboxControl = new FormControl();\n\n    public displayFn(item: IExampleItem): string {\n        return item?.name || \"\";\n    }\n\n    private getRandomIcon() {\n        return this.icons[Math.round(Math.random() * 2)];\n    }\n}\n";
      /***/
    },

    /***/
    "uNRc":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-grouped-options/combobox-v2-grouped-options.example.component.ts ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uNRc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\nimport { ISelectGroup } from \"@nova-ui/bits\";\n\nconst getRandomNumberTo = (max: number) => Math.floor(Math.random() * Math.floor(max) + 1);\n\n@Component({\n    selector: \"nui-combobox-v2-grouped-options-example\",\n    templateUrl: \"combobox-v2-grouped-options.example.component.html\",\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2GroupedOptionsExampleComponent {\n    public items: ISelectGroup[] = Array.from({ length: 10 }).map((_, i) => ({\n        header: $localize `Header line ${i + 1}`,\n        items: Array.from({ length: getRandomNumberTo(5) }).map((v, n) => ({\n            id: `value-${i}`,\n            name: $localize `Item ${n + 1}`,\n        })),\n    }));\n    public comboboxControl = new FormControl();\n\n    public displayFn(item: any): string {\n        return item?.name || \"\";\n    }\n}\n";
      /***/
    },

    /***/
    "vL/x":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-inline/combobox-v2-inline.example.component.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vLX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-combobox-v2-inline-example\",\n    templateUrl: \"combobox-v2-inline.example.component.html\",\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2InlineExampleComponent {\n    public items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);\n}\n";
      /***/
    },

    /***/
    "vSxS":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-docs/combobox-v2-docs.example.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vSxS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>The <code>&lt;nui-combobox-v2&gt;</code> component allows users to select item(s) from a list.</p>\n<p>\n    Combobox works best when the options list is big enough and you need to filter it using typeahead.\n    In case your list contains few items or you need to use custom input, consider using\n    <a href=\"../components/SelectV2Component.html\" target=\"_blank\">Select Component</a>\n</p>\n\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiSelectV2Module</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>To use <code>&lt;nui-combobox-v2&gt;</code>, wrap each of the options within a <code>&lt;select-v2-option&gt;</code> instance.\n    <code>&lt;select-v2-option&gt;</code> has the <code>value</code> input so that it's <strong>unique</strong> for each\n    option.</p>\n\n<p>\n    You can use a <code>string</code> or an <code>object</code> as a\n    <code>value</code>.\n    In some cases, e.g. if using <em>Grouped items</em>, it's recommended\n    to use <code>object</code> and provide some id's, because you can have the same option title\n    in the different groups and it's necessary to distinguish them somehow.\n    Also, using <code>string</code> may cause <code>i18n</code> issues as far as the same value is used for model and displaying on the view.\n</p>\n\n<p>Wrap all of the options inside a <code>&lt;nui-combobox-v2&gt;</code> instance as a content\n    projection for the dropdown.</p>\n\n<p>You can put pretty much anything inside a\n    <code>&lt;nui-combobox-v2&gt;</code> dropdown. For example, if you need the dropdown to display some\n    info text, you can project <em>standard HTML</em> into the dropdown and it will be shown as <em>standard HTML</em>\n    rather than a select option.</p>\n\n<p>Highlighting of the searching string is the <b>default</b> functionality, read more about it in the <a (click)=\"scrollTo(typeahead)\">Typeahead</a> section.</p>\n\n<nui-example-wrapper filenamePrefix=\"combobox-v2-basic\" exampleTitle=\"Basic Usage\">\n    <nui-combobox-v2-basic-example></nui-combobox-v2-basic-example>\n</nui-example-wrapper>\n\n<h2>Getting and setting the combobox value</h2>\n\n<h3>Getting a Value</h3>\n<p>You can use the following ways to get a value from a combobox component:</p>\n<ul>\n    <li>Access the <code>value</code> property on the component</li>\n    <li>Bind to the <code>valueSelected</code> output - emits the selected value</li>\n    <li>Bind to the <code>valueChanged</code> output - emits after <strong>input</strong> was changed</li>\n</ul>\n\n<nui-example-wrapper filenamePrefix=\"combobox-v2-getting-value\" exampleTitle=\"Getting Value\">\n    <nui-combobox-v2-getting-value-example></nui-combobox-v2-getting-value-example>\n</nui-example-wrapper>\n\n<h3>Setting a Value</h3>\n<p>\n    To set a value for a combobox, you can use either the <code>value</code> input or\n    the reactive form control\n    <code><a href=\"https://angular.io/guide/reactive-forms#replacing-a-form-control-value\" target=\"_blank\">setValue</a></code>\n    method, to provide an option from the list.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"combobox-v2-setting-value\" exampleTitle=\"Setting Value\">\n    <nui-combobox-v2-setting-value-example></nui-combobox-v2-setting-value-example>\n</nui-example-wrapper>\n\n<h2 #typeahead>Typeahead</h2>\n<p>\n    <code>&lt;nui-combobox-v2&gt;</code> comes with built-in typeahead functionality so you can filter options\n    in the list.\n</p>\n<p>\n    To enable highlighting of the search string within the combobox options, you can use the default\n    highlighting functionality provided by the <code>nuiComboboxV2OptionHighlight</code>\n    directive:\n</p>\n<p>\n    <code>&lt;span [nuiComboboxV2OptionHighlight]=\"item\"&gt;&lt;span&gt;</code>\n</p>\n<p>\n    For more detail on how to get this working, take a look at the code inside the source expander of the\n    <strong>Basic Usage</strong> example above.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> If you want more customization, you can implement custom highlighting via the\n    <a href=\"../pipes/HighlightPipe.html\" target=\"_blank\"><code>HighlightPipe</code></a> instead of <code>nuiComboboxV2OptionHighlight</code>.\n</nui-message>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> You can disable or use custom <em>typeahead</em> behavior if the default\n    behavior doesn't meet your requirements. For that, please see the <strong>Custom Typeahead</strong>\n    section. As always, before implementing a custom behavior, it's important to consult with UX\n    leadership. This will ensure that the desired behavior conforms to the Nova Design Language.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"combobox-v2-typeahead\" exampleTitle=\"Typeahead\">\n    <nui-combobox-v2-typeahead-example></nui-combobox-v2-typeahead-example>\n</nui-example-wrapper>\n\n<h2>Options Customization</h2>\n<p>\n    It's possible to use a custom template for the <code>option</code>s in the list. You can use pretty\n    much any layout for the options by putting the template inside a\n    <code>&lt;select-v2-option&gt;</code> instance.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-v2-customize-options\" exampleTitle=\"Options Customization\">\n    <nui-combobox-v2-customize-options-example></nui-combobox-v2-customize-options-example>\n</nui-example-wrapper>\n\n<h2>Grouped Options</h2>\n<p>\n    If you want to group options you can wrap them in a <code>&lt;nui-select-v2-option-group&gt;</code>\n    instance. You can also provide a header for a group (optionally).\n</p>\n<p>\n    To use default styles for a header (as in the example below), apply\n    <code>.nui-select-v2-option-group--header</code> class to the header.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> Technically you can use any template instead of, or in addition to, the header.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"combobox-v2-grouped-options\" exampleTitle=\"Grouped Options Usage\">\n    <nui-combobox-v2-grouped-options-example></nui-combobox-v2-grouped-options-example>\n</nui-example-wrapper>\n\n<h2 #reactiveForms>Using With Reactive Forms</h2>\n<p>\n    To use <code>nui-combobox-v2</code> with reactive forms, create a <code>FormControl</code> that\n    represents the form model. Then, bind <code>nui-combobox-v2</code> to this form element.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> It's recommended to use the\n    <code><a href=\"../components/FormFieldComponent.html\" target=\"_blank\">&lt;nui-form-field&gt;</a></code>\n    component as a wrapper if you are going to use validation, captions, labels, etc.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"combobox-v2-reactive-form-field\" exampleTitle=\"Reactive Form Field\">\n    <nui-combobox-v2-reactive-form-field-example></nui-combobox-v2-reactive-form-field-example>\n</nui-example-wrapper>\n\n<h2>Multiselect</h2>\n<p>\n    Combobox has a multiselect mode. To turn it on, set the <code>multiselect</code> input to\n    <code>true</code>. This allows the template you pass to the <code>inputTemplate</code> input to\n    render the selected items in a special container within the main input.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> It's possible to use another component for this feature in place of\n    <code><a href=\"../components/ChipsComponent.html\" target=\"_blank\">nui-chips</a></code>. In fact, you\n    can technically pass any template to <code>inputTemplate</code>.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"combobox-v2-multiselect\" exampleTitle=\"Multiselect\">\n    <nui-combobox-v2-multiselect-example></nui-combobox-v2-multiselect-example>\n</nui-example-wrapper>\n\n<h2>Creating an Option</h2>\n<p>\n    You can create new options and add them to the list. To do that, just add the option to the initial\n    list e.g. <code>options.push(option);</code>. To immediately set an added option as the selected\n    value you can use either <code>FormControl.setValue(option);</code> or the <code>value</code> input\n    on the component.\n</p>\n<p>\n    If you want to add options using the <em>Create Option</em> button as in the example below, you\n    should add the button as a content projection along with the options themselves.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> You can use the <code>.nui-combobox-v2__create-option</code> class for the\n    <em>Create Option</em> block to have the same styles as the example.\n</nui-message>\n<p><code>nui-combobox-v2</code> comes with the following outputs which are useful when implementing the\n    create-option functionality:</p>\n<ul>\n    <li><code>canCreateOption</code> - emits <code>true</code> when there's no such option already</li>\n    <li>\n        <code>searchEmpty</code> - emits <code>true</code> when there's no option that fits search term\n        in the textbox.\n        <nui-message type=\"warning\" [allowDismiss]=\"false\">\n            <strong>Note:</strong> This is valid only if the <code>isTypeaheadEnabled</code> property is\n            <code>true</code> (default behavior).\n        </nui-message>\n    </li>\n</ul>\n<h3>Single select</h3>\n<nui-example-wrapper filenamePrefix=\"combobox-v2-create-option\" exampleTitle=\"Create option\">\n    <nui-combobox-v2-create-option-example></nui-combobox-v2-create-option-example>\n</nui-example-wrapper>\n\n<h3>Multiselect</h3>\n<nui-example-wrapper filenamePrefix=\"combobox-v2-create-option-multiselect\" exampleTitle=\"Create option (Multiselect)\">\n    <nui-combobox-v2-create-option-multiselect-example></nui-combobox-v2-create-option-multiselect-example>\n</nui-example-wrapper>\n\n<h2>Virtual Scroll</h2>\n<p>\n    The options dropdown can use virtual scroll. For that, wrap the options list in a\n    <code><a href=\"https://material.angular.io/cdk/scrolling/overview#virtual-scrolling\" target=\"_blank\">cdk-virtual-scroll-viewport</a></code>.\n    You can adjust virtual scroll container to your needs according to\n    <a href=\"https://material.angular.io/cdk/scrolling/api\">Virtual Scroll API</a>.\n</p>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <p><strong>Warning:</strong> All the items inside a dropdown <strong>must</strong> be of the same height!</p>\n    You should set <code>itemSize</code> property of <code>cdk-virtual-scroll-viewport</code> to the <strong>exact</strong> value of an option height. Otherwise, some features may not work.\n</nui-message>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> If using virtual scroll, custom typeahead must be used. See the\n    <strong>Custom Typeahead</strong> section for how to implement that.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"combobox-v2-virtual-scroll\" exampleTitle=\"Virtual Scroll\">\n    <nui-combobox-v2-virtual-scroll-example></nui-combobox-v2-virtual-scroll-example>\n</nui-example-wrapper>\n\n<h2>Disabled Mode</h2>\n<p>\n    It is possible to disable either the entire <code>combobox-v2</code> or one or more\n    <code>select-v2-option</code>s. To do that, set the <code>isDisabled</code> input to true on the\n    appropriate component.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-v2-disabled\" exampleTitle=\"Disabled Mode\">\n    <nui-combobox-v2-disabled-example></nui-combobox-v2-disabled-example>\n</nui-example-wrapper>\n\n<h2>Error State</h2>\n<p>\n    The <code>isInErrorState</code> input is used to set/change the visual validation state of the\n    component. This can be used in custom situations in which you need to manually indicate that the\n    component is in error state.\n</p>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> If you want to use a combobox as a form field with validation, consider using\n    the <code><a href=\"../components/FormFieldComponent.html\" target=\"_blank\">nui-form-field</a></code>\n    component. For information about that, see the <strong>Using With Reactive Forms</strong> section.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"combobox-v2-error\" exampleTitle=\"Error State\">\n    <nui-combobox-v2-error-example></nui-combobox-v2-error-example>\n</nui-example-wrapper>\n\n<h2>Styling</h2>\n<p>\n    To style the combobox's dropdown simply use <code>overlayConfig</code> input and fill in its <code>panelClass</code> property with the global CSS class with\n    the desired styles.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-v2-styling\" exampleTitle=\"Styling\">\n    <nui-combobox-v2-styling-example></nui-combobox-v2-styling-example>\n</nui-example-wrapper>\n\n<h2>Inline Display Mode</h2>\n<p>\n    To put a combobox in inline display mode, add necessary styles to the component. For example, you can add bootstrap <code>d-inline-flex</code> style.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-v2-inline\" exampleTitle=\"Inline\">\n    <nui-combobox-v2-inline-example></nui-combobox-v2-inline-example>\n</nui-example-wrapper>\n\n<h2>Value Removal</h2>\n<p>\n    Combobox has a \"remove value\" button by default. If you don't want to use it, set the\n    <code>isRemoveValueEnabled</code> input to <code>false</code>.\n</p>\n\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> You should probably add validation as in <a (click)=\"scrollTo(reactiveForms)\">Reactive Forms</a> section.\n</nui-message>\n\n<nui-example-wrapper filenamePrefix=\"combobox-v2-remove-value\" exampleTitle=\"Value Removal\">\n    <nui-combobox-v2-remove-value-example></nui-combobox-v2-remove-value-example>\n</nui-example-wrapper>\n\n<h2>Overlay Configuration</h2>\n<p>\n    To adjust <code>ComboboxComponent</code>'s popup overlay properties, such as <code>width</code>,\n    <code>height</code> or other properties, set the <code>overlayConfig</code> input in accordance with\n    the Angular CDK Overlay Config\n    <a href=\"https://material.angular.io/cdk/overlay/api#OverlayConfig\">interface</a>.<br>\n    <mark>NOTE: in case you need to set the <code>width</code> using the overlay config make sure you disable the\n    automatic width synchronization, which is enabled by default. This can be done by setting the <code>syncWidth</code>\n    input to <code>false</code></mark>\n    <nui-message type=\"info\" [allowDismiss]=\"false\">\n        <strong>Note:</strong> Select-v2 and Combobox-v2 contain default <code>with-popup-styles</code> (you can import it <code>POPUP_STYLES_CLASS</code> from <code>@nova-ui/bits</code>) class which styles the popup according to the\n        Nova Design Language. Setting custom styles through the global classes using the `panelClass` will override the default styles of the overlay.\n        If you want to preserve default overlay styles please consider adding the <code>with-popup-styles</code> class when setting styles using the <code>overlayConfig</code>.\n        Please see the example below.\n    </nui-message>\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-v2-overlay-config\" exampleTitle=\"Overlay configuration\">\n    <nui-combobox-v2-overlay-config-example></nui-combobox-v2-overlay-config-example>\n</nui-example-wrapper>\n\n<h2>Custom Typeahead</h2>\n<p>\n    Combobox comes with default typeahead functionality. Nevertheless, it's possible to use custom\n    typeahead logic. To do so, disable the default typeahead by setting the\n    <code>isTypeaheadEnabled</code> input to <code>false</code>. Custom typeahead involves filtering the\n    options list and updating it manually.\n</p>\n<nui-example-wrapper filenamePrefix=\"combobox-v2-custom-typeahead\" exampleTitle=\"Custom typeahead\">\n    <nui-combobox-v2-custom-typeahead-example></nui-combobox-v2-custom-typeahead-example>\n</nui-example-wrapper>\n\n<h2>Custom Dropdown Control</h2>\n<p>\n    Similar to <code>select-v2</code>, the <code>manualDropdownControl</code> boolean input gives you\n    total control over opening and closing the dropdown. When set to <code>true</code>, the default behavior of the\n    dropdown is blocked, and you can provide your own behavior.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> The <code>clickOutsideDropdown</code> output can be used to close the dropdown\n    manually on clicks outside both the host element and the dropdown.\n</nui-message>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> In order for keyboard navigation work as you open the dropdown you have to manually set focus to the <code>inputElement</code> in case you are triggering the dropdown outside the host element.\n    For that, you can do <code>combobox.inputElement.nativeElement.focus()</code>\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"combobox-v2-custom-control\" exampleTitle=\"Combobox custom dropdown control\">\n    <nui-combobox-v2-custom-control-example></nui-combobox-v2-custom-control-example>\n</nui-example-wrapper>\n\n<h2>Keyboard interaction</h2>\n<p><code>&lt;nui-combobox-v2&gt;</code> comes with built-in accessibility features:</p>\n<ul>\n    <li><code>TAB/Shift+TAB</code> for focusing the component.</li>\n    <li><code>ARROW UP/ARROW DOWN</code> for navigation inside an option list.</li>\n    <li><code>PAGE UP/PAGE DOWN</code> for navigation inside the list to top/bottom.</li>\n    <li><code>ENTER</code> to select an option.</li>\n</ul>\n\n<p>Multiselect only:</p>\n<ul>\n    <li><code>BACKSPACE</code> to remove a selected item.</li>\n    <li><code>LEFT</code> to navigate the selected items.</li>\n    <li><code>RIGHT</code> to navigate the selected items.</li>\n</ul>\n";
      /***/
    },

    /***/
    "vh0p":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/combobox-v2/combobox-v2-error/combobox-v2-error.example.component.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vh0p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-combobox-v2-error-example\",\n    templateUrl: \"combobox-v2-error.example.component.html\",\n    host: { class: \"combobox-container\" },\n})\nexport class ComboboxV2ErrorExampleComponent {\n    public items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);\n    public comboboxControl = new FormControl();\n    public error: boolean = true;\n}\n";
      /***/
    },

    /***/
    "wHeG":
    /*!*************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/combobox-v2/combobox-v2-custom-control/combobox-v2-custom-control.example.component.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: ComboboxV2CustomControlExampleComponent */

    /***/
    function wHeG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComboboxV2CustomControlExampleComponent", function () {
        return ComboboxV2CustomControlExampleComponent;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */
      "eZSC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/switch/switch.component */
      "6CEj");
      /* harmony import */


      var _src_lib_chips_chip_chip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/chips/chip/chip.component */
      "PEYr");
      /* harmony import */


      var _src_lib_select_v2_mark_as_selected_item_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/mark-as-selected-item.directive */
      "2vPf");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/combobox-v2-option-highlight/combobox-v2-option-highlight.directive */
      "Mjyr");

      var _c0 = ["combobox"];

      function ComboboxV2CustomControlExampleComponent_nui_chip_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-chip", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("remove", function ComboboxV2CustomControlExampleComponent_nui_chip_3_Template_nui_chip_remove_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);

            var option_r6 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r7.onChipRemoved(option_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r6 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", ctx_r1.convertToChip(option_r6));
        }
      }

      function ComboboxV2CustomControlExampleComponent_nui_select_v2_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-select-v2-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nuiComboboxV2OptionHighlight", item_r9);
        }
      }

      var ComboboxV2CustomControlExampleComponent = /*#__PURE__*/function () {
        function ComboboxV2CustomControlExampleComponent() {
          _classCallCheck(this, ComboboxV2CustomControlExampleComponent);

          this.items = Array.from({
            length: 100
          }).map(function (_, i) {
            return $localize(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["Item ", ""])), i);
          });
          this.comboboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
          this.placeholder = $localize(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["Select Item"])));
          this.handleClicksOutside = false;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(ComboboxV2CustomControlExampleComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this7 = this;

            this.combobox.clickOutsideDropdown.subscribe(function () {
              if (_this7.handleClicksOutside) {
                _this7.combobox.hideDropdown();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "onChipRemoved",
          value: function onChipRemoved(item) {
            this.combobox.deselectItem(item);
          }
        }, {
          key: "convertToChip",
          value: function convertToChip(value) {
            return {
              label: value
            };
          }
        }, {
          key: "showList",
          value: function showList(event) {
            event.stopPropagation();
            this.combobox.showDropdown();
            this.combobox.inputElement.nativeElement.focus();
          }
        }, {
          key: "hideList",
          value: function hideList(event) {
            event.stopPropagation();
            this.combobox.hideDropdown();
          }
        }, {
          key: "toggleList",
          value: function toggleList(event) {
            event.stopPropagation();
            this.combobox.toggleDropdown();
            this.combobox.inputElement.nativeElement.focus();
          }
        }]);

        return ComboboxV2CustomControlExampleComponent;
      }();

      ComboboxV2CustomControlExampleComponent.ɵfac = function ComboboxV2CustomControlExampleComponent_Factory(t) {
        return new (t || ComboboxV2CustomControlExampleComponent)();
      };

      ComboboxV2CustomControlExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: ComboboxV2CustomControlExampleComponent,
        selectors: [["nui-combobox-v2-custom-control-example"]],
        viewQuery: function ComboboxV2CustomControlExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.combobox = _t.first);
          }
        },
        hostAttrs: [1, "combobox-container", "d-flex"],
        decls: 18,
        vars: 8,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7190911341416824783$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_CUSTOM_CONTROL_COMBOBOX_V2_CUSTOM_CONTROL_EXAMPLE_COMPONENT_TS_2 = goog.getMsg(" Close on focus-out ");
            i18n_1 = MSG_EXTERNAL_7190911341416824783$$DEMO_SRC_COMPONENTS_DEMO_COMBOBOX_V2_COMBOBOX_V2_CUSTOM_CONTROL_COMBOBOX_V2_CUSTOM_CONTROL_EXAMPLE_COMPONENT_TS_2;
          } else {
            i18n_1 = $localize(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral([":\u241F5a845ece889b921123b84c73a01faa22aa7a0eac\u241F7190911341416824783: Close on focus-out "])));
          }

          return [[3, "placeholder", "formControl", "isTypeaheadEnabled", "multiselect", "manualDropdownControl"], ["combobox", ""], ["selectedItems", ""], ["nuiMarkAsSelectedItem", "", "class", "ml-2", "closeButtonTooltip", "Remove", 3, "item", "remove", 4, "ngFor", "ngForOf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ml-4", "d-flex", "w-75"], ["nui-button", "", "type", "button", 1, "mr-3", 3, "click"], ["show", ""], ["hide", ""], ["toggle", ""], [1, "d-flex", "align-items-center"], [3, "value", "valueChange"], i18n_1, ["nuiMarkAsSelectedItem", "", "closeButtonTooltip", "Remove", 1, "ml-2", 3, "item", "remove"], [3, "value"], [3, "nuiComboboxV2OptionHighlight"]];
        },
        template: function ComboboxV2CustomControlExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-combobox-v2", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ComboboxV2CustomControlExampleComponent_nui_chip_3_Template, 1, 1, "nui-chip", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ComboboxV2CustomControlExampleComponent_nui_select_v2_option_4_Template, 3, 2, "nui-select-v2-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboboxV2CustomControlExampleComponent_Template_button_click_6_listener($event) {
              return ctx.showList($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Show");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 6, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboboxV2CustomControlExampleComponent_Template_button_click_9_listener($event) {
              return ctx.hideList($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Hide");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 6, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboboxV2CustomControlExampleComponent_Template_button_click_12_listener($event) {
              return ctx.toggleList($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nui-switch", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function ComboboxV2CustomControlExampleComponent_Template_nui_switch_valueChange_16_listener($event) {
              return ctx.handleClicksOutside = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](17, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _r0.selectedOptions.length ? "" : ctx.placeholder)("formControl", ctx.comboboxControl)("isTypeaheadEnabled", true)("multiselect", true)("manualDropdownControl", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r0 == null ? null : _r0.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.handleClicksOutside);
          }
        },
        directives: [_src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_4__["ComboboxV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_7__["SwitchComponent"], _src_lib_chips_chip_chip_component__WEBPACK_IMPORTED_MODULE_8__["ChipComponent"], _src_lib_select_v2_mark_as_selected_item_directive__WEBPACK_IMPORTED_MODULE_9__["MarkAsSelectedItemDirective"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_10__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_option_highlight_combobox_v2_option_highlight_directive__WEBPACK_IMPORTED_MODULE_11__["ComboboxV2OptionHighlightDirective"]],
        styles: [".active[_ngcontent-%COMP%] {\n  background-color: var(--nui-color-selected,rgba(0, 196, 210, 0.1));\n  outline: none;\n  z-index: 500;\n  box-shadow: inset 0 0 0 2px rgba(0, 196, 210, 0.5);\n}\nnui-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  cursor: pointer;\n  border-radius: 9px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJvYm94LXYyLWN1c3RvbS1jb250cm9sLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9jc3MtdmFyaWFibGVzLmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9mb2N1cy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDRUksa0VBQUE7RUNKQSxhQUFBO0VBQ0EsWUFBQTtFQVVBLGtEQUFBO0FGUEo7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJjb21ib2JveC12Mi1jdXN0b20tY29udHJvbC5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIm51aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9jb21wb25lbnRzL2NvbWJvYm94LXYyLWFkZG9ucy5sZXNzXCI7XG5cbi5hY3RpdmUge1xuICAgIC5hY3RpdmUtaXRlbSgpO1xufVxuXG5udWktY2hpcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4iLCIuc2V0Q3NzVmFyaWFibGUoQHByb3BlcnR5LCBAdmFsdWUpe1xuICAgIEBldmFsdWF0ZWQgOiBcIkB7dmFsdWV9XCI7XG4gICAgLy90aGUgZG91YmxlIEAgZm9yY2VzIGEgaW5kaXJlY3Rpb24gZXZhbHVhdGlvbiwga2luZGEgbGlrZSBhIHBvaW50ZXJcbiAgICBAZmFsbGJhY2sgOiBAQGV2YWx1YXRlZDtcblxuICAgIEB7cHJvcGVydHl9OiB+XCJ2YXIoLS1Ae3ZhbHVlfSxAe2ZhbGxiYWNrfSlcIjtcbn1cbiIsIi5mb2N1cy1vdXRsaW5lLWJhc2UoKSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB6LWluZGV4OiBAemluZGV4LWFjdGl2ZTtcbn1cblxuLmZvY3VzLW91dGxpbmUoKSB7XG4gICAgLmZvY3VzLW91dGxpbmUtYmFzZSgpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIEBudWktbGluZS1tZWRpdW0gZmFkZShAbnVpLWNvbG9yLXNlbGVjdGVkLWNvbnRyYXN0LCA1MCUpO1xufVxuXG4uZm9jdXMtb3V0bGluZS1pbnNldCgpIHtcbiAgICAuZm9jdXMtb3V0bGluZS1iYXNlKCk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgQG51aS1saW5lLW1lZGl1bSBmYWRlKEBudWktY29sb3Itc2VsZWN0ZWQtY29udHJhc3QsIDUwJSk7XG59XG4iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-combobox-v2-combobox-v2-module-es5.js.map