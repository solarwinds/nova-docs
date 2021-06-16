(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-wizard-v2-wizard-module"], {
    /***/
    "/QbS":
    /*!***********************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard-v2/wizard-restore-state/wizard-restore-state.example.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: WizardRestoreStateExampleComponent */

    /***/
    function QbS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardRestoreStateExampleComponent", function () {
        return WizardRestoreStateExampleComponent;
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


      var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash/isEqual */
      "Y+p1");
      /* harmony import */


      var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-header.component */
      "skCw");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */
      "ZgeA");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */
      "9Oqf");
      /* harmony import */


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../../src/lib/form-field/form-field.component */
      "L5T1");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */
      "ZSn2");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */
      "JSul");
      /* harmony import */


      var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/select/select-v2.component */
      "UpNd");
      /* harmony import */


      var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */
      "tpGn");
      /* harmony import */


      var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../../../../src/lib/validation-message/validation-message.component */
      "Dm7Q");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */
      "sp5V");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");

      var _c0 = ["dynamicTemplate1"];
      var _c1 = ["dynamicTemplate2"];

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_11_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_11_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c16 = function _c16() {
        return {
          form: "personDetails"
        };
      };

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_11_ng_container_0_Template, 1, 0, "ng-container", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_11_ng_container_1_Template, 1, 0, "ng-container", 44);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r21)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c16));
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c21 = function _c21() {
        return {
          form: "organization"
        };
      };

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_ng_container_0_Template, 1, 0, "ng-container", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_ng_container_1_Template, 1, 0, "ng-container", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_ng_container_2_Template, 1, 0, "ng-container", 44);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r21)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c21));
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var step_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r30.title);
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 43);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r21);
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-step-v2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_1_Template, 1, 1, "ng-template", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_container_3_Template, 1, 0, "ng-container", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_4_Template, 2, 2, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r30.templateRef);
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c26 = function _c26() {
        return ["contactDetails", "email"];
      };

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r39.resetStep(_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reset step ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_ng_container_2_Template, 1, 0, "ng-container", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_ng_container_3_Template, 1, 0, "ng-container", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r41.completeWizard(_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Finish ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r18.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c26)).invalid);
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Previous ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_45_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

            var form_r42 = ctx.form;

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r43.validateStep(form_r42);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_47_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r45.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c27 = function _c27() {
        return ["personDetails"];
      };

      var _c28 = function _c28() {
        return ["personDetails", "name"];
      };

      var _c29 = function _c29() {
        return ["personDetails", "privacy"];
      };

      var _c30 = function _c30() {
        return ["organization"];
      };

      var _c31 = function _c31() {
        return ["organization", "title"];
      };

      var _c32 = function _c32() {
        return ["organization", "date"];
      };

      var _c33 = function _c33() {
        return ["organization", "createDynamicStep1"];
      };

      var _c34 = function _c34() {
        return ["organization", "createDynamicStep2"];
      };

      var _c35 = function _c35() {
        return ["contactDetails"];
      };

      var _c36 = function _c36() {
        return ["contactDetails", "options"];
      };

      function WizardRestoreStateExampleComponent_ng_template_0_form_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-wizard-horizontal", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function WizardRestoreStateExampleComponent_ng_template_0_form_1_Template_nui_wizard_horizontal_finished_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r47.saveState($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-wizard-step-v2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-textbox", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_6_Template, 2, 0, "nui-validation-message", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-checkbox", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Privacy Policy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_10_Template, 2, 0, "nui-validation-message", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_11_Template, 2, 4, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nui-wizard-step-v2", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nui-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nui-textbox", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_16_Template, 2, 0, "nui-validation-message", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nui-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nui-date-picker", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_19_Template, 2, 0, "nui-validation-message", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nui-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nui-checkbox", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Add first step dynamically ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nui-checkbox", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Add second step dynamically ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_Template, 3, 5, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_Template, 5, 1, "nui-wizard-step-v2", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nui-wizard-step-v2", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_30_Template, 2, 0, "ng-template", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nui-form-field", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "nui-textbox", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_34_Template, 2, 0, "nui-validation-message", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_35_Template, 2, 0, "nui-validation-message", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nui-form-field", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nui-select-v2", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nui-select-v2-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Item 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nui-select-v2-option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_Template, 6, 4, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_43_Template, 2, 0, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_45_Template, 2, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_47_Template, 2, 0, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var tmp_4_0 = null;
          var tmp_7_0 = null;
          var tmp_10_0 = null;
          var tmp_12_0 = null;
          var tmp_20_0 = null;
          var tmp_21_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r6.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c27)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c28)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c28))) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c29)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c29))) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c30)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c31)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c31))) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c32)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c32))) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c33)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c34)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.dynamicSteps);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c35)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c26)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_20_0 = ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c26))) == null ? null : tmp_20_0.errors == null ? null : tmp_20_0.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_21_0 = ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c26))) == null ? null : tmp_21_0.errors == null ? null : tmp_21_0.errors.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c36)));
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function WizardRestoreStateExampleComponent_ng_template_0_Template_nui_dialog_header_closed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r49.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardRestoreStateExampleComponent_ng_template_0_form_1_Template, 49, 40, "form", 6);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form);
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_4_nui_message_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-message", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You are awesome!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardRestoreStateExampleComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRestoreStateExampleComponent_ng_template_4_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r52.awesome = !ctx_r52.awesome;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click if you're awesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardRestoreStateExampleComponent_ng_template_4_nui_message_4_Template, 2, 0, "nui-message", 58);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.awesome);
        }
      }

      var WizardRestoreStateExampleComponent = /*#__PURE__*/function () {
        function WizardRestoreStateExampleComponent(formBuilder, dialogService) {
          _classCallCheck(this, WizardRestoreStateExampleComponent);

          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.dynamicSteps = [];
          this.awesome = false;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }

        _createClass(WizardRestoreStateExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var _a, _b;

            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              "personDetails": this.formBuilder.group({
                "name": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
                "privacy": [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]]
              }),
              "organization": this.formBuilder.group({
                "title": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                "date": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                "createDynamicStep1": [false],
                "createDynamicStep2": [false]
              }),
              "contactDetails": this.formBuilder.group({
                "email": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                "options": [""]
              })
            });
            (_a = this.form.get(["organization", "createDynamicStep1"])) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (changes) {
              _this.handleDynamicSteps("I was created dynamically!", _this.template1, changes);
            });
            (_b = this.form.get(["organization", "createDynamicStep2"])) === null || _b === void 0 ? void 0 : _b.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (changes) {
              _this.handleDynamicSteps("Another dynamic step", _this.template2, changes);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "openDialog",
          value: function openDialog(content) {
            this.activeDialog = this.dialogService.open(content, {
              size: "lg"
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.activeDialog.close();
          }
        }, {
          key: "saveState",
          value: function saveState(state) {
            this.state = state;
          }
        }, {
          key: "completeWizard",
          value: function completeWizard(step) {
            step.completed = true;
            this.activeDialog.close();
          }
        }, {
          key: "resetStep",
          value: function resetStep(step) {
            step.reset();
          }
        }, {
          key: "validateStep",
          value: function validateStep(formGroup) {
            var _a;

            (_a = this.form.get(formGroup)) === null || _a === void 0 ? void 0 : _a.markAllAsTouched();
          }
        }, {
          key: "handleDynamicSteps",
          value: function handleDynamicSteps(title, template, controlValue) {
            var newStep = {
              title: title,
              templateRef: template
            };
            var index = this.dynamicSteps.findIndex(function (step) {
              return lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(step, newStep);
            });
            controlValue ? this.dynamicSteps.push(Object.assign({}, newStep)) : this.dynamicSteps.splice(index, 1);
          }
        }]);

        return WizardRestoreStateExampleComponent;
      }();

      WizardRestoreStateExampleComponent.ɵfac = function WizardRestoreStateExampleComponent_Factory(t) {
        return new (t || WizardRestoreStateExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DialogService"]));
      };

      WizardRestoreStateExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardRestoreStateExampleComponent,
        selectors: [["nui-wizard-restore-state-example"]],
        viewQuery: function WizardRestoreStateExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template1 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template2 = _t.first);
          }
        },
        decls: 8,
        vars: 0,
        consts: function consts() {
          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7400666062557911013$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Open dialog wizard");
            i18n_2 = MSG_EXTERNAL_7400666062557911013$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241F8afaab79e8c7c81abcd01a1765efedf88025e83a\u241F7400666062557911013: Open dialog wizard"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7255713106739464219$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("Restore Wizard State");
            i18n_4 = MSG_EXTERNAL_7255713106739464219$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS__5;
          } else {
            i18n_4 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241F6bda9fb7e1e685cbeecae2b67224c3f5b392474f\u241F7255713106739464219:Restore Wizard State"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS___7 = goog.getMsg("Name");
            i18n_6 = MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS___7;
          } else {
            i18n_6 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241Fcff1428d10d59d14e45edec3c735a27b5482db59\u241F8953033926734869941:Name"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3076687427621376223$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS___9 = goog.getMsg("Organization");
            i18n_8 = MSG_EXTERNAL_3076687427621376223$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS___9;
          } else {
            i18n_8 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241Ff3a58c8a81b9ffda26a154eae25a422c9f7de37b\u241F3076687427621376223:Organization"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS___11 = goog.getMsg("Email");
            i18n_10 = MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS___11;
          } else {
            i18n_10 = $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([":\u241F244aae9346da82b0922506c2d2581373a15641cc\u241F4768749765465246664:Email"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____13 = goog.getMsg(" This is required ");
            i18n_12 = MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____13;
          } else {
            i18n_12 = $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([":\u241F2ff6269296a5c01c535689ec579e8a0cdca6734c\u241F190263083628071291: This is required "])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____15 = goog.getMsg(" This is required ");
            i18n_14 = MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____15;
          } else {
            i18n_14 = $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([":\u241F2ff6269296a5c01c535689ec579e8a0cdca6734c\u241F190263083628071291: This is required "])));
          }

          var i18n_17;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____18 = goog.getMsg(" This is required ");
            i18n_17 = MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____18;
          } else {
            i18n_17 = $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([":\u241F2ff6269296a5c01c535689ec579e8a0cdca6734c\u241F190263083628071291: This is required "])));
          }

          var i18n_19;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____20 = goog.getMsg(" This is required ");
            i18n_19 = MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____20;
          } else {
            i18n_19 = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([":\u241F2ff6269296a5c01c535689ec579e8a0cdca6734c\u241F190263083628071291: This is required "])));
          }

          var i18n_22;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____23 = goog.getMsg(" This is required ");
            i18n_22 = MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____23;
          } else {
            i18n_22 = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([":\u241F2ff6269296a5c01c535689ec579e8a0cdca6734c\u241F190263083628071291: This is required "])));
          }

          var i18n_24;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8995796957675959197$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____25 = goog.getMsg(" Invalid email ");
            i18n_24 = MSG_EXTERNAL_8995796957675959197$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____25;
          } else {
            i18n_24 = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([":\u241Fd7d97d967e41cead564a8e382a5ecdff681ca273\u241F8995796957675959197: Invalid email "])));
          }

          var i18n_37;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4112588876557774719$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS__38 = goog.getMsg("Hi! I was created dynamically, because you've checked the checkbox on the previous step! Uncheck it to hide me!");
            i18n_37 = MSG_EXTERNAL_4112588876557774719$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS__38;
          } else {
            i18n_37 = $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([":\u241F8f3a5db3476b6ca7f7899c4fe83d8fe985878f13\u241F4112588876557774719:Hi! I was created dynamically, because you've checked the checkbox on the previous step! Uncheck it to hide me!"])));
          }

          var i18n_39;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1948430504046934093$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS__40 = goog.getMsg("This is another template rendered dynamically!");
            i18n_39 = MSG_EXTERNAL_1948430504046934093$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS__40;
          } else {
            i18n_39 = $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([":\u241Fbea0d681251e36acc3cbf2d4062176cb960166f5\u241F1948430504046934093:This is another template rendered dynamically!"])));
          }

          return [["dialogWizard", ""], ["dynamicTemplate1", ""], ["dynamicTemplate2", ""], ["nui-button", "", "type", "button", 3, "click"], i18n_2, ["title", i18n_4, 3, "closed"], ["class", "dialog-body compact-mode", 3, "formGroup", 4, "ngIf"], [1, "dialog-body", "compact-mode", 3, "formGroup"], ["linear", "", 3, "state", "finished"], ["label", "Person Details", "formGroupName", "personDetails", 3, "stepControl"], [1, "px-5", "pb-5"], ["caption", i18n_6, 1, "d-block", "mb-4", "mt-4", 3, "control"], ["formControlName", "name"], ["for", "required", 4, "ngIf"], [3, "control"], ["formControlName", "privacy", 3, "value"], ["wizardStepFooter", ""], ["label", "Organization", "formGroupName", "organization", 3, "stepControl"], [1, "p-5"], ["caption", i18n_8, 1, "d-block", "mb-4", 3, "control"], ["formControlName", "title"], ["caption", "Date", 1, "d-block", "mb-4", 3, "control"], ["formControlName", "date"], [1, "d-block", 3, "control"], ["formControlName", "createDynamicStep1", 3, "value"], ["formControlName", "createDynamicStep2", 3, "value"], [4, "ngFor", "ngForOf"], ["formGroupName", "contactDetails", 3, "stepControl"], ["finalStep", ""], ["wizardStepLabel", ""], ["caption", i18n_10, 1, "d-block", "mb-4", "mt-4", 3, "control"], ["type", "email", "formControlName", "email"], ["for", "email", 4, "ngIf"], ["caption", "Select", 3, "control"], ["formControlName", "options"], ["value", "Item 1"], ["value", "Item 2"], ["wizardPrevious", ""], ["wizardNext", ""], ["wizardCancel", ""], ["for", "required"], i18n_12, i18n_14, [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], i18n_17, i18n_19, i18n_22, ["for", "email"], i18n_24, ["nui-button", "", "type", "button", "displayStyle", "destructive", 3, "click"], ["type", "button", "nui-button", "", "displayStyle", "primary", 3, "disabled", "click"], ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true", 3, "click"], ["type", "button", "nui-button", "", "displayStyle", "action", 3, "click"], i18n_37, i18n_39, ["type", "button", "nui-button", "", 1, "mb-3", 3, "click"], ["type", "ok", 4, "ngIf"], ["type", "ok"]];
        },
        template: function WizardRestoreStateExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardRestoreStateExampleComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardRestoreStateExampleComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardRestoreStateExampleComponent_ng_template_4_Template, 5, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRestoreStateExampleComponent_Template_button_click_6_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

              return ctx.openDialog(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_7__["DialogHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_9__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_10__["WizardStepV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_11__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_12__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_13__["CheckboxComponent"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_14__["WizardStepFooterDirective"], _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_15__["DatePickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_16__["WizardStepLabelDirective"], _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_17__["SelectV2Component"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_18__["SelectV2OptionComponent"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_19__["ValidationMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_20__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_20__["WizardStepperNextDirective"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_21__["MessageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "0dsp":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-remove-step/wizard-remove-step-example.component.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dsp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import {\n    AfterViewInit,\n    Component,\n    TemplateRef,\n    ViewChild,\n} from \"@angular/core\";\n\ninterface IWizardStepData {\n    title: string;\n    templateRef: TemplateRef<string>;\n}\n\n@Component({\n    selector: \"nui-wizard-remove-step-example\",\n    templateUrl: \"./wizard-remove-step-example.component.html\",\n})\nexport class WizardRemoveStepExampleComponent implements AfterViewInit {\n    public steps: IWizardStepData[] = [];\n\n    @ViewChild(\"normalStep\") normalStep: TemplateRef<string>;\n\n    public ngAfterViewInit(): void {\n        this.addStep(this.normalStep, $localize `Normal step`);\n    }\n\n    public addStep(templateRef: TemplateRef<string>, title?: string) {\n        this.steps.push({title: title ?? `Dynamic Step`, templateRef: templateRef});\n    }\n\n    public removeStep(index: number): void {\n        this.steps.splice(index, 1);\n    }\n}\n";
      /***/
    },

    /***/
    "1sWM":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-custom-layout/wizard-custom-example.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sWM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form [formGroup]=\"formGroup\">\n    <nui-wizard-custom [linear]=\"true\" #wizard>\n        <!-- Overview content-->\n        <ng-container summary>\n            <h2>Overview</h2>\n            <nui-progress [show]=\"true\"\n                          [stacked]=\"true\"\n                          [percent]=\"progress| number: '1.0-0'\"\n                          [showNumber]=\"true\">\n            </nui-progress>\n            <p>Step {{selectedIndex+1}} out of {{steps}} steps</p>\n            <p>Name: {{formGroup.get(['personDetails', 'name'])?.value || \"Not provided\"}}</p>\n            <p>Symptoms:\n                <ng-container [ngSwitch]=\"formGroup.get(['personDetails','symptoms'])?.value\">\n                    <ng-container *ngSwitchCase=\"true\">\n                        {{ formGroup.get(['diseaseDetails','date']).valid ? \"Since \" + formGroup.get(['diseaseDetails','date'])?.value.format('D MMM YYYY') : \"Yes\" }}\n                    </ng-container>\n                    <ng-container *ngSwitchCase=\"false\" i18n>No</ng-container>\n                    <ng-container *ngSwitchDefault i18n>Unknown</ng-container>\n                </ng-container>\n            </p>\n            <p>Email: {{formGroup.get(['contactDetails', 'email'])?.value || \"Not provided\"}}</p>\n        </ng-container>\n\n        <!--  content of the 1st step -->\n        <nui-wizard-step-v2 i18n-label label=\"Person Details\"\n                            formGroupName=\"personDetails\" [stepControl]=\"formGroup.get(['personDetails'])\">\n            <!-- content of the current step -->\n            <nui-form-field [control]=\"formGroup.get(['personDetails','name'])\" i18n-caption\n                            caption=\"Name\">\n                <nui-textbox formControlName=\"name\"></nui-textbox>\n                <nui-validation-message for=\"required\"\n                                        *ngIf=\"formGroup.get(['personDetails','name'])?.errors?.required\"\n                                        i18n>\n                    This is required\n                </nui-validation-message>\n                <nui-validation-message for=\"minlength\"\n                                        *ngIf=\"formGroup.get(['personDetails','name'])?.errors?.minlength\"\n                                        i18n>\n                    Minimum length is 3\n                </nui-validation-message>\n            </nui-form-field>\n\n            <nui-form-field [control]=\"formGroup.get(['personDetails','symptoms'])\" i18n-caption\n                            caption=\"Do you have Covid ?\">\n                <nui-checkbox formControlName=\"symptoms\" [indeterminate]=\"formGroup.get(['personDetails','symptoms'])?.pristine\" i18n>\n                    Diseases symptoms\n                </nui-checkbox>\n                <nui-validation-message for=\"required\"\n                                        *ngIf=\"formGroup.get(['personDetails','symptoms'])?.errors?.required\"\n                                        i18n>\n                    This is required\n                </nui-validation-message>\n            </nui-form-field>\n\n            <!-- content of the footer -->\n            <ng-template wizardStepFooter>\n                <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n            </ng-template>\n        </nui-wizard-step-v2>\n\n        <!--  content of the optional step -->\n        <nui-wizard-step-v2 *ngIf=\"formGroup.get(['personDetails','symptoms'])?.value\"\n                            i18n-label label=\"Disease Details\"\n                            formGroupName=\"diseaseDetails\" [stepControl]=\"formGroup.get(['diseaseDetails'])\">\n            <ng-template wizardStepLabel i18n>Disease Details for your Symptoms</ng-template>\n            <nui-form-field [control]=\"formGroup.get(['diseaseDetails','date'])\" i18n-caption\n                            caption=\"When did you noticed your first symptoms ?\">\n                <nui-date-picker formControlName=\"date\" i18n></nui-date-picker>\n                <nui-validation-message for=\"required\"\n                                        *ngIf=\"formGroup.get(['diseaseDetails','date'])?.errors?.required\"\n                                        i18n>\n                    Date when disease manifested is required\n                </nui-validation-message>\n            </nui-form-field>\n            <ng-template wizardStepFooter>\n                <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n            </ng-template>\n        </nui-wizard-step-v2>\n\n        <!--  content of the 2nd step -->\n        <nui-wizard-step-v2 i18n-label label=\"Contact Details\"\n                            formGroupName=\"contactDetails\" [stepControl]=\"formGroup.get(['contactDetails'])\">\n            <!-- content of the current step -->\n            <nui-form-field [control]=\"formGroup.get(['contactDetails','email'])\" i18n-caption\n                            caption=\"Email\">\n                <nui-textbox type=\"email\" formControlName=\"email\"></nui-textbox>\n                <nui-validation-message for=\"required\"\n                                        *ngIf=\"formGroup.get(['contactDetails','email'])?.errors?.required\"\n                                        i18n>\n                    This is required\n                </nui-validation-message>\n\n                <nui-validation-message for=\"email\"\n                                        *ngIf=\"formGroup.get(['contactDetails','email'])?.errors?.email\"\n                                        i18n>\n                    Invalid email\n                </nui-validation-message>\n            </nui-form-field>\n            <nui-form-field [control]=\"formGroup.get(['contactDetails','phone'])\" i18n-caption\n                            caption=\"Phone\">\n                <nui-textbox type=\"email\" formControlName=\"phone\"></nui-textbox>\n            </nui-form-field>\n\n            <!-- content of the footer -->\n            <ng-template wizardStepFooter>\n                <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n            </ng-template>\n        </nui-wizard-step-v2>\n\n        <!--  content of the final step -->\n        <nui-wizard-step-v2 i18n-label label=\"Final step\">\n            <span i18n>Thanks for your feedback and take care</span>!\n            <ng-template wizardStepFooter>\n                <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                <button type=\"button\" nui-button (click)=\"wizard.reset()\">Reset</button>\n            </ng-template>\n        </nui-wizard-step-v2>\n\n        <ng-template #wizardPrevious>\n            <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">Back</button>\n        </ng-template>\n\n        <ng-template #wizardNext>\n            <button nuiWizardNext\n                    type=\"button\"\n                    nui-button\n                    displayStyle=\"primary\"\n                    icon=\"caret-right\"\n                    iconRight=\"true\"\n                    (click)=\"validate(wizard.selected)\"\n            >Next\n            </button>\n        </ng-template>\n    </nui-wizard-custom>\n</form>\n";
      /***/
    },

    /***/
    "2/6m":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-custom-footer/wizard-custom-footer-example.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-wizard-horizontal linear>\n\n    <!--  content of the 1st step -->\n    <nui-wizard-step-v2 i18n-label label=\"First step\">\n        <!-- content of the current step -->\n        <span i18n>This is the first step of our horizontal wizard</span>.\n\n        <!-- content of the footer -->\n        <ng-template wizardStepFooter>\n            <div class=\"custom-footer step_1\">\n                <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n                <button nui-button type=\"button\" icon=\"add\" i18n>Custom button 1</button>\n                <span i18n>This is some custom content added in the footer for our first step</span>\n            </div>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <!--  content of the final step -->\n    <nui-wizard-step-v2 i18n-label label=\"Final step\">\n        <span i18n>We finally reached our last step</span>!\n        <!-- Notice how both label and footer can be placed anywhere in the content of wizard step -->\n        <ng-template wizardStepFooter>\n            <div class=\"custom-footer step_2\">\n                <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                <button nui-button type=\"button\" icon=\"remove\" i18n>Custom button 2</button>\n                <span i18n>This is some custom content added in the footer for out second step</span>\n            </div>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-template #wizardPrevious>\n        <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n            Previous\n        </button>\n    </ng-template>\n\n    <ng-template #wizardNext>\n        <button nuiWizardNext\n                type=\"button\"\n                nui-button\n                displayStyle=\"primary\"\n                icon=\"caret-right\"\n                iconRight=\"true\"\n        >Next</button>\n    </ng-template>\n</nui-wizard-horizontal>\n";
      /***/
    },

    /***/
    "3Uzl":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-docs/wizard-docs.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Uzl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Layout</h2>\n<h3>Horizontal Layout Wizard</h3>\n<p>\n    To use the horizontal wizard component, place a <code>nui-wizard-horizontal</code> element in your template and include one or more\n    <code><a href=\"../components/WizardStepComponent.html\" target=\"_blank\">nui-wizard-step-v2</a></code> elements as children of the\n    <code>nui-wizard-horizontal</code> element.\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-horizontal-layout\" exampleTitle=\"Horizontal Layout Wizard\">\n    <nui-wizard-horizontal-example></nui-wizard-horizontal-example>\n</nui-example-wrapper>\n\n<!--Will be updated in scope of the NUI-6099-->\n\n<!--<h3>Vertical Layout Wizard</h3>-->\n<!--<nui-example-wrapper filenamePrefix=\"wizard-vertical-layout\" exampleTitle=\"Vertical Layout Wizard\">-->\n<!--    <nui-wizard-vertical-example></nui-wizard-vertical-example>-->\n<!--</nui-example-wrapper>-->\n\n<h3>Usage with a dialog</h3>\n<p>You can pass an existing wizard component as content of the dialog window. </p>\n<p>You should insert wizard component in dialog body. </p>\n<nui-example-wrapper filenamePrefix=\"wizard-dialog\" exampleTitle=\"wizard in dialog\">\n    <nui-wizard-v2-dialog-example></nui-wizard-v2-dialog-example>\n</nui-example-wrapper>\n\n<h3>Busy step</h3>\n<p>You can make your step busy to forbid actions.</p>\n<nui-example-wrapper filenamePrefix=\"wizard-busy\" exampleTitle=\"wizard step busy\">\n    <nui-wizard-v2-busy-example></nui-wizard-v2-busy-example>\n</nui-example-wrapper>\n\n<h3>Custom footer</h3>\n<p>Customizing the footer layout content and style for each step is quite easy, as you can see in the example below:</p>\n<nui-example-wrapper filenamePrefix=\"wizard-custom-footer\" exampleTitle=\"Wizard with Custom Footer\">\n    <nui-wizard-custom-footer-example></nui-wizard-custom-footer-example>\n</nui-example-wrapper>\n\n<h3>Adding step dynamically</h3>\n<p>You are able to add wizard steps dynamically.</p>\n<nui-example-wrapper filenamePrefix=\"wizard-dynamic\" exampleTitle=\"wizard add dynamic step\">\n    <nui-wizard-dynamic-example></nui-wizard-dynamic-example>\n</nui-example-wrapper>\n\n<h3>Removing step</h3>\n<p>You are able to remove steps by index.</p>\n<nui-example-wrapper filenamePrefix=\"wizard-remove-step\" exampleTitle=\"wizard remove step\">\n    <nui-wizard-remove-step-example></nui-wizard-remove-step-example>\n</nui-example-wrapper>\n\n<!--TODO Fix Custom Layout Wizard in scope NUI-6112 -->\n<!--<h3>Custom Layout Wizard</h3>-->\n<!--<nui-example-wrapper filenamePrefix=\"wizard-custom-layout\" exampleTitle=\"Custom Layout Wizard\">-->\n<!--    <nui-wizard-custom-example></nui-wizard-custom-example>-->\n<!--</nui-example-wrapper>-->\n\n<h3>Async Form Validation</h3>\n<p>\n    To handle async validation check 'PENDING' status of WizardV2Step stepControl\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-async-form-validation\" exampleTitle=\"Async Form Validation\">\n    <nui-wizard-async-form-validation-example></nui-wizard-async-form-validation-example>\n</nui-example-wrapper>\n\n\n<h3>Wizard with custom step state icons</h3>\n<p>\n    The wizard step can be in four different states: <code>initial</code>, <code>selected</code>, <code>completed</code>, and <code>error</code>.\n    For each of these steps there is a corresponding icon in the header for a certain step, which dynamically changes along with the step state change.\n    It is possible to override the default set of step state icons and their colors, and there are two ways of doing that.\n</p>\n\n<ol>\n    <li>Global</li>\n    <li>Step Specific</li>\n</ol>\n\n<p><u>Global</u></p>\n<p>\n    Nova provides you with the <code>WIZARD_CONFIG</code> injection token, which allows you to override the default wizard settings in a global context. For instance, \n    set the necessary icons settings with this token on a module level to allow all wizards within a module to receive the same icon configuration.\n</p>\n<p><u>Step Specific</u></p>\n<p>\n    Use the <code>stepIconsConfig</code> input of the <code>nui-wizard-step-v2</code> component to pass the step icons config specifically to this step. It will \n    override the global settings for this particular step.\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-with-custom-icons-example\" exampleTitle=\"Wizard with custom icons\">\n    <nui-wizard-with-custom-icons-example></nui-wizard-with-custom-icons-example>\n</nui-example-wrapper>\n\n<h3>Restore Wizard State</h3>\n<p>\n    To restore wizard state you need to pass previous wizard steps as input\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-restore-state\" exampleTitle=\"Restore Wizard State\">\n    <nui-wizard-restore-state-example></nui-wizard-restore-state-example>\n</nui-example-wrapper>\n\n<h2>Keyboard interaction</h2>\n<ul>\n    <li><code>TAB/SHIFT+TAB</code> for focusing on the next/previous tabbable element</li>\n    <li><code>LEFT_ARROW/RIGHT_ARROW</code> for navigation on the previous/next step header</li>\n    <li><code>HOME/END</code> for focusing on the first/last step header</li>\n    <li><code>ENTER, SPACE</code> to select the step</li>\n</ul>\n";
      /***/
    },

    /***/
    "4Nvg":
    /*!*******************************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard-v2/wizard-with-custom-icons/wizard-with-custom-icons-example.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: WizardWithCustomIconsExampleComponent */

    /***/
    function Nvg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardWithCustomIconsExampleComponent", function () {
        return WizardWithCustomIconsExampleComponent;
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


      var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */
      "ZgeA");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */
      "9Oqf");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */
      "ZSn2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */
      "sp5V");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      function WizardWithCustomIconsExampleComponent_ng_template_6_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      function WizardWithCustomIconsExampleComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WizardWithCustomIconsExampleComponent_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 11);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function WizardWithCustomIconsExampleComponent_ng_template_12_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      function WizardWithCustomIconsExampleComponent_ng_template_12_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      function WizardWithCustomIconsExampleComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WizardWithCustomIconsExampleComponent_ng_template_12_ng_container_0_Template, 1, 0, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WizardWithCustomIconsExampleComponent_ng_template_12_ng_container_1_Template, 1, 0, "ng-container", 11);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function WizardWithCustomIconsExampleComponent_ng_template_17_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      function WizardWithCustomIconsExampleComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WizardWithCustomIconsExampleComponent_ng_template_17_ng_container_0_Template, 1, 0, "ng-container", 11);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
        }
      }

      function WizardWithCustomIconsExampleComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function WizardWithCustomIconsExampleComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var WizardWithCustomIconsExampleComponent = function WizardWithCustomIconsExampleComponent() {
        _classCallCheck(this, WizardWithCustomIconsExampleComponent);

        this.secondStepIconConfig = {
          initial: {
            icon: "execute",
            iconColor: "primary-blue"
          },
          visited: {
            icon: "star-full",
            iconColor: "light-blue"
          },
          active: {
            icon: "star-full",
            iconColor: "orange"
          }
        };
      };

      WizardWithCustomIconsExampleComponent.ɵfac = function WizardWithCustomIconsExampleComponent_Factory(t) {
        return new (t || WizardWithCustomIconsExampleComponent)();
      };

      WizardWithCustomIconsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: WizardWithCustomIconsExampleComponent,
        selectors: [["nui-wizard-with-custom-icons-example"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["WIZARD_CONFIG"],
          useValue: {
            stepState: {
              active: {
                icon: "email",
                iconColor: "orange"
              }
            }
          }
        }])],
        decls: 22,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("First step");
            i18n_0 = MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([":\u241F9170783b7882b9260aea1a22ae5cf2407fa3e64f\u241F8373557087720397153:First step"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1608407822398352568$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("This is the first step of our wizard");
            i18n_2 = MSG_EXTERNAL_1608407822398352568$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral([":\u241F499e667542ef10b64c49ed5aecea5d742c08aac3\u241F1608407822398352568:This is the first step of our wizard"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2997617654392962041$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Second step");
            i18n_4 = MSG_EXTERNAL_2997617654392962041$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral([":\u241Fb29f4fd21a1d511462918ede337438d03dab18e5\u241F2997617654392962041:Second step"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3073901503483316959$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("This is the second step of our wizard");
            i18n_6 = MSG_EXTERNAL_3073901503483316959$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral([":\u241Fb7f3f5775f22286caa9aed4fe05f9b0ae74829b1\u241F3073901503483316959:This is the second step of our wizard"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Final step");
            i18n_8 = MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral([":\u241F0de8f1dbd57123d294729d71fd278eaf936d4a2b\u241F5385737502167048240:Final step"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7100330853882173244$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("We finally reached our last step");
            i18n_10 = MSG_EXTERNAL_7100330853882173244$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral([":\u241F414c233c4cbaae1a74728ed5d64304bbd36cdbe5\u241F7100330853882173244:We finally reached our last step"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_829281553034486983$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS__13 = goog.getMsg(" Previous ");
            i18n_12 = MSG_EXTERNAL_829281553034486983$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS__13;
          } else {
            i18n_12 = $localize(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral([":\u241F6c70499b79785d2b69cf485692a6a15fa5ba097a\u241F829281553034486983: Previous "])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3885497195825665706$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS__15 = goog.getMsg("Next");
            i18n_14 = MSG_EXTERNAL_3885497195825665706$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS__15;
          } else {
            i18n_14 = $localize(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral([":\u241Ff732c304c7433e5a83ffcd862c3dce709a0f4982\u241F3885497195825665706:Next"])));
          }

          return [["linear", ""], ["label", i18n_0], [1, "p-5"], i18n_2, ["wizardStepFooter", ""], ["label", i18n_4, 3, "stepStateConfig"], i18n_6, ["label", i18n_8], i18n_10, ["wizardPrevious", ""], ["wizardNext", ""], [4, "ngTemplateOutlet"], ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], i18n_12, ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"], i18n_14];
        },
        template: function WizardWithCustomIconsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-wizard-horizontal", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-wizard-step-v2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WizardWithCustomIconsExampleComponent_ng_template_6_Template, 1, 1, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nui-wizard-step-v2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WizardWithCustomIconsExampleComponent_ng_template_12_Template, 2, 2, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nui-wizard-step-v2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](16, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, WizardWithCustomIconsExampleComponent_ng_template_17_Template, 1, 1, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, WizardWithCustomIconsExampleComponent_ng_template_18_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, WizardWithCustomIconsExampleComponent_ng_template_20_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepStateConfig", ctx.secondStepIconConfig);
          }
        },
        directives: [_src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_4__["WizardStepFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_6__["WizardStepperPreviousDirective"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_6__["WizardStepperNextDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "5iu2":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-busy/wizard-busy.example.component.less ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iu2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".example-container {\n    border: 1px red solid;\n}\n";
      /***/
    },

    /***/
    "6e2i":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-dynamic/wizard-dynamic.example.component.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e2i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import {AfterViewInit, Component, TemplateRef, ViewChild} from \"@angular/core\";\n\ninterface IWizardStepData {\n    title: string;\n    templateRef: TemplateRef<string>;\n}\n\n@Component({\n    selector: \"nui-wizard-dynamic-example\",\n    templateUrl: \"./wizard-dynamic.example.component.html\",\n})\nexport class WizardDynamicExampleComponent implements AfterViewInit {\n    public enableDynamicStepWithButton = false;\n    public steps: IWizardStepData[] = [];\n\n    @ViewChild(\"dynamicTemplate1\") dynamicTemplate1: TemplateRef<string>;\n\n    public ngAfterViewInit(): void {\n        this.addStep(this.dynamicTemplate1, $localize `My first dynamic step`);\n    }\n\n    public toggleStep() {\n        this.enableDynamicStepWithButton = !this.enableDynamicStepWithButton;\n    }\n\n    public addStep(templateRef: TemplateRef<string>, title?: string) {\n        this.steps.push({title: title ?? `Dynamic Step ${this.steps.length + 1}`, templateRef: templateRef});\n    }\n}\n";
      /***/
    },

    /***/
    "A7H6":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-vertical-layout/wizard-vertical-example.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function A7H6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-wizard-vertical>\n\n    <!--  content of the 1st step -->\n    <nui-wizard-step-v2 i18n-label label=\"First step\">\n        <!-- content of the current step -->\n        <span i18n>This is the first step of our vertical wizard</span>.\n\n        <!-- content of the footer -->\n        <ng-template wizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <!--  content of the 2nd step -->\n    <nui-wizard-step-v2 i18n-label label=\"Second step\">\n        <!-- content of the current step -->\n        <span i18n>This is the second step of our vertical wizard</span>.\n\n        <!-- content of the footer -->\n        <ng-template wizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <!--  content of the final step -->\n    <nui-wizard-step-v2 i18n-label label=\"Final step\">\n        <span i18n>We finally reached our last step</span>!\n        <!-- Notice how both label and footer can be placed anywhere in the content of wizard step -->\n        <ng-template wizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-template #wizardPrevious>\n        <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n            Previous\n        </button>\n    </ng-template>\n\n    <ng-template #wizardNext>\n        <button nuiWizardNext\n                type=\"button\"\n                nui-button\n                displayStyle=\"primary\"\n                icon=\"caret-right\"\n                iconRight=\"true\"\n        >Next</button>\n    </ng-template>\n</nui-wizard-vertical>\n";
      /***/
    },

    /***/
    "A8yM":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-dialog/wizard-dialog.example.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function A8yM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-template #dialogWizard>\n    <div nui-busy [busy]=\"busy\">\n        <div class=\"busy-content\">\n            <nui-dialog-header i18n-title title=\"Wizard dialog\" (closed)=\"closeDialog()\"></nui-dialog-header>\n            <div class=\"dialog-body compact-mode\">\n                <nui-wizard-horizontal linear>\n\n                    <!--  content of the 1st step -->\n                    <nui-wizard-step-v2>\n                        <!-- define the label which is displayed on the header stepper -->\n                        <ng-template wizardStepLabel>Completed</ng-template>\n\n                        <!-- content of the current step -->\n                        <span i18n>This is the first step of our horizontal wizard</span>.\n\n                        <!-- content of the footer -->\n                        <ng-template wizardStepFooter>\n                            <button type=\"button\" nui-button (click)=\"toggleBusy()\">\n                                Toggle busy\n                            </button>\n                            <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n                        </ng-template>\n                    </nui-wizard-step-v2>\n\n                    <!--  content of the 2nd step -->\n                    <nui-wizard-step-v2>\n                        <!-- define the label which is displayed on the header stepper -->\n                        <ng-template wizardStepLabel>Active</ng-template>\n\n                        <!-- content of the current step -->\n                        <span i18n>This is the second step of our horizontal wizard</span>.\n\n                        <!-- content of the footer -->\n                        <ng-template wizardStepFooter>\n                            <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n                        </ng-template>\n                    </nui-wizard-step-v2>\n\n                    <!--  content of the 3rd step -->\n                    <nui-wizard-step-v2>\n                        <!-- define the label which is displayed on the header stepper -->\n                        <ng-template wizardStepLabel>Not visited</ng-template>\n\n                        <!-- content of the current step -->\n                        <span i18n>This is the third step of our horizontal wizard</span>.\n\n                        <!-- content of the footer -->\n                        <ng-template wizardStepFooter>\n                            <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n                        </ng-template>\n                    </nui-wizard-step-v2>\n\n                    <!--  content of the final step -->\n                    <nui-wizard-step-v2>\n                        <ng-template wizardStepLabel>Summary</ng-template>\n                        <span i18n>We finally reached our last step</span>!\n                        <ng-template wizardStepFooter>\n                            <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                        </ng-template>\n                    </nui-wizard-step-v2>\n\n                    <ng-template #wizardCancel>\n                        <button type=\"button\" displayStyle=\"action\" nui-button (click)=\"closeDialog()\">\n                            Cancel\n                        </button>\n                    </ng-template>\n\n                    <ng-template #wizardPrevious>\n                        <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n                            Previous\n                        </button>\n                    </ng-template>\n\n                    <ng-template #wizardNext>\n                        <button nuiWizardNext\n                                type=\"button\"\n                                nui-button\n                                displayStyle=\"primary\"\n                                icon=\"caret-right\"\n                                iconRight=\"true\"\n                        >Next</button>\n                    </ng-template>\n                </nui-wizard-horizontal>\n            </div>\n        </div>\n        <nui-spinner size=\"large\" i18n-message message=\"Data is loading from remote server...\"></nui-spinner>\n    </div>\n</ng-template>\n\n<button nui-button type=\"button\"\n        (click)=\"openDialog(dialogWizard)\"\n        i18n>\n    Open dialog wizard\n</button>\n";
      /***/
    },

    /***/
    "Cu7f":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-vertical-layout/wizard-vertical-example.component.ts ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Cu7f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n@Component({\n    selector: \"nui-wizard-vertical-example\",\n    templateUrl: \"./wizard-vertical-example.component.html\",\n})\nexport class WizardVerticalExampleComponent {}\n";
      /***/
    },

    /***/
    "Dz05":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-horizontal-layout/wizard-horizontal-example.component.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dz05(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n@Component({\n    selector: \"nui-wizard-horizontal-example\",\n    templateUrl: \"./wizard-horizontal-example.component.html\",\n})\nexport class WizardHorizontalExampleComponent {}\n";
      /***/
    },

    /***/
    "ErOQ":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-busy/wizard-busy.example.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ErOQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div nui-busy [busy]=\"busy\" class=\"example-container\">\n    <div class=\"busy-content\">\n        <nui-wizard-horizontal linear>\n\n            <!--  content of the 1st step -->\n            <nui-wizard-step-v2>\n                <!-- define the label which is displayed on the header stepper -->\n                <ng-template wizardStepLabel>Make step busy</ng-template>\n\n                <!-- content of the current step -->\n                <p i18n>Welcome!</p>\n\n                <!-- content of the footer -->\n                <ng-template wizardStepFooter>\n                    <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n                </ng-template>\n            </nui-wizard-step-v2>\n\n            <!--  content of the 2nd step -->\n            <nui-wizard-step-v2>\n                <!-- define the label which is displayed on the header stepper -->\n                <ng-template wizardStepLabel>Final</ng-template>\n\n                <!-- content of the current step -->\n                <nui-checkbox name=\"nui-demo-checkbox\"\n                              i18n-title\n                              title=\"Check box with help text\"\n                              i18n-hint\n                              hint=\"This is some help text\"\n                              required=\"true\"\n                              [value]=\"false\"\n                              i18n>Check box with help text\n                </nui-checkbox>\n                <nui-checkbox name=\"nui-demo-checkbox-plain\"\n                              [checked]=\"true\"\n                              [value]=\"false\"\n                              i18n>Plain checkbox\n                </nui-checkbox>\n\n                <!-- content of the footer -->\n                <ng-template wizardStepFooter>\n                    <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                </ng-template>\n            </nui-wizard-step-v2>\n\n            <ng-template #wizardPrevious>\n                <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n                    Previous\n                </button>\n            </ng-template>\n\n            <ng-template #wizardNext>\n                <button nuiWizardNext\n                        type=\"button\"\n                        nui-button\n                        displayStyle=\"primary\"\n                        icon=\"caret-right\"\n                        iconRight=\"true\"\n                >Next</button>\n            </ng-template>\n        </nui-wizard-horizontal>\n    </div>\n    <nui-spinner id=\"nui-demo-spinner\" size=\"large\" i18n-message message=\"Data is loading from remote server...\"></nui-spinner>\n</div>\n\n<button nui-button type=\"button\" id=\"nui-demo-busy-button\" (click)=\"toggleStepBusy()\" i18n>Toggle busy on current step</button>\n";
      /***/
    },

    /***/
    "EyYP":
    /*!*************************************************************!*\
      !*** ./demo/src/components/demo/wizard-v2/wizard.module.ts ***!
      \*************************************************************/

    /*! exports provided: WizardModule */

    /***/
    function EyYP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardModule", function () {
        return WizardModule;
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
      "wZEo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["WizardDocsComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].alpha
          },
          showThemeSwitcher: true
        }
      }];

      var WizardModule = function WizardModule() {
        _classCallCheck(this, WizardModule);
      };

      WizardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: WizardModule
      });
      WizardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function WizardModule_Factory(t) {
          return new (t || WizardModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("Ptpp");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRadioModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDialogModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiWizardV2Module"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSpinnerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiBusyModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiProgressModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDatePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectV2Module"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WizardModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["WizardDocsComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardHorizontalExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardVerticalExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardCustomExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardCustomComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardDialogExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardBusyExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardCustomFooterExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardDynamicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardRemoveStepExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardAsyncFormValidationExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardWithCustomIconsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardRestoreStateExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRadioModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDialogModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiWizardV2Module"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSpinnerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiBusyModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiProgressModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDatePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectV2Module"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Fn2p":
    /*!*******************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard-v2/wizard-remove-step/wizard-remove-step-example.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: WizardRemoveStepExampleComponent */

    /***/
    function Fn2p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardRemoveStepExampleComponent", function () {
        return WizardRemoveStepExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */
      "ZgeA");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox-number/textbox-number.component */
      "ShSb");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */
      "9Oqf");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */
      "JSul");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */
      "ZSn2");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */
      "sp5V");

      var _c0 = ["normalStep"];

      function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var step_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r7.title);
        }
      }

      function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Previous ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_0_Template, 3, 0, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_1_Template, 3, 0, "ng-container", 15);
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var i_r8 = ctx_r16.index;
          var isLast_r9 = ctx_r16.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r8 !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r9);
        }
      }

      function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-step-v2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_1_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_container_2_Template, 1, 0, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_Template, 2, 2, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r7.templateRef);
        }
      }

      function WizardRemoveStepExampleComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardRemoveStepExampleComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRemoveStepExampleComponent_ng_template_5_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return ctx_r17.addStep(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add dynamic step w/template ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c7 = function _c7() {
        return {
          "font-weight": "bold"
        };
      };

      var WizardRemoveStepExampleComponent = /*#__PURE__*/function () {
        function WizardRemoveStepExampleComponent() {
          _classCallCheck(this, WizardRemoveStepExampleComponent);

          this.steps = [];
        }

        _createClass(WizardRemoveStepExampleComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.addStep(this.normalStep, $localize(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["Normal step"]))));
          }
        }, {
          key: "addStep",
          value: function addStep(templateRef, title) {
            this.steps.push({
              title: title !== null && title !== void 0 ? title : "Dynamic Step",
              templateRef: templateRef
            });
          }
        }, {
          key: "removeStep",
          value: function removeStep(index) {
            this.steps.splice(index, 1);
          }
        }]);

        return WizardRemoveStepExampleComponent;
      }();

      WizardRemoveStepExampleComponent.ɵfac = function WizardRemoveStepExampleComponent_Factory(t) {
        return new (t || WizardRemoveStepExampleComponent)();
      };

      WizardRemoveStepExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardRemoveStepExampleComponent,
        selectors: [["nui-wizard-remove-step-example"]],
        viewQuery: function WizardRemoveStepExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.normalStep = _t.first);
          }
        },
        decls: 16,
        vars: 5,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1726131819944962604$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS_2 = goog.getMsg(" Remove step dynamically ");
            i18n_1 = MSG_EXTERNAL_1726131819944962604$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS_2;
          } else {
            i18n_1 = $localize(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral([":\u241F0204750c4ece2a4fc149e671dd2c3ba82298f9ac\u241F1726131819944962604: Remove step dynamically "])));
          }

          var i18n_3;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2900895229541262648$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS__4 = goog.getMsg("Hi! I'm a step added dynamically using a TemplateRef by clicking a button from the first step !");
            i18n_3 = MSG_EXTERNAL_2900895229541262648$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS__4;
          } else {
            i18n_3 = $localize(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral([":\u241F256cc8ce36c7ece03c014ef84736f10288179f3f\u241F2900895229541262648:Hi! I'm a step added dynamically using a TemplateRef by clicking a button from the first step !"])));
          }

          var i18n_5;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS__6 = goog.getMsg("Hi! You can add next step dynamically");
            i18n_5 = MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS__6;
          } else {
            i18n_5 = $localize(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral([":\u241F9dfa7b9ebe128bde7cab896a85986ebb450f99f7\u241F4074000604906025359:Hi! You can add next step dynamically"])));
          }

          return [["linear", ""], ["wizard", ""], [4, "ngFor", "ngForOf"], ["dynamicStep", ""], ["normalStep", ""], [1, "d-flex"], [1, ""], [1, "nui-textbox--bold", 3, "ngStyle"], [3, "minValue"], ["number", ""], ["displayStyle", "destructive", "nui-button", "", "type", "button", 1, "ml-3", "h-25", "align-self-end", 3, "disabled", "click"], i18n_1, ["wizardStepLabel", ""], [4, "ngTemplateOutlet"], ["wizardStepFooter", ""], [4, "ngIf"], ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"], i18n_3, i18n_5, ["nui-button", "", "type", "button", 3, "click"]];
        },
        template: function WizardRemoveStepExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-horizontal", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_Template, 4, 1, "nui-wizard-step-v2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardRemoveStepExampleComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WizardRemoveStepExampleComponent_ng_template_5_Template, 4, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Step index to remove");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nui-textbox-number", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRemoveStepExampleComponent_Template_button_click_14_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

              return ctx.removeStep(+_r6.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c7));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", +_r6.value < 1);
          }
        },
        directives: [_src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_1__["WizardHorizontalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_3__["TextboxNumberComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_5__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_6__["WizardStepLabelDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_7__["WizardStepFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_8__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_8__["WizardStepperNextDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "JqMI":
    /*!************************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard-v2/wizard-horizontal-layout/wizard-horizontal-example.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: WizardHorizontalExampleComponent */

    /***/
    function JqMI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardHorizontalExampleComponent", function () {
        return WizardHorizontalExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */
      "ZgeA");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */
      "9Oqf");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */
      "ZSn2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */
      "sp5V");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      function WizardHorizontalExampleComponent_ng_template_5_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardHorizontalExampleComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardHorizontalExampleComponent_ng_template_5_ng_container_0_Template, 1, 0, "ng-container", 8);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);
        }
      }

      function WizardHorizontalExampleComponent_ng_template_10_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardHorizontalExampleComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardHorizontalExampleComponent_ng_template_10_ng_container_0_Template, 1, 0, "ng-container", 8);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
        }
      }

      function WizardHorizontalExampleComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Previous ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardHorizontalExampleComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var WizardHorizontalExampleComponent = function WizardHorizontalExampleComponent() {
        _classCallCheck(this, WizardHorizontalExampleComponent);
      };

      WizardHorizontalExampleComponent.ɵfac = function WizardHorizontalExampleComponent_Factory(t) {
        return new (t || WizardHorizontalExampleComponent)();
      };

      WizardHorizontalExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardHorizontalExampleComponent,
        selectors: [["nui-wizard-horizontal-example"]],
        decls: 15,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("First step");
            i18n_0 = MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral([":\u241F9170783b7882b9260aea1a22ae5cf2407fa3e64f\u241F8373557087720397153:First step"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8675920705208401217$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("This is the first step of our horizontal wizard");
            i18n_2 = MSG_EXTERNAL_8675920705208401217$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral([":\u241Fc9bf00bfbb1b8a6e46eb4e43075cf64abecea307\u241F8675920705208401217:This is the first step of our horizontal wizard"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Final step");
            i18n_4 = MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral([":\u241F0de8f1dbd57123d294729d71fd278eaf936d4a2b\u241F5385737502167048240:Final step"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7100330853882173244$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("We finally reached our last step");
            i18n_6 = MSG_EXTERNAL_7100330853882173244$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral([":\u241F414c233c4cbaae1a74728ed5d64304bbd36cdbe5\u241F7100330853882173244:We finally reached our last step"])));
          }

          return [["linear", ""], ["label", i18n_0], i18n_2, ["wizardStepFooter", ""], ["label", i18n_4], i18n_6, ["wizardPrevious", ""], ["wizardNext", ""], [4, "ngTemplateOutlet"], ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"]];
        },
        template: function WizardHorizontalExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-horizontal", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-wizard-step-v2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WizardHorizontalExampleComponent_ng_template_5_Template, 1, 1, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-wizard-step-v2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WizardHorizontalExampleComponent_ng_template_10_Template, 1, 1, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WizardHorizontalExampleComponent_ng_template_11_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WizardHorizontalExampleComponent_ng_template_13_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_1__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_2__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_3__["WizardStepFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_5__["WizardStepperPreviousDirective"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_5__["WizardStepperNextDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "KD0g":
    /*!*****************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard-v2/wizard-busy/wizard-busy.example.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: WizardBusyExampleComponent */

    /***/
    function KD0g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardBusyExampleComponent", function () {
        return WizardBusyExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/busy/busy.component */
      "3XPh");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */
      "ZgeA");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */
      "9Oqf");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */
      "JSul");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */
      "ZSn2");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");
      /* harmony import */


      var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/spinner/spinner.component */
      "NFOm");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */
      "sp5V");

      function WizardBusyExampleComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Make step busy");
        }
      }

      function WizardBusyExampleComponent_ng_template_7_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardBusyExampleComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardBusyExampleComponent_ng_template_7_ng_container_0_Template, 1, 0, "ng-container", 15);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r6);
        }
      }

      function WizardBusyExampleComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Final");
        }
      }

      function WizardBusyExampleComponent_ng_template_14_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardBusyExampleComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardBusyExampleComponent_ng_template_14_ng_container_0_Template, 1, 0, "ng-container", 15);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);
        }
      }

      function WizardBusyExampleComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Previous ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardBusyExampleComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var WizardBusyExampleComponent = /*#__PURE__*/function () {
        function WizardBusyExampleComponent() {
          _classCallCheck(this, WizardBusyExampleComponent);
        }

        _createClass(WizardBusyExampleComponent, [{
          key: "toggleStepBusy",
          value: function toggleStepBusy() {
            var _this2 = this;

            this.busy = !this.busy;
            setTimeout(function () {
              _this2.busy = false;
            }, 3000);
          }
        }]);

        return WizardBusyExampleComponent;
      }();

      WizardBusyExampleComponent.ɵfac = function WizardBusyExampleComponent_Factory(t) {
        return new (t || WizardBusyExampleComponent)();
      };

      WizardBusyExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardBusyExampleComponent,
        selectors: [["nui-wizard-v2-busy-example"]],
        decls: 22,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5890833044137447416$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Welcome!");
            i18n_0 = MSG_EXTERNAL_5890833044137447416$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral([":\u241F356501fb47a7de720e71263c3d1cce5d6e681c4b\u241F5890833044137447416:Welcome!"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5530604904987545137$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Check box with help text");
            i18n_2 = MSG_EXTERNAL_5530604904987545137$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral([":\u241Fc42399c4f4c441cd575f6140076703ec297e247b\u241F5530604904987545137:Check box with help text"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_829155627086234075$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("This is some help text");
            i18n_4 = MSG_EXTERNAL_829155627086234075$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral([":\u241Fba785d6cbb33a003a3ce1d20077ba67264374284\u241F829155627086234075:This is some help text"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4625037880137307880$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Check box with help text ");
            i18n_6 = MSG_EXTERNAL_4625037880137307880$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral([":\u241F024d88393c1563cabdfa0002d665402e5d1c2ee7\u241F4625037880137307880:Check box with help text "])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3295360311351903086$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Plain checkbox ");
            i18n_8 = MSG_EXTERNAL_3295360311351903086$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral([":\u241F6f7c537fd525c525de94695e18592749f58f597b\u241F3295360311351903086:Plain checkbox "])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_25258399261550967$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("Data is loading from remote server...");
            i18n_10 = MSG_EXTERNAL_25258399261550967$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral([":\u241Fdc0a65d80c4379ceca3424563f96da6b49156f5c\u241F25258399261550967:Data is loading from remote server..."])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5760615285289112280$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_13 = goog.getMsg("Toggle busy on current step");
            i18n_12 = MSG_EXTERNAL_5760615285289112280$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_13;
          } else {
            i18n_12 = $localize(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral([":\u241F4b5cefe4cdf44c6487b4f166461d54d331e7896d\u241F5760615285289112280:Toggle busy on current step"])));
          }

          return [["nui-busy", "", 1, "example-container", 3, "busy"], [1, "busy-content"], ["linear", ""], ["wizardStepLabel", ""], i18n_0, ["wizardStepFooter", ""], ["name", "nui-demo-checkbox", "title", i18n_2, "hint", i18n_4, "required", "true", 3, "value"], i18n_6, ["name", "nui-demo-checkbox-plain", 3, "checked", "value"], i18n_8, ["wizardPrevious", ""], ["wizardNext", ""], ["id", "nui-demo-spinner", "size", "large", "message", i18n_10], ["nui-button", "", "type", "button", "id", "nui-demo-busy-button", 3, "click"], i18n_12, [4, "ngTemplateOutlet"], ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"]];
        },
        template: function WizardBusyExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-wizard-horizontal", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-wizard-step-v2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardBusyExampleComponent_ng_template_4_Template, 1, 0, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WizardBusyExampleComponent_ng_template_7_Template, 1, 1, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-wizard-step-v2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WizardBusyExampleComponent_ng_template_9_Template, 1, 0, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-checkbox", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nui-checkbox", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](13, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WizardBusyExampleComponent_ng_template_14_Template, 1, 1, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WizardBusyExampleComponent_ng_template_15_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WizardBusyExampleComponent_ng_template_17_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "nui-spinner", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardBusyExampleComponent_Template_button_click_20_listener() {
              return ctx.toggleStepBusy();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](21, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.busy);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true)("value", false);
          }
        },
        directives: [_src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_1__["BusyComponent"], _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_4__["WizardStepLabelDirective"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_5__["WizardStepFooterDirective"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_10__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_10__["WizardStepperNextDirective"]],
        styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px red solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC1idXN5LmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKIiwiZmlsZSI6IndpemFyZC1idXN5LmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHJlZCBzb2xpZDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "LiSh":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-custom-footer/wizard-custom-footer-example.component.less ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LiSh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".custom-footer {\n    width: 100%;\n    padding: 10px;\n    border: 5px transparent solid;\n    color: white;\n\n    &.step_1 {\n        border-color: red;\n        button {\n            float: left;\n        }\n    }\n\n    &.step_2 {\n        border-color: green;\n        button {\n            float: right;\n        }\n    }\n\n    button {\n        min-width: 100px;\n    }\n}\n";
      /***/
    },

    /***/
    "LnRm":
    /*!***********************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard-v2/wizard-custom-footer/wizard-custom-footer-example.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: WizardCustomFooterExampleComponent */

    /***/
    function LnRm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardCustomFooterExampleComponent", function () {
        return WizardCustomFooterExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */
      "ZgeA");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */
      "9Oqf");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */
      "ZSn2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */
      "sp5V");

      function WizardCustomFooterExampleComponent_ng_template_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardCustomFooterExampleComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardCustomFooterExampleComponent_ng_template_5_ng_container_1_Template, 1, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);
        }
      }

      function WizardCustomFooterExampleComponent_ng_template_10_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardCustomFooterExampleComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardCustomFooterExampleComponent_ng_template_10_ng_container_1_Template, 1, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
        }
      }

      function WizardCustomFooterExampleComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Previous ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardCustomFooterExampleComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var WizardCustomFooterExampleComponent = function WizardCustomFooterExampleComponent() {
        _classCallCheck(this, WizardCustomFooterExampleComponent);
      };

      WizardCustomFooterExampleComponent.ɵfac = function WizardCustomFooterExampleComponent_Factory(t) {
        return new (t || WizardCustomFooterExampleComponent)();
      };

      WizardCustomFooterExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardCustomFooterExampleComponent,
        selectors: [["nui-wizard-custom-footer-example"]],
        decls: 15,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("First step");
            i18n_0 = MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral([":\u241F9170783b7882b9260aea1a22ae5cf2407fa3e64f\u241F8373557087720397153:First step"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8675920705208401217$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("This is the first step of our horizontal wizard");
            i18n_2 = MSG_EXTERNAL_8675920705208401217$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral([":\u241Fc9bf00bfbb1b8a6e46eb4e43075cf64abecea307\u241F8675920705208401217:This is the first step of our horizontal wizard"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Final step");
            i18n_4 = MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral([":\u241F0de8f1dbd57123d294729d71fd278eaf936d4a2b\u241F5385737502167048240:Final step"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7100330853882173244$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("We finally reached our last step");
            i18n_6 = MSG_EXTERNAL_7100330853882173244$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral([":\u241F414c233c4cbaae1a74728ed5d64304bbd36cdbe5\u241F7100330853882173244:We finally reached our last step"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3668697390496092496$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Custom button 1");
            i18n_8 = MSG_EXTERNAL_3668697390496092496$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__9;
          } else {
            i18n_8 = $localize(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral([":\u241F96e3b7d5379a74e0cfd2a2afd2b82a1f24ad4085\u241F3668697390496092496:Custom button 1"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5882938439796417832$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__11 = goog.getMsg("This is some custom content added in the footer for our first step");
            i18n_10 = MSG_EXTERNAL_5882938439796417832$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__11;
          } else {
            i18n_10 = $localize(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral([":\u241F14c7cd9caddd910b1fe744e22aea16613de15369\u241F5882938439796417832:This is some custom content added in the footer for our first step"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_42274725056941112$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__13 = goog.getMsg("Custom button 2");
            i18n_12 = MSG_EXTERNAL_42274725056941112$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__13;
          } else {
            i18n_12 = $localize(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral([":\u241Fb8e6835f3c34197445b33db7dd9a4daade3a9149\u241F42274725056941112:Custom button 2"])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8428719337002417226$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__15 = goog.getMsg("This is some custom content added in the footer for out second step");
            i18n_14 = MSG_EXTERNAL_8428719337002417226$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__15;
          } else {
            i18n_14 = $localize(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral([":\u241Fe380bb9480efe4e0787f56afdc1874c83218d0d3\u241F8428719337002417226:This is some custom content added in the footer for out second step"])));
          }

          return [["linear", ""], ["label", i18n_0], i18n_2, ["wizardStepFooter", ""], ["label", i18n_4], i18n_6, ["wizardPrevious", ""], ["wizardNext", ""], [1, "custom-footer", "step_1"], [4, "ngTemplateOutlet"], ["nui-button", "", "type", "button", "icon", "add"], i18n_8, i18n_10, [1, "custom-footer", "step_2"], ["nui-button", "", "type", "button", "icon", "remove"], i18n_12, i18n_14, ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"]];
        },
        template: function WizardCustomFooterExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-horizontal", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-wizard-step-v2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WizardCustomFooterExampleComponent_ng_template_5_Template, 6, 1, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-wizard-step-v2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WizardCustomFooterExampleComponent_ng_template_10_Template, 6, 1, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WizardCustomFooterExampleComponent_ng_template_11_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WizardCustomFooterExampleComponent_ng_template_13_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_1__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_2__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_3__["WizardStepFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_6__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_6__["WizardStepperNextDirective"]],
        styles: [".custom-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 5px transparent solid;\n  color: white;\n}\n.custom-footer.step_1[_ngcontent-%COMP%] {\n  border-color: red;\n}\n.custom-footer.step_1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  float: left;\n}\n.custom-footer.step_2[_ngcontent-%COMP%] {\n  border-color: green;\n}\n.custom-footer.step_2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  float: right;\n}\n.custom-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC1jdXN0b20tZm9vdGVyLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDSSxpQkFBQTtBQUNSO0FBRkk7RUFHUSxXQUFBO0FBRVo7QUFFSTtFQUNJLG1CQUFBO0FBQVI7QUFESTtFQUdRLFlBQUE7QUFDWjtBQWpCQTtFQXFCUSxnQkFBQTtBQURSIiwiZmlsZSI6IndpemFyZC1jdXN0b20tZm9vdGVyLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDVweCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAmLnN0ZXBfMSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnN0ZXBfMiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "PL0w":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-custom-layout/wizard-custom-example.component.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PL0w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { CdkStepper, STEPPER_GLOBAL_OPTIONS } from \"@angular/cdk/stepper\";\nimport {\n    AfterViewInit,\n    ChangeDetectionStrategy,\n    Component,\n    OnInit,\n    ViewChild,\n    ViewEncapsulation,\n} from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport { wizardAnimations, WizardDirective, WizardStepV2Component } from \"@nova-ui/bits\";\nimport { tap } from \"rxjs/operators\";\n\n@Component({\n    selector: \"nui-wizard-custom\",\n    templateUrl: \"wizard-custom.component.html\",\n    styleUrls: [\"wizard-custom.component.less\"],\n    host: {\n        \"class\": \"nui-wizard-custom-layout\",\n        \"aria-orientation\": \"horizontal\",\n    },\n    animations: [wizardAnimations.horizontalStepTransition],\n    providers: [\n        {provide: WizardDirective, useExisting: WizardCustomComponent},\n        {provide: CdkStepper, useExisting: WizardCustomComponent},\n    ],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class WizardCustomComponent extends WizardDirective {}\n\n@Component({\n    selector: \"nui-wizard-custom-example\",\n    templateUrl: \"./wizard-custom-example.component.html\",\n    styleUrls: [\"wizard-custom.component.less\"],\n    providers: [{\n        provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false},\n    }],\n})\nexport class WizardCustomExampleComponent implements OnInit, AfterViewInit {\n    public formGroup: FormGroup;\n    public steps: number = 1;\n    public selectedIndex: number = 0;\n    public progress: number;\n\n    @ViewChild(\"wizard\") wizard: WizardCustomComponent;\n\n    constructor(private formBuilder: FormBuilder) {}\n\n    ngOnInit() {\n        this.formGroup = new FormGroup({\n            \"personDetails\": this.formBuilder.group({\n                \"name\": [\"\", [Validators.required, Validators.minLength(3)]],\n                \"symptoms\": [undefined, Validators.required],\n            }),\n            \"diseaseDetails\": this.formBuilder.group({\n                \"date\": [\"\", Validators.required],\n            }),\n            \"contactDetails\": this.formBuilder.group({\n                \"email\": [\"\", [Validators.required, Validators.email]],\n                \"phone\": [\"\"],\n            }),\n        });\n    }\n\n    ngAfterViewInit() {\n        const update = (selectedIndex?: number, steps?: number) => {\n            setTimeout(() => {\n                if (steps) {\n                    this.steps = steps;\n                }\n                if (selectedIndex !== undefined && selectedIndex >= 0) {\n                    this.selectedIndex = selectedIndex;\n                }\n                this.progress = 100 * (1 + this.selectedIndex) / this.steps;\n            });\n        };\n\n        this.wizard.selectionChange.pipe(\n            tap(i => {\n                update(i.selectedIndex);\n            })\n        ).subscribe();\n\n        this.wizard.steps.changes.pipe(\n            tap(c => {\n                update(undefined, c.length);\n            })\n        ).subscribe();\n    }\n\n    validate(step: WizardStepV2Component) {\n        // mark all fields from current step as touched\n        // in order to display the validation messages\n        Object.keys((step.stepControl as FormGroup)?.controls || {})\n            .forEach(key => {\n                const field = this.wizard.selected.stepControl.get(key);\n                field?.markAsTouched();\n            });\n    }\n}\n";
      /***/
    },

    /***/
    "PipA":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-custom-layout/wizard-custom.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PipA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row custom-header\">\n        <div class=\"col-9 p-0\">\n            <div class=\"nui-wizard-horizontal-header-container\">\n                <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n                    <wizard-step-header\n                        class=\"nui-wizard-horizontal-header\"\n                        (click)=\"step.select()\"\n                        (keydown)=\"_onKeydown($event)\"\n                        [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n                        [id]=\"_getStepLabelId(i)\"\n                        [attr.aria-posinset]=\"i + 1\"\n                        [attr.aria-setsize]=\"steps.length\"\n                        [attr.aria-controls]=\"_getStepContentId(i)\"\n                        [attr.aria-selected]=\"selectedIndex == i\"\n                        [attr.aria-label]=\"step.ariaLabel || null\"\n                        [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                        [index]=\"i\"\n                        [state]=\"getStepState(i, step.state)\"\n                        [label]=\"step.label || step.stepLabel\"\n                        [selected]=\"selectedIndex === i\"\n                        [active]=\"step.completed || selectedIndex === i || !linear\"\n                        [optional]=\"step.optional\"\n                        [errorMessage]=\"step.errorMessage\"\n                        [disableRipple]=\"disableRipple\">\n                    </wizard-step-header>\n                    <div *ngIf=\"!isLast\" class=\"nui-wizard-horizontal-line\"></div>\n                </ng-container>\n            </div>\n            <div class=\"nui-wizard-horizontal-content-container\">\n                <h2>\n                    <ng-container *ngIf=\"selected.stepLabel\" [ngTemplateOutlet]=\"selected.stepLabel.template\"></ng-container>\n                    <ng-container *ngIf=\"!selected.stepLabel\">{{selected.label}}</ng-container>\n                </h2>\n                <div *ngFor=\"let step of steps; let i = index\"\n                     [attr.tabindex]=\"selectedIndex === i ? 0 : null\"\n                     class=\"nui-wizard-horizontal-content\" role=\"tabpanel\"\n                     [@stepTransition]=\"_getAnimationDirection(i)\"\n                     (@stepTransition.done)=\"_animationDone.next($event)\"\n                     [id]=\"_getStepContentId(i)\"\n                     [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n                     [attr.aria-expanded]=\"selectedIndex === i\">\n                    <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-3 custom-summary\">\n            <ng-content select=[summary]></ng-content>\n            <div *ngIf=\"selected.stepFooter\" class=\"row nui-wizard-horizontal-footer-container\">\n                <wizard-footer [footer]=\"selected.stepFooter\"></wizard-footer>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "Ptpp":
    /*!************************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard-v2 sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \************************************************************************************************************/

    /*! no static exports found */

    /***/
    function Ptpp(module, exports, __webpack_require__) {
      var map = {
        "./index.ts": "iAoM",
        "./wizard-async-validation-form/wizard-async-form-validation.example.component.html": "jYwr",
        "./wizard-async-validation-form/wizard-async-form-validation.example.component.ts": "qZWR",
        "./wizard-busy/wizard-busy.example.component.html": "ErOQ",
        "./wizard-busy/wizard-busy.example.component.less": "5iu2",
        "./wizard-busy/wizard-busy.example.component.ts": "rjNf",
        "./wizard-custom-footer/wizard-custom-footer-example.component.html": "2/6m",
        "./wizard-custom-footer/wizard-custom-footer-example.component.less": "LiSh",
        "./wizard-custom-footer/wizard-custom-footer-example.component.ts": "WLwN",
        "./wizard-custom-layout/wizard-custom-example.component.html": "1sWM",
        "./wizard-custom-layout/wizard-custom-example.component.ts": "PL0w",
        "./wizard-custom-layout/wizard-custom.component.html": "PipA",
        "./wizard-custom-layout/wizard-custom.component.less": "nrQw",
        "./wizard-dialog/wizard-dialog.example.component.html": "A8yM",
        "./wizard-dialog/wizard-dialog.example.component.ts": "mbMD",
        "./wizard-docs/wizard-docs.component.html": "3Uzl",
        "./wizard-docs/wizard-docs.component.ts": "U0rU",
        "./wizard-dynamic/wizard-dynamic.example.component.html": "Vkgm",
        "./wizard-dynamic/wizard-dynamic.example.component.ts": "6e2i",
        "./wizard-horizontal-layout/wizard-horizontal-example.component.html": "s3gB",
        "./wizard-horizontal-layout/wizard-horizontal-example.component.ts": "Dz05",
        "./wizard-remove-step/wizard-remove-step-example.component.html": "U9Jp",
        "./wizard-remove-step/wizard-remove-step-example.component.ts": "0dsp",
        "./wizard-restore-state/wizard-restore-state.example.component.html": "gtxr",
        "./wizard-restore-state/wizard-restore-state.example.component.ts": "knXS",
        "./wizard-vertical-layout/wizard-vertical-example.component.html": "A7H6",
        "./wizard-vertical-layout/wizard-vertical-example.component.ts": "Cu7f",
        "./wizard-with-custom-icons/wizard-with-custom-icons-example.component.html": "oZ+g",
        "./wizard-with-custom-icons/wizard-with-custom-icons-example.component.ts": "mO7N",
        "./wizard.module.ts": "TL+W"
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
      webpackContext.id = "Ptpp";
      /***/
    },

    /***/
    "TL+W":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TLW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiBusyModule,\n    NuiButtonModule,\n    NuiCheckboxModule,\n    NuiDatePickerModule,\n    NuiDialogModule,\n    NuiDocsModule,\n    NuiFormFieldModule,\n    NuiIconModule,\n    NuiMessageModule,\n    NuiProgressModule,\n    NuiRadioModule,\n    NuiSpinnerModule,\n    NuiTextboxModule,\n    NuiValidationMessageModule,\n    NuiWizardV2Module,\n    SrlcStage,\n    NuiSelectV2Module,\n    WIZARD_CONFIG,\n    IWizardConfig,\n    WIZARD_CONFIG_DEFAULT,\n} from \"@nova-ui/bits\";\n\nimport {\n    WizardBusyExampleComponent,\n    WizardCustomComponent,\n    WizardCustomExampleComponent,\n    WizardCustomFooterExampleComponent,\n    WizardDialogExampleComponent,\n    WizardDocsComponent,\n    WizardDynamicExampleComponent,\n    WizardHorizontalExampleComponent,\n    WizardRemoveStepExampleComponent,\n    WizardVerticalExampleComponent,\n    WizardAsyncFormValidationExampleComponent,\n    WizardWithCustomIconsExampleComponent,\n    WizardRestoreStateExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: WizardDocsComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.alpha,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiMessageModule,\n        NuiDocsModule,\n        NuiTextboxModule,\n        NuiRadioModule,\n        NuiCheckboxModule,\n        NuiDialogModule,\n        NuiValidationMessageModule,\n        NuiFormFieldModule,\n        FormsModule,\n        ReactiveFormsModule,\n        RouterModule.forChild(routes),\n        NuiWizardV2Module,\n        NuiSpinnerModule,\n        NuiBusyModule,\n        NuiProgressModule,\n        NuiDatePickerModule,\n        NuiIconModule,\n        NuiSelectV2Module,\n    ],\n    declarations: [\n        WizardDocsComponent,\n        WizardHorizontalExampleComponent,\n        WizardVerticalExampleComponent,\n        WizardCustomExampleComponent,\n        WizardCustomComponent,\n        WizardDialogExampleComponent,\n        WizardBusyExampleComponent,\n        WizardCustomFooterExampleComponent,\n        WizardDynamicExampleComponent,\n        WizardRemoveStepExampleComponent,\n        WizardAsyncFormValidationExampleComponent,\n        WizardWithCustomIconsExampleComponent,\n        WizardRestoreStateExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class WizardModule {}\n";
      /***/
    },

    /***/
    "U0rU":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-docs/wizard-docs.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function U0rU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-wizard-v2-example\",\n    templateUrl: \"./wizard-docs.component.html\",\n})\nexport class WizardDocsComponent {}\n";
      /***/
    },

    /***/
    "U9Jp":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-remove-step/wizard-remove-step-example.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function U9Jp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-wizard-horizontal linear #wizard>\n    <nui-wizard-step-v2 *ngFor=\"let step of steps; let i = index; let isLast = last\">\n        <ng-template wizardStepLabel>{{step.title}}</ng-template>\n        <ng-container *ngTemplateOutlet=\"step.templateRef\"></ng-container>\n        <ng-template wizardStepFooter>\n            <ng-container *ngIf=\"i !== 0\">\n                <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n                    Previous\n                </button>\n            </ng-container>\n            <ng-container *ngIf=\"!isLast\">\n                <button nuiWizardNext\n                        type=\"button\"\n                        nui-button\n                        displayStyle=\"primary\"\n                        icon=\"caret-right\"\n                        iconRight=\"true\"\n                >Next</button>\n            </ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-template #dynamicStep>\n        <p i18n>Hi! I'm a step added dynamically using a TemplateRef by clicking a button from the first step !</p>\n    </ng-template>\n\n    <ng-template #normalStep>\n        <p i18n>Hi! You can add next step dynamically</p>\n\n        <button nui-button type=\"button\" (click)=\"addStep(dynamicStep)\">\n            Add dynamic step w/template\n        </button>\n\n    </ng-template>\n</nui-wizard-horizontal>\n<div class=\"d-flex\">\n    <div class=\"\">\n        <span class=\"nui-textbox--bold\" [ngStyle]=\"{ 'font-weight': 'bold' }\">Step index to remove</span> <br>\n        <nui-textbox-number [minValue]=\"1\" #number></nui-textbox-number>\n    </div>\n    <button class=\"ml-3 h-25 align-self-end\"\n            displayStyle=\"destructive\"\n            nui-button type=\"button\"\n            [disabled]=\"+number.value < 1\"\n            (click)=\"removeStep(+number.value)\"\n            i18n>\n        Remove step dynamically\n    </button>\n</div>\n";
      /***/
    },

    /***/
    "Vkgm":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-dynamic/wizard-dynamic.example.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vkgm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-wizard-horizontal linear #wizardComponent>\n    <!--Static step-->\n    <nui-wizard-step-v2 i18n-label label=\"Normal step\">\n        <p i18n>Hi! You can add next step dynamically</p>\n\n        <button nui-button type=\"button\" (click)=\"addStep(dynamicTemplate2)\">\n            Add dynamic step w/template\n        </button>\n\n        <ng-template wizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <nui-wizard-step-v2 *ngIf=\"enableDynamicStepWithButton\" i18n-label label=\"Added dynamically\">\n        <ng-template wizardStepLabel>Dynamic w/button</ng-template>\n        <p i18n>Hi! I'm dynamic step that can be enabled/disabled programmatically via the toggle button under the wizard !</p>\n\n        <ng-template wizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-container *ngTemplateOutlet=\"dynamicStepWithTemplate\" ngProjectAs=\"nui-wizard-step-v2\"></ng-container>\n    <ng-template #dynamicStepWithTemplate>\n        <nui-wizard-step-v2>\n            <ng-template wizardStepLabel>Dynamic w/template</ng-template>\n            <p i18n>Hi! I'm dynamic step added automatically !</p>\n\n            <ng-template wizardStepFooter>\n                <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n            </ng-template>\n        </nui-wizard-step-v2>\n    </ng-template>\n\n    <nui-wizard-step-v2 *ngFor=\"let step of steps\">\n        <ng-template wizardStepLabel>{{step.title}}</ng-template>\n        <ng-container *ngTemplateOutlet=\"step.templateRef\"></ng-container>\n        <ng-template wizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-template #dynamicTemplate1>\n        <p i18n>Hi! I'm dynamic step added automatically during ngAfterViewInit of this wizard using a TemplateRef!</p>\n    </ng-template>\n\n    <ng-template #dynamicTemplate2>\n        <p i18n>Hi! I'm a step added dynamically using a TemplateRef by clicking a button from the first step !</p>\n    </ng-template>\n\n\n\n    <ng-template #wizardPrevious>\n        <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n            Previous\n        </button>\n    </ng-template>\n\n    <ng-template #wizardNext>\n        <button nuiWizardNext\n                type=\"button\"\n                nui-button\n                displayStyle=\"primary\"\n                icon=\"caret-right\"\n                iconRight=\"true\"\n        >Next</button>\n    </ng-template>\n</nui-wizard-horizontal>\n<div>\n    <button nui-button type=\"button\" (click)=\"toggleStep()\">\n        {{!enableDynamicStepWithButton ? \"Enable\" : \"Disable\" }} dynamic step w/button\n    </button>\n</div>\n";
      /***/
    },

    /***/
    "WLwN":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-custom-footer/wizard-custom-footer-example.component.ts ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WLwN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n@Component({\n    selector: \"nui-wizard-custom-footer-example\",\n    templateUrl: \"./wizard-custom-footer-example.component.html\",\n    styleUrls: [\"./wizard-custom-footer-example.component.less\"],\n})\nexport class WizardCustomFooterExampleComponent {}\n";
      /***/
    },

    /***/
    "cde7":
    /*!***********************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard-v2/wizard-dynamic/wizard-dynamic.example.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: WizardDynamicExampleComponent */

    /***/
    function cde7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardDynamicExampleComponent", function () {
        return WizardDynamicExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */
      "ZgeA");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */
      "9Oqf");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */
      "ZSn2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */
      "JSul");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */
      "sp5V");

      var _c0 = ["dynamicTemplate1"];

      function WizardDynamicExampleComponent_ng_template_7_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDynamicExampleComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDynamicExampleComponent_ng_template_7_ng_container_0_Template, 1, 0, "ng-container", 14);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r13);
        }
      }

      function WizardDynamicExampleComponent_nui_wizard_step_v2_8_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Dynamic w/button");
        }
      }

      function WizardDynamicExampleComponent_nui_wizard_step_v2_8_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDynamicExampleComponent_nui_wizard_step_v2_8_ng_template_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDynamicExampleComponent_nui_wizard_step_v2_8_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDynamicExampleComponent_nui_wizard_step_v2_8_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDynamicExampleComponent_nui_wizard_step_v2_8_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 14);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r13);
        }
      }

      function WizardDynamicExampleComponent_nui_wizard_step_v2_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-step-v2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDynamicExampleComponent_nui_wizard_step_v2_8_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardDynamicExampleComponent_nui_wizard_step_v2_8_ng_template_4_Template, 2, 2, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardDynamicExampleComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 18);
        }
      }

      function WizardDynamicExampleComponent_ng_template_10_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Dynamic w/template");
        }
      }

      function WizardDynamicExampleComponent_ng_template_10_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDynamicExampleComponent_ng_template_10_ng_template_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDynamicExampleComponent_ng_template_10_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDynamicExampleComponent_ng_template_10_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDynamicExampleComponent_ng_template_10_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 14);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r13);
        }
      }

      function WizardDynamicExampleComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-step-v2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDynamicExampleComponent_ng_template_10_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardDynamicExampleComponent_ng_template_10_ng_template_4_Template, 2, 2, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardDynamicExampleComponent_nui_wizard_step_v2_12_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var step_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r24.title);
        }
      }

      function WizardDynamicExampleComponent_nui_wizard_step_v2_12_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDynamicExampleComponent_nui_wizard_step_v2_12_ng_template_3_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDynamicExampleComponent_nui_wizard_step_v2_12_ng_template_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDynamicExampleComponent_nui_wizard_step_v2_12_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDynamicExampleComponent_nui_wizard_step_v2_12_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDynamicExampleComponent_nui_wizard_step_v2_12_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 14);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r13);
        }
      }

      function WizardDynamicExampleComponent_nui_wizard_step_v2_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-step-v2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDynamicExampleComponent_nui_wizard_step_v2_12_ng_template_1_Template, 1, 1, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardDynamicExampleComponent_nui_wizard_step_v2_12_ng_container_2_Template, 1, 0, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardDynamicExampleComponent_nui_wizard_step_v2_12_ng_template_3_Template, 2, 2, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r24.templateRef);
        }
      }

      function WizardDynamicExampleComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardDynamicExampleComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardDynamicExampleComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Previous ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardDynamicExampleComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var WizardDynamicExampleComponent = /*#__PURE__*/function () {
        function WizardDynamicExampleComponent() {
          _classCallCheck(this, WizardDynamicExampleComponent);

          this.enableDynamicStepWithButton = false;
          this.steps = [];
        }

        _createClass(WizardDynamicExampleComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.addStep(this.dynamicTemplate1, $localize(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["My first dynamic step"]))));
          }
        }, {
          key: "toggleStep",
          value: function toggleStep() {
            this.enableDynamicStepWithButton = !this.enableDynamicStepWithButton;
          }
        }, {
          key: "addStep",
          value: function addStep(templateRef, title) {
            this.steps.push({
              title: title !== null && title !== void 0 ? title : "Dynamic Step ".concat(this.steps.length + 1),
              templateRef: templateRef
            });
          }
        }]);

        return WizardDynamicExampleComponent;
      }();

      WizardDynamicExampleComponent.ɵfac = function WizardDynamicExampleComponent_Factory(t) {
        return new (t || WizardDynamicExampleComponent)();
      };

      WizardDynamicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardDynamicExampleComponent,
        selectors: [["nui-wizard-dynamic-example"]],
        viewQuery: function WizardDynamicExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dynamicTemplate1 = _t.first);
          }
        },
        decls: 24,
        vars: 4,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7057102079154255396$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_2 = goog.getMsg("Normal step");
            i18n_1 = MSG_EXTERNAL_7057102079154255396$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_2;
          } else {
            i18n_1 = $localize(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral([":\u241F4c3fab8d69b61816e7bdb18941b4f57a499c1618\u241F7057102079154255396:Normal step"])));
          }

          var i18n_3;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_4 = goog.getMsg("Hi! You can add next step dynamically");
            i18n_3 = MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_4;
          } else {
            i18n_3 = $localize(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral([":\u241F9dfa7b9ebe128bde7cab896a85986ebb450f99f7\u241F4074000604906025359:Hi! You can add next step dynamically"])));
          }

          var i18n_5;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7677587117161478042$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_6 = goog.getMsg("Added dynamically");
            i18n_5 = MSG_EXTERNAL_7677587117161478042$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_6;
          } else {
            i18n_5 = $localize(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral([":\u241Fe8b043308e5746251c9d64a33aa7c6050291d341\u241F7677587117161478042:Added dynamically"])));
          }

          var i18n_7;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6832495856074687708$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__8 = goog.getMsg("Hi! I'm dynamic step that can be enabled/disabled programmatically via the toggle button under the wizard !");
            i18n_7 = MSG_EXTERNAL_6832495856074687708$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__8;
          } else {
            i18n_7 = $localize(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral([":\u241Fcf3947ced955759e4df64b8c7d22970f4dcb8162\u241F6832495856074687708:Hi! I'm dynamic step that can be enabled/disabled programmatically via the toggle button under the wizard !"])));
          }

          var i18n_9;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8141490904213009277$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__10 = goog.getMsg("Hi! I'm dynamic step added automatically !");
            i18n_9 = MSG_EXTERNAL_8141490904213009277$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__10;
          } else {
            i18n_9 = $localize(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral([":\u241F09fdb1b71e257413350704f5b38b1149e15cca93\u241F8141490904213009277:Hi! I'm dynamic step added automatically !"])));
          }

          var i18n_11;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6741901999086012076$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__12 = goog.getMsg("Hi! I'm dynamic step added automatically during ngAfterViewInit of this wizard using a TemplateRef!");
            i18n_11 = MSG_EXTERNAL_6741901999086012076$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__12;
          } else {
            i18n_11 = $localize(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral([":\u241Fdcc1be5be7d583d8da709807686db795b39e4e4d\u241F6741901999086012076:Hi! I'm dynamic step added automatically during ngAfterViewInit of this wizard using a TemplateRef!"])));
          }

          var i18n_13;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2900895229541262648$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__14 = goog.getMsg("Hi! I'm a step added dynamically using a TemplateRef by clicking a button from the first step !");
            i18n_13 = MSG_EXTERNAL_2900895229541262648$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__14;
          } else {
            i18n_13 = $localize(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral([":\u241F256cc8ce36c7ece03c014ef84736f10288179f3f\u241F2900895229541262648:Hi! I'm a step added dynamically using a TemplateRef by clicking a button from the first step !"])));
          }

          return [["linear", ""], ["wizardComponent", ""], ["label", i18n_1], i18n_3, ["nui-button", "", "type", "button", 3, "click"], ["wizardStepFooter", ""], ["label", i18n_5, 4, "ngIf"], ["ngProjectAs", "nui-wizard-step-v2", 5, ["nui-wizard-step-v2"], 4, "ngTemplateOutlet"], ["dynamicStepWithTemplate", ""], [4, "ngFor", "ngForOf"], ["dynamicTemplate1", ""], ["dynamicTemplate2", ""], ["wizardPrevious", ""], ["wizardNext", ""], [4, "ngTemplateOutlet"], ["label", i18n_5], ["wizardStepLabel", ""], i18n_7, ["ngProjectAs", "nui-wizard-step-v2", 5, ["nui-wizard-step-v2"]], i18n_9, i18n_11, i18n_13, ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"]];
        },
        template: function WizardDynamicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-horizontal", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-wizard-step-v2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDynamicExampleComponent_Template_button_click_5_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

              var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

              return ctx.addStep(_r9);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add dynamic step w/template ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WizardDynamicExampleComponent_ng_template_7_Template, 1, 1, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WizardDynamicExampleComponent_nui_wizard_step_v2_8_Template, 5, 0, "nui-wizard-step-v2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WizardDynamicExampleComponent_ng_container_9_Template, 1, 0, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WizardDynamicExampleComponent_ng_template_10_Template, 5, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WizardDynamicExampleComponent_nui_wizard_step_v2_12_Template, 4, 1, "nui-wizard-step-v2", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WizardDynamicExampleComponent_ng_template_13_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WizardDynamicExampleComponent_ng_template_15_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WizardDynamicExampleComponent_ng_template_17_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WizardDynamicExampleComponent_ng_template_19_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDynamicExampleComponent_Template_button_click_22_listener() {
              return ctx.toggleStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enableDynamicStepWithButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.enableDynamicStepWithButton ? "Enable" : "Disable", " dynamic step w/button ");
          }
        },
        directives: [_src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_1__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_2__["WizardStepV2Component"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_4__["WizardStepFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_6__["WizardStepLabelDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_7__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_7__["WizardStepperNextDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "gtxr":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-restore-state/wizard-restore-state.example.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gtxr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-template #dialogWizard>\n    <nui-dialog-header i18n-title\n                       title=\"Restore Wizard State\"\n                       (closed)=\"closeDialog()\">\n    </nui-dialog-header>\n    <form class=\"dialog-body compact-mode\"\n          [formGroup]=\"form\"\n          *ngIf=\"form\">\n        <nui-wizard-horizontal\n            linear\n            [state]=\"state\"\n            (finished)=\"saveState($event)\"\n        >\n            <nui-wizard-step-v2 label=\"Person Details\"\n                                formGroupName=\"personDetails\"\n                                [stepControl]=\"form.get(['personDetails'])\">\n\n                <div class=\"px-5 pb-5\">\n                    <nui-form-field [control]=\"form.get(['personDetails','name'])\"\n                                    class=\"d-block mb-4 mt-4\"\n                                    i18n-caption\n                                    caption=\"Name\">\n                        <nui-textbox formControlName=\"name\"></nui-textbox>\n                        <nui-validation-message for=\"required\"\n                                                *ngIf=\"form.get(['personDetails','name'])?.errors?.required\"\n                                                i18n>\n                            This is required\n                        </nui-validation-message>\n                    </nui-form-field>\n\n                    <nui-form-field [control]=\"form.get(['personDetails','privacy'])\">\n                        <nui-checkbox formControlName=\"privacy\" [value]=\"true\">\n                            Privacy Policy\n                        </nui-checkbox>\n\n                        <nui-validation-message for=\"required\"\n                                                *ngIf=\"form.get(['personDetails','privacy'])?.errors?.required\"\n                                                i18n>\n                            This is required\n                        </nui-validation-message>\n                    </nui-form-field>\n                </div>\n\n                <ng-template wizardStepFooter>\n                    <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                    <ng-container *ngTemplateOutlet=\"wizardNext; context: { form: 'personDetails' }\"></ng-container>\n                </ng-template>\n            </nui-wizard-step-v2>\n\n            <nui-wizard-step-v2 label=\"Organization\"\n                                formGroupName=\"organization\"\n                                [stepControl]=\"form.get(['organization'])\">\n\n                <div class=\"p-5\">\n                    <nui-form-field [control]=\"form.get(['organization', 'title'])\"\n                                    class=\"d-block mb-4\"\n                                    i18n-caption\n                                    caption=\"Organization\">\n                        <nui-textbox formControlName=\"title\"></nui-textbox>\n                        <nui-validation-message for=\"required\"\n                                                *ngIf=\"form.get(['organization','title'])?.errors?.required\"\n                                                i18n>\n                            This is required\n                        </nui-validation-message>\n                    </nui-form-field>\n                    <nui-form-field caption=\"Date\"\n                                    class=\"d-block mb-4\"\n                                    [control]=\"form.get(['organization','date'])\">\n                        <nui-date-picker formControlName=\"date\" i18n></nui-date-picker>\n                        <nui-validation-message for=\"required\"\n                                                *ngIf=\"form.get(['organization','date'])?.errors?.required\"\n                                                i18n>\n                            This is required\n                        </nui-validation-message>\n                    </nui-form-field>\n                    <nui-form-field [control]=\"form.get(['organization','createDynamicStep1'])\" class=\"d-block\">\n                        <nui-checkbox formControlName=\"createDynamicStep1\" [value]=\"true\">\n                            Add first step dynamically\n                        </nui-checkbox>\n                    </nui-form-field>\n                    <nui-form-field [control]=\"form.get(['organization','createDynamicStep2'])\" class=\"d-block\">\n                        <nui-checkbox formControlName=\"createDynamicStep2\" [value]=\"true\">\n                            Add second step dynamically\n                        </nui-checkbox>\n                    </nui-form-field>\n                </div>\n\n                    <ng-template wizardStepFooter>\n                        <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                        <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                        <ng-container *ngTemplateOutlet=\"wizardNext; context: { form: 'organization' }\"></ng-container>\n                    </ng-template>\n            </nui-wizard-step-v2>\n\n            <nui-wizard-step-v2 *ngFor=\"let step of dynamicSteps\">\n                <ng-template wizardStepLabel>{{step.title}}</ng-template>\n                <div class=\"p-5\">\n                    <ng-container *ngTemplateOutlet=\"step.templateRef\"></ng-container>\n                </div>\n                <ng-template wizardStepFooter>\n                    <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                    <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n                </ng-template>\n            </nui-wizard-step-v2>\n\n            <nui-wizard-step-v2 formGroupName=\"contactDetails\"\n                                [stepControl]=\"form.get(['contactDetails'])\"\n                                #finalStep>\n\n                <ng-template wizardStepLabel>\n                    <span>Contact Details</span>\n                </ng-template>\n\n                <div class=\"px-5 pb-5\">\n                    <nui-form-field [control]=\"form.get(['contactDetails','email'])\"\n                                    class=\"d-block mb-4 mt-4\"\n                                    i18n-caption\n                                    caption=\"Email\">\n                        <nui-textbox type=\"email\" formControlName=\"email\"></nui-textbox>\n                        <nui-validation-message for=\"required\"\n                                                *ngIf=\"form.get(['contactDetails','email'])?.errors?.required\"\n                                                i18n>\n                            This is required\n                        </nui-validation-message>\n    \n                        <nui-validation-message for=\"email\"\n                                                *ngIf=\"form.get(['contactDetails','email'])?.errors?.email\"\n                                                i18n>\n                            Invalid email\n                        </nui-validation-message>\n                    </nui-form-field>\n    \n                    <nui-form-field caption=\"Select\"\n                        [control]=\"form.get(['contactDetails','options'])\">\n                        <nui-select-v2 formControlName=\"options\">\n                            <nui-select-v2-option value=\"Item 1\">Item 1</nui-select-v2-option>\n                            <nui-select-v2-option value=\"Item 2\">Item 2</nui-select-v2-option>\n                        </nui-select-v2>\n                    </nui-form-field>\n                </div>\n\n                    <ng-template wizardStepFooter>\n                        <button nui-button\n                                type=\"button\"\n                                displayStyle=\"destructive\"\n                                (click)=\"resetStep(finalStep)\">\n                            Reset step\n                        </button>\n                        <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                        <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                        <button type=\"button\"\n                                nui-button\n                                displayStyle=\"primary\"\n                                [disabled]=\"form.get(['contactDetails','email']).invalid\"\n                                (click)=\"completeWizard(finalStep)\"\n                        >\n                            Finish\n                        </button>\n                    </ng-template>\n            </nui-wizard-step-v2>\n\n            <ng-template #wizardPrevious>\n                <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n                    Previous\n                </button>\n            </ng-template>\n\n            <ng-template #wizardNext let-form=\"form\">\n                <button nuiWizardNext\n                        type=\"button\"\n                        nui-button\n                        displayStyle=\"primary\"\n                        icon=\"caret-right\"\n                        iconRight=\"true\"\n                        (click)=\"validateStep(form)\"\n                >Next</button>\n            </ng-template>\n\n            <ng-template #wizardCancel>\n                <button type=\"button\" nui-button displayStyle=\"action\" (click)=\"closeDialog()\">\n                    Cancel\n                </button>\n            </ng-template>\n        </nui-wizard-horizontal>\n    </form>\n</ng-template>\n\n<ng-template #dynamicTemplate1>\n    <p i18n>Hi! I was created dynamically, because you've checked the checkbox on the previous step! Uncheck it to hide me!</p>\n</ng-template>\n\n<ng-template #dynamicTemplate2>\n    <p i18n>This is another template rendered dynamically!</p>\n    <button type=\"button\" nui-button class=\"mb-3\" (click)=\"awesome = !awesome\">Click if you're awesome</button>\n    <nui-message *ngIf=\"awesome\" type=\"ok\">You are awesome!</nui-message>\n</ng-template>\n\n<button nui-button type=\"button\" (click)=\"openDialog(dialogWizard)\" i18n> Open dialog wizard</button>\n";
      /***/
    },

    /***/
    "i5CQ":
    /*!****************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard-v2/wizard-custom-layout/wizard-custom-example.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: WizardCustomComponent, WizardCustomExampleComponent */

    /***/
    function i5CQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardCustomComponent", function () {
        return WizardCustomComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardCustomExampleComponent", function () {
        return WizardCustomExampleComponent;
      });
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "B/XX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_footer_wizard_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-footer/wizard-footer.component */
      "Gufs");
      /* harmony import */


      var _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/progress/progress.component */
      "FA8p");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */
      "9Oqf");
      /* harmony import */


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/form-field/form-field.component */
      "L5T1");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */
      "ZSn2");
      /* harmony import */


      var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../../src/lib/validation-message/validation-message.component */
      "Dm7Q");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */
      "JSul");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */
      "sp5V");

      function WizardCustomComponent_ng_container_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 13);
        }
      }

      function WizardCustomComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "wizard-step-header", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WizardCustomComponent_ng_container_4_Template_wizard_step_header_click_1_listener() {
            var step_r5 = ctx.$implicit;
            return step_r5.select();
          })("keydown", function WizardCustomComponent_ng_container_4_Template_wizard_step_header_keydown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r10._onKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WizardCustomComponent_ng_container_4_div_2_Template, 1, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var step_r5 = ctx.$implicit;
          var i_r6 = ctx.index;
          var isLast_r7 = ctx.last;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabIndex", ctx_r0._getFocusIndex() === i_r6 ? 0 : -1)("id", ctx_r0._getStepLabelId(i_r6))("index", i_r6)("state", ctx_r0.getStepState(i_r6, step_r5.state))("label", step_r5.label || step_r5.stepLabel)("selected", ctx_r0.selectedIndex === i_r6)("active", step_r5.completed || ctx_r0.selectedIndex === i_r6 || !ctx_r0.linear)("optional", step_r5.optional)("errorMessage", step_r5.errorMessage)("disableRipple", ctx_r0.disableRipple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-posinset", i_r6 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r6))("aria-selected", ctx_r0.selectedIndex == i_r6)("aria-label", step_r5.ariaLabel || null)("aria-labelledby", !step_r5.ariaLabel && step_r5.ariaLabelledby ? step_r5.ariaLabelledby : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !isLast_r7);
        }
      }

      function WizardCustomComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0, 14);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.selected.stepLabel.template);
        }
      }

      function WizardCustomComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.selected.label);
        }
      }

      function WizardCustomComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("@stepTransition.done", function WizardCustomComponent_div_9_Template_div_animation_stepTransition_done_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r14._animationDone.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](1, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r12 = ctx.$implicit;
          var i_r13 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@stepTransition", ctx_r3._getAnimationDirection(i_r13))("id", ctx_r3._getStepContentId(i_r13));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabindex", ctx_r3.selectedIndex === i_r13 ? 0 : null)("aria-labelledby", ctx_r3._getStepLabelId(i_r13))("aria-expanded", ctx_r3.selectedIndex === i_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", step_r12.content);
        }
      }

      function WizardCustomComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "wizard-footer", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("footer", ctx_r4.selected.stepFooter);
        }
      }

      var _c0 = [[["", "summary", ""]]];
      var _c1 = ["[summary]"];
      var _c2 = ["wizard"];

      var _c23 = function _c23() {
        return ["diseaseDetails", "date"];
      };

      function WizardCustomExampleComponent_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var tmp_0_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c23)).valid ? "Since " + ((tmp_0_0 = ctx_r1.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c23))) == null ? null : tmp_0_0.value.format("D MMM YYYY")) : "Yes", " ");
        }
      }

      function WizardCustomExampleComponent_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }
      }

      function WizardCustomExampleComponent_ng_container_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }
      }

      function WizardCustomExampleComponent_nui_validation_message_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardCustomExampleComponent_nui_validation_message_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardCustomExampleComponent_nui_validation_message_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardCustomExampleComponent_ng_template_29_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
        }
      }

      function WizardCustomExampleComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WizardCustomExampleComponent_ng_template_29_ng_container_0_Template, 1, 0, "ng-container", 35);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r15);
        }
      }

      function WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](0, 40);
        }
      }

      function WizardCustomExampleComponent_nui_wizard_step_v2_30_nui_validation_message_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_5_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
        }
      }

      function WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
        }
      }

      function WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_5_ng_container_0_Template, 1, 0, "ng-container", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_5_ng_container_1_Template, 1, 0, "ng-container", 35);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](45);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r15);
        }
      }

      var _c40 = function _c40() {
        return ["diseaseDetails"];
      };

      function WizardCustomExampleComponent_nui_wizard_step_v2_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-wizard-step-v2", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_1_Template, 1, 0, "ng-template", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nui-form-field", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "nui-date-picker", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, WizardCustomExampleComponent_nui_wizard_step_v2_30_nui_validation_message_4_Template, 2, 0, "nui-validation-message", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_5_Template, 2, 2, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var tmp_2_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx_r8.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c40)));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r8.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c23)));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r8.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c23))) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.required);
        }
      }

      function WizardCustomExampleComponent_nui_validation_message_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardCustomExampleComponent_nui_validation_message_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardCustomExampleComponent_ng_template_38_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
        }
      }

      function WizardCustomExampleComponent_ng_template_38_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
        }
      }

      function WizardCustomExampleComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WizardCustomExampleComponent_ng_template_38_ng_container_0_Template, 1, 0, "ng-container", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WizardCustomExampleComponent_ng_template_38_ng_container_1_Template, 1, 0, "ng-container", 35);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](45);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r15);
        }
      }

      function WizardCustomExampleComponent_ng_template_43_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
        }
      }

      function WizardCustomExampleComponent_ng_template_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WizardCustomExampleComponent_ng_template_43_ng_container_0_Template, 1, 0, "ng-container", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WizardCustomExampleComponent_ng_template_43_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

            return _r0.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r13);
        }
      }

      function WizardCustomExampleComponent_ng_template_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardCustomExampleComponent_ng_template_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WizardCustomExampleComponent_ng_template_46_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

            return ctx_r28.validate(_r0.selected);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Next ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c45 = function _c45() {
        return ["personDetails", "name"];
      };

      var _c46 = function _c46() {
        return ["personDetails", "symptoms"];
      };

      var _c47 = function _c47() {
        return ["contactDetails", "email"];
      };

      var _c48 = function _c48() {
        return ["personDetails"];
      };

      var _c49 = function _c49() {
        return ["contactDetails"];
      };

      var _c50 = function _c50() {
        return ["contactDetails", "phone"];
      };

      var WizardCustomComponent = /*#__PURE__*/function (_nova_ui_bits__WEBPAC) {
        _inherits(WizardCustomComponent, _nova_ui_bits__WEBPAC);

        var _super = _createSuper(WizardCustomComponent);

        function WizardCustomComponent() {
          _classCallCheck(this, WizardCustomComponent);

          return _super.apply(this, arguments);
        }

        return WizardCustomComponent;
      }(_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["WizardDirective"]);

      WizardCustomComponent.ɵfac = function WizardCustomComponent_Factory(t) {
        return ɵWizardCustomComponent_BaseFactory(t || WizardCustomComponent);
      };

      WizardCustomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: WizardCustomComponent,
        selectors: [["nui-wizard-custom"]],
        hostAttrs: ["aria-orientation", "horizontal", 1, "nui-wizard-custom-layout"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["WizardDirective"],
          useExisting: WizardCustomComponent
        }, {
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_0__["CdkStepper"],
          useExisting: WizardCustomComponent
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 13,
        vars: 5,
        consts: [[1, "container"], [1, "row", "custom-header"], [1, "col-9", "p-0"], [1, "nui-wizard-horizontal-header-container"], [4, "ngFor", "ngForOf"], [1, "nui-wizard-horizontal-content-container"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngIf"], ["class", "nui-wizard-horizontal-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [1, "col-3", "custom-summary"], ["class", "row nui-wizard-horizontal-footer-container", 4, "ngIf"], [1, "nui-wizard-horizontal-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "disableRipple", "click", "keydown"], ["class", "nui-wizard-horizontal-line", 4, "ngIf"], [1, "nui-wizard-horizontal-line"], [3, "ngTemplateOutlet"], ["role", "tabpanel", 1, "nui-wizard-horizontal-content", 3, "id"], [1, "row", "nui-wizard-horizontal-footer-container"], [3, "footer"]],
        template: function WizardCustomComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, WizardCustomComponent_ng_container_4_Template, 3, 17, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, WizardCustomComponent_ng_container_7_Template, 1, 1, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, WizardCustomComponent_ng_container_8_Template, 2, 1, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, WizardCustomComponent_div_9_Template, 2, 6, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, WizardCustomComponent_div_12_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.steps);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selected.stepLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.selected.stepLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.steps);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selected.stepFooter);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_footer_wizard_footer_component__WEBPACK_IMPORTED_MODULE_6__["WizardFooterComponent"]],
        styles: [".nui-wizard-custom-layout .container {\n  border: 1px solid;\n  border-color: var(--nui-color-line-default,#d9d9d9);\n}\n.nui-wizard-custom-layout .nui-wizard-step-header {\n  border: 1px solid;\n  border-radius: 5px;\n  border-color: var(--nui-color-line-default,#d9d9d9);\n  background: var(--nui-color-bg-content,#fff);\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  padding: 0 8px;\n}\n.nui-wizard-custom-layout .nui-wizard-step-header--selected {\n  background-color: var(--nui-color-active,#0079aa);\n  color: #fff;\n  border-color: transparent;\n}\n.nui-wizard-custom-layout .nui-wizard-step-header--selected .nui-wizard-step-label {\n  color: var(--nui-color-text-inverse,#fff);\n}\n.nui-wizard-custom-layout .custom-header .nui-wizard-horizontal-header-container {\n  border-top: none;\n}\n.nui-wizard-custom-layout .custom-header .nui-wizard-horizontal-header-container .nui-wizard-horizontal-line {\n  margin: 0;\n}\n.nui-wizard-custom-layout .custom-header .custom-summary {\n  border-left: 1px #d9d9d9 solid;\n}\n.nui-wizard-custom-layout .nui-wizard-footer {\n  border: none;\n  justify-content: space-between;\n}\n.nui-wizard-custom-layout .nui-wizard-footer button {\n  min-width: 0;\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC1jdXN0b20uY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9jc3MtdmFyaWFibGVzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSxpQkFBQTtFQ0FKLG1EQUFBO0FERko7QUFBQTtFQU9RLGlCQUFBO0VBQ0Esa0JBQUE7RUNOSixtREFBQTtFQUFBLDRDQUFBO0VEU0ksMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFKUjtBQVRBO0VDRUksaURBQUE7RURpQkksV0FBQTtFQUNBLHlCQUFBO0FBTlI7QUFkQTtFQ0VJLHlDQUFBO0FEZUo7QUFqQkE7RUE2QlksZ0JBQUE7QUFUWjtBQXBCQTtFQWdDZ0IsU0FBQTtBQVRoQjtBQXZCQTtFQXlDWSw4QkFBQTtBQWZaO0FBMUJBO0VBOENRLFlBQUE7RUFDQSw4QkFBQTtBQWpCUjtBQTlCQTtFQWtEWSxZQUFBO0VBQ0EsU0FBQTtBQWpCWiIsImZpbGUiOiJ3aXphcmQtY3VzdG9tLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy5sZXNzXCI7XG5cbi5udWktd2l6YXJkLWN1c3RvbS1sYXlvdXR7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlcjogQG51aS1saW5lLWRlZmF1bHQgc29saWQ7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShib3JkZXItY29sb3IsIG51aS1jb2xvci1saW5lLWRlZmF1bHQpO1xuICAgIH1cblxuICAgIC5udWktd2l6YXJkLXN0ZXAtaGVhZGVyIHtcbiAgICAgICAgYm9yZGVyOiBAbnVpLWxpbmUtZGVmYXVsdCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYm9yZGVyLWNvbG9yLCBudWktY29sb3ItbGluZS1kZWZhdWx0KTtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQsIG51aS1jb2xvci1iZy1jb250ZW50KTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICB9XG5cbiAgICAubnVpLXdpemFyZC1zdGVwLWhlYWRlci0tc2VsZWN0ZWQge1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYmFja2dyb3VuZC1jb2xvciwgbnVpLWNvbG9yLWFjdGl2ZSk7XG5cbiAgICAgICAgY29sb3I6IEBudWktY29sb3ItdGV4dC1saWdodDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAubnVpLXdpemFyZC1zdGVwLWxhYmVse1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1pbnZlcnNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmN1c3RvbS1oZWFkZXIge1xuICAgICAgICAubnVpLXdpemFyZC1ob3Jpem9udGFsLWhlYWRlci1jb250YWluZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcblxuICAgICAgICAgICAgLm51aS13aXphcmQtaG9yaXpvbnRhbC1saW5lIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLy5udWktd2l6YXJkLWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xuICAgICAgICAvLyAgICBwYWRkaW5nOiAwO1xuICAgICAgICAvL31cblxuICAgICAgICAuY3VzdG9tLXN1bW1hcnkge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IEBudWktbGluZS1kZWZhdWx0IEBudWktY29sb3ItbGluZS1kZWZhdWx0IHNvbGlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm51aS13aXphcmQtZm9vdGVyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5zZXRDc3NWYXJpYWJsZShAcHJvcGVydHksIEB2YWx1ZSl7XG4gICAgQGV2YWx1YXRlZCA6IFwiQHt2YWx1ZX1cIjtcbiAgICAvL3RoZSBkb3VibGUgQCBmb3JjZXMgYSBpbmRpcmVjdGlvbiBldmFsdWF0aW9uLCBraW5kYSBsaWtlIGEgcG9pbnRlclxuICAgIEBmYWxsYmFjayA6IEBAZXZhbHVhdGVkO1xuXG4gICAgQHtwcm9wZXJ0eX06IH5cInZhcigtLUB7dmFsdWV9LEB7ZmFsbGJhY2t9KVwiO1xufVxuIl19 */"],
        encapsulation: 2,
        data: {
          animation: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["wizardAnimations"].horizontalStepTransition]
        },
        changeDetection: 0
      });

      var ɵWizardCustomComponent_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](WizardCustomComponent);

      var WizardCustomExampleComponent = /*#__PURE__*/function () {
        function WizardCustomExampleComponent(formBuilder) {
          _classCallCheck(this, WizardCustomExampleComponent);

          this.formBuilder = formBuilder;
          this.steps = 1;
          this.selectedIndex = 0;
        }

        _createClass(WizardCustomExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              "personDetails": this.formBuilder.group({
                "name": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
                "symptoms": [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              "diseaseDetails": this.formBuilder.group({
                "date": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              "contactDetails": this.formBuilder.group({
                "email": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                "phone": [""]
              })
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            var update = function update(selectedIndex, steps) {
              setTimeout(function () {
                if (steps) {
                  _this3.steps = steps;
                }

                if (selectedIndex !== undefined && selectedIndex >= 0) {
                  _this3.selectedIndex = selectedIndex;
                }

                _this3.progress = 100 * (1 + _this3.selectedIndex) / _this3.steps;
              });
            };

            this.wizard.selectionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (i) {
              update(i.selectedIndex);
            })).subscribe();
            this.wizard.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (c) {
              update(undefined, c.length);
            })).subscribe();
          }
        }, {
          key: "validate",
          value: function validate(step) {
            var _this4 = this;

            var _a; // mark all fields from current step as touched
            // in order to display the validation messages


            Object.keys(((_a = step.stepControl) === null || _a === void 0 ? void 0 : _a.controls) || {}).forEach(function (key) {
              var field = _this4.wizard.selected.stepControl.get(key);

              field === null || field === void 0 ? void 0 : field.markAsTouched();
            });
          }
        }]);

        return WizardCustomExampleComponent;
      }();

      WizardCustomExampleComponent.ɵfac = function WizardCustomExampleComponent_Factory(t) {
        return new (t || WizardCustomExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      WizardCustomExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: WizardCustomExampleComponent,
        selectors: [["nui-wizard-custom-example"]],
        viewQuery: function WizardCustomExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_0__["STEPPER_GLOBAL_OPTIONS"],
          useValue: {
            displayDefaultIndicatorType: false
          }
        }])],
        decls: 48,
        vars: 45,
        consts: function consts() {
          var i18n_3;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_605334371811086804$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_4 = goog.getMsg("Person Details");
            i18n_3 = MSG_EXTERNAL_605334371811086804$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_4;
          } else {
            i18n_3 = $localize(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral([":\u241F5f59ef3c1033f37e26e42d4c34dbe3a6d59b26ca\u241F605334371811086804:Person Details"])));
          }

          var i18n_5;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_6 = goog.getMsg("Name");
            i18n_5 = MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_6;
          } else {
            i18n_5 = $localize(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral([":\u241Fcff1428d10d59d14e45edec3c735a27b5482db59\u241F8953033926734869941:Name"])));
          }

          var i18n_7;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4120846771083210767$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_8 = goog.getMsg("Do you have Covid ?");
            i18n_7 = MSG_EXTERNAL_4120846771083210767$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_8;
          } else {
            i18n_7 = $localize(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral([":\u241F7b395bc36132043b976f1e141e04adcc5926d5a5\u241F4120846771083210767:Do you have Covid ?"])));
          }

          var i18n_9;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6277022918162857182$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_10 = goog.getMsg(" Diseases symptoms ");
            i18n_9 = MSG_EXTERNAL_6277022918162857182$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_10;
          } else {
            i18n_9 = $localize(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral([":\u241F375767ee70dccb99058f23ecedcc8c24405727ab\u241F6277022918162857182: Diseases symptoms "])));
          }

          var i18n_11;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7162433653691257124$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_12 = goog.getMsg("Disease Details");
            i18n_11 = MSG_EXTERNAL_7162433653691257124$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_12;
          } else {
            i18n_11 = $localize(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral([":\u241Ff757fa9193778f02fcaf6263ee76b78576ab6314\u241F7162433653691257124:Disease Details"])));
          }

          var i18n_13;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5562779130499238810$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_14 = goog.getMsg("Contact Details");
            i18n_13 = MSG_EXTERNAL_5562779130499238810$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_14;
          } else {
            i18n_13 = $localize(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral([":\u241F43161dab615da78790ff6e28f5730e88b96e21e0\u241F5562779130499238810:Contact Details"])));
          }

          var i18n_15;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_16 = goog.getMsg("Email");
            i18n_15 = MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_16;
          } else {
            i18n_15 = $localize(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral([":\u241F244aae9346da82b0922506c2d2581373a15641cc\u241F4768749765465246664:Email"])));
          }

          var i18n_17;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3262236020277300799$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_18 = goog.getMsg("Phone");
            i18n_17 = MSG_EXTERNAL_3262236020277300799$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_18;
          } else {
            i18n_17 = $localize(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral([":\u241F6934d8edd276d59e050006fe91b695ebad0218f8\u241F3262236020277300799:Phone"])));
          }

          var i18n_19;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_20 = goog.getMsg("Final step");
            i18n_19 = MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_20;
          } else {
            i18n_19 = $localize(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral([":\u241F0de8f1dbd57123d294729d71fd278eaf936d4a2b\u241F5385737502167048240:Final step"])));
          }

          var i18n_21;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_377085518119019498$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_22 = goog.getMsg("Thanks for your feedback and take care");
            i18n_21 = MSG_EXTERNAL_377085518119019498$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_22;
          } else {
            i18n_21 = $localize(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral([":\u241Fca65ee32ad20b154c3171aff463f489cbc528bf1\u241F377085518119019498:Thanks for your feedback and take care"])));
          }

          var i18n_24;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3542042671420335679$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__25 = goog.getMsg("No");
            i18n_24 = MSG_EXTERNAL_3542042671420335679$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__25;
          } else {
            i18n_24 = $localize(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral([":\u241F3d3ae7deebc5949b0c1c78b9847886a94321d9fd\u241F3542042671420335679:No"])));
          }

          var i18n_26;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4467323362722952678$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__27 = goog.getMsg("Unknown");
            i18n_26 = MSG_EXTERNAL_4467323362722952678$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__27;
          } else {
            i18n_26 = $localize(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral([":\u241Fe5d8bb389c702588877f039d72178f219453a72d\u241F4467323362722952678:Unknown"])));
          }

          var i18n_28;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__29 = goog.getMsg(" This is required ");
            i18n_28 = MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__29;
          } else {
            i18n_28 = $localize(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral([":\u241F42b47c9df37297506ee0ddf14763cb0ddfa58ea6\u241F5777549257495630003: This is required "])));
          }

          var i18n_30;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4051919749793167830$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__31 = goog.getMsg(" Minimum length is 3 ");
            i18n_30 = MSG_EXTERNAL_4051919749793167830$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__31;
          } else {
            i18n_30 = $localize(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral([":\u241Ff2b2fd6e0fe932b925f3ac59d2a9b6c7f1184730\u241F4051919749793167830: Minimum length is 3 "])));
          }

          var i18n_32;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__33 = goog.getMsg(" This is required ");
            i18n_32 = MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__33;
          } else {
            i18n_32 = $localize(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral([":\u241F42b47c9df37297506ee0ddf14763cb0ddfa58ea6\u241F5777549257495630003: This is required "])));
          }

          var i18n_34;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5739234873707288973$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__35 = goog.getMsg("When did you noticed your first symptoms ?");
            i18n_34 = MSG_EXTERNAL_5739234873707288973$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__35;
          } else {
            i18n_34 = $localize(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral([":\u241Fbcddbff8ba74b058149e57426d3e0e1bebaa5af2\u241F5739234873707288973:When did you noticed your first symptoms ?"])));
          }

          var i18n_36;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4177329805747956962$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS___37 = goog.getMsg("Disease Details for your Symptoms");
            i18n_36 = MSG_EXTERNAL_4177329805747956962$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS___37;
          } else {
            i18n_36 = $localize(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral([":\u241F35a38f292530a0caf89578654f4946701ce21de1\u241F4177329805747956962:Disease Details for your Symptoms"])));
          }

          var i18n_38;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7318991029858475691$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS___39 = goog.getMsg(" Date when disease manifested is required ");
            i18n_38 = MSG_EXTERNAL_7318991029858475691$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS___39;
          } else {
            i18n_38 = $localize(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral([":\u241Fe3571ab256189bbeb2d67b21687b9c345a676c12\u241F7318991029858475691: Date when disease manifested is required "])));
          }

          var i18n_41;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__42 = goog.getMsg(" This is required ");
            i18n_41 = MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__42;
          } else {
            i18n_41 = $localize(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral([":\u241F42b47c9df37297506ee0ddf14763cb0ddfa58ea6\u241F5777549257495630003: This is required "])));
          }

          var i18n_43;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8282537682490899422$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__44 = goog.getMsg(" Invalid email ");
            i18n_43 = MSG_EXTERNAL_8282537682490899422$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__44;
          } else {
            i18n_43 = $localize(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral([":\u241Ff3a8cb1da2b4fad362bc53bd5b9118b9f26e6cbb\u241F8282537682490899422: Invalid email "])));
          }

          return [[3, "formGroup"], [3, "linear"], ["wizard", ""], ["summary", ""], [3, "show", "stacked", "percent", "showNumber"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["label", i18n_3, "formGroupName", "personDetails", 3, "stepControl"], ["caption", i18n_5, 3, "control"], ["formControlName", "name"], ["for", "required", 4, "ngIf"], ["for", "minlength", 4, "ngIf"], ["caption", i18n_7, 3, "control"], ["formControlName", "symptoms", 3, "indeterminate"], i18n_9, ["wizardStepFooter", ""], ["label", i18n_11, "formGroupName", "diseaseDetails", 3, "stepControl", 4, "ngIf"], ["label", i18n_13, "formGroupName", "contactDetails", 3, "stepControl"], ["caption", i18n_15, 3, "control"], ["type", "email", "formControlName", "email"], ["for", "email", 4, "ngIf"], ["caption", i18n_17, 3, "control"], ["type", "email", "formControlName", "phone"], ["label", i18n_19], i18n_21, ["wizardPrevious", ""], ["wizardNext", ""], i18n_24, i18n_26, ["for", "required"], i18n_28, ["for", "minlength"], i18n_30, i18n_32, [4, "ngTemplateOutlet"], ["label", i18n_11, "formGroupName", "diseaseDetails", 3, "stepControl"], ["wizardStepLabel", ""], ["caption", i18n_34, 3, "control"], ["formControlName", "date"], i18n_36, i18n_38, i18n_41, ["for", "email"], i18n_43, ["type", "button", "nui-button", "", 3, "click"], ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true", 3, "click"]];
        },
        template: function WizardCustomExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nui-wizard-custom", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](3, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Overview");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "nui-progress", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Symptoms: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](14, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, WizardCustomExampleComponent_ng_container_15_Template, 2, 3, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, WizardCustomExampleComponent_ng_container_16_Template, 2, 0, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, WizardCustomExampleComponent_ng_container_17_Template, 2, 0, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "nui-wizard-step-v2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "nui-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "nui-textbox", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, WizardCustomExampleComponent_nui_validation_message_23_Template, 2, 0, "nui-validation-message", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, WizardCustomExampleComponent_nui_validation_message_24_Template, 2, 0, "nui-validation-message", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "nui-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "nui-checkbox", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](27, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, WizardCustomExampleComponent_nui_validation_message_28_Template, 2, 0, "nui-validation-message", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, WizardCustomExampleComponent_ng_template_29_Template, 1, 1, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, WizardCustomExampleComponent_nui_wizard_step_v2_30_Template, 6, 6, "nui-wizard-step-v2", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "nui-wizard-step-v2", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "nui-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "nui-textbox", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, WizardCustomExampleComponent_nui_validation_message_34_Template, 2, 0, "nui-validation-message", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, WizardCustomExampleComponent_nui_validation_message_35_Template, 2, 0, "nui-validation-message", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "nui-form-field", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "nui-textbox", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, WizardCustomExampleComponent_ng_template_38_Template, 2, 2, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "nui-wizard-step-v2", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](41, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, WizardCustomExampleComponent_ng_template_43_Template, 3, 1, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, WizardCustomExampleComponent_ng_template_44_Template, 2, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, WizardCustomExampleComponent_ng_template_46_Template, 2, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_7_0 = null;
            var tmp_8_0 = null;
            var tmp_11_0 = null;
            var tmp_14_0 = null;
            var tmp_15_0 = null;
            var tmp_17_0 = null;
            var tmp_18_0 = null;
            var tmp_19_0 = null;
            var tmp_22_0 = null;
            var tmp_23_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("linear", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("show", true)("stacked", true)("percent", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 26, ctx.progress, "1.0-0"))("showNumber", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Step ", ctx.selectedIndex + 1, " out of ", ctx.steps, " steps");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Name: ", ((tmp_7_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](29, _c45))) == null ? null : tmp_7_0.value) || "Not provided", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", (tmp_8_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](30, _c46))) == null ? null : tmp_8_0.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Email: ", ((tmp_11_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](31, _c47))) == null ? null : tmp_11_0.value) || "Not provided", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](32, _c48)));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](33, _c45)));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](34, _c45))) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](35, _c45))) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors.minlength);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](36, _c46)));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("indeterminate", (tmp_17_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](37, _c46))) == null ? null : tmp_17_0.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_18_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](38, _c46))) == null ? null : tmp_18_0.errors == null ? null : tmp_18_0.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_19_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](39, _c46))) == null ? null : tmp_19_0.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](40, _c49)));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](41, _c47)));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_22_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](42, _c47))) == null ? null : tmp_22_0.errors == null ? null : tmp_22_0.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_23_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](43, _c47))) == null ? null : tmp_23_0.errors == null ? null : tmp_23_0.errors.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](44, _c50)));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], WizardCustomComponent, _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__["ProgressComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_8__["WizardStepV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_9__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_10__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__["CheckboxComponent"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_12__["WizardStepFooterDirective"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_13__["ValidationMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_14__["WizardStepLabelDirective"], _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_15__["DatePickerComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_16__["ButtonComponent"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_17__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_17__["WizardStepperNextDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]],
        styles: [".nui-wizard-custom-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-color: var(--nui-color-line-default,#d9d9d9);\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .nui-wizard-step-header[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-radius: 5px;\n  border-color: var(--nui-color-line-default,#d9d9d9);\n  background: var(--nui-color-bg-content,#fff);\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  padding: 0 8px;\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .nui-wizard-step-header--selected[_ngcontent-%COMP%] {\n  background-color: var(--nui-color-active,#0079aa);\n  color: #fff;\n  border-color: transparent;\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .nui-wizard-step-header--selected[_ngcontent-%COMP%]   .nui-wizard-step-label[_ngcontent-%COMP%] {\n  color: var(--nui-color-text-inverse,#fff);\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .custom-header[_ngcontent-%COMP%]   .nui-wizard-horizontal-header-container[_ngcontent-%COMP%] {\n  border-top: none;\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .custom-header[_ngcontent-%COMP%]   .nui-wizard-horizontal-header-container[_ngcontent-%COMP%]   .nui-wizard-horizontal-line[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .custom-header[_ngcontent-%COMP%]   .custom-summary[_ngcontent-%COMP%] {\n  border-left: 1px #d9d9d9 solid;\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .nui-wizard-footer[_ngcontent-%COMP%] {\n  border: none;\n  justify-content: space-between;\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .nui-wizard-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC1jdXN0b20uY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9jc3MtdmFyaWFibGVzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSxpQkFBQTtFQ0FKLG1EQUFBO0FERko7QUFBQTtFQU9RLGlCQUFBO0VBQ0Esa0JBQUE7RUNOSixtREFBQTtFQUFBLDRDQUFBO0VEU0ksMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFKUjtBQVRBO0VDRUksaURBQUE7RURpQkksV0FBQTtFQUNBLHlCQUFBO0FBTlI7QUFkQTtFQ0VJLHlDQUFBO0FEZUo7QUFqQkE7RUE2QlksZ0JBQUE7QUFUWjtBQXBCQTtFQWdDZ0IsU0FBQTtBQVRoQjtBQXZCQTtFQXlDWSw4QkFBQTtBQWZaO0FBMUJBO0VBOENRLFlBQUE7RUFDQSw4QkFBQTtBQWpCUjtBQTlCQTtFQWtEWSxZQUFBO0VBQ0EsU0FBQTtBQWpCWiIsImZpbGUiOiJ3aXphcmQtY3VzdG9tLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy5sZXNzXCI7XG5cbi5udWktd2l6YXJkLWN1c3RvbS1sYXlvdXR7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlcjogQG51aS1saW5lLWRlZmF1bHQgc29saWQ7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShib3JkZXItY29sb3IsIG51aS1jb2xvci1saW5lLWRlZmF1bHQpO1xuICAgIH1cblxuICAgIC5udWktd2l6YXJkLXN0ZXAtaGVhZGVyIHtcbiAgICAgICAgYm9yZGVyOiBAbnVpLWxpbmUtZGVmYXVsdCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYm9yZGVyLWNvbG9yLCBudWktY29sb3ItbGluZS1kZWZhdWx0KTtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQsIG51aS1jb2xvci1iZy1jb250ZW50KTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICB9XG5cbiAgICAubnVpLXdpemFyZC1zdGVwLWhlYWRlci0tc2VsZWN0ZWQge1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYmFja2dyb3VuZC1jb2xvciwgbnVpLWNvbG9yLWFjdGl2ZSk7XG5cbiAgICAgICAgY29sb3I6IEBudWktY29sb3ItdGV4dC1saWdodDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAubnVpLXdpemFyZC1zdGVwLWxhYmVse1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1pbnZlcnNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmN1c3RvbS1oZWFkZXIge1xuICAgICAgICAubnVpLXdpemFyZC1ob3Jpem9udGFsLWhlYWRlci1jb250YWluZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcblxuICAgICAgICAgICAgLm51aS13aXphcmQtaG9yaXpvbnRhbC1saW5lIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLy5udWktd2l6YXJkLWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xuICAgICAgICAvLyAgICBwYWRkaW5nOiAwO1xuICAgICAgICAvL31cblxuICAgICAgICAuY3VzdG9tLXN1bW1hcnkge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IEBudWktbGluZS1kZWZhdWx0IEBudWktY29sb3ItbGluZS1kZWZhdWx0IHNvbGlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm51aS13aXphcmQtZm9vdGVyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5zZXRDc3NWYXJpYWJsZShAcHJvcGVydHksIEB2YWx1ZSl7XG4gICAgQGV2YWx1YXRlZCA6IFwiQHt2YWx1ZX1cIjtcbiAgICAvL3RoZSBkb3VibGUgQCBmb3JjZXMgYSBpbmRpcmVjdGlvbiBldmFsdWF0aW9uLCBraW5kYSBsaWtlIGEgcG9pbnRlclxuICAgIEBmYWxsYmFjayA6IEBAZXZhbHVhdGVkO1xuXG4gICAgQHtwcm9wZXJ0eX06IH5cInZhcigtLUB7dmFsdWV9LEB7ZmFsbGJhY2t9KVwiO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "iAoM":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/index.ts ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function iAoM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./wizard-docs/wizard-docs.component\";\nexport * from \"./wizard-horizontal-layout/wizard-horizontal-example.component\";\nexport * from \"./wizard-vertical-layout/wizard-vertical-example.component\";\nexport * from \"./wizard-custom-layout/wizard-custom-example.component\";\nexport * from \"./wizard-busy/wizard-busy.example.component\";\nexport * from \"./wizard-dialog/wizard-dialog.example.component\";\nexport * from \"./wizard-custom-footer/wizard-custom-footer-example.component\";\nexport * from \"./wizard-dynamic/wizard-dynamic.example.component\";\nexport * from \"./wizard-remove-step/wizard-remove-step-example.component\";\nexport * from \"./wizard-async-validation-form/wizard-async-form-validation.example.component\";\nexport * from \"./wizard-with-custom-icons/wizard-with-custom-icons-example.component\";\nexport * from \"./wizard-restore-state/wizard-restore-state.example.component\";\n\n";
      /***/
    },

    /***/
    "jYwr":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-async-validation-form/wizard-async-form-validation.example.component.html ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jYwr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div nui-busy [busy]=\"busy\">\n    <form [formGroup]=\"form\" *ngIf=\"form\">\n        <nui-wizard-horizontal linear #wizard>\n            <nui-wizard-step-v2 label=\"Person Details\"\n                                formGroupName=\"personDetails\"\n                                [stepControl]=\"form.get(['personDetails'])\">\n                <nui-form-field [control]=\"form.get(['personDetails','name'])\"\n                                i18n-caption\n                                caption=\"Name\">\n                    <nui-textbox formControlName=\"name\"></nui-textbox>\n                    <nui-validation-message for=\"required\"\n                                            *ngIf=\"form.get(['user','name'])?.errors?.required\"\n                                            i18n>\n                        This is required\n                    </nui-validation-message>\n\n                    <ng-template wizardStepFooter>\n                        <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n                    </ng-template>\n                </nui-form-field>\n\n            </nui-wizard-step-v2>\n\n            <nui-wizard-step-v2 formGroupName=\"contactDetails\"\n                                [stepControl]=\"form.get(['contactDetails'])\">\n\n                <ng-template wizardStepLabel>\n                    <span (click)=\"onNextClick(wizard.selected)\">Contact Details</span>\n                </ng-template>\n\n                <nui-form-field [control]=\"form.get(['contactDetails','email'])\"\n                                i18n-caption\n                                caption=\"Email\">\n                    <nui-textbox type=\"email\" formControlName=\"email\"></nui-textbox>\n                    <nui-validation-message for=\"required\"\n                                            *ngIf=\"form.get(['contactDetails','email'])?.errors?.required\"\n                                            i18n>\n                        This is required\n                    </nui-validation-message>\n\n                    <nui-validation-message for=\"email\"\n                                            *ngIf=\"form.get(['contactDetails','email'])?.errors?.email\"\n                                            i18n>\n                        Invalid email\n                    </nui-validation-message>\n\n                    <ng-template wizardStepFooter>\n                        <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                    </ng-template>\n                </nui-form-field>\n            </nui-wizard-step-v2>\n\n            <ng-template #wizardPrevious>\n                <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n                    Previous\n                </button>\n            </ng-template>\n\n            <ng-template #wizardNext>\n                <button nuiWizardNext\n                        type=\"button\"\n                        nui-button\n                        displayStyle=\"primary\"\n                        icon=\"caret-right\"\n                        iconRight=\"true\"\n                        (click)=\"onNextClick(wizard.selected)\"\n                >Next</button>\n            </ng-template>\n        </nui-wizard-horizontal>\n    </form>\n\n    <nui-spinner size=\"large\"\n                 i18n-message\n                 message=\"Async Validation is firing...\">\n    </nui-spinner>\n</div>\n";
      /***/
    },

    /***/
    "knXS":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-restore-state/wizard-restore-state.example.component.ts ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function knXS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnDestroy, OnInit, TemplateRef, ViewChild } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport { DialogService, NuiDialogRef, WizardStepV2Component, IWizardState } from \"@nova-ui/bits\";\nimport isEqual from \"lodash/isEqual\";\nimport { Subject } from \"rxjs\";\nimport { takeUntil } from \"rxjs/operators\";\n\ninterface IWizardStepData {\n    title: string;\n    templateRef: TemplateRef<string>;\n}\n\n@Component({\n    selector: \"nui-wizard-restore-state-example\",\n    templateUrl: \"./wizard-restore-state.example.component.html\",\n})\nexport class WizardRestoreStateExampleComponent implements OnInit, OnDestroy {\n    public form: FormGroup;\n    public activeDialog: NuiDialogRef;\n    public state: IWizardState;\n    public dynamicSteps: IWizardStepData[] = [];\n    public awesome: boolean = false;\n\n    private destroy$: Subject<any> = new Subject();\n\n    @ViewChild(\"dynamicTemplate1\") public template1: TemplateRef<string>;\n    @ViewChild(\"dynamicTemplate2\") public template2: TemplateRef<string>;\n\n    constructor(private formBuilder: FormBuilder,\n                @Inject(DialogService) private dialogService: DialogService) {}\n\n    ngOnInit(): void {\n        this.form = new FormGroup({\n            \"personDetails\": this.formBuilder.group({\n                \"name\": [\n                    \"\",\n                    [Validators.required, Validators.minLength(3)],\n                ],\n                \"privacy\": [false, [Validators.requiredTrue]],\n            }),\n            \"organization\": this.formBuilder.group({\n                \"title\": [\"\", [Validators.required]],\n                \"date\": [\"\", [Validators.required]],\n                \"createDynamicStep1\": [false],\n                \"createDynamicStep2\": [false],\n            }),\n            \"contactDetails\": this.formBuilder.group({\n                \"email\": [\"\", [Validators.required, Validators.email]],\n                \"options\": [\"\"],\n            }),\n        });\n\n        this.form.get([\"organization\", \"createDynamicStep1\"])?.valueChanges\n            .pipe(takeUntil(this.destroy$))\n            .subscribe(changes => {\n                this.handleDynamicSteps(\"I was created dynamically!\", this.template1, changes);\n            });\n\n        this.form.get([\"organization\", \"createDynamicStep2\"])?.valueChanges\n            .pipe(takeUntil(this.destroy$))\n            .subscribe(changes => {\n                this.handleDynamicSteps(\"Another dynamic step\", this.template2, changes);\n            });\n    }\n\n    ngOnDestroy(): void {\n        this.destroy$.next();\n        this.destroy$.complete();\n    }\n\n    public openDialog(content: TemplateRef<string>): void {\n        this.activeDialog = this.dialogService.open(content, {size: \"lg\"});\n    }\n\n    public closeDialog(): void {\n        this.activeDialog.close();\n    }\n\n    public saveState(state: IWizardState): void {\n        this.state = state;\n    }\n\n    public completeWizard(step: WizardStepV2Component): void {\n        step.completed = true;\n        this.activeDialog.close();\n    }\n\n    public resetStep(step: WizardStepV2Component): void {\n        step.reset();\n    }\n\n    private validateStep(formGroup: string): void {\n        this.form.get(formGroup)?.markAllAsTouched();\n    }\n\n    private handleDynamicSteps(title: string, template: TemplateRef<string>, controlValue: boolean) {\n        const newStep: IWizardStepData = { title: title, templateRef: template };\n        const index = this.dynamicSteps.findIndex(step => isEqual(step, newStep));\n\n        controlValue\n            ? this.dynamicSteps.push({...newStep})\n            : this.dynamicSteps.splice(index, 1);\n    }\n}\n";
      /***/
    },

    /***/
    "lKXi":
    /*!*********************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard-v2/wizard-dialog/wizard-dialog.example.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: WizardDialogExampleComponent */

    /***/
    function lKXi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardDialogExampleComponent", function () {
        return WizardDialogExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/busy/busy.component */
      "3XPh");
      /* harmony import */


      var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-header.component */
      "skCw");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */
      "ZgeA");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */
      "9Oqf");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */
      "JSul");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */
      "ZSn2");
      /* harmony import */


      var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/spinner/spinner.component */
      "NFOm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */
      "sp5V");

      var _c0 = ["wizardComponent"];

      function WizardDialogExampleComponent_ng_template_0_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Completed");
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_10_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_10_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDialogExampleComponent_ng_template_0_ng_template_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.toggleBusy();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Toggle busy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardDialogExampleComponent_ng_template_0_ng_template_10_ng_container_2_Template, 1, 0, "ng-container", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardDialogExampleComponent_ng_template_0_ng_template_10_ng_container_3_Template, 1, 0, "ng-container", 19);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r14);
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Active");
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_16_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_16_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_16_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDialogExampleComponent_ng_template_0_ng_template_16_ng_container_0_Template, 1, 0, "ng-container", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDialogExampleComponent_ng_template_0_ng_template_16_ng_container_1_Template, 1, 0, "ng-container", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardDialogExampleComponent_ng_template_0_ng_template_16_ng_container_2_Template, 1, 0, "ng-container", 19);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r14);
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Not visited");
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_22_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_22_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_22_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDialogExampleComponent_ng_template_0_ng_template_22_ng_container_0_Template, 1, 0, "ng-container", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDialogExampleComponent_ng_template_0_ng_template_22_ng_container_1_Template, 1, 0, "ng-container", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardDialogExampleComponent_ng_template_0_ng_template_22_ng_container_2_Template, 1, 0, "ng-container", 19);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r14);
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Summary");
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_28_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_28_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDialogExampleComponent_ng_template_0_ng_template_28_ng_container_0_Template, 1, 0, "ng-container", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDialogExampleComponent_ng_template_0_ng_template_28_ng_container_1_Template, 1, 0, "ng-container", 19);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r12);
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDialogExampleComponent_ng_template_0_ng_template_29_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Previous ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardDialogExampleComponent_ng_template_0_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardDialogExampleComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-dialog-header", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function WizardDialogExampleComponent_ng_template_0_Template_nui_dialog_header_closed_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-wizard-horizontal", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-wizard-step-v2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WizardDialogExampleComponent_ng_template_0_ng_template_6_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WizardDialogExampleComponent_ng_template_0_ng_template_10_Template, 4, 2, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nui-wizard-step-v2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WizardDialogExampleComponent_ng_template_0_ng_template_12_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WizardDialogExampleComponent_ng_template_0_ng_template_16_Template, 3, 3, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nui-wizard-step-v2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WizardDialogExampleComponent_ng_template_0_ng_template_18_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](20, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WizardDialogExampleComponent_ng_template_0_ng_template_22_Template, 3, 3, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-wizard-step-v2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, WizardDialogExampleComponent_ng_template_0_ng_template_24_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](26, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, WizardDialogExampleComponent_ng_template_0_ng_template_28_Template, 2, 2, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, WizardDialogExampleComponent_ng_template_0_ng_template_29_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, WizardDialogExampleComponent_ng_template_0_ng_template_31_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, WizardDialogExampleComponent_ng_template_0_ng_template_33_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "nui-spinner", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx_r1.busy);
        }
      }

      var WizardDialogExampleComponent = /*#__PURE__*/function () {
        function WizardDialogExampleComponent(dialogService, toastService) {
          _classCallCheck(this, WizardDialogExampleComponent);

          this.dialogService = dialogService;
          this.toastService = toastService;
          this.busy = false;
          this.vegetables = [$localize(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["Cabbage"]))), $localize(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["Potato"]))), $localize(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["Tomato"]))), $localize(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["Carrot"])))];
          this.selectedVegetables = [$localize(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["Potato"]))), $localize(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["Tomato"])))];
        }

        _createClass(WizardDialogExampleComponent, [{
          key: "isChecked",
          value: function isChecked(vegetable) {
            return this.selectedVegetables.indexOf(vegetable) > -1;
          }
        }, {
          key: "valuesChanged",
          value: function valuesChanged(values) {
            this.selectedVegetables = _toConsumableArray(values);
          }
        }, {
          key: "openDialog",
          value: function openDialog(content) {
            this.activeDialog = this.dialogService.open(content, {
              size: "lg",
              windowClass: "active-dialog"
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.activeDialog.close();
          }
        }, {
          key: "toggleBusy",
          value: function toggleBusy() {
            var _this5 = this;

            this.busy = !this.busy;
            setTimeout(function () {
              _this5.busy = false;
            }, 3000);
          }
        }]);

        return WizardDialogExampleComponent;
      }();

      WizardDialogExampleComponent.ɵfac = function WizardDialogExampleComponent_Factory(t) {
        return new (t || WizardDialogExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
      };

      WizardDialogExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardDialogExampleComponent,
        selectors: [["nui-wizard-v2-dialog-example"]],
        viewQuery: function WizardDialogExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wizardComponent = _t.first);
          }
        },
        decls: 4,
        vars: 0,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6576529212829839238$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS_2 = goog.getMsg(" Open dialog wizard\n");
            i18n_1 = MSG_EXTERNAL_6576529212829839238$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS_2;
          } else {
            i18n_1 = $localize(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral([":\u241F3b7b7dc38a7e4341daf9a73684d37fe7bc08d2d1\u241F6576529212829839238: Open dialog wizard\n"])));
          }

          var i18n_3;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2559467589081529119$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__4 = goog.getMsg("Wizard dialog");
            i18n_3 = MSG_EXTERNAL_2559467589081529119$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__4;
          } else {
            i18n_3 = $localize(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral([":\u241Fbfccc7449a42f7d944233041ac0d93921c543934\u241F2559467589081529119:Wizard dialog"])));
          }

          var i18n_5;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8675920705208401217$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__6 = goog.getMsg("This is the first step of our horizontal wizard");
            i18n_5 = MSG_EXTERNAL_8675920705208401217$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__6;
          } else {
            i18n_5 = $localize(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral([":\u241Fc9bf00bfbb1b8a6e46eb4e43075cf64abecea307\u241F8675920705208401217:This is the first step of our horizontal wizard"])));
          }

          var i18n_7;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1639920997400045870$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__8 = goog.getMsg("This is the second step of our horizontal wizard");
            i18n_7 = MSG_EXTERNAL_1639920997400045870$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__8;
          } else {
            i18n_7 = $localize(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral([":\u241F4103bf2eee669374dca77d06d9203728047ffec4\u241F1639920997400045870:This is the second step of our horizontal wizard"])));
          }

          var i18n_9;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7104742727847308533$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__10 = goog.getMsg("This is the third step of our horizontal wizard");
            i18n_9 = MSG_EXTERNAL_7104742727847308533$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__10;
          } else {
            i18n_9 = $localize(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral([":\u241F95e8f79c6ab835e5be1e96ec6afe816aba2d855e\u241F7104742727847308533:This is the third step of our horizontal wizard"])));
          }

          var i18n_11;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7100330853882173244$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__12 = goog.getMsg("We finally reached our last step");
            i18n_11 = MSG_EXTERNAL_7100330853882173244$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__12;
          } else {
            i18n_11 = $localize(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral([":\u241F414c233c4cbaae1a74728ed5d64304bbd36cdbe5\u241F7100330853882173244:We finally reached our last step"])));
          }

          var i18n_13;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_25258399261550967$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__14 = goog.getMsg("Data is loading from remote server...");
            i18n_13 = MSG_EXTERNAL_25258399261550967$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__14;
          } else {
            i18n_13 = $localize(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral([":\u241Fdc0a65d80c4379ceca3424563f96da6b49156f5c\u241F25258399261550967:Data is loading from remote server..."])));
          }

          return [["dialogWizard", ""], ["nui-button", "", "type", "button", 3, "click"], i18n_1, ["nui-busy", "", 3, "busy"], [1, "busy-content"], ["title", i18n_3, 3, "closed"], [1, "dialog-body", "compact-mode"], ["linear", ""], ["wizardStepLabel", ""], i18n_5, ["wizardStepFooter", ""], i18n_7, i18n_9, i18n_11, ["wizardCancel", ""], ["wizardPrevious", ""], ["wizardNext", ""], ["size", "large", "message", i18n_13], ["type", "button", "nui-button", "", 3, "click"], [4, "ngTemplateOutlet"], ["type", "button", "displayStyle", "action", "nui-button", "", 3, "click"], ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"]];
        },
        template: function WizardDialogExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDialogExampleComponent_ng_template_0_Template, 36, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDialogExampleComponent_Template_button_click_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

              return ctx.openDialog(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_3__["BusyComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_4__["DialogHeaderComponent"], _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_5__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_6__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_7__["WizardStepLabelDirective"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_8__["WizardStepFooterDirective"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_11__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_11__["WizardStepperNextDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "mO7N":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-with-custom-icons/wizard-with-custom-icons-example.component.ts ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mO7N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { IWizardConfig, WizardStepStateConfig, WIZARD_CONFIG } from \"@nova-ui/bits\";\n@Component({\n    selector: \"nui-wizard-with-custom-icons-example\",\n    templateUrl: \"./wizard-with-custom-icons-example.component.html\",\n    providers: [\n        {\n            provide: WIZARD_CONFIG,\n            useValue: {\n                stepState: {\n                    active: {\n                        icon: \"email\",\n                        iconColor: \"orange\",\n                    },\n                },\n            } as IWizardConfig,\n        },\n    ],\n})\nexport class WizardWithCustomIconsExampleComponent {\n\n    public secondStepIconConfig: Partial<WizardStepStateConfig> = {\n        initial: {\n            icon: \"execute\",\n            iconColor: \"primary-blue\",\n        },\n        visited: {\n            icon: \"star-full\",\n            iconColor: \"light-blue\",\n        },\n        active: {\n            icon: \"star-full\",\n            iconColor: \"orange\",\n        },\n    };\n}\n";
      /***/
    },

    /***/
    "mbMD":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-dialog/wizard-dialog.example.component.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mbMD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, TemplateRef, ViewChild } from \"@angular/core\";\nimport { DialogService, NuiDialogRef, ToastService, WizardComponent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-wizard-v2-dialog-example\",\n    templateUrl: \"./wizard-dialog.example.component.html\",\n})\nexport class WizardDialogExampleComponent {\n    @ViewChild(\"wizardComponent\") wizardComponent: WizardComponent;\n\n    public busy: boolean = false;\n    public activeDialog: NuiDialogRef;\n\n    constructor(\n        @Inject(DialogService) private dialogService: DialogService,\n        @Inject(ToastService) private toastService: ToastService\n    ) {}\n\n    public vegetables = [$localize `Cabbage`, $localize `Potato`, $localize `Tomato`, $localize `Carrot`];\n    public selectedVegetables = [$localize `Potato`, $localize `Tomato`];\n\n    public isChecked(vegetable: string): boolean {\n        return this.selectedVegetables.indexOf(vegetable) > -1;\n    }\n\n    public valuesChanged(values: any[]) {\n        this.selectedVegetables = [...values];\n    }\n\n    public openDialog(content: TemplateRef<string>) {\n        this.activeDialog = this.dialogService.open(content, {\n            size: \"lg\",\n            windowClass: \"active-dialog\",\n        });\n    }\n\n    public closeDialog() {\n        this.activeDialog.close();\n    }\n\n    public toggleBusy() {\n        this.busy = !this.busy;\n        setTimeout(() => {\n            this.busy = false;\n        }, 3000);\n    }\n}\n";
      /***/
    },

    /***/
    "mbzW":
    /*!***************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard-v2/wizard-async-validation-form/wizard-async-form-validation.example.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: WizardAsyncFormValidationExampleComponent */

    /***/
    function mbzW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardAsyncFormValidationExampleComponent", function () {
        return WizardAsyncFormValidationExampleComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/busy/busy.component */
      "3XPh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/spinner/spinner.component */
      "NFOm");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */
      "ZgeA");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */
      "9Oqf");
      /* harmony import */


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../../src/lib/form-field/form-field.component */
      "L5T1");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */
      "ZSn2");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */
      "JSul");
      /* harmony import */


      var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../../../src/lib/validation-message/validation-message.component */
      "Dm7Q");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */
      "sp5V");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var _c0 = ["wizard"];

      function WizardAsyncFormValidationExampleComponent_form_1_nui_validation_message_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardAsyncFormValidationExampleComponent_form_1_ng_template_7_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
        }
      }

      function WizardAsyncFormValidationExampleComponent_form_1_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WizardAsyncFormValidationExampleComponent_form_1_ng_template_7_ng_container_0_Template, 1, 0, "ng-container", 20);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r10);
        }
      }

      function WizardAsyncFormValidationExampleComponent_form_1_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WizardAsyncFormValidationExampleComponent_form_1_ng_template_9_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r13.onNextClick(_r1.selected);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Contact Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardAsyncFormValidationExampleComponent_form_1_nui_validation_message_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardAsyncFormValidationExampleComponent_form_1_nui_validation_message_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardAsyncFormValidationExampleComponent_form_1_ng_template_14_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
        }
      }

      function WizardAsyncFormValidationExampleComponent_form_1_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WizardAsyncFormValidationExampleComponent_form_1_ng_template_14_ng_container_0_Template, 1, 0, "ng-container", 20);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r8);
        }
      }

      function WizardAsyncFormValidationExampleComponent_form_1_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Previous ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardAsyncFormValidationExampleComponent_form_1_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WizardAsyncFormValidationExampleComponent_form_1_ng_template_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r16.onNextClick(_r1.selected);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c13 = function _c13() {
        return ["personDetails"];
      };

      var _c14 = function _c14() {
        return ["personDetails", "name"];
      };

      var _c15 = function _c15() {
        return ["user", "name"];
      };

      var _c16 = function _c16() {
        return ["contactDetails"];
      };

      var _c17 = function _c17() {
        return ["contactDetails", "email"];
      };

      function WizardAsyncFormValidationExampleComponent_form_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nui-wizard-horizontal", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nui-wizard-step-v2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nui-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "nui-textbox", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, WizardAsyncFormValidationExampleComponent_form_1_nui_validation_message_6_Template, 2, 0, "nui-validation-message", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, WizardAsyncFormValidationExampleComponent_form_1_ng_template_7_Template, 1, 1, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "nui-wizard-step-v2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, WizardAsyncFormValidationExampleComponent_form_1_ng_template_9_Template, 2, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nui-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "nui-textbox", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, WizardAsyncFormValidationExampleComponent_form_1_nui_validation_message_12_Template, 2, 0, "nui-validation-message", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, WizardAsyncFormValidationExampleComponent_form_1_nui_validation_message_13_Template, 2, 0, "nui-validation-message", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, WizardAsyncFormValidationExampleComponent_form_1_ng_template_14_Template, 1, 1, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, WizardAsyncFormValidationExampleComponent_form_1_ng_template_15_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, WizardAsyncFormValidationExampleComponent_form_1_ng_template_17_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var tmp_3_0 = null;
          var tmp_6_0 = null;
          var tmp_7_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c13)));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c14)));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c15))) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c16)));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c17)));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c17))) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c17))) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors.email);
        }
      }

      var fakeAsyncValidator = function fakeAsyncValidator(c) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(4000));
      };

      var WizardAsyncFormValidationExampleComponent = /*#__PURE__*/function () {
        function WizardAsyncFormValidationExampleComponent(formBuilder) {
          _classCallCheck(this, WizardAsyncFormValidationExampleComponent);

          this.formBuilder = formBuilder;
        }

        _createClass(WizardAsyncFormValidationExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              "personDetails": this.formBuilder.group({
                "name": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)], [fakeAsyncValidator]]
              }),
              "contactDetails": this.formBuilder.group({
                "email": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
                "phone": [""]
              })
            });
          }
        }, {
          key: "onNextClick",
          value: function onNextClick(selected) {
            var _this6 = this;

            var stepControl = selected.stepControl;

            if (stepControl.status !== "PENDING") {
              stepControl.markAllAsTouched();
              return;
            }

            this.busy = true;
            stepControl.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (status) {
              if (status === "VALID") {
                _this6.wizard.next();

                _this6.busy = false;
              }
            });
          }
        }]);

        return WizardAsyncFormValidationExampleComponent;
      }();

      WizardAsyncFormValidationExampleComponent.ɵfac = function WizardAsyncFormValidationExampleComponent_Factory(t) {
        return new (t || WizardAsyncFormValidationExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      WizardAsyncFormValidationExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: WizardAsyncFormValidationExampleComponent,
        selectors: [["nui-wizard-async-form-validation-example"]],
        viewQuery: function WizardAsyncFormValidationExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
          }
        },
        decls: 3,
        vars: 2,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6880797919794408969$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS_2 = goog.getMsg("Async Validation is firing...");
            i18n_1 = MSG_EXTERNAL_6880797919794408969$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS_2;
          } else {
            i18n_1 = $localize(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral([":\u241F7e71f76dbff7069dc125de76ad0d86ea6ffa286e\u241F6880797919794408969:Async Validation is firing..."])));
          }

          var i18n_3;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS__4 = goog.getMsg("Name");
            i18n_3 = MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS__4;
          } else {
            i18n_3 = $localize(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral([":\u241Fcff1428d10d59d14e45edec3c735a27b5482db59\u241F8953033926734869941:Name"])));
          }

          var i18n_5;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS__6 = goog.getMsg("Email");
            i18n_5 = MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS__6;
          } else {
            i18n_5 = $localize(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral([":\u241F244aae9346da82b0922506c2d2581373a15641cc\u241F4768749765465246664:Email"])));
          }

          var i18n_7;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3208836223768257750$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___8 = goog.getMsg(" This is required ");
            i18n_7 = MSG_EXTERNAL_3208836223768257750$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___8;
          } else {
            i18n_7 = $localize(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral([":\u241Ff0cfc81a3cf98503602b26d160e924777f03cbaf\u241F3208836223768257750: This is required "])));
          }

          var i18n_9;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3208836223768257750$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___10 = goog.getMsg(" This is required ");
            i18n_9 = MSG_EXTERNAL_3208836223768257750$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___10;
          } else {
            i18n_9 = $localize(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral([":\u241Ff0cfc81a3cf98503602b26d160e924777f03cbaf\u241F3208836223768257750: This is required "])));
          }

          var i18n_11;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4650401672807616233$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___12 = goog.getMsg(" Invalid email ");
            i18n_11 = MSG_EXTERNAL_4650401672807616233$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___12;
          } else {
            i18n_11 = $localize(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral([":\u241F8a35a7091a6881fe2b61c13ce6c4c3fd6cbd797d\u241F4650401672807616233: Invalid email "])));
          }

          return [["nui-busy", "", 3, "busy"], [3, "formGroup", 4, "ngIf"], ["size", "large", "message", i18n_1], [3, "formGroup"], ["linear", ""], ["wizard", ""], ["label", "Person Details", "formGroupName", "personDetails", 3, "stepControl"], ["caption", i18n_3, 3, "control"], ["formControlName", "name"], ["for", "required", 4, "ngIf"], ["wizardStepFooter", ""], ["formGroupName", "contactDetails", 3, "stepControl"], ["wizardStepLabel", ""], ["caption", i18n_5, 3, "control"], ["type", "email", "formControlName", "email"], ["for", "email", 4, "ngIf"], ["wizardPrevious", ""], ["wizardNext", ""], ["for", "required"], i18n_7, [4, "ngTemplateOutlet"], [3, "click"], i18n_9, ["for", "email"], i18n_11, ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true", 3, "click"]];
        },
        template: function WizardAsyncFormValidationExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WizardAsyncFormValidationExampleComponent_form_1_Template, 19, 15, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "nui-spinner", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("busy", ctx.busy);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form);
          }
        },
        directives: [_src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_5__["BusyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_8__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_9__["WizardStepV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_10__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_11__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_12__["WizardStepFooterDirective"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_13__["WizardStepLabelDirective"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_14__["ValidationMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_15__["WizardStepperPreviousDirective"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_16__["ButtonComponent"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_15__["WizardStepperNextDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "nrQw":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-custom-layout/wizard-custom.component.less ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nrQw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import (reference) \"../../../../../../src/styles/nui-framework-variables\";\n@import (reference) \"../../../../../../src/styles/mixins.less\";\n\n.nui-wizard-custom-layout{\n    .container {\n        border: @nui-line-default solid;\n        .setCssVariable(border-color, nui-color-line-default);\n    }\n\n    .nui-wizard-step-header {\n        border: @nui-line-default solid;\n        border-radius: 5px;\n        .setCssVariable(border-color, nui-color-line-default);\n        .setCssVariable(background, nui-color-bg-content);\n        flex-direction: row-reverse;\n        justify-content: flex-end;\n        padding: 0 8px;\n    }\n\n    .nui-wizard-step-header--selected {\n        .setCssVariable(background-color, nui-color-active);\n\n        color: @nui-color-text-light;\n        border-color: transparent;\n\n        .nui-wizard-step-label{\n            .setCssVariable(color, nui-color-text-inverse)\n        }\n    }\n\n    .custom-header {\n        .nui-wizard-horizontal-header-container {\n            border-top: none;\n\n            .nui-wizard-horizontal-line {\n                margin: 0;\n            }\n        }\n\n        //.nui-wizard-horizontal-content-container {\n        //    padding: 0;\n        //}\n\n        .custom-summary {\n            border-left: @nui-line-default @nui-color-line-default solid;\n        }\n    }\n\n    .nui-wizard-footer {\n        border: none;\n        justify-content: space-between;\n\n        button {\n            min-width: 0;\n            margin: 0;\n        }\n    }\n}\n";
      /***/
    },

    /***/
    "oZ+g":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-with-custom-icons/wizard-with-custom-icons-example.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oZG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-wizard-horizontal linear>\n\n    <nui-wizard-step-v2 i18n-label label=\"First step\">\n        <div class=\"p-5\">\n            <span i18n>This is the first step of our wizard</span>.\n        </div>\n        <ng-template wizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <!--\n        See how we use the 'stepIconsConfig' input here to override the global icons configuration\n        for this particular wizard step\n    -->\n    <nui-wizard-step-v2 i18n-label label=\"Second step\" [stepStateConfig]=\"secondStepIconConfig\">\n        <div class=\"p-5\">\n            <span i18n>This is the second step of our wizard</span>.\n        </div>\n        <ng-template wizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <nui-wizard-step-v2 i18n-label label=\"Final step\">\n        <div class=\"p-5\">\n            <span i18n>We finally reached our last step</span>\n        </div>\n        <ng-template wizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-template #wizardPrevious>\n        <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\" i18n>\n            Previous\n        </button>\n    </ng-template>\n\n    <ng-template #wizardNext>\n        <button nuiWizardNext\n                type=\"button\"\n                nui-button\n                displayStyle=\"primary\"\n                icon=\"caret-right\"\n                iconRight=\"true\"\n                i18n\n        >Next</button>\n    </ng-template>\n</nui-wizard-horizontal>\n";
      /***/
    },

    /***/
    "qZWR":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-async-validation-form/wizard-async-form-validation.example.component.ts ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qZWR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit, ViewChild } from \"@angular/core\";\nimport { FormBuilder, FormControl, FormGroup, Validators } from \"@angular/forms\";\nimport { of } from \"rxjs\";\nimport { delay, take } from \"rxjs/operators\";\nimport { WizardHorizontalComponent, WizardStepV2Component } from \"@nova-ui/bits\";\n\nconst fakeAsyncValidator = (c: FormControl) => of(null).pipe(delay(4000));\n\n@Component({\n    selector: \"nui-wizard-async-form-validation-example\",\n    templateUrl: \"./wizard-async-form-validation.example.component.html\",\n})\nexport class WizardAsyncFormValidationExampleComponent implements OnInit {\n    public busy: boolean;\n\n    public form: FormGroup;\n\n    @ViewChild(\"wizard\") wizard: WizardHorizontalComponent;\n\n    constructor(private formBuilder: FormBuilder) {}\n\n    ngOnInit(): void {\n        this.form = new FormGroup({\n            \"personDetails\": this.formBuilder.group({\n                \"name\": [\n                    \"\",\n                    [Validators.required, Validators.minLength(3)],\n                    [fakeAsyncValidator],\n                ],\n            }),\n            \"contactDetails\": this.formBuilder.group({\n                \"email\": [\"\", [Validators.required, Validators.email]],\n                \"phone\": [\"\"],\n            }),\n        });\n    }\n\n    public onNextClick(selected: WizardStepV2Component): void {\n        const { stepControl } = selected;\n\n        if (stepControl.status !== \"PENDING\") {\n            stepControl.markAllAsTouched();\n\n            return;\n        }\n\n        this.busy = true;\n        stepControl.statusChanges\n            .pipe(take(1))\n            .subscribe((status) => {\n                if (status === \"VALID\") {\n                    this.wizard.next();\n                    this.busy = false;\n                }\n            });\n    }\n}\n";
      /***/
    },

    /***/
    "rjNf":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-busy/wizard-busy.example.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rjNf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-wizard-v2-busy-example\",\n    templateUrl: \"./wizard-busy.example.component.html\",\n    styleUrls: [\"./wizard-busy.example.component.less\"],\n})\nexport class WizardBusyExampleComponent  {\n    public busy: boolean;\n\n    public toggleStepBusy() {\n        this.busy = !this.busy;\n        setTimeout(() => {\n            this.busy = false;\n        }, 3000);\n    }\n}\n";
      /***/
    },

    /***/
    "s3gB":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-horizontal-layout/wizard-horizontal-example.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function s3gB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-wizard-horizontal linear>\n\n    <!--  content of the 1st step -->\n    <nui-wizard-step-v2 i18n-label label=\"First step\">\n        <!-- content of the current step -->\n        <span i18n>This is the first step of our horizontal wizard</span>.\n\n        <!-- content of the footer -->\n        <ng-template wizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <!--  content of the final step -->\n    <nui-wizard-step-v2 i18n-label label=\"Final step\">\n        <span i18n>We finally reached our last step</span>!\n        <!-- Notice how both label and footer can be placed anywhere in the content of wizard step -->\n        <ng-template wizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-template #wizardPrevious>\n        <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n            Previous\n        </button>\n    </ng-template>\n\n    <ng-template #wizardNext>\n        <button nuiWizardNext\n                type=\"button\"\n                nui-button\n                displayStyle=\"primary\"\n                icon=\"caret-right\"\n                iconRight=\"true\"\n        >Next</button>\n    </ng-template>\n</nui-wizard-horizontal>\n";
      /***/
    },

    /***/
    "wZEo":
    /*!*****************************************************!*\
      !*** ./demo/src/components/demo/wizard-v2/index.ts ***!
      \*****************************************************/

    /*! exports provided: WizardDocsComponent, WizardHorizontalExampleComponent, WizardVerticalExampleComponent, WizardCustomComponent, WizardCustomExampleComponent, WizardBusyExampleComponent, WizardDialogExampleComponent, WizardCustomFooterExampleComponent, WizardDynamicExampleComponent, WizardRemoveStepExampleComponent, WizardAsyncFormValidationExampleComponent, WizardWithCustomIconsExampleComponent, WizardRestoreStateExampleComponent */

    /***/
    function wZEo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _wizard_docs_wizard_docs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./wizard-docs/wizard-docs.component */
      "x5Xb");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardDocsComponent", function () {
        return _wizard_docs_wizard_docs_component__WEBPACK_IMPORTED_MODULE_0__["WizardDocsComponent"];
      });
      /* harmony import */


      var _wizard_horizontal_layout_wizard_horizontal_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./wizard-horizontal-layout/wizard-horizontal-example.component */
      "JqMI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardHorizontalExampleComponent", function () {
        return _wizard_horizontal_layout_wizard_horizontal_example_component__WEBPACK_IMPORTED_MODULE_1__["WizardHorizontalExampleComponent"];
      });
      /* harmony import */


      var _wizard_vertical_layout_wizard_vertical_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./wizard-vertical-layout/wizard-vertical-example.component */
      "zBaW");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardVerticalExampleComponent", function () {
        return _wizard_vertical_layout_wizard_vertical_example_component__WEBPACK_IMPORTED_MODULE_2__["WizardVerticalExampleComponent"];
      });
      /* harmony import */


      var _wizard_custom_layout_wizard_custom_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wizard-custom-layout/wizard-custom-example.component */
      "i5CQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardCustomComponent", function () {
        return _wizard_custom_layout_wizard_custom_example_component__WEBPACK_IMPORTED_MODULE_3__["WizardCustomComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardCustomExampleComponent", function () {
        return _wizard_custom_layout_wizard_custom_example_component__WEBPACK_IMPORTED_MODULE_3__["WizardCustomExampleComponent"];
      });
      /* harmony import */


      var _wizard_busy_wizard_busy_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./wizard-busy/wizard-busy.example.component */
      "KD0g");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardBusyExampleComponent", function () {
        return _wizard_busy_wizard_busy_example_component__WEBPACK_IMPORTED_MODULE_4__["WizardBusyExampleComponent"];
      });
      /* harmony import */


      var _wizard_dialog_wizard_dialog_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./wizard-dialog/wizard-dialog.example.component */
      "lKXi");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardDialogExampleComponent", function () {
        return _wizard_dialog_wizard_dialog_example_component__WEBPACK_IMPORTED_MODULE_5__["WizardDialogExampleComponent"];
      });
      /* harmony import */


      var _wizard_custom_footer_wizard_custom_footer_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./wizard-custom-footer/wizard-custom-footer-example.component */
      "LnRm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardCustomFooterExampleComponent", function () {
        return _wizard_custom_footer_wizard_custom_footer_example_component__WEBPACK_IMPORTED_MODULE_6__["WizardCustomFooterExampleComponent"];
      });
      /* harmony import */


      var _wizard_dynamic_wizard_dynamic_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./wizard-dynamic/wizard-dynamic.example.component */
      "cde7");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardDynamicExampleComponent", function () {
        return _wizard_dynamic_wizard_dynamic_example_component__WEBPACK_IMPORTED_MODULE_7__["WizardDynamicExampleComponent"];
      });
      /* harmony import */


      var _wizard_remove_step_wizard_remove_step_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./wizard-remove-step/wizard-remove-step-example.component */
      "Fn2p");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardRemoveStepExampleComponent", function () {
        return _wizard_remove_step_wizard_remove_step_example_component__WEBPACK_IMPORTED_MODULE_8__["WizardRemoveStepExampleComponent"];
      });
      /* harmony import */


      var _wizard_async_validation_form_wizard_async_form_validation_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./wizard-async-validation-form/wizard-async-form-validation.example.component */
      "mbzW");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardAsyncFormValidationExampleComponent", function () {
        return _wizard_async_validation_form_wizard_async_form_validation_example_component__WEBPACK_IMPORTED_MODULE_9__["WizardAsyncFormValidationExampleComponent"];
      });
      /* harmony import */


      var _wizard_with_custom_icons_wizard_with_custom_icons_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./wizard-with-custom-icons/wizard-with-custom-icons-example.component */
      "4Nvg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardWithCustomIconsExampleComponent", function () {
        return _wizard_with_custom_icons_wizard_with_custom_icons_example_component__WEBPACK_IMPORTED_MODULE_10__["WizardWithCustomIconsExampleComponent"];
      });
      /* harmony import */


      var _wizard_restore_state_wizard_restore_state_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./wizard-restore-state/wizard-restore-state.example.component */
      "/QbS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardRestoreStateExampleComponent", function () {
        return _wizard_restore_state_wizard_restore_state_example_component__WEBPACK_IMPORTED_MODULE_11__["WizardRestoreStateExampleComponent"];
      });
      /***/

    },

    /***/
    "x5Xb":
    /*!*********************************************************************************!*\
      !*** ./demo/src/components/demo/wizard-v2/wizard-docs/wizard-docs.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: WizardDocsComponent */

    /***/
    function x5Xb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardDocsComponent", function () {
        return WizardDocsComponent;
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


      var _wizard_horizontal_layout_wizard_horizontal_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../wizard-horizontal-layout/wizard-horizontal-example.component */
      "JqMI");
      /* harmony import */


      var _wizard_dialog_wizard_dialog_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../wizard-dialog/wizard-dialog.example.component */
      "lKXi");
      /* harmony import */


      var _wizard_busy_wizard_busy_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../wizard-busy/wizard-busy.example.component */
      "KD0g");
      /* harmony import */


      var _wizard_custom_footer_wizard_custom_footer_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../wizard-custom-footer/wizard-custom-footer-example.component */
      "LnRm");
      /* harmony import */


      var _wizard_dynamic_wizard_dynamic_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../wizard-dynamic/wizard-dynamic.example.component */
      "cde7");
      /* harmony import */


      var _wizard_remove_step_wizard_remove_step_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../wizard-remove-step/wizard-remove-step-example.component */
      "Fn2p");
      /* harmony import */


      var _wizard_async_validation_form_wizard_async_form_validation_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../wizard-async-validation-form/wizard-async-form-validation.example.component */
      "mbzW");
      /* harmony import */


      var _wizard_with_custom_icons_wizard_with_custom_icons_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../wizard-with-custom-icons/wizard-with-custom-icons-example.component */
      "4Nvg");
      /* harmony import */


      var _wizard_restore_state_wizard_restore_state_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../wizard-restore-state/wizard-restore-state.example.component */
      "/QbS");

      var WizardDocsComponent = function WizardDocsComponent() {
        _classCallCheck(this, WizardDocsComponent);
      };

      WizardDocsComponent.ɵfac = function WizardDocsComponent_Factory(t) {
        return new (t || WizardDocsComponent)();
      };

      WizardDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardDocsComponent,
        selectors: [["nui-wizard-v2-example"]],
        decls: 123,
        vars: 0,
        consts: [["href", "../components/WizardStepComponent.html", "target", "_blank"], ["filenamePrefix", "wizard-horizontal-layout", "exampleTitle", "Horizontal Layout Wizard"], ["filenamePrefix", "wizard-dialog", "exampleTitle", "wizard in dialog"], ["filenamePrefix", "wizard-busy", "exampleTitle", "wizard step busy"], ["filenamePrefix", "wizard-custom-footer", "exampleTitle", "Wizard with Custom Footer"], ["filenamePrefix", "wizard-dynamic", "exampleTitle", "wizard add dynamic step"], ["filenamePrefix", "wizard-remove-step", "exampleTitle", "wizard remove step"], ["filenamePrefix", "wizard-async-form-validation", "exampleTitle", "Async Form Validation"], ["filenamePrefix", "wizard-with-custom-icons-example", "exampleTitle", "Wizard with custom icons"], ["filenamePrefix", "wizard-restore-state", "exampleTitle", "Restore Wizard State"]],
        template: function WizardDocsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Horizontal Layout Wizard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " To use the horizontal wizard component, place a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "nui-wizard-horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " element in your template and include one or more ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "nui-wizard-step-v2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " elements as children of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "nui-wizard-horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " element.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nui-wizard-horizontal-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Usage with a dialog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "You can pass an existing wizard component as content of the dialog window. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "You should insert wizard component in dialog body. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "nui-wizard-v2-dialog-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Busy step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "You can make your step busy to forbid actions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "nui-wizard-v2-busy-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Custom footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Customizing the footer layout content and style for each step is quite easy, as you can see in the example below:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nui-example-wrapper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "nui-wizard-custom-footer-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Adding step dynamically");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "You are able to add wizard steps dynamically.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "nui-wizard-dynamic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Removing step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "You are able to remove steps by index.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "nui-wizard-remove-step-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Async Form Validation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " To handle async validation check 'PENDING' status of WizardV2Step stepControl\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nui-example-wrapper", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "nui-wizard-async-form-validation-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Wizard with custom step state icons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " The wizard step can be in four different states: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "initial");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "selected");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "completed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, ", and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, ". For each of these steps there is a corresponding icon in the header for a certain step, which dynamically changes along with the step state change. It is possible to override the default set of step state icons and their colors, and there are two ways of doing that.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Global");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Step Specific");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "u");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Global");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Nova provides you with the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "WIZARD_CONFIG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " injection token, which allows you to override the default wizard settings in a global context. For instance, set the necessary icons settings with this token on a module level to allow all wizards within a module to receive the same icon configuration.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "u");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Step Specific");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "stepIconsConfig");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " input of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "nui-wizard-step-v2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " component to pass the step icons config specifically to this step. It will override the global settings for this particular step.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "nui-example-wrapper", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "nui-wizard-with-custom-icons-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Restore Wizard State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " To restore wizard state you need to pass previous wizard steps as input\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "nui-example-wrapper", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "nui-wizard-restore-state-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Keyboard interaction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "TAB/SHIFT+TAB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " for focusing on the next/previous tabbable element");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "LEFT_ARROW/RIGHT_ARROW");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " for navigation on the previous/next step header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "HOME/END");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " for focusing on the first/last step header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "ENTER, SPACE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " to select the step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _wizard_horizontal_layout_wizard_horizontal_example_component__WEBPACK_IMPORTED_MODULE_2__["WizardHorizontalExampleComponent"], _wizard_dialog_wizard_dialog_example_component__WEBPACK_IMPORTED_MODULE_3__["WizardDialogExampleComponent"], _wizard_busy_wizard_busy_example_component__WEBPACK_IMPORTED_MODULE_4__["WizardBusyExampleComponent"], _wizard_custom_footer_wizard_custom_footer_example_component__WEBPACK_IMPORTED_MODULE_5__["WizardCustomFooterExampleComponent"], _wizard_dynamic_wizard_dynamic_example_component__WEBPACK_IMPORTED_MODULE_6__["WizardDynamicExampleComponent"], _wizard_remove_step_wizard_remove_step_example_component__WEBPACK_IMPORTED_MODULE_7__["WizardRemoveStepExampleComponent"], _wizard_async_validation_form_wizard_async_form_validation_example_component__WEBPACK_IMPORTED_MODULE_8__["WizardAsyncFormValidationExampleComponent"], _wizard_with_custom_icons_wizard_with_custom_icons_example_component__WEBPACK_IMPORTED_MODULE_9__["WizardWithCustomIconsExampleComponent"], _wizard_restore_state_wizard_restore_state_example_component__WEBPACK_IMPORTED_MODULE_10__["WizardRestoreStateExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "zBaW":
    /*!********************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard-v2/wizard-vertical-layout/wizard-vertical-example.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: WizardVerticalExampleComponent */

    /***/
    function zBaW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardVerticalExampleComponent", function () {
        return WizardVerticalExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_vertical_wizard_vertical_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-vertical/wizard-vertical.component */
      "EEH9");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */
      "9Oqf");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */
      "ZSn2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */
      "sp5V");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      function WizardVerticalExampleComponent_ng_template_5_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardVerticalExampleComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardVerticalExampleComponent_ng_template_5_ng_container_0_Template, 1, 0, "ng-container", 9);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function WizardVerticalExampleComponent_ng_template_10_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardVerticalExampleComponent_ng_template_10_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardVerticalExampleComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardVerticalExampleComponent_ng_template_10_ng_container_0_Template, 1, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardVerticalExampleComponent_ng_template_10_ng_container_1_Template, 1, 0, "ng-container", 9);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function WizardVerticalExampleComponent_ng_template_15_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function WizardVerticalExampleComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardVerticalExampleComponent_ng_template_15_ng_container_0_Template, 1, 0, "ng-container", 9);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
        }
      }

      function WizardVerticalExampleComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Previous ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardVerticalExampleComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var WizardVerticalExampleComponent = function WizardVerticalExampleComponent() {
        _classCallCheck(this, WizardVerticalExampleComponent);
      };

      WizardVerticalExampleComponent.ɵfac = function WizardVerticalExampleComponent_Factory(t) {
        return new (t || WizardVerticalExampleComponent)();
      };

      WizardVerticalExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardVerticalExampleComponent,
        selectors: [["nui-wizard-vertical-example"]],
        decls: 20,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("First step");
            i18n_0 = MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral([":\u241F9170783b7882b9260aea1a22ae5cf2407fa3e64f\u241F8373557087720397153:First step"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1790605907845599511$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("This is the first step of our vertical wizard");
            i18n_2 = MSG_EXTERNAL_1790605907845599511$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral([":\u241F41fc079f61e9f8e64879f00ebfe934e2644ec8c5\u241F1790605907845599511:This is the first step of our vertical wizard"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2997617654392962041$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Second step");
            i18n_4 = MSG_EXTERNAL_2997617654392962041$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral([":\u241Fb29f4fd21a1d511462918ede337438d03dab18e5\u241F2997617654392962041:Second step"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5513634356346903785$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("This is the second step of our vertical wizard");
            i18n_6 = MSG_EXTERNAL_5513634356346903785$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral([":\u241F4a80cdb9c4f28e0387b7ed6a8489cfe9e6f6ca46\u241F5513634356346903785:This is the second step of our vertical wizard"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Final step");
            i18n_8 = MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral([":\u241F0de8f1dbd57123d294729d71fd278eaf936d4a2b\u241F5385737502167048240:Final step"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7100330853882173244$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("We finally reached our last step");
            i18n_10 = MSG_EXTERNAL_7100330853882173244$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral([":\u241F414c233c4cbaae1a74728ed5d64304bbd36cdbe5\u241F7100330853882173244:We finally reached our last step"])));
          }

          return [["label", i18n_0], i18n_2, ["wizardStepFooter", ""], ["label", i18n_4], i18n_6, ["label", i18n_8], i18n_10, ["wizardPrevious", ""], ["wizardNext", ""], [4, "ngTemplateOutlet"], ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"]];
        },
        template: function WizardVerticalExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-vertical");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-wizard-step-v2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WizardVerticalExampleComponent_ng_template_5_Template, 1, 1, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-wizard-step-v2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WizardVerticalExampleComponent_ng_template_10_Template, 2, 2, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nui-wizard-step-v2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](13, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WizardVerticalExampleComponent_ng_template_15_Template, 1, 1, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WizardVerticalExampleComponent_ng_template_16_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WizardVerticalExampleComponent_ng_template_18_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_wizard_v2_wizard_vertical_wizard_vertical_component__WEBPACK_IMPORTED_MODULE_1__["WizardVerticalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_2__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_3__["WizardStepFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_5__["WizardStepperPreviousDirective"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_5__["WizardStepperNextDirective"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-wizard-v2-wizard-module-es5.js.map