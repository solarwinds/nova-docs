(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-toolbar-toolbar-module"], {
    /***/
    "/9GZ":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/toolbar-item-types/toolbar-item-types.example.component.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-toolbar-item-types-example\",\n    templateUrl: \"./toolbar-item-types.example.component.html\",\n})\n\nexport class ToolbarItemTypesExampleComponent {\n    public actionDone() {\n        console.log(\"action\");\n    }\n}\n";
      /***/
    },

    /***/
    "FD+Y":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/toolbar-basic/toolbar-basic.example.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FDY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject } from \"@angular/core\";\nimport { IToastService, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-toolbar-basic-example\",\n    templateUrl: \"./toolbar-basic.example.component.html\",\n})\n\nexport class ToolbarBasicExampleComponent {\n    constructor(@Inject(ToastService) private toastService: IToastService) { }\n\n    public onShowToast(highlightMode: boolean): void {\n        this.toastService.info({\n            message: $localize `Action done message!`,\n            title: $localize `Action Done`,\n        });\n    }\n}\n";
      /***/
    },

    /***/
    "H663":
    /*!***********************************************************************************************!*\
      !*** ./demo/src/components/demo/toolbar/toolbar-visual-test/toolbar-visual-test.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ToolbarVisualTestExampleComponent */

    /***/
    function H663(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarVisualTestExampleComponent", function () {
        return ToolbarVisualTestExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar.component */
      "tDpY");
      /* harmony import */


      var _src_lib_toolbar_toolbar_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar-group.component */
      "hRrO");
      /* harmony import */


      var _src_lib_toolbar_toolbar_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar-item.component */
      "rLD5");
      /* harmony import */


      var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/search/search.component */
      "dYN2");
      /* harmony import */


      var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/menu/menu/menu.component */
      "JG2v");

      var ToolbarVisualTestExampleComponent = /*#__PURE__*/function () {
        function ToolbarVisualTestExampleComponent() {
          _classCallCheck(this, ToolbarVisualTestExampleComponent);

          this.value = "";
          this.busy = false;
          this.placeholder = "Placeholder";
          this.itemsSource = [{
            header: "section title",
            itemsSource: [{
              title: "Menu Item",
              itemType: "action"
            }, {
              title: "Hover me",
              itemType: "action"
            }, {
              title: "Selected menu item",
              isSelected: true
            }, {
              title: "Menu item",
              itemType: "switch",
              checked: true
            }, {
              title: "Menu disabled item",
              itemType: "switch",
              checked: false,
              disabled: true
            }, {
              title: "Menu item with checkbox",
              itemType: "option",
              disabled: true
            }, {
              title: "Menu item with icon",
              itemType: "action",
              icon: "table"
            }, {
              title: "Link menu item",
              itemType: "link",
              url: "#button",
              disabled: true
            }, {
              title: "Export PDF",
              itemType: "link",
              icon: "export-pdf",
              url: "#button"
            }]
          }];
          this.select = {
            current: 1,
            total: 72
          };
        }

        _createClass(ToolbarVisualTestExampleComponent, [{
          key: "search",
          value: function search() {
            this.busy = !this.busy;
          }
        }]);

        return ToolbarVisualTestExampleComponent;
      }();

      ToolbarVisualTestExampleComponent.ɵfac = function ToolbarVisualTestExampleComponent_Factory(t) {
        return new (t || ToolbarVisualTestExampleComponent)();
      };

      ToolbarVisualTestExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarVisualTestExampleComponent,
        selectors: [["nui-toolbar-visual-test"]],
        decls: 108,
        vars: 13,
        consts: [[1, "container"], ["id", "nui-toolbar-test"], ["title", "g1"], ["id", "nui-toolbar-test-button-primary", "displayStyle", "main", "type", "primary", "icon", "edit", "title", "Edit"], ["type", "primary", "icon", "filter", "title", "Filter"], ["type", "primary", "icon", "lock", "title", "Lock"], ["type", "primary", "icon", "browse", "title", "Browse"], ["type", "primary", "icon", "clear", "title", "Clear"], ["type", "primary", "icon", "download", "title", "Download"], ["title", "g2"], ["type", "primary", "icon", "copy", "title", "Copy"], ["type", "secondary", "icon", "enable", "title", "Enable"], ["type", "secondary", "icon", "execute", "title", "Execute"], ["type", "primary", "icon", "hide", "title", "Hide"], ["type", "secondary", "icon", "ignore", "title", "Ignore"], ["displayStyle", "destructive", "type", "secondary", "icon", "delete", "title", "Delete"], ["id", "nui-toolbar-test-embedded"], ["id", "nui-toolbar-embedded-test-button-primary", "displayStyle", "main", "type", "primary", "icon", "edit", "title", "Edit"], ["id", "nui-toolbar-embedded-test-button", "type", "primary", "icon", "clear", "title", "Clear"], ["id", "nui-toolbar-embedded-test-destructive-button", "displayStyle", "destructive", "type", "secondary", "icon", "delete", "title", "Delete"], [1, "nui-toolbar-embedded"], ["id", "nui-toolbar-embedded-test-search", 1, "mr-1", 3, "search"], ["id", "nui-toolbar-embedded-test-menu", "displayStyle", "action", 3, "itemsSource", "icon"], ["id", "nui-toolbar-test-selected", 3, "selectionEnabled", "selectedItems"], ["id", "nui-toolbar-selected-test-button-primary", "displayStyle", "main", "type", "primary", "icon", "edit", "title", "Edit"], ["id", "nui-toolbar-selected-test-button", "type", "primary", "icon", "clear", "title", "Clear"], ["id", "nui-toolbar-selected-test-destructive-button", "displayStyle", "destructive", "type", "secondary", "icon", "delete", "title", "Delete"], ["id", "nui-toolbar-selected-test-search", 1, "mr-1", 3, "search"], ["id", "nui-toolbar-selected-test-menu", "displayStyle", "action", 3, "itemsSource", "icon"], ["id", "nui-toolbar-no-menu-with-search"], ["displayStyle", "main", "type", "primary", "icon", "add", "title", "Add"], ["type", "primary", "icon", "edit", "title", "Edit"], ["displayStyle", "destructive", "type", "primary", "icon", "delete", "title", "Delete"], [3, "value", "placeholder"], ["id", "nui-toolbar-with-selection-no-menu-with-search", 3, "selectionEnabled", "selectedItems"], ["toolbar", ""], ["type", "primary", "icon", "deselect", "title", "Deselect"], ["type", "primary", "icon", "deselect-all", "title", "Deselect All"], ["id", "nui-toolbar-no-menu"], ["id", "nui-toolbar-with-selection-no-menu", 3, "selectionEnabled"]],
        template: function ToolbarVisualTestExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Basic toolbar usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-toolbar-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-toolbar-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nui-toolbar-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nui-toolbar-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nui-toolbar-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nui-toolbar-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nui-toolbar-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nui-toolbar-group", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nui-toolbar-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nui-toolbar-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nui-toolbar-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nui-toolbar-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nui-toolbar-item", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "nui-toolbar-item", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Toolbar with embedded content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-toolbar", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nui-toolbar-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "nui-toolbar-item", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "nui-toolbar-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "nui-toolbar-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nui-toolbar-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "nui-toolbar-item", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "nui-toolbar-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nui-toolbar-group", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "nui-toolbar-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "nui-toolbar-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "nui-toolbar-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "nui-toolbar-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "nui-toolbar-item", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "nui-toolbar-item", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nui-search", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function ToolbarVisualTestExampleComponent_Template_nui_search_search_41_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "nui-menu", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Toolbar with selected section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nui-toolbar", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nui-toolbar-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "nui-toolbar-item", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "nui-toolbar-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "nui-toolbar-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "nui-toolbar-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "nui-toolbar-item", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "nui-toolbar-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nui-toolbar-group", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "nui-toolbar-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "nui-toolbar-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "nui-toolbar-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "nui-toolbar-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "nui-toolbar-item", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nui-toolbar-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nui-search", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function ToolbarVisualTestExampleComponent_Template_nui_search_search_64_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "nui-menu", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Toolbar with no menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "nui-toolbar", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "nui-toolbar-item", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "nui-toolbar-item", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nui-toolbar-item", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "nui-search", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Toolbar with selection and no menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "nui-toolbar", 34, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "nui-toolbar-item", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "nui-toolbar-item", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "nui-toolbar-item", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "nui-search", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Toolbar with no menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "nui-toolbar", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "nui-toolbar-item", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "nui-toolbar-item", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "nui-toolbar-item", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Toolbar with selection and no menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "nui-toolbar", 39, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "nui-toolbar-item", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "nui-toolbar-item", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "nui-toolbar-item", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.itemsSource)("icon", "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectionEnabled", true)("selectedItems", ctx.select);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.itemsSource)("icon", "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("placeholder", ctx.placeholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectionEnabled", true)("selectedItems", ctx.select);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("placeholder", ctx.placeholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectionEnabled", true);
          }
        },
        directives: [_src_lib_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _src_lib_toolbar_toolbar_group_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarGroupComponent"], _src_lib_toolbar_toolbar_item_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarItemComponent"], _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "I7d1":
    /*!***************************************************************************************************!*\
      !*** ./demo/src/components/demo/toolbar/toolbar-selection/toolbar-selection.example.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ToolbarSelectionExampleComponent */

    /***/
    function I7d1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarSelectionExampleComponent", function () {
        return ToolbarSelectionExampleComponent;
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


      var _src_lib_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar.component */
      "tDpY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/search/search.component */
      "dYN2");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_toolbar_toolbar_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar-group.component */
      "hRrO");
      /* harmony import */


      var _src_lib_toolbar_toolbar_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar-item.component */
      "rLD5");

      function ToolbarSelectionExampleComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-toolbar-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-toolbar-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nui-toolbar-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-toolbar-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nui-toolbar-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function ToolbarSelectionExampleComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-toolbar-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-toolbar-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nui-toolbar-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nui-toolbar-item", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nui-toolbar-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      var ToolbarSelectionExampleComponent = /*#__PURE__*/function () {
        function ToolbarSelectionExampleComponent(logger) {
          _classCallCheck(this, ToolbarSelectionExampleComponent);

          this.logger = logger;
          this.selectionEnabled = true;
          this.select = {
            current: 1,
            total: 72
          };
          this.busy = false;
          this.placeholder = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral(["Placeholder"])));
          this.stringToSearch = "\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n        Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat.\n        Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate.\n        Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula\n    ";
        }

        _createClass(ToolbarSelectionExampleComponent, [{
          key: "onCancel",
          value: function onCancel(value) {
            this.logger.warn("Example onCancel fired. Value passed: " + value);

            if (value === "") {
              this.value = "";
              this.searchKey = "";
            } else {
              this.doCancel();
            }
          }
        }, {
          key: "onSearch",
          value: function onSearch(value) {
            this.logger.warn("Example onSearch fired. Current input value passed: " + value);
            this.doSearch(value);
          }
        }, {
          key: "doCancel",
          value: function doCancel() {
            clearTimeout(this.timerHandler);
            this.busy = false;
          }
        }, {
          key: "doSearch",
          value: function doSearch(value) {
            this.logger.warn("Example search started.");

            var _this = this;

            clearTimeout(_this.timerHandler);
            _this.busy = true;
            _this.timerHandler = setTimeout(function () {
              _this.busy = false;
              _this.searchKey = value;

              _this.logger.warn("Example search finished.");
            }, 2000);
          }
        }, {
          key: "toggleSelectedChange",
          value: function toggleSelectedChange(event) {
            this.selectionEnabled = !this.selectionEnabled;
          }
        }]);

        return ToolbarSelectionExampleComponent;
      }();

      ToolbarSelectionExampleComponent.ɵfac = function ToolbarSelectionExampleComponent_Factory(t) {
        return new (t || ToolbarSelectionExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["LoggerService"]));
      };

      ToolbarSelectionExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ToolbarSelectionExampleComponent,
        selectors: [["nui-toolbar-selection-example"]],
        decls: 10,
        vars: 7,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8142006518831123192$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_SELECTION_TOOLBAR_SELECTION_EXAMPLE_COMPONENT_TS__1 = goog.getMsg("Deselect");
            i18n_0 = MSG_EXTERNAL_8142006518831123192$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_SELECTION_TOOLBAR_SELECTION_EXAMPLE_COMPONENT_TS__1;
          } else {
            i18n_0 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241Fd5f7c52bd968632b494f4aca56b1757c8f39b03a\u241F8142006518831123192:Deselect"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1278322698743284344$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_SELECTION_TOOLBAR_SELECTION_EXAMPLE_COMPONENT_TS__3 = goog.getMsg("Deselect All");
            i18n_2 = MSG_EXTERNAL_1278322698743284344$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_SELECTION_TOOLBAR_SELECTION_EXAMPLE_COMPONENT_TS__3;
          } else {
            i18n_2 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241Ffdd8c0ec42148f76f93fa98129edf03bb03ac990\u241F1278322698743284344:Deselect All"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7022070615528435141$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_SELECTION_TOOLBAR_SELECTION_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("Delete");
            i18n_4 = MSG_EXTERNAL_7022070615528435141$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_SELECTION_TOOLBAR_SELECTION_EXAMPLE_COMPONENT_TS__5;
          } else {
            i18n_4 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241F826b25211922a1b46436589233cb6f1a163d89b7\u241F7022070615528435141:Delete"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2180291763949669799$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_SELECTION_TOOLBAR_SELECTION_EXAMPLE_COMPONENT_TS__7 = goog.getMsg("Enable");
            i18n_6 = MSG_EXTERNAL_2180291763949669799$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_SELECTION_TOOLBAR_SELECTION_EXAMPLE_COMPONENT_TS__7;
          } else {
            i18n_6 = $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([":\u241Fac6c9212896d39b23811ed2dadab7d07336ec559\u241F2180291763949669799:Enable"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6560281329999108838$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_SELECTION_TOOLBAR_SELECTION_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Execute");
            i18n_8 = MSG_EXTERNAL_6560281329999108838$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_SELECTION_TOOLBAR_SELECTION_EXAMPLE_COMPONENT_TS__9;
          } else {
            i18n_8 = $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([":\u241F699b690d686dbb8e00a1e95b89ba2fffb548da6e\u241F6560281329999108838:Execute"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8461609631969932886$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_SELECTION_TOOLBAR_SELECTION_EXAMPLE_COMPONENT_TS__11 = goog.getMsg("Hide");
            i18n_10 = MSG_EXTERNAL_8461609631969932886$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_SELECTION_TOOLBAR_SELECTION_EXAMPLE_COMPONENT_TS__11;
          } else {
            i18n_10 = $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([":\u241F1eede69e18c5ac9c0b0295b72cabb7e64e029e74\u241F8461609631969932886:Hide"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7585826646011739428$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_SELECTION_TOOLBAR_SELECTION_EXAMPLE_COMPONENT_TS__13 = goog.getMsg("Edit");
            i18n_12 = MSG_EXTERNAL_7585826646011739428$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_SELECTION_TOOLBAR_SELECTION_EXAMPLE_COMPONENT_TS__13;
          } else {
            i18n_12 = $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([":\u241F28f86ffd419b869711aa13f5e5ff54be6d70731c\u241F7585826646011739428:Edit"])));
          }

          return [[1, "nui"], [3, "boxShadow", "selectionEnabled", "selectedItems"], ["toolbar", ""], [4, "ngIf"], [1, "nui-toolbar-embedded"], [3, "value", "placeholder", "search", "cancel"], ["nui-button", "", "type", "button", 1, "mt-3", 3, "click"], ["type", "primary", "icon", "deselect", "title", i18n_0], ["type", "primary", "icon", "deselect-all", "title", i18n_2], ["displayStyle", "destructive", "type", "primary", "icon", "delete", "title", i18n_4], ["type", "primary", "icon", "enable", "title", i18n_6], ["type", "primary", "icon", "export", "title", i18n_8], ["type", "primary", "icon", "hide", "title", i18n_10], ["type", "primary", "icon", "edit", "title", i18n_12]];
        },
        template: function ToolbarSelectionExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-toolbar", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ToolbarSelectionExampleComponent_ng_container_3_Template, 6, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ToolbarSelectionExampleComponent_ng_container_4_Template, 6, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nui-search", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function ToolbarSelectionExampleComponent_Template_nui_search_search_6_listener($event) {
              return ctx.onSearch($event);
            })("cancel", function ToolbarSelectionExampleComponent_Template_nui_search_cancel_6_listener($event) {
              return ctx.onCancel($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarSelectionExampleComponent_Template_button_click_7_listener($event) {
              return ctx.toggleSelectedChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Toggle Selected State");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("boxShadow", false)("selectionEnabled", ctx.selectionEnabled)("selectedItems", ctx.select);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectionEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectionEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.value)("placeholder", ctx.placeholder);
          }
        },
        directives: [_src_lib_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _src_lib_toolbar_toolbar_group_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarGroupComponent"], _src_lib_toolbar_toolbar_item_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarItemComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "J87i":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/toolbar-basic/toolbar-basic.example.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function J87i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui\">\n    <nui-toolbar>\n        <nui-toolbar-group i18n-title title=\"g1\">\n            <nui-toolbar-item (actionDone)=\"onShowToast($event)\" type=\"primary\" icon=\"edit\" i18n-title title=\"Edit\">\n            </nui-toolbar-item>\n            <nui-toolbar-item (actionDone)=\"onShowToast($event)\" type=\"primary\" icon=\"export\" i18n-title title=\"Export\">\n            </nui-toolbar-item>\n            <nui-toolbar-item (actionDone)=\"onShowToast($event)\" type=\"primary\" icon=\"clear\" i18n-title title=\"Clear\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item (actionDone)=\"onShowToast($event)\" type=\"primary\" icon=\"browse\" i18n-title title=\"Browse\">\n            </nui-toolbar-item>\n            <nui-toolbar-item (actionDone)=\"onShowToast($event)\" type=\"primary\" icon=\"close\" i18n-title title=\"Close\">\n            </nui-toolbar-item>\n            <nui-toolbar-item (actionDone)=\"onShowToast($event)\" type=\"primary\" icon=\"download\" i18n-title title=\"Download\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group i18n-title title=\"g2\">\n            <nui-toolbar-item (actionDone)=\"onShowToast($event)\" type=\"primary\" icon=\"cut\" i18n-title title=\"Cut\">\n            </nui-toolbar-item>\n            <nui-toolbar-item (actionDone)=\"onShowToast($event)\" type=\"secondary\" icon=\"copy\" i18n-title title=\"Copy\">\n            </nui-toolbar-item>\n            <nui-toolbar-item (actionDone)=\"onShowToast($event)\" type=\"secondary\" icon=\"assign\" i18n-title title=\"Assign\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item (actionDone)=\"onShowToast($event)\" type=\"primary\" icon=\"add\" i18n-title title=\"Add\">\n            </nui-toolbar-item>\n            <nui-toolbar-item (actionDone)=\"onShowToast($event)\" type=\"secondary\" icon=\"tag\" i18n-title title=\"Tag\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n    </nui-toolbar>\n</div>\n";
      /***/
    },

    /***/
    "JDxc":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/index.ts ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function JDxc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./toolbar-basic/toolbar-basic.example.component\";\nexport * from \"./toolbar-docs/toolbar-docs.example.component\";\nexport * from \"./toolbar-embedded-content/toolbar-embedded-content.example.component\";\nexport * from \"./toolbar-selection/toolbar-selection.example.component\";\nexport * from \"./toolbar-item-types/toolbar-item-types.example.component\";\nexport * from \"./toolbar-test/toolbar-test.component\";\nexport * from \"./toolbar-visual-test/toolbar-visual-test.component\";\n";
      /***/
    },

    /***/
    "MfYw":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/toolbar-visual-test/toolbar-visual-test.component.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MfYw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { IMenuGroup } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-toolbar-visual-test\",\n    templateUrl: \"./toolbar-visual-test.component.html\",\n})\n\nexport class ToolbarVisualTestExampleComponent {\n    public value = \"\";\n    public busy = false;\n    public placeholder = \"Placeholder\";\n\n    public itemsSource: IMenuGroup[] = [\n        {header: \"section title\", itemsSource: [\n            {title: \"Menu Item\", itemType: \"action\"},\n            {title: \"Hover me\", itemType: \"action\"},\n            {title: \"Selected menu item\", isSelected: true},\n            {title: \"Menu item\", itemType: \"switch\", checked: true},\n            {title: \"Menu disabled item\", itemType: \"switch\", checked: false, disabled: true},\n            {title: \"Menu item with checkbox\", itemType: \"option\", disabled: true},\n            {title: \"Menu item with icon\", itemType: \"action\", icon: \"table\"},\n            {title: \"Link menu item\", itemType: \"link\", url: \"#button\", disabled: true},\n            {title: \"Export PDF\", itemType: \"link\", icon: \"export-pdf\", url: \"#button\"},\n        ]},\n    ];\n\n    public select = {\n        current: 1,\n        total: 72,\n    };\n\n    public search() {\n        this.busy = !this.busy;\n    }\n}\n";
      /***/
    },

    /***/
    "NP3M":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/toolbar-docs/toolbar-docs.example.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NP3M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-toolbar-docs-example\",\n    templateUrl: \"./toolbar-docs.example.component.html\",\n    host: {\n        \"class\": \"nui-edge-definer\",\n    },\n})\n\nexport class ToolbarDocsExampleComponent {}\n\n";
      /***/
    },

    /***/
    "OfNo":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/toolbar-embedded-content/toolbar-embedded-content.example.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OfNo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui\">\n    <nui-toolbar>\n        <nui-toolbar-group i18n-title title=\"g1\">\n            <nui-toolbar-item type=\"primary\" icon=\"edit\" i18n-title title=\"Edit\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"export\" i18n-title title=\"Export\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"clear\" i18n-title title=\"Clear\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"browse\" i18n-title title=\"Browse\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"close\" i18n-title title=\"Close\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"download\" i18n-title title=\"Download\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group i18n-title title=\"g2\">\n            <nui-toolbar-item type=\"primary\" icon=\"cut\" i18n-title title=\"Cut\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"copy\" i18n-title title=\"Copy\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"assign\" i18n-title title=\"Assign\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"add\" i18n-title title=\"Add\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"tag\" i18n-title title=\"Tag\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <div class=\"nui-toolbar-embedded\">\n            <!--mr-1 added as example of user's ability to style embedded content so it looks according to mock-ups -->\n            <nui-search class=\"mr-1\" [value]=\"value\"\n                        [placeholder]=\"placeholder\"\n                        (search)=\"onSearch($event)\"\n                        (cancel)=\"onCancel($event)\">\n            </nui-search>\n            <nui-menu displayStyle=\"action\" [itemsSource]=\"itemsSource\" icon=\"menu\"></nui-menu>\n        </div>\n    </nui-toolbar>\n</div>\n";
      /***/
    },

    /***/
    "Ohdo":
    /*!***************************************************!*\
      !*** ./demo/src/components/demo/toolbar/index.ts ***!
      \***************************************************/

    /*! exports provided: ToolbarBasicExampleComponent, ToolbarDocsExampleComponent, ToolbarEmbeddedContentExampleComponent, ToolbarSelectionExampleComponent, ToolbarItemTypesExampleComponent, ToolbarTestExampleComponent, ToolbarVisualTestExampleComponent */

    /***/
    function Ohdo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _toolbar_basic_toolbar_basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./toolbar-basic/toolbar-basic.example.component */
      "cZWg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToolbarBasicExampleComponent", function () {
        return _toolbar_basic_toolbar_basic_example_component__WEBPACK_IMPORTED_MODULE_0__["ToolbarBasicExampleComponent"];
      });
      /* harmony import */


      var _toolbar_docs_toolbar_docs_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toolbar-docs/toolbar-docs.example.component */
      "ntG4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToolbarDocsExampleComponent", function () {
        return _toolbar_docs_toolbar_docs_example_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarDocsExampleComponent"];
      });
      /* harmony import */


      var _toolbar_embedded_content_toolbar_embedded_content_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toolbar-embedded-content/toolbar-embedded-content.example.component */
      "uG35");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToolbarEmbeddedContentExampleComponent", function () {
        return _toolbar_embedded_content_toolbar_embedded_content_example_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarEmbeddedContentExampleComponent"];
      });
      /* harmony import */


      var _toolbar_selection_toolbar_selection_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./toolbar-selection/toolbar-selection.example.component */
      "I7d1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToolbarSelectionExampleComponent", function () {
        return _toolbar_selection_toolbar_selection_example_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarSelectionExampleComponent"];
      });
      /* harmony import */


      var _toolbar_item_types_toolbar_item_types_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./toolbar-item-types/toolbar-item-types.example.component */
      "aZP4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToolbarItemTypesExampleComponent", function () {
        return _toolbar_item_types_toolbar_item_types_example_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarItemTypesExampleComponent"];
      });
      /* harmony import */


      var _toolbar_test_toolbar_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./toolbar-test/toolbar-test.component */
      "YsfZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToolbarTestExampleComponent", function () {
        return _toolbar_test_toolbar_test_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarTestExampleComponent"];
      });
      /* harmony import */


      var _toolbar_visual_test_toolbar_visual_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./toolbar-visual-test/toolbar-visual-test.component */
      "H663");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToolbarVisualTestExampleComponent", function () {
        return _toolbar_visual_test_toolbar_visual_test_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarVisualTestExampleComponent"];
      });
      /***/

    },

    /***/
    "Q9k+":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/toolbar-test/toolbar-test.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Q9k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { IMenuGroup } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-toolbar-test\",\n    templateUrl: \"./toolbar-test.component.html\",\n})\n\nexport class ToolbarTestExampleComponent {\n    public width = \"800px\";\n\n    public showFirst = true;\n\n    public itemsSource: IMenuGroup[] = [\n        {header: \"section title\", itemsSource: [\n            {title: \"Menu Item\", itemType: \"action\"},\n            {title: \"Hover me\", itemType: \"action\"},\n            {title: \"Selected menu item\", isSelected: true},\n            {title: \"Menu item\", itemType: \"switch\", checked: true},\n            {title: \"Menu disabled item\", itemType: \"switch\", checked: false, disabled: true},\n            {title: \"Menu item with checkbox\", itemType: \"option\", disabled: true},\n            {title: \"Menu item with icon\", itemType: \"action\", icon: \"table\"},\n            {title: \"Link menu item\", itemType: \"link\", url: \"#button\", disabled: true},\n            {title: \"Export PDF\", itemType: \"link\", icon: \"export-pdf\", url: \"#button\"},\n        ]},\n    ];\n\n    public select = {\n        current: 1,\n        total: 72,\n    };\n\n    public onOptionChange(value: string) {\n        this.width = value;\n    }\n\n    public onToggle() {\n        this.showFirst = !this.showFirst;\n    }\n}\n";
      /***/
    },

    /***/
    "QNSn":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/toolbar-selection/toolbar-selection.example.component.html ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QNSn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui\">\n    <nui-toolbar [boxShadow]=\"false\" [selectionEnabled]=\"selectionEnabled\" [selectedItems]=\"select\" #toolbar>\n        <ng-container *ngIf=\"selectionEnabled\">\n            <nui-toolbar-group>\n                <nui-toolbar-item type=\"primary\" icon=\"deselect\" i18n-title title=\"Deselect\">\n                </nui-toolbar-item>\n                <nui-toolbar-item type=\"primary\" icon=\"deselect-all\" i18n-title title=\"Deselect All\">\n                </nui-toolbar-item>\n            </nui-toolbar-group>\n            <nui-toolbar-group>\n                <nui-toolbar-item displayStyle=\"destructive\" type=\"primary\" icon=\"delete\" i18n-title title=\"Delete\">\n                </nui-toolbar-item>\n            </nui-toolbar-group>\n        </ng-container>\n\n        <ng-container *ngIf=\"!selectionEnabled\">\n            <nui-toolbar-group>\n                <nui-toolbar-item type=\"primary\" icon=\"enable\" i18n-title title=\"Enable\">\n                </nui-toolbar-item>\n                <nui-toolbar-item type=\"primary\" icon=\"export\" i18n-title title=\"Execute\">\n                </nui-toolbar-item>\n                <nui-toolbar-item type=\"primary\" icon=\"hide\" i18n-title title=\"Hide\">\n                </nui-toolbar-item>\n                <nui-toolbar-item type=\"primary\" icon=\"edit\" i18n-title title=\"Edit\">\n                </nui-toolbar-item>\n            </nui-toolbar-group>\n        </ng-container>\n        <div class=\"nui-toolbar-embedded\">\n            <nui-search [value]=\"value\"\n                        [placeholder]=\"placeholder\"\n                        (search)=\"onSearch($event)\"\n                        (cancel)=\"onCancel($event)\">\n            </nui-search>\n        </div>\n    </nui-toolbar>\n    <button nui-button type=\"button\"\n            class=\"mt-3\"\n            (click)=\"toggleSelectedChange($event)\">\n        <span>Toggle Selected State</span>\n    </button>\n</div>\n";
      /***/
    },

    /***/
    "QVJh":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/toolbar-embedded-content/toolbar-embedded-content.example.component.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QVJh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject } from \"@angular/core\";\nimport { IMenuGroup, LoggerService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-toolbar-embedded-content-example\",\n    templateUrl: \"./toolbar-embedded-content.example.component.html\",\n})\n\nexport class ToolbarEmbeddedContentExampleComponent {\n    public itemsSource: IMenuGroup[] = [\n        {header: $localize `section title`, itemsSource: [\n            {title: $localize `Menu Item`, itemType: \"action\"},\n            {title: $localize `Hover me`, itemType: \"action\"},\n            {title: $localize `Selected menu item`, isSelected: true},\n            {title: $localize `Menu item`, itemType: \"switch\", checked: true},\n            {title: $localize `Menu disabled item`, itemType: \"switch\", checked: false, disabled: true},\n            {title: $localize `Menu item with checkbox`, itemType: \"option\", disabled: true},\n            {title: $localize `Menu item with icon`, itemType: \"action\", icon: \"table\"},\n            {title: $localize `Link menu item`, itemType: \"link\", url: \"#button\", disabled: true},\n            {title: $localize `Export PDF`, itemType: \"link\", icon: \"export-pdf\", url: \"#button\"},\n        ]},\n    ];\n    public busy = false;\n    public placeholder = $localize `Placeholder`;\n    public searchKey: string;\n    public stringToSearch = $localize`\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n        Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat.\n        Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate.\n        Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula`;\n\n    public value: string;\n    private timerHandler: number;\n\n    public constructor(@Inject(LoggerService) private logger: LoggerService) {}\n\n    public onCancel (value: string) {\n        this.logger.warn(\"Example onCancel fired. Value passed: \" + value);\n        if (value === \"\") {\n            this.value = \"\";\n            this.searchKey = \"\";\n        } else {\n            this.doCancel();\n        }\n    }\n\n    public onSearch(value: string) {\n        this.logger.warn(\"Example onSearch fired. Current input value passed: \" + value);\n        this.doSearch(value);\n    }\n\n    private doCancel () {\n        clearTimeout(this.timerHandler);\n        this.busy = false;\n    }\n\n    private doSearch (value: string) {\n        this.logger.warn(\"Example search started.\");\n        const _this = this;\n        clearTimeout(_this.timerHandler);\n        _this.busy = true;\n        _this.timerHandler =  <any> setTimeout( () => {\n            _this.busy = false;\n            _this.searchKey = value;\n            _this.logger.warn(\"Example search finished.\");\n        }, 2000);\n    }\n}\n";
      /***/
    },

    /***/
    "SODQ":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/toolbar.module.ts ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SODQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiDocsModule,\n    NuiMenuModule,\n    NuiMessageModule,\n    NuiSearchModule,\n    NuiTextboxModule,\n    NuiToolbarModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    ToolbarBasicExampleComponent,\n    ToolbarDocsExampleComponent,\n    ToolbarEmbeddedContentExampleComponent,\n    ToolbarItemTypesExampleComponent,\n    ToolbarSelectionExampleComponent,\n    ToolbarTestExampleComponent,\n    ToolbarVisualTestExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: ToolbarDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"toolbar-test\",\n        component: ToolbarTestExampleComponent,\n    },\n    {\n        path: \"toolbar-visual-test\",\n        component: ToolbarVisualTestExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiToolbarModule,\n        NuiMenuModule,\n        NuiSearchModule,\n        NuiTextboxModule,\n        NuiMessageModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        ToolbarBasicExampleComponent,\n        ToolbarDocsExampleComponent,\n        ToolbarEmbeddedContentExampleComponent,\n        ToolbarSelectionExampleComponent,\n        ToolbarItemTypesExampleComponent,\n        ToolbarTestExampleComponent,\n        ToolbarVisualTestExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class ToolbarModule {\n}\n";
      /***/
    },

    /***/
    "Ylo4":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/toolbar-item-types/toolbar-item-types.example.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ylo4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui\">\n    <nui-toolbar>\n        <nui-toolbar-group i18n-title title=\"g1\">\n            <nui-toolbar-item displayStyle=\"main\" type=\"primary\" icon=\"edit\" i18n-title title=\"Edit\">\n            </nui-toolbar-item>\n            <nui-toolbar-item (actionDone)=\"actionDone()\" type=\"primary\" icon=\"filter\" i18n-title title=\"Filter\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"lock\" i18n-title title=\"Lock\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group i18n-title title=\"g2\">\n            <nui-toolbar-item type=\"primary\" icon=\"copy\" i18n-title title=\"Copy\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"enable\" i18n-title title=\"Enable\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"execute\" i18n-title title=\"Execute\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"hide\" i18n-title title=\"Hide\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"ignore\" i18n-title title=\"Ignore\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item displayStyle=\"destructive\" type=\"secondary\" icon=\"delete\" i18n-title title=\"Delete\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n    </nui-toolbar>\n</div>\n";
      /***/
    },

    /***/
    "YsfZ":
    /*!*********************************************************************************!*\
      !*** ./demo/src/components/demo/toolbar/toolbar-test/toolbar-test.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ToolbarTestExampleComponent */

    /***/
    function YsfZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarTestExampleComponent", function () {
        return ToolbarTestExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar.component */
      "tDpY");
      /* harmony import */


      var _src_lib_toolbar_toolbar_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar-group.component */
      "hRrO");
      /* harmony import */


      var _src_lib_toolbar_toolbar_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar-item.component */
      "rLD5");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");
      /* harmony import */


      var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/search/search.component */
      "dYN2");
      /* harmony import */


      var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/menu/menu/menu.component */
      "JG2v");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      function ToolbarTestExampleComponent_nui_toolbar_item_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-toolbar-item", 41);
        }
      }

      function ToolbarTestExampleComponent_nui_toolbar_item_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-toolbar-item", 42);
        }
      }

      var ToolbarTestExampleComponent = /*#__PURE__*/function () {
        function ToolbarTestExampleComponent() {
          _classCallCheck(this, ToolbarTestExampleComponent);

          this.width = "800px";
          this.showFirst = true;
          this.itemsSource = [{
            header: "section title",
            itemsSource: [{
              title: "Menu Item",
              itemType: "action"
            }, {
              title: "Hover me",
              itemType: "action"
            }, {
              title: "Selected menu item",
              isSelected: true
            }, {
              title: "Menu item",
              itemType: "switch",
              checked: true
            }, {
              title: "Menu disabled item",
              itemType: "switch",
              checked: false,
              disabled: true
            }, {
              title: "Menu item with checkbox",
              itemType: "option",
              disabled: true
            }, {
              title: "Menu item with icon",
              itemType: "action",
              icon: "table"
            }, {
              title: "Link menu item",
              itemType: "link",
              url: "#button",
              disabled: true
            }, {
              title: "Export PDF",
              itemType: "link",
              icon: "export-pdf",
              url: "#button"
            }]
          }];
          this.select = {
            current: 1,
            total: 72
          };
        }

        _createClass(ToolbarTestExampleComponent, [{
          key: "onOptionChange",
          value: function onOptionChange(value) {
            this.width = value;
          }
        }, {
          key: "onToggle",
          value: function onToggle() {
            this.showFirst = !this.showFirst;
          }
        }]);

        return ToolbarTestExampleComponent;
      }();

      ToolbarTestExampleComponent.ɵfac = function ToolbarTestExampleComponent_Factory(t) {
        return new (t || ToolbarTestExampleComponent)();
      };

      ToolbarTestExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarTestExampleComponent,
        selectors: [["nui-toolbar-test"]],
        decls: 50,
        vars: 8,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3610789225309975025$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_1 = goog.getMsg("g1");
            i18n_0 = MSG_EXTERNAL_3610789225309975025$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([":\u241F0221e0440c692faedd2c3ea89b221c756d316a44\u241F3610789225309975025:g1"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_3 = goog.getMsg("edit");
            i18n_2 = MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([":\u241Fa568d6cc7b8a3f14399663426bb1b4fc137b1a8d\u241F9095134843628689709:edit"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_5 = goog.getMsg("edit");
            i18n_4 = MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([":\u241Fa568d6cc7b8a3f14399663426bb1b4fc137b1a8d\u241F9095134843628689709:edit"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_7 = goog.getMsg("edit");
            i18n_6 = MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([":\u241Fa568d6cc7b8a3f14399663426bb1b4fc137b1a8d\u241F9095134843628689709:edit"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_9 = goog.getMsg("edit");
            i18n_8 = MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([":\u241Fa568d6cc7b8a3f14399663426bb1b4fc137b1a8d\u241F9095134843628689709:edit"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_11 = goog.getMsg("edit");
            i18n_10 = MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([":\u241Fa568d6cc7b8a3f14399663426bb1b4fc137b1a8d\u241F9095134843628689709:edit"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_13 = goog.getMsg("edit");
            i18n_12 = MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_13;
          } else {
            i18n_12 = $localize(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral([":\u241Fa568d6cc7b8a3f14399663426bb1b4fc137b1a8d\u241F9095134843628689709:edit"])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4686112696530772743$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_15 = goog.getMsg("g2");
            i18n_14 = MSG_EXTERNAL_4686112696530772743$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_15;
          } else {
            i18n_14 = $localize(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral([":\u241Fbd6c7f9cad0530649058d07ac2fb07a4ed1cdade\u241F4686112696530772743:g2"])));
          }

          var i18n_16;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_17 = goog.getMsg("add");
            i18n_16 = MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_17;
          } else {
            i18n_16 = $localize(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral([":\u241Fa11ec4e640f241329943237d2a3cceaa4823658e\u241F1059784693423848532:add"])));
          }

          var i18n_18;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_19 = goog.getMsg("add");
            i18n_18 = MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_19;
          } else {
            i18n_18 = $localize(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral([":\u241Fa11ec4e640f241329943237d2a3cceaa4823658e\u241F1059784693423848532:add"])));
          }

          var i18n_20;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_21 = goog.getMsg("add");
            i18n_20 = MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_21;
          } else {
            i18n_20 = $localize(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral([":\u241Fa11ec4e640f241329943237d2a3cceaa4823658e\u241F1059784693423848532:add"])));
          }

          var i18n_22;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_23 = goog.getMsg("add");
            i18n_22 = MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_23;
          } else {
            i18n_22 = $localize(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral([":\u241Fa11ec4e640f241329943237d2a3cceaa4823658e\u241F1059784693423848532:add"])));
          }

          var i18n_24;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_25 = goog.getMsg("add");
            i18n_24 = MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_25;
          } else {
            i18n_24 = $localize(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral([":\u241Fa11ec4e640f241329943237d2a3cceaa4823658e\u241F1059784693423848532:add"])));
          }

          var i18n_26;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2456043080471762298$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_27 = goog.getMsg("delete");
            i18n_26 = MSG_EXTERNAL_2456043080471762298$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_27;
          } else {
            i18n_26 = $localize(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral([":\u241F70ef158c584bafe788e319a0bffa11b02ee9abf1\u241F2456043080471762298:delete"])));
          }

          var i18n_28;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3610789225309975025$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_29 = goog.getMsg("g1");
            i18n_28 = MSG_EXTERNAL_3610789225309975025$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_29;
          } else {
            i18n_28 = $localize(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral([":\u241F0221e0440c692faedd2c3ea89b221c756d316a44\u241F3610789225309975025:g1"])));
          }

          var i18n_30;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_31 = goog.getMsg("edit");
            i18n_30 = MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_31;
          } else {
            i18n_30 = $localize(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral([":\u241Fa568d6cc7b8a3f14399663426bb1b4fc137b1a8d\u241F9095134843628689709:edit"])));
          }

          var i18n_32;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_33 = goog.getMsg("edit");
            i18n_32 = MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_33;
          } else {
            i18n_32 = $localize(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral([":\u241Fa568d6cc7b8a3f14399663426bb1b4fc137b1a8d\u241F9095134843628689709:edit"])));
          }

          var i18n_34;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_35 = goog.getMsg("edit");
            i18n_34 = MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_35;
          } else {
            i18n_34 = $localize(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral([":\u241Fa568d6cc7b8a3f14399663426bb1b4fc137b1a8d\u241F9095134843628689709:edit"])));
          }

          var i18n_36;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_37 = goog.getMsg("edit");
            i18n_36 = MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_37;
          } else {
            i18n_36 = $localize(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral([":\u241Fa568d6cc7b8a3f14399663426bb1b4fc137b1a8d\u241F9095134843628689709:edit"])));
          }

          var i18n_38;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_39 = goog.getMsg("edit");
            i18n_38 = MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_39;
          } else {
            i18n_38 = $localize(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral([":\u241Fa568d6cc7b8a3f14399663426bb1b4fc137b1a8d\u241F9095134843628689709:edit"])));
          }

          var i18n_40;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_41 = goog.getMsg("edit");
            i18n_40 = MSG_EXTERNAL_9095134843628689709$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_41;
          } else {
            i18n_40 = $localize(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral([":\u241Fa568d6cc7b8a3f14399663426bb1b4fc137b1a8d\u241F9095134843628689709:edit"])));
          }

          var i18n_42;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4686112696530772743$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_43 = goog.getMsg("g2");
            i18n_42 = MSG_EXTERNAL_4686112696530772743$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_43;
          } else {
            i18n_42 = $localize(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral([":\u241Fbd6c7f9cad0530649058d07ac2fb07a4ed1cdade\u241F4686112696530772743:g2"])));
          }

          var i18n_44;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_45 = goog.getMsg("add");
            i18n_44 = MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_45;
          } else {
            i18n_44 = $localize(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral([":\u241Fa11ec4e640f241329943237d2a3cceaa4823658e\u241F1059784693423848532:add"])));
          }

          var i18n_46;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_47 = goog.getMsg("add");
            i18n_46 = MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_47;
          } else {
            i18n_46 = $localize(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral([":\u241Fa11ec4e640f241329943237d2a3cceaa4823658e\u241F1059784693423848532:add"])));
          }

          var i18n_48;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_49 = goog.getMsg("add");
            i18n_48 = MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_49;
          } else {
            i18n_48 = $localize(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral([":\u241Fa11ec4e640f241329943237d2a3cceaa4823658e\u241F1059784693423848532:add"])));
          }

          var i18n_50;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_51 = goog.getMsg("add");
            i18n_50 = MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_51;
          } else {
            i18n_50 = $localize(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral([":\u241Fa11ec4e640f241329943237d2a3cceaa4823658e\u241F1059784693423848532:add"])));
          }

          var i18n_52;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_53 = goog.getMsg("add");
            i18n_52 = MSG_EXTERNAL_1059784693423848532$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_53;
          } else {
            i18n_52 = $localize(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral([":\u241Fa11ec4e640f241329943237d2a3cceaa4823658e\u241F1059784693423848532:add"])));
          }

          var i18n_54;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2456043080471762298$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_55 = goog.getMsg("delete");
            i18n_54 = MSG_EXTERNAL_2456043080471762298$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_55;
          } else {
            i18n_54 = $localize(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral([":\u241F70ef158c584bafe788e319a0bffa11b02ee9abf1\u241F2456043080471762298:delete"])));
          }

          var i18n_56;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3249513483374643425$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_57 = goog.getMsg("Add");
            i18n_56 = MSG_EXTERNAL_3249513483374643425$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_57;
          } else {
            i18n_56 = $localize(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral([":\u241Ff6755cff4957d5c3c89bafce5651f1b6fa2b1fd9\u241F3249513483374643425:Add"])));
          }

          var i18n_58;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1084330548527991808$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_59 = goog.getMsg("Add First");
            i18n_58 = MSG_EXTERNAL_1084330548527991808$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_59;
          } else {
            i18n_58 = $localize(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral([":\u241Ff7f410dc2ee00a95ca3b02f3443cf43fc7277fe6\u241F1084330548527991808:Add First"])));
          }

          var i18n_60;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7196208507415720259$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_61 = goog.getMsg("Add Second");
            i18n_60 = MSG_EXTERNAL_7196208507415720259$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_61;
          } else {
            i18n_60 = $localize(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral([":\u241Fe51818ae915d79640b789354736e57efa7973324\u241F7196208507415720259:Add Second"])));
          }

          var i18n_62;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7022070615528435141$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_63 = goog.getMsg("Delete");
            i18n_62 = MSG_EXTERNAL_7022070615528435141$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_TEST_TOOLBAR_TEST_COMPONENT_TS_63;
          } else {
            i18n_62 = $localize(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral([":\u241F826b25211922a1b46436589233cb6f1a163d89b7\u241F7022070615528435141:Delete"])));
          }

          return [[3, "style.width.pxChange"], ["id", "nui-toolbar-test"], ["title", i18n_0], ["id", "nui-toolbar-test-button-primary", "displayStyle", "primary", "type", "primary", "icon", "edit", "title", i18n_2], ["type", "primary", "icon", "edit", "title", i18n_4], ["type", "primary", "icon", "edit", "title", i18n_6], ["type", "primary", "icon", "edit", "title", i18n_8], ["type", "primary", "icon", "edit", "title", i18n_10], ["type", "primary", "icon", "edit", "title", i18n_12], ["title", i18n_14], ["type", "primary", "icon", "add", "title", i18n_16], ["type", "secondary", "icon", "add", "title", i18n_18], ["type", "secondary", "icon", "add", "title", i18n_20], ["type", "primary", "icon", "add", "title", i18n_22], ["type", "secondary", "icon", "add", "title", i18n_24], ["displayStyle", "destructive", "type", "secondary", "icon", "delete", "title", i18n_26], ["id", "nui-toolbar-test-input", "type", "number", "customBoxWidth", "150px", 3, "value", "textChange"], [1, "nui"], ["id", "nui-toolbar-test-embedded"], ["title", i18n_28], ["displayStyle", "primary", "type", "primary", "icon", "edit", "title", i18n_30], ["type", "primary", "icon", "edit", "title", i18n_32], ["type", "primary", "icon", "edit", "title", i18n_34], ["type", "primary", "icon", "edit", "title", i18n_36], ["type", "primary", "icon", "edit", "title", i18n_38], ["type", "primary", "icon", "edit", "title", i18n_40], ["title", i18n_42], ["type", "primary", "icon", "add", "title", i18n_44], ["type", "secondary", "icon", "add", "title", i18n_46], ["type", "secondary", "icon", "add", "title", i18n_48], ["type", "primary", "icon", "add", "title", i18n_50], ["type", "secondary", "icon", "add", "title", i18n_52], ["displayStyle", "destructive", "type", "secondary", "icon", "delete", "title", i18n_54], [1, "nui-demo-search-additional"], ["displayStyle", "action", "icon", "menu", 3, "itemsSource"], ["id", "nui-toolbar-test-selection", 3, "selectionEnabled", "selectedItems"], ["type", "primary", "icon", "add", "title", i18n_56], ["type", "primary", "icon", "add", "title", i18n_58, 4, "ngIf"], ["type", "primary", "icon", "add", "title", i18n_60, 4, "ngIf"], ["displayStyle", "destructive", "type", "primary", "icon", "delete", "title", i18n_62], ["nui-button", "", "type", "button", "id", "nui-toolbar-test-toggle-selected-item", 1, "mt-3", 3, "click"], ["type", "primary", "icon", "add", "title", i18n_58], ["type", "primary", "icon", "add", "title", i18n_60]];
        },
        template: function ToolbarTestExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("style.width.pxChange", function ToolbarTestExampleComponent_Template_div_style_width_pxChange_0_listener($event) {
              return ctx.width = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-toolbar-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-toolbar-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nui-toolbar-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-toolbar-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nui-toolbar-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nui-toolbar-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nui-toolbar-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-toolbar-group", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nui-toolbar-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nui-toolbar-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nui-toolbar-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nui-toolbar-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nui-toolbar-item", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nui-toolbar-item", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nui-textbox", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textChange", function ToolbarTestExampleComponent_Template_nui_textbox_textChange_18_listener($event) {
              return ctx.onOptionChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nui-toolbar", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nui-toolbar-group", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "nui-toolbar-item", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "nui-toolbar-item", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "nui-toolbar-item", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "nui-toolbar-item", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "nui-toolbar-item", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "nui-toolbar-item", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nui-toolbar-group", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "nui-toolbar-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "nui-toolbar-item", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "nui-toolbar-item", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "nui-toolbar-item", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "nui-toolbar-item", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "nui-toolbar-item", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "nui-search", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "nui-menu", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nui-toolbar", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "nui-toolbar-item", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ToolbarTestExampleComponent_nui_toolbar_item_43_Template, 1, 0, "nui-toolbar-item", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ToolbarTestExampleComponent_nui_toolbar_item_44_Template, 1, 0, "nui-toolbar-item", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "nui-toolbar-item", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarTestExampleComponent_Template_button_click_47_listener() {
              return ctx.onToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Toggle Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.width);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.itemsSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectionEnabled", true)("selectedItems", ctx.select);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFirst);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showFirst);
          }
        },
        directives: [_src_lib_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _src_lib_toolbar_toolbar_group_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarGroupComponent"], _src_lib_toolbar_toolbar_item_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarItemComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_4__["TextboxComponent"], _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "aZP4":
    /*!*****************************************************************************************************!*\
      !*** ./demo/src/components/demo/toolbar/toolbar-item-types/toolbar-item-types.example.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ToolbarItemTypesExampleComponent */

    /***/
    function aZP4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarItemTypesExampleComponent", function () {
        return ToolbarItemTypesExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar.component */
      "tDpY");
      /* harmony import */


      var _src_lib_toolbar_toolbar_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar-group.component */
      "hRrO");
      /* harmony import */


      var _src_lib_toolbar_toolbar_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar-item.component */
      "rLD5");

      var ToolbarItemTypesExampleComponent = /*#__PURE__*/function () {
        function ToolbarItemTypesExampleComponent() {
          _classCallCheck(this, ToolbarItemTypesExampleComponent);
        }

        _createClass(ToolbarItemTypesExampleComponent, [{
          key: "actionDone",
          value: function actionDone() {
            console.log("action");
          }
        }]);

        return ToolbarItemTypesExampleComponent;
      }();

      ToolbarItemTypesExampleComponent.ɵfac = function ToolbarItemTypesExampleComponent_Factory(t) {
        return new (t || ToolbarItemTypesExampleComponent)();
      };

      ToolbarItemTypesExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarItemTypesExampleComponent,
        selectors: [["nui-toolbar-item-types-example"]],
        decls: 15,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3610789225309975025$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("g1");
            i18n_0 = MSG_EXTERNAL_3610789225309975025$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral([":\u241F0221e0440c692faedd2c3ea89b221c756d316a44\u241F3610789225309975025:g1"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7585826646011739428$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Edit");
            i18n_2 = MSG_EXTERNAL_7585826646011739428$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral([":\u241F28f86ffd419b869711aa13f5e5ff54be6d70731c\u241F7585826646011739428:Edit"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8829497237648100098$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Filter");
            i18n_4 = MSG_EXTERNAL_8829497237648100098$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral([":\u241F5ca707824ab93066c7d9b44e1b8bf216725c2c22\u241F8829497237648100098:Filter"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5635860082093871248$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Lock");
            i18n_6 = MSG_EXTERNAL_5635860082093871248$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral([":\u241Ff94863641b9244f0298732da591eca94d474d41a\u241F5635860082093871248:Lock"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4686112696530772743$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("g2");
            i18n_8 = MSG_EXTERNAL_4686112696530772743$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral([":\u241Fbd6c7f9cad0530649058d07ac2fb07a4ed1cdade\u241F4686112696530772743:g2"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4323470180912194028$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("Copy");
            i18n_10 = MSG_EXTERNAL_4323470180912194028$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral([":\u241F1979da7460819153e11d2078244645d94291b69c\u241F4323470180912194028:Copy"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2180291763949669799$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_13 = goog.getMsg("Enable");
            i18n_12 = MSG_EXTERNAL_2180291763949669799$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_13;
          } else {
            i18n_12 = $localize(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral([":\u241Fac6c9212896d39b23811ed2dadab7d07336ec559\u241F2180291763949669799:Enable"])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6560281329999108838$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_15 = goog.getMsg("Execute");
            i18n_14 = MSG_EXTERNAL_6560281329999108838$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_15;
          } else {
            i18n_14 = $localize(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral([":\u241F699b690d686dbb8e00a1e95b89ba2fffb548da6e\u241F6560281329999108838:Execute"])));
          }

          var i18n_16;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8461609631969932886$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_17 = goog.getMsg("Hide");
            i18n_16 = MSG_EXTERNAL_8461609631969932886$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_17;
          } else {
            i18n_16 = $localize(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral([":\u241F1eede69e18c5ac9c0b0295b72cabb7e64e029e74\u241F8461609631969932886:Hide"])));
          }

          var i18n_18;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1240739868347418586$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_19 = goog.getMsg("Ignore");
            i18n_18 = MSG_EXTERNAL_1240739868347418586$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_19;
          } else {
            i18n_18 = $localize(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral([":\u241F704b13c5f32d986c19bf803546de5dd0626f8fff\u241F1240739868347418586:Ignore"])));
          }

          var i18n_20;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7022070615528435141$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_21 = goog.getMsg("Delete");
            i18n_20 = MSG_EXTERNAL_7022070615528435141$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_ITEM_TYPES_TOOLBAR_ITEM_TYPES_EXAMPLE_COMPONENT_TS_21;
          } else {
            i18n_20 = $localize(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral([":\u241F826b25211922a1b46436589233cb6f1a163d89b7\u241F7022070615528435141:Delete"])));
          }

          return [[1, "nui"], ["title", i18n_0], ["displayStyle", "main", "type", "primary", "icon", "edit", "title", i18n_2], ["type", "primary", "icon", "filter", "title", i18n_4, 3, "actionDone"], ["type", "primary", "icon", "lock", "title", i18n_6], ["title", i18n_8], ["type", "primary", "icon", "copy", "title", i18n_10], ["type", "secondary", "icon", "enable", "title", i18n_12], ["type", "secondary", "icon", "execute", "title", i18n_14], ["type", "primary", "icon", "hide", "title", i18n_16], ["type", "secondary", "icon", "ignore", "title", i18n_18], ["displayStyle", "destructive", "type", "secondary", "icon", "delete", "title", i18n_20]];
        },
        template: function ToolbarItemTypesExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-toolbar-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-toolbar-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-toolbar-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionDone", function ToolbarItemTypesExampleComponent_Template_nui_toolbar_item_actionDone_4_listener() {
              return ctx.actionDone();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-toolbar-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-toolbar-group", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nui-toolbar-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nui-toolbar-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nui-toolbar-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nui-toolbar-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nui-toolbar-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nui-toolbar-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _src_lib_toolbar_toolbar_group_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarGroupComponent"], _src_lib_toolbar_toolbar_item_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarItemComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "bB8n":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/toolbar-test/toolbar-test.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bB8n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [(style.width.px)]=\"width\">\n    <nui-toolbar id=\"nui-toolbar-test\">\n        <nui-toolbar-group i18n-title title=\"g1\">\n            <nui-toolbar-item id=\"nui-toolbar-test-button-primary\" displayStyle=\"primary\" type=\"primary\" icon=\"edit\" i18n-title title=\"edit\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"edit\" i18n-title title=\"edit\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"edit\" i18n-title title=\"edit\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"edit\" i18n-title title=\"edit\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"edit\" i18n-title title=\"edit\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"edit\" i18n-title title=\"edit\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group i18n-title title=\"g2\">\n            <nui-toolbar-item type=\"primary\" icon=\"add\" i18n-title title=\"add\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"add\" i18n-title title=\"add\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"add\" i18n-title title=\"add\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"add\" i18n-title title=\"add\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"add\" i18n-title title=\"add\">\n            </nui-toolbar-item>\n            <nui-toolbar-item displayStyle=\"destructive\" type=\"secondary\" icon=\"delete\" i18n-title title=\"delete\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n    </nui-toolbar>\n</div>\n<nui-textbox\n    id=\"nui-toolbar-test-input\"\n    type=\"number\"\n    [value]=\"width\"\n    customBoxWidth=\"150px\"\n    (textChange)=\"onOptionChange($event)\">\n</nui-textbox>\n<div class=\"nui\">\n    <nui-toolbar id=\"nui-toolbar-test-embedded\">\n        <nui-toolbar-group i18n-title title=\"g1\">\n            <nui-toolbar-item displayStyle=\"primary\" type=\"primary\" icon=\"edit\" i18n-title title=\"edit\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"edit\" i18n-title title=\"edit\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"edit\" i18n-title title=\"edit\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"edit\" i18n-title title=\"edit\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"edit\" i18n-title title=\"edit\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"edit\" i18n-title title=\"edit\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group i18n-title title=\"g2\">\n            <nui-toolbar-item type=\"primary\" icon=\"add\" i18n-title title=\"add\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"add\" i18n-title title=\"add\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"add\" i18n-title title=\"add\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"add\" i18n-title title=\"add\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"add\" i18n-title title=\"add\">\n            </nui-toolbar-item>\n            <nui-toolbar-item displayStyle=\"destructive\" type=\"secondary\" icon=\"delete\" i18n-title title=\"delete\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-search class=\"nui-demo-search-additional\"></nui-search>\n        <nui-menu displayStyle=\"action\" [itemsSource]=\"itemsSource\" icon=\"menu\"></nui-menu>\n    </nui-toolbar>\n</div>\n<div class=\"nui\">\n    <nui-toolbar id=\"nui-toolbar-test-selection\" [selectionEnabled]=\"true\" [selectedItems]=\"select\">\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"add\" i18n-title title=\"Add\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"add\" i18n-title title=\"Add First\" *ngIf=\"showFirst\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"add\" i18n-title title=\"Add Second\" *ngIf=\"!showFirst\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item displayStyle=\"destructive\" type=\"primary\" icon=\"delete\" i18n-title title=\"Delete\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n    </nui-toolbar>\n</div>\n\n<button nui-button type=\"button\"\n        class=\"mt-3\"\n        (click)=\"onToggle()\"\n        id=\"nui-toolbar-test-toggle-selected-item\">\n    <span>Toggle Item</span>\n</button>\n";
      /***/
    },

    /***/
    "cZWg":
    /*!*******************************************************************************************!*\
      !*** ./demo/src/components/demo/toolbar/toolbar-basic/toolbar-basic.example.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ToolbarBasicExampleComponent */

    /***/
    function cZWg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarBasicExampleComponent", function () {
        return ToolbarBasicExampleComponent;
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


      var _src_lib_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar.component */
      "tDpY");
      /* harmony import */


      var _src_lib_toolbar_toolbar_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar-group.component */
      "hRrO");
      /* harmony import */


      var _src_lib_toolbar_toolbar_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar-item.component */
      "rLD5");

      var ToolbarBasicExampleComponent = /*#__PURE__*/function () {
        function ToolbarBasicExampleComponent(toastService) {
          _classCallCheck(this, ToolbarBasicExampleComponent);

          this.toastService = toastService;
        }

        _createClass(ToolbarBasicExampleComponent, [{
          key: "onShowToast",
          value: function onShowToast(highlightMode) {
            this.toastService.info({
              message: $localize(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["Action done message!"]))),
              title: $localize(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["Action Done"])))
            });
          }
        }]);

        return ToolbarBasicExampleComponent;
      }();

      ToolbarBasicExampleComponent.ɵfac = function ToolbarBasicExampleComponent_Factory(t) {
        return new (t || ToolbarBasicExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      ToolbarBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ToolbarBasicExampleComponent,
        selectors: [["nui-toolbar-basic-example"]],
        decls: 17,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3610789225309975025$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("g1");
            i18n_0 = MSG_EXTERNAL_3610789225309975025$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral([":\u241F0221e0440c692faedd2c3ea89b221c756d316a44\u241F3610789225309975025:g1"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7585826646011739428$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Edit");
            i18n_2 = MSG_EXTERNAL_7585826646011739428$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral([":\u241F28f86ffd419b869711aa13f5e5ff54be6d70731c\u241F7585826646011739428:Edit"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7462301153729425254$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Export");
            i18n_4 = MSG_EXTERNAL_7462301153729425254$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral([":\u241F5f19586aba912ec6eb123ec5ab609a3bcc073066\u241F7462301153729425254:Export"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8700121026680200191$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Clear");
            i18n_6 = MSG_EXTERNAL_8700121026680200191$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral([":\u241F99ee4faa69cd2ea8e3678c1f557c0ff1f05aae46\u241F8700121026680200191:Clear"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_787163983066183218$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Browse");
            i18n_8 = MSG_EXTERNAL_787163983066183218$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral([":\u241F2c7dc726e93bcf3ca2f316bbebe96fa1e5288ba0\u241F787163983066183218:Browse"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7819314041543176992$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("Close");
            i18n_10 = MSG_EXTERNAL_7819314041543176992$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral([":\u241Ff4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8\u241F7819314041543176992:Close"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3099741642167775297$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_13 = goog.getMsg("Download");
            i18n_12 = MSG_EXTERNAL_3099741642167775297$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_13;
          } else {
            i18n_12 = $localize(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral([":\u241Fdc75033a5238fdc4f462212c847a45ba8018a3fd\u241F3099741642167775297:Download"])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4686112696530772743$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_15 = goog.getMsg("g2");
            i18n_14 = MSG_EXTERNAL_4686112696530772743$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_15;
          } else {
            i18n_14 = $localize(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral([":\u241Fbd6c7f9cad0530649058d07ac2fb07a4ed1cdade\u241F4686112696530772743:g2"])));
          }

          var i18n_16;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3804037606764273869$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_17 = goog.getMsg("Cut");
            i18n_16 = MSG_EXTERNAL_3804037606764273869$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_17;
          } else {
            i18n_16 = $localize(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral([":\u241F393584cc19f5730acb6ca04a01d7b818e5cda8a4\u241F3804037606764273869:Cut"])));
          }

          var i18n_18;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4323470180912194028$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_19 = goog.getMsg("Copy");
            i18n_18 = MSG_EXTERNAL_4323470180912194028$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_19;
          } else {
            i18n_18 = $localize(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral([":\u241F1979da7460819153e11d2078244645d94291b69c\u241F4323470180912194028:Copy"])));
          }

          var i18n_20;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_584754872792429089$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_21 = goog.getMsg("Assign");
            i18n_20 = MSG_EXTERNAL_584754872792429089$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_21;
          } else {
            i18n_20 = $localize(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral([":\u241F1da6e5076d6a884a4241733942825718559f3075\u241F584754872792429089:Assign"])));
          }

          var i18n_22;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3249513483374643425$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_23 = goog.getMsg("Add");
            i18n_22 = MSG_EXTERNAL_3249513483374643425$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_23;
          } else {
            i18n_22 = $localize(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral([":\u241Ff6755cff4957d5c3c89bafce5651f1b6fa2b1fd9\u241F3249513483374643425:Add"])));
          }

          var i18n_24;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1825829511397926879$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_25 = goog.getMsg("Tag");
            i18n_24 = MSG_EXTERNAL_1825829511397926879$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_BASIC_TOOLBAR_BASIC_EXAMPLE_COMPONENT_TS_25;
          } else {
            i18n_24 = $localize(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral([":\u241F337ca2e5eeea28eaca91e8511eb5eaafdb385ce6\u241F1825829511397926879:Tag"])));
          }

          return [[1, "nui"], ["title", i18n_0], ["type", "primary", "icon", "edit", "title", i18n_2, 3, "actionDone"], ["type", "primary", "icon", "export", "title", i18n_4, 3, "actionDone"], ["type", "primary", "icon", "clear", "title", i18n_6, 3, "actionDone"], ["type", "primary", "icon", "browse", "title", i18n_8, 3, "actionDone"], ["type", "primary", "icon", "close", "title", i18n_10, 3, "actionDone"], ["type", "primary", "icon", "download", "title", i18n_12, 3, "actionDone"], ["title", i18n_14], ["type", "primary", "icon", "cut", "title", i18n_16, 3, "actionDone"], ["type", "secondary", "icon", "copy", "title", i18n_18, 3, "actionDone"], ["type", "secondary", "icon", "assign", "title", i18n_20, 3, "actionDone"], ["type", "primary", "icon", "add", "title", i18n_22, 3, "actionDone"], ["type", "secondary", "icon", "tag", "title", i18n_24, 3, "actionDone"]];
        },
        template: function ToolbarBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-toolbar-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nui-toolbar-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("actionDone", function ToolbarBasicExampleComponent_Template_nui_toolbar_item_actionDone_3_listener($event) {
              return ctx.onShowToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-toolbar-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("actionDone", function ToolbarBasicExampleComponent_Template_nui_toolbar_item_actionDone_4_listener($event) {
              return ctx.onShowToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-toolbar-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("actionDone", function ToolbarBasicExampleComponent_Template_nui_toolbar_item_actionDone_5_listener($event) {
              return ctx.onShowToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nui-toolbar-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("actionDone", function ToolbarBasicExampleComponent_Template_nui_toolbar_item_actionDone_7_listener($event) {
              return ctx.onShowToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nui-toolbar-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("actionDone", function ToolbarBasicExampleComponent_Template_nui_toolbar_item_actionDone_8_listener($event) {
              return ctx.onShowToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nui-toolbar-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("actionDone", function ToolbarBasicExampleComponent_Template_nui_toolbar_item_actionDone_9_listener($event) {
              return ctx.onShowToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nui-toolbar-group", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nui-toolbar-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("actionDone", function ToolbarBasicExampleComponent_Template_nui_toolbar_item_actionDone_11_listener($event) {
              return ctx.onShowToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nui-toolbar-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("actionDone", function ToolbarBasicExampleComponent_Template_nui_toolbar_item_actionDone_12_listener($event) {
              return ctx.onShowToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nui-toolbar-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("actionDone", function ToolbarBasicExampleComponent_Template_nui_toolbar_item_actionDone_13_listener($event) {
              return ctx.onShowToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nui-toolbar-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("actionDone", function ToolbarBasicExampleComponent_Template_nui_toolbar_item_actionDone_15_listener($event) {
              return ctx.onShowToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nui-toolbar-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("actionDone", function ToolbarBasicExampleComponent_Template_nui_toolbar_item_actionDone_16_listener($event) {
              return ctx.onShowToast($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"], _src_lib_toolbar_toolbar_group_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarGroupComponent"], _src_lib_toolbar_toolbar_item_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarItemComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "hcHG":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/toolbar-visual-test/toolbar-visual-test.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hcHG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <h3>Basic toolbar usage</h3>\n    <nui-toolbar id=\"nui-toolbar-test\">\n        <nui-toolbar-group title=\"g1\">\n            <nui-toolbar-item id=\"nui-toolbar-test-button-primary\" displayStyle=\"main\" type=\"primary\" icon=\"edit\" title=\"Edit\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"filter\" title=\"Filter\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"lock\" title=\"Lock\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"browse\" title=\"Browse\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"clear\" title=\"Clear\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"download\" title=\"Download\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group title=\"g2\">\n            <nui-toolbar-item type=\"primary\" icon=\"copy\" title=\"Copy\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"enable\" title=\"Enable\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"execute\" title=\"Execute\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"hide\" title=\"Hide\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"ignore\" title=\"Ignore\">\n            </nui-toolbar-item>\n            <nui-toolbar-item displayStyle=\"destructive\" type=\"secondary\" icon=\"delete\" title=\"Delete\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n    </nui-toolbar>\n</div>\n\n<div class=\"container\">\n    <h3>Toolbar with embedded content</h3>\n    <nui-toolbar id=\"nui-toolbar-test-embedded\">\n        <nui-toolbar-group title=\"g1\">\n            <nui-toolbar-item id=\"nui-toolbar-embedded-test-button-primary\" displayStyle=\"main\" type=\"primary\" icon=\"edit\" title=\"Edit\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"filter\" title=\"Filter\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"lock\" title=\"Lock\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"browse\" title=\"Browse\">\n            </nui-toolbar-item>\n            <nui-toolbar-item id=\"nui-toolbar-embedded-test-button\" type=\"primary\" icon=\"clear\" title=\"Clear\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"download\" title=\"Download\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group title=\"g2\">\n            <nui-toolbar-item type=\"primary\" icon=\"copy\" title=\"Copy\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"enable\" title=\"Enable\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"execute\" title=\"Execute\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"hide\" title=\"Hide\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"ignore\" title=\"Ignore\">\n            </nui-toolbar-item>\n            <nui-toolbar-item id=\"nui-toolbar-embedded-test-destructive-button\" displayStyle=\"destructive\" type=\"secondary\" icon=\"delete\" title=\"Delete\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <div class=\"nui-toolbar-embedded\">\n            <nui-search class=\"mr-1\" id=\"nui-toolbar-embedded-test-search\"  (search)=\"search()\"></nui-search>\n            <nui-menu id=\"nui-toolbar-embedded-test-menu\" displayStyle=\"action\" [itemsSource]=\"itemsSource\" [icon]=\"'menu'\"></nui-menu>\n        </div>\n    </nui-toolbar>\n</div>\n\n<div class=\"container\">\n    <h3>Toolbar with selected section</h3>\n    <nui-toolbar id=\"nui-toolbar-test-selected\" [selectionEnabled]=\"true\" [selectedItems]=\"select\">\n        <nui-toolbar-group title=\"g1\">\n            <nui-toolbar-item id=\"nui-toolbar-selected-test-button-primary\" displayStyle=\"main\" type=\"primary\" icon=\"edit\" title=\"Edit\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"filter\" title=\"Filter\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"lock\" title=\"Lock\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"browse\" title=\"Browse\">\n            </nui-toolbar-item>\n            <nui-toolbar-item id=\"nui-toolbar-selected-test-button\" type=\"primary\" icon=\"clear\" title=\"Clear\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"download\" title=\"Download\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group title=\"g2\">\n            <nui-toolbar-item type=\"primary\" icon=\"copy\" title=\"Copy\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"enable\" title=\"Enable\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"execute\" title=\"Execute\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"hide\" title=\"Hide\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"secondary\" icon=\"ignore\" title=\"Ignore\">\n            </nui-toolbar-item>\n            <nui-toolbar-item id=\"nui-toolbar-selected-test-destructive-button\" displayStyle=\"destructive\" type=\"secondary\" icon=\"delete\" title=\"Delete\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <div class=\"nui-toolbar-embedded\">\n            <nui-search class=\"mr-1\" id=\"nui-toolbar-selected-test-search\" (search)=\"search()\"></nui-search>\n            <nui-menu id=\"nui-toolbar-selected-test-menu\" displayStyle=\"action\" [itemsSource]=\"itemsSource\" [icon]=\"'menu'\"></nui-menu>\n        </div>\n    </nui-toolbar>\n</div>\n<div class=\"container\">\n    <h3>Toolbar with no menu</h3>\n    <nui-toolbar id=\"nui-toolbar-no-menu-with-search\">\n        <nui-toolbar-group>\n            <nui-toolbar-item displayStyle=\"main\" type=\"primary\" icon=\"add\" title=\"Add\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"edit\" title=\"Edit\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item displayStyle=\"destructive\" type=\"primary\" icon=\"delete\" title=\"Delete\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <div class=\"nui-toolbar-embedded\">\n            <nui-search [value]=\"value\"\n                        [placeholder]=\"placeholder\">\n            </nui-search>\n        </div>\n    </nui-toolbar>\n</div>\n\n<div class=\"container\">\n    <h3>Toolbar with selection and no menu</h3>\n    <nui-toolbar id=\"nui-toolbar-with-selection-no-menu-with-search\" [selectionEnabled]=\"true\" [selectedItems]=\"select\" #toolbar>\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"deselect\" title=\"Deselect\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"deselect-all\" title=\"Deselect All\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item displayStyle=\"destructive\" type=\"primary\" icon=\"delete\" title=\"Delete\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <div class=\"nui-toolbar-embedded\">\n            <nui-search [value]=\"value\"\n                        [placeholder]=\"placeholder\">\n            </nui-search>\n        </div>\n    </nui-toolbar>\n</div>\n\n<div class=\"container\">\n    <h3>Toolbar with no menu</h3>\n    <nui-toolbar id=\"nui-toolbar-no-menu\">\n        <nui-toolbar-group>\n            <nui-toolbar-item displayStyle=\"main\" type=\"primary\" icon=\"add\" title=\"Add\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"edit\" title=\"Edit\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item displayStyle=\"destructive\" type=\"primary\" icon=\"delete\" title=\"Delete\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n    </nui-toolbar>\n</div>\n\n<div class=\"container\">\n    <h3>Toolbar with selection and no menu</h3>\n    <nui-toolbar id=\"nui-toolbar-with-selection-no-menu\" [selectionEnabled]=\"true\" #toolbar>\n        <nui-toolbar-group>\n            <nui-toolbar-item type=\"primary\" icon=\"deselect\" title=\"Deselect\">\n            </nui-toolbar-item>\n            <nui-toolbar-item type=\"primary\" icon=\"deselect-all\" title=\"Deselect All\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n        <nui-toolbar-group>\n            <nui-toolbar-item displayStyle=\"destructive\" type=\"primary\" icon=\"delete\" title=\"Delete\">\n            </nui-toolbar-item>\n        </nui-toolbar-group>\n    </nui-toolbar>\n</div>\n\n";
      /***/
    },

    /***/
    "mxpx":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/toolbar-docs/toolbar-docs.example.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mxpx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiToolbarModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    The basic layout for <code>&lt;nui-toolbar&gt;</code> consists of an <code>&lt;nui-toolbar&gt;</code> element containing one or more\n    <code>&lt;nui-toolbar-group&gt;</code> elements. The <code>&lt;nui-toolbar-group&gt;</code> element is used to group similar items on the toolbar,\n    separating them with an <code>&lt;nui-divider&gt;</code>. Each of the <code>&lt;nui-toolbar-group&gt;</code> elements in turn contains one or more\n    <code>&lt;nui-toolbar-item&gt;</code> elements.\n</p>\n\n<p>\n    A toolbar item can be placed either on the toolbar itself or inside a \"More\" menu on the right side of the toolbar. By default, toolbar items are placed\n    directly on the toolbar. To have a toolbar item appear in the More menu, set the <code>type</code> input on the <code>&lt;nui-toolbar-item&gt;</code> to\n    the value <code><a target=\"_blank\" href=\"../miscellaneous/enumerations.html#ToolbarItemType\">ToolbarItemType.secondary</a></code>.\n    You can bind an event handler to the toolbar-item <code>actionDone</code> event by passing a callback function.\n</p>\n<nui-example-wrapper filenamePrefix=\"toolbar-basic\" exampleTitle=\"Basic Usage\">\n    <nui-toolbar-basic-example></nui-toolbar-basic-example>\n</nui-example-wrapper>\n\n<h2>Item Types</h2>\n<p>\n    To override the default display style, set the <code>displayStyle</code> input to one of the following string values: 'main', 'destructive', or 'action'.\n    'action' is the default display style. <b>Note:</b> The toolbar component allows the user to provide a maximum of one 'destructive' item which must\n    be placed at the end of all items on the toolbar. If this condition isn't met, an error message will be logged.\n    <nui-message type=\"info\">\n        The default 'primary' item type specifies a preferred placement directly on the toolbar rather than inside the More menu. However, the toolbar component\n        provides responsive behavior and will move 'primary' items to the More menu one-by-one as the horizontal space for them becomes smaller\n        and smaller. Conversely, 'secondary' items cannot be moved outside the More menu.\n    </nui-message>\n</p>\n<nui-example-wrapper filenamePrefix=\"toolbar-item-types\" exampleTitle=\"Item Types\">\n    <nui-toolbar-item-types-example></nui-toolbar-item-types-example>\n</nui-example-wrapper>\n\n\n<h2>Embedded Content</h2>\n<p>\n    Other components can be embedded within the toolbar. The following example includes <code><a target=\"_blank\" href=\"../components/SearchComponent.html\">SearchComponent</a></code>\n    and <code><a target=\"_blank\" href=\"../components/MenuComponent.html\">MenuComponent</a></code> in addition to the basic functionality. Embedded components should be placed in <code>div</code>\n    having <code>nui-toolbar-embedded</code> class.\n</p>\n<nui-example-wrapper filenamePrefix=\"toolbar-embedded-content\" exampleTitle=\"Embedded Content\">\n    <nui-toolbar-embedded-content-example></nui-toolbar-embedded-content-example>\n</nui-example-wrapper>\n\n<h2>Enabling Selection</h2>\n<p>\n    Set <code>selectionEnabled</code> binding to true in order to activate toolbar with selection.\n    It is also possible to control the display of toolbar items depending on whether selection\n    state is enabled or disabled.\n    <br><span class=\"nui-text-label\">Note:</span> Use <code>boxShadow</code> set to false to remove bottom shadow(shown by default).\n</p>\n\n<nui-example-wrapper filenamePrefix=\"toolbar-selection\" exampleTitle=\"Enabling Selection\">\n    <nui-toolbar-selection-example></nui-toolbar-selection-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "ntG4":
    /*!*****************************************************************************************!*\
      !*** ./demo/src/components/demo/toolbar/toolbar-docs/toolbar-docs.example.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ToolbarDocsExampleComponent */

    /***/
    function ntG4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarDocsExampleComponent", function () {
        return ToolbarDocsExampleComponent;
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


      var _toolbar_basic_toolbar_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../toolbar-basic/toolbar-basic.example.component */
      "cZWg");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");
      /* harmony import */


      var _toolbar_item_types_toolbar_item_types_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../toolbar-item-types/toolbar-item-types.example.component */
      "aZP4");
      /* harmony import */


      var _toolbar_embedded_content_toolbar_embedded_content_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../toolbar-embedded-content/toolbar-embedded-content.example.component */
      "uG35");
      /* harmony import */


      var _toolbar_selection_toolbar_selection_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../toolbar-selection/toolbar-selection.example.component */
      "I7d1");

      var ToolbarDocsExampleComponent = function ToolbarDocsExampleComponent() {
        _classCallCheck(this, ToolbarDocsExampleComponent);
      };

      ToolbarDocsExampleComponent.ɵfac = function ToolbarDocsExampleComponent_Factory(t) {
        return new (t || ToolbarDocsExampleComponent)();
      };

      ToolbarDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarDocsExampleComponent,
        selectors: [["nui-toolbar-docs-example"]],
        hostAttrs: [1, "nui-edge-definer"],
        decls: 98,
        vars: 0,
        consts: [["target", "_blank", "href", "../miscellaneous/enumerations.html#ToolbarItemType"], ["filenamePrefix", "toolbar-basic", "exampleTitle", "Basic Usage"], ["type", "info"], ["filenamePrefix", "toolbar-item-types", "exampleTitle", "Item Types"], ["target", "_blank", "href", "../components/SearchComponent.html"], ["target", "_blank", "href", "../components/MenuComponent.html"], ["filenamePrefix", "toolbar-embedded-content", "exampleTitle", "Embedded Content"], [1, "nui-text-label"], ["filenamePrefix", "toolbar-selection", "exampleTitle", "Enabling Selection"]],
        template: function ToolbarDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiToolbarModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The basic layout for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "<nui-toolbar>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " consists of an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "<nui-toolbar>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " element containing one or more ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "<nui-toolbar-group>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " elements. The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "<nui-toolbar-group>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " element is used to group similar items on the toolbar, separating them with an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "<nui-divider>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ". Each of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "<nui-toolbar-group>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " elements in turn contains one or more ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "<nui-toolbar-item>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " elements.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " A toolbar item can be placed either on the toolbar itself or inside a \"More\" menu on the right side of the toolbar. By default, toolbar items are placed directly on the toolbar. To have a toolbar item appear in the More menu, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " input on the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "<nui-toolbar-item>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " to the value ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "ToolbarItemType.secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ". You can bind an event handler to the toolbar-item ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "actionDone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " event by passing a callback function.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "nui-toolbar-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Item Types");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " To override the default display style, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "displayStyle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " input to one of the following string values: 'main', 'destructive', or 'action'. 'action' is the default display style. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " The toolbar component allows the user to provide a maximum of one 'destructive' item which must be placed at the end of all items on the toolbar. If this condition isn't met, an error message will be logged. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nui-message", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " The default 'primary' item type specifies a preferred placement directly on the toolbar rather than inside the More menu. However, the toolbar component provides responsive behavior and will move 'primary' items to the More menu one-by-one as the horizontal space for them becomes smaller and smaller. Conversely, 'secondary' items cannot be moved outside the More menu. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "nui-toolbar-item-types-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Embedded Content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Other components can be embedded within the toolbar. The following example includes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "SearchComponent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "MenuComponent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " in addition to the basic functionality. Embedded components should be placed in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " having ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "nui-toolbar-embedded");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " class.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "nui-toolbar-embedded-content-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Enabling Selection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Set ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "selectionEnabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " binding to true in order to activate toolbar with selection. It is also possible to control the display of toolbar items depending on whether selection state is enabled or disabled. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "boxShadow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " set to false to remove bottom shadow(shown by default).\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "nui-example-wrapper", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "nui-toolbar-selection-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _toolbar_basic_toolbar_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarBasicExampleComponent"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"], _toolbar_item_types_toolbar_item_types_example_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarItemTypesExampleComponent"], _toolbar_embedded_content_toolbar_embedded_content_example_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarEmbeddedContentExampleComponent"], _toolbar_selection_toolbar_selection_example_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarSelectionExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "qM71":
    /*!************************************************************!*\
      !*** ./demo/src/components/demo/toolbar/toolbar.module.ts ***!
      \************************************************************/

    /*! exports provided: ToolbarModule */

    /***/
    function qM71(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarModule", function () {
        return ToolbarModule;
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
      "Ohdo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["ToolbarDocsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "toolbar-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["ToolbarTestExampleComponent"]
      }, {
        path: "toolbar-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["ToolbarVisualTestExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ToolbarModule = function ToolbarModule() {
        _classCallCheck(this, ToolbarModule);
      };

      ToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: ToolbarModule
      });
      ToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function ToolbarModule_Factory(t) {
          return new (t || ToolbarModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("vqV/");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiToolbarModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMenuModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSearchModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTextboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ToolbarModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["ToolbarBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ToolbarDocsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ToolbarEmbeddedContentExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ToolbarSelectionExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ToolbarItemTypesExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ToolbarTestExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["ToolbarVisualTestExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiToolbarModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMenuModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSearchModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTextboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "uG35":
    /*!*****************************************************************************************************************!*\
      !*** ./demo/src/components/demo/toolbar/toolbar-embedded-content/toolbar-embedded-content.example.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: ToolbarEmbeddedContentExampleComponent */

    /***/
    function uG35(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarEmbeddedContentExampleComponent", function () {
        return ToolbarEmbeddedContentExampleComponent;
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


      var _src_lib_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar.component */
      "tDpY");
      /* harmony import */


      var _src_lib_toolbar_toolbar_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar-group.component */
      "hRrO");
      /* harmony import */


      var _src_lib_toolbar_toolbar_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/toolbar/toolbar-item.component */
      "rLD5");
      /* harmony import */


      var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/search/search.component */
      "dYN2");
      /* harmony import */


      var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/menu/menu/menu.component */
      "JG2v");

      var ToolbarEmbeddedContentExampleComponent = /*#__PURE__*/function () {
        function ToolbarEmbeddedContentExampleComponent(logger) {
          _classCallCheck(this, ToolbarEmbeddedContentExampleComponent);

          this.logger = logger;
          this.itemsSource = [{
            header: $localize(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["section title"]))),
            itemsSource: [{
              title: $localize(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["Menu Item"]))),
              itemType: "action"
            }, {
              title: $localize(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["Hover me"]))),
              itemType: "action"
            }, {
              title: $localize(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["Selected menu item"]))),
              isSelected: true
            }, {
              title: $localize(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["Menu item"]))),
              itemType: "switch",
              checked: true
            }, {
              title: $localize(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["Menu disabled item"]))),
              itemType: "switch",
              checked: false,
              disabled: true
            }, {
              title: $localize(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["Menu item with checkbox"]))),
              itemType: "option",
              disabled: true
            }, {
              title: $localize(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["Menu item with icon"]))),
              itemType: "action",
              icon: "table"
            }, {
              title: $localize(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["Link menu item"]))),
              itemType: "link",
              url: "#button",
              disabled: true
            }, {
              title: $localize(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["Export PDF"]))),
              itemType: "link",
              icon: "export-pdf",
              url: "#button"
            }]
          }];
          this.busy = false;
          this.placeholder = $localize(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["Placeholder"])));
          this.stringToSearch = $localize(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n        Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat.\n        Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate.\n        Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula"])));
        }

        _createClass(ToolbarEmbeddedContentExampleComponent, [{
          key: "onCancel",
          value: function onCancel(value) {
            this.logger.warn("Example onCancel fired. Value passed: " + value);

            if (value === "") {
              this.value = "";
              this.searchKey = "";
            } else {
              this.doCancel();
            }
          }
        }, {
          key: "onSearch",
          value: function onSearch(value) {
            this.logger.warn("Example onSearch fired. Current input value passed: " + value);
            this.doSearch(value);
          }
        }, {
          key: "doCancel",
          value: function doCancel() {
            clearTimeout(this.timerHandler);
            this.busy = false;
          }
        }, {
          key: "doSearch",
          value: function doSearch(value) {
            this.logger.warn("Example search started.");

            var _this = this;

            clearTimeout(_this.timerHandler);
            _this.busy = true;
            _this.timerHandler = setTimeout(function () {
              _this.busy = false;
              _this.searchKey = value;

              _this.logger.warn("Example search finished.");
            }, 2000);
          }
        }]);

        return ToolbarEmbeddedContentExampleComponent;
      }();

      ToolbarEmbeddedContentExampleComponent.ɵfac = function ToolbarEmbeddedContentExampleComponent_Factory(t) {
        return new (t || ToolbarEmbeddedContentExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["LoggerService"]));
      };

      ToolbarEmbeddedContentExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ToolbarEmbeddedContentExampleComponent,
        selectors: [["nui-toolbar-embedded-content-example"]],
        decls: 20,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3610789225309975025$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("g1");
            i18n_0 = MSG_EXTERNAL_3610789225309975025$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral([":\u241F0221e0440c692faedd2c3ea89b221c756d316a44\u241F3610789225309975025:g1"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7585826646011739428$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Edit");
            i18n_2 = MSG_EXTERNAL_7585826646011739428$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral([":\u241F28f86ffd419b869711aa13f5e5ff54be6d70731c\u241F7585826646011739428:Edit"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7462301153729425254$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Export");
            i18n_4 = MSG_EXTERNAL_7462301153729425254$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral([":\u241F5f19586aba912ec6eb123ec5ab609a3bcc073066\u241F7462301153729425254:Export"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8700121026680200191$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Clear");
            i18n_6 = MSG_EXTERNAL_8700121026680200191$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral([":\u241F99ee4faa69cd2ea8e3678c1f557c0ff1f05aae46\u241F8700121026680200191:Clear"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_787163983066183218$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Browse");
            i18n_8 = MSG_EXTERNAL_787163983066183218$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral([":\u241F2c7dc726e93bcf3ca2f316bbebe96fa1e5288ba0\u241F787163983066183218:Browse"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7819314041543176992$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("Close");
            i18n_10 = MSG_EXTERNAL_7819314041543176992$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral([":\u241Ff4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8\u241F7819314041543176992:Close"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3099741642167775297$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_13 = goog.getMsg("Download");
            i18n_12 = MSG_EXTERNAL_3099741642167775297$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_13;
          } else {
            i18n_12 = $localize(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral([":\u241Fdc75033a5238fdc4f462212c847a45ba8018a3fd\u241F3099741642167775297:Download"])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4686112696530772743$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_15 = goog.getMsg("g2");
            i18n_14 = MSG_EXTERNAL_4686112696530772743$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_15;
          } else {
            i18n_14 = $localize(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral([":\u241Fbd6c7f9cad0530649058d07ac2fb07a4ed1cdade\u241F4686112696530772743:g2"])));
          }

          var i18n_16;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3804037606764273869$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_17 = goog.getMsg("Cut");
            i18n_16 = MSG_EXTERNAL_3804037606764273869$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_17;
          } else {
            i18n_16 = $localize(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral([":\u241F393584cc19f5730acb6ca04a01d7b818e5cda8a4\u241F3804037606764273869:Cut"])));
          }

          var i18n_18;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4323470180912194028$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_19 = goog.getMsg("Copy");
            i18n_18 = MSG_EXTERNAL_4323470180912194028$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_19;
          } else {
            i18n_18 = $localize(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral([":\u241F1979da7460819153e11d2078244645d94291b69c\u241F4323470180912194028:Copy"])));
          }

          var i18n_20;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_584754872792429089$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_21 = goog.getMsg("Assign");
            i18n_20 = MSG_EXTERNAL_584754872792429089$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_21;
          } else {
            i18n_20 = $localize(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral([":\u241F1da6e5076d6a884a4241733942825718559f3075\u241F584754872792429089:Assign"])));
          }

          var i18n_22;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3249513483374643425$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_23 = goog.getMsg("Add");
            i18n_22 = MSG_EXTERNAL_3249513483374643425$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_23;
          } else {
            i18n_22 = $localize(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral([":\u241Ff6755cff4957d5c3c89bafce5651f1b6fa2b1fd9\u241F3249513483374643425:Add"])));
          }

          var i18n_24;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1825829511397926879$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_25 = goog.getMsg("Tag");
            i18n_24 = MSG_EXTERNAL_1825829511397926879$$DEMO_SRC_COMPONENTS_DEMO_TOOLBAR_TOOLBAR_EMBEDDED_CONTENT_TOOLBAR_EMBEDDED_CONTENT_EXAMPLE_COMPONENT_TS_25;
          } else {
            i18n_24 = $localize(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral([":\u241F337ca2e5eeea28eaca91e8511eb5eaafdb385ce6\u241F1825829511397926879:Tag"])));
          }

          return [[1, "nui"], ["title", i18n_0], ["type", "primary", "icon", "edit", "title", i18n_2], ["type", "primary", "icon", "export", "title", i18n_4], ["type", "primary", "icon", "clear", "title", i18n_6], ["type", "primary", "icon", "browse", "title", i18n_8], ["type", "primary", "icon", "close", "title", i18n_10], ["type", "primary", "icon", "download", "title", i18n_12], ["title", i18n_14], ["type", "primary", "icon", "cut", "title", i18n_16], ["type", "secondary", "icon", "copy", "title", i18n_18], ["type", "secondary", "icon", "assign", "title", i18n_20], ["type", "primary", "icon", "add", "title", i18n_22], ["type", "secondary", "icon", "tag", "title", i18n_24], [1, "nui-toolbar-embedded"], [1, "mr-1", 3, "value", "placeholder", "search", "cancel"], ["displayStyle", "action", "icon", "menu", 3, "itemsSource"]];
        },
        template: function ToolbarEmbeddedContentExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-toolbar-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nui-toolbar-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nui-toolbar-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nui-toolbar-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "nui-toolbar-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "nui-toolbar-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "nui-toolbar-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nui-toolbar-group", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "nui-toolbar-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "nui-toolbar-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "nui-toolbar-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nui-toolbar-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "nui-toolbar-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "nui-toolbar-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nui-search", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function ToolbarEmbeddedContentExampleComponent_Template_nui_search_search_18_listener($event) {
              return ctx.onSearch($event);
            })("cancel", function ToolbarEmbeddedContentExampleComponent_Template_nui_search_cancel_18_listener($event) {
              return ctx.onCancel($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "nui-menu", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.value)("placeholder", ctx.placeholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.itemsSource);
          }
        },
        directives: [_src_lib_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"], _src_lib_toolbar_toolbar_group_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarGroupComponent"], _src_lib_toolbar_toolbar_item_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarItemComponent"], _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "vqV/":
    /*!**********************************************************************************************************!*\
      !*** ./demo/src/components/demo/toolbar sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \**********************************************************************************************************/

    /*! no static exports found */

    /***/
    function vqV(module, exports, __webpack_require__) {
      var map = {
        "./index.ts": "JDxc",
        "./toolbar-basic/toolbar-basic.example.component.html": "J87i",
        "./toolbar-basic/toolbar-basic.example.component.ts": "FD+Y",
        "./toolbar-docs/toolbar-docs.example.component.html": "mxpx",
        "./toolbar-docs/toolbar-docs.example.component.ts": "NP3M",
        "./toolbar-embedded-content/toolbar-embedded-content.example.component.html": "OfNo",
        "./toolbar-embedded-content/toolbar-embedded-content.example.component.ts": "QVJh",
        "./toolbar-item-types/toolbar-item-types.example.component.html": "Ylo4",
        "./toolbar-item-types/toolbar-item-types.example.component.ts": "/9GZ",
        "./toolbar-selection/toolbar-selection.example.component.html": "QNSn",
        "./toolbar-selection/toolbar-selection.example.component.ts": "zhYe",
        "./toolbar-test/toolbar-test.component.html": "bB8n",
        "./toolbar-test/toolbar-test.component.ts": "Q9k+",
        "./toolbar-visual-test/toolbar-visual-test.component.html": "hcHG",
        "./toolbar-visual-test/toolbar-visual-test.component.ts": "MfYw",
        "./toolbar.module.ts": "SODQ"
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
      webpackContext.id = "vqV/";
      /***/
    },

    /***/
    "zhYe":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/toolbar/toolbar-selection/toolbar-selection.example.component.ts ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zhYe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject } from \"@angular/core\";\nimport { LoggerService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-toolbar-selection-example\",\n    templateUrl: \"./toolbar-selection.example.component.html\",\n})\n\nexport class ToolbarSelectionExampleComponent {\n    public selectionEnabled = true;\n    public select = {\n        current: 1,\n        total: 72,\n    };\n    public busy = false;\n    public placeholder = $localize `Placeholder`;\n    public searchKey: string;\n    public stringToSearch = `\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n        Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat.\n        Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate.\n        Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula\n    `;\n    public value: string;\n    private timerHandler: number;\n\n    public constructor(@Inject(LoggerService) private logger: LoggerService) {\n    }\n\n    public onCancel (value: string) {\n        this.logger.warn(\"Example onCancel fired. Value passed: \" + value);\n        if (value === \"\") {\n            this.value = \"\";\n            this.searchKey = \"\";\n        } else {\n            this.doCancel();\n        }\n    }\n\n    public onSearch(value: string) {\n        this.logger.warn(\"Example onSearch fired. Current input value passed: \" + value);\n        this.doSearch(value);\n    }\n\n    private doCancel () {\n        clearTimeout(this.timerHandler);\n        this.busy = false;\n    }\n\n    private doSearch (value: string) {\n        this.logger.warn(\"Example search started.\");\n        const _this = this;\n        clearTimeout(_this.timerHandler);\n        _this.busy = true;\n        _this.timerHandler =  <any> setTimeout( () => {\n            _this.busy = false;\n            _this.searchKey = value;\n            _this.logger.warn(\"Example search finished.\");\n        }, 2000);\n    }\n\n    public toggleSelectedChange(event: any) {\n        this.selectionEnabled = !this.selectionEnabled;\n    }\n}\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-toolbar-toolbar-module-es5.js.map