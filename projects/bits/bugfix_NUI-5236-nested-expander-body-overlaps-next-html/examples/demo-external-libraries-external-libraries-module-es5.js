(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-external-libraries-external-libraries-module"], {
    /***/
    "CHVl":
    /*!******************************************************************************************************************!*\
      !*** ./demo/src/components/demo/external-libraries/drag-and-drop/dnd-dropzone/dnd-dropzone.example.component.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: DndDropzoneExampleComponent */

    /***/
    function CHVl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DndDropzoneExampleComponent", function () {
        return DndDropzoneExampleComponent;
      });
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_dnd_dnd_drop_target_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../../src/lib/dnd/dnd-drop-target.directive */
      "tVJz");

      function DndDropzoneExampleComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragData", item_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r6, " ");
        }
      }

      function DndDropzoneExampleComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invisible", _r1.isDropZoneActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7, " ");
        }
      }

      function DndDropzoneExampleComponent_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      function DndDropzoneExampleComponent_ng_template_15_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nui-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DndDropzoneExampleComponent_ng_template_15_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nui-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DndDropzoneExampleComponent_ng_template_15_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nui-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DndDropzoneExampleComponent_ng_template_15_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DndDropzoneExampleComponent_ng_template_15_div_0_div_1_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DndDropzoneExampleComponent_ng_template_15_div_0_div_3_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DndDropzoneExampleComponent_ng_template_15_div_0_div_5_Template, 4, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var target_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().target;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, target_r8.showDropZone$) !== true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, target_r8.canLastDragItemBeDropped$));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, target_r8.canLastDragItemBeDropped$) === false);
        }
      }

      function DndDropzoneExampleComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DndDropzoneExampleComponent_ng_template_15_div_0_Template, 7, 9, "div", 13);
        }

        if (rf & 2) {
          var target_r8 = ctx.target;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", target_r8.isDropZoneActive);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          target: a0
        };
      };

      var DndDropzoneExampleComponent = /*#__PURE__*/function () {
        function DndDropzoneExampleComponent() {
          _classCallCheck(this, DndDropzoneExampleComponent);

          this.sourceItems = ["Adobe", "IBM"];
          this.destinationItems = ["Dell"];
        } // prevent user from putting back already displaced items


        _createClass(DndDropzoneExampleComponent, [{
          key: "sourceAcceptsItem",
          value: function sourceAcceptsItem(item, dropList) {
            return false;
          }
        }, {
          key: "destinationAcceptsItem",
          value: function destinationAcceptsItem(item, dropList) {
            return item === "Adobe" || item === "Dell";
          }
        }, {
          key: "onItemDropped",
          value: function onItemDropped(event) {
            if (!this.destinationAcceptsItem(event.item.data)) {
              return;
            }

            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["copyArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
          }
        }]);

        return DndDropzoneExampleComponent;
      }();

      DndDropzoneExampleComponent.ɵfac = function DndDropzoneExampleComponent_Factory(t) {
        return new (t || DndDropzoneExampleComponent)();
      };

      DndDropzoneExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DndDropzoneExampleComponent,
        selectors: [["dnd-dropzone"]],
        decls: 17,
        vars: 11,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6187988476699573468$$DEMO_SRC_COMPONENTS_DEMO_EXTERNAL_LIBRARIES_DRAG_AND_DROP_DND_DROPZONE_DND_DROPZONE_EXAMPLE_COMPONENT_TS____1 = goog.getMsg("Not allowed");
            i18n_0 = MSG_EXTERNAL_6187988476699573468$$DEMO_SRC_COMPONENTS_DEMO_EXTERNAL_LIBRARIES_DRAG_AND_DROP_DND_DROPZONE_DND_DROPZONE_EXAMPLE_COMPONENT_TS____1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241F81fbbbbeaf89c71eb3c63ff12858c284f92c732d\u241F6187988476699573468:Not allowed"])));
          }

          return [["cdkDropListGroup", ""], ["id", "nui-demo-drop-list-1", 1, "draggable-container", "pr-2"], ["cdkDropList", "", 1, "dragzone", "draggable-list", 3, "cdkDropListData", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate"], [1, "items-container"], ["class", "draggable-item", "cdkDrag", "", "cdkDragPreviewClass", "nui-dnd-preview", 3, "cdkDragData", 4, "ngFor", "ngForOf"], ["id", "nui-demo-drop-list-2", 1, "draggable-container", "pl-2"], ["cdkDropList", "", "nuiDndDropTarget", "", 1, "dropzone", "draggable-list", 3, "cdkDropListData", "canBeDropped", "cdkDropListDropped"], ["destinationTarget", "nuiDndDropTarget"], ["class", "item", 3, "invisible", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["highlightDropzoneTemplate", ""], ["cdkDrag", "", "cdkDragPreviewClass", "nui-dnd-preview", 1, "draggable-item", 3, "cdkDragData"], [1, "item"], ["class", "centered-overlay text-center", 4, "ngIf"], [1, "centered-overlay", "text-center"], [4, "ngIf"], ["icon", "plus", "iconSize", "medium", "cssClass", "drop-circle-permanent"], ["icon", "plus", "iconSize", "medium", "cssClass", "drop-circle-allowed"], [1, "centered-overlay", "text-nowrap", "text-special"], i18n_0, ["icon", "close", "iconSize", "medium", "cssClass", "drop-circle-not-allowed"]];
        },
        template: function DndDropzoneExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Source");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DndDropzoneExampleComponent_div_6_Template, 2, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Destination");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function DndDropzoneExampleComponent_Template_div_cdkDropListDropped_10_listener($event) {
              return ctx.onItemDropped($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DndDropzoneExampleComponent_div_13_Template, 2, 3, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DndDropzoneExampleComponent_ng_container_14_Template, 1, 0, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DndDropzoneExampleComponent_ng_template_15_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx.sourceItems)("cdkDropListSortingDisabled", true)("cdkDropListEnterPredicate", ctx.sourceAcceptsItem);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sourceItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx.destinationItems)("canBeDropped", ctx.destinationAcceptsItem);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.destinationItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c2, _r1));
          }
        },
        directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_dnd_dnd_drop_target_directive__WEBPACK_IMPORTED_MODULE_3__["DndDropTargetDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
        styles: [".draggable-container[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n  min-height: 250px;\n}\n.draggable-container[_ngcontent-%COMP%]   .draggable-list[_ngcontent-%COMP%] {\n  border: solid 4px transparent;\n  position: relative;\n  padding: 10px;\n  transition: all 0.3s ease-in-out;\n}\n.draggable-container[_ngcontent-%COMP%]   .draggable-list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.draggable-container[_ngcontent-%COMP%]   .draggable-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .draggable-item[_ngcontent-%COMP%]:hover, .draggable-container[_ngcontent-%COMP%]   .draggable-list.cdk-drop-list-receiving[_ngcontent-%COMP%]   .draggable-item[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n  background-color: initial;\n}\n.dragzone[_ngcontent-%COMP%]   .cdk-drop-list-dragging[_ngcontent-%COMP%]   .draggable-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.dropzone[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  min-height: 138px;\n}\n.dropzone[_ngcontent-%COMP%]   .cdk-drag-placeholder[_ngcontent-%COMP%], .dropzone[_ngcontent-%COMP%]   .draggable-placeholder[_ngcontent-%COMP%] {\n  visibility: hidden;\n  min-height: 46px;\n}\n.item[_ngcontent-%COMP%], .draggable-item[_ngcontent-%COMP%], .draggable-placeholder[_ngcontent-%COMP%] {\n  min-height: 51px;\n  padding: 15px;\n  box-sizing: border-box;\n  text-align: center;\n  border: 1px #d9d9d9 solid;\n  transition: box-shadow 0.4s;\n}\n.item[_ngcontent-%COMP%], .draggable-item[_ngcontent-%COMP%] {\n  border-bottom-color: transparent;\n}\n.item.cdk-drag[_ngcontent-%COMP%]:hover:not(.cdk-drag-placeholder), .draggable-item.cdk-drag[_ngcontent-%COMP%]:hover:not(.cdk-drag-placeholder) {\n  background: #f2f2f2;\n  z-index: 1;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n  cursor: move;\n  padding: 15px;\n}\n.items-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  border-bottom-color: #d9d9d9;\n}\n.centered-overlay[_ngcontent-%COMP%]   .text-special[_ngcontent-%COMP%] {\n  top: -25px;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRuZC1kcm9wem9uZS5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvdmVuZG9yLXByZWZpeGVzLmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9kbmQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQUNBO0VBTVEsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQUpSO0FBTEE7RUFZWSxrQkFBQTtBQUpaO0FBTVE7O0VBRVEsZ0JBQUE7RUFDQSx5QkFBQTtBQUpoQjtBQVVBO0VBRVEsc0RBQUE7QUFUUjtBQWFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBWEo7QUFTQTs7RUFLUSxrQkFBQTtFQUNBLGdCQUFBO0FBVlI7QUFjQTs7O0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VDNkpNLDJCQUFBO0FEcEtWO0FBV0E7O0VBQ0ksZ0NBQUE7QUFSSjtBQVVJOztFRWhEQSxtQkFBQTtFQUlBLFVBQUE7RUFFQSxzQkFBQTtFQUNBLHVFQUFBO0VGNENJLFlBQUE7RUFDQSxhQUFBO0FBTFI7QUFRQztFQUErQiw0QkFBQTtBQUxoQztBQU9BO0VBQ0ksVUFBQTtBQUxKO0FBVUE7RUFDSSxzREFBQTtBQVJKIiwiZmlsZSI6ImRuZC1kcm9wem9uZS5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIm51aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwibWl4aW5zXCI7XG5cbkBtaW4taGVpZ2h0OiA1MHB4O1xuXG4uZHJhZ2dhYmxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtaW4taGVpZ2h0OiAoQG1pbi1oZWlnaHQgKiA1KTtcblxuICAgIC5kcmFnZ2FibGUtbGlzdCB7XG4gICAgICAgIGJvcmRlcjogc29saWQgQGRuZC16b25lLWJvcmRlci13aWR0aCB0cmFuc3BhcmVudDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiBAbnVpLXNwYWNlLXNtO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICAgICAgJi5jZGstZHJvcC1saXN0LWRyYWdnaW5nLCAmLmNkay1kcm9wLWxpc3QtcmVjZWl2aW5nIHtcbiAgICAgICAgICAgIC5kcmFnZ2FibGUtaXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZHJhZ3pvbmUge1xuICAgIC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5kcmFnZ2FibGUtaXRlbTpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICB9XG59XG5cbi5kcm9wem9uZSB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgbWluLWhlaWdodDogKDIgKiAoQG1pbi1oZWlnaHQgKyBAbnVpLXNwYWNlLW1kICsgQGRuZC16b25lLWJvcmRlci13aWR0aCkpO1xuXG4gICAgLmNkay1kcmFnLXBsYWNlaG9sZGVyLCAuZHJhZ2dhYmxlLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICBtaW4taGVpZ2h0OiBAbWluLWhlaWdodCAtIEBkbmQtem9uZS1ib3JkZXItd2lkdGg7XG4gICAgfVxufVxuXG4uaXRlbSwgLmRyYWdnYWJsZS1pdGVtLCAuZHJhZ2dhYmxlLXBsYWNlaG9sZGVyIHtcbiAgICBtaW4taGVpZ2h0OiBAbWluLWhlaWdodCArIEBkbmQtaXRlbS1ib3JkZXItd2lkdGg7XG4gICAgcGFkZGluZzogQG51aS1zcGFjZS1tZDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IEBkbmQtaXRlbS1ib3JkZXItd2lkdGggQG51aS1jb2xvci1saW5lLWRlZmF1bHQgc29saWQ7XG4gICAgLnRyYW5zaXRpb24oYm94LXNoYWRvdyAwLjRzKTtcbn1cblxuLml0ZW0sIC5kcmFnZ2FibGUtaXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAmLmNkay1kcmFnOmhvdmVyOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgLm51aS1kbmQtaG92ZXItc3RhdGUoKTtcbiAgICAgICAgLm51aS1kbmQtcmFpc2VkLXN0YXRlKCk7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgcGFkZGluZzogQG51aS1zcGFjZS1tZDtcbiAgICB9XG59XG4mLml0ZW1zLWNvbnRhaW5lciA6bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b20tY29sb3I6IEBudWktY29sb3ItbGluZS1kZWZhdWx0O31cblxuLmNlbnRlcmVkLW92ZXJsYXkgLnRleHQtc3BlY2lhbCB7XG4gICAgdG9wOiAtMjVweDtcbn1cblxuLy8gVGhpcyBjbGFzcyBpcyBhZGRlZCB0byBhIGNka0RyYWcgZWxlbWVudCB3aGVuIHRoZSB1c2VyIGhhcyBzdG9wcGVkIGRyYWdnaW5nLlxuLy8gQ0RLIHdpbGwgYW5pbWF0ZSB0aGUgZWxlbWVudCBmcm9tIGl0cyBkcm9wIHBvc2l0aW9uIHRvIHRoZSBmaW5hbCBwb3NpdGlvbiBpbnNpZGUgdGhlIGNka0Ryb3BMaXN0IGNvbnRhaW5lclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4iLCIvLyBWZW5kb3IgUHJlZml4ZXNcbi8vXG4vLyBBbGwgdmVuZG9yIG1peGlucyBhcmUgZGVwcmVjYXRlZCBhcyBvZiB2My4yLjAgZHVlIHRvIHRoZSBpbnRyb2R1Y3Rpb24gb2Zcbi8vIEF1dG9wcmVmaXhlciBpbiBvdXIgR3J1bnRmaWxlLiBUaGV5IHdpbGwgYmUgcmVtb3ZlZCBpbiB2NC5cblxuLy8gLSBBbmltYXRpb25zXG4vLyAtIEJhY2tmYWNlIHZpc2liaWxpdHlcbi8vIC0gQm94IHNoYWRvd1xuLy8gLSBCb3ggc2l6aW5nXG4vLyAtIENvbnRlbnQgY29sdW1uc1xuLy8gLSBIeXBoZW5zXG4vLyAtIFBsYWNlaG9sZGVyIHRleHRcbi8vIC0gVHJhbnNmb3JtYXRpb25zXG4vLyAtIFRyYW5zaXRpb25zXG4vLyAtIFVzZXIgU2VsZWN0XG5cblxuLy8gQW5pbWF0aW9uc1xuLmFuaW1hdGlvbihAYW5pbWF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBAYW5pbWF0aW9uO1xuICAgICAgIC1vLWFuaW1hdGlvbjogQGFuaW1hdGlvbjtcbiAgICAgICAgICBhbmltYXRpb246IEBhbmltYXRpb247XG59XG5cbi5hbmltYXRpb24tbmFtZShAbmFtZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBAbmFtZTtcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogQG5hbWU7XG59XG5cbi5hbmltYXRpb24tZHVyYXRpb24oQGR1cmF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBAZHVyYXRpb247XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiBAZHVyYXRpb247XG59XG5cbi5hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uKEB0aW1pbmctZnVuY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IEB0aW1pbmctZnVuY3Rpb247XG59XG5cbi5hbmltYXRpb24tZGVsYXkoQGRlbGF5KSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBAZGVsYXk7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiBAZGVsYXk7XG59XG5cbi5hbmltYXRpb24taXRlcmF0aW9uLWNvdW50KEBpdGVyYXRpb24tY291bnQpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBAaXRlcmF0aW9uLWNvdW50O1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IEBpdGVyYXRpb24tY291bnQ7XG59XG5cbi5hbmltYXRpb24tZGlyZWN0aW9uKEBkaXJlY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBAZGlyZWN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IEBkaXJlY3Rpb247XG59XG5cbi5hbmltYXRpb24tZmlsbC1tb2RlKEBmaWxsLW1vZGUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBAZmlsbC1tb2RlO1xuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IEBmaWxsLW1vZGU7XG59XG5cbi8vIEJhY2tmYWNlIHZpc2liaWxpdHlcbi8vIFByZXZlbnQgYnJvd3NlcnMgZnJvbSBmbGlja2VyaW5nIHdoZW4gdXNpbmcgQ1NTIDNEIHRyYW5zZm9ybXMuXG4vLyBEZWZhdWx0IHZhbHVlIGlzIGB2aXNpYmxlYCwgYnV0IGNhbiBiZSBjaGFuZ2VkIHRvIGBoaWRkZW5gXG5cbi5iYWNrZmFjZS12aXNpYmlsaXR5KEB2aXNpYmlsaXR5KXtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBAdmlzaWJpbGl0eTtcbiAgICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBAdmlzaWJpbGl0eTtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBAdmlzaWJpbGl0eTtcbn1cblxuLy8gQm94IHNpemluZ1xuLmJveC1zaXppbmcoQGJveG1vZGVsKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogQGJveG1vZGVsO1xuICAgICAtbW96LWJveC1zaXppbmc6IEBib3htb2RlbDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBAYm94bW9kZWw7XG59XG5cbi8vIENTUzMgQ29udGVudCBDb2x1bW5zXG4uY29udGVudC1jb2x1bW5zKEBjb2x1bW4tY291bnQ7IEBjb2x1bW4tZ2FwOiBAZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IEBjb2x1bW4tY291bnQ7XG4gICAgIC1tb3otY29sdW1uLWNvdW50OiBAY29sdW1uLWNvdW50O1xuICAgICAgICAgIGNvbHVtbi1jb3VudDogQGNvbHVtbi1jb3VudDtcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiBAY29sdW1uLWdhcDtcbiAgICAgLW1vei1jb2x1bW4tZ2FwOiBAY29sdW1uLWdhcDtcbiAgICAgICAgICBjb2x1bW4tZ2FwOiBAY29sdW1uLWdhcDtcbn1cblxuLy8gT3B0aW9uYWwgaHlwaGVuYXRpb25cbi5oeXBoZW5zKEBtb2RlOiBhdXRvKSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgLXdlYmtpdC1oeXBoZW5zOiBAbW9kZTtcbiAgICAgLW1vei1oeXBoZW5zOiBAbW9kZTtcbiAgICAgIC1tcy1oeXBoZW5zOiBAbW9kZTsgLy8gSUUxMCtcbiAgICAgICAtby1oeXBoZW5zOiBAbW9kZTtcbiAgICAgICAgICBoeXBoZW5zOiBAbW9kZTtcbn1cblxuLy8gUGxhY2Vob2xkZXIgdGV4dFxuLnBsYWNlaG9sZGVyKEBjb2xvcjogQGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyLCBAZm9udFdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyKSB7XG4gIC8vIEZpcmVmb3hcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBpbnB1dC1jb2xvci1wbGFjZWhvbGRlcik7XG4gICAgb3BhY2l0eTogMTsgLy8gT3ZlcnJpZGUgRmlyZWZveCdzIHVudXN1YWwgZGVmYXVsdCBvcGFjaXR5OyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL3B1bGwvMTE1MjZcbiAgICBmb250LXdlaWdodDogQGZvbnRXZWlnaHQ7XG4gIH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKTsgZm9udC13ZWlnaHQ6IEBmb250V2VpZ2h0IH0gLy8gSW50ZXJuZXQgRXhwbG9yZXIgMTArXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgIHsgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBpbnB1dC1jb2xvci1wbGFjZWhvbGRlcik7IGZvbnQtd2VpZ2h0OiBAZm9udFdlaWdodCB9IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG59XG5cbi8vIFRyYW5zZm9ybWF0aW9uc1xuLnNjYWxlKEBmYWN0b3IpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKEBmYWN0b3IpO1xuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZShAZmFjdG9yKTtcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKEBmYWN0b3IpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG59XG5cbi5zY2FsZShAcmF0aW9YOyBAcmF0aW9ZKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZShAcmF0aW9YLCBAcmF0aW9ZKTtcbiAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoQHJhdGlvWCwgQHJhdGlvWSk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZShAcmF0aW9YLCBAcmF0aW9ZKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xufVxuXG4uc2NhbGVYKEByYXRpbykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKEByYXRpbyk7XG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWChAcmF0aW8pOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGVYKEByYXRpbyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbn1cblxuLnNjYWxlWShAcmF0aW8pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWShAcmF0aW8pO1xuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoQHJhdGlvKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlWShAcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG59XG5cbi5za2V3KEB4OyBAeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goQHgpIHNrZXdZKEB5KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNrZXdYKEB4KSBza2V3WShAeSk7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzQ4ODU7IElFOStcbiAgICAgICAtby10cmFuc2Zvcm06IHNrZXdYKEB4KSBza2V3WShAeSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBza2V3WChAeCkgc2tld1koQHkpO1xufVxuXG4udHJhbnNsYXRlKEB4OyBAeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKEB4LCBAeSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoQHgsIEB5KTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZShAeCwgQHkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKEB4LCBAeSk7XG59XG5cbi50cmFuc2xhdGUzZChAeDsgQHk7IEB6KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChAeCwgQHksIEB6KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKEB4LCBAeSwgQHopO1xufVxuXG4ucm90YXRlKEBkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoQGRlZ3JlZXMpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKEBkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZShAZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoQGRlZ3JlZXMpO1xufVxuXG4ucm90YXRlWChAZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWChAZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKEBkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoQGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWChAZGVncmVlcyk7XG59XG5cbi5yb3RhdGVZKEBkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKEBkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoQGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWShAZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKEBkZWdyZWVzKTtcbn1cblxuLnBlcnNwZWN0aXZlKEBwZXJzcGVjdGl2ZSkge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiBAcGVyc3BlY3RpdmU7XG4gICAgIC1tb3otcGVyc3BlY3RpdmU6IEBwZXJzcGVjdGl2ZTtcbiAgICAgICAgICBwZXJzcGVjdGl2ZTogQHBlcnNwZWN0aXZlO1xufVxuXG4ucGVyc3BlY3RpdmUtb3JpZ2luKEBwZXJzcGVjdGl2ZSkge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogQHBlcnNwZWN0aXZlO1xuICAgICAtbW96LXBlcnNwZWN0aXZlLW9yaWdpbjogQHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlLW9yaWdpbjogQHBlcnNwZWN0aXZlO1xufVxuXG4udHJhbnNmb3JtLW9yaWdpbihAb3JpZ2luKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogQG9yaWdpbjtcbiAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBAb3JpZ2luO1xuICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IEBvcmlnaW47IC8vIElFOSBvbmx5XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogQG9yaWdpbjtcbn1cblxuXG4vLyBUcmFuc2l0aW9uc1xuXG4udHJhbnNpdGlvbihAdHJhbnNpdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb246IEB0cmFuc2l0aW9uO1xuICAgICAgIC1vLXRyYW5zaXRpb246IEB0cmFuc2l0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb246IEB0cmFuc2l0aW9uO1xufVxuXG4udHJhbnNpdGlvbi1wcm9wZXJ0eShAdHJhbnNpdGlvbi1wcm9wZXJ0eSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IEB0cmFuc2l0aW9uLXByb3BlcnR5O1xuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IEB0cmFuc2l0aW9uLXByb3BlcnR5O1xufVxuXG4udHJhbnNpdGlvbi1kZWxheShAdHJhbnNpdGlvbi1kZWxheSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IEB0cmFuc2l0aW9uLWRlbGF5O1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IEB0cmFuc2l0aW9uLWRlbGF5O1xufVxuXG4udHJhbnNpdGlvbi1kdXJhdGlvbihAdHJhbnNpdGlvbi1kdXJhdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uO1xufVxuXG4udHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24oQHRpbWluZy1mdW5jdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xufVxuXG4udHJhbnNpdGlvbi10cmFuc2Zvcm0oQHRyYW5zaXRpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBAdHJhbnNpdGlvbjtcbiAgICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSBAdHJhbnNpdGlvbjtcbiAgICAgICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gQHRyYW5zaXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIEB0cmFuc2l0aW9uO1xufVxuXG5cbi8vIFVzZXIgc2VsZWN0XG4vLyBGb3Igc2VsZWN0aW5nIHRleHQgb24gdGhlIHBhZ2VcblxuLnVzZXItc2VsZWN0KEBzZWxlY3QpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogQHNlbGVjdDtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogQHNlbGVjdDtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogQHNlbGVjdDsgLy8gSUUxMCtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogQHNlbGVjdDtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG5AZG5kLWl0ZW0tYm9yZGVyLXdpZHRoOiBAbnVpLWxpbmUtZGVmYXVsdDtcbkBkbmQtem9uZS1ib3JkZXItd2lkdGg6IEBudWktbGluZS1mYXQ7XG5AZG5kLXpvbmUtaWNvbi1zaXplOiA0MHB4O1xuXG4vKiogZHJhZ2dhYmxlIGl0ZW1zIHN0YXRlcyAqL1xuLm51aS1kbmQtaG92ZXItc3RhdGUge1xuICAgIGJhY2tncm91bmQ6IEBudWktY29sb3ItYmctY29udGVudC1ob3Zlcjtcbn1cblxuLm51aS1kbmQtcmFpc2VkLXN0YXRlIHtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiBAbnVpLXNoYWRvdy1lbGV2YXRlZDtcbn1cblxuLm51aS1kbmQtcHJldmlldyB7XG4gICAgYm9yZGVyOiBAZG5kLWl0ZW0tYm9yZGVyLXdpZHRoIEBudWktY29sb3ItbGluZS1kZWZhdWx0IHNvbGlkO1xuICAgIC5udWktZG5kLWhvdmVyLXN0YXRlKCk7XG4gICAgLm51aS1kbmQtcmFpc2VkLXN0YXRlKCk7XG59XG5cbi5udWktZG5kLWRyb3B6b25lIHtcbiAgICAvKiogZHJvcHpvbmUgc3RhdGVzICovXG4gICAgJi5udWktZG5kLWRyb3B6b25lLS1hY3RpdmUge1xuICAgICAgICBib3JkZXI6IEBkbmQtem9uZS1ib3JkZXItd2lkdGggZGFzaGVkIEBudWktY29sb3Itc2VtYW50aWMtdW5rbm93biAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYubnVpLWRuZC1kcm9wem9uZS0tZHJvcC1hbGxvd2VkIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgICBib3JkZXI6IEBkbmQtem9uZS1ib3JkZXItd2lkdGggc29saWQgQG51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLXNlbGVjdGVkLWFjdGl2ZTtcbiAgICB9O1xuICAgICYubnVpLWRuZC1kcm9wem9uZS0tZHJvcC1ub3QtYWxsb3dlZCB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgYm9yZGVyOiBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoIHNvbGlkIEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWwgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1idXN5LWRlc3RydWN0aXZlO1xuICAgIH1cblxuICAgIC8qKiBvdGhlciBjdXN0b216aWF0aW9ucyAqL1xuICAgIC5jZW50ZXJlZC1vdmVybGF5LCAubnVpLWljb24taXRlbTpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIC50cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuXG4gICAgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IEBkbmQtem9uZS1pY29uLXNpemU7XG4gICAgICAgICAgICB3aWR0aDogQGRuZC16b25lLWljb24tc2l6ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQFRPRE8gZml4L3JlbW92ZSB0aGlzIGhhY2tpbmcgc3R5bGUgb25jZSBudWktaWNvbiBnZXRzIHByb3BlciBzdXBwb3J0IGZvciBzaXplLCBiZyBjb2xvciBhbmQgZmlsbCBjb2xvclxuICAgIC5kcm9wLWNpcmNsZXtcbiAgICAgICAgJi1wZXJtYW5lbnQge1xuICAgICAgICAgICAgJiAubnVpLWljb24taXRlbSB7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLWJnLWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAgICYgcG9seWdvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taGlnaGxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1hbGxvd2VkIHtcbiAgICAgICAgICAgICYgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAmIHBvbHlnb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IEBudWktY29sb3ItaWNvbi1pbnZlcnNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1ub3QtYWxsb3dlZCB7XG4gICAgICAgICAgICAmIC5udWktaWNvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgJiBwYXRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDVweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taW52ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "Dqz+":
    /*!************************************************************************************************************!*\
      !*** ./demo/src/components/demo/external-libraries/drag-and-drop/dnd-basic/dnd-basic.example.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: DndBasicExampleComponent */

    /***/
    function Dqz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DndBasicExampleComponent", function () {
        return DndBasicExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");

      var DndBasicExampleComponent = function DndBasicExampleComponent() {
        _classCallCheck(this, DndBasicExampleComponent);
      };

      DndBasicExampleComponent.ɵfac = function DndBasicExampleComponent_Factory(t) {
        return new (t || DndBasicExampleComponent)();
      };

      DndBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DndBasicExampleComponent,
        selectors: [["dnd-basic"]],
        decls: 2,
        vars: 0,
        consts: [["cdkDrag", "", 1, "draggable-item"]],
        template: function DndBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " I can be dragged from anywhere\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"]],
        styles: [".draggable-item[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 100px;\n  padding: 15px;\n  box-sizing: border-box;\n  border: solid 1px #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 0.4s;\n}\n.draggable-item[_ngcontent-%COMP%]:hover {\n  background: #f2f2f2;\n  z-index: 1;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n  cursor: move;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRuZC1iYXNpYy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvdmVuZG9yLXByZWZpeGVzLmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9kbmQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VDNkxNLDJCQUFBO0FEL0xWO0FBS0k7RUVaQSxtQkFBQTtFQUlBLFVBQUE7RUFFQSxzQkFBQTtFQUNBLHVFQUFBO0VGUUksWUFBQTtFQUNBLGFBQUE7QUFEUiIsImZpbGUiOiJkbmQtYmFzaWMuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJudWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGluc1wiO1xuXG5AYm94LXdpZHRoOiAxNTBweDtcbkBib3gtaGVpZ2h0OiAxMDBweDtcblxuLmRyYWdnYWJsZS1pdGVtIHtcbiAgICB3aWR0aDogQGJveC13aWR0aDtcbiAgICBoZWlnaHQ6IEBib3gtaGVpZ2h0O1xuICAgIHBhZGRpbmc6IEBudWktc3BhY2UtbWQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBAZ3JheTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIC50cmFuc2l0aW9uKGJveC1zaGFkb3cgMC40cyk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLm51aS1kbmQtaG92ZXItc3RhdGUoKTtcbiAgICAgICAgLm51aS1kbmQtcmFpc2VkLXN0YXRlKCk7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgcGFkZGluZzogQG51aS1zcGFjZS1tZDtcbiAgICB9XG59XG4iLCIvLyBWZW5kb3IgUHJlZml4ZXNcbi8vXG4vLyBBbGwgdmVuZG9yIG1peGlucyBhcmUgZGVwcmVjYXRlZCBhcyBvZiB2My4yLjAgZHVlIHRvIHRoZSBpbnRyb2R1Y3Rpb24gb2Zcbi8vIEF1dG9wcmVmaXhlciBpbiBvdXIgR3J1bnRmaWxlLiBUaGV5IHdpbGwgYmUgcmVtb3ZlZCBpbiB2NC5cblxuLy8gLSBBbmltYXRpb25zXG4vLyAtIEJhY2tmYWNlIHZpc2liaWxpdHlcbi8vIC0gQm94IHNoYWRvd1xuLy8gLSBCb3ggc2l6aW5nXG4vLyAtIENvbnRlbnQgY29sdW1uc1xuLy8gLSBIeXBoZW5zXG4vLyAtIFBsYWNlaG9sZGVyIHRleHRcbi8vIC0gVHJhbnNmb3JtYXRpb25zXG4vLyAtIFRyYW5zaXRpb25zXG4vLyAtIFVzZXIgU2VsZWN0XG5cblxuLy8gQW5pbWF0aW9uc1xuLmFuaW1hdGlvbihAYW5pbWF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBAYW5pbWF0aW9uO1xuICAgICAgIC1vLWFuaW1hdGlvbjogQGFuaW1hdGlvbjtcbiAgICAgICAgICBhbmltYXRpb246IEBhbmltYXRpb247XG59XG5cbi5hbmltYXRpb24tbmFtZShAbmFtZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBAbmFtZTtcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogQG5hbWU7XG59XG5cbi5hbmltYXRpb24tZHVyYXRpb24oQGR1cmF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBAZHVyYXRpb247XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiBAZHVyYXRpb247XG59XG5cbi5hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uKEB0aW1pbmctZnVuY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IEB0aW1pbmctZnVuY3Rpb247XG59XG5cbi5hbmltYXRpb24tZGVsYXkoQGRlbGF5KSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBAZGVsYXk7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiBAZGVsYXk7XG59XG5cbi5hbmltYXRpb24taXRlcmF0aW9uLWNvdW50KEBpdGVyYXRpb24tY291bnQpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBAaXRlcmF0aW9uLWNvdW50O1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IEBpdGVyYXRpb24tY291bnQ7XG59XG5cbi5hbmltYXRpb24tZGlyZWN0aW9uKEBkaXJlY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBAZGlyZWN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IEBkaXJlY3Rpb247XG59XG5cbi5hbmltYXRpb24tZmlsbC1tb2RlKEBmaWxsLW1vZGUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBAZmlsbC1tb2RlO1xuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IEBmaWxsLW1vZGU7XG59XG5cbi8vIEJhY2tmYWNlIHZpc2liaWxpdHlcbi8vIFByZXZlbnQgYnJvd3NlcnMgZnJvbSBmbGlja2VyaW5nIHdoZW4gdXNpbmcgQ1NTIDNEIHRyYW5zZm9ybXMuXG4vLyBEZWZhdWx0IHZhbHVlIGlzIGB2aXNpYmxlYCwgYnV0IGNhbiBiZSBjaGFuZ2VkIHRvIGBoaWRkZW5gXG5cbi5iYWNrZmFjZS12aXNpYmlsaXR5KEB2aXNpYmlsaXR5KXtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBAdmlzaWJpbGl0eTtcbiAgICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBAdmlzaWJpbGl0eTtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBAdmlzaWJpbGl0eTtcbn1cblxuLy8gQm94IHNpemluZ1xuLmJveC1zaXppbmcoQGJveG1vZGVsKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogQGJveG1vZGVsO1xuICAgICAtbW96LWJveC1zaXppbmc6IEBib3htb2RlbDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBAYm94bW9kZWw7XG59XG5cbi8vIENTUzMgQ29udGVudCBDb2x1bW5zXG4uY29udGVudC1jb2x1bW5zKEBjb2x1bW4tY291bnQ7IEBjb2x1bW4tZ2FwOiBAZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IEBjb2x1bW4tY291bnQ7XG4gICAgIC1tb3otY29sdW1uLWNvdW50OiBAY29sdW1uLWNvdW50O1xuICAgICAgICAgIGNvbHVtbi1jb3VudDogQGNvbHVtbi1jb3VudDtcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiBAY29sdW1uLWdhcDtcbiAgICAgLW1vei1jb2x1bW4tZ2FwOiBAY29sdW1uLWdhcDtcbiAgICAgICAgICBjb2x1bW4tZ2FwOiBAY29sdW1uLWdhcDtcbn1cblxuLy8gT3B0aW9uYWwgaHlwaGVuYXRpb25cbi5oeXBoZW5zKEBtb2RlOiBhdXRvKSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgLXdlYmtpdC1oeXBoZW5zOiBAbW9kZTtcbiAgICAgLW1vei1oeXBoZW5zOiBAbW9kZTtcbiAgICAgIC1tcy1oeXBoZW5zOiBAbW9kZTsgLy8gSUUxMCtcbiAgICAgICAtby1oeXBoZW5zOiBAbW9kZTtcbiAgICAgICAgICBoeXBoZW5zOiBAbW9kZTtcbn1cblxuLy8gUGxhY2Vob2xkZXIgdGV4dFxuLnBsYWNlaG9sZGVyKEBjb2xvcjogQGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyLCBAZm9udFdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyKSB7XG4gIC8vIEZpcmVmb3hcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBpbnB1dC1jb2xvci1wbGFjZWhvbGRlcik7XG4gICAgb3BhY2l0eTogMTsgLy8gT3ZlcnJpZGUgRmlyZWZveCdzIHVudXN1YWwgZGVmYXVsdCBvcGFjaXR5OyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL3B1bGwvMTE1MjZcbiAgICBmb250LXdlaWdodDogQGZvbnRXZWlnaHQ7XG4gIH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKTsgZm9udC13ZWlnaHQ6IEBmb250V2VpZ2h0IH0gLy8gSW50ZXJuZXQgRXhwbG9yZXIgMTArXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgIHsgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBpbnB1dC1jb2xvci1wbGFjZWhvbGRlcik7IGZvbnQtd2VpZ2h0OiBAZm9udFdlaWdodCB9IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG59XG5cbi8vIFRyYW5zZm9ybWF0aW9uc1xuLnNjYWxlKEBmYWN0b3IpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKEBmYWN0b3IpO1xuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZShAZmFjdG9yKTtcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKEBmYWN0b3IpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG59XG5cbi5zY2FsZShAcmF0aW9YOyBAcmF0aW9ZKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZShAcmF0aW9YLCBAcmF0aW9ZKTtcbiAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoQHJhdGlvWCwgQHJhdGlvWSk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZShAcmF0aW9YLCBAcmF0aW9ZKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xufVxuXG4uc2NhbGVYKEByYXRpbykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKEByYXRpbyk7XG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWChAcmF0aW8pOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGVYKEByYXRpbyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbn1cblxuLnNjYWxlWShAcmF0aW8pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWShAcmF0aW8pO1xuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoQHJhdGlvKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlWShAcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG59XG5cbi5za2V3KEB4OyBAeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goQHgpIHNrZXdZKEB5KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNrZXdYKEB4KSBza2V3WShAeSk7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzQ4ODU7IElFOStcbiAgICAgICAtby10cmFuc2Zvcm06IHNrZXdYKEB4KSBza2V3WShAeSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBza2V3WChAeCkgc2tld1koQHkpO1xufVxuXG4udHJhbnNsYXRlKEB4OyBAeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKEB4LCBAeSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoQHgsIEB5KTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZShAeCwgQHkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKEB4LCBAeSk7XG59XG5cbi50cmFuc2xhdGUzZChAeDsgQHk7IEB6KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChAeCwgQHksIEB6KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKEB4LCBAeSwgQHopO1xufVxuXG4ucm90YXRlKEBkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoQGRlZ3JlZXMpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKEBkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZShAZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoQGRlZ3JlZXMpO1xufVxuXG4ucm90YXRlWChAZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWChAZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKEBkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoQGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWChAZGVncmVlcyk7XG59XG5cbi5yb3RhdGVZKEBkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKEBkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoQGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWShAZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKEBkZWdyZWVzKTtcbn1cblxuLnBlcnNwZWN0aXZlKEBwZXJzcGVjdGl2ZSkge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiBAcGVyc3BlY3RpdmU7XG4gICAgIC1tb3otcGVyc3BlY3RpdmU6IEBwZXJzcGVjdGl2ZTtcbiAgICAgICAgICBwZXJzcGVjdGl2ZTogQHBlcnNwZWN0aXZlO1xufVxuXG4ucGVyc3BlY3RpdmUtb3JpZ2luKEBwZXJzcGVjdGl2ZSkge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogQHBlcnNwZWN0aXZlO1xuICAgICAtbW96LXBlcnNwZWN0aXZlLW9yaWdpbjogQHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlLW9yaWdpbjogQHBlcnNwZWN0aXZlO1xufVxuXG4udHJhbnNmb3JtLW9yaWdpbihAb3JpZ2luKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogQG9yaWdpbjtcbiAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBAb3JpZ2luO1xuICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IEBvcmlnaW47IC8vIElFOSBvbmx5XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogQG9yaWdpbjtcbn1cblxuXG4vLyBUcmFuc2l0aW9uc1xuXG4udHJhbnNpdGlvbihAdHJhbnNpdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb246IEB0cmFuc2l0aW9uO1xuICAgICAgIC1vLXRyYW5zaXRpb246IEB0cmFuc2l0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb246IEB0cmFuc2l0aW9uO1xufVxuXG4udHJhbnNpdGlvbi1wcm9wZXJ0eShAdHJhbnNpdGlvbi1wcm9wZXJ0eSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IEB0cmFuc2l0aW9uLXByb3BlcnR5O1xuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IEB0cmFuc2l0aW9uLXByb3BlcnR5O1xufVxuXG4udHJhbnNpdGlvbi1kZWxheShAdHJhbnNpdGlvbi1kZWxheSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IEB0cmFuc2l0aW9uLWRlbGF5O1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IEB0cmFuc2l0aW9uLWRlbGF5O1xufVxuXG4udHJhbnNpdGlvbi1kdXJhdGlvbihAdHJhbnNpdGlvbi1kdXJhdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uO1xufVxuXG4udHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24oQHRpbWluZy1mdW5jdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xufVxuXG4udHJhbnNpdGlvbi10cmFuc2Zvcm0oQHRyYW5zaXRpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBAdHJhbnNpdGlvbjtcbiAgICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSBAdHJhbnNpdGlvbjtcbiAgICAgICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gQHRyYW5zaXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIEB0cmFuc2l0aW9uO1xufVxuXG5cbi8vIFVzZXIgc2VsZWN0XG4vLyBGb3Igc2VsZWN0aW5nIHRleHQgb24gdGhlIHBhZ2VcblxuLnVzZXItc2VsZWN0KEBzZWxlY3QpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogQHNlbGVjdDtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogQHNlbGVjdDtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogQHNlbGVjdDsgLy8gSUUxMCtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogQHNlbGVjdDtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG5AZG5kLWl0ZW0tYm9yZGVyLXdpZHRoOiBAbnVpLWxpbmUtZGVmYXVsdDtcbkBkbmQtem9uZS1ib3JkZXItd2lkdGg6IEBudWktbGluZS1mYXQ7XG5AZG5kLXpvbmUtaWNvbi1zaXplOiA0MHB4O1xuXG4vKiogZHJhZ2dhYmxlIGl0ZW1zIHN0YXRlcyAqL1xuLm51aS1kbmQtaG92ZXItc3RhdGUge1xuICAgIGJhY2tncm91bmQ6IEBudWktY29sb3ItYmctY29udGVudC1ob3Zlcjtcbn1cblxuLm51aS1kbmQtcmFpc2VkLXN0YXRlIHtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiBAbnVpLXNoYWRvdy1lbGV2YXRlZDtcbn1cblxuLm51aS1kbmQtcHJldmlldyB7XG4gICAgYm9yZGVyOiBAZG5kLWl0ZW0tYm9yZGVyLXdpZHRoIEBudWktY29sb3ItbGluZS1kZWZhdWx0IHNvbGlkO1xuICAgIC5udWktZG5kLWhvdmVyLXN0YXRlKCk7XG4gICAgLm51aS1kbmQtcmFpc2VkLXN0YXRlKCk7XG59XG5cbi5udWktZG5kLWRyb3B6b25lIHtcbiAgICAvKiogZHJvcHpvbmUgc3RhdGVzICovXG4gICAgJi5udWktZG5kLWRyb3B6b25lLS1hY3RpdmUge1xuICAgICAgICBib3JkZXI6IEBkbmQtem9uZS1ib3JkZXItd2lkdGggZGFzaGVkIEBudWktY29sb3Itc2VtYW50aWMtdW5rbm93biAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYubnVpLWRuZC1kcm9wem9uZS0tZHJvcC1hbGxvd2VkIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgICBib3JkZXI6IEBkbmQtem9uZS1ib3JkZXItd2lkdGggc29saWQgQG51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLXNlbGVjdGVkLWFjdGl2ZTtcbiAgICB9O1xuICAgICYubnVpLWRuZC1kcm9wem9uZS0tZHJvcC1ub3QtYWxsb3dlZCB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgYm9yZGVyOiBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoIHNvbGlkIEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWwgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1idXN5LWRlc3RydWN0aXZlO1xuICAgIH1cblxuICAgIC8qKiBvdGhlciBjdXN0b216aWF0aW9ucyAqL1xuICAgIC5jZW50ZXJlZC1vdmVybGF5LCAubnVpLWljb24taXRlbTpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIC50cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuXG4gICAgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IEBkbmQtem9uZS1pY29uLXNpemU7XG4gICAgICAgICAgICB3aWR0aDogQGRuZC16b25lLWljb24tc2l6ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQFRPRE8gZml4L3JlbW92ZSB0aGlzIGhhY2tpbmcgc3R5bGUgb25jZSBudWktaWNvbiBnZXRzIHByb3BlciBzdXBwb3J0IGZvciBzaXplLCBiZyBjb2xvciBhbmQgZmlsbCBjb2xvclxuICAgIC5kcm9wLWNpcmNsZXtcbiAgICAgICAgJi1wZXJtYW5lbnQge1xuICAgICAgICAgICAgJiAubnVpLWljb24taXRlbSB7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLWJnLWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAgICYgcG9seWdvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taGlnaGxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1hbGxvd2VkIHtcbiAgICAgICAgICAgICYgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAmIHBvbHlnb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IEBudWktY29sb3ItaWNvbi1pbnZlcnNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1ub3QtYWxsb3dlZCB7XG4gICAgICAgICAgICAmIC5udWktaWNvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgJiBwYXRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDVweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taW52ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "GcD8":
    /*!**********************************************************************************!*\
      !*** ./demo/src/components/demo/external-libraries/summary/summary.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: SummaryComponent */

    /***/
    function GcD8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SummaryComponent", function () {
        return SummaryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SummaryComponent = function SummaryComponent() {
        _classCallCheck(this, SummaryComponent);
      };

      SummaryComponent.ɵfac = function SummaryComponent_Factory(t) {
        return new (t || SummaryComponent)();
      };

      SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SummaryComponent,
        selectors: [["nui-external-libraries-summary"]],
        decls: 8,
        vars: 0,
        consts: [["href", "#/external-libraries/drag-and-drop"]],
        template: function SummaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "External Libraries");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " External front-end libraries can be used to enhance your app's functionality. The following section lists some of the available libraries you can use. Follow the links for examples on how to use them in your app.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Drag & Drop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Sk7E":
    /*!**********************************************************************************!*\
      !*** ./demo/src/components/demo/external-libraries/external-libraries.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: ExternalLibrariesModule */

    /***/
    function Sk7E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExternalLibrariesModule", function () {
        return ExternalLibrariesModule;
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
      "UgAt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        redirectTo: "summary",
        pathMatch: "full"
      }, {
        path: "summary",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["SummaryComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "drag-and-drop",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | drag-and-drop-dnd-module */
          [__webpack_require__.e("default~drag-and-drop-dnd-module~src-schematics-schematic-module~tree-tree-module"), __webpack_require__.e("drag-and-drop-dnd-module")]).then(__webpack_require__.bind(null,
          /*! ./drag-and-drop/dnd.module */
          "bq4q")).then(function (m) {
            return m.DndModule;
          });
        },
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].beta
          }
        }
      }];

      var ExternalLibrariesModule = function ExternalLibrariesModule() {
        _classCallCheck(this, ExternalLibrariesModule);
      };

      ExternalLibrariesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: ExternalLibrariesModule
      });
      ExternalLibrariesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function ExternalLibrariesModule_Factory(t) {
          return new (t || ExternalLibrariesModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ExternalLibrariesModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["SummaryComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "UgAt":
    /*!**************************************************************!*\
      !*** ./demo/src/components/demo/external-libraries/index.ts ***!
      \**************************************************************/

    /*! exports provided: SummaryComponent, DndDocsExampleComponent, DndBasicExampleComponent, DndCustomHandleExampleComponent */

    /***/
    function UgAt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _summary_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./summary/summary.component */
      "GcD8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SummaryComponent", function () {
        return _summary_summary_component__WEBPACK_IMPORTED_MODULE_0__["SummaryComponent"];
      });
      /* harmony import */


      var _drag_and_drop_dnd_docs_dnd_docs_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./drag-and-drop/dnd-docs/dnd-docs.example.component */
      "b35a");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DndDocsExampleComponent", function () {
        return _drag_and_drop_dnd_docs_dnd_docs_example_component__WEBPACK_IMPORTED_MODULE_1__["DndDocsExampleComponent"];
      });
      /* harmony import */


      var _drag_and_drop_dnd_basic_dnd_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./drag-and-drop/dnd-basic/dnd-basic.example.component */
      "Dqz+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DndBasicExampleComponent", function () {
        return _drag_and_drop_dnd_basic_dnd_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["DndBasicExampleComponent"];
      });
      /* harmony import */


      var _drag_and_drop_dnd_custom_handle_dnd_custom_handle_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./drag-and-drop/dnd-custom-handle/dnd-custom-handle.example.component */
      "b8uh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DndCustomHandleExampleComponent", function () {
        return _drag_and_drop_dnd_custom_handle_dnd_custom_handle_example_component__WEBPACK_IMPORTED_MODULE_3__["DndCustomHandleExampleComponent"];
      });
      /***/

    },

    /***/
    "Xuqq":
    /*!****************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/external-libraries/drag-and-drop/dnd-drag-disabled/dnd-drag-disabled-example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: DndDragDisabledExampleComponent */

    /***/
    function Xuqq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DndDragDisabledExampleComponent", function () {
        return DndDragDisabledExampleComponent;
      });
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DndDragDisabledExampleComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragDisabled", !item_r1.enabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r1.title, " - ", ctx_r0.translatedStatus(item_r1.enabled), " ");
        }
      }

      var IListItem = function IListItem() {
        _classCallCheck(this, IListItem);
      };

      var DndDragDisabledExampleComponent = /*#__PURE__*/function () {
        function DndDragDisabledExampleComponent() {
          _classCallCheck(this, DndDragDisabledExampleComponent);

          this.listItems = [{
            title: "Adobe",
            enabled: true
          }, {
            title: "IBM",
            enabled: false
          }];
        }

        _createClass(DndDragDisabledExampleComponent, [{
          key: "onItemDropped",
          value: function onItemDropped(event) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(this.listItems, event.previousIndex, event.currentIndex);
          }
        }, {
          key: "translatedStatus",
          value: function translatedStatus(enabled) {
            return enabled ? $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Enabled"]))) : $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Disabled"])));
          }
        }]);

        return DndDragDisabledExampleComponent;
      }();

      DndDragDisabledExampleComponent.ɵfac = function DndDragDisabledExampleComponent_Factory(t) {
        return new (t || DndDragDisabledExampleComponent)();
      };

      DndDragDisabledExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DndDragDisabledExampleComponent,
        selectors: [["dnd-drag-disabled"]],
        decls: 2,
        vars: 1,
        consts: [["cdkDropList", "", 1, "draggable-container", 3, "cdkDropListDropped"], ["class", "draggable-item", "cdkDrag", "", "cdkDragPreviewClass", "dnd-drag-preview", 3, "cdkDragDisabled", 4, "ngFor", "ngForOf"], ["cdkDrag", "", "cdkDragPreviewClass", "dnd-drag-preview", 1, "draggable-item", 3, "cdkDragDisabled"]],
        template: function DndDragDisabledExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function DndDragDisabledExampleComponent_Template_div_cdkDropListDropped_0_listener($event) {
              return ctx.onItemDropped($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DndDragDisabledExampleComponent_div_1_Template, 2, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listItems);
          }
        },
        directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"]],
        styles: [".dnd-drag-preview[_ngcontent-%COMP%] {\n  border: 1px #d9d9d9 solid;background: #f2f2f2;z-index: 1;box-sizing: border-box;box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.draggable-container[_ngcontent-%COMP%] {\n  width: 150px;\n  border-top: solid 1px #d9d9d9;\n}\n.item[_ngcontent-%COMP%], .draggable-item[_ngcontent-%COMP%], .dnd-drag-preview[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: center;\n}\n.draggable-item[_ngcontent-%COMP%] {\n  height: 50px;\n  border: 1px #d9d9d9 solid;\n  border-top: none;\n  transition: box-shadow 0.4s;\n}\n.draggable-item[_ngcontent-%COMP%]:hover:not(.cdk-drag-disabled) {\n  cursor: move;\n  background: #f2f2f2;\n  z-index: 1;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.draggable-item.cdk-drag-disabled[_ngcontent-%COMP%] {\n  color: #b3b3b3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRuZC1kcmFnLWRpc2FibGVkLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9kbmQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL3ZlbmRvci1wcmVmaXhlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DQTtFQ2hCSSx5QkFBQSxDQVhBLG1CQUFBLENBSUEsVUFBQSxDQUVBLHNCQUFBLENBQ0EsdUVBQUE7QURiSjtBQUlBO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0FBRko7QUFLQTs7O0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBREo7QUFJQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VFMkxNLDJCQUFBO0FGMUxWO0FBSUk7RUFDSSxZQUFBO0VDakJKLG1CQUFBO0VBSUEsVUFBQTtFQUVBLHNCQUFBO0VBQ0EsdUVBQUE7QURZSjtBQUdJO0VBQ0ksY0FBQTtBQURSIiwiZmlsZSI6ImRuZC1kcmFnLWRpc2FibGVkLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwibnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJtaXhpbnNcIjtcblxuQGJveC13aWR0aDogMTUwcHg7XG5AYm94LWhlaWdodDogNTBweDtcblxuLmRyYWdnYWJsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiBAYm94LXdpZHRoO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIEBudWktbGluZS1kZWZhdWx0IEBudWktY29sb3ItbGluZS1kZWZhdWx0O1xufVxuXG4uaXRlbSB7XG4gICAgcGFkZGluZzogQG51aS1zcGFjZS1tZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kcmFnZ2FibGUtaXRlbTpleHRlbmQoLml0ZW0pIHtcbiAgICBoZWlnaHQ6IEBib3gtaGVpZ2h0O1xuICAgIGJvcmRlcjogQGRuZC1pdGVtLWJvcmRlci13aWR0aCBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdCBzb2xpZDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuXG4gICAgLnRyYW5zaXRpb24oYm94LXNoYWRvdyAwLjRzKTtcblxuICAgIC8vIGFwcGx5IHN0eWxlIG9ubHkgZm9yIGl0ZW1zIHRoYXQgYXJlIGVuYWJsZWRcbiAgICAmOmhvdmVyOm5vdCguY2RrLWRyYWctZGlzYWJsZWQpIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgICAubnVpLWRuZC1ob3Zlci1zdGF0ZSgpO1xuICAgICAgICAubnVpLWRuZC1yYWlzZWQtc3RhdGUoKTtcbiAgICB9XG5cbiAgICAmLmNkay1kcmFnLWRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6IEBudWktY29sb3ItZGlzYWJsZWQ7XG4gICAgfVxufVxuXG4uZG5kLWRyYWctcHJldmlldzpleHRlbmQoLml0ZW0sIC5udWktZG5kLXByZXZpZXcpIHt9XG5cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG5AZG5kLWl0ZW0tYm9yZGVyLXdpZHRoOiBAbnVpLWxpbmUtZGVmYXVsdDtcbkBkbmQtem9uZS1ib3JkZXItd2lkdGg6IEBudWktbGluZS1mYXQ7XG5AZG5kLXpvbmUtaWNvbi1zaXplOiA0MHB4O1xuXG4vKiogZHJhZ2dhYmxlIGl0ZW1zIHN0YXRlcyAqL1xuLm51aS1kbmQtaG92ZXItc3RhdGUge1xuICAgIGJhY2tncm91bmQ6IEBudWktY29sb3ItYmctY29udGVudC1ob3Zlcjtcbn1cblxuLm51aS1kbmQtcmFpc2VkLXN0YXRlIHtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiBAbnVpLXNoYWRvdy1lbGV2YXRlZDtcbn1cblxuLm51aS1kbmQtcHJldmlldyB7XG4gICAgYm9yZGVyOiBAZG5kLWl0ZW0tYm9yZGVyLXdpZHRoIEBudWktY29sb3ItbGluZS1kZWZhdWx0IHNvbGlkO1xuICAgIC5udWktZG5kLWhvdmVyLXN0YXRlKCk7XG4gICAgLm51aS1kbmQtcmFpc2VkLXN0YXRlKCk7XG59XG5cbi5udWktZG5kLWRyb3B6b25lIHtcbiAgICAvKiogZHJvcHpvbmUgc3RhdGVzICovXG4gICAgJi5udWktZG5kLWRyb3B6b25lLS1hY3RpdmUge1xuICAgICAgICBib3JkZXI6IEBkbmQtem9uZS1ib3JkZXItd2lkdGggZGFzaGVkIEBudWktY29sb3Itc2VtYW50aWMtdW5rbm93biAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYubnVpLWRuZC1kcm9wem9uZS0tZHJvcC1hbGxvd2VkIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgICBib3JkZXI6IEBkbmQtem9uZS1ib3JkZXItd2lkdGggc29saWQgQG51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLXNlbGVjdGVkLWFjdGl2ZTtcbiAgICB9O1xuICAgICYubnVpLWRuZC1kcm9wem9uZS0tZHJvcC1ub3QtYWxsb3dlZCB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgYm9yZGVyOiBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoIHNvbGlkIEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWwgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1idXN5LWRlc3RydWN0aXZlO1xuICAgIH1cblxuICAgIC8qKiBvdGhlciBjdXN0b216aWF0aW9ucyAqL1xuICAgIC5jZW50ZXJlZC1vdmVybGF5LCAubnVpLWljb24taXRlbTpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIC50cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuXG4gICAgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IEBkbmQtem9uZS1pY29uLXNpemU7XG4gICAgICAgICAgICB3aWR0aDogQGRuZC16b25lLWljb24tc2l6ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQFRPRE8gZml4L3JlbW92ZSB0aGlzIGhhY2tpbmcgc3R5bGUgb25jZSBudWktaWNvbiBnZXRzIHByb3BlciBzdXBwb3J0IGZvciBzaXplLCBiZyBjb2xvciBhbmQgZmlsbCBjb2xvclxuICAgIC5kcm9wLWNpcmNsZXtcbiAgICAgICAgJi1wZXJtYW5lbnQge1xuICAgICAgICAgICAgJiAubnVpLWljb24taXRlbSB7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLWJnLWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAgICYgcG9seWdvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taGlnaGxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1hbGxvd2VkIHtcbiAgICAgICAgICAgICYgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAmIHBvbHlnb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IEBudWktY29sb3ItaWNvbi1pbnZlcnNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1ub3QtYWxsb3dlZCB7XG4gICAgICAgICAgICAmIC5udWktaWNvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgJiBwYXRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDVweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taW52ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFZlbmRvciBQcmVmaXhlc1xuLy9cbi8vIEFsbCB2ZW5kb3IgbWl4aW5zIGFyZSBkZXByZWNhdGVkIGFzIG9mIHYzLjIuMCBkdWUgdG8gdGhlIGludHJvZHVjdGlvbiBvZlxuLy8gQXV0b3ByZWZpeGVyIGluIG91ciBHcnVudGZpbGUuIFRoZXkgd2lsbCBiZSByZW1vdmVkIGluIHY0LlxuXG4vLyAtIEFuaW1hdGlvbnNcbi8vIC0gQmFja2ZhY2UgdmlzaWJpbGl0eVxuLy8gLSBCb3ggc2hhZG93XG4vLyAtIEJveCBzaXppbmdcbi8vIC0gQ29udGVudCBjb2x1bW5zXG4vLyAtIEh5cGhlbnNcbi8vIC0gUGxhY2Vob2xkZXIgdGV4dFxuLy8gLSBUcmFuc2Zvcm1hdGlvbnNcbi8vIC0gVHJhbnNpdGlvbnNcbi8vIC0gVXNlciBTZWxlY3RcblxuXG4vLyBBbmltYXRpb25zXG4uYW5pbWF0aW9uKEBhbmltYXRpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IEBhbmltYXRpb247XG4gICAgICAgLW8tYW5pbWF0aW9uOiBAYW5pbWF0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbjogQGFuaW1hdGlvbjtcbn1cblxuLmFuaW1hdGlvbi1uYW1lKEBuYW1lKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IEBuYW1lO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBAbmFtZTtcbn1cblxuLmFuaW1hdGlvbi1kdXJhdGlvbihAZHVyYXRpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IEBkdXJhdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IEBkdXJhdGlvbjtcbn1cblxuLmFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24oQHRpbWluZy1mdW5jdGlvbikge1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IEB0aW1pbmctZnVuY3Rpb247XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogQHRpbWluZy1mdW5jdGlvbjtcbn1cblxuLmFuaW1hdGlvbi1kZWxheShAZGVsYXkpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IEBkZWxheTtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IEBkZWxheTtcbn1cblxuLmFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQoQGl0ZXJhdGlvbi1jb3VudCkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IEBpdGVyYXRpb24tY291bnQ7XG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogQGl0ZXJhdGlvbi1jb3VudDtcbn1cblxuLmFuaW1hdGlvbi1kaXJlY3Rpb24oQGRpcmVjdGlvbikge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IEBkaXJlY3Rpb247XG4gICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogQGRpcmVjdGlvbjtcbn1cblxuLmFuaW1hdGlvbi1maWxsLW1vZGUoQGZpbGwtbW9kZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IEBmaWxsLW1vZGU7XG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogQGZpbGwtbW9kZTtcbn1cblxuLy8gQmFja2ZhY2UgdmlzaWJpbGl0eVxuLy8gUHJldmVudCBicm93c2VycyBmcm9tIGZsaWNrZXJpbmcgd2hlbiB1c2luZyBDU1MgM0QgdHJhbnNmb3Jtcy5cbi8vIERlZmF1bHQgdmFsdWUgaXMgYHZpc2libGVgLCBidXQgY2FuIGJlIGNoYW5nZWQgdG8gYGhpZGRlbmBcblxuLmJhY2tmYWNlLXZpc2liaWxpdHkoQHZpc2liaWxpdHkpe1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IEB2aXNpYmlsaXR5O1xuICAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IEB2aXNpYmlsaXR5O1xuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IEB2aXNpYmlsaXR5O1xufVxuXG4vLyBCb3ggc2l6aW5nXG4uYm94LXNpemluZyhAYm94bW9kZWwpIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBAYm94bW9kZWw7XG4gICAgIC1tb3otYm94LXNpemluZzogQGJveG1vZGVsO1xuICAgICAgICAgIGJveC1zaXppbmc6IEBib3htb2RlbDtcbn1cblxuLy8gQ1NTMyBDb250ZW50IENvbHVtbnNcbi5jb250ZW50LWNvbHVtbnMoQGNvbHVtbi1jb3VudDsgQGNvbHVtbi1nYXA6IEBncmlkLWd1dHRlci13aWR0aCkge1xuICAtd2Via2l0LWNvbHVtbi1jb3VudDogQGNvbHVtbi1jb3VudDtcbiAgICAgLW1vei1jb2x1bW4tY291bnQ6IEBjb2x1bW4tY291bnQ7XG4gICAgICAgICAgY29sdW1uLWNvdW50OiBAY29sdW1uLWNvdW50O1xuICAtd2Via2l0LWNvbHVtbi1nYXA6IEBjb2x1bW4tZ2FwO1xuICAgICAtbW96LWNvbHVtbi1nYXA6IEBjb2x1bW4tZ2FwO1xuICAgICAgICAgIGNvbHVtbi1nYXA6IEBjb2x1bW4tZ2FwO1xufVxuXG4vLyBPcHRpb25hbCBoeXBoZW5hdGlvblxuLmh5cGhlbnMoQG1vZGU6IGF1dG8pIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAtd2Via2l0LWh5cGhlbnM6IEBtb2RlO1xuICAgICAtbW96LWh5cGhlbnM6IEBtb2RlO1xuICAgICAgLW1zLWh5cGhlbnM6IEBtb2RlOyAvLyBJRTEwK1xuICAgICAgIC1vLWh5cGhlbnM6IEBtb2RlO1xuICAgICAgICAgIGh5cGhlbnM6IEBtb2RlO1xufVxuXG4vLyBQbGFjZWhvbGRlciB0ZXh0XG4ucGxhY2Vob2xkZXIoQGNvbG9yOiBAaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIsIEBmb250V2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpIHtcbiAgLy8gRmlyZWZveFxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKTtcbiAgICBvcGFjaXR5OiAxOyAvLyBPdmVycmlkZSBGaXJlZm94J3MgdW51c3VhbCBkZWZhdWx0IG9wYWNpdHk7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMTUyNlxuICAgIGZvbnQtd2VpZ2h0OiBAZm9udFdlaWdodDtcbiAgfVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC5zZXRDc3NWYXJpYWJsZShjb2xvciwgaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIpOyBmb250LXdlaWdodDogQGZvbnRXZWlnaHQgfSAvLyBJbnRlcm5ldCBFeHBsb3JlciAxMCtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciAgeyAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKTsgZm9udC13ZWlnaHQ6IEBmb250V2VpZ2h0IH0gLy8gU2FmYXJpIGFuZCBDaHJvbWVcbn1cblxuLy8gVHJhbnNmb3JtYXRpb25zXG4uc2NhbGUoQGZhY3Rvcikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZShAZmFjdG9yKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKEBmYWN0b3IpO1xuICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZShAZmFjdG9yKTtcbn1cblxuLnNjYWxlKEByYXRpb1g7IEByYXRpb1kpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoQHJhdGlvWCwgQHJhdGlvWSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZShAcmF0aW9YLCBAcmF0aW9ZKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoQHJhdGlvWCwgQHJhdGlvWSk7XG59XG5cbi5zY2FsZVgoQHJhdGlvKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbiAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlWChAcmF0aW8pO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKEByYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWChAcmF0aW8pO1xufVxuXG4uc2NhbGVZKEByYXRpbykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVkoQHJhdGlvKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWShAcmF0aW8pOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoQHJhdGlvKTtcbn1cblxuLnNrZXcoQHg7IEB5KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WChAeCkgc2tld1koQHkpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2tld1goQHgpIHNrZXdZKEB5KTsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvNDg4NTsgSUU5K1xuICAgICAgIC1vLXRyYW5zZm9ybTogc2tld1goQHgpIHNrZXdZKEB5KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKEB4KSBza2V3WShAeSk7XG59XG5cbi50cmFuc2xhdGUoQHg7IEB5KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoQHgsIEB5KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZShAeCwgQHkpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKEB4LCBAeSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoQHgsIEB5KTtcbn1cblxuLnRyYW5zbGF0ZTNkKEB4OyBAeTsgQHopIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKEB4LCBAeSwgQHopO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoQHgsIEB5LCBAeik7XG59XG5cbi5yb3RhdGUoQGRlZ3JlZXMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZShAZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoQGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKEBkZWdyZWVzKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZShAZGVncmVlcyk7XG59XG5cbi5yb3RhdGVYKEBkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKEBkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoQGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWChAZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKEBkZWdyZWVzKTtcbn1cblxuLnJvdGF0ZVkoQGRlZ3JlZXMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoQGRlZ3JlZXMpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWShAZGVncmVlcyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKEBkZWdyZWVzKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoQGRlZ3JlZXMpO1xufVxuXG4ucGVyc3BlY3RpdmUoQHBlcnNwZWN0aXZlKSB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IEBwZXJzcGVjdGl2ZTtcbiAgICAgLW1vei1wZXJzcGVjdGl2ZTogQHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlOiBAcGVyc3BlY3RpdmU7XG59XG5cbi5wZXJzcGVjdGl2ZS1vcmlnaW4oQHBlcnNwZWN0aXZlKSB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luOiBAcGVyc3BlY3RpdmU7XG4gICAgIC1tb3otcGVyc3BlY3RpdmUtb3JpZ2luOiBAcGVyc3BlY3RpdmU7XG4gICAgICAgICAgcGVyc3BlY3RpdmUtb3JpZ2luOiBAcGVyc3BlY3RpdmU7XG59XG5cbi50cmFuc2Zvcm0tb3JpZ2luKEBvcmlnaW4pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBAb3JpZ2luO1xuICAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IEBvcmlnaW47XG4gICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogQG9yaWdpbjsgLy8gSUU5IG9ubHlcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBAb3JpZ2luO1xufVxuXG5cbi8vIFRyYW5zaXRpb25zXG5cbi50cmFuc2l0aW9uKEB0cmFuc2l0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogQHRyYW5zaXRpb247XG4gICAgICAgLW8tdHJhbnNpdGlvbjogQHRyYW5zaXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbjogQHRyYW5zaXRpb247XG59XG5cbi50cmFuc2l0aW9uLXByb3BlcnR5KEB0cmFuc2l0aW9uLXByb3BlcnR5KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHk7XG4gICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHk7XG59XG5cbi50cmFuc2l0aW9uLWRlbGF5KEB0cmFuc2l0aW9uLWRlbGF5KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogQHRyYW5zaXRpb24tZGVsYXk7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogQHRyYW5zaXRpb24tZGVsYXk7XG59XG5cbi50cmFuc2l0aW9uLWR1cmF0aW9uKEB0cmFuc2l0aW9uLWR1cmF0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogQHRyYW5zaXRpb24tZHVyYXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHRyYW5zaXRpb24tZHVyYXRpb247XG59XG5cbi50cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbihAdGltaW5nLWZ1bmN0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IEB0aW1pbmctZnVuY3Rpb247XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IEB0aW1pbmctZnVuY3Rpb247XG59XG5cbi50cmFuc2l0aW9uLXRyYW5zZm9ybShAdHJhbnNpdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIEB0cmFuc2l0aW9uO1xuICAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIEB0cmFuc2l0aW9uO1xuICAgICAgIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSBAdHJhbnNpdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gQHRyYW5zaXRpb247XG59XG5cblxuLy8gVXNlciBzZWxlY3Rcbi8vIEZvciBzZWxlY3RpbmcgdGV4dCBvbiB0aGUgcGFnZVxuXG4udXNlci1zZWxlY3QoQHNlbGVjdCkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBAc2VsZWN0O1xuICAgICAtbW96LXVzZXItc2VsZWN0OiBAc2VsZWN0O1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiBAc2VsZWN0OyAvLyBJRTEwK1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBAc2VsZWN0O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "b35a":
    /*!**********************************************************************************************************!*\
      !*** ./demo/src/components/demo/external-libraries/drag-and-drop/dnd-docs/dnd-docs.example.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: DndDocsExampleComponent */

    /***/
    function b35a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DndDocsExampleComponent", function () {
        return DndDocsExampleComponent;
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


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../src/lib/message/message.component */
      "4pDv");
      /* harmony import */


      var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */
      "CVg4");
      /* harmony import */


      var _dnd_basic_dnd_basic_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../dnd-basic/dnd-basic.example.component */
      "Dqz+");
      /* harmony import */


      var _dnd_axis_constraints_dnd_axis_constraints_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../dnd-axis-constraints/dnd-axis-constraints.example.component */
      "i6b3");
      /* harmony import */


      var _dnd_drag_disabled_dnd_drag_disabled_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../dnd-drag-disabled/dnd-drag-disabled-example.component */
      "Xuqq");
      /* harmony import */


      var _dnd_drag_preview_dnd_drag_preview_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../dnd-drag-preview/dnd-drag-preview.example.component */
      "pCZ6");
      /* harmony import */


      var _dnd_custom_handle_dnd_custom_handle_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../dnd-custom-handle/dnd-custom-handle.example.component */
      "b8uh");
      /* harmony import */


      var _dnd_drag_placeholder_dnd_drag_placeholder_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../dnd-drag-placeholder/dnd-drag-placeholder-example.component */
      "zaTN");
      /* harmony import */


      var _dnd_dropzone_dnd_dropzone_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../dnd-dropzone/dnd-dropzone.example.component */
      "CHVl");

      var DndDocsExampleComponent = function DndDocsExampleComponent() {
        _classCallCheck(this, DndDocsExampleComponent);

        this.initialSetupCode = "\n// our module where we want to use drag-and-drop features\nimport { DragDropModule } from \"@angular/cdk/drag-drop\";\n\n@NgModule({\n    imports: [\n        DragDropModule,\n        // other modules that we might need\n    ],\n    declarations: [ /* our module declaration */],\n    exports:      [ /* our exports */ ],\n})\nexport class MyModule {}".replace("\r\n", "<br/>") // nice rendering
        ;
        this.hideHandleWhileDragging = "\n.dnd-drag-preview .drag-handle {\n    display: none;\n}\n    ";
      };

      DndDocsExampleComponent.ɵfac = function DndDocsExampleComponent_Factory(t) {
        return new (t || DndDocsExampleComponent)();
      };

      DndDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DndDocsExampleComponent,
        selectors: [["nui-dnd-docs"]],
        decls: 207,
        vars: 7,
        consts: [["language", "typescript"], ["href", "https://material.angular.io/cdk/drag-drop/overview", "target", "_blank"], ["type", "info", 3, "allowDismiss"], ["filenamePrefix", "dnd-basic", "exampleTitle", "Drag & Drop"], ["filenamePrefix", "dnd-axis-constraints", "exampleTitle", "Drag Axis Constraints"], ["filenamePrefix", "dnd-drag-disabled", "exampleTitle", "Disabled draggable items"], ["type", "warning", 3, "allowDismiss"], ["filenamePrefix", "dnd-drag-preview", "exampleTitle", "Custom Drag Preview"], ["filenamePrefix", "dnd-custom-handle", "exampleTitle", "Custom Drag Handle"], ["language", "css"], ["filenamePrefix", "dnd-drag-placeholder", "exampleTitle", "Custom Placeholder"], ["href", "../directives/DndDropTargetDirective.html", "target", "_parent"], ["filenamePrefix", "dnd-dropzone", "exampleTitle", "Dropzones"]],
        template: function DndDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The Angular CDK drag and drop module provides a way to easily and declaratively create drag and drop interfaces.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "To get started, import ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DragDropModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " into the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "NgModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " where you want to use drag-and-drop features:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-example-code", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " For more details on the implementation of the @angular/cdk/drag-drop, check the documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "NuiDndModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Angular CDK's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "DragDropModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " This example shows how easy it is to create a draggable element by adding the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "cdkDrag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " directive on the DOM element we want to become draggable. Since it can be dragged without any handle, hovering the element will alter its state to both ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "nui-dnd-raised-state");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "nui-dnd-hover-state");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nui-message", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " In case you want to customize the styles for your draggable elements, it may be helpful to know that all ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "cdkDrag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " DOM elements have the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, ".cdk-drag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " CSS class applied to them. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "dnd-basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Drag Axis Constraints");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " By default, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "cdkDrag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " allows free movement in all directions. To restrict dragging to a specific axis, you can set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "cdkDragLockAxis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " input on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "cdkDrag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " or the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "cdkDropListLockAxis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " input on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "cdkDropList");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " to either \"x\" or \"y\".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "nui-example-wrapper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "dnd-axis-constraints");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Disabled draggable items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "A collection of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "cdkDrag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " elements are usually placed inside a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "cdkDropList");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "To prevent an item from being dragged set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "cdkDragDisabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " input on the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "cdkDrag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " element to true:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "nui-message", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Disabled draggable DOM elements have the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, ".cdk-drag-disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " CSS class appended to them.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "See the styles customization applied to the disabled draggable items in the LESS source code tab in the source expander below for inspiration.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "dnd-drag-disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Custom Drag Preview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "It is possible to display custom preview content instead of cloning the original element by specifying the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "cdkDragPreview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " directive.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "The directive must be specified for each ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "cdkDrag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " element that we want to have preview content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "nui-message", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Important:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " In order for the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "cdkDragPreview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " directive to work, it must be wrapped inside a DOM element with the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "cdkDropList");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " directive specified. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Take a look at the source of the following example to see how.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "nui-example-wrapper", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "dnd-drag-preview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Custom Drag Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "The handle by which an element can be dragged can be customized by specifying the directive ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "cdkDragHandle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " on the element we want to become the handle.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "nui-example-wrapper", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "dnd-custom-handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " In the example above the handle is still displayed while dragging an element; to hide the handle we just need to apply the properer styling on the cloned preview element as shown below: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "nui-example-code", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Custom Placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " While a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "cdkDrag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " element is being dragged, the Angular CDK will create a placeholder element that will show the user where the dragged element will be placed when it's dropped.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " By default the placeholder is a clone of the element that is being dragged, however you can replace it with a custom one using the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "*cdkDragPlaceholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " directive.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "nui-example-wrapper", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "dnd-drag-placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Dropzones Visualization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " A drag container is a collection of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "cdkDrag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " elements within a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "cdkDropList");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, ". Decorating a drag container with the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "nuiDndDropTarget");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " directive defines a dropzone.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "nui-message", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " In order use multiple drag containers, both sources and destinations must be wrapped within a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "cdkDropListGroup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " directive.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Once the user starts dragging an item from the source, the destination is highlighted as an available destination dropzone; the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "nui-dnd-dropzone--active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " CSS class is added to the dropzone once dragging starts. The destination uses the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "nuiDndDropTarget");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " directive helper in order to inform the user visually whether a dropzone will accept or reject a dragged item. In the following example, all items are accepted except for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "IBM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, ";\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "nui-message", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " The following CSS classes are added to the dropzone once the conditions are met as described below: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "nui-dnd-dropzone--active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " - once dragging starts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "nui-dnd-dropzone--drop-allowed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " - once the user is over the dropzone and the dragged item is accepted");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "nui-dnd-dropzone--drop-not-allowed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " - once the user is over the dropzone and the dragged item is NOT accepted");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " To define acceptance conditions for a dropzone, the user can provide a callback method to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "canBeDropped");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "nui-example-wrapper", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "dnd-dropzone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.initialSetupCode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hideHandleWhileDragging);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
          }
        },
        directives: [_src_lib_docs_example_code_example_code_component__WEBPACK_IMPORTED_MODULE_1__["ExampleCodeComponent"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["ExampleWrapperComponent"], _dnd_basic_dnd_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["DndBasicExampleComponent"], _dnd_axis_constraints_dnd_axis_constraints_example_component__WEBPACK_IMPORTED_MODULE_5__["DndAxisConstraintsExampleComponent"], _dnd_drag_disabled_dnd_drag_disabled_example_component__WEBPACK_IMPORTED_MODULE_6__["DndDragDisabledExampleComponent"], _dnd_drag_preview_dnd_drag_preview_example_component__WEBPACK_IMPORTED_MODULE_7__["DndDragPreviewExampleComponent"], _dnd_custom_handle_dnd_custom_handle_example_component__WEBPACK_IMPORTED_MODULE_8__["DndCustomHandleExampleComponent"], _dnd_drag_placeholder_dnd_drag_placeholder_example_component__WEBPACK_IMPORTED_MODULE_9__["DndDragPlaceholderExampleComponent"], _dnd_dropzone_dnd_dropzone_example_component__WEBPACK_IMPORTED_MODULE_10__["DndDropzoneExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "b8uh":
    /*!****************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/external-libraries/drag-and-drop/dnd-custom-handle/dnd-custom-handle.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: DndCustomHandleExampleComponent */

    /***/
    function b8uh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DndCustomHandleExampleComponent", function () {
        return DndCustomHandleExampleComponent;
      });
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DndCustomHandleExampleComponent_ng_container_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function DndCustomHandleExampleComponent_ng_container_1_div_2_Template_div_mouseover_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.mousedOver[i_r2] = true;
          })("mouseout", function DndCustomHandleExampleComponent_ng_container_1_div_2_Template_div_mouseout_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.mousedOver[i_r2] = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nui-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "with-handle": a0,
          "nui-dnd-raised-state": a1
        };
      };

      function DndCustomHandleExampleComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DndCustomHandleExampleComponent_ng_container_1_div_2_Template, 2, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragDisabled", !item_r1.enabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, item_r1.hasHandle, item_r1.withHandle && ctx_r0.mousedOver[i_r2]));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.withHandle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
        }
      }

      var IListItem = function IListItem() {
        _classCallCheck(this, IListItem);
      };

      var DndCustomHandleExampleComponent = /*#__PURE__*/function () {
        function DndCustomHandleExampleComponent() {
          _classCallCheck(this, DndCustomHandleExampleComponent);

          this.mousedOver = [];
          this.listItems = [{
            title: "I can only be dragged using the handle",
            enabled: true,
            hasHandle: true
          }, {
            title: " I can be dragged without any handle",
            enabled: true,
            hasHandle: false
          }, {
            title: "Disabled item CAN'T be dragged",
            enabled: false
          }];
        }

        _createClass(DndCustomHandleExampleComponent, [{
          key: "onItemDropped",
          value: function onItemDropped(event) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(this.listItems, event.previousIndex, event.currentIndex);
          }
        }]);

        return DndCustomHandleExampleComponent;
      }();

      DndCustomHandleExampleComponent.ɵfac = function DndCustomHandleExampleComponent_Factory(t) {
        return new (t || DndCustomHandleExampleComponent)();
      };

      DndCustomHandleExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DndCustomHandleExampleComponent,
        selectors: [["dnd-custom-handle"]],
        decls: 2,
        vars: 1,
        consts: [["cdkDropList", "", 1, "draggable-container", 3, "cdkDropListDropped"], [4, "ngFor", "ngForOf"], ["cdkDrag", "", "cdkDragPreviewClass", "dnd-drag-preview", 1, "draggable-item", 3, "cdkDragDisabled", "ngClass"], ["cdkDragHandle", "", "class", "drag-handle", 3, "mouseover", "mouseout", 4, "ngIf"], ["cdkDragHandle", "", 1, "drag-handle", 3, "mouseover", "mouseout"], ["icon", "drag"]],
        template: function DndCustomHandleExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function DndCustomHandleExampleComponent_Template_div_cdkDropListDropped_0_listener($event) {
              return ctx.onItemDropped($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DndCustomHandleExampleComponent_ng_container_1_Template, 4, 7, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listItems);
          }
        },
        directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDragHandle"]],
        styles: [".dnd-drag-preview[_ngcontent-%COMP%] {\n  border: 1px #d9d9d9 solid;background: #f2f2f2;z-index: 1;box-sizing: border-box;box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.draggable-container[_ngcontent-%COMP%] {\n  width: 300px;\n  border-top: solid 1px #d9d9d9;\n}\n.item[_ngcontent-%COMP%], .draggable-item[_ngcontent-%COMP%], .dnd-drag-preview[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 15px;\n  text-align: center;\n  box-sizing: border-box;\n  border: solid 1px #d9d9d9;\n  border-top: none;\n  position: relative;\n}\n.draggable-item[_ngcontent-%COMP%] {\n  background: #fff;\n  transition: box-shadow 0.4s;\n}\n.draggable-item[_ngcontent-%COMP%]:not(.cdk-drag-disabled):hover {\n  background: #f2f2f2;\n}\n.draggable-item[_ngcontent-%COMP%]:not(.cdk-drag-disabled):not(.with-handle):hover {\n  cursor: move;\n  z-index: 1;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.draggable-item.cdk-drag-disabled[_ngcontent-%COMP%] {\n  color: #b3b3b3;\n}\n.drag-handle[_ngcontent-%COMP%] {\n  color: #ccc;\n  cursor: move;\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRuZC1jdXN0b20taGFuZGxlLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9kbmQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL3ZlbmRvci1wcmVmaXhlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EQTtFQ2hDSSx5QkFBQSxDQVhBLG1CQUFBLENBSUEsVUFBQSxDQUVBLHNCQUFBLENBQ0EsdUVBQUE7QURiSjtBQUlBO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0FBRko7QUFNQTs7O0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFNQTtFQUNJLGdCQUFBO0VFc0xNLDJCQUFBO0FGdkxWO0FBTVE7RUNyQkosbUJBQUE7QURrQko7QUFRUTtFQUNJLFlBQUE7RUN2QlIsVUFBQTtFQUVBLHNCQUFBO0VBQ0EsdUVBQUE7QURpQko7QUFRSTtFQUNJLGNBQUE7QUFOUjtBQVVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBUkoiLCJmaWxlIjoiZG5kLWN1c3RvbS1oYW5kbGUuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJudWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGluc1wiO1xuXG5AYm94LXdpZHRoOiAzMDBweDtcbkBib3gtaGVpZ2h0OiA1MHB4O1xuXG4uZHJhZ2dhYmxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IEBib3gtd2lkdGg7XG4gICAgYm9yZGVyLXRvcDogc29saWQgQG51aS1saW5lLWRlZmF1bHQgQG51aS1jb2xvci1saW5lLWRlZmF1bHQ7XG59XG5cbi8vIGdlbmVyaWMgaXRlbSBzdHlsaW5nXG4uaXRlbSB7XG4gICAgaGVpZ2h0OiBAYm94LWhlaWdodDtcbiAgICBwYWRkaW5nOiBAbnVpLXNwYWNlLW1kO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogc29saWQgQG51aS1saW5lLWRlZmF1bHQgQG51aS1jb2xvci1saW5lLWRlZmF1bHQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8vIGRyYWcgJiBkcm9wIHN0eWxpbmdcbi5kcmFnZ2FibGUtaXRlbTpleHRlbmQoLml0ZW0pIHtcbiAgICBiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJnLWNvbnRlbnQ7XG4gICAgLnRyYW5zaXRpb24oYm94LXNoYWRvdyAwLjRzKTtcblxuICAgIC8vIGZvciBhbGwgRU5BQkxFRCBpdGVtcyB3ZSBhcHBseSB0aGUgaG92ZXIgc3R5bGVcbiAgICAmOm5vdCguY2RrLWRyYWctZGlzYWJsZWQpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAubnVpLWRuZC1ob3Zlci1zdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2UgYXBwbHkgdGhlIHJhaXNlZCBzdGF0ZSBvbmx5IGZvciBpdGVtcyB3aXRob3V0IGhhbmRsZVxuICAgICAgICAmOm5vdCgud2l0aC1oYW5kbGUpOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgICAgIC5udWktZG5kLXJhaXNlZC1zdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5jZGstZHJhZy1kaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiBAbnVpLWNvbG9yLWRpc2FibGVkO1xuICAgIH1cbn1cblxuLmRyYWctaGFuZGxlIHtcbiAgICBjb2xvcjogI2NjYztcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uZG5kLWRyYWctcHJldmlldzpleHRlbmQoLml0ZW0sIC5udWktZG5kLXByZXZpZXcpIHt9XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vbnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcblxuQGRuZC1pdGVtLWJvcmRlci13aWR0aDogQG51aS1saW5lLWRlZmF1bHQ7XG5AZG5kLXpvbmUtYm9yZGVyLXdpZHRoOiBAbnVpLWxpbmUtZmF0O1xuQGRuZC16b25lLWljb24tc2l6ZTogNDBweDtcblxuLyoqIGRyYWdnYWJsZSBpdGVtcyBzdGF0ZXMgKi9cbi5udWktZG5kLWhvdmVyLXN0YXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJnLWNvbnRlbnQtaG92ZXI7XG59XG5cbi5udWktZG5kLXJhaXNlZC1zdGF0ZSB7XG4gICAgei1pbmRleDogMTtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogQG51aS1zaGFkb3ctZWxldmF0ZWQ7XG59XG5cbi5udWktZG5kLXByZXZpZXcge1xuICAgIGJvcmRlcjogQGRuZC1pdGVtLWJvcmRlci13aWR0aCBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdCBzb2xpZDtcbiAgICAubnVpLWRuZC1ob3Zlci1zdGF0ZSgpO1xuICAgIC5udWktZG5kLXJhaXNlZC1zdGF0ZSgpO1xufVxuXG4ubnVpLWRuZC1kcm9wem9uZSB7XG4gICAgLyoqIGRyb3B6b25lIHN0YXRlcyAqL1xuICAgICYubnVpLWRuZC1kcm9wem9uZS0tYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyOiBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoIGRhc2hlZCBAbnVpLWNvbG9yLXNlbWFudGljLXVua25vd24gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLm51aS1kbmQtZHJvcHpvbmUtLWRyb3AtYWxsb3dlZCB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgYm9yZGVyOiBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoIHNvbGlkIEBudWktY29sb3Itc2VsZWN0ZWQtY29udHJhc3QgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1zZWxlY3RlZC1hY3RpdmU7XG4gICAgfTtcbiAgICAmLm51aS1kbmQtZHJvcHpvbmUtLWRyb3Atbm90LWFsbG93ZWQge1xuICAgICAgICBjdXJzb3I6IG1vdmU7XG4gICAgICAgIGJvcmRlcjogQGRuZC16b25lLWJvcmRlci13aWR0aCBzb2xpZCBAbnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBudWktY29sb3ItYnVzeS1kZXN0cnVjdGl2ZTtcbiAgICB9XG5cbiAgICAvKiogb3RoZXIgY3VzdG9temlhdGlvbnMgKi9cbiAgICAuY2VudGVyZWQtb3ZlcmxheSwgLm51aS1pY29uLWl0ZW06YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAudHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cblxuICAgIC5udWktaWNvbi1pdGVtIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiBAZG5kLXpvbmUtaWNvbi1zaXplO1xuICAgICAgICAgICAgd2lkdGg6IEBkbmQtem9uZS1pY29uLXNpemU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEBUT0RPIGZpeC9yZW1vdmUgdGhpcyBoYWNraW5nIHN0eWxlIG9uY2UgbnVpLWljb24gZ2V0cyBwcm9wZXIgc3VwcG9ydCBmb3Igc2l6ZSwgYmcgY29sb3IgYW5kIGZpbGwgY29sb3JcbiAgICAuZHJvcC1jaXJjbGV7XG4gICAgICAgICYtcGVybWFuZW50IHtcbiAgICAgICAgICAgICYgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1iZy1jb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAmIHBvbHlnb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogQG51aS1jb2xvci1pY29uLWhpZ2hsaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtYWxsb3dlZCB7XG4gICAgICAgICAgICAmIC5udWktaWNvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBudWktY29sb3Itc2VsZWN0ZWQtY29udHJhc3Q7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgJiBwb2x5Z29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDVweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taW52ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtbm90LWFsbG93ZWQge1xuICAgICAgICAgICAgJiAubnVpLWljb24taXRlbSB7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAgICYgcGF0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSg1cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogQG51aS1jb2xvci1pY29uLWludmVyc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBWZW5kb3IgUHJlZml4ZXNcbi8vXG4vLyBBbGwgdmVuZG9yIG1peGlucyBhcmUgZGVwcmVjYXRlZCBhcyBvZiB2My4yLjAgZHVlIHRvIHRoZSBpbnRyb2R1Y3Rpb24gb2Zcbi8vIEF1dG9wcmVmaXhlciBpbiBvdXIgR3J1bnRmaWxlLiBUaGV5IHdpbGwgYmUgcmVtb3ZlZCBpbiB2NC5cblxuLy8gLSBBbmltYXRpb25zXG4vLyAtIEJhY2tmYWNlIHZpc2liaWxpdHlcbi8vIC0gQm94IHNoYWRvd1xuLy8gLSBCb3ggc2l6aW5nXG4vLyAtIENvbnRlbnQgY29sdW1uc1xuLy8gLSBIeXBoZW5zXG4vLyAtIFBsYWNlaG9sZGVyIHRleHRcbi8vIC0gVHJhbnNmb3JtYXRpb25zXG4vLyAtIFRyYW5zaXRpb25zXG4vLyAtIFVzZXIgU2VsZWN0XG5cblxuLy8gQW5pbWF0aW9uc1xuLmFuaW1hdGlvbihAYW5pbWF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBAYW5pbWF0aW9uO1xuICAgICAgIC1vLWFuaW1hdGlvbjogQGFuaW1hdGlvbjtcbiAgICAgICAgICBhbmltYXRpb246IEBhbmltYXRpb247XG59XG5cbi5hbmltYXRpb24tbmFtZShAbmFtZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBAbmFtZTtcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogQG5hbWU7XG59XG5cbi5hbmltYXRpb24tZHVyYXRpb24oQGR1cmF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBAZHVyYXRpb247XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiBAZHVyYXRpb247XG59XG5cbi5hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uKEB0aW1pbmctZnVuY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IEB0aW1pbmctZnVuY3Rpb247XG59XG5cbi5hbmltYXRpb24tZGVsYXkoQGRlbGF5KSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBAZGVsYXk7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiBAZGVsYXk7XG59XG5cbi5hbmltYXRpb24taXRlcmF0aW9uLWNvdW50KEBpdGVyYXRpb24tY291bnQpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBAaXRlcmF0aW9uLWNvdW50O1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IEBpdGVyYXRpb24tY291bnQ7XG59XG5cbi5hbmltYXRpb24tZGlyZWN0aW9uKEBkaXJlY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBAZGlyZWN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IEBkaXJlY3Rpb247XG59XG5cbi5hbmltYXRpb24tZmlsbC1tb2RlKEBmaWxsLW1vZGUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBAZmlsbC1tb2RlO1xuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IEBmaWxsLW1vZGU7XG59XG5cbi8vIEJhY2tmYWNlIHZpc2liaWxpdHlcbi8vIFByZXZlbnQgYnJvd3NlcnMgZnJvbSBmbGlja2VyaW5nIHdoZW4gdXNpbmcgQ1NTIDNEIHRyYW5zZm9ybXMuXG4vLyBEZWZhdWx0IHZhbHVlIGlzIGB2aXNpYmxlYCwgYnV0IGNhbiBiZSBjaGFuZ2VkIHRvIGBoaWRkZW5gXG5cbi5iYWNrZmFjZS12aXNpYmlsaXR5KEB2aXNpYmlsaXR5KXtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBAdmlzaWJpbGl0eTtcbiAgICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBAdmlzaWJpbGl0eTtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBAdmlzaWJpbGl0eTtcbn1cblxuLy8gQm94IHNpemluZ1xuLmJveC1zaXppbmcoQGJveG1vZGVsKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogQGJveG1vZGVsO1xuICAgICAtbW96LWJveC1zaXppbmc6IEBib3htb2RlbDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBAYm94bW9kZWw7XG59XG5cbi8vIENTUzMgQ29udGVudCBDb2x1bW5zXG4uY29udGVudC1jb2x1bW5zKEBjb2x1bW4tY291bnQ7IEBjb2x1bW4tZ2FwOiBAZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IEBjb2x1bW4tY291bnQ7XG4gICAgIC1tb3otY29sdW1uLWNvdW50OiBAY29sdW1uLWNvdW50O1xuICAgICAgICAgIGNvbHVtbi1jb3VudDogQGNvbHVtbi1jb3VudDtcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiBAY29sdW1uLWdhcDtcbiAgICAgLW1vei1jb2x1bW4tZ2FwOiBAY29sdW1uLWdhcDtcbiAgICAgICAgICBjb2x1bW4tZ2FwOiBAY29sdW1uLWdhcDtcbn1cblxuLy8gT3B0aW9uYWwgaHlwaGVuYXRpb25cbi5oeXBoZW5zKEBtb2RlOiBhdXRvKSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgLXdlYmtpdC1oeXBoZW5zOiBAbW9kZTtcbiAgICAgLW1vei1oeXBoZW5zOiBAbW9kZTtcbiAgICAgIC1tcy1oeXBoZW5zOiBAbW9kZTsgLy8gSUUxMCtcbiAgICAgICAtby1oeXBoZW5zOiBAbW9kZTtcbiAgICAgICAgICBoeXBoZW5zOiBAbW9kZTtcbn1cblxuLy8gUGxhY2Vob2xkZXIgdGV4dFxuLnBsYWNlaG9sZGVyKEBjb2xvcjogQGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyLCBAZm9udFdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyKSB7XG4gIC8vIEZpcmVmb3hcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBpbnB1dC1jb2xvci1wbGFjZWhvbGRlcik7XG4gICAgb3BhY2l0eTogMTsgLy8gT3ZlcnJpZGUgRmlyZWZveCdzIHVudXN1YWwgZGVmYXVsdCBvcGFjaXR5OyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL3B1bGwvMTE1MjZcbiAgICBmb250LXdlaWdodDogQGZvbnRXZWlnaHQ7XG4gIH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKTsgZm9udC13ZWlnaHQ6IEBmb250V2VpZ2h0IH0gLy8gSW50ZXJuZXQgRXhwbG9yZXIgMTArXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgIHsgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBpbnB1dC1jb2xvci1wbGFjZWhvbGRlcik7IGZvbnQtd2VpZ2h0OiBAZm9udFdlaWdodCB9IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG59XG5cbi8vIFRyYW5zZm9ybWF0aW9uc1xuLnNjYWxlKEBmYWN0b3IpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKEBmYWN0b3IpO1xuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZShAZmFjdG9yKTtcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKEBmYWN0b3IpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG59XG5cbi5zY2FsZShAcmF0aW9YOyBAcmF0aW9ZKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZShAcmF0aW9YLCBAcmF0aW9ZKTtcbiAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoQHJhdGlvWCwgQHJhdGlvWSk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZShAcmF0aW9YLCBAcmF0aW9ZKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xufVxuXG4uc2NhbGVYKEByYXRpbykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKEByYXRpbyk7XG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWChAcmF0aW8pOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGVYKEByYXRpbyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbn1cblxuLnNjYWxlWShAcmF0aW8pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWShAcmF0aW8pO1xuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoQHJhdGlvKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlWShAcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG59XG5cbi5za2V3KEB4OyBAeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goQHgpIHNrZXdZKEB5KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNrZXdYKEB4KSBza2V3WShAeSk7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzQ4ODU7IElFOStcbiAgICAgICAtby10cmFuc2Zvcm06IHNrZXdYKEB4KSBza2V3WShAeSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBza2V3WChAeCkgc2tld1koQHkpO1xufVxuXG4udHJhbnNsYXRlKEB4OyBAeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKEB4LCBAeSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoQHgsIEB5KTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZShAeCwgQHkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKEB4LCBAeSk7XG59XG5cbi50cmFuc2xhdGUzZChAeDsgQHk7IEB6KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChAeCwgQHksIEB6KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKEB4LCBAeSwgQHopO1xufVxuXG4ucm90YXRlKEBkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoQGRlZ3JlZXMpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKEBkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZShAZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoQGRlZ3JlZXMpO1xufVxuXG4ucm90YXRlWChAZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWChAZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKEBkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoQGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWChAZGVncmVlcyk7XG59XG5cbi5yb3RhdGVZKEBkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKEBkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoQGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWShAZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKEBkZWdyZWVzKTtcbn1cblxuLnBlcnNwZWN0aXZlKEBwZXJzcGVjdGl2ZSkge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiBAcGVyc3BlY3RpdmU7XG4gICAgIC1tb3otcGVyc3BlY3RpdmU6IEBwZXJzcGVjdGl2ZTtcbiAgICAgICAgICBwZXJzcGVjdGl2ZTogQHBlcnNwZWN0aXZlO1xufVxuXG4ucGVyc3BlY3RpdmUtb3JpZ2luKEBwZXJzcGVjdGl2ZSkge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogQHBlcnNwZWN0aXZlO1xuICAgICAtbW96LXBlcnNwZWN0aXZlLW9yaWdpbjogQHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlLW9yaWdpbjogQHBlcnNwZWN0aXZlO1xufVxuXG4udHJhbnNmb3JtLW9yaWdpbihAb3JpZ2luKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogQG9yaWdpbjtcbiAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBAb3JpZ2luO1xuICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IEBvcmlnaW47IC8vIElFOSBvbmx5XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogQG9yaWdpbjtcbn1cblxuXG4vLyBUcmFuc2l0aW9uc1xuXG4udHJhbnNpdGlvbihAdHJhbnNpdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb246IEB0cmFuc2l0aW9uO1xuICAgICAgIC1vLXRyYW5zaXRpb246IEB0cmFuc2l0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb246IEB0cmFuc2l0aW9uO1xufVxuXG4udHJhbnNpdGlvbi1wcm9wZXJ0eShAdHJhbnNpdGlvbi1wcm9wZXJ0eSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IEB0cmFuc2l0aW9uLXByb3BlcnR5O1xuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IEB0cmFuc2l0aW9uLXByb3BlcnR5O1xufVxuXG4udHJhbnNpdGlvbi1kZWxheShAdHJhbnNpdGlvbi1kZWxheSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IEB0cmFuc2l0aW9uLWRlbGF5O1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IEB0cmFuc2l0aW9uLWRlbGF5O1xufVxuXG4udHJhbnNpdGlvbi1kdXJhdGlvbihAdHJhbnNpdGlvbi1kdXJhdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uO1xufVxuXG4udHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24oQHRpbWluZy1mdW5jdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xufVxuXG4udHJhbnNpdGlvbi10cmFuc2Zvcm0oQHRyYW5zaXRpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBAdHJhbnNpdGlvbjtcbiAgICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSBAdHJhbnNpdGlvbjtcbiAgICAgICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gQHRyYW5zaXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIEB0cmFuc2l0aW9uO1xufVxuXG5cbi8vIFVzZXIgc2VsZWN0XG4vLyBGb3Igc2VsZWN0aW5nIHRleHQgb24gdGhlIHBhZ2VcblxuLnVzZXItc2VsZWN0KEBzZWxlY3QpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogQHNlbGVjdDtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogQHNlbGVjdDtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogQHNlbGVjdDsgLy8gSUUxMCtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogQHNlbGVjdDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "i6b3":
    /*!**********************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/external-libraries/drag-and-drop/dnd-axis-constraints/dnd-axis-constraints.example.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: DndAxisConstraintsExampleComponent */

    /***/
    function i6b3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DndAxisConstraintsExampleComponent", function () {
        return DndAxisConstraintsExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");

      var DndAxisConstraintsExampleComponent = function DndAxisConstraintsExampleComponent() {
        _classCallCheck(this, DndAxisConstraintsExampleComponent);
      };

      DndAxisConstraintsExampleComponent.ɵfac = function DndAxisConstraintsExampleComponent_Factory(t) {
        return new (t || DndAxisConstraintsExampleComponent)();
      };

      DndAxisConstraintsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DndAxisConstraintsExampleComponent,
        selectors: [["dnd-axis-constraints"]],
        decls: 4,
        vars: 0,
        consts: [["cdkDragLockAxis", "y", "cdkDrag", "", 1, "draggable-item", "mr-5"], ["cdkDragLockAxis", "x", "cdkDrag", "", 1, "draggable-item", "mr-5"]],
        template: function DndAxisConstraintsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " I can only be dragged up/down\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " I can only be dragged left/right\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"]],
        styles: [".draggable-item[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 100px;\n  padding: 15px;\n  box-sizing: border-box;\n  border: solid 1px #d5d5d5;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 0.4s;\n}\n.draggable-item[_ngcontent-%COMP%]:hover, .draggable-item.cdk-drag-dragging[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n  z-index: 1;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n  cursor: move;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRuZC1heGlzLWNvbnN0cmFpbnRzLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy92ZW5kb3ItcHJlZml4ZXMubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2RuZC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VDNkxNLDJCQUFBO0FEL0xWO0FBS0k7O0VFWkEsbUJBQUE7RUFJQSxVQUFBO0VBRUEsc0JBQUE7RUFDQSx1RUFBQTtFRlFJLFlBQUE7RUFDQSxhQUFBO0FBQVIiLCJmaWxlIjoiZG5kLWF4aXMtY29uc3RyYWludHMuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJudWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGluc1wiO1xuXG5AYm94LXdpZHRoOiAxNTBweDtcbkBib3gtaGVpZ2h0OiAxMDBweDtcblxuLmRyYWdnYWJsZS1pdGVtIHtcbiAgICB3aWR0aDogQGJveC13aWR0aDtcbiAgICBoZWlnaHQ6IEBib3gtaGVpZ2h0O1xuICAgIHBhZGRpbmc6IEBudWktc3BhY2UtbWQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBAZ3JheTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICAudHJhbnNpdGlvbihib3gtc2hhZG93IDAuNHMpO1xuXG4gICAgJjpob3ZlciwgJi5jZGstZHJhZy1kcmFnZ2luZyB7XG4gICAgICAgIC5udWktZG5kLWhvdmVyLXN0YXRlKCk7XG4gICAgICAgIC5udWktZG5kLXJhaXNlZC1zdGF0ZSgpO1xuICAgICAgICBjdXJzb3I6IG1vdmU7XG4gICAgICAgIHBhZGRpbmc6IEBudWktc3BhY2UtbWQ7XG4gICAgfVxufVxuIiwiLy8gVmVuZG9yIFByZWZpeGVzXG4vL1xuLy8gQWxsIHZlbmRvciBtaXhpbnMgYXJlIGRlcHJlY2F0ZWQgYXMgb2YgdjMuMi4wIGR1ZSB0byB0aGUgaW50cm9kdWN0aW9uIG9mXG4vLyBBdXRvcHJlZml4ZXIgaW4gb3VyIEdydW50ZmlsZS4gVGhleSB3aWxsIGJlIHJlbW92ZWQgaW4gdjQuXG5cbi8vIC0gQW5pbWF0aW9uc1xuLy8gLSBCYWNrZmFjZSB2aXNpYmlsaXR5XG4vLyAtIEJveCBzaGFkb3dcbi8vIC0gQm94IHNpemluZ1xuLy8gLSBDb250ZW50IGNvbHVtbnNcbi8vIC0gSHlwaGVuc1xuLy8gLSBQbGFjZWhvbGRlciB0ZXh0XG4vLyAtIFRyYW5zZm9ybWF0aW9uc1xuLy8gLSBUcmFuc2l0aW9uc1xuLy8gLSBVc2VyIFNlbGVjdFxuXG5cbi8vIEFuaW1hdGlvbnNcbi5hbmltYXRpb24oQGFuaW1hdGlvbikge1xuICAtd2Via2l0LWFuaW1hdGlvbjogQGFuaW1hdGlvbjtcbiAgICAgICAtby1hbmltYXRpb246IEBhbmltYXRpb247XG4gICAgICAgICAgYW5pbWF0aW9uOiBAYW5pbWF0aW9uO1xufVxuXG4uYW5pbWF0aW9uLW5hbWUoQG5hbWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogQG5hbWU7XG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IEBuYW1lO1xufVxuXG4uYW5pbWF0aW9uLWR1cmF0aW9uKEBkdXJhdGlvbikge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogQGR1cmF0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogQGR1cmF0aW9uO1xufVxuXG4uYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbihAdGltaW5nLWZ1bmN0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogQHRpbWluZy1mdW5jdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xufVxuXG4uYW5pbWF0aW9uLWRlbGF5KEBkZWxheSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogQGRlbGF5O1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogQGRlbGF5O1xufVxuXG4uYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudChAaXRlcmF0aW9uLWNvdW50KSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogQGl0ZXJhdGlvbi1jb3VudDtcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBAaXRlcmF0aW9uLWNvdW50O1xufVxuXG4uYW5pbWF0aW9uLWRpcmVjdGlvbihAZGlyZWN0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogQGRpcmVjdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBAZGlyZWN0aW9uO1xufVxuXG4uYW5pbWF0aW9uLWZpbGwtbW9kZShAZmlsbC1tb2RlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogQGZpbGwtbW9kZTtcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBAZmlsbC1tb2RlO1xufVxuXG4vLyBCYWNrZmFjZSB2aXNpYmlsaXR5XG4vLyBQcmV2ZW50IGJyb3dzZXJzIGZyb20gZmxpY2tlcmluZyB3aGVuIHVzaW5nIENTUyAzRCB0cmFuc2Zvcm1zLlxuLy8gRGVmYXVsdCB2YWx1ZSBpcyBgdmlzaWJsZWAsIGJ1dCBjYW4gYmUgY2hhbmdlZCB0byBgaGlkZGVuYFxuXG4uYmFja2ZhY2UtdmlzaWJpbGl0eShAdmlzaWJpbGl0eSl7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogQHZpc2liaWxpdHk7XG4gICAgIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogQHZpc2liaWxpdHk7XG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogQHZpc2liaWxpdHk7XG59XG5cbi8vIEJveCBzaXppbmdcbi5ib3gtc2l6aW5nKEBib3htb2RlbCkge1xuICAtd2Via2l0LWJveC1zaXppbmc6IEBib3htb2RlbDtcbiAgICAgLW1vei1ib3gtc2l6aW5nOiBAYm94bW9kZWw7XG4gICAgICAgICAgYm94LXNpemluZzogQGJveG1vZGVsO1xufVxuXG4vLyBDU1MzIENvbnRlbnQgQ29sdW1uc1xuLmNvbnRlbnQtY29sdW1ucyhAY29sdW1uLWNvdW50OyBAY29sdW1uLWdhcDogQGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIC13ZWJraXQtY29sdW1uLWNvdW50OiBAY29sdW1uLWNvdW50O1xuICAgICAtbW96LWNvbHVtbi1jb3VudDogQGNvbHVtbi1jb3VudDtcbiAgICAgICAgICBjb2x1bW4tY291bnQ6IEBjb2x1bW4tY291bnQ7XG4gIC13ZWJraXQtY29sdW1uLWdhcDogQGNvbHVtbi1nYXA7XG4gICAgIC1tb3otY29sdW1uLWdhcDogQGNvbHVtbi1nYXA7XG4gICAgICAgICAgY29sdW1uLWdhcDogQGNvbHVtbi1nYXA7XG59XG5cbi8vIE9wdGlvbmFsIGh5cGhlbmF0aW9uXG4uaHlwaGVucyhAbW9kZTogYXV0bykge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC13ZWJraXQtaHlwaGVuczogQG1vZGU7XG4gICAgIC1tb3otaHlwaGVuczogQG1vZGU7XG4gICAgICAtbXMtaHlwaGVuczogQG1vZGU7IC8vIElFMTArXG4gICAgICAgLW8taHlwaGVuczogQG1vZGU7XG4gICAgICAgICAgaHlwaGVuczogQG1vZGU7XG59XG5cbi8vIFBsYWNlaG9sZGVyIHRleHRcbi5wbGFjZWhvbGRlcihAY29sb3I6IEBpbnB1dC1jb2xvci1wbGFjZWhvbGRlciwgQGZvbnRXZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcikge1xuICAvLyBGaXJlZm94XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIpO1xuICAgIG9wYWNpdHk6IDE7IC8vIE92ZXJyaWRlIEZpcmVmb3gncyB1bnVzdWFsIGRlZmF1bHQgb3BhY2l0eTsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzExNTI2XG4gICAgZm9udC13ZWlnaHQ6IEBmb250V2VpZ2h0O1xuICB9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBpbnB1dC1jb2xvci1wbGFjZWhvbGRlcik7IGZvbnQtd2VpZ2h0OiBAZm9udFdlaWdodCB9IC8vIEludGVybmV0IEV4cGxvcmVyIDEwK1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICB7IC5zZXRDc3NWYXJpYWJsZShjb2xvciwgaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIpOyBmb250LXdlaWdodDogQGZvbnRXZWlnaHQgfSAvLyBTYWZhcmkgYW5kIENocm9tZVxufVxuXG4vLyBUcmFuc2Zvcm1hdGlvbnNcbi5zY2FsZShAZmFjdG9yKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZShAZmFjdG9yKTtcbiAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKEBmYWN0b3IpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZShAZmFjdG9yKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKEBmYWN0b3IpO1xufVxuXG4uc2NhbGUoQHJhdGlvWDsgQHJhdGlvWSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoQHJhdGlvWCwgQHJhdGlvWSk7XG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZShAcmF0aW9YLCBAcmF0aW9ZKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoQHJhdGlvWCwgQHJhdGlvWSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZShAcmF0aW9YLCBAcmF0aW9ZKTtcbn1cblxuLnNjYWxlWChAcmF0aW8pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWChAcmF0aW8pO1xuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGVYKEByYXRpbyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlWChAcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKEByYXRpbyk7XG59XG5cbi5zY2FsZVkoQHJhdGlvKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoQHJhdGlvKTtcbiAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlWShAcmF0aW8pO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoQHJhdGlvKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWShAcmF0aW8pO1xufVxuXG4uc2tldyhAeDsgQHkpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKEB4KSBza2V3WShAeSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBza2V3WChAeCkgc2tld1koQHkpOyAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy80ODg1OyBJRTkrXG4gICAgICAgLW8tdHJhbnNmb3JtOiBza2V3WChAeCkgc2tld1koQHkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2tld1goQHgpIHNrZXdZKEB5KTtcbn1cblxuLnRyYW5zbGF0ZShAeDsgQHkpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZShAeCwgQHkpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKEB4LCBAeSk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoQHgsIEB5KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShAeCwgQHkpO1xufVxuXG4udHJhbnNsYXRlM2QoQHg7IEB5OyBAeikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoQHgsIEB5LCBAeik7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChAeCwgQHksIEB6KTtcbn1cblxuLnJvdGF0ZShAZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKEBkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZShAZGVncmVlcyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoQGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKEBkZWdyZWVzKTtcbn1cblxuLnJvdGF0ZVgoQGRlZ3JlZXMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoQGRlZ3JlZXMpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWChAZGVncmVlcyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGVYKEBkZWdyZWVzKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoQGRlZ3JlZXMpO1xufVxuXG4ucm90YXRlWShAZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWShAZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKEBkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoQGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWShAZGVncmVlcyk7XG59XG5cbi5wZXJzcGVjdGl2ZShAcGVyc3BlY3RpdmUpIHtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogQHBlcnNwZWN0aXZlO1xuICAgICAtbW96LXBlcnNwZWN0aXZlOiBAcGVyc3BlY3RpdmU7XG4gICAgICAgICAgcGVyc3BlY3RpdmU6IEBwZXJzcGVjdGl2ZTtcbn1cblxuLnBlcnNwZWN0aXZlLW9yaWdpbihAcGVyc3BlY3RpdmUpIHtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZS1vcmlnaW46IEBwZXJzcGVjdGl2ZTtcbiAgICAgLW1vei1wZXJzcGVjdGl2ZS1vcmlnaW46IEBwZXJzcGVjdGl2ZTtcbiAgICAgICAgICBwZXJzcGVjdGl2ZS1vcmlnaW46IEBwZXJzcGVjdGl2ZTtcbn1cblxuLnRyYW5zZm9ybS1vcmlnaW4oQG9yaWdpbikge1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IEBvcmlnaW47XG4gICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogQG9yaWdpbjtcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBAb3JpZ2luOyAvLyBJRTkgb25seVxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IEBvcmlnaW47XG59XG5cblxuLy8gVHJhbnNpdGlvbnNcblxuLnRyYW5zaXRpb24oQHRyYW5zaXRpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBAdHJhbnNpdGlvbjtcbiAgICAgICAtby10cmFuc2l0aW9uOiBAdHJhbnNpdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBAdHJhbnNpdGlvbjtcbn1cblxuLnRyYW5zaXRpb24tcHJvcGVydHkoQHRyYW5zaXRpb24tcHJvcGVydHkpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBAdHJhbnNpdGlvbi1wcm9wZXJ0eTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAdHJhbnNpdGlvbi1wcm9wZXJ0eTtcbn1cblxuLnRyYW5zaXRpb24tZGVsYXkoQHRyYW5zaXRpb24tZGVsYXkpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiBAdHJhbnNpdGlvbi1kZWxheTtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiBAdHJhbnNpdGlvbi1kZWxheTtcbn1cblxuLnRyYW5zaXRpb24tZHVyYXRpb24oQHRyYW5zaXRpb24tZHVyYXRpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiBAdHJhbnNpdGlvbi1kdXJhdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBAdHJhbnNpdGlvbi1kdXJhdGlvbjtcbn1cblxuLnRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKEB0aW1pbmctZnVuY3Rpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogQHRpbWluZy1mdW5jdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogQHRpbWluZy1mdW5jdGlvbjtcbn1cblxuLnRyYW5zaXRpb24tdHJhbnNmb3JtKEB0cmFuc2l0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gQHRyYW5zaXRpb247XG4gICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gQHRyYW5zaXRpb247XG4gICAgICAgLW8tdHJhbnNpdGlvbjogLW8tdHJhbnNmb3JtIEB0cmFuc2l0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBAdHJhbnNpdGlvbjtcbn1cblxuXG4vLyBVc2VyIHNlbGVjdFxuLy8gRm9yIHNlbGVjdGluZyB0ZXh0IG9uIHRoZSBwYWdlXG5cbi51c2VyLXNlbGVjdChAc2VsZWN0KSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IEBzZWxlY3Q7XG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IEBzZWxlY3Q7XG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IEBzZWxlY3Q7IC8vIElFMTArXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IEBzZWxlY3Q7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vbnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcblxuQGRuZC1pdGVtLWJvcmRlci13aWR0aDogQG51aS1saW5lLWRlZmF1bHQ7XG5AZG5kLXpvbmUtYm9yZGVyLXdpZHRoOiBAbnVpLWxpbmUtZmF0O1xuQGRuZC16b25lLWljb24tc2l6ZTogNDBweDtcblxuLyoqIGRyYWdnYWJsZSBpdGVtcyBzdGF0ZXMgKi9cbi5udWktZG5kLWhvdmVyLXN0YXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJnLWNvbnRlbnQtaG92ZXI7XG59XG5cbi5udWktZG5kLXJhaXNlZC1zdGF0ZSB7XG4gICAgei1pbmRleDogMTtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogQG51aS1zaGFkb3ctZWxldmF0ZWQ7XG59XG5cbi5udWktZG5kLXByZXZpZXcge1xuICAgIGJvcmRlcjogQGRuZC1pdGVtLWJvcmRlci13aWR0aCBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdCBzb2xpZDtcbiAgICAubnVpLWRuZC1ob3Zlci1zdGF0ZSgpO1xuICAgIC5udWktZG5kLXJhaXNlZC1zdGF0ZSgpO1xufVxuXG4ubnVpLWRuZC1kcm9wem9uZSB7XG4gICAgLyoqIGRyb3B6b25lIHN0YXRlcyAqL1xuICAgICYubnVpLWRuZC1kcm9wem9uZS0tYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyOiBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoIGRhc2hlZCBAbnVpLWNvbG9yLXNlbWFudGljLXVua25vd24gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLm51aS1kbmQtZHJvcHpvbmUtLWRyb3AtYWxsb3dlZCB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgYm9yZGVyOiBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoIHNvbGlkIEBudWktY29sb3Itc2VsZWN0ZWQtY29udHJhc3QgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1zZWxlY3RlZC1hY3RpdmU7XG4gICAgfTtcbiAgICAmLm51aS1kbmQtZHJvcHpvbmUtLWRyb3Atbm90LWFsbG93ZWQge1xuICAgICAgICBjdXJzb3I6IG1vdmU7XG4gICAgICAgIGJvcmRlcjogQGRuZC16b25lLWJvcmRlci13aWR0aCBzb2xpZCBAbnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBudWktY29sb3ItYnVzeS1kZXN0cnVjdGl2ZTtcbiAgICB9XG5cbiAgICAvKiogb3RoZXIgY3VzdG9temlhdGlvbnMgKi9cbiAgICAuY2VudGVyZWQtb3ZlcmxheSwgLm51aS1pY29uLWl0ZW06YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAudHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cblxuICAgIC5udWktaWNvbi1pdGVtIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiBAZG5kLXpvbmUtaWNvbi1zaXplO1xuICAgICAgICAgICAgd2lkdGg6IEBkbmQtem9uZS1pY29uLXNpemU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEBUT0RPIGZpeC9yZW1vdmUgdGhpcyBoYWNraW5nIHN0eWxlIG9uY2UgbnVpLWljb24gZ2V0cyBwcm9wZXIgc3VwcG9ydCBmb3Igc2l6ZSwgYmcgY29sb3IgYW5kIGZpbGwgY29sb3JcbiAgICAuZHJvcC1jaXJjbGV7XG4gICAgICAgICYtcGVybWFuZW50IHtcbiAgICAgICAgICAgICYgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1iZy1jb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAmIHBvbHlnb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogQG51aS1jb2xvci1pY29uLWhpZ2hsaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtYWxsb3dlZCB7XG4gICAgICAgICAgICAmIC5udWktaWNvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBudWktY29sb3Itc2VsZWN0ZWQtY29udHJhc3Q7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgJiBwb2x5Z29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDVweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taW52ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtbm90LWFsbG93ZWQge1xuICAgICAgICAgICAgJiAubnVpLWljb24taXRlbSB7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAgICYgcGF0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSg1cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogQG51aS1jb2xvci1pY29uLWludmVyc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "pCZ6":
    /*!**************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/external-libraries/drag-and-drop/dnd-drag-preview/dnd-drag-preview.example.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: DndDragPreviewExampleComponent */

    /***/
    function pCZ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DndDragPreviewExampleComponent", function () {
        return DndDragPreviewExampleComponent;
      });
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DndDragPreviewExampleComponent_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("This is the preview for ", item_r1.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r1.preview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", item_r1.title);
        }
      }

      function DndDragPreviewExampleComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DndDragPreviewExampleComponent_div_1_div_2_Template, 4, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
        }
      }

      var DndDragPreviewExampleComponent = /*#__PURE__*/function () {
        function DndDragPreviewExampleComponent() {
          _classCallCheck(this, DndDragPreviewExampleComponent);

          this.listItems = [{
            title: "Adobe",
            preview: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/524px-Adobe_Systems_logo_and_wordmark.svg.png"
          }, {
            title: "IBM",
            preview: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png"
          }, {
            title: "Dell",
            preview: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/300px-Dell_Logo.svg.png"
          }];
        }

        _createClass(DndDragPreviewExampleComponent, [{
          key: "onItemDropped",
          value: function onItemDropped(event) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(this.listItems, event.previousIndex, event.currentIndex);
          }
        }]);

        return DndDragPreviewExampleComponent;
      }();

      DndDragPreviewExampleComponent.ɵfac = function DndDragPreviewExampleComponent_Factory(t) {
        return new (t || DndDragPreviewExampleComponent)();
      };

      DndDragPreviewExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DndDragPreviewExampleComponent,
        selectors: [["dnd-drag-preview"]],
        decls: 2,
        vars: 1,
        consts: [["cdkDropList", "", 1, "draggable-container", 3, "cdkDropListDropped"], ["cdkDrag", "", "cdkDragPreviewClass", "dnd-drag-preview", "class", "draggable-item", 4, "ngFor", "ngForOf"], ["cdkDrag", "", "cdkDragPreviewClass", "dnd-drag-preview", 1, "draggable-item"], [4, "cdkDragPreview"], ["align", "middle", "width", "100", 3, "src", "alt"]],
        template: function DndDragPreviewExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function DndDragPreviewExampleComponent_Template_div_cdkDropListDropped_0_listener($event) {
              return ctx.onItemDropped($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DndDragPreviewExampleComponent_div_1_Template, 3, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listItems);
          }
        },
        directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDragPreview"]],
        styles: [".dnd-drag-preview[_ngcontent-%COMP%] {\n  border: 1px #d9d9d9 solid;background: #f2f2f2;z-index: 1;box-sizing: border-box;box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.draggable-container[_ngcontent-%COMP%] {\n  width: 150px;\n  border-top: solid 1px #d9d9d9;\n}\n.item[_ngcontent-%COMP%], .draggable-item[_ngcontent-%COMP%], .dnd-drag-preview[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: center;\n}\n.draggable-item[_ngcontent-%COMP%] {\n  height: 50px;\n  border: solid 1px #d9d9d9;\n  border-top: none;\n  transition: box-shadow 0.4s;\n}\n.draggable-item[_ngcontent-%COMP%]:hover {\n  cursor: move;\n  background: #f2f2f2;\n  z-index: 1;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRuZC1kcmFnLXByZXZpZXcuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2RuZC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvdmVuZG9yLXByZWZpeGVzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJBO0VDVkkseUJBQUEsQ0FYQSxtQkFBQSxDQUlBLFVBQUEsQ0FFQSxzQkFBQSxDQUNBLHVFQUFBO0FEYko7QUFJQTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtBQUZKO0FBS0E7OztFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFRTJMTSwyQkFBQTtBRjFMVjtBQUVJO0VBQ0ksWUFBQTtFQ2ZKLG1CQUFBO0VBSUEsVUFBQTtFQUVBLHNCQUFBO0VBQ0EsdUVBQUE7QURZSiIsImZpbGUiOiJkbmQtZHJhZy1wcmV2aWV3LmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwibnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJtaXhpbnNcIjtcblxuQGJveC13aWR0aDogMTUwcHg7XG5AYm94LWhlaWdodDogNTBweDtcblxuLmRyYWdnYWJsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiBAYm94LXdpZHRoO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIEBudWktbGluZS1kZWZhdWx0IEBudWktY29sb3ItbGluZS1kZWZhdWx0O1xufVxuXG4uaXRlbSB7XG4gICAgcGFkZGluZzogQG51aS1zcGFjZS1tZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kcmFnZ2FibGUtaXRlbTpleHRlbmQoLml0ZW0pIHtcbiAgICBoZWlnaHQ6IEBib3gtaGVpZ2h0O1xuICAgIGJvcmRlcjogc29saWQgQG51aS1saW5lLWRlZmF1bHQgQG51aS1jb2xvci1saW5lLWRlZmF1bHQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAudHJhbnNpdGlvbihib3gtc2hhZG93IDAuNHMpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgLm51aS1kbmQtaG92ZXItc3RhdGUoKTtcbiAgICAgICAgLm51aS1kbmQtcmFpc2VkLXN0YXRlKCk7XG4gICAgfVxufVxuXG4uZG5kLWRyYWctcHJldmlldzpleHRlbmQoLml0ZW0sIC5udWktZG5kLXByZXZpZXcpIHt9XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vbnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcblxuQGRuZC1pdGVtLWJvcmRlci13aWR0aDogQG51aS1saW5lLWRlZmF1bHQ7XG5AZG5kLXpvbmUtYm9yZGVyLXdpZHRoOiBAbnVpLWxpbmUtZmF0O1xuQGRuZC16b25lLWljb24tc2l6ZTogNDBweDtcblxuLyoqIGRyYWdnYWJsZSBpdGVtcyBzdGF0ZXMgKi9cbi5udWktZG5kLWhvdmVyLXN0YXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJnLWNvbnRlbnQtaG92ZXI7XG59XG5cbi5udWktZG5kLXJhaXNlZC1zdGF0ZSB7XG4gICAgei1pbmRleDogMTtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogQG51aS1zaGFkb3ctZWxldmF0ZWQ7XG59XG5cbi5udWktZG5kLXByZXZpZXcge1xuICAgIGJvcmRlcjogQGRuZC1pdGVtLWJvcmRlci13aWR0aCBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdCBzb2xpZDtcbiAgICAubnVpLWRuZC1ob3Zlci1zdGF0ZSgpO1xuICAgIC5udWktZG5kLXJhaXNlZC1zdGF0ZSgpO1xufVxuXG4ubnVpLWRuZC1kcm9wem9uZSB7XG4gICAgLyoqIGRyb3B6b25lIHN0YXRlcyAqL1xuICAgICYubnVpLWRuZC1kcm9wem9uZS0tYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyOiBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoIGRhc2hlZCBAbnVpLWNvbG9yLXNlbWFudGljLXVua25vd24gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLm51aS1kbmQtZHJvcHpvbmUtLWRyb3AtYWxsb3dlZCB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgYm9yZGVyOiBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoIHNvbGlkIEBudWktY29sb3Itc2VsZWN0ZWQtY29udHJhc3QgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1zZWxlY3RlZC1hY3RpdmU7XG4gICAgfTtcbiAgICAmLm51aS1kbmQtZHJvcHpvbmUtLWRyb3Atbm90LWFsbG93ZWQge1xuICAgICAgICBjdXJzb3I6IG1vdmU7XG4gICAgICAgIGJvcmRlcjogQGRuZC16b25lLWJvcmRlci13aWR0aCBzb2xpZCBAbnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBudWktY29sb3ItYnVzeS1kZXN0cnVjdGl2ZTtcbiAgICB9XG5cbiAgICAvKiogb3RoZXIgY3VzdG9temlhdGlvbnMgKi9cbiAgICAuY2VudGVyZWQtb3ZlcmxheSwgLm51aS1pY29uLWl0ZW06YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAudHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cblxuICAgIC5udWktaWNvbi1pdGVtIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiBAZG5kLXpvbmUtaWNvbi1zaXplO1xuICAgICAgICAgICAgd2lkdGg6IEBkbmQtem9uZS1pY29uLXNpemU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEBUT0RPIGZpeC9yZW1vdmUgdGhpcyBoYWNraW5nIHN0eWxlIG9uY2UgbnVpLWljb24gZ2V0cyBwcm9wZXIgc3VwcG9ydCBmb3Igc2l6ZSwgYmcgY29sb3IgYW5kIGZpbGwgY29sb3JcbiAgICAuZHJvcC1jaXJjbGV7XG4gICAgICAgICYtcGVybWFuZW50IHtcbiAgICAgICAgICAgICYgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1iZy1jb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAmIHBvbHlnb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogQG51aS1jb2xvci1pY29uLWhpZ2hsaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtYWxsb3dlZCB7XG4gICAgICAgICAgICAmIC5udWktaWNvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBudWktY29sb3Itc2VsZWN0ZWQtY29udHJhc3Q7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgJiBwb2x5Z29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDVweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taW52ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtbm90LWFsbG93ZWQge1xuICAgICAgICAgICAgJiAubnVpLWljb24taXRlbSB7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAgICYgcGF0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSg1cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogQG51aS1jb2xvci1pY29uLWludmVyc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBWZW5kb3IgUHJlZml4ZXNcbi8vXG4vLyBBbGwgdmVuZG9yIG1peGlucyBhcmUgZGVwcmVjYXRlZCBhcyBvZiB2My4yLjAgZHVlIHRvIHRoZSBpbnRyb2R1Y3Rpb24gb2Zcbi8vIEF1dG9wcmVmaXhlciBpbiBvdXIgR3J1bnRmaWxlLiBUaGV5IHdpbGwgYmUgcmVtb3ZlZCBpbiB2NC5cblxuLy8gLSBBbmltYXRpb25zXG4vLyAtIEJhY2tmYWNlIHZpc2liaWxpdHlcbi8vIC0gQm94IHNoYWRvd1xuLy8gLSBCb3ggc2l6aW5nXG4vLyAtIENvbnRlbnQgY29sdW1uc1xuLy8gLSBIeXBoZW5zXG4vLyAtIFBsYWNlaG9sZGVyIHRleHRcbi8vIC0gVHJhbnNmb3JtYXRpb25zXG4vLyAtIFRyYW5zaXRpb25zXG4vLyAtIFVzZXIgU2VsZWN0XG5cblxuLy8gQW5pbWF0aW9uc1xuLmFuaW1hdGlvbihAYW5pbWF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBAYW5pbWF0aW9uO1xuICAgICAgIC1vLWFuaW1hdGlvbjogQGFuaW1hdGlvbjtcbiAgICAgICAgICBhbmltYXRpb246IEBhbmltYXRpb247XG59XG5cbi5hbmltYXRpb24tbmFtZShAbmFtZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBAbmFtZTtcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogQG5hbWU7XG59XG5cbi5hbmltYXRpb24tZHVyYXRpb24oQGR1cmF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBAZHVyYXRpb247XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiBAZHVyYXRpb247XG59XG5cbi5hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uKEB0aW1pbmctZnVuY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IEB0aW1pbmctZnVuY3Rpb247XG59XG5cbi5hbmltYXRpb24tZGVsYXkoQGRlbGF5KSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBAZGVsYXk7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiBAZGVsYXk7XG59XG5cbi5hbmltYXRpb24taXRlcmF0aW9uLWNvdW50KEBpdGVyYXRpb24tY291bnQpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBAaXRlcmF0aW9uLWNvdW50O1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IEBpdGVyYXRpb24tY291bnQ7XG59XG5cbi5hbmltYXRpb24tZGlyZWN0aW9uKEBkaXJlY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBAZGlyZWN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IEBkaXJlY3Rpb247XG59XG5cbi5hbmltYXRpb24tZmlsbC1tb2RlKEBmaWxsLW1vZGUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBAZmlsbC1tb2RlO1xuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IEBmaWxsLW1vZGU7XG59XG5cbi8vIEJhY2tmYWNlIHZpc2liaWxpdHlcbi8vIFByZXZlbnQgYnJvd3NlcnMgZnJvbSBmbGlja2VyaW5nIHdoZW4gdXNpbmcgQ1NTIDNEIHRyYW5zZm9ybXMuXG4vLyBEZWZhdWx0IHZhbHVlIGlzIGB2aXNpYmxlYCwgYnV0IGNhbiBiZSBjaGFuZ2VkIHRvIGBoaWRkZW5gXG5cbi5iYWNrZmFjZS12aXNpYmlsaXR5KEB2aXNpYmlsaXR5KXtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBAdmlzaWJpbGl0eTtcbiAgICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBAdmlzaWJpbGl0eTtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBAdmlzaWJpbGl0eTtcbn1cblxuLy8gQm94IHNpemluZ1xuLmJveC1zaXppbmcoQGJveG1vZGVsKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogQGJveG1vZGVsO1xuICAgICAtbW96LWJveC1zaXppbmc6IEBib3htb2RlbDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBAYm94bW9kZWw7XG59XG5cbi8vIENTUzMgQ29udGVudCBDb2x1bW5zXG4uY29udGVudC1jb2x1bW5zKEBjb2x1bW4tY291bnQ7IEBjb2x1bW4tZ2FwOiBAZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IEBjb2x1bW4tY291bnQ7XG4gICAgIC1tb3otY29sdW1uLWNvdW50OiBAY29sdW1uLWNvdW50O1xuICAgICAgICAgIGNvbHVtbi1jb3VudDogQGNvbHVtbi1jb3VudDtcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiBAY29sdW1uLWdhcDtcbiAgICAgLW1vei1jb2x1bW4tZ2FwOiBAY29sdW1uLWdhcDtcbiAgICAgICAgICBjb2x1bW4tZ2FwOiBAY29sdW1uLWdhcDtcbn1cblxuLy8gT3B0aW9uYWwgaHlwaGVuYXRpb25cbi5oeXBoZW5zKEBtb2RlOiBhdXRvKSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgLXdlYmtpdC1oeXBoZW5zOiBAbW9kZTtcbiAgICAgLW1vei1oeXBoZW5zOiBAbW9kZTtcbiAgICAgIC1tcy1oeXBoZW5zOiBAbW9kZTsgLy8gSUUxMCtcbiAgICAgICAtby1oeXBoZW5zOiBAbW9kZTtcbiAgICAgICAgICBoeXBoZW5zOiBAbW9kZTtcbn1cblxuLy8gUGxhY2Vob2xkZXIgdGV4dFxuLnBsYWNlaG9sZGVyKEBjb2xvcjogQGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyLCBAZm9udFdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyKSB7XG4gIC8vIEZpcmVmb3hcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBpbnB1dC1jb2xvci1wbGFjZWhvbGRlcik7XG4gICAgb3BhY2l0eTogMTsgLy8gT3ZlcnJpZGUgRmlyZWZveCdzIHVudXN1YWwgZGVmYXVsdCBvcGFjaXR5OyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL3B1bGwvMTE1MjZcbiAgICBmb250LXdlaWdodDogQGZvbnRXZWlnaHQ7XG4gIH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKTsgZm9udC13ZWlnaHQ6IEBmb250V2VpZ2h0IH0gLy8gSW50ZXJuZXQgRXhwbG9yZXIgMTArXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgIHsgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBpbnB1dC1jb2xvci1wbGFjZWhvbGRlcik7IGZvbnQtd2VpZ2h0OiBAZm9udFdlaWdodCB9IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG59XG5cbi8vIFRyYW5zZm9ybWF0aW9uc1xuLnNjYWxlKEBmYWN0b3IpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKEBmYWN0b3IpO1xuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZShAZmFjdG9yKTtcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKEBmYWN0b3IpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG59XG5cbi5zY2FsZShAcmF0aW9YOyBAcmF0aW9ZKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZShAcmF0aW9YLCBAcmF0aW9ZKTtcbiAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoQHJhdGlvWCwgQHJhdGlvWSk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZShAcmF0aW9YLCBAcmF0aW9ZKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xufVxuXG4uc2NhbGVYKEByYXRpbykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKEByYXRpbyk7XG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWChAcmF0aW8pOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGVYKEByYXRpbyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbn1cblxuLnNjYWxlWShAcmF0aW8pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWShAcmF0aW8pO1xuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoQHJhdGlvKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlWShAcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG59XG5cbi5za2V3KEB4OyBAeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goQHgpIHNrZXdZKEB5KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNrZXdYKEB4KSBza2V3WShAeSk7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzQ4ODU7IElFOStcbiAgICAgICAtby10cmFuc2Zvcm06IHNrZXdYKEB4KSBza2V3WShAeSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBza2V3WChAeCkgc2tld1koQHkpO1xufVxuXG4udHJhbnNsYXRlKEB4OyBAeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKEB4LCBAeSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoQHgsIEB5KTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZShAeCwgQHkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKEB4LCBAeSk7XG59XG5cbi50cmFuc2xhdGUzZChAeDsgQHk7IEB6KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChAeCwgQHksIEB6KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKEB4LCBAeSwgQHopO1xufVxuXG4ucm90YXRlKEBkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoQGRlZ3JlZXMpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKEBkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZShAZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoQGRlZ3JlZXMpO1xufVxuXG4ucm90YXRlWChAZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWChAZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKEBkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoQGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWChAZGVncmVlcyk7XG59XG5cbi5yb3RhdGVZKEBkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKEBkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoQGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWShAZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKEBkZWdyZWVzKTtcbn1cblxuLnBlcnNwZWN0aXZlKEBwZXJzcGVjdGl2ZSkge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiBAcGVyc3BlY3RpdmU7XG4gICAgIC1tb3otcGVyc3BlY3RpdmU6IEBwZXJzcGVjdGl2ZTtcbiAgICAgICAgICBwZXJzcGVjdGl2ZTogQHBlcnNwZWN0aXZlO1xufVxuXG4ucGVyc3BlY3RpdmUtb3JpZ2luKEBwZXJzcGVjdGl2ZSkge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogQHBlcnNwZWN0aXZlO1xuICAgICAtbW96LXBlcnNwZWN0aXZlLW9yaWdpbjogQHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlLW9yaWdpbjogQHBlcnNwZWN0aXZlO1xufVxuXG4udHJhbnNmb3JtLW9yaWdpbihAb3JpZ2luKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogQG9yaWdpbjtcbiAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBAb3JpZ2luO1xuICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IEBvcmlnaW47IC8vIElFOSBvbmx5XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogQG9yaWdpbjtcbn1cblxuXG4vLyBUcmFuc2l0aW9uc1xuXG4udHJhbnNpdGlvbihAdHJhbnNpdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb246IEB0cmFuc2l0aW9uO1xuICAgICAgIC1vLXRyYW5zaXRpb246IEB0cmFuc2l0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb246IEB0cmFuc2l0aW9uO1xufVxuXG4udHJhbnNpdGlvbi1wcm9wZXJ0eShAdHJhbnNpdGlvbi1wcm9wZXJ0eSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IEB0cmFuc2l0aW9uLXByb3BlcnR5O1xuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IEB0cmFuc2l0aW9uLXByb3BlcnR5O1xufVxuXG4udHJhbnNpdGlvbi1kZWxheShAdHJhbnNpdGlvbi1kZWxheSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IEB0cmFuc2l0aW9uLWRlbGF5O1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IEB0cmFuc2l0aW9uLWRlbGF5O1xufVxuXG4udHJhbnNpdGlvbi1kdXJhdGlvbihAdHJhbnNpdGlvbi1kdXJhdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uO1xufVxuXG4udHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24oQHRpbWluZy1mdW5jdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xufVxuXG4udHJhbnNpdGlvbi10cmFuc2Zvcm0oQHRyYW5zaXRpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBAdHJhbnNpdGlvbjtcbiAgICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSBAdHJhbnNpdGlvbjtcbiAgICAgICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gQHRyYW5zaXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIEB0cmFuc2l0aW9uO1xufVxuXG5cbi8vIFVzZXIgc2VsZWN0XG4vLyBGb3Igc2VsZWN0aW5nIHRleHQgb24gdGhlIHBhZ2VcblxuLnVzZXItc2VsZWN0KEBzZWxlY3QpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogQHNlbGVjdDtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogQHNlbGVjdDtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogQHNlbGVjdDsgLy8gSUUxMCtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogQHNlbGVjdDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "zaTN":
    /*!**********************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/external-libraries/drag-and-drop/dnd-drag-placeholder/dnd-drag-placeholder-example.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: DndDragPlaceholderExampleComponent */

    /***/
    function zaTN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DndDragPlaceholderExampleComponent", function () {
        return DndDragPlaceholderExampleComponent;
      });
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DndDragPlaceholderExampleComponent_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DndDragPlaceholderExampleComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DndDragPlaceholderExampleComponent_div_1_div_2_Template, 2, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1, " ");
        }
      }

      var DndDragPlaceholderExampleComponent = /*#__PURE__*/function () {
        function DndDragPlaceholderExampleComponent() {
          _classCallCheck(this, DndDragPlaceholderExampleComponent);

          this.listItems = ["Adobe", "IBM", "Dell"];
        }

        _createClass(DndDragPlaceholderExampleComponent, [{
          key: "onItemDropped",
          value: function onItemDropped(event) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(this.listItems, event.previousIndex, event.currentIndex);
          }
        }]);

        return DndDragPlaceholderExampleComponent;
      }();

      DndDragPlaceholderExampleComponent.ɵfac = function DndDragPlaceholderExampleComponent_Factory(t) {
        return new (t || DndDragPlaceholderExampleComponent)();
      };

      DndDragPlaceholderExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DndDragPlaceholderExampleComponent,
        selectors: [["dnd-drag-placeholder"]],
        decls: 2,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7327285005893952358$$DEMO_SRC_COMPONENTS_DEMO_EXTERNAL_LIBRARIES_DRAG_AND_DROP_DND_DRAG_PLACEHOLDER_DND_DRAG_PLACEHOLDER_EXAMPLE_COMPONENT_TS___1 = goog.getMsg(" Placeholder ");
            i18n_0 = MSG_EXTERNAL_7327285005893952358$$DEMO_SRC_COMPONENTS_DEMO_EXTERNAL_LIBRARIES_DRAG_AND_DROP_DND_DRAG_PLACEHOLDER_DND_DRAG_PLACEHOLDER_EXAMPLE_COMPONENT_TS___1;
          } else {
            i18n_0 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241F7e3501e2f4749cd57c56e40a0e3609ef96e41061\u241F7327285005893952358: Placeholder "])));
          }

          return [["cdkDropList", "", 1, "draggable-container", 3, "cdkDropListDropped"], ["cdkDrag", "", "cdkDragPreviewClass", "dnd-drag-preview", "class", "draggable-item", 4, "ngFor", "ngForOf"], ["cdkDrag", "", "cdkDragPreviewClass", "dnd-drag-preview", 1, "draggable-item"], ["class", "draggable-placeholder", 4, "cdkDragPlaceholder"], [1, "draggable-placeholder"], i18n_0];
        },
        template: function DndDragPlaceholderExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function DndDragPlaceholderExampleComponent_Template_div_cdkDropListDropped_0_listener($event) {
              return ctx.onItemDropped($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DndDragPlaceholderExampleComponent_div_1_Template, 3, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listItems);
          }
        },
        directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDragPlaceholder"]],
        styles: [".dnd-drag-preview[_ngcontent-%COMP%] {\n  border: 1px #d9d9d9 solid;background: #f2f2f2;z-index: 1;box-sizing: border-box;box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.draggable-container[_ngcontent-%COMP%] {\n  width: 150px;\n  border: solid 1px #d9d9d9;\n}\n.draggable-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.item[_ngcontent-%COMP%], .draggable-item[_ngcontent-%COMP%], .draggable-placeholder[_ngcontent-%COMP%], .dnd-drag-preview[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: center;\n  box-sizing: border-box;\n  border-bottom: solid 1px #d9d9d9;\n}\n.draggable-item[_ngcontent-%COMP%], .draggable-placeholder[_ngcontent-%COMP%] {\n  height: 50px;\n  transition: box-shadow 0.4s;\n}\n.draggable-item[_ngcontent-%COMP%]:hover, .draggable-placeholder[_ngcontent-%COMP%]:hover {\n  cursor: move;\n  background: #f2f2f2;\n  z-index: 1;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.draggable-placeholder[_ngcontent-%COMP%] {\n  border: dashed 1px #d9d9d9;\n  background: #f2f2f2;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRuZC1kcmFnLXBsYWNlaG9sZGVyLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9kbmQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL3ZlbmRvci1wcmVmaXhlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDQTtFQ3ZCSSx5QkFBQSxDQVhBLG1CQUFBLENBSUEsVUFBQSxDQUVBLHNCQUFBLENBQ0EsdUVBQUE7QURiSjtBQUtBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FBSEo7QUFDQTtFQUtRLFlBQUE7QUFIUjtBQVFBOzs7O0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQUhKO0FBT0E7O0VBQ0ksWUFBQTtFRW9MTSwyQkFBQTtBRnJMVjtBQUlJOztFQUNJLFlBQUE7RUN0QkosbUJBQUE7RUFJQSxVQUFBO0VBRUEsc0JBQUE7RUFDQSx1RUFBQTtBRGtCSjtBQUdBO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO0FBREoiLCJmaWxlIjoiZG5kLWRyYWctcGxhY2Vob2xkZXItZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJudWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGluc1wiO1xuXG5AYm94LXdpZHRoOiAxNTBweDtcbkBib3gtaGVpZ2h0OiA1MHB4O1xuQHBsYWNlaG9sZGVyLWJvcmRlci13aWR0aDogQG51aS1saW5lLWRlZmF1bHQ7XG5cbi5kcmFnZ2FibGUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogQGJveC13aWR0aDtcbiAgICBib3JkZXI6IHNvbGlkIEBudWktbGluZS1kZWZhdWx0IEBudWktY29sb3ItbGluZS1kZWZhdWx0O1xuXG4gICAgOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxufVxuXG4vLyBnZW5lcmljIGl0ZW0gc3R5bGluZ1xuLml0ZW0ge1xuICAgIHBhZGRpbmc6IEBudWktc3BhY2UtbWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgQG51aS1saW5lLWRlZmF1bHQgQG51aS1jb2xvci1saW5lLWRlZmF1bHQ7XG59XG5cbi8vIGRyYWcgJiBkcm9wIHN0eWxpbmdcbi5kcmFnZ2FibGUtaXRlbTpleHRlbmQoLml0ZW0pLCAuZHJhZ2dhYmxlLXBsYWNlaG9sZGVyOmV4dGVuZCguaXRlbSkge1xuICAgIGhlaWdodDogQGJveC1oZWlnaHQ7XG4gICAgLnRyYW5zaXRpb24oYm94LXNoYWRvdyAwLjRzKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IG1vdmU7XG4gICAgICAgIC5udWktZG5kLWhvdmVyLXN0YXRlKCk7XG4gICAgICAgIC5udWktZG5kLXJhaXNlZC1zdGF0ZSgpO1xuICAgIH1cbn1cblxuLmRyYWdnYWJsZS1wbGFjZWhvbGRlciB7XG4gICAgYm9yZGVyOiBkYXNoZWQgQHBsYWNlaG9sZGVyLWJvcmRlci13aWR0aCBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdDtcbiAgICBiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJnLWNvbnRlbnQtaG92ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZG5kLWRyYWctcHJldmlldzpleHRlbmQoLml0ZW0sIC5udWktZG5kLXByZXZpZXcpIHt9XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vbnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcblxuQGRuZC1pdGVtLWJvcmRlci13aWR0aDogQG51aS1saW5lLWRlZmF1bHQ7XG5AZG5kLXpvbmUtYm9yZGVyLXdpZHRoOiBAbnVpLWxpbmUtZmF0O1xuQGRuZC16b25lLWljb24tc2l6ZTogNDBweDtcblxuLyoqIGRyYWdnYWJsZSBpdGVtcyBzdGF0ZXMgKi9cbi5udWktZG5kLWhvdmVyLXN0YXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJnLWNvbnRlbnQtaG92ZXI7XG59XG5cbi5udWktZG5kLXJhaXNlZC1zdGF0ZSB7XG4gICAgei1pbmRleDogMTtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogQG51aS1zaGFkb3ctZWxldmF0ZWQ7XG59XG5cbi5udWktZG5kLXByZXZpZXcge1xuICAgIGJvcmRlcjogQGRuZC1pdGVtLWJvcmRlci13aWR0aCBAbnVpLWNvbG9yLWxpbmUtZGVmYXVsdCBzb2xpZDtcbiAgICAubnVpLWRuZC1ob3Zlci1zdGF0ZSgpO1xuICAgIC5udWktZG5kLXJhaXNlZC1zdGF0ZSgpO1xufVxuXG4ubnVpLWRuZC1kcm9wem9uZSB7XG4gICAgLyoqIGRyb3B6b25lIHN0YXRlcyAqL1xuICAgICYubnVpLWRuZC1kcm9wem9uZS0tYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyOiBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoIGRhc2hlZCBAbnVpLWNvbG9yLXNlbWFudGljLXVua25vd24gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLm51aS1kbmQtZHJvcHpvbmUtLWRyb3AtYWxsb3dlZCB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgYm9yZGVyOiBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoIHNvbGlkIEBudWktY29sb3Itc2VsZWN0ZWQtY29udHJhc3QgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1zZWxlY3RlZC1hY3RpdmU7XG4gICAgfTtcbiAgICAmLm51aS1kbmQtZHJvcHpvbmUtLWRyb3Atbm90LWFsbG93ZWQge1xuICAgICAgICBjdXJzb3I6IG1vdmU7XG4gICAgICAgIGJvcmRlcjogQGRuZC16b25lLWJvcmRlci13aWR0aCBzb2xpZCBAbnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBudWktY29sb3ItYnVzeS1kZXN0cnVjdGl2ZTtcbiAgICB9XG5cbiAgICAvKiogb3RoZXIgY3VzdG9temlhdGlvbnMgKi9cbiAgICAuY2VudGVyZWQtb3ZlcmxheSwgLm51aS1pY29uLWl0ZW06YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAudHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cblxuICAgIC5udWktaWNvbi1pdGVtIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiBAZG5kLXpvbmUtaWNvbi1zaXplO1xuICAgICAgICAgICAgd2lkdGg6IEBkbmQtem9uZS1pY29uLXNpemU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEBUT0RPIGZpeC9yZW1vdmUgdGhpcyBoYWNraW5nIHN0eWxlIG9uY2UgbnVpLWljb24gZ2V0cyBwcm9wZXIgc3VwcG9ydCBmb3Igc2l6ZSwgYmcgY29sb3IgYW5kIGZpbGwgY29sb3JcbiAgICAuZHJvcC1jaXJjbGV7XG4gICAgICAgICYtcGVybWFuZW50IHtcbiAgICAgICAgICAgICYgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1iZy1jb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAmIHBvbHlnb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogQG51aS1jb2xvci1pY29uLWhpZ2hsaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtYWxsb3dlZCB7XG4gICAgICAgICAgICAmIC5udWktaWNvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBudWktY29sb3Itc2VsZWN0ZWQtY29udHJhc3Q7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgJiBwb2x5Z29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDVweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taW52ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtbm90LWFsbG93ZWQge1xuICAgICAgICAgICAgJiAubnVpLWljb24taXRlbSB7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAgICYgcGF0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSg1cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogQG51aS1jb2xvci1pY29uLWludmVyc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBWZW5kb3IgUHJlZml4ZXNcbi8vXG4vLyBBbGwgdmVuZG9yIG1peGlucyBhcmUgZGVwcmVjYXRlZCBhcyBvZiB2My4yLjAgZHVlIHRvIHRoZSBpbnRyb2R1Y3Rpb24gb2Zcbi8vIEF1dG9wcmVmaXhlciBpbiBvdXIgR3J1bnRmaWxlLiBUaGV5IHdpbGwgYmUgcmVtb3ZlZCBpbiB2NC5cblxuLy8gLSBBbmltYXRpb25zXG4vLyAtIEJhY2tmYWNlIHZpc2liaWxpdHlcbi8vIC0gQm94IHNoYWRvd1xuLy8gLSBCb3ggc2l6aW5nXG4vLyAtIENvbnRlbnQgY29sdW1uc1xuLy8gLSBIeXBoZW5zXG4vLyAtIFBsYWNlaG9sZGVyIHRleHRcbi8vIC0gVHJhbnNmb3JtYXRpb25zXG4vLyAtIFRyYW5zaXRpb25zXG4vLyAtIFVzZXIgU2VsZWN0XG5cblxuLy8gQW5pbWF0aW9uc1xuLmFuaW1hdGlvbihAYW5pbWF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBAYW5pbWF0aW9uO1xuICAgICAgIC1vLWFuaW1hdGlvbjogQGFuaW1hdGlvbjtcbiAgICAgICAgICBhbmltYXRpb246IEBhbmltYXRpb247XG59XG5cbi5hbmltYXRpb24tbmFtZShAbmFtZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBAbmFtZTtcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogQG5hbWU7XG59XG5cbi5hbmltYXRpb24tZHVyYXRpb24oQGR1cmF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBAZHVyYXRpb247XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiBAZHVyYXRpb247XG59XG5cbi5hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uKEB0aW1pbmctZnVuY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IEB0aW1pbmctZnVuY3Rpb247XG59XG5cbi5hbmltYXRpb24tZGVsYXkoQGRlbGF5KSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBAZGVsYXk7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiBAZGVsYXk7XG59XG5cbi5hbmltYXRpb24taXRlcmF0aW9uLWNvdW50KEBpdGVyYXRpb24tY291bnQpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBAaXRlcmF0aW9uLWNvdW50O1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IEBpdGVyYXRpb24tY291bnQ7XG59XG5cbi5hbmltYXRpb24tZGlyZWN0aW9uKEBkaXJlY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBAZGlyZWN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IEBkaXJlY3Rpb247XG59XG5cbi5hbmltYXRpb24tZmlsbC1tb2RlKEBmaWxsLW1vZGUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBAZmlsbC1tb2RlO1xuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IEBmaWxsLW1vZGU7XG59XG5cbi8vIEJhY2tmYWNlIHZpc2liaWxpdHlcbi8vIFByZXZlbnQgYnJvd3NlcnMgZnJvbSBmbGlja2VyaW5nIHdoZW4gdXNpbmcgQ1NTIDNEIHRyYW5zZm9ybXMuXG4vLyBEZWZhdWx0IHZhbHVlIGlzIGB2aXNpYmxlYCwgYnV0IGNhbiBiZSBjaGFuZ2VkIHRvIGBoaWRkZW5gXG5cbi5iYWNrZmFjZS12aXNpYmlsaXR5KEB2aXNpYmlsaXR5KXtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBAdmlzaWJpbGl0eTtcbiAgICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBAdmlzaWJpbGl0eTtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBAdmlzaWJpbGl0eTtcbn1cblxuLy8gQm94IHNpemluZ1xuLmJveC1zaXppbmcoQGJveG1vZGVsKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogQGJveG1vZGVsO1xuICAgICAtbW96LWJveC1zaXppbmc6IEBib3htb2RlbDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBAYm94bW9kZWw7XG59XG5cbi8vIENTUzMgQ29udGVudCBDb2x1bW5zXG4uY29udGVudC1jb2x1bW5zKEBjb2x1bW4tY291bnQ7IEBjb2x1bW4tZ2FwOiBAZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IEBjb2x1bW4tY291bnQ7XG4gICAgIC1tb3otY29sdW1uLWNvdW50OiBAY29sdW1uLWNvdW50O1xuICAgICAgICAgIGNvbHVtbi1jb3VudDogQGNvbHVtbi1jb3VudDtcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiBAY29sdW1uLWdhcDtcbiAgICAgLW1vei1jb2x1bW4tZ2FwOiBAY29sdW1uLWdhcDtcbiAgICAgICAgICBjb2x1bW4tZ2FwOiBAY29sdW1uLWdhcDtcbn1cblxuLy8gT3B0aW9uYWwgaHlwaGVuYXRpb25cbi5oeXBoZW5zKEBtb2RlOiBhdXRvKSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgLXdlYmtpdC1oeXBoZW5zOiBAbW9kZTtcbiAgICAgLW1vei1oeXBoZW5zOiBAbW9kZTtcbiAgICAgIC1tcy1oeXBoZW5zOiBAbW9kZTsgLy8gSUUxMCtcbiAgICAgICAtby1oeXBoZW5zOiBAbW9kZTtcbiAgICAgICAgICBoeXBoZW5zOiBAbW9kZTtcbn1cblxuLy8gUGxhY2Vob2xkZXIgdGV4dFxuLnBsYWNlaG9sZGVyKEBjb2xvcjogQGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyLCBAZm9udFdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyKSB7XG4gIC8vIEZpcmVmb3hcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBpbnB1dC1jb2xvci1wbGFjZWhvbGRlcik7XG4gICAgb3BhY2l0eTogMTsgLy8gT3ZlcnJpZGUgRmlyZWZveCdzIHVudXN1YWwgZGVmYXVsdCBvcGFjaXR5OyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL3B1bGwvMTE1MjZcbiAgICBmb250LXdlaWdodDogQGZvbnRXZWlnaHQ7XG4gIH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKTsgZm9udC13ZWlnaHQ6IEBmb250V2VpZ2h0IH0gLy8gSW50ZXJuZXQgRXhwbG9yZXIgMTArXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgIHsgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBpbnB1dC1jb2xvci1wbGFjZWhvbGRlcik7IGZvbnQtd2VpZ2h0OiBAZm9udFdlaWdodCB9IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG59XG5cbi8vIFRyYW5zZm9ybWF0aW9uc1xuLnNjYWxlKEBmYWN0b3IpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKEBmYWN0b3IpO1xuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZShAZmFjdG9yKTtcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKEBmYWN0b3IpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG59XG5cbi5zY2FsZShAcmF0aW9YOyBAcmF0aW9ZKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZShAcmF0aW9YLCBAcmF0aW9ZKTtcbiAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoQHJhdGlvWCwgQHJhdGlvWSk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZShAcmF0aW9YLCBAcmF0aW9ZKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xufVxuXG4uc2NhbGVYKEByYXRpbykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKEByYXRpbyk7XG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWChAcmF0aW8pOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGVYKEByYXRpbyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbn1cblxuLnNjYWxlWShAcmF0aW8pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWShAcmF0aW8pO1xuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoQHJhdGlvKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlWShAcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG59XG5cbi5za2V3KEB4OyBAeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goQHgpIHNrZXdZKEB5KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNrZXdYKEB4KSBza2V3WShAeSk7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzQ4ODU7IElFOStcbiAgICAgICAtby10cmFuc2Zvcm06IHNrZXdYKEB4KSBza2V3WShAeSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBza2V3WChAeCkgc2tld1koQHkpO1xufVxuXG4udHJhbnNsYXRlKEB4OyBAeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKEB4LCBAeSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoQHgsIEB5KTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZShAeCwgQHkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKEB4LCBAeSk7XG59XG5cbi50cmFuc2xhdGUzZChAeDsgQHk7IEB6KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChAeCwgQHksIEB6KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKEB4LCBAeSwgQHopO1xufVxuXG4ucm90YXRlKEBkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoQGRlZ3JlZXMpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKEBkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZShAZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoQGRlZ3JlZXMpO1xufVxuXG4ucm90YXRlWChAZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWChAZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKEBkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoQGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWChAZGVncmVlcyk7XG59XG5cbi5yb3RhdGVZKEBkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKEBkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoQGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWShAZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKEBkZWdyZWVzKTtcbn1cblxuLnBlcnNwZWN0aXZlKEBwZXJzcGVjdGl2ZSkge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiBAcGVyc3BlY3RpdmU7XG4gICAgIC1tb3otcGVyc3BlY3RpdmU6IEBwZXJzcGVjdGl2ZTtcbiAgICAgICAgICBwZXJzcGVjdGl2ZTogQHBlcnNwZWN0aXZlO1xufVxuXG4ucGVyc3BlY3RpdmUtb3JpZ2luKEBwZXJzcGVjdGl2ZSkge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogQHBlcnNwZWN0aXZlO1xuICAgICAtbW96LXBlcnNwZWN0aXZlLW9yaWdpbjogQHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlLW9yaWdpbjogQHBlcnNwZWN0aXZlO1xufVxuXG4udHJhbnNmb3JtLW9yaWdpbihAb3JpZ2luKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogQG9yaWdpbjtcbiAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBAb3JpZ2luO1xuICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IEBvcmlnaW47IC8vIElFOSBvbmx5XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogQG9yaWdpbjtcbn1cblxuXG4vLyBUcmFuc2l0aW9uc1xuXG4udHJhbnNpdGlvbihAdHJhbnNpdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb246IEB0cmFuc2l0aW9uO1xuICAgICAgIC1vLXRyYW5zaXRpb246IEB0cmFuc2l0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb246IEB0cmFuc2l0aW9uO1xufVxuXG4udHJhbnNpdGlvbi1wcm9wZXJ0eShAdHJhbnNpdGlvbi1wcm9wZXJ0eSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IEB0cmFuc2l0aW9uLXByb3BlcnR5O1xuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IEB0cmFuc2l0aW9uLXByb3BlcnR5O1xufVxuXG4udHJhbnNpdGlvbi1kZWxheShAdHJhbnNpdGlvbi1kZWxheSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IEB0cmFuc2l0aW9uLWRlbGF5O1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IEB0cmFuc2l0aW9uLWRlbGF5O1xufVxuXG4udHJhbnNpdGlvbi1kdXJhdGlvbihAdHJhbnNpdGlvbi1kdXJhdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uO1xufVxuXG4udHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24oQHRpbWluZy1mdW5jdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdGltaW5nLWZ1bmN0aW9uO1xufVxuXG4udHJhbnNpdGlvbi10cmFuc2Zvcm0oQHRyYW5zaXRpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBAdHJhbnNpdGlvbjtcbiAgICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSBAdHJhbnNpdGlvbjtcbiAgICAgICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gQHRyYW5zaXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIEB0cmFuc2l0aW9uO1xufVxuXG5cbi8vIFVzZXIgc2VsZWN0XG4vLyBGb3Igc2VsZWN0aW5nIHRleHQgb24gdGhlIHBhZ2VcblxuLnVzZXItc2VsZWN0KEBzZWxlY3QpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogQHNlbGVjdDtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogQHNlbGVjdDtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogQHNlbGVjdDsgLy8gSUUxMCtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogQHNlbGVjdDtcbn1cbiJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-external-libraries-external-libraries-module-es5.js.map