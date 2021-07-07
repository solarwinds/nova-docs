(function () {
  var _templateObject;

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-icon-icon-module"], {
    /***/
    "+8VF":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-color/icon-color.example.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-icon icon=\"add\" iconColor=\"orange\" id=\"nui-demo-icon-color\"></nui-icon>\n";
      /***/
    },

    /***/
    "+mSZ":
    /*!**********************************************************************************!*\
      !*** ./demo/src/components/demo/icon/icon-hover/icon-hover.example.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: IconHoverExampleComponent */

    /***/
    function mSZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconHoverExampleComponent", function () {
        return IconHoverExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icon.component */
      "45Bz");

      var IconHoverExampleComponent = function IconHoverExampleComponent() {
        _classCallCheck(this, IconHoverExampleComponent);
      };

      IconHoverExampleComponent.ɵfac = function IconHoverExampleComponent_Factory(t) {
        return new (t || IconHoverExampleComponent)();
      };

      IconHoverExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IconHoverExampleComponent,
        selectors: [["nui-icon-hover-example"]],
        decls: 1,
        vars: 0,
        consts: [["icon", "add", "iconHoverColor", "gray", "id", "nui-demo-icon-hover"]],
        template: function IconHoverExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-icon", 0);
          }
        },
        directives: [_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "/bEf":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-list/icon-list.example.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bEf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\n\nimport { icons as iconsData } from \"../../../../../../src/lib/icon/icons\";\n\n@Component({\n    selector: \"nui-icon-list-example\",\n    templateUrl: \"./icon-list.example.component.html\",\n})\n\nexport class IconListExampleComponent implements OnInit {\n    public icons: any[];\n    public categories: any[];\n\n    public ngOnInit(): void {\n\n        this.icons = iconsData;\n        this.categories = this.getCategories(iconsData);\n    }\n\n    private getCategories(icons: any[]) {\n        const categories = [];\n        for (const icon of icons) {\n            if (categories.indexOf(icon.category) === -1) {\n                categories.push(icon.category);\n            }\n        }\n        return categories;\n    }\n}\n";
      /***/
    },

    /***/
    "1bsI":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-basic/icon-basic.example.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bsI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-icon icon=\"add\"></nui-icon>\n";
      /***/
    },

    /***/
    "1teV":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-status/icon-status.example.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function teV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import {Component} from \"@angular/core\";\nimport {IconStatus} from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-icon-status-example\",\n    templateUrl: \"./icon-status.example.component.html\",\n})\n\nexport class IconStatusExampleComponent {\n    status: IconStatus = IconStatus.Up;\n}\n";
      /***/
    },

    /***/
    "2j0N":
    /*!************************************************************************************!*\
      !*** ./demo/src/components/demo/icon/icon-status/icon-status.example.component.ts ***!
      \************************************************************************************/

    /*! exports provided: IconStatusExampleComponent */

    /***/
    function j0N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconStatusExampleComponent", function () {
        return IconStatusExampleComponent;
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


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icon.component */
      "45Bz");

      var IconStatusExampleComponent = function IconStatusExampleComponent() {
        _classCallCheck(this, IconStatusExampleComponent);

        this.status = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["IconStatus"].Up;
      };

      IconStatusExampleComponent.ɵfac = function IconStatusExampleComponent_Factory(t) {
        return new (t || IconStatusExampleComponent)();
      };

      IconStatusExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: IconStatusExampleComponent,
        selectors: [["nui-icon-status-example"]],
        decls: 1,
        vars: 1,
        consts: [["icon", "add", "id", "nui-demo-icon-with-status-up", 3, "status"]],
        template: function IconStatusExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nui-icon", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.status);
          }
        },
        directives: [_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "43X2":
    /*!************************************************************************************************!*\
      !*** ./demo/src/components/demo/icon/icon-child-status/icon-child-status.example.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: IconChildStatusExampleComponent */

    /***/
    function X2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconChildStatusExampleComponent", function () {
        return IconChildStatusExampleComponent;
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


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icon.component */
      "45Bz");

      var IconChildStatusExampleComponent = function IconChildStatusExampleComponent() {
        _classCallCheck(this, IconChildStatusExampleComponent);

        this.status = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["IconStatus"].Up;
        this.childStatus = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["IconStatus"].Sleep;
      };

      IconChildStatusExampleComponent.ɵfac = function IconChildStatusExampleComponent_Factory(t) {
        return new (t || IconChildStatusExampleComponent)();
      };

      IconChildStatusExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: IconChildStatusExampleComponent,
        selectors: [["nui-icon-child-status-example"]],
        decls: 1,
        vars: 2,
        consts: [["icon", "add", 3, "status", "childStatus"]],
        template: function IconChildStatusExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nui-icon", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.status)("childStatus", ctx.childStatus);
          }
        },
        directives: [_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "47EU":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-visual-test/icon-visual-test.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ml-4\">\n    <div>\n        <h3>Basic icon usage</h3>\n        <nui-icon icon=\"add\" iconHoverColor=\"gray\" id=\"nui-icon-test-basic-usage\"></nui-icon>\n        <hr />\n    </div>\n\n    <div>\n        <h3>Icon with Differrent Sizes</h3>\n        <nui-icon class=\"pr-2\" icon=\"add\" iconSize=\"small\" id=\"nui-icon-test-small-size\"></nui-icon>\n        <nui-icon class=\"pr-2\" icon=\"add\" id=\"nui-icon-test-default-size\"></nui-icon>\n        <nui-icon class=\"pr-2\" icon=\"add\" iconSize=\"medium\" id=\"nui-icon-test-medium-size\"></nui-icon>\n        <hr />\n    </div>\n\n    <div>\n        <h3>Icon with Color</h3>\n        <div class=\"d-flex flex-row\">\n            <div class=\"d-flex flex-column pr-5\">\n                orange\n                <nui-icon icon=\"add\" iconColor=\"orange\" id=\"nui-icon-test-color\"></nui-icon>\n            </div>\n            <div class=\"d-flex flex-column pr-5\">\n                light-blue\n                <nui-icon icon=\"add\" iconColor=\"light-blue\" id=\"nui-icon-test-color\"></nui-icon>\n            </div>\n            <div class=\"d-flex flex-column pr-5\">\n                primary-blue\n                <nui-icon icon=\"add\" iconColor=\"primary-blue\" id=\"nui-icon-test-color\"></nui-icon>\n            </div>\n            <div class=\"d-flex flex-column pr-5\">\n                gray\n                <nui-icon icon=\"add\" iconColor=\"gray\" id=\"nui-icon-test-color\"></nui-icon>\n            </div>\n            <div class=\"d-flex flex-column pr-5\">\n                disabled-gray\n                <nui-icon icon=\"add\" iconColor=\"disabled-gray\" id=\"nui-icon-test-color\"></nui-icon>\n            </div>\n        </div>\n        <hr />\n    </div>\n\n    <div>\n        <h3>Icon with Status</h3>\n\n        <div class=\"d-flex flex-row\">\n            <div class=\"d-flex flex-column pr-5\" *ngFor=\"let status of iconStatuses\">\n                {{status}}<nui-icon icon=\"add\" status=\"{{status}}\"></nui-icon>\n            </div>\n        </div>\n        <hr />\n    </div>\n\n    <div>\n        <h3>Icon with Child Status</h3>\n\n        <div class=\"d-flex flex-row\">\n            <div class=\"d-flex flex-column pr-5\" *ngFor=\"let status of iconStatuses\">\n                {{status}}<nui-icon icon=\"add\" status=\"up\" childStatus=\"{{status}}\"></nui-icon>\n            </div>\n        </div>\n        <hr />\n    </div>\n\n    <div>\n        <h3>Icon with Text Alignment</h3>\n        <div class=\"d-inline-flex align-items-center\">\n            <nui-icon icon=\"printer\" status=\"critical\" childStatus=\"down\"></nui-icon>\n            Managed entity name\n        </div>\n        <hr />\n    </div>\n\n    <div>\n        <h3>Icon with Counter</h3>\n        <nui-icon icon=\"email\" [counter]=\"6\" id=\"nui-icon-test-with-counter\"></nui-icon>\n        <hr />\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "4EEn":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-size/icon-size.example.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EEn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-icon-size-example\",\n    templateUrl: \"./icon-size.example.component.html\",\n})\n\nexport class IconSizeExampleComponent {}\n";
      /***/
    },

    /***/
    "5zsC":
    /*!**********************************************************************************!*\
      !*** ./demo/src/components/demo/icon/icon-color/icon-color.example.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: IconColorExampleComponent */

    /***/
    function zsC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconColorExampleComponent", function () {
        return IconColorExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icon.component */
      "45Bz");

      var IconColorExampleComponent = function IconColorExampleComponent() {
        _classCallCheck(this, IconColorExampleComponent);
      };

      IconColorExampleComponent.ɵfac = function IconColorExampleComponent_Factory(t) {
        return new (t || IconColorExampleComponent)();
      };

      IconColorExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IconColorExampleComponent,
        selectors: [["nui-icon-color-example"]],
        decls: 1,
        vars: 0,
        consts: [["icon", "add", "iconColor", "orange", "id", "nui-demo-icon-color"]],
        template: function IconColorExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-icon", 0);
          }
        },
        directives: [_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "6WQY":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-child-status/icon-child-status.example.component.ts ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WQY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import {Component} from \"@angular/core\";\nimport {IconStatus} from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-icon-child-status-example\",\n    templateUrl: \"./icon-child-status.example.component.html\",\n})\n\nexport class IconChildStatusExampleComponent {\n    status: IconStatus = IconStatus.Up;\n    childStatus: IconStatus = IconStatus.Sleep;\n}\n";
      /***/
    },

    /***/
    "6lY8":
    /*!**************************************************************************************!*\
      !*** ./demo/src/components/demo/icon/icon-counter/icon-counter.example.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: IconCounterExampleComponent */

    /***/
    function lY8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconCounterExampleComponent", function () {
        return IconCounterExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icon.component */
      "45Bz");

      var IconCounterExampleComponent = function IconCounterExampleComponent() {
        _classCallCheck(this, IconCounterExampleComponent);
      };

      IconCounterExampleComponent.ɵfac = function IconCounterExampleComponent_Factory(t) {
        return new (t || IconCounterExampleComponent)();
      };

      IconCounterExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IconCounterExampleComponent,
        selectors: [["nui-icon-counter-example"]],
        decls: 1,
        vars: 1,
        consts: [["icon", "email", "id", "nui-demo-icon-with-counter", 3, "counter"]],
        template: function IconCounterExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-icon", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("counter", 6);
          }
        },
        directives: [_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "7cVk":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-child-status/icon-child-status.example.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cVk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-icon icon=\"add\" [status]=\"status\" [childStatus]=\"childStatus\"></nui-icon>\n";
      /***/
    },

    /***/
    "BYaV":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-status/icon-status.example.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BYaV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-icon icon=\"add\" [status]=\"status\" id=\"nui-demo-icon-with-status-up\"></nui-icon>\n";
      /***/
    },

    /***/
    "BqlG":
    /*!*******************************************************************************************************!*\
      !*** ./demo/src/components/demo/icon sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*******************************************************************************************************/

    /*! no static exports found */

    /***/
    function BqlG(module, exports, __webpack_require__) {
      var map = {
        "./icon-basic/icon-basic.example.component.html": "1bsI",
        "./icon-basic/icon-basic.example.component.ts": "snZD",
        "./icon-child-status/icon-child-status.example.component.html": "7cVk",
        "./icon-child-status/icon-child-status.example.component.ts": "6WQY",
        "./icon-color/icon-color.example.component.html": "+8VF",
        "./icon-color/icon-color.example.component.ts": "jQew",
        "./icon-counter/icon-counter.example.component.html": "NNfs",
        "./icon-counter/icon-counter.example.component.ts": "yyiK",
        "./icon-docs/icon-docs.example.component.html": "q9kn",
        "./icon-docs/icon-docs.example.component.ts": "oi4e",
        "./icon-hover/icon-hover.example.component.html": "J7lh",
        "./icon-hover/icon-hover.example.component.ts": "NOk1",
        "./icon-list/icon-list.example.component.html": "Yme5",
        "./icon-list/icon-list.example.component.ts": "/bEf",
        "./icon-size/icon-size.example.component.html": "hI6i",
        "./icon-size/icon-size.example.component.ts": "4EEn",
        "./icon-status/icon-status.example.component.html": "BYaV",
        "./icon-status/icon-status.example.component.ts": "1teV",
        "./icon-visual-test/icon-visual-test.component.html": "47EU",
        "./icon-visual-test/icon-visual-test.component.ts": "uJO1",
        "./icon-with-text/icon-with-text.example.component.html": "r585",
        "./icon-with-text/icon-with-text.example.component.ts": "pYnm",
        "./icon.module.ts": "C12z",
        "./index.ts": "Tkyz"
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
      webpackContext.id = "BqlG";
      /***/
    },

    /***/
    "C12z":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function C12z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiExpanderModule, NuiIconModule, SrlcStage } from \"@nova-ui/bits\";\n\nimport {\n    IconBasicExampleComponent,\n    IconChildStatusExampleComponent,\n    IconColorExampleComponent,\n    IconCounterExampleComponent,\n    IconDocsExampleComponent,\n    IconHoverExampleComponent,\n    IconListExampleComponent,\n    IconSizeExampleComponent,\n    IconStatusExampleComponent,\n    IconVisualTestComponent,\n    IconWithTextExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: IconDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"icon-visual-test\",\n        component: IconVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiIconModule,\n        NuiExpanderModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        IconBasicExampleComponent,\n        IconChildStatusExampleComponent,\n        IconColorExampleComponent,\n        IconCounterExampleComponent,\n        IconDocsExampleComponent,\n        IconListExampleComponent,\n        IconSizeExampleComponent,\n        IconStatusExampleComponent,\n        IconHoverExampleComponent,\n        IconWithTextExampleComponent,\n        IconVisualTestComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class IconModule {\n}\n";
      /***/
    },

    /***/
    "J7lh":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-hover/icon-hover.example.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function J7lh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-icon icon=\"add\" iconHoverColor=\"gray\" id=\"nui-demo-icon-hover\"></nui-icon>\n";
      /***/
    },

    /***/
    "K3+M":
    /*!********************************************************************************!*\
      !*** ./demo/src/components/demo/icon/icon-docs/icon-docs.example.component.ts ***!
      \********************************************************************************/

    /*! exports provided: IconDocsExampleComponent */

    /***/
    function K3M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconDocsExampleComponent", function () {
        return IconDocsExampleComponent;
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


      var _icon_basic_icon_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../icon-basic/icon-basic.example.component */
      "uYeo");
      /* harmony import */


      var _icon_size_icon_size_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../icon-size/icon-size.example.component */
      "fOJQ");
      /* harmony import */


      var _icon_color_icon_color_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../icon-color/icon-color.example.component */
      "5zsC");
      /* harmony import */


      var _icon_hover_icon_hover_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../icon-hover/icon-hover.example.component */
      "+mSZ");
      /* harmony import */


      var _icon_status_icon_status_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../icon-status/icon-status.example.component */
      "2j0N");
      /* harmony import */


      var _icon_child_status_icon_child_status_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../icon-child-status/icon-child-status.example.component */
      "43X2");
      /* harmony import */


      var _icon_with_text_icon_with_text_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../icon-with-text/icon-with-text.example.component */
      "TaXb");
      /* harmony import */


      var _icon_counter_icon_counter_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../icon-counter/icon-counter.example.component */
      "6lY8");
      /* harmony import */


      var _icon_list_icon_list_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../icon-list/icon-list.example.component */
      "hYYR");

      var IconDocsExampleComponent = function IconDocsExampleComponent() {
        _classCallCheck(this, IconDocsExampleComponent);
      };

      IconDocsExampleComponent.ɵfac = function IconDocsExampleComponent_Factory(t) {
        return new (t || IconDocsExampleComponent)();
      };

      IconDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IconDocsExampleComponent,
        selectors: [["nui-icon-docs-example"]],
        decls: 117,
        vars: 0,
        consts: [["filenamePrefix", "icon-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "icon-size", "exampleTitle", "Size"], ["filenamePrefix", "icon-color", "exampleTitle", "Color"], ["filenamePrefix", "icon-hover", "exampleTitle", "Hover effect"], ["href", "../miscellaneous/enumerations.html#IconStatus", "target", "_blank"], ["filenamePrefix", "icon-status", "exampleTitle", "Status"], ["filenamePrefix", "icon-child-status", "exampleTitle", "Child Status"], ["filenamePrefix", "icon-with-text", "exampleTitle", "Alignment with Text"], ["filenamePrefix", "icon-counter", "exampleTitle", "Counter"], ["filenamePrefix", "icon-list", "exampleTitle", "Available Icons"]],
        template: function IconDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<nui-icon>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ", as the name implies, allows you to display an icon.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "NuiIconModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " To use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "<nui-icon>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " you can set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " input to the id of one of the available icon provided as part of Nova. See the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Available Icons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " section on this page.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-example-wrapper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "nui-icon-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " To override the default size of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "<nui-icon>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ", set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " input to the string values \"small\" (12px) or \"medium\" (20px). By default ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " is set to \"default\" (16px).\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "nui-icon-size-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " The color of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "<nui-icon>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " can be set by passing one of the following color string values to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "iconColor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " input: \"white\", \"light-blue\", \"gray\", \"disabled-gray\", \"primary-blue\", or \"orange\".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "nui-icon-color-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Hover Effect");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " To set the hover color of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "<nui-icon>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " pass one of the following color string values to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "iconHoverColor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " input: \"white\", \"light-blue\", \"gray\", \"disabled-gray\", \"primary-blue\", or \"orange\".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "nui-icon-hover-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "<nui-icon>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " can display a status sub-icon. Available values for the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " input can be found in the enum ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "IconStatus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, ". You can also pass a string value of an appropriate status in enum e.g. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "status=\"critical\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "nui-icon-status-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Child Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "<nui-icon>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " can display a status sub-icon with child status. Available values for the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "childStatus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " input can be found in the enum ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "IconStatus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, ". You can also pass a string value of an appropriate status in enum e.g. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "childStatus=\"critical\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "nui-icon-child-status-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Alignment with Text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " The example below demonstrates how to align text with the icon.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "nui-example-wrapper", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "nui-icon-with-text-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Counter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " To apply a counter badge to the icon, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "counter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " input to a valid integer.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "nui-example-wrapper", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "nui-icon-counter-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Available Icons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "nui-example-wrapper", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "nui-icon-list-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _icon_basic_icon_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["IconBasicExampleComponent"], _icon_size_icon_size_example_component__WEBPACK_IMPORTED_MODULE_3__["IconSizeExampleComponent"], _icon_color_icon_color_example_component__WEBPACK_IMPORTED_MODULE_4__["IconColorExampleComponent"], _icon_hover_icon_hover_example_component__WEBPACK_IMPORTED_MODULE_5__["IconHoverExampleComponent"], _icon_status_icon_status_example_component__WEBPACK_IMPORTED_MODULE_6__["IconStatusExampleComponent"], _icon_child_status_icon_child_status_example_component__WEBPACK_IMPORTED_MODULE_7__["IconChildStatusExampleComponent"], _icon_with_text_icon_with_text_example_component__WEBPACK_IMPORTED_MODULE_8__["IconWithTextExampleComponent"], _icon_counter_icon_counter_example_component__WEBPACK_IMPORTED_MODULE_9__["IconCounterExampleComponent"], _icon_list_icon_list_example_component__WEBPACK_IMPORTED_MODULE_10__["IconListExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "NNfs":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-counter/icon-counter.example.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NNfs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-icon icon=\"email\" [counter]=\"6\" id=\"nui-demo-icon-with-counter\"></nui-icon>\n";
      /***/
    },

    /***/
    "NOk1":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-hover/icon-hover.example.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NOk1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-icon-hover-example\",\n    templateUrl: \"./icon-hover.example.component.html\",\n})\n\nexport class IconHoverExampleComponent {}\n";
      /***/
    },

    /***/
    "TaXb":
    /*!******************************************************************************************!*\
      !*** ./demo/src/components/demo/icon/icon-with-text/icon-with-text.example.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: IconWithTextExampleComponent */

    /***/
    function TaXb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconWithTextExampleComponent", function () {
        return IconWithTextExampleComponent;
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


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icon.component */
      "45Bz");

      var IconWithTextExampleComponent = function IconWithTextExampleComponent() {
        _classCallCheck(this, IconWithTextExampleComponent);

        this.status = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["IconStatus"].Up;
        this.childStatus = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["IconStatus"].Sleep;
      };

      IconWithTextExampleComponent.ɵfac = function IconWithTextExampleComponent_Factory(t) {
        return new (t || IconWithTextExampleComponent)();
      };

      IconWithTextExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: IconWithTextExampleComponent,
        selectors: [["nui-icon-with-text-example"]],
        decls: 4,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5754806911956338696$$DEMO_SRC_COMPONENTS_DEMO_ICON_ICON_WITH_TEXT_ICON_WITH_TEXT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Managed entity name");
            i18n_0 = MSG_EXTERNAL_5754806911956338696$$DEMO_SRC_COMPONENTS_DEMO_ICON_ICON_WITH_TEXT_ICON_WITH_TEXT_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241F80febca9e183c54f0226e9fed02be69e65adba88\u241F5754806911956338696:Managed entity name"])));
          }

          return [[1, "d-inline-flex", "align-items-center"], ["icon", "printer", 3, "status", "childStatus"], i18n_0];
        },
        template: function IconWithTextExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nui-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.status)("childStatus", ctx.childStatus);
          }
        },
        directives: [_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Tkyz":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/index.ts ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tkyz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./icon-basic/icon-basic.example.component\";\nexport * from \"./icon-docs/icon-docs.example.component\";\nexport * from \"./icon-color/icon-color.example.component\";\nexport * from \"./icon-list/icon-list.example.component\";\nexport * from \"./icon-size/icon-size.example.component\";\nexport * from \"./icon-status/icon-status.example.component\";\nexport * from \"./icon-hover/icon-hover.example.component\";\nexport * from \"./icon-counter/icon-counter.example.component\";\nexport * from \"./icon-child-status/icon-child-status.example.component\";\nexport * from \"./icon-with-text/icon-with-text.example.component\";\nexport * from \"./icon-visual-test/icon-visual-test.component\";\n";
      /***/
    },

    /***/
    "Yme5":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-list/icon-list.example.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Yme5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngFor=\"let category of categories\">\n    <nui-expander [header]=\"category\">\n        <div class=\"row align-items-baseline\">\n            <div *ngFor=\"let icon of icons\">\n                <div class=\"m-3\" *ngIf=\"icon.code && icon.category == category\">\n                    <figure class=\"d-flex flex-column align-items-center\">\n                        <nui-icon [icon]=\"icon.name\"></nui-icon>\n                        <figcaption class=\"mt-2\">{{icon.name}}</figcaption>\n                    </figure>\n                </div>\n            </div>\n        </div>\n    </nui-expander>\n</div>\n";
      /***/
    },

    /***/
    "fOJQ":
    /*!********************************************************************************!*\
      !*** ./demo/src/components/demo/icon/icon-size/icon-size.example.component.ts ***!
      \********************************************************************************/

    /*! exports provided: IconSizeExampleComponent */

    /***/
    function fOJQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconSizeExampleComponent", function () {
        return IconSizeExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icon.component */
      "45Bz");

      var IconSizeExampleComponent = function IconSizeExampleComponent() {
        _classCallCheck(this, IconSizeExampleComponent);
      };

      IconSizeExampleComponent.ɵfac = function IconSizeExampleComponent_Factory(t) {
        return new (t || IconSizeExampleComponent)();
      };

      IconSizeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IconSizeExampleComponent,
        selectors: [["nui-icon-size-example"]],
        decls: 3,
        vars: 0,
        consts: [["icon", "add", "iconSize", "small", "id", "nui-demo-icon-small"], ["icon", "add", "id", "nui-demo-icon-default-size"], ["icon", "add", "iconSize", "medium", "id", "nui-demo-icon-medium-size"]],
        template: function IconSizeExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nui-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-icon", 2);
          }
        },
        directives: [_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "hI6i":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-size/icon-size.example.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hI6i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-icon icon=\"add\" iconSize=\"small\" id=\"nui-demo-icon-small\"></nui-icon>\n<nui-icon icon=\"add\" id=\"nui-demo-icon-default-size\"></nui-icon>\n<nui-icon icon=\"add\" iconSize=\"medium\" id=\"nui-demo-icon-medium-size\"></nui-icon>\n";
      /***/
    },

    /***/
    "hYYR":
    /*!********************************************************************************!*\
      !*** ./demo/src/components/demo/icon/icon-list/icon-list.example.component.ts ***!
      \********************************************************************************/

    /*! exports provided: IconListExampleComponent */

    /***/
    function hYYR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconListExampleComponent", function () {
        return IconListExampleComponent;
      });
      /* harmony import */


      var _src_lib_icon_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icons */
      "0r6c");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/expander/expander.component */
      "j4OC");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icon.component */
      "45Bz");

      function IconListExampleComponent_div_0_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "figure", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "figcaption", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var icon_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", icon_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](icon_r3.name);
        }
      }

      function IconListExampleComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IconListExampleComponent_div_0_div_3_div_1_Template, 5, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var icon_r3 = ctx.$implicit;

          var category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", icon_r3.code && icon_r3.category == category_r1);
        }
      }

      function IconListExampleComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-expander", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IconListExampleComponent_div_0_div_3_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", category_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.icons);
        }
      }

      var IconListExampleComponent = /*#__PURE__*/function () {
        function IconListExampleComponent() {
          _classCallCheck(this, IconListExampleComponent);
        }

        _createClass(IconListExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.icons = _src_lib_icon_icons__WEBPACK_IMPORTED_MODULE_0__["icons"];
            this.categories = this.getCategories(_src_lib_icon_icons__WEBPACK_IMPORTED_MODULE_0__["icons"]);
          }
        }, {
          key: "getCategories",
          value: function getCategories(icons) {
            var categories = [];

            var _iterator = _createForOfIteratorHelper(icons),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var icon = _step.value;

                if (categories.indexOf(icon.category) === -1) {
                  categories.push(icon.category);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return categories;
          }
        }]);

        return IconListExampleComponent;
      }();

      IconListExampleComponent.ɵfac = function IconListExampleComponent_Factory(t) {
        return new (t || IconListExampleComponent)();
      };

      IconListExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: IconListExampleComponent,
        selectors: [["nui-icon-list-example"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngFor", "ngForOf"], [3, "header"], [1, "row", "align-items-baseline"], ["class", "m-3", 4, "ngIf"], [1, "m-3"], [1, "d-flex", "flex-column", "align-items-center"], [3, "icon"], [1, "mt-2"]],
        template: function IconListExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, IconListExampleComponent_div_0_Template, 4, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_3__["ExpanderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "iFCb":
    /*!************************************************!*\
      !*** ./demo/src/components/demo/icon/index.ts ***!
      \************************************************/

    /*! exports provided: IconBasicExampleComponent, IconDocsExampleComponent, IconColorExampleComponent, IconListExampleComponent, IconSizeExampleComponent, IconStatusExampleComponent, IconHoverExampleComponent, IconCounterExampleComponent, IconChildStatusExampleComponent, IconWithTextExampleComponent, IconVisualTestComponent */

    /***/
    function iFCb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _icon_basic_icon_basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./icon-basic/icon-basic.example.component */
      "uYeo");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IconBasicExampleComponent", function () {
        return _icon_basic_icon_basic_example_component__WEBPACK_IMPORTED_MODULE_0__["IconBasicExampleComponent"];
      });
      /* harmony import */


      var _icon_docs_icon_docs_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./icon-docs/icon-docs.example.component */
      "K3+M");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IconDocsExampleComponent", function () {
        return _icon_docs_icon_docs_example_component__WEBPACK_IMPORTED_MODULE_1__["IconDocsExampleComponent"];
      });
      /* harmony import */


      var _icon_color_icon_color_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./icon-color/icon-color.example.component */
      "5zsC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IconColorExampleComponent", function () {
        return _icon_color_icon_color_example_component__WEBPACK_IMPORTED_MODULE_2__["IconColorExampleComponent"];
      });
      /* harmony import */


      var _icon_list_icon_list_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./icon-list/icon-list.example.component */
      "hYYR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IconListExampleComponent", function () {
        return _icon_list_icon_list_example_component__WEBPACK_IMPORTED_MODULE_3__["IconListExampleComponent"];
      });
      /* harmony import */


      var _icon_size_icon_size_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./icon-size/icon-size.example.component */
      "fOJQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IconSizeExampleComponent", function () {
        return _icon_size_icon_size_example_component__WEBPACK_IMPORTED_MODULE_4__["IconSizeExampleComponent"];
      });
      /* harmony import */


      var _icon_status_icon_status_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./icon-status/icon-status.example.component */
      "2j0N");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IconStatusExampleComponent", function () {
        return _icon_status_icon_status_example_component__WEBPACK_IMPORTED_MODULE_5__["IconStatusExampleComponent"];
      });
      /* harmony import */


      var _icon_hover_icon_hover_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./icon-hover/icon-hover.example.component */
      "+mSZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IconHoverExampleComponent", function () {
        return _icon_hover_icon_hover_example_component__WEBPACK_IMPORTED_MODULE_6__["IconHoverExampleComponent"];
      });
      /* harmony import */


      var _icon_counter_icon_counter_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./icon-counter/icon-counter.example.component */
      "6lY8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IconCounterExampleComponent", function () {
        return _icon_counter_icon_counter_example_component__WEBPACK_IMPORTED_MODULE_7__["IconCounterExampleComponent"];
      });
      /* harmony import */


      var _icon_child_status_icon_child_status_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./icon-child-status/icon-child-status.example.component */
      "43X2");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IconChildStatusExampleComponent", function () {
        return _icon_child_status_icon_child_status_example_component__WEBPACK_IMPORTED_MODULE_8__["IconChildStatusExampleComponent"];
      });
      /* harmony import */


      var _icon_with_text_icon_with_text_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./icon-with-text/icon-with-text.example.component */
      "TaXb");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IconWithTextExampleComponent", function () {
        return _icon_with_text_icon_with_text_example_component__WEBPACK_IMPORTED_MODULE_9__["IconWithTextExampleComponent"];
      });
      /* harmony import */


      var _icon_visual_test_icon_visual_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./icon-visual-test/icon-visual-test.component */
      "x3G+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IconVisualTestComponent", function () {
        return _icon_visual_test_icon_visual_test_component__WEBPACK_IMPORTED_MODULE_10__["IconVisualTestComponent"];
      });
      /***/

    },

    /***/
    "jQew":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-color/icon-color.example.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jQew(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-icon-color-example\",\n    templateUrl: \"./icon-color.example.component.html\",\n})\n\nexport class IconColorExampleComponent {}\n";
      /***/
    },

    /***/
    "oi4e":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-docs/icon-docs.example.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oi4e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-icon-docs-example\",\n    templateUrl: \"./icon-docs.example.component.html\",\n})\n\nexport class IconDocsExampleComponent {}\n";
      /***/
    },

    /***/
    "oyWs":
    /*!******************************************************!*\
      !*** ./demo/src/components/demo/icon/icon.module.ts ***!
      \******************************************************/

    /*! exports provided: IconModule */

    /***/
    function oyWs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconModule", function () {
        return IconModule;
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
      "iFCb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["IconDocsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "icon-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["IconVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var IconModule = function IconModule() {
        _classCallCheck(this, IconModule);
      };

      IconModule.ɵfac = function IconModule_Factory(t) {
        return new (t || IconModule)();
      };

      IconModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: IconModule
      });
      IconModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("BqlG");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiExpanderModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](IconModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["IconBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["IconChildStatusExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["IconColorExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["IconCounterExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["IconDocsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["IconListExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["IconSizeExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["IconStatusExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["IconHoverExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["IconWithTextExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["IconVisualTestComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiExpanderModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "pYnm":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-with-text/icon-with-text.example.component.ts ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pYnm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import {Component} from \"@angular/core\";\nimport {IconStatus} from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-icon-with-text-example\",\n    templateUrl: \"./icon-with-text.example.component.html\",\n})\n\nexport class IconWithTextExampleComponent {\n    status: IconStatus = IconStatus.Up;\n    childStatus: IconStatus = IconStatus.Sleep;\n}\n";
      /***/
    },

    /***/
    "q9kn":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-docs/icon-docs.example.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function q9kn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    <code>&lt;nui-icon&gt;</code>, as the name implies, allows you to display an icon.\n</p>\n\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiIconModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    To use <code>&lt;nui-icon&gt;</code> you can set the <code>icon</code> input to the id of one of the available icon\n    provided as part of Nova. See the <strong>Available Icons</strong> section on this page.\n</p>\n<nui-example-wrapper filenamePrefix=\"icon-basic\" exampleTitle=\"Basic Usage\">\n    <nui-icon-basic-example></nui-icon-basic-example>\n</nui-example-wrapper>\n\n<h2>Size</h2>\n<p>\n    To override the default size of <code>&lt;nui-icon&gt;</code>, set the <code>size</code> input to the string values \"small\" (12px) or \"medium\" (20px).\n    By default <code>size</code> is set to \"default\" (16px).\n</p>\n<nui-example-wrapper filenamePrefix=\"icon-size\" exampleTitle=\"Size\">\n    <nui-icon-size-example></nui-icon-size-example>\n</nui-example-wrapper>\n\n<h2>Color</h2>\n<p>\n    The color of <code>&lt;nui-icon&gt;</code> can be set by passing one of the following color string values to the <code>iconColor</code> input: \"white\", \"light-blue\", \"gray\", \"disabled-gray\", \"primary-blue\", or \"orange\".\n</p>\n<nui-example-wrapper filenamePrefix=\"icon-color\" exampleTitle=\"Color\">\n    <nui-icon-color-example></nui-icon-color-example>\n</nui-example-wrapper>\n\n<h2>Hover Effect</h2>\n<p>\n    To set the hover color of <code>&lt;nui-icon&gt;</code> pass one of the following color string values to the <code>iconHoverColor</code> input: \"white\", \"light-blue\", \"gray\", \"disabled-gray\", \"primary-blue\", or \"orange\".\n</p>\n<nui-example-wrapper filenamePrefix=\"icon-hover\" exampleTitle=\"Hover effect\">\n    <nui-icon-hover-example></nui-icon-hover-example>\n</nui-example-wrapper>\n\n<h2>Status</h2>\n<p>\n    <code>&lt;nui-icon&gt;</code> can display a status sub-icon. Available values for the <code>status</code> input can be found in the enum <code><a href=\"../miscellaneous/enumerations.html#IconStatus\" target=\"_blank\">IconStatus</a></code>.\n    You can also pass a string value of an appropriate status in enum e.g. <code>status=\"critical\"</code>\n</p>\n<nui-example-wrapper filenamePrefix=\"icon-status\" exampleTitle=\"Status\">\n    <nui-icon-status-example></nui-icon-status-example>\n</nui-example-wrapper>\n\n<h2>Child Status</h2>\n<p>\n    <code>&lt;nui-icon&gt;</code> can display a status sub-icon with child status. Available values for the <code>childStatus</code> input can be found in the enum <code><a href=\"../miscellaneous/enumerations.html#IconStatus\" target=\"_blank\">IconStatus</a></code>.\n    You can also pass a string value of an appropriate status in enum e.g. <code>childStatus=\"critical\"</code>\n</p>\n<nui-example-wrapper filenamePrefix=\"icon-child-status\" exampleTitle=\"Child Status\">\n    <nui-icon-child-status-example></nui-icon-child-status-example>\n</nui-example-wrapper>\n\n<h2>Alignment with Text</h2>\n<p>\n    The example below demonstrates how to align text with the icon.\n</p>\n<nui-example-wrapper filenamePrefix=\"icon-with-text\" exampleTitle=\"Alignment with Text\">\n    <nui-icon-with-text-example></nui-icon-with-text-example>\n</nui-example-wrapper>\n\n<h2>Counter</h2>\n<p>\n    To apply a counter badge to the icon, set the <code>counter</code> input to a valid integer.\n</p>\n<nui-example-wrapper filenamePrefix=\"icon-counter\" exampleTitle=\"Counter\">\n    <nui-icon-counter-example></nui-icon-counter-example>\n</nui-example-wrapper>\n\n<h2>Available Icons</h2>\n<nui-example-wrapper filenamePrefix=\"icon-list\" exampleTitle=\"Available Icons\">\n    <nui-icon-list-example></nui-icon-list-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "r585":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-with-text/icon-with-text.example.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function r585(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-inline-flex align-items-center\">\n    <nui-icon icon=\"printer\" [status]=\"status\" [childStatus]=\"childStatus\"></nui-icon>\n    <span i18n>Managed entity name</span>\n</div>\n";
      /***/
    },

    /***/
    "snZD":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-basic/icon-basic.example.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function snZD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-icon-basic-example\",\n    templateUrl: \"./icon-basic.example.component.html\",\n})\n\nexport class IconBasicExampleComponent {}\n";
      /***/
    },

    /***/
    "uJO1":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-visual-test/icon-visual-test.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uJO1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import {Component, OnInit} from \"@angular/core\";\nimport {IconStatus} from \"@nova-ui/bits\";\n\nimport {icons as iconsData} from \"../../../../../../src/lib/icon/icons\";\n\n@Component({\n    selector: \"nui-icon-visual-test\",\n    templateUrl: \"./icon-visual-test.component.html\",\n})\nexport class IconVisualTestComponent implements OnInit {\n    public icons: any[];\n    public categories: any[];\n    public iconStatuses: string[] = Object.values(IconStatus);\n\n    public ngOnInit(): void {\n\n        this.icons = iconsData;\n        this.categories = this.getCategories(iconsData);\n    }\n\n    public getCategories(icons: any[]) {\n        const categories = [];\n        for (const icon of icons) {\n            if (categories.indexOf(icon.category) === -1) {\n                categories.push(icon.category);\n            }\n        }\n        return categories;\n    }\n}\n";
      /***/
    },

    /***/
    "uYeo":
    /*!**********************************************************************************!*\
      !*** ./demo/src/components/demo/icon/icon-basic/icon-basic.example.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: IconBasicExampleComponent */

    /***/
    function uYeo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconBasicExampleComponent", function () {
        return IconBasicExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icon.component */
      "45Bz");

      var IconBasicExampleComponent = function IconBasicExampleComponent() {
        _classCallCheck(this, IconBasicExampleComponent);
      };

      IconBasicExampleComponent.ɵfac = function IconBasicExampleComponent_Factory(t) {
        return new (t || IconBasicExampleComponent)();
      };

      IconBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IconBasicExampleComponent,
        selectors: [["nui-icon-basic-example"]],
        decls: 1,
        vars: 0,
        consts: [["icon", "add"]],
        template: function IconBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-icon", 0);
          }
        },
        directives: [_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "x3G+":
    /*!**************************************************************************************!*\
      !*** ./demo/src/components/demo/icon/icon-visual-test/icon-visual-test.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: IconVisualTestComponent */

    /***/
    function x3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconVisualTestComponent", function () {
        return IconVisualTestComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _src_lib_icon_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icons */
      "0r6c");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icon.component */
      "45Bz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function IconVisualTestComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "nui-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", status_r2, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("status", status_r2);
        }
      }

      function IconVisualTestComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "nui-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", status_r3, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("childStatus", status_r3);
        }
      }

      var IconVisualTestComponent = /*#__PURE__*/function () {
        function IconVisualTestComponent() {
          _classCallCheck(this, IconVisualTestComponent);

          this.iconStatuses = Object.values(_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["IconStatus"]);
        }

        _createClass(IconVisualTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.icons = _src_lib_icon_icons__WEBPACK_IMPORTED_MODULE_1__["icons"];
            this.categories = this.getCategories(_src_lib_icon_icons__WEBPACK_IMPORTED_MODULE_1__["icons"]);
          }
        }, {
          key: "getCategories",
          value: function getCategories(icons) {
            var categories = [];

            var _iterator2 = _createForOfIteratorHelper(icons),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var icon = _step2.value;

                if (categories.indexOf(icon.category) === -1) {
                  categories.push(icon.category);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return categories;
          }
        }]);

        return IconVisualTestComponent;
      }();

      IconVisualTestComponent.ɵfac = function IconVisualTestComponent_Factory(t) {
        return new (t || IconVisualTestComponent)();
      };

      IconVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: IconVisualTestComponent,
        selectors: [["nui-icon-visual-test"]],
        decls: 57,
        vars: 3,
        consts: [[1, "ml-4"], ["icon", "add", "iconHoverColor", "gray", "id", "nui-icon-test-basic-usage"], ["icon", "add", "iconSize", "small", "id", "nui-icon-test-small-size", 1, "pr-2"], ["icon", "add", "id", "nui-icon-test-default-size", 1, "pr-2"], ["icon", "add", "iconSize", "medium", "id", "nui-icon-test-medium-size", 1, "pr-2"], [1, "d-flex", "flex-row"], [1, "d-flex", "flex-column", "pr-5"], ["icon", "add", "iconColor", "orange", "id", "nui-icon-test-color"], ["icon", "add", "iconColor", "light-blue", "id", "nui-icon-test-color"], ["icon", "add", "iconColor", "primary-blue", "id", "nui-icon-test-color"], ["icon", "add", "iconColor", "gray", "id", "nui-icon-test-color"], ["icon", "add", "iconColor", "disabled-gray", "id", "nui-icon-test-color"], ["class", "d-flex flex-column pr-5", 4, "ngFor", "ngForOf"], [1, "d-inline-flex", "align-items-center"], ["icon", "printer", "status", "critical", "childStatus", "down"], ["icon", "email", "id", "nui-icon-test-with-counter", 3, "counter"], ["icon", "add", 3, "status"], ["icon", "add", "status", "up", 3, "childStatus"]],
        template: function IconVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Basic icon usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "nui-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Icon with Differrent Sizes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "nui-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "nui-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "nui-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Icon with Color");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " orange ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "nui-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " light-blue ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "nui-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " primary-blue ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "nui-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " gray ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "nui-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " disabled-gray ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "nui-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Icon with Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, IconVisualTestComponent_div_37_Template, 3, 2, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Icon with Child Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, IconVisualTestComponent_div_43_Template, 3, 2, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Icon with Text Alignment");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "nui-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Managed entity name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Icon with Counter");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "nui-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.iconStatuses);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.iconStatuses);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("counter", 6);
          }
        },
        directives: [_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "yyiK":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/icon/icon-counter/icon-counter.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yyiK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-icon-counter-example\",\n    templateUrl: \"./icon-counter.example.component.html\",\n})\n\nexport class IconCounterExampleComponent {}\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-icon-icon-module-es5.js.map