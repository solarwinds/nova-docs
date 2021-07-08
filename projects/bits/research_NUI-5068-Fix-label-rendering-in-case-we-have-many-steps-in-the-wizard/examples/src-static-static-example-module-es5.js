(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-static-static-example-module"], {
    /***/
    "09dT":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/static/links/links.example.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Links</h1>\n\n<h3>Link Sizes</h3>\n<div class=\"link-example\">\n    <div class=\"link-row d-flex justify-content-between align-items-baseline\">\n        <a class=\"nui-text-link\">Link</a>\n        <a class=\"nui-text-link\">Link</a>\n        <span class=\"link-info-text\">.nui-text-link</span>\n    </div>\n    <div class=\"link-row d-flex justify-content-between align-items-baseline\">\n        <a class=\"nui-text-link-small\">Link small</a>\n        <a class=\"nui-text-link-small\">Link small</a>\n        <span class=\"link-info-text\">.nui-text-link-small</span>\n    </div>\n</div>\n\n<h3>Link with icon</h3>\n<div class=\"link-example\">\n    <div class=\"link-info-text\">Icon can be on the left or on the right side of link</div>\n    <div class=\"link-row d-flex justify-content-between align-items-baseline\">\n        <a class=\"nui-text-link d-flex align-items-center\"><nui-icon icon=\"help\"></nui-icon>Link</a>\n        <a class=\"nui-text-link d-flex align-items-center\">Link<nui-icon icon=\"external-link\"></nui-icon></a>\n    </div>\n</div>\n\n<h3>Link States</h3>\n<div class=\"link-example d-flex justify-content-between\">\n    <div class=\"d-flex flex-column align-items-center\">\n        <a class=\"nui-text-link\">Link Default</a>\n        <span class=\"link-info-text\">@nui-color-text-link</span>\n    </div>\n    <div class=\"d-flex flex-column align-items-center\">\n        <a class=\"nui-text-link disabled\">Link disabled</a>\n        <span class=\"link-info-text\">@nui-color-text-disabled</span>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "5wNP":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/static/typography/typography-example.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wNP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Specific Text Styles</h2>\n<h4 class=\"mb-3\">Core IT</h4>\n<div class=\"mb-2\"><code>.nui-text-product</code></div>\n<mark>This style uses <strong>Roboto</strong> font, however, Nova Bits styles do not include it. You can easily add it in following ways:</mark>\n<nui-expander header=\"Use mixin\">\n    <ol>\n        <li>\n            Import <strong>font-roboto.less</strong> directly like <mark>@import \"@nova-ui/bits/sdk/less/mixins/font-roboto.less\"</mark>\n        </li>\n        <li>\n            Use <code>.font-roboto()</code> mixin to load Roboto font\n        </li>\n        <li>\n            Mixin Example: \n            <p>\n                <mark>\n                    .font-roboto();<br>\n                    .css-class &#123;\n                        <p style=\"text-indent:20px\">\n                            <mark>\n                                font-family: @font-family-roboto;\n                            </mark>\n                        </p>\n                    &#125;\n                </mark>\n            </p>\n        </li>\n    </ol>\n</nui-expander>\n<nui-expander header=\"Use stylesheet file\">\n    <ol>\n        <li>\n            Find the compiled stylesheet file under the <mark>@nova-ui/bits/bundles/css/styles-font-roboto.css</mark>\n        </li>\n        <li>\n            Add it to angular.json to set Roboto font globally, or use it locally by importing the file into the stylesheet where this font is needed.\n        </li>\n        <li>\n            Angular.json Example: \n            <p>\n                <mark>\n                    \"styles\": [\n                        <p style=\"text-indent:20px\">\n                            <mark>\n                                \"[path_to_node_modules]/@nova-ui/bits/bundles/css/styles-font-roboto.css\"\n                            </mark>\n                        </p>\n                    ],\n                </mark>\n            </p>\n        </li>\n\n    </ol>\n</nui-expander>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-product ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Page Title</h4>\n<div class=\"mb-2\"><code>.nui-text-page</code></div>\n<span class=\"nui-text-page ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Widget Text</h4>\n<div class=\"mb-2\"><code>.nui-text-widget</code></div>\n<span class=\"nui-text-widget ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Panel Title</h4>\n<div class=\"mb-2\"><code>.nui-text-panel</code></div>\n<span class=\"nui-text-panel ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Panel Title Inverse</h4>\n<div class=\"mb-2\"><code>.nui-text-panel--inverse</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-panel--inverse ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Panel Title for Dark Bg</h4>\n<div class=\"mb-2\"><code>.nui-text-panel--darkbg</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-panel--darkbg ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Label Text</h4>\n<div class=\"mb-2\"><code>.nui-text-label</code></div>\n<span class=\"nui-text-label ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Label Text Inverse</h4>\n<div class=\"mb-2\"><code>.nui-text-label--inverse</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-label--inverse ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Label Text for Dark Bg</h4>\n<div class=\"mb-2\"><code>.nui-text-label--darkbg</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-label--darkbg ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Default Text</h4>\n<div class=\"mb-2\"><code>.nui-text-default</code></div>\n<span class=\"nui-text-default ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Default Text Inverse</h4>\n<div class=\"mb-2\"><code>.nui-text-default--inverse</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-default--inverse ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Default Text Inverse Selected</h4>\n<div class=\"mb-2\"><code>.nui-text-default--inverse-selected</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-default--inverse-selected ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Default Text for Dark Bg</h4>\n<div class=\"mb-2\"><code>.nui-text-default--darkbg</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-default--darkbg ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Disabled Text</h4>\n<div class=\"mb-2\"><code>.nui-text-disabled</code></div>\n<span class=\"nui-text-disabled ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Selected Default Text for Dark Bg</h4>\n<div class=\"mb-2\"><code>.nui-text-default--darkbg-selected</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-default--darkbg-selected ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Secondary Text</h4>\n<div class=\"mb-2\"><code>.nui-text-secondary</code></div>\n<span class=\"nui-text-secondary ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Secondary Text Inverse</h4>\n<div class=\"mb-2\"><code>.nui-text-secondary--inverse</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-secondary--inverse ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Secondary Text for Dark Bg</h4>\n<div class=\"mb-2\"><code>.nui-text-secondary--darkbg</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-secondary--darkbg ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Secondary Disabled</h4>\n<div class=\"mb-2\"><code>.nui-text-secondary--disabled</code></div>\n<span class=\"nui-text-secondary--disabled ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Link</h4>\n<div class=\"mb-2\"><code>.nui-text-link</code></div>\n<span class=\"nui-text-link ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Source Code</h4>\n<div class=\"mb-2\"><code>.nui-text-source-code</code></div>\n<span class=\"nui-text-source-code ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Source Code Secondary</h4>\n<div class=\"mb-2\"><code>.nui-text-source-code-secondary</code></div>\n<span class=\"nui-text-source-code-secondary ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Secondary Title</h4>\n<div class=\"mb-2\"><code>.nui-text-title-secondary</code></div>\n<span class=\"nui-text-title-secondary ml-2\" i18n>Secondary Title</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Secondary Title Inverse</h4>\n<div class=\"mb-2\"><code>.nui-text-title-secondary--inverse</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-title-secondary--inverse ml-2\" i18n>Secondary Title</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Secondary Title for Dark Bg</h4>\n<div class=\"mb-2\"><code>.nui-text-title-secondary--darkbg</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-title-secondary--darkbg ml-2\" i18n>Secondary Title</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Small Text</h4>\n<div class=\"mb-2\"><code>.nui-text-small</code></div>\n<span class=\"nui-text-small ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Small Text Inverse</h4>\n<div class=\"mb-2\"><code>.nui-text-small--inverse</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-small--inverse ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Small Text Secondary</h4>\n<div class=\"mb-2\"><code>.nui-text-small-secondary</code></div>\n<span class=\"nui-text-small-secondary ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Small Text Secondary Inverse</h4>\n<div class=\"mb-2\"><code>.nui-text-small-secondary--inverse</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-small-secondary--inverse ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Small Text for Dark Bg</h4>\n<div class=\"mb-2\"><code>.nui-text-small--darkbg</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-small--darkbg ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Small Text Disabled</h4>\n<div class=\"mb-2\"><code>.nui-text-small--disabled</code></div>\n<span class=\"nui-text-small--disabled ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Link Small</h4>\n<div class=\"mb-2\"><code>.nui-text-link-small</code></div>\n<span class=\"nui-text-link-small ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Validation Text</h4>\n<div class=\"mb-2\"><code>.nui-text-validation</code></div>\n<span class=\"nui-text-validation ml-2\" i18n>Validation Text</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<br>\n<h2>Text Decoration</h2>\n\n<span class=\"nui-text-small-secondary\" i18n>The list is not complete. There are more of possible decorated fonts, these are just examples.</span>\n\n<h4 class=\"mb-3\">Text Page Hoverable</h4>\n<div class=\"mb-2\"><code>.nui-text-page--hoverable</code></div>\n<span class=\"nui-text-page--hoverable ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Text Widget Hoverable</h4>\n<div class=\"mb-2\"><code>.nui-text-widget--hoverable</code></div>\n<span class=\"nui-text-widget--hoverable ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Default Text Hoverable</h4>\n<div class=\"mb-2\"><code>.nui-text-default--hoverable</code></div>\n<span class=\"nui-text-default--hoverable ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Secondary Text Hoverable</h4>\n<div class=\"mb-2\"><code>.nui-text-secondary--hoverable</code></div>\n<span class=\"nui-text-secondary--hoverable ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Small Text Hoverable</h4>\n<div class=\"mb-2\"><code>.nui-text-small--hoverable</code></div>\n<span class=\"nui-text-small--hoverable ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Small Text Inverse Hoverable</h4>\n<div class=\"mb-2\"><code>.nui-text-small--inverse--hoverable</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-small--inverse--hoverable ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Small Secondary Text Hoverable</h4>\n<div class=\"mb-2\"><code>.nui-text-small-secondary--hoverable</code></div>\n<span class=\"nui-text-small-secondary--hoverable ml-2\" i18n>Lorem ipsum dolor sit amet</span>\n<nui-divider size=\"small\"></nui-divider>\n\n<h4 class=\"mb-3\">Small Text Hoverable for Dark Bg</h4>\n<div class=\"mb-2\"><code>.nui-text-small--darkbg--hoverable</code></div>\n<div class=\"dark-bg-rectangle\"><span class=\"nui-text-small--darkbg--hoverable ml-2\" i18n>Lorem ipsum dolor sit amet</span></div>\n<nui-divider size=\"small\"></nui-divider>\n";
      /***/
    },

    /***/
    "9MSv":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/static/framework-colors/framework-colors-example.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MSv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n/* eslint-disable-next-line */\nimport { default as colors } from \"../../../../src/styles/data/framework-colors.json\";\n\n@Component({\n    selector: \"framework-colors-example\",\n    styleUrls: [\"./framework-colors-example.component.less\"],\n    templateUrl: \"./framework-colors-example.component.html\",\n})\nexport class FrameworkColorsExampleComponent {\n    public colors = colors;\n\n    constructor(private toastService: ToastService) {}\n\n    public onClipboardSuccess() {\n        this.toastService.success({\n            message: $localize `Color successfully copied to clipboard`,\n        });\n    }\n    public keyValueCompare(a: any, b: any) {\n        return parseInt(a.key, 10) - parseInt(b.key, 10);\n    }\n}\n";
      /***/
    },

    /***/
    "Bycv":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/static/semantic-variables/semantic-variables.example.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Bycv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"semantic-variables-example\",\n    styleUrls: [\"semantic-variables.example.component.less\"],\n    templateUrl: \"./semantic-variables.example.component.html\",\n})\nexport class SemanticVariablesExampleComponent {\n}\n";
      /***/
    },

    /***/
    "C9NF":
    /*!**********************************************************!*\
      !*** ./demo/src/static/links/links.example.component.ts ***!
      \**********************************************************/

    /*! exports provided: LinksExampleComponent */

    /***/
    function C9NF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinksExampleComponent", function () {
        return LinksExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../src/lib/icon/icon.component */
      "45Bz");

      var LinksExampleComponent = function LinksExampleComponent() {
        _classCallCheck(this, LinksExampleComponent);
      };

      LinksExampleComponent.ɵfac = function LinksExampleComponent_Factory(t) {
        return new (t || LinksExampleComponent)();
      };

      LinksExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LinksExampleComponent,
        selectors: [["links-example"]],
        decls: 44,
        vars: 0,
        consts: [[1, "link-example"], [1, "link-row", "d-flex", "justify-content-between", "align-items-baseline"], [1, "nui-text-link"], [1, "link-info-text"], [1, "nui-text-link-small"], [1, "nui-text-link", "d-flex", "align-items-center"], ["icon", "help"], ["icon", "external-link"], [1, "link-example", "d-flex", "justify-content-between"], [1, "d-flex", "flex-column", "align-items-center"], [1, "nui-text-link", "disabled"]],
        template: function LinksExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Links");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Link Sizes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ".nui-text-link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Link small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Link small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".nui-text-link-small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Link with icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Icon can be on the left or on the right side of link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "nui-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "nui-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Link States");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Link Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "@nui-color-text-link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Link disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "@nui-color-text-disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"]],
        styles: [".link-example[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.link-example[_ngcontent-%COMP%]   .nui-text-link[_ngcontent-%COMP%]   nui-icon[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.link-example[_ngcontent-%COMP%]   .nui-text-link.disabled[_ngcontent-%COMP%] {\n  color: rgba(17, 17, 17, 0.3);\n  pointer-events: none;\n}\n.link-example[_ngcontent-%COMP%]   .link-info-text[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmtzLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0FBREo7QUFBQTtFQUlZLGlCQUFBO0VBQ0Esa0JBQUE7QUFEWjtBQUdRO0VBQ0ksNEJBQUE7RUFDQSxvQkFBQTtBQURaO0FBUkE7RUFhUSxVQUFBO0FBRlIiLCJmaWxlIjoibGlua3MuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zcmMvc3R5bGVzL251aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5cbi5saW5rLWV4YW1wbGUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICAubnVpLXRleHQtbGluayB7XG4gICAgICAgIG51aS1pY29uIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogQG51aS1zcGFjZS14cztcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IEBudWktc3BhY2UteHM7XG4gICAgICAgIH1cbiAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICBjb2xvcjogQG51aS1jb2xvci10ZXh0LWRpc2FibGVkO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxpbmstaW5mby10ZXh0IHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "CAKc":
    /*!********************************************************************************!*\
      !*** ./demo/src/static/framework-colors/framework-colors-example.component.ts ***!
      \********************************************************************************/

    /*! exports provided: FrameworkColorsExampleComponent */

    /***/
    function CAKc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FrameworkColorsExampleComponent", function () {
        return FrameworkColorsExampleComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _src_styles_data_framework_colors_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../src/styles/data/framework-colors.json */
      "c9vq");

      var _src_styles_data_framework_colors_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../src/styles/data/framework-colors.json */
      "c9vq", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../src/lib/message/message.component */
      "4pDv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_common_directives_clipboard_clipboard_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../src/common/directives/clipboard/clipboard.directive */
      "eJM4");
      /* eslint-disable-next-line */


      function FrameworkColorsExampleComponent_ng_container_3_div_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clipboardSuccess", function FrameworkColorsExampleComponent_ng_container_3_div_1_div_5_Template_div_clipboardSuccess_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r5.onClipboardSuccess();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var colorItem_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 4, colorItem_r4.value.color, 1))("nuiClipboard", colorItem_r4.value.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](colorItem_r4.value.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](colorItem_r4.value.secondary);
        }
      }

      function FrameworkColorsExampleComponent_ng_container_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FrameworkColorsExampleComponent_ng_container_3_div_1_div_5_Template, 7, 7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var section_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, section_r1.key));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 4, section_r1.value, ctx_r2.keyValueCompare));
        }
      }

      function FrameworkColorsExampleComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FrameworkColorsExampleComponent_ng_container_3_div_1_Template, 7, 7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var section_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", section_r1.key !== "default" && section_r1.value.length);
        }
      }

      var FrameworkColorsExampleComponent = /*#__PURE__*/function () {
        function FrameworkColorsExampleComponent(toastService) {
          _classCallCheck(this, FrameworkColorsExampleComponent);

          this.toastService = toastService;
          this.colors = _src_styles_data_framework_colors_json__WEBPACK_IMPORTED_MODULE_1__;
        }

        _createClass(FrameworkColorsExampleComponent, [{
          key: "onClipboardSuccess",
          value: function onClipboardSuccess() {
            this.toastService.success({
              message: $localize(_templateObject || (_templateObject = _taggedTemplateLiteral(["Color successfully copied to clipboard"])))
            });
          }
        }, {
          key: "keyValueCompare",
          value: function keyValueCompare(a, b) {
            return parseInt(a.key, 10) - parseInt(b.key, 10);
          }
        }]);

        return FrameworkColorsExampleComponent;
      }();

      FrameworkColorsExampleComponent.ɵfac = function FrameworkColorsExampleComponent_Factory(t) {
        return new (t || FrameworkColorsExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      FrameworkColorsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: FrameworkColorsExampleComponent,
        selectors: [["framework-colors-example"]],
        decls: 5,
        vars: 4,
        consts: [["type", "info", 3, "allowDismiss"], [4, "ngFor", "ngForOf"], ["class", "mb-4", 4, "ngIf"], [1, "mb-4"], [1, "mb-3"], [1, "d-flex", "flex-wrap", "ml-4"], ["class", "color-example-container d-flex flex-column mb-4", 4, "ngFor", "ngForOf"], [1, "color-example-container", "d-flex", "flex-column", "mb-4"], ["nuiClipboard", "", 1, "color-example", "mb-1", 3, "ngClass", "nuiClipboard", "clipboardSuccess"], [1, "nui-text-default", "mb-1"], [1, "nui-text-small"]],
        template: function FrameworkColorsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Clicking over the colors will copy the color's name.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FrameworkColorsExampleComponent_ng_container_3_Template, 2, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "keyvalue");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, ctx.colors));
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _src_common_directives_clipboard_clipboard_directive__WEBPACK_IMPORTED_MODULE_5__["ClipboardDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]],
        styles: [".nui-color-bg-transparent[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.nui-color-bg-content[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.nui-color-bg-content-hover[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n}\n.nui-color-bg-content_popover[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.nui-color-bg-secondary[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.nui-color-bg-workspace[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n}\n.nui-color-bg-transparent-hover[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.05);\n}\n.nui-color-bg-table_header[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n}\n.nui-color-bg-accordion_header[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.06);\n}\n.nui-color-bg-accordion_header-hover[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.11);\n}\n.nui-color-bg-inverse[_ngcontent-%COMP%] {\n  background: #111;\n}\n.nui-color-bg-platformbar[_ngcontent-%COMP%] {\n  background: #111;\n}\n.nui-color-bg-platformbar-secondary[_ngcontent-%COMP%] {\n  background: #292929;\n}\n.nui-color-bg-platformbar-secondary-hover[_ngcontent-%COMP%] {\n  background: #111;\n}\n.nui-color-bg-table_header-hover[_ngcontent-%COMP%] {\n  background: #e3e3e3;\n}\n.nui-color-bg-inverse-hover[_ngcontent-%COMP%] {\n  background: #292929;\n}\n.nui-color-bg-platformbar-hover[_ngcontent-%COMP%] {\n  background: #353535;\n}\n.nui-color-active[_ngcontent-%COMP%] {\n  background: #0079aa;\n}\n.nui-color-active-hover[_ngcontent-%COMP%] {\n  background: #006d99;\n}\n.nui-color-selected[_ngcontent-%COMP%] {\n  background: rgba(0, 196, 210, 0.1);\n}\n.nui-color-selected-hover[_ngcontent-%COMP%] {\n  background: rgba(0, 196, 210, 0.2);\n}\n.nui-color-selected-contrast[_ngcontent-%COMP%] {\n  background: #00c4d2;\n}\n.nui-color-selected-contrast-hover[_ngcontent-%COMP%] {\n  background: #00b0bd;\n}\n.nui-color-drag_selection[_ngcontent-%COMP%] {\n  background: #00767e;\n}\n.nui-color-on[_ngcontent-%COMP%] {\n  background: #00a753;\n}\n.nui-color-off[_ngcontent-%COMP%] {\n  background: #4d4d4d;\n}\n.nui-color-disabled[_ngcontent-%COMP%] {\n  background: #b3b3b3;\n}\n.nui-color-disabled-secondary[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n}\n.nui-color-progress[_ngcontent-%COMP%] {\n  background: #00c4d2;\n}\n.nui-color-focus[_ngcontent-%COMP%] {\n  background: rgba(0, 196, 210, 0.5);\n}\n.nui-color-busy-default[_ngcontent-%COMP%] {\n  background: rgba(0, 196, 210, 0.2);\n}\n.nui-color-busy-destructive[_ngcontent-%COMP%] {\n  background: rgba(221, 44, 0, 0.2);\n}\n.nui-color-search_highlight[_ngcontent-%COMP%] {\n  background: rgba(249, 157, 28, 0.3);\n}\n.nui-color-text-default[_ngcontent-%COMP%] {\n  background: #111;\n}\n.nui-color-text-secondary[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.6);\n}\n.nui-color-text-link[_ngcontent-%COMP%] {\n  background: #0079aa;\n}\n.nui-color-text-link-inverse[_ngcontent-%COMP%] {\n  background: #4da1c4;\n}\n.nui-color-text-disabled[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.3);\n}\n.nui-color-text-light[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.nui-color-text-inverse[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.nui-color-text-inverse-secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.6);\n}\n.nui-color-text-inverse-disabled[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3);\n}\n.nui-color-text-highlight-platform_bar[_ngcontent-%COMP%] {\n  background: #f99d1c;\n}\n.nui-color-text-critical[_ngcontent-%COMP%] {\n  background: #dd2c00;\n}\n.nui-color-text-ok[_ngcontent-%COMP%] {\n  background: #00a753;\n}\n.nui-color-text-warning[_ngcontent-%COMP%] {\n  background: #111;\n}\n.nui-color-line-default[_ngcontent-%COMP%] {\n  background: #d9d9d9;\n}\n.nui-color-line-default-hover[_ngcontent-%COMP%] {\n  background: #b3b3b3;\n}\n.nui-color-line-default-transparent[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.15);\n}\n.nui-color-line-secondary[_ngcontent-%COMP%] {\n  background: rgba(217, 217, 217, 0.7);\n}\n.nui-color-line-strong[_ngcontent-%COMP%] {\n  background: #999999;\n}\n.nui-color-line-dark[_ngcontent-%COMP%] {\n  background: #999999;\n}\n.nui-color-line-inverse[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.nui-color-line-highlight[_ngcontent-%COMP%] {\n  background: #111;\n}\n.nui-color-line-active[_ngcontent-%COMP%] {\n  background: #0079aa;\n}\n.nui-color-line-critical[_ngcontent-%COMP%] {\n  background: #dd2c00;\n}\n.nui-color-line-warning[_ngcontent-%COMP%] {\n  background: #fec405;\n}\n.nui-color-line-info[_ngcontent-%COMP%] {\n  background: #1c8eb1;\n}\n.nui-color-line-ok[_ngcontent-%COMP%] {\n  background: #00a753;\n}\n.nui-color-line-ok-secondary[_ngcontent-%COMP%] {\n  background: rgba(0, 167, 83, 0.4);\n}\n.nui-color-line-ok-secondary-hover[_ngcontent-%COMP%] {\n  background: rgba(0, 167, 83, 0.5);\n}\n.nui-color-line-selected-contrast[_ngcontent-%COMP%] {\n  background: #00c4d2;\n}\n.nui-color-line-threshold-critical[_ngcontent-%COMP%] {\n  background: rgba(221, 44, 0, 0.6);\n}\n.nui-color-line-threshold-warning[_ngcontent-%COMP%] {\n  background: #fec405;\n}\n.nui-color-icon-active[_ngcontent-%COMP%] {\n  background: #0079aa;\n}\n.nui-color-icon-default[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.5);\n}\n.nui-color-icon-inverse[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.nui-color-icon-critical[_ngcontent-%COMP%] {\n  background: #dd2c00;\n}\n.nui-color-icon-disabled[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.3);\n}\n.nui-color-icon-highlight-platform_bar[_ngcontent-%COMP%] {\n  background: #f99d1c;\n}\n.nui-color-icon-highlight[_ngcontent-%COMP%] {\n  background: #111;\n}\n.nui-color-icon-warning[_ngcontent-%COMP%] {\n  background: #fec405;\n}\n.nui-color-icon-ok[_ngcontent-%COMP%] {\n  background: #00a753;\n}\n.nui-color-icon-info[_ngcontent-%COMP%] {\n  background: #1c8eb1;\n}\n.nui-color-overlay-modal[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.5);\n}\n.nui-color-overlay-busy[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n}\n.nui-color-overlay-busy-secondary[_ngcontent-%COMP%] {\n  background: rgba(250, 250, 250, 0.9);\n}\n.nui-color-bg-scroll_handle_container[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.nui-color-bg-scroll_handle[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.2);\n}\n.nui-color-bg-scroll_handle-hover[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.3);\n}\n.nui-color-brand[_ngcontent-%COMP%] {\n  background: #f99d1c;\n}\n.nui-color-brand-hover[_ngcontent-%COMP%] {\n  background: #e08d19;\n}\n.nui-color-brand-two[_ngcontent-%COMP%] {\n  background: #707070;\n}\n.nui-color-brand-three[_ngcontent-%COMP%] {\n  background: #B8D757;\n}\n.nui-color-brand-four[_ngcontent-%COMP%] {\n  background: #FBE04B;\n}\n.nui-color-brand-five[_ngcontent-%COMP%] {\n  background: #04C9D7;\n}\n.nui-color-brand-six[_ngcontent-%COMP%] {\n  background: #444444;\n}\n.nui-color-brand-seven[_ngcontent-%COMP%] {\n  background: #A1A1A1;\n}\n.nui-color-semantic-down[_ngcontent-%COMP%] {\n  background: #950000;\n}\n.nui-color-semantic-down-hover[_ngcontent-%COMP%] {\n  background: #860000;\n}\n.nui-color-semantic-critical[_ngcontent-%COMP%] {\n  background: #dd2c00;\n}\n.nui-color-semantic-critical-hover[_ngcontent-%COMP%] {\n  background: #c72800;\n}\n.nui-color-semantic-critical-bg[_ngcontent-%COMP%] {\n  background: #fceae6;\n}\n.nui-color-semantic-critical-bg-hover[_ngcontent-%COMP%] {\n  background: #f8d5cc;\n}\n.nui-color-semantic-critical-bg-threshold[_ngcontent-%COMP%] {\n  background: rgba(221, 44, 0, 0.3);\n}\n.nui-color-semantic-warning[_ngcontent-%COMP%] {\n  background: #fec405;\n}\n.nui-color-semantic-warning-hover[_ngcontent-%COMP%] {\n  background: #e5b005;\n}\n.nui-color-semantic-warning-bg[_ngcontent-%COMP%] {\n  background: #fff9e6;\n}\n.nui-color-semantic-warning-bg-hover[_ngcontent-%COMP%] {\n  background: #fff3cd;\n}\n.nui-color-semantic-warning-bg-threshold[_ngcontent-%COMP%] {\n  background: rgba(254, 196, 5, 0.3);\n}\n.nui-color-semantic-down-bg[_ngcontent-%COMP%] {\n  background: #f4e6e6;\n}\n.nui-color-semantic-down-bg-hover[_ngcontent-%COMP%] {\n  background: #eacccc;\n}\n.nui-color-semantic-ok[_ngcontent-%COMP%] {\n  background: #00a753;\n}\n.nui-color-semantic-ok-hover[_ngcontent-%COMP%] {\n  background: #00964b;\n}\n.nui-color-semantic-info[_ngcontent-%COMP%] {\n  background: #1c8eb1;\n}\n.nui-color-semantic-info-hover[_ngcontent-%COMP%] {\n  background: #19809f;\n}\n.nui-color-semantic-unknown[_ngcontent-%COMP%] {\n  background: #999;\n}\n.nui-color-semantic-unknown-hover[_ngcontent-%COMP%] {\n  background: #8a8a8a;\n}\n.nui-color-semantic-ok-bg[_ngcontent-%COMP%] {\n  background: #e6f6ee;\n}\n.nui-color-semantic-ok-bg-hover[_ngcontent-%COMP%] {\n  background: #cceddd;\n}\n.nui-color-semantic-info-bg[_ngcontent-%COMP%] {\n  background: #e8f4f7;\n}\n.nui-color-semantic-info-bg-hover[_ngcontent-%COMP%] {\n  background: #d2e8ef;\n}\n.nui-color-semantic-unknown-bg[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n}\n.nui-color-semantic-unknown-bg-hover[_ngcontent-%COMP%] {\n  background: #ebebeb;\n}\n.nui-color-chart-one-dark[_ngcontent-%COMP%] {\n  background: #005b8d;\n}\n.nui-color-chart-two-dark[_ngcontent-%COMP%] {\n  background: #990062;\n}\n.nui-color-chart-three-dark[_ngcontent-%COMP%] {\n  background: #007061;\n}\n.nui-color-chart-four-dark[_ngcontent-%COMP%] {\n  background: #5c327f;\n}\n.nui-color-chart-five-dark[_ngcontent-%COMP%] {\n  background: #717114;\n}\n.nui-color-chart-six-dark[_ngcontent-%COMP%] {\n  background: #994500;\n}\n.nui-color-chart-seven-dark[_ngcontent-%COMP%] {\n  background: #3d3d73;\n}\n.nui-color-chart-eight-dark[_ngcontent-%COMP%] {\n  background: #5f302b;\n}\n.nui-color-chart-nine-dark[_ngcontent-%COMP%] {\n  background: #71551d;\n}\n.nui-color-chart-ten-dark[_ngcontent-%COMP%] {\n  background: #434343;\n}\n.nui-color-chart-one[_ngcontent-%COMP%] {\n  background: #0097eb;\n}\n.nui-color-chart-two[_ngcontent-%COMP%] {\n  background: #ff00a3;\n}\n.nui-color-chart-three[_ngcontent-%COMP%] {\n  background: #00bba1;\n}\n.nui-color-chart-four[_ngcontent-%COMP%] {\n  background: #9954d4;\n}\n.nui-color-chart-five[_ngcontent-%COMP%] {\n  background: #bcbd22;\n}\n.nui-color-chart-six[_ngcontent-%COMP%] {\n  background: #ff7300;\n}\n.nui-color-chart-seven[_ngcontent-%COMP%] {\n  background: #6666C0;\n}\n.nui-color-chart-eight[_ngcontent-%COMP%] {\n  background: #9e5048;\n}\n.nui-color-chart-nine[_ngcontent-%COMP%] {\n  background: #bc8d30;\n}\n.nui-color-chart-ten[_ngcontent-%COMP%] {\n  background: #707070;\n}\n.nui-color-chart-one-light[_ngcontent-%COMP%] {\n  background: #99d5f7;\n}\n.nui-color-chart-two-light[_ngcontent-%COMP%] {\n  background: #ff99da;\n}\n.nui-color-chart-three-light[_ngcontent-%COMP%] {\n  background: #99e4d9;\n}\n.nui-color-chart-four-light[_ngcontent-%COMP%] {\n  background: #d6bbee;\n}\n.nui-color-chart-five-light[_ngcontent-%COMP%] {\n  background: #e4e5a7;\n}\n.nui-color-chart-six-light[_ngcontent-%COMP%] {\n  background: #ffc799;\n}\n.nui-color-chart-seven-light[_ngcontent-%COMP%] {\n  background: #c2c2e6;\n}\n.nui-color-chart-eight-light[_ngcontent-%COMP%] {\n  background: #d8b9b6;\n}\n.nui-color-chart-nine-light[_ngcontent-%COMP%] {\n  background: #e4d1ac;\n}\n.nui-color-chart-ten-light[_ngcontent-%COMP%] {\n  background: #c6c6c6;\n}\n.nui-color-chart-sum[_ngcontent-%COMP%] {\n  background: #111;\n}\n.nui-color-chart-percentile[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.8);\n}\n.nui-shadow-color[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.3);\n}\n.nui-shadow-color-stronger[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.6);\n}\n.color-example-container[_ngcontent-%COMP%] {\n  width: 150px;\n  margin-right: 15px;\n}\n.color-example[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  box-shadow: 0 0 5px 0 rgba(17, 17, 17, 0.3);\n  box-shadow: 0 0 5px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvZGF0YS9udWktZnJhbWV3b3JrLWNvbG9ycy1kb2NzLmxlc3MiLCJmcmFtZXdvcmstY29sb3JzLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBMEIsdUJBQUE7QUNDMUI7QURBQTtFQUFzQixnQkFBQTtBQ0d0QjtBREZBO0VBQTRCLG1CQUFBO0FDSzVCO0FESkE7RUFBOEIsZ0JBQUE7QUNPOUI7QUROQTtFQUF3QixtQkFBQTtBQ1N4QjtBRFJBO0VBQXdCLG1CQUFBO0FDV3hCO0FEVkE7RUFBZ0Msa0NBQUE7QUNhaEM7QURaQTtFQUEyQixtQkFBQTtBQ2UzQjtBRGRBO0VBQStCLGtDQUFBO0FDaUIvQjtBRGhCQTtFQUFxQyxrQ0FBQTtBQ21CckM7QURsQkE7RUFBc0IsZ0JBQUE7QUNxQnRCO0FEcEJBO0VBQTBCLGdCQUFBO0FDdUIxQjtBRHRCQTtFQUFvQyxtQkFBQTtBQ3lCcEM7QUR4QkE7RUFBMEMsZ0JBQUE7QUMyQjFDO0FEMUJBO0VBQWlDLG1CQUFBO0FDNkJqQztBRDVCQTtFQUE0QixtQkFBQTtBQytCNUI7QUQ5QkE7RUFBZ0MsbUJBQUE7QUNpQ2hDO0FEaENBO0VBQWtCLG1CQUFBO0FDbUNsQjtBRGxDQTtFQUF3QixtQkFBQTtBQ3FDeEI7QURwQ0E7RUFBb0Isa0NBQUE7QUN1Q3BCO0FEdENBO0VBQTBCLGtDQUFBO0FDeUMxQjtBRHhDQTtFQUE2QixtQkFBQTtBQzJDN0I7QUQxQ0E7RUFBbUMsbUJBQUE7QUM2Q25DO0FENUNBO0VBQTBCLG1CQUFBO0FDK0MxQjtBRDlDQTtFQUFjLG1CQUFBO0FDaURkO0FEaERBO0VBQWUsbUJBQUE7QUNtRGY7QURsREE7RUFBb0IsbUJBQUE7QUNxRHBCO0FEcERBO0VBQThCLG1CQUFBO0FDdUQ5QjtBRHREQTtFQUFvQixtQkFBQTtBQ3lEcEI7QUR4REE7RUFBaUIsa0NBQUE7QUMyRGpCO0FEMURBO0VBQXdCLGtDQUFBO0FDNkR4QjtBRDVEQTtFQUE0QixpQ0FBQTtBQytENUI7QUQ5REE7RUFBNEIsbUNBQUE7QUNpRTVCO0FEaEVBO0VBQXdCLGdCQUFBO0FDbUV4QjtBRGxFQTtFQUEwQixpQ0FBQTtBQ3FFMUI7QURwRUE7RUFBcUIsbUJBQUE7QUN1RXJCO0FEdEVBO0VBQTZCLG1CQUFBO0FDeUU3QjtBRHhFQTtFQUF5QixpQ0FBQTtBQzJFekI7QUQxRUE7RUFBc0IsZ0JBQUE7QUM2RXRCO0FENUVBO0VBQXdCLGdCQUFBO0FDK0V4QjtBRDlFQTtFQUFrQyxvQ0FBQTtBQ2lGbEM7QURoRkE7RUFBaUMsb0NBQUE7QUNtRmpDO0FEbEZBO0VBQXVDLG1CQUFBO0FDcUZ2QztBRHBGQTtFQUF5QixtQkFBQTtBQ3VGekI7QUR0RkE7RUFBbUIsbUJBQUE7QUN5Rm5CO0FEeEZBO0VBQXdCLGdCQUFBO0FDMkZ4QjtBRDFGQTtFQUF3QixtQkFBQTtBQzZGeEI7QUQ1RkE7RUFBOEIsbUJBQUE7QUMrRjlCO0FEOUZBO0VBQW9DLGtDQUFBO0FDaUdwQztBRGhHQTtFQUEwQixvQ0FBQTtBQ21HMUI7QURsR0E7RUFBdUIsbUJBQUE7QUNxR3ZCO0FEcEdBO0VBQXFCLG1CQUFBO0FDdUdyQjtBRHRHQTtFQUF3QixnQkFBQTtBQ3lHeEI7QUR4R0E7RUFBMEIsZ0JBQUE7QUMyRzFCO0FEMUdBO0VBQXVCLG1CQUFBO0FDNkd2QjtBRDVHQTtFQUF5QixtQkFBQTtBQytHekI7QUQ5R0E7RUFBd0IsbUJBQUE7QUNpSHhCO0FEaEhBO0VBQXFCLG1CQUFBO0FDbUhyQjtBRGxIQTtFQUFtQixtQkFBQTtBQ3FIbkI7QURwSEE7RUFBNkIsaUNBQUE7QUN1SDdCO0FEdEhBO0VBQW1DLGlDQUFBO0FDeUhuQztBRHhIQTtFQUFrQyxtQkFBQTtBQzJIbEM7QUQxSEE7RUFBbUMsaUNBQUE7QUM2SG5DO0FENUhBO0VBQWtDLG1CQUFBO0FDK0hsQztBRDlIQTtFQUF1QixtQkFBQTtBQ2lJdkI7QURoSUE7RUFBd0IsaUNBQUE7QUNtSXhCO0FEbElBO0VBQXdCLGdCQUFBO0FDcUl4QjtBRHBJQTtFQUF5QixtQkFBQTtBQ3VJekI7QUR0SUE7RUFBeUIsaUNBQUE7QUN5SXpCO0FEeElBO0VBQXVDLG1CQUFBO0FDMkl2QztBRDFJQTtFQUEwQixnQkFBQTtBQzZJMUI7QUQ1SUE7RUFBd0IsbUJBQUE7QUMrSXhCO0FEOUlBO0VBQW1CLG1CQUFBO0FDaUpuQjtBRGhKQTtFQUFxQixtQkFBQTtBQ21KckI7QURsSkE7RUFBeUIsaUNBQUE7QUNxSnpCO0FEcEpBO0VBQXdCLG9DQUFBO0FDdUp4QjtBRHRKQTtFQUFrQyxvQ0FBQTtBQ3lKbEM7QUR4SkE7RUFBc0MsdUJBQUE7QUMySnRDO0FEMUpBO0VBQTRCLGlDQUFBO0FDNko1QjtBRDVKQTtFQUFrQyxpQ0FBQTtBQytKbEM7QUQ5SkE7RUFBaUIsbUJBQUE7QUNpS2pCO0FEaEtBO0VBQXVCLG1CQUFBO0FDbUt2QjtBRGxLQTtFQUFxQixtQkFBQTtBQ3FLckI7QURwS0E7RUFBdUIsbUJBQUE7QUN1S3ZCO0FEdEtBO0VBQXNCLG1CQUFBO0FDeUt0QjtBRHhLQTtFQUFzQixtQkFBQTtBQzJLdEI7QUQxS0E7RUFBcUIsbUJBQUE7QUM2S3JCO0FENUtBO0VBQXVCLG1CQUFBO0FDK0t2QjtBRDlLQTtFQUF5QixtQkFBQTtBQ2lMekI7QURoTEE7RUFBK0IsbUJBQUE7QUNtTC9CO0FEbExBO0VBQTZCLG1CQUFBO0FDcUw3QjtBRHBMQTtFQUFtQyxtQkFBQTtBQ3VMbkM7QUR0TEE7RUFBZ0MsbUJBQUE7QUN5TGhDO0FEeExBO0VBQXNDLG1CQUFBO0FDMkx0QztBRDFMQTtFQUEwQyxpQ0FBQTtBQzZMMUM7QUQ1TEE7RUFBNEIsbUJBQUE7QUMrTDVCO0FEOUxBO0VBQWtDLG1CQUFBO0FDaU1sQztBRGhNQTtFQUErQixtQkFBQTtBQ21NL0I7QURsTUE7RUFBcUMsbUJBQUE7QUNxTXJDO0FEcE1BO0VBQXlDLGtDQUFBO0FDdU16QztBRHRNQTtFQUE0QixtQkFBQTtBQ3lNNUI7QUR4TUE7RUFBa0MsbUJBQUE7QUMyTWxDO0FEMU1BO0VBQXVCLG1CQUFBO0FDNk12QjtBRDVNQTtFQUE2QixtQkFBQTtBQytNN0I7QUQ5TUE7RUFBeUIsbUJBQUE7QUNpTnpCO0FEaE5BO0VBQStCLG1CQUFBO0FDbU4vQjtBRGxOQTtFQUE0QixnQkFBQTtBQ3FONUI7QURwTkE7RUFBa0MsbUJBQUE7QUN1TmxDO0FEdE5BO0VBQTBCLG1CQUFBO0FDeU4xQjtBRHhOQTtFQUFnQyxtQkFBQTtBQzJOaEM7QUQxTkE7RUFBNEIsbUJBQUE7QUM2TjVCO0FENU5BO0VBQWtDLG1CQUFBO0FDK05sQztBRDlOQTtFQUErQixtQkFBQTtBQ2lPL0I7QURoT0E7RUFBcUMsbUJBQUE7QUNtT3JDO0FEbE9BO0VBQTBCLG1CQUFBO0FDcU8xQjtBRHBPQTtFQUEwQixtQkFBQTtBQ3VPMUI7QUR0T0E7RUFBNEIsbUJBQUE7QUN5TzVCO0FEeE9BO0VBQTJCLG1CQUFBO0FDMk8zQjtBRDFPQTtFQUEyQixtQkFBQTtBQzZPM0I7QUQ1T0E7RUFBMEIsbUJBQUE7QUMrTzFCO0FEOU9BO0VBQTRCLG1CQUFBO0FDaVA1QjtBRGhQQTtFQUE0QixtQkFBQTtBQ21QNUI7QURsUEE7RUFBMkIsbUJBQUE7QUNxUDNCO0FEcFBBO0VBQTBCLG1CQUFBO0FDdVAxQjtBRHRQQTtFQUFxQixtQkFBQTtBQ3lQckI7QUR4UEE7RUFBcUIsbUJBQUE7QUMyUHJCO0FEMVBBO0VBQXVCLG1CQUFBO0FDNlB2QjtBRDVQQTtFQUFzQixtQkFBQTtBQytQdEI7QUQ5UEE7RUFBc0IsbUJBQUE7QUNpUXRCO0FEaFFBO0VBQXFCLG1CQUFBO0FDbVFyQjtBRGxRQTtFQUF1QixtQkFBQTtBQ3FRdkI7QURwUUE7RUFBdUIsbUJBQUE7QUN1UXZCO0FEdFFBO0VBQXNCLG1CQUFBO0FDeVF0QjtBRHhRQTtFQUFxQixtQkFBQTtBQzJRckI7QUQxUUE7RUFBMkIsbUJBQUE7QUM2UTNCO0FENVFBO0VBQTJCLG1CQUFBO0FDK1EzQjtBRDlRQTtFQUE2QixtQkFBQTtBQ2lSN0I7QURoUkE7RUFBNEIsbUJBQUE7QUNtUjVCO0FEbFJBO0VBQTRCLG1CQUFBO0FDcVI1QjtBRHBSQTtFQUEyQixtQkFBQTtBQ3VSM0I7QUR0UkE7RUFBNkIsbUJBQUE7QUN5UjdCO0FEeFJBO0VBQTZCLG1CQUFBO0FDMlI3QjtBRDFSQTtFQUE0QixtQkFBQTtBQzZSNUI7QUQ1UkE7RUFBMkIsbUJBQUE7QUMrUjNCO0FEOVJBO0VBQXFCLGdCQUFBO0FDaVNyQjtBRGhTQTtFQUE0QixpQ0FBQTtBQ21TNUI7QURsU0E7RUFBa0IsaUNBQUE7QUNxU2xCO0FEcFNBO0VBQTJCLGlDQUFBO0FDdVMzQjtBQXZiQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQXliSjtBQXZiQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxvRUFBQTtFQUNBLGVBQUE7QUF5YkoiLCJmaWxlIjoiZnJhbWV3b3JrLWNvbG9ycy1leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uLy4uL3N0eWxlcy9udWktZnJhbWV3b3JrLWNvbG9ycy5sZXNzXCI7XG4ubnVpLWNvbG9yLWJnLXRyYW5zcGFyZW50e2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctdHJhbnNwYXJlbnR9O1xuLm51aS1jb2xvci1iZy1jb250ZW50e2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctY29udGVudH07XG4ubnVpLWNvbG9yLWJnLWNvbnRlbnQtaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1iZy1jb250ZW50LWhvdmVyfTtcbi5udWktY29sb3ItYmctY29udGVudF9wb3BvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctY29udGVudF9wb3BvdmVyfTtcbi5udWktY29sb3ItYmctc2Vjb25kYXJ5e2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctc2Vjb25kYXJ5fTtcbi5udWktY29sb3ItYmctd29ya3NwYWNle2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctd29ya3NwYWNlfTtcbi5udWktY29sb3ItYmctdHJhbnNwYXJlbnQtaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1iZy10cmFuc3BhcmVudC1ob3Zlcn07XG4ubnVpLWNvbG9yLWJnLXRhYmxlX2hlYWRlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJnLXRhYmxlX2hlYWRlcn07XG4ubnVpLWNvbG9yLWJnLWFjY29yZGlvbl9oZWFkZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1iZy1hY2NvcmRpb25faGVhZGVyfTtcbi5udWktY29sb3ItYmctYWNjb3JkaW9uX2hlYWRlci1ob3ZlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJnLWFjY29yZGlvbl9oZWFkZXItaG92ZXJ9O1xuLm51aS1jb2xvci1iZy1pbnZlcnNle2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctaW52ZXJzZX07XG4ubnVpLWNvbG9yLWJnLXBsYXRmb3JtYmFye2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctcGxhdGZvcm1iYXJ9O1xuLm51aS1jb2xvci1iZy1wbGF0Zm9ybWJhci1zZWNvbmRhcnl7YmFja2dyb3VuZDogQG51aS1jb2xvci1iZy1wbGF0Zm9ybWJhci1zZWNvbmRhcnl9O1xuLm51aS1jb2xvci1iZy1wbGF0Zm9ybWJhci1zZWNvbmRhcnktaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1iZy1wbGF0Zm9ybWJhci1zZWNvbmRhcnktaG92ZXJ9O1xuLm51aS1jb2xvci1iZy10YWJsZV9oZWFkZXItaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1iZy10YWJsZV9oZWFkZXItaG92ZXJ9O1xuLm51aS1jb2xvci1iZy1pbnZlcnNlLWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctaW52ZXJzZS1ob3Zlcn07XG4ubnVpLWNvbG9yLWJnLXBsYXRmb3JtYmFyLWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctcGxhdGZvcm1iYXItaG92ZXJ9O1xuLm51aS1jb2xvci1hY3RpdmV7YmFja2dyb3VuZDogQG51aS1jb2xvci1hY3RpdmV9O1xuLm51aS1jb2xvci1hY3RpdmUtaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1hY3RpdmUtaG92ZXJ9O1xuLm51aS1jb2xvci1zZWxlY3RlZHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbGVjdGVkfTtcbi5udWktY29sb3Itc2VsZWN0ZWQtaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZWxlY3RlZC1ob3Zlcn07XG4ubnVpLWNvbG9yLXNlbGVjdGVkLWNvbnRyYXN0e2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VsZWN0ZWQtY29udHJhc3R9O1xuLm51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdC1ob3ZlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbGVjdGVkLWNvbnRyYXN0LWhvdmVyfTtcbi5udWktY29sb3ItZHJhZ19zZWxlY3Rpb257YmFja2dyb3VuZDogQG51aS1jb2xvci1kcmFnX3NlbGVjdGlvbn07XG4ubnVpLWNvbG9yLW9ue2JhY2tncm91bmQ6IEBudWktY29sb3Itb259O1xuLm51aS1jb2xvci1vZmZ7YmFja2dyb3VuZDogQG51aS1jb2xvci1vZmZ9O1xuLm51aS1jb2xvci1kaXNhYmxlZHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWRpc2FibGVkfTtcbi5udWktY29sb3ItZGlzYWJsZWQtc2Vjb25kYXJ5e2JhY2tncm91bmQ6IEBudWktY29sb3ItZGlzYWJsZWQtc2Vjb25kYXJ5fTtcbi5udWktY29sb3ItcHJvZ3Jlc3N7YmFja2dyb3VuZDogQG51aS1jb2xvci1wcm9ncmVzc307XG4ubnVpLWNvbG9yLWZvY3Vze2JhY2tncm91bmQ6IEBudWktY29sb3ItZm9jdXN9O1xuLm51aS1jb2xvci1idXN5LWRlZmF1bHR7YmFja2dyb3VuZDogQG51aS1jb2xvci1idXN5LWRlZmF1bHR9O1xuLm51aS1jb2xvci1idXN5LWRlc3RydWN0aXZle2JhY2tncm91bmQ6IEBudWktY29sb3ItYnVzeS1kZXN0cnVjdGl2ZX07XG4ubnVpLWNvbG9yLXNlYXJjaF9oaWdobGlnaHR7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZWFyY2hfaGlnaGxpZ2h0fTtcbi5udWktY29sb3ItdGV4dC1kZWZhdWx0e2JhY2tncm91bmQ6IEBudWktY29sb3ItdGV4dC1kZWZhdWx0fTtcbi5udWktY29sb3ItdGV4dC1zZWNvbmRhcnl7YmFja2dyb3VuZDogQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeX07XG4ubnVpLWNvbG9yLXRleHQtbGlua3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXRleHQtbGlua307XG4ubnVpLWNvbG9yLXRleHQtbGluay1pbnZlcnNle2JhY2tncm91bmQ6IEBudWktY29sb3ItdGV4dC1saW5rLWludmVyc2V9O1xuLm51aS1jb2xvci10ZXh0LWRpc2FibGVke2JhY2tncm91bmQ6IEBudWktY29sb3ItdGV4dC1kaXNhYmxlZH07XG4ubnVpLWNvbG9yLXRleHQtbGlnaHR7YmFja2dyb3VuZDogQG51aS1jb2xvci10ZXh0LWxpZ2h0fTtcbi5udWktY29sb3ItdGV4dC1pbnZlcnNle2JhY2tncm91bmQ6IEBudWktY29sb3ItdGV4dC1pbnZlcnNlfTtcbi5udWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeXtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnl9O1xuLm51aS1jb2xvci10ZXh0LWludmVyc2UtZGlzYWJsZWR7YmFja2dyb3VuZDogQG51aS1jb2xvci10ZXh0LWludmVyc2UtZGlzYWJsZWR9O1xuLm51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXJ9O1xuLm51aS1jb2xvci10ZXh0LWNyaXRpY2Fse2JhY2tncm91bmQ6IEBudWktY29sb3ItdGV4dC1jcml0aWNhbH07XG4ubnVpLWNvbG9yLXRleHQtb2t7YmFja2dyb3VuZDogQG51aS1jb2xvci10ZXh0LW9rfTtcbi5udWktY29sb3ItdGV4dC13YXJuaW5ne2JhY2tncm91bmQ6IEBudWktY29sb3ItdGV4dC13YXJuaW5nfTtcbi5udWktY29sb3ItbGluZS1kZWZhdWx0e2JhY2tncm91bmQ6IEBudWktY29sb3ItbGluZS1kZWZhdWx0fTtcbi5udWktY29sb3ItbGluZS1kZWZhdWx0LWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3ItbGluZS1kZWZhdWx0LWhvdmVyfTtcbi5udWktY29sb3ItbGluZS1kZWZhdWx0LXRyYW5zcGFyZW50e2JhY2tncm91bmQ6IEBudWktY29sb3ItbGluZS1kZWZhdWx0LXRyYW5zcGFyZW50fTtcbi5udWktY29sb3ItbGluZS1zZWNvbmRhcnl7YmFja2dyb3VuZDogQG51aS1jb2xvci1saW5lLXNlY29uZGFyeX07XG4ubnVpLWNvbG9yLWxpbmUtc3Ryb25ne2JhY2tncm91bmQ6IEBudWktY29sb3ItbGluZS1zdHJvbmd9O1xuLm51aS1jb2xvci1saW5lLWRhcmt7YmFja2dyb3VuZDogQG51aS1jb2xvci1saW5lLWRhcmt9O1xuLm51aS1jb2xvci1saW5lLWludmVyc2V7YmFja2dyb3VuZDogQG51aS1jb2xvci1saW5lLWludmVyc2V9O1xuLm51aS1jb2xvci1saW5lLWhpZ2hsaWdodHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWxpbmUtaGlnaGxpZ2h0fTtcbi5udWktY29sb3ItbGluZS1hY3RpdmV7YmFja2dyb3VuZDogQG51aS1jb2xvci1saW5lLWFjdGl2ZX07XG4ubnVpLWNvbG9yLWxpbmUtY3JpdGljYWx7YmFja2dyb3VuZDogQG51aS1jb2xvci1saW5lLWNyaXRpY2FsfTtcbi5udWktY29sb3ItbGluZS13YXJuaW5ne2JhY2tncm91bmQ6IEBudWktY29sb3ItbGluZS13YXJuaW5nfTtcbi5udWktY29sb3ItbGluZS1pbmZve2JhY2tncm91bmQ6IEBudWktY29sb3ItbGluZS1pbmZvfTtcbi5udWktY29sb3ItbGluZS1va3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWxpbmUtb2t9O1xuLm51aS1jb2xvci1saW5lLW9rLXNlY29uZGFyeXtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWxpbmUtb2stc2Vjb25kYXJ5fTtcbi5udWktY29sb3ItbGluZS1vay1zZWNvbmRhcnktaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1saW5lLW9rLXNlY29uZGFyeS1ob3Zlcn07XG4ubnVpLWNvbG9yLWxpbmUtc2VsZWN0ZWQtY29udHJhc3R7YmFja2dyb3VuZDogQG51aS1jb2xvci1saW5lLXNlbGVjdGVkLWNvbnRyYXN0fTtcbi5udWktY29sb3ItbGluZS10aHJlc2hvbGQtY3JpdGljYWx7YmFja2dyb3VuZDogQG51aS1jb2xvci1saW5lLXRocmVzaG9sZC1jcml0aWNhbH07XG4ubnVpLWNvbG9yLWxpbmUtdGhyZXNob2xkLXdhcm5pbmd7YmFja2dyb3VuZDogQG51aS1jb2xvci1saW5lLXRocmVzaG9sZC13YXJuaW5nfTtcbi5udWktY29sb3ItaWNvbi1hY3RpdmV7YmFja2dyb3VuZDogQG51aS1jb2xvci1pY29uLWFjdGl2ZX07XG4ubnVpLWNvbG9yLWljb24tZGVmYXVsdHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWljb24tZGVmYXVsdH07XG4ubnVpLWNvbG9yLWljb24taW52ZXJzZXtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWljb24taW52ZXJzZX07XG4ubnVpLWNvbG9yLWljb24tY3JpdGljYWx7YmFja2dyb3VuZDogQG51aS1jb2xvci1pY29uLWNyaXRpY2FsfTtcbi5udWktY29sb3ItaWNvbi1kaXNhYmxlZHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWljb24tZGlzYWJsZWR9O1xuLm51aS1jb2xvci1pY29uLWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1pY29uLWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXJ9O1xuLm51aS1jb2xvci1pY29uLWhpZ2hsaWdodHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWljb24taGlnaGxpZ2h0fTtcbi5udWktY29sb3ItaWNvbi13YXJuaW5ne2JhY2tncm91bmQ6IEBudWktY29sb3ItaWNvbi13YXJuaW5nfTtcbi5udWktY29sb3ItaWNvbi1va3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWljb24tb2t9O1xuLm51aS1jb2xvci1pY29uLWluZm97YmFja2dyb3VuZDogQG51aS1jb2xvci1pY29uLWluZm99O1xuLm51aS1jb2xvci1vdmVybGF5LW1vZGFse2JhY2tncm91bmQ6IEBudWktY29sb3Itb3ZlcmxheS1tb2RhbH07XG4ubnVpLWNvbG9yLW92ZXJsYXktYnVzeXtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLW92ZXJsYXktYnVzeX07XG4ubnVpLWNvbG9yLW92ZXJsYXktYnVzeS1zZWNvbmRhcnl7YmFja2dyb3VuZDogQG51aS1jb2xvci1vdmVybGF5LWJ1c3ktc2Vjb25kYXJ5fTtcbi5udWktY29sb3ItYmctc2Nyb2xsX2hhbmRsZV9jb250YWluZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1iZy1zY3JvbGxfaGFuZGxlX2NvbnRhaW5lcn07XG4ubnVpLWNvbG9yLWJnLXNjcm9sbF9oYW5kbGV7YmFja2dyb3VuZDogQG51aS1jb2xvci1iZy1zY3JvbGxfaGFuZGxlfTtcbi5udWktY29sb3ItYmctc2Nyb2xsX2hhbmRsZS1ob3ZlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJnLXNjcm9sbF9oYW5kbGUtaG92ZXJ9O1xuLm51aS1jb2xvci1icmFuZHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJyYW5kfTtcbi5udWktY29sb3ItYnJhbmQtaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1icmFuZC1ob3Zlcn07XG4ubnVpLWNvbG9yLWJyYW5kLXR3b3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJyYW5kLXR3b307XG4ubnVpLWNvbG9yLWJyYW5kLXRocmVle2JhY2tncm91bmQ6IEBudWktY29sb3ItYnJhbmQtdGhyZWV9O1xuLm51aS1jb2xvci1icmFuZC1mb3Vye2JhY2tncm91bmQ6IEBudWktY29sb3ItYnJhbmQtZm91cn07XG4ubnVpLWNvbG9yLWJyYW5kLWZpdmV7YmFja2dyb3VuZDogQG51aS1jb2xvci1icmFuZC1maXZlfTtcbi5udWktY29sb3ItYnJhbmQtc2l4e2JhY2tncm91bmQ6IEBudWktY29sb3ItYnJhbmQtc2l4fTtcbi5udWktY29sb3ItYnJhbmQtc2V2ZW57YmFja2dyb3VuZDogQG51aS1jb2xvci1icmFuZC1zZXZlbn07XG4ubnVpLWNvbG9yLXNlbWFudGljLWRvd257YmFja2dyb3VuZDogQG51aS1jb2xvci1zZW1hbnRpYy1kb3dufTtcbi5udWktY29sb3Itc2VtYW50aWMtZG93bi1ob3ZlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLWRvd24taG92ZXJ9O1xuLm51aS1jb2xvci1zZW1hbnRpYy1jcml0aWNhbHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsfTtcbi5udWktY29sb3Itc2VtYW50aWMtY3JpdGljYWwtaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZW1hbnRpYy1jcml0aWNhbC1ob3Zlcn07XG4ubnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsLWJne2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWwtYmd9O1xuLm51aS1jb2xvci1zZW1hbnRpYy1jcml0aWNhbC1iZy1ob3ZlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsLWJnLWhvdmVyfTtcbi5udWktY29sb3Itc2VtYW50aWMtY3JpdGljYWwtYmctdGhyZXNob2xke2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWwtYmctdGhyZXNob2xkfTtcbi5udWktY29sb3Itc2VtYW50aWMtd2FybmluZ3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLXdhcm5pbmd9O1xuLm51aS1jb2xvci1zZW1hbnRpYy13YXJuaW5nLWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtd2FybmluZy1ob3Zlcn07XG4ubnVpLWNvbG9yLXNlbWFudGljLXdhcm5pbmctYmd7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZW1hbnRpYy13YXJuaW5nLWJnfTtcbi5udWktY29sb3Itc2VtYW50aWMtd2FybmluZy1iZy1ob3ZlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLXdhcm5pbmctYmctaG92ZXJ9O1xuLm51aS1jb2xvci1zZW1hbnRpYy13YXJuaW5nLWJnLXRocmVzaG9sZHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLXdhcm5pbmctYmctdGhyZXNob2xkfTtcbi5udWktY29sb3Itc2VtYW50aWMtZG93bi1iZ3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLWRvd24tYmd9O1xuLm51aS1jb2xvci1zZW1hbnRpYy1kb3duLWJnLWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtZG93bi1iZy1ob3Zlcn07XG4ubnVpLWNvbG9yLXNlbWFudGljLW9re2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtb2t9O1xuLm51aS1jb2xvci1zZW1hbnRpYy1vay1ob3ZlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLW9rLWhvdmVyfTtcbi5udWktY29sb3Itc2VtYW50aWMtaW5mb3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLWluZm99O1xuLm51aS1jb2xvci1zZW1hbnRpYy1pbmZvLWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtaW5mby1ob3Zlcn07XG4ubnVpLWNvbG9yLXNlbWFudGljLXVua25vd257YmFja2dyb3VuZDogQG51aS1jb2xvci1zZW1hbnRpYy11bmtub3dufTtcbi5udWktY29sb3Itc2VtYW50aWMtdW5rbm93bi1ob3ZlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLXVua25vd24taG92ZXJ9O1xuLm51aS1jb2xvci1zZW1hbnRpYy1vay1iZ3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLW9rLWJnfTtcbi5udWktY29sb3Itc2VtYW50aWMtb2stYmctaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZW1hbnRpYy1vay1iZy1ob3Zlcn07XG4ubnVpLWNvbG9yLXNlbWFudGljLWluZm8tYmd7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZW1hbnRpYy1pbmZvLWJnfTtcbi5udWktY29sb3Itc2VtYW50aWMtaW5mby1iZy1ob3ZlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLWluZm8tYmctaG92ZXJ9O1xuLm51aS1jb2xvci1zZW1hbnRpYy11bmtub3duLWJne2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtdW5rbm93bi1iZ307XG4ubnVpLWNvbG9yLXNlbWFudGljLXVua25vd24tYmctaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZW1hbnRpYy11bmtub3duLWJnLWhvdmVyfTtcbi5udWktY29sb3ItY2hhcnQtb25lLWRhcmt7YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC1vbmUtZGFya307XG4ubnVpLWNvbG9yLWNoYXJ0LXR3by1kYXJre2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtdHdvLWRhcmt9O1xuLm51aS1jb2xvci1jaGFydC10aHJlZS1kYXJre2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtdGhyZWUtZGFya307XG4ubnVpLWNvbG9yLWNoYXJ0LWZvdXItZGFya3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LWZvdXItZGFya307XG4ubnVpLWNvbG9yLWNoYXJ0LWZpdmUtZGFya3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LWZpdmUtZGFya307XG4ubnVpLWNvbG9yLWNoYXJ0LXNpeC1kYXJre2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtc2l4LWRhcmt9O1xuLm51aS1jb2xvci1jaGFydC1zZXZlbi1kYXJre2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtc2V2ZW4tZGFya307XG4ubnVpLWNvbG9yLWNoYXJ0LWVpZ2h0LWRhcmt7YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC1laWdodC1kYXJrfTtcbi5udWktY29sb3ItY2hhcnQtbmluZS1kYXJre2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtbmluZS1kYXJrfTtcbi5udWktY29sb3ItY2hhcnQtdGVuLWRhcmt7YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC10ZW4tZGFya307XG4ubnVpLWNvbG9yLWNoYXJ0LW9uZXtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LW9uZX07XG4ubnVpLWNvbG9yLWNoYXJ0LXR3b3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LXR3b307XG4ubnVpLWNvbG9yLWNoYXJ0LXRocmVle2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtdGhyZWV9O1xuLm51aS1jb2xvci1jaGFydC1mb3Vye2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtZm91cn07XG4ubnVpLWNvbG9yLWNoYXJ0LWZpdmV7YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC1maXZlfTtcbi5udWktY29sb3ItY2hhcnQtc2l4e2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtc2l4fTtcbi5udWktY29sb3ItY2hhcnQtc2V2ZW57YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC1zZXZlbn07XG4ubnVpLWNvbG9yLWNoYXJ0LWVpZ2h0e2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtZWlnaHR9O1xuLm51aS1jb2xvci1jaGFydC1uaW5le2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtbmluZX07XG4ubnVpLWNvbG9yLWNoYXJ0LXRlbntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LXRlbn07XG4ubnVpLWNvbG9yLWNoYXJ0LW9uZS1saWdodHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LW9uZS1saWdodH07XG4ubnVpLWNvbG9yLWNoYXJ0LXR3by1saWdodHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LXR3by1saWdodH07XG4ubnVpLWNvbG9yLWNoYXJ0LXRocmVlLWxpZ2h0e2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtdGhyZWUtbGlnaHR9O1xuLm51aS1jb2xvci1jaGFydC1mb3VyLWxpZ2h0e2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtZm91ci1saWdodH07XG4ubnVpLWNvbG9yLWNoYXJ0LWZpdmUtbGlnaHR7YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC1maXZlLWxpZ2h0fTtcbi5udWktY29sb3ItY2hhcnQtc2l4LWxpZ2h0e2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtc2l4LWxpZ2h0fTtcbi5udWktY29sb3ItY2hhcnQtc2V2ZW4tbGlnaHR7YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC1zZXZlbi1saWdodH07XG4ubnVpLWNvbG9yLWNoYXJ0LWVpZ2h0LWxpZ2h0e2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtZWlnaHQtbGlnaHR9O1xuLm51aS1jb2xvci1jaGFydC1uaW5lLWxpZ2h0e2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtbmluZS1saWdodH07XG4ubnVpLWNvbG9yLWNoYXJ0LXRlbi1saWdodHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LXRlbi1saWdodH07XG4ubnVpLWNvbG9yLWNoYXJ0LXN1bXtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LXN1bX07XG4ubnVpLWNvbG9yLWNoYXJ0LXBlcmNlbnRpbGV7YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC1wZXJjZW50aWxlfTtcbi5udWktc2hhZG93LWNvbG9ye2JhY2tncm91bmQ6IEBudWktc2hhZG93LWNvbG9yfTtcbi5udWktc2hhZG93LWNvbG9yLXN0cm9uZ2Vye2JhY2tncm91bmQ6IEBudWktc2hhZG93LWNvbG9yLXN0cm9uZ2VyfTtcbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi8uLi8uLi8uLi9zcmMvc3R5bGVzL251aS1mcmFtZXdvcmstc3BhY2VzLmxlc3NcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi8uLi8uLi8uLi9zcmMvc3R5bGVzL251aS1mcmFtZXdvcmstc2hhZG93Lmxlc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zcmMvc3R5bGVzL2RhdGEvbnVpLWZyYW1ld29yay1jb2xvcnMtZG9jcy5sZXNzXCI7XG5cbi5jb2xvci1leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogQG51aS1zcGFjZS1tZDtcbn1cbi5jb2xvci1leGFtcGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAwIEBudWktc2hhZG93LWNvbG9yO1xuICAgIGJveC1zaGFkb3c6IEBudWktc2hhZG93LWRlZmF1bHQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "CeuN":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/static/semantic-variables/semantic-variables.example.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CeuN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    To use semantic variables in your style files, you should import it from <code>nui-framework-variables.less</code>, by adding the following:\n    <code>@import (reference) \"node_modules/@nova-ui/bits/sdk/less/nui-framework-variables\";</code>\n</p>\n\n<h2>Font Weight</h2>\n    <div class=\"examples d-flex flex-row justify-content-between\">\n        <div class=\"examples-font-weight\">\n            <h5>Light</h5>\n            <div class=\"font-weight-light\">@nui-font-weight-light</div>\n            <span class=\"black\">300px - <code>@nui-font-weight-light</code></span>\n            <h5>Regular</h5>\n            <div class=\"font-weight-regular\">@nui-font-weight-regular</div>\n            <span class=\"black\">400px - <code>@nui-font-weight-regular</code></span>\n            <h5>Semibold</h5>\n            <div class=\"font-weight-semibold\">@nui-font-weight-semibold</div>\n            <span class=\"black\">600px - <code>@nui-font-weight-semibold</code></span>\n            <h5>Bold</h5>\n            <div class=\"font-weight-bold\">@nui-font-weight-bold</div>\n            <span class=\"black\">700px - <code>@nui-font-weight-bold</code></span>\n        </div>\n    </div>\n<hr />\n\n<h2>Font Size</h2>\n    <div class=\"examples d-flex flex-row justify-content-between\">\n        <div class=\"examples-font-size\">\n            <h5>Hero</h5>\n            <div class=\"font-size-hero\">@nui-font-size-hero</div>\n            <span class=\"black\">18px - <code>@nui-font-size-hero</code></span>\n            <h5>Big</h5>\n            <div class=\"font-size-big\">@nui-font-size-big</div>\n            <span class=\"black\">16px - <code>@nui-font-size-big</code></span>\n            <h5>Default</h5>\n            <div class=\"font-size-default\">@nui-font-size-default</div>\n            <span class=\"black\">13px - <code>@nui-font-size-default</code></span>\n            <h5>Small</h5>\n            <div class=\"font-size-small\">@nui-font-size-small</div>\n            <span class=\"black\">11px - <code>@nui-font-size-small</code></span>\n        </div>\n    </div>\n<hr />\n\n<h2>Icon Size</h2>\n    <div class=\"examples d-flex flex-row justify-content-between\">\n        <div class=\"examples-icon-size\">\n            <h5>Medium</h5>\n            <div class=\"icon-size-medium\"></div>\n            <span class=\"black\">20px - <code>@icon-size-medium</code></span>\n            <h5>Default</h5>\n            <div class=\"icon-size-default\"></div>\n            <span class=\"black\">16px - <code>@icon-size-default</code></span>\n            <h5>Small</h5>\n            <div class=\"icon-size-small\"></div>\n            <span class=\"black\">12px - <code>@icon-size-small</code></span>\n        </div>\n    </div>\n<hr />\n\n<h2>Spacing (padding, margin)</h2>\n<div class=\"examples d-flex justify-content-between\">\n    <div class=\"d-flex flex-column align-items-center\">\n        <div class=\"space-xxs\"></div>\n        <span>XXS</span>\n    </div>\n    <div class=\"space\">\n        <div class=\"space-xs\"></div>\n        <span>XS</span>\n    </div>\n    <div class=\"space\">\n        <div class=\"space-s\"></div>\n        <span>S</span>\n    </div>\n    <div class=\"space\">\n        <div class=\"space-m\"></div>\n        <span>M</span>\n    </div>\n</div>\n<br>\n<div class=\"examples d-flex flex-column spacing-hints\">\n    <span><span class=\"color-black\">M ~ 15px </span><div class=\"mb-2 d-inline\"><code>@nui-space-md</code></div></span>\n    <span><span class=\"color-black\">S ~ 10px </span><div class=\"mb-2 d-inline\"><code>@nui-space-sm</code></div></span>\n    <span><span class=\"color-black\">XS ~ 5px </span><div class=\"mb-2 d-inline\"><code>@nui-space-xs</code></div></span>\n    <span><span class=\"color-black\">XXS ~ 2px </span><div class=\"mb-2 d-inline\"><code>@nui-space-xxs</code></div></span>\n</div>\n<hr />\n\n<h2>Line Thickness (border-width)</h2>\n<div class=\"examples d-flex justify-content-between\">\n    <div class=\"examples-line-thickness\">\n        <h6>line-default</h6> <div class=\"mb-2 d-inline\"><code>@nui-line-default</code></div>\n        <div class=\"d-flex flex-row justify-content-between align-items-center\">\n            <div class=\"line line-default\"></div>\n            <span>1px</span>\n        </div>\n        <h6>line-medium</h6> <div class=\"mb-2 d-inline\"><code>@nui-line-medium</code></div>\n        <div class=\"d-flex flex-row justify-content-between align-items-center\">\n            <div class=\"line line-medium\"></div>\n            <span>2px</span>\n        </div>\n        <h6>line-thick</h6> <div class=\"mb-2 d-inline\"><code>@nui-line-thick</code></div>\n        <div class=\"d-flex flex-row justify-content-between align-items-center\">\n            <div class=\"line line-thick\"></div>\n            <span>3px</span>\n        </div>\n        <h6>line-fat</h6> <div class=\"mb-2 d-inline\"><code>@nui-line-fat</code></div>\n        <div class=\"d-flex flex-row justify-content-between align-items-center\">\n            <div class=\"line line-fat\"></div>\n            <span>4px</span>\n        </div>\n    </div>\n</div>\n<hr />\n\n<h2>Radius</h2>\n<div class=\"examples d-flex justify-content-between\">\n    <div class=\"d-flex flex-column\">\n        <h6>radius-default</h6><div class=\"mb-2 d-inline\"><code>@nui-radius-default</code></div>\n        <div class=\"d-flex flex-row justify-content-between align-items-center\">\n            <div class=\"rect-with-radius\"></div>\n            <span>3px</span>\n        </div>\n    </div>\n</div>\n\n<hr />\n<h2>Shadow</h2>\n<div class=\"examples d-flex flex-column\">\n    <h6>default</h6>\n    <div class=\"shadow-rectangle shadow-default\">\n        <div class=\"mb-2 d-inline\"><code>@nui-shadow-default</code></div><br>\n        30% #111 ~ RGBA (17,17,17,0.3)\n        x: 0, y: 0, blur: 5px, spread: 0\n    </div>\n    <h6>elevated</h6>\n    <div class=\"shadow-rectangle shadow-elevated\">\n        <div class=\"mb-2 d-inline\"><code>@nui-shadow-elevated</code></div><br>\n        x: 0, y: 2, blur: 10px, spread: 0\n    </div>\n    <h6>stronger</h6>\n    <div class=\"shadow-rectangle shadow-stronger\">\n        <div class=\"mb-2 d-inline\"><code>@nui-shadow-stronger</code></div><br>\n        x: 0, y: 0, blur: 5px, spread: 0\n    </div>\n    <h6>inner</h6>\n    <div class=\"shadow-rectangle shadow-inner\">\n        <div class=\"mb-2 d-inline\"><code>@nui-shadow-inner</code></div><br>\n        inset, x: 0, y: 1, blur: 3px, spread: 0\n    </div>\n    <h6>inner-top</h6>\n    <div class=\"shadow-rectangle shadow-inner-top\">\n        <div class=\"mb-2 d-inline\"><code>@nui-shadow-inner-top</code></div><br>\n        inset, x: 6, y: 0, blur: 5px, spread: -5px\n    </div>\n    <h6>inner-top-bottom</h6>\n    <div class=\"shadow-rectangle shadow-inner-top-bottom\">\n        <div class=\"mb-2 d-inline\"><code>@nui-shadow-inner-top-bottom</code></div><br>\n        inset, x: 0, y: 6px, and y: -6px, blur: 5px, spread: -5px\n    </div>\n    <h6>inner-bottom</h6>\n    <div class=\"shadow-rectangle shadow-inner-bottom\">\n        <div class=\"mb-2 d-inline\"><code>@nui-shadow-inner-bottom</code></div><br>\n        inset, x: 0, y: -6px, blur: 5px, spread: -5px\n    </div>\n    <h6>inner-left</h6>\n    <div class=\"shadow-rectangle shadow-inner-left\">\n        <div class=\"mb-2 d-inline\"><code>@nui-shadow-inner-left</code></div><br>\n        inset, x: 6px, y: -0, blur: 5px, spread: -5px\n    </div>\n    <h6>inner-right</h6>\n    <div class=\"shadow-rectangle shadow-inner-right\">\n        <div class=\"mb-2 d-inline\"><code>@nui-shadow-inner-right</code></div><br>\n        inset, x: -6px, y: -0, blur: 5px, spread: -5px\n    </div>\n    <h6>inner-left-right</h6>\n    <div class=\"shadow-rectangle shadow-inner-left-right\">\n        <div class=\"mb-2 d-inline\"><code>@nui-shadow-inner-left-right</code></div><br>\n        inset, x: 6px, y: -0, blur: 5px, spread: -5px\n        inset, x: -6px, y: -0, blur: 5px, spread: -5px\n    </div>\n\n    <h3>Scroll Shadows</h3>\n    <p class=\"example-text black\">\n        You can easily apply shadows in scrollable area, just by using <code>nui-scroll-shadows</code> class.\n    </p>\n    <div class=\"shadow-rectangle scroll-shadow black nui-scroll-shadows\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend maximus dolor ac congue. In hac habitasse platea dictumst.\n        Ut mollis elementum neque a egestas. Phasellus a dapibus nibh, vitae dignissim arcu. Sed pellentesque massa nibh, vitae viverra erat vestibulum sed.\n        Duis suscipit arcu quis rhoncus convallis. Vivamus vel ante nec eros blandit eleifend.\n        Duis auctor, ante et volutpat hendrerit, est metus pulvinar neque, vitae laoreet risus neque vitae enim.\n        Cras sem nibh, posuere id lorem sit amet, efficitur scelerisque lectus. Nullam facilisis nibh eu nunc tristique, quis convallis lectus aliquam.\n        Suspendisse iaculis condimentum facilisis. Phasellus lobortis erat lectus, eu consequat mi pretium eu. Etiam sollicitudin nunc eu sagittis hendrerit.\n        Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed egestas tempus metus ut tempor.\n        Aenean tristique, libero a sodales accumsan, dolor urna rhoncus turpis, imperdiet lacinia lorem mauris ut purus.\n    </div>\n    <p class=\"example-text black\">\n        For those who want horizontal scroll, they can get by applying <code>nui-scroll-shadows-horizontal</code> class.\n    </p>\n    <div class=\"shadow-rectangle black horizontal nui-scroll-shadows-horizontal\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend maximus dolor ac congue. In hac habitasse platea dictumst. Ut mollis elementum neque a egestas.\n        <br>\n        Duis auctor, ante et volutpat hendrerit, est metus pulvinar neque, vitae laoreet risus neque vitae enim.\n        <br>\n        Suspendisse iaculis condimentum facilisis. Phasellus lobortis erat lectus, eu consequat mi pretium eu. Etiam sollicitudin nunc eu sagittis hendrerit.\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "FvhM":
    /*!*****************************************************************************************!*\
      !*** ./demo/src/static sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*****************************************************************************************/

    /*! no static exports found */

    /***/
    function FvhM(module, exports, __webpack_require__) {
      var map = {
        "./framework-colors-dark/framework-colors-dark.example.component.html": "rXNR",
        "./framework-colors-dark/framework-colors-dark.example.component.less": "WPlv",
        "./framework-colors-dark/framework-colors-dark.example.component.ts": "ruUO",
        "./framework-colors/framework-colors-example.component.html": "e6Rz",
        "./framework-colors/framework-colors-example.component.less": "hNp8",
        "./framework-colors/framework-colors-example.component.ts": "9MSv",
        "./links/links.example.component.html": "09dT",
        "./links/links.example.component.less": "QcUZ",
        "./links/links.example.component.ts": "hSZW",
        "./semantic-variables/semantic-variables.example.component.html": "CeuN",
        "./semantic-variables/semantic-variables.example.component.less": "psrh",
        "./semantic-variables/semantic-variables.example.component.ts": "Bycv",
        "./static-example.module.ts": "I+o1",
        "./typography/typography-example.component.html": "5wNP",
        "./typography/typography-example.component.ts": "GJV6"
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
      webpackContext.id = "FvhM";
      /***/
    },

    /***/
    "GJV6":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/static/typography/typography-example.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GJV6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"typography-example\",\n    templateUrl: \"./typography-example.component.html\",\n    styleUrls: [\"./typography-example.component.css\"],\n})\nexport class TypographyExampleComponent {\n}\n";
      /***/
    },

    /***/
    "I+o1":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/static/static-example.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function IO1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { CommonModule } from \"@angular/common\";\nimport { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiCommonModule, NuiDocsModule } from \"@nova-ui/bits\";\nimport { NuiDividerModule } from \"@nova-ui/bits\";\nimport { SrlcStage } from \"@nova-ui/bits\";\nimport { NuiIconModule } from \"@nova-ui/bits\";\nimport { NuiMessageModule } from \"@nova-ui/bits\";\nimport { NuiToastModule } from \"@nova-ui/bits\";\nimport { NuiExpanderModule } from \"@nova-ui/bits\";\nimport { NuiFormFieldModule } from \"@nova-ui/bits\";\nimport { NuiTextboxModule } from \"@nova-ui/bits\";\nimport { NuiValidationMessageModule } from \"@nova-ui/bits\";\nimport { NuiButtonModule } from \"@nova-ui/bits\";\n\nimport { FrameworkColorsDarkExampleComponent } from \"./framework-colors-dark/framework-colors-dark.example.component\";\nimport { FrameworkColorsExampleComponent } from \"./framework-colors/framework-colors-example.component\";\nimport { LinksExampleComponent } from \"./links/links.example.component\";\nimport { SemanticVariablesExampleComponent } from \"./semantic-variables/semantic-variables.example.component\";\nimport { TypographyExampleComponent } from \"./typography/typography-example.component\";\n\n\nconst staticRoutes: Routes = [\n    {\n        path: \"typography\",\n        component: TypographyExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n        },\n    },\n    {\n        path: \"semantic-variables\",\n        component: SemanticVariablesExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n        },\n    },\n    {\n        path: \"framework-colors\",\n        component: FrameworkColorsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n        },\n    },\n    {\n        path: \"framework-colors-dark\",\n        component: FrameworkColorsDarkExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n        },\n    },\n    {\n        path: \"links\",\n        component: LinksExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        TypographyExampleComponent,\n        SemanticVariablesExampleComponent,\n        FrameworkColorsExampleComponent,\n        FrameworkColorsDarkExampleComponent,\n        LinksExampleComponent,\n    ],\n    imports: [\n        NuiIconModule,\n        CommonModule,\n        NuiDocsModule,\n        NuiCommonModule,\n        NuiDividerModule,\n        NuiMessageModule,\n        NuiToastModule,\n        NuiExpanderModule,\n        NuiFormFieldModule,\n        NuiTextboxModule,\n        NuiButtonModule,\n        NuiValidationMessageModule,\n        RouterModule.forChild(staticRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () =>  (<any> require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/)},\n    ],\n})\nexport class StaticExampleModule { }\n";
      /***/
    },

    /***/
    "LMTS":
    /*!************************************************************************************!*\
      !*** ./demo/src/static/semantic-variables/semantic-variables.example.component.ts ***!
      \************************************************************************************/

    /*! exports provided: SemanticVariablesExampleComponent */

    /***/
    function LMTS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SemanticVariablesExampleComponent", function () {
        return SemanticVariablesExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SemanticVariablesExampleComponent = function SemanticVariablesExampleComponent() {
        _classCallCheck(this, SemanticVariablesExampleComponent);
      };

      SemanticVariablesExampleComponent.ɵfac = function SemanticVariablesExampleComponent_Factory(t) {
        return new (t || SemanticVariablesExampleComponent)();
      };

      SemanticVariablesExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SemanticVariablesExampleComponent,
        selectors: [["semantic-variables-example"]],
        decls: 311,
        vars: 0,
        consts: [[1, "examples", "d-flex", "flex-row", "justify-content-between"], [1, "examples-font-weight"], [1, "font-weight-light"], [1, "black"], [1, "font-weight-regular"], [1, "font-weight-semibold"], [1, "font-weight-bold"], [1, "examples-font-size"], [1, "font-size-hero"], [1, "font-size-big"], [1, "font-size-default"], [1, "font-size-small"], [1, "examples-icon-size"], [1, "icon-size-medium"], [1, "icon-size-default"], [1, "icon-size-small"], [1, "examples", "d-flex", "justify-content-between"], [1, "d-flex", "flex-column", "align-items-center"], [1, "space-xxs"], [1, "space"], [1, "space-xs"], [1, "space-s"], [1, "space-m"], [1, "examples", "d-flex", "flex-column", "spacing-hints"], [1, "color-black"], [1, "mb-2", "d-inline"], [1, "examples-line-thickness"], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center"], [1, "line", "line-default"], [1, "line", "line-medium"], [1, "line", "line-thick"], [1, "line", "line-fat"], [1, "d-flex", "flex-column"], [1, "rect-with-radius"], [1, "examples", "d-flex", "flex-column"], [1, "shadow-rectangle", "shadow-default"], [1, "shadow-rectangle", "shadow-elevated"], [1, "shadow-rectangle", "shadow-stronger"], [1, "shadow-rectangle", "shadow-inner"], [1, "shadow-rectangle", "shadow-inner-top"], [1, "shadow-rectangle", "shadow-inner-top-bottom"], [1, "shadow-rectangle", "shadow-inner-bottom"], [1, "shadow-rectangle", "shadow-inner-left"], [1, "shadow-rectangle", "shadow-inner-right"], [1, "shadow-rectangle", "shadow-inner-left-right"], [1, "example-text", "black"], [1, "shadow-rectangle", "scroll-shadow", "black", "nui-scroll-shadows"], [1, "shadow-rectangle", "black", "horizontal", "nui-scroll-shadows-horizontal"]],
        template: function SemanticVariablesExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " To use semantic variables in your style files, you should import it from ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "nui-framework-variables.less");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ", by adding the following: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "@import (reference) \"node_modules/@nova-ui/bits/sdk/less/nui-framework-variables\";");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Font Weight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Light");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "@nui-font-weight-light");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "300px - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "@nui-font-weight-light");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Regular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "@nui-font-weight-regular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "400px - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "@nui-font-weight-regular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Semibold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "@nui-font-weight-semibold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "600px - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "@nui-font-weight-semibold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Bold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "@nui-font-weight-bold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "700px - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "@nui-font-weight-bold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Font Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Hero");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "@nui-font-size-hero");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "18px - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "@nui-font-size-hero");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Big");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "@nui-font-size-big");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "16px - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "@nui-font-size-big");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "@nui-font-size-default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "13px - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "@nui-font-size-default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "@nui-font-size-small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "11px - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "@nui-font-size-small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Icon Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "20px - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "@icon-size-medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "16px - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "@icon-size-default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "12px - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "@icon-size-small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Spacing (padding, margin)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "XXS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "XS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "S");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "M ~ 15px ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "@nui-space-md");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "S ~ 10px ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "@nui-space-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "XS ~ 5px ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "@nui-space-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "XXS ~ 2px ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "@nui-space-xxs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Line Thickness (border-width)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "line-default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "@nui-line-default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "1px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "line-medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "@nui-line-medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "2px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "line-thick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "@nui-line-thick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "3px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "line-fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "@nui-line-fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "4px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Radius");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "radius-default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "@nui-radius-default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "3px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Shadow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "@nui-shadow-default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " 30% #111 ~ RGBA (17,17,17,0.3) x: 0, y: 0, blur: 5px, spread: 0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "elevated");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "@nui-shadow-elevated");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " x: 0, y: 2, blur: 10px, spread: 0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "stronger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "@nui-shadow-stronger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " x: 0, y: 0, blur: 5px, spread: 0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "inner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "@nui-shadow-inner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " inset, x: 0, y: 1, blur: 3px, spread: 0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "inner-top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "@nui-shadow-inner-top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " inset, x: 6, y: 0, blur: 5px, spread: -5px ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "inner-top-bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "@nui-shadow-inner-top-bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " inset, x: 0, y: 6px, and y: -6px, blur: 5px, spread: -5px ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "inner-bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "@nui-shadow-inner-bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " inset, x: 0, y: -6px, blur: 5px, spread: -5px ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "inner-left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "@nui-shadow-inner-left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " inset, x: 6px, y: -0, blur: 5px, spread: -5px ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "inner-right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "@nui-shadow-inner-right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " inset, x: -6px, y: -0, blur: 5px, spread: -5px ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "inner-left-right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "@nui-shadow-inner-left-right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " inset, x: 6px, y: -0, blur: 5px, spread: -5px inset, x: -6px, y: -0, blur: 5px, spread: -5px ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Scroll Shadows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, " You can easily apply shadows in scrollable area, just by using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "nui-scroll-shadows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, " class. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend maximus dolor ac congue. In hac habitasse platea dictumst. Ut mollis elementum neque a egestas. Phasellus a dapibus nibh, vitae dignissim arcu. Sed pellentesque massa nibh, vitae viverra erat vestibulum sed. Duis suscipit arcu quis rhoncus convallis. Vivamus vel ante nec eros blandit eleifend. Duis auctor, ante et volutpat hendrerit, est metus pulvinar neque, vitae laoreet risus neque vitae enim. Cras sem nibh, posuere id lorem sit amet, efficitur scelerisque lectus. Nullam facilisis nibh eu nunc tristique, quis convallis lectus aliquam. Suspendisse iaculis condimentum facilisis. Phasellus lobortis erat lectus, eu consequat mi pretium eu. Etiam sollicitudin nunc eu sagittis hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed egestas tempus metus ut tempor. Aenean tristique, libero a sodales accumsan, dolor urna rhoncus turpis, imperdiet lacinia lorem mauris ut purus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, " For those who want horizontal scroll, they can get by applying ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "nui-scroll-shadows-horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " class. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend maximus dolor ac congue. In hac habitasse platea dictumst. Ut mollis elementum neque a egestas. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " Duis auctor, ante et volutpat hendrerit, est metus pulvinar neque, vitae laoreet risus neque vitae enim. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, " Suspendisse iaculis condimentum facilisis. Phasellus lobortis erat lectus, eu consequat mi pretium eu. Etiam sollicitudin nunc eu sagittis hendrerit. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".examples[_ngcontent-%COMP%] {\n  color: #FF0000;\n  font-family: \"Open Sans\";\n  font-size: 12px;\n  width: 150px;\n}\n.examples[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%] {\n  color: #111;\n}\n.examples[_ngcontent-%COMP%]   .examples-font-weight[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.examples[_ngcontent-%COMP%]   .examples-font-weight[_ngcontent-%COMP%]   .font-weight-light[_ngcontent-%COMP%] {\n  width: inherit;\n  font-weight: 300;\n}\n.examples[_ngcontent-%COMP%]   .examples-font-weight[_ngcontent-%COMP%]   .font-weight-regular[_ngcontent-%COMP%] {\n  width: inherit;\n  font-weight: 400;\n}\n.examples[_ngcontent-%COMP%]   .examples-font-weight[_ngcontent-%COMP%]   .font-weight-semibold[_ngcontent-%COMP%] {\n  width: inherit;\n  font-weight: 600;\n}\n.examples[_ngcontent-%COMP%]   .examples-font-weight[_ngcontent-%COMP%]   .font-weight-bold[_ngcontent-%COMP%] {\n  width: inherit;\n  font-weight: 700;\n}\n.examples[_ngcontent-%COMP%]   .examples-font-size[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.examples[_ngcontent-%COMP%]   .examples-font-size[_ngcontent-%COMP%]   .font-size-hero[_ngcontent-%COMP%] {\n  width: inherit;\n  font-size: 18px;\n}\n.examples[_ngcontent-%COMP%]   .examples-font-size[_ngcontent-%COMP%]   .font-size-big[_ngcontent-%COMP%] {\n  width: inherit;\n  font-size: 16px;\n}\n.examples[_ngcontent-%COMP%]   .examples-font-size[_ngcontent-%COMP%]   .font-size-default[_ngcontent-%COMP%] {\n  width: inherit;\n  font-size: 13px;\n}\n.examples[_ngcontent-%COMP%]   .examples-font-size[_ngcontent-%COMP%]   .font-size-small[_ngcontent-%COMP%] {\n  width: inherit;\n  font-size: 11px;\n}\n.examples[_ngcontent-%COMP%]   .examples-icon-size[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.examples[_ngcontent-%COMP%]   .examples-icon-size[_ngcontent-%COMP%]   .icon-size-medium[_ngcontent-%COMP%] {\n  width: inherit;\n  height: 20px;\n  width: 20px;\n  border: 1px solid #FF0000;\n}\n.examples[_ngcontent-%COMP%]   .examples-icon-size[_ngcontent-%COMP%]   .icon-size-default[_ngcontent-%COMP%] {\n  width: inherit;\n  height: 16px;\n  width: 16px;\n  border: 1px solid #FF0000;\n}\n.examples[_ngcontent-%COMP%]   .examples-icon-size[_ngcontent-%COMP%]   .icon-size-small[_ngcontent-%COMP%] {\n  width: inherit;\n  height: 12px;\n  width: 12px;\n  border: 1px solid #FF0000;\n}\n.examples[_ngcontent-%COMP%]   .space-m[_ngcontent-%COMP%] {\n  background-color: rgba(255, 0, 0, 0.2);\n  width: 15px;\n  height: 25px;\n}\n.examples[_ngcontent-%COMP%]   .space-s[_ngcontent-%COMP%] {\n  background-color: rgba(249, 157, 28, 0.2);\n  width: 10px;\n  height: 25px;\n}\n.examples[_ngcontent-%COMP%]   .space-xs[_ngcontent-%COMP%] {\n  background-color: rgba(48, 178, 48, 0.2);\n  width: 5px;\n  height: 25px;\n}\n.examples[_ngcontent-%COMP%]   .space-xxs[_ngcontent-%COMP%] {\n  background-color: rgba(0, 151, 235, 0.2);\n  width: 2px;\n  height: 25px;\n}\n.examples[_ngcontent-%COMP%]   .examples-line-thickness[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.examples[_ngcontent-%COMP%]   .examples-line-thickness[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 100px;\n  background-color: #FF0000;\n}\n.examples[_ngcontent-%COMP%]   .examples-line-thickness[_ngcontent-%COMP%]   .line-default[_ngcontent-%COMP%] {\n  height: 1px;\n}\n.examples[_ngcontent-%COMP%]   .examples-line-thickness[_ngcontent-%COMP%]   .line-medium[_ngcontent-%COMP%] {\n  height: 2px;\n}\n.examples[_ngcontent-%COMP%]   .examples-line-thickness[_ngcontent-%COMP%]   .line-thick[_ngcontent-%COMP%] {\n  height: 3px;\n}\n.examples[_ngcontent-%COMP%]   .examples-line-thickness[_ngcontent-%COMP%]   .line-fat[_ngcontent-%COMP%] {\n  height: 4px;\n}\n.examples[_ngcontent-%COMP%]   .rect-with-radius[_ngcontent-%COMP%] {\n  background-color: #FF0000;\n  border-radius: 3px;\n  width: 30px;\n  height: 30px;\n}\n.spacing-hints[_ngcontent-%COMP%]   .color-black[_ngcontent-%COMP%] {\n  color: black;\n}\n.shadow-rectangle[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 100px;\n  margin: 10px;\n  padding: 20%;\n}\n.shadow-rectangle.shadow-default[_ngcontent-%COMP%] {\n  box-shadow: 0 0 5px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.shadow-rectangle.shadow-elevated[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.shadow-rectangle.shadow-stronger[_ngcontent-%COMP%] {\n  box-shadow: 0 0 5px 0 var(--nui-shadow-color-stronger, rgba(17, 17, 17, 0.6));\n}\n.shadow-rectangle.shadow-inner[_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 3px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.shadow-rectangle.shadow-inner-top[_ngcontent-%COMP%] {\n  box-shadow: inset 0px 6px 5px -5px var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.shadow-rectangle.shadow-inner-top-bottom[_ngcontent-%COMP%] {\n  box-shadow: inset 0 6px 5px -5px var(--nui-shadow-color, rgba(17, 17, 17, 0.3)), inset 0 -6px 5px -5px var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.shadow-rectangle.shadow-inner-bottom[_ngcontent-%COMP%] {\n  box-shadow: inset 0 -6px 5px -5px var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.shadow-rectangle.shadow-inner-left[_ngcontent-%COMP%] {\n  box-shadow: inset 6px 0px 5px -5px var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.shadow-rectangle.shadow-inner-right[_ngcontent-%COMP%] {\n  box-shadow: inset -6px 0px 5px -5px var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.shadow-rectangle.shadow-inner-left-right[_ngcontent-%COMP%] {\n  box-shadow: inset 6px 0px 5px -5px var(--nui-shadow-color, rgba(17, 17, 17, 0.3)), inset -6px 0px 5px -5px var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.shadow-rectangle.scroll-shadow[_ngcontent-%COMP%] {\n  height: 150px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 2%;\n}\n.shadow-rectangle.horizontal[_ngcontent-%COMP%] {\n  padding: 2%;\n  overflow-y: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.example-text[_ngcontent-%COMP%] {\n  width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbWFudGljLXZhcmlhYmxlcy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUVBLFlBQUE7QUFISjtBQUZBO0VBUVEsV0FBQTtBQUhSO0FBTEE7RUFZUSxZQUFBO0FBSlI7QUFNWTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUpoQjtBQU1ZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBSmhCO0FBTVk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFKaEI7QUFNWTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUpoQjtBQXhCQTtFQWtDUSxZQUFBO0FBUFI7QUFTWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBUGhCO0FBU1k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQVBoQjtBQVNZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFQaEI7QUFTWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBUGhCO0FBM0NBO0VBd0RRLFlBQUE7QUFWUjtBQVlZO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFWaEI7QUFZWTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBVmhCO0FBWVk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQVZoQjtBQWdCUTtFQUNJLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFkWjtBQWdCUTtFQUNJLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFkWjtBQWdCUTtFQUNJLHdDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFkWjtBQWdCUTtFQUNJLHdDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFkWjtBQXBGQTtFQXVHUSxZQUFBO0FBaEJSO0FBdkZBO0VBeUdZLFlBQUE7RUFDQSx5QkFBQTtBQWZaO0FBZ0JZO0VBQ0ksV0FBQTtBQWRoQjtBQWdCWTtFQUNJLFdBQUE7QUFkaEI7QUFnQlk7RUFDSSxXQUFBO0FBZGhCO0FBZ0JZO0VBQ0ksV0FBQTtBQWRoQjtBQXZHQTtFQTJIUSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFqQlI7QUFvQkE7RUFFUSxZQUFBO0FBbkJSO0FBdUJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQXJCSjtBQXNCSTtFQUNJLG9FQUFBO0FBcEJSO0FBc0JJO0VBQ0ksdUVBQUE7QUFwQlI7QUFzQkk7RUFDSSw2RUFBQTtBQXBCUjtBQXNCSTtFQUNJLDRFQUFBO0FBcEJSO0FBc0JJO0VBQ0ksaUZBQUE7QUFwQlI7QUFzQkk7RUFDSSxxSkFBQTtBQXBCUjtBQXNCSTtFQUNJLGdGQUFBO0FBcEJSO0FBc0JJO0VBQ0ksaUZBQUE7QUFwQlI7QUFzQkk7RUFDSSxrRkFBQTtBQXBCUjtBQXNCSTtFQUNJLHlKQUFBO0FBcEJSO0FBc0JJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBcEJSO0FBc0JJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXBCUjtBQXVCQTtFQUNJLFlBQUE7QUFyQkoiLCJmaWxlIjoic2VtYW50aWMtdmFyaWFibGVzLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuQHJlY3RIZWlnaHQ6IDI1cHg7XG5AcmVjdFNoYWRvdzogcmdiYSgxNywgMTcsIDE3LCAwLjMpO1xuLmV4YW1wbGVzIHtcbiAgICBjb2xvcjogI0ZGMDAwMDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICB3aWR0aDogMTUwcHg7XG5cbiAgICAuYmxhY2sge1xuICAgICAgICBjb2xvcjogQGJsYWNrO1xuICAgIH1cblxuICAgIC5leGFtcGxlcy1mb250LXdlaWdodCB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgLmZvbnQtd2VpZ2h0IHtcbiAgICAgICAgICAgICYtbGlnaHQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LWxpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi1yZWd1bGFyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi1zZW1pYm9sZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLWJvbGQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LWJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZXhhbXBsZXMtZm9udC1zaXplIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAuZm9udC1zaXplIHtcbiAgICAgICAgICAgICYtaGVybyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBAbnVpLWZvbnQtc2l6ZS1oZXJvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi1iaWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogQG51aS1mb250LXNpemUtYmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi1kZWZhdWx0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IEBudWktZm9udC1zaXplLWRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLXNtYWxsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IEBudWktZm9udC1zaXplLXNtYWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmV4YW1wbGVzLWljb24tc2l6ZSB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgLmljb24tc2l6ZSB7XG4gICAgICAgICAgICAmLW1lZGl1bSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBAaWNvbi1zaXplLW1lZGl1bTtcbiAgICAgICAgICAgICAgICB3aWR0aDogQGljb24tc2l6ZS1tZWRpdW07XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYtZGVmYXVsdCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBAaWNvbi1zaXplLWRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IEBpY29uLXNpemUtZGVmYXVsdDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkYwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi1zbWFsbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBAaWNvbi1zaXplLXNtYWxsO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBAaWNvbi1zaXplLXNtYWxsO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc3BhY2Uge1xuICAgICAgICAmLW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAlLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgd2lkdGg6IEBudWktc3BhY2UtbWQ7XG4gICAgICAgICAgICBoZWlnaHQ6IEByZWN0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgICYtcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk3LjYlLDYxLjYlLDExJSwgMC4yKTtcbiAgICAgICAgICAgIHdpZHRoOiBAbnVpLXNwYWNlLXNtO1xuICAgICAgICAgICAgaGVpZ2h0OiBAcmVjdEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICAmLXhzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTguOCUsNjkuOCUsMTguOCUsIDAuMik7XG4gICAgICAgICAgICB3aWR0aDogQG51aS1zcGFjZS14cztcbiAgICAgICAgICAgIGhlaWdodDogQHJlY3RIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgJi14eHMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwJSw1OS4yJSw5Mi4yJSwgMC4yKTtcbiAgICAgICAgICAgIHdpZHRoOiBAbnVpLXNwYWNlLXh4cztcbiAgICAgICAgICAgIGhlaWdodDogQHJlY3RIZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZXhhbXBsZXMtbGluZS10aGlja25lc3Mge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIC5saW5lIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XG4gICAgICAgICAgICAmLWRlZmF1bHQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi1tZWRpdW17XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLXRoaWNrIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYtZmF0IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yZWN0LXdpdGgtcmFkaXVzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQG51aS1yYWRpdXMtZGVmYXVsdDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG59XG4uc3BhY2luZy1oaW50cyB7XG4gICAgLmNvbG9yLWJsYWNrIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbn1cblxuLnNoYWRvdy1yZWN0YW5nbGUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAyMCU7XG4gICAgJi5zaGFkb3ctZGVmYXVsdCB7XG4gICAgICAgIGJveC1zaGFkb3c6IEBudWktc2hhZG93LWRlZmF1bHQ7XG4gICAgfVxuICAgICYuc2hhZG93LWVsZXZhdGVkIHtcbiAgICAgICAgYm94LXNoYWRvdzogQG51aS1zaGFkb3ctZWxldmF0ZWQ7XG4gICAgfVxuICAgICYuc2hhZG93LXN0cm9uZ2VyIHtcbiAgICAgICAgYm94LXNoYWRvdzogQG51aS1zaGFkb3ctc3Ryb25nZXI7XG4gICAgfVxuICAgICYuc2hhZG93LWlubmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogQG51aS1zaGFkb3ctaW5uZXI7XG4gICAgfVxuICAgICYuc2hhZG93LWlubmVyLXRvcCB7XG4gICAgICAgIGJveC1zaGFkb3c6IEBudWktc2hhZG93LWlubmVyLXRvcDtcbiAgICB9XG4gICAgJi5zaGFkb3ctaW5uZXItdG9wLWJvdHRvbSB7XG4gICAgICAgIGJveC1zaGFkb3c6IEBudWktc2hhZG93LWlubmVyLXRvcC1ib3R0b207XG4gICAgfVxuICAgICYuc2hhZG93LWlubmVyLWJvdHRvbSB7XG4gICAgICAgIGJveC1zaGFkb3c6IEBudWktc2hhZG93LWlubmVyLWJvdHRvbTtcbiAgICB9XG4gICAgJi5zaGFkb3ctaW5uZXItbGVmdCB7XG4gICAgICAgIGJveC1zaGFkb3c6IEBudWktc2hhZG93LWlubmVyLWxlZnQ7XG4gICAgfVxuICAgICYuc2hhZG93LWlubmVyLXJpZ2h0IHtcbiAgICAgICAgYm94LXNoYWRvdzogQG51aS1zaGFkb3ctaW5uZXItcmlnaHQ7XG4gICAgfVxuICAgICYuc2hhZG93LWlubmVyLWxlZnQtcmlnaHQge1xuICAgICAgICBib3gtc2hhZG93OiBAbnVpLXNoYWRvdy1pbm5lci1sZWZ0LXJpZ2h0O1xuICAgIH1cbiAgICAmLnNjcm9sbC1zaGFkb3cge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgIH1cbiAgICAmLmhvcml6b250YWwge1xuICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cbn1cbi5leGFtcGxlLXRleHQge1xuICAgIHdpZHRoOiA1MDBweDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "QcUZ":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/static/links/links.example.component.less ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QcUZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import \"../../../../src/styles/nui-framework-variables\";\n\n.link-example {\n    width: 300px;\n    .nui-text-link {\n        nui-icon {\n            padding-left: @nui-space-xs;\n            padding-right: @nui-space-xs;\n        }\n        &.disabled {\n            color: @nui-color-text-disabled;\n            pointer-events: none;\n        }\n    }\n    .link-info-text {\n        color: red;\n    }\n}\n";
      /***/
    },

    /***/
    "WPlv":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/static/framework-colors-dark/framework-colors-dark.example.component.less ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WPlv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import (reference) \"../../../../src/styles/nui-framework-spaces.less\";\n@import (reference) \"../../../../src/styles/nui-framework-shadow.less\";\n@import \"../../../../src/styles/data/nui-framework-colors-dark-docs.less\";\n\n.color-example-container {\n    width: 150px;\n    margin-right: @nui-space-md;\n}\n.color-example {\n    width: 100%;\n    height: 40px;\n    box-shadow: 0 0 5px 0 fade(@black, 30%);\n    box-shadow: @nui-shadow-default;\n    cursor: pointer;\n}\n";
      /***/
    },

    /***/
    "YTyi":
    /*!**************************************************!*\
      !*** ./demo/src/static/static-example.module.ts ***!
      \**************************************************/

    /*! exports provided: StaticExampleModule */

    /***/
    function YTyi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaticExampleModule", function () {
        return StaticExampleModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _framework_colors_dark_framework_colors_dark_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./framework-colors-dark/framework-colors-dark.example.component */
      "x2OK");
      /* harmony import */


      var _framework_colors_framework_colors_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./framework-colors/framework-colors-example.component */
      "CAKc");
      /* harmony import */


      var _links_links_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./links/links.example.component */
      "C9NF");
      /* harmony import */


      var _semantic_variables_semantic_variables_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./semantic-variables/semantic-variables.example.component */
      "LMTS");
      /* harmony import */


      var _typography_typography_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./typography/typography-example.component */
      "nzAA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var staticRoutes = [{
        path: "typography",
        component: _typography_typography_example_component__WEBPACK_IMPORTED_MODULE_7__["TypographyExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          }
        }
      }, {
        path: "semantic-variables",
        component: _semantic_variables_semantic_variables_example_component__WEBPACK_IMPORTED_MODULE_6__["SemanticVariablesExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          }
        }
      }, {
        path: "framework-colors",
        component: _framework_colors_framework_colors_example_component__WEBPACK_IMPORTED_MODULE_4__["FrameworkColorsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          }
        }
      }, {
        path: "framework-colors-dark",
        component: _framework_colors_dark_framework_colors_dark_example_component__WEBPACK_IMPORTED_MODULE_3__["FrameworkColorsDarkExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          }
        }
      }, {
        path: "links",
        component: _links_links_example_component__WEBPACK_IMPORTED_MODULE_5__["LinksExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          }
        }
      }];

      var StaticExampleModule = function StaticExampleModule() {
        _classCallCheck(this, StaticExampleModule);
      };

      StaticExampleModule.ɵfac = function StaticExampleModule_Factory(t) {
        return new (t || StaticExampleModule)();
      };

      StaticExampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: StaticExampleModule
      });
      StaticExampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("FvhM");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiIconModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDividerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiToastModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiExpanderModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(staticRoutes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](StaticExampleModule, {
          declarations: [_typography_typography_example_component__WEBPACK_IMPORTED_MODULE_7__["TypographyExampleComponent"], _semantic_variables_semantic_variables_example_component__WEBPACK_IMPORTED_MODULE_6__["SemanticVariablesExampleComponent"], _framework_colors_framework_colors_example_component__WEBPACK_IMPORTED_MODULE_4__["FrameworkColorsExampleComponent"], _framework_colors_dark_framework_colors_dark_example_component__WEBPACK_IMPORTED_MODULE_3__["FrameworkColorsDarkExampleComponent"], _links_links_example_component__WEBPACK_IMPORTED_MODULE_5__["LinksExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiIconModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDividerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiToastModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiExpanderModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "c9vq":
    /*!***********************************************!*\
      !*** ./src/styles/data/framework-colors.json ***!
      \***********************************************/

    /*! exports provided: backgrounds, effects and interactions, texts, lines, icons, overlays, scrollbars, brand, status and severity, charts, default */

    /***/
    function c9vq(module) {
      module.exports = JSON.parse("{\"backgrounds\":[{\"color\":\"@nui-color-bg-transparent\",\"secondary\":\"@transparent\"},{\"color\":\"@nui-color-bg-content\",\"secondary\":\"@white\"},{\"color\":\"@nui-color-bg-content-hover\",\"secondary\":\"shade(@white, 5%)\"},{\"color\":\"@nui-color-bg-content_popover\",\"secondary\":\"@white\"},{\"color\":\"@nui-color-bg-secondary\",\"secondary\":\"shade(@white, 2%)\"},{\"color\":\"@nui-color-bg-workspace\",\"secondary\":\"shade(@white, 6%)\"},{\"color\":\"@nui-color-bg-transparent-hover\",\"secondary\":\"fade(@black, 5%)\"},{\"color\":\"@nui-color-bg-table_header\",\"secondary\":\"shade(@white, 6%)\"},{\"color\":\"@nui-color-bg-accordion_header\",\"secondary\":\"fade(@black, 6%)\"},{\"color\":\"@nui-color-bg-accordion_header-hover\",\"secondary\":\"fade(@black, 11%)\"},{\"color\":\"@nui-color-bg-inverse\",\"secondary\":\"@black\"},{\"color\":\"@nui-color-bg-platformbar\",\"secondary\":\"@black\"},{\"color\":\"@nui-color-bg-platformbar-secondary\",\"secondary\":\"tint(@black, 10%)\"},{\"color\":\"@nui-color-bg-platformbar-secondary-hover\",\"secondary\":\"@black\"},{\"color\":\"@nui-color-bg-table_header-hover\",\"secondary\":\"shade(@white, 11%)\"},{\"color\":\"@nui-color-bg-inverse-hover\",\"secondary\":\"tint(@black, 10%)\"},{\"color\":\"@nui-color-bg-platformbar-hover\",\"secondary\":\"tint(@black, 15%)\"}],\"effects and interactions\":[{\"color\":\"@nui-color-active\",\"secondary\":\"@primary_blue\"},{\"color\":\"@nui-color-active-hover\",\"secondary\":\"shade(@primary_blue, 10%)\"},{\"color\":\"@nui-color-selected\",\"secondary\":\"fade(@cyan, 10%)\"},{\"color\":\"@nui-color-selected-hover\",\"secondary\":\"fade(@cyan, 20%)\"},{\"color\":\"@nui-color-selected-contrast\",\"secondary\":\"@cyan\"},{\"color\":\"@nui-color-selected-contrast-hover\",\"secondary\":\"shade(@cyan, 10%)\"},{\"color\":\"@nui-color-drag_selection\",\"secondary\":\"shade(@cyan, 40%)\"},{\"color\":\"@nui-color-on\",\"secondary\":\"@ok_green\"},{\"color\":\"@nui-color-off\",\"secondary\":\"shade(@white, 70%)\"},{\"color\":\"@nui-color-disabled\",\"secondary\":\"shade(@white, 30%)\"},{\"color\":\"@nui-color-disabled-secondary\",\"secondary\":\"shade(@white, 9%)\"},{\"color\":\"@nui-color-progress\",\"secondary\":\"@cyan\"},{\"color\":\"@nui-color-focus\",\"secondary\":\"fade(@cyan, 50%)\"},{\"color\":\"@nui-color-busy-default\",\"secondary\":\"fade(@cyan, 20%)\"},{\"color\":\"@nui-color-busy-destructive\",\"secondary\":\"fade(@critical_red, 20%)\"},{\"color\":\"@nui-color-search_highlight\",\"secondary\":\"fade(@swi_orange, 30%)\"}],\"texts\":[{\"color\":\"@nui-color-text-default\",\"secondary\":\"@black\"},{\"color\":\"@nui-color-text-secondary\",\"secondary\":\"fade(@black, 60%)\"},{\"color\":\"@nui-color-text-link\",\"secondary\":\"@primary_blue\"},{\"color\":\"@nui-color-text-link-inverse\",\"secondary\":\"tint(@primary_blue, 30%)\"},{\"color\":\"@nui-color-text-disabled\",\"secondary\":\"fade(@black, 30%)\"},{\"color\":\"@nui-color-text-light\",\"secondary\":\"@white\"},{\"color\":\"@nui-color-text-inverse\",\"secondary\":\"@white\"},{\"color\":\"@nui-color-text-inverse-secondary\",\"secondary\":\"fade(@white, 60%)\"},{\"color\":\"@nui-color-text-inverse-disabled\",\"secondary\":\"fade(@white, 30%)\"},{\"color\":\"@nui-color-text-highlight-platform_bar\",\"secondary\":\"@swi_orange\"},{\"color\":\"@nui-color-text-critical\",\"secondary\":\"@critical_red\"},{\"color\":\"@nui-color-text-ok\",\"secondary\":\"@ok_green\"},{\"color\":\"@nui-color-text-warning\",\"secondary\":\"@black\"}],\"lines\":[{\"color\":\"@nui-color-line-default\",\"secondary\":\"shade(@white, 15%)\"},{\"color\":\"@nui-color-line-default-hover\",\"secondary\":\"shade(@white, 30%)\"},{\"color\":\"@nui-color-line-default-transparent\",\"secondary\":\"fade(@black, 15%)\"},{\"color\":\"@nui-color-line-secondary\",\"secondary\":\"fade(@nui-color-line-default, 70%)\"},{\"color\":\"@nui-color-line-strong\",\"secondary\":\"shade(@white, 40%)\"},{\"color\":\"@nui-color-line-dark\",\"secondary\":\"shade(@white, 40%)\"},{\"color\":\"@nui-color-line-inverse\",\"secondary\":\"@white\"},{\"color\":\"@nui-color-line-highlight\",\"secondary\":\"@black\"},{\"color\":\"@nui-color-line-active\",\"secondary\":\"@primary_blue\"},{\"color\":\"@nui-color-line-critical\",\"secondary\":\"@critical_red\"},{\"color\":\"@nui-color-line-warning\",\"secondary\":\"@warning_yellow\"},{\"color\":\"@nui-color-line-info\",\"secondary\":\"@info_blue\"},{\"color\":\"@nui-color-line-ok\",\"secondary\":\"@ok_green\"},{\"color\":\"@nui-color-line-ok-secondary\",\"secondary\":\"fade(@ok_green, 40%)\"},{\"color\":\"@nui-color-line-ok-secondary-hover\",\"secondary\":\"fade(@ok_green, 50%)\"},{\"color\":\"@nui-color-line-selected-contrast\",\"secondary\":\"@cyan\"},{\"color\":\"@nui-color-line-threshold-critical\",\"secondary\":\"fade(@nui-color-line-critical, 60%)\"},{\"color\":\"@nui-color-line-threshold-warning\",\"secondary\":\"@nui-color-line-warning\"}],\"icons\":[{\"color\":\"@nui-color-icon-active\",\"secondary\":\"@primary_blue\"},{\"color\":\"@nui-color-icon-default\",\"secondary\":\"fade(@black, 50%)\"},{\"color\":\"@nui-color-icon-inverse\",\"secondary\":\"@white\"},{\"color\":\"@nui-color-icon-critical\",\"secondary\":\"@critical_red\"},{\"color\":\"@nui-color-icon-disabled\",\"secondary\":\"fade(@black, 30%)\"},{\"color\":\"@nui-color-icon-highlight-platform_bar\",\"secondary\":\"@swi_orange\"},{\"color\":\"@nui-color-icon-highlight\",\"secondary\":\"@black\"},{\"color\":\"@nui-color-icon-warning\",\"secondary\":\"@warning_yellow\"},{\"color\":\"@nui-color-icon-ok\",\"secondary\":\"@ok_green\"},{\"color\":\"@nui-color-icon-info\",\"secondary\":\"@info_blue\"}],\"overlays\":[{\"color\":\"@nui-color-overlay-modal\",\"secondary\":\"fade(@black, 50%)\"},{\"color\":\"@nui-color-overlay-busy\",\"secondary\":\"fade(@nui-color-bg-content, 90%)\"},{\"color\":\"@nui-color-overlay-busy-secondary\",\"secondary\":\"fade(@nui-color-bg-secondary, 90%)\"}],\"scrollbars\":[{\"color\":\"@nui-color-bg-scroll_handle_container\",\"secondary\":\"@transparent\"},{\"color\":\"@nui-color-bg-scroll_handle\",\"secondary\":\"fade(@black, 20%)\"},{\"color\":\"@nui-color-bg-scroll_handle-hover\",\"secondary\":\"fade(@black, 30%)\"}],\"brand\":[{\"color\":\"@nui-color-brand\",\"secondary\":\"@swi_orange\"},{\"color\":\"@nui-color-brand-hover\",\"secondary\":\"shade(@swi_orange, 10%)\"},{\"color\":\"@nui-color-brand-two\",\"secondary\":\"@swi_gray\"},{\"color\":\"@nui-color-brand-three\",\"secondary\":\"@swi_green\"},{\"color\":\"@nui-color-brand-four\",\"secondary\":\"@swi_yellow\"},{\"color\":\"@nui-color-brand-five\",\"secondary\":\"@swi_blue\"},{\"color\":\"@nui-color-brand-six\",\"secondary\":\"@swi_dark_gray\"},{\"color\":\"@nui-color-brand-seven\",\"secondary\":\"@swi_light_gray\"}],\"status and severity\":[{\"color\":\"@nui-color-semantic-down\",\"secondary\":\"@down_red\"},{\"color\":\"@nui-color-semantic-down-hover\",\"secondary\":\"shade(@down_red, 10%)\"},{\"color\":\"@nui-color-semantic-critical\",\"secondary\":\"@critical_red\"},{\"color\":\"@nui-color-semantic-critical-hover\",\"secondary\":\"shade(@critical_red, 10%)\"},{\"color\":\"@nui-color-semantic-critical-bg\",\"secondary\":\"tint(@critical_red, 90%)\"},{\"color\":\"@nui-color-semantic-critical-bg-hover\",\"secondary\":\"tint(@critical_red, 80%)\"},{\"color\":\"@nui-color-semantic-critical-bg-threshold\",\"secondary\":\"fade(@nui-color-semantic-critical, 30%)\"},{\"color\":\"@nui-color-semantic-warning\",\"secondary\":\"@warning_yellow\"},{\"color\":\"@nui-color-semantic-warning-hover\",\"secondary\":\"shade(@warning_yellow, 10%)\"},{\"color\":\"@nui-color-semantic-warning-bg\",\"secondary\":\"tint(@warning_yellow, 90%)\"},{\"color\":\"@nui-color-semantic-warning-bg-hover\",\"secondary\":\"tint(@warning_yellow, 80%)\"},{\"color\":\"@nui-color-semantic-warning-bg-threshold\",\"secondary\":\"fade(@nui-color-semantic-warning, 30%)\"},{\"color\":\"@nui-color-semantic-down-bg\",\"secondary\":\"tint(@down_red, 90%)\"},{\"color\":\"@nui-color-semantic-down-bg-hover\",\"secondary\":\"tint(@down_red, 80%)\"},{\"color\":\"@nui-color-semantic-ok\",\"secondary\":\"@ok_green\"},{\"color\":\"@nui-color-semantic-ok-hover\",\"secondary\":\"shade(@ok_green, 10%)\"},{\"color\":\"@nui-color-semantic-info\",\"secondary\":\"@info_blue\"},{\"color\":\"@nui-color-semantic-info-hover\",\"secondary\":\"shade(@info_blue, 10%)\"},{\"color\":\"@nui-color-semantic-unknown\",\"secondary\":\"@unknown_gray\"},{\"color\":\"@nui-color-semantic-unknown-hover\",\"secondary\":\"shade(@unknown_gray, 10%)\"},{\"color\":\"@nui-color-semantic-ok-bg\",\"secondary\":\"tint(@ok_green, 90%)\"},{\"color\":\"@nui-color-semantic-ok-bg-hover\",\"secondary\":\"tint(@ok_green, 80%)\"},{\"color\":\"@nui-color-semantic-info-bg\",\"secondary\":\"tint(@info_blue, 90%)\"},{\"color\":\"@nui-color-semantic-info-bg-hover\",\"secondary\":\"tint(@info_blue, 80%)\"},{\"color\":\"@nui-color-semantic-unknown-bg\",\"secondary\":\"tint(@unknown_gray, 90%)\"},{\"color\":\"@nui-color-semantic-unknown-bg-hover\",\"secondary\":\"tint(@unknown_gray, 80%)\"}],\"charts\":[{\"color\":\"@nui-color-chart-one-dark\",\"secondary\":\"shade(@chart-blue, 40%)\"},{\"color\":\"@nui-color-chart-two-dark\",\"secondary\":\"shade(@chart-pink, 40%)\"},{\"color\":\"@nui-color-chart-three-dark\",\"secondary\":\"shade(@chart-seagreen, 40%)\"},{\"color\":\"@nui-color-chart-four-dark\",\"secondary\":\"shade(@chart-violet, 40%)\"},{\"color\":\"@nui-color-chart-five-dark\",\"secondary\":\"shade(@chart-limegreen, 40%)\"},{\"color\":\"@nui-color-chart-six-dark\",\"secondary\":\"shade(@chart-orange, 40%)\"},{\"color\":\"@nui-color-chart-seven-dark\",\"secondary\":\"shade(@chart-ultramarine, 40%)\"},{\"color\":\"@nui-color-chart-eight-dark\",\"secondary\":\"shade(@chart-bordeaux, 40%)\"},{\"color\":\"@nui-color-chart-nine-dark\",\"secondary\":\"shade(@chart-ochroid, 40%)\"},{\"color\":\"@nui-color-chart-ten-dark\",\"secondary\":\"shade(@chart-anthracite, 40%)\"},{\"color\":\"@nui-color-chart-one\",\"secondary\":\"@chart-blue\"},{\"color\":\"@nui-color-chart-two\",\"secondary\":\"@chart-pink\"},{\"color\":\"@nui-color-chart-three\",\"secondary\":\"@chart-seagreen\"},{\"color\":\"@nui-color-chart-four\",\"secondary\":\"@chart-violet\"},{\"color\":\"@nui-color-chart-five\",\"secondary\":\"@chart-limegreen\"},{\"color\":\"@nui-color-chart-six\",\"secondary\":\"@chart-orange\"},{\"color\":\"@nui-color-chart-seven\",\"secondary\":\"@chart-ultramarine\"},{\"color\":\"@nui-color-chart-eight\",\"secondary\":\"@chart-bordeaux\"},{\"color\":\"@nui-color-chart-nine\",\"secondary\":\"@chart-ochroid\"},{\"color\":\"@nui-color-chart-ten\",\"secondary\":\"@chart-anthracite\"},{\"color\":\"@nui-color-chart-one-light\",\"secondary\":\"tint(@chart-blue, 60%)\"},{\"color\":\"@nui-color-chart-two-light\",\"secondary\":\"tint(@chart-pink, 60%)\"},{\"color\":\"@nui-color-chart-three-light\",\"secondary\":\"tint(@chart-seagreen, 60%)\"},{\"color\":\"@nui-color-chart-four-light\",\"secondary\":\"tint(@chart-violet, 60%)\"},{\"color\":\"@nui-color-chart-five-light\",\"secondary\":\"tint(@chart-limegreen, 60%)\"},{\"color\":\"@nui-color-chart-six-light\",\"secondary\":\"tint(@chart-orange, 60%)\"},{\"color\":\"@nui-color-chart-seven-light\",\"secondary\":\"tint(@chart-ultramarine, 60%)\"},{\"color\":\"@nui-color-chart-eight-light\",\"secondary\":\"tint(@chart-bordeaux, 60%)\"},{\"color\":\"@nui-color-chart-nine-light\",\"secondary\":\"tint(@chart-ochroid, 60%)\"},{\"color\":\"@nui-color-chart-ten-light\",\"secondary\":\"tint(@chart-anthracite, 60%)\"},{\"color\":\"@nui-color-chart-sum\",\"secondary\":\"@black\"},{\"color\":\"@nui-color-chart-percentile\",\"secondary\":\"fade(@black, 80%)\"},{\"color\":\"@nui-shadow-color\",\"secondary\":\"fade(@black, 30%)\"},{\"color\":\"@nui-shadow-color-stronger\",\"secondary\":\"fade(@black, 60%)\"}]}");
      /***/
    },

    /***/
    "e6Rz":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/static/framework-colors/framework-colors-example.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e6Rz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n    <nui-message type=\"info\" [allowDismiss]=\"false\">Clicking over the colors will copy the color's name.</nui-message>\n    <ng-container *ngFor=\"let section of colors | keyvalue\">\n        <div *ngIf=\"section.key !== 'default' && section.value.length\" class=\"mb-4\">\n            <h2 class=\"mb-3\">{{section.key | titlecase}}</h2>\n            <div class=\"d-flex flex-wrap ml-4\">\n                <div *ngFor=\"let colorItem of section.value | keyvalue: keyValueCompare;\"\n                     class=\"color-example-container d-flex flex-column mb-4\">\n                    <div class=\"color-example mb-1\"\n                         [ngClass]=\"colorItem.value.color | slice:1\"\n                         nuiClipboard\n                         [nuiClipboard]=\"colorItem.value.color\"\n                         (clipboardSuccess)=\"onClipboardSuccess()\"></div>\n                    <span class=\"nui-text-default mb-1\">{{colorItem.value.color}}</span>\n                    <span class=\"nui-text-small\">{{colorItem.value.secondary}}</span>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n</div>\n";
      /***/
    },

    /***/
    "hNp8":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/static/framework-colors/framework-colors-example.component.less ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hNp8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import (reference) \"../../../../src/styles/nui-framework-spaces.less\";\n@import (reference) \"../../../../src/styles/nui-framework-shadow.less\";\n@import \"../../../../src/styles/data/nui-framework-colors-docs.less\";\n\n.color-example-container {\n    width: 150px;\n    margin-right: @nui-space-md;\n}\n.color-example {\n    width: 100%;\n    height: 40px;\n    box-shadow: 0 0 5px 0 @nui-shadow-color;\n    box-shadow: @nui-shadow-default;\n    cursor: pointer;\n}\n";
      /***/
    },

    /***/
    "hSZW":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/static/links/links.example.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hSZW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"links-example\",\n    styleUrls: [\"links.example.component.less\"],\n    templateUrl: \"./links.example.component.html\",\n})\nexport class LinksExampleComponent {\n}\n";
      /***/
    },

    /***/
    "i04/":
    /*!****************************************************!*\
      !*** ./src/styles/data/framework-colors-dark.json ***!
      \****************************************************/

    /*! exports provided: backgrounds, effects and interactions, texts, lines, icons, overlays, scrollbars, brand, status and severity, charts, default */

    /***/
    function i04(module) {
      module.exports = JSON.parse("{\"backgrounds\":[{\"color\":\"@nui-color-bg-transparent\",\"secondary\":\"fade(@white, 0%)\"},{\"color\":\"@nui-color-bg-content\",\"secondary\":\"@base\"},{\"color\":\"@nui-color-bg-secondary\",\"secondary\":\"tint(@base, 4%)\"},{\"color\":\"@nui-color-bg-content_popover\",\"secondary\":\"tint(@base, 8%)\"},{\"color\":\"@nui-color-bg-workspace\",\"secondary\":\"shade(@base, 50%)\"},{\"color\":\"@nui-color-bg-table_header\",\"secondary\":\"tint(@base, 15%)\"},{\"color\":\"@nui-color-bg-accordion_header\",\"secondary\":\"fade(@white, 15%)\"},{\"color\":\"@nui-color-bg-accordion_header-hover\",\"secondary\":\"fade(@white, 20%)\"},{\"color\":\"@nui-color-bg-inverse\",\"secondary\":\"@white\"},{\"color\":\"@nui-color-bg-platformbar\",\"secondary\":\"@base\"},{\"color\":\"@nui-color-bg-platformbar_vertical\",\"secondary\":\"@base\"},{\"color\":\"@nui-color-bg-table_header-hover\",\"secondary\":\"tint(@base, 20%)\"},{\"color\":\"@nui-color-bg-inverse-hover\",\"secondary\":\"shade(@white, 10%)\"},{\"color\":\"@nui-color-bg-platformbar-hover\",\"secondary\":\"tint(@base, 5%)\"},{\"color\":\"@nui-color-bg-platformbar_vertical-hover\",\"secondary\":\"tint(@base, 5%)\"},{\"color\":\"@nui-color-bg-platformbar-secondary\",\"secondary\":\"shade(@black, 10%)\"},{\"color\":\"@nui-color-bg-platformbar-secondary-hover\",\"secondary\":\"@base\"}],\"effects and interactions\":[{\"color\":\"@nui-color-active\",\"secondary\":\"@primary-blue--dark\"},{\"color\":\"@nui-color-active-hover\",\"secondary\":\"tint(@primary-blue--dark, 30%)\"},{\"color\":\"@nui-color-selected\",\"secondary\":\"fade(@cyan,20%)\"},{\"color\":\"@nui-color-selected-hover\",\"secondary\":\"fade(@cyan, 30%)\"},{\"color\":\"@nui-color-selected-contrast\",\"secondary\":\"@cyan\"},{\"color\":\"@nui-color-selected-contrast-hover\",\"secondary\":\"tint(@cyan, 30%)\"},{\"color\":\"@nui-color-drag_selection\",\"secondary\":\"shade(@cyan, 40%)\"},{\"color\":\"@nui-color-on\",\"secondary\":\"@ok_green\"},{\"color\":\"@nui-color-off\",\"secondary\":\"tint(@base, 30%)\"},{\"color\":\"@nui-color-disabled\",\"secondary\":\"tint(@base, 20%)\"},{\"color\":\"@nui-color-disabled-secondary\",\"secondary\":\"tint(@base, 10%)\"},{\"color\":\"@nui-color-progress\",\"secondary\":\"@cyan\"},{\"color\":\"@nui-color-focus\",\"secondary\":\"fade(@cyan, 50%)\"},{\"color\":\"@nui-color-busy-default\",\"secondary\":\"fade(@cyan, 20%)\"},{\"color\":\"@nui-color-busy-destructive\",\"secondary\":\"fade(@critical_red--dark, 20%)\"},{\"color\":\"@nui-color-search_highlight\",\"secondary\":\"fade(@swi_orange, 30%)\"}],\"texts\":[{\"color\":\"@nui-color-text-default\",\"secondary\":\"@white\"},{\"color\":\"@nui-color-text-secondary\",\"secondary\":\"fade(@white, 50%)\"},{\"color\":\"@nui-color-text-link\",\"secondary\":\"@primary-blue--dark\"},{\"color\":\"@nui-color-text-link-inverse\",\"secondary\":\"@nui-color-text-link\"},{\"color\":\"@nui-color-text-disabled\",\"secondary\":\"fade(@white, 20%)\"},{\"color\":\"@nui-color-text-inverse\",\"secondary\":\"@base\"},{\"color\":\"@nui-color-text-inverse-disabled\",\"secondary\":\"@nui-color-text-disabled\"},{\"color\":\"@nui-color-text-inverse-secondary\",\"secondary\":\"fade(@base, 50%)\"},{\"color\":\"@nui-color-text-light\",\"secondary\":\"@white\"},{\"color\":\"@nui-color-text-highlight-platform_bar\",\"secondary\":\"@swi_orange\"},{\"color\":\"@nui-color-text-critical\",\"secondary\":\"@critical_red--dark\"},{\"color\":\"@nui-color-text-ok\",\"secondary\":\"@ok_green\"},{\"color\":\"@nui-color-text-warning\",\"secondary\":\"@black\"}],\"lines\":[{\"color\":\"@nui-color-line-default\",\"secondary\":\"tint(@base, 25%)\"},{\"color\":\"@nui-color-line-default-hover\",\"secondary\":\"tint(@base, 35%)\"},{\"color\":\"@nui-color-line-default-transparent\",\"secondary\":\"fade(@white, 25%)\"},{\"color\":\"@nui-color-line-secondary\",\"secondary\":\"fade(@nui-color-line-default, 70%)\"},{\"color\":\"@nui-color-line-strong\",\"secondary\":\"tint(@base, 40%)\"},{\"color\":\"@nui-color-line-highlight\",\"secondary\":\"@white\"},{\"color\":\"@nui-color-line-dark\",\"secondary\":\"@pure_black\"},{\"color\":\"@nui-color-line-inverse\",\"secondary\":\"@white\"},{\"color\":\"@nui-color-line-active\",\"secondary\":\"@primary-blue--dark\"},{\"color\":\"@nui-color-line-critical\",\"secondary\":\"@critical_red--dark\"},{\"color\":\"@nui-color-line-warning\",\"secondary\":\"@warning_yellow\"},{\"color\":\"@nui-color-line-info\",\"secondary\":\"@info_blue\"},{\"color\":\"@nui-color-line-ok\",\"secondary\":\"@ok_green\"},{\"color\":\"@nui-color-line-ok-secondary\",\"secondary\":\"fade(@ok_green, 30%)\"},{\"color\":\"@nui-color-line-ok-secondary-hover\",\"secondary\":\"fade(@ok_green, 40%)\"},{\"color\":\"@nui-color-line-selected-contrast\",\"secondary\":\"@cyan\"},{\"color\":\"@nui-color-line-threshold-critical\",\"secondary\":\"fade(@nui-color-line-critical, 40%)\"},{\"color\":\"@nui-color-line-threshold-warning\",\"secondary\":\"fade(@nui-color-line-warning, 40%)\"}],\"icons\":[{\"color\":\"@nui-color-icon-active\",\"secondary\":\"@primary-blue--dark\"},{\"color\":\"@nui-color-icon-default\",\"secondary\":\"tint(@base, 50%)\"},{\"color\":\"@nui-color-icon-inverse\",\"secondary\":\"@white\"},{\"color\":\"@nui-color-icon-disabled\",\"secondary\":\"tint(@base, 20%)\"},{\"color\":\"@nui-color-icon-highlight-platform_bar\",\"secondary\":\"@swi_orange\"},{\"color\":\"@nui-color-icon-highlight\",\"secondary\":\"@white\"},{\"color\":\"@nui-color-icon-critical\",\"secondary\":\"@critical_red--dark\"},{\"color\":\"@nui-color-icon-warning\",\"secondary\":\"@warning_yellow\"},{\"color\":\"@nui-color-icon-ok\",\"secondary\":\"@ok_green\"},{\"color\":\"@nui-color-icon-info\",\"secondary\":\"@info_blue\"}],\"overlays\":[{\"color\":\"@nui-color-overlay-modal\",\"secondary\":\"fade(@black, 80%)\"},{\"color\":\"@nui-color-overlay-busy\",\"secondary\":\"fade(@nui-color-bg-content, 90%)\"},{\"color\":\"@nui-color-overlay-busy-secondary\",\"secondary\":\"fade(@nui-color-bg-secondary, 90%)\"}],\"scrollbars\":[{\"color\":\"@nui-color-bg-scroll_handle_container\",\"secondary\":\"@transparent\"},{\"color\":\"@nui-color-bg-scroll_handle\",\"secondary\":\"fade(@white, 20%)\"},{\"color\":\"@nui-color-bg-scroll_handle-hover\",\"secondary\":\"fade(@white, 30%)\"}],\"brand\":[{\"color\":\"@nui-color-brand\",\"secondary\":\"@swi_orange\"},{\"color\":\"@nui-color-brand-hover\",\"secondary\":\"tint(@swi_orange, 20%)\"},{\"color\":\"@nui-color-brand-two\",\"secondary\":\"@swi_gray\"},{\"color\":\"@nui-color-brand-three\",\"secondary\":\"@swi_green\"},{\"color\":\"@nui-color-brand-four\",\"secondary\":\"@swi_yellow\"},{\"color\":\"@nui-color-brand-five\",\"secondary\":\"@swi_blue\"},{\"color\":\"@nui-color-brand-six\",\"secondary\":\"@swi_dark_gray\"},{\"color\":\"@nui-color-brand-seven\",\"secondary\":\"@swi_light_gray\"}],\"status and severity\":[{\"color\":\"@nui-color-semantic-down\",\"secondary\":\"@down_red\"},{\"color\":\"@nui-color-semantic-down-hover\",\"secondary\":\"tint(@down_red, 20%)\"},{\"color\":\"@nui-color-semantic-critical\",\"secondary\":\"@critical_red--dark\"},{\"color\":\"@nui-color-semantic-critical-hover\",\"secondary\":\"tint(@critical_red--dark, 20%)\"},{\"color\":\"@nui-color-semantic-warning\",\"secondary\":\"@warning_yellow\"},{\"color\":\"@nui-color-semantic-warning-hover\",\"secondary\":\"tint(@warning_yellow, 20%)\"},{\"color\":\"@nui-color-semantic-down-bg\",\"secondary\":\"shade(@down_red, 80%)\"},{\"color\":\"@nui-color-semantic-down-bg-hover\",\"secondary\":\"shade(@down_red, 70%)\"},{\"color\":\"@nui-color-semantic-critical-bg\",\"secondary\":\"shade(@critical_red--dark, 80%)\"},{\"color\":\"@nui-color-semantic-critical-bg-hover\",\"secondary\":\"shade(@critical_red--dark, 70%)\"},{\"color\":\"@nui-color-semantic-warning-bg\",\"secondary\":\"shade(@warning_yellow, 80%)\"},{\"color\":\"@nui-color-semantic-warning-bg-hover\",\"secondary\":\"shade(@warning_yellow, 70%)\"},{\"color\":\"@nui-color-semantic-ok\",\"secondary\":\"@ok_green\"},{\"color\":\"@nui-color-semantic-ok-hover\",\"secondary\":\"tint(@ok_green, 20%)\"},{\"color\":\"@nui-color-semantic-info\",\"secondary\":\"@info_blue\"},{\"color\":\"@nui-color-semantic-info-hover\",\"secondary\":\"tint(@info_blue, 20%)\"},{\"color\":\"@nui-color-semantic-unknown\",\"secondary\":\"@unknown_gray\"},{\"color\":\"@nui-color-semantic-unknown-hover\",\"secondary\":\"tint(@unknown_gray, 20%)\"},{\"color\":\"@nui-color-semantic-ok-bg\",\"secondary\":\"shade(@ok_green, 80%)\"},{\"color\":\"@nui-color-semantic-ok-bg-hover\",\"secondary\":\"shade(@ok_green, 70%)\"},{\"color\":\"@nui-color-semantic-info-bg\",\"secondary\":\"shade(@info_blue, 80%)\"},{\"color\":\"@nui-color-semantic-info-bg-hover\",\"secondary\":\"shade(@info_blue, 70%)\"},{\"color\":\"@nui-color-semantic-unknown-bg\",\"secondary\":\"shade(@unknown_gray, 80%)\"},{\"color\":\"@nui-color-semantic-unknown-bg-hover\",\"secondary\":\"shade(@unknown_gray, 70%)\"},{\"color\":\"@nui-color-semantic-bg-critical-threshold\",\"secondary\":\"fade(@critical_red--dark, 20%)\"},{\"color\":\"@nui-color-semantic-bg-warning-threshold\",\"secondary\":\"fade(@warning_yellow, 20%)\"}],\"charts\":[{\"color\":\"@nui-color-chart-one-dark\",\"secondary\":\"shade(@chart-blue, 40%)\"},{\"color\":\"@nui-color-chart-two-dark\",\"secondary\":\"shade(@chart-pink, 40%)\"},{\"color\":\"@nui-color-chart-three-dark\",\"secondary\":\"shade(@chart-seagreen, 40%)\"},{\"color\":\"@nui-color-chart-four-dark\",\"secondary\":\"shade(@chart-violet, 40%)\"},{\"color\":\"@nui-color-chart-five-dark\",\"secondary\":\"shade(@chart-limegreen, 40%)\"},{\"color\":\"@nui-color-chart-six-dark\",\"secondary\":\"shade(@chart-orange, 40%)\"},{\"color\":\"@nui-color-chart-seven-dark\",\"secondary\":\"shade(@chart-ultramarine, 40%)\"},{\"color\":\"@nui-color-chart-eight-dark\",\"secondary\":\"shade(@chart-bordeaux, 40%)\"},{\"color\":\"@nui-color-chart-nine-dark\",\"secondary\":\"shade(@chart-ochroid, 40%)\"},{\"color\":\"@nui-color-chart-ten-dark\",\"secondary\":\"shade(@chart-anthracite, 40%)\"},{\"color\":\"@nui-color-chart-one\",\"secondary\":\"@chart-blue\"},{\"color\":\"@nui-color-chart-two\",\"secondary\":\"@chart-pink\"},{\"color\":\"@nui-color-chart-three\",\"secondary\":\"@chart-seagreen\"},{\"color\":\"@nui-color-chart-four\",\"secondary\":\"@chart-violet\"},{\"color\":\"@nui-color-chart-five\",\"secondary\":\"@chart-limegreen\"},{\"color\":\"@nui-color-chart-six\",\"secondary\":\"@chart-orange\"},{\"color\":\"@nui-color-chart-seven\",\"secondary\":\"@chart-ultramarine\"},{\"color\":\"@nui-color-chart-eight\",\"secondary\":\"@chart-bordeaux\"},{\"color\":\"@nui-color-chart-nine\",\"secondary\":\"@chart-ochroid\"},{\"color\":\"@nui-color-chart-ten\",\"secondary\":\"@chart-anthracite\"},{\"color\":\"@nui-color-chart-one-light\",\"secondary\":\"tint(@chart-blue, 50%)\"},{\"color\":\"@nui-color-chart-two-light\",\"secondary\":\"tint(@chart-pink, 50%)\"},{\"color\":\"@nui-color-chart-three-light\",\"secondary\":\"tint(@chart-seagreen, 50%)\"},{\"color\":\"@nui-color-chart-four-light\",\"secondary\":\"tint(@chart-violet, 50%)\"},{\"color\":\"@nui-color-chart-five-light\",\"secondary\":\"tint(@chart-limegreen, 50%)\"},{\"color\":\"@nui-color-chart-six-light\",\"secondary\":\"tint(@chart-orange, 50%)\"},{\"color\":\"@nui-color-chart-seven-light\",\"secondary\":\"tint(@chart-ultramarine, 50%)\"},{\"color\":\"@nui-color-chart-eight-light\",\"secondary\":\"tint(@chart-bordeaux, 50%)\"},{\"color\":\"@nui-color-chart-nine-light\",\"secondary\":\"tint(@chart-ochroid, 50%)\"},{\"color\":\"@nui-color-chart-ten-light\",\"secondary\":\"tint(@chart-anthracite, 50%)\"},{\"color\":\"@nui-color-chart-sum\",\"secondary\":\"@white\"},{\"color\":\"@nui-color-chart-percentile\",\"secondary\":\"fade(@white, 80%)\"},{\"color\":\"@nui-shadow-color-stronger\",\"secondary\":\"@pure_black\"},{\"color\":\"@nui-shadow-color\",\"secondary\":\"fade(@pure_black, 90%)\"}]}");
      /***/
    },

    /***/
    "nzAA":
    /*!********************************************************************!*\
      !*** ./demo/src/static/typography/typography-example.component.ts ***!
      \********************************************************************/

    /*! exports provided: TypographyExampleComponent */

    /***/
    function nzAA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyExampleComponent", function () {
        return TypographyExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../src/lib/expander/expander.component */
      "j4OC");
      /* harmony import */


      var _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../src/lib/divider/divider.component */
      "UGtJ");

      var TypographyExampleComponent = function TypographyExampleComponent() {
        _classCallCheck(this, TypographyExampleComponent);
      };

      TypographyExampleComponent.ɵfac = function TypographyExampleComponent_Factory(t) {
        return new (t || TypographyExampleComponent)();
      };

      TypographyExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TypographyExampleComponent,
        selectors: [["typography-example"]],
        decls: 400,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_0 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_2 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_4 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_6 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_8 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_10 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_13 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_12 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_13;
          } else {
            i18n_12 = $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_15 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_14 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_15;
          } else {
            i18n_14 = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_16;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_17 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_16 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_17;
          } else {
            i18n_16 = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_18;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_19 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_18 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_19;
          } else {
            i18n_18 = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_20;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_21 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_20 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_21;
          } else {
            i18n_20 = $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_22;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_23 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_22 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_23;
          } else {
            i18n_22 = $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_24;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_25 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_24 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_25;
          } else {
            i18n_24 = $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_26;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_27 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_26 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_27;
          } else {
            i18n_26 = $localize(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_28;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_29 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_28 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_29;
          } else {
            i18n_28 = $localize(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_30;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_31 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_30 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_31;
          } else {
            i18n_30 = $localize(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_32;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_33 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_32 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_33;
          } else {
            i18n_32 = $localize(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_34;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_35 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_34 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_35;
          } else {
            i18n_34 = $localize(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_36;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_37 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_36 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_37;
          } else {
            i18n_36 = $localize(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_38;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_39 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_38 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_39;
          } else {
            i18n_38 = $localize(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_40;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_41 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_40 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_41;
          } else {
            i18n_40 = $localize(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_42;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_43 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_42 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_43;
          } else {
            i18n_42 = $localize(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_44;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_920732120847515107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_45 = goog.getMsg("Secondary Title");
            i18n_44 = MSG_EXTERNAL_920732120847515107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_45;
          } else {
            i18n_44 = $localize(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral([":\u241F042073d429b1ca259903b5afa34bdcee02135d3d\u241F920732120847515107:Secondary Title"])));
          }

          var i18n_46;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_920732120847515107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_47 = goog.getMsg("Secondary Title");
            i18n_46 = MSG_EXTERNAL_920732120847515107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_47;
          } else {
            i18n_46 = $localize(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral([":\u241F042073d429b1ca259903b5afa34bdcee02135d3d\u241F920732120847515107:Secondary Title"])));
          }

          var i18n_48;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_920732120847515107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_49 = goog.getMsg("Secondary Title");
            i18n_48 = MSG_EXTERNAL_920732120847515107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_49;
          } else {
            i18n_48 = $localize(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral([":\u241F042073d429b1ca259903b5afa34bdcee02135d3d\u241F920732120847515107:Secondary Title"])));
          }

          var i18n_50;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_51 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_50 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_51;
          } else {
            i18n_50 = $localize(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_52;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_53 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_52 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_53;
          } else {
            i18n_52 = $localize(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_54;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_55 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_54 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_55;
          } else {
            i18n_54 = $localize(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_56;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_57 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_56 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_57;
          } else {
            i18n_56 = $localize(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_58;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_59 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_58 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_59;
          } else {
            i18n_58 = $localize(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_60;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_61 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_60 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_61;
          } else {
            i18n_60 = $localize(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_62;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_63 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_62 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_63;
          } else {
            i18n_62 = $localize(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_64;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5418526789953343231$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_65 = goog.getMsg("Validation Text");
            i18n_64 = MSG_EXTERNAL_5418526789953343231$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_65;
          } else {
            i18n_64 = $localize(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral([":\u241Ffaba39fe90c0c0424b957d13292b7b8c8b695242\u241F5418526789953343231:Validation Text"])));
          }

          var i18n_66;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1595262181279480965$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_67 = goog.getMsg("The list is not complete. There are more of possible decorated fonts, these are just examples.");
            i18n_66 = MSG_EXTERNAL_1595262181279480965$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_67;
          } else {
            i18n_66 = $localize(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral([":\u241Fb5144b41710f0aeecd30ab435da152bc9e51c02f\u241F1595262181279480965:The list is not complete. There are more of possible decorated fonts, these are just examples."])));
          }

          var i18n_68;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_69 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_68 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_69;
          } else {
            i18n_68 = $localize(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_70;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_71 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_70 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_71;
          } else {
            i18n_70 = $localize(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_72;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_73 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_72 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_73;
          } else {
            i18n_72 = $localize(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_74;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_75 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_74 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_75;
          } else {
            i18n_74 = $localize(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_76;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_77 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_76 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_77;
          } else {
            i18n_76 = $localize(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_78;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_79 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_78 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_79;
          } else {
            i18n_78 = $localize(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_80;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_81 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_80 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_81;
          } else {
            i18n_80 = $localize(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          var i18n_82;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_83 = goog.getMsg("Lorem ipsum dolor sit amet");
            i18n_82 = MSG_EXTERNAL_6326435920628436107$$DEMO_SRC_STATIC_TYPOGRAPHY_TYPOGRAPHY_EXAMPLE_COMPONENT_TS_83;
          } else {
            i18n_82 = $localize(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral([":\u241F7f39e2a6277992a1f4a1673f0604a9596c1bd5d1\u241F6326435920628436107:Lorem ipsum dolor sit amet"])));
          }

          return [[1, "mb-3"], [1, "mb-2"], ["header", "Use mixin"], [2, "text-indent", "20px"], ["header", "Use stylesheet file"], [1, "dark-bg-rectangle"], [1, "nui-text-product", "ml-2"], i18n_0, ["size", "small"], [1, "nui-text-page", "ml-2"], i18n_2, [1, "nui-text-widget", "ml-2"], i18n_4, [1, "nui-text-panel", "ml-2"], i18n_6, [1, "nui-text-panel--inverse", "ml-2"], i18n_8, [1, "nui-text-panel--darkbg", "ml-2"], i18n_10, [1, "nui-text-label", "ml-2"], i18n_12, [1, "nui-text-label--inverse", "ml-2"], i18n_14, [1, "nui-text-label--darkbg", "ml-2"], i18n_16, [1, "nui-text-default", "ml-2"], i18n_18, [1, "nui-text-default--inverse", "ml-2"], i18n_20, [1, "nui-text-default--inverse-selected", "ml-2"], i18n_22, [1, "nui-text-default--darkbg", "ml-2"], i18n_24, [1, "nui-text-disabled", "ml-2"], i18n_26, [1, "nui-text-default--darkbg-selected", "ml-2"], i18n_28, [1, "nui-text-secondary", "ml-2"], i18n_30, [1, "nui-text-secondary--inverse", "ml-2"], i18n_32, [1, "nui-text-secondary--darkbg", "ml-2"], i18n_34, [1, "nui-text-secondary--disabled", "ml-2"], i18n_36, [1, "nui-text-link", "ml-2"], i18n_38, [1, "nui-text-source-code", "ml-2"], i18n_40, [1, "nui-text-source-code-secondary", "ml-2"], i18n_42, [1, "nui-text-title-secondary", "ml-2"], i18n_44, [1, "nui-text-title-secondary--inverse", "ml-2"], i18n_46, [1, "nui-text-title-secondary--darkbg", "ml-2"], i18n_48, [1, "nui-text-small", "ml-2"], i18n_50, [1, "nui-text-small--inverse", "ml-2"], i18n_52, [1, "nui-text-small-secondary", "ml-2"], i18n_54, [1, "nui-text-small-secondary--inverse", "ml-2"], i18n_56, [1, "nui-text-small--darkbg", "ml-2"], i18n_58, [1, "nui-text-small--disabled", "ml-2"], i18n_60, [1, "nui-text-link-small", "ml-2"], i18n_62, [1, "nui-text-validation", "ml-2"], i18n_64, [1, "nui-text-small-secondary"], i18n_66, [1, "nui-text-page--hoverable", "ml-2"], i18n_68, [1, "nui-text-widget--hoverable", "ml-2"], i18n_70, [1, "nui-text-default--hoverable", "ml-2"], i18n_72, [1, "nui-text-secondary--hoverable", "ml-2"], i18n_74, [1, "nui-text-small--hoverable", "ml-2"], i18n_76, [1, "nui-text-small--inverse--hoverable", "ml-2"], i18n_78, [1, "nui-text-small-secondary--hoverable", "ml-2"], i18n_80, [1, "nui-text-small--darkbg--hoverable", "ml-2"], i18n_82];
        },
        template: function TypographyExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Specific Text Styles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Core IT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".nui-text-product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This style uses ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Roboto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " font, however, Nova Bits styles do not include it. You can easily add it in following ways:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nui-expander", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Import ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "font-roboto.less");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " directly like ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "@import \"@nova-ui/bits/sdk/less/mixins/font-roboto.less\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ".font-roboto()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " mixin to load Roboto font ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Mixin Example: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " .font-roboto();");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " .css-class { ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " font-family: @font-family-roboto; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " } ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nui-expander", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Find the compiled stylesheet file under the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "@nova-ui/bits/bundles/css/styles-font-roboto.css");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Add it to angular.json to set Roboto font globally, or use it locally by importing the file into the stylesheet where this font is needed. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Angular.json Example: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \"styles\": [ ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \"[path_to_node_modules]/@nova-ui/bits/bundles/css/styles-font-roboto.css\" ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " ], ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](56, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Page Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ".nui-text-page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](64, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Widget Text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, ".nui-text-widget");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](72, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Panel Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, ".nui-text-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](80, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Panel Title Inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, ".nui-text-panel--inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](89, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Panel Title for Dark Bg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, ".nui-text-panel--darkbg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](98, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Label Text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, ".nui-text-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](106, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Label Text Inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, ".nui-text-label--inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](115, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Label Text for Dark Bg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, ".nui-text-label--darkbg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](124, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Default Text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, ".nui-text-default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](132, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Default Text Inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, ".nui-text-default--inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](141, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Default Text Inverse Selected");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, ".nui-text-default--inverse-selected");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](150, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Default Text for Dark Bg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, ".nui-text-default--darkbg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](159, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Disabled Text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, ".nui-text-disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](167, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Selected Default Text for Dark Bg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, ".nui-text-default--darkbg-selected");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](176, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Secondary Text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, ".nui-text-secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](184, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Secondary Text Inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, ".nui-text-secondary--inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](193, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Secondary Text for Dark Bg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, ".nui-text-secondary--darkbg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](202, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Secondary Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, ".nui-text-secondary--disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](210, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, ".nui-text-link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](218, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Source Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, ".nui-text-source-code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](226, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Source Code Secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, ".nui-text-source-code-secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](234, 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Secondary Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, ".nui-text-title-secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](242, 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Secondary Title Inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, ".nui-text-title-secondary--inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "span", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](251, 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Secondary Title for Dark Bg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, ".nui-text-title-secondary--darkbg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](260, 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Small Text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, ".nui-text-small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](268, 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Small Text Inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, ".nui-text-small--inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "span", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](277, 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Small Text Secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, ".nui-text-small-secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](285, 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Small Text Secondary Inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, ".nui-text-small-secondary--inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](294, 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Small Text for Dark Bg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, ".nui-text-small--darkbg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](303, 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Small Text Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, ".nui-text-small--disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](311, 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Link Small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, ".nui-text-link-small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "span", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](319, 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Validation Text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, ".nui-text-validation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "span", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](327, 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Text Decoration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](333, 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Text Page Hoverable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, ".nui-text-page--hoverable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](340, 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Text Widget Hoverable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, ".nui-text-widget--hoverable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](348, 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Default Text Hoverable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, ".nui-text-default--hoverable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "span", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](356, 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Secondary Text Hoverable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, ".nui-text-secondary--hoverable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "span", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](364, 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Small Text Hoverable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, ".nui-text-small--hoverable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "span", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](372, 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Small Text Inverse Hoverable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, ".nui-text-small--inverse--hoverable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "span", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](381, 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Small Secondary Text Hoverable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, ".nui-text-small-secondary--hoverable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "span", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](389, 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "nui-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Small Text Hoverable for Dark Bg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, ".nui-text-small--darkbg--hoverable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "span", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](398, 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](399, "nui-divider", 8);
          }
        },
        directives: [_src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__["ExpanderComponent"], _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_2__["DividerComponent"]],
        styles: [".dark-bg-rectangle[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #111;\n    height: 40px;\n    width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cG9ncmFwaHktZXhhbXBsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Q0FHQztBQUNEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0FBQ2hCIiwiZmlsZSI6InR5cG9ncmFwaHktZXhhbXBsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBJdCB3YXMgdHVybmVkIHRvIGJlIGp1c3QgYSBgLmNzc2AsIGJlY2F1c2UgbGVzcyBmYWlscyB0byBidWlsZCBgLm1hcGAgZmlsZSBmb3IgaXRcbiAgICBodHRwczovL2dpdGh1Yi5jb20vbGVzcy9sZXNzLmpzL3B1bGwvMzM2MFxuKi9cbi5kYXJrLWJnLXJlY3RhbmdsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "psrh":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/static/semantic-variables/semantic-variables.example.component.less ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function psrh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import \"../../../../src/styles/nui-framework-variables\";\n@rectHeight: 25px;\n@rectShadow: rgba(17, 17, 17, 0.3);\n.examples {\n    color: #FF0000;\n    font-family: \"Open Sans\";\n    font-size: 12px;\n\n    width: 150px;\n\n    .black {\n        color: @black;\n    }\n\n    .examples-font-weight {\n        width: 300px;\n        .font-weight {\n            &-light {\n                width: inherit;\n                font-weight: @nui-font-weight-light;\n            }\n            &-regular {\n                width: inherit;\n                font-weight: @nui-font-weight-regular;\n            }\n            &-semibold {\n                width: inherit;\n                font-weight: @nui-font-weight-semibold;\n            }\n            &-bold {\n                width: inherit;\n                font-weight: @nui-font-weight-bold;\n            }\n        }\n    }\n\n    .examples-font-size {\n        width: 300px;\n        .font-size {\n            &-hero {\n                width: inherit;\n                font-size: @nui-font-size-hero;\n            }\n            &-big {\n                width: inherit;\n                font-size: @nui-font-size-big;\n            }\n            &-default {\n                width: inherit;\n                font-size: @nui-font-size-default;\n            }\n            &-small {\n                width: inherit;\n                font-size: @nui-font-size-small;\n            }\n        }\n    }\n\n    .examples-icon-size {\n        width: 300px;\n        .icon-size {\n            &-medium {\n                width: inherit;\n                height: @icon-size-medium;\n                width: @icon-size-medium;\n                border: 1px solid #FF0000;\n            }\n            &-default {\n                width: inherit;\n                height: @icon-size-default;\n                width: @icon-size-default;\n                border: 1px solid #FF0000;\n            }\n            &-small {\n                width: inherit;\n                height: @icon-size-small;\n                width: @icon-size-small;\n                border: 1px solid #FF0000;\n            }\n        }\n    }\n\n    .space {\n        &-m {\n            background-color: rgba(100%, 0, 0, 0.2);\n            width: @nui-space-md;\n            height: @rectHeight;\n        }\n        &-s {\n            background-color: rgba(97.6%,61.6%,11%, 0.2);\n            width: @nui-space-sm;\n            height: @rectHeight;\n        }\n        &-xs {\n            background-color: rgba(18.8%,69.8%,18.8%, 0.2);\n            width: @nui-space-xs;\n            height: @rectHeight;\n        }\n        &-xxs {\n            background-color: rgba(0%,59.2%,92.2%, 0.2);\n            width: @nui-space-xxs;\n            height: @rectHeight;\n        }\n    }\n\n    .examples-line-thickness {\n        width: 150px;\n        .line {\n            width: 100px;\n            background-color: #FF0000;\n            &-default {\n                height: 1px;\n            }\n            &-medium{\n                height: 2px;\n            }\n            &-thick {\n                height: 3px;\n            }\n            &-fat {\n                height: 4px;\n            }\n        }\n    }\n\n    .rect-with-radius {\n        background-color: #FF0000;\n        border-radius: @nui-radius-default;\n        width: 30px;\n        height: 30px;\n    }\n}\n.spacing-hints {\n    .color-black {\n        color: black;\n    }\n}\n\n.shadow-rectangle {\n    width: 300px;\n    height: 100px;\n    margin: 10px;\n    padding: 20%;\n    &.shadow-default {\n        box-shadow: @nui-shadow-default;\n    }\n    &.shadow-elevated {\n        box-shadow: @nui-shadow-elevated;\n    }\n    &.shadow-stronger {\n        box-shadow: @nui-shadow-stronger;\n    }\n    &.shadow-inner {\n        box-shadow: @nui-shadow-inner;\n    }\n    &.shadow-inner-top {\n        box-shadow: @nui-shadow-inner-top;\n    }\n    &.shadow-inner-top-bottom {\n        box-shadow: @nui-shadow-inner-top-bottom;\n    }\n    &.shadow-inner-bottom {\n        box-shadow: @nui-shadow-inner-bottom;\n    }\n    &.shadow-inner-left {\n        box-shadow: @nui-shadow-inner-left;\n    }\n    &.shadow-inner-right {\n        box-shadow: @nui-shadow-inner-right;\n    }\n    &.shadow-inner-left-right {\n        box-shadow: @nui-shadow-inner-left-right;\n    }\n    &.scroll-shadow {\n        height: 150px;\n        overflow-y: auto;\n        overflow-x: hidden;\n        padding: 2%;\n    }\n    &.horizontal {\n        padding: 2%;\n        overflow-y: hidden;\n        overflow-x: auto;\n        white-space: nowrap;\n    }\n}\n.example-text {\n    width: 500px;\n}\n";
      /***/
    },

    /***/
    "rXNR":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/static/framework-colors-dark/framework-colors-dark.example.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rXNR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n    <nui-message type=\"info\" [allowDismiss]=\"false\">Clicking over the colors will copy the color's name.</nui-message>\n    <ng-container *ngFor=\"let section of colors | keyvalue\">\n        <div *ngIf=\"section.key !== 'default'\" class=\"mb-4\">\n            <h2 class=\"mb-3\">{{section.key | titlecase}}</h2>\n            <div class=\"d-flex flex-wrap ml-4\">\n                <div *ngFor=\"let colorItem of section.value | keyvalue: keyValueCompare;\"\n                     class=\"color-example-container d-flex flex-column mb-4\">\n                    <div class=\"color-example mb-1\"\n                         [ngClass]=\"colorItem.value.color | slice:1\"\n                         nuiClipboard\n                         [nuiClipboard]=\"colorItem.value.color\"\n                         (clipboardSuccess)=\"onClipboardSuccess()\"></div>\n                    <span class=\"nui-text-default mb-1\">{{colorItem.value.color}}</span>\n                    <span class=\"nui-text-small\">{{colorItem.value.secondary}}</span>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n</div>\n";
      /***/
    },

    /***/
    "ruUO":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/static/framework-colors-dark/framework-colors-dark.example.component.ts ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ruUO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n/* eslint-disable-next-line */\nimport { default as colors } from \"../../../../src/styles/data/framework-colors-dark.json\";\n\n@Component({\n    selector: \"framework-colors-dark.example\",\n    styleUrls: [\"./framework-colors-dark.example.component.less\"],\n    templateUrl: \"./framework-colors-dark.example.component.html\",\n})\nexport class FrameworkColorsDarkExampleComponent {\n    public colors = colors;\n    constructor(private toastService: ToastService) {}\n\n    public onClipboardSuccess() {\n        this.toastService.success({\n            message: $localize `Color successfully copied to clipboard`,\n        });\n    }\n\n    public keyValueCompare(a: any, b: any) {\n        return parseInt(a.key, 10) - parseInt(b.key, 10);\n    }\n}\n";
      /***/
    },

    /***/
    "x2OK":
    /*!******************************************************************************************!*\
      !*** ./demo/src/static/framework-colors-dark/framework-colors-dark.example.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: FrameworkColorsDarkExampleComponent */

    /***/
    function x2OK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FrameworkColorsDarkExampleComponent", function () {
        return FrameworkColorsDarkExampleComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _src_styles_data_framework_colors_dark_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../src/styles/data/framework-colors-dark.json */
      "i04/");

      var _src_styles_data_framework_colors_dark_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../src/styles/data/framework-colors-dark.json */
      "i04/", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../src/lib/message/message.component */
      "4pDv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_common_directives_clipboard_clipboard_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../src/common/directives/clipboard/clipboard.directive */
      "eJM4");
      /* eslint-disable-next-line */


      var _c0 = ["class", "example"];

      function FrameworkColorsDarkExampleComponent_ng_container_3_div_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clipboardSuccess", function FrameworkColorsDarkExampleComponent_ng_container_3_div_1_div_5_Template_div_clipboardSuccess_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r5.onClipboardSuccess();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var colorItem_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 4, colorItem_r4.value.color, 1))("nuiClipboard", colorItem_r4.value.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](colorItem_r4.value.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](colorItem_r4.value.secondary);
        }
      }

      function FrameworkColorsDarkExampleComponent_ng_container_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FrameworkColorsDarkExampleComponent_ng_container_3_div_1_div_5_Template, 7, 7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var section_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, section_r1.key));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 4, section_r1.value, ctx_r2.keyValueCompare));
        }
      }

      function FrameworkColorsDarkExampleComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FrameworkColorsDarkExampleComponent_ng_container_3_div_1_Template, 7, 7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var section_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", section_r1.key !== "default");
        }
      }

      var FrameworkColorsDarkExampleComponent = /*#__PURE__*/function () {
        function FrameworkColorsDarkExampleComponent(toastService) {
          _classCallCheck(this, FrameworkColorsDarkExampleComponent);

          this.toastService = toastService;
          this.colors = _src_styles_data_framework_colors_dark_json__WEBPACK_IMPORTED_MODULE_1__;
        }

        _createClass(FrameworkColorsDarkExampleComponent, [{
          key: "onClipboardSuccess",
          value: function onClipboardSuccess() {
            this.toastService.success({
              message: $localize(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["Color successfully copied to clipboard"])))
            });
          }
        }, {
          key: "keyValueCompare",
          value: function keyValueCompare(a, b) {
            return parseInt(a.key, 10) - parseInt(b.key, 10);
          }
        }]);

        return FrameworkColorsDarkExampleComponent;
      }();

      FrameworkColorsDarkExampleComponent.ɵfac = function FrameworkColorsDarkExampleComponent_Factory(t) {
        return new (t || FrameworkColorsDarkExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      FrameworkColorsDarkExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: FrameworkColorsDarkExampleComponent,
        selectors: [["framework-colors-dark", 8, "example"]],
        attrs: _c0,
        decls: 5,
        vars: 4,
        consts: [["type", "info", 3, "allowDismiss"], [4, "ngFor", "ngForOf"], ["class", "mb-4", 4, "ngIf"], [1, "mb-4"], [1, "mb-3"], [1, "d-flex", "flex-wrap", "ml-4"], ["class", "color-example-container d-flex flex-column mb-4", 4, "ngFor", "ngForOf"], [1, "color-example-container", "d-flex", "flex-column", "mb-4"], ["nuiClipboard", "", 1, "color-example", "mb-1", 3, "ngClass", "nuiClipboard", "clipboardSuccess"], [1, "nui-text-default", "mb-1"], [1, "nui-text-small"]],
        template: function FrameworkColorsDarkExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Clicking over the colors will copy the color's name.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FrameworkColorsDarkExampleComponent_ng_container_3_Template, 2, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "keyvalue");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, ctx.colors));
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _src_common_directives_clipboard_clipboard_directive__WEBPACK_IMPORTED_MODULE_5__["ClipboardDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]],
        styles: [".nui-color-bg-transparent[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n}\n.nui-color-bg-content[_ngcontent-%COMP%] {\n  background: #222;\n}\n.nui-color-bg-secondary[_ngcontent-%COMP%] {\n  background: #2b2b2b;\n}\n.nui-color-bg-content_popover[_ngcontent-%COMP%] {\n  background: #343434;\n}\n.nui-color-bg-workspace[_ngcontent-%COMP%] {\n  background: #111111;\n}\n.nui-color-bg-table_header[_ngcontent-%COMP%] {\n  background: #434343;\n}\n.nui-color-bg-accordion_header[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n}\n.nui-color-bg-accordion_header-hover[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n}\n.nui-color-bg-inverse[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.nui-color-bg-platformbar[_ngcontent-%COMP%] {\n  background: #222;\n}\n.nui-color-bg-platformbar_vertical[_ngcontent-%COMP%] {\n  background: #222;\n}\n.nui-color-bg-table_header-hover[_ngcontent-%COMP%] {\n  background: #4e4e4e;\n}\n.nui-color-bg-inverse-hover[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n}\n.nui-color-bg-platformbar-hover[_ngcontent-%COMP%] {\n  background: #2d2d2d;\n}\n.nui-color-bg-platformbar_vertical-hover[_ngcontent-%COMP%] {\n  background: #2d2d2d;\n}\n.nui-color-bg-platformbar-secondary[_ngcontent-%COMP%] {\n  background: #0f0f0f;\n}\n.nui-color-bg-platformbar-secondary-hover[_ngcontent-%COMP%] {\n  background: #222;\n}\n.nui-color-active[_ngcontent-%COMP%] {\n  background: #13bbff;\n}\n.nui-color-active-hover[_ngcontent-%COMP%] {\n  background: #5acfff;\n}\n.nui-color-selected[_ngcontent-%COMP%] {\n  background: rgba(0, 196, 210, 0.2);\n}\n.nui-color-selected-hover[_ngcontent-%COMP%] {\n  background: rgba(0, 196, 210, 0.3);\n}\n.nui-color-selected-contrast[_ngcontent-%COMP%] {\n  background: #00c4d2;\n}\n.nui-color-selected-contrast-hover[_ngcontent-%COMP%] {\n  background: #4dd6e0;\n}\n.nui-color-drag_selection[_ngcontent-%COMP%] {\n  background: #00767e;\n}\n.nui-color-on[_ngcontent-%COMP%] {\n  background: #00a753;\n}\n.nui-color-off[_ngcontent-%COMP%] {\n  background: #646464;\n}\n.nui-color-disabled[_ngcontent-%COMP%] {\n  background: #4e4e4e;\n}\n.nui-color-disabled-secondary[_ngcontent-%COMP%] {\n  background: #383838;\n}\n.nui-color-progress[_ngcontent-%COMP%] {\n  background: #00c4d2;\n}\n.nui-color-focus[_ngcontent-%COMP%] {\n  background: rgba(0, 196, 210, 0.5);\n}\n.nui-color-busy-default[_ngcontent-%COMP%] {\n  background: rgba(0, 196, 210, 0.2);\n}\n.nui-color-busy-destructive[_ngcontent-%COMP%] {\n  background: rgba(255, 63, 15, 0.2);\n}\n.nui-color-search_highlight[_ngcontent-%COMP%] {\n  background: rgba(249, 157, 28, 0.3);\n}\n.nui-color-text-default[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.nui-color-text-secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.5);\n}\n.nui-color-text-link[_ngcontent-%COMP%] {\n  background: #13bbff;\n}\n.nui-color-text-link-inverse[_ngcontent-%COMP%] {\n  background: #13bbff;\n}\n.nui-color-text-disabled[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n}\n.nui-color-text-inverse[_ngcontent-%COMP%] {\n  background: #222;\n}\n.nui-color-text-inverse-disabled[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n}\n.nui-color-text-inverse-secondary[_ngcontent-%COMP%] {\n  background: rgba(34, 34, 34, 0.5);\n}\n.nui-color-text-light[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.nui-color-text-highlight-platform_bar[_ngcontent-%COMP%] {\n  background: #f99d1c;\n}\n.nui-color-text-critical[_ngcontent-%COMP%] {\n  background: #ff3f0f;\n}\n.nui-color-text-ok[_ngcontent-%COMP%] {\n  background: #00a753;\n}\n.nui-color-text-warning[_ngcontent-%COMP%] {\n  background: #111;\n}\n.nui-color-line-default[_ngcontent-%COMP%] {\n  background: #595959;\n}\n.nui-color-line-default-hover[_ngcontent-%COMP%] {\n  background: #6f6f6f;\n}\n.nui-color-line-default-transparent[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n}\n.nui-color-line-secondary[_ngcontent-%COMP%] {\n  background: rgba(89, 89, 89, 0.7);\n}\n.nui-color-line-strong[_ngcontent-%COMP%] {\n  background: #7a7a7a;\n}\n.nui-color-line-highlight[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.nui-color-line-dark[_ngcontent-%COMP%] {\n  background: #000;\n}\n.nui-color-line-inverse[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.nui-color-line-active[_ngcontent-%COMP%] {\n  background: #13bbff;\n}\n.nui-color-line-critical[_ngcontent-%COMP%] {\n  background: #ff3f0f;\n}\n.nui-color-line-warning[_ngcontent-%COMP%] {\n  background: #fec405;\n}\n.nui-color-line-info[_ngcontent-%COMP%] {\n  background: #1c8eb1;\n}\n.nui-color-line-ok[_ngcontent-%COMP%] {\n  background: #00a753;\n}\n.nui-color-line-ok-secondary[_ngcontent-%COMP%] {\n  background: rgba(0, 167, 83, 0.3);\n}\n.nui-color-line-ok-secondary-hover[_ngcontent-%COMP%] {\n  background: rgba(0, 167, 83, 0.4);\n}\n.nui-color-line-selected-contrast[_ngcontent-%COMP%] {\n  background: #00c4d2;\n}\n.nui-color-line-threshold-critical[_ngcontent-%COMP%] {\n  background: rgba(255, 63, 15, 0.4);\n}\n.nui-color-line-threshold-warning[_ngcontent-%COMP%] {\n  background: rgba(254, 196, 5, 0.4);\n}\n.nui-color-icon-active[_ngcontent-%COMP%] {\n  background: #13bbff;\n}\n.nui-color-icon-default[_ngcontent-%COMP%] {\n  background: #919191;\n}\n.nui-color-icon-inverse[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.nui-color-icon-disabled[_ngcontent-%COMP%] {\n  background: #4e4e4e;\n}\n.nui-color-icon-highlight-platform_bar[_ngcontent-%COMP%] {\n  background: #f99d1c;\n}\n.nui-color-icon-highlight[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.nui-color-icon-critical[_ngcontent-%COMP%] {\n  background: #ff3f0f;\n}\n.nui-color-icon-warning[_ngcontent-%COMP%] {\n  background: #fec405;\n}\n.nui-color-icon-ok[_ngcontent-%COMP%] {\n  background: #00a753;\n}\n.nui-color-icon-info[_ngcontent-%COMP%] {\n  background: #1c8eb1;\n}\n.nui-color-overlay-modal[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.8);\n}\n.nui-color-overlay-busy[_ngcontent-%COMP%] {\n  background: rgba(34, 34, 34, 0.9);\n}\n.nui-color-overlay-busy-secondary[_ngcontent-%COMP%] {\n  background: rgba(43, 43, 43, 0.9);\n}\n.nui-color-bg-scroll_handle_container[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.nui-color-bg-scroll_handle[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n}\n.nui-color-bg-scroll_handle-hover[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3);\n}\n.nui-color-brand[_ngcontent-%COMP%] {\n  background: #f99d1c;\n}\n.nui-color-brand-hover[_ngcontent-%COMP%] {\n  background: #fab149;\n}\n.nui-color-brand-two[_ngcontent-%COMP%] {\n  background: #707070;\n}\n.nui-color-brand-three[_ngcontent-%COMP%] {\n  background: #B8D757;\n}\n.nui-color-brand-four[_ngcontent-%COMP%] {\n  background: #FBE04B;\n}\n.nui-color-brand-five[_ngcontent-%COMP%] {\n  background: #04C9D7;\n}\n.nui-color-brand-six[_ngcontent-%COMP%] {\n  background: #444444;\n}\n.nui-color-brand-seven[_ngcontent-%COMP%] {\n  background: #A1A1A1;\n}\n.nui-color-semantic-down[_ngcontent-%COMP%] {\n  background: #950000;\n}\n.nui-color-semantic-down-hover[_ngcontent-%COMP%] {\n  background: #aa3333;\n}\n.nui-color-semantic-critical[_ngcontent-%COMP%] {\n  background: #ff3f0f;\n}\n.nui-color-semantic-critical-hover[_ngcontent-%COMP%] {\n  background: #ff653f;\n}\n.nui-color-semantic-warning[_ngcontent-%COMP%] {\n  background: #fec405;\n}\n.nui-color-semantic-warning-hover[_ngcontent-%COMP%] {\n  background: #fed037;\n}\n.nui-color-semantic-down-bg[_ngcontent-%COMP%] {\n  background: #1e0000;\n}\n.nui-color-semantic-down-bg-hover[_ngcontent-%COMP%] {\n  background: #2d0000;\n}\n.nui-color-semantic-critical-bg[_ngcontent-%COMP%] {\n  background: #330d03;\n}\n.nui-color-semantic-critical-bg-hover[_ngcontent-%COMP%] {\n  background: #4d1305;\n}\n.nui-color-semantic-warning-bg[_ngcontent-%COMP%] {\n  background: #332701;\n}\n.nui-color-semantic-warning-bg-hover[_ngcontent-%COMP%] {\n  background: #4c3b02;\n}\n.nui-color-semantic-ok[_ngcontent-%COMP%] {\n  background: #00a753;\n}\n.nui-color-semantic-ok-hover[_ngcontent-%COMP%] {\n  background: #33b975;\n}\n.nui-color-semantic-info[_ngcontent-%COMP%] {\n  background: #1c8eb1;\n}\n.nui-color-semantic-info-hover[_ngcontent-%COMP%] {\n  background: #49a5c1;\n}\n.nui-color-semantic-unknown[_ngcontent-%COMP%] {\n  background: #999;\n}\n.nui-color-semantic-unknown-hover[_ngcontent-%COMP%] {\n  background: #adadad;\n}\n.nui-color-semantic-ok-bg[_ngcontent-%COMP%] {\n  background: #002111;\n}\n.nui-color-semantic-ok-bg-hover[_ngcontent-%COMP%] {\n  background: #003219;\n}\n.nui-color-semantic-info-bg[_ngcontent-%COMP%] {\n  background: #061c23;\n}\n.nui-color-semantic-info-bg-hover[_ngcontent-%COMP%] {\n  background: #082b35;\n}\n.nui-color-semantic-unknown-bg[_ngcontent-%COMP%] {\n  background: #1f1f1f;\n}\n.nui-color-semantic-unknown-bg-hover[_ngcontent-%COMP%] {\n  background: #2e2e2e;\n}\n.nui-color-semantic-bg-critical-threshold[_ngcontent-%COMP%] {\n  background: rgba(255, 63, 15, 0.2);\n}\n.nui-color-semantic-bg-warning-threshold[_ngcontent-%COMP%] {\n  background: rgba(254, 196, 5, 0.2);\n}\n.nui-color-chart-one-dark[_ngcontent-%COMP%] {\n  background: #005b8d;\n}\n.nui-color-chart-two-dark[_ngcontent-%COMP%] {\n  background: #990062;\n}\n.nui-color-chart-three-dark[_ngcontent-%COMP%] {\n  background: #007061;\n}\n.nui-color-chart-four-dark[_ngcontent-%COMP%] {\n  background: #5c327f;\n}\n.nui-color-chart-five-dark[_ngcontent-%COMP%] {\n  background: #717114;\n}\n.nui-color-chart-six-dark[_ngcontent-%COMP%] {\n  background: #994500;\n}\n.nui-color-chart-seven-dark[_ngcontent-%COMP%] {\n  background: #3d3d73;\n}\n.nui-color-chart-eight-dark[_ngcontent-%COMP%] {\n  background: #5f302b;\n}\n.nui-color-chart-nine-dark[_ngcontent-%COMP%] {\n  background: #71551d;\n}\n.nui-color-chart-ten-dark[_ngcontent-%COMP%] {\n  background: #434343;\n}\n.nui-color-chart-one[_ngcontent-%COMP%] {\n  background: #0097eb;\n}\n.nui-color-chart-two[_ngcontent-%COMP%] {\n  background: #ff00a3;\n}\n.nui-color-chart-three[_ngcontent-%COMP%] {\n  background: #00bba1;\n}\n.nui-color-chart-four[_ngcontent-%COMP%] {\n  background: #9954d4;\n}\n.nui-color-chart-five[_ngcontent-%COMP%] {\n  background: #bcbd22;\n}\n.nui-color-chart-six[_ngcontent-%COMP%] {\n  background: #ff7300;\n}\n.nui-color-chart-seven[_ngcontent-%COMP%] {\n  background: #6666C0;\n}\n.nui-color-chart-eight[_ngcontent-%COMP%] {\n  background: #9e5048;\n}\n.nui-color-chart-nine[_ngcontent-%COMP%] {\n  background: #bc8d30;\n}\n.nui-color-chart-ten[_ngcontent-%COMP%] {\n  background: #707070;\n}\n.nui-color-chart-one-light[_ngcontent-%COMP%] {\n  background: #80cbf5;\n}\n.nui-color-chart-two-light[_ngcontent-%COMP%] {\n  background: #ff80d1;\n}\n.nui-color-chart-three-light[_ngcontent-%COMP%] {\n  background: #80ddd0;\n}\n.nui-color-chart-four-light[_ngcontent-%COMP%] {\n  background: #ccaaea;\n}\n.nui-color-chart-five-light[_ngcontent-%COMP%] {\n  background: #dede91;\n}\n.nui-color-chart-six-light[_ngcontent-%COMP%] {\n  background: #ffb980;\n}\n.nui-color-chart-seven-light[_ngcontent-%COMP%] {\n  background: #b3b3e0;\n}\n.nui-color-chart-eight-light[_ngcontent-%COMP%] {\n  background: #cfa8a4;\n}\n.nui-color-chart-nine-light[_ngcontent-%COMP%] {\n  background: #dec698;\n}\n.nui-color-chart-ten-light[_ngcontent-%COMP%] {\n  background: #b8b8b8;\n}\n.nui-color-chart-sum[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.nui-color-chart-percentile[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8);\n}\n.nui-shadow-color-stronger[_ngcontent-%COMP%] {\n  background: #000;\n}\n.nui-shadow-color[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.9);\n}\n.color-example-container[_ngcontent-%COMP%] {\n  width: 150px;\n  margin-right: 15px;\n}\n.color-example[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  box-shadow: 0 0 5px 0 rgba(17, 17, 17, 0.3);\n  box-shadow: 0 0 5px 0 var(--nui-shadow-color, rgba(0, 0, 0, 0.9));\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvZGF0YS9udWktZnJhbWV3b3JrLWNvbG9ycy1kYXJrLWRvY3MubGVzcyIsImZyYW1ld29yay1jb2xvcnMtZGFyay5leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQTBCLGtDQUFBO0FDQzFCO0FEQUE7RUFBc0IsZ0JBQUE7QUNHdEI7QURGQTtFQUF3QixtQkFBQTtBQ0t4QjtBREpBO0VBQThCLG1CQUFBO0FDTzlCO0FETkE7RUFBd0IsbUJBQUE7QUNTeEI7QURSQTtFQUEyQixtQkFBQTtBQ1czQjtBRFZBO0VBQStCLHFDQUFBO0FDYS9CO0FEWkE7RUFBcUMsb0NBQUE7QUNlckM7QURkQTtFQUFzQixnQkFBQTtBQ2lCdEI7QURoQkE7RUFBMEIsZ0JBQUE7QUNtQjFCO0FEbEJBO0VBQW1DLGdCQUFBO0FDcUJuQztBRHBCQTtFQUFpQyxtQkFBQTtBQ3VCakM7QUR0QkE7RUFBNEIsbUJBQUE7QUN5QjVCO0FEeEJBO0VBQWdDLG1CQUFBO0FDMkJoQztBRDFCQTtFQUF5QyxtQkFBQTtBQzZCekM7QUQ1QkE7RUFBb0MsbUJBQUE7QUMrQnBDO0FEOUJBO0VBQTBDLGdCQUFBO0FDaUMxQztBRGhDQTtFQUFrQixtQkFBQTtBQ21DbEI7QURsQ0E7RUFBd0IsbUJBQUE7QUNxQ3hCO0FEcENBO0VBQW9CLGtDQUFBO0FDdUNwQjtBRHRDQTtFQUEwQixrQ0FBQTtBQ3lDMUI7QUR4Q0E7RUFBNkIsbUJBQUE7QUMyQzdCO0FEMUNBO0VBQW1DLG1CQUFBO0FDNkNuQztBRDVDQTtFQUEwQixtQkFBQTtBQytDMUI7QUQ5Q0E7RUFBYyxtQkFBQTtBQ2lEZDtBRGhEQTtFQUFlLG1CQUFBO0FDbURmO0FEbERBO0VBQW9CLG1CQUFBO0FDcURwQjtBRHBEQTtFQUE4QixtQkFBQTtBQ3VEOUI7QUR0REE7RUFBb0IsbUJBQUE7QUN5RHBCO0FEeERBO0VBQWlCLGtDQUFBO0FDMkRqQjtBRDFEQTtFQUF3QixrQ0FBQTtBQzZEeEI7QUQ1REE7RUFBNEIsa0NBQUE7QUMrRDVCO0FEOURBO0VBQTRCLG1DQUFBO0FDaUU1QjtBRGhFQTtFQUF3QixnQkFBQTtBQ21FeEI7QURsRUE7RUFBMEIsb0NBQUE7QUNxRTFCO0FEcEVBO0VBQXFCLG1CQUFBO0FDdUVyQjtBRHRFQTtFQUE2QixtQkFBQTtBQ3lFN0I7QUR4RUE7RUFBeUIsb0NBQUE7QUMyRXpCO0FEMUVBO0VBQXdCLGdCQUFBO0FDNkV4QjtBRDVFQTtFQUFpQyxvQ0FBQTtBQytFakM7QUQ5RUE7RUFBa0MsaUNBQUE7QUNpRmxDO0FEaEZBO0VBQXNCLGdCQUFBO0FDbUZ0QjtBRGxGQTtFQUF1QyxtQkFBQTtBQ3FGdkM7QURwRkE7RUFBeUIsbUJBQUE7QUN1RnpCO0FEdEZBO0VBQW1CLG1CQUFBO0FDeUZuQjtBRHhGQTtFQUF3QixnQkFBQTtBQzJGeEI7QUQxRkE7RUFBd0IsbUJBQUE7QUM2RnhCO0FENUZBO0VBQThCLG1CQUFBO0FDK0Y5QjtBRDlGQTtFQUFvQyxxQ0FBQTtBQ2lHcEM7QURoR0E7RUFBMEIsaUNBQUE7QUNtRzFCO0FEbEdBO0VBQXVCLG1CQUFBO0FDcUd2QjtBRHBHQTtFQUEwQixnQkFBQTtBQ3VHMUI7QUR0R0E7RUFBcUIsZ0JBQUE7QUN5R3JCO0FEeEdBO0VBQXdCLGdCQUFBO0FDMkd4QjtBRDFHQTtFQUF1QixtQkFBQTtBQzZHdkI7QUQ1R0E7RUFBeUIsbUJBQUE7QUMrR3pCO0FEOUdBO0VBQXdCLG1CQUFBO0FDaUh4QjtBRGhIQTtFQUFxQixtQkFBQTtBQ21IckI7QURsSEE7RUFBbUIsbUJBQUE7QUNxSG5CO0FEcEhBO0VBQTZCLGlDQUFBO0FDdUg3QjtBRHRIQTtFQUFtQyxpQ0FBQTtBQ3lIbkM7QUR4SEE7RUFBa0MsbUJBQUE7QUMySGxDO0FEMUhBO0VBQW1DLGtDQUFBO0FDNkhuQztBRDVIQTtFQUFrQyxrQ0FBQTtBQytIbEM7QUQ5SEE7RUFBdUIsbUJBQUE7QUNpSXZCO0FEaElBO0VBQXdCLG1CQUFBO0FDbUl4QjtBRGxJQTtFQUF3QixnQkFBQTtBQ3FJeEI7QURwSUE7RUFBeUIsbUJBQUE7QUN1SXpCO0FEdElBO0VBQXVDLG1CQUFBO0FDeUl2QztBRHhJQTtFQUEwQixnQkFBQTtBQzJJMUI7QUQxSUE7RUFBeUIsbUJBQUE7QUM2SXpCO0FENUlBO0VBQXdCLG1CQUFBO0FDK0l4QjtBRDlJQTtFQUFtQixtQkFBQTtBQ2lKbkI7QURoSkE7RUFBcUIsbUJBQUE7QUNtSnJCO0FEbEpBO0VBQXlCLGlDQUFBO0FDcUp6QjtBRHBKQTtFQUF3QixpQ0FBQTtBQ3VKeEI7QUR0SkE7RUFBa0MsaUNBQUE7QUN5SmxDO0FEeEpBO0VBQXNDLHVCQUFBO0FDMkp0QztBRDFKQTtFQUE0QixvQ0FBQTtBQzZKNUI7QUQ1SkE7RUFBa0Msb0NBQUE7QUMrSmxDO0FEOUpBO0VBQWlCLG1CQUFBO0FDaUtqQjtBRGhLQTtFQUF1QixtQkFBQTtBQ21LdkI7QURsS0E7RUFBcUIsbUJBQUE7QUNxS3JCO0FEcEtBO0VBQXVCLG1CQUFBO0FDdUt2QjtBRHRLQTtFQUFzQixtQkFBQTtBQ3lLdEI7QUR4S0E7RUFBc0IsbUJBQUE7QUMyS3RCO0FEMUtBO0VBQXFCLG1CQUFBO0FDNktyQjtBRDVLQTtFQUF1QixtQkFBQTtBQytLdkI7QUQ5S0E7RUFBeUIsbUJBQUE7QUNpTHpCO0FEaExBO0VBQStCLG1CQUFBO0FDbUwvQjtBRGxMQTtFQUE2QixtQkFBQTtBQ3FMN0I7QURwTEE7RUFBbUMsbUJBQUE7QUN1TG5DO0FEdExBO0VBQTRCLG1CQUFBO0FDeUw1QjtBRHhMQTtFQUFrQyxtQkFBQTtBQzJMbEM7QUQxTEE7RUFBNEIsbUJBQUE7QUM2TDVCO0FENUxBO0VBQWtDLG1CQUFBO0FDK0xsQztBRDlMQTtFQUFnQyxtQkFBQTtBQ2lNaEM7QURoTUE7RUFBc0MsbUJBQUE7QUNtTXRDO0FEbE1BO0VBQStCLG1CQUFBO0FDcU0vQjtBRHBNQTtFQUFxQyxtQkFBQTtBQ3VNckM7QUR0TUE7RUFBdUIsbUJBQUE7QUN5TXZCO0FEeE1BO0VBQTZCLG1CQUFBO0FDMk03QjtBRDFNQTtFQUF5QixtQkFBQTtBQzZNekI7QUQ1TUE7RUFBK0IsbUJBQUE7QUMrTS9CO0FEOU1BO0VBQTRCLGdCQUFBO0FDaU41QjtBRGhOQTtFQUFrQyxtQkFBQTtBQ21ObEM7QURsTkE7RUFBMEIsbUJBQUE7QUNxTjFCO0FEcE5BO0VBQWdDLG1CQUFBO0FDdU5oQztBRHROQTtFQUE0QixtQkFBQTtBQ3lONUI7QUR4TkE7RUFBa0MsbUJBQUE7QUMyTmxDO0FEMU5BO0VBQStCLG1CQUFBO0FDNk4vQjtBRDVOQTtFQUFxQyxtQkFBQTtBQytOckM7QUQ5TkE7RUFBMEMsa0NBQUE7QUNpTzFDO0FEaE9BO0VBQXlDLGtDQUFBO0FDbU96QztBRGxPQTtFQUEwQixtQkFBQTtBQ3FPMUI7QURwT0E7RUFBMEIsbUJBQUE7QUN1TzFCO0FEdE9BO0VBQTRCLG1CQUFBO0FDeU81QjtBRHhPQTtFQUEyQixtQkFBQTtBQzJPM0I7QUQxT0E7RUFBMkIsbUJBQUE7QUM2TzNCO0FENU9BO0VBQTBCLG1CQUFBO0FDK08xQjtBRDlPQTtFQUE0QixtQkFBQTtBQ2lQNUI7QURoUEE7RUFBNEIsbUJBQUE7QUNtUDVCO0FEbFBBO0VBQTJCLG1CQUFBO0FDcVAzQjtBRHBQQTtFQUEwQixtQkFBQTtBQ3VQMUI7QUR0UEE7RUFBcUIsbUJBQUE7QUN5UHJCO0FEeFBBO0VBQXFCLG1CQUFBO0FDMlByQjtBRDFQQTtFQUF1QixtQkFBQTtBQzZQdkI7QUQ1UEE7RUFBc0IsbUJBQUE7QUMrUHRCO0FEOVBBO0VBQXNCLG1CQUFBO0FDaVF0QjtBRGhRQTtFQUFxQixtQkFBQTtBQ21RckI7QURsUUE7RUFBdUIsbUJBQUE7QUNxUXZCO0FEcFFBO0VBQXVCLG1CQUFBO0FDdVF2QjtBRHRRQTtFQUFzQixtQkFBQTtBQ3lRdEI7QUR4UUE7RUFBcUIsbUJBQUE7QUMyUXJCO0FEMVFBO0VBQTJCLG1CQUFBO0FDNlEzQjtBRDVRQTtFQUEyQixtQkFBQTtBQytRM0I7QUQ5UUE7RUFBNkIsbUJBQUE7QUNpUjdCO0FEaFJBO0VBQTRCLG1CQUFBO0FDbVI1QjtBRGxSQTtFQUE0QixtQkFBQTtBQ3FSNUI7QURwUkE7RUFBMkIsbUJBQUE7QUN1UjNCO0FEdFJBO0VBQTZCLG1CQUFBO0FDeVI3QjtBRHhSQTtFQUE2QixtQkFBQTtBQzJSN0I7QUQxUkE7RUFBNEIsbUJBQUE7QUM2UjVCO0FENVJBO0VBQTJCLG1CQUFBO0FDK1IzQjtBRDlSQTtFQUFxQixnQkFBQTtBQ2lTckI7QURoU0E7RUFBNEIsb0NBQUE7QUNtUzVCO0FEbFNBO0VBQTJCLGdCQUFBO0FDcVMzQjtBRHBTQTtFQUFrQiw4QkFBQTtBQ3VTbEI7QUF2YkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUF5Yko7QUF2YkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsaUVBQUE7RUFDQSxlQUFBO0FBeWJKIiwiZmlsZSI6ImZyYW1ld29yay1jb2xvcnMtZGFyay5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uLy4uL3N0eWxlcy9udWktZnJhbWV3b3JrLWNvbG9ycy1kYXJrLmxlc3NcIjtcbi5udWktY29sb3ItYmctdHJhbnNwYXJlbnR7YmFja2dyb3VuZDogQG51aS1jb2xvci1iZy10cmFuc3BhcmVudH07XG4ubnVpLWNvbG9yLWJnLWNvbnRlbnR7YmFja2dyb3VuZDogQG51aS1jb2xvci1iZy1jb250ZW50fTtcbi5udWktY29sb3ItYmctc2Vjb25kYXJ5e2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctc2Vjb25kYXJ5fTtcbi5udWktY29sb3ItYmctY29udGVudF9wb3BvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctY29udGVudF9wb3BvdmVyfTtcbi5udWktY29sb3ItYmctd29ya3NwYWNle2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctd29ya3NwYWNlfTtcbi5udWktY29sb3ItYmctdGFibGVfaGVhZGVye2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctdGFibGVfaGVhZGVyfTtcbi5udWktY29sb3ItYmctYWNjb3JkaW9uX2hlYWRlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJnLWFjY29yZGlvbl9oZWFkZXJ9O1xuLm51aS1jb2xvci1iZy1hY2NvcmRpb25faGVhZGVyLWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctYWNjb3JkaW9uX2hlYWRlci1ob3Zlcn07XG4ubnVpLWNvbG9yLWJnLWludmVyc2V7YmFja2dyb3VuZDogQG51aS1jb2xvci1iZy1pbnZlcnNlfTtcbi5udWktY29sb3ItYmctcGxhdGZvcm1iYXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1iZy1wbGF0Zm9ybWJhcn07XG4ubnVpLWNvbG9yLWJnLXBsYXRmb3JtYmFyX3ZlcnRpY2Fse2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctcGxhdGZvcm1iYXJfdmVydGljYWx9O1xuLm51aS1jb2xvci1iZy10YWJsZV9oZWFkZXItaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1iZy10YWJsZV9oZWFkZXItaG92ZXJ9O1xuLm51aS1jb2xvci1iZy1pbnZlcnNlLWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctaW52ZXJzZS1ob3Zlcn07XG4ubnVpLWNvbG9yLWJnLXBsYXRmb3JtYmFyLWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctcGxhdGZvcm1iYXItaG92ZXJ9O1xuLm51aS1jb2xvci1iZy1wbGF0Zm9ybWJhcl92ZXJ0aWNhbC1ob3ZlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJnLXBsYXRmb3JtYmFyX3ZlcnRpY2FsLWhvdmVyfTtcbi5udWktY29sb3ItYmctcGxhdGZvcm1iYXItc2Vjb25kYXJ5e2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctcGxhdGZvcm1iYXItc2Vjb25kYXJ5fTtcbi5udWktY29sb3ItYmctcGxhdGZvcm1iYXItc2Vjb25kYXJ5LWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctcGxhdGZvcm1iYXItc2Vjb25kYXJ5LWhvdmVyfTtcbi5udWktY29sb3ItYWN0aXZle2JhY2tncm91bmQ6IEBudWktY29sb3ItYWN0aXZlfTtcbi5udWktY29sb3ItYWN0aXZlLWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3ItYWN0aXZlLWhvdmVyfTtcbi5udWktY29sb3Itc2VsZWN0ZWR7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZWxlY3RlZH07XG4ubnVpLWNvbG9yLXNlbGVjdGVkLWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VsZWN0ZWQtaG92ZXJ9O1xuLm51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbGVjdGVkLWNvbnRyYXN0fTtcbi5udWktY29sb3Itc2VsZWN0ZWQtY29udHJhc3QtaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdC1ob3Zlcn07XG4ubnVpLWNvbG9yLWRyYWdfc2VsZWN0aW9ue2JhY2tncm91bmQ6IEBudWktY29sb3ItZHJhZ19zZWxlY3Rpb259O1xuLm51aS1jb2xvci1vbntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLW9ufTtcbi5udWktY29sb3Itb2Zme2JhY2tncm91bmQ6IEBudWktY29sb3Itb2ZmfTtcbi5udWktY29sb3ItZGlzYWJsZWR7YmFja2dyb3VuZDogQG51aS1jb2xvci1kaXNhYmxlZH07XG4ubnVpLWNvbG9yLWRpc2FibGVkLXNlY29uZGFyeXtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWRpc2FibGVkLXNlY29uZGFyeX07XG4ubnVpLWNvbG9yLXByb2dyZXNze2JhY2tncm91bmQ6IEBudWktY29sb3ItcHJvZ3Jlc3N9O1xuLm51aS1jb2xvci1mb2N1c3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWZvY3VzfTtcbi5udWktY29sb3ItYnVzeS1kZWZhdWx0e2JhY2tncm91bmQ6IEBudWktY29sb3ItYnVzeS1kZWZhdWx0fTtcbi5udWktY29sb3ItYnVzeS1kZXN0cnVjdGl2ZXtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJ1c3ktZGVzdHJ1Y3RpdmV9O1xuLm51aS1jb2xvci1zZWFyY2hfaGlnaGxpZ2h0e2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VhcmNoX2hpZ2hsaWdodH07XG4ubnVpLWNvbG9yLXRleHQtZGVmYXVsdHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXRleHQtZGVmYXVsdH07XG4ubnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5e2JhY2tncm91bmQ6IEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnl9O1xuLm51aS1jb2xvci10ZXh0LWxpbmt7YmFja2dyb3VuZDogQG51aS1jb2xvci10ZXh0LWxpbmt9O1xuLm51aS1jb2xvci10ZXh0LWxpbmstaW52ZXJzZXtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXRleHQtbGluay1pbnZlcnNlfTtcbi5udWktY29sb3ItdGV4dC1kaXNhYmxlZHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWR9O1xuLm51aS1jb2xvci10ZXh0LWludmVyc2V7YmFja2dyb3VuZDogQG51aS1jb2xvci10ZXh0LWludmVyc2V9O1xuLm51aS1jb2xvci10ZXh0LWludmVyc2UtZGlzYWJsZWR7YmFja2dyb3VuZDogQG51aS1jb2xvci10ZXh0LWludmVyc2UtZGlzYWJsZWR9O1xuLm51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5e2JhY2tncm91bmQ6IEBudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeX07XG4ubnVpLWNvbG9yLXRleHQtbGlnaHR7YmFja2dyb3VuZDogQG51aS1jb2xvci10ZXh0LWxpZ2h0fTtcbi5udWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFye2JhY2tncm91bmQ6IEBudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyfTtcbi5udWktY29sb3ItdGV4dC1jcml0aWNhbHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXRleHQtY3JpdGljYWx9O1xuLm51aS1jb2xvci10ZXh0LW9re2JhY2tncm91bmQ6IEBudWktY29sb3ItdGV4dC1va307XG4ubnVpLWNvbG9yLXRleHQtd2FybmluZ3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXRleHQtd2FybmluZ307XG4ubnVpLWNvbG9yLWxpbmUtZGVmYXVsdHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdH07XG4ubnVpLWNvbG9yLWxpbmUtZGVmYXVsdC1ob3ZlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdC1ob3Zlcn07XG4ubnVpLWNvbG9yLWxpbmUtZGVmYXVsdC10cmFuc3BhcmVudHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdC10cmFuc3BhcmVudH07XG4ubnVpLWNvbG9yLWxpbmUtc2Vjb25kYXJ5e2JhY2tncm91bmQ6IEBudWktY29sb3ItbGluZS1zZWNvbmRhcnl9O1xuLm51aS1jb2xvci1saW5lLXN0cm9uZ3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWxpbmUtc3Ryb25nfTtcbi5udWktY29sb3ItbGluZS1oaWdobGlnaHR7YmFja2dyb3VuZDogQG51aS1jb2xvci1saW5lLWhpZ2hsaWdodH07XG4ubnVpLWNvbG9yLWxpbmUtZGFya3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWxpbmUtZGFya307XG4ubnVpLWNvbG9yLWxpbmUtaW52ZXJzZXtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWxpbmUtaW52ZXJzZX07XG4ubnVpLWNvbG9yLWxpbmUtYWN0aXZle2JhY2tncm91bmQ6IEBudWktY29sb3ItbGluZS1hY3RpdmV9O1xuLm51aS1jb2xvci1saW5lLWNyaXRpY2Fse2JhY2tncm91bmQ6IEBudWktY29sb3ItbGluZS1jcml0aWNhbH07XG4ubnVpLWNvbG9yLWxpbmUtd2FybmluZ3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWxpbmUtd2FybmluZ307XG4ubnVpLWNvbG9yLWxpbmUtaW5mb3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWxpbmUtaW5mb307XG4ubnVpLWNvbG9yLWxpbmUtb2t7YmFja2dyb3VuZDogQG51aS1jb2xvci1saW5lLW9rfTtcbi5udWktY29sb3ItbGluZS1vay1zZWNvbmRhcnl7YmFja2dyb3VuZDogQG51aS1jb2xvci1saW5lLW9rLXNlY29uZGFyeX07XG4ubnVpLWNvbG9yLWxpbmUtb2stc2Vjb25kYXJ5LWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3ItbGluZS1vay1zZWNvbmRhcnktaG92ZXJ9O1xuLm51aS1jb2xvci1saW5lLXNlbGVjdGVkLWNvbnRyYXN0e2JhY2tncm91bmQ6IEBudWktY29sb3ItbGluZS1zZWxlY3RlZC1jb250cmFzdH07XG4ubnVpLWNvbG9yLWxpbmUtdGhyZXNob2xkLWNyaXRpY2Fse2JhY2tncm91bmQ6IEBudWktY29sb3ItbGluZS10aHJlc2hvbGQtY3JpdGljYWx9O1xuLm51aS1jb2xvci1saW5lLXRocmVzaG9sZC13YXJuaW5ne2JhY2tncm91bmQ6IEBudWktY29sb3ItbGluZS10aHJlc2hvbGQtd2FybmluZ307XG4ubnVpLWNvbG9yLWljb24tYWN0aXZle2JhY2tncm91bmQ6IEBudWktY29sb3ItaWNvbi1hY3RpdmV9O1xuLm51aS1jb2xvci1pY29uLWRlZmF1bHR7YmFja2dyb3VuZDogQG51aS1jb2xvci1pY29uLWRlZmF1bHR9O1xuLm51aS1jb2xvci1pY29uLWludmVyc2V7YmFja2dyb3VuZDogQG51aS1jb2xvci1pY29uLWludmVyc2V9O1xuLm51aS1jb2xvci1pY29uLWRpc2FibGVke2JhY2tncm91bmQ6IEBudWktY29sb3ItaWNvbi1kaXNhYmxlZH07XG4ubnVpLWNvbG9yLWljb24taGlnaGxpZ2h0LXBsYXRmb3JtX2JhcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWljb24taGlnaGxpZ2h0LXBsYXRmb3JtX2Jhcn07XG4ubnVpLWNvbG9yLWljb24taGlnaGxpZ2h0e2JhY2tncm91bmQ6IEBudWktY29sb3ItaWNvbi1oaWdobGlnaHR9O1xuLm51aS1jb2xvci1pY29uLWNyaXRpY2Fse2JhY2tncm91bmQ6IEBudWktY29sb3ItaWNvbi1jcml0aWNhbH07XG4ubnVpLWNvbG9yLWljb24td2FybmluZ3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWljb24td2FybmluZ307XG4ubnVpLWNvbG9yLWljb24tb2t7YmFja2dyb3VuZDogQG51aS1jb2xvci1pY29uLW9rfTtcbi5udWktY29sb3ItaWNvbi1pbmZve2JhY2tncm91bmQ6IEBudWktY29sb3ItaWNvbi1pbmZvfTtcbi5udWktY29sb3Itb3ZlcmxheS1tb2RhbHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLW92ZXJsYXktbW9kYWx9O1xuLm51aS1jb2xvci1vdmVybGF5LWJ1c3l7YmFja2dyb3VuZDogQG51aS1jb2xvci1vdmVybGF5LWJ1c3l9O1xuLm51aS1jb2xvci1vdmVybGF5LWJ1c3ktc2Vjb25kYXJ5e2JhY2tncm91bmQ6IEBudWktY29sb3Itb3ZlcmxheS1idXN5LXNlY29uZGFyeX07XG4ubnVpLWNvbG9yLWJnLXNjcm9sbF9oYW5kbGVfY29udGFpbmVye2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctc2Nyb2xsX2hhbmRsZV9jb250YWluZXJ9O1xuLm51aS1jb2xvci1iZy1zY3JvbGxfaGFuZGxle2JhY2tncm91bmQ6IEBudWktY29sb3ItYmctc2Nyb2xsX2hhbmRsZX07XG4ubnVpLWNvbG9yLWJnLXNjcm9sbF9oYW5kbGUtaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1iZy1zY3JvbGxfaGFuZGxlLWhvdmVyfTtcbi5udWktY29sb3ItYnJhbmR7YmFja2dyb3VuZDogQG51aS1jb2xvci1icmFuZH07XG4ubnVpLWNvbG9yLWJyYW5kLWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3ItYnJhbmQtaG92ZXJ9O1xuLm51aS1jb2xvci1icmFuZC10d297YmFja2dyb3VuZDogQG51aS1jb2xvci1icmFuZC10d299O1xuLm51aS1jb2xvci1icmFuZC10aHJlZXtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJyYW5kLXRocmVlfTtcbi5udWktY29sb3ItYnJhbmQtZm91cntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJyYW5kLWZvdXJ9O1xuLm51aS1jb2xvci1icmFuZC1maXZle2JhY2tncm91bmQ6IEBudWktY29sb3ItYnJhbmQtZml2ZX07XG4ubnVpLWNvbG9yLWJyYW5kLXNpeHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJyYW5kLXNpeH07XG4ubnVpLWNvbG9yLWJyYW5kLXNldmVue2JhY2tncm91bmQ6IEBudWktY29sb3ItYnJhbmQtc2V2ZW59O1xuLm51aS1jb2xvci1zZW1hbnRpYy1kb3due2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtZG93bn07XG4ubnVpLWNvbG9yLXNlbWFudGljLWRvd24taG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZW1hbnRpYy1kb3duLWhvdmVyfTtcbi5udWktY29sb3Itc2VtYW50aWMtY3JpdGljYWx7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZW1hbnRpYy1jcml0aWNhbH07XG4ubnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsLWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWwtaG92ZXJ9O1xuLm51aS1jb2xvci1zZW1hbnRpYy13YXJuaW5ne2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtd2FybmluZ307XG4ubnVpLWNvbG9yLXNlbWFudGljLXdhcm5pbmctaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZW1hbnRpYy13YXJuaW5nLWhvdmVyfTtcbi5udWktY29sb3Itc2VtYW50aWMtZG93bi1iZ3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLWRvd24tYmd9O1xuLm51aS1jb2xvci1zZW1hbnRpYy1kb3duLWJnLWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtZG93bi1iZy1ob3Zlcn07XG4ubnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsLWJne2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWwtYmd9O1xuLm51aS1jb2xvci1zZW1hbnRpYy1jcml0aWNhbC1iZy1ob3ZlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsLWJnLWhvdmVyfTtcbi5udWktY29sb3Itc2VtYW50aWMtd2FybmluZy1iZ3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLXdhcm5pbmctYmd9O1xuLm51aS1jb2xvci1zZW1hbnRpYy13YXJuaW5nLWJnLWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtd2FybmluZy1iZy1ob3Zlcn07XG4ubnVpLWNvbG9yLXNlbWFudGljLW9re2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtb2t9O1xuLm51aS1jb2xvci1zZW1hbnRpYy1vay1ob3ZlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLW9rLWhvdmVyfTtcbi5udWktY29sb3Itc2VtYW50aWMtaW5mb3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLWluZm99O1xuLm51aS1jb2xvci1zZW1hbnRpYy1pbmZvLWhvdmVye2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtaW5mby1ob3Zlcn07XG4ubnVpLWNvbG9yLXNlbWFudGljLXVua25vd257YmFja2dyb3VuZDogQG51aS1jb2xvci1zZW1hbnRpYy11bmtub3dufTtcbi5udWktY29sb3Itc2VtYW50aWMtdW5rbm93bi1ob3ZlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLXVua25vd24taG92ZXJ9O1xuLm51aS1jb2xvci1zZW1hbnRpYy1vay1iZ3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLW9rLWJnfTtcbi5udWktY29sb3Itc2VtYW50aWMtb2stYmctaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZW1hbnRpYy1vay1iZy1ob3Zlcn07XG4ubnVpLWNvbG9yLXNlbWFudGljLWluZm8tYmd7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZW1hbnRpYy1pbmZvLWJnfTtcbi5udWktY29sb3Itc2VtYW50aWMtaW5mby1iZy1ob3ZlcntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLXNlbWFudGljLWluZm8tYmctaG92ZXJ9O1xuLm51aS1jb2xvci1zZW1hbnRpYy11bmtub3duLWJne2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtdW5rbm93bi1iZ307XG4ubnVpLWNvbG9yLXNlbWFudGljLXVua25vd24tYmctaG92ZXJ7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZW1hbnRpYy11bmtub3duLWJnLWhvdmVyfTtcbi5udWktY29sb3Itc2VtYW50aWMtYmctY3JpdGljYWwtdGhyZXNob2xke2JhY2tncm91bmQ6IEBudWktY29sb3Itc2VtYW50aWMtYmctY3JpdGljYWwtdGhyZXNob2xkfTtcbi5udWktY29sb3Itc2VtYW50aWMtYmctd2FybmluZy10aHJlc2hvbGR7YmFja2dyb3VuZDogQG51aS1jb2xvci1zZW1hbnRpYy1iZy13YXJuaW5nLXRocmVzaG9sZH07XG4ubnVpLWNvbG9yLWNoYXJ0LW9uZS1kYXJre2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtb25lLWRhcmt9O1xuLm51aS1jb2xvci1jaGFydC10d28tZGFya3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LXR3by1kYXJrfTtcbi5udWktY29sb3ItY2hhcnQtdGhyZWUtZGFya3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LXRocmVlLWRhcmt9O1xuLm51aS1jb2xvci1jaGFydC1mb3VyLWRhcmt7YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC1mb3VyLWRhcmt9O1xuLm51aS1jb2xvci1jaGFydC1maXZlLWRhcmt7YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC1maXZlLWRhcmt9O1xuLm51aS1jb2xvci1jaGFydC1zaXgtZGFya3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LXNpeC1kYXJrfTtcbi5udWktY29sb3ItY2hhcnQtc2V2ZW4tZGFya3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LXNldmVuLWRhcmt9O1xuLm51aS1jb2xvci1jaGFydC1laWdodC1kYXJre2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtZWlnaHQtZGFya307XG4ubnVpLWNvbG9yLWNoYXJ0LW5pbmUtZGFya3tiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LW5pbmUtZGFya307XG4ubnVpLWNvbG9yLWNoYXJ0LXRlbi1kYXJre2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtdGVuLWRhcmt9O1xuLm51aS1jb2xvci1jaGFydC1vbmV7YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC1vbmV9O1xuLm51aS1jb2xvci1jaGFydC10d297YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC10d299O1xuLm51aS1jb2xvci1jaGFydC10aHJlZXtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LXRocmVlfTtcbi5udWktY29sb3ItY2hhcnQtZm91cntiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LWZvdXJ9O1xuLm51aS1jb2xvci1jaGFydC1maXZle2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtZml2ZX07XG4ubnVpLWNvbG9yLWNoYXJ0LXNpeHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LXNpeH07XG4ubnVpLWNvbG9yLWNoYXJ0LXNldmVue2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtc2V2ZW59O1xuLm51aS1jb2xvci1jaGFydC1laWdodHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LWVpZ2h0fTtcbi5udWktY29sb3ItY2hhcnQtbmluZXtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LW5pbmV9O1xuLm51aS1jb2xvci1jaGFydC10ZW57YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC10ZW59O1xuLm51aS1jb2xvci1jaGFydC1vbmUtbGlnaHR7YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC1vbmUtbGlnaHR9O1xuLm51aS1jb2xvci1jaGFydC10d28tbGlnaHR7YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC10d28tbGlnaHR9O1xuLm51aS1jb2xvci1jaGFydC10aHJlZS1saWdodHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LXRocmVlLWxpZ2h0fTtcbi5udWktY29sb3ItY2hhcnQtZm91ci1saWdodHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LWZvdXItbGlnaHR9O1xuLm51aS1jb2xvci1jaGFydC1maXZlLWxpZ2h0e2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtZml2ZS1saWdodH07XG4ubnVpLWNvbG9yLWNoYXJ0LXNpeC1saWdodHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LXNpeC1saWdodH07XG4ubnVpLWNvbG9yLWNoYXJ0LXNldmVuLWxpZ2h0e2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtc2V2ZW4tbGlnaHR9O1xuLm51aS1jb2xvci1jaGFydC1laWdodC1saWdodHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LWVpZ2h0LWxpZ2h0fTtcbi5udWktY29sb3ItY2hhcnQtbmluZS1saWdodHtiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWNoYXJ0LW5pbmUtbGlnaHR9O1xuLm51aS1jb2xvci1jaGFydC10ZW4tbGlnaHR7YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC10ZW4tbGlnaHR9O1xuLm51aS1jb2xvci1jaGFydC1zdW17YmFja2dyb3VuZDogQG51aS1jb2xvci1jaGFydC1zdW19O1xuLm51aS1jb2xvci1jaGFydC1wZXJjZW50aWxle2JhY2tncm91bmQ6IEBudWktY29sb3ItY2hhcnQtcGVyY2VudGlsZX07XG4ubnVpLXNoYWRvdy1jb2xvci1zdHJvbmdlcntiYWNrZ3JvdW5kOiBAbnVpLXNoYWRvdy1jb2xvci1zdHJvbmdlcn07XG4ubnVpLXNoYWRvdy1jb2xvcntiYWNrZ3JvdW5kOiBAbnVpLXNoYWRvdy1jb2xvcn07XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9udWktZnJhbWV3b3JrLXNwYWNlcy5sZXNzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9udWktZnJhbWV3b3JrLXNoYWRvdy5sZXNzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9kYXRhL251aS1mcmFtZXdvcmstY29sb3JzLWRhcmstZG9jcy5sZXNzXCI7XG5cbi5jb2xvci1leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogQG51aS1zcGFjZS1tZDtcbn1cbi5jb2xvci1leGFtcGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAwIGZhZGUoQGJsYWNrLCAzMCUpO1xuICAgIGJveC1zaGFkb3c6IEBudWktc2hhZG93LWRlZmF1bHQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-static-static-example-module-es5.js.map