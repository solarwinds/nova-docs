(function () {
  var _templateObject;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-image-image-module"], {
    /***/
    "+wCI":
    /*!*****************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/image/image-width-height-and-autoFill/image-width-height-and-autoFill.example.component.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: ImageWidthHeightAndAutoFillExampleComponent */

    /***/
    function wCI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageWidthHeightAndAutoFillExampleComponent", function () {
        return ImageWidthHeightAndAutoFillExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/image/image.component */
      "Qd0N");

      var ImageWidthHeightAndAutoFillExampleComponent = function ImageWidthHeightAndAutoFillExampleComponent() {
        _classCallCheck(this, ImageWidthHeightAndAutoFillExampleComponent);
      };

      ImageWidthHeightAndAutoFillExampleComponent.ɵfac = function ImageWidthHeightAndAutoFillExampleComponent_Factory(t) {
        return new (t || ImageWidthHeightAndAutoFillExampleComponent)();
      };

      ImageWidthHeightAndAutoFillExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImageWidthHeightAndAutoFillExampleComponent,
        selectors: [["nui-image-width-height-autofill-example"]],
        decls: 44,
        vars: 0,
        consts: [[1, "d-inline-flex", "flex-row", "justify-content-center", "align-items-center"], ["id", "image-svg-auto-dimensions", "image", "no-data-to-show", "autoFill", "true", "width", "100px", "height", "100px", 1, "nui-example-image-item"], ["image", "no-data-to-show", "autoFill", "true", "width", "75px", "height", "75px", 1, "nui-example-image-item"], ["image", "no-data-to-show", "autoFill", "true", "width", "50px", "height", "50px", 1, "nui-example-image-item"], ["image", "no-data-to-show", "autoFill", "true", "width", "25px", "height", "25px", 1, "nui-example-image-item"], [1, "mt-5", "w-100"], [1, "nui-example-image-item"], ["image", "no-data-to-show", "autoFill", "true", "width", "75px", "height", "100px", 1, "flex-row"], [1, "flex-row"], ["image", "no-data-to-show", "autoFill", "true", "width", "100px", "height", "50px", 1, "flex-row"], ["image", "no-data-to-show", "autoFill", "true", "width", "auto", "height", "15px", 1, "flex-row"], [1, "mt-5"], [1, "d-inline-flex", "flex-row", 2, "width", "508px", "height", "120px"], ["image", "no-data-to-show", "autoFill", "true", "width", "auto", "height", "auto", 1, "m-auto", "flex-row"], ["image", "no-data-to-show", "autoFill", "true", "width", "auto", "height", "70%", 1, "m-auto", "flex-row"], ["image", "no-data-to-show", "margin", "centered", "autoFill", "true", "width", "50%", "height", "auto", 1, "m-auto", "flex-row"], ["image", "no-data-to-show", "margin", "centered", "autoFill", "true", "width", "50%", "height", "50%", 1, "m-auto", "flex-row"]],
        template: function ImageWidthHeightAndAutoFillExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Width and Height are set to the same value in px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nui-image", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-image", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nui-image", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nui-image", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Width and Height are set to different values in px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nui-image", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "w75 + h100 px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nui-image", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "w100 + h50 px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "nui-image", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "width: auto + height: 15px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Width and Height are set to different values in %");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nui-image", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "w-auto + h-auto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "nui-image", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "w-auto + h-70%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "nui-image", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "w50% + h-auto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "nui-image", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "w50% + h50%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_1__["ImageComponent"]],
        styles: [".nui-example-image-item[_ngcontent-%COMP%] {\n  border: 1px lightgrey solid;\n  margin-right: 5px;\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  width: auto;\n}\n.margin-auto[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXdpZHRoLWhlaWdodC1hbmQtYXV0b0ZpbGwuZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUo7QUFHQTtFQUNJLFlBQUE7QUFESiIsImZpbGUiOiJpbWFnZS13aWR0aC1oZWlnaHQtYW5kLWF1dG9GaWxsLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5udWktZXhhbXBsZS1pbWFnZS1pdGVtIHtcbiAgICBib3JkZXI6IDFweCBsaWdodGdyZXkgc29saWQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbn1cblxuLm1hcmdpbi1hdXRvIHtcbiAgICBtYXJnaW46IGF1dG87XG59Il19 */"]
      });
      /***/
    },

    /***/
    "15Z7":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-margin/image-margin.example.component.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Z7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-image-margin-example\",\n    templateUrl: \"./image-margin.example.component.html\",\n})\n\nexport class ImageMarginExampleComponent {}\n";
      /***/
    },

    /***/
    "4DvD":
    /*!********************************************************************************************************!*\
      !*** ./demo/src/components/demo/image sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \********************************************************************************************************/

    /*! no static exports found */

    /***/
    function DvD(module, exports, __webpack_require__) {
      var map = {
        "./image-basic/image-basic.example.component.html": "QPLY",
        "./image-basic/image-basic.example.component.ts": "5dAf",
        "./image-docs/image-docs.example.component.html": "Mt+q",
        "./image-docs/image-docs.example.component.ts": "cdn6",
        "./image-external/image-external.example.component.html": "PZlo",
        "./image-external/image-external.example.component.ts": "ZkV1",
        "./image-float/image-float.example.component.html": "WKYG",
        "./image-float/image-float.example.component.ts": "aK6w",
        "./image-list/image-list.example.component.html": "ucCR",
        "./image-list/image-list.example.component.ts": "kPw6",
        "./image-margin/image-margin.example.component.html": "oCeV",
        "./image-margin/image-margin.example.component.ts": "15Z7",
        "./image-test/image-test.component.html": "RZt4",
        "./image-test/image-test.component.ts": "lQfa",
        "./image-visual-test/image-visual-test.component.html": "V2mz",
        "./image-visual-test/image-visual-test.component.ts": "qaZq",
        "./image-watermarked/image-watermarked.example.component.html": "HUuO",
        "./image-watermarked/image-watermarked.example.component.ts": "KzRS",
        "./image-width-height-and-autoFill/image-width-height-and-autoFill.example.component.html": "WyQ4",
        "./image-width-height-and-autoFill/image-width-height-and-autoFill.example.component.less": "gSCr",
        "./image-width-height-and-autoFill/image-width-height-and-autoFill.example.component.ts": "AmaQ",
        "./image.module.ts": "Fg4+",
        "./index.ts": "qCUn"
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
      webpackContext.id = "4DvD";
      /***/
    },

    /***/
    "5dAf":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-basic/image-basic.example.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dAf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-image-basic-example\",\n    templateUrl: \"./image-basic.example.component.html\",\n})\n\nexport class ImageBasicExampleComponent {}\n";
      /***/
    },

    /***/
    "AmaQ":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-width-height-and-autoFill/image-width-height-and-autoFill.example.component.ts ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AmaQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-image-width-height-autofill-example\",\n    templateUrl: \"./image-width-height-and-autoFill.example.component.html\",\n    styleUrls: [\"image-width-height-and-autoFill.example.component.less\"],\n})\n\nexport class ImageWidthHeightAndAutoFillExampleComponent {\n}\n";
      /***/
    },

    /***/
    "AsDV":
    /*!***********************************************************************************!*\
      !*** ./demo/src/components/demo/image/image-list/image-list.example.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: ImageListExampleComponent */

    /***/
    function AsDV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageListExampleComponent", function () {
        return ImageListExampleComponent;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/image/image.component */
      "Qd0N");

      function ImageListExampleComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "figure", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-image", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "figcaption", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", image_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](image_r1.name);
        }
      }

      var ImageListExampleComponent = function ImageListExampleComponent(images) {
        _classCallCheck(this, ImageListExampleComponent);

        this.images = images;
      };

      ImageListExampleComponent.ɵfac = function ImageListExampleComponent_Factory(t) {
        return new (t || ImageListExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["imagesPresetToken"]));
      };

      ImageListExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ImageListExampleComponent,
        selectors: [["nui-image-list-example"]],
        decls: 2,
        vars: 1,
        consts: [[1, "nui-clearfix", "row", "align-items-baseline"], ["class", "mb-3 col-md-3 col-6", 4, "ngFor", "ngForOf"], [1, "mb-3", "col-md-3", "col-6"], [1, "d-flex", "flex-column", "align-items-center"], ["width", "200px", "margin", "centered", 3, "image"], [1, "mt-2"]],
        template: function ImageListExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ImageListExampleComponent_div_1_Template, 5, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_3__["ImageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Fg4+":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Fg4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiImageModule, SrlcStage } from \"@nova-ui/bits\";\n\nimport {\n    ImageBasicExampleComponent,\n    ImageDocsExampleComponent,\n    ImageExternalExampleComponent,\n    ImageFloatExampleComponent,\n    ImageListExampleComponent,\n    ImageMarginExampleComponent,\n    ImageTestComponent,\n    ImageVisualTestComponent,\n    ImageWatermarkedExampleComponent,\n    ImageWidthHeightAndAutoFillExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: ImageDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"image-visual-test\",\n        component: ImageVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"image-test\",\n        component: ImageTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiImageModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        ImageBasicExampleComponent,\n        ImageDocsExampleComponent,\n        ImageExternalExampleComponent,\n        ImageFloatExampleComponent,\n        ImageListExampleComponent,\n        ImageMarginExampleComponent,\n        ImageVisualTestComponent,\n        ImageWatermarkedExampleComponent,\n        ImageWidthHeightAndAutoFillExampleComponent,\n        ImageTestComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class ImageModule {\n}\n";
      /***/
    },

    /***/
    "HUuO":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-watermarked/image-watermarked.example.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HUuO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-image image=\"no-data-to-show\" [isWatermark]=\"true\">\n</nui-image>\n";
      /***/
    },

    /***/
    "KzRS":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-watermarked/image-watermarked.example.component.ts ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KzRS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-image-watermarked-example\",\n    templateUrl: \"./image-watermarked.example.component.html\",\n})\n\nexport class ImageWatermarkedExampleComponent {}\n";
      /***/
    },

    /***/
    "MoW9":
    /*!*************************************************************************************!*\
      !*** ./demo/src/components/demo/image/image-float/image-float.example.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ImageFloatExampleComponent */

    /***/
    function MoW9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageFloatExampleComponent", function () {
        return ImageFloatExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/image/image.component */
      "Qd0N");

      var ImageFloatExampleComponent = function ImageFloatExampleComponent() {
        _classCallCheck(this, ImageFloatExampleComponent);
      };

      ImageFloatExampleComponent.ɵfac = function ImageFloatExampleComponent_Factory(t) {
        return new (t || ImageFloatExampleComponent)();
      };

      ImageFloatExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImageFloatExampleComponent,
        selectors: [["nui-image-float-example"]],
        decls: 3,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3230978198232383626$$DEMO_SRC_COMPONENTS_DEMO_IMAGE_IMAGE_FLOAT_IMAGE_FLOAT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("{$startTagNuiImage}{$closeTagNuiImage} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n", {
              "startTagNuiImage": "\uFFFD#2\uFFFD",
              "closeTagNuiImage": "\uFFFD/#2\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_3230978198232383626$$DEMO_SRC_COMPONENTS_DEMO_IMAGE_IMAGE_FLOAT_IMAGE_FLOAT_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241F111c02c54817d7b403fb4b5a8f79f9f9ba5d037e\u241F3230978198232383626:", ":START_TAG_NUI_IMAGE:", ":CLOSE_TAG_NUI_IMAGE: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n"])), "\uFFFD#2\uFFFD", "\uFFFD/#2\uFFFD");
          }

          return [i18n_0, ["id", "image-float", "image", "no-data-to-show", "float", "right"]];
        },
        template: function ImageFloatExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-image", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_1__["ImageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Mt+q":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-docs/image-docs.example.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MtQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    <code>&lt;nui-image&gt;</code>, as the name implies, allows you to display an image within your html. Settings for <code>&lt;nui-image&gt;</code> include size, alignment, and margins.\n</p>\n\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiImageModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    To use <code>&lt;nui-image&gt;</code> you can set the <code>image</code> input to the id of one of the available images\n    provided as part of Nova. See the <strong>Available Images</strong> section on this page. Alternately, you can set the\n    <code>image</code> input to an external URL.\n</p>\n<nui-example-wrapper filenamePrefix=\"image-basic\" exampleTitle=\"Basic Usage\">\n    <nui-image-basic-example></nui-image-basic-example>\n</nui-example-wrapper>\n\n<h2>Changing Image's Size</h2>\n<p>\n    Setting the <code>autoFill</code> input to <code>true</code> changes the pre-set <code>svg</code> height and width values\n    to 100%, which allows the <code>svg</code> to properly fill the parent container and conform to its size.\n</p>\n<p>\n    The <code>autoFill</code> only applies to <code>svg</code> image types. It will not do any effect to the rest of images used.\n</p>\n<p>\n    The <code>height</code> and <code>width</code> inputs allow manual control of the image container's dimensions. Together, these\n    three inputs allow you to properly resize the <code>nui-image</code> component using either <code>px</code> or <code>%</code> units.\n</p>\n<p>\n    If not set, default value for <code>width</code> is <code>auto</code>. The <code>height</code>, if not set, does not have a default\n    value, therefore, it's not applied by default. The user has to set its value explicitly, if needed.\n</p>\n<nui-example-wrapper filenamePrefix=\"image-width-height-and-autoFill\" exampleTitle=\"Custom Image Size\">\n    <nui-image-width-height-autofill-example></nui-image-width-height-autofill-example>\n</nui-example-wrapper>\n\n<h2>Custom Alignment</h2>\n<p>\n    <code>&lt;nui-image&gt;</code> can be aligned to the left or the right by passing the either \"left\" or \"right\" to the <code>float</code> input.\n</p>\n<nui-example-wrapper filenamePrefix=\"image-float\" exampleTitle=\"Custom Alignment\">\n    <nui-image-float-example></nui-image-float-example>\n</nui-example-wrapper>\n<h2>Custom Margin</h2>\n<p>\n    <code>&lt;nui-image&gt;</code> can have custom margins. Available values are: 'centered', 'small', 'large'. By default no margins are used.\n</p>\n<nui-example-wrapper filenamePrefix=\"image-margin\" exampleTitle=\"Custom Margin\">\n    <nui-image-margin-example></nui-image-margin-example>\n</nui-example-wrapper>\n<h2>Opacity</h2>\n<p>\n    <code>&lt;nui-image&gt;</code> can be \"watermarked\" to have 30% opacity. By default the image does not have any opacity.\n</p>\n<nui-example-wrapper filenamePrefix=\"image-watermarked\" exampleTitle=\"Watermarked Image\">\n    <nui-image-watermarked-example></nui-image-watermarked-example>\n</nui-example-wrapper>\n<h2>External Source</h2>\n<p>\n    To load an image from an external source, set the <code>image</code> input either to the image's\n    url or to an object of type\n    <code><a href=\"../interfaces/IImagesPresetItem.html\" target=\"_blank\">IImagesPresetItem</a></code>\n    in which the code property is an svg element. The example below demonstrates a hard-coded object for\n    its <code>IImagesPresetItem</code>, but in a real-world situation the entire object or the svg\n    contained within it would likely originate from an external source.\n</p>\n<nui-example-wrapper filenamePrefix=\"image-external\" exampleTitle=\"Image from external repo\">\n    <nui-image-external-example></nui-image-external-example>\n</nui-example-wrapper>\n<h2>Available Images</h2>\n<p>\n    Nova provides a limited set of images out of the box. To use them, set the <code>image</code> input\n    on the <code>nui-image</code> element using the name shown underneath each of images below.\n</p>\n<nui-example-wrapper filenamePrefix=\"image-list\" exampleTitle=\"Available Images\">\n    <nui-image-list-example></nui-image-list-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "N37H":
    /*!*************************************************!*\
      !*** ./demo/src/components/demo/image/index.ts ***!
      \*************************************************/

    /*! exports provided: ImageBasicExampleComponent, ImageDocsExampleComponent, ImageExternalExampleComponent, ImageFloatExampleComponent, ImageListExampleComponent, ImageMarginExampleComponent, ImageVisualTestComponent, ImageTestComponent, ImageWatermarkedExampleComponent, ImageWidthHeightAndAutoFillExampleComponent */

    /***/
    function N37H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _image_basic_image_basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./image-basic/image-basic.example.component */
      "Rhgl");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImageBasicExampleComponent", function () {
        return _image_basic_image_basic_example_component__WEBPACK_IMPORTED_MODULE_0__["ImageBasicExampleComponent"];
      });
      /* harmony import */


      var _image_docs_image_docs_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./image-docs/image-docs.example.component */
      "kUTL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImageDocsExampleComponent", function () {
        return _image_docs_image_docs_example_component__WEBPACK_IMPORTED_MODULE_1__["ImageDocsExampleComponent"];
      });
      /* harmony import */


      var _image_external_image_external_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./image-external/image-external.example.component */
      "RSMR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImageExternalExampleComponent", function () {
        return _image_external_image_external_example_component__WEBPACK_IMPORTED_MODULE_2__["ImageExternalExampleComponent"];
      });
      /* harmony import */


      var _image_float_image_float_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./image-float/image-float.example.component */
      "MoW9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImageFloatExampleComponent", function () {
        return _image_float_image_float_example_component__WEBPACK_IMPORTED_MODULE_3__["ImageFloatExampleComponent"];
      });
      /* harmony import */


      var _image_list_image_list_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./image-list/image-list.example.component */
      "AsDV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImageListExampleComponent", function () {
        return _image_list_image_list_example_component__WEBPACK_IMPORTED_MODULE_4__["ImageListExampleComponent"];
      });
      /* harmony import */


      var _image_margin_image_margin_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./image-margin/image-margin.example.component */
      "wE+A");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImageMarginExampleComponent", function () {
        return _image_margin_image_margin_example_component__WEBPACK_IMPORTED_MODULE_5__["ImageMarginExampleComponent"];
      });
      /* harmony import */


      var _image_visual_test_image_visual_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./image-visual-test/image-visual-test.component */
      "UKio");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImageVisualTestComponent", function () {
        return _image_visual_test_image_visual_test_component__WEBPACK_IMPORTED_MODULE_6__["ImageVisualTestComponent"];
      });
      /* harmony import */


      var _image_test_image_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./image-test/image-test.component */
      "llOW");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImageTestComponent", function () {
        return _image_test_image_test_component__WEBPACK_IMPORTED_MODULE_7__["ImageTestComponent"];
      });
      /* harmony import */


      var _image_watermarked_image_watermarked_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./image-watermarked/image-watermarked.example.component */
      "yAff");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImageWatermarkedExampleComponent", function () {
        return _image_watermarked_image_watermarked_example_component__WEBPACK_IMPORTED_MODULE_8__["ImageWatermarkedExampleComponent"];
      });
      /* harmony import */


      var _image_width_height_and_autoFill_image_width_height_and_autoFill_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./image-width-height-and-autoFill/image-width-height-and-autoFill.example.component */
      "+wCI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImageWidthHeightAndAutoFillExampleComponent", function () {
        return _image_width_height_and_autoFill_image_width_height_and_autoFill_example_component__WEBPACK_IMPORTED_MODULE_9__["ImageWidthHeightAndAutoFillExampleComponent"];
      });
      /***/

    },

    /***/
    "PZlo":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-external/image-external.example.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PZlo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex\">\n    <div class=\"mr-5\">\n        <div class=\"mb-5\"><em>URL</em></div>\n        <nui-image [image]=\"bookCover.url\" [imageAlt]=\"bookCover.description\" width=\"200px\"></nui-image>\n    </div>\n    <div>\n        <div class=\"mb-5\"><em>Object with SVG</em></div>\n        <nui-image [image]=\"imageObject\" width=\"200px\"></nui-image>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "QPLY":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-basic/image-basic.example.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QPLY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-image image=\"no-data-to-show\">\n</nui-image>\n";
      /***/
    },

    /***/
    "RSMR":
    /*!*******************************************************************************************!*\
      !*** ./demo/src/components/demo/image/image-external/image-external.example.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ImageExternalExampleComponent */

    /***/
    function RSMR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageExternalExampleComponent", function () {
        return ImageExternalExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/image/image.component */
      "Qd0N");

      var ImageExternalExampleComponent = function ImageExternalExampleComponent() {
        _classCallCheck(this, ImageExternalExampleComponent);

        this.bookCover = {
          url: "https://imgc.allpostersimages.com/img/print/u-g-F8PQ9I0.jpg?w=550&h=550&p=0",
          description: "Harry Potter book"
        };
        this.imageObject = {
          "svgFile": "watermark-data.svg",
          "name": "no-data-to-show",
          "brushType": "filled",
          "code": "<svg width='169.5' height='116.09' viewBox='0 0 169.5 116.09'><defs><style>.nui-image-watermark-data-1,.nui-image-watermark-data-2{fill:#707070;}.nui-image-watermark-data-1{fill-opacity:0.2;}.nui-image-watermark-data-2{fill-opacity:0.2;}.nui-image-watermark-data-3,.nui-image-watermark-data-6{fill:#fff;}.nui-image-watermark-data-3,.nui-image-watermark-data-5,.nui-image-watermark-data-6{stroke:#707070;}.nui-image-watermark-data-3,.nui-image-watermark-data-5{stroke-linecap:round;stroke-linejoin:round;}.nui-image-watermark-data-4{fill:#d5d5d5;}.nui-image-watermark-data-5{fill:none;}.nui-image-watermark-data-6{stroke-miterlimit:10;}</style></defs><title>empty-data</title><g id='empty-data'><path class='nui-image-watermark-data-1' d='M169.5,62.09c0-5-12.31-9-27.5-9s-27.5,4-27.5,9v45c0,5,12.31,9,27.5,9s27.5-4,27.5-9Z'/><polygon class='nui-image-watermark-data-2' points='144 24.47 93.77 5 74.5 12.47 124.73 31.94 144 24.47'/><polygon class='nui-image-watermark-data-2' points='55.23 5 5 24.47 24.27 31.94 74.5 12.47 55.23 5'/><polygon class='nui-image-watermark-data-2' points='124.73 31.94 124.5 32.03 124.5 31.85 74.5 12.47 24.5 31.85 24.5 32.03 24.27 31.94 5 39.41 24.5 46.97 24.5 78.88 74.5 98.26 124.5 78.88 124.5 46.97 144 39.41 124.73 31.94'/><polygon class='nui-image-watermark-data-3' points='120 27.44 120 74.38 70 93.76 20 74.38 20 27.44 70 7.97 120 27.44'/><polygon class='nui-image-watermark-data-4' points='70 7.97 120 27.44 70 46.76 20 27.44 70 7.97'/><line class='nui-image-watermark-data-5' x1='70' y1='93.59' x2='70' y2='8.18'/><polygon class='nui-image-watermark-data-3' points='70 7.97 120.23 27.44 139.5 19.97 89.27 0.5 70 7.97'/><polygon class='nui-image-watermark-data-3' points='70 7.97 19.77 27.44 0.5 19.97 50.73 0.5 70 7.97'/><polygon class='nui-image-watermark-data-3' points='70 46.91 120.23 27.44 139.5 34.91 89.27 54.38 70 46.91'/><polygon class='nui-image-watermark-data-3' points='70 46.91 19.77 27.44 0.5 34.91 50.73 54.38 70 46.91'/><path class='nui-image-watermark-data-6' d='M137.5,78.59c-15.19,0-27.5,4-27.5,9v15c0,5,12.31,9,27.5,9s27.5-4,27.5-9v-15C165,82.62,152.69,78.59,137.5,78.59Z'/><ellipse class='nui-image-watermark-data-6' cx='137.5' cy='87.59' rx='27.5' ry='9'/><path class='nui-image-watermark-data-6' d='M137.5,63.59c-15.19,0-27.5,4-27.5,9v15c0,5,12.31,9,27.5,9s27.5-4,27.5-9v-15C165,67.62,152.69,63.59,137.5,63.59Z'/><ellipse class='nui-image-watermark-data-6' cx='137.5' cy='72.59' rx='27.5' ry='9'/><path class='nui-image-watermark-data-6' d='M137.5,48.59c-15.19,0-27.5,4-27.5,9v15c0,5,12.31,9,27.5,9s27.5-4,27.5-9v-15C165,52.62,152.69,48.59,137.5,48.59Z'/><ellipse class='nui-image-watermark-data-6' cx='137.5' cy='57.59' rx='27.5' ry='9'/></g></svg>"
        };
      };

      ImageExternalExampleComponent.ɵfac = function ImageExternalExampleComponent_Factory(t) {
        return new (t || ImageExternalExampleComponent)();
      };

      ImageExternalExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImageExternalExampleComponent,
        selectors: [["nui-image-external-example"]],
        decls: 11,
        vars: 3,
        consts: [[1, "d-flex"], [1, "mr-5"], [1, "mb-5"], ["width", "200px", 3, "image", "imageAlt"], ["width", "200px", 3, "image"]],
        template: function ImageExternalExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "URL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-image", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Object with SVG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nui-image", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.bookCover.url)("imageAlt", ctx.bookCover.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.imageObject);
          }
        },
        directives: [_src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_1__["ImageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "RZt4":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-test/image-test.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RZt4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-image id=\"image-float\" image=\"no-data-to-show\" float=\"right\"></nui-image>\n<nui-image id=\"image-margin\" image=\"no-data-to-show\" margin=\"centered\"></nui-image>\n<nui-image id=\"image-svg-auto-dimensions\"\n           image=\"no-data-to-show\"\n           autoFill=\"true\"\n           width=\"100px\"\n           height=\"100px\"></nui-image>\n";
      /***/
    },

    /***/
    "Rhgl":
    /*!*************************************************************************************!*\
      !*** ./demo/src/components/demo/image/image-basic/image-basic.example.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ImageBasicExampleComponent */

    /***/
    function Rhgl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageBasicExampleComponent", function () {
        return ImageBasicExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/image/image.component */
      "Qd0N");

      var ImageBasicExampleComponent = function ImageBasicExampleComponent() {
        _classCallCheck(this, ImageBasicExampleComponent);
      };

      ImageBasicExampleComponent.ɵfac = function ImageBasicExampleComponent_Factory(t) {
        return new (t || ImageBasicExampleComponent)();
      };

      ImageBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImageBasicExampleComponent,
        selectors: [["nui-image-basic-example"]],
        decls: 1,
        vars: 0,
        consts: [["image", "no-data-to-show"]],
        template: function ImageBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-image", 0);
          }
        },
        directives: [_src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_1__["ImageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "UKio":
    /*!*****************************************************************************************!*\
      !*** ./demo/src/components/demo/image/image-visual-test/image-visual-test.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ImageVisualTestComponent */

    /***/
    function UKio(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageVisualTestComponent", function () {
        return ImageVisualTestComponent;
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


      var _src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/image/image.component */
      "Qd0N");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ImageVisualTestComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "figure", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-image", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "figcaption", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", image_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](image_r1.name);
        }
      }

      var ImageVisualTestComponent = function ImageVisualTestComponent(images) {
        _classCallCheck(this, ImageVisualTestComponent);

        this.images = images;
      };

      ImageVisualTestComponent.ɵfac = function ImageVisualTestComponent_Factory(t) {
        return new (t || ImageVisualTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["imagesPresetToken"]));
      };

      ImageVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ImageVisualTestComponent,
        selectors: [["nui-image-visual-test"]],
        decls: 33,
        vars: 1,
        consts: [[1, "container"], ["image", "no-data-to-show"], ["image", "no-data-to-show", "width", "30%"], ["id", "image", "image", "no-data-to-show", "width", "300px"], ["id", "nui-demo-image-custom-alignment-container__left"], ["id", "image-float", "image", "no-data-to-show", "float", "left"], ["id", "nui-demo-image-custom-alignment-container__right"], ["id", "image-float", "image", "no-data-to-show", "float", "right"], [1, "nui-clearfix", "row", "align-items-baseline"], ["class", "mb-3 col-md-3 col-6", 4, "ngFor", "ngForOf"], [1, "mb-3", "col-md-3", "col-6"], [1, "d-flex", "flex-column", "align-items-center"], ["width", "200px", "margin", "centered", 3, "image"], [1, "mt-2"]],
        template: function ImageVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Default Image View");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nui-image", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Image 30% custom size");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "nui-image", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Image 300px custom size");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "nui-image", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Image Custom Alignment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "nui-image", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "nui-image", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non? Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit voluptatem. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Available images");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ImageVisualTestComponent_div_31_Template, 5, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images);
          }
        },
        directives: [_src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_2__["ImageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "V2mz":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-visual-test/image-visual-test.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function V2mz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <h3>Default Image View</h3>\n    <div>\n        <nui-image image=\"no-data-to-show\">\n        </nui-image>\n    </div>\n    <hr />\n    <h3>Image 30% custom size</h3>\n    <div>\n        <nui-image image=\"no-data-to-show\" width=\"30%\">\n        </nui-image>\n    </div>\n    <h3>Image 300px custom size</h3>\n    <div>\n        <nui-image id=\"image\" image=\"no-data-to-show\" width=\"300px\">\n        </nui-image>\n    </div>\n    <hr />\n\n    <h3>Image Custom Alignment</h3>\n    <div id=\"nui-demo-image-custom-alignment-container__left\">\n        <p>\n            <nui-image id=\"image-float\"\n                       image=\"no-data-to-show\"\n                       float=\"left\">\n            </nui-image>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n            Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n            nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n            Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n            nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n            Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n            nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n            Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n            nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n            Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n            nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n            Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n            nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n        </p>\n    </div>\n    <hr />\n\n    <div id=\"nui-demo-image-custom-alignment-container__right\">\n        <p>\n            <nui-image id=\"image-float\"\n                       image=\"no-data-to-show\"\n                       float=\"right\">\n            </nui-image>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n            Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n            nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n            Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n            nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n            Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n            nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n            Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n            nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n            Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n            nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n            Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n            nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n        </p>\n    </div>\n    <hr />\n\n    <h3>Available images</h3>\n    <div>\n        <div class=\"nui-clearfix row align-items-baseline\">\n            <div class=\"mb-3 col-md-3 col-6\" *ngFor=\"let image of images\">\n                <figure class=\"d-flex flex-column align-items-center\">\n                    <nui-image [image]=\"image.name\"\n                               width=\"200px\"\n                               margin=\"centered\">\n                    </nui-image>\n                    <figcaption class=\"mt-2\">{{image.name}}</figcaption>\n                </figure>\n            </div>\n        </div>\n    </div>\n    <hr />\n</div>\n";
      /***/
    },

    /***/
    "WKYG":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-float/image-float.example.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WKYG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p i18n>\n    <nui-image id=\"image-float\"\n                image=\"no-data-to-show\"\n                float=\"right\">\n    </nui-image>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n    Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n    nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n    Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n    nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n    Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n    nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n    Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n    nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n    Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n    nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem natus non?\n    Amet architecto, asperiores dolor eligendi eum fugit illum ipsum magni,\n    nemo optio perspiciatis quaerat quidem rem, sit voluptatem.\n</p>\n";
      /***/
    },

    /***/
    "WyQ4":
    /*!*********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-width-height-and-autoFill/image-width-height-and-autoFill.example.component.html ***!
      \*********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WyQ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div><em>Width and Height are set to the same value in px</em></div>\n<div class=\"d-inline-flex flex-row justify-content-center align-items-center\">\n    <nui-image id=\"image-svg-auto-dimensions\" class=\"nui-example-image-item\" image=\"no-data-to-show\" autoFill=\"true\" width=\"100px\" height=\"100px\"></nui-image>\n    <nui-image class=\"nui-example-image-item\" image=\"no-data-to-show\" autoFill=\"true\" width=\"75px\" height=\"75px\"></nui-image>\n    <nui-image class=\"nui-example-image-item\" image=\"no-data-to-show\" autoFill=\"true\" width=\"50px\" height=\"50px\"></nui-image>\n    <nui-image class=\"nui-example-image-item\" image=\"no-data-to-show\" autoFill=\"true\" width=\"25px\" height=\"25px\"></nui-image>\n</div>\n\n<div class=\"mt-5 w-100\"></div>\n<div><em>Width and Height are set to different values in px</em></div>\n<div class=\"nui-example-image-item\">\n    <nui-image class=\"flex-row\" image=\"no-data-to-show\" autoFill=\"true\" width=\"75px\" height=\"100px\"></nui-image>\n    <div class=\"flex-row\">w75 + h100 px</div>\n</div>\n<div class=\"nui-example-image-item\">\n    <nui-image class=\"flex-row\" image=\"no-data-to-show\" autoFill=\"true\" width=\"100px\" height=\"50px\"></nui-image>\n    <div class=\"flex-row\">w100 + h50 px</div>\n</div>\n<div class=\"nui-example-image-item\">\n    <nui-image class=\"flex-row\" image=\"no-data-to-show\" autoFill=\"true\" width=\"auto\" height=\"15px\"></nui-image>\n    <div class=\"flex-row\">width: auto + height: 15px</div>\n</div>\n\n<div class=\"mt-5\"><em>Width and Height are set to different values in %</em></div>\n<div style=\"width: 508px; height: 120px\" class=\"d-inline-flex flex-row\">\n    <div class=\"nui-example-image-item\">\n        <nui-image class=\"m-auto flex-row\" image=\"no-data-to-show\" autoFill=\"true\" width=\"auto\" height=\"auto\"></nui-image>\n        <div class=\"flex-row\">w-auto + h-auto</div>\n    </div>\n    <div class=\"nui-example-image-item\">\n        <nui-image class=\"m-auto flex-row\" image=\"no-data-to-show\" autoFill=\"true\" width=\"auto\" height=\"70%\"></nui-image>\n        <div class=\"flex-row\">w-auto + h-70%</div>\n    </div>\n    <div class=\"nui-example-image-item\">\n        <nui-image class=\"m-auto flex-row\" image=\"no-data-to-show\" margin=\"centered\" autoFill=\"true\" width=\"50%\" height=\"auto\"></nui-image>\n        <div class=\"flex-row\">w50% + h-auto</div>\n    </div>\n    <div class=\"nui-example-image-item\">\n        <nui-image class=\"m-auto flex-row\" image=\"no-data-to-show\" margin=\"centered\" autoFill=\"true\" width=\"50%\" height=\"50%\"></nui-image>\n        <div class=\"flex-row\">w50% + h50%</div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "ZkV1":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-external/image-external.example.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZkV1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { IImagesPresetItem } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-image-external-example\",\n    templateUrl: \"./image-external.example.component.html\",\n})\n\nexport class ImageExternalExampleComponent {\n    public bookCover = {\n        url: \"https://imgc.allpostersimages.com/img/print/u-g-F8PQ9I0.jpg?w=550&h=550&p=0\",\n        description: \"Harry Potter book\",\n    };\n\n    public imageObject: IImagesPresetItem = {\n        \"svgFile\": \"watermark-data.svg\",\n        \"name\": \"no-data-to-show\",\n        \"brushType\": \"filled\",\n        \"code\": \"<svg width='169.5' height='116.09' viewBox='0 0 169.5 116.09'><defs><style>.nui-image-watermark-data-1,.nui-image-watermark-data-2{fill:#707070;}.nui-image-watermark-data-1{fill-opacity:0.2;}.nui-image-watermark-data-2{fill-opacity:0.2;}.nui-image-watermark-data-3,.nui-image-watermark-data-6{fill:#fff;}.nui-image-watermark-data-3,.nui-image-watermark-data-5,.nui-image-watermark-data-6{stroke:#707070;}.nui-image-watermark-data-3,.nui-image-watermark-data-5{stroke-linecap:round;stroke-linejoin:round;}.nui-image-watermark-data-4{fill:#d5d5d5;}.nui-image-watermark-data-5{fill:none;}.nui-image-watermark-data-6{stroke-miterlimit:10;}</style></defs><title>empty-data</title><g id='empty-data'><path class='nui-image-watermark-data-1' d='M169.5,62.09c0-5-12.31-9-27.5-9s-27.5,4-27.5,9v45c0,5,12.31,9,27.5,9s27.5-4,27.5-9Z'/><polygon class='nui-image-watermark-data-2' points='144 24.47 93.77 5 74.5 12.47 124.73 31.94 144 24.47'/><polygon class='nui-image-watermark-data-2' points='55.23 5 5 24.47 24.27 31.94 74.5 12.47 55.23 5'/><polygon class='nui-image-watermark-data-2' points='124.73 31.94 124.5 32.03 124.5 31.85 74.5 12.47 24.5 31.85 24.5 32.03 24.27 31.94 5 39.41 24.5 46.97 24.5 78.88 74.5 98.26 124.5 78.88 124.5 46.97 144 39.41 124.73 31.94'/><polygon class='nui-image-watermark-data-3' points='120 27.44 120 74.38 70 93.76 20 74.38 20 27.44 70 7.97 120 27.44'/><polygon class='nui-image-watermark-data-4' points='70 7.97 120 27.44 70 46.76 20 27.44 70 7.97'/><line class='nui-image-watermark-data-5' x1='70' y1='93.59' x2='70' y2='8.18'/><polygon class='nui-image-watermark-data-3' points='70 7.97 120.23 27.44 139.5 19.97 89.27 0.5 70 7.97'/><polygon class='nui-image-watermark-data-3' points='70 7.97 19.77 27.44 0.5 19.97 50.73 0.5 70 7.97'/><polygon class='nui-image-watermark-data-3' points='70 46.91 120.23 27.44 139.5 34.91 89.27 54.38 70 46.91'/><polygon class='nui-image-watermark-data-3' points='70 46.91 19.77 27.44 0.5 34.91 50.73 54.38 70 46.91'/><path class='nui-image-watermark-data-6' d='M137.5,78.59c-15.19,0-27.5,4-27.5,9v15c0,5,12.31,9,27.5,9s27.5-4,27.5-9v-15C165,82.62,152.69,78.59,137.5,78.59Z'/><ellipse class='nui-image-watermark-data-6' cx='137.5' cy='87.59' rx='27.5' ry='9'/><path class='nui-image-watermark-data-6' d='M137.5,63.59c-15.19,0-27.5,4-27.5,9v15c0,5,12.31,9,27.5,9s27.5-4,27.5-9v-15C165,67.62,152.69,63.59,137.5,63.59Z'/><ellipse class='nui-image-watermark-data-6' cx='137.5' cy='72.59' rx='27.5' ry='9'/><path class='nui-image-watermark-data-6' d='M137.5,48.59c-15.19,0-27.5,4-27.5,9v15c0,5,12.31,9,27.5,9s27.5-4,27.5-9v-15C165,52.62,152.69,48.59,137.5,48.59Z'/><ellipse class='nui-image-watermark-data-6' cx='137.5' cy='57.59' rx='27.5' ry='9'/></g></svg>\",\n    };\n\n}\n";
      /***/
    },

    /***/
    "aK6w":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-float/image-float.example.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aK6w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-image-float-example\",\n    templateUrl: \"./image-float.example.component.html\",\n})\n\nexport class ImageFloatExampleComponent {}\n";
      /***/
    },

    /***/
    "cdn6":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-docs/image-docs.example.component.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cdn6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-image-docs-example\",\n    templateUrl: \"./image-docs.example.component.html\",\n})\n\nexport class ImageDocsExampleComponent {}\n";
      /***/
    },

    /***/
    "gSCr":
    /*!*********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-width-height-and-autoFill/image-width-height-and-autoFill.example.component.less ***!
      \*********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gSCr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n.nui-example-image-item {\n    border: 1px lightgrey solid;\n    margin-right: 5px;\n    display: inline-flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: auto;\n    width: auto;\n}\n\n.margin-auto {\n    margin: auto;\n}";
      /***/
    },

    /***/
    "kPw6":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-list/image-list.example.component.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kPw6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject } from \"@angular/core\";\nimport { IImagesPresetItem, imagesPresetToken } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-image-list-example\",\n    templateUrl: \"./image-list.example.component.html\",\n})\n\nexport class ImageListExampleComponent {\n    constructor(@Inject(imagesPresetToken) public images: Array<IImagesPresetItem>) {\n    }\n}\n";
      /***/
    },

    /***/
    "kU5d":
    /*!********************************************************!*\
      !*** ./demo/src/components/demo/image/image.module.ts ***!
      \********************************************************/

    /*! exports provided: ImageModule */

    /***/
    function kU5d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageModule", function () {
        return ImageModule;
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
      "N37H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["ImageDocsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "image-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["ImageVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "image-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["ImageTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ImageModule = function ImageModule() {
        _classCallCheck(this, ImageModule);
      };

      ImageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: ImageModule
      });
      ImageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function ImageModule_Factory(t) {
          return new (t || ImageModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("4DvD");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiImageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ImageModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["ImageBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ImageDocsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ImageExternalExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ImageFloatExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ImageListExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ImageMarginExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ImageVisualTestComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ImageWatermarkedExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ImageWidthHeightAndAutoFillExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ImageTestComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiImageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "kUTL":
    /*!***********************************************************************************!*\
      !*** ./demo/src/components/demo/image/image-docs/image-docs.example.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: ImageDocsExampleComponent */

    /***/
    function kUTL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageDocsExampleComponent", function () {
        return ImageDocsExampleComponent;
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


      var _image_basic_image_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../image-basic/image-basic.example.component */
      "Rhgl");
      /* harmony import */


      var _image_width_height_and_autoFill_image_width_height_and_autoFill_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../image-width-height-and-autoFill/image-width-height-and-autoFill.example.component */
      "+wCI");
      /* harmony import */


      var _image_float_image_float_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../image-float/image-float.example.component */
      "MoW9");
      /* harmony import */


      var _image_margin_image_margin_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../image-margin/image-margin.example.component */
      "wE+A");
      /* harmony import */


      var _image_watermarked_image_watermarked_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../image-watermarked/image-watermarked.example.component */
      "yAff");
      /* harmony import */


      var _image_external_image_external_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../image-external/image-external.example.component */
      "RSMR");
      /* harmony import */


      var _image_list_image_list_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../image-list/image-list.example.component */
      "AsDV");

      var ImageDocsExampleComponent = function ImageDocsExampleComponent() {
        _classCallCheck(this, ImageDocsExampleComponent);
      };

      ImageDocsExampleComponent.ɵfac = function ImageDocsExampleComponent_Factory(t) {
        return new (t || ImageDocsExampleComponent)();
      };

      ImageDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImageDocsExampleComponent,
        selectors: [["nui-image-docs-example"]],
        decls: 140,
        vars: 0,
        consts: [["filenamePrefix", "image-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "image-width-height-and-autoFill", "exampleTitle", "Custom Image Size"], ["filenamePrefix", "image-float", "exampleTitle", "Custom Alignment"], ["filenamePrefix", "image-margin", "exampleTitle", "Custom Margin"], ["filenamePrefix", "image-watermarked", "exampleTitle", "Watermarked Image"], ["href", "../interfaces/IImagesPresetItem.html", "target", "_blank"], ["filenamePrefix", "image-external", "exampleTitle", "Image from external repo"], ["filenamePrefix", "image-list", "exampleTitle", "Available Images"]],
        template: function ImageDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<nui-image>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ", as the name implies, allows you to display an image within your html. Settings for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "<nui-image>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " include size, alignment, and margins.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "NuiImageModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " To use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "<nui-image>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " you can set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " input to the id of one of the available images provided as part of Nova. See the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Available Images");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " section on this page. Alternately, you can set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " input to an external URL.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nui-example-wrapper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "nui-image-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Changing Image's Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Setting the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "autoFill");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " input to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " changes the pre-set ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " height and width values to 100%, which allows the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " to properly fill the parent container and conform to its size.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "autoFill");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " only applies to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " image types. It will not do any effect to the rest of images used.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "height");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " inputs allow manual control of the image container's dimensions. Together, these three inputs allow you to properly resize the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "nui-image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " component using either ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " units.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " If not set, default value for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "auto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, ". The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "height");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, ", if not set, does not have a default value, therefore, it's not applied by default. The user has to set its value explicitly, if needed.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "nui-image-width-height-autofill-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Custom Alignment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "<nui-image>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " can be aligned to the left or the right by passing the either \"left\" or \"right\" to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "float");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "nui-image-float-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Custom Margin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "<nui-image>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " can have custom margins. Available values are: 'centered', 'small', 'large'. By default no margins are used.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "nui-image-margin-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Opacity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "<nui-image>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " can be \"watermarked\" to have 30% opacity. By default the image does not have any opacity.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "nui-example-wrapper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "nui-image-watermarked-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "External Source");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " To load an image from an external source, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " input either to the image's url or to an object of type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "IImagesPresetItem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " in which the code property is an svg element. The example below demonstrates a hard-coded object for its ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "IImagesPresetItem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, ", but in a real-world situation the entire object or the svg contained within it would likely originate from an external source.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "nui-image-external-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Available Images");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Nova provides a limited set of images out of the box. To use them, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " input on the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "nui-image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " element using the name shown underneath each of images below.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "nui-example-wrapper", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "nui-image-list-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _image_basic_image_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["ImageBasicExampleComponent"], _image_width_height_and_autoFill_image_width_height_and_autoFill_example_component__WEBPACK_IMPORTED_MODULE_3__["ImageWidthHeightAndAutoFillExampleComponent"], _image_float_image_float_example_component__WEBPACK_IMPORTED_MODULE_4__["ImageFloatExampleComponent"], _image_margin_image_margin_example_component__WEBPACK_IMPORTED_MODULE_5__["ImageMarginExampleComponent"], _image_watermarked_image_watermarked_example_component__WEBPACK_IMPORTED_MODULE_6__["ImageWatermarkedExampleComponent"], _image_external_image_external_example_component__WEBPACK_IMPORTED_MODULE_7__["ImageExternalExampleComponent"], _image_list_image_list_example_component__WEBPACK_IMPORTED_MODULE_8__["ImageListExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "lQfa":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-test/image-test.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lQfa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-image-test\",\n    templateUrl: \"./image-test.component.html\",\n})\nexport class ImageTestComponent {\n}\n";
      /***/
    },

    /***/
    "llOW":
    /*!***************************************************************************!*\
      !*** ./demo/src/components/demo/image/image-test/image-test.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ImageTestComponent */

    /***/
    function llOW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageTestComponent", function () {
        return ImageTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/image/image.component */
      "Qd0N");

      var ImageTestComponent = function ImageTestComponent() {
        _classCallCheck(this, ImageTestComponent);
      };

      ImageTestComponent.ɵfac = function ImageTestComponent_Factory(t) {
        return new (t || ImageTestComponent)();
      };

      ImageTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImageTestComponent,
        selectors: [["nui-image-test"]],
        decls: 3,
        vars: 0,
        consts: [["id", "image-float", "image", "no-data-to-show", "float", "right"], ["id", "image-margin", "image", "no-data-to-show", "margin", "centered"], ["id", "image-svg-auto-dimensions", "image", "no-data-to-show", "autoFill", "true", "width", "100px", "height", "100px"]],
        template: function ImageTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-image", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nui-image", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-image", 2);
          }
        },
        directives: [_src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_1__["ImageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "oCeV":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-margin/image-margin.example.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oCeV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-image id=\"image-margin\" image=\"no-data-to-show\" margin=\"centered\"></nui-image>\n";
      /***/
    },

    /***/
    "qCUn":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/index.ts ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function qCUn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./image-basic/image-basic.example.component\";\nexport * from \"./image-docs/image-docs.example.component\";\nexport * from \"./image-external/image-external.example.component\";\nexport * from \"./image-float/image-float.example.component\";\nexport * from \"./image-list/image-list.example.component\";\nexport * from \"./image-margin/image-margin.example.component\";\nexport * from \"./image-visual-test/image-visual-test.component\";\nexport * from \"./image-test/image-test.component\";\nexport * from \"./image-watermarked/image-watermarked.example.component\";\nexport * from \"./image-width-height-and-autoFill/image-width-height-and-autoFill.example.component\";\n";
      /***/
    },

    /***/
    "qaZq":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-visual-test/image-visual-test.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qaZq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject } from \"@angular/core\";\nimport { IImagesPresetItem, imagesPresetToken } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-image-visual-test\",\n    templateUrl: \"./image-visual-test.component.html\",\n})\nexport class ImageVisualTestComponent {\n    constructor(@Inject(imagesPresetToken) public images: Array<IImagesPresetItem>) {\n    }\n}\n";
      /***/
    },

    /***/
    "ucCR":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/image/image-list/image-list.example.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ucCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-clearfix row align-items-baseline\">\n    <div class=\"mb-3 col-md-3 col-6\" *ngFor=\"let image of images\">\n        <figure class=\"d-flex flex-column align-items-center\">\n            <nui-image [image]=\"image.name\"\n                        width=\"200px\"\n                        margin=\"centered\">\n            </nui-image>\n            <figcaption class=\"mt-2\">{{image.name}}</figcaption>\n        </figure>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "wE+A":
    /*!***************************************************************************************!*\
      !*** ./demo/src/components/demo/image/image-margin/image-margin.example.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: ImageMarginExampleComponent */

    /***/
    function wEA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageMarginExampleComponent", function () {
        return ImageMarginExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/image/image.component */
      "Qd0N");

      var ImageMarginExampleComponent = function ImageMarginExampleComponent() {
        _classCallCheck(this, ImageMarginExampleComponent);
      };

      ImageMarginExampleComponent.ɵfac = function ImageMarginExampleComponent_Factory(t) {
        return new (t || ImageMarginExampleComponent)();
      };

      ImageMarginExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImageMarginExampleComponent,
        selectors: [["nui-image-margin-example"]],
        decls: 1,
        vars: 0,
        consts: [["id", "image-margin", "image", "no-data-to-show", "margin", "centered"]],
        template: function ImageMarginExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-image", 0);
          }
        },
        directives: [_src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_1__["ImageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "yAff":
    /*!*************************************************************************************************!*\
      !*** ./demo/src/components/demo/image/image-watermarked/image-watermarked.example.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ImageWatermarkedExampleComponent */

    /***/
    function yAff(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageWatermarkedExampleComponent", function () {
        return ImageWatermarkedExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/image/image.component */
      "Qd0N");

      var ImageWatermarkedExampleComponent = function ImageWatermarkedExampleComponent() {
        _classCallCheck(this, ImageWatermarkedExampleComponent);
      };

      ImageWatermarkedExampleComponent.ɵfac = function ImageWatermarkedExampleComponent_Factory(t) {
        return new (t || ImageWatermarkedExampleComponent)();
      };

      ImageWatermarkedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImageWatermarkedExampleComponent,
        selectors: [["nui-image-watermarked-example"]],
        decls: 1,
        vars: 1,
        consts: [["image", "no-data-to-show", 3, "isWatermark"]],
        template: function ImageWatermarkedExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-image", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isWatermark", true);
          }
        },
        directives: [_src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_1__["ImageComponent"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-image-image-module-es5.js.map