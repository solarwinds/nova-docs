(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-message-message-module"], {
    /***/
    "/WSf":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/index.ts ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function WSf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./message-basic/message-basic.example.component\";\nexport * from \"./message-critical/message-critical.example.component\";\nexport * from \"./message-info/message-info.example.component\";\nexport * from \"./message-manual-control/message-manual-control.example.component\";\nexport * from \"./message-docs/message-docs.example.component\";\nexport * from \"./message-not-dismissable/message-not-dismissable.example.component\";\nexport * from \"./message-ok/message-ok.example.component\";\nexport * from \"./message-warning/message-warning.example.component\";\nexport * from \"./message-visual-test/message-visual-test.component\";\nexport * from \"./message-test/message-test.component\";\n";
      /***/
    },

    /***/
    "2mzi":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-critical/message-critical.example.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mzi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-message type=\"critical\" (dismiss)=\"onMessageDismiss()\" i18n>\n    <b>Simple critical message.</b> Cius dit vellab idunt acestot aturecu.\n    <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n</nui-message>\n\n<nui-message type=\"critical\" [allowDismiss]=\"true\" (dismiss)=\"onMessageDismiss()\" i18n>\n    <b>Emphasize part.</b> Cius dit vellab idunt acestot aturecu lluptaepe eum qui con\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam.\n    <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n</nui-message>\n";
      /***/
    },

    /***/
    "4bD9":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-not-dismissable/message-not-dismissable.example.component.ts ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bD9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-message-not-dismissable-example\",\n    templateUrl: \"./message-not-dismissable.example.component.html\",\n})\nexport class MessageNotDismissableExampleComponent { }\n";
      /***/
    },

    /***/
    "4wcm":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-docs/message-docs.example.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wcm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    <code>&lt;nui-message&gt;</code> allows easy customization of messages, e.g. setting message display style,\n    description and dismissability by passing message type, content text, allowing, disallowing or preventing\n    message dismiss.\n</p>\n\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiMessageModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n\n<p>\n    To implement a message you need to pass the type of a message into the <code>type</code> property\n    and message text inside <code>&lt;nui-message&gt;</code> component.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"message-basic\" exampleTitle=\"Basic Usage\">\n    <nui-message-basic-example></nui-message-basic-example>\n</nui-example-wrapper>\n\n<h2>Messages Types</h2>\n\n<p>\n    Possible types of messages are: <code>critical</code> | <code>warning</code> | <code>ok</code> | <code>info</code>.\n</p>\n\n<h2>Critical</h2>\n\n<p>\n    Something is wrong, but it is not system error. User <b>can not</b> continue without fixing something, he's blocked.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"message-critical\" exampleTitle=\"Critical Message\">\n    <nui-message-critical-example></nui-message-critical-example>\n</nui-example-wrapper>\n\n<h2>Warning</h2>\n\n<p>\n    There is an issue, but user can continue in the flow, however it is not recommended.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"message-warning\" exampleTitle=\"Warning Message\">\n    <nui-message-warning-example></nui-message-warning-example>\n</nui-example-wrapper>\n\n<h2>Success</h2>\n\n<p>\n    Use this type of message to inform user about success of performed action.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"message-ok\" exampleTitle=\"Ok Message\">\n    <nui-message-ok-example></nui-message-ok-example>\n</nui-example-wrapper>\n\n<h2>Informative</h2>\n\n<p>\n    Use this type of message for recommendations, tips, tricks, explanations or any non-state dependant information.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"message-info\" exampleTitle=\"Info Message\">\n    <nui-message-info-example></nui-message-info-example>\n</nui-example-wrapper>\n\n<h2>Not Allowed Dismiss</h2>\n\n<p>\n    Value of <code>allowDismiss</code> control message's persistency and dismissability. False statement makes 'cross' icon\n    on message dissappear. By default value of <code>allowDismiss</code> is true.\n    <br>\n    <code>[allowDismiss]</code> : false\n</p>\n\n<nui-example-wrapper filenamePrefix=\"message-not-dismissable\" exampleTitle=\"Not Dismissable Message\">\n    <nui-message-not-dismissable-example></nui-message-not-dismissable-example>\n</nui-example-wrapper>\n\n<h2>Manual Destroy Control</h2>\n\n<p>\n    To prevent the message from being completely removed from the DOM on user dismissal, pass an\n    rxjs Subject via the <code>manualDestroyControl</code> input. The Subject may optionally be used\n    to show and hide the message manually by calling <code>Subject.next</code> with a payload of true\n    to show it or false to hide it.\n</p>\n<nui-example-wrapper filenamePrefix=\"message-manual-control\" exampleTitle=\"Manual Destroy Control\">\n    <nui-message-manual-control-example></nui-message-manual-control-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "Bn8J":
    /*!*****************************************************************************************!*\
      !*** ./demo/src/components/demo/message/message-docs/message-docs.example.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: MessageDocsComponent */

    /***/
    function Bn8J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageDocsComponent", function () {
        return MessageDocsComponent;
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


      var _message_basic_message_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../message-basic/message-basic.example.component */
      "DjfV");
      /* harmony import */


      var _message_critical_message_critical_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../message-critical/message-critical.example.component */
      "TSGI");
      /* harmony import */


      var _message_warning_message_warning_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../message-warning/message-warning.example.component */
      "bkUU");
      /* harmony import */


      var _message_ok_message_ok_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../message-ok/message-ok.example.component */
      "qVsU");
      /* harmony import */


      var _message_info_message_info_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../message-info/message-info.example.component */
      "HoPs");
      /* harmony import */


      var _message_not_dismissable_message_not_dismissable_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../message-not-dismissable/message-not-dismissable.example.component */
      "sIu7");
      /* harmony import */


      var _message_manual_control_message_manual_control_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../message-manual-control/message-manual-control.example.component */
      "jyiZ");

      var MessageDocsComponent = function MessageDocsComponent() {
        _classCallCheck(this, MessageDocsComponent);
      };

      MessageDocsComponent.ɵfac = function MessageDocsComponent_Factory(t) {
        return new (t || MessageDocsComponent)();
      };

      MessageDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessageDocsComponent,
        selectors: [["nui-message-docs-example"]],
        decls: 93,
        vars: 0,
        consts: [["filenamePrefix", "message-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "message-critical", "exampleTitle", "Critical Message"], ["filenamePrefix", "message-warning", "exampleTitle", "Warning Message"], ["filenamePrefix", "message-ok", "exampleTitle", "Ok Message"], ["filenamePrefix", "message-info", "exampleTitle", "Info Message"], ["filenamePrefix", "message-not-dismissable", "exampleTitle", "Not Dismissable Message"], ["filenamePrefix", "message-manual-control", "exampleTitle", "Manual Destroy Control"]],
        template: function MessageDocsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<nui-message>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " allows easy customization of messages, e.g. setting message display style, description and dismissability by passing message type, content text, allowing, disallowing or preventing message dismiss.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "NuiMessageModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " To implement a message you need to pass the type of a message into the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " property and message text inside ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "<nui-message>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " component.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nui-example-wrapper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "nui-message-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Messages Types");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Possible types of messages are: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "critical");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " | ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " | ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "ok");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " | ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Critical");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Something is wrong, but it is not system error. User ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "can not");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " continue without fixing something, he's blocked.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "nui-message-critical-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " There is an issue, but user can continue in the flow, however it is not recommended.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "nui-message-warning-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Use this type of message to inform user about success of performed action.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "nui-message-ok-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Informative");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Use this type of message for recommendations, tips, tricks, explanations or any non-state dependant information.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "nui-example-wrapper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "nui-message-info-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Not Allowed Dismiss");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Value of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "allowDismiss");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " control message's persistency and dismissability. False statement makes 'cross' icon on message dissappear. By default value of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "allowDismiss");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " is true. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "[allowDismiss]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " : false\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "nui-message-not-dismissable-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Manual Destroy Control");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " To prevent the message from being completely removed from the DOM on user dismissal, pass an rxjs Subject via the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "manualDestroyControl");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " input. The Subject may optionally be used to show and hide the message manually by calling ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Subject.next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " with a payload of true to show it or false to hide it.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "nui-message-manual-control-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _message_basic_message_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["MessageBasicExampleComponent"], _message_critical_message_critical_example_component__WEBPACK_IMPORTED_MODULE_3__["MessageCriticalExampleComponent"], _message_warning_message_warning_example_component__WEBPACK_IMPORTED_MODULE_4__["MessageWarningExampleComponent"], _message_ok_message_ok_example_component__WEBPACK_IMPORTED_MODULE_5__["MessageOkExampleComponent"], _message_info_message_info_example_component__WEBPACK_IMPORTED_MODULE_6__["MessageInfoExampleComponent"], _message_not_dismissable_message_not_dismissable_example_component__WEBPACK_IMPORTED_MODULE_7__["MessageNotDismissableExampleComponent"], _message_manual_control_message_manual_control_example_component__WEBPACK_IMPORTED_MODULE_8__["MessageManualControlExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "DjfV":
    /*!*******************************************************************************************!*\
      !*** ./demo/src/components/demo/message/message-basic/message-basic.example.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: MessageBasicExampleComponent */

    /***/
    function DjfV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageBasicExampleComponent", function () {
        return MessageBasicExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");

      var MessageBasicExampleComponent = function MessageBasicExampleComponent() {
        _classCallCheck(this, MessageBasicExampleComponent);
      };

      MessageBasicExampleComponent.ɵfac = function MessageBasicExampleComponent_Factory(t) {
        return new (t || MessageBasicExampleComponent)();
      };

      MessageBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessageBasicExampleComponent,
        selectors: [["nui-message-basic-example"]],
        decls: 4,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1919492171649253801$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_BASIC_MESSAGE_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("{$startBoldText}Simple help message.{$closeBoldText} Cius dit vellab idunt acestot aturecu. {$startLink}Learn More{$closeLink}", {
              "startBoldText": "\uFFFD#2\uFFFD",
              "closeBoldText": "\uFFFD/#2\uFFFD",
              "startLink": "\uFFFD#3\uFFFD",
              "closeLink": "\uFFFD/#3\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_1919492171649253801$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_BASIC_MESSAGE_BASIC_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241F1b031733b4631a7781b80cf0e4d8f4713f627815\u241F1919492171649253801:", ":START_BOLD_TEXT:Simple help message.", ":CLOSE_BOLD_TEXT: Cius dit vellab idunt acestot aturecu. ", ":START_LINK:Learn More", ":CLOSE_LINK:"])), "\uFFFD#2\uFFFD", "\uFFFD/#2\uFFFD", "\uFFFD#3\uFFFD", "\uFFFD/#3\uFFFD");
          }

          return [["type", "ok"], i18n_0, ["href", "../components/MessageComponent.html", "target", "_blank"]];
        },
        template: function MessageBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "EXhZ":
    /*!*********************************************************************************!*\
      !*** ./demo/src/components/demo/message/message-test/message-test.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: MessageTestComponent */

    /***/
    function EXhZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageTestComponent", function () {
        return MessageTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");
      /* harmony import */


      var _message_manual_control_message_manual_control_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../message-manual-control/message-manual-control.example.component */
      "jyiZ");

      var MessageTestComponent = /*#__PURE__*/function () {
        function MessageTestComponent() {
          _classCallCheck(this, MessageTestComponent);
        }

        _createClass(MessageTestComponent, [{
          key: "onMessageDismiss",
          value: function onMessageDismiss() {
            console.log("Message was dismissed");
          }
        }]);

        return MessageTestComponent;
      }();

      MessageTestComponent.ɵfac = function MessageTestComponent_Factory(t) {
        return new (t || MessageTestComponent)();
      };

      MessageTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessageTestComponent,
        selectors: [["message-test-component"]],
        decls: 9,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2835376135174835804$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_TEST_MESSAGE_TEST_COMPONENT_TS_1 = goog.getMsg("{$startBoldText}This is a message with not allowed dismiss.{$closeBoldText} Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. {$startLink}Learn More{$closeLink}", {
              "startBoldText": "\uFFFD#2\uFFFD",
              "closeBoldText": "\uFFFD/#2\uFFFD",
              "startLink": "\uFFFD#3\uFFFD",
              "closeLink": "\uFFFD/#3\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_2835376135174835804$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_TEST_MESSAGE_TEST_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241F064c07931e7b248ef462ae11da28d2e6c9a236d3\u241F2835376135174835804:", ":START_BOLD_TEXT:This is a message with not allowed dismiss.", ":CLOSE_BOLD_TEXT: Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. ", ":START_LINK:Learn More", ":CLOSE_LINK:"])), "\uFFFD#2\uFFFD", "\uFFFD/#2\uFFFD", "\uFFFD#3\uFFFD", "\uFFFD/#3\uFFFD");
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5046902615158790751$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_TEST_MESSAGE_TEST_COMPONENT_TS_3 = goog.getMsg("{$startBoldText}Simple help message.{$closeBoldText} Cius dit vellab idunt acestot aturecu. {$startLink}Learn More{$closeLink}", {
              "startBoldText": "\uFFFD#6\uFFFD",
              "closeBoldText": "\uFFFD/#6\uFFFD",
              "startLink": "\uFFFD#7\uFFFD",
              "closeLink": "\uFFFD/#7\uFFFD"
            });
            i18n_2 = MSG_EXTERNAL_5046902615158790751$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_TEST_MESSAGE_TEST_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241F02836e3a06f77544a771ac40aec8770faf7bd594\u241F5046902615158790751:", ":START_BOLD_TEXT:Simple help message.", ":CLOSE_BOLD_TEXT: Cius dit vellab idunt acestot aturecu. ", ":START_LINK:Learn More", ":CLOSE_LINK:"])), "\uFFFD#6\uFFFD", "\uFFFD/#6\uFFFD", "\uFFFD#7\uFFFD", "\uFFFD/#7\uFFFD");
          }

          return [["id", "nui-demo-message-dismiss-not-allowed", "type", "warning", 3, "allowDismiss"], i18n_0, ["href", "../components/MessageComponent.html", "target", "_blank"], ["id", "nui-demo-message-dismiss-allowed", "type", "ok", 3, "dismiss"], i18n_2, ["id", "nui-demo-message-manual-control"]];
        },
        template: function MessageTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-message", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dismiss", function MessageTestComponent_Template_nui_message_dismiss_4_listener() {
              return ctx.onMessageDismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](5, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nui-message-manual-control-example", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _message_manual_control_message_manual_control_example_component__WEBPACK_IMPORTED_MODULE_2__["MessageManualControlExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Fyw1":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-info/message-info.example.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Fyw1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-message type=\"info\" (dismiss)=\"onMessageDismiss()\" i18n>\n    <b>Simple info message.</b> Cius dit vellab idunt acestot aturecu.\n    <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n</nui-message>\n\n<nui-message type=\"info\" (dismiss)=\"onMessageDismiss()\" i18n>\n    <b>Emphasize part.</b> Cius dit vellab idunt acestot aturecu lluptaepe eum qui con\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam.\n    <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n</nui-message>\n";
      /***/
    },

    /***/
    "Gqjz":
    /*!***************************************************!*\
      !*** ./demo/src/components/demo/message/index.ts ***!
      \***************************************************/

    /*! exports provided: MessageBasicExampleComponent, MessageCriticalExampleComponent, MessageInfoExampleComponent, MessageManualControlExampleComponent, MessageDocsComponent, MessageNotDismissableExampleComponent, MessageOkExampleComponent, MessageWarningExampleComponent, MessageVisualTestComponent, MessageTestComponent */

    /***/
    function Gqjz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _message_basic_message_basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./message-basic/message-basic.example.component */
      "DjfV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MessageBasicExampleComponent", function () {
        return _message_basic_message_basic_example_component__WEBPACK_IMPORTED_MODULE_0__["MessageBasicExampleComponent"];
      });
      /* harmony import */


      var _message_critical_message_critical_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./message-critical/message-critical.example.component */
      "TSGI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MessageCriticalExampleComponent", function () {
        return _message_critical_message_critical_example_component__WEBPACK_IMPORTED_MODULE_1__["MessageCriticalExampleComponent"];
      });
      /* harmony import */


      var _message_info_message_info_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./message-info/message-info.example.component */
      "HoPs");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MessageInfoExampleComponent", function () {
        return _message_info_message_info_example_component__WEBPACK_IMPORTED_MODULE_2__["MessageInfoExampleComponent"];
      });
      /* harmony import */


      var _message_manual_control_message_manual_control_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./message-manual-control/message-manual-control.example.component */
      "jyiZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MessageManualControlExampleComponent", function () {
        return _message_manual_control_message_manual_control_example_component__WEBPACK_IMPORTED_MODULE_3__["MessageManualControlExampleComponent"];
      });
      /* harmony import */


      var _message_docs_message_docs_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./message-docs/message-docs.example.component */
      "Bn8J");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MessageDocsComponent", function () {
        return _message_docs_message_docs_example_component__WEBPACK_IMPORTED_MODULE_4__["MessageDocsComponent"];
      });
      /* harmony import */


      var _message_not_dismissable_message_not_dismissable_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./message-not-dismissable/message-not-dismissable.example.component */
      "sIu7");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MessageNotDismissableExampleComponent", function () {
        return _message_not_dismissable_message_not_dismissable_example_component__WEBPACK_IMPORTED_MODULE_5__["MessageNotDismissableExampleComponent"];
      });
      /* harmony import */


      var _message_ok_message_ok_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./message-ok/message-ok.example.component */
      "qVsU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MessageOkExampleComponent", function () {
        return _message_ok_message_ok_example_component__WEBPACK_IMPORTED_MODULE_6__["MessageOkExampleComponent"];
      });
      /* harmony import */


      var _message_warning_message_warning_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./message-warning/message-warning.example.component */
      "bkUU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MessageWarningExampleComponent", function () {
        return _message_warning_message_warning_example_component__WEBPACK_IMPORTED_MODULE_7__["MessageWarningExampleComponent"];
      });
      /* harmony import */


      var _message_visual_test_message_visual_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./message-visual-test/message-visual-test.component */
      "S6b3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MessageVisualTestComponent", function () {
        return _message_visual_test_message_visual_test_component__WEBPACK_IMPORTED_MODULE_8__["MessageVisualTestComponent"];
      });
      /* harmony import */


      var _message_test_message_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./message-test/message-test.component */
      "EXhZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MessageTestComponent", function () {
        return _message_test_message_test_component__WEBPACK_IMPORTED_MODULE_9__["MessageTestComponent"];
      });
      /***/

    },

    /***/
    "HoPs":
    /*!*****************************************************************************************!*\
      !*** ./demo/src/components/demo/message/message-info/message-info.example.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: MessageInfoExampleComponent */

    /***/
    function HoPs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageInfoExampleComponent", function () {
        return MessageInfoExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");

      var MessageInfoExampleComponent = /*#__PURE__*/function () {
        function MessageInfoExampleComponent() {
          _classCallCheck(this, MessageInfoExampleComponent);
        }

        _createClass(MessageInfoExampleComponent, [{
          key: "onMessageDismiss",
          value: function onMessageDismiss() {
            console.log("Message was dismissed");
          }
        }]);

        return MessageInfoExampleComponent;
      }();

      MessageInfoExampleComponent.ɵfac = function MessageInfoExampleComponent_Factory(t) {
        return new (t || MessageInfoExampleComponent)();
      };

      MessageInfoExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessageInfoExampleComponent,
        selectors: [["nui-message-info-example"]],
        decls: 8,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5941700116854292525$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_INFO_MESSAGE_INFO_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("{$startBoldText}Simple info message.{$closeBoldText} Cius dit vellab idunt acestot aturecu. {$startLink}Learn More{$closeLink}", {
              "startBoldText": "\uFFFD#2\uFFFD",
              "closeBoldText": "\uFFFD/#2\uFFFD",
              "startLink": "\uFFFD#3\uFFFD",
              "closeLink": "\uFFFD/#3\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_5941700116854292525$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_INFO_MESSAGE_INFO_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241Fdb99e4c0f741239d4b3c7567b101fe91b2dfbb80\u241F5941700116854292525:", ":START_BOLD_TEXT:Simple info message.", ":CLOSE_BOLD_TEXT: Cius dit vellab idunt acestot aturecu. ", ":START_LINK:Learn More", ":CLOSE_LINK:"])), "\uFFFD#2\uFFFD", "\uFFFD/#2\uFFFD", "\uFFFD#3\uFFFD", "\uFFFD/#3\uFFFD");
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_180931835582726100$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_INFO_MESSAGE_INFO_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("{$startBoldText}Emphasize part.{$closeBoldText} Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. {$startLink}Learn More{$closeLink}", {
              "startBoldText": "\uFFFD#6\uFFFD",
              "closeBoldText": "\uFFFD/#6\uFFFD",
              "startLink": "\uFFFD#7\uFFFD",
              "closeLink": "\uFFFD/#7\uFFFD"
            });
            i18n_2 = MSG_EXTERNAL_180931835582726100$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_INFO_MESSAGE_INFO_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([":\u241Ffb0355ed77b026fca07edf756f182eaa3cc5ecbe\u241F180931835582726100:", ":START_BOLD_TEXT:Emphasize part.", ":CLOSE_BOLD_TEXT: Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. ", ":START_LINK:Learn More", ":CLOSE_LINK:"])), "\uFFFD#6\uFFFD", "\uFFFD/#6\uFFFD", "\uFFFD#7\uFFFD", "\uFFFD/#7\uFFFD");
          }

          return [["type", "info", 3, "dismiss"], i18n_0, ["href", "../components/MessageComponent.html", "target", "_blank"], i18n_2];
        },
        template: function MessageInfoExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dismiss", function MessageInfoExampleComponent_Template_nui_message_dismiss_0_listener() {
              return ctx.onMessageDismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dismiss", function MessageInfoExampleComponent_Template_nui_message_dismiss_4_listener() {
              return ctx.onMessageDismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](5, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "IGaU":
    /*!************************************************************!*\
      !*** ./demo/src/components/demo/message/message.module.ts ***!
      \************************************************************/

    /*! exports provided: MessageModule */

    /***/
    function IGaU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageModule", function () {
        return MessageModule;
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
      "Gqjz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["MessageDocsComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "message-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["MessageTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "message-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["MessageVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var MessageModule = function MessageModule() {
        _classCallCheck(this, MessageModule);
      };

      MessageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MessageModule
      });
      MessageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function MessageModule_Factory(t) {
          return new (t || MessageModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("RYRy");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MessageModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["MessageBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["MessageCriticalExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["MessageDocsComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["MessageInfoExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["MessageManualControlExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["MessageNotDismissableExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["MessageOkExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["MessageTestComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["MessageVisualTestComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["MessageWarningExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Ikwf":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-visual-test/message-visual-test.component.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ikwf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-message-visual-test\",\n    templateUrl: \"./message-visual-test.component.html\",\n})\nexport class MessageVisualTestComponent {}\n";
      /***/
    },

    /***/
    "KGSN":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-ok/message-ok.example.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KGSN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-message-ok-example\",\n    templateUrl: \"./message-ok.example.component.html\",\n})\nexport class MessageOkExampleComponent {\n    public onMessageDismiss(): void {\n        console.log(\"Message was dismissed\");\n    }\n}\n";
      /***/
    },

    /***/
    "Kr5B":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-basic/message-basic.example.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Kr5B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-message-basic-example\",\n    templateUrl: \"./message-basic.example.component.html\",\n})\nexport class MessageBasicExampleComponent { }\n";
      /***/
    },

    /***/
    "ME3k":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-warning/message-warning.example.component.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ME3k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-message-warning-example\",\n    templateUrl: \"./message-warning.example.component.html\",\n})\nexport class MessageWarningExampleComponent {\n    public onMessageDismiss(): void {\n        console.log(\"Message was dismissed\");\n    }\n}\n";
      /***/
    },

    /***/
    "PLxP":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-test/message-test.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PLxP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-message id=\"nui-demo-message-dismiss-not-allowed\"\n             type=\"warning\"\n             [allowDismiss]=\"false\" i18n>\n    <b>This is a message with not allowed dismiss.</b> Cius dit vellab idunt acestot aturecu lluptaepe eum qui con\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam.\n    <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n</nui-message>\n\n<nui-message id=\"nui-demo-message-dismiss-allowed\" type=\"ok\" (dismiss)=\"onMessageDismiss()\" i18n>\n    <b>Simple help message.</b> Cius dit vellab idunt acestot aturecu.\n    <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n</nui-message>\n<nui-message-manual-control-example id=\"nui-demo-message-manual-control\"></nui-message-manual-control-example>\n";
      /***/
    },

    /***/
    "RYRy":
    /*!**********************************************************************************************************!*\
      !*** ./demo/src/components/demo/message sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \**********************************************************************************************************/

    /*! no static exports found */

    /***/
    function RYRy(module, exports, __webpack_require__) {
      var map = {
        "./index.ts": "/WSf",
        "./message-basic/message-basic.example.component.html": "heUr",
        "./message-basic/message-basic.example.component.ts": "Kr5B",
        "./message-critical/message-critical.example.component.html": "2mzi",
        "./message-critical/message-critical.example.component.ts": "pFCe",
        "./message-docs/message-docs.example.component.html": "4wcm",
        "./message-docs/message-docs.example.component.ts": "WFcQ",
        "./message-info/message-info.example.component.html": "Fyw1",
        "./message-info/message-info.example.component.ts": "zuLZ",
        "./message-manual-control/message-manual-control.example.component.html": "VNpD",
        "./message-manual-control/message-manual-control.example.component.ts": "j44J",
        "./message-not-dismissable/message-not-dismissable.example.component.html": "cbQj",
        "./message-not-dismissable/message-not-dismissable.example.component.ts": "4bD9",
        "./message-ok/message-ok.example.component.html": "x7Rx",
        "./message-ok/message-ok.example.component.ts": "KGSN",
        "./message-test/message-test.component.html": "PLxP",
        "./message-test/message-test.component.ts": "r9Kf",
        "./message-visual-test/message-visual-test.component.html": "nDYt",
        "./message-visual-test/message-visual-test.component.ts": "Ikwf",
        "./message-warning/message-warning.example.component.html": "feV+",
        "./message-warning/message-warning.example.component.ts": "ME3k",
        "./message.module.ts": "cJS8"
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
      webpackContext.id = "RYRy";
      /***/
    },

    /***/
    "S6b3":
    /*!***********************************************************************************************!*\
      !*** ./demo/src/components/demo/message/message-visual-test/message-visual-test.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: MessageVisualTestComponent */

    /***/
    function S6b3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageVisualTestComponent", function () {
        return MessageVisualTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");

      var MessageVisualTestComponent = function MessageVisualTestComponent() {
        _classCallCheck(this, MessageVisualTestComponent);
      };

      MessageVisualTestComponent.ɵfac = function MessageVisualTestComponent_Factory(t) {
        return new (t || MessageVisualTestComponent)();
      };

      MessageVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessageVisualTestComponent,
        selectors: [["nui-message-visual-test"]],
        decls: 73,
        vars: 1,
        consts: [[1, "container"], [1, "row"], [1, "col"], ["type", "critical"], ["href", "../components/MessageComponent.html", "target", "_blank"], ["type", "warning"], [1, "w-100"], ["type", "ok"], ["type", "info"], ["type", "info", 3, "allowDismiss"]],
        template: function MessageVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Critical message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-message", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Simple critical message.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Cius dit vellab idunt acestot aturecu. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Learn More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nui-message", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Emphasize part.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Learn More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Warning message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nui-message", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Simple warning message.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Cius dit vellab idunt acestot aturecu. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Learn More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nui-message", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Emphasize part.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Learn More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Success message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nui-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Simple help message.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Cius dit vellab idunt acestot aturecu. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Learn More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nui-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Emphasize part.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Learn More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Info message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nui-message", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Simple info message.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Cius dit vellab idunt acestot aturecu. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Learn More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "nui-message", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Emphasize part.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Learn More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Not dismissable info message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "nui-message", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Simple NOT DISMISSABLE info message.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Cius dit vellab idunt acestot aturecu. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Learn More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "TSGI":
    /*!*************************************************************************************************!*\
      !*** ./demo/src/components/demo/message/message-critical/message-critical.example.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: MessageCriticalExampleComponent */

    /***/
    function TSGI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageCriticalExampleComponent", function () {
        return MessageCriticalExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");

      var MessageCriticalExampleComponent = /*#__PURE__*/function () {
        function MessageCriticalExampleComponent() {
          _classCallCheck(this, MessageCriticalExampleComponent);
        }

        _createClass(MessageCriticalExampleComponent, [{
          key: "onMessageDismiss",
          value: function onMessageDismiss() {
            console.log("Message was dismissed");
          }
        }]);

        return MessageCriticalExampleComponent;
      }();

      MessageCriticalExampleComponent.ɵfac = function MessageCriticalExampleComponent_Factory(t) {
        return new (t || MessageCriticalExampleComponent)();
      };

      MessageCriticalExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessageCriticalExampleComponent,
        selectors: [["nui-message-critical-example"]],
        decls: 8,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8612666971078270314$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_CRITICAL_MESSAGE_CRITICAL_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("{$startBoldText}Simple critical message.{$closeBoldText} Cius dit vellab idunt acestot aturecu. {$startLink}Learn More{$closeLink}", {
              "startBoldText": "\uFFFD#2\uFFFD",
              "closeBoldText": "\uFFFD/#2\uFFFD",
              "startLink": "\uFFFD#3\uFFFD",
              "closeLink": "\uFFFD/#3\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_8612666971078270314$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_CRITICAL_MESSAGE_CRITICAL_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([":\u241Fd8d202caa3cb64ed93ad695e4527a4e198701549\u241F8612666971078270314:", ":START_BOLD_TEXT:Simple critical message.", ":CLOSE_BOLD_TEXT: Cius dit vellab idunt acestot aturecu. ", ":START_LINK:Learn More", ":CLOSE_LINK:"])), "\uFFFD#2\uFFFD", "\uFFFD/#2\uFFFD", "\uFFFD#3\uFFFD", "\uFFFD/#3\uFFFD");
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_180931835582726100$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_CRITICAL_MESSAGE_CRITICAL_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("{$startBoldText}Emphasize part.{$closeBoldText} Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. {$startLink}Learn More{$closeLink}", {
              "startBoldText": "\uFFFD#6\uFFFD",
              "closeBoldText": "\uFFFD/#6\uFFFD",
              "startLink": "\uFFFD#7\uFFFD",
              "closeLink": "\uFFFD/#7\uFFFD"
            });
            i18n_2 = MSG_EXTERNAL_180931835582726100$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_CRITICAL_MESSAGE_CRITICAL_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([":\u241Ffb0355ed77b026fca07edf756f182eaa3cc5ecbe\u241F180931835582726100:", ":START_BOLD_TEXT:Emphasize part.", ":CLOSE_BOLD_TEXT: Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. ", ":START_LINK:Learn More", ":CLOSE_LINK:"])), "\uFFFD#6\uFFFD", "\uFFFD/#6\uFFFD", "\uFFFD#7\uFFFD", "\uFFFD/#7\uFFFD");
          }

          return [["type", "critical", 3, "dismiss"], i18n_0, ["href", "../components/MessageComponent.html", "target", "_blank"], ["type", "critical", 3, "allowDismiss", "dismiss"], i18n_2];
        },
        template: function MessageCriticalExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dismiss", function MessageCriticalExampleComponent_Template_nui_message_dismiss_0_listener() {
              return ctx.onMessageDismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-message", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dismiss", function MessageCriticalExampleComponent_Template_nui_message_dismiss_4_listener() {
              return ctx.onMessageDismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](5, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", true);
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "VNpD":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-manual-control/message-manual-control.example.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VNpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button class=\"mb-2 toggle-btn\" nui-button type=\"button\" (click)=\"toggleMessage()\">Toggle state of message</button>\n<nui-message (dismiss)=\"onMessageDismiss()\"\n             type=\"ok\"\n             [manualControl]=\"messageVisibilitySubject\"\n             i18n>\n    <b>Simple help message.</b> Cius dit vellab idunt acestot aturecu. <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n</nui-message>\n";
      /***/
    },

    /***/
    "WFcQ":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-docs/message-docs.example.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WFcQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-message-docs-example\",\n    templateUrl: \"./message-docs.example.component.html\",\n})\nexport class MessageDocsComponent {\n}\n";
      /***/
    },

    /***/
    "bkUU":
    /*!***********************************************************************************************!*\
      !*** ./demo/src/components/demo/message/message-warning/message-warning.example.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: MessageWarningExampleComponent */

    /***/
    function bkUU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageWarningExampleComponent", function () {
        return MessageWarningExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");

      var MessageWarningExampleComponent = /*#__PURE__*/function () {
        function MessageWarningExampleComponent() {
          _classCallCheck(this, MessageWarningExampleComponent);
        }

        _createClass(MessageWarningExampleComponent, [{
          key: "onMessageDismiss",
          value: function onMessageDismiss() {
            console.log("Message was dismissed");
          }
        }]);

        return MessageWarningExampleComponent;
      }();

      MessageWarningExampleComponent.ɵfac = function MessageWarningExampleComponent_Factory(t) {
        return new (t || MessageWarningExampleComponent)();
      };

      MessageWarningExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessageWarningExampleComponent,
        selectors: [["nui-message-warning-example"]],
        decls: 8,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7542075592541162466$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_WARNING_MESSAGE_WARNING_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("{$startBoldText}Simple warning message.{$closeBoldText} Cius dit vellab idunt acestot aturecu. {$startLink}Learn More{$closeLink}", {
              "startBoldText": "\uFFFD#2\uFFFD",
              "closeBoldText": "\uFFFD/#2\uFFFD",
              "startLink": "\uFFFD#3\uFFFD",
              "closeLink": "\uFFFD/#3\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_7542075592541162466$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_WARNING_MESSAGE_WARNING_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([":\u241Fc3bd4f03cf37f1bc5e461665de6b7cd5141ce779\u241F7542075592541162466:", ":START_BOLD_TEXT:Simple warning message.", ":CLOSE_BOLD_TEXT: Cius dit vellab idunt acestot aturecu. ", ":START_LINK:Learn More", ":CLOSE_LINK:"])), "\uFFFD#2\uFFFD", "\uFFFD/#2\uFFFD", "\uFFFD#3\uFFFD", "\uFFFD/#3\uFFFD");
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_180931835582726100$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_WARNING_MESSAGE_WARNING_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("{$startBoldText}Emphasize part.{$closeBoldText} Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. {$startLink}Learn More{$closeLink}", {
              "startBoldText": "\uFFFD#6\uFFFD",
              "closeBoldText": "\uFFFD/#6\uFFFD",
              "startLink": "\uFFFD#7\uFFFD",
              "closeLink": "\uFFFD/#7\uFFFD"
            });
            i18n_2 = MSG_EXTERNAL_180931835582726100$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_WARNING_MESSAGE_WARNING_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([":\u241Ffb0355ed77b026fca07edf756f182eaa3cc5ecbe\u241F180931835582726100:", ":START_BOLD_TEXT:Emphasize part.", ":CLOSE_BOLD_TEXT: Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. ", ":START_LINK:Learn More", ":CLOSE_LINK:"])), "\uFFFD#6\uFFFD", "\uFFFD/#6\uFFFD", "\uFFFD#7\uFFFD", "\uFFFD/#7\uFFFD");
          }

          return [["type", "warning", 3, "dismiss"], i18n_0, ["href", "../components/MessageComponent.html", "target", "_blank"], i18n_2];
        },
        template: function MessageWarningExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dismiss", function MessageWarningExampleComponent_Template_nui_message_dismiss_0_listener() {
              return ctx.onMessageDismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dismiss", function MessageWarningExampleComponent_Template_nui_message_dismiss_4_listener() {
              return ctx.onMessageDismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](5, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "cJS8":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message.module.ts ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cJS8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiButtonModule, NuiDocsModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\n\nimport {\n    MessageBasicExampleComponent,\n    MessageCriticalExampleComponent,\n    MessageDocsComponent,\n    MessageInfoExampleComponent,\n    MessageManualControlExampleComponent,\n    MessageNotDismissableExampleComponent,\n    MessageOkExampleComponent,\n    MessageTestComponent,\n    MessageVisualTestComponent,\n    MessageWarningExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: MessageDocsComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"message-test\",\n        component: MessageTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"message-visual-test\",\n        component: MessageVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiMessageModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        MessageBasicExampleComponent,\n        MessageCriticalExampleComponent,\n        MessageDocsComponent,\n        MessageInfoExampleComponent,\n        MessageManualControlExampleComponent,\n        MessageNotDismissableExampleComponent,\n        MessageOkExampleComponent,\n        MessageTestComponent,\n        MessageVisualTestComponent,\n        MessageWarningExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class MessageModule {\n}\n";
      /***/
    },

    /***/
    "cbQj":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-not-dismissable/message-not-dismissable.example.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cbQj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-message type=\"warning\"\n             [allowDismiss]=\"false\" i18n>\n    <b>This is a message with not allowed dismiss.</b> Cius dit vellab idunt acestot aturecu lluptaepe eum qui con\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam.\n    <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n</nui-message>\n";
      /***/
    },

    /***/
    "feV+":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-warning/message-warning.example.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function feV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-message type=\"warning\" (dismiss)=\"onMessageDismiss()\" i18n>\n    <b>Simple warning message.</b> Cius dit vellab idunt acestot aturecu.\n    <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n</nui-message>\n\n<nui-message type=\"warning\" (dismiss)=\"onMessageDismiss()\" i18n>\n    <b>Emphasize part.</b> Cius dit vellab idunt acestot aturecu lluptaepe eum qui con\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam.\n    <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n</nui-message>\n";
      /***/
    },

    /***/
    "heUr":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-basic/message-basic.example.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function heUr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-message type=\"ok\" i18n>\n    <b>Simple help message.</b> Cius dit vellab idunt acestot aturecu. <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n</nui-message>\n";
      /***/
    },

    /***/
    "j44J":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-manual-control/message-manual-control.example.component.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function j44J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { Subject } from \"rxjs\";\n\n@Component({\n    selector: \"nui-message-manual-control-example\",\n    templateUrl: \"./message-manual-control.example.component.html\",\n})\nexport class MessageManualControlExampleComponent {\n    public isVisible: boolean = true;\n    public messageVisibilitySubject = new Subject<boolean>();\n\n    public onMessageDismiss(): void {\n        this.isVisible = !this.isVisible;\n    }\n\n    public toggleMessage() {\n        this.isVisible = !this.isVisible;\n        this.messageVisibilitySubject.next(this.isVisible);\n    }\n}\n";
      /***/
    },

    /***/
    "jyiZ":
    /*!*************************************************************************************************************!*\
      !*** ./demo/src/components/demo/message/message-manual-control/message-manual-control.example.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: MessageManualControlExampleComponent */

    /***/
    function jyiZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageManualControlExampleComponent", function () {
        return MessageManualControlExampleComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");

      var MessageManualControlExampleComponent = /*#__PURE__*/function () {
        function MessageManualControlExampleComponent() {
          _classCallCheck(this, MessageManualControlExampleComponent);

          this.isVisible = true;
          this.messageVisibilitySubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        }

        _createClass(MessageManualControlExampleComponent, [{
          key: "onMessageDismiss",
          value: function onMessageDismiss() {
            this.isVisible = !this.isVisible;
          }
        }, {
          key: "toggleMessage",
          value: function toggleMessage() {
            this.isVisible = !this.isVisible;
            this.messageVisibilitySubject.next(this.isVisible);
          }
        }]);

        return MessageManualControlExampleComponent;
      }();

      MessageManualControlExampleComponent.ɵfac = function MessageManualControlExampleComponent_Factory(t) {
        return new (t || MessageManualControlExampleComponent)();
      };

      MessageManualControlExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MessageManualControlExampleComponent,
        selectors: [["nui-message-manual-control-example"]],
        decls: 6,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1919492171649253801$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_MANUAL_CONTROL_MESSAGE_MANUAL_CONTROL_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("{$startBoldText}Simple help message.{$closeBoldText} Cius dit vellab idunt acestot aturecu. {$startLink}Learn More{$closeLink}", {
              "startBoldText": "\uFFFD#4\uFFFD",
              "closeBoldText": "\uFFFD/#4\uFFFD",
              "startLink": "\uFFFD#5\uFFFD",
              "closeLink": "\uFFFD/#5\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_1919492171649253801$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_MANUAL_CONTROL_MESSAGE_MANUAL_CONTROL_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([":\u241F1b031733b4631a7781b80cf0e4d8f4713f627815\u241F1919492171649253801:", ":START_BOLD_TEXT:Simple help message.", ":CLOSE_BOLD_TEXT: Cius dit vellab idunt acestot aturecu. ", ":START_LINK:Learn More", ":CLOSE_LINK:"])), "\uFFFD#4\uFFFD", "\uFFFD/#4\uFFFD", "\uFFFD#5\uFFFD", "\uFFFD/#5\uFFFD");
          }

          return [["nui-button", "", "type", "button", 1, "mb-2", "toggle-btn", 3, "click"], ["type", "ok", 3, "manualControl", "dismiss"], i18n_0, ["href", "../components/MessageComponent.html", "target", "_blank"]];
        },
        template: function MessageManualControlExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessageManualControlExampleComponent_Template_button_click_0_listener() {
              return ctx.toggleMessage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Toggle state of message");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-message", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dismiss", function MessageManualControlExampleComponent_Template_nui_message_dismiss_2_listener() {
              return ctx.onMessageDismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("manualControl", ctx.messageVisibilitySubject);
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "nDYt":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-visual-test/message-visual-test.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nDYt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Critical message</h3>\n            <nui-message type=\"critical\">\n                <b>Simple critical message.</b> Cius dit vellab idunt acestot aturecu.\n                <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n            </nui-message>\n\n            <nui-message type=\"critical\">\n                <b>Emphasize part.</b> Cius dit vellab idunt acestot aturecu lluptaepe eum qui con\n                ciusae dolenis moditatiusam es dolum sollor aliquam.\n                <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n            </nui-message>\n        </div>\n        <div class=\"col\">\n            <h3>Warning message</h3>\n            <nui-message type=\"warning\">\n                <b>Simple warning message.</b> Cius dit vellab idunt acestot aturecu.\n                <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n            </nui-message>\n\n            <nui-message type=\"warning\">\n                <b>Emphasize part.</b> Cius dit vellab idunt acestot aturecu lluptaepe eum qui con\n                ciusae dolenis moditatiusam es dolum sollor aliquam.\n                <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n            </nui-message>\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col\">\n            <h3>Success message</h3>\n            <nui-message type=\"ok\">\n                <b>Simple help message.</b> Cius dit vellab idunt acestot aturecu.\n                <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n            </nui-message>\n\n            <nui-message type=\"ok\">\n                <b>Emphasize part.</b> Cius dit vellab idunt acestot aturecu lluptaepe eum qui con\n                ciusae dolenis moditatiusam es dolum sollor aliquam.\n                <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n            </nui-message>\n        </div>\n        <div class=\"col\">\n            <h3>Info message</h3>\n            <nui-message type=\"info\">\n                <b>Simple info message.</b> Cius dit vellab idunt acestot aturecu.\n                <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n            </nui-message>\n\n            <nui-message type=\"info\">\n                <b>Emphasize part.</b> Cius dit vellab idunt acestot aturecu lluptaepe eum qui con\n                ciusae dolenis moditatiusam es dolum sollor aliquam.\n                <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n            </nui-message>\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col\">\n            <h3>Not dismissable info message</h3>\n            <nui-message type=\"info\" [allowDismiss]=\"false\">\n                <b>Simple NOT DISMISSABLE info message.</b> Cius dit vellab idunt acestot aturecu.\n                <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n            </nui-message>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "pFCe":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-critical/message-critical.example.component.ts ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pFCe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-message-critical-example\",\n    templateUrl: \"./message-critical.example.component.html\",\n})\nexport class MessageCriticalExampleComponent {\n    public onMessageDismiss(): void {\n        console.log(\"Message was dismissed\");\n    }\n}\n";
      /***/
    },

    /***/
    "qVsU":
    /*!*************************************************************************************!*\
      !*** ./demo/src/components/demo/message/message-ok/message-ok.example.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: MessageOkExampleComponent */

    /***/
    function qVsU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageOkExampleComponent", function () {
        return MessageOkExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");

      var MessageOkExampleComponent = /*#__PURE__*/function () {
        function MessageOkExampleComponent() {
          _classCallCheck(this, MessageOkExampleComponent);
        }

        _createClass(MessageOkExampleComponent, [{
          key: "onMessageDismiss",
          value: function onMessageDismiss() {
            console.log("Message was dismissed");
          }
        }]);

        return MessageOkExampleComponent;
      }();

      MessageOkExampleComponent.ɵfac = function MessageOkExampleComponent_Factory(t) {
        return new (t || MessageOkExampleComponent)();
      };

      MessageOkExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessageOkExampleComponent,
        selectors: [["nui-message-ok-example"]],
        decls: 8,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5046902615158790751$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_OK_MESSAGE_OK_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("{$startBoldText}Simple help message.{$closeBoldText} Cius dit vellab idunt acestot aturecu. {$startLink}Learn More{$closeLink}", {
              "startBoldText": "\uFFFD#2\uFFFD",
              "closeBoldText": "\uFFFD/#2\uFFFD",
              "startLink": "\uFFFD#3\uFFFD",
              "closeLink": "\uFFFD/#3\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_5046902615158790751$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_OK_MESSAGE_OK_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([":\u241F02836e3a06f77544a771ac40aec8770faf7bd594\u241F5046902615158790751:", ":START_BOLD_TEXT:Simple help message.", ":CLOSE_BOLD_TEXT: Cius dit vellab idunt acestot aturecu. ", ":START_LINK:Learn More", ":CLOSE_LINK:"])), "\uFFFD#2\uFFFD", "\uFFFD/#2\uFFFD", "\uFFFD#3\uFFFD", "\uFFFD/#3\uFFFD");
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_180931835582726100$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_OK_MESSAGE_OK_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("{$startBoldText}Emphasize part.{$closeBoldText} Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. {$startLink}Learn More{$closeLink}", {
              "startBoldText": "\uFFFD#6\uFFFD",
              "closeBoldText": "\uFFFD/#6\uFFFD",
              "startLink": "\uFFFD#7\uFFFD",
              "closeLink": "\uFFFD/#7\uFFFD"
            });
            i18n_2 = MSG_EXTERNAL_180931835582726100$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_OK_MESSAGE_OK_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([":\u241Ffb0355ed77b026fca07edf756f182eaa3cc5ecbe\u241F180931835582726100:", ":START_BOLD_TEXT:Emphasize part.", ":CLOSE_BOLD_TEXT: Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. ", ":START_LINK:Learn More", ":CLOSE_LINK:"])), "\uFFFD#6\uFFFD", "\uFFFD/#6\uFFFD", "\uFFFD#7\uFFFD", "\uFFFD/#7\uFFFD");
          }

          return [["type", "ok", 3, "dismiss"], i18n_0, ["href", "../components/MessageComponent.html", "target", "_blank"], i18n_2];
        },
        template: function MessageOkExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dismiss", function MessageOkExampleComponent_Template_nui_message_dismiss_0_listener() {
              return ctx.onMessageDismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dismiss", function MessageOkExampleComponent_Template_nui_message_dismiss_4_listener() {
              return ctx.onMessageDismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](5, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "r9Kf":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-test/message-test.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function r9Kf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"message-test-component\",\n    templateUrl: \"message-test.component.html\",\n})\n\nexport class MessageTestComponent {\n    public onMessageDismiss(): void {\n        console.log(\"Message was dismissed\");\n    }\n}\n";
      /***/
    },

    /***/
    "sIu7":
    /*!***************************************************************************************************************!*\
      !*** ./demo/src/components/demo/message/message-not-dismissable/message-not-dismissable.example.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: MessageNotDismissableExampleComponent */

    /***/
    function sIu7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageNotDismissableExampleComponent", function () {
        return MessageNotDismissableExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");

      var MessageNotDismissableExampleComponent = function MessageNotDismissableExampleComponent() {
        _classCallCheck(this, MessageNotDismissableExampleComponent);
      };

      MessageNotDismissableExampleComponent.ɵfac = function MessageNotDismissableExampleComponent_Factory(t) {
        return new (t || MessageNotDismissableExampleComponent)();
      };

      MessageNotDismissableExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessageNotDismissableExampleComponent,
        selectors: [["nui-message-not-dismissable-example"]],
        decls: 4,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2835376135174835804$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_NOT_DISMISSABLE_MESSAGE_NOT_DISMISSABLE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("{$startBoldText}This is a message with not allowed dismiss.{$closeBoldText} Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. {$startLink}Learn More{$closeLink}", {
              "startBoldText": "\uFFFD#2\uFFFD",
              "closeBoldText": "\uFFFD/#2\uFFFD",
              "startLink": "\uFFFD#3\uFFFD",
              "closeLink": "\uFFFD/#3\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_2835376135174835804$$DEMO_SRC_COMPONENTS_DEMO_MESSAGE_MESSAGE_NOT_DISMISSABLE_MESSAGE_NOT_DISMISSABLE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([":\u241F064c07931e7b248ef462ae11da28d2e6c9a236d3\u241F2835376135174835804:", ":START_BOLD_TEXT:This is a message with not allowed dismiss.", ":CLOSE_BOLD_TEXT: Cius dit vellab idunt acestot aturecu lluptaepe eum qui con ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu ciusae dolenis moditatiusam es dolum sollor aliquam. ", ":START_LINK:Learn More", ":CLOSE_LINK:"])), "\uFFFD#2\uFFFD", "\uFFFD/#2\uFFFD", "\uFFFD#3\uFFFD", "\uFFFD/#3\uFFFD");
          }

          return [["type", "warning", 3, "allowDismiss"], i18n_0, ["href", "../components/MessageComponent.html", "target", "_blank"]];
        },
        template: function MessageNotDismissableExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "x7Rx":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-ok/message-ok.example.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x7Rx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-message type=\"ok\" (dismiss)=\"onMessageDismiss()\" i18n>\n    <b>Simple help message.</b> Cius dit vellab idunt acestot aturecu.\n    <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n</nui-message>\n\n<nui-message type=\"ok\" (dismiss)=\"onMessageDismiss()\" i18n>\n    <b>Emphasize part.</b> Cius dit vellab idunt acestot aturecu lluptaepe eum qui con\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam. Cius dit vellab idunt acestot aturecu\n    ciusae dolenis moditatiusam es dolum sollor aliquam.\n    <a href=\"../components/MessageComponent.html\" target=\"_blank\">Learn More</a>\n</nui-message>\n";
      /***/
    },

    /***/
    "zuLZ":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/message/message-info/message-info.example.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zuLZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-message-info-example\",\n    templateUrl: \"./message-info.example.component.html\",\n})\nexport class MessageInfoExampleComponent {\n    onMessageDismiss() {\n        console.log(\"Message was dismissed\");\n    }\n}\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-message-message-module-es5.js.map