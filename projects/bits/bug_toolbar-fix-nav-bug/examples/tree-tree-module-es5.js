(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35;

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tree-tree-module"], {
    /***/
    "+W/g":
    /*!***************************************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree-docs/tree-docs.example.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: TreeDocsExampleComponent */

    /***/
    function WG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeDocsExampleComponent", function () {
        return TreeDocsExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_docs_example_code_example_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../../src/lib/docs/example-code/example-code.component */
      "DTer");
      /* harmony import */


      var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */
      "CVg4");
      /* harmony import */


      var _tree_basic_tree_basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../tree-basic/tree-basic.example.component */
      "JHSV");
      /* harmony import */


      var _tree_styling_tree_styling_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../tree-styling/tree-styling.example.component */
      "GKkx");
      /* harmony import */


      var _tree_lazy_tree_lazy_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../tree-lazy/tree-lazy.example.component */
      "e5b1");
      /* harmony import */


      var _tree_checkbox_tree_checkbox_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../tree-checkbox/tree-checkbox.example.component */
      "rfh3");
      /* harmony import */


      var _tree_checkbox_lazy_tree_checkbox_lazy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../tree-checkbox-lazy/tree-checkbox-lazy.component */
      "5xwD");
      /* harmony import */


      var _tree_leaf_pagination_tree_leaf_pagination_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../tree-leaf-pagination/tree-leaf-pagination.example.component */
      "M5er");
      /* harmony import */


      var _tree_with_additional_content_tree_with_additional_content_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../tree-with-additional-content/tree-with-additional-content.example.component */
      "xwXO");
      /* harmony import */


      var _tree_load_more_tree_load_more_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../tree-load-more/tree-load-more.example.component */
      "JGyy");
      /* harmony import */


      var _tree_show_all_dialog_tree_show_all_dialog_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../tree-show-all-dialog/tree-show-all-dialog.example.component */
      "UaJR");

      var TreeDocsExampleComponent = function TreeDocsExampleComponent() {
        _classCallCheck(this, TreeDocsExampleComponent);

        this.initialSetupCode = "\n// our module where we want to use tree features\nimport { CdkTreeModule } from \"@angular/cdk/tree\";\n\n@NgModule({\n    imports: [\n        CdkTreeModule,\n        // other modules that we might need\n    ],\n    declarations: [ /* our module declaration */],\n    exports:      [ /* our exports */ ],\n})\nexport class MyModule {}".replace("\r\n", "<br/>") // nice rendering
        ;
      };

      TreeDocsExampleComponent.ɵfac = function TreeDocsExampleComponent_Factory(t) {
        return new (t || TreeDocsExampleComponent)();
      };

      TreeDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TreeDocsExampleComponent,
        selectors: [["nui-tree-docs-example"]],
        decls: 135,
        vars: 1,
        consts: [["language", "typescript"], ["href", "https://material.angular.io/cdk/tree/overview", "target", "_blank"], ["filenamePrefix", "basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "styling", "exampleTitle", "Styling"], ["filenamePrefix", "lazy", "exampleTitle", "Lazy loading"], ["href", "https://github.com/angular/components/blob/master/src/cdk/collections/selection-model.ts"], ["filenamePrefix", "checkbox", "exampleTitle", "Checkbox"], ["filenamePrefix", "checkbox-lazy", "exampleTitle", "Checkbox with Lazy Loading"], ["filenamePrefix", "leaf-pagination", "exampleTitle", "Pagination on the leaf nodes"], ["filenamePrefix", "with-additional-content", "exampleTitle", "Tree With Additional Content"], ["filenamePrefix", "load-more", "exampleTitle", "Tree Load More Nodes"], ["href", "../injectables/DataSourceService.html", "target", "_blank"], ["filenamePrefix", "show-all-dialog", "exampleTitle", "Tree With show all in dialog"]],
        template: function TreeDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The Angular CDK Tree module provides a way to easily and declaratively create Tree interfaces.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "To get started, import ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CdkTreeModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " into the NgModule where you want to use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "cdk-tree");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " features:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-example-code", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "For more details on the implementation of the @angular/cdk/tree, check the documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Angular CDK's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "CdkTreeModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "This example shows how easy it is to create a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "cdk-tree");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " element. Our examples are using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "nui-expander");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " css styles which we recommend to use. To add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "nui-expander");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " styles, add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ".expander()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " mixin to the component styles. In the result, appropriate css classes are generated which are used in the examples. For example ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ".nui-tree__body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " applies dotted line to the body of branch, or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ".nui-tree_header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " applies ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "cursor: pointer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ". Look into examples to find more css classes or extend existing css rules to achieve your goal.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "nui-tree-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Tree Styling");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "To apply unique styles for the particular node, provide icon/css class/etc. to this node in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "dataSource");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ", and use it as usually in the template of component. Check the source code below:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "nui-tree-styling-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Tree Lazy-loading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "To implement lazy-loading on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "CdkTree");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " component branches, use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "renderNodeChanges");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " method, in order to synchronize data-source with DOM representation after an asynchronous operation has finished. Pay attention to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "isLoading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " flag into yours node objects while implementing lazy-loading.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nui-example-wrapper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "nui-tree-lazy-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Tree with checkboxes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "For handling state of checkboxes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "SelectionModel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " is used. You can easily grab all the selected items using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "SelectionModel.selected");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " or subscribe to the changes using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "SelectionModel.changed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, ". Check one of the checkboxes to see it in action. This example also shows how to implement \"indeterminate\" state of checkbox for branches.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "nui-tree-checkbox-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Tree with Checkboxes and Lazy Loading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " In case some selectable options are to be lazy loaded, it is possible to load additional selectable options asynchronously, while still be able to track the selection properly. In the following example there are several places where some additional options are being loaded on demand. Once triggered, if the parent selectable node is selected, all the lazy-loaded selectables will get selected once they're loaded.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "nui-example-wrapper", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "nui-tree-checkbox-lazy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Tree with Pagination on Leaf nodes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " If you have many items on leaf nodes, you might be interested in loading the data by parts. You can use pagination as one of the options for such a purpose.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " The example below shows how to do that. In terms of this example, it's assumed that an API can return a necessary set of data for the node by it's identificator. When you expand the node, it will load the first page and then will display a paginator. At this point, on the first data fetch, an API should return a total amount of items to pass it to the paginator.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " It's also recommended to use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "nui-paginator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " for handling the pagination.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "nui-example-wrapper", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "nui-tree-leaf-pagination-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Tree With Additional Elements");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "To customize tree nodes, add any template. Below you see several typical cases with adding additional templates (menu, tag) into the tree.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "nui-example-wrapper", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "nui-tree-with-additional-content-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Tree Load More Nodes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "The example below shows how to load data in portions using \"Load More\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "nui-example-wrapper", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "nui-tree-load-more-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Tree With show all in dialog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " It's possible the case when there're too many items on the leaf node. In this case, it's also possible to display all the items on the separate screen. For example, inside the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "nui-dialog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Current example uses Nova test BE service to get the data. It can send the data by some portions for a certain criteria. In this current example, there're 3 nodes that fetch the data per location, the service is implementing Nova ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "DataSourceService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "nui-example-wrapper", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "nui-tree-show-all-dialog-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.initialSetupCode);
          }
        },
        directives: [_src_lib_docs_example_code_example_code_component__WEBPACK_IMPORTED_MODULE_1__["ExampleCodeComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["ExampleWrapperComponent"], _tree_basic_tree_basic_example_component__WEBPACK_IMPORTED_MODULE_3__["TreeBasicExampleComponent"], _tree_styling_tree_styling_example_component__WEBPACK_IMPORTED_MODULE_4__["TreeStylingExampleComponent"], _tree_lazy_tree_lazy_example_component__WEBPACK_IMPORTED_MODULE_5__["TreeLazyExampleComponent"], _tree_checkbox_tree_checkbox_example_component__WEBPACK_IMPORTED_MODULE_6__["TreeCheckboxExampleComponent"], _tree_checkbox_lazy_tree_checkbox_lazy_component__WEBPACK_IMPORTED_MODULE_7__["TreeCheckboxLazyComponent"], _tree_leaf_pagination_tree_leaf_pagination_example_component__WEBPACK_IMPORTED_MODULE_8__["TreeLeafPaginationExampleComponent"], _tree_with_additional_content_tree_with_additional_content_example_component__WEBPACK_IMPORTED_MODULE_9__["TreeWithAdditionalContentExampleComponent"], _tree_load_more_tree_load_more_example_component__WEBPACK_IMPORTED_MODULE_10__["TreeLoadMoreExampleComponent"], _tree_show_all_dialog_tree_show_all_dialog_example_component__WEBPACK_IMPORTED_MODULE_11__["TreeShowAllDialogExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "5DdY":
    /*!******************************************************************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree-visual-test/tree-checkbox-test/tree-checkbox-test.component.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: TreeCheckboxTestComponent */

    /***/
    function DdY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeCheckboxTestComponent", function () {
        return TreeCheckboxTestComponent;
      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../data */
      "EsWI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../../../src/lib/icon/icon.component */
      "45Bz");

      function TreeCheckboxTestComponent_cdk_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "cdk-nested-tree-node", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nui-checkbox", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function TreeCheckboxTestComponent_cdk_nested_tree_node_2_Template_nui_checkbox_valueChange_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);

            var node_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r3.leafItemSelectionToggle(node_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r0.selectionModel.isSelected(node_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](node_r2.name);
        }
      }

      function TreeCheckboxTestComponent_cdk_nested_tree_node_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "cdk-nested-tree-node", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "nui-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nui-checkbox", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TreeCheckboxTestComponent_cdk_nested_tree_node_3_Template_nui_checkbox_click_3_listener($event) {
            return $event.stopPropagation();
          })("valueChange", function TreeCheckboxTestComponent_cdk_nested_tree_node_3_Template_nui_checkbox_valueChange_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var node_r5 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r7.branchItemSelectionToggle(node_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](8, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r5 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("icon", ctx_r1.treeControl.isExpanded(node_r5) ? "triangle-down" : "triangle-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.descendantsAllSelected(node_r5))("indeterminate", ctx_r1.descendantsPartiallySelected(node_r5));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](node_r5.item);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](node_r5.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("nui-tree__body--collapsed", !ctx_r1.treeControl.isExpanded(node_r5));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@expandedState", ctx_r1.treeControl.isExpanded(node_r5) ? "expanded" : "collapsed");
        }
      }

      var TreeCheckboxTestComponent = /*#__PURE__*/function () {
        function TreeCheckboxTestComponent() {
          _classCallCheck(this, TreeCheckboxTestComponent);

          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](function (node) {
            return node.children;
          });
          this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["ArrayDataSource"](_data__WEBPACK_IMPORTED_MODULE_3__["TREE_DATA_CHECKBOX"]);
          this.selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true);

          this.hasChild = function (_, node) {
            return !!node.children && node.children.length > 0;
          };
        }
        /** Whether all the descendants of the node are selected. */


        _createClass(TreeCheckboxTestComponent, [{
          key: "descendantsAllSelected",
          value: function descendantsAllSelected(node) {
            var _this = this;

            var descendants = this.treeControl.getDescendants(node);
            return descendants.length > 0 && descendants.every(function (child) {
              return _this.selectionModel.isSelected(child);
            });
          }
          /** Whether part of the descendants are selected */

        }, {
          key: "descendantsPartiallySelected",
          value: function descendantsPartiallySelected(node) {
            var _this2 = this;

            var descendants = this.treeControl.getDescendants(node);
            var result = descendants.some(function (child) {
              return _this2.selectionModel.isSelected(child);
            });
            return result && !this.descendantsAllSelected(node);
          }
          /** Toggle the branch selection. Select/deselect all the descendants node */

        }, {
          key: "branchItemSelectionToggle",
          value: function branchItemSelectionToggle(node) {
            var _this$selectionModel,
                _this$selectionModel2,
                _this3 = this;

            this.selectionModel.toggle(node);
            var descendants = this.treeControl.getDescendants(node);
            this.selectionModel.isSelected(node) ? (_this$selectionModel = this.selectionModel).select.apply(_this$selectionModel, _toConsumableArray(descendants)) : (_this$selectionModel2 = this.selectionModel).deselect.apply(_this$selectionModel2, _toConsumableArray(descendants)); // Force update for the parent

            descendants.forEach(function (child) {
              return _this3.selectionModel.isSelected(child);
            });
            this.checkAllParentsSelection(node);
          }
          /** Toggle a leaf item selection. Check all the parents to see if they changed */

        }, {
          key: "leafItemSelectionToggle",
          value: function leafItemSelectionToggle(node) {
            this.selectionModel.toggle(node);
            this.checkAllParentsSelection(node);
          }
          /** Checks all the parents when a leaf node is selected/unselected */

        }, {
          key: "checkAllParentsSelection",
          value: function checkAllParentsSelection(node) {
            var parent = this.getParentNode(node);

            while (parent) {
              this.checkRootNodeSelection(parent);
              parent = this.getParentNode(parent);
            }
          }
          /** Check root node checked state and change it accordingly */

        }, {
          key: "checkRootNodeSelection",
          value: function checkRootNodeSelection(node) {
            var _this4 = this;

            var nodeSelected = this.selectionModel.isSelected(node);
            var descendants = this.treeControl.getDescendants(node);
            var descAllSelected = descendants.length > 0 && descendants.every(function (child) {
              return _this4.selectionModel.isSelected(child);
            });

            if (nodeSelected && !descAllSelected) {
              this.selectionModel.deselect(node);
            } else if (!nodeSelected && descAllSelected) {
              this.selectionModel.select(node);
            }
          }
          /** Get the parent node of a node */

        }, {
          key: "getParentNode",
          value: function getParentNode(node) {
            var parent; // Don't need to get parent if node on the 0 level

            if (_data__WEBPACK_IMPORTED_MODULE_3__["TREE_DATA_CHECKBOX"].find(function (n) {
              return n === node;
            })) {
              return;
            }

            var search = function search(n) {
              if (parent || !n.children) {
                return;
              }

              if (n.children.find(function (i) {
                return i === node;
              })) {
                parent = n;
                return;
              }

              return n.children.find(search);
            }; // invoke search on the level 0 items


            _data__WEBPACK_IMPORTED_MODULE_3__["TREE_DATA_CHECKBOX"].forEach(search);

            if (!parent) {
              throw new Error("Parent wasn't found");
            }

            return parent;
          }
        }]);

        return TreeCheckboxTestComponent;
      }();

      TreeCheckboxTestComponent.ɵfac = function TreeCheckboxTestComponent_Factory(t) {
        return new (t || TreeCheckboxTestComponent)();
      };

      TreeCheckboxTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: TreeCheckboxTestComponent,
        selectors: [["nui-tree-checkbox-test"]],
        hostAttrs: ["id", "nui-tree-checkbox-example"],
        decls: 4,
        vars: 4,
        consts: [[1, "d-flex", "justify-content-between"], [2, "flex", "50%", 3, "dataSource", "treeControl"], ["class", "nui-tree__leaf", 4, "cdkTreeNodeDef"], ["class", "nui-tree", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "nui-tree__leaf"], ["nui-button", "", "displayStyle", "action", "type", "button", "disabled", ""], [1, "leaf-control", 3, "checked", "valueChange"], [1, "nui-tree"], ["cdkTreeNodeToggle", "", 1, "nui-tree__header"], [1, "nui-tree__header-icon", 3, "icon"], [1, "branch-control", 3, "checked", "indeterminate", "click", "valueChange"], [1, "nui-tree__header-title"], [1, "nui-tree__body"], ["cdkTreeNodeOutlet", ""]],
        template: function TreeCheckboxTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "cdk-tree", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TreeCheckboxTestComponent_cdk_nested_tree_node_2_Template, 4, 2, "cdk-nested-tree-node", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TreeCheckboxTestComponent_cdk_nested_tree_node_3_Template, 9, 8, "cdk-nested-tree-node", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@.disabled", true)("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkNestedTreeNode"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeToggle"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeOutlet"]],
        styles: [".nui-tree--expanded[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.nui-tree__icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n  margin-left: -7px;\n}\n.nui-tree__header[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 3px;\n  cursor: pointer;\n  display: flex;\n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  \n  -o-user-select: none;\n  user-select: none;\n}\n.nui-tree__header[_ngcontent-%COMP%]:hover {\n  background-color: var(--nui-color-bg-transparent-hover,rgba(17, 17, 17, 0.05));\n}\n.nui-tree__header-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  line-height: 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  color: var(--nui-color-text-default,#111);\n}\n.nui-tree__header-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-grow: 2;\n  justify-content: flex-start;\n  padding-left: 5px;\n  min-width: 0;\n  padding-right: 5px;\n}\n.nui-tree__header-content-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content--with-icon[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.nui-tree__header-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 2;\n  min-width: 0;\n  width: 100%;\n}\n.nui-tree__header.nui-expander__header--empty.nui-expander__header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.nui-tree__header.nui-expander__header--empty[_ngcontent-%COMP%]   .nui-expander__header-content[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.nui-tree__custom-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nui-tree__custom-header--empty[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n}\n.nui-tree__body[_ngcontent-%COMP%] {\n  border: none;\n  border-left: dotted 2px #d9d9d9;\n  border-left: dotted 2px var(--nui-color-line-default, #d9d9d9);\n  color: #111;\n  color: var(--nui-color-text-default, #111);\n  margin-left: 14px;\n  padding-left: 14px;\n}\n.nui-tree__body.hide-left-border[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.nui-tree__body.ng-animating[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__body--collapsed[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__leaf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nui-tree__invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2V4cGFuZGVyLWJhc2UubGVzcyIsInRyZWUtY2hlY2tib3gtdGVzdC5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL25vLXNlbGVjdC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvY3NzLXZhcmlhYmxlcy5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvdGV4dC1vdmVyZmxvdy5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9udWktZnJhbWV3b3JrLXR5cG9ncmFwaHkubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlSTtFQUNJLG1CQUFBO0FDZFI7QURpQkk7RUFiSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBU0EsaUJBQUE7QUNUUjtBRFlJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VFM0JOLHlCQUFBO0VEa0JBLDRCQUE0QjtFQ2pCNUIsc0JBQUE7RURtQkEsZ0JBQWdCO0VDbEJoQixxQkFBQTtFRG9CQSxXQUFXO0VBQ1gsOENBQThDO0VDbEI5QyxvQkFBQTtFQUNBLGlCQUFBO0FEb0JGO0FESVE7RUcxQkosOEVBQUE7QUZ5Qko7QURLUTtFSTFCSixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFFQSx1QkFBQTtFQ1JBLGlCQUFBO0VBQ0EsZUFBQTtFQTBCQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBSlFKO0FERFE7RUFuQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ3VDUjtBRE5RO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNRWjtBRE5ZO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDUWhCO0FETFk7RUFDSSxlQUFBO0FDT2hCO0FESlk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTWhCO0FERFk7RUFDSSxvQkFBQTtBQ0doQjtBRExRO0VBTVEsZUFBQTtFQUNBLGdCQUFBO0FDRWhCO0FER0k7RUFDSSxXQUFBO0FDRFI7QURHUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDRFo7QURLSTtFQUNJLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hSO0FES1E7RUFDSSxjQUFBO0FDSFo7QURNUTtFQUNJLGdCQUFBO0FDSlo7QUFwR1E7RUFDSSxnQkFBQTtBQXNHWjtBQWxHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQW9HUjtBQWpHSTtFQUNJLGFBQUE7QUFtR1IiLCJmaWxlIjoidHJlZS1jaGVja2JveC10ZXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL251aS1mcmFtZXdvcmstdmFyaWFibGVzLmxlc3NcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9taXhpbnMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL251aS1mcmFtZXdvcmstdHlwb2dyYXBoeS5sZXNzXCI7XG5cbi5leHBhbmRlcigpIHtcbiAgICAuZXhwYW5kZXItaWNvbigpIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cblxuICAgICYtLWV4cGFuZGVkIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IEBudWktc3BhY2UteHM7XG4gICAgfVxuXG4gICAgJl9faWNvbiB7XG4gICAgICAgIC5leHBhbmRlci1pY29uKCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgIH1cblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IEBudWktcmFkaXVzLWRlZmF1bHQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLm5vLXNlbGVjdCgpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQtY29sb3IsIG51aS1jb2xvci1iZy10cmFuc3BhcmVudC1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmLXRpdGxlIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBAbnVpLWxpbmUtaGVpZ2h0LWRlZmF1bHQ7XG4gICAgICAgICAgICAudGV4dC1vdmVyZmxvdyhlbGxpcHNpcyk7XG4gICAgICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsIG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pY29uIHtcbiAgICAgICAgICAgIC5leHBhbmRlci1pY29uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNvbnRlbnQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IEBudWktc3BhY2UteHM7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBAbnVpLXNwYWNlLXhzO1xuXG4gICAgICAgICAgICAmLWljb24ge1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtLXdpdGgtaWNvbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYubnVpLWV4cGFuZGVyX19oZWFkZXItLWVtcHR5IHtcbiAgICAgICAgICAgICYubnVpLWV4cGFuZGVyX19oZWFkZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubnVpLWV4cGFuZGVyX19oZWFkZXItY29udGVudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2N1c3RvbS1oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmLS1lbXB0eSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItbGVmdDogZG90dGVkIEBudWktbGluZS1tZWRpdW0gQG51aS1jb2xvci1saW5lLWRlZmF1bHQ7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBkb3R0ZWQgQG51aS1saW5lLW1lZGl1bSB2YXIoLS1udWktY29sb3ItbGluZS1kZWZhdWx0LCBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdCk7XG4gICAgICAgIGNvbG9yOiBAbnVpLWNvbG9yLWJnLWRhcms7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1udWktY29sb3ItdGV4dC1kZWZhdWx0LCAjMTExKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IChAbnVpLXNwYWNlLW1kIC0gMSk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogKEBudWktc3BhY2UtbWQgLSAxKTtcblxuICAgICAgICAmLmhpZGUtbGVmdC1ib3JkZXIge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLm5nLWFuaW1hdGluZyB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGlucy9leHBhbmRlci1iYXNlXCI7XG5cbi5udWktdHJlZSB7XG4gICAgLmV4cGFuZGVyKCk7XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgJi0tY29sbGFwc2VkIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19sZWFmIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19pbnZpc2libGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiIsIi5uby1zZWxlY3QoKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogRmlyZWZveCBhbGwgKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgIC8qIElFIDEwKyAqL1xuXG4gIC8qIE5vIHN1cHBvcnQgZm9yIHRoZXNlIHlldCwgdXNlIGF0IG93biByaXNrICovXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iLCIuc2V0Q3NzVmFyaWFibGUoQHByb3BlcnR5LCBAdmFsdWUpe1xuICAgIEBldmFsdWF0ZWQgOiBcIkB7dmFsdWV9XCI7XG4gICAgLy90aGUgZG91YmxlIEAgZm9yY2VzIGEgaW5kaXJlY3Rpb24gZXZhbHVhdGlvbiwga2luZGEgbGlrZSBhIHBvaW50ZXJcbiAgICBAZmFsbGJhY2sgOiBAQGV2YWx1YXRlZDtcblxuICAgIEB7cHJvcGVydHl9OiB+XCJ2YXIoLS1Ae3ZhbHVlfSxAe2ZhbGxiYWNrfSlcIjtcbn1cbiIsIi8vIFRleHQgb3ZlcmZsb3dcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcblxuLy8gVE9ETzogUkVNT1ZFIExFR0FDWSBCT09UU1RSQVAgTUlYSU5cbi50ZXh0LW92ZXJmbG93KCkge1xuICAudGV4dC1vdmVyZmxvdygnZWxsaXBzaXMnKTtcbn1cblxuLnRleHQtb3ZlcmZsb3coQG92ZXJmbG93KSB7XG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAtbXMtdGV4dC1vdmVyZmxvdzogQG92ZXJmbG93O1xuICAgIC1vLXRleHQtb3ZlcmZsb3c6IEBvdmVyZmxvdztcbiAgICB0ZXh0LW92ZXJmbG93OiBAb3ZlcmZsb3c7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwibnVpLWZyYW1ld29yay12YXJpYWJsZXMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGlucy5sZXNzXCI7XG5cbi8qIGZvbnQtc2l6ZSAqL1xuLm51aS10ZXh0LXNpemUoQHNpemU6IGRlZmF1bHQpIHtcbiAgICBsaW5lLWhlaWdodDogflwiQHtudWktbGluZS1oZWlnaHQtQHtzaXplfX1cIjtcbiAgICBmb250LXNpemU6IH5cIkB7bnVpLWZvbnQtc2l6ZS1Ae3NpemV9fVwiO1xufVxuLyogZm9udC1zaXplIGVuZHMgKi9cblxuLm51aS10ZXh0LXBhZ2UoKSB7XG4gICAgLm51aS10ZXh0LXNpemUoaGVybyk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbn1cblxuLm51aS10ZXh0LXdpZGdldCgpIHtcbiAgICAubnVpLXRleHQtc2l6ZShiaWcpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG59XG5cbi5udWktdGV4dC1wYW5lbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWxhYmVsKEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWRlZmF1bHQoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1zZWNvbmRhcnkoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1zbWFsbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi8vIFRoaXMgbWl4aW4gaXMgZGVwcmVjYXRlZC4gVXNlIG51aS10ZXh0LXNtYWxsKCkgaW5zdGVhZFxuLm51aS10ZXh0LWhpbnQoQGNvbG9yLCBAY29sb3JOYW1lKSAge1xuICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWhvdmVyYWJsZSgpIHtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogZG90dGVkO1xufVxuXG4ubnVpLXRleHQtc21hbGwtc2Vjb25kYXJ5KCkge1xuICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi8vc2VtYW50aWMgc3R5bGVzXG4ubnVpLXRleHQge1xuICAgICYtZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsIG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICB9XG4gICAgJi1wcm9kdWN0IHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoaGVybyk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktcm9ib3RvO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1ib2xkO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXBhZ2Uge1xuICAgICAgICAubnVpLXRleHQtcGFnZSgpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtcGFnZSgpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13aWRnZXQge1xuICAgICAgICAubnVpLXRleHQtd2lkZ2V0KCk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC13aWRnZXQoKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtcGFuZWwge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1sYWJlbCB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWludmVyc2Utc2VsZWN0ZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2JhcixudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cbiAgICAmLWRlZmF1bHQtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0tZGFya2JnLXNlbGVjdGVkIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIsbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2Jhcik7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmctc2VsZWN0ZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyLG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRpc2FibGVkLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWxpbmsge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1saW5rKTtcbiAgICB9XG4gICAgJi1saW5rOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgJi1saW5rLXNtYWxsIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpbmspO1xuICAgIH1cbiAgICAmLWxpbmstc21hbGw6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAmLXNvdXJjZS1jb2RlIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc291cmNlLWNvZGUtcHJvO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuXG4gICAgICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1zb3VyY2UtY29kZS1wcm87XG4gICAgICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi10aXRsZS1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeS0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXRpdGxlLXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zbWFsbCB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLXNlY29uZGFyeSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNtYWxsLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnkpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRpc2FibGVkIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC0tZGlzYWJsZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgLy8gYG51aS10ZXh0LWhpbnRgIHN0eWxlcyBhcmUgZGVwcmVjYXRlZC4gVXNlIGBudWktdGV4dC1zbWFsbC1zZWNvbmRhcnlgIGluc3RlYWQuXG4gICAgJi1oaW50IHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtaGludC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtaGludChAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtdmFsaWRhdGlvbiB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtY3JpdGljYWwpO1xuICAgIH1cblxuICAgICYtZWxsaXBzaXMge1xuICAgICAgICAudGV4dC1vdmVyZmxvdyhlbGxpcHNpcyk7XG4gICAgfVxufVxuXG4iXX0= */"],
        data: {
          animation: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["expand"]]
        }
      });
      /***/
    },

    /***/
    "5xwD":
    /*!*************************************************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree-checkbox-lazy/tree-checkbox-lazy.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: HttpMock, TreeCheckboxLazyComponent */

    /***/
    function xwD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpMock", function () {
        return HttpMock;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeCheckboxLazyComponent", function () {
        return TreeCheckboxLazyComponent;
      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
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
      /*! ../../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../../src/lib/icon/icon.component */
      "45Bz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../../../src/lib/spinner/spinner.component */
      "NFOm");

      function TreeCheckboxLazyComponent_cdk_nested_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-nested-tree-node", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nui-checkbox", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function TreeCheckboxLazyComponent_cdk_nested_tree_node_1_Template_nui_checkbox_valueChange_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var node_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.leafItemSelectionToggle(node_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r0.isParentNodeCheckedOn(node_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](node_r2.name);
        }
      }

      function TreeCheckboxLazyComponent_cdk_nested_tree_node_2_nui_spinner_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-spinner", 15);
        }

        if (rf & 2) {
          var node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("show", node_r5.isLoading)("delay", 0);
        }
      }

      function TreeCheckboxLazyComponent_cdk_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-nested-tree-node", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TreeCheckboxLazyComponent_cdk_nested_tree_node_2_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var node_r5 = ctx.$implicit;

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r9.loadMore(node_r5, _r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "nui-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nui-checkbox", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TreeCheckboxLazyComponent_cdk_nested_tree_node_2_Template_nui_checkbox_click_4_listener($event) {
            return $event.stopPropagation();
          })("valueChange", function TreeCheckboxLazyComponent_cdk_nested_tree_node_2_Template_nui_checkbox_valueChange_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var node_r5 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r12.branchItemSelectionToggle(node_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TreeCheckboxLazyComponent_cdk_nested_tree_node_2_nui_spinner_8_Template, 1, 2, "nui-spinner", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](9, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r5 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("icon", ctx_r1.treeControl.isExpanded(node_r5) ? "triangle-down" : "triangle-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.descendantsAllSelected(node_r5) || ctx_r1.isParentNodeCheckedOn(node_r5))("indeterminate", ctx_r1.descendantsPartiallySelected(node_r5));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", node_r5.name, " (", node_r5.length, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("nui-tree__body--collapsed", !ctx_r1.treeControl.isExpanded(node_r5));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@expandedState", ctx_r1.treeControl.isExpanded(node_r5) ? "expanded" : "collapsed");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", node_r5.isLoading);
        }
      }

      var TREE_DATA = [{
        name: "Servers",
        children: [],
        length: 3,
        isLoading: false
      }];

      var HttpMock = /*#__PURE__*/function () {
        function HttpMock() {
          _classCallCheck(this, HttpMock);
        }

        _createClass(HttpMock, [{
          key: "get",
          value: function get() {
            var res = {
              servers: [{
                name: "Microsoft Server",
                children: [],
                length: 3,
                load: "ms-servers"
              }, {
                name: "Apache Tomcat",
                children: [{
                  name: "Version 1"
                }, {
                  name: "Version 2",
                  children: [],
                  load: "apache-version-2",
                  length: 3
                }, {
                  name: "Version 3"
                }],
                length: 3,
                isLoading: false
              }, {
                name: "nginx"
              }],
              "apache-version-2": [{
                name: "1.0.5"
              }, {
                name: "2.1.4"
              }, {
                name: "8.9.0"
              }],
              "ms-servers": [{
                name: "2019"
              }, {
                name: "2017"
              }, {
                name: "2013"
              }]
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(res).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(3000));
          }
        }]);

        return HttpMock;
      }();

      HttpMock.ɵfac = function HttpMock_Factory(t) {
        return new (t || HttpMock)();
      };

      HttpMock.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: HttpMock,
        factory: HttpMock.ɵfac
      });

      var TreeCheckboxLazyComponent = /*#__PURE__*/function () {
        function TreeCheckboxLazyComponent(http, differ) {
          _classCallCheck(this, TreeCheckboxLazyComponent);

          this.http = http;
          this.differ = differ;
          this.selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true);
          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](function (node) {
            return node.children;
          });
          this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["ArrayDataSource"](TREE_DATA);

          this.hasChild = function (_, node) {
            return node.length;
          };
        }

        _createClass(TreeCheckboxLazyComponent, [{
          key: "loadMore",
          value: function loadMore(node, nestedNode) {
            var _this5 = this;

            var _a;

            var differ = this.differ.find(node.children).create();

            if (((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) === node.length || node.isLoading) {
              return;
            }

            node.isLoading = true;
            this.http.get().subscribe(function (res) {
              node.isLoading = false;
              (node === null || node === void 0 ? void 0 : node.load) ? node.children = res[node === null || node === void 0 ? void 0 : node.load] : node.children = res.servers;

              _this5.cdkTree.renderNodeChanges(node.children, differ, nestedNode.nodeOutlet.first.viewContainer, node);
            });
          }
        }, {
          key: "descendantsAllSelected",
          value: function descendantsAllSelected(node) {
            var _this6 = this;

            var descendants = this.treeControl.getDescendants(node);
            return descendants.length > 0 && descendants.every(function (child) {
              return _this6.selectionModel.isSelected(child);
            });
          }
        }, {
          key: "descendantsPartiallySelected",
          value: function descendantsPartiallySelected(node) {
            var _this7 = this;

            var descendants = this.treeControl.getDescendants(node);
            var result = descendants.some(function (child) {
              return _this7.selectionModel.isSelected(child);
            });
            return result && !this.descendantsAllSelected(node);
          }
        }, {
          key: "branchItemSelectionToggle",
          value: function branchItemSelectionToggle(node) {
            var _this$selectionModel3,
                _this$selectionModel4,
                _this8 = this;

            this.selectionModel.toggle(node);
            var descendants = this.treeControl.getDescendants(node);
            this.selectionModel.isSelected(node) ? (_this$selectionModel3 = this.selectionModel).select.apply(_this$selectionModel3, _toConsumableArray(descendants)) : (_this$selectionModel4 = this.selectionModel).deselect.apply(_this$selectionModel4, _toConsumableArray(descendants));
            descendants.forEach(function (child) {
              _this8.selectionModel.isSelected(child);
            });
            this.checkAllParentsSelection(node);
          }
        }, {
          key: "leafItemSelectionToggle",
          value: function leafItemSelectionToggle(node) {
            this.selectionModel.toggle(node);
            this.checkAllParentsSelection(node);
          }
        }, {
          key: "isParentNodeCheckedOn",
          value: function isParentNodeCheckedOn(node) {
            if (this.selectionModel.isSelected(this.getParentNode(node))) {
              this.selectionModel.select(node);
            }

            return this.selectionModel.isSelected(node);
          }
        }, {
          key: "checkAllParentsSelection",
          value: function checkAllParentsSelection(node) {
            var parent = this.getParentNode(node);

            while (parent) {
              this.checkRootNodeSelection(parent);
              parent = this.getParentNode(parent);
            }
          }
        }, {
          key: "checkRootNodeSelection",
          value: function checkRootNodeSelection(node) {
            var _this9 = this;

            var nodeSelected = this.selectionModel.isSelected(node);
            var descendants = this.treeControl.getDescendants(node);
            var descAllSelected = descendants.length > 0 && descendants.every(function (child) {
              return _this9.selectionModel.isSelected(child);
            });

            if (nodeSelected && !descAllSelected) {
              this.selectionModel.deselect(node);
            } else if (!nodeSelected && descAllSelected) {
              this.selectionModel.select(node);
            }
          }
        }, {
          key: "getParentNode",
          value: function getParentNode(node) {
            var parent;

            if (TREE_DATA.find(function (n) {
              return n === node;
            })) {
              return;
            }

            var search = function search(n) {
              if (parent || !n.children) {
                return;
              }

              if (n.children.find(function (i) {
                return i === node;
              })) {
                parent = n;
                return;
              }

              return n.children.find(search);
            };

            TREE_DATA.forEach(search);

            if (!parent) {
              throw new Error("Parent wasn't found");
            }

            return parent;
          }
        }]);

        return TreeCheckboxLazyComponent;
      }();

      TreeCheckboxLazyComponent.ɵfac = function TreeCheckboxLazyComponent_Factory(t) {
        return new (t || TreeCheckboxLazyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](HttpMock), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]));
      };

      TreeCheckboxLazyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TreeCheckboxLazyComponent,
        selectors: [["nui-tree-checkbox-lazy"]],
        viewQuery: function TreeCheckboxLazyComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cdkTree = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([HttpMock])],
        decls: 3,
        vars: 3,
        consts: [[3, "dataSource", "treeControl"], ["class", "nui-tree__leaf", 4, "cdkTreeNodeDef"], ["class", "nui-tree", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "nui-tree__leaf"], ["nui-button", "", "displayStyle", "action", "type", "button", "disabled", ""], [1, "leaf-control", 3, "checked", "valueChange"], [1, "nui-tree"], ["nestedNode", "cdkNestedTreeNode"], ["cdkTreeNodeToggle", "", 1, "nui-tree__header", 3, "click"], [1, "nui-tree__header-icon", 3, "icon"], [1, "branch-control", 3, "checked", "indeterminate", "click", "valueChange"], [1, "nui-tree__header-title"], [1, "nui-tree__body"], [3, "show", "delay", 4, "ngIf"], ["cdkTreeNodeOutlet", ""], [3, "show", "delay"]],
        template: function TreeCheckboxLazyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-tree", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TreeCheckboxLazyComponent_cdk_nested_tree_node_1_Template, 4, 2, "cdk-nested-tree-node", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TreeCheckboxLazyComponent_cdk_nested_tree_node_2_Template, 10, 9, "cdk-nested-tree-node", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkNestedTreeNode"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeToggle"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeOutlet"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"]],
        styles: [".nui-tree--expanded[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.nui-tree__icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n  margin-left: -7px;\n}\n.nui-tree__header[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 3px;\n  cursor: pointer;\n  display: flex;\n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  \n  -o-user-select: none;\n  user-select: none;\n}\n.nui-tree__header[_ngcontent-%COMP%]:hover {\n  background-color: var(--nui-color-bg-transparent-hover,rgba(17, 17, 17, 0.05));\n}\n.nui-tree__header-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  line-height: 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  color: var(--nui-color-text-default,#111);\n}\n.nui-tree__header-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-grow: 2;\n  justify-content: flex-start;\n  padding-left: 5px;\n  min-width: 0;\n  padding-right: 5px;\n}\n.nui-tree__header-content-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content--with-icon[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.nui-tree__header-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 2;\n  min-width: 0;\n  width: 100%;\n}\n.nui-tree__header.nui-expander__header--empty.nui-expander__header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.nui-tree__header.nui-expander__header--empty[_ngcontent-%COMP%]   .nui-expander__header-content[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.nui-tree__custom-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nui-tree__custom-header--empty[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n}\n.nui-tree__body[_ngcontent-%COMP%] {\n  border: none;\n  border-left: dotted 2px #d9d9d9;\n  border-left: dotted 2px var(--nui-color-line-default, #d9d9d9);\n  color: #111;\n  color: var(--nui-color-text-default, #111);\n  margin-left: 14px;\n  padding-left: 14px;\n}\n.nui-tree__body.hide-left-border[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.nui-tree__body.ng-animating[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__body--collapsed[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__leaf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nui-tree__invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2V4cGFuZGVyLWJhc2UubGVzcyIsInRyZWUtY2hlY2tib3gtbGF6eS5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL25vLXNlbGVjdC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvY3NzLXZhcmlhYmxlcy5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvdGV4dC1vdmVyZmxvdy5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9udWktZnJhbWV3b3JrLXR5cG9ncmFwaHkubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlSTtFQUNJLG1CQUFBO0FDZFI7QURpQkk7RUFiSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBU0EsaUJBQUE7QUNUUjtBRFlJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VFM0JOLHlCQUFBO0VEa0JBLDRCQUE0QjtFQ2pCNUIsc0JBQUE7RURtQkEsZ0JBQWdCO0VDbEJoQixxQkFBQTtFRG9CQSxXQUFXO0VBQ1gsOENBQThDO0VDbEI5QyxvQkFBQTtFQUNBLGlCQUFBO0FEb0JGO0FESVE7RUcxQkosOEVBQUE7QUZ5Qko7QURLUTtFSTFCSixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFFQSx1QkFBQTtFQ1JBLGlCQUFBO0VBQ0EsZUFBQTtFQTBCQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBSlFKO0FERFE7RUFuQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ3VDUjtBRE5RO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNRWjtBRE5ZO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDUWhCO0FETFk7RUFDSSxlQUFBO0FDT2hCO0FESlk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTWhCO0FERFk7RUFDSSxvQkFBQTtBQ0doQjtBRExRO0VBTVEsZUFBQTtFQUNBLGdCQUFBO0FDRWhCO0FER0k7RUFDSSxXQUFBO0FDRFI7QURHUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDRFo7QURLSTtFQUNJLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hSO0FES1E7RUFDSSxjQUFBO0FDSFo7QURNUTtFQUNJLGdCQUFBO0FDSlo7QUFwR1E7RUFDSSxnQkFBQTtBQXNHWjtBQWxHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQW9HUjtBQWpHSTtFQUNJLGFBQUE7QUFtR1IiLCJmaWxlIjoidHJlZS1jaGVja2JveC1sYXp5LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL251aS1mcmFtZXdvcmstdmFyaWFibGVzLmxlc3NcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9taXhpbnMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL251aS1mcmFtZXdvcmstdHlwb2dyYXBoeS5sZXNzXCI7XG5cbi5leHBhbmRlcigpIHtcbiAgICAuZXhwYW5kZXItaWNvbigpIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cblxuICAgICYtLWV4cGFuZGVkIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IEBudWktc3BhY2UteHM7XG4gICAgfVxuXG4gICAgJl9faWNvbiB7XG4gICAgICAgIC5leHBhbmRlci1pY29uKCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgIH1cblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IEBudWktcmFkaXVzLWRlZmF1bHQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLm5vLXNlbGVjdCgpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQtY29sb3IsIG51aS1jb2xvci1iZy10cmFuc3BhcmVudC1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmLXRpdGxlIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBAbnVpLWxpbmUtaGVpZ2h0LWRlZmF1bHQ7XG4gICAgICAgICAgICAudGV4dC1vdmVyZmxvdyhlbGxpcHNpcyk7XG4gICAgICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsIG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pY29uIHtcbiAgICAgICAgICAgIC5leHBhbmRlci1pY29uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNvbnRlbnQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IEBudWktc3BhY2UteHM7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBAbnVpLXNwYWNlLXhzO1xuXG4gICAgICAgICAgICAmLWljb24ge1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtLXdpdGgtaWNvbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYubnVpLWV4cGFuZGVyX19oZWFkZXItLWVtcHR5IHtcbiAgICAgICAgICAgICYubnVpLWV4cGFuZGVyX19oZWFkZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubnVpLWV4cGFuZGVyX19oZWFkZXItY29udGVudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2N1c3RvbS1oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmLS1lbXB0eSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItbGVmdDogZG90dGVkIEBudWktbGluZS1tZWRpdW0gQG51aS1jb2xvci1saW5lLWRlZmF1bHQ7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBkb3R0ZWQgQG51aS1saW5lLW1lZGl1bSB2YXIoLS1udWktY29sb3ItbGluZS1kZWZhdWx0LCBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdCk7XG4gICAgICAgIGNvbG9yOiBAbnVpLWNvbG9yLWJnLWRhcms7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1udWktY29sb3ItdGV4dC1kZWZhdWx0LCAjMTExKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IChAbnVpLXNwYWNlLW1kIC0gMSk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogKEBudWktc3BhY2UtbWQgLSAxKTtcblxuICAgICAgICAmLmhpZGUtbGVmdC1ib3JkZXIge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLm5nLWFuaW1hdGluZyB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGlucy9leHBhbmRlci1iYXNlXCI7XG5cbi5udWktdHJlZSB7XG4gICAgLmV4cGFuZGVyKCk7XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgJi0tY29sbGFwc2VkIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19sZWFmIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19pbnZpc2libGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiIsIi5uby1zZWxlY3QoKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogRmlyZWZveCBhbGwgKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgIC8qIElFIDEwKyAqL1xuXG4gIC8qIE5vIHN1cHBvcnQgZm9yIHRoZXNlIHlldCwgdXNlIGF0IG93biByaXNrICovXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iLCIuc2V0Q3NzVmFyaWFibGUoQHByb3BlcnR5LCBAdmFsdWUpe1xuICAgIEBldmFsdWF0ZWQgOiBcIkB7dmFsdWV9XCI7XG4gICAgLy90aGUgZG91YmxlIEAgZm9yY2VzIGEgaW5kaXJlY3Rpb24gZXZhbHVhdGlvbiwga2luZGEgbGlrZSBhIHBvaW50ZXJcbiAgICBAZmFsbGJhY2sgOiBAQGV2YWx1YXRlZDtcblxuICAgIEB7cHJvcGVydHl9OiB+XCJ2YXIoLS1Ae3ZhbHVlfSxAe2ZhbGxiYWNrfSlcIjtcbn1cbiIsIi8vIFRleHQgb3ZlcmZsb3dcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcblxuLy8gVE9ETzogUkVNT1ZFIExFR0FDWSBCT09UU1RSQVAgTUlYSU5cbi50ZXh0LW92ZXJmbG93KCkge1xuICAudGV4dC1vdmVyZmxvdygnZWxsaXBzaXMnKTtcbn1cblxuLnRleHQtb3ZlcmZsb3coQG92ZXJmbG93KSB7XG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAtbXMtdGV4dC1vdmVyZmxvdzogQG92ZXJmbG93O1xuICAgIC1vLXRleHQtb3ZlcmZsb3c6IEBvdmVyZmxvdztcbiAgICB0ZXh0LW92ZXJmbG93OiBAb3ZlcmZsb3c7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwibnVpLWZyYW1ld29yay12YXJpYWJsZXMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGlucy5sZXNzXCI7XG5cbi8qIGZvbnQtc2l6ZSAqL1xuLm51aS10ZXh0LXNpemUoQHNpemU6IGRlZmF1bHQpIHtcbiAgICBsaW5lLWhlaWdodDogflwiQHtudWktbGluZS1oZWlnaHQtQHtzaXplfX1cIjtcbiAgICBmb250LXNpemU6IH5cIkB7bnVpLWZvbnQtc2l6ZS1Ae3NpemV9fVwiO1xufVxuLyogZm9udC1zaXplIGVuZHMgKi9cblxuLm51aS10ZXh0LXBhZ2UoKSB7XG4gICAgLm51aS10ZXh0LXNpemUoaGVybyk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbn1cblxuLm51aS10ZXh0LXdpZGdldCgpIHtcbiAgICAubnVpLXRleHQtc2l6ZShiaWcpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG59XG5cbi5udWktdGV4dC1wYW5lbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWxhYmVsKEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWRlZmF1bHQoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1zZWNvbmRhcnkoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1zbWFsbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi8vIFRoaXMgbWl4aW4gaXMgZGVwcmVjYXRlZC4gVXNlIG51aS10ZXh0LXNtYWxsKCkgaW5zdGVhZFxuLm51aS10ZXh0LWhpbnQoQGNvbG9yLCBAY29sb3JOYW1lKSAge1xuICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWhvdmVyYWJsZSgpIHtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogZG90dGVkO1xufVxuXG4ubnVpLXRleHQtc21hbGwtc2Vjb25kYXJ5KCkge1xuICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi8vc2VtYW50aWMgc3R5bGVzXG4ubnVpLXRleHQge1xuICAgICYtZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsIG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICB9XG4gICAgJi1wcm9kdWN0IHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoaGVybyk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktcm9ib3RvO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1ib2xkO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXBhZ2Uge1xuICAgICAgICAubnVpLXRleHQtcGFnZSgpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtcGFnZSgpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13aWRnZXQge1xuICAgICAgICAubnVpLXRleHQtd2lkZ2V0KCk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC13aWRnZXQoKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtcGFuZWwge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1sYWJlbCB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWludmVyc2Utc2VsZWN0ZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2JhcixudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cbiAgICAmLWRlZmF1bHQtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0tZGFya2JnLXNlbGVjdGVkIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIsbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2Jhcik7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmctc2VsZWN0ZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyLG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRpc2FibGVkLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWxpbmsge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1saW5rKTtcbiAgICB9XG4gICAgJi1saW5rOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgJi1saW5rLXNtYWxsIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpbmspO1xuICAgIH1cbiAgICAmLWxpbmstc21hbGw6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAmLXNvdXJjZS1jb2RlIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc291cmNlLWNvZGUtcHJvO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuXG4gICAgICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1zb3VyY2UtY29kZS1wcm87XG4gICAgICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi10aXRsZS1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeS0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXRpdGxlLXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zbWFsbCB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLXNlY29uZGFyeSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNtYWxsLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnkpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRpc2FibGVkIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC0tZGlzYWJsZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgLy8gYG51aS10ZXh0LWhpbnRgIHN0eWxlcyBhcmUgZGVwcmVjYXRlZC4gVXNlIGBudWktdGV4dC1zbWFsbC1zZWNvbmRhcnlgIGluc3RlYWQuXG4gICAgJi1oaW50IHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtaGludC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtaGludChAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtdmFsaWRhdGlvbiB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtY3JpdGljYWwpO1xuICAgIH1cblxuICAgICYtZWxsaXBzaXMge1xuICAgICAgICAudGV4dC1vdmVyZmxvdyhlbGxpcHNpcyk7XG4gICAgfVxufVxuXG4iXX0= */"],
        data: {
          animation: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["expand"]]
        }
      });
      /***/
    },

    /***/
    "8JvN":
    /*!*********************************************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree-visual-test/tree-visual-test.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: TreeVisualTestComponent */

    /***/
    function JvN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeVisualTestComponent", function () {
        return TreeVisualTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _tree_basic_test_tree_basic_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tree-basic-test/tree-basic-test.component */
      "obwz");
      /* harmony import */


      var _tree_checkbox_test_tree_checkbox_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tree-checkbox-test/tree-checkbox-test.component */
      "5DdY");
      /* harmony import */


      var _tree_paginator_test_tree_paginator_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tree-paginator-test/tree-paginator-test.component */
      "DSKd");

      var TreeVisualTestComponent = function TreeVisualTestComponent() {
        _classCallCheck(this, TreeVisualTestComponent);
      };

      TreeVisualTestComponent.ɵfac = function TreeVisualTestComponent_Factory(t) {
        return new (t || TreeVisualTestComponent)();
      };

      TreeVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TreeVisualTestComponent,
        selectors: [["nui-tree-visual-test"]],
        decls: 8,
        vars: 0,
        consts: [[1, "container"], [1, "row"], [1, "col"]],
        template: function TreeVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-tree-basic-test");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-tree-checkbox-test");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nui-tree-paginator-test");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_tree_basic_test_tree_basic_test_component__WEBPACK_IMPORTED_MODULE_1__["TreeBasicTestComponent"], _tree_checkbox_test_tree_checkbox_test_component__WEBPACK_IMPORTED_MODULE_2__["TreeCheckboxTestComponent"], _tree_paginator_test_tree_paginator_test_component__WEBPACK_IMPORTED_MODULE_3__["TreePaginatorTestComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "DSKd":
    /*!********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree-visual-test/tree-paginator-test/tree-paginator-test.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: TreePaginatorTestComponent */

    /***/
    function DSKd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreePaginatorTestComponent", function () {
        return TreePaginatorTestComponent;
      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../data */
      "EsWI");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../../../src/lib/icon/icon.component */
      "45Bz");
      /* harmony import */


      var _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../../../src/lib/busy/busy.component */
      "3XPh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../../../src/lib/paginator/paginator.component */
      "4E9B");

      function TreePaginatorTestComponent_cdk_nested_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-nested-tree-node", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", node_r2.name, ", fromPage: ", node_r2.page, " ");
        }
      }

      function TreePaginatorTestComponent_cdk_nested_tree_node_2_nui_paginator_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-paginator", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pagerAction", function TreePaginatorTestComponent_cdk_nested_tree_node_2_nui_paginator_9_Template_nui_paginator_pagerAction_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.loadNodeItems(node_r3, _r4, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "nui-tree-paginator-component-" + node_r3.name.toLowerCase())("page", 1)("pageSize", ctx_r5.pageSize)("total", ctx_r5.nodesTotalItems[node_r3.name]);
        }
      }

      function TreePaginatorTestComponent_cdk_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-nested-tree-node", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TreePaginatorTestComponent_cdk_nested_tree_node_2_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var node_r3 = ctx.$implicit;

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10.onToggleClick(node_r3, _r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "nui-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TreePaginatorTestComponent_cdk_nested_tree_node_2_Template_div_click_7_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](8, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TreePaginatorTestComponent_cdk_nested_tree_node_2_nui_paginator_9_Template, 1, 4, "nui-paginator", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("icon", ctx_r1.treeControl.isExpanded(node_r3) ? "triangle-down" : "triangle-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](node_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("nui-tree__body--collapsed", !ctx_r1.treeControl.isExpanded(node_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@expandedState", ctx_r1.treeControl.isExpanded(node_r3) ? "expanded" : "collapsed");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("busy", node_r3.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", node_r3.hasPagination && ctx_r1.nodesTotalItems[node_r3.name]);
        }
      }

      var TreePaginatorTestComponent = /*#__PURE__*/function () {
        function TreePaginatorTestComponent(http, differ, eventBusService) {
          _classCallCheck(this, TreePaginatorTestComponent);

          this.http = http;
          this.differ = differ;
          this.eventBusService = eventBusService;
          this.pageSize = 10; // used for 'nui-paginator'

          this.nodesTotalItems = {};
          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](function (node) {
            return node.children;
          });
          this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["ArrayDataSource"](_data__WEBPACK_IMPORTED_MODULE_4__["TREE_DATA_PAGINATOR"]);

          this.hasChild = function (_, node) {
            return node.children;
          };
        }
        /** Load first page on first open */


        _createClass(TreePaginatorTestComponent, [{
          key: "onToggleClick",
          value: function onToggleClick(node, nestedNode) {
            this.eventBusService.getStream({
              id: "document-click"
            }).next();

            if (node.hasPagination && node.children && !node.children.length) {
              var paginatorOptions = {
                page: 1,
                pageSize: this.pageSize
              };
              this.loadNodeItems(node, nestedNode, paginatorOptions);
            }
          }
        }, {
          key: "loadNodeItems",
          value: function loadNodeItems(node, nestedNodeDirective, paginatorOptions) {
            var _this10 = this;

            if (node.isLoading) {
              return;
            }

            node.isLoading = true;
            this.http.getNodeItems(node.name, paginatorOptions.page, paginatorOptions.pageSize).subscribe(function (res) {
              _this10.handleNodeTotalItems(node.name, res.total);

              _this10.handleNodeContent(node, nestedNodeDirective, res.items);

              node.isLoading = false;
            });
          }
        }, {
          key: "handleNodeTotalItems",
          value: function handleNodeTotalItems(nodeId, totalItems) {
            this.nodesTotalItems[nodeId] = totalItems;
          }
        }, {
          key: "handleNodeContent",
          value: function handleNodeContent(node, nestedNodeDirective, items) {
            node.children = [];
            var differ = this.differ.find(node.children).create();
            node.children = items; // clear previously rendered leaf nodes

            nestedNodeDirective.nodeOutlet.first.viewContainer.clear();
            this.cdkTree.renderNodeChanges(node.children, differ, nestedNodeDirective.nodeOutlet.first.viewContainer, node);
          }
        }]);

        return TreePaginatorTestComponent;
      }();

      TreePaginatorTestComponent.ɵfac = function TreePaginatorTestComponent_Factory(t) {
        return new (t || TreePaginatorTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data__WEBPACK_IMPORTED_MODULE_4__["HttpMock"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["EventBusService"]));
      };

      TreePaginatorTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TreePaginatorTestComponent,
        selectors: [["nui-tree-paginator-test"]],
        viewQuery: function TreePaginatorTestComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cdkTree = _t.first);
          }
        },
        hostAttrs: ["id", "nui-tree-paginator-example"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_data__WEBPACK_IMPORTED_MODULE_4__["HttpMock"]])],
        decls: 3,
        vars: 4,
        consts: [[3, "dataSource", "treeControl"], ["class", "nui-tree__leaf", 4, "cdkTreeNodeDef"], ["class", "nui-tree", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "nui-tree__leaf"], ["nui-button", "", "displayStyle", "action", "type", "button", "disabled", ""], [1, "nui-tree"], ["nestedNode", "cdkNestedTreeNode"], ["cdkTreeNodeToggle", "", 1, "nui-tree__header", 3, "click"], [1, "nui-tree__header-icon", 3, "icon"], [1, "nui-tree__header-title"], [1, "nui-tree__body"], ["nui-busy", "", 2, "min-height", "20px", 3, "busy", "click"], ["cdkTreeNodeOutlet", ""], [3, "id", "page", "pageSize", "total", "pagerAction", 4, "ngIf"], [3, "id", "page", "pageSize", "total", "pagerAction"]],
        template: function TreePaginatorTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-tree", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TreePaginatorTestComponent_cdk_nested_tree_node_1_Template, 3, 2, "cdk-nested-tree-node", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TreePaginatorTestComponent_cdk_nested_tree_node_2_Template, 10, 7, "cdk-nested-tree-node", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@.disabled", true)("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkNestedTreeNode"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeToggle"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_7__["BusyComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_9__["PaginatorComponent"]],
        styles: [".nui-tree--expanded[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.nui-tree__icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n  margin-left: -7px;\n}\n.nui-tree__header[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 3px;\n  cursor: pointer;\n  display: flex;\n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  \n  -o-user-select: none;\n  user-select: none;\n}\n.nui-tree__header[_ngcontent-%COMP%]:hover {\n  background-color: var(--nui-color-bg-transparent-hover,rgba(17, 17, 17, 0.05));\n}\n.nui-tree__header-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  line-height: 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  color: var(--nui-color-text-default,#111);\n}\n.nui-tree__header-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-grow: 2;\n  justify-content: flex-start;\n  padding-left: 5px;\n  min-width: 0;\n  padding-right: 5px;\n}\n.nui-tree__header-content-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content--with-icon[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.nui-tree__header-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 2;\n  min-width: 0;\n  width: 100%;\n}\n.nui-tree__header.nui-expander__header--empty.nui-expander__header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.nui-tree__header.nui-expander__header--empty[_ngcontent-%COMP%]   .nui-expander__header-content[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.nui-tree__custom-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nui-tree__custom-header--empty[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n}\n.nui-tree__body[_ngcontent-%COMP%] {\n  border: none;\n  border-left: dotted 2px #d9d9d9;\n  border-left: dotted 2px var(--nui-color-line-default, #d9d9d9);\n  color: #111;\n  color: var(--nui-color-text-default, #111);\n  margin-left: 14px;\n  padding-left: 14px;\n}\n.nui-tree__body.hide-left-border[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.nui-tree__body.ng-animating[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__body--collapsed[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__leaf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nui-tree__invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n.nui-tree[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  min-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2V4cGFuZGVyLWJhc2UubGVzcyIsInRyZWUtcGFnaW5hdG9yLXRlc3QuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9uby1zZWxlY3QubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2Nzcy12YXJpYWJsZXMubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL3RleHQtb3ZlcmZsb3cubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbnVpLWZyYW1ld29yay10eXBvZ3JhcGh5Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUk7RUFDSSxtQkFBQTtBQ2RSO0FEaUJJO0VBYkksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQVNBLGlCQUFBO0FDVFI7QURZSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFRTNCTix5QkFBQTtFRGtCQSw0QkFBNEI7RUNqQjVCLHNCQUFBO0VEbUJBLGdCQUFnQjtFQ2xCaEIscUJBQUE7RURvQkEsV0FBVztFQUNYLDhDQUE4QztFQ2xCOUMsb0JBQUE7RUFDQSxpQkFBQTtBRG9CRjtBRElRO0VHMUJKLDhFQUFBO0FGeUJKO0FES1E7RUkxQkosbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBRUEsdUJBQUE7RUNSQSxpQkFBQTtFQUNBLGVBQUE7RUEwQkEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUpRSjtBRERRO0VBbkNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUN1Q1I7QUROUTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUVo7QUROWTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ1FoQjtBRExZO0VBQ0ksZUFBQTtBQ09oQjtBREpZO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ01oQjtBRERZO0VBQ0ksb0JBQUE7QUNHaEI7QURMUTtFQU1RLGVBQUE7RUFDQSxnQkFBQTtBQ0VoQjtBREdJO0VBQ0ksV0FBQTtBQ0RSO0FER1E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0RaO0FES0k7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSw4REFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNIUjtBREtRO0VBQ0ksY0FBQTtBQ0haO0FETVE7RUFDSSxnQkFBQTtBQ0paO0FBcEdRO0VBQ0ksZ0JBQUE7QUFzR1o7QUFsR0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFvR1I7QUFqR0k7RUFDSSxhQUFBO0FBbUdSO0FBbEhBO0VBbUJRLGdCQUFBO0FBa0dSIiwiZmlsZSI6InRyZWUtcGFnaW5hdG9yLXRlc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vbnVpLWZyYW1ld29yay12YXJpYWJsZXMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL21peGlucy5sZXNzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vbnVpLWZyYW1ld29yay10eXBvZ3JhcGh5Lmxlc3NcIjtcblxuLmV4cGFuZGVyKCkge1xuICAgIC5leHBhbmRlci1pY29uKCkge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxuXG4gICAgJi0tZXhwYW5kZWQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogQG51aS1zcGFjZS14cztcbiAgICB9XG5cbiAgICAmX19pY29uIHtcbiAgICAgICAgLmV4cGFuZGVyLWljb24oKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gICAgfVxuXG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQG51aS1yYWRpdXMtZGVmYXVsdDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAubm8tc2VsZWN0KCk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYmFja2dyb3VuZC1jb2xvciwgbnVpLWNvbG9yLWJnLXRyYW5zcGFyZW50LWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtdGl0bGUge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IEBudWktbGluZS1oZWlnaHQtZGVmYXVsdDtcbiAgICAgICAgICAgIC50ZXh0LW92ZXJmbG93KGVsbGlwc2lzKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCwgbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWljb24ge1xuICAgICAgICAgICAgLmV4cGFuZGVyLWljb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtY29udGVudCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogQG51aS1zcGFjZS14cztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IEBudWktc3BhY2UteHM7XG5cbiAgICAgICAgICAgICYtaWNvbiB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi0td2l0aC1pY29uIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5udWktZXhwYW5kZXJfX2hlYWRlci0tZW1wdHkge1xuICAgICAgICAgICAgJi5udWktZXhwYW5kZXJfX2hlYWRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5udWktZXhwYW5kZXJfX2hlYWRlci1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fY3VzdG9tLWhlYWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYtLWVtcHR5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2JvZHkge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBkb3R0ZWQgQG51aS1saW5lLW1lZGl1bSBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IGRvdHRlZCBAbnVpLWxpbmUtbWVkaXVtIHZhcigtLW51aS1jb2xvci1saW5lLWRlZmF1bHQsIEBudWktY29sb3ItbGluZS1kZWZhdWx0KTtcbiAgICAgICAgY29sb3I6IEBudWktY29sb3ItYmctZGFyaztcbiAgICAgICAgY29sb3I6IHZhcigtLW51aS1jb2xvci10ZXh0LWRlZmF1bHQsICMxMTEpO1xuICAgICAgICBtYXJnaW4tbGVmdDogKEBudWktc3BhY2UtbWQgLSAxKTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAoQG51aS1zcGFjZS1tZCAtIDEpO1xuXG4gICAgICAgICYuaGlkZS1sZWZ0LWJvcmRlciB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYubmctYW5pbWF0aW5nIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwibWl4aW5zL2V4cGFuZGVyLWJhc2VcIjtcblxuLm51aS10cmVlIHtcbiAgICAuZXhwYW5kZXIoKTtcblxuICAgICZfX2JvZHkge1xuICAgICAgICAmLS1jb2xsYXBzZWQge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2xlYWYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICZfX2ludmlzaWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICB9XG59XG4iLCIubm8tc2VsZWN0KCkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAgLyogQ2hyb21lIGFsbCAvIFNhZmFyaSBhbGwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIEZpcmVmb3ggYWxsICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgICAvKiBJRSAxMCsgKi9cblxuICAvKiBObyBzdXBwb3J0IGZvciB0aGVzZSB5ZXQsIHVzZSBhdCBvd24gcmlzayAqL1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59IiwiLnNldENzc1ZhcmlhYmxlKEBwcm9wZXJ0eSwgQHZhbHVlKXtcbiAgICBAZXZhbHVhdGVkIDogXCJAe3ZhbHVlfVwiO1xuICAgIC8vdGhlIGRvdWJsZSBAIGZvcmNlcyBhIGluZGlyZWN0aW9uIGV2YWx1YXRpb24sIGtpbmRhIGxpa2UgYSBwb2ludGVyXG4gICAgQGZhbGxiYWNrIDogQEBldmFsdWF0ZWQ7XG5cbiAgICBAe3Byb3BlcnR5fTogflwidmFyKC0tQHt2YWx1ZX0sQHtmYWxsYmFja30pXCI7XG59XG4iLCIvLyBUZXh0IG92ZXJmbG93XG4vLyBSZXF1aXJlcyBpbmxpbmUtYmxvY2sgb3IgYmxvY2sgZm9yIHByb3BlciBzdHlsaW5nXG5cbi8vIFRPRE86IFJFTU9WRSBMRUdBQ1kgQk9PVFNUUkFQIE1JWElOXG4udGV4dC1vdmVyZmxvdygpIHtcbiAgLnRleHQtb3ZlcmZsb3coJ2VsbGlwc2lzJyk7XG59XG5cbi50ZXh0LW92ZXJmbG93KEBvdmVyZmxvdykge1xuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgLW1zLXRleHQtb3ZlcmZsb3c6IEBvdmVyZmxvdztcbiAgICAtby10ZXh0LW92ZXJmbG93OiBAb3ZlcmZsb3c7XG4gICAgdGV4dC1vdmVyZmxvdzogQG92ZXJmbG93O1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSBcIm51aS1mcmFtZXdvcmstdmFyaWFibGVzLmxlc3NcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJtaXhpbnMubGVzc1wiO1xuXG4vKiBmb250LXNpemUgKi9cbi5udWktdGV4dC1zaXplKEBzaXplOiBkZWZhdWx0KSB7XG4gICAgbGluZS1oZWlnaHQ6IH5cIkB7bnVpLWxpbmUtaGVpZ2h0LUB7c2l6ZX19XCI7XG4gICAgZm9udC1zaXplOiB+XCJAe251aS1mb250LXNpemUtQHtzaXplfX1cIjtcbn1cbi8qIGZvbnQtc2l6ZSBlbmRzICovXG5cbi5udWktdGV4dC1wYWdlKCkge1xuICAgIC5udWktdGV4dC1zaXplKGhlcm8pO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG59XG5cbi5udWktdGV4dC13aWRnZXQoKSB7XG4gICAgLm51aS10ZXh0LXNpemUoYmlnKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xufVxuXG4ubnVpLXRleHQtcGFuZWwoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1sYWJlbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1kZWZhdWx0KEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtc2Vjb25kYXJ5KEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtc21hbGwoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4vLyBUaGlzIG1peGluIGlzIGRlcHJlY2F0ZWQuIFVzZSBudWktdGV4dC1zbWFsbCgpIGluc3RlYWRcbi5udWktdGV4dC1oaW50KEBjb2xvciwgQGNvbG9yTmFtZSkgIHtcbiAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1ob3ZlcmFibGUoKSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IGRvdHRlZDtcbn1cblxuLm51aS10ZXh0LXNtYWxsLXNlY29uZGFyeSgpIHtcbiAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4vL3NlbWFudGljIHN0eWxlc1xuLm51aS10ZXh0IHtcbiAgICAmLWRpc2FibGVkIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWRpc2FibGVkLCBudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuICAgICYtcHJvZHVjdCB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKGhlcm8pO1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXJvYm90bztcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtYm9sZDtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuXG4gICAgJi1wYWdlIHtcbiAgICAgICAgLm51aS10ZXh0LXBhZ2UoKTtcblxuICAgICAgICAmLS1ob3ZlcmFibGUge1xuICAgICAgICAgICAgLm51aS10ZXh0LXBhZ2UoKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtd2lkZ2V0IHtcbiAgICAgICAgLm51aS10ZXh0LXdpZGdldCgpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtd2lkZ2V0KCk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXBhbmVsIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgIH1cblxuICAgICYtcGFuZWwtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtbGFiZWwge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1sYWJlbC0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0IHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1pbnZlcnNlLXNlbGVjdGVkIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIsbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2Jhcik7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG4gICAgJi1kZWZhdWx0LS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWRhcmtiZy1zZWxlY3RlZCB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyLG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0tZGFya2JnLXNlbGVjdGVkLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2JhcixudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyKTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRpc2FibGVkIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1kaXNhYmxlZC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1saW5rIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtbGluayk7XG4gICAgfVxuICAgICYtbGluazpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgICYtbGluay1zbWFsbCB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1saW5rKTtcbiAgICB9XG4gICAgJi1saW5rLXNtYWxsOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgJi1zb3VyY2UtY29kZSB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXNvdXJjZS1jb2RlLXBybztcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcblxuICAgICAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc291cmNlLWNvZGUtcHJvO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICAgICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtdGl0bGUtc2Vjb25kYXJ5IHtcbiAgICAgICAgLm51aS10ZXh0LXRpdGxlLXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi10aXRsZS1zZWNvbmRhcnktLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi10aXRsZS1zZWNvbmRhcnktLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtc21hbGwge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1zbWFsbC1zZWNvbmRhcnktLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcblxuICAgICAgICAmLS1ob3ZlcmFibGUge1xuICAgICAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNtYWxsLS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNtYWxsLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LCBudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LCBudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kaXNhYmxlZCB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRpc2FibGVkLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWRpc2FibGVkLG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgIC8vIGBudWktdGV4dC1oaW50YCBzdHlsZXMgYXJlIGRlcHJlY2F0ZWQuIFVzZSBgbnVpLXRleHQtc21hbGwtc2Vjb25kYXJ5YCBpbnN0ZWFkLlxuICAgICYtaGludCB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLWhpbnQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtaGludC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtaGludC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtaGludChAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXZhbGlkYXRpb24ge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWNyaXRpY2FsKTtcbiAgICB9XG5cbiAgICAmLWVsbGlwc2lzIHtcbiAgICAgICAgLnRleHQtb3ZlcmZsb3coZWxsaXBzaXMpO1xuICAgIH1cbn1cblxuIl19 */"],
        data: {
          animation: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["expand"]]
        }
      });
      /***/
    },

    /***/
    "EsWI":
    /*!***********************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree-visual-test/data.ts ***!
      \***********************************************************************/

    /*! exports provided: HttpMock, TREE_DATA_PAGINATOR, TREE_DATA, TREE_DATA_CHECKBOX */

    /***/
    function EsWI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpMock", function () {
        return HttpMock;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TREE_DATA_PAGINATOR", function () {
        return TREE_DATA_PAGINATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TREE_DATA", function () {
        return TREE_DATA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TREE_DATA_CHECKBOX", function () {
        return TREE_DATA_CHECKBOX;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HttpMock = /*#__PURE__*/function () {
        function HttpMock() {
          _classCallCheck(this, HttpMock);

          this.fruitsList = [$localize(_templateObject || (_templateObject = _taggedTemplateLiteral(["apple"]))), $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["orange"]))), $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["banana"]))), $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["watermelon"]))), $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["peach"]))), $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["pineapple"]))), $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["lemon"]))), $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["mango"])))];
          this.vegetablesList = [$localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["tomato"]))), $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["cucumber"]))), $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["cabbage"]))), $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["pepper"]))), $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["carrot"]))), $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["onion"]))), $localize(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["broccoli"]))), $localize(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["corn"])))];
          this.totalItems = 1337;
        }

        _createClass(HttpMock, [{
          key: "getNodeItems",
          value: function getNodeItems(nodeId, page, pageSize) {
            // nodeId can be handled on API depending on app needs
            var itemList = nodeId === "Vegetables" ? this.vegetablesList : this.fruitsList;
            var totalItemList = this.getTotalItemList(itemList, this.totalItems / itemList.length);
            var items = Array.from({
              length: pageSize
            }).map(function (i, ind) {
              return {
                name: totalItemList[ind],
                page: page
              };
            });
            var response = {
              items: items,
              total: this.totalItems
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(response).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000));
          }
        }, {
          key: "getTotalItemList",
          value: function getTotalItemList(list, times) {
            var totalArray = [];

            for (var i = 0; i < times; i++) {
              totalArray.push.apply(totalArray, _toConsumableArray(list));
            }

            return totalArray;
          }
        }]);

        return HttpMock;
      }();

      HttpMock.ɵfac = function HttpMock_Factory(t) {
        return new (t || HttpMock)();
      };

      HttpMock.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: HttpMock,
        factory: HttpMock.ɵfac
      });
      var TREE_DATA_PAGINATOR = [{
        name: "Food",
        children: [{
          name: "Vegetables",
          children: [],
          hasPagination: true
        }, {
          name: "Fruits",
          children: [],
          hasPagination: true
        }]
      }];
      var TREE_DATA = [{
        name: "Fruit",
        children: [{
          name: "Apple"
        }, {
          name: "Banana"
        }, {
          name: "Fruit loops"
        }]
      }, {
        name: "Vegetables",
        children: [{
          name: "Green",
          children: [{
            name: "Broccoli"
          }, {
            name: "Brussels sprouts"
          }]
        }, {
          name: "Orange",
          children: [{
            name: "Pumpkins"
          }, {
            name: "Carrots"
          }]
        }, {
          name: "Red"
        }]
      }, {
        name: "Meat"
      }];
      var TREE_DATA_CHECKBOX = [{
        name: "Vegetables",
        children: [{
          name: "Green",
          children: [{
            name: "Broccoli"
          }, {
            name: "Brussels sprouts"
          }]
        }, {
          name: "Orange",
          children: [{
            name: "Pumpkins"
          }, {
            name: "Carrots"
          }]
        }, {
          name: "Red"
        }]
      }, {
        name: "Fruit",
        children: [{
          name: "Apple"
        }, {
          name: "Banana"
        }, {
          name: "Fruit loops"
        }]
      }, {
        name: "Meat"
      }];
      /***/
    },

    /***/
    "GKkx":
    /*!*********************************************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree-styling/tree-styling.example.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: TreeStylingExampleComponent */

    /***/
    function GKkx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeStylingExampleComponent", function () {
        return TreeStylingExampleComponent;
      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../../src/lib/icon/icon.component */
      "45Bz");

      function TreeStylingExampleComponent_cdk_nested_tree_node_1_nui_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nui-icon", 6);
        }

        if (rf & 2) {
          var node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", node_r2.icon);
        }
      }

      function TreeStylingExampleComponent_cdk_nested_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "cdk-nested-tree-node", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TreeStylingExampleComponent_cdk_nested_tree_node_1_nui_icon_2_Template, 1, 1, "nui-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", node_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](node_r2.textStyle || ctx_r0.textStyles.DEFAULT);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](node_r2.name);
        }
      }

      function TreeStylingExampleComponent_cdk_nested_tree_node_2_nui_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nui-icon", 6);
        }

        if (rf & 2) {
          var node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", node_r5.icon);
        }
      }

      function TreeStylingExampleComponent_cdk_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "cdk-nested-tree-node", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "nui-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TreeStylingExampleComponent_cdk_nested_tree_node_2_nui_icon_3_Template, 1, 1, "nui-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](5, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](7, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r5 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("icon", ctx_r1.treeControl.isExpanded(node_r5) ? "triangle-down" : "triangle-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", node_r5.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("nui-tree__header-title ", node_r5.textStyle || ctx_r1.textStyles.LABEL, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nExp"](node_r5.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nApply"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("nui-tree__body--collapsed", !ctx_r1.treeControl.isExpanded(node_r5));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@expandedState", ctx_r1.treeControl.isExpanded(node_r5) ? "expanded" : "collapsed");
        }
      }

      var TextStyle;

      (function (TextStyle) {
        TextStyle["DEFAULT"] = "nui-text-default";
        TextStyle["SECONDARY"] = "nui-text-secondary";
        TextStyle["LABEL"] = "nui-text-label";
      })(TextStyle || (TextStyle = {}));

      var TREE_DATA = [{
        name: "Custom Icons",
        textStyle: "default",
        icon: "email",
        children: [{
          name: "Apple",
          icon: "move-down"
        }, {
          name: "Carambola",
          icon: "add"
        }, {
          name: "Grapefruit",
          icon: "schedule"
        }]
      }, {
        name: "Custom Text Styles",
        textStyle: TextStyle.SECONDARY,
        children: [{
          name: "Green",
          textStyle: TextStyle.DEFAULT,
          children: [{
            name: "Broccoli",
            textStyle: TextStyle.LABEL
          }, {
            name: "Brussels sprouts",
            textStyle: TextStyle.SECONDARY
          }]
        }, {
          name: "Orange",
          children: [{
            name: "Pumpkins"
          }, {
            name: "Carrots",
            textStyle: TextStyle.SECONDARY
          }]
        }, {
          name: "Red",
          textStyle: TextStyle.LABEL
        }]
      }];

      var TreeStylingExampleComponent = function TreeStylingExampleComponent() {
        _classCallCheck(this, TreeStylingExampleComponent);

        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](function (node) {
          return node.children;
        });
        this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["ArrayDataSource"](TREE_DATA);
        this.textStyles = TextStyle;

        this.hasChild = function (_, node) {
          return !!node.children && node.children.length > 0;
        };
      };

      TreeStylingExampleComponent.ɵfac = function TreeStylingExampleComponent_Factory(t) {
        return new (t || TreeStylingExampleComponent)();
      };

      TreeStylingExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: TreeStylingExampleComponent,
        selectors: [["nui-tree-styling-example"]],
        decls: 3,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9111365073789757157$$DEMO_SRC_COMPONENTS_DEMO_COMMON_TREE_TREE_STYLING_TREE_STYLING_EXAMPLE_COMPONENT_TS__1 = goog.getMsg("{$interpolation}", {
              "interpolation": "\uFFFD0\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_9111365073789757157$$DEMO_SRC_COMPONENTS_DEMO_COMMON_TREE_TREE_STYLING_TREE_STYLING_EXAMPLE_COMPONENT_TS__1;
          } else {
            i18n_0 = $localize(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral([":\u241F59335f58b601c446d924ec54fbb134e2259cd544\u241F9111365073789757157:", ":INTERPOLATION:"])), "\uFFFD0\uFFFD");
          }

          return [[3, "dataSource", "treeControl"], ["class", "nui-tree__leaf", 4, "cdkTreeNodeDef"], ["class", "nui-tree", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "nui-tree__leaf"], ["nui-button", "", "displayStyle", "action", "type", "button", "disabled", ""], ["class", "nui-tree__icon", 3, "icon", 4, "ngIf"], [1, "nui-tree__icon", 3, "icon"], [1, "nui-tree"], ["cdkTreeNodeToggle", "", 1, "nui-tree__header"], [1, "nui-tree__header-icon", 3, "icon"], i18n_0, [1, "nui-tree__body"], ["cdkTreeNodeOutlet", ""]];
        },
        template: function TreeStylingExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "cdk-tree", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TreeStylingExampleComponent_cdk_nested_tree_node_1_Template, 5, 5, "cdk-nested-tree-node", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TreeStylingExampleComponent_cdk_nested_tree_node_2_Template, 8, 9, "cdk-nested-tree-node", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkNestedTreeNode"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeToggle"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeOutlet"]],
        styles: [".nui-tree--expanded[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.nui-tree__icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n  margin-left: -7px;\n}\n.nui-tree__header[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 3px;\n  cursor: pointer;\n  display: flex;\n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  \n  -o-user-select: none;\n  user-select: none;\n}\n.nui-tree__header[_ngcontent-%COMP%]:hover {\n  background-color: var(--nui-color-bg-transparent-hover,rgba(17, 17, 17, 0.05));\n}\n.nui-tree__header-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  line-height: 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  color: var(--nui-color-text-default,#111);\n}\n.nui-tree__header-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-grow: 2;\n  justify-content: flex-start;\n  padding-left: 5px;\n  min-width: 0;\n  padding-right: 5px;\n}\n.nui-tree__header-content-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content--with-icon[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.nui-tree__header-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 2;\n  min-width: 0;\n  width: 100%;\n}\n.nui-tree__header.nui-expander__header--empty.nui-expander__header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.nui-tree__header.nui-expander__header--empty[_ngcontent-%COMP%]   .nui-expander__header-content[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.nui-tree__custom-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nui-tree__custom-header--empty[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n}\n.nui-tree__body[_ngcontent-%COMP%] {\n  border: none;\n  border-left: dotted 2px #d9d9d9;\n  border-left: dotted 2px var(--nui-color-line-default, #d9d9d9);\n  color: #111;\n  color: var(--nui-color-text-default, #111);\n  margin-left: 14px;\n  padding-left: 14px;\n}\n.nui-tree__body.hide-left-border[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.nui-tree__body.ng-animating[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__body--collapsed[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__leaf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nui-tree__invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2V4cGFuZGVyLWJhc2UubGVzcyIsInRyZWUtc3R5bGluZy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvbm8tc2VsZWN0Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9jc3MtdmFyaWFibGVzLmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy90ZXh0LW92ZXJmbG93Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL251aS1mcmFtZXdvcmstdHlwb2dyYXBoeS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVJO0VBQ0ksbUJBQUE7QUNkUjtBRGlCSTtFQWJJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFTQSxpQkFBQTtBQ1RSO0FEWUk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUUzQk4seUJBQUE7RURrQkEsNEJBQTRCO0VDakI1QixzQkFBQTtFRG1CQSxnQkFBZ0I7RUNsQmhCLHFCQUFBO0VEb0JBLFdBQVc7RUFDWCw4Q0FBOEM7RUNsQjlDLG9CQUFBO0VBQ0EsaUJBQUE7QURvQkY7QURJUTtFRzFCSiw4RUFBQTtBRnlCSjtBREtRO0VJMUJKLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUVBLHVCQUFBO0VDUkEsaUJBQUE7RUFDQSxlQUFBO0VBMEJBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FKUUo7QUREUTtFQW5DQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDdUNSO0FETlE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1FaO0FETlk7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNRaEI7QURMWTtFQUNJLGVBQUE7QUNPaEI7QURKWTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNNaEI7QUREWTtFQUNJLG9CQUFBO0FDR2hCO0FETFE7RUFNUSxlQUFBO0VBQ0EsZ0JBQUE7QUNFaEI7QURHSTtFQUNJLFdBQUE7QUNEUjtBREdRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNEWjtBREtJO0VBQ0ksWUFBQTtFQUNBLCtCQUFBO0VBQ0EsOERBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSFI7QURLUTtFQUNJLGNBQUE7QUNIWjtBRE1RO0VBQ0ksZ0JBQUE7QUNKWjtBQXBHUTtFQUNJLGdCQUFBO0FBc0daO0FBbEdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBb0dSO0FBakdJO0VBQ0ksYUFBQTtBQW1HUiIsImZpbGUiOiJ0cmVlLXN0eWxpbmcuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9udWktZnJhbWV3b3JrLXZhcmlhYmxlcy5sZXNzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vbWl4aW5zLmxlc3NcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9udWktZnJhbWV3b3JrLXR5cG9ncmFwaHkubGVzc1wiO1xuXG4uZXhwYW5kZXIoKSB7XG4gICAgLmV4cGFuZGVyLWljb24oKSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICB9XG5cbiAgICAmLS1leHBhbmRlZCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBAbnVpLXNwYWNlLXhzO1xuICAgIH1cblxuICAgICZfX2ljb24ge1xuICAgICAgICAuZXhwYW5kZXItaWNvbigpO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICB9XG5cbiAgICAmX19oZWFkZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBAbnVpLXJhZGl1cy1kZWZhdWx0O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC5uby1zZWxlY3QoKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIC5zZXRDc3NWYXJpYWJsZShiYWNrZ3JvdW5kLWNvbG9yLCBudWktY29sb3ItYmctdHJhbnNwYXJlbnQtaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi10aXRsZSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogQG51aS1saW5lLWhlaWdodC1kZWZhdWx0O1xuICAgICAgICAgICAgLnRleHQtb3ZlcmZsb3coZWxsaXBzaXMpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LCBudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaWNvbiB7XG4gICAgICAgICAgICAuZXhwYW5kZXItaWNvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1jb250ZW50IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBAbnVpLXNwYWNlLXhzO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogQG51aS1zcGFjZS14cztcblxuICAgICAgICAgICAgJi1pY29uIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLS13aXRoLWljb24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLm51aS1leHBhbmRlcl9faGVhZGVyLS1lbXB0eSB7XG4gICAgICAgICAgICAmLm51aS1leHBhbmRlcl9faGVhZGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm51aS1leHBhbmRlcl9faGVhZGVyLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jdXN0b20taGVhZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJi0tZW1wdHkge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYm9keSB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IGRvdHRlZCBAbnVpLWxpbmUtbWVkaXVtIEBudWktY29sb3ItbGluZS1kZWZhdWx0O1xuICAgICAgICBib3JkZXItbGVmdDogZG90dGVkIEBudWktbGluZS1tZWRpdW0gdmFyKC0tbnVpLWNvbG9yLWxpbmUtZGVmYXVsdCwgQG51aS1jb2xvci1saW5lLWRlZmF1bHQpO1xuICAgICAgICBjb2xvcjogQG51aS1jb2xvci1iZy1kYXJrO1xuICAgICAgICBjb2xvcjogdmFyKC0tbnVpLWNvbG9yLXRleHQtZGVmYXVsdCwgIzExMSk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAoQG51aS1zcGFjZS1tZCAtIDEpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IChAbnVpLXNwYWNlLW1kIC0gMSk7XG5cbiAgICAgICAgJi5oaWRlLWxlZnQtYm9yZGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5uZy1hbmltYXRpbmcge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJtaXhpbnMvZXhwYW5kZXItYmFzZVwiO1xuXG4ubnVpLXRyZWUge1xuICAgIC5leHBhbmRlcigpO1xuXG4gICAgJl9fYm9keSB7XG4gICAgICAgICYtLWNvbGxhcHNlZCB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fbGVhZiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9faW52aXNpYmxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iLCIubm8tc2VsZWN0KCkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAgLyogQ2hyb21lIGFsbCAvIFNhZmFyaSBhbGwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIEZpcmVmb3ggYWxsICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgICAvKiBJRSAxMCsgKi9cblxuICAvKiBObyBzdXBwb3J0IGZvciB0aGVzZSB5ZXQsIHVzZSBhdCBvd24gcmlzayAqL1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59IiwiLnNldENzc1ZhcmlhYmxlKEBwcm9wZXJ0eSwgQHZhbHVlKXtcbiAgICBAZXZhbHVhdGVkIDogXCJAe3ZhbHVlfVwiO1xuICAgIC8vdGhlIGRvdWJsZSBAIGZvcmNlcyBhIGluZGlyZWN0aW9uIGV2YWx1YXRpb24sIGtpbmRhIGxpa2UgYSBwb2ludGVyXG4gICAgQGZhbGxiYWNrIDogQEBldmFsdWF0ZWQ7XG5cbiAgICBAe3Byb3BlcnR5fTogflwidmFyKC0tQHt2YWx1ZX0sQHtmYWxsYmFja30pXCI7XG59XG4iLCIvLyBUZXh0IG92ZXJmbG93XG4vLyBSZXF1aXJlcyBpbmxpbmUtYmxvY2sgb3IgYmxvY2sgZm9yIHByb3BlciBzdHlsaW5nXG5cbi8vIFRPRE86IFJFTU9WRSBMRUdBQ1kgQk9PVFNUUkFQIE1JWElOXG4udGV4dC1vdmVyZmxvdygpIHtcbiAgLnRleHQtb3ZlcmZsb3coJ2VsbGlwc2lzJyk7XG59XG5cbi50ZXh0LW92ZXJmbG93KEBvdmVyZmxvdykge1xuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgLW1zLXRleHQtb3ZlcmZsb3c6IEBvdmVyZmxvdztcbiAgICAtby10ZXh0LW92ZXJmbG93OiBAb3ZlcmZsb3c7XG4gICAgdGV4dC1vdmVyZmxvdzogQG92ZXJmbG93O1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSBcIm51aS1mcmFtZXdvcmstdmFyaWFibGVzLmxlc3NcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJtaXhpbnMubGVzc1wiO1xuXG4vKiBmb250LXNpemUgKi9cbi5udWktdGV4dC1zaXplKEBzaXplOiBkZWZhdWx0KSB7XG4gICAgbGluZS1oZWlnaHQ6IH5cIkB7bnVpLWxpbmUtaGVpZ2h0LUB7c2l6ZX19XCI7XG4gICAgZm9udC1zaXplOiB+XCJAe251aS1mb250LXNpemUtQHtzaXplfX1cIjtcbn1cbi8qIGZvbnQtc2l6ZSBlbmRzICovXG5cbi5udWktdGV4dC1wYWdlKCkge1xuICAgIC5udWktdGV4dC1zaXplKGhlcm8pO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG59XG5cbi5udWktdGV4dC13aWRnZXQoKSB7XG4gICAgLm51aS10ZXh0LXNpemUoYmlnKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xufVxuXG4ubnVpLXRleHQtcGFuZWwoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1sYWJlbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1kZWZhdWx0KEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtc2Vjb25kYXJ5KEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtc21hbGwoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4vLyBUaGlzIG1peGluIGlzIGRlcHJlY2F0ZWQuIFVzZSBudWktdGV4dC1zbWFsbCgpIGluc3RlYWRcbi5udWktdGV4dC1oaW50KEBjb2xvciwgQGNvbG9yTmFtZSkgIHtcbiAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1ob3ZlcmFibGUoKSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IGRvdHRlZDtcbn1cblxuLm51aS10ZXh0LXNtYWxsLXNlY29uZGFyeSgpIHtcbiAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4vL3NlbWFudGljIHN0eWxlc1xuLm51aS10ZXh0IHtcbiAgICAmLWRpc2FibGVkIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWRpc2FibGVkLCBudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuICAgICYtcHJvZHVjdCB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKGhlcm8pO1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXJvYm90bztcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtYm9sZDtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuXG4gICAgJi1wYWdlIHtcbiAgICAgICAgLm51aS10ZXh0LXBhZ2UoKTtcblxuICAgICAgICAmLS1ob3ZlcmFibGUge1xuICAgICAgICAgICAgLm51aS10ZXh0LXBhZ2UoKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtd2lkZ2V0IHtcbiAgICAgICAgLm51aS10ZXh0LXdpZGdldCgpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtd2lkZ2V0KCk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXBhbmVsIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgIH1cblxuICAgICYtcGFuZWwtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtbGFiZWwge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1sYWJlbC0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0IHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1pbnZlcnNlLXNlbGVjdGVkIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIsbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2Jhcik7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG4gICAgJi1kZWZhdWx0LS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWRhcmtiZy1zZWxlY3RlZCB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyLG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0tZGFya2JnLXNlbGVjdGVkLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2JhcixudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyKTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRpc2FibGVkIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1kaXNhYmxlZC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1saW5rIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtbGluayk7XG4gICAgfVxuICAgICYtbGluazpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgICYtbGluay1zbWFsbCB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1saW5rKTtcbiAgICB9XG4gICAgJi1saW5rLXNtYWxsOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgJi1zb3VyY2UtY29kZSB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXNvdXJjZS1jb2RlLXBybztcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcblxuICAgICAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc291cmNlLWNvZGUtcHJvO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICAgICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtdGl0bGUtc2Vjb25kYXJ5IHtcbiAgICAgICAgLm51aS10ZXh0LXRpdGxlLXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi10aXRsZS1zZWNvbmRhcnktLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi10aXRsZS1zZWNvbmRhcnktLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtc21hbGwge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1zbWFsbC1zZWNvbmRhcnktLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcblxuICAgICAgICAmLS1ob3ZlcmFibGUge1xuICAgICAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNtYWxsLS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNtYWxsLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LCBudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LCBudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kaXNhYmxlZCB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRpc2FibGVkLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWRpc2FibGVkLG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgIC8vIGBudWktdGV4dC1oaW50YCBzdHlsZXMgYXJlIGRlcHJlY2F0ZWQuIFVzZSBgbnVpLXRleHQtc21hbGwtc2Vjb25kYXJ5YCBpbnN0ZWFkLlxuICAgICYtaGludCB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLWhpbnQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtaGludC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtaGludC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtaGludChAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXZhbGlkYXRpb24ge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWNyaXRpY2FsKTtcbiAgICB9XG5cbiAgICAmLWVsbGlwc2lzIHtcbiAgICAgICAgLnRleHQtb3ZlcmZsb3coZWxsaXBzaXMpO1xuICAgIH1cbn1cblxuIl19 */"],
        data: {
          animation: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["expand"]]
        }
      });
      /***/
    },

    /***/
    "ItIQ":
    /*!**************************************************************************************************************!*\
      !*** ./demo/src/components/demo/common/tree sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \**************************************************************************************************************/

    /*! no static exports found */

    /***/
    function ItIQ(module, exports, __webpack_require__) {
      var map = {
        "./http-mock.service.ts": "aGgG",
        "./index.ts": "SMDe",
        "./tree-basic/tree-basic.example.component.html": "G8qU",
        "./tree-basic/tree-basic.example.component.less": "fsYv",
        "./tree-basic/tree-basic.example.component.ts": "qflF",
        "./tree-checkbox-lazy/tree-checkbox-lazy.component.html": "wGmj",
        "./tree-checkbox-lazy/tree-checkbox-lazy.component.less": "xPtD",
        "./tree-checkbox-lazy/tree-checkbox-lazy.component.ts": "J12e",
        "./tree-checkbox/tree-checkbox.example.component.html": "BU2E",
        "./tree-checkbox/tree-checkbox.example.component.less": "OPUk",
        "./tree-checkbox/tree-checkbox.example.component.ts": "aH8u",
        "./tree-docs/tree-docs.example.component.html": "5XLM",
        "./tree-docs/tree-docs.example.component.ts": "c4wz",
        "./tree-lazy/tree-lazy.component.example.less": "u/ue",
        "./tree-lazy/tree-lazy.example.component.html": "0pxp",
        "./tree-lazy/tree-lazy.example.component.ts": "L9Zh",
        "./tree-leaf-pagination/tree-leaf-pagination.component.example.less": "8NeV",
        "./tree-leaf-pagination/tree-leaf-pagination.example.component.html": "bE6u",
        "./tree-leaf-pagination/tree-leaf-pagination.example.component.ts": "3M5X",
        "./tree-load-more/tree-load-more.component.example.less": "dER6",
        "./tree-load-more/tree-load-more.example.component.html": "4odw",
        "./tree-load-more/tree-load-more.example.component.ts": "4zoD",
        "./tree-show-all-dialog/tree-show-all-dialog.component.example.less": "f+jd",
        "./tree-show-all-dialog/tree-show-all-dialog.example.component.html": "ik8z",
        "./tree-show-all-dialog/tree-show-all-dialog.example.component.ts": "0q3D",
        "./tree-styling/tree-styling.example.component.html": "DY+K",
        "./tree-styling/tree-styling.example.component.less": "irwK",
        "./tree-styling/tree-styling.example.component.ts": "Je5P",
        "./tree-visual-test/data.ts": "Gh8Q",
        "./tree-visual-test/tree-basic-test/tree-basic-test.component.html": "scDb",
        "./tree-visual-test/tree-basic-test/tree-basic-test.component.less": "lzqP",
        "./tree-visual-test/tree-basic-test/tree-basic-test.component.ts": "Hzex",
        "./tree-visual-test/tree-checkbox-test/tree-checkbox-test.component.html": "qw8G",
        "./tree-visual-test/tree-checkbox-test/tree-checkbox-test.component.less": "f1Ap",
        "./tree-visual-test/tree-checkbox-test/tree-checkbox-test.component.ts": "TOWG",
        "./tree-visual-test/tree-paginator-test/tree-paginator-test.component.html": "objm",
        "./tree-visual-test/tree-paginator-test/tree-paginator-test.component.less": "kio+",
        "./tree-visual-test/tree-paginator-test/tree-paginator-test.component.ts": "vKNe",
        "./tree-visual-test/tree-visual-test.component.html": "c751",
        "./tree-visual-test/tree-visual-test.component.ts": "Vx+0",
        "./tree-with-additional-content/tree-with-additional-content.example.component.html": "h/rE",
        "./tree-with-additional-content/tree-with-additional-content.example.component.less": "dMrx",
        "./tree-with-additional-content/tree-with-additional-content.example.component.ts": "ulVr",
        "./tree.module.ts": "7IbH"
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
      webpackContext.id = "ItIQ";
      /***/
    },

    /***/
    "JGyy":
    /*!*************************************************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree-load-more/tree-load-more.example.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: TreeLoadMoreExampleComponent */

    /***/
    function JGyy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeLoadMoreExampleComponent", function () {
        return TreeLoadMoreExampleComponent;
      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _http_mock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../http-mock.service */
      "o3LO");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../../src/lib/icon/icon.component */
      "45Bz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../../src/lib/spinner/spinner.component */
      "NFOm");

      function TreeLoadMoreExampleComponent_cdk_nested_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-nested-tree-node", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", node_r2.name, ", fromPage: ", node_r2.page, " ");
        }
      }

      function TreeLoadMoreExampleComponent_cdk_nested_tree_node_2_div_8_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TreeLoadMoreExampleComponent_cdk_nested_tree_node_2_div_8_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.loadMoreItems(node_r3, _r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Load another ", ctx_r6.pageSize, " (of ", ctx_r6.remainingItemsCount[node_r3.name], ")");
        }
      }

      function TreeLoadMoreExampleComponent_cdk_nested_tree_node_2_div_8_nui_spinner_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-spinner", 16);
        }

        if (rf & 2) {
          var node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("show", node_r3.isLoading)("delay", 0);
        }
      }

      function TreeLoadMoreExampleComponent_cdk_nested_tree_node_2_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TreeLoadMoreExampleComponent_cdk_nested_tree_node_2_div_8_a_2_Template, 2, 2, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TreeLoadMoreExampleComponent_cdk_nested_tree_node_2_div_8_nui_spinner_3_Template, 1, 2, "nui-spinner", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !node_r3.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", node_r3.isLoading);
        }
      }

      function TreeLoadMoreExampleComponent_cdk_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-nested-tree-node", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TreeLoadMoreExampleComponent_cdk_nested_tree_node_2_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

            var node_r3 = ctx.$implicit;

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r14.onToggleClick(node_r3, _r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "nui-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](7, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TreeLoadMoreExampleComponent_cdk_nested_tree_node_2_div_8_Template, 4, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("icon", ctx_r1.treeControl.isExpanded(node_r3) ? "triangle-down" : "triangle-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](node_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("nui-tree__body--collapsed", !ctx_r1.treeControl.isExpanded(node_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@expandedState", ctx_r1.treeControl.isExpanded(node_r3) ? "expanded" : "collapsed");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", node_r3.hasPagination);
        }
      }

      var TREE_DATA = [{
        name: "Food",
        children: [{
          name: "Vegetables",
          children: [],
          page: 1,
          hasPagination: true
        }, {
          name: "Fruits",
          children: [],
          page: 1,
          hasPagination: true
        }]
      }];

      var TreeLoadMoreExampleComponent = /*#__PURE__*/function () {
        function TreeLoadMoreExampleComponent(http, differ, eventBusService) {
          _classCallCheck(this, TreeLoadMoreExampleComponent);

          this.http = http;
          this.differ = differ;
          this.eventBusService = eventBusService;
          this.pageSize = 10;
          this.remainingItemsCount = {};
          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](function (node) {
            return node.children;
          });
          this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["ArrayDataSource"](TREE_DATA);

          this.hasChild = function (_, node) {
            return node.children;
          };
        }
        /** Load first page on first open */


        _createClass(TreeLoadMoreExampleComponent, [{
          key: "onToggleClick",
          value: function onToggleClick(node, nestedNode) {
            this.eventBusService.getStream({
              id: "document-click"
            }).next(new MouseEvent("click"));

            if (node.hasPagination && node.children && !node.children.length) {
              node.page = 1;
              this.loadMoreItems(node, nestedNode);
            }
          }
        }, {
          key: "loadMoreItems",
          value: function loadMoreItems(node, nestedNodeDirective) {
            var _this11 = this;

            if (node.isLoading) {
              return;
            }

            node.isLoading = true;
            var page = node.page ? node.page++ : 1;
            this.http.getNodeItems(node.name, page, this.pageSize).subscribe(function (res) {
              _this11.setRemainingItemsCount(node, res.total);

              _this11.handleNodeContent(node, nestedNodeDirective, res.items);

              node.isLoading = false;
            });
          }
        }, {
          key: "setRemainingItemsCount",
          value: function setRemainingItemsCount(node, totalItems) {
            var _a;

            this.remainingItemsCount[node.name] = node.children ? totalItems - ((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) : totalItems;
          }
        }, {
          key: "handleNodeContent",
          value: function handleNodeContent(node, nestedNodeDirective, items) {
            var _a2;

            var _a;

            var differ = this.differ.find(node.children).create();
            (_a = node.children) === null || _a === void 0 ? void 0 : (_a2 = _a).push.apply(_a2, _toConsumableArray(items)); // clear previously rendered leaf nodes

            nestedNodeDirective.nodeOutlet.first.viewContainer.clear();
            this.cdkTree.renderNodeChanges(node.children || [], differ, nestedNodeDirective.nodeOutlet.first.viewContainer, node);
          }
        }]);

        return TreeLoadMoreExampleComponent;
      }();

      TreeLoadMoreExampleComponent.ɵfac = function TreeLoadMoreExampleComponent_Factory(t) {
        return new (t || TreeLoadMoreExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_http_mock_service__WEBPACK_IMPORTED_MODULE_4__["HttpMockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["EventBusService"]));
      };

      TreeLoadMoreExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TreeLoadMoreExampleComponent,
        selectors: [["nui-tree-load-more-example"]],
        viewQuery: function TreeLoadMoreExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cdkTree = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_http_mock_service__WEBPACK_IMPORTED_MODULE_4__["HttpMockService"]])],
        decls: 3,
        vars: 3,
        consts: [[3, "dataSource", "treeControl"], ["class", "nui-tree__leaf", 4, "cdkTreeNodeDef"], ["class", "nui-tree", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "nui-tree__leaf"], ["nui-button", "", "displayStyle", "action", "type", "button", "disabled", ""], [1, "nui-tree"], ["nestedNode", "cdkNestedTreeNode"], ["cdkTreeNodeToggle", "", 1, "nui-tree__header", 3, "click"], [1, "nui-tree__header-icon", 3, "icon"], [1, "nui-tree__header-title"], [1, "nui-tree__body"], ["cdkTreeNodeOutlet", ""], [4, "ngIf"], [3, "click", 4, "ngIf"], [3, "show", "delay", 4, "ngIf"], [3, "click"], [3, "show", "delay"]],
        template: function TreeLoadMoreExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-tree", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TreeLoadMoreExampleComponent_cdk_nested_tree_node_1_Template, 3, 2, "cdk-nested-tree-node", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TreeLoadMoreExampleComponent_cdk_nested_tree_node_2_Template, 9, 6, "cdk-nested-tree-node", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkNestedTreeNode"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeToggle"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"]],
        styles: [".nui-tree--expanded[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.nui-tree__icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n  margin-left: -7px;\n}\n.nui-tree__header[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 3px;\n  cursor: pointer;\n  display: flex;\n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  \n  -o-user-select: none;\n  user-select: none;\n}\n.nui-tree__header[_ngcontent-%COMP%]:hover {\n  background-color: var(--nui-color-bg-transparent-hover,rgba(17, 17, 17, 0.05));\n}\n.nui-tree__header-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  line-height: 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  color: var(--nui-color-text-default,#111);\n}\n.nui-tree__header-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-grow: 2;\n  justify-content: flex-start;\n  padding-left: 5px;\n  min-width: 0;\n  padding-right: 5px;\n}\n.nui-tree__header-content-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content--with-icon[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.nui-tree__header-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 2;\n  min-width: 0;\n  width: 100%;\n}\n.nui-tree__header.nui-expander__header--empty.nui-expander__header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.nui-tree__header.nui-expander__header--empty[_ngcontent-%COMP%]   .nui-expander__header-content[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.nui-tree__custom-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nui-tree__custom-header--empty[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n}\n.nui-tree__body[_ngcontent-%COMP%] {\n  border: none;\n  border-left: dotted 2px #d9d9d9;\n  border-left: dotted 2px var(--nui-color-line-default, #d9d9d9);\n  color: #111;\n  color: var(--nui-color-text-default, #111);\n  margin-left: 14px;\n  padding-left: 14px;\n}\n.nui-tree__body.hide-left-border[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.nui-tree__body.ng-animating[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__body--collapsed[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  cursor: pointer;\n}\n.nui-tree__leaf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nui-tree__invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n.nui-tree[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  min-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2V4cGFuZGVyLWJhc2UubGVzcyIsInRyZWUtbG9hZC1tb3JlLmNvbXBvbmVudC5leGFtcGxlLmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9uby1zZWxlY3QubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2Nzcy12YXJpYWJsZXMubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL3RleHQtb3ZlcmZsb3cubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbnVpLWZyYW1ld29yay10eXBvZ3JhcGh5Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUk7RUFDSSxtQkFBQTtBQ2RSO0FEaUJJO0VBYkksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQVNBLGlCQUFBO0FDVFI7QURZSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFRTNCTix5QkFBQTtFRGtCQSw0QkFBNEI7RUNqQjVCLHNCQUFBO0VEbUJBLGdCQUFnQjtFQ2xCaEIscUJBQUE7RURvQkEsV0FBVztFQUNYLDhDQUE4QztFQ2xCOUMsb0JBQUE7RUFDQSxpQkFBQTtBRG9CRjtBRElRO0VHMUJKLDhFQUFBO0FGeUJKO0FES1E7RUkxQkosbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBRUEsdUJBQUE7RUNSQSxpQkFBQTtFQUNBLGVBQUE7RUEwQkEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUpRSjtBRERRO0VBbkNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUN1Q1I7QUROUTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUVo7QUROWTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ1FoQjtBRExZO0VBQ0ksZUFBQTtBQ09oQjtBREpZO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ01oQjtBRERZO0VBQ0ksb0JBQUE7QUNHaEI7QURMUTtFQU1RLGVBQUE7RUFDQSxnQkFBQTtBQ0VoQjtBREdJO0VBQ0ksV0FBQTtBQ0RSO0FER1E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0RaO0FES0k7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSw4REFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNIUjtBREtRO0VBQ0ksY0FBQTtBQ0haO0FETVE7RUFDSSxnQkFBQTtBQ0paO0FBcEdRO0VBQ0ksZ0JBQUE7QUFzR1o7QUF4R0k7RUFNUSxxQkFBQTtFQUNBLGVBQUE7QUFxR1o7QUFqR0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFtR1I7QUFoR0k7RUFDSSxhQUFBO0FBa0dSO0FBdEhBO0VBd0JRLGdCQUFBO0FBaUdSIiwiZmlsZSI6InRyZWUtbG9hZC1tb3JlLmNvbXBvbmVudC5leGFtcGxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vbnVpLWZyYW1ld29yay12YXJpYWJsZXMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL21peGlucy5sZXNzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vbnVpLWZyYW1ld29yay10eXBvZ3JhcGh5Lmxlc3NcIjtcblxuLmV4cGFuZGVyKCkge1xuICAgIC5leHBhbmRlci1pY29uKCkge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxuXG4gICAgJi0tZXhwYW5kZWQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogQG51aS1zcGFjZS14cztcbiAgICB9XG5cbiAgICAmX19pY29uIHtcbiAgICAgICAgLmV4cGFuZGVyLWljb24oKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gICAgfVxuXG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQG51aS1yYWRpdXMtZGVmYXVsdDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAubm8tc2VsZWN0KCk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYmFja2dyb3VuZC1jb2xvciwgbnVpLWNvbG9yLWJnLXRyYW5zcGFyZW50LWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtdGl0bGUge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IEBudWktbGluZS1oZWlnaHQtZGVmYXVsdDtcbiAgICAgICAgICAgIC50ZXh0LW92ZXJmbG93KGVsbGlwc2lzKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCwgbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWljb24ge1xuICAgICAgICAgICAgLmV4cGFuZGVyLWljb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtY29udGVudCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogQG51aS1zcGFjZS14cztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IEBudWktc3BhY2UteHM7XG5cbiAgICAgICAgICAgICYtaWNvbiB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi0td2l0aC1pY29uIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5udWktZXhwYW5kZXJfX2hlYWRlci0tZW1wdHkge1xuICAgICAgICAgICAgJi5udWktZXhwYW5kZXJfX2hlYWRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5udWktZXhwYW5kZXJfX2hlYWRlci1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fY3VzdG9tLWhlYWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYtLWVtcHR5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2JvZHkge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBkb3R0ZWQgQG51aS1saW5lLW1lZGl1bSBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IGRvdHRlZCBAbnVpLWxpbmUtbWVkaXVtIHZhcigtLW51aS1jb2xvci1saW5lLWRlZmF1bHQsIEBudWktY29sb3ItbGluZS1kZWZhdWx0KTtcbiAgICAgICAgY29sb3I6IEBudWktY29sb3ItYmctZGFyaztcbiAgICAgICAgY29sb3I6IHZhcigtLW51aS1jb2xvci10ZXh0LWRlZmF1bHQsICMxMTEpO1xuICAgICAgICBtYXJnaW4tbGVmdDogKEBudWktc3BhY2UtbWQgLSAxKTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAoQG51aS1zcGFjZS1tZCAtIDEpO1xuXG4gICAgICAgICYuaGlkZS1sZWZ0LWJvcmRlciB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYubmctYW5pbWF0aW5nIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwibWl4aW5zL2V4cGFuZGVyLWJhc2VcIjtcblxuLm51aS10cmVlIHtcbiAgICAuZXhwYW5kZXIoKTtcblxuICAgICZfX2JvZHkge1xuICAgICAgICAmLS1jb2xsYXBzZWQge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fbGVhZiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9faW52aXNpYmxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIH1cbn1cbiIsIi5uby1zZWxlY3QoKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogRmlyZWZveCBhbGwgKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgIC8qIElFIDEwKyAqL1xuXG4gIC8qIE5vIHN1cHBvcnQgZm9yIHRoZXNlIHlldCwgdXNlIGF0IG93biByaXNrICovXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iLCIuc2V0Q3NzVmFyaWFibGUoQHByb3BlcnR5LCBAdmFsdWUpe1xuICAgIEBldmFsdWF0ZWQgOiBcIkB7dmFsdWV9XCI7XG4gICAgLy90aGUgZG91YmxlIEAgZm9yY2VzIGEgaW5kaXJlY3Rpb24gZXZhbHVhdGlvbiwga2luZGEgbGlrZSBhIHBvaW50ZXJcbiAgICBAZmFsbGJhY2sgOiBAQGV2YWx1YXRlZDtcblxuICAgIEB7cHJvcGVydHl9OiB+XCJ2YXIoLS1Ae3ZhbHVlfSxAe2ZhbGxiYWNrfSlcIjtcbn1cbiIsIi8vIFRleHQgb3ZlcmZsb3dcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcblxuLy8gVE9ETzogUkVNT1ZFIExFR0FDWSBCT09UU1RSQVAgTUlYSU5cbi50ZXh0LW92ZXJmbG93KCkge1xuICAudGV4dC1vdmVyZmxvdygnZWxsaXBzaXMnKTtcbn1cblxuLnRleHQtb3ZlcmZsb3coQG92ZXJmbG93KSB7XG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAtbXMtdGV4dC1vdmVyZmxvdzogQG92ZXJmbG93O1xuICAgIC1vLXRleHQtb3ZlcmZsb3c6IEBvdmVyZmxvdztcbiAgICB0ZXh0LW92ZXJmbG93OiBAb3ZlcmZsb3c7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwibnVpLWZyYW1ld29yay12YXJpYWJsZXMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGlucy5sZXNzXCI7XG5cbi8qIGZvbnQtc2l6ZSAqL1xuLm51aS10ZXh0LXNpemUoQHNpemU6IGRlZmF1bHQpIHtcbiAgICBsaW5lLWhlaWdodDogflwiQHtudWktbGluZS1oZWlnaHQtQHtzaXplfX1cIjtcbiAgICBmb250LXNpemU6IH5cIkB7bnVpLWZvbnQtc2l6ZS1Ae3NpemV9fVwiO1xufVxuLyogZm9udC1zaXplIGVuZHMgKi9cblxuLm51aS10ZXh0LXBhZ2UoKSB7XG4gICAgLm51aS10ZXh0LXNpemUoaGVybyk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbn1cblxuLm51aS10ZXh0LXdpZGdldCgpIHtcbiAgICAubnVpLXRleHQtc2l6ZShiaWcpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG59XG5cbi5udWktdGV4dC1wYW5lbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWxhYmVsKEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWRlZmF1bHQoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1zZWNvbmRhcnkoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1zbWFsbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi8vIFRoaXMgbWl4aW4gaXMgZGVwcmVjYXRlZC4gVXNlIG51aS10ZXh0LXNtYWxsKCkgaW5zdGVhZFxuLm51aS10ZXh0LWhpbnQoQGNvbG9yLCBAY29sb3JOYW1lKSAge1xuICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWhvdmVyYWJsZSgpIHtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogZG90dGVkO1xufVxuXG4ubnVpLXRleHQtc21hbGwtc2Vjb25kYXJ5KCkge1xuICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi8vc2VtYW50aWMgc3R5bGVzXG4ubnVpLXRleHQge1xuICAgICYtZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsIG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICB9XG4gICAgJi1wcm9kdWN0IHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoaGVybyk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktcm9ib3RvO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1ib2xkO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXBhZ2Uge1xuICAgICAgICAubnVpLXRleHQtcGFnZSgpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtcGFnZSgpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13aWRnZXQge1xuICAgICAgICAubnVpLXRleHQtd2lkZ2V0KCk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC13aWRnZXQoKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtcGFuZWwge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1sYWJlbCB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWludmVyc2Utc2VsZWN0ZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2JhcixudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cbiAgICAmLWRlZmF1bHQtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0tZGFya2JnLXNlbGVjdGVkIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIsbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2Jhcik7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmctc2VsZWN0ZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyLG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRpc2FibGVkLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWxpbmsge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1saW5rKTtcbiAgICB9XG4gICAgJi1saW5rOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgJi1saW5rLXNtYWxsIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpbmspO1xuICAgIH1cbiAgICAmLWxpbmstc21hbGw6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAmLXNvdXJjZS1jb2RlIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc291cmNlLWNvZGUtcHJvO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuXG4gICAgICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1zb3VyY2UtY29kZS1wcm87XG4gICAgICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi10aXRsZS1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeS0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXRpdGxlLXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zbWFsbCB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLXNlY29uZGFyeSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNtYWxsLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnkpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRpc2FibGVkIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC0tZGlzYWJsZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgLy8gYG51aS10ZXh0LWhpbnRgIHN0eWxlcyBhcmUgZGVwcmVjYXRlZC4gVXNlIGBudWktdGV4dC1zbWFsbC1zZWNvbmRhcnlgIGluc3RlYWQuXG4gICAgJi1oaW50IHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtaGludC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtaGludChAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtdmFsaWRhdGlvbiB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtY3JpdGljYWwpO1xuICAgIH1cblxuICAgICYtZWxsaXBzaXMge1xuICAgICAgICAudGV4dC1vdmVyZmxvdyhlbGxpcHNpcyk7XG4gICAgfVxufVxuXG4iXX0= */"],
        data: {
          animation: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["expand"]]
        }
      });
      /***/
    },

    /***/
    "JHSV":
    /*!*****************************************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree-basic/tree-basic.example.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: TreeBasicExampleComponent */

    /***/
    function JHSV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeBasicExampleComponent", function () {
        return TreeBasicExampleComponent;
      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../../src/lib/icon/icon.component */
      "45Bz");

      function TreeBasicExampleComponent_cdk_nested_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "cdk-nested-tree-node", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", node_r2.name, " ");
        }
      }

      function TreeBasicExampleComponent_cdk_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "cdk-nested-tree-node", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "nui-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](6, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("icon", ctx_r1.treeControl.isExpanded(node_r3) ? "triangle-down" : "triangle-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](node_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("nui-tree__body--collapsed", !ctx_r1.treeControl.isExpanded(node_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@expandedState", ctx_r1.treeControl.isExpanded(node_r3) ? "expanded" : "collapsed");
        }
      }

      var TREE_DATA = [{
        name: "Fruit",
        children: [{
          name: "Apple"
        }, {
          name: "Banana"
        }, {
          name: "Fruit loops"
        }]
      }, {
        name: "Vegetables",
        children: [{
          name: "Green",
          children: [{
            name: "Broccoli"
          }, {
            name: "Brussels sprouts"
          }]
        }, {
          name: "Orange",
          children: [{
            name: "Pumpkins"
          }, {
            name: "Carrots"
          }]
        }, {
          name: "Red"
        }]
      }, {
        name: "Meat"
      }];

      var TreeBasicExampleComponent = function TreeBasicExampleComponent() {
        _classCallCheck(this, TreeBasicExampleComponent);

        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](function (node) {
          return node.children;
        });
        this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["ArrayDataSource"](TREE_DATA);

        this.hasChild = function (_, node) {
          return !!node.children && node.children.length > 0;
        };
      };

      TreeBasicExampleComponent.ɵfac = function TreeBasicExampleComponent_Factory(t) {
        return new (t || TreeBasicExampleComponent)();
      };

      TreeBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: TreeBasicExampleComponent,
        selectors: [["nui-tree-basic-example"]],
        hostAttrs: ["id", "nui-tree-basic-example"],
        decls: 3,
        vars: 3,
        consts: [[3, "dataSource", "treeControl"], ["class", "nui-tree__leaf", 4, "cdkTreeNodeDef"], ["class", "nui-tree", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "nui-tree__leaf"], ["nui-button", "", "displayStyle", "action", "type", "button", "disabled", ""], [1, "nui-tree"], ["cdkTreeNodeToggle", "", 1, "nui-tree__header"], [1, "nui-tree__header-icon", 3, "icon"], [1, "nui-tree__header-title"], [1, "nui-tree__body"], ["cdkTreeNodeOutlet", ""]],
        template: function TreeBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "cdk-tree", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TreeBasicExampleComponent_cdk_nested_tree_node_1_Template, 3, 1, "cdk-nested-tree-node", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TreeBasicExampleComponent_cdk_nested_tree_node_2_Template, 7, 5, "cdk-nested-tree-node", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkNestedTreeNode"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeToggle"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeOutlet"]],
        styles: [".nui-tree--expanded[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.nui-tree__icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n  margin-left: -7px;\n}\n.nui-tree__header[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 3px;\n  cursor: pointer;\n  display: flex;\n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  \n  -o-user-select: none;\n  user-select: none;\n}\n.nui-tree__header[_ngcontent-%COMP%]:hover {\n  background-color: var(--nui-color-bg-transparent-hover,rgba(17, 17, 17, 0.05));\n}\n.nui-tree__header-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  line-height: 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  color: var(--nui-color-text-default,#111);\n}\n.nui-tree__header-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-grow: 2;\n  justify-content: flex-start;\n  padding-left: 5px;\n  min-width: 0;\n  padding-right: 5px;\n}\n.nui-tree__header-content-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content--with-icon[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.nui-tree__header-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 2;\n  min-width: 0;\n  width: 100%;\n}\n.nui-tree__header.nui-expander__header--empty.nui-expander__header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.nui-tree__header.nui-expander__header--empty[_ngcontent-%COMP%]   .nui-expander__header-content[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.nui-tree__custom-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nui-tree__custom-header--empty[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n}\n.nui-tree__body[_ngcontent-%COMP%] {\n  border: none;\n  border-left: dotted 2px #d9d9d9;\n  border-left: dotted 2px var(--nui-color-line-default, #d9d9d9);\n  color: #111;\n  color: var(--nui-color-text-default, #111);\n  margin-left: 14px;\n  padding-left: 14px;\n}\n.nui-tree__body.hide-left-border[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.nui-tree__body.ng-animating[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__body--collapsed[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__leaf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nui-tree__invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2V4cGFuZGVyLWJhc2UubGVzcyIsInRyZWUtYmFzaWMuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL25vLXNlbGVjdC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvY3NzLXZhcmlhYmxlcy5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvdGV4dC1vdmVyZmxvdy5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9udWktZnJhbWV3b3JrLXR5cG9ncmFwaHkubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlSTtFQUNJLG1CQUFBO0FDZFI7QURpQkk7RUFiSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBU0EsaUJBQUE7QUNUUjtBRFlJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VFM0JOLHlCQUFBO0VEa0JBLDRCQUE0QjtFQ2pCNUIsc0JBQUE7RURtQkEsZ0JBQWdCO0VDbEJoQixxQkFBQTtFRG9CQSxXQUFXO0VBQ1gsOENBQThDO0VDbEI5QyxvQkFBQTtFQUNBLGlCQUFBO0FEb0JGO0FESVE7RUcxQkosOEVBQUE7QUZ5Qko7QURLUTtFSTFCSixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFFQSx1QkFBQTtFQ1JBLGlCQUFBO0VBQ0EsZUFBQTtFQTBCQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBSlFKO0FERFE7RUFuQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ3VDUjtBRE5RO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNRWjtBRE5ZO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDUWhCO0FETFk7RUFDSSxlQUFBO0FDT2hCO0FESlk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTWhCO0FERFk7RUFDSSxvQkFBQTtBQ0doQjtBRExRO0VBTVEsZUFBQTtFQUNBLGdCQUFBO0FDRWhCO0FER0k7RUFDSSxXQUFBO0FDRFI7QURHUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDRFo7QURLSTtFQUNJLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hSO0FES1E7RUFDSSxjQUFBO0FDSFo7QURNUTtFQUNJLGdCQUFBO0FDSlo7QUFwR1E7RUFDSSxnQkFBQTtBQXNHWjtBQWxHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQW9HUjtBQWpHSTtFQUNJLGFBQUE7QUFtR1IiLCJmaWxlIjoidHJlZS1iYXNpYy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL251aS1mcmFtZXdvcmstdmFyaWFibGVzLmxlc3NcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9taXhpbnMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL251aS1mcmFtZXdvcmstdHlwb2dyYXBoeS5sZXNzXCI7XG5cbi5leHBhbmRlcigpIHtcbiAgICAuZXhwYW5kZXItaWNvbigpIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cblxuICAgICYtLWV4cGFuZGVkIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IEBudWktc3BhY2UteHM7XG4gICAgfVxuXG4gICAgJl9faWNvbiB7XG4gICAgICAgIC5leHBhbmRlci1pY29uKCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgIH1cblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IEBudWktcmFkaXVzLWRlZmF1bHQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLm5vLXNlbGVjdCgpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQtY29sb3IsIG51aS1jb2xvci1iZy10cmFuc3BhcmVudC1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmLXRpdGxlIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBAbnVpLWxpbmUtaGVpZ2h0LWRlZmF1bHQ7XG4gICAgICAgICAgICAudGV4dC1vdmVyZmxvdyhlbGxpcHNpcyk7XG4gICAgICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsIG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pY29uIHtcbiAgICAgICAgICAgIC5leHBhbmRlci1pY29uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNvbnRlbnQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IEBudWktc3BhY2UteHM7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBAbnVpLXNwYWNlLXhzO1xuXG4gICAgICAgICAgICAmLWljb24ge1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtLXdpdGgtaWNvbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYubnVpLWV4cGFuZGVyX19oZWFkZXItLWVtcHR5IHtcbiAgICAgICAgICAgICYubnVpLWV4cGFuZGVyX19oZWFkZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubnVpLWV4cGFuZGVyX19oZWFkZXItY29udGVudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2N1c3RvbS1oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmLS1lbXB0eSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItbGVmdDogZG90dGVkIEBudWktbGluZS1tZWRpdW0gQG51aS1jb2xvci1saW5lLWRlZmF1bHQ7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBkb3R0ZWQgQG51aS1saW5lLW1lZGl1bSB2YXIoLS1udWktY29sb3ItbGluZS1kZWZhdWx0LCBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdCk7XG4gICAgICAgIGNvbG9yOiBAbnVpLWNvbG9yLWJnLWRhcms7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1udWktY29sb3ItdGV4dC1kZWZhdWx0LCAjMTExKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IChAbnVpLXNwYWNlLW1kIC0gMSk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogKEBudWktc3BhY2UtbWQgLSAxKTtcblxuICAgICAgICAmLmhpZGUtbGVmdC1ib3JkZXIge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLm5nLWFuaW1hdGluZyB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGlucy9leHBhbmRlci1iYXNlXCI7XG5cbi5udWktdHJlZSB7XG4gICAgLmV4cGFuZGVyKCk7XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgJi0tY29sbGFwc2VkIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19sZWFmIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19pbnZpc2libGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiIsIi5uby1zZWxlY3QoKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogRmlyZWZveCBhbGwgKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgIC8qIElFIDEwKyAqL1xuXG4gIC8qIE5vIHN1cHBvcnQgZm9yIHRoZXNlIHlldCwgdXNlIGF0IG93biByaXNrICovXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iLCIuc2V0Q3NzVmFyaWFibGUoQHByb3BlcnR5LCBAdmFsdWUpe1xuICAgIEBldmFsdWF0ZWQgOiBcIkB7dmFsdWV9XCI7XG4gICAgLy90aGUgZG91YmxlIEAgZm9yY2VzIGEgaW5kaXJlY3Rpb24gZXZhbHVhdGlvbiwga2luZGEgbGlrZSBhIHBvaW50ZXJcbiAgICBAZmFsbGJhY2sgOiBAQGV2YWx1YXRlZDtcblxuICAgIEB7cHJvcGVydHl9OiB+XCJ2YXIoLS1Ae3ZhbHVlfSxAe2ZhbGxiYWNrfSlcIjtcbn1cbiIsIi8vIFRleHQgb3ZlcmZsb3dcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcblxuLy8gVE9ETzogUkVNT1ZFIExFR0FDWSBCT09UU1RSQVAgTUlYSU5cbi50ZXh0LW92ZXJmbG93KCkge1xuICAudGV4dC1vdmVyZmxvdygnZWxsaXBzaXMnKTtcbn1cblxuLnRleHQtb3ZlcmZsb3coQG92ZXJmbG93KSB7XG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAtbXMtdGV4dC1vdmVyZmxvdzogQG92ZXJmbG93O1xuICAgIC1vLXRleHQtb3ZlcmZsb3c6IEBvdmVyZmxvdztcbiAgICB0ZXh0LW92ZXJmbG93OiBAb3ZlcmZsb3c7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwibnVpLWZyYW1ld29yay12YXJpYWJsZXMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGlucy5sZXNzXCI7XG5cbi8qIGZvbnQtc2l6ZSAqL1xuLm51aS10ZXh0LXNpemUoQHNpemU6IGRlZmF1bHQpIHtcbiAgICBsaW5lLWhlaWdodDogflwiQHtudWktbGluZS1oZWlnaHQtQHtzaXplfX1cIjtcbiAgICBmb250LXNpemU6IH5cIkB7bnVpLWZvbnQtc2l6ZS1Ae3NpemV9fVwiO1xufVxuLyogZm9udC1zaXplIGVuZHMgKi9cblxuLm51aS10ZXh0LXBhZ2UoKSB7XG4gICAgLm51aS10ZXh0LXNpemUoaGVybyk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbn1cblxuLm51aS10ZXh0LXdpZGdldCgpIHtcbiAgICAubnVpLXRleHQtc2l6ZShiaWcpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG59XG5cbi5udWktdGV4dC1wYW5lbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWxhYmVsKEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWRlZmF1bHQoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1zZWNvbmRhcnkoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1zbWFsbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi8vIFRoaXMgbWl4aW4gaXMgZGVwcmVjYXRlZC4gVXNlIG51aS10ZXh0LXNtYWxsKCkgaW5zdGVhZFxuLm51aS10ZXh0LWhpbnQoQGNvbG9yLCBAY29sb3JOYW1lKSAge1xuICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWhvdmVyYWJsZSgpIHtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogZG90dGVkO1xufVxuXG4ubnVpLXRleHQtc21hbGwtc2Vjb25kYXJ5KCkge1xuICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi8vc2VtYW50aWMgc3R5bGVzXG4ubnVpLXRleHQge1xuICAgICYtZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsIG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICB9XG4gICAgJi1wcm9kdWN0IHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoaGVybyk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktcm9ib3RvO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1ib2xkO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXBhZ2Uge1xuICAgICAgICAubnVpLXRleHQtcGFnZSgpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtcGFnZSgpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13aWRnZXQge1xuICAgICAgICAubnVpLXRleHQtd2lkZ2V0KCk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC13aWRnZXQoKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtcGFuZWwge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1sYWJlbCB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWludmVyc2Utc2VsZWN0ZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2JhcixudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cbiAgICAmLWRlZmF1bHQtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0tZGFya2JnLXNlbGVjdGVkIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIsbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2Jhcik7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmctc2VsZWN0ZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyLG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRpc2FibGVkLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWxpbmsge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1saW5rKTtcbiAgICB9XG4gICAgJi1saW5rOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgJi1saW5rLXNtYWxsIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpbmspO1xuICAgIH1cbiAgICAmLWxpbmstc21hbGw6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAmLXNvdXJjZS1jb2RlIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc291cmNlLWNvZGUtcHJvO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuXG4gICAgICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1zb3VyY2UtY29kZS1wcm87XG4gICAgICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi10aXRsZS1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeS0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXRpdGxlLXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zbWFsbCB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLXNlY29uZGFyeSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNtYWxsLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnkpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRpc2FibGVkIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC0tZGlzYWJsZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgLy8gYG51aS10ZXh0LWhpbnRgIHN0eWxlcyBhcmUgZGVwcmVjYXRlZC4gVXNlIGBudWktdGV4dC1zbWFsbC1zZWNvbmRhcnlgIGluc3RlYWQuXG4gICAgJi1oaW50IHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtaGludC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtaGludChAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtdmFsaWRhdGlvbiB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtY3JpdGljYWwpO1xuICAgIH1cblxuICAgICYtZWxsaXBzaXMge1xuICAgICAgICAudGV4dC1vdmVyZmxvdyhlbGxpcHNpcyk7XG4gICAgfVxufVxuXG4iXX0= */"],
        data: {
          animation: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["expand"]]
        }
      });
      /***/
    },

    /***/
    "JW+Z":
    /*!*******************************************************!*\
      !*** ./demo/src/components/demo/common/tree/index.ts ***!
      \*******************************************************/

    /*! exports provided: TreeBasicExampleComponent, TreeStylingExampleComponent, TreeLazyExampleComponent, TreeCheckboxExampleComponent, TreeDocsExampleComponent, TreeVisualTestComponent, TreeLeafPaginationExampleComponent, TreeWithAdditionalContentExampleComponent, ServerStatus, API_URL, VirtualScrollListDataSource, TreeShowAllDialogExampleComponent, TreeDialogContentExampleComponent, TreeLoadMoreExampleComponent */

    /***/
    function JWZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _tree_basic_tree_basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tree-basic/tree-basic.example.component */
      "JHSV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TreeBasicExampleComponent", function () {
        return _tree_basic_tree_basic_example_component__WEBPACK_IMPORTED_MODULE_0__["TreeBasicExampleComponent"];
      });
      /* harmony import */


      var _tree_styling_tree_styling_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tree-styling/tree-styling.example.component */
      "GKkx");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TreeStylingExampleComponent", function () {
        return _tree_styling_tree_styling_example_component__WEBPACK_IMPORTED_MODULE_1__["TreeStylingExampleComponent"];
      });
      /* harmony import */


      var _tree_lazy_tree_lazy_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tree-lazy/tree-lazy.example.component */
      "e5b1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TreeLazyExampleComponent", function () {
        return _tree_lazy_tree_lazy_example_component__WEBPACK_IMPORTED_MODULE_2__["TreeLazyExampleComponent"];
      });
      /* harmony import */


      var _tree_checkbox_tree_checkbox_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tree-checkbox/tree-checkbox.example.component */
      "rfh3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TreeCheckboxExampleComponent", function () {
        return _tree_checkbox_tree_checkbox_example_component__WEBPACK_IMPORTED_MODULE_3__["TreeCheckboxExampleComponent"];
      });
      /* harmony import */


      var _tree_docs_tree_docs_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tree-docs/tree-docs.example.component */
      "+W/g");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TreeDocsExampleComponent", function () {
        return _tree_docs_tree_docs_example_component__WEBPACK_IMPORTED_MODULE_4__["TreeDocsExampleComponent"];
      });
      /* harmony import */


      var _tree_visual_test_tree_visual_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tree-visual-test/tree-visual-test.component */
      "8JvN");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TreeVisualTestComponent", function () {
        return _tree_visual_test_tree_visual_test_component__WEBPACK_IMPORTED_MODULE_5__["TreeVisualTestComponent"];
      });
      /* harmony import */


      var _tree_leaf_pagination_tree_leaf_pagination_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tree-leaf-pagination/tree-leaf-pagination.example.component */
      "M5er");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TreeLeafPaginationExampleComponent", function () {
        return _tree_leaf_pagination_tree_leaf_pagination_example_component__WEBPACK_IMPORTED_MODULE_6__["TreeLeafPaginationExampleComponent"];
      });
      /* harmony import */


      var _tree_with_additional_content_tree_with_additional_content_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tree-with-additional-content/tree-with-additional-content.example.component */
      "xwXO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TreeWithAdditionalContentExampleComponent", function () {
        return _tree_with_additional_content_tree_with_additional_content_example_component__WEBPACK_IMPORTED_MODULE_7__["TreeWithAdditionalContentExampleComponent"];
      });
      /* harmony import */


      var _tree_show_all_dialog_tree_show_all_dialog_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tree-show-all-dialog/tree-show-all-dialog.example.component */
      "UaJR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ServerStatus", function () {
        return _tree_show_all_dialog_tree_show_all_dialog_example_component__WEBPACK_IMPORTED_MODULE_8__["ServerStatus"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "API_URL", function () {
        return _tree_show_all_dialog_tree_show_all_dialog_example_component__WEBPACK_IMPORTED_MODULE_8__["API_URL"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "VirtualScrollListDataSource", function () {
        return _tree_show_all_dialog_tree_show_all_dialog_example_component__WEBPACK_IMPORTED_MODULE_8__["VirtualScrollListDataSource"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TreeShowAllDialogExampleComponent", function () {
        return _tree_show_all_dialog_tree_show_all_dialog_example_component__WEBPACK_IMPORTED_MODULE_8__["TreeShowAllDialogExampleComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TreeDialogContentExampleComponent", function () {
        return _tree_show_all_dialog_tree_show_all_dialog_example_component__WEBPACK_IMPORTED_MODULE_8__["TreeDialogContentExampleComponent"];
      });
      /* harmony import */


      var _tree_load_more_tree_load_more_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./tree-load-more/tree-load-more.example.component */
      "JGyy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TreeLoadMoreExampleComponent", function () {
        return _tree_load_more_tree_load_more_example_component__WEBPACK_IMPORTED_MODULE_9__["TreeLoadMoreExampleComponent"];
      });
      /***/

    },

    /***/
    "M5er":
    /*!*************************************************************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree-leaf-pagination/tree-leaf-pagination.example.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: TreeLeafPaginationExampleComponent */

    /***/
    function M5er(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeLeafPaginationExampleComponent", function () {
        return TreeLeafPaginationExampleComponent;
      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _http_mock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../http-mock.service */
      "o3LO");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../../src/lib/icon/icon.component */
      "45Bz");
      /* harmony import */


      var _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../../src/lib/busy/busy.component */
      "3XPh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../../src/lib/paginator/paginator.component */
      "4E9B");

      function TreeLeafPaginationExampleComponent_cdk_nested_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-nested-tree-node", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", node_r2.name, ", fromPage: ", node_r2.page, " ");
        }
      }

      function TreeLeafPaginationExampleComponent_cdk_nested_tree_node_2_nui_paginator_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-paginator", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pagerAction", function TreeLeafPaginationExampleComponent_cdk_nested_tree_node_2_nui_paginator_9_Template_nui_paginator_pagerAction_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.loadNodeItems(node_r3, _r4, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("page", 1)("pageSize", ctx_r5.pageSize)("total", ctx_r5.nodesTotalItems[node_r3.name]);
        }
      }

      function TreeLeafPaginationExampleComponent_cdk_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-nested-tree-node", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TreeLeafPaginationExampleComponent_cdk_nested_tree_node_2_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var node_r3 = ctx.$implicit;

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10.onToggleClick(node_r3, _r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "nui-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](8, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TreeLeafPaginationExampleComponent_cdk_nested_tree_node_2_nui_paginator_9_Template, 1, 3, "nui-paginator", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("icon", ctx_r1.treeControl.isExpanded(node_r3) ? "triangle-down" : "triangle-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](node_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("nui-tree__body--collapsed", !ctx_r1.treeControl.isExpanded(node_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@expandedState", ctx_r1.treeControl.isExpanded(node_r3) ? "expanded" : "collapsed");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("busy", node_r3.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", node_r3.hasPagination && ctx_r1.nodesTotalItems[node_r3.name]);
        }
      }

      var TREE_DATA = [{
        name: "Food",
        children: [{
          name: "Vegetables",
          children: [],
          hasPagination: true
        }, {
          name: "Fruits",
          children: [],
          hasPagination: true
        }]
      }];

      var TreeLeafPaginationExampleComponent = /*#__PURE__*/function () {
        function TreeLeafPaginationExampleComponent(http, differ, eventBusService) {
          _classCallCheck(this, TreeLeafPaginationExampleComponent);

          this.http = http;
          this.differ = differ;
          this.eventBusService = eventBusService;
          this.pageSize = 25; // used for 'nui-paginator'

          this.nodesTotalItems = {};
          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](function (node) {
            return node.children;
          });
          this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["ArrayDataSource"](TREE_DATA);

          this.hasChild = function (_, node) {
            return node.children;
          };
        }
        /** Load first page on first open */


        _createClass(TreeLeafPaginationExampleComponent, [{
          key: "onToggleClick",
          value: function onToggleClick(node, nestedNode) {
            this.eventBusService.getStream({
              id: "document-click"
            }).next(new MouseEvent("click"));

            if (node.hasPagination && node.children && !node.children.length) {
              var paginatorOptions = {
                page: 1,
                pageSize: this.pageSize
              };
              this.loadNodeItems(node, nestedNode, paginatorOptions);
            }
          }
        }, {
          key: "loadNodeItems",
          value: function loadNodeItems(node, nestedNodeDirective, paginatorOptions) {
            var _this12 = this;

            if (node.isLoading) {
              return;
            }

            node.isLoading = true;
            this.http.getNodeItems(node.name, paginatorOptions.page, paginatorOptions.pageSize).subscribe(function (res) {
              _this12.handleNodeTotalItems(node.name, res.total);

              _this12.handleNodeContent(node, nestedNodeDirective, res.items);

              node.isLoading = false;
            });
          }
        }, {
          key: "handleNodeTotalItems",
          value: function handleNodeTotalItems(nodeId, totalItems) {
            this.nodesTotalItems[nodeId] = totalItems;
          }
        }, {
          key: "handleNodeContent",
          value: function handleNodeContent(node, nestedNodeDirective, items) {
            node.children = [];
            var differ = this.differ.find(node.children).create();
            node.children = items; // clear previously rendered leaf nodes

            nestedNodeDirective.nodeOutlet.first.viewContainer.clear();
            this.cdkTree.renderNodeChanges(node.children, differ, nestedNodeDirective.nodeOutlet.first.viewContainer, node);
          }
        }]);

        return TreeLeafPaginationExampleComponent;
      }();

      TreeLeafPaginationExampleComponent.ɵfac = function TreeLeafPaginationExampleComponent_Factory(t) {
        return new (t || TreeLeafPaginationExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_http_mock_service__WEBPACK_IMPORTED_MODULE_4__["HttpMockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["EventBusService"]));
      };

      TreeLeafPaginationExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TreeLeafPaginationExampleComponent,
        selectors: [["nui-tree-leaf-pagination-example"]],
        viewQuery: function TreeLeafPaginationExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cdkTree = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_http_mock_service__WEBPACK_IMPORTED_MODULE_4__["HttpMockService"]])],
        decls: 3,
        vars: 3,
        consts: [[3, "dataSource", "treeControl"], ["class", "nui-tree__leaf", 4, "cdkTreeNodeDef"], ["class", "nui-tree", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "nui-tree__leaf"], ["nui-button", "", "displayStyle", "action", "type", "button", "disabled", ""], [1, "nui-tree"], ["nestedNode", "cdkNestedTreeNode"], ["cdkTreeNodeToggle", "", 1, "nui-tree__header", 3, "click"], [1, "nui-tree__header-icon", 3, "icon"], [1, "nui-tree__header-title"], [1, "nui-tree__body"], ["nui-busy", "", 2, "min-height", "20px", 3, "busy"], ["cdkTreeNodeOutlet", ""], [3, "page", "pageSize", "total", "pagerAction", 4, "ngIf"], [3, "page", "pageSize", "total", "pagerAction"]],
        template: function TreeLeafPaginationExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-tree", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TreeLeafPaginationExampleComponent_cdk_nested_tree_node_1_Template, 3, 2, "cdk-nested-tree-node", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TreeLeafPaginationExampleComponent_cdk_nested_tree_node_2_Template, 10, 7, "cdk-nested-tree-node", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkNestedTreeNode"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeToggle"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_7__["BusyComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_9__["PaginatorComponent"]],
        styles: [".nui-tree--expanded[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.nui-tree__icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n  margin-left: -7px;\n}\n.nui-tree__header[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 3px;\n  cursor: pointer;\n  display: flex;\n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  \n  -o-user-select: none;\n  user-select: none;\n}\n.nui-tree__header[_ngcontent-%COMP%]:hover {\n  background-color: var(--nui-color-bg-transparent-hover,rgba(17, 17, 17, 0.05));\n}\n.nui-tree__header-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  line-height: 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  color: var(--nui-color-text-default,#111);\n}\n.nui-tree__header-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-grow: 2;\n  justify-content: flex-start;\n  padding-left: 5px;\n  min-width: 0;\n  padding-right: 5px;\n}\n.nui-tree__header-content-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content--with-icon[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.nui-tree__header-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 2;\n  min-width: 0;\n  width: 100%;\n}\n.nui-tree__header.nui-expander__header--empty.nui-expander__header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.nui-tree__header.nui-expander__header--empty[_ngcontent-%COMP%]   .nui-expander__header-content[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.nui-tree__custom-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nui-tree__custom-header--empty[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n}\n.nui-tree__body[_ngcontent-%COMP%] {\n  border: none;\n  border-left: dotted 2px #d9d9d9;\n  border-left: dotted 2px var(--nui-color-line-default, #d9d9d9);\n  color: #111;\n  color: var(--nui-color-text-default, #111);\n  margin-left: 14px;\n  padding-left: 14px;\n}\n.nui-tree__body.hide-left-border[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.nui-tree__body.ng-animating[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__body--collapsed[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__leaf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nui-tree__invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n.nui-tree[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  min-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2V4cGFuZGVyLWJhc2UubGVzcyIsInRyZWUtbGVhZi1wYWdpbmF0aW9uLmNvbXBvbmVudC5leGFtcGxlLmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9uby1zZWxlY3QubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2Nzcy12YXJpYWJsZXMubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL3RleHQtb3ZlcmZsb3cubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbnVpLWZyYW1ld29yay10eXBvZ3JhcGh5Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUk7RUFDSSxtQkFBQTtBQ2RSO0FEaUJJO0VBYkksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQVNBLGlCQUFBO0FDVFI7QURZSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFRTNCTix5QkFBQTtFRGtCQSw0QkFBNEI7RUNqQjVCLHNCQUFBO0VEbUJBLGdCQUFnQjtFQ2xCaEIscUJBQUE7RURvQkEsV0FBVztFQUNYLDhDQUE4QztFQ2xCOUMsb0JBQUE7RUFDQSxpQkFBQTtBRG9CRjtBRElRO0VHMUJKLDhFQUFBO0FGeUJKO0FES1E7RUkxQkosbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBRUEsdUJBQUE7RUNSQSxpQkFBQTtFQUNBLGVBQUE7RUEwQkEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUpRSjtBRERRO0VBbkNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUN1Q1I7QUROUTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUVo7QUROWTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ1FoQjtBRExZO0VBQ0ksZUFBQTtBQ09oQjtBREpZO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ01oQjtBRERZO0VBQ0ksb0JBQUE7QUNHaEI7QURMUTtFQU1RLGVBQUE7RUFDQSxnQkFBQTtBQ0VoQjtBREdJO0VBQ0ksV0FBQTtBQ0RSO0FER1E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0RaO0FES0k7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSw4REFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNIUjtBREtRO0VBQ0ksY0FBQTtBQ0haO0FETVE7RUFDSSxnQkFBQTtBQ0paO0FBcEdRO0VBQ0ksZ0JBQUE7QUFzR1o7QUFsR0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFvR1I7QUFqR0k7RUFDSSxhQUFBO0FBbUdSO0FBbEhBO0VBbUJRLGdCQUFBO0FBa0dSIiwiZmlsZSI6InRyZWUtbGVhZi1wYWdpbmF0aW9uLmNvbXBvbmVudC5leGFtcGxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vbnVpLWZyYW1ld29yay12YXJpYWJsZXMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL21peGlucy5sZXNzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vbnVpLWZyYW1ld29yay10eXBvZ3JhcGh5Lmxlc3NcIjtcblxuLmV4cGFuZGVyKCkge1xuICAgIC5leHBhbmRlci1pY29uKCkge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxuXG4gICAgJi0tZXhwYW5kZWQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogQG51aS1zcGFjZS14cztcbiAgICB9XG5cbiAgICAmX19pY29uIHtcbiAgICAgICAgLmV4cGFuZGVyLWljb24oKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gICAgfVxuXG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQG51aS1yYWRpdXMtZGVmYXVsdDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAubm8tc2VsZWN0KCk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYmFja2dyb3VuZC1jb2xvciwgbnVpLWNvbG9yLWJnLXRyYW5zcGFyZW50LWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtdGl0bGUge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IEBudWktbGluZS1oZWlnaHQtZGVmYXVsdDtcbiAgICAgICAgICAgIC50ZXh0LW92ZXJmbG93KGVsbGlwc2lzKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCwgbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWljb24ge1xuICAgICAgICAgICAgLmV4cGFuZGVyLWljb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtY29udGVudCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogQG51aS1zcGFjZS14cztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IEBudWktc3BhY2UteHM7XG5cbiAgICAgICAgICAgICYtaWNvbiB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi0td2l0aC1pY29uIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5udWktZXhwYW5kZXJfX2hlYWRlci0tZW1wdHkge1xuICAgICAgICAgICAgJi5udWktZXhwYW5kZXJfX2hlYWRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5udWktZXhwYW5kZXJfX2hlYWRlci1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fY3VzdG9tLWhlYWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYtLWVtcHR5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2JvZHkge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBkb3R0ZWQgQG51aS1saW5lLW1lZGl1bSBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IGRvdHRlZCBAbnVpLWxpbmUtbWVkaXVtIHZhcigtLW51aS1jb2xvci1saW5lLWRlZmF1bHQsIEBudWktY29sb3ItbGluZS1kZWZhdWx0KTtcbiAgICAgICAgY29sb3I6IEBudWktY29sb3ItYmctZGFyaztcbiAgICAgICAgY29sb3I6IHZhcigtLW51aS1jb2xvci10ZXh0LWRlZmF1bHQsICMxMTEpO1xuICAgICAgICBtYXJnaW4tbGVmdDogKEBudWktc3BhY2UtbWQgLSAxKTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAoQG51aS1zcGFjZS1tZCAtIDEpO1xuXG4gICAgICAgICYuaGlkZS1sZWZ0LWJvcmRlciB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYubmctYW5pbWF0aW5nIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwibWl4aW5zL2V4cGFuZGVyLWJhc2VcIjtcblxuLm51aS10cmVlIHtcbiAgICAuZXhwYW5kZXIoKTtcblxuICAgICZfX2JvZHkge1xuICAgICAgICAmLS1jb2xsYXBzZWQge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2xlYWYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICZfX2ludmlzaWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICB9XG59XG4iLCIubm8tc2VsZWN0KCkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAgLyogQ2hyb21lIGFsbCAvIFNhZmFyaSBhbGwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIEZpcmVmb3ggYWxsICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgICAvKiBJRSAxMCsgKi9cblxuICAvKiBObyBzdXBwb3J0IGZvciB0aGVzZSB5ZXQsIHVzZSBhdCBvd24gcmlzayAqL1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59IiwiLnNldENzc1ZhcmlhYmxlKEBwcm9wZXJ0eSwgQHZhbHVlKXtcbiAgICBAZXZhbHVhdGVkIDogXCJAe3ZhbHVlfVwiO1xuICAgIC8vdGhlIGRvdWJsZSBAIGZvcmNlcyBhIGluZGlyZWN0aW9uIGV2YWx1YXRpb24sIGtpbmRhIGxpa2UgYSBwb2ludGVyXG4gICAgQGZhbGxiYWNrIDogQEBldmFsdWF0ZWQ7XG5cbiAgICBAe3Byb3BlcnR5fTogflwidmFyKC0tQHt2YWx1ZX0sQHtmYWxsYmFja30pXCI7XG59XG4iLCIvLyBUZXh0IG92ZXJmbG93XG4vLyBSZXF1aXJlcyBpbmxpbmUtYmxvY2sgb3IgYmxvY2sgZm9yIHByb3BlciBzdHlsaW5nXG5cbi8vIFRPRE86IFJFTU9WRSBMRUdBQ1kgQk9PVFNUUkFQIE1JWElOXG4udGV4dC1vdmVyZmxvdygpIHtcbiAgLnRleHQtb3ZlcmZsb3coJ2VsbGlwc2lzJyk7XG59XG5cbi50ZXh0LW92ZXJmbG93KEBvdmVyZmxvdykge1xuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgLW1zLXRleHQtb3ZlcmZsb3c6IEBvdmVyZmxvdztcbiAgICAtby10ZXh0LW92ZXJmbG93OiBAb3ZlcmZsb3c7XG4gICAgdGV4dC1vdmVyZmxvdzogQG92ZXJmbG93O1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSBcIm51aS1mcmFtZXdvcmstdmFyaWFibGVzLmxlc3NcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJtaXhpbnMubGVzc1wiO1xuXG4vKiBmb250LXNpemUgKi9cbi5udWktdGV4dC1zaXplKEBzaXplOiBkZWZhdWx0KSB7XG4gICAgbGluZS1oZWlnaHQ6IH5cIkB7bnVpLWxpbmUtaGVpZ2h0LUB7c2l6ZX19XCI7XG4gICAgZm9udC1zaXplOiB+XCJAe251aS1mb250LXNpemUtQHtzaXplfX1cIjtcbn1cbi8qIGZvbnQtc2l6ZSBlbmRzICovXG5cbi5udWktdGV4dC1wYWdlKCkge1xuICAgIC5udWktdGV4dC1zaXplKGhlcm8pO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG59XG5cbi5udWktdGV4dC13aWRnZXQoKSB7XG4gICAgLm51aS10ZXh0LXNpemUoYmlnKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xufVxuXG4ubnVpLXRleHQtcGFuZWwoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1sYWJlbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1kZWZhdWx0KEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtc2Vjb25kYXJ5KEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtc21hbGwoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4vLyBUaGlzIG1peGluIGlzIGRlcHJlY2F0ZWQuIFVzZSBudWktdGV4dC1zbWFsbCgpIGluc3RlYWRcbi5udWktdGV4dC1oaW50KEBjb2xvciwgQGNvbG9yTmFtZSkgIHtcbiAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1ob3ZlcmFibGUoKSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IGRvdHRlZDtcbn1cblxuLm51aS10ZXh0LXNtYWxsLXNlY29uZGFyeSgpIHtcbiAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4vL3NlbWFudGljIHN0eWxlc1xuLm51aS10ZXh0IHtcbiAgICAmLWRpc2FibGVkIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWRpc2FibGVkLCBudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuICAgICYtcHJvZHVjdCB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKGhlcm8pO1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXJvYm90bztcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtYm9sZDtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuXG4gICAgJi1wYWdlIHtcbiAgICAgICAgLm51aS10ZXh0LXBhZ2UoKTtcblxuICAgICAgICAmLS1ob3ZlcmFibGUge1xuICAgICAgICAgICAgLm51aS10ZXh0LXBhZ2UoKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtd2lkZ2V0IHtcbiAgICAgICAgLm51aS10ZXh0LXdpZGdldCgpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtd2lkZ2V0KCk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXBhbmVsIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgIH1cblxuICAgICYtcGFuZWwtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtbGFiZWwge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1sYWJlbC0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0IHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1pbnZlcnNlLXNlbGVjdGVkIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIsbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2Jhcik7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG4gICAgJi1kZWZhdWx0LS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWRhcmtiZy1zZWxlY3RlZCB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyLG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0tZGFya2JnLXNlbGVjdGVkLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2JhcixudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyKTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRpc2FibGVkIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1kaXNhYmxlZC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1saW5rIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtbGluayk7XG4gICAgfVxuICAgICYtbGluazpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgICYtbGluay1zbWFsbCB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1saW5rKTtcbiAgICB9XG4gICAgJi1saW5rLXNtYWxsOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgJi1zb3VyY2UtY29kZSB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXNvdXJjZS1jb2RlLXBybztcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcblxuICAgICAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc291cmNlLWNvZGUtcHJvO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICAgICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtdGl0bGUtc2Vjb25kYXJ5IHtcbiAgICAgICAgLm51aS10ZXh0LXRpdGxlLXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi10aXRsZS1zZWNvbmRhcnktLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi10aXRsZS1zZWNvbmRhcnktLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtc21hbGwge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1zbWFsbC1zZWNvbmRhcnktLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcblxuICAgICAgICAmLS1ob3ZlcmFibGUge1xuICAgICAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNtYWxsLS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNtYWxsLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LCBudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LCBudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kaXNhYmxlZCB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRpc2FibGVkLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWRpc2FibGVkLG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgIC8vIGBudWktdGV4dC1oaW50YCBzdHlsZXMgYXJlIGRlcHJlY2F0ZWQuIFVzZSBgbnVpLXRleHQtc21hbGwtc2Vjb25kYXJ5YCBpbnN0ZWFkLlxuICAgICYtaGludCB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLWhpbnQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtaGludC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtaGludC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtaGludChAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXZhbGlkYXRpb24ge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWNyaXRpY2FsKTtcbiAgICB9XG5cbiAgICAmLWVsbGlwc2lzIHtcbiAgICAgICAgLnRleHQtb3ZlcmZsb3coZWxsaXBzaXMpO1xuICAgIH1cbn1cblxuIl19 */"],
        data: {
          animation: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["expand"]]
        }
      });
      /***/
    },

    /***/
    "UaJR":
    /*!*************************************************************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree-show-all-dialog/tree-show-all-dialog.example.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: ServerStatus, API_URL, VirtualScrollListDataSource, TreeShowAllDialogExampleComponent, TreeDialogContentExampleComponent */

    /***/
    function UaJR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerStatus", function () {
        return ServerStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_URL", function () {
        return API_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualScrollListDataSource", function () {
        return VirtualScrollListDataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeShowAllDialogExampleComponent", function () {
        return TreeShowAllDialogExampleComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeDialogContentExampleComponent", function () {
        return TreeDialogContentExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! lodash/isEqual */
      "Y+p1");
      /* harmony import */


      var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var lodash_isNil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! lodash/isNil */
      "J2iB");
      /* harmony import */


      var lodash_isNil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../../../src/lib/icon/icon.component */
      "45Bz");
      /* harmony import */


      var _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../../../src/lib/busy/busy.component */
      "3XPh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../../../../src/lib/dialog/dialog-header.component */
      "skCw");
      /* harmony import */


      var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../../../../src/lib/repeat/repeat.component */
      "v2n/");
      /* harmony import */


      var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../../../../src/lib/dialog/dialog-footer.component */
      "NHEo");

      function TreeShowAllDialogExampleComponent_cdk_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "cdk-nested-tree-node", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Node: ", node_r2.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Status: ", node_r2.status, "");
        }
      }

      function TreeShowAllDialogExampleComponent_cdk_nested_tree_node_3_a_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TreeShowAllDialogExampleComponent_cdk_nested_tree_node_3_a_9_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r6.showAll(node_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Show All (", ctx_r5.nodesTotalItems[node_r3.name], ")");
        }
      }

      function TreeShowAllDialogExampleComponent_cdk_nested_tree_node_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "cdk-nested-tree-node", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TreeShowAllDialogExampleComponent_cdk_nested_tree_node_3_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);

            var node_r3 = ctx.$implicit;

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r10.onToggleClick(node_r3, _r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "nui-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](8, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, TreeShowAllDialogExampleComponent_cdk_nested_tree_node_3_a_9_Template, 2, 1, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("icon", ctx_r1.treeControl.isExpanded(node_r3) ? "triangle-down" : "triangle-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](node_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("nui-tree__body--collapsed", !ctx_r1.treeControl.isExpanded(node_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@expandedState", ctx_r1.treeControl.isExpanded(node_r3) ? "expanded" : "collapsed");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("busy", node_r3.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", node_r3.hasChildren && ctx_r1.nodesTotalItems[node_r3.name]);
        }
      }

      function TreeDialogContentExampleComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.item;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Node: ", item_r2.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Status: ", item_r2.status, "");
        }
      }

      var ServerStatus;

      (function (ServerStatus) {
        ServerStatus["active"] = "Active";
        ServerStatus["down"] = "Down";
      })(ServerStatus || (ServerStatus = {}));

      var TREE_DATA = [{
        name: "Nodes",
        hasChildren: true,
        children: [{
          name: "Brno",
          hasChildren: true,
          children: []
        }, {
          name: "Austin",
          hasChildren: true,
          children: []
        }, {
          name: "Kyiv",
          hasChildren: true,
          children: []
        }]
      }];
      var RESULTS_PER_PAGE = 25;
      var API_URL = "https://nova-pg.swdev.local/api/v1/servers";
      /**
       * Example of a ServerSide DataSourceService which is using the Nova Backend API
       * to fetch data
       */

      var VirtualScrollListDataSource = /*#__PURE__*/function (_nova_ui_bits__WEBPAC) {
        _inherits(VirtualScrollListDataSource, _nova_ui_bits__WEBPAC);

        var _super = _createSuper(VirtualScrollListDataSource);

        function VirtualScrollListDataSource(logger, http) {
          var _this13;

          _classCallCheck(this, VirtualScrollListDataSource);

          _this13 = _super.call(this);
          _this13.logger = logger;
          _this13.http = http; // cache used to store our previous fetched results while scrolling
          // and more data is automatically fetched from the backend

          _this13.cache = Array.from({
            length: 0
          });
          return _this13;
        }

        _createClass(VirtualScrollListDataSource, [{
          key: "getFilteredData",
          value: function getFilteredData(filters) {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this14 = this;

              var reset;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // Every new search request or filter change should
                      // clear the cache in order to correctly display a new set of data
                      reset = this.filtersChanged(filters, Object(_nova_ui_bits__WEBPACK_IMPORTED_MODULE_5__["nameof"])("status"), Object(_nova_ui_bits__WEBPACK_IMPORTED_MODULE_5__["nameof"])("location"), Object(_nova_ui_bits__WEBPACK_IMPORTED_MODULE_5__["nameof"])("search"), Object(_nova_ui_bits__WEBPACK_IMPORTED_MODULE_5__["nameof"])("sorter"));

                      if (reset || ((_a = filters.virtualScroll) === null || _a === void 0 ? void 0 : _a.value.start) === 0) {
                        this.cache = [];
                      }

                      return _context.abrupt("return", this.getBackendData(filters).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (response) {
                        // after receiving data we need to append it to our previous fetched results
                        _this14.cache = _this14.cache.concat(response.items);
                      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (response) {
                        var itemsSource = _this14.cache;
                        return {
                          repeat: {
                            itemsSource: itemsSource
                          },
                          paginator: {
                            total: response.count
                          }
                        };
                      })).toPromise());

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "reset",
          value: function reset() {
            this.cache = [];
          } // build query params specific to our backend API

        }, {
          key: "getRequestParams",
          value: function getRequestParams(filters) {
            var _a, _b, _c, _d;

            var paging = (_b = (_a = filters.virtualScroll) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : {
              start: 0,
              end: 0
            };
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]() // define the start page used by the virtual scroll internal "paginator"
            .set("page", Math.ceil(paging.start / RESULTS_PER_PAGE).toString()) // specify the maximum number of items we need to fetch for each request
            .set("pageSize", String(RESULTS_PER_PAGE)).set("searchField", "location").set("searchContent", (_d = (_c = filters.search) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : "");
            return params;
          }
        }, {
          key: "getBackendData",
          value: function getBackendData(filters) {
            var _this15 = this;

            // fetch response from the backend
            var requestParams = this.getRequestParams(filters);
            return this.http.get(API_URL, {
              params: requestParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (response) {
              var _a;

              return {
                items: ((_a = response.items) === null || _a === void 0 ? void 0 : _a.map(function (item) {
                  return {
                    name: item.name,
                    location: item.location,
                    status: item.status
                  };
                })) || [],
                count: response.count
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(function (e) {
              _this15.logger.error(e);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])({
                items: [],
                count: 0
              });
            }));
          } // checks if any of the filters specified by name have changed from the previous evaluation

        }, {
          key: "filtersChanged",
          value: function filtersChanged(filters) {
            var _a;

            for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
              var filterName = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
              var filter = filters[filterName];

              if (!lodash_isNil__WEBPACK_IMPORTED_MODULE_7___default()(filter === null || filter === void 0 ? void 0 : filter.value) && this.previousFilters && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default()(filter === null || filter === void 0 ? void 0 : filter.value, (_a = this.previousFilters[filterName]) === null || _a === void 0 ? void 0 : _a.value)) {
                return true;
              }
            }

            return false;
          }
        }]);

        return VirtualScrollListDataSource;
      }(_nova_ui_bits__WEBPACK_IMPORTED_MODULE_5__["DataSourceService"]);

      VirtualScrollListDataSource.ɵfac = function VirtualScrollListDataSource_Factory(t) {
        return new (t || VirtualScrollListDataSource)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      VirtualScrollListDataSource.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: VirtualScrollListDataSource,
        factory: VirtualScrollListDataSource.ɵfac
      });

      var TreeShowAllDialogExampleComponent = /*#__PURE__*/function () {
        function TreeShowAllDialogExampleComponent(virtualScrollListDataSource, differ, eventBusService, dialogService) {
          _classCallCheck(this, TreeShowAllDialogExampleComponent);

          this.virtualScrollListDataSource = virtualScrollListDataSource;
          this.differ = differ;
          this.eventBusService = eventBusService;
          this.dialogService = dialogService;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
          this.nodesTotalItems = {};
          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["NestedTreeControl"](function (node) {
            return node.children;
          });
          this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["ArrayDataSource"](TREE_DATA);

          this.hasChild = function (_, node) {
            return node.children;
          };
        }

        _createClass(TreeShowAllDialogExampleComponent, [{
          key: "activeDialogComponent",
          get: function get() {
            return this.activeDialogRef.componentInstance;
          }
        }, {
          key: "showAll",
          value: function showAll(node) {
            var _this16 = this;

            // setup the Dialog
            this.activeDialogRef = this.dialogService.open(TreeDialogContentExampleComponent, {
              size: "sm"
            }); // pass the inputs to the context component

            this.activeDialogComponent.items = [];
            this.activeDialogComponent.isLoading = true;
            this.activeDialogComponent.cdRef.detectChanges(); // Set location search criteria

            this.setDsSearchFieldFor(node);
            this.subscribeToDialogScrolling();
            this.activeDialogRef.closed$.subscribe(function () {
              _this16.virtualScrollListDataSource.deregisterComponent("virtualScroll");

              _this16.virtualScrollListDataSource.deregisterComponent("search");

              _this16.virtualScrollListDataSource.reset();
            });
          }
          /**
           * Register the viewport container to the DataSource
           */

        }, {
          key: "subscribeToDialogScrolling",
          value: function subscribeToDialogScrolling() {
            var _this17 = this;

            // 'setTimeout' to wait until the dialog is rendered
            setTimeout(function () {
              var viewPortManager = _this17.activeDialogComponent.viewPortManager;

              _this17.virtualScrollListDataSource.registerComponent({
                virtualScroll: {
                  componentInstance: viewPortManager
                }
              });

              viewPortManager.observeNextPage$({
                pageSize: RESULTS_PER_PAGE
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () {
                _this17.virtualScrollListDataSource.applyFilters();

                _this17.virtualScrollListDataSource.outputsSubject.subscribe(function (v) {
                  if (!_this17.activeDialogComponent) {
                    return;
                  } // in case dialog was closed early


                  var items = v.repeat.itemsSource;
                  _this17.activeDialogComponent.items = items;
                  _this17.activeDialogComponent.isLoading = false;

                  _this17.activeDialogComponent.cdRef.detectChanges();
                });
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(_this17.destroy$)).subscribe();
            });
          }
          /** Load first page on first open */

        }, {
          key: "onToggleClick",
          value: function onToggleClick(node, nestedNode) {
            var _this18 = this;

            this.eventBusService.getStream({
              id: "document-click"
            }).next();

            if (node.hasChildren && node.children && !node.children.length) {
              node.isLoading = true;
              this.setDsSearchFieldFor(node);
              this.virtualScrollListDataSource.applyFilters();
              this.virtualScrollListDataSource.outputsSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(function (v) {
                var items = v.repeat.itemsSource;

                _this18.handleNodeTotalItems(node.name, v.paginator.total);

                _this18.handleNodeContent(node, nestedNode, items);

                node.isLoading = false;

                _this18.virtualScrollListDataSource.deregisterComponent("search");
              });
            }
          }
        }, {
          key: "handleNodeTotalItems",
          value: function handleNodeTotalItems(nodeId, totalItems) {
            this.nodesTotalItems[nodeId] = totalItems;
          }
        }, {
          key: "handleNodeContent",
          value: function handleNodeContent(node, nestedNodeDirective, items) {
            node.children = [];
            var differ = this.differ.find(node.children).create();
            node.children = items; // clear previously rendered leaf nodes

            nestedNodeDirective.nodeOutlet.first.viewContainer.clear();
            this.cdkTree.renderNodeChanges(node.children, differ, nestedNodeDirective.nodeOutlet.first.viewContainer, node);
          }
          /** Register node name as a search to get nodes of one location */

        }, {
          key: "setDsSearchFieldFor",
          value: function setDsSearchFieldFor(node) {
            this.virtualScrollListDataSource.registerComponent({
              search: {
                componentInstance: {
                  getFilters: function getFilters() {
                    return {
                      type: "search",
                      value: node.name
                    };
                  }
                }
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return TreeShowAllDialogExampleComponent;
      }();

      TreeShowAllDialogExampleComponent.ɵfac = function TreeShowAllDialogExampleComponent_Factory(t) {
        return new (t || TreeShowAllDialogExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](VirtualScrollListDataSource), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_5__["EventBusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_5__["DialogService"]));
      };

      TreeShowAllDialogExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: TreeShowAllDialogExampleComponent,
        selectors: [["nui-tree-show-all-dialog-example"]],
        viewQuery: function TreeShowAllDialogExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTree"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.cdkTree = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([VirtualScrollListDataSource])],
        decls: 4,
        vars: 3,
        consts: [[2, "max-width", "600px"], [1, "nui-tree", 3, "dataSource", "treeControl"], ["class", "nui-tree__leaf", 4, "cdkTreeNodeDef"], ["class", "nui-tree__branch", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "nui-tree__leaf"], ["nui-button", "", "displayStyle", "action", "type", "button", "disabled", ""], [1, "d-flex", "justify-content-between", "w-100"], [1, "nui-tree__branch"], ["nestedNode", "cdkNestedTreeNode"], ["cdkTreeNodeToggle", "", 1, "nui-tree__header", 3, "click"], [1, "nui-tree__header-icon", 3, "icon"], [1, "nui-tree__header-title"], [1, "nui-tree__body"], ["nui-busy", "", 2, "min-height", "20px", 3, "busy"], ["cdkTreeNodeOutlet", ""], ["class", "nui-tree__show-all", 3, "click", 4, "ngIf"], [1, "nui-tree__show-all", 3, "click"]],
        template: function TreeShowAllDialogExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "cdk-tree", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TreeShowAllDialogExampleComponent_cdk_nested_tree_node_2_Template, 7, 2, "cdk-nested-tree-node", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TreeShowAllDialogExampleComponent_cdk_nested_tree_node_3_Template, 10, 7, "cdk-nested-tree-node", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkNestedTreeNode"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_10__["ButtonComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeNodeToggle"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["IconComponent"], _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_12__["BusyComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeNodeOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"]],
        styles: [".nui-tree--expanded[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.nui-tree__icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n  margin-left: -7px;\n}\n.nui-tree__header[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 3px;\n  cursor: pointer;\n  display: flex;\n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  \n  -o-user-select: none;\n  user-select: none;\n}\n.nui-tree__header[_ngcontent-%COMP%]:hover {\n  background-color: var(--nui-color-bg-transparent-hover,rgba(17, 17, 17, 0.05));\n}\n.nui-tree__header-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  line-height: 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  color: var(--nui-color-text-default,#111);\n}\n.nui-tree__header-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-grow: 2;\n  justify-content: flex-start;\n  padding-left: 5px;\n  min-width: 0;\n  padding-right: 5px;\n}\n.nui-tree__header-content-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content--with-icon[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.nui-tree__header-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 2;\n  min-width: 0;\n  width: 100%;\n}\n.nui-tree__header.nui-expander__header--empty.nui-expander__header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.nui-tree__header.nui-expander__header--empty[_ngcontent-%COMP%]   .nui-expander__header-content[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.nui-tree__custom-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nui-tree__custom-header--empty[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n}\n.nui-tree__body[_ngcontent-%COMP%] {\n  border: none;\n  border-left: dotted 2px #d9d9d9;\n  border-left: dotted 2px var(--nui-color-line-default, #d9d9d9);\n  color: #111;\n  color: var(--nui-color-text-default, #111);\n  margin-left: 14px;\n  padding-left: 14px;\n}\n.nui-tree__body.hide-left-border[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.nui-tree__body.ng-animating[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__body--collapsed[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__leaf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nui-tree__invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n.nui-tree[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  min-height: 20px;\n}\n.nui-tree__show-all[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2V4cGFuZGVyLWJhc2UubGVzcyIsInRyZWUtc2hvdy1hbGwtZGlhbG9nLmNvbXBvbmVudC5leGFtcGxlLmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9uby1zZWxlY3QubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2Nzcy12YXJpYWJsZXMubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL3RleHQtb3ZlcmZsb3cubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbnVpLWZyYW1ld29yay10eXBvZ3JhcGh5Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUk7RUFDSSxtQkFBQTtBQ2RSO0FEaUJJO0VBYkksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQVNBLGlCQUFBO0FDVFI7QURZSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFRTNCTix5QkFBQTtFRGtCQSw0QkFBNEI7RUNqQjVCLHNCQUFBO0VEbUJBLGdCQUFnQjtFQ2xCaEIscUJBQUE7RURvQkEsV0FBVztFQUNYLDhDQUE4QztFQ2xCOUMsb0JBQUE7RUFDQSxpQkFBQTtBRG9CRjtBRElRO0VHMUJKLDhFQUFBO0FGeUJKO0FES1E7RUkxQkosbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBRUEsdUJBQUE7RUNSQSxpQkFBQTtFQUNBLGVBQUE7RUEwQkEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUpRSjtBRERRO0VBbkNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUN1Q1I7QUROUTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUVo7QUROWTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ1FoQjtBRExZO0VBQ0ksZUFBQTtBQ09oQjtBREpZO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ01oQjtBRERZO0VBQ0ksb0JBQUE7QUNHaEI7QURMUTtFQU1RLGVBQUE7RUFDQSxnQkFBQTtBQ0VoQjtBREdJO0VBQ0ksV0FBQTtBQ0RSO0FER1E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0RaO0FES0k7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSw4REFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNIUjtBREtRO0VBQ0ksY0FBQTtBQ0haO0FETVE7RUFDSSxnQkFBQTtBQ0paO0FBcEdRO0VBQ0ksZ0JBQUE7QUFzR1o7QUFsR0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFvR1I7QUFqR0k7RUFDSSxhQUFBO0FBbUdSO0FBbEhBO0VBbUJRLGdCQUFBO0FBa0dSO0FBL0ZJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBaUdSIiwiZmlsZSI6InRyZWUtc2hvdy1hbGwtZGlhbG9nLmNvbXBvbmVudC5leGFtcGxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vbnVpLWZyYW1ld29yay12YXJpYWJsZXMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL21peGlucy5sZXNzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vbnVpLWZyYW1ld29yay10eXBvZ3JhcGh5Lmxlc3NcIjtcblxuLmV4cGFuZGVyKCkge1xuICAgIC5leHBhbmRlci1pY29uKCkge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxuXG4gICAgJi0tZXhwYW5kZWQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogQG51aS1zcGFjZS14cztcbiAgICB9XG5cbiAgICAmX19pY29uIHtcbiAgICAgICAgLmV4cGFuZGVyLWljb24oKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gICAgfVxuXG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQG51aS1yYWRpdXMtZGVmYXVsdDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAubm8tc2VsZWN0KCk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYmFja2dyb3VuZC1jb2xvciwgbnVpLWNvbG9yLWJnLXRyYW5zcGFyZW50LWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtdGl0bGUge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IEBudWktbGluZS1oZWlnaHQtZGVmYXVsdDtcbiAgICAgICAgICAgIC50ZXh0LW92ZXJmbG93KGVsbGlwc2lzKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCwgbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWljb24ge1xuICAgICAgICAgICAgLmV4cGFuZGVyLWljb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtY29udGVudCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogQG51aS1zcGFjZS14cztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IEBudWktc3BhY2UteHM7XG5cbiAgICAgICAgICAgICYtaWNvbiB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi0td2l0aC1pY29uIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5udWktZXhwYW5kZXJfX2hlYWRlci0tZW1wdHkge1xuICAgICAgICAgICAgJi5udWktZXhwYW5kZXJfX2hlYWRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5udWktZXhwYW5kZXJfX2hlYWRlci1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fY3VzdG9tLWhlYWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYtLWVtcHR5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2JvZHkge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBkb3R0ZWQgQG51aS1saW5lLW1lZGl1bSBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IGRvdHRlZCBAbnVpLWxpbmUtbWVkaXVtIHZhcigtLW51aS1jb2xvci1saW5lLWRlZmF1bHQsIEBudWktY29sb3ItbGluZS1kZWZhdWx0KTtcbiAgICAgICAgY29sb3I6IEBudWktY29sb3ItYmctZGFyaztcbiAgICAgICAgY29sb3I6IHZhcigtLW51aS1jb2xvci10ZXh0LWRlZmF1bHQsICMxMTEpO1xuICAgICAgICBtYXJnaW4tbGVmdDogKEBudWktc3BhY2UtbWQgLSAxKTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAoQG51aS1zcGFjZS1tZCAtIDEpO1xuXG4gICAgICAgICYuaGlkZS1sZWZ0LWJvcmRlciB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYubmctYW5pbWF0aW5nIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwibWl4aW5zL2V4cGFuZGVyLWJhc2VcIjtcblxuLm51aS10cmVlIHtcbiAgICAuZXhwYW5kZXIoKTtcblxuICAgICZfX2JvZHkge1xuICAgICAgICAmLS1jb2xsYXBzZWQge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2xlYWYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICZfX2ludmlzaWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAmX19zaG93LWFsbCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuIiwiLm5vLXNlbGVjdCgpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgIC8qIENocm9tZSBhbGwgLyBTYWZhcmkgYWxsICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAvKiBGaXJlZm94IGFsbCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgLyogSUUgMTArICovXG5cbiAgLyogTm8gc3VwcG9ydCBmb3IgdGhlc2UgeWV0LCB1c2UgYXQgb3duIHJpc2sgKi9cbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufSIsIi5zZXRDc3NWYXJpYWJsZShAcHJvcGVydHksIEB2YWx1ZSl7XG4gICAgQGV2YWx1YXRlZCA6IFwiQHt2YWx1ZX1cIjtcbiAgICAvL3RoZSBkb3VibGUgQCBmb3JjZXMgYSBpbmRpcmVjdGlvbiBldmFsdWF0aW9uLCBraW5kYSBsaWtlIGEgcG9pbnRlclxuICAgIEBmYWxsYmFjayA6IEBAZXZhbHVhdGVkO1xuXG4gICAgQHtwcm9wZXJ0eX06IH5cInZhcigtLUB7dmFsdWV9LEB7ZmFsbGJhY2t9KVwiO1xufVxuIiwiLy8gVGV4dCBvdmVyZmxvd1xuLy8gUmVxdWlyZXMgaW5saW5lLWJsb2NrIG9yIGJsb2NrIGZvciBwcm9wZXIgc3R5bGluZ1xuXG4vLyBUT0RPOiBSRU1PVkUgTEVHQUNZIEJPT1RTVFJBUCBNSVhJTlxuLnRleHQtb3ZlcmZsb3coKSB7XG4gIC50ZXh0LW92ZXJmbG93KCdlbGxpcHNpcycpO1xufVxuXG4udGV4dC1vdmVyZmxvdyhAb3ZlcmZsb3cpIHtcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIC1tcy10ZXh0LW92ZXJmbG93OiBAb3ZlcmZsb3c7XG4gICAgLW8tdGV4dC1vdmVyZmxvdzogQG92ZXJmbG93O1xuICAgIHRleHQtb3ZlcmZsb3c6IEBvdmVyZmxvdztcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJudWktZnJhbWV3b3JrLXZhcmlhYmxlcy5sZXNzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwibWl4aW5zLmxlc3NcIjtcblxuLyogZm9udC1zaXplICovXG4ubnVpLXRleHQtc2l6ZShAc2l6ZTogZGVmYXVsdCkge1xuICAgIGxpbmUtaGVpZ2h0OiB+XCJAe251aS1saW5lLWhlaWdodC1Ae3NpemV9fVwiO1xuICAgIGZvbnQtc2l6ZTogflwiQHtudWktZm9udC1zaXplLUB7c2l6ZX19XCI7XG59XG4vKiBmb250LXNpemUgZW5kcyAqL1xuXG4ubnVpLXRleHQtcGFnZSgpIHtcbiAgICAubnVpLXRleHQtc2l6ZShoZXJvKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xufVxuXG4ubnVpLXRleHQtd2lkZ2V0KCkge1xuICAgIC5udWktdGV4dC1zaXplKGJpZyk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbn1cblxuLm51aS10ZXh0LXBhbmVsKEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtbGFiZWwoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtZGVmYXVsdChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LXNlY29uZGFyeShAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LXRpdGxlLXNlY29uZGFyeShAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LXNtYWxsKEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLy8gVGhpcyBtaXhpbiBpcyBkZXByZWNhdGVkLiBVc2UgbnVpLXRleHQtc21hbGwoKSBpbnN0ZWFkXG4ubnVpLXRleHQtaGludChAY29sb3IsIEBjb2xvck5hbWUpICB7XG4gICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtaG92ZXJhYmxlKCkge1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBkb3R0ZWQ7XG59XG5cbi5udWktdGV4dC1zbWFsbC1zZWNvbmRhcnkoKSB7XG4gICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLy9zZW1hbnRpYyBzdHlsZXNcbi5udWktdGV4dCB7XG4gICAgJi1kaXNhYmxlZCB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCwgbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgIH1cbiAgICAmLXByb2R1Y3Qge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShoZXJvKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1yb2JvdG87XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LWJvbGQ7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgICYtcGFnZSB7XG4gICAgICAgIC5udWktdGV4dC1wYWdlKCk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1wYWdlKCk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXdpZGdldCB7XG4gICAgICAgIC5udWktdGV4dC13aWRnZXQoKTtcblxuICAgICAgICAmLS1ob3ZlcmFibGUge1xuICAgICAgICAgICAgLm51aS10ZXh0LXdpZGdldCgpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1wYW5lbCB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuICAgIH1cblxuICAgICYtcGFuZWwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtcGFuZWwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgICYtcGFuZWwtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWxhYmVsIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG4gICAgfVxuXG4gICAgJi1sYWJlbC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1sYWJlbC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuXG4gICAgJi1sYWJlbC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdCB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0taW52ZXJzZS1zZWxlY3RlZCB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyLG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuICAgICYtZGVmYXVsdC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmctc2VsZWN0ZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2JhcixudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWRhcmtiZy1zZWxlY3RlZC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIsbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2Jhcik7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1kaXNhYmxlZCB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWRpc2FibGVkLG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGlzYWJsZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWRpc2FibGVkLG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtbGluayB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpbmspO1xuICAgIH1cbiAgICAmLWxpbms6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAmLWxpbmstc21hbGwge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtbGluayk7XG4gICAgfVxuICAgICYtbGluay1zbWFsbDpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgICYtc291cmNlLWNvZGUge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1zb3VyY2UtY29kZS1wcm87XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG5cbiAgICAgICAgJi1zZWNvbmRhcnkge1xuICAgICAgICAgICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXNvdXJjZS1jb2RlLXBybztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeSB7XG4gICAgICAgIC5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtdGl0bGUtc2Vjb25kYXJ5LS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LXRpdGxlLXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtdGl0bGUtc2Vjb25kYXJ5LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgIH1cblxuICAgICYtc21hbGwtc2Vjb25kYXJ5IHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcblxuICAgICAgICAmLS1ob3ZlcmFibGUge1xuICAgICAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtc2Vjb25kYXJ5LS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1zbWFsbC0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcblxuICAgICAgICAmLS1ob3ZlcmFibGUge1xuICAgICAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1zbWFsbC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1saWdodCwgbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1saWdodCwgbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC0tZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWRpc2FibGVkLG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kaXNhYmxlZC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAvLyBgbnVpLXRleHQtaGludGAgc3R5bGVzIGFyZSBkZXByZWNhdGVkLiBVc2UgYG51aS10ZXh0LXNtYWxsLXNlY29uZGFyeWAgaW5zdGVhZC5cbiAgICAmLWhpbnQge1xuICAgICAgICAubnVpLXRleHQtaGludChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtaGludChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWhpbnQtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLWhpbnQtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi12YWxpZGF0aW9uIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1jcml0aWNhbCk7XG4gICAgfVxuXG4gICAgJi1lbGxpcHNpcyB7XG4gICAgICAgIC50ZXh0LW92ZXJmbG93KGVsbGlwc2lzKTtcbiAgICB9XG59XG5cbiJdfQ== */"],
        data: {
          animation: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_5__["expand"]]
        }
      });

      var TreeDialogContentExampleComponent = /*#__PURE__*/function () {
        function TreeDialogContentExampleComponent(cdRef, viewPortManager, activeDialog) {
          _classCallCheck(this, TreeDialogContentExampleComponent);

          this.cdRef = cdRef;
          this.viewPortManager = viewPortManager;
          this.activeDialog = activeDialog;
          this.items = [];
          this.isLoading = false;
          this.itemConfig = {
            trackBy: function trackBy(index, item) {
              return item === null || item === void 0 ? void 0 : item.name;
            }
          };
        }

        _createClass(TreeDialogContentExampleComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.viewPortManager.setViewport(this.repeat.viewportRef);
          }
        }, {
          key: "close",
          value: function close() {
            this.activeDialog.close();
          }
        }]);

        return TreeDialogContentExampleComponent;
      }();

      TreeDialogContentExampleComponent.ɵfac = function TreeDialogContentExampleComponent_Factory(t) {
        return new (t || TreeDialogContentExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_5__["VirtualViewportManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_5__["NuiActiveDialog"]));
      };

      TreeDialogContentExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: TreeDialogContentExampleComponent,
        selectors: [["nui-dialog-content-dialog-example"]],
        viewQuery: function TreeDialogContentExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_5__["RepeatComponent"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.repeat = _t.first);
          }
        },
        inputs: {
          items: "items",
          isLoading: "isLoading"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_5__["VirtualViewportManager"]])],
        decls: 9,
        vars: 6,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_COMMON_TREE_TREE_SHOW_ALL_DIALOG_TREE_SHOW_ALL_DIALOG_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Dialog title");
            i18n_0 = MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_COMMON_TREE_TREE_SHOW_ALL_DIALOG_TREE_SHOW_ALL_DIALOG_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral([":\u241Feeb379308b8767b98aa0d27308f4f8dd6b46e559\u241F5892089246202495025:Dialog title"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6327967827692127661$$DEMO_SRC_COMPONENTS_DEMO_COMMON_TREE_TREE_SHOW_ALL_DIALOG_TREE_SHOW_ALL_DIALOG_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Close ");
            i18n_2 = MSG_EXTERNAL_6327967827692127661$$DEMO_SRC_COMPONENTS_DEMO_COMMON_TREE_TREE_SHOW_ALL_DIALOG_TREE_SHOW_ALL_DIALOG_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral([":\u241F4dc1e9a4bbd21cf153990984cd4ecb4444117098\u241F6327967827692127661: Close "])));
          }

          return [["title", i18n_0, 3, "closed"], ["nui-busy", "", 3, "busy"], [1, "d-flex", "flex-row"], [1, "virtual-scroll-list-repeat", 3, "itemConfig", "repeatItemTemplateRef", "itemsSource", "virtualScroll", "itemSize"], ["nui-button", "", "type", "button", 3, "click"], i18n_2, ["repeatItemTemplate", ""], [1, "d-flex", "justify-content-between", "w-100"]];
        },
        template: function TreeDialogContentExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-dialog-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closed", function TreeDialogContentExampleComponent_Template_nui_dialog_header_closed_0_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "nui-repeat", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nui-dialog-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TreeDialogContentExampleComponent_Template_button_click_5_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](6, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TreeDialogContentExampleComponent_ng_template_7_Template, 5, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("busy", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("itemConfig", ctx.itemConfig)("repeatItemTemplateRef", _r0)("itemsSource", ctx.items)("virtualScroll", true)("itemSize", 30);
          }
        },
        directives: [_src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_14__["DialogHeaderComponent"], _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_12__["BusyComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_15__["RepeatComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_16__["DialogFooterComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_10__["ButtonComponent"]],
        styles: [".virtual-scroll-list-repeat[_ngcontent-%COMP%] {\n            height: 400px; // height has to be defined if using 'nui-repeat' with virtual scroll\n        }"],
        data: {
          animation: []
        },
        changeDetection: 0
      });
      /***/
    },

    /***/
    "UpE6":
    /*!*************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree.module.ts ***!
      \*************************************************************/

    /*! exports provided: TreeModule */

    /***/
    function UpE6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeModule", function () {
        return TreeModule;
      });
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
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
      "JW+Z");
      /* harmony import */


      var _tree_checkbox_lazy_tree_checkbox_lazy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tree-checkbox-lazy/tree-checkbox-lazy.component */
      "5xwD");
      /* harmony import */


      var _tree_visual_test_tree_basic_test_tree_basic_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tree-visual-test/tree-basic-test/tree-basic-test.component */
      "obwz");
      /* harmony import */


      var _tree_visual_test_tree_checkbox_test_tree_checkbox_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tree-visual-test/tree-checkbox-test/tree-checkbox-test.component */
      "5DdY");
      /* harmony import */


      var _tree_visual_test_tree_paginator_test_tree_paginator_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tree-visual-test/tree-paginator-test/tree-paginator-test.component */
      "DSKd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TreeDocsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].beta
          },
          showThemeSwitcher: true
        }
      }, {
        path: "basic",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TreeBasicExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "lazy",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TreeLazyExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "leaf-pagination",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TreeLeafPaginationExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "show-all-dialog",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TreeShowAllDialogExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "styling",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TreeStylingExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "with-additional-content",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TreeWithAdditionalContentExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "checkbox",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TreeCheckboxExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "checkbox-lazy",
        component: _tree_checkbox_lazy_tree_checkbox_lazy_component__WEBPACK_IMPORTED_MODULE_4__["TreeCheckboxLazyComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "load-more",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TreeLoadMoreExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "tree-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TreeVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var TreeModule = function TreeModule() {
        _classCallCheck(this, TreeModule);
      };

      TreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: TreeModule
      });
      TreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function TreeModule_Factory(t) {
          return new (t || TreeModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("ItIQ");
          }
        }],
        imports: [[_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiExpanderModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMenuModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSpinnerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiPaginatorModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDialogModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRepeatModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiBusyModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](TreeModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["TreeBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TreeDocsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TreeStylingExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TreeVisualTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TreeLazyExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TreeCheckboxExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TreeLeafPaginationExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TreeWithAdditionalContentExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TreeShowAllDialogExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TreeDialogContentExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TreeLoadMoreExampleComponent"], _tree_visual_test_tree_basic_test_tree_basic_test_component__WEBPACK_IMPORTED_MODULE_5__["TreeBasicTestComponent"], _tree_visual_test_tree_checkbox_test_tree_checkbox_test_component__WEBPACK_IMPORTED_MODULE_6__["TreeCheckboxTestComponent"], _tree_visual_test_tree_paginator_test_tree_paginator_test_component__WEBPACK_IMPORTED_MODULE_7__["TreePaginatorTestComponent"], _tree_checkbox_lazy_tree_checkbox_lazy_component__WEBPACK_IMPORTED_MODULE_4__["TreeCheckboxLazyComponent"]],
          imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiExpanderModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMenuModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSpinnerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiPaginatorModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDialogModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRepeatModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiBusyModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "e5b1":
    /*!***************************************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree-lazy/tree-lazy.example.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: TreeLazyExampleComponent */

    /***/
    function e5b1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeLazyExampleComponent", function () {
        return TreeLazyExampleComponent;
      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
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
      /*! ../../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../../src/lib/icon/icon.component */
      "45Bz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../../src/lib/spinner/spinner.component */
      "NFOm");

      function TreeLazyExampleComponent_cdk_nested_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-nested-tree-node", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", node_r2.name, " ");
        }
      }

      function TreeLazyExampleComponent_cdk_nested_tree_node_2_nui_spinner_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-spinner", 13);
        }

        if (rf & 2) {
          var node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("show", node_r3.isLoading)("delay", 0);
        }
      }

      function TreeLazyExampleComponent_cdk_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-nested-tree-node", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TreeLazyExampleComponent_cdk_nested_tree_node_2_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var node_r3 = ctx.$implicit;

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.loadMore(node_r3, _r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "nui-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TreeLazyExampleComponent_cdk_nested_tree_node_2_nui_spinner_7_Template, 1, 2, "nui-spinner", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](8, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("icon", ctx_r1.treeControl.isExpanded(node_r3) ? "triangle-down" : "triangle-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", node_r3.name, " (", node_r3.length, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("nui-tree__body--collapsed", !ctx_r1.treeControl.isExpanded(node_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@expandedState", ctx_r1.treeControl.isExpanded(node_r3) ? "expanded" : "collapsed");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", node_r3.isLoading);
        }
      }

      var TREE_DATA = [{
        name: "Fruit",
        children: [],
        length: 3,
        isLoading: false
      }];

      var HttpMock = /*#__PURE__*/function () {
        function HttpMock() {
          _classCallCheck(this, HttpMock);
        }

        _createClass(HttpMock, [{
          key: "get",
          value: function get() {
            var res = [{
              name: "Banana"
            }, {
              name: "Fruit",
              children: [],
              length: 3,
              isLoading: false
            }, {
              name: "Fruit loops"
            }];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(res).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(3000));
          }
        }]);

        return HttpMock;
      }();

      HttpMock.ɵfac = function HttpMock_Factory(t) {
        return new (t || HttpMock)();
      };

      HttpMock.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: HttpMock,
        factory: HttpMock.ɵfac
      });

      var TreeLazyExampleComponent = /*#__PURE__*/function () {
        function TreeLazyExampleComponent(http, differ) {
          _classCallCheck(this, TreeLazyExampleComponent);

          this.http = http;
          this.differ = differ;
          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](function (node) {
            return node.children;
          });
          this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["ArrayDataSource"](TREE_DATA);

          this.hasChild = function (_, node) {
            return node.length;
          };
        }

        _createClass(TreeLazyExampleComponent, [{
          key: "loadMore",
          value: function loadMore(node, nestedNode) {
            var _this19 = this;

            var _a;

            var differ = this.differ.find(node.children).create();

            if (((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) === node.length || node.isLoading) {
              return;
            }

            node.isLoading = true;
            this.http.get().subscribe(function (res) {
              node.isLoading = false;
              node.children = res;

              _this19.cdkTree.renderNodeChanges(node.children, differ, nestedNode.nodeOutlet.first.viewContainer, node);
            });
          }
        }]);

        return TreeLazyExampleComponent;
      }();

      TreeLazyExampleComponent.ɵfac = function TreeLazyExampleComponent_Factory(t) {
        return new (t || TreeLazyExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](HttpMock), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]));
      };

      TreeLazyExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TreeLazyExampleComponent,
        selectors: [["nui-tree-lazy-example"]],
        viewQuery: function TreeLazyExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cdkTree = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([HttpMock])],
        decls: 3,
        vars: 3,
        consts: [[3, "dataSource", "treeControl"], ["class", "nui-tree__leaf", 4, "cdkTreeNodeDef"], ["class", "nui-tree", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "nui-tree__leaf"], ["nui-button", "", "displayStyle", "action", "type", "button", "disabled", ""], [1, "nui-tree"], ["nestedNode", "cdkNestedTreeNode"], ["cdkTreeNodeToggle", "", 1, "nui-tree__header", 3, "click"], [1, "nui-tree__header-icon", 3, "icon"], [1, "nui-tree__header-title"], [1, "nui-tree__body"], [3, "show", "delay", 4, "ngIf"], ["cdkTreeNodeOutlet", ""], [3, "show", "delay"]],
        template: function TreeLazyExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-tree", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TreeLazyExampleComponent_cdk_nested_tree_node_1_Template, 3, 1, "cdk-nested-tree-node", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TreeLazyExampleComponent_cdk_nested_tree_node_2_Template, 9, 7, "cdk-nested-tree-node", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkNestedTreeNode"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeToggle"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeOutlet"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"]],
        styles: [".nui-tree--expanded[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.nui-tree__icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n  margin-left: -7px;\n}\n.nui-tree__header[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 3px;\n  cursor: pointer;\n  display: flex;\n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  \n  -o-user-select: none;\n  user-select: none;\n}\n.nui-tree__header[_ngcontent-%COMP%]:hover {\n  background-color: var(--nui-color-bg-transparent-hover,rgba(17, 17, 17, 0.05));\n}\n.nui-tree__header-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  line-height: 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  color: var(--nui-color-text-default,#111);\n}\n.nui-tree__header-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-grow: 2;\n  justify-content: flex-start;\n  padding-left: 5px;\n  min-width: 0;\n  padding-right: 5px;\n}\n.nui-tree__header-content-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content--with-icon[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.nui-tree__header-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 2;\n  min-width: 0;\n  width: 100%;\n}\n.nui-tree__header.nui-expander__header--empty.nui-expander__header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.nui-tree__header.nui-expander__header--empty[_ngcontent-%COMP%]   .nui-expander__header-content[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.nui-tree__custom-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nui-tree__custom-header--empty[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n}\n.nui-tree__body[_ngcontent-%COMP%] {\n  border: none;\n  border-left: dotted 2px #d9d9d9;\n  border-left: dotted 2px var(--nui-color-line-default, #d9d9d9);\n  color: #111;\n  color: var(--nui-color-text-default, #111);\n  margin-left: 14px;\n  padding-left: 14px;\n}\n.nui-tree__body.hide-left-border[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.nui-tree__body.ng-animating[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__body--collapsed[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__leaf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nui-tree__invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2V4cGFuZGVyLWJhc2UubGVzcyIsInRyZWUtbGF6eS5jb21wb25lbnQuZXhhbXBsZS5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvbm8tc2VsZWN0Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9jc3MtdmFyaWFibGVzLmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy90ZXh0LW92ZXJmbG93Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL251aS1mcmFtZXdvcmstdHlwb2dyYXBoeS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVJO0VBQ0ksbUJBQUE7QUNkUjtBRGlCSTtFQWJJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFTQSxpQkFBQTtBQ1RSO0FEWUk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUUzQk4seUJBQUE7RURrQkEsNEJBQTRCO0VDakI1QixzQkFBQTtFRG1CQSxnQkFBZ0I7RUNsQmhCLHFCQUFBO0VEb0JBLFdBQVc7RUFDWCw4Q0FBOEM7RUNsQjlDLG9CQUFBO0VBQ0EsaUJBQUE7QURvQkY7QURJUTtFRzFCSiw4RUFBQTtBRnlCSjtBREtRO0VJMUJKLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUVBLHVCQUFBO0VDUkEsaUJBQUE7RUFDQSxlQUFBO0VBMEJBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FKUUo7QUREUTtFQW5DQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDdUNSO0FETlE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1FaO0FETlk7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNRaEI7QURMWTtFQUNJLGVBQUE7QUNPaEI7QURKWTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNNaEI7QUREWTtFQUNJLG9CQUFBO0FDR2hCO0FETFE7RUFNUSxlQUFBO0VBQ0EsZ0JBQUE7QUNFaEI7QURHSTtFQUNJLFdBQUE7QUNEUjtBREdRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNEWjtBREtJO0VBQ0ksWUFBQTtFQUNBLCtCQUFBO0VBQ0EsOERBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSFI7QURLUTtFQUNJLGNBQUE7QUNIWjtBRE1RO0VBQ0ksZ0JBQUE7QUNKWjtBQXBHUTtFQUNJLGdCQUFBO0FBc0daO0FBbEdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBb0dSO0FBakdJO0VBQ0ksYUFBQTtBQW1HUiIsImZpbGUiOiJ0cmVlLWxhenkuY29tcG9uZW50LmV4YW1wbGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9udWktZnJhbWV3b3JrLXZhcmlhYmxlcy5sZXNzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vbWl4aW5zLmxlc3NcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9udWktZnJhbWV3b3JrLXR5cG9ncmFwaHkubGVzc1wiO1xuXG4uZXhwYW5kZXIoKSB7XG4gICAgLmV4cGFuZGVyLWljb24oKSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICB9XG5cbiAgICAmLS1leHBhbmRlZCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBAbnVpLXNwYWNlLXhzO1xuICAgIH1cblxuICAgICZfX2ljb24ge1xuICAgICAgICAuZXhwYW5kZXItaWNvbigpO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICB9XG5cbiAgICAmX19oZWFkZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBAbnVpLXJhZGl1cy1kZWZhdWx0O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC5uby1zZWxlY3QoKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIC5zZXRDc3NWYXJpYWJsZShiYWNrZ3JvdW5kLWNvbG9yLCBudWktY29sb3ItYmctdHJhbnNwYXJlbnQtaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi10aXRsZSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogQG51aS1saW5lLWhlaWdodC1kZWZhdWx0O1xuICAgICAgICAgICAgLnRleHQtb3ZlcmZsb3coZWxsaXBzaXMpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LCBudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaWNvbiB7XG4gICAgICAgICAgICAuZXhwYW5kZXItaWNvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1jb250ZW50IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBAbnVpLXNwYWNlLXhzO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogQG51aS1zcGFjZS14cztcblxuICAgICAgICAgICAgJi1pY29uIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLS13aXRoLWljb24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLm51aS1leHBhbmRlcl9faGVhZGVyLS1lbXB0eSB7XG4gICAgICAgICAgICAmLm51aS1leHBhbmRlcl9faGVhZGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm51aS1leHBhbmRlcl9faGVhZGVyLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jdXN0b20taGVhZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJi0tZW1wdHkge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYm9keSB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IGRvdHRlZCBAbnVpLWxpbmUtbWVkaXVtIEBudWktY29sb3ItbGluZS1kZWZhdWx0O1xuICAgICAgICBib3JkZXItbGVmdDogZG90dGVkIEBudWktbGluZS1tZWRpdW0gdmFyKC0tbnVpLWNvbG9yLWxpbmUtZGVmYXVsdCwgQG51aS1jb2xvci1saW5lLWRlZmF1bHQpO1xuICAgICAgICBjb2xvcjogQG51aS1jb2xvci1iZy1kYXJrO1xuICAgICAgICBjb2xvcjogdmFyKC0tbnVpLWNvbG9yLXRleHQtZGVmYXVsdCwgIzExMSk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAoQG51aS1zcGFjZS1tZCAtIDEpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IChAbnVpLXNwYWNlLW1kIC0gMSk7XG5cbiAgICAgICAgJi5oaWRlLWxlZnQtYm9yZGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5uZy1hbmltYXRpbmcge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJtaXhpbnMvZXhwYW5kZXItYmFzZVwiO1xuXG4ubnVpLXRyZWUge1xuICAgIC5leHBhbmRlcigpO1xuXG4gICAgJl9fYm9keSB7XG4gICAgICAgICYtLWNvbGxhcHNlZCB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fbGVhZiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9faW52aXNpYmxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iLCIubm8tc2VsZWN0KCkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAgLyogQ2hyb21lIGFsbCAvIFNhZmFyaSBhbGwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIEZpcmVmb3ggYWxsICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgICAvKiBJRSAxMCsgKi9cblxuICAvKiBObyBzdXBwb3J0IGZvciB0aGVzZSB5ZXQsIHVzZSBhdCBvd24gcmlzayAqL1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59IiwiLnNldENzc1ZhcmlhYmxlKEBwcm9wZXJ0eSwgQHZhbHVlKXtcbiAgICBAZXZhbHVhdGVkIDogXCJAe3ZhbHVlfVwiO1xuICAgIC8vdGhlIGRvdWJsZSBAIGZvcmNlcyBhIGluZGlyZWN0aW9uIGV2YWx1YXRpb24sIGtpbmRhIGxpa2UgYSBwb2ludGVyXG4gICAgQGZhbGxiYWNrIDogQEBldmFsdWF0ZWQ7XG5cbiAgICBAe3Byb3BlcnR5fTogflwidmFyKC0tQHt2YWx1ZX0sQHtmYWxsYmFja30pXCI7XG59XG4iLCIvLyBUZXh0IG92ZXJmbG93XG4vLyBSZXF1aXJlcyBpbmxpbmUtYmxvY2sgb3IgYmxvY2sgZm9yIHByb3BlciBzdHlsaW5nXG5cbi8vIFRPRE86IFJFTU9WRSBMRUdBQ1kgQk9PVFNUUkFQIE1JWElOXG4udGV4dC1vdmVyZmxvdygpIHtcbiAgLnRleHQtb3ZlcmZsb3coJ2VsbGlwc2lzJyk7XG59XG5cbi50ZXh0LW92ZXJmbG93KEBvdmVyZmxvdykge1xuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgLW1zLXRleHQtb3ZlcmZsb3c6IEBvdmVyZmxvdztcbiAgICAtby10ZXh0LW92ZXJmbG93OiBAb3ZlcmZsb3c7XG4gICAgdGV4dC1vdmVyZmxvdzogQG92ZXJmbG93O1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSBcIm51aS1mcmFtZXdvcmstdmFyaWFibGVzLmxlc3NcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJtaXhpbnMubGVzc1wiO1xuXG4vKiBmb250LXNpemUgKi9cbi5udWktdGV4dC1zaXplKEBzaXplOiBkZWZhdWx0KSB7XG4gICAgbGluZS1oZWlnaHQ6IH5cIkB7bnVpLWxpbmUtaGVpZ2h0LUB7c2l6ZX19XCI7XG4gICAgZm9udC1zaXplOiB+XCJAe251aS1mb250LXNpemUtQHtzaXplfX1cIjtcbn1cbi8qIGZvbnQtc2l6ZSBlbmRzICovXG5cbi5udWktdGV4dC1wYWdlKCkge1xuICAgIC5udWktdGV4dC1zaXplKGhlcm8pO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG59XG5cbi5udWktdGV4dC13aWRnZXQoKSB7XG4gICAgLm51aS10ZXh0LXNpemUoYmlnKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xufVxuXG4ubnVpLXRleHQtcGFuZWwoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1sYWJlbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1kZWZhdWx0KEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtc2Vjb25kYXJ5KEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtc21hbGwoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4vLyBUaGlzIG1peGluIGlzIGRlcHJlY2F0ZWQuIFVzZSBudWktdGV4dC1zbWFsbCgpIGluc3RlYWRcbi5udWktdGV4dC1oaW50KEBjb2xvciwgQGNvbG9yTmFtZSkgIHtcbiAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1ob3ZlcmFibGUoKSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IGRvdHRlZDtcbn1cblxuLm51aS10ZXh0LXNtYWxsLXNlY29uZGFyeSgpIHtcbiAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4vL3NlbWFudGljIHN0eWxlc1xuLm51aS10ZXh0IHtcbiAgICAmLWRpc2FibGVkIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWRpc2FibGVkLCBudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuICAgICYtcHJvZHVjdCB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKGhlcm8pO1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXJvYm90bztcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtYm9sZDtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuXG4gICAgJi1wYWdlIHtcbiAgICAgICAgLm51aS10ZXh0LXBhZ2UoKTtcblxuICAgICAgICAmLS1ob3ZlcmFibGUge1xuICAgICAgICAgICAgLm51aS10ZXh0LXBhZ2UoKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtd2lkZ2V0IHtcbiAgICAgICAgLm51aS10ZXh0LXdpZGdldCgpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtd2lkZ2V0KCk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXBhbmVsIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgIH1cblxuICAgICYtcGFuZWwtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtbGFiZWwge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1sYWJlbC0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0IHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1pbnZlcnNlLXNlbGVjdGVkIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIsbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2Jhcik7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG4gICAgJi1kZWZhdWx0LS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWRhcmtiZy1zZWxlY3RlZCB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyLG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0tZGFya2JnLXNlbGVjdGVkLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2JhcixudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyKTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRpc2FibGVkIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1kaXNhYmxlZC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1saW5rIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtbGluayk7XG4gICAgfVxuICAgICYtbGluazpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgICYtbGluay1zbWFsbCB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1saW5rKTtcbiAgICB9XG4gICAgJi1saW5rLXNtYWxsOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgJi1zb3VyY2UtY29kZSB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXNvdXJjZS1jb2RlLXBybztcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcblxuICAgICAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc291cmNlLWNvZGUtcHJvO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICAgICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtdGl0bGUtc2Vjb25kYXJ5IHtcbiAgICAgICAgLm51aS10ZXh0LXRpdGxlLXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi10aXRsZS1zZWNvbmRhcnktLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi10aXRsZS1zZWNvbmRhcnktLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtc21hbGwge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1zbWFsbC1zZWNvbmRhcnktLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcblxuICAgICAgICAmLS1ob3ZlcmFibGUge1xuICAgICAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNtYWxsLS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNtYWxsLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LCBudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LCBudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kaXNhYmxlZCB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRpc2FibGVkLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWRpc2FibGVkLG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgIC8vIGBudWktdGV4dC1oaW50YCBzdHlsZXMgYXJlIGRlcHJlY2F0ZWQuIFVzZSBgbnVpLXRleHQtc21hbGwtc2Vjb25kYXJ5YCBpbnN0ZWFkLlxuICAgICYtaGludCB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLWhpbnQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtaGludC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtaGludC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtaGludChAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXZhbGlkYXRpb24ge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWNyaXRpY2FsKTtcbiAgICB9XG5cbiAgICAmLWVsbGlwc2lzIHtcbiAgICAgICAgLnRleHQtb3ZlcmZsb3coZWxsaXBzaXMpO1xuICAgIH1cbn1cblxuIl19 */"],
        data: {
          animation: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["expand"]]
        }
      });
      /***/
    },

    /***/
    "o3LO":
    /*!*******************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/http-mock.service.ts ***!
      \*******************************************************************/

    /*! exports provided: HttpMockService */

    /***/
    function o3LO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpMockService", function () {
        return HttpMockService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HttpMockService = /*#__PURE__*/function () {
        function HttpMockService() {
          _classCallCheck(this, HttpMockService);

          this.fruitsList = [$localize(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["apple"]))), $localize(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["orange"]))), $localize(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["banana"]))), $localize(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["watermelon"]))), $localize(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["peach"]))), $localize(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["pineapple"]))), $localize(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["lemon"]))), $localize(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["mango"])))];
          this.vegetablesList = [$localize(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["tomato"]))), $localize(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["cucumber"]))), $localize(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["cabbage"]))), $localize(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["pepper"]))), $localize(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["carrot"]))), $localize(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["onion"]))), $localize(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["broccoli"]))), $localize(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["corn"])))];
          this.totalItems = 1337;
        }

        _createClass(HttpMockService, [{
          key: "getNodeItems",
          value: function getNodeItems(nodeId, page, pageSize) {
            var _this20 = this;

            // nodeId can be handled on API depending on app needs
            var itemList = nodeId === "Vegetables" ? this.vegetablesList : this.fruitsList;
            var items = Array.from({
              length: pageSize
            }).map(function () {
              return {
                name: _this20.getRandomFrom(itemList),
                page: page
              };
            });
            var response = {
              items: items,
              total: this.totalItems
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(response).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000));
          }
        }, {
          key: "getRandomFrom",
          value: function getRandomFrom(list) {
            return list[Math.floor(Math.random() * list.length)];
          }
        }]);

        return HttpMockService;
      }();

      HttpMockService.ɵfac = function HttpMockService_Factory(t) {
        return new (t || HttpMockService)();
      };

      HttpMockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: HttpMockService,
        factory: HttpMockService.ɵfac
      });
      /***/
    },

    /***/
    "obwz":
    /*!************************************************************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree-visual-test/tree-basic-test/tree-basic-test.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: TreeBasicTestComponent */

    /***/
    function obwz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeBasicTestComponent", function () {
        return TreeBasicTestComponent;
      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../data */
      "EsWI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../../../src/lib/icon/icon.component */
      "45Bz");

      function TreeBasicTestComponent_cdk_nested_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "cdk-nested-tree-node", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", node_r2.name, " ");
        }
      }

      function TreeBasicTestComponent_cdk_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "cdk-nested-tree-node", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "nui-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](6, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("icon", ctx_r1.treeControl.isExpanded(node_r3) ? "triangle-down" : "triangle-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](node_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("nui-tree__body--collapsed", !ctx_r1.treeControl.isExpanded(node_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@expandedState", ctx_r1.treeControl.isExpanded(node_r3) ? "expanded" : "collapsed");
        }
      }

      var TreeBasicTestComponent = function TreeBasicTestComponent() {
        _classCallCheck(this, TreeBasicTestComponent);

        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](function (node) {
          return node.children;
        });
        this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["ArrayDataSource"](_data__WEBPACK_IMPORTED_MODULE_3__["TREE_DATA"]);

        this.hasChild = function (_, node) {
          return !!node.children && node.children.length > 0;
        };
      };

      TreeBasicTestComponent.ɵfac = function TreeBasicTestComponent_Factory(t) {
        return new (t || TreeBasicTestComponent)();
      };

      TreeBasicTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: TreeBasicTestComponent,
        selectors: [["nui-tree-basic-test"]],
        hostAttrs: ["id", "nui-tree-basic-example"],
        decls: 3,
        vars: 4,
        consts: [[3, "dataSource", "treeControl"], ["class", "nui-tree__leaf", 4, "cdkTreeNodeDef"], ["class", "nui-tree", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "nui-tree__leaf"], ["nui-button", "", "displayStyle", "action", "type", "button", "disabled", ""], [1, "nui-tree"], ["cdkTreeNodeToggle", "", 1, "nui-tree__header"], [1, "nui-tree__header-icon", 3, "icon"], [1, "nui-tree__header-title"], [1, "nui-tree__body"], ["cdkTreeNodeOutlet", ""]],
        template: function TreeBasicTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "cdk-tree", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TreeBasicTestComponent_cdk_nested_tree_node_1_Template, 3, 1, "cdk-nested-tree-node", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TreeBasicTestComponent_cdk_nested_tree_node_2_Template, 7, 5, "cdk-nested-tree-node", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@.disabled", true)("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkNestedTreeNode"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeToggle"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeOutlet"]],
        styles: [".nui-tree--expanded[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.nui-tree__icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n  margin-left: -7px;\n}\n.nui-tree__header[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 3px;\n  cursor: pointer;\n  display: flex;\n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  \n  -o-user-select: none;\n  user-select: none;\n}\n.nui-tree__header[_ngcontent-%COMP%]:hover {\n  background-color: var(--nui-color-bg-transparent-hover,rgba(17, 17, 17, 0.05));\n}\n.nui-tree__header-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  line-height: 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  color: var(--nui-color-text-default,#111);\n}\n.nui-tree__header-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-grow: 2;\n  justify-content: flex-start;\n  padding-left: 5px;\n  min-width: 0;\n  padding-right: 5px;\n}\n.nui-tree__header-content-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content--with-icon[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.nui-tree__header-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 2;\n  min-width: 0;\n  width: 100%;\n}\n.nui-tree__header.nui-expander__header--empty.nui-expander__header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.nui-tree__header.nui-expander__header--empty[_ngcontent-%COMP%]   .nui-expander__header-content[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.nui-tree__custom-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nui-tree__custom-header--empty[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n}\n.nui-tree__body[_ngcontent-%COMP%] {\n  border: none;\n  border-left: dotted 2px #d9d9d9;\n  border-left: dotted 2px var(--nui-color-line-default, #d9d9d9);\n  color: #111;\n  color: var(--nui-color-text-default, #111);\n  margin-left: 14px;\n  padding-left: 14px;\n}\n.nui-tree__body.hide-left-border[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.nui-tree__body.ng-animating[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__body--collapsed[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__leaf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nui-tree__invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2V4cGFuZGVyLWJhc2UubGVzcyIsInRyZWUtYmFzaWMtdGVzdC5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL25vLXNlbGVjdC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvY3NzLXZhcmlhYmxlcy5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvdGV4dC1vdmVyZmxvdy5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9udWktZnJhbWV3b3JrLXR5cG9ncmFwaHkubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlSTtFQUNJLG1CQUFBO0FDZFI7QURpQkk7RUFiSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBU0EsaUJBQUE7QUNUUjtBRFlJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VFM0JOLHlCQUFBO0VEa0JBLDRCQUE0QjtFQ2pCNUIsc0JBQUE7RURtQkEsZ0JBQWdCO0VDbEJoQixxQkFBQTtFRG9CQSxXQUFXO0VBQ1gsOENBQThDO0VDbEI5QyxvQkFBQTtFQUNBLGlCQUFBO0FEb0JGO0FESVE7RUcxQkosOEVBQUE7QUZ5Qko7QURLUTtFSTFCSixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFFQSx1QkFBQTtFQ1JBLGlCQUFBO0VBQ0EsZUFBQTtFQTBCQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBSlFKO0FERFE7RUFuQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ3VDUjtBRE5RO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNRWjtBRE5ZO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDUWhCO0FETFk7RUFDSSxlQUFBO0FDT2hCO0FESlk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTWhCO0FERFk7RUFDSSxvQkFBQTtBQ0doQjtBRExRO0VBTVEsZUFBQTtFQUNBLGdCQUFBO0FDRWhCO0FER0k7RUFDSSxXQUFBO0FDRFI7QURHUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDRFo7QURLSTtFQUNJLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hSO0FES1E7RUFDSSxjQUFBO0FDSFo7QURNUTtFQUNJLGdCQUFBO0FDSlo7QUFwR1E7RUFDSSxnQkFBQTtBQXNHWjtBQWxHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQW9HUjtBQWpHSTtFQUNJLGFBQUE7QUFtR1IiLCJmaWxlIjoidHJlZS1iYXNpYy10ZXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL251aS1mcmFtZXdvcmstdmFyaWFibGVzLmxlc3NcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9taXhpbnMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL251aS1mcmFtZXdvcmstdHlwb2dyYXBoeS5sZXNzXCI7XG5cbi5leHBhbmRlcigpIHtcbiAgICAuZXhwYW5kZXItaWNvbigpIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cblxuICAgICYtLWV4cGFuZGVkIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IEBudWktc3BhY2UteHM7XG4gICAgfVxuXG4gICAgJl9faWNvbiB7XG4gICAgICAgIC5leHBhbmRlci1pY29uKCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgIH1cblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IEBudWktcmFkaXVzLWRlZmF1bHQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLm5vLXNlbGVjdCgpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQtY29sb3IsIG51aS1jb2xvci1iZy10cmFuc3BhcmVudC1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmLXRpdGxlIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBAbnVpLWxpbmUtaGVpZ2h0LWRlZmF1bHQ7XG4gICAgICAgICAgICAudGV4dC1vdmVyZmxvdyhlbGxpcHNpcyk7XG4gICAgICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsIG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pY29uIHtcbiAgICAgICAgICAgIC5leHBhbmRlci1pY29uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNvbnRlbnQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IEBudWktc3BhY2UteHM7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBAbnVpLXNwYWNlLXhzO1xuXG4gICAgICAgICAgICAmLWljb24ge1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtLXdpdGgtaWNvbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYubnVpLWV4cGFuZGVyX19oZWFkZXItLWVtcHR5IHtcbiAgICAgICAgICAgICYubnVpLWV4cGFuZGVyX19oZWFkZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubnVpLWV4cGFuZGVyX19oZWFkZXItY29udGVudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2N1c3RvbS1oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmLS1lbXB0eSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItbGVmdDogZG90dGVkIEBudWktbGluZS1tZWRpdW0gQG51aS1jb2xvci1saW5lLWRlZmF1bHQ7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBkb3R0ZWQgQG51aS1saW5lLW1lZGl1bSB2YXIoLS1udWktY29sb3ItbGluZS1kZWZhdWx0LCBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdCk7XG4gICAgICAgIGNvbG9yOiBAbnVpLWNvbG9yLWJnLWRhcms7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1udWktY29sb3ItdGV4dC1kZWZhdWx0LCAjMTExKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IChAbnVpLXNwYWNlLW1kIC0gMSk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogKEBudWktc3BhY2UtbWQgLSAxKTtcblxuICAgICAgICAmLmhpZGUtbGVmdC1ib3JkZXIge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLm5nLWFuaW1hdGluZyB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGlucy9leHBhbmRlci1iYXNlXCI7XG5cbi5udWktdHJlZSB7XG4gICAgLmV4cGFuZGVyKCk7XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgJi0tY29sbGFwc2VkIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19sZWFmIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19pbnZpc2libGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiIsIi5uby1zZWxlY3QoKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogRmlyZWZveCBhbGwgKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgIC8qIElFIDEwKyAqL1xuXG4gIC8qIE5vIHN1cHBvcnQgZm9yIHRoZXNlIHlldCwgdXNlIGF0IG93biByaXNrICovXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iLCIuc2V0Q3NzVmFyaWFibGUoQHByb3BlcnR5LCBAdmFsdWUpe1xuICAgIEBldmFsdWF0ZWQgOiBcIkB7dmFsdWV9XCI7XG4gICAgLy90aGUgZG91YmxlIEAgZm9yY2VzIGEgaW5kaXJlY3Rpb24gZXZhbHVhdGlvbiwga2luZGEgbGlrZSBhIHBvaW50ZXJcbiAgICBAZmFsbGJhY2sgOiBAQGV2YWx1YXRlZDtcblxuICAgIEB7cHJvcGVydHl9OiB+XCJ2YXIoLS1Ae3ZhbHVlfSxAe2ZhbGxiYWNrfSlcIjtcbn1cbiIsIi8vIFRleHQgb3ZlcmZsb3dcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcblxuLy8gVE9ETzogUkVNT1ZFIExFR0FDWSBCT09UU1RSQVAgTUlYSU5cbi50ZXh0LW92ZXJmbG93KCkge1xuICAudGV4dC1vdmVyZmxvdygnZWxsaXBzaXMnKTtcbn1cblxuLnRleHQtb3ZlcmZsb3coQG92ZXJmbG93KSB7XG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAtbXMtdGV4dC1vdmVyZmxvdzogQG92ZXJmbG93O1xuICAgIC1vLXRleHQtb3ZlcmZsb3c6IEBvdmVyZmxvdztcbiAgICB0ZXh0LW92ZXJmbG93OiBAb3ZlcmZsb3c7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwibnVpLWZyYW1ld29yay12YXJpYWJsZXMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGlucy5sZXNzXCI7XG5cbi8qIGZvbnQtc2l6ZSAqL1xuLm51aS10ZXh0LXNpemUoQHNpemU6IGRlZmF1bHQpIHtcbiAgICBsaW5lLWhlaWdodDogflwiQHtudWktbGluZS1oZWlnaHQtQHtzaXplfX1cIjtcbiAgICBmb250LXNpemU6IH5cIkB7bnVpLWZvbnQtc2l6ZS1Ae3NpemV9fVwiO1xufVxuLyogZm9udC1zaXplIGVuZHMgKi9cblxuLm51aS10ZXh0LXBhZ2UoKSB7XG4gICAgLm51aS10ZXh0LXNpemUoaGVybyk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbn1cblxuLm51aS10ZXh0LXdpZGdldCgpIHtcbiAgICAubnVpLXRleHQtc2l6ZShiaWcpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG59XG5cbi5udWktdGV4dC1wYW5lbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWxhYmVsKEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWRlZmF1bHQoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1zZWNvbmRhcnkoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1zbWFsbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi8vIFRoaXMgbWl4aW4gaXMgZGVwcmVjYXRlZC4gVXNlIG51aS10ZXh0LXNtYWxsKCkgaW5zdGVhZFxuLm51aS10ZXh0LWhpbnQoQGNvbG9yLCBAY29sb3JOYW1lKSAge1xuICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWhvdmVyYWJsZSgpIHtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogZG90dGVkO1xufVxuXG4ubnVpLXRleHQtc21hbGwtc2Vjb25kYXJ5KCkge1xuICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi8vc2VtYW50aWMgc3R5bGVzXG4ubnVpLXRleHQge1xuICAgICYtZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsIG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICB9XG4gICAgJi1wcm9kdWN0IHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoaGVybyk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktcm9ib3RvO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1ib2xkO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXBhZ2Uge1xuICAgICAgICAubnVpLXRleHQtcGFnZSgpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtcGFnZSgpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13aWRnZXQge1xuICAgICAgICAubnVpLXRleHQtd2lkZ2V0KCk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC13aWRnZXQoKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtcGFuZWwge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1sYWJlbCB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWludmVyc2Utc2VsZWN0ZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2JhcixudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cbiAgICAmLWRlZmF1bHQtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0tZGFya2JnLXNlbGVjdGVkIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIsbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2Jhcik7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmctc2VsZWN0ZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyLG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRpc2FibGVkLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWxpbmsge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1saW5rKTtcbiAgICB9XG4gICAgJi1saW5rOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgJi1saW5rLXNtYWxsIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpbmspO1xuICAgIH1cbiAgICAmLWxpbmstc21hbGw6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAmLXNvdXJjZS1jb2RlIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc291cmNlLWNvZGUtcHJvO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuXG4gICAgICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1zb3VyY2UtY29kZS1wcm87XG4gICAgICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi10aXRsZS1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeS0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXRpdGxlLXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zbWFsbCB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLXNlY29uZGFyeSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNtYWxsLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnkpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRpc2FibGVkIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC0tZGlzYWJsZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgLy8gYG51aS10ZXh0LWhpbnRgIHN0eWxlcyBhcmUgZGVwcmVjYXRlZC4gVXNlIGBudWktdGV4dC1zbWFsbC1zZWNvbmRhcnlgIGluc3RlYWQuXG4gICAgJi1oaW50IHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtaGludC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtaGludChAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtdmFsaWRhdGlvbiB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtY3JpdGljYWwpO1xuICAgIH1cblxuICAgICYtZWxsaXBzaXMge1xuICAgICAgICAudGV4dC1vdmVyZmxvdyhlbGxpcHNpcyk7XG4gICAgfVxufVxuXG4iXX0= */"],
        data: {
          animation: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["expand"]]
        }
      });
      /***/
    },

    /***/
    "rfh3":
    /*!***********************************************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree-checkbox/tree-checkbox.example.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: TreeCheckboxExampleComponent */

    /***/
    function rfh3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeCheckboxExampleComponent", function () {
        return TreeCheckboxExampleComponent;
      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../../src/lib/icon/icon.component */
      "45Bz");

      function TreeCheckboxExampleComponent_cdk_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "cdk-nested-tree-node", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nui-checkbox", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function TreeCheckboxExampleComponent_cdk_nested_tree_node_2_Template_nui_checkbox_valueChange_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

            var node_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r4.leafItemSelectionToggle(node_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r0.selectionModel.isSelected(node_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](node_r3.name);
        }
      }

      function TreeCheckboxExampleComponent_cdk_nested_tree_node_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "cdk-nested-tree-node", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "nui-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nui-checkbox", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TreeCheckboxExampleComponent_cdk_nested_tree_node_3_Template_nui_checkbox_click_3_listener($event) {
            return $event.stopPropagation();
          })("valueChange", function TreeCheckboxExampleComponent_cdk_nested_tree_node_3_Template_nui_checkbox_valueChange_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var node_r6 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.branchItemSelectionToggle(node_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](8, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r6 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("icon", ctx_r1.treeControl.isExpanded(node_r6) ? "triangle-down" : "triangle-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r1.descendantsAllSelected(node_r6))("indeterminate", ctx_r1.descendantsPartiallySelected(node_r6));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](node_r6.item);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](node_r6.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("nui-tree__body--collapsed", !ctx_r1.treeControl.isExpanded(node_r6));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@expandedState", ctx_r1.treeControl.isExpanded(node_r6) ? "expanded" : "collapsed");
        }
      }

      function TreeCheckboxExampleComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var selected_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", selected_r10.name, " ");
        }
      }

      var TREE_DATA = [{
        name: "Vegetables",
        children: [{
          name: "Green",
          children: [{
            name: "Broccoli"
          }, {
            name: "Brussels sprouts"
          }]
        }, {
          name: "Orange",
          children: [{
            name: "Pumpkins"
          }, {
            name: "Carrots"
          }]
        }, {
          name: "Red"
        }]
      }, {
        name: "Fruit",
        children: [{
          name: "Apple"
        }, {
          name: "Banana"
        }, {
          name: "Fruit loops"
        }]
      }, {
        name: "Meat"
      }];

      var TreeCheckboxExampleComponent = /*#__PURE__*/function () {
        function TreeCheckboxExampleComponent() {
          _classCallCheck(this, TreeCheckboxExampleComponent);

          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](function (node) {
            return node.children;
          });
          this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["ArrayDataSource"](TREE_DATA);
          this.selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true);

          this.hasChild = function (_, node) {
            return !!node.children && node.children.length > 0;
          };
        }
        /** Whether all the descendants of the node are selected. */


        _createClass(TreeCheckboxExampleComponent, [{
          key: "descendantsAllSelected",
          value: function descendantsAllSelected(node) {
            var _this21 = this;

            var descendants = this.treeControl.getDescendants(node);
            return descendants.length > 0 && descendants.every(function (child) {
              return _this21.selectionModel.isSelected(child);
            });
          }
          /** Whether part of the descendants are selected */

        }, {
          key: "descendantsPartiallySelected",
          value: function descendantsPartiallySelected(node) {
            var _this22 = this;

            var descendants = this.treeControl.getDescendants(node);
            var result = descendants.some(function (child) {
              return _this22.selectionModel.isSelected(child);
            });
            return result && !this.descendantsAllSelected(node);
          }
          /** Toggle the branch selection. Select/deselect all the descendants node */

        }, {
          key: "branchItemSelectionToggle",
          value: function branchItemSelectionToggle(node) {
            var _this$selectionModel5,
                _this$selectionModel6,
                _this23 = this;

            this.selectionModel.toggle(node);
            var descendants = this.treeControl.getDescendants(node);
            this.selectionModel.isSelected(node) ? (_this$selectionModel5 = this.selectionModel).select.apply(_this$selectionModel5, _toConsumableArray(descendants)) : (_this$selectionModel6 = this.selectionModel).deselect.apply(_this$selectionModel6, _toConsumableArray(descendants)); // Force update for the parent

            descendants.forEach(function (child) {
              return _this23.selectionModel.isSelected(child);
            });
            this.checkAllParentsSelection(node);
          }
          /** Toggle a leaf item selection. Check all the parents to see if they changed */

        }, {
          key: "leafItemSelectionToggle",
          value: function leafItemSelectionToggle(node) {
            this.selectionModel.toggle(node);
            this.checkAllParentsSelection(node);
          }
          /** Checks all the parents when a leaf node is selected/unselected */

        }, {
          key: "checkAllParentsSelection",
          value: function checkAllParentsSelection(node) {
            var parent = this.getParentNode(node);

            while (parent) {
              this.checkRootNodeSelection(parent);
              parent = this.getParentNode(parent);
            }
          }
          /** Check root node checked state and change it accordingly */

        }, {
          key: "checkRootNodeSelection",
          value: function checkRootNodeSelection(node) {
            var _this24 = this;

            var nodeSelected = this.selectionModel.isSelected(node);
            var descendants = this.treeControl.getDescendants(node);
            var descAllSelected = descendants.length > 0 && descendants.every(function (child) {
              return _this24.selectionModel.isSelected(child);
            });

            if (nodeSelected && !descAllSelected) {
              this.selectionModel.deselect(node);
            } else if (!nodeSelected && descAllSelected) {
              this.selectionModel.select(node);
            }
          }
          /** Get the parent node of a node */

        }, {
          key: "getParentNode",
          value: function getParentNode(node) {
            var parent; // Don't need to get parent if node on the 0 level

            if (TREE_DATA.find(function (n) {
              return n === node;
            })) {
              return;
            }

            var search = function search(n) {
              if (parent || !n.children) {
                return;
              }

              if (n.children.find(function (i) {
                return i === node;
              })) {
                parent = n;
                return;
              }

              return n.children.find(search);
            }; // invoke search on the level 0 items


            TREE_DATA.forEach(search);

            if (!parent) {
              throw new Error("Parent wasn't found");
            }

            return parent;
          }
        }]);

        return TreeCheckboxExampleComponent;
      }();

      TreeCheckboxExampleComponent.ɵfac = function TreeCheckboxExampleComponent_Factory(t) {
        return new (t || TreeCheckboxExampleComponent)();
      };

      TreeCheckboxExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: TreeCheckboxExampleComponent,
        selectors: [["nui-tree-checkbox-example"]],
        hostAttrs: ["id", "nui-tree-checkbox-example"],
        decls: 6,
        vars: 4,
        consts: [[1, "d-flex", "justify-content-between"], [2, "flex", "50%", 3, "dataSource", "treeControl"], ["class", "nui-tree__leaf", 4, "cdkTreeNodeDef"], ["class", "nui-tree", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "list-group", "list-group-striped", 2, "flex", "50%"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "nui-tree__leaf"], ["nui-button", "", "displayStyle", "action", "type", "button", "disabled", ""], [1, "leaf-control", 3, "checked", "valueChange"], [1, "nui-tree"], ["cdkTreeNodeToggle", "", 1, "nui-tree__header"], [1, "nui-tree__header-icon", 3, "icon"], [1, "branch-control", 3, "checked", "indeterminate", "click", "valueChange"], [1, "nui-tree__header-title"], [1, "nui-tree__body"], ["cdkTreeNodeOutlet", ""], [1, "list-group-item"]],
        template: function TreeCheckboxExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "cdk-tree", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TreeCheckboxExampleComponent_cdk_nested_tree_node_2_Template, 4, 2, "cdk-nested-tree-node", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TreeCheckboxExampleComponent_cdk_nested_tree_node_3_Template, 9, 8, "cdk-nested-tree-node", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, TreeCheckboxExampleComponent_li_5_Template, 2, 1, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.hasChild);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.selectionModel.selected);
          }
        },
        directives: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeDef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkNestedTreeNode"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeToggle"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeOutlet"]],
        styles: [".nui-tree--expanded[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.nui-tree__icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n  margin-left: -7px;\n}\n.nui-tree__header[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 3px;\n  cursor: pointer;\n  display: flex;\n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  \n  -o-user-select: none;\n  user-select: none;\n}\n.nui-tree__header[_ngcontent-%COMP%]:hover {\n  background-color: var(--nui-color-bg-transparent-hover,rgba(17, 17, 17, 0.05));\n}\n.nui-tree__header-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  line-height: 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  color: var(--nui-color-text-default,#111);\n}\n.nui-tree__header-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-grow: 2;\n  justify-content: flex-start;\n  padding-left: 5px;\n  min-width: 0;\n  padding-right: 5px;\n}\n.nui-tree__header-content-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content--with-icon[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.nui-tree__header-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 2;\n  min-width: 0;\n  width: 100%;\n}\n.nui-tree__header.nui-expander__header--empty.nui-expander__header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.nui-tree__header.nui-expander__header--empty[_ngcontent-%COMP%]   .nui-expander__header-content[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.nui-tree__custom-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nui-tree__custom-header--empty[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n}\n.nui-tree__body[_ngcontent-%COMP%] {\n  border: none;\n  border-left: dotted 2px #d9d9d9;\n  border-left: dotted 2px var(--nui-color-line-default, #d9d9d9);\n  color: #111;\n  color: var(--nui-color-text-default, #111);\n  margin-left: 14px;\n  padding-left: 14px;\n}\n.nui-tree__body.hide-left-border[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.nui-tree__body.ng-animating[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__body--collapsed[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__leaf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nui-tree__invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2V4cGFuZGVyLWJhc2UubGVzcyIsInRyZWUtY2hlY2tib3guZXhhbXBsZS5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL25vLXNlbGVjdC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvY3NzLXZhcmlhYmxlcy5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvdGV4dC1vdmVyZmxvdy5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9udWktZnJhbWV3b3JrLXR5cG9ncmFwaHkubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlSTtFQUNJLG1CQUFBO0FDZFI7QURpQkk7RUFiSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBU0EsaUJBQUE7QUNUUjtBRFlJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VFM0JOLHlCQUFBO0VEa0JBLDRCQUE0QjtFQ2pCNUIsc0JBQUE7RURtQkEsZ0JBQWdCO0VDbEJoQixxQkFBQTtFRG9CQSxXQUFXO0VBQ1gsOENBQThDO0VDbEI5QyxvQkFBQTtFQUNBLGlCQUFBO0FEb0JGO0FESVE7RUcxQkosOEVBQUE7QUZ5Qko7QURLUTtFSTFCSixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFFQSx1QkFBQTtFQ1JBLGlCQUFBO0VBQ0EsZUFBQTtFQTBCQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBSlFKO0FERFE7RUFuQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ3VDUjtBRE5RO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNRWjtBRE5ZO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDUWhCO0FETFk7RUFDSSxlQUFBO0FDT2hCO0FESlk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTWhCO0FERFk7RUFDSSxvQkFBQTtBQ0doQjtBRExRO0VBTVEsZUFBQTtFQUNBLGdCQUFBO0FDRWhCO0FER0k7RUFDSSxXQUFBO0FDRFI7QURHUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDRFo7QURLSTtFQUNJLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hSO0FES1E7RUFDSSxjQUFBO0FDSFo7QURNUTtFQUNJLGdCQUFBO0FDSlo7QUFwR1E7RUFDSSxnQkFBQTtBQXNHWjtBQWxHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQW9HUjtBQWpHSTtFQUNJLGFBQUE7QUFtR1IiLCJmaWxlIjoidHJlZS1jaGVja2JveC5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL251aS1mcmFtZXdvcmstdmFyaWFibGVzLmxlc3NcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9taXhpbnMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL251aS1mcmFtZXdvcmstdHlwb2dyYXBoeS5sZXNzXCI7XG5cbi5leHBhbmRlcigpIHtcbiAgICAuZXhwYW5kZXItaWNvbigpIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cblxuICAgICYtLWV4cGFuZGVkIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IEBudWktc3BhY2UteHM7XG4gICAgfVxuXG4gICAgJl9faWNvbiB7XG4gICAgICAgIC5leHBhbmRlci1pY29uKCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgIH1cblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IEBudWktcmFkaXVzLWRlZmF1bHQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLm5vLXNlbGVjdCgpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQtY29sb3IsIG51aS1jb2xvci1iZy10cmFuc3BhcmVudC1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmLXRpdGxlIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBAbnVpLWxpbmUtaGVpZ2h0LWRlZmF1bHQ7XG4gICAgICAgICAgICAudGV4dC1vdmVyZmxvdyhlbGxpcHNpcyk7XG4gICAgICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsIG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pY29uIHtcbiAgICAgICAgICAgIC5leHBhbmRlci1pY29uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNvbnRlbnQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IEBudWktc3BhY2UteHM7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBAbnVpLXNwYWNlLXhzO1xuXG4gICAgICAgICAgICAmLWljb24ge1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtLXdpdGgtaWNvbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYubnVpLWV4cGFuZGVyX19oZWFkZXItLWVtcHR5IHtcbiAgICAgICAgICAgICYubnVpLWV4cGFuZGVyX19oZWFkZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubnVpLWV4cGFuZGVyX19oZWFkZXItY29udGVudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2N1c3RvbS1oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmLS1lbXB0eSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItbGVmdDogZG90dGVkIEBudWktbGluZS1tZWRpdW0gQG51aS1jb2xvci1saW5lLWRlZmF1bHQ7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBkb3R0ZWQgQG51aS1saW5lLW1lZGl1bSB2YXIoLS1udWktY29sb3ItbGluZS1kZWZhdWx0LCBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdCk7XG4gICAgICAgIGNvbG9yOiBAbnVpLWNvbG9yLWJnLWRhcms7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1udWktY29sb3ItdGV4dC1kZWZhdWx0LCAjMTExKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IChAbnVpLXNwYWNlLW1kIC0gMSk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogKEBudWktc3BhY2UtbWQgLSAxKTtcblxuICAgICAgICAmLmhpZGUtbGVmdC1ib3JkZXIge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLm5nLWFuaW1hdGluZyB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGlucy9leHBhbmRlci1iYXNlXCI7XG5cbi5udWktdHJlZSB7XG4gICAgLmV4cGFuZGVyKCk7XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgJi0tY29sbGFwc2VkIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19sZWFmIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19pbnZpc2libGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiIsIi5uby1zZWxlY3QoKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogRmlyZWZveCBhbGwgKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgIC8qIElFIDEwKyAqL1xuXG4gIC8qIE5vIHN1cHBvcnQgZm9yIHRoZXNlIHlldCwgdXNlIGF0IG93biByaXNrICovXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iLCIuc2V0Q3NzVmFyaWFibGUoQHByb3BlcnR5LCBAdmFsdWUpe1xuICAgIEBldmFsdWF0ZWQgOiBcIkB7dmFsdWV9XCI7XG4gICAgLy90aGUgZG91YmxlIEAgZm9yY2VzIGEgaW5kaXJlY3Rpb24gZXZhbHVhdGlvbiwga2luZGEgbGlrZSBhIHBvaW50ZXJcbiAgICBAZmFsbGJhY2sgOiBAQGV2YWx1YXRlZDtcblxuICAgIEB7cHJvcGVydHl9OiB+XCJ2YXIoLS1Ae3ZhbHVlfSxAe2ZhbGxiYWNrfSlcIjtcbn1cbiIsIi8vIFRleHQgb3ZlcmZsb3dcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcblxuLy8gVE9ETzogUkVNT1ZFIExFR0FDWSBCT09UU1RSQVAgTUlYSU5cbi50ZXh0LW92ZXJmbG93KCkge1xuICAudGV4dC1vdmVyZmxvdygnZWxsaXBzaXMnKTtcbn1cblxuLnRleHQtb3ZlcmZsb3coQG92ZXJmbG93KSB7XG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAtbXMtdGV4dC1vdmVyZmxvdzogQG92ZXJmbG93O1xuICAgIC1vLXRleHQtb3ZlcmZsb3c6IEBvdmVyZmxvdztcbiAgICB0ZXh0LW92ZXJmbG93OiBAb3ZlcmZsb3c7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwibnVpLWZyYW1ld29yay12YXJpYWJsZXMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGlucy5sZXNzXCI7XG5cbi8qIGZvbnQtc2l6ZSAqL1xuLm51aS10ZXh0LXNpemUoQHNpemU6IGRlZmF1bHQpIHtcbiAgICBsaW5lLWhlaWdodDogflwiQHtudWktbGluZS1oZWlnaHQtQHtzaXplfX1cIjtcbiAgICBmb250LXNpemU6IH5cIkB7bnVpLWZvbnQtc2l6ZS1Ae3NpemV9fVwiO1xufVxuLyogZm9udC1zaXplIGVuZHMgKi9cblxuLm51aS10ZXh0LXBhZ2UoKSB7XG4gICAgLm51aS10ZXh0LXNpemUoaGVybyk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbn1cblxuLm51aS10ZXh0LXdpZGdldCgpIHtcbiAgICAubnVpLXRleHQtc2l6ZShiaWcpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG59XG5cbi5udWktdGV4dC1wYW5lbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWxhYmVsKEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWRlZmF1bHQoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1zZWNvbmRhcnkoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1zbWFsbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi8vIFRoaXMgbWl4aW4gaXMgZGVwcmVjYXRlZC4gVXNlIG51aS10ZXh0LXNtYWxsKCkgaW5zdGVhZFxuLm51aS10ZXh0LWhpbnQoQGNvbG9yLCBAY29sb3JOYW1lKSAge1xuICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWhvdmVyYWJsZSgpIHtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogZG90dGVkO1xufVxuXG4ubnVpLXRleHQtc21hbGwtc2Vjb25kYXJ5KCkge1xuICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi8vc2VtYW50aWMgc3R5bGVzXG4ubnVpLXRleHQge1xuICAgICYtZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsIG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICB9XG4gICAgJi1wcm9kdWN0IHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoaGVybyk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktcm9ib3RvO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1ib2xkO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXBhZ2Uge1xuICAgICAgICAubnVpLXRleHQtcGFnZSgpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtcGFnZSgpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13aWRnZXQge1xuICAgICAgICAubnVpLXRleHQtd2lkZ2V0KCk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC13aWRnZXQoKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtcGFuZWwge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1sYWJlbCB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWludmVyc2Utc2VsZWN0ZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2JhcixudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cbiAgICAmLWRlZmF1bHQtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0tZGFya2JnLXNlbGVjdGVkIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIsbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2Jhcik7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmctc2VsZWN0ZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyLG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRpc2FibGVkLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWxpbmsge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1saW5rKTtcbiAgICB9XG4gICAgJi1saW5rOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgJi1saW5rLXNtYWxsIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpbmspO1xuICAgIH1cbiAgICAmLWxpbmstc21hbGw6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAmLXNvdXJjZS1jb2RlIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc291cmNlLWNvZGUtcHJvO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuXG4gICAgICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1zb3VyY2UtY29kZS1wcm87XG4gICAgICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi10aXRsZS1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeS0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXRpdGxlLXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zbWFsbCB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLXNlY29uZGFyeSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNtYWxsLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnkpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRpc2FibGVkIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC0tZGlzYWJsZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgLy8gYG51aS10ZXh0LWhpbnRgIHN0eWxlcyBhcmUgZGVwcmVjYXRlZC4gVXNlIGBudWktdGV4dC1zbWFsbC1zZWNvbmRhcnlgIGluc3RlYWQuXG4gICAgJi1oaW50IHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtaGludC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtaGludChAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtdmFsaWRhdGlvbiB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtY3JpdGljYWwpO1xuICAgIH1cblxuICAgICYtZWxsaXBzaXMge1xuICAgICAgICAudGV4dC1vdmVyZmxvdyhlbGxpcHNpcyk7XG4gICAgfVxufVxuXG4iXX0= */"],
        data: {
          animation: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["expand"]]
        }
      });
      /***/
    },

    /***/
    "xwXO":
    /*!*****************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/common/tree/tree-with-additional-content/tree-with-additional-content.example.component.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: TreeWithAdditionalContentExampleComponent */

    /***/
    function xwXO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeWithAdditionalContentExampleComponent", function () {
        return TreeWithAdditionalContentExampleComponent;
      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../../src/lib/menu/menu/menu.component */
      "JG2v");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_menu_menu_item_menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../../src/lib/menu/menu-item/menu-action/menu-action.component */
      "6sIJ");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../../src/lib/icon/icon.component */
      "45Bz");

      function TreeWithAdditionalContentExampleComponent_cdk_nested_tree_node_2_nui_menu_action_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-menu-action");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r4, " ");
        }
      }

      function TreeWithAdditionalContentExampleComponent_cdk_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "cdk-nested-tree-node", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nui-menu", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, TreeWithAdditionalContentExampleComponent_cdk_nested_tree_node_2_nui_menu_action_5_Template, 2, 1, "nui-menu-action", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", node_r2.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appendToBody", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.items);
        }
      }

      function TreeWithAdditionalContentExampleComponent_cdk_nested_tree_node_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "cdk-nested-tree-node", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TreeWithAdditionalContentExampleComponent_cdk_nested_tree_node_3_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r6.onToggleClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "nui-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](7, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r5 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("icon", ctx_r1.treeControl.isExpanded(node_r5) ? "triangle-down" : "triangle-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](node_r5.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-before", node_r5.children.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("nui-tree__body--collapsed", !ctx_r1.treeControl.isExpanded(node_r5));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@expandedState", ctx_r1.treeControl.isExpanded(node_r5) ? "expanded" : "collapsed");
        }
      }

      var TREE_DATA = [{
        name: "Fruit",
        children: [{
          name: "Apple"
        }, {
          name: "Banana"
        }, {
          name: "Fruit loops"
        }]
      }, {
        name: "Vegetables",
        children: [{
          name: "Green",
          children: [{
            name: "Broccoli"
          }, {
            name: "Brussels sprouts"
          }]
        }, {
          name: "Orange",
          children: [{
            name: "Pumpkins"
          }, {
            name: "Carrots"
          }]
        }, {
          name: "Red"
        }]
      }, {
        name: "Meat"
      }];

      var TreeWithAdditionalContentExampleComponent = /*#__PURE__*/function () {
        function TreeWithAdditionalContentExampleComponent(eventBusService) {
          _classCallCheck(this, TreeWithAdditionalContentExampleComponent);

          this.eventBusService = eventBusService;
          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](function (node) {
            return node.children;
          });
          this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["ArrayDataSource"](TREE_DATA);
          this.items = ["Item 1", "Item 2", "Item 3"];

          this.hasChild = function (_, node) {
            return !!node.children && node.children.length > 0;
          };
        }

        _createClass(TreeWithAdditionalContentExampleComponent, [{
          key: "onToggleClick",
          value: function onToggleClick() {
            this.eventBusService.getStream({
              id: "document-click"
            }).next(new MouseEvent("click"));
          }
        }]);

        return TreeWithAdditionalContentExampleComponent;
      }();

      TreeWithAdditionalContentExampleComponent.ɵfac = function TreeWithAdditionalContentExampleComponent_Factory(t) {
        return new (t || TreeWithAdditionalContentExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["EventBusService"]));
      };

      TreeWithAdditionalContentExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: TreeWithAdditionalContentExampleComponent,
        selectors: [["nui-tree-with-additional-content-example"]],
        hostAttrs: ["id", "tree-with-additional-content-example"],
        decls: 4,
        vars: 3,
        consts: [[2, "width", "360px"], [3, "dataSource", "treeControl"], ["class", "nui-tree__leaf", 4, "cdkTreeNodeDef"], ["class", "nui-tree", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "nui-tree__leaf"], ["nui-button", "", "displayStyle", "action", "type", "button", "disabled", ""], [1, "nui-tree__leaf-title"], ["icon", "menu", "id", "nui-demo-basic-menu", "displayStyle", "action", 3, "appendToBody"], [4, "ngFor", "ngForOf"], [1, "nui-tree"], ["cdkTreeNodeToggle", "", 1, "nui-tree__header", 3, "click"], [1, "nui-tree__header-icon", 3, "icon"], [1, "nui-tree__header-title"], [1, "nui-badge-counter"], [1, "nui-tree__body"], ["cdkTreeNodeOutlet", ""]],
        template: function TreeWithAdditionalContentExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "cdk-tree", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TreeWithAdditionalContentExampleComponent_cdk_nested_tree_node_2_Template, 6, 3, "cdk-nested-tree-node", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TreeWithAdditionalContentExampleComponent_cdk_nested_tree_node_3_Template, 8, 6, "cdk-nested-tree-node", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkNestedTreeNode"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _src_lib_menu_menu_item_menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_7__["MenuActionComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeToggle"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeNodeOutlet"]],
        styles: [".nui-tree--expanded[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.nui-tree__icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n  margin-left: -7px;\n}\n.nui-tree__header[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 3px;\n  cursor: pointer;\n  display: flex;\n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  \n  -o-user-select: none;\n  user-select: none;\n}\n.nui-tree__header[_ngcontent-%COMP%]:hover {\n  background-color: var(--nui-color-bg-transparent-hover,rgba(17, 17, 17, 0.05));\n}\n.nui-tree__header-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  line-height: 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  color: var(--nui-color-text-default,#111);\n}\n.nui-tree__header-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  display: flex;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-grow: 2;\n  justify-content: flex-start;\n  padding-left: 5px;\n  min-width: 0;\n  padding-right: 5px;\n}\n.nui-tree__header-content-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n}\n.nui-tree__header-content--with-icon[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.nui-tree__header-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 2;\n  min-width: 0;\n  width: 100%;\n}\n.nui-tree__header.nui-expander__header--empty.nui-expander__header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.nui-tree__header.nui-expander__header--empty[_ngcontent-%COMP%]   .nui-expander__header-content[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.nui-tree__custom-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nui-tree__custom-header--empty[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n}\n.nui-tree__body[_ngcontent-%COMP%] {\n  border: none;\n  border-left: dotted 2px #d9d9d9;\n  border-left: dotted 2px var(--nui-color-line-default, #d9d9d9);\n  color: #111;\n  color: var(--nui-color-text-default, #111);\n  margin-left: 14px;\n  padding-left: 14px;\n}\n.nui-tree__body.hide-left-border[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.nui-tree__body.ng-animating[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__header-title[_ngcontent-%COMP%] {\n  width: 100%;\n  line-height: 18px;\n}\n.nui-tree__body--collapsed[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.nui-tree__leaf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nui-tree__leaf-title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nui-tree__invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n.nui-tree[_ngcontent-%COMP%]   .nui-badge-counter[_ngcontent-%COMP%] {\n  position: relative;\n  height: 18px;\n}\n.nui-tree[_ngcontent-%COMP%]   .nui-badge-counter[_ngcontent-%COMP%]:after {\n  background: #555;\n  width: 45px;\n  height: 18px;\n  line-height: 18px;\n  top: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2V4cGFuZGVyLWJhc2UubGVzcyIsInRyZWUtd2l0aC1hZGRpdGlvbmFsLWNvbnRlbnQuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL25vLXNlbGVjdC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvY3NzLXZhcmlhYmxlcy5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvdGV4dC1vdmVyZmxvdy5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9udWktZnJhbWV3b3JrLXR5cG9ncmFwaHkubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlSTtFQUNJLG1CQUFBO0FDZFI7QURpQkk7RUFiSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBU0EsaUJBQUE7QUNUUjtBRFlJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VFM0JOLHlCQUFBO0VEa0JBLDRCQUE0QjtFQ2pCNUIsc0JBQUE7RURtQkEsZ0JBQWdCO0VDbEJoQixxQkFBQTtFRG9CQSxXQUFXO0VBQ1gsOENBQThDO0VDbEI5QyxvQkFBQTtFQUNBLGlCQUFBO0FEb0JGO0FESVE7RUcxQkosOEVBQUE7QUZ5Qko7QURLUTtFSTFCSixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFFQSx1QkFBQTtFQ1JBLGlCQUFBO0VBQ0EsZUFBQTtFQTBCQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBSlFKO0FERFE7RUFuQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ3VDUjtBRE5RO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNRWjtBRE5ZO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDUWhCO0FETFk7RUFDSSxlQUFBO0FDT2hCO0FESlk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTWhCO0FERFk7RUFDSSxvQkFBQTtBQ0doQjtBRExRO0VBTVEsZUFBQTtFQUNBLGdCQUFBO0FDRWhCO0FER0k7RUFDSSxXQUFBO0FDRFI7QURHUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDRFo7QURLSTtFQUNJLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hSO0FES1E7RUFDSSxjQUFBO0FDSFo7QURNUTtFQUNJLGdCQUFBO0FDSlo7QUFyR0k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUF1R1I7QUFuR1E7RUFDSSxnQkFBQTtBQXFHWjtBQWpHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQW1HUjtBQWpHUTtFQUNJLFdBQUE7QUFtR1o7QUEvRkk7RUFDSSxhQUFBO0FBaUdSO0FBekhBO0VBNEJRLGtCQUFBO0VBQ0EsWUFBQTtBQWdHUjtBQTlGUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFnR1oiLCJmaWxlIjoidHJlZS13aXRoLWFkZGl0aW9uYWwtY29udGVudC5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL251aS1mcmFtZXdvcmstdmFyaWFibGVzLmxlc3NcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9taXhpbnMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uL251aS1mcmFtZXdvcmstdHlwb2dyYXBoeS5sZXNzXCI7XG5cbi5leHBhbmRlcigpIHtcbiAgICAuZXhwYW5kZXItaWNvbigpIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cblxuICAgICYtLWV4cGFuZGVkIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IEBudWktc3BhY2UteHM7XG4gICAgfVxuXG4gICAgJl9faWNvbiB7XG4gICAgICAgIC5leHBhbmRlci1pY29uKCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgIH1cblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IEBudWktcmFkaXVzLWRlZmF1bHQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLm5vLXNlbGVjdCgpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQtY29sb3IsIG51aS1jb2xvci1iZy10cmFuc3BhcmVudC1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmLXRpdGxlIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBAbnVpLWxpbmUtaGVpZ2h0LWRlZmF1bHQ7XG4gICAgICAgICAgICAudGV4dC1vdmVyZmxvdyhlbGxpcHNpcyk7XG4gICAgICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsIG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pY29uIHtcbiAgICAgICAgICAgIC5leHBhbmRlci1pY29uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNvbnRlbnQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IEBudWktc3BhY2UteHM7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBAbnVpLXNwYWNlLXhzO1xuXG4gICAgICAgICAgICAmLWljb24ge1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtLXdpdGgtaWNvbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYubnVpLWV4cGFuZGVyX19oZWFkZXItLWVtcHR5IHtcbiAgICAgICAgICAgICYubnVpLWV4cGFuZGVyX19oZWFkZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubnVpLWV4cGFuZGVyX19oZWFkZXItY29udGVudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2N1c3RvbS1oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmLS1lbXB0eSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItbGVmdDogZG90dGVkIEBudWktbGluZS1tZWRpdW0gQG51aS1jb2xvci1saW5lLWRlZmF1bHQ7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBkb3R0ZWQgQG51aS1saW5lLW1lZGl1bSB2YXIoLS1udWktY29sb3ItbGluZS1kZWZhdWx0LCBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdCk7XG4gICAgICAgIGNvbG9yOiBAbnVpLWNvbG9yLWJnLWRhcms7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1udWktY29sb3ItdGV4dC1kZWZhdWx0LCAjMTExKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IChAbnVpLXNwYWNlLW1kIC0gMSk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogKEBudWktc3BhY2UtbWQgLSAxKTtcblxuICAgICAgICAmLmhpZGUtbGVmdC1ib3JkZXIge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLm5nLWFuaW1hdGluZyB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGlucy9leHBhbmRlci1iYXNlXCI7XG5cbi5udWktdHJlZSB7XG4gICAgLmV4cGFuZGVyKCk7XG5cbiAgICAmX19oZWFkZXItdGl0bGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgfVxuXG4gICAgJl9fYm9keSB7XG4gICAgICAgICYtLWNvbGxhcHNlZCB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fbGVhZiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgJi10aXRsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2ludmlzaWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLm51aS1iYWRnZS1jb3VudGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTU1O1xuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgIHRvcDogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5uby1zZWxlY3QoKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogRmlyZWZveCBhbGwgKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgIC8qIElFIDEwKyAqL1xuXG4gIC8qIE5vIHN1cHBvcnQgZm9yIHRoZXNlIHlldCwgdXNlIGF0IG93biByaXNrICovXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iLCIuc2V0Q3NzVmFyaWFibGUoQHByb3BlcnR5LCBAdmFsdWUpe1xuICAgIEBldmFsdWF0ZWQgOiBcIkB7dmFsdWV9XCI7XG4gICAgLy90aGUgZG91YmxlIEAgZm9yY2VzIGEgaW5kaXJlY3Rpb24gZXZhbHVhdGlvbiwga2luZGEgbGlrZSBhIHBvaW50ZXJcbiAgICBAZmFsbGJhY2sgOiBAQGV2YWx1YXRlZDtcblxuICAgIEB7cHJvcGVydHl9OiB+XCJ2YXIoLS1Ae3ZhbHVlfSxAe2ZhbGxiYWNrfSlcIjtcbn1cbiIsIi8vIFRleHQgb3ZlcmZsb3dcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcblxuLy8gVE9ETzogUkVNT1ZFIExFR0FDWSBCT09UU1RSQVAgTUlYSU5cbi50ZXh0LW92ZXJmbG93KCkge1xuICAudGV4dC1vdmVyZmxvdygnZWxsaXBzaXMnKTtcbn1cblxuLnRleHQtb3ZlcmZsb3coQG92ZXJmbG93KSB7XG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAtbXMtdGV4dC1vdmVyZmxvdzogQG92ZXJmbG93O1xuICAgIC1vLXRleHQtb3ZlcmZsb3c6IEBvdmVyZmxvdztcbiAgICB0ZXh0LW92ZXJmbG93OiBAb3ZlcmZsb3c7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwibnVpLWZyYW1ld29yay12YXJpYWJsZXMubGVzc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGlucy5sZXNzXCI7XG5cbi8qIGZvbnQtc2l6ZSAqL1xuLm51aS10ZXh0LXNpemUoQHNpemU6IGRlZmF1bHQpIHtcbiAgICBsaW5lLWhlaWdodDogflwiQHtudWktbGluZS1oZWlnaHQtQHtzaXplfX1cIjtcbiAgICBmb250LXNpemU6IH5cIkB7bnVpLWZvbnQtc2l6ZS1Ae3NpemV9fVwiO1xufVxuLyogZm9udC1zaXplIGVuZHMgKi9cblxuLm51aS10ZXh0LXBhZ2UoKSB7XG4gICAgLm51aS10ZXh0LXNpemUoaGVybyk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbn1cblxuLm51aS10ZXh0LXdpZGdldCgpIHtcbiAgICAubnVpLXRleHQtc2l6ZShiaWcpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG59XG5cbi5udWktdGV4dC1wYW5lbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWxhYmVsKEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWRlZmF1bHQoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1zZWNvbmRhcnkoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi5udWktdGV4dC1zbWFsbChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBjb2xvcjogQGNvbG9yO1xuICAgIGNvbG9yOiB+XCJ2YXIoLS1Ae2NvbG9yTmFtZX0sQHtjb2xvcn0pXCI7XG59XG5cbi8vIFRoaXMgbWl4aW4gaXMgZGVwcmVjYXRlZC4gVXNlIG51aS10ZXh0LXNtYWxsKCkgaW5zdGVhZFxuLm51aS10ZXh0LWhpbnQoQGNvbG9yLCBAY29sb3JOYW1lKSAge1xuICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LWhvdmVyYWJsZSgpIHtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogZG90dGVkO1xufVxuXG4ubnVpLXRleHQtc21hbGwtc2Vjb25kYXJ5KCkge1xuICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi8vc2VtYW50aWMgc3R5bGVzXG4ubnVpLXRleHQge1xuICAgICYtZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsIG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICB9XG4gICAgJi1wcm9kdWN0IHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoaGVybyk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktcm9ib3RvO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1ib2xkO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXBhZ2Uge1xuICAgICAgICAubnVpLXRleHQtcGFnZSgpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtcGFnZSgpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13aWRnZXQge1xuICAgICAgICAubnVpLXRleHQtd2lkZ2V0KCk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC13aWRnZXQoKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtcGFuZWwge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgJi1wYW5lbC0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtcGFuZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1sYWJlbCB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLWxhYmVsLS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1sYWJlbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWludmVyc2Utc2VsZWN0ZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2JhcixudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cbiAgICAmLWRlZmF1bHQtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0tZGFya2JnLXNlbGVjdGVkIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIsbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2Jhcik7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmctc2VsZWN0ZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyLG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnktLWRpc2FibGVkLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWxpbmsge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1saW5rKTtcbiAgICB9XG4gICAgJi1saW5rOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgJi1saW5rLXNtYWxsIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpbmspO1xuICAgIH1cbiAgICAmLWxpbmstc21hbGw6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAmLXNvdXJjZS1jb2RlIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc291cmNlLWNvZGUtcHJvO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuXG4gICAgICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1zb3VyY2UtY29kZS1wcm87XG4gICAgICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi10aXRsZS1zZWNvbmRhcnkge1xuICAgICAgICAubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeS0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXRpdGxlLXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1zbWFsbCB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLXNlY29uZGFyeSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNtYWxsLXNlY29uZGFyeS0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnkpO1xuXG4gICAgICAgICYtLWhvdmVyYWJsZSB7XG4gICAgICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWludmVyc2Utc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsIG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRpc2FibGVkIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC0tZGlzYWJsZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQsbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgLy8gYG51aS10ZXh0LWhpbnRgIHN0eWxlcyBhcmUgZGVwcmVjYXRlZC4gVXNlIGBudWktdGV4dC1zbWFsbC1zZWNvbmRhcnlgIGluc3RlYWQuXG4gICAgJi1oaW50IHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtaGludC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtaGludChAbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1kYXJrYmctLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtdmFsaWRhdGlvbiB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtY3JpdGljYWwpO1xuICAgIH1cblxuICAgICYtZWxsaXBzaXMge1xuICAgICAgICAudGV4dC1vdmVyZmxvdyhlbGxpcHNpcyk7XG4gICAgfVxufVxuXG4iXX0= */"],
        data: {
          animation: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["expand"]]
        }
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=tree-tree-module-es5.js.map