(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unit-conversion-unit-conversion-pipe-example-module"], {
    /***/
    "DxxU":
    /*!******************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/pipes/unit-conversion/unit-conversion-basic/unit-conversion-pipe-basic.example.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: UnitConversionPipeBasicExampleComponent */

    /***/
    function DxxU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitConversionPipeBasicExampleComponent", function () {
        return UnitConversionPipeBasicExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../../src/lib/form-field/form-field.component */
      "L5T1");
      /* harmony import */


      var _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../src/lib/textbox/textbox-number/textbox-number.component */
      "ShSb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _src_pipes_unit_conversion_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../src/pipes/unit-conversion.pipe */
      "29HT");

      var UnitConversionPipeBasicExampleComponent = function UnitConversionPipeBasicExampleComponent() {
        _classCallCheck(this, UnitConversionPipeBasicExampleComponent);

        this.num = 998990;
      };

      UnitConversionPipeBasicExampleComponent.ɵfac = function UnitConversionPipeBasicExampleComponent_Factory(t) {
        return new (t || UnitConversionPipeBasicExampleComponent)();
      };

      UnitConversionPipeBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UnitConversionPipeBasicExampleComponent,
        selectors: [["unit-conversion-pipe-basic-example"]],
        decls: 6,
        vars: 10,
        consts: [[1, "conversion", "d-flex", "flex-column", "align-items-end"], ["caption", "Bits Per Second", 1, "d-block", "mt-5", 3, "showOptionalText"], ["type", "number", "customBoxWidth", "200px", 3, "ngModel", "minValue", "step", "ngModelChange"]],
        template: function UnitConversionPipeBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "unitConversion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-textbox-number", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UnitConversionPipeBasicExampleComponent_Template_nui_textbox_number_ngModelChange_5_listener($event) {
              return ctx.num = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 5, ctx.num, 2, false, "bitsPerSecond"), "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showOptionalText", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.num)("minValue", 0)("step", 10);
          }
        },
        directives: [_src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__["FormFieldComponent"], _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_2__["TextboxNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
        pipes: [_src_pipes_unit_conversion_pipe__WEBPACK_IMPORTED_MODULE_4__["UnitConversionPipe"]],
        styles: [".conversion[_ngcontent-%COMP%] {\n  font-size: 25px;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXQtY29udmVyc2lvbi1waXBlLWJhc2ljLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InVuaXQtY29udmVyc2lvbi1waXBlLWJhc2ljLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udmVyc2lvbiB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHdpZHRoOiAxNTBweDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "RLsK":
    /*!************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/pipes/unit-conversion sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function RLsK(module, exports, __webpack_require__) {
      var map = {
        "./docs/unit-conversion-pipe-docs.component.html": "jxIk",
        "./docs/unit-conversion-pipe-docs.component.less": "6F/a",
        "./docs/unit-conversion-pipe-docs.component.ts": "wD7G",
        "./unit-conversion-basic/unit-conversion-pipe-basic.example.component.html": "Yw5f",
        "./unit-conversion-basic/unit-conversion-pipe-basic.example.component.less": "eD/Y",
        "./unit-conversion-basic/unit-conversion-pipe-basic.example.component.ts": "3uq/",
        "./unit-conversion-pipe-example.module.ts": "BWQn"
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
      webpackContext.id = "RLsK";
      /***/
    },

    /***/
    "dlWr":
    /*!***********************************************************************************************!*\
      !*** ./demo/src/components/demo/pipes/unit-conversion/unit-conversion-pipe-example.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: UnitConversionPipeExampleModule */

    /***/
    function dlWr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitConversionPipeExampleModule", function () {
        return UnitConversionPipeExampleModule;
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


      var _docs_unit_conversion_pipe_docs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./docs/unit-conversion-pipe-docs.component */
      "gIpk");
      /* harmony import */


      var _unit_conversion_basic_unit_conversion_pipe_basic_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./unit-conversion-basic/unit-conversion-pipe-basic.example.component */
      "DxxU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _docs_unit_conversion_pipe_docs_component__WEBPACK_IMPORTED_MODULE_3__["UnitConversionPipeDocsComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "basic",
        component: _unit_conversion_basic_unit_conversion_pipe_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["UnitConversionPipeBasicExampleComponent"],
        data: {
          "srlc": {
            hideIndicator: true
          }
        }
      }];

      var UnitConversionPipeExampleModule = function UnitConversionPipeExampleModule() {
        _classCallCheck(this, UnitConversionPipeExampleModule);
      };

      UnitConversionPipeExampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: UnitConversionPipeExampleModule
      });
      UnitConversionPipeExampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function UnitConversionPipeExampleModule_Factory(t) {
          return new (t || UnitConversionPipeExampleModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("RLsK");
          }
        }],
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UnitConversionPipeExampleModule, {
          declarations: [_docs_unit_conversion_pipe_docs_component__WEBPACK_IMPORTED_MODULE_3__["UnitConversionPipeDocsComponent"], _unit_conversion_basic_unit_conversion_pipe_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["UnitConversionPipeBasicExampleComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "gIpk":
    /*!****************************************************************************************************!*\
      !*** ./demo/src/components/demo/pipes/unit-conversion/docs/unit-conversion-pipe-docs.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: UnitConversionPipeDocsComponent */

    /***/
    function gIpk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitConversionPipeDocsComponent", function () {
        return UnitConversionPipeDocsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */
      "CVg4");
      /* harmony import */


      var _unit_conversion_basic_unit_conversion_pipe_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../unit-conversion-basic/unit-conversion-pipe-basic.example.component */
      "DxxU");

      var UnitConversionPipeDocsComponent = function UnitConversionPipeDocsComponent() {
        _classCallCheck(this, UnitConversionPipeDocsComponent);
      };

      UnitConversionPipeDocsComponent.ɵfac = function UnitConversionPipeDocsComponent_Factory(t) {
        return new (t || UnitConversionPipeDocsComponent)();
      };

      UnitConversionPipeDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UnitConversionPipeDocsComponent,
        selectors: [["ng-component"]],
        decls: 62,
        vars: 0,
        consts: [["href", "../pipes/UnitConversionPipe.html#info", "target", "_parent"], ["href", "../miscellaneous/typealiases.html#UnitOption", "target", "_blank"], ["filenamePrefix", "unit-conversion-pipe-basic", "exampleTitle", "Basic Usage"]],
        template: function UnitConversionPipeDocsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "unitConversion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " pipe can be used to convert a large value of a small basic unit to a smaller value of a larger unit--for example, converting a quantity of 1024 in bytes to \"1 KB\". The converted unit label is automatically appended to the output. Supported units are of type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "UnitOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " and include the following: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\"generic\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " (e.g. 1k for 1000), ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\"bytes\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\"bytesPerSecond\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\"bitsPerSecond\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ", and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\"hertz\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "NuiCommonModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "To get started with using the pipe, take a look at the template source of the example below.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Parameters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "The pipe accepts the following parameters:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " - The value to be converted.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "scale");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " - The decimal scale of the formatted value--for specifying how many significant digits to display to the right of the decimal.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "plusSign");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " - Boolean for specifying whether to prefix the output with a '+' when the source value is greater than zero. Defaults to false.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "unit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " - The basic unit to use for the conversion. Accepts arguments of type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "UnitOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "unit-conversion-pipe-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _unit_conversion_basic_unit_conversion_pipe_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["UnitConversionPipeBasicExampleComponent"]],
        styles: ["[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: disc;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXQtY29udmVyc2lvbi1waXBlLWRvY3MuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBQTtBQUFSO0FBRkE7RUFLWSxnQkFBQTtBQUFaO0FBTEE7RUFTUSxlQUFBO0FBRFIiLCJmaWxlIjoidW5pdC1jb252ZXJzaW9uLXBpcGUtZG9jcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICB1bCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBkaXNjO1xuICAgICAgICB9XG4gICAgfVxuICAgIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuIl19 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=unit-conversion-unit-conversion-pipe-example-module-es5.js.map