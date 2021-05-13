(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~drag-and-drop-dnd-module~src-schematics-schematic-module~tree-tree-module"], {
    /***/
    "FvrZ":
    /*!*****************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js ***!
      \*****************************************************************/

    /*! exports provided: BaseTreeControl, CDK_TREE_NODE_OUTLET_NODE, CdkNestedTreeNode, CdkTree, CdkTreeModule, CdkTreeNode, CdkTreeNodeDef, CdkTreeNodeOutlet, CdkTreeNodeOutletContext, CdkTreeNodePadding, CdkTreeNodeToggle, FlatTreeControl, NestedTreeControl, getTreeControlFunctionsMissingError, getTreeControlMissingError, getTreeMissingMatchingNodeDefError, getTreeMultipleDefaultNodeDefsError, getTreeNoValidDataSourceError */

    /***/
    function FvrZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseTreeControl", function () {
        return BaseTreeControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_TREE_NODE_OUTLET_NODE", function () {
        return CDK_TREE_NODE_OUTLET_NODE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkNestedTreeNode", function () {
        return CdkNestedTreeNode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTree", function () {
        return CdkTree;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTreeModule", function () {
        return CdkTreeModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTreeNode", function () {
        return CdkTreeNode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTreeNodeDef", function () {
        return CdkTreeNodeDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutlet", function () {
        return CdkTreeNodeOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutletContext", function () {
        return CdkTreeNodeOutletContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTreeNodePadding", function () {
        return CdkTreeNodePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTreeNodeToggle", function () {
        return CdkTreeNodeToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlatTreeControl", function () {
        return FlatTreeControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NestedTreeControl", function () {
        return NestedTreeControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTreeControlFunctionsMissingError", function () {
        return getTreeControlFunctionsMissingError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTreeControlMissingError", function () {
        return getTreeControlMissingError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTreeMissingMatchingNodeDefError", function () {
        return getTreeMissingMatchingNodeDefError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTreeMultipleDefaultNodeDefsError", function () {
        return getTreeMultipleDefaultNodeDefsError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTreeNoValidDataSourceError", function () {
        return getTreeNoValidDataSourceError;
      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
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


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Base tree control. It has basic toggle/expand/collapse operations on a single data node. */


      var BaseTreeControl = /*#__PURE__*/function () {
        function BaseTreeControl() {
          _classCallCheck(this, BaseTreeControl);

          /** A selection model with multi-selection to track expansion status. */
          this.expansionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true);
        }
        /** Toggles one single data node's expanded/collapsed state. */


        _createClass(BaseTreeControl, [{
          key: "toggle",
          value: function toggle(dataNode) {
            this.expansionModel.toggle(this._trackByValue(dataNode));
          }
          /** Expands one single data node. */

        }, {
          key: "expand",
          value: function expand(dataNode) {
            this.expansionModel.select(this._trackByValue(dataNode));
          }
          /** Collapses one single data node. */

        }, {
          key: "collapse",
          value: function collapse(dataNode) {
            this.expansionModel.deselect(this._trackByValue(dataNode));
          }
          /** Whether a given data node is expanded or not. Returns true if the data node is expanded. */

        }, {
          key: "isExpanded",
          value: function isExpanded(dataNode) {
            return this.expansionModel.isSelected(this._trackByValue(dataNode));
          }
          /** Toggles a subtree rooted at `node` recursively. */

        }, {
          key: "toggleDescendants",
          value: function toggleDescendants(dataNode) {
            this.expansionModel.isSelected(this._trackByValue(dataNode)) ? this.collapseDescendants(dataNode) : this.expandDescendants(dataNode);
          }
          /** Collapse all dataNodes in the tree. */

        }, {
          key: "collapseAll",
          value: function collapseAll() {
            this.expansionModel.clear();
          }
          /** Expands a subtree rooted at given data node recursively. */

        }, {
          key: "expandDescendants",
          value: function expandDescendants(dataNode) {
            var _this$expansionModel,
                _this = this;

            var toBeProcessed = [dataNode];
            toBeProcessed.push.apply(toBeProcessed, _toConsumableArray(this.getDescendants(dataNode)));

            (_this$expansionModel = this.expansionModel).select.apply(_this$expansionModel, _toConsumableArray(toBeProcessed.map(function (value) {
              return _this._trackByValue(value);
            })));
          }
          /** Collapses a subtree rooted at given data node recursively. */

        }, {
          key: "collapseDescendants",
          value: function collapseDescendants(dataNode) {
            var _this$expansionModel2,
                _this2 = this;

            var toBeProcessed = [dataNode];
            toBeProcessed.push.apply(toBeProcessed, _toConsumableArray(this.getDescendants(dataNode)));

            (_this$expansionModel2 = this.expansionModel).deselect.apply(_this$expansionModel2, _toConsumableArray(toBeProcessed.map(function (value) {
              return _this2._trackByValue(value);
            })));
          }
        }, {
          key: "_trackByValue",
          value: function _trackByValue(value) {
            return this.trackBy ? this.trackBy(value) : value;
          }
        }]);

        return BaseTreeControl;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Flat tree control. Able to expand/collapse a subtree recursively for flattened tree. */


      var FlatTreeControl = /*#__PURE__*/function (_BaseTreeControl) {
        _inherits(FlatTreeControl, _BaseTreeControl);

        var _super = _createSuper(FlatTreeControl);

        /** Construct with flat tree data node functions getLevel and isExpandable. */
        function FlatTreeControl(getLevel, isExpandable, options) {
          var _this3;

          _classCallCheck(this, FlatTreeControl);

          _this3 = _super.call(this);
          _this3.getLevel = getLevel;
          _this3.isExpandable = isExpandable;
          _this3.options = options;

          if (_this3.options) {
            _this3.trackBy = _this3.options.trackBy;
          }

          return _this3;
        }
        /**
         * Gets a list of the data node's subtree of descendent data nodes.
         *
         * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
         * with correct levels.
         */


        _createClass(FlatTreeControl, [{
          key: "getDescendants",
          value: function getDescendants(dataNode) {
            var startIndex = this.dataNodes.indexOf(dataNode);
            var results = []; // Goes through flattened tree nodes in the `dataNodes` array, and get all descendants.
            // The level of descendants of a tree node must be greater than the level of the given
            // tree node.
            // If we reach a node whose level is equal to the level of the tree node, we hit a sibling.
            // If we reach a node whose level is greater than the level of the tree node, we hit a
            // sibling of an ancestor.

            for (var i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
              results.push(this.dataNodes[i]);
            }

            return results;
          }
          /**
           * Expands all data nodes in the tree.
           *
           * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
           * data nodes of the tree.
           */

        }, {
          key: "expandAll",
          value: function expandAll() {
            var _this$expansionModel3,
                _this4 = this;

            (_this$expansionModel3 = this.expansionModel).select.apply(_this$expansionModel3, _toConsumableArray(this.dataNodes.map(function (node) {
              return _this4._trackByValue(node);
            })));
          }
        }]);

        return FlatTreeControl;
      }(BaseTreeControl);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type. */


      var NestedTreeControl = /*#__PURE__*/function (_BaseTreeControl2) {
        _inherits(NestedTreeControl, _BaseTreeControl2);

        var _super2 = _createSuper(NestedTreeControl);

        /** Construct with nested tree function getChildren. */
        function NestedTreeControl(getChildren, options) {
          var _this5;

          _classCallCheck(this, NestedTreeControl);

          _this5 = _super2.call(this);
          _this5.getChildren = getChildren;
          _this5.options = options;

          if (_this5.options) {
            _this5.trackBy = _this5.options.trackBy;
          }

          return _this5;
        }
        /**
         * Expands all dataNodes in the tree.
         *
         * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
         * data nodes of the tree.
         */


        _createClass(NestedTreeControl, [{
          key: "expandAll",
          value: function expandAll() {
            var _this6 = this,
                _this$expansionModel4;

            this.expansionModel.clear();
            var allNodes = this.dataNodes.reduce(function (accumulator, dataNode) {
              return [].concat(_toConsumableArray(accumulator), _toConsumableArray(_this6.getDescendants(dataNode)), [dataNode]);
            }, []);

            (_this$expansionModel4 = this.expansionModel).select.apply(_this$expansionModel4, _toConsumableArray(allNodes.map(function (node) {
              return _this6._trackByValue(node);
            })));
          }
          /** Gets a list of descendant dataNodes of a subtree rooted at given data node recursively. */

        }, {
          key: "getDescendants",
          value: function getDescendants(dataNode) {
            var descendants = [];

            this._getDescendants(descendants, dataNode); // Remove the node itself


            return descendants.splice(1);
          }
          /** A helper function to get descendants recursively. */

        }, {
          key: "_getDescendants",
          value: function _getDescendants(descendants, dataNode) {
            var _this7 = this;

            descendants.push(dataNode);
            var childrenNodes = this.getChildren(dataNode);

            if (Array.isArray(childrenNodes)) {
              childrenNodes.forEach(function (child) {
                return _this7._getDescendants(descendants, child);
              });
            } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(childrenNodes)) {
              // TypeScript as of version 3.5 doesn't seem to treat `Boolean` like a function that
              // returns a `boolean` specifically in the context of `filter`, so we manually clarify that.
              childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean)).subscribe(function (children) {
                var _iterator = _createForOfIteratorHelper(children),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var child = _step.value;

                    _this7._getDescendants(descendants, child);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              });
            }
          }
        }]);

        return NestedTreeControl;
      }(BaseTreeControl);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to provide a `CdkTreeNode` to its outlet.
       * Used primarily to avoid circular imports.
       * @docs-private
       */


      var CDK_TREE_NODE_OUTLET_NODE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TREE_NODE_OUTLET_NODE');
      /**
       * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
       * inside the outlet.
       */

      var CdkTreeNodeOutlet = function CdkTreeNodeOutlet(viewContainer, _node) {
        _classCallCheck(this, CdkTreeNodeOutlet);

        this.viewContainer = viewContainer;
        this._node = _node;
      };

      CdkTreeNodeOutlet.ɵfac = function CdkTreeNodeOutlet_Factory(t) {
        return new (t || CdkTreeNodeOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TREE_NODE_OUTLET_NODE, 8));
      };

      CdkTreeNodeOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkTreeNodeOutlet,
        selectors: [["", "cdkTreeNodeOutlet", ""]]
      });

      CdkTreeNodeOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TREE_NODE_OUTLET_NODE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodeOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkTreeNodeOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [CDK_TREE_NODE_OUTLET_NODE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Context provided to the tree node component. */


      var CdkTreeNodeOutletContext = function CdkTreeNodeOutletContext(data) {
        _classCallCheck(this, CdkTreeNodeOutletContext);

        this.$implicit = data;
      };
      /**
       * Data node definition for the CdkTree.
       * Captures the node's template and a when predicate that describes when this node should be used.
       */


      var CdkTreeNodeDef =
      /** @docs-private */
      function CdkTreeNodeDef(template) {
        _classCallCheck(this, CdkTreeNodeDef);

        this.template = template;
      };

      CdkTreeNodeDef.ɵfac = function CdkTreeNodeDef_Factory(t) {
        return new (t || CdkTreeNodeDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
      };

      CdkTreeNodeDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkTreeNodeDef,
        selectors: [["", "cdkTreeNodeDef", ""]],
        inputs: {
          when: ["cdkTreeNodeDefWhen", "when"]
        }
      });

      CdkTreeNodeDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodeDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkTreeNodeDef]',
            inputs: ['when: cdkTreeNodeDefWhen']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an error to be thrown when there is no usable data.
       * @docs-private
       */


      function getTreeNoValidDataSourceError() {
        return Error("A valid data source must be provided.");
      }
      /**
       * Returns an error to be thrown when there are multiple nodes that are missing a when function.
       * @docs-private
       */


      function getTreeMultipleDefaultNodeDefsError() {
        return Error("There can only be one default row without a when predicate function.");
      }
      /**
       * Returns an error to be thrown when there are no matching node defs for a particular set of data.
       * @docs-private
       */


      function getTreeMissingMatchingNodeDefError() {
        return Error("Could not find a matching node definition for the provided node data.");
      }
      /**
       * Returns an error to be thrown when there are tree control.
       * @docs-private
       */


      function getTreeControlMissingError() {
        return Error("Could not find a tree control for the tree.");
      }
      /**
       * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
       * @docs-private
       */


      function getTreeControlFunctionsMissingError() {
        return Error("Could not find functions for nested/flat tree in tree control.");
      }
      /**
       * CDK tree component that connects with a data source to retrieve data of type `T` and renders
       * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
       */


      var CdkTree = /*#__PURE__*/function () {
        function CdkTree(_differs, _changeDetectorRef) {
          _classCallCheck(this, CdkTree);

          this._differs = _differs;
          this._changeDetectorRef = _changeDetectorRef;
          /** Subject that emits when the component has been destroyed. */

          this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          /** Level of nodes */

          this._levels = new Map(); // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
          //     Remove the MAX_VALUE in viewChange

          /**
           * Stream containing the latest information on what rows are being displayed on screen.
           * Can be used by the data source to as a heuristic of what data should be provided.
           */

          this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            start: 0,
            end: Number.MAX_VALUE
          });
        }
        /**
         * Provides a stream containing the latest data array to render. Influenced by the tree's
         * stream of view window (what dataNodes are currently on screen).
         * Data source can be an observable of data array, or a data array to render.
         */


        _createClass(CdkTree, [{
          key: "dataSource",
          get: function get() {
            return this._dataSource;
          },
          set: function set(dataSource) {
            if (this._dataSource !== dataSource) {
              this._switchDataSource(dataSource);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._dataDiffer = this._differs.find([]).create(this.trackBy);

            if (!this.treeControl && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getTreeControlMissingError();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._nodeOutlet.viewContainer.clear();

            this.viewChange.complete();

            this._onDestroy.next();

            this._onDestroy.complete();

            if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
              this.dataSource.disconnect(this);
            }

            if (this._dataSubscription) {
              this._dataSubscription.unsubscribe();

              this._dataSubscription = null;
            }
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            var defaultNodeDefs = this._nodeDefs.filter(function (def) {
              return !def.when;
            });

            if (defaultNodeDefs.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getTreeMultipleDefaultNodeDefsError();
            }

            this._defaultNodeDef = defaultNodeDefs[0];

            if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
              this._observeRenderChanges();
            }
          } // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
          //     and nested trees.

          /**
           * Switch to the provided data source by resetting the data and unsubscribing from the current
           * render change subscription if one exists. If the data source is null, interpret this by
           * clearing the node outlet. Otherwise start listening for new data.
           */

        }, {
          key: "_switchDataSource",
          value: function _switchDataSource(dataSource) {
            if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
              this.dataSource.disconnect(this);
            }

            if (this._dataSubscription) {
              this._dataSubscription.unsubscribe();

              this._dataSubscription = null;
            } // Remove the all dataNodes if there is now no data source


            if (!dataSource) {
              this._nodeOutlet.viewContainer.clear();
            }

            this._dataSource = dataSource;

            if (this._nodeDefs) {
              this._observeRenderChanges();
            }
          }
          /** Set up a subscription for the data provided by the data source. */

        }, {
          key: "_observeRenderChanges",
          value: function _observeRenderChanges() {
            var _this8 = this;

            var dataStream;

            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["isDataSource"])(this._dataSource)) {
              dataStream = this._dataSource.connect(this);
            } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(this._dataSource)) {
              dataStream = this._dataSource;
            } else if (Array.isArray(this._dataSource)) {
              dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._dataSource);
            }

            if (dataStream) {
              this._dataSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._onDestroy)).subscribe(function (data) {
                return _this8.renderNodeChanges(data);
              });
            } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
              throw getTreeNoValidDataSourceError();
            }
          }
          /** Check for changes made in the data and render each change (node added/removed/moved). */

        }, {
          key: "renderNodeChanges",
          value: function renderNodeChanges(data) {
            var _this9 = this;

            var dataDiffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._dataDiffer;
            var viewContainer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._nodeOutlet.viewContainer;
            var parentData = arguments.length > 3 ? arguments[3] : undefined;
            var changes = dataDiffer.diff(data);

            if (!changes) {
              return;
            }

            changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
              if (item.previousIndex == null) {
                _this9.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
              } else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);

                _this9._levels["delete"](item.item);
              } else {
                var view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
              }
            });

            this._changeDetectorRef.detectChanges();
          }
          /**
           * Finds the matching node definition that should be used for this node data. If there is only
           * one node definition, it is returned. Otherwise, find the node definition that has a when
           * predicate that returns true with the data. If none return true, return the default node
           * definition.
           */

        }, {
          key: "_getNodeDef",
          value: function _getNodeDef(data, i) {
            if (this._nodeDefs.length === 1) {
              return this._nodeDefs.first;
            }

            var nodeDef = this._nodeDefs.find(function (def) {
              return def.when && def.when(i, data);
            }) || this._defaultNodeDef;

            if (!nodeDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getTreeMissingMatchingNodeDefError();
            }

            return nodeDef;
          }
          /**
           * Create the embedded view for the data node template and place it in the correct index location
           * within the data node view container.
           */

        }, {
          key: "insertNode",
          value: function insertNode(nodeData, index, viewContainer, parentData) {
            var node = this._getNodeDef(nodeData, index); // Node context that will be provided to created embedded view


            var context = new CdkTreeNodeOutletContext(nodeData); // If the tree is flat tree, then use the `getLevel` function in flat tree control
            // Otherwise, use the level of parent node.

            if (this.treeControl.getLevel) {
              context.level = this.treeControl.getLevel(nodeData);
            } else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
              context.level = this._levels.get(parentData) + 1;
            } else {
              context.level = 0;
            }

            this._levels.set(nodeData, context.level); // Use default tree nodeOutlet, or nested node's nodeOutlet


            var container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
            container.createEmbeddedView(node.template, context, index); // Set the data to just created `CdkTreeNode`.
            // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
            //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.

            if (CdkTreeNode.mostRecentTreeNode) {
              CdkTreeNode.mostRecentTreeNode.data = nodeData;
            }
          }
        }]);

        return CdkTree;
      }();

      CdkTree.ɵfac = function CdkTree_Factory(t) {
        return new (t || CdkTree)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
      };

      CdkTree.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CdkTree,
        selectors: [["cdk-tree"]],
        contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkTreeNodeDef, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._nodeDefs = _t);
          }
        },
        viewQuery: function CdkTree_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](CdkTreeNodeOutlet, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
          }
        },
        hostAttrs: ["role", "tree", 1, "cdk-tree"],
        inputs: {
          dataSource: "dataSource",
          treeControl: "treeControl",
          trackBy: "trackBy"
        },
        exportAs: ["cdkTree"],
        decls: 1,
        vars: 0,
        consts: [["cdkTreeNodeOutlet", ""]],
        template: function CdkTree_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [CdkTreeNodeOutlet],
        encapsulation: 2
      });

      CdkTree.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      CdkTree.propDecorators = {
        dataSource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        treeControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        trackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _nodeOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [CdkTreeNodeOutlet, {
            "static": true
          }]
        }],
        _nodeDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkTreeNodeDef, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTree, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'cdk-tree',
            exportAs: 'cdkTree',
            template: "<ng-container cdkTreeNodeOutlet></ng-container>",
            host: {
              'class': 'cdk-tree',
              'role': 'tree'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
            // The view for `CdkTree` consists entirely of templates declared in other views. As they are
            // declared elsewhere, they are checked when their declaration points are checked.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }];
        }, {
          dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          treeControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          _nodeOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkTreeNodeOutlet, {
              "static": true
            }]
          }],
          _nodeDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkTreeNodeDef, {
              // We need to use `descendants: true`, because Ivy will no longer match
              // indirect descendants if it's left as false.
              descendants: true
            }]
          }]
        });
      })();
      /**
       * Tree node for CdkTree. It contains the data in the tree node.
       */


      var CdkTreeNode = /*#__PURE__*/function () {
        function CdkTreeNode(_elementRef, _tree) {
          _classCallCheck(this, CdkTreeNode);

          this._elementRef = _elementRef;
          this._tree = _tree;
          /** Subject that emits when the component has been destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          /** Emits when the node's data has changed. */

          this._dataChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          CdkTreeNode.mostRecentTreeNode = this; // The classes are directly added here instead of in the host property because classes on
          // the host property are not inherited with View Engine. It is not set as a @HostBinding because
          // it is not set by the time it's children nodes try to read the class from it.
          // TODO: move to host after View Engine deprecation

          this._elementRef.nativeElement.classList.add('cdk-tree-node');

          this.role = 'treeitem';
        }
        /**
         * The role of the tree node.
         * @deprecated The correct role is 'treeitem', 'group' should not be used. This input will be
         *   removed in a future version.
         * @breaking-change 12.0.0 Remove this input
         */


        _createClass(CdkTreeNode, [{
          key: "role",
          get: function get() {
            return 'treeitem';
          },
          set: function set(_role) {
            // TODO: move to host after View Engine deprecation
            this._elementRef.nativeElement.setAttribute('role', _role);
          }
          /** The tree node's data. */

        }, {
          key: "data",
          get: function get() {
            return this._data;
          },
          set: function set(value) {
            if (value !== this._data) {
              this._data = value;

              this._setRoleFromData();

              this._dataChanges.next();
            }
          }
        }, {
          key: "isExpanded",
          get: function get() {
            return this._tree.treeControl.isExpanded(this._data);
          }
        }, {
          key: "_setExpanded",
          value: function _setExpanded(_expanded) {
            this._isAriaExpanded = _expanded;

            this._elementRef.nativeElement.setAttribute('aria-expanded', "".concat(_expanded));
          }
        }, {
          key: "level",
          get: function get() {
            // If the treeControl has a getLevel method, use it to get the level. Otherwise read the
            // aria-level off the parent node and use it as the level for this node (note aria-level is
            // 1-indexed, while this property is 0-indexed, so we don't need to increment).
            return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : this._parentNodeAriaLevel;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._parentNodeAriaLevel = getParentNodeAriaLevel(this._elementRef.nativeElement);

            this._elementRef.nativeElement.setAttribute('aria-level', "".concat(this.level + 1));
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            // aria-expanded is be set here because the expanded state is stored in the tree control and
            // the node isn't aware when the state is changed.
            // It is not set using a @HostBinding because they sometimes get lost with Mixin based classes.
            // TODO: move to host after View Engine deprecation
            if (this.isExpanded != this._isAriaExpanded) {
              this._setExpanded(this.isExpanded);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // If this is the last tree node being destroyed,
            // clear out the reference to avoid leaking memory.
            if (CdkTreeNode.mostRecentTreeNode === this) {
              CdkTreeNode.mostRecentTreeNode = null;
            }

            this._dataChanges.complete();

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Focuses the menu item. Implements for FocusableOption. */

        }, {
          key: "focus",
          value: function focus() {
            this._elementRef.nativeElement.focus();
          } // TODO: role should eventually just be set in the component host

        }, {
          key: "_setRoleFromData",
          value: function _setRoleFromData() {
            if (!this._tree.treeControl.isExpandable && !this._tree.treeControl.getChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getTreeControlFunctionsMissingError();
            }

            this.role = 'treeitem';
          }
        }]);

        return CdkTreeNode;
      }();

      CdkTreeNode.ɵfac = function CdkTreeNode_Factory(t) {
        return new (t || CdkTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree));
      };

      CdkTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkTreeNode,
        selectors: [["cdk-tree-node"]],
        inputs: {
          role: "role"
        },
        exportAs: ["cdkTreeNode"]
      });
      /**
       * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
       * in `CdkTree` and set the data to it.
       */

      CdkTreeNode.mostRecentTreeNode = null;

      CdkTreeNode.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: CdkTree
        }];
      };

      CdkTreeNode.propDecorators = {
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNode, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'cdk-tree-node',
            exportAs: 'cdkTreeNode'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: CdkTree
          }];
        }, {
          role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();

      function getParentNodeAriaLevel(nodeElement) {
        var parent = nodeElement.parentElement;

        while (parent && !isNodeElement(parent)) {
          parent = parent.parentElement;
        }

        if (!parent) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throw Error('Incorrect tree structure containing detached node.');
          } else {
            return -1;
          }
        } else if (parent.classList.contains('cdk-nested-tree-node')) {
          return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(parent.getAttribute('aria-level'));
        } else {
          // The ancestor element is the cdk-tree itself
          return 0;
        }
      }

      function isNodeElement(element) {
        var classList = element.classList;
        return !!((classList === null || classList === void 0 ? void 0 : classList.contains('cdk-nested-tree-node')) || (classList === null || classList === void 0 ? void 0 : classList.contains('cdk-tree')));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Nested node is a child of `<cdk-tree>`. It works with nested tree.
       * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
       * be added in the `cdkTreeNodeOutlet` in tree node template.
       * The children of node will be automatically added to `cdkTreeNodeOutlet`.
       */


      var CdkNestedTreeNode = /*#__PURE__*/function (_CdkTreeNode) {
        _inherits(CdkNestedTreeNode, _CdkTreeNode);

        var _super3 = _createSuper(CdkNestedTreeNode);

        function CdkNestedTreeNode(_elementRef, _tree, _differs) {
          var _this10;

          _classCallCheck(this, CdkNestedTreeNode);

          _this10 = _super3.call(this, _elementRef, _tree);
          _this10._elementRef = _elementRef;
          _this10._tree = _tree;
          _this10._differs = _differs; // The classes are directly added here instead of in the host property because classes on
          // the host property are not inherited with View Engine. It is not set as a @HostBinding because
          // it is not set by the time it's children nodes try to read the class from it.
          // TODO: move to host after View Engine deprecation

          _this10._elementRef.nativeElement.classList.add('cdk-nested-tree-node');

          return _this10;
        }

        _createClass(CdkNestedTreeNode, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this11 = this;

            this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);

            if (!this._tree.treeControl.getChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getTreeControlFunctionsMissingError();
            }

            var childrenNodes = this._tree.treeControl.getChildren(this.data);

            if (Array.isArray(childrenNodes)) {
              this.updateChildrenNodes(childrenNodes);
            } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(childrenNodes)) {
              childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(function (result) {
                return _this11.updateChildrenNodes(result);
              });
            }

            this.nodeOutlet.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(function () {
              return _this11.updateChildrenNodes();
            });
          } // This is a workaround for https://github.com/angular/angular/issues/23091
          // In aot mode, the lifecycle hooks from parent class are not called.

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            _get(_getPrototypeOf(CdkNestedTreeNode.prototype), "ngOnInit", this).call(this);
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            _get(_getPrototypeOf(CdkNestedTreeNode.prototype), "ngDoCheck", this).call(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._clear();

            _get(_getPrototypeOf(CdkNestedTreeNode.prototype), "ngOnDestroy", this).call(this);
          }
          /** Add children dataNodes to the NodeOutlet */

        }, {
          key: "updateChildrenNodes",
          value: function updateChildrenNodes(children) {
            var outlet = this._getNodeOutlet();

            if (children) {
              this._children = children;
            }

            if (outlet && this._children) {
              var viewContainer = outlet.viewContainer;

              this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
            } else {
              // Reset the data differ if there's no children nodes displayed
              this._dataDiffer.diff([]);
            }
          }
          /** Clear the children dataNodes. */

        }, {
          key: "_clear",
          value: function _clear() {
            var outlet = this._getNodeOutlet();

            if (outlet) {
              outlet.viewContainer.clear();

              this._dataDiffer.diff([]);
            }
          }
          /** Gets the outlet for the current node. */

        }, {
          key: "_getNodeOutlet",
          value: function _getNodeOutlet() {
            var _this12 = this;

            var outlets = this.nodeOutlet; // Note that since we use `descendants: true` on the query, we have to ensure
            // that we don't pick up the outlet of a child node by accident.

            return outlets && outlets.find(function (outlet) {
              return !outlet._node || outlet._node === _this12;
            });
          }
        }]);

        return CdkNestedTreeNode;
      }(CdkTreeNode);

      CdkNestedTreeNode.ɵfac = function CdkNestedTreeNode_Factory(t) {
        return new (t || CdkNestedTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]));
      };

      CdkNestedTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkNestedTreeNode,
        selectors: [["cdk-nested-tree-node"]],
        contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkTreeNodeOutlet, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nodeOutlet = _t);
          }
        },
        inputs: {
          role: "role",
          disabled: "disabled",
          tabIndex: "tabIndex"
        },
        exportAs: ["cdkNestedTreeNode"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: CdkTreeNode,
          useExisting: CdkNestedTreeNode
        }, {
          provide: CDK_TREE_NODE_OUTLET_NODE,
          useExisting: CdkNestedTreeNode
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      CdkNestedTreeNode.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: CdkTree
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }];
      };

      CdkNestedTreeNode.propDecorators = {
        nodeOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkTreeNodeOutlet, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkNestedTreeNode, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'cdk-nested-tree-node',
            exportAs: 'cdkNestedTreeNode',
            inputs: ['role', 'disabled', 'tabIndex'],
            providers: [{
              provide: CdkTreeNode,
              useExisting: CdkNestedTreeNode
            }, {
              provide: CDK_TREE_NODE_OUTLET_NODE,
              useExisting: CdkNestedTreeNode
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: CdkTree
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
          }];
        }, {
          nodeOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkTreeNodeOutlet, {
              // We need to use `descendants: true`, because Ivy will no longer match
              // indirect descendants if it's left as false.
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Regex used to split a string on its CSS units. */


      var cssUnitPattern = /([A-Za-z%]+)$/;
      /**
       * Indent for the children tree dataNodes.
       * This directive will add left-padding to the node to show hierarchy.
       */

      var CdkTreeNodePadding = /*#__PURE__*/function () {
        function CdkTreeNodePadding(_treeNode, _tree, _element, _dir) {
          var _this13 = this;

          _classCallCheck(this, CdkTreeNodePadding);

          this._treeNode = _treeNode;
          this._tree = _tree;
          this._element = _element;
          this._dir = _dir;
          /** Subject that emits when the component has been destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          /** CSS units used for the indentation value. */

          this.indentUnits = 'px';
          this._indent = 40;

          this._setPadding();

          if (_dir) {
            _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(function () {
              return _this13._setPadding(true);
            });
          } // In Ivy the indentation binding might be set before the tree node's data has been added,
          // which means that we'll miss the first render. We have to subscribe to changes in the
          // data to ensure that everything is up to date.


          _treeNode._dataChanges.subscribe(function () {
            return _this13._setPadding();
          });
        }
        /** The level of depth of the tree node. The padding will be `level * indent` pixels. */


        _createClass(CdkTreeNodePadding, [{
          key: "level",
          get: function get() {
            return this._level;
          },
          set: function set(value) {
            this._setLevelInput(value);
          }
          /**
           * The indent for each level. Can be a number or a CSS string.
           * Default number 40px from material design menu sub-menu spec.
           */

        }, {
          key: "indent",
          get: function get() {
            return this._indent;
          },
          set: function set(indent) {
            this._setIndentInput(indent);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /** The padding indent value for the tree node. Returns a string with px numbers if not null. */

        }, {
          key: "_paddingIndent",
          value: function _paddingIndent() {
            var nodeLevel = this._treeNode.data && this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._treeNode.data) : null;
            var level = this._level == null ? nodeLevel : this._level;
            return typeof level === 'number' ? "".concat(level * this._indent).concat(this.indentUnits) : null;
          }
        }, {
          key: "_setPadding",
          value: function _setPadding() {
            var forceChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var padding = this._paddingIndent();

            if (padding !== this._currentPadding || forceChange) {
              var element = this._element.nativeElement;
              var paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
              var resetProp = paddingProp === 'paddingLeft' ? 'paddingRight' : 'paddingLeft';
              element.style[paddingProp] = padding || '';
              element.style[resetProp] = '';
              this._currentPadding = padding;
            }
          }
          /**
           * This has been extracted to a util because of TS 4 and VE.
           * View Engine doesn't support property rename inheritance.
           * TS 4.0 doesn't allow properties to override accessors or vice-versa.
           * @docs-private
           */

        }, {
          key: "_setLevelInput",
          value: function _setLevelInput(value) {
            // Set to null as the fallback value so that _setPadding can fall back to the node level if the
            // consumer set the directive as `cdkTreeNodePadding=""`. We still want to take this value if
            // they set 0 explicitly.
            this._level = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value, null);

            this._setPadding();
          }
          /**
           * This has been extracted to a util because of TS 4 and VE.
           * View Engine doesn't support property rename inheritance.
           * TS 4.0 doesn't allow properties to override accessors or vice-versa.
           * @docs-private
           */

        }, {
          key: "_setIndentInput",
          value: function _setIndentInput(indent) {
            var value = indent;
            var units = 'px';

            if (typeof indent === 'string') {
              var parts = indent.split(cssUnitPattern);
              value = parts[0];
              units = parts[1] || units;
            }

            this.indentUnits = units;
            this._indent = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value);

            this._setPadding();
          }
        }]);

        return CdkTreeNodePadding;
      }();

      CdkTreeNodePadding.ɵfac = function CdkTreeNodePadding_Factory(t) {
        return new (t || CdkTreeNodePadding)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTreeNode), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], 8));
      };

      CdkTreeNodePadding.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkTreeNodePadding,
        selectors: [["", "cdkTreeNodePadding", ""]],
        inputs: {
          level: ["cdkTreeNodePadding", "level"],
          indent: ["cdkTreeNodePaddingIndent", "indent"]
        }
      });

      CdkTreeNodePadding.ctorParameters = function () {
        return [{
          type: CdkTreeNode
        }, {
          type: CdkTree
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };

      CdkTreeNodePadding.propDecorators = {
        level: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['cdkTreeNodePadding']
        }],
        indent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['cdkTreeNodePaddingIndent']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodePadding, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkTreeNodePadding]'
          }]
        }], function () {
          return [{
            type: CdkTreeNode
          }, {
            type: CdkTree
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, {
          level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['cdkTreeNodePadding']
          }],
          indent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['cdkTreeNodePaddingIndent']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Node toggle to expand/collapse the node.
       */


      var CdkTreeNodeToggle = /*#__PURE__*/function () {
        function CdkTreeNodeToggle(_tree, _treeNode) {
          _classCallCheck(this, CdkTreeNodeToggle);

          this._tree = _tree;
          this._treeNode = _treeNode;
          this._recursive = false;
        }
        /** Whether expand/collapse the node recursively. */


        _createClass(CdkTreeNodeToggle, [{
          key: "recursive",
          get: function get() {
            return this._recursive;
          },
          set: function set(value) {
            this._recursive = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete

        }, {
          key: "_toggle",
          value: function _toggle(event) {
            this.recursive ? this._tree.treeControl.toggleDescendants(this._treeNode.data) : this._tree.treeControl.toggle(this._treeNode.data);
            event.stopPropagation();
          }
        }]);

        return CdkTreeNodeToggle;
      }();

      CdkTreeNodeToggle.ɵfac = function CdkTreeNodeToggle_Factory(t) {
        return new (t || CdkTreeNodeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTreeNode));
      };

      CdkTreeNodeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkTreeNodeToggle,
        selectors: [["", "cdkTreeNodeToggle", ""]],
        hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) {
              return ctx._toggle($event);
            });
          }
        },
        inputs: {
          recursive: ["cdkTreeNodeToggleRecursive", "recursive"]
        }
      });

      CdkTreeNodeToggle.ctorParameters = function () {
        return [{
          type: CdkTree
        }, {
          type: CdkTreeNode
        }];
      };

      CdkTreeNodeToggle.propDecorators = {
        recursive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['cdkTreeNodeToggleRecursive']
        }],
        _toggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['click', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodeToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkTreeNodeToggle]'
          }]
        }], function () {
          return [{
            type: CdkTree
          }, {
            type: CdkTreeNode
          }];
        }, {
          recursive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['cdkTreeNodeToggleRecursive']
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['click', ['$event']]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];

      var CdkTreeModule = function CdkTreeModule() {
        _classCallCheck(this, CdkTreeModule);
      };

      CdkTreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: CdkTreeModule
      });
      CdkTreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function CdkTreeModule_Factory(t) {
          return new (t || CdkTreeModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTreeModule, {
          declarations: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet],
          exports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            exports: EXPORTED_DECLARATIONS,
            declarations: EXPORTED_DECLARATIONS
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=tree.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~drag-and-drop-dnd-module~src-schematics-schematic-module~tree-tree-module-es5.js.map