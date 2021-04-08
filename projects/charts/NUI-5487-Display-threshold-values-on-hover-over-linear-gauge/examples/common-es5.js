(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "1w02":
    /*!***********************************************!*\
      !*** ./node_modules/lodash/_baseZipObject.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function w02(module, exports) {
      /**
       * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
       *
       * @private
       * @param {Array} props The property identifiers.
       * @param {Array} values The property values.
       * @param {Function} assignFunc The function to assign values.
       * @returns {Object} Returns the new object.
       */
      function baseZipObject(props, values, assignFunc) {
        var index = -1,
            length = props.length,
            valsLength = values.length,
            result = {};

        while (++index < length) {
          var value = index < valsLength ? values[index] : undefined;
          assignFunc(result, props[index], value);
        }

        return result;
      }

      module.exports = baseZipObject;
      /***/
    },

    /***/
    "VJLA":
    /*!******************************************!*\
      !*** ./node_modules/lodash/zipObject.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function VJLA(module, exports, __webpack_require__) {
      var assignValue = __webpack_require__(
      /*! ./_assignValue */
      "MrPd"),
          baseZipObject = __webpack_require__(
      /*! ./_baseZipObject */
      "1w02");
      /**
       * This method is like `_.fromPairs` except that it accepts two arrays,
       * one of property identifiers and one of corresponding values.
       *
       * @static
       * @memberOf _
       * @since 0.4.0
       * @category Array
       * @param {Array} [props=[]] The property identifiers.
       * @param {Array} [values=[]] The property values.
       * @returns {Object} Returns the new object.
       * @example
       *
       * _.zipObject(['a', 'b'], [1, 2]);
       * // => { 'a': 1, 'b': 2 }
       */


      function zipObject(props, values) {
        return baseZipObject(props || [], values || [], assignValue);
      }

      module.exports = zipObject;
      /***/
    },

    /***/
    "W+IT":
    /*!**************************************************************************!*\
      !*** ./examples/components/demo/common/charts-test-harness.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ChartsTestHarnessComponent */

    /***/
    function WIT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartsTestHarnessComponent", function () {
        return ChartsTestHarnessComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_charts_test_harness_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./charts-test-harness.component.html */
      "tYws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/bits */
      "Rr1A");

      var ChartsTestHarnessComponent = /*#__PURE__*/function () {
        function ChartsTestHarnessComponent(themeSwitcher) {
          _classCallCheck(this, ChartsTestHarnessComponent);

          this.themeSwitcher = themeSwitcher; // disable route refreshing because the theme service currently always reverts to
          // the light theme on route refresh unless route.data.showThemeSwitcher is 'true'

          this.originalWithRefreshRoute = this.themeSwitcher.withRefreshRoute;
          this.themeSwitcher.withRefreshRoute = false;
        }

        _createClass(ChartsTestHarnessComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSwitcher.withRefreshRoute = this.originalWithRefreshRoute;
          }
        }]);

        return ChartsTestHarnessComponent;
      }();

      ChartsTestHarnessComponent.ctorParameters = function () {
        return [{
          type: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["ThemeSwitchService"]
        }];
      };

      ChartsTestHarnessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "charts-test-harness",
        template: _raw_loader_charts_test_harness_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        host: {
          "class": "charts-test-harness"
        }
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["ThemeSwitchService"]])], ChartsTestHarnessComponent);
      /***/
    },

    /***/
    "kBc7":
    /*!************************************!*\
      !*** ./examples/data-generator.ts ***!
      \************************************/

    /*! exports provided: DataGenerator */

    /***/
    function kBc7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataGenerator", function () {
        return DataGenerator;
      });
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_0__);

      var DataGenerator = /*#__PURE__*/function () {
        function DataGenerator() {
          _classCallCheck(this, DataGenerator);
        }

        _createClass(DataGenerator, null, [{
          key: "generateMockStatusSeriesSet",
          value: function generateMockStatusSeriesSet(seriesCount, pointCountPerSeries, statuses) {
            var dataSet = [];

            for (var i = 0; i < seriesCount; i++) {
              dataSet.push({
                id: "series-".concat(i + 1),
                name: "Series ".concat(i + 1),
                data: DataGenerator.mockStatusData(pointCountPerSeries, statuses)
              });
            }

            return dataSet;
          }
        }, {
          key: "generateMockLineSeriesSet",
          value: function generateMockLineSeriesSet(seriesCount, pointCountPerSeries) {
            var dataSet = [];

            for (var i = 0; i < seriesCount; i++) {
              dataSet.push({
                id: "series-".concat(i + 1),
                name: "Series ".concat(i + 1),
                data: DataGenerator.mockLineData(pointCountPerSeries)
              });
            }

            return dataSet;
          }
        }, {
          key: "generateMockTimeLineSeriesSet",
          value: function generateMockTimeLineSeriesSet(seriesCount, pointCountPerSeries, startTime, endTime) {
            var dataSet = [];

            for (var i = 0; i < seriesCount; i++) {
              dataSet.push({
                id: "series-".concat(i + 1),
                name: "Series ".concat(i + 1),
                data: DataGenerator.mockTimeLineData(pointCountPerSeries, startTime, endTime)
              });
            }

            return dataSet;
          }
          /**
           * With default seriesCount=1 it will generate groupNames.length series with one data point
           * @param {string[]} groupNames
           * @param {number} seriesCount
           * @returns {IDataSeries[]}
           */

        }, {
          key: "generateMockOrdinalSeriesSet",
          value: function generateMockOrdinalSeriesSet(groupNames) {
            var seriesCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            return groupNames.map(function (el, index) {
              return {
                id: "series-".concat(index + 1),
                name: el,
                // for ordinal scale it is useful to identify each data point here somehow
                data: Array(seriesCount).fill(undefined).map(function (_, i) {
                  return {
                    value: Math.floor(Math.random() * 100),
                    description: "Category ".concat(i + 1)
                  };
                }),
                accessors: {
                  data: {
                    category: function category(d) {
                      return d.description;
                    },
                    value: function value(d) {
                      return d.value;
                    }
                  }
                }
              };
            });
          }
        }, {
          key: "buildTimeSeriesFromData",
          value: function buildTimeSeriesFromData(from, to, data) {
            var count = data.length;

            if (!from || !to || count === 0) {
              return [];
            }

            var interval = count > 1 ? to.diff(from) / (count - 1) : 0;
            return data.map(function (y, i) {
              return {
                x: from.clone().add(moment_moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(i * interval)),
                y: y
              };
            });
          }
        }, {
          key: "range",
          value: function range(start, end) {
            return new Array(end - start + 1).fill(undefined).map(function (_, i) {
              return i + start;
            });
          }
        }]);

        return DataGenerator;
      }();

      DataGenerator.mockTimeLineData = function () {
        var pointCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
        var startDatetime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "2017-02-15T15:14:29.909Z";
        var endDatetime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "2017-02-15T16:14:29.909Z";
        var start = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(startDatetime);
        var end = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(endDatetime);
        var step = end.diff(start) / pointCount;
        var prev;

        var generateValue = function generateValue() {
          return Math.random() * 100 + 50;
        };

        var maxThreshold = 10;
        return DataGenerator.range(0, pointCount).map(function (index) {
          var next = generateValue();

          if (prev) {
            while (Math.abs(next - prev) > maxThreshold) {
              next = generateValue();
            }
          }

          prev = next;
          return {
            x: start.clone().add(step * index, "ms").toDate(),
            y: next
          };
        });
      };

      DataGenerator.mockLineData = function () {
        var pointCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
        var startData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var endData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 400;
        var step = (endData - startData) / pointCount;
        var prev;

        var generateValue = function generateValue() {
          return Math.random() * 100 + 50;
        };

        var maxThreshold = 10;
        return DataGenerator.range(0, pointCount).map(function (index) {
          var next = generateValue();

          if (prev) {
            while (Math.abs(next - prev) > maxThreshold) {
              next = generateValue();
            }
          }

          prev = next;
          return {
            x: startData + step * index,
            y: next
          };
        });
      };

      DataGenerator.mockStatusData = function () {
        var pointCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
        var statuses = arguments.length > 1 ? arguments[1] : undefined;

        var generateValue = function generateValue() {
          return statuses[Math.floor(Math.random() * statuses.length)];
        };

        return DataGenerator.range(0, pointCount).map(function (index) {
          return {
            x: index,
            y: generateValue()
          };
        });
      };
      /***/

    },

    /***/
    "s1Ul":
    /*!***************************************************************!*\
      !*** ./examples/components/demo/common/demo-common.module.ts ***!
      \***************************************************************/

    /*! exports provided: DemoCommonModule */

    /***/
    function s1Ul(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DemoCommonModule", function () {
        return DemoCommonModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _charts_test_harness_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./charts-test-harness.component */
      "W+IT");

      var DemoCommonModule = function DemoCommonModule() {
        _classCallCheck(this, DemoCommonModule);
      };

      DemoCommonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_charts_test_harness_component__WEBPACK_IMPORTED_MODULE_4__["ChartsTestHarnessComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_charts_test_harness_component__WEBPACK_IMPORTED_MODULE_4__["ChartsTestHarnessComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      })], DemoCommonModule);
      /***/
    },

    /***/
    "tYws":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/common/charts-test-harness.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tYws(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-content></ng-content>\n<div class=\"ml-3 mt-4\">\n    <div class=\"d-flex align-items-center\">\n        <input class=\"mb-2\"\n               type=\"checkbox\"\n               id=\"dark-theme\"\n               [ngModel]=\"themeSwitcher.isDarkModeEnabledSubject | async\"\n               (ngModelChange)=\"themeSwitcher.setDarkTheme($event)\"/>\n        <label class=\"px-3\" for=\"dark-theme\">Dark Theme</label>\n    </div>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map