(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-toast-toast-module"], {
    /***/
    "+SQs":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-events/toast-events.example.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SQs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"isDisplayed; else notoast\">\n    <nui-message type=\"info\" [allowDismiss]=\"false\">\n        <div i18n>ID of last toast shown: {{lastShown}}</div>\n    </nui-message>\n    <nui-message type=\"info\" [allowDismiss]=\"false\">\n        <div id=\"toast-example-click-counter\" i18n>Clicks on toast: {{clickCount}}</div>\n    </nui-message>\n</div>\n<ng-template #notoast><nui-message type=\"info\" [allowDismiss]=\"false\" i18n>No toast displayed</nui-message></ng-template>\n<nui-divider></nui-divider>\n<button nui-button type=\"button\" id=\"nui-toast-events-example\" (click)=\"onShowToast($event)\" i18n>Show Toast</button>\n";
      /***/
    },

    /***/
    "/aG4":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-type/toast-type.example.component.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aG4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnInit } from \"@angular/core\";\nimport { IToastConfig, IToastService, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-toast-type-example\",\n    templateUrl: \"./toast-type.example.component.html\",\n})\nexport class ToastTypeExampleComponent implements OnInit {\n    constructor(@Inject(ToastService) private toastService: IToastService) { }\n\n    ngOnInit() {\n        this.toastService.setConfig({}, \"id\");\n    }\n\n    public onShowInfo(highlightMode: boolean): void {\n        this.toastService.info({\n            title: $localize `Info`,\n            message: $localize `E pluribus unum (/ˈiː ˈplʊərɪbəs ˈjuːnəm/; Latin: [ˈeː ˈpluːrɪbʊs ˈuːnũː]) is Latin for 'Out of many, one'`,\n            options: this.getOptions(),\n        });\n    }\n\n    public onShowSuccess(highlightMode: boolean): void {\n        this.toastService.success({\n            title: $localize `Success`,\n            message: $localize `Well done!`,\n            options:  this.getOptions(),\n        });\n    }\n\n    public onShowWarning(highlightMode: boolean): void {\n        this.toastService.warning({\n            title: $localize `Warning`,\n            message: $localize `There can be only one.`,\n            options:  this.getOptions(),\n        });\n    }\n\n    public onShowError(highlightMode: boolean): void {\n        this.toastService.error({\n            title: $localize `Error`,\n            message: $localize `Nope.`,\n            options:  this.getOptions(),\n        });\n    }\n\n    public clear(): void {\n        this.toastService.clear();\n    }\n\n    private getOptions(): IToastConfig {\n        return {\n            timeOut: 3000,\n            extendedTimeOut: 1000,\n        };\n    }\n}\n";
      /***/
    },

    /***/
    "0/8W":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-docs/toast-docs.example.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiToastModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<div>\n    You can use <code>IToastService</code>, <code>ToastService</code> to show a (usually) temporary message (toast),\n    associated with some event. In example below we're showing a toast message when the \"Show Toast\" button is clicked.\n    Following construction is used to create a toast:\n    <code>IToastService.info(toastDeclaration: <a href=\"../interfaces/IToastDeclaration.html\">IToastDeclaration</a>)</code>.\n    Any property in <a href=\"../interfaces/IToastDeclaration.html\"><code>IToastDeclaration</code></a> is optional.\n</div>\n<p>\n    When using the toast component with a title, a space is automatically inserted in front of the message body to create spacial separation from the title.\n    In addition to the provided space, it's suggested that the user add a sentence-ending punctuation mark to the title to further emphasize this separation.\n</p>\n<nui-example-wrapper filenamePrefix=\"toast-basic\" exampleTitle=\"Basic usage\">\n    <nui-toast-basic-example></nui-toast-basic-example>\n</nui-example-wrapper>\n\n<h2>Basic Usage With Html</h2>\n<p>\n    Toast allows HTML usage inside the <code>{{getToastDeclarationKey(\"message\")}}</code> container by\n    default. Note: The provided value will be sanitized and rendered.\n</p>\n<p>\n    To configure a toast to display HTML as plain text, set the\n    <code>{{getToastConfigKey(\"enableHtml\")}}</code> property in\n    <code>{{getToastDeclarationKey(\"options\")}}</code> to <code>false</code>.\n</p>\n<p>\n    When the <code>{{getToastConfigKey(\"enableHtml\")}}</code> flag is turned on, all the content will be\n    sanitized, basic tags for changing fonts are often allowed, such as <code>&lt;b&gt;</code>, \n    <code>&lt;i&gt;</code>, <code>&lt;u&gt;</code>, <code>&lt;em&gt;</code>, and \n    <code>&lt;strong&gt;</code>. More advanced tags such as <code>&lt;script&gt;</code>,\n    <code>&lt;object&gt;</code>, <code>&lt;embed&gt;</code>, and <code>&lt;link&gt;</code> are removed by\n    the sanitization process. Additionally, potentially dangerous attributes such as\n    <code>onclick</code> are removed in order to prevent malicious code from being injected.\n</p>\n<nui-example-wrapper filenamePrefix=\"toast-basic-html\" exampleTitle=\"Basic HTML Usage\">\n    <nui-toast-basic-html-example></nui-toast-basic-html-example>\n</nui-example-wrapper>\n\n<h2>Types</h2>\n<p>\n    Toast types allows you to convey some contextual information about the message by applying different styles to toasts.\n</p>\n<nui-example-wrapper filenamePrefix=\"toast-type\" exampleTitle=\"Types\">\n    <nui-toast-type-example></nui-toast-type-example>\n</nui-example-wrapper>\n\n<h2>Configuration</h2>\n<p>\n    Toast messages are highly configurable via <a href=\"../interfaces/IToastConfig.html\">IToastConfig</a> interface.\n    The following example employs some of the more common settings:\n    <br/>\n    <code>\n        extendedTimeOut: 2000,\n        clickToDismiss: true,\n        closeButton: true,\n        positionClass: \"toast-bottom-right\",\n        progressBar: true,\n        progressAnimation: \"increasing\",\n        timeOut: 5000\n    </code>\n</p>\n<nui-example-wrapper filenamePrefix=\"toast-config\" exampleTitle=\"Configuration\">\n    <nui-toast-config-example></nui-toast-config-example>\n</nui-example-wrapper>\n\n<h2>Positioning</h2>\n<p>\n    The position of a toast message is determined by the value of <code>IToastConfig.positionClass</code>.\n    By default toast is positioned top-right. To implement different positioning you must pass one of available\n    options from <a href=\"../miscellaneous/enumerations.html#ToastPositionClass\"><code>ToastPositionClass</code></a>\n    to <a href=\"../interfaces/IToastConfig.html\"><code>IToastConfig</code></a> positionClass property.<br /><br />\n\n    It is also possible to set a custom class to configure the position of the <code>nui-toast</code>.  Simply populate\n    the <code>IToastConfig.positionClass</code> with the custom css class name.\n\n    <nui-message type=\"warning\" [allowDismiss]=\"false\">\n        Make sure you defined a custom class in a global stylesheet\n    </nui-message>\n</p>\n<nui-example-wrapper filenamePrefix=\"toast-position\" exampleTitle=\"Positioning\">\n    <nui-toast-position-example></nui-toast-position-example>\n</nui-example-wrapper>\n\n<h2>Sticky Error</h2>\n<p>\n    You can also optionally force error toasts to remain visible indefinitely using <code>IToastConfig.stickyError</code>.\n    Note, that this option is only available with <code>IToastService.error</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"toast-sticky-error\" exampleTitle=\"Sticky error\">\n    <nui-toast-sticky-error-example></nui-toast-sticky-error-example>\n</nui-example-wrapper>\n\n<h2>Events</h2>\n<p>\n    With <a href=\"../interfaces/IActiveToast.html\">IActiveToast</a>, it's possible to\n    capture (and act upon) following events per toast instance:\n</p>\n<ul>\n    <li><code>onShown</code></li>\n    <li><code>onHidden</code></li>\n    <li><code>onClick</code></li>\n</ul>\n<nui-example-wrapper filenamePrefix=\"toast-events\" exampleTitle=\"Events\">\n    <nui-toast-events-example></nui-toast-events-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "1Fq8":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-position/toast-position.example.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Fq8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnInit } from \"@angular/core\";\nimport { IToastConfig, IToastService, ToastPositionClass, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-toast-position-example\",\n    templateUrl: \"./toast-position.example.component.html\",\n})\nexport class ToastPositionExampleComponent implements OnInit {\n    public toastPositions = [\n        {\n            displayValue: $localize `Top Right`,\n            className: ToastPositionClass.TOP_RIGHT,\n        },\n        {\n            displayValue: $localize `Top Left`,\n            className: ToastPositionClass.TOP_LEFT,\n        },\n        {\n            displayValue: $localize `Bottom Right`,\n            className: ToastPositionClass.BOTTOM_RIGHT,\n        },\n        {\n            displayValue: $localize `Bottom Left`,\n            className: ToastPositionClass.BOTTOM_LEFT,\n        },\n        {\n            displayValue: $localize `Top Full Width`,\n            className: ToastPositionClass.TOP_FULL_WIDTH,\n        },\n        {\n            displayValue: $localize `Bottom Full Width`,\n            className: ToastPositionClass.BOTTOM_FULL_WIDTH,\n        },\n        {\n            displayValue: $localize `Top Center`,\n            className: ToastPositionClass.TOP_CENTER,\n        },\n        {\n            displayValue: $localize `Bottom Center`,\n            className: ToastPositionClass.BOTTOM_CENTER,\n        },\n        {\n            displayValue: $localize `CUSTOM CLASS (top: 200px; right: 200px)`,\n            className: \"demoToastCustomClass\",\n        },\n    ];\n    public selectedPosition: ToastPositionClass | string = this.toastPositions[0].className;\n\n    constructor(@Inject(ToastService) private toastService: IToastService) { }\n\n    ngOnInit() {\n        this.toastService.setConfig({}, \"id\");\n    }\n\n    public onShowToast(highlightMode: boolean): void {\n        this.toastService.info({\n            title: $localize `Position Example`,\n            message: this.selectedPosition,\n            options: this.getOptions(),\n        });\n    }\n\n    private getOptions(): IToastConfig {\n        return {\n            timeOut: 5000,\n            extendedTimeOut: 2000,\n            positionClass: this.selectedPosition,\n        };\n    }\n}\n";
      /***/
    },

    /***/
    "32Qo":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-sticky-error/toast-sticky-error.example.component.html ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button type=\"button\" id=\"nui-show-sticky-error-toast-example\" (click)=\"onShowStickyError($event)\" i18n>Show Sticky Error</button>\n<button nui-button type=\"button\" id=\"nui-hide-sticky-error-toast-example\" (click)=\"onHideStickyError($event)\" i18n>Hide Sticky Error</button>\n";
      /***/
    },

    /***/
    "9j/F":
    /*!*************************************************************************************!*\
      !*** ./demo/src/components/demo/toast/toast-basic/toast-basic.example.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ToastBasicExampleComponent */

    /***/
    function jF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastBasicExampleComponent", function () {
        return ToastBasicExampleComponent;
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


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ToastBasicExampleComponent = /*#__PURE__*/function () {
        function ToastBasicExampleComponent(toastService) {
          _classCallCheck(this, ToastBasicExampleComponent);

          this.toastService = toastService;
        }

        _createClass(ToastBasicExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.toastService.setConfig({}, "id");
          }
        }, {
          key: "onShowToast",
          value: function onShowToast(highlightMode) {
            this.toastService.info({
              title: $localize(_templateObject || (_templateObject = _taggedTemplateLiteral(["Simple Toast."]))),
              message: $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Hi there! I'm a simple toast message"]))),
              options: this.getOptions()
            });
          }
        }, {
          key: "getOptions",
          value: function getOptions() {
            return {
              timeOut: 5000,
              extendedTimeOut: 2000
            };
          }
        }]);

        return ToastBasicExampleComponent;
      }();

      ToastBasicExampleComponent.ɵfac = function ToastBasicExampleComponent_Factory(t) {
        return new (t || ToastBasicExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      ToastBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ToastBasicExampleComponent,
        selectors: [["nui-toast-basic-example"]],
        decls: 2,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_557759875456545576$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_BASIC_TOAST_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Show Toast");
            i18n_0 = MSG_EXTERNAL_557759875456545576$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_BASIC_TOAST_BASIC_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241F4600bd30106171bfee8c959a00f710ab918c38a8\u241F557759875456545576:Show Toast"])));
          }

          return [["nui-button", "", "type", "button", "id", "nui-basic-toast-example", 3, "click"], i18n_0];
        },
        template: function ToastBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastBasicExampleComponent_Template_button_click_0_listener($event) {
              return ctx.onShowToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Cfpd":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-visual-test/toast-visual-test.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Cfpd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container pt-5\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Basic Toast Positioned defferently</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"d-flex justify-content-start\" id=\"nui-toast-positions\">\n                <button id=\"nui-toast-button-all-positions\" (click)=\"showToastsAllPositions($event, 200000)\">Trigger all positions</button>\n            </div>\n            <div class=\"d-flex justify-content-start\" id=\"nui-toast-fw\">\n                <button id=\"nui-toast-position-fw\" (click)=\"showToastsFullWidth($event, 10000)\">Full Width</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Basic Toast Positioned defferently</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"d-flex justify-content-start\">\n                <button id=\"nui-toast-clear-all-toasts\" (click)=\"clearToast($event)\">Clear All Toasts</button>\n                <button id=\"nui-toast-sticky\" (click)=\"callStickyToast($event)\">Call Sticky Error!</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Toast messages adjust size</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"d-flex justify-content-start\" id=\"nui-toast-buttons-chain\">\n                <button id=\"nui-toast-adjust-size\" (click)=\"showToastsAdjustSize($event, 10000)\">Trigger all toast messages</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Toast messages with no header</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"d-flex justify-content-start\" id=\"nui-toast-buttons-chain-no-header\">\n                <button id=\"nui-toast-no-header\" (click)=\"showToastsNoHeader($event, 10000)\">Trigger all toast messages</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Toast messages with progress bar</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"d-flex justify-content-start\" id=\"nui-toast-positions\">\n                <button id=\"nui-toast-button-all-positions-progress-bar\" (click)=\"showToastsAllPositions($event, 300000, true)\">Trigger all positions</button>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "Dy+8":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-basic/toast-basic.example.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dy8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button type=\"button\" id=\"nui-basic-toast-example\" (click)=\"onShowToast($event)\" i18n>Show Toast</button>\n";
      /***/
    },

    /***/
    "F+Re":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-config/toast-config.example.component.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FRe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnInit } from \"@angular/core\";\nimport { IToastConfig, IToastService, ToastPositionClass, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-toast-config-example\",\n    templateUrl: \"./toast-config.example.component.html\",\n})\nexport class ToastConfigExampleComponent implements OnInit {\n    public selectedPosition: string;\n\n    constructor(@Inject(ToastService) private toastService: IToastService) { }\n\n    ngOnInit() {\n        this.toastService.setConfig({}, \"id\");\n    }\n\n    public onShowToast(highlightMode: boolean): void {\n        this.toastService.info({\n            title: $localize `Toast Configuration`,\n            message: $localize `I'm pretty easy to configure`,\n            options: this.getOptions(),\n        });\n    }\n\n    private getOptions(): IToastConfig {\n        return {\n            extendedTimeOut: 2000,\n            clickToDismiss: true,\n            closeButton: true,\n            positionClass: ToastPositionClass.BOTTOM_RIGHT,\n            progressBar: true,\n            progressAnimation: \"increasing\",\n            timeOut: 5000,\n        };\n    }\n}\n";
      /***/
    },

    /***/
    "F45P":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-test/toast-test.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function F45P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"nui-toast-test\" class=\"container\">\n    <div class=\"py-2\">\n        <h3>Page settings</h3>\n        <div>\n            <label class=\"px-3 w-25\" for=\"txtCount\"> Number of toasts to show: </label>\n            <input type=\"number\" id=\"txtCount\" [(ngModel)]=\"count\">\n        </div>\n\n        <label class=\"px-3 w-25\"> Toast type </label>\n        <input id=\"radioError\" type=\"radio\" name=\"type\" value=\"error\" [(ngModel)]=\"type\">\n        <label for=\"radioError\" class=\"px-3\"> error </label>\n        <input id=\"radioInfo\" type=\"radio\" name=\"type\" value=\"info\" [(ngModel)]=\"type\">\n        <label for=\"radioInfo\" class=\"px-3\"> info </label>\n        <input id=\"radioSuccess\" type=\"radio\" name=\"type\" value=\"success\" [(ngModel)]=\"type\">\n        <label for=\"radioSuccess\" class=\"px-3\"> success </label>\n        <input id=\"radioWarning\" type=\"radio\" name=\"type\" value=\"warning\" [(ngModel)]=\"type\">\n        <label for=\"radioWarning\" class=\"px-3\"> warning </label>\n    </div>\n\n    <div class=\"py-2\">\n        <h3>Toast Configuration</h3>\n        <div>\n            <label class=\"px-3 w-25\" for=\"txtMessage\"> message </label>\n            <input type=\"text\" id=\"txtMessage\" [(ngModel)]=\"toast.message\">\n        </div>\n        <div>\n            <label class=\"px-3 w-25\" for=\"txtTitle\"> title </label>\n            <input type=\"text\" id=\"txtTitle\" [(ngModel)]=\"toast.title\">\n        </div>\n    </div>\n\n    <div class=\"py-2\">\n        <h3>Options</h3>\n        <div>\n            <label class=\"px-3 w-25\" for=\"txtTimeOut\"> timeOut </label>\n            <input type=\"text\" id=\"txtTimeOut\" [(ngModel)]=\"toast.options.timeOut\">\n        </div>\n        <div>\n            <label class=\"px-3 w-25\" for=\"txtExtendedTimeOut\"> extendedTimeOut </label>\n            <input type=\"text\" id=\"txtExtendedTimeOut\" [(ngModel)]=\"toast.options.extendedTimeOut\">\n        </div>\n        <div>\n            <label class=\"px-3 w-25\" for=\"chbCloseButton\">closeButton</label>\n            <input type=\"checkbox\" id=\"chbCloseButton\" [(ngModel)]=\"toast.options.closeButton\">\n        </div>\n        <div>\n            <label class=\"px-3 w-25\" for=\"chbProgressBar\">progressBar</label>\n            <input type=\"checkbox\" id=\"chbProgressBar\" [(ngModel)]=\"toast.options.progressBar\">\n        </div>\n        <div>\n            <label class=\"px-3 w-25\">progressAnimation</label>\n            <input id=\"radioIncreasing\" type=\"radio\" name=\"progressAnimation\" value=\"increasing\"\n                [(ngModel)]=\"toast.options.progressAnimation\">\n            <label for=\"radioIncreasing\" class=\"px-3\"> increasing </label>\n            <input id=\"radioDecreasing\" type=\"radio\" name=\"progressAnimation\" value=\"decreasing\"\n                [(ngModel)]=\"toast.options.progressAnimation\">\n            <label for=\"radioDecreasing\" class=\"px-3\"> decreasing </label>\n        </div>\n        <div>\n            <label class=\"px-3 w-25\" for=\"chbEnableHtml\">enableHtml</label>\n            <input type=\"checkbox\" id=\"chbEnableHtml\" [(ngModel)]=\"toast.options.enableHtml\">\n        </div>\n        <div>\n            <label class=\"px-3 w-25\" for=\"txtToastClass\">toastClass</label>\n            <input type=\"text\" id=\"txtToastClass\" [(ngModel)]=\"toast.options.toastClass\">\n        </div>\n        <div>\n            <label class=\"px-3 w-25\">positionClass</label>\n            <span class=\"d-inline-block\" style=\"vertical-align: middle;\">\n                <input id=\"radioTopCenter\" type=\"radio\" name=\"positionClass\" value=\"nui-toast--top-center\"\n                    [(ngModel)]=\"toast.options.positionClass\">\n                <label for=\"radioTopCenter\" class=\"px-3\"> TOP_CENTER </label>\n                <input id=\"radioTopLeft\" type=\"radio\" name=\"positionClass\" value=\"nui-toast--top-left\"\n                    [(ngModel)]=\"toast.options.positionClass\">\n                <label for=\"radioTopLeft\" class=\"px-3\"> TOP_LEFT </label>\n                <input id=\"radioTopRight\" type=\"radio\" name=\"positionClass\" value=\"nui-toast--top-right\"\n                    [(ngModel)]=\"toast.options.positionClass\">\n                <label for=\"radioTopRight\" class=\"px-3\"> TOP_RIGHT </label>\n                <input id=\"radioTopFullWidth\" type=\"radio\" name=\"positionClass\" value=\"nui-toast--top-full-width\"\n                    [(ngModel)]=\"toast.options.positionClass\">\n                <label for=\"radioTopFullWidth\" class=\"px-3\"> TOP_FULL_WIDTH </label>\n                <br>\n                <input id=\"radioBottomCenter\" type=\"radio\" name=\"positionClass\" value=\"nui-toast--bottom-center\"\n                    [(ngModel)]=\"toast.options.positionClass\">\n                <label for=\"radioBottomCenter\" class=\"px-3\"> BOTTOM_CENTER </label>\n                <input id=\"radioBottomLeft\" type=\"radio\" name=\"positionClass\" value=\"nui-toast--bottom-left\"\n                    [(ngModel)]=\"toast.options.positionClass\">\n                <label for=\"radioBottomLeft\" class=\"px-3\"> BOTTOM_LEFT </label>\n                <input id=\"radioBottomRight\" type=\"radio\" name=\"positionClass\" value=\"nui-toast--bottom-right\"\n                    [(ngModel)]=\"toast.options.positionClass\">\n                <label for=\"radioBottomRight\" class=\"px-3\"> BOTTOM_RIGHT </label>\n                <input id=\"radioBottomFullWidth\" type=\"radio\" name=\"positionClass\" value=\"nui-toast--bottom-full-width\"\n                    [(ngModel)]=\"toast.options.positionClass\">\n                <label for=\"radioBottomFullWidth\" class=\"px-3\"> BOTTOM_FULL_WIDTH </label>\n                <input id=\"radioCustomClass\" type=\"radio\" name=\"positionClass\" value=\"demoToastCustomClass\"\n                    [(ngModel)]=\"toast.options.positionClass\">\n                <label for=\"radioCustomClass\" class=\"px-3\"> CUSTOM_CLASS </label>\n            </span>\n        </div>\n        <div>\n            <label class=\"px-3 w-25\" for=\"chbClickToDismiss\">clickToDismiss</label>\n            <input type=\"checkbox\" id=\"chbClickToDismiss\" [(ngModel)]=\"toast.options.clickToDismiss\">\n        </div>\n        <div>\n            <label class=\"px-3 w-25\" for=\"chbStickyError\">stickyError</label>\n            <input type=\"checkbox\" id=\"chbStickyError\" [(ngModel)]=\"toast.options.stickyError\">\n        </div>\n        <div>\n            <label class=\"px-3 w-25\" for=\"txtMaxOpened\">maxOpened</label>\n            <input type=\"number\" id=\"txtMaxOpened\" [(ngModel)]=\"toast.options.maxOpened\">\n        </div>\n        <div>\n            <label class=\"px-3 w-25\" for=\"chbAutoDismiss\">autoDismiss</label>\n            <input type=\"checkbox\" id=\"chbAutoDismiss\" [(ngModel)]=\"toast.options.autoDismiss\">\n        </div>\n        <div>\n            <label class=\"px-3 w-25\" for=\"chbNewestOnTop\">newestOnTop</label>\n            <input type=\"checkbox\" id=\"chbNewestOnTop\" [(ngModel)]=\"toast.options.newestOnTop\">\n        </div>\n        <div>\n            <label class=\"px-3 w-25\" for=\"chbPreventDuplicates\">preventDuplicates</label>\n            <input type=\"checkbox\" id=\"chbPreventDuplicates\" [(ngModel)]=\"toast.options.preventDuplicates\">\n        </div>\n\n    </div>\n\n    <div class=\"p-5\" style=\"text-align: center\">\n        <button class=\"px-5\" id=\"btnFire\" (click)=\"fireToast()\">Fire Toast(s)!</button>\n        <button class=\"px-3 ml-3\" id=\"btnReset\" (click)=\"reset()\">Reset form</button>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "FLKQ":
    /*!***************************************************************************************!*\
      !*** ./demo/src/components/demo/toast/toast-events/toast-events.example.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: ToastEventsExampleComponent */

    /***/
    function FLKQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastEventsExampleComponent", function () {
        return ToastEventsExampleComponent;
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


      var _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/divider/divider.component */
      "UGtJ");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");

      function ToastEventsExampleComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-message", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-message", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("allowDismiss", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](ctx_r0.lastShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("allowDismiss", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](ctx_r0.clickCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](6);
        }
      }

      function ToastEventsExampleComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-message", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("allowDismiss", false);
        }
      }

      var ToastEventsExampleComponent = /*#__PURE__*/function () {
        function ToastEventsExampleComponent(toastService) {
          _classCallCheck(this, ToastEventsExampleComponent);

          this.toastService = toastService;
          this.clickCount = 0;
          this.toastCount = 0;
        }

        _createClass(ToastEventsExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.toastService.setConfig({}, "id");
          }
        }, {
          key: "onShowToast",
          value: function onShowToast(highlightMode) {
            var _this = this;

            var _a, _b, _c;

            var toastInstance = this.toastService.info({
              title: $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Toast Events"]))),
              message: $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Click Me!"]))),
              options: this.getOptions()
            });
            (_a = toastInstance.onShown) === null || _a === void 0 ? void 0 : _a.subscribe(function () {
              ++_this.toastCount;
              _this.isDisplayed = true;
              _this.lastShown = toastInstance.toastId;
            });
            (_b = toastInstance.onClick) === null || _b === void 0 ? void 0 : _b.subscribe(function () {
              ++_this.clickCount;
            });
            (_c = toastInstance.onHidden) === null || _c === void 0 ? void 0 : _c.subscribe(function () {
              --_this.toastCount;
              _this.isDisplayed = _this.toastCount > 0;
            });
          }
        }, {
          key: "getOptions",
          value: function getOptions() {
            return {
              extendedTimeOut: 5000,
              clickToDismiss: false,
              closeButton: false,
              positionClass: "nui-toast--top-right"
              /* TOP_RIGHT */
              ,
              progressBar: true,
              progressAnimation: "increasing",
              timeOut: 10000
            };
          }
        }]);

        return ToastEventsExampleComponent;
      }();

      ToastEventsExampleComponent.ɵfac = function ToastEventsExampleComponent_Factory(t) {
        return new (t || ToastEventsExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      ToastEventsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ToastEventsExampleComponent,
        selectors: [["nui-toast-events-example"]],
        decls: 6,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_557759875456545576$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_EVENTS_TOAST_EVENTS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Show Toast");
            i18n_0 = MSG_EXTERNAL_557759875456545576$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_EVENTS_TOAST_EVENTS_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([":\u241F4600bd30106171bfee8c959a00f710ab918c38a8\u241F557759875456545576:Show Toast"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4218629065715888947$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_EVENTS_TOAST_EVENTS_EXAMPLE_COMPONENT_TS__3 = goog.getMsg("ID of last toast shown: {$interpolation}", {
              "interpolation": "\uFFFD0\uFFFD"
            });
            i18n_2 = MSG_EXTERNAL_4218629065715888947$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_EVENTS_TOAST_EVENTS_EXAMPLE_COMPONENT_TS__3;
          } else {
            i18n_2 = $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([":\u241Fd98536b483e331cf4f990a2fc9e1f196f349074b\u241F4218629065715888947:ID of last toast shown: ", ":INTERPOLATION:"])), "\uFFFD0\uFFFD");
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8440842198532666033$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_EVENTS_TOAST_EVENTS_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("Clicks on toast: {$interpolation}", {
              "interpolation": "\uFFFD0\uFFFD"
            });
            i18n_4 = MSG_EXTERNAL_8440842198532666033$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_EVENTS_TOAST_EVENTS_EXAMPLE_COMPONENT_TS__5;
          } else {
            i18n_4 = $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([":\u241Fe1957753eda54a65e03415b2dbc397a8a957d5d4\u241F8440842198532666033:Clicks on toast: ", ":INTERPOLATION:"])), "\uFFFD0\uFFFD");
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3981941284307704837$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_EVENTS_TOAST_EVENTS_EXAMPLE_COMPONENT_TS__7 = goog.getMsg("No toast displayed");
            i18n_6 = MSG_EXTERNAL_3981941284307704837$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_EVENTS_TOAST_EVENTS_EXAMPLE_COMPONENT_TS__7;
          } else {
            i18n_6 = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([":\u241F96ac7902ce2837f009c3f03c468fca0ac0d308c0\u241F3981941284307704837:No toast displayed"])));
          }

          return [[4, "ngIf", "ngIfElse"], ["notoast", ""], ["nui-button", "", "type", "button", "id", "nui-toast-events-example", 3, "click"], i18n_0, ["type", "info", 3, "allowDismiss"], i18n_2, ["id", "toast-example-click-counter"], i18n_4, i18n_6];
        },
        template: function ToastEventsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToastEventsExampleComponent_div_0_Template, 7, 4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ToastEventsExampleComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nui-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastEventsExampleComponent_Template_button_click_4_listener($event) {
              return ctx.onShowToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDisplayed)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_3__["DividerComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "GjN6":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function GjN6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiDividerModule,\n    NuiDocsModule,\n    NuiMessageModule,\n    NuiRadioModule,\n    NuiToastModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    ToastBasicExampleComponent,\n    ToastConfigExampleComponent,\n    ToastEventsExampleComponent,\n    ToastExampleComponent,\n    ToastPositionExampleComponent,\n    ToastStickyErrorExampleComponent,\n    ToastTestComponent,\n    ToastTypeExampleComponent,\n    ToastVisualTestComponent,\n} from \"./index\";\nimport { ToastBasicHtmlExampleComponent } from \"./toast-basic-html/toast-basic-html.example.component\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: ToastExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"toast-visual-test\",\n        component: ToastVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"test\",\n        component: ToastTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiToastModule,\n        FormsModule,\n        ReactiveFormsModule,\n        NuiMessageModule,\n        NuiRadioModule,\n        NuiDividerModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        ToastBasicExampleComponent,\n        ToastBasicHtmlExampleComponent,\n        ToastConfigExampleComponent,\n        ToastEventsExampleComponent,\n        ToastExampleComponent,\n        ToastPositionExampleComponent,\n        ToastStickyErrorExampleComponent,\n        ToastTestComponent,\n        ToastTypeExampleComponent,\n        ToastVisualTestComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class ToastModule {\n}\n";
      /***/
    },

    /***/
    "JpLm":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-type/toast-type.example.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JpLm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button type=\"button\" id=\"nui-info-toast\" (click)=\"onShowInfo($event)\" i18n>Info</button>\n<button nui-button type=\"button\" id=\"nui-success-toast\" (click)=\"onShowSuccess($event)\" i18n>Success</button>\n<button nui-button type=\"button\" id=\"nui-warning-toast\" (click)=\"onShowWarning($event)\" i18n>Warning</button>\n<button nui-button type=\"button\" id=\"nui-error-toast\" (click)=\"onShowError($event)\" i18n>Error</button>\n<button nui-button type=\"button\" id=\"nui-hide-all-toasts\" (click)=\"clear()\" i18n>Hide Toasts</button>\n";
      /***/
    },

    /***/
    "L9yT":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/index.ts ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function L9yT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./toast-basic/toast-basic.example.component\";\nexport * from \"./toast-sticky-error/toast-sticky-error.example.component\";\nexport * from \"./toast-config/toast-config.example.component\";\nexport * from \"./toast-docs/toast-docs.example.component\";\nexport * from \"./toast-events/toast-events.example.component\";\nexport * from \"./toast-position/toast-position.example.component\";\nexport * from \"./toast-type/toast-type.example.component\";\nexport * from \"./toast-visual-test/toast-visual-test.component\";\nexport * from \"./toast-test/toast-test.component\";\n";
      /***/
    },

    /***/
    "MWvE":
    /*!*******************************************************************************************!*\
      !*** ./demo/src/components/demo/toast/toast-position/toast-position.example.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ToastPositionExampleComponent */

    /***/
    function MWvE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastPositionExampleComponent", function () {
        return ToastPositionExampleComponent;
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


      var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/radio/radio-group.component */
      "lLUT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      function ToastPositionExampleComponent_nui_radio_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-radio", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var position_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "nui-toast-position-" + position_r1.className);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", position_r1.className === "nui-toast--top-right")("value", position_r1.className);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", position_r1.displayValue, " ");
        }
      }

      var ToastPositionExampleComponent = /*#__PURE__*/function () {
        function ToastPositionExampleComponent(toastService) {
          _classCallCheck(this, ToastPositionExampleComponent);

          this.toastService = toastService;
          this.toastPositions = [{
            displayValue: $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Top Right"]))),
            className: "nui-toast--top-right"
            /* TOP_RIGHT */

          }, {
            displayValue: $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Top Left"]))),
            className: "nui-toast--top-left"
            /* TOP_LEFT */

          }, {
            displayValue: $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Bottom Right"]))),
            className: "nui-toast--bottom-right"
            /* BOTTOM_RIGHT */

          }, {
            displayValue: $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Bottom Left"]))),
            className: "nui-toast--bottom-left"
            /* BOTTOM_LEFT */

          }, {
            displayValue: $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Top Full Width"]))),
            className: "nui-toast--top-full-width"
            /* TOP_FULL_WIDTH */

          }, {
            displayValue: $localize(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Bottom Full Width"]))),
            className: "nui-toast--bottom-full-width"
            /* BOTTOM_FULL_WIDTH */

          }, {
            displayValue: $localize(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Top Center"]))),
            className: "nui-toast--top-center"
            /* TOP_CENTER */

          }, {
            displayValue: $localize(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Bottom Center"]))),
            className: "nui-toast--bottom-center"
            /* BOTTOM_CENTER */

          }, {
            displayValue: $localize(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["CUSTOM CLASS (top: 200px; right: 200px)"]))),
            className: "demoToastCustomClass"
          }];
          this.selectedPosition = this.toastPositions[0].className;
        }

        _createClass(ToastPositionExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.toastService.setConfig({}, "id");
          }
        }, {
          key: "onShowToast",
          value: function onShowToast(highlightMode) {
            this.toastService.info({
              title: $localize(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["Position Example"]))),
              message: this.selectedPosition,
              options: this.getOptions()
            });
          }
        }, {
          key: "getOptions",
          value: function getOptions() {
            return {
              timeOut: 5000,
              extendedTimeOut: 2000,
              positionClass: this.selectedPosition
            };
          }
        }]);

        return ToastPositionExampleComponent;
      }();

      ToastPositionExampleComponent.ɵfac = function ToastPositionExampleComponent_Factory(t) {
        return new (t || ToastPositionExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      ToastPositionExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ToastPositionExampleComponent,
        selectors: [["nui-toast-position-example"]],
        decls: 6,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_557759875456545576$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_POSITION_TOAST_POSITION_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Show Toast");
            i18n_0 = MSG_EXTERNAL_557759875456545576$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_POSITION_TOAST_POSITION_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral([":\u241F4600bd30106171bfee8c959a00f710ab918c38a8\u241F557759875456545576:Show Toast"])));
          }

          return [[1, "nui-flex-container"], [3, "value", "valueChange"], [3, "id", "checked", "value", 4, "ngFor", "ngForOf"], ["nui-button", "", "type", "button", "id", "nui-toast-position-example", 3, "click"], i18n_0, [3, "id", "checked", "value"]];
        },
        template: function ToastPositionExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-radio-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ToastPositionExampleComponent_Template_nui_radio_group_valueChange_2_listener($event) {
              return ctx.selectedPosition = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ToastPositionExampleComponent_nui_radio_3_Template, 2, 4, "nui-radio", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastPositionExampleComponent_Template_button_click_4_listener($event) {
              return ctx.onShowToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedPosition);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toastPositions);
          }
        },
        directives: [_src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "QfmY":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-events/toast-events.example.component.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QfmY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnInit } from \"@angular/core\";\nimport { IActiveToast, IToastConfig, IToastService, ToastPositionClass, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-toast-events-example\",\n    templateUrl: \"./toast-events.example.component.html\",\n})\n\nexport class ToastEventsExampleComponent implements OnInit {\n    public lastShown?: number;\n    public clickCount = 0;\n    public toastCount = 0;\n    public isDisplayed: boolean;\n\n    constructor(@Inject(ToastService) private toastService: IToastService) { }\n\n    ngOnInit() {\n        this.toastService.setConfig({}, \"id\");\n    }\n\n    public onShowToast(highlightMode: boolean): void {\n        const toastInstance: IActiveToast = this.toastService.info({\n            title: $localize `Toast Events`,\n            message: $localize `Click Me!`,\n            options: this.getOptions(),\n        });\n        toastInstance.onShown?.subscribe(() => {\n            ++this.toastCount;\n            this.isDisplayed = true;\n            this.lastShown = toastInstance.toastId;\n        });\n\n        toastInstance.onClick?.subscribe(() => {\n            ++this.clickCount;\n        });\n\n        toastInstance.onHidden?.subscribe(() => {\n            --this.toastCount;\n            this.isDisplayed = this.toastCount > 0;\n        });\n    }\n\n    private getOptions(): IToastConfig {\n        return {\n            extendedTimeOut: 5000,\n            clickToDismiss: false,\n            closeButton: false,\n            positionClass: ToastPositionClass.TOP_RIGHT,\n            progressBar: true,\n            progressAnimation: \"increasing\",\n            timeOut: 10000,\n        };\n    }\n}\n";
      /***/
    },

    /***/
    "Si/j":
    /*!***************************************************************************************************!*\
      !*** ./demo/src/components/demo/toast/toast-sticky-error/toast-sticky-error.example.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ToastStickyErrorExampleComponent */

    /***/
    function SiJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastStickyErrorExampleComponent", function () {
        return ToastStickyErrorExampleComponent;
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


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ToastStickyErrorExampleComponent = /*#__PURE__*/function () {
        function ToastStickyErrorExampleComponent(toastService) {
          _classCallCheck(this, ToastStickyErrorExampleComponent);

          this.toastService = toastService;
        }

        _createClass(ToastStickyErrorExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.toastService.setConfig({}, "id");
          }
        }, {
          key: "onShowStickyError",
          value: function onShowStickyError(highlightMode) {
            this.toastService.error({
              title: $localize(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["Sticky Error"]))),
              message: $localize(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["Red Alert"]))),
              options: this.getOptions()
            });
          }
        }, {
          key: "onHideStickyError",
          value: function onHideStickyError(highlightMode) {
            this.toastService.clear();
          }
        }, {
          key: "getOptions",
          value: function getOptions() {
            return {
              clickToDismiss: false,
              closeButton: false,
              positionClass: "nui-toast--top-right"
              /* TOP_RIGHT */
              ,
              stickyError: true
            };
          }
        }]);

        return ToastStickyErrorExampleComponent;
      }();

      ToastStickyErrorExampleComponent.ɵfac = function ToastStickyErrorExampleComponent_Factory(t) {
        return new (t || ToastStickyErrorExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      ToastStickyErrorExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ToastStickyErrorExampleComponent,
        selectors: [["nui-toast-sticky-error-example"]],
        decls: 4,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1418452172334753158$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_STICKY_ERROR_TOAST_STICKY_ERROR_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Show Sticky Error");
            i18n_0 = MSG_EXTERNAL_1418452172334753158$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_STICKY_ERROR_TOAST_STICKY_ERROR_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral([":\u241F769d24d01154ec76a304a2aed1a8dba2e1a0e132\u241F1418452172334753158:Show Sticky Error"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4793455388032648365$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_STICKY_ERROR_TOAST_STICKY_ERROR_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Hide Sticky Error");
            i18n_2 = MSG_EXTERNAL_4793455388032648365$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_STICKY_ERROR_TOAST_STICKY_ERROR_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral([":\u241Fa877daaceb1a90cd5bcd3a7c5b38403e9a3bc6cd\u241F4793455388032648365:Hide Sticky Error"])));
          }

          return [["nui-button", "", "type", "button", "id", "nui-show-sticky-error-toast-example", 3, "click"], i18n_0, ["nui-button", "", "type", "button", "id", "nui-hide-sticky-error-toast-example", 3, "click"], i18n_2];
        },
        template: function ToastStickyErrorExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastStickyErrorExampleComponent_Template_button_click_0_listener($event) {
              return ctx.onShowStickyError($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastStickyErrorExampleComponent_Template_button_click_2_listener($event) {
              return ctx.onHideStickyError($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Tkmm":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-visual-test/toast-visual-test.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tkmm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnInit } from \"@angular/core\";\nimport { IToastConfig, IToastService, ToastPositionClass, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-toast-visual\",\n    templateUrl: \"./toast-visual-test.component.html\",\n})\nexport class ToastVisualTestComponent implements OnInit {\n\n    private errorMessage: string = `Something went wrong + in addition there is an extremely\n    long line that verifies that the toast expands as more text comes into it. More or less text -\n    Toast messages must look good either way!`;\n\n    constructor(@Inject(ToastService) private toastService: IToastService) { }\n\n    ngOnInit() {\n        this.toastService.setConfig({}, \"id\");\n    }\n\n    public showToastsAllPositions(highlightMode: boolean, timeout: number, progress: boolean = false): void {\n        this.onShowInfo(highlightMode, timeout, progress, ToastPositionClass.TOP_LEFT);\n        this.onShowError(highlightMode, timeout, progress, ToastPositionClass.TOP_RIGHT, \"Error\", this.errorMessage);\n        this.onShowSuccess(highlightMode, timeout, progress, ToastPositionClass.BOTTOM_LEFT);\n        this.onShowWarning(highlightMode, timeout, progress, ToastPositionClass.BOTTOM_RIGHT);\n        this.onShowInfo(highlightMode, timeout, progress, ToastPositionClass.TOP_CENTER);\n        this.onShowError(highlightMode, timeout, progress, ToastPositionClass.BOTTOM_CENTER);\n    }\n\n    public showToastsFullWidth(highlightMode: boolean, timeout: number, progress: boolean = false) {\n        this.onShowSuccess(highlightMode, timeout, progress, ToastPositionClass.TOP_FULL_WIDTH);\n        this.onShowWarning(highlightMode, timeout, progress, ToastPositionClass.BOTTOM_FULL_WIDTH);\n    }\n\n    public showToastsAdjustSize(highlightMode: boolean, timeout: number, progress: boolean = false): void {\n        this.onShowInfo(highlightMode, timeout, progress, ToastPositionClass.TOP_RIGHT);\n        this.onShowSuccess(highlightMode, timeout, progress, ToastPositionClass.TOP_RIGHT);\n        this.onShowWarning(highlightMode, timeout, progress, ToastPositionClass.TOP_RIGHT);\n        this.onShowError(highlightMode, timeout, progress, ToastPositionClass.TOP_RIGHT, \"Error\", this.errorMessage);\n    }\n\n    public showToastsNoHeader(highlightMode: boolean, timeout: number, progress: boolean = false, header: string = \"\"): void {\n        this.onShowInfo(highlightMode, timeout, progress, ToastPositionClass.TOP_RIGHT, header);\n        this.onShowSuccess(highlightMode, timeout, progress, ToastPositionClass.TOP_RIGHT, header);\n        this.onShowWarning(highlightMode, timeout, progress, ToastPositionClass.TOP_RIGHT, header);\n        this.onShowError(highlightMode, timeout, progress, ToastPositionClass.TOP_RIGHT, header);\n    }\n\n    // eslint-disable-next-line max-len\n    public onShowInfo(highlightMode: boolean, timeout: number, progress: boolean = false, position: ToastPositionClass, title: string = \"Information\", message: string = \"Some info message\"): void {\n        this.toastService.info({\n            title: title,\n            message: `${message}`,\n            options:  this.getOptions(timeout, position, progress),\n        });\n    }\n\n    // eslint-disable-next-line max-len\n    public onShowError(highlightMode: boolean, timeout: number, progress: boolean = false, position: ToastPositionClass, title: string = \"Failure!\", message: string = \"Something went wrong\"): void {\n        this.toastService.error({\n            title: title,\n            message: `${message}`,\n            options:  this.getOptions(timeout, position, progress),\n        });\n    }\n\n    // eslint-disable-next-line max-len\n    public onShowSuccess(highlightMode: boolean, timeout: number, progress: boolean = false, position: ToastPositionClass, title: string = \"Well Done!\", message: string = \"You're great!\"): void {\n        this.toastService.success({\n            title: title,\n            message: `${message}`,\n            options:  this.getOptions(timeout, position, progress),\n        });\n    }\n\n    // eslint-disable-next-line max-len\n    public onShowWarning(highlightMode: boolean, timeout: number, progress: boolean = false, position: ToastPositionClass, title: string = \"Attention!\", message: string = \"Pay attention!\"): void {\n        this.toastService.warning({\n            title: title,\n            message: `${message}`,\n            options:  this.getOptions(timeout, position, progress),\n        });\n    }\n\n    public callStickyToast(highlightMode: boolean) {\n        this.toastService.error({\n            title: \"Failure\",\n            message: \"This error is sticky!\",\n            options: { stickyError: true },\n        });\n    }\n\n    public clearToast(highlightMode: boolean): void {\n        this.toastService.clear();\n    }\n\n    private getOptions(timeout: number, position: ToastPositionClass, enableProgressBar: boolean = false): IToastConfig {\n        return {\n            timeOut: timeout,\n            extendedTimeOut: 2000,\n            positionClass: position,\n            progressBar: enableProgressBar,\n        };\n    }\n}\n";
      /***/
    },

    /***/
    "VhxL":
    /*!***********************************************************************************!*\
      !*** ./demo/src/components/demo/toast/toast-type/toast-type.example.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: ToastTypeExampleComponent */

    /***/
    function VhxL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastTypeExampleComponent", function () {
        return ToastTypeExampleComponent;
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


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ToastTypeExampleComponent = /*#__PURE__*/function () {
        function ToastTypeExampleComponent(toastService) {
          _classCallCheck(this, ToastTypeExampleComponent);

          this.toastService = toastService;
        }

        _createClass(ToastTypeExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.toastService.setConfig({}, "id");
          }
        }, {
          key: "onShowInfo",
          value: function onShowInfo(highlightMode) {
            this.toastService.info({
              title: $localize(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Info"]))),
              message: $localize(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["E pluribus unum (/\u02C8i\u02D0 \u02C8pl\u028A\u0259r\u026Ab\u0259s \u02C8ju\u02D0n\u0259m/; Latin: [\u02C8e\u02D0 \u02C8plu\u02D0r\u026Ab\u028As \u02C8u\u02D0n\u0169\u02D0]) is Latin for 'Out of many, one'"]))),
              options: this.getOptions()
            });
          }
        }, {
          key: "onShowSuccess",
          value: function onShowSuccess(highlightMode) {
            this.toastService.success({
              title: $localize(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Success"]))),
              message: $localize(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Well done!"]))),
              options: this.getOptions()
            });
          }
        }, {
          key: "onShowWarning",
          value: function onShowWarning(highlightMode) {
            this.toastService.warning({
              title: $localize(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["Warning"]))),
              message: $localize(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["There can be only one."]))),
              options: this.getOptions()
            });
          }
        }, {
          key: "onShowError",
          value: function onShowError(highlightMode) {
            this.toastService.error({
              title: $localize(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["Error"]))),
              message: $localize(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["Nope."]))),
              options: this.getOptions()
            });
          }
        }, {
          key: "clear",
          value: function clear() {
            this.toastService.clear();
          }
        }, {
          key: "getOptions",
          value: function getOptions() {
            return {
              timeOut: 3000,
              extendedTimeOut: 1000
            };
          }
        }]);

        return ToastTypeExampleComponent;
      }();

      ToastTypeExampleComponent.ɵfac = function ToastTypeExampleComponent_Factory(t) {
        return new (t || ToastTypeExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      ToastTypeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ToastTypeExampleComponent,
        selectors: [["nui-toast-type-example"]],
        decls: 10,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_314315645942131479$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_TYPE_TOAST_TYPE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Info");
            i18n_0 = MSG_EXTERNAL_314315645942131479$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_TYPE_TOAST_TYPE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral([":\u241F321e4419a943044e674beb55b8039f42a9761ca5\u241F314315645942131479:Info"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4648900870671159218$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_TYPE_TOAST_TYPE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Success");
            i18n_2 = MSG_EXTERNAL_4648900870671159218$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_TYPE_TOAST_TYPE_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral([":\u241F1e035e6ccfab771cad4226b2ad230cb0d4a88cba\u241F4648900870671159218:Success"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6759205696902713848$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_TYPE_TOAST_TYPE_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Warning");
            i18n_4 = MSG_EXTERNAL_6759205696902713848$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_TYPE_TOAST_TYPE_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral([":\u241Fa8059e31694578c1b0344a76a345357dd60e8f01\u241F6759205696902713848:Warning"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1519954996184640001$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_TYPE_TOAST_TYPE_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Error");
            i18n_6 = MSG_EXTERNAL_1519954996184640001$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_TYPE_TOAST_TYPE_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral([":\u241F6080b77234e92ad41bb52653b239c4c4f851317d\u241F1519954996184640001:Error"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4637772438513653125$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_TYPE_TOAST_TYPE_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Hide Toasts");
            i18n_8 = MSG_EXTERNAL_4637772438513653125$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_TYPE_TOAST_TYPE_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral([":\u241F0b45df9a6e1d444dc5379c1fa5b4cfecdb843433\u241F4637772438513653125:Hide Toasts"])));
          }

          return [["nui-button", "", "type", "button", "id", "nui-info-toast", 3, "click"], i18n_0, ["nui-button", "", "type", "button", "id", "nui-success-toast", 3, "click"], i18n_2, ["nui-button", "", "type", "button", "id", "nui-warning-toast", 3, "click"], i18n_4, ["nui-button", "", "type", "button", "id", "nui-error-toast", 3, "click"], i18n_6, ["nui-button", "", "type", "button", "id", "nui-hide-all-toasts", 3, "click"], i18n_8];
        },
        template: function ToastTypeExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastTypeExampleComponent_Template_button_click_0_listener($event) {
              return ctx.onShowInfo($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastTypeExampleComponent_Template_button_click_2_listener($event) {
              return ctx.onShowSuccess($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastTypeExampleComponent_Template_button_click_4_listener($event) {
              return ctx.onShowWarning($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastTypeExampleComponent_Template_button_click_6_listener($event) {
              return ctx.onShowError($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](7, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastTypeExampleComponent_Template_button_click_8_listener() {
              return ctx.clear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](9, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "WCz1":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-config/toast-config.example.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WCz1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button type=\"button\" id=\"nui-toast-config-example\" (click)=\"onShowToast($event)\" i18n>Show Toast</button>\n";
      /***/
    },

    /***/
    "YTPc":
    /*!***************************************************************************!*\
      !*** ./demo/src/components/demo/toast/toast-test/toast-test.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ToastTestComponent */

    /***/
    function YTPc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastTestComponent", function () {
        return ToastTestComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ToastTestComponent = /*#__PURE__*/function () {
        function ToastTestComponent(toastService) {
          _classCallCheck(this, ToastTestComponent);

          this.toastService = toastService;
          this.defaults = {
            message: "",
            title: "",
            options: {
              timeOut: 5000,
              extendedTimeOut: 2000,
              closeButton: true,
              progressBar: true,
              progressAnimation: "decreasing",
              toastClass: "nui-toast",
              positionClass: "nui-toast--top-right"
              /* TOP_RIGHT */
              ,
              maxOpened: 0,
              newestOnTop: true,
              enableHtml: false
            }
          };
        }

        _createClass(ToastTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reset();
          }
        }, {
          key: "fireToast",
          value: function fireToast() {
            var _this2 = this;

            var funcs = {
              "error": function error(toast) {
                return _this2.toastService.error(toast);
              },
              "info": function info(toast) {
                return _this2.toastService.info(toast);
              },
              "success": function success(toast) {
                return _this2.toastService.success(toast);
              },
              "warning": function warning(toast) {
                return _this2.toastService.warning(toast);
              }
            };

            for (var i = 0; i < this.count; i++) {
              funcs[this.type](this.toast);
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            this.count = 1;
            this.type = "info";
            this.toast = Object.assign(Object.assign({}, this.defaults), {
              options: Object.assign({}, this.defaults.options)
            });
            this.toastService.clear();
          }
        }]);

        return ToastTestComponent;
      }();

      ToastTestComponent.ɵfac = function ToastTestComponent_Factory(t) {
        return new (t || ToastTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      ToastTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ToastTestComponent,
        selectors: [["nui-toast-test"]],
        decls: 130,
        vars: 30,
        consts: [["id", "nui-toast-test", 1, "container"], [1, "py-2"], ["for", "txtCount", 1, "px-3", "w-25"], ["type", "number", "id", "txtCount", 3, "ngModel", "ngModelChange"], [1, "px-3", "w-25"], ["id", "radioError", "type", "radio", "name", "type", "value", "error", 3, "ngModel", "ngModelChange"], ["for", "radioError", 1, "px-3"], ["id", "radioInfo", "type", "radio", "name", "type", "value", "info", 3, "ngModel", "ngModelChange"], ["for", "radioInfo", 1, "px-3"], ["id", "radioSuccess", "type", "radio", "name", "type", "value", "success", 3, "ngModel", "ngModelChange"], ["for", "radioSuccess", 1, "px-3"], ["id", "radioWarning", "type", "radio", "name", "type", "value", "warning", 3, "ngModel", "ngModelChange"], ["for", "radioWarning", 1, "px-3"], ["for", "txtMessage", 1, "px-3", "w-25"], ["type", "text", "id", "txtMessage", 3, "ngModel", "ngModelChange"], ["for", "txtTitle", 1, "px-3", "w-25"], ["type", "text", "id", "txtTitle", 3, "ngModel", "ngModelChange"], ["for", "txtTimeOut", 1, "px-3", "w-25"], ["type", "text", "id", "txtTimeOut", 3, "ngModel", "ngModelChange"], ["for", "txtExtendedTimeOut", 1, "px-3", "w-25"], ["type", "text", "id", "txtExtendedTimeOut", 3, "ngModel", "ngModelChange"], ["for", "chbCloseButton", 1, "px-3", "w-25"], ["type", "checkbox", "id", "chbCloseButton", 3, "ngModel", "ngModelChange"], ["for", "chbProgressBar", 1, "px-3", "w-25"], ["type", "checkbox", "id", "chbProgressBar", 3, "ngModel", "ngModelChange"], ["id", "radioIncreasing", "type", "radio", "name", "progressAnimation", "value", "increasing", 3, "ngModel", "ngModelChange"], ["for", "radioIncreasing", 1, "px-3"], ["id", "radioDecreasing", "type", "radio", "name", "progressAnimation", "value", "decreasing", 3, "ngModel", "ngModelChange"], ["for", "radioDecreasing", 1, "px-3"], ["for", "chbEnableHtml", 1, "px-3", "w-25"], ["type", "checkbox", "id", "chbEnableHtml", 3, "ngModel", "ngModelChange"], ["for", "txtToastClass", 1, "px-3", "w-25"], ["type", "text", "id", "txtToastClass", 3, "ngModel", "ngModelChange"], [1, "d-inline-block", 2, "vertical-align", "middle"], ["id", "radioTopCenter", "type", "radio", "name", "positionClass", "value", "nui-toast--top-center", 3, "ngModel", "ngModelChange"], ["for", "radioTopCenter", 1, "px-3"], ["id", "radioTopLeft", "type", "radio", "name", "positionClass", "value", "nui-toast--top-left", 3, "ngModel", "ngModelChange"], ["for", "radioTopLeft", 1, "px-3"], ["id", "radioTopRight", "type", "radio", "name", "positionClass", "value", "nui-toast--top-right", 3, "ngModel", "ngModelChange"], ["for", "radioTopRight", 1, "px-3"], ["id", "radioTopFullWidth", "type", "radio", "name", "positionClass", "value", "nui-toast--top-full-width", 3, "ngModel", "ngModelChange"], ["for", "radioTopFullWidth", 1, "px-3"], ["id", "radioBottomCenter", "type", "radio", "name", "positionClass", "value", "nui-toast--bottom-center", 3, "ngModel", "ngModelChange"], ["for", "radioBottomCenter", 1, "px-3"], ["id", "radioBottomLeft", "type", "radio", "name", "positionClass", "value", "nui-toast--bottom-left", 3, "ngModel", "ngModelChange"], ["for", "radioBottomLeft", 1, "px-3"], ["id", "radioBottomRight", "type", "radio", "name", "positionClass", "value", "nui-toast--bottom-right", 3, "ngModel", "ngModelChange"], ["for", "radioBottomRight", 1, "px-3"], ["id", "radioBottomFullWidth", "type", "radio", "name", "positionClass", "value", "nui-toast--bottom-full-width", 3, "ngModel", "ngModelChange"], ["for", "radioBottomFullWidth", 1, "px-3"], ["id", "radioCustomClass", "type", "radio", "name", "positionClass", "value", "demoToastCustomClass", 3, "ngModel", "ngModelChange"], ["for", "radioCustomClass", 1, "px-3"], ["for", "chbClickToDismiss", 1, "px-3", "w-25"], ["type", "checkbox", "id", "chbClickToDismiss", 3, "ngModel", "ngModelChange"], ["for", "chbStickyError", 1, "px-3", "w-25"], ["type", "checkbox", "id", "chbStickyError", 3, "ngModel", "ngModelChange"], ["for", "txtMaxOpened", 1, "px-3", "w-25"], ["type", "number", "id", "txtMaxOpened", 3, "ngModel", "ngModelChange"], ["for", "chbAutoDismiss", 1, "px-3", "w-25"], ["type", "checkbox", "id", "chbAutoDismiss", 3, "ngModel", "ngModelChange"], ["for", "chbNewestOnTop", 1, "px-3", "w-25"], ["type", "checkbox", "id", "chbNewestOnTop", 3, "ngModel", "ngModelChange"], ["for", "chbPreventDuplicates", 1, "px-3", "w-25"], ["type", "checkbox", "id", "chbPreventDuplicates", 3, "ngModel", "ngModelChange"], [1, "p-5", 2, "text-align", "center"], ["id", "btnFire", 1, "px-5", 3, "click"], ["id", "btnReset", 1, "px-3", "ml-3", 3, "click"]],
        template: function ToastTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Page settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Number of toasts to show: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.count = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Toast type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.type = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " error ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.type = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " info ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.type = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " success ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.type = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " warning ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Toast Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " message ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.toast.message = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " title ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_32_listener($event) {
              return ctx.toast.title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Options");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " timeOut ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_39_listener($event) {
              return ctx.toast.options.timeOut = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " extendedTimeOut ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_43_listener($event) {
              return ctx.toast.options.extendedTimeOut = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "closeButton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_47_listener($event) {
              return ctx.toast.options.closeButton = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "progressBar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_51_listener($event) {
              return ctx.toast.options.progressBar = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "progressAnimation");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_55_listener($event) {
              return ctx.toast.options.progressAnimation = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " increasing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_58_listener($event) {
              return ctx.toast.options.progressAnimation = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " decreasing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "enableHtml");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_64_listener($event) {
              return ctx.toast.options.enableHtml = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "toastClass");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_68_listener($event) {
              return ctx.toast.options.toastClass = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "positionClass");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_73_listener($event) {
              return ctx.toast.options.positionClass = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " TOP_CENTER ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_76_listener($event) {
              return ctx.toast.options.positionClass = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " TOP_LEFT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_79_listener($event) {
              return ctx.toast.options.positionClass = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " TOP_RIGHT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_82_listener($event) {
              return ctx.toast.options.positionClass = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "label", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " TOP_FULL_WIDTH ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_86_listener($event) {
              return ctx.toast.options.positionClass = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " BOTTOM_CENTER ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "input", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_89_listener($event) {
              return ctx.toast.options.positionClass = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "label", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " BOTTOM_LEFT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "input", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_92_listener($event) {
              return ctx.toast.options.positionClass = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "label", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " BOTTOM_RIGHT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "input", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_95_listener($event) {
              return ctx.toast.options.positionClass = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "label", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " BOTTOM_FULL_WIDTH ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "input", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_98_listener($event) {
              return ctx.toast.options.positionClass = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "label", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " CUSTOM_CLASS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "label", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "clickToDismiss");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_104_listener($event) {
              return ctx.toast.options.clickToDismiss = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "stickyError");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_108_listener($event) {
              return ctx.toast.options.stickyError = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "label", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "maxOpened");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_112_listener($event) {
              return ctx.toast.options.maxOpened = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "label", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "autoDismiss");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "input", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_116_listener($event) {
              return ctx.toast.options.autoDismiss = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "label", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "newestOnTop");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "input", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_120_listener($event) {
              return ctx.toast.options.newestOnTop = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "label", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "preventDuplicates");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "input", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToastTestComponent_Template_input_ngModelChange_124_listener($event) {
              return ctx.toast.options.preventDuplicates = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastTestComponent_Template_button_click_126_listener() {
              return ctx.fireToast();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Fire Toast(s)!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "button", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastTestComponent_Template_button_click_128_listener() {
              return ctx.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Reset form");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.count);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.message);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.timeOut);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.extendedTimeOut);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.closeButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.progressBar);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.progressAnimation);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.progressAnimation);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.enableHtml);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.toastClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.positionClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.positionClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.positionClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.positionClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.positionClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.positionClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.positionClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.positionClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.positionClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.clickToDismiss);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.stickyError);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.maxOpened);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.autoDismiss);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.newestOnTop);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toast.options.preventDuplicates);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "aI/t":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-sticky-error/toast-sticky-error.example.component.ts ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aIT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnInit } from \"@angular/core\";\nimport { IToastConfig, IToastService, ToastPositionClass, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-toast-sticky-error-example\",\n    templateUrl: \"./toast-sticky-error.example.component.html\",\n})\nexport class ToastStickyErrorExampleComponent implements OnInit {\n    public selectedPosition: string;\n\n    constructor(@Inject(ToastService) private toastService: IToastService) { }\n\n    ngOnInit() {\n        this.toastService.setConfig({}, \"id\");\n    }\n\n    public onShowStickyError(highlightMode: boolean): void {\n        this.toastService.error({\n            title: $localize `Sticky Error`,\n            message: $localize `Red Alert`,\n            options: this.getOptions(),\n        });\n    }\n\n    public onHideStickyError(highlightMode: boolean): void {\n        this.toastService.clear();\n    }\n\n    private getOptions(): IToastConfig {\n        return {\n            clickToDismiss: false,\n            closeButton: false,\n            positionClass: ToastPositionClass.TOP_RIGHT,\n            stickyError: true,\n        };\n    }\n}\n";
      /***/
    },

    /***/
    "cKOW":
    /*!*************************************************!*\
      !*** ./demo/src/components/demo/toast/index.ts ***!
      \*************************************************/

    /*! exports provided: ToastBasicExampleComponent, ToastStickyErrorExampleComponent, ToastConfigExampleComponent, ToastExampleComponent, ToastEventsExampleComponent, ToastPositionExampleComponent, ToastTypeExampleComponent, ToastVisualTestComponent, ToastTestComponent */

    /***/
    function cKOW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _toast_basic_toast_basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./toast-basic/toast-basic.example.component */
      "9j/F");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastBasicExampleComponent", function () {
        return _toast_basic_toast_basic_example_component__WEBPACK_IMPORTED_MODULE_0__["ToastBasicExampleComponent"];
      });
      /* harmony import */


      var _toast_sticky_error_toast_sticky_error_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toast-sticky-error/toast-sticky-error.example.component */
      "Si/j");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastStickyErrorExampleComponent", function () {
        return _toast_sticky_error_toast_sticky_error_example_component__WEBPACK_IMPORTED_MODULE_1__["ToastStickyErrorExampleComponent"];
      });
      /* harmony import */


      var _toast_config_toast_config_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toast-config/toast-config.example.component */
      "wqvn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastConfigExampleComponent", function () {
        return _toast_config_toast_config_example_component__WEBPACK_IMPORTED_MODULE_2__["ToastConfigExampleComponent"];
      });
      /* harmony import */


      var _toast_docs_toast_docs_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./toast-docs/toast-docs.example.component */
      "x3fY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastExampleComponent", function () {
        return _toast_docs_toast_docs_example_component__WEBPACK_IMPORTED_MODULE_3__["ToastExampleComponent"];
      });
      /* harmony import */


      var _toast_events_toast_events_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./toast-events/toast-events.example.component */
      "FLKQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastEventsExampleComponent", function () {
        return _toast_events_toast_events_example_component__WEBPACK_IMPORTED_MODULE_4__["ToastEventsExampleComponent"];
      });
      /* harmony import */


      var _toast_position_toast_position_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./toast-position/toast-position.example.component */
      "MWvE");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastPositionExampleComponent", function () {
        return _toast_position_toast_position_example_component__WEBPACK_IMPORTED_MODULE_5__["ToastPositionExampleComponent"];
      });
      /* harmony import */


      var _toast_type_toast_type_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./toast-type/toast-type.example.component */
      "VhxL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastTypeExampleComponent", function () {
        return _toast_type_toast_type_example_component__WEBPACK_IMPORTED_MODULE_6__["ToastTypeExampleComponent"];
      });
      /* harmony import */


      var _toast_visual_test_toast_visual_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./toast-visual-test/toast-visual-test.component */
      "iUd1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastVisualTestComponent", function () {
        return _toast_visual_test_toast_visual_test_component__WEBPACK_IMPORTED_MODULE_7__["ToastVisualTestComponent"];
      });
      /* harmony import */


      var _toast_test_toast_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./toast-test/toast-test.component */
      "YTPc");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastTestComponent", function () {
        return _toast_test_toast_test_component__WEBPACK_IMPORTED_MODULE_8__["ToastTestComponent"];
      });
      /***/

    },

    /***/
    "dsr+":
    /*!********************************************************!*\
      !*** ./demo/src/components/demo/toast/toast.module.ts ***!
      \********************************************************/

    /*! exports provided: ToastModule */

    /***/
    function dsr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastModule", function () {
        return ToastModule;
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
      "cKOW");
      /* harmony import */


      var _toast_basic_html_toast_basic_html_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./toast-basic-html/toast-basic-html.example.component */
      "vPsw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["ToastExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "toast-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["ToastVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["ToastTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ToastModule = function ToastModule() {
        _classCallCheck(this, ToastModule);
      };

      ToastModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: ToastModule
      });
      ToastModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function ToastModule_Factory(t) {
          return new (t || ToastModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("l6xF");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiToastModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRadioModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDividerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ToastModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["ToastBasicExampleComponent"], _toast_basic_html_toast_basic_html_example_component__WEBPACK_IMPORTED_MODULE_4__["ToastBasicHtmlExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ToastConfigExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ToastEventsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ToastExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ToastPositionExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ToastStickyErrorExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ToastTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ToastTypeExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ToastVisualTestComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiToastModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRadioModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDividerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "evYZ":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-basic/toast-basic.example.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function evYZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnInit } from \"@angular/core\";\nimport { IToastConfig, IToastService, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-toast-basic-example\",\n    templateUrl: \"./toast-basic.example.component.html\",\n})\nexport class ToastBasicExampleComponent implements OnInit {\n    constructor(@Inject(ToastService) private toastService: IToastService) { }\n\n    ngOnInit() {\n        this.toastService.setConfig({}, \"id\");\n    }\n\n    public onShowToast(highlightMode: boolean): void {\n        this.toastService.info({\n            title: $localize `Simple Toast.`,\n            message: $localize `Hi there! I'm a simple toast message`,\n            options: this.getOptions(),\n        });\n    }\n\n    private getOptions(): IToastConfig {\n        return {\n            timeOut: 5000,\n            extendedTimeOut: 2000,\n        };\n    }\n}\n";
      /***/
    },

    /***/
    "iMfI":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-basic-html/toast-basic-html.example.component.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iMfI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnInit } from \"@angular/core\";\nimport { IToastService, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-toast-basic-html-example\",\n    templateUrl: \"./toast-basic-html.example.component.html\",\n})\nexport class ToastBasicHtmlExampleComponent implements OnInit {\n\n    constructor(@Inject(ToastService) private toastService: IToastService) { }\n\n    ngOnInit() {\n        this.toastService.setConfig({ timeOut: 5000, extendedTimeOut: 2000 }, \"id\");\n    }\n\n    public showToastWithEnabledHtml(): void {\n        this.toastService.info({\n            title: $localize `Toast with enableHtml set to true`,\n            message: $localize `Hi there! I'm a simple toast message. <a href=\"#\">Awesome link</a>`,\n            options: {\n                enableHtml: true, // Note: Default value\n            },\n        });\n    }\n\n    public showToastWithDisabledHtml(): void {\n        this.toastService.info({\n            title: $localize `Toast with enableHtml set to false`,\n            message: $localize `Hi there! I'm a simple toast message <a href=\"#\">Awesome link</a>`,\n            options: {\n                enableHtml: false,\n            },\n        });\n    }\n\n    public showToastWithScriptTagIncluded(): void {\n        this.toastService.info({\n            title: $localize `Toast with forbidden tags and enableHtml set to true`,\n            message: $localize `\n                Hi there! I'm a toast message with forbidden tags:\n                <script>alert(\"You shall not pass\")</script>\n                <object width=\"400\" height=\"400\"></object>\n                <iframe src=\"https://www.solarwinds.com/\"></iframe>\n                <embed src=\"https://www.solarwinds.com/\">\n                `,\n            options: {\n                enableHtml: true, // Note: Default value\n            },\n        });\n    }\n\n}\n";
      /***/
    },

    /***/
    "iUd1":
    /*!*****************************************************************************************!*\
      !*** ./demo/src/components/demo/toast/toast-visual-test/toast-visual-test.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ToastVisualTestComponent */

    /***/
    function iUd1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastVisualTestComponent", function () {
        return ToastVisualTestComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ToastVisualTestComponent = /*#__PURE__*/function () {
        function ToastVisualTestComponent(toastService) {
          _classCallCheck(this, ToastVisualTestComponent);

          this.toastService = toastService;
          this.errorMessage = "Something went wrong + in addition there is an extremely\n    long line that verifies that the toast expands as more text comes into it. More or less text -\n    Toast messages must look good either way!";
        }

        _createClass(ToastVisualTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.toastService.setConfig({}, "id");
          }
        }, {
          key: "showToastsAllPositions",
          value: function showToastsAllPositions(highlightMode, timeout) {
            var progress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            this.onShowInfo(highlightMode, timeout, progress, "nui-toast--top-left"
            /* TOP_LEFT */
            );
            this.onShowError(highlightMode, timeout, progress, "nui-toast--top-right"
            /* TOP_RIGHT */
            , "Error", this.errorMessage);
            this.onShowSuccess(highlightMode, timeout, progress, "nui-toast--bottom-left"
            /* BOTTOM_LEFT */
            );
            this.onShowWarning(highlightMode, timeout, progress, "nui-toast--bottom-right"
            /* BOTTOM_RIGHT */
            );
            this.onShowInfo(highlightMode, timeout, progress, "nui-toast--top-center"
            /* TOP_CENTER */
            );
            this.onShowError(highlightMode, timeout, progress, "nui-toast--bottom-center"
            /* BOTTOM_CENTER */
            );
          }
        }, {
          key: "showToastsFullWidth",
          value: function showToastsFullWidth(highlightMode, timeout) {
            var progress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            this.onShowSuccess(highlightMode, timeout, progress, "nui-toast--top-full-width"
            /* TOP_FULL_WIDTH */
            );
            this.onShowWarning(highlightMode, timeout, progress, "nui-toast--bottom-full-width"
            /* BOTTOM_FULL_WIDTH */
            );
          }
        }, {
          key: "showToastsAdjustSize",
          value: function showToastsAdjustSize(highlightMode, timeout) {
            var progress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            this.onShowInfo(highlightMode, timeout, progress, "nui-toast--top-right"
            /* TOP_RIGHT */
            );
            this.onShowSuccess(highlightMode, timeout, progress, "nui-toast--top-right"
            /* TOP_RIGHT */
            );
            this.onShowWarning(highlightMode, timeout, progress, "nui-toast--top-right"
            /* TOP_RIGHT */
            );
            this.onShowError(highlightMode, timeout, progress, "nui-toast--top-right"
            /* TOP_RIGHT */
            , "Error", this.errorMessage);
          }
        }, {
          key: "showToastsNoHeader",
          value: function showToastsNoHeader(highlightMode, timeout) {
            var progress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var header = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
            this.onShowInfo(highlightMode, timeout, progress, "nui-toast--top-right"
            /* TOP_RIGHT */
            , header);
            this.onShowSuccess(highlightMode, timeout, progress, "nui-toast--top-right"
            /* TOP_RIGHT */
            , header);
            this.onShowWarning(highlightMode, timeout, progress, "nui-toast--top-right"
            /* TOP_RIGHT */
            , header);
            this.onShowError(highlightMode, timeout, progress, "nui-toast--top-right"
            /* TOP_RIGHT */
            , header);
          } // eslint-disable-next-line max-len

        }, {
          key: "onShowInfo",
          value: function onShowInfo(highlightMode, timeout) {
            var progress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var position = arguments.length > 3 ? arguments[3] : undefined;
            var title = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "Information";
            var message = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "Some info message";
            this.toastService.info({
              title: title,
              message: "".concat(message),
              options: this.getOptions(timeout, position, progress)
            });
          } // eslint-disable-next-line max-len

        }, {
          key: "onShowError",
          value: function onShowError(highlightMode, timeout) {
            var progress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var position = arguments.length > 3 ? arguments[3] : undefined;
            var title = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "Failure!";
            var message = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "Something went wrong";
            this.toastService.error({
              title: title,
              message: "".concat(message),
              options: this.getOptions(timeout, position, progress)
            });
          } // eslint-disable-next-line max-len

        }, {
          key: "onShowSuccess",
          value: function onShowSuccess(highlightMode, timeout) {
            var progress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var position = arguments.length > 3 ? arguments[3] : undefined;
            var title = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "Well Done!";
            var message = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "You're great!";
            this.toastService.success({
              title: title,
              message: "".concat(message),
              options: this.getOptions(timeout, position, progress)
            });
          } // eslint-disable-next-line max-len

        }, {
          key: "onShowWarning",
          value: function onShowWarning(highlightMode, timeout) {
            var progress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var position = arguments.length > 3 ? arguments[3] : undefined;
            var title = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "Attention!";
            var message = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "Pay attention!";
            this.toastService.warning({
              title: title,
              message: "".concat(message),
              options: this.getOptions(timeout, position, progress)
            });
          }
        }, {
          key: "callStickyToast",
          value: function callStickyToast(highlightMode) {
            this.toastService.error({
              title: "Failure",
              message: "This error is sticky!",
              options: {
                stickyError: true
              }
            });
          }
        }, {
          key: "clearToast",
          value: function clearToast(highlightMode) {
            this.toastService.clear();
          }
        }, {
          key: "getOptions",
          value: function getOptions(timeout, position) {
            var enableProgressBar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            return {
              timeOut: timeout,
              extendedTimeOut: 2000,
              positionClass: position,
              progressBar: enableProgressBar
            };
          }
        }]);

        return ToastVisualTestComponent;
      }();

      ToastVisualTestComponent.ɵfac = function ToastVisualTestComponent_Factory(t) {
        return new (t || ToastVisualTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      ToastVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ToastVisualTestComponent,
        selectors: [["nui-toast-visual"]],
        decls: 51,
        vars: 0,
        consts: [[1, "container", "pt-5"], [1, "row"], [1, "col"], ["id", "nui-toast-positions", 1, "d-flex", "justify-content-start"], ["id", "nui-toast-button-all-positions", 3, "click"], ["id", "nui-toast-fw", 1, "d-flex", "justify-content-start"], ["id", "nui-toast-position-fw", 3, "click"], [1, "d-flex", "justify-content-start"], ["id", "nui-toast-clear-all-toasts", 3, "click"], ["id", "nui-toast-sticky", 3, "click"], ["id", "nui-toast-buttons-chain", 1, "d-flex", "justify-content-start"], ["id", "nui-toast-adjust-size", 3, "click"], ["id", "nui-toast-buttons-chain-no-header", 1, "d-flex", "justify-content-start"], ["id", "nui-toast-no-header", 3, "click"], ["id", "nui-toast-button-all-positions-progress-bar", 3, "click"]],
        template: function ToastVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Basic Toast Positioned defferently");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastVisualTestComponent_Template_button_click_8_listener($event) {
              return ctx.showToastsAllPositions($event, 200000);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Trigger all positions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastVisualTestComponent_Template_button_click_11_listener($event) {
              return ctx.showToastsFullWidth($event, 10000);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Full Width");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Basic Toast Positioned defferently");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastVisualTestComponent_Template_button_click_20_listener($event) {
              return ctx.clearToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Clear All Toasts");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastVisualTestComponent_Template_button_click_22_listener($event) {
              return ctx.callStickyToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Call Sticky Error!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Toast messages adjust size");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastVisualTestComponent_Template_button_click_31_listener($event) {
              return ctx.showToastsAdjustSize($event, 10000);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Trigger all toast messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Toast messages with no header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastVisualTestComponent_Template_button_click_40_listener($event) {
              return ctx.showToastsNoHeader($event, 10000);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Trigger all toast messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Toast messages with progress bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastVisualTestComponent_Template_button_click_49_listener($event) {
              return ctx.showToastsAllPositions($event, 300000, true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Trigger all positions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    "itjl":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-test/toast-test.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function itjl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnInit } from \"@angular/core\";\nimport {\n    IActiveToast,\n    IToastConfig,\n    IToastDeclaration,\n    IToastService,\n    ToastPositionClass,\n    ToastService,\n} from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-toast-test\",\n    templateUrl: \"./toast-test.component.html\",\n})\nexport class ToastTestComponent implements OnInit {\n    constructor(@Inject(ToastService) private toastService: IToastService) { }\n\n    private defaults: IToastDeclaration = {\n        message: \"\",\n        title: \"\",\n        options: {\n            timeOut: 5000,\n            extendedTimeOut: 2000,\n            closeButton: true,\n            progressBar: true,\n            progressAnimation: \"decreasing\",\n            toastClass: \"nui-toast\",\n            positionClass: ToastPositionClass.TOP_RIGHT,\n            maxOpened: 0,           // unlimited\n            newestOnTop: true,\n            enableHtml: false,\n        },\n    };\n    // Using intersection type to avoid adding optional chaining operator (?) multiple times in template\n    // because options property is optional.\n    public toast: IToastDeclaration & {options: IToastConfig};\n    public count: number;\n    public type: string;\n\n    ngOnInit() {\n        this.reset();\n    }\n\n    public fireToast() {\n        const funcs: Record<string, (toast: IToastDeclaration) => IActiveToast> = {\n            \"error\": (toast) => this.toastService.error(toast),\n            \"info\": (toast) => this.toastService.info(toast),\n            \"success\": (toast) => this.toastService.success(toast),\n            \"warning\": (toast) => this.toastService.warning(toast),\n        };\n\n        for (let i = 0; i < this.count; i++) {\n            funcs[this.type](this.toast);\n        }\n    }\n\n    public reset() {\n        this.count = 1;\n        this.type = \"info\";\n        this.toast = { ...this.defaults, options: { ...this.defaults.options } };\n        this.toastService.clear();\n    }\n}\n";
      /***/
    },

    /***/
    "ixWd":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-docs/toast-docs.example.component.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ixWd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { IToastConfig, IToastDeclaration } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-toast-docs-example\",\n    templateUrl: \"./toast-docs.example.component.html\",\n})\nexport class ToastExampleComponent {\n    getToastDeclarationKey(key: keyof IToastDeclaration): string {\n        return key;\n    }\n    getToastConfigKey(key: keyof IToastConfig): string {\n        return key;\n    }\n}\n";
      /***/
    },

    /***/
    "l6xF":
    /*!********************************************************************************************************!*\
      !*** ./demo/src/components/demo/toast sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \********************************************************************************************************/

    /*! no static exports found */

    /***/
    function l6xF(module, exports, __webpack_require__) {
      var map = {
        "./index.ts": "L9yT",
        "./toast-basic-html/toast-basic-html.example.component.html": "lVOQ",
        "./toast-basic-html/toast-basic-html.example.component.ts": "iMfI",
        "./toast-basic/toast-basic.example.component.html": "Dy+8",
        "./toast-basic/toast-basic.example.component.ts": "evYZ",
        "./toast-config/toast-config.example.component.html": "WCz1",
        "./toast-config/toast-config.example.component.ts": "F+Re",
        "./toast-docs/toast-docs.example.component.html": "0/8W",
        "./toast-docs/toast-docs.example.component.ts": "ixWd",
        "./toast-events/toast-events.example.component.html": "+SQs",
        "./toast-events/toast-events.example.component.ts": "QfmY",
        "./toast-position/toast-position.example.component.html": "o5Nh",
        "./toast-position/toast-position.example.component.ts": "1Fq8",
        "./toast-sticky-error/toast-sticky-error.example.component.html": "32Qo",
        "./toast-sticky-error/toast-sticky-error.example.component.ts": "aI/t",
        "./toast-test/toast-test.component.html": "F45P",
        "./toast-test/toast-test.component.ts": "itjl",
        "./toast-type/toast-type.example.component.html": "JpLm",
        "./toast-type/toast-type.example.component.ts": "/aG4",
        "./toast-visual-test/toast-visual-test.component.html": "Cfpd",
        "./toast-visual-test/toast-visual-test.component.ts": "Tkmm",
        "./toast.module.ts": "GjN6"
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
      webpackContext.id = "l6xF";
      /***/
    },

    /***/
    "lVOQ":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-basic-html/toast-basic-html.example.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lVOQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button type=\"button\" id=\"nui-basic-toast-html-example-1\" (click)=\"showToastWithEnabledHtml()\" i18n>Show Toast With Enabled Html</button>\n<button nui-button type=\"button\" class=\"ml-3\" id=\"nui-basic-toast-html-example-2\" (click)=\"showToastWithDisabledHtml()\" i18n>Show Toast With Disabled Html</button>\n<button nui-button type=\"button\" class=\"ml-3\" id=\"nui-basic-toast-html-example-3\" (click)=\"showToastWithScriptTagIncluded()\" i18n>Show Toast With Script Tag</button>\n";
      /***/
    },

    /***/
    "o5Nh":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toast/toast-position/toast-position.example.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function o5Nh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-flex-container\">\n    <div>\n        <nui-radio-group [(value)]=\"selectedPosition\">\n            <nui-radio *ngFor=\"let position of toastPositions\"\n                        id=\"{{'nui-toast-position-'+position.className}}\"\n                        [checked]=\"position.className === 'nui-toast--top-right'\"\n                        [value]=\"position.className\">\n                {{position.displayValue}}\n            </nui-radio>\n        </nui-radio-group>\n    </div>\n</div>\n<button nui-button type=\"button\" id=\"nui-toast-position-example\" (click)=\"onShowToast($event)\" i18n>Show Toast</button>\n";
      /***/
    },

    /***/
    "vPsw":
    /*!***********************************************************************************************!*\
      !*** ./demo/src/components/demo/toast/toast-basic-html/toast-basic-html.example.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ToastBasicHtmlExampleComponent */

    /***/
    function vPsw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastBasicHtmlExampleComponent", function () {
        return ToastBasicHtmlExampleComponent;
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


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ToastBasicHtmlExampleComponent = /*#__PURE__*/function () {
        function ToastBasicHtmlExampleComponent(toastService) {
          _classCallCheck(this, ToastBasicHtmlExampleComponent);

          this.toastService = toastService;
        }

        _createClass(ToastBasicHtmlExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.toastService.setConfig({
              timeOut: 5000,
              extendedTimeOut: 2000
            }, "id");
          }
        }, {
          key: "showToastWithEnabledHtml",
          value: function showToastWithEnabledHtml() {
            this.toastService.info({
              title: $localize(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Toast with enableHtml set to true"]))),
              message: $localize(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["Hi there! I'm a simple toast message. <a href=\"#\">Awesome link</a>"]))),
              options: {
                enableHtml: true
              }
            });
          }
        }, {
          key: "showToastWithDisabledHtml",
          value: function showToastWithDisabledHtml() {
            this.toastService.info({
              title: $localize(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["Toast with enableHtml set to false"]))),
              message: $localize(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["Hi there! I'm a simple toast message <a href=\"#\">Awesome link</a>"]))),
              options: {
                enableHtml: false
              }
            });
          }
        }, {
          key: "showToastWithScriptTagIncluded",
          value: function showToastWithScriptTagIncluded() {
            this.toastService.info({
              title: $localize(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["Toast with forbidden tags and enableHtml set to true"]))),
              message: $localize(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n                Hi there! I'm a toast message with forbidden tags:\n                <script>alert(\"You shall not pass\")</script>\n                <object width=\"400\" height=\"400\"></object>\n                <iframe src=\"https://www.solarwinds.com/\"></iframe>\n                <embed src=\"https://www.solarwinds.com/\">\n                "]))),
              options: {
                enableHtml: true
              }
            });
          }
        }]);

        return ToastBasicHtmlExampleComponent;
      }();

      ToastBasicHtmlExampleComponent.ɵfac = function ToastBasicHtmlExampleComponent_Factory(t) {
        return new (t || ToastBasicHtmlExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      ToastBasicHtmlExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ToastBasicHtmlExampleComponent,
        selectors: [["nui-toast-basic-html-example"]],
        decls: 6,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1368572126231475464$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_BASIC_HTML_TOAST_BASIC_HTML_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Show Toast With Enabled Html");
            i18n_0 = MSG_EXTERNAL_1368572126231475464$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_BASIC_HTML_TOAST_BASIC_HTML_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral([":\u241F27566112355468c9e7353a6f45d007dba0219eec\u241F1368572126231475464:Show Toast With Enabled Html"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5715801552135569347$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_BASIC_HTML_TOAST_BASIC_HTML_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Show Toast With Disabled Html");
            i18n_2 = MSG_EXTERNAL_5715801552135569347$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_BASIC_HTML_TOAST_BASIC_HTML_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral([":\u241F440d58731188d4062fc6fc799fb09e0b03f0d532\u241F5715801552135569347:Show Toast With Disabled Html"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4608929713413799658$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_BASIC_HTML_TOAST_BASIC_HTML_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Show Toast With Script Tag");
            i18n_4 = MSG_EXTERNAL_4608929713413799658$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_BASIC_HTML_TOAST_BASIC_HTML_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral([":\u241F0e53f74fc9c19a5b6f50c819b0393d237055b260\u241F4608929713413799658:Show Toast With Script Tag"])));
          }

          return [["nui-button", "", "type", "button", "id", "nui-basic-toast-html-example-1", 3, "click"], i18n_0, ["nui-button", "", "type", "button", "id", "nui-basic-toast-html-example-2", 1, "ml-3", 3, "click"], i18n_2, ["nui-button", "", "type", "button", "id", "nui-basic-toast-html-example-3", 1, "ml-3", 3, "click"], i18n_4];
        },
        template: function ToastBasicHtmlExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastBasicHtmlExampleComponent_Template_button_click_0_listener() {
              return ctx.showToastWithEnabledHtml();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastBasicHtmlExampleComponent_Template_button_click_2_listener() {
              return ctx.showToastWithDisabledHtml();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastBasicHtmlExampleComponent_Template_button_click_4_listener() {
              return ctx.showToastWithScriptTagIncluded();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "wqvn":
    /*!***************************************************************************************!*\
      !*** ./demo/src/components/demo/toast/toast-config/toast-config.example.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: ToastConfigExampleComponent */

    /***/
    function wqvn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastConfigExampleComponent", function () {
        return ToastConfigExampleComponent;
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


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ToastConfigExampleComponent = /*#__PURE__*/function () {
        function ToastConfigExampleComponent(toastService) {
          _classCallCheck(this, ToastConfigExampleComponent);

          this.toastService = toastService;
        }

        _createClass(ToastConfigExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.toastService.setConfig({}, "id");
          }
        }, {
          key: "onShowToast",
          value: function onShowToast(highlightMode) {
            this.toastService.info({
              title: $localize(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["Toast Configuration"]))),
              message: $localize(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["I'm pretty easy to configure"]))),
              options: this.getOptions()
            });
          }
        }, {
          key: "getOptions",
          value: function getOptions() {
            return {
              extendedTimeOut: 2000,
              clickToDismiss: true,
              closeButton: true,
              positionClass: "nui-toast--bottom-right"
              /* BOTTOM_RIGHT */
              ,
              progressBar: true,
              progressAnimation: "increasing",
              timeOut: 5000
            };
          }
        }]);

        return ToastConfigExampleComponent;
      }();

      ToastConfigExampleComponent.ɵfac = function ToastConfigExampleComponent_Factory(t) {
        return new (t || ToastConfigExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      ToastConfigExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ToastConfigExampleComponent,
        selectors: [["nui-toast-config-example"]],
        decls: 2,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_557759875456545576$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_CONFIG_TOAST_CONFIG_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Show Toast");
            i18n_0 = MSG_EXTERNAL_557759875456545576$$DEMO_SRC_COMPONENTS_DEMO_TOAST_TOAST_CONFIG_TOAST_CONFIG_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral([":\u241F4600bd30106171bfee8c959a00f710ab918c38a8\u241F557759875456545576:Show Toast"])));
          }

          return [["nui-button", "", "type", "button", "id", "nui-toast-config-example", 3, "click"], i18n_0];
        },
        template: function ToastConfigExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastConfigExampleComponent_Template_button_click_0_listener($event) {
              return ctx.onShowToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "x3fY":
    /*!***********************************************************************************!*\
      !*** ./demo/src/components/demo/toast/toast-docs/toast-docs.example.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: ToastExampleComponent */

    /***/
    function x3fY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastExampleComponent", function () {
        return ToastExampleComponent;
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


      var _toast_basic_toast_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../toast-basic/toast-basic.example.component */
      "9j/F");
      /* harmony import */


      var _toast_basic_html_toast_basic_html_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../toast-basic-html/toast-basic-html.example.component */
      "vPsw");
      /* harmony import */


      var _toast_type_toast_type_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../toast-type/toast-type.example.component */
      "VhxL");
      /* harmony import */


      var _toast_config_toast_config_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../toast-config/toast-config.example.component */
      "wqvn");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");
      /* harmony import */


      var _toast_position_toast_position_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../toast-position/toast-position.example.component */
      "MWvE");
      /* harmony import */


      var _toast_sticky_error_toast_sticky_error_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../toast-sticky-error/toast-sticky-error.example.component */
      "Si/j");
      /* harmony import */


      var _toast_events_toast_events_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../toast-events/toast-events.example.component */
      "FLKQ");

      var ToastExampleComponent = /*#__PURE__*/function () {
        function ToastExampleComponent() {
          _classCallCheck(this, ToastExampleComponent);
        }

        _createClass(ToastExampleComponent, [{
          key: "getToastDeclarationKey",
          value: function getToastDeclarationKey(key) {
            return key;
          }
        }, {
          key: "getToastConfigKey",
          value: function getToastConfigKey(key) {
            return key;
          }
        }]);

        return ToastExampleComponent;
      }();

      ToastExampleComponent.ɵfac = function ToastExampleComponent_Factory(t) {
        return new (t || ToastExampleComponent)();
      };

      ToastExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToastExampleComponent,
        selectors: [["nui-toast-docs-example"]],
        decls: 162,
        vars: 5,
        consts: [["href", "../interfaces/IToastDeclaration.html"], ["filenamePrefix", "toast-basic", "exampleTitle", "Basic usage"], ["filenamePrefix", "toast-basic-html", "exampleTitle", "Basic HTML Usage"], ["filenamePrefix", "toast-type", "exampleTitle", "Types"], ["href", "../interfaces/IToastConfig.html"], ["filenamePrefix", "toast-config", "exampleTitle", "Configuration"], ["href", "../miscellaneous/enumerations.html#ToastPositionClass"], ["type", "warning", 3, "allowDismiss"], ["filenamePrefix", "toast-position", "exampleTitle", "Positioning"], ["filenamePrefix", "toast-sticky-error", "exampleTitle", "Sticky error"], ["href", "../interfaces/IActiveToast.html"], ["filenamePrefix", "toast-events", "exampleTitle", "Events"]],
        template: function ToastExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiToastModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " You can use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "IToastService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ToastService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " to show a (usually) temporary message (toast), associated with some event. In example below we're showing a toast message when the \"Show Toast\" button is clicked. Following construction is used to create a toast: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "IToastService.info(toastDeclaration: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "IToastDeclaration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ". Any property in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "IToastDeclaration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " is optional.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " When using the toast component with a title, a space is automatically inserted in front of the message body to create spacial separation from the title. In addition to the provided space, it's suggested that the user add a sentence-ending punctuation mark to the title to further emphasize this separation.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nui-toast-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Basic Usage With Html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Toast allows HTML usage inside the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " container by default. Note: The provided value will be sanitized and rendered.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " To configure a toast to display HTML as plain text, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " property in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " When the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " flag is turned on, all the content will be sanitized, basic tags for changing fonts are often allowed, such as ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "<b>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "<i>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "<u>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "<em>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ", and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "<strong>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, ". More advanced tags such as ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "<script>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "<object>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "<embed>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, ", and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "<link>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " are removed by the sanitization process. Additionally, potentially dangerous attributes such as ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "onclick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " are removed in order to prevent malicious code from being injected.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "nui-toast-basic-html-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Types");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Toast types allows you to convey some contextual information about the message by applying different styles to toasts.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "nui-toast-type-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Toast messages are highly configurable via ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "IToastConfig");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " interface. The following example employs some of the more common settings: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " extendedTimeOut: 2000, clickToDismiss: true, closeButton: true, positionClass: \"toast-bottom-right\", progressBar: true, progressAnimation: \"increasing\", timeOut: 5000 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "nui-toast-config-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Positioning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " The position of a toast message is determined by the value of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "IToastConfig.positionClass");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, ". By default toast is positioned top-right. To implement different positioning you must pass one of available options from ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "ToastPositionClass");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "IToastConfig");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " positionClass property.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " It is also possible to set a custom class to configure the position of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "nui-toast");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, ". Simply populate the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "IToastConfig.positionClass");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " with the custom css class name. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "nui-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Make sure you defined a custom class in a global stylesheet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "nui-example-wrapper", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "nui-toast-position-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Sticky Error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " You can also optionally force error toasts to remain visible indefinitely using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "IToastConfig.stickyError");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, ". Note, that this option is only available with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "IToastService.error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "nui-example-wrapper", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "nui-toast-sticky-error-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Events");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " With ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "IActiveToast");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, ", it's possible to capture (and act upon) following events per toast instance:\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "onShown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "onHidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "onClick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "nui-example-wrapper", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "nui-toast-events-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getToastDeclarationKey("message"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getToastConfigKey("enableHtml"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getToastDeclarationKey("options"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getToastConfigKey("enableHtml"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _toast_basic_toast_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["ToastBasicExampleComponent"], _toast_basic_html_toast_basic_html_example_component__WEBPACK_IMPORTED_MODULE_3__["ToastBasicHtmlExampleComponent"], _toast_type_toast_type_example_component__WEBPACK_IMPORTED_MODULE_4__["ToastTypeExampleComponent"], _toast_config_toast_config_example_component__WEBPACK_IMPORTED_MODULE_5__["ToastConfigExampleComponent"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"], _toast_position_toast_position_example_component__WEBPACK_IMPORTED_MODULE_7__["ToastPositionExampleComponent"], _toast_sticky_error_toast_sticky_error_example_component__WEBPACK_IMPORTED_MODULE_8__["ToastStickyErrorExampleComponent"], _toast_events_toast_events_example_component__WEBPACK_IMPORTED_MODULE_9__["ToastEventsExampleComponent"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-toast-toast-module-es5.js.map