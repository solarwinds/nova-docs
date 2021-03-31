(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["time-frame-bar-time-frame-bar-module"], {
    /***/
    "18NW":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar-basic/time-frame-bar-basic.example.component.ts ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { ITimeframe } from \"@nova-ui/bits\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-convenience-time-frame-bar-basic-example\",\n    templateUrl: \"./time-frame-bar-basic.example.component.html\",\n})\nexport class TimeFrameBarBasicExampleComponent implements OnInit {\n    public minDate: Moment;\n    public maxDate: Moment;\n    public timeFrame: ITimeframe;\n\n    private baseDate = moment([2018, 5, 1, 15, 0, 0]);\n\n    public ngOnInit() {\n        // Set the minimum and maximum selectable dates (optional)\n        this.minDate = this.baseDate.clone().subtract(1, \"months\");\n        this.maxDate = moment();\n\n        // Set the initial time frame\n        this.timeFrame = {\n            startDatetime: this.baseDate.clone().subtract(1, \"weeks\"),\n            endDatetime: this.baseDate.clone(),\n        };\n    }\n}\n";
      /***/
    },

    /***/
    "2o5b":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar-visual/time-frame-bar-visual.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function o5b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-time-frame-bar [id]=\"bar.id\" *ngFor=\"let bar of bars\"\n                    [timeFrame]=\"bar.timeFrame\"\n                    (timeFrameChange)=\"changeTimeFrame($event, bar)\"\n                    (undo)=\"bar.undo()\"\n                    (clear)=\"bar.restart()\"\n                    [historyIndex]=\"bar.history.index\">\n    <nui-icon icon=\"calendar\" class=\"pr-3\"></nui-icon>\n    {{bar.timeFrame | timeFrame}}\n    <nui-quick-picker timeFrameSelection>\n        <nui-time-frame-picker></nui-time-frame-picker>\n    </nui-quick-picker>\n</nui-time-frame-bar>\n\n<nui-time-frame-bar [id]=\"barNoQuickPick.id\"\n                    [(timeFrame)]=\"barNoQuickPick.timeFrame\">\n    <nui-icon icon=\"calendar\" class=\"pr-3\"></nui-icon>\n    {{barNoQuickPick.timeFrame | timeFrame}}\n    <nui-time-frame-picker timeFrameSelection></nui-time-frame-picker>\n</nui-time-frame-bar>\n";
      /***/
    },

    /***/
    "47sN":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar-zoom/time-frame-bar-zoom.example.component.html ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-time-frame-bar [minDate]=\"minDate\"\n                    [maxDate]=\"maxDate\"\n                    [timeFrame]=\"timeFrame\"\n                    (timeFrameChange)=\"onChange($event)\"\n                    [historyIndex]=\"history.index\"\n                    (undo)=\"onUndo()\"\n                    (clear)=\"onChange()\">\n\n    <!-- content for default projection slot -->\n    <nui-icon icon=\"calendar\" class=\"pr-3\"></nui-icon>\n    {{timeFrame | timeFrame}}\n\n    <!-- content for time frame selection projection slot -->\n    <nui-quick-picker timeFrameSelection>\n        <nui-time-frame-picker></nui-time-frame-picker>\n    </nui-quick-picker>\n\n</nui-time-frame-bar>\n\n<!-- FOR DEMO ONLY -->\n<pre>{{timeFrame | json}}</pre>\n<button nui-button\n        type=\"button\"\n        icon=\"zoom-in\"\n        displayStyle=\"primary\"\n        (click)=\"onZoomIn()\"\n        [disabled]=\"!canZoom()\">Zoom In</button>\n";
      /***/
    },

    /***/
    "6EEL":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar-docs/time-frame-bar-docs.example.component.html ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EEL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Time Frame Bar</h1>\n<p>\n    The\n    <code><a href=\"../components/TimeFrameBarComponent.html\" target=\"_blank\">nui-time-frame-bar</a></code>\n    is a\n    <a href=\"../additional-documentation/convenience-components.html\" target=\"_parent\">\n        <strong>convenience component</strong>\n    </a> designed to simplify adding time frame selection to your view. It provides the following:\n</p>\n<ol>\n    <li>Buttons to sequentially select an earlier or later time frame</li>\n    <li>A projection slot for the time frame display value</li>\n    <li>A projection slot for a popover time frame picker</li>\n</ol>\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiTimeFrameBarModule</code>\n    </li>\n    <li>\n        <code>NuiTimeFramePickerModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    The time frame bar defines a couple of projection slots that enable its basic functionality while\n    maintaining some flexibility:\n</p>\n<ol>\n    <li>\n        The default projection slot serves as the popover trigger and typically contains the time frame's\n        display value.\n    </li>\n    <li>\n        The time frame selection slot takes an element tagged with the <code>timeFrameSelection</code>\n        attribute and provides the user with the ability to select a specific time frame.\n        Supported content for this slot is the\n        <code><a href=\"../components/TimeFramePickerComponent.html\" target=\"_blank\">nui-time-frame-picker</a></code>\n        which can be optionally wrapped with a\n        <code><a href=\"../components/QuickPickerComponent.html\" target=\"_blank\">nui-quick-picker</a></code>\n        element.\n    </li>\n</ol>\n<nui-message type=\"warning\" [allowDismiss]=false>\n    <strong>Note:</strong> Any values set on the <code>minDate</code>, <code>maxDate</code>, and\n    <code>startModel</code> inputs of the projected <code>nui-time-frame-picker</code> will be ignored.\n    So, be sure to use the minDate, maxDate, and timeFrame inputs respectively on the\n    <code>nui-time-frame-bar</code> instead.\n</nui-message>\n<p>\n    An additional projection slot (not shown in the example) is available for projecting secondary\n    template content on the right side of the bar. To use this slot, tag the element to be projected with\n    the <code>rightContent</code> attribute.\n</p>\n<p>\n    Take a look at the source of the following example to see how easy it can be to use the\n    <code>nui-time-frame-bar</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"time-frame-bar-basic\" exampleTitle=\"Basic Usage\">\n    <nui-convenience-time-frame-bar-basic-example></nui-convenience-time-frame-bar-basic-example>\n</nui-example-wrapper>\n\n<h2>Adding Zoom Functionality</h2>\n<p>\n    Adding the ability to zoom may be desired if the <code>nui-time-frame-bar</code> is used in\n    conjunction with a time-based chart. Take a look at the source of the following example to see how easy it is\n    to add zooming to a <code>nui-time-frame-bar</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"time-frame-bar-zoom\" exampleTitle=\"Adding Zoom Functionality\">\n    <nui-convenience-time-frame-bar-zoom-example></nui-convenience-time-frame-bar-zoom-example>\n</nui-example-wrapper>\n<p>\n    As you can see in the source code of the example above, keeping track of the zoom step history\n    lets the user zoom in and out incrementally using the same time frames in each direction.\n    This can be done using an instance of the\n    <code><a href=\"../injectables/HistoryStorage.html\" target=\"_blank\">HistoryStorage</a></code>\n    class.\n</p>\n<p>\n    Also note in the example template that a separate handler, <code>onChange</code>, is assigned to the\n    <code>timeFrameChange</code> output instead of using the \"banana-in-a-box\" notation on the\n    <code>timeFrame</code> attribute. This is done to allow a restart of the zoom history whenever a\n    time frame change originates from within the TimeFrameBarComponent.\n</p>\n";
      /***/
    },

    /***/
    "6UVo":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar-test/time-frame-bar-test.component.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UVo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-time-frame-bar-test\">\n    <nui-time-frame-bar [minDate]=\"fromDate\"\n                        [maxDate]=\"toDate\"\n                        [timeFrame]=\"timeFrame\"\n                        (timeFrameChange)=\"onChange($event)\"\n                        (undo)=\"timeFrame = history.undo()\"\n                        (clear)=\"onChange()\"\n                        [historyIndex]=\"history.index\">\n            <nui-icon icon=\"calendar\" class=\"pr-3\"></nui-icon>\n        {{timeFrame | timeFrame}}\n        <nui-quick-picker timeFrameSelection>\n            <nui-time-frame-picker></nui-time-frame-picker>\n        </nui-quick-picker>\n    </nui-time-frame-bar>\n    <button class=\"btn-zoom-in\" (click)=\"zoomIn()\">Zoom In</button>\n    <button class=\"btn-set-default\" (click)=\"resetDefault()\">Set Default TimeFrame</button>\n</div>\n";
      /***/
    },

    /***/
    "dOrA":
    /*!**************************************************************************************!*\
      !*** ./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: TimeFrameBarModule */

    /***/
    function dOrA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFrameBarModule", function () {
        return TimeFrameBarModule;
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


      var _time_frame_bar_basic_time_frame_bar_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./time-frame-bar-basic/time-frame-bar-basic.example.component */
      "c3yb");
      /* harmony import */


      var _time_frame_bar_docs_time_frame_bar_docs_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./time-frame-bar-docs/time-frame-bar-docs.example.component */
      "vrpX");
      /* harmony import */


      var _time_frame_bar_test_time_frame_bar_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./time-frame-bar-test/time-frame-bar-test.component */
      "Zfd4");
      /* harmony import */


      var _time_frame_bar_visual_time_frame_bar_visual_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./time-frame-bar-visual/time-frame-bar-visual.component */
      "q3FL");
      /* harmony import */


      var _time_frame_bar_zoom_time_frame_bar_zoom_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./time-frame-bar-zoom/time-frame-bar-zoom.example.component */
      "fWKI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _time_frame_bar_docs_time_frame_bar_docs_example_component__WEBPACK_IMPORTED_MODULE_3__["TimeFrameBarDocsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].beta
          },
          showThemeSwitcher: true
        }
      }, {
        path: "basic",
        component: _time_frame_bar_basic_time_frame_bar_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["TimeFrameBarBasicExampleComponent"]
      }, {
        path: "zoom",
        component: _time_frame_bar_zoom_time_frame_bar_zoom_example_component__WEBPACK_IMPORTED_MODULE_6__["TimeFrameBarZoomExampleComponent"]
      }, {
        path: "test",
        component: _time_frame_bar_test_time_frame_bar_test_component__WEBPACK_IMPORTED_MODULE_4__["TimeFrameBarTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "visual",
        component: _time_frame_bar_visual_time_frame_bar_visual_component__WEBPACK_IMPORTED_MODULE_5__["TimeFrameBarVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var TimeFrameBarModule = function TimeFrameBarModule() {
        _classCallCheck(this, TimeFrameBarModule);
      };

      TimeFrameBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: TimeFrameBarModule
      });
      TimeFrameBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        factory: function TimeFrameBarModule_Factory(t) {
          return new (t || TimeFrameBarModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("sseo");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDatePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDialogModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPopoverModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTimeFramePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTimePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTooltipModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTimeFrameBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TimeFrameBarModule, {
          declarations: [_time_frame_bar_basic_time_frame_bar_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["TimeFrameBarBasicExampleComponent"], _time_frame_bar_zoom_time_frame_bar_zoom_example_component__WEBPACK_IMPORTED_MODULE_6__["TimeFrameBarZoomExampleComponent"], _time_frame_bar_docs_time_frame_bar_docs_example_component__WEBPACK_IMPORTED_MODULE_3__["TimeFrameBarDocsExampleComponent"], _time_frame_bar_test_time_frame_bar_test_component__WEBPACK_IMPORTED_MODULE_4__["TimeFrameBarTestComponent"], _time_frame_bar_visual_time_frame_bar_visual_component__WEBPACK_IMPORTED_MODULE_5__["TimeFrameBarVisualTestComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDatePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDialogModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPopoverModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTimeFramePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTimePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTooltipModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTimeFrameBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "ekvm":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar-visual/time-frame-bar-visual.component.ts ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ekvm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { HistoryStorage, ITimeframe, TimeframeService } from \"@nova-ui/bits\";\nimport moment from \"moment/moment\";\n\nclass TestBar {\n    private _baseDate = moment([2018, 5, 1, 15, 0, 0]);\n    public get baseDate() {\n        return this._baseDate;\n    }\n    public timeFrame: ITimeframe = this.getDefaultTF();\n    public history = new HistoryStorage<ITimeframe>();\n\n    constructor(public id: string) {\n        this.history.restart(this.timeFrame);\n    }\n\n    public zoomIn = (value: ITimeframe) => this.timeFrame = this.history.save(value);\n    public undo = () => this.timeFrame = this.history.undo();\n    public restart = (value?: ITimeframe) => this.timeFrame = this.history.restart(value);\n    public change = (value: ITimeframe) => {\n        this.timeFrame = this.history.restart(value);\n    }\n\n    private getDefaultTF(): ITimeframe {\n        return {\n            startDatetime: this._baseDate.clone().subtract(1, \"week\"),\n            endDatetime: this._baseDate.clone(),\n        };\n    }\n}\n\n@Component({\n    selector: \"nui-convenience-time-frame-bar-visual-test\",\n    templateUrl: \"./time-frame-bar-visual.component.html\",\n})\nexport class TimeFrameBarVisualTestComponent implements OnInit {\n    public bars: TestBar[] = [\"first\", \"second\", \"third\"].map(id => new TestBar(id));\n    public barNoQuickPick = new TestBar(\"bar-no-quick-pick\");\n\n    constructor(private timeframeService: TimeframeService) {\n    }\n\n    ngOnInit(): void {\n        setTimeout(() => {\n            // No zoom on bar[0]\n            this.zoomBar(this.bars[1]);\n            this.zoomBar(this.bars[2]);\n            this.zoomBar(this.bars[2]);\n        });\n    }\n\n    public zoomBar(bar: TestBar) {\n        bar.zoomIn(this.zoomTF(bar.timeFrame));\n    }\n\n    public zoomTF(timeFrame: ITimeframe): ITimeframe {\n        return {\n            startDatetime: timeFrame.startDatetime.clone().add(1, \"day\"),\n            endDatetime: timeFrame.endDatetime.clone().subtract(1, \"day\"),\n        };\n    }\n\n    public changeTimeFrame(value: ITimeframe, bar: TestBar) {\n        const tf = this.timeframeService.reconcileTimeframe(value, undefined, bar.baseDate);\n        bar.change(tf);\n    }\n\n}\n";
      /***/
    },

    /***/
    "hrFa":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar-basic/time-frame-bar-basic.example.component.html ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hrFa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-time-frame-bar [minDate]=\"minDate\"\n                    [maxDate]=\"maxDate\"\n                    [(timeFrame)]=\"timeFrame\">\n\n    <!-- content for default projection slot -->\n    <nui-icon icon=\"calendar\" class=\"pr-3\"></nui-icon>\n    {{timeFrame | timeFrame}}\n\n    <!-- content for time frame selection projection slot -->\n    <nui-quick-picker timeFrameSelection>\n        <nui-time-frame-picker></nui-time-frame-picker>\n    </nui-quick-picker>\n\n</nui-time-frame-bar>\n\n<!-- FOR DEMO ONLY -->\n<pre>{{timeFrame | json}}</pre>\n";
      /***/
    },

    /***/
    "iw9D":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar-zoom/time-frame-bar-zoom.example.component.ts ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iw9D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { HistoryStorage, ITimeframe } from \"@nova-ui/bits\";\nimport moment, { DurationInputArg2, Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-convenience-time-frame-bar-zoom-example\",\n    templateUrl: \"./time-frame-bar-zoom.example.component.html\",\n    providers: [HistoryStorage],\n})\nexport class TimeFrameBarZoomExampleComponent implements OnInit {\n    public minDate: Moment;\n    public maxDate: Moment;\n\n    public timeFrame: ITimeframe;\n\n    private baseDate = moment([2018, 5, 1, 15, 0, 0]);\n    private zoomLevels: DurationInputArg2[] = [\"weeks\", \"days\", \"hours\", \"minutes\"];\n\n    // Inject an instance of HistoryStorage\n    constructor(public history: HistoryStorage<ITimeframe>) {\n    }\n\n    public ngOnInit() {\n        // Set the minimum and maximum selectable dates\n        this.minDate = this.baseDate.clone().subtract(1, \"months\");\n        this.maxDate = moment();\n\n        // Set the initial time frame\n        this.onChange(this.getTimeFrame(this.zoomLevels[0]));\n    }\n\n    // Save the new timeframe to the history storage and set it as the current timeFrame\n    public onZoomIn = () =>\n        this.timeFrame = this.history.save(this.getTimeFrame(this.zoomLevels[this.history.index + 1]))\n\n    // Use the history storage to go back one time frame\n    public onUndo = () => this.timeFrame = this.history.undo();\n\n    // Reset the history storage and save a new initial value if provided\n    // Otherwise preserve the previous one\n    public onChange = (value?: ITimeframe) => this.timeFrame = this.history.restart(value);\n\n    // This method is for demo purposes only\n    public canZoom() {\n        const expectedTF = this.getTimeFrame(this.zoomLevels[this.history.index]);\n        const matchesZoomLevel = this.timeFrame.startDatetime.isSame(expectedTF.startDatetime) &&\n            this.timeFrame.endDatetime.isSame(expectedTF.endDatetime);\n        return matchesZoomLevel && this.history.index < this.zoomLevels.length - 1;\n    }\n\n    // This method is for demo purposes only\n    private getTimeFrame(zoomLevel: DurationInputArg2): ITimeframe {\n        return {\n            startDatetime: this.baseDate.clone().subtract(1, zoomLevel),\n            endDatetime: this.baseDate.clone().add(1, zoomLevel),\n        };\n    }\n}\n";
      /***/
    },

    /***/
    "q3FL":
    /*!**********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar-visual/time-frame-bar-visual.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: TimeFrameBarVisualTestComponent */

    /***/
    function q3FL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFrameBarVisualTestComponent", function () {
        return TimeFrameBarVisualTestComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_convenience_time_frame_bar_time_frame_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../src/lib/convenience/time-frame-bar/time-frame-bar.component */
      "SKIm");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../../src/lib/icon/icon.component */
      "45Bz");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../../src/lib/time-frame-picker/time-frame-picker.component */
      "chzP");
      /* harmony import */


      var _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../../src/lib/time-frame-picker/quick-picker/quick-picker.component */
      "KiNg");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../../src/lib/time-frame-picker/time-frame-format.pipe */
      "Y/g/");

      function TimeFrameBarVisualTestComponent_nui_time_frame_bar_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-time-frame-bar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("timeFrameChange", function TimeFrameBarVisualTestComponent_nui_time_frame_bar_0_Template_nui_time_frame_bar_timeFrameChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var bar_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.changeTimeFrame($event, bar_r1);
          })("undo", function TimeFrameBarVisualTestComponent_nui_time_frame_bar_0_Template_nui_time_frame_bar_undo_0_listener() {
            var bar_r1 = ctx.$implicit;
            return bar_r1.undo();
          })("clear", function TimeFrameBarVisualTestComponent_nui_time_frame_bar_0_Template_nui_time_frame_bar_clear_0_listener() {
            var bar_r1 = ctx.$implicit;
            return bar_r1.restart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nui-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "timeFrame");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nui-quick-picker", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "nui-time-frame-picker");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bar_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", bar_r1.id)("timeFrame", bar_r1.timeFrame)("historyIndex", bar_r1.history.index);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, bar_r1.timeFrame), " ");
        }
      }

      var TestBar = /*#__PURE__*/function () {
        function TestBar(id) {
          var _this = this;

          _classCallCheck(this, TestBar);

          this.id = id;
          this._baseDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()([2018, 5, 1, 15, 0, 0]);
          this.timeFrame = this.getDefaultTF();
          this.history = new _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["HistoryStorage"]();

          this.zoomIn = function (value) {
            return _this.timeFrame = _this.history.save(value);
          };

          this.undo = function () {
            return _this.timeFrame = _this.history.undo();
          };

          this.restart = function (value) {
            return _this.timeFrame = _this.history.restart(value);
          };

          this.change = function (value) {
            _this.timeFrame = _this.history.restart(value);
          };

          this.history.restart(this.timeFrame);
        }

        _createClass(TestBar, [{
          key: "baseDate",
          get: function get() {
            return this._baseDate;
          }
        }, {
          key: "getDefaultTF",
          value: function getDefaultTF() {
            return {
              startDatetime: this._baseDate.clone().subtract(1, "week"),
              endDatetime: this._baseDate.clone()
            };
          }
        }]);

        return TestBar;
      }();

      var TimeFrameBarVisualTestComponent = /*#__PURE__*/function () {
        function TimeFrameBarVisualTestComponent(timeframeService) {
          _classCallCheck(this, TimeFrameBarVisualTestComponent);

          this.timeframeService = timeframeService;
          this.bars = ["first", "second", "third"].map(function (id) {
            return new TestBar(id);
          });
          this.barNoQuickPick = new TestBar("bar-no-quick-pick");
        }

        _createClass(TimeFrameBarVisualTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            setTimeout(function () {
              // No zoom on bar[0]
              _this2.zoomBar(_this2.bars[1]);

              _this2.zoomBar(_this2.bars[2]);

              _this2.zoomBar(_this2.bars[2]);
            });
          }
        }, {
          key: "zoomBar",
          value: function zoomBar(bar) {
            bar.zoomIn(this.zoomTF(bar.timeFrame));
          }
        }, {
          key: "zoomTF",
          value: function zoomTF(timeFrame) {
            return {
              startDatetime: timeFrame.startDatetime.clone().add(1, "day"),
              endDatetime: timeFrame.endDatetime.clone().subtract(1, "day")
            };
          }
        }, {
          key: "changeTimeFrame",
          value: function changeTimeFrame(value, bar) {
            var tf = this.timeframeService.reconcileTimeframe(value, undefined, bar.baseDate);
            bar.change(tf);
          }
        }]);

        return TimeFrameBarVisualTestComponent;
      }();

      TimeFrameBarVisualTestComponent.ɵfac = function TimeFrameBarVisualTestComponent_Factory(t) {
        return new (t || TimeFrameBarVisualTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["TimeframeService"]));
      };

      TimeFrameBarVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TimeFrameBarVisualTestComponent,
        selectors: [["nui-convenience-time-frame-bar-visual-test"]],
        decls: 6,
        vars: 6,
        consts: [[3, "id", "timeFrame", "historyIndex", "timeFrameChange", "undo", "clear", 4, "ngFor", "ngForOf"], [3, "id", "timeFrame", "timeFrameChange"], ["icon", "calendar", 1, "pr-3"], ["timeFrameSelection", ""], [3, "id", "timeFrame", "historyIndex", "timeFrameChange", "undo", "clear"]],
        template: function TimeFrameBarVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TimeFrameBarVisualTestComponent_nui_time_frame_bar_0_Template, 6, 6, "nui-time-frame-bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-time-frame-bar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("timeFrameChange", function TimeFrameBarVisualTestComponent_Template_nui_time_frame_bar_timeFrameChange_1_listener($event) {
              return ctx.barNoQuickPick.timeFrame = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "nui-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "timeFrame");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "nui-time-frame-picker", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bars);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.barNoQuickPick.id)("timeFrame", ctx.barNoQuickPick.timeFrame);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx.barNoQuickPick.timeFrame), " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_convenience_time_frame_bar_time_frame_bar_component__WEBPACK_IMPORTED_MODULE_4__["TimeFrameBarComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_6__["TimeFramePickerComponent"], _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_7__["QuickPickerComponent"]],
        pipes: [_src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_8__["TimeFrameFormatPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "reyJ":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar-test/time-frame-bar-test.component.ts ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function reyJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { HistoryStorage, ITimeframe } from \"@nova-ui/bits\";\nimport moment, {  } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-convenience-time-frame-bar-test\",\n    templateUrl: \"./time-frame-bar-test.component.html\",\n    providers: [HistoryStorage],\n})\nexport class TimeFrameBarTestComponent {\n    private baseDate = moment([2018, 5, 1, 15, 0, 0]);\n    public fromDate = this.baseDate.clone().subtract(1, \"month\");\n    public toDate = moment([2050]);\n    public timeFrame: ITimeframe;\n\n    constructor(public history: HistoryStorage<ITimeframe>) {\n        this.resetDefault();\n    }\n\n    public onChange(value?: ITimeframe) {\n        this.timeFrame = this.history.restart(value);\n    }\n\n    public zoomIn() {\n        this.timeFrame = this.history.save({\n            startDatetime: this.timeFrame.startDatetime.clone().add(1, \"day\"),\n            endDatetime: this.timeFrame.endDatetime.clone().subtract(1, \"day\"),\n        });\n    }\n\n    public resetDefault() {\n        this.onChange({\n            startDatetime: this.baseDate.clone().subtract(1, \"week\"),\n            endDatetime: this.baseDate.clone(),\n        });\n    }\n\n}\n";
      /***/
    },

    /***/
    "sbKl":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar.module.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sbKl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN, NuiButtonModule, NuiCommonModule, NuiDatePickerModule, NuiDialogModule, NuiDocsModule, NuiIconModule, NuiMessageModule,\n    NuiPopoverModule, NuiTimeFrameBarModule, NuiTimeFramePickerModule, NuiTimePickerModule, NuiTooltipModule, SrlcStage\n} from \"@nova-ui/bits\";\n\nimport { TimeFrameBarBasicExampleComponent } from \"./time-frame-bar-basic/time-frame-bar-basic.example.component\";\nimport { TimeFrameBarDocsExampleComponent } from \"./time-frame-bar-docs/time-frame-bar-docs.example.component\";\nimport { TimeFrameBarTestComponent } from \"./time-frame-bar-test/time-frame-bar-test.component\";\nimport { TimeFrameBarVisualTestComponent } from \"./time-frame-bar-visual/time-frame-bar-visual.component\";\nimport { TimeFrameBarZoomExampleComponent } from \"./time-frame-bar-zoom/time-frame-bar-zoom.example.component\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: TimeFrameBarDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"basic\",\n        component: TimeFrameBarBasicExampleComponent,\n    },\n    {\n        path: \"zoom\",\n        component: TimeFrameBarZoomExampleComponent,\n    },\n    {\n        path: \"test\",\n        component: TimeFrameBarTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"visual\",\n        component: TimeFrameBarVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiCommonModule,\n        NuiDatePickerModule,\n        NuiDialogModule,\n        NuiIconModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        NuiPopoverModule,\n        NuiTimeFramePickerModule,\n        NuiTimePickerModule,\n        NuiTooltipModule,\n        NuiTimeFrameBarModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        TimeFrameBarBasicExampleComponent,\n        TimeFrameBarZoomExampleComponent,\n        TimeFrameBarDocsExampleComponent,\n        TimeFrameBarTestComponent,\n        TimeFrameBarVisualTestComponent,\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class TimeFrameBarModule { }\n";
      /***/
    },

    /***/
    "sseo":
    /*!*****************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/convenience/time-frame-bar sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*****************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function sseo(module, exports, __webpack_require__) {
      var map = {
        "./time-frame-bar-basic/time-frame-bar-basic.example.component.html": "hrFa",
        "./time-frame-bar-basic/time-frame-bar-basic.example.component.ts": "18NW",
        "./time-frame-bar-docs/time-frame-bar-docs.example.component.html": "6EEL",
        "./time-frame-bar-docs/time-frame-bar-docs.example.component.ts": "uOmO",
        "./time-frame-bar-test/time-frame-bar-test.component.html": "6UVo",
        "./time-frame-bar-test/time-frame-bar-test.component.ts": "reyJ",
        "./time-frame-bar-visual/time-frame-bar-visual.component.html": "2o5b",
        "./time-frame-bar-visual/time-frame-bar-visual.component.ts": "ekvm",
        "./time-frame-bar-zoom/time-frame-bar-zoom.example.component.html": "47sN",
        "./time-frame-bar-zoom/time-frame-bar-zoom.example.component.ts": "iw9D",
        "./time-frame-bar.module.ts": "sbKl"
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
      webpackContext.id = "sseo";
      /***/
    },

    /***/
    "uOmO":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar-docs/time-frame-bar-docs.example.component.ts ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uOmO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-time-frame-bar-docs-example\",\n    templateUrl: \"./time-frame-bar-docs.example.component.html\",\n})\nexport class TimeFrameBarDocsExampleComponent {}\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=time-frame-bar-time-frame-bar-module-es5.js.map