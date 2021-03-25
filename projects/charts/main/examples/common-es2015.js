(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "1w02":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseZipObject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "VJLA":
/*!******************************************!*\
  !*** ./node_modules/lodash/zipObject.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "MrPd"),
    baseZipObject = __webpack_require__(/*! ./_baseZipObject */ "1w02");

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


/***/ }),

/***/ "W+IT":
/*!**************************************************************************!*\
  !*** ./examples/components/demo/common/charts-test-harness.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChartsTestHarnessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsTestHarnessComponent", function() { return ChartsTestHarnessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_charts_test_harness_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./charts-test-harness.component.html */ "tYws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");




let ChartsTestHarnessComponent = class ChartsTestHarnessComponent {
    constructor(themeSwitcher) {
        this.themeSwitcher = themeSwitcher;
        // disable route refreshing because the theme service currently always reverts to
        // the light theme on route refresh unless route.data.showThemeSwitcher is 'true'
        this.originalWithRefreshRoute = this.themeSwitcher.withRefreshRoute;
        this.themeSwitcher.withRefreshRoute = false;
    }
    ngOnDestroy() {
        this.themeSwitcher.withRefreshRoute = this.originalWithRefreshRoute;
    }
};
ChartsTestHarnessComponent.ctorParameters = () => [
    { type: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["ThemeSwitchService"] }
];
ChartsTestHarnessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "charts-test-harness",
        template: _raw_loader_charts_test_harness_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        host: { class: "charts-test-harness" },
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["ThemeSwitchService"]])
], ChartsTestHarnessComponent);



/***/ }),

/***/ "kBc7":
/*!************************************!*\
  !*** ./examples/data-generator.ts ***!
  \************************************/
/*! exports provided: DataGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGenerator", function() { return DataGenerator; });
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_0__);

class DataGenerator {
    static generateMockStatusSeriesSet(seriesCount, pointCountPerSeries, statuses) {
        const dataSet = [];
        for (let i = 0; i < seriesCount; i++) {
            dataSet.push({
                id: `series-${i + 1}`,
                name: `Series ${i + 1}`,
                data: DataGenerator.mockStatusData(pointCountPerSeries, statuses),
            });
        }
        return dataSet;
    }
    static generateMockLineSeriesSet(seriesCount, pointCountPerSeries) {
        const dataSet = [];
        for (let i = 0; i < seriesCount; i++) {
            dataSet.push({
                id: `series-${i + 1}`,
                name: `Series ${i + 1}`,
                data: DataGenerator.mockLineData(pointCountPerSeries),
            });
        }
        return dataSet;
    }
    static generateMockTimeLineSeriesSet(seriesCount, pointCountPerSeries, startTime, endTime) {
        const dataSet = [];
        for (let i = 0; i < seriesCount; i++) {
            dataSet.push({
                id: `series-${i + 1}`,
                name: `Series ${i + 1}`,
                data: DataGenerator.mockTimeLineData(pointCountPerSeries, startTime, endTime),
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
    static generateMockOrdinalSeriesSet(groupNames, seriesCount = 1) {
        return groupNames.map((el, index) => ({
            id: `series-${index + 1}`,
            name: el,
            // for ordinal scale it is useful to identify each data point here somehow
            data: Array(seriesCount).fill(undefined).map((_, i) => ({
                value: Math.floor(Math.random() * 100),
                description: `Category ${i + 1}`,
            })),
            accessors: {
                data: {
                    category: (d) => d.description,
                    value: (d) => d.value,
                },
            },
        }));
    }
    static buildTimeSeriesFromData(from, to, data) {
        const count = data.length;
        if (!from || !to || count === 0) {
            return [];
        }
        const interval = count > 1 ? to.diff(from) / (count - 1) : 0;
        return data.map((y, i) => ({
            x: from.clone().add(moment_moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(i * interval)),
            y,
        }));
    }
    static range(start, end) {
        return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
    }
}
DataGenerator.mockTimeLineData = (pointCount = 40, startDatetime = "2017-02-15T15:14:29.909Z", endDatetime = "2017-02-15T16:14:29.909Z") => {
    const start = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(startDatetime);
    const end = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(endDatetime);
    const step = end.diff(start) / pointCount;
    let prev;
    const generateValue = () => Math.random() * 100 + 50;
    const maxThreshold = 10;
    return DataGenerator.range(0, pointCount).map((index) => {
        let next = generateValue();
        if (prev) {
            while (Math.abs(next - prev) > maxThreshold) {
                next = generateValue();
            }
        }
        prev = next;
        return {
            x: start.clone().add(step * index, "ms").toDate(),
            y: next,
        };
    });
};
DataGenerator.mockLineData = (pointCount = 40, startData = 0, endData = 400) => {
    const step = (endData - startData) / pointCount;
    let prev;
    const generateValue = () => Math.random() * 100 + 50;
    const maxThreshold = 10;
    return DataGenerator.range(0, pointCount).map((index) => {
        let next = generateValue();
        if (prev) {
            while (Math.abs(next - prev) > maxThreshold) {
                next = generateValue();
            }
        }
        prev = next;
        return {
            x: startData + (step * index),
            y: next,
        };
    });
};
DataGenerator.mockStatusData = (pointCount = 40, statuses) => {
    const generateValue = () => statuses[Math.floor(Math.random() * statuses.length)];
    return DataGenerator.range(0, pointCount).map((index) => ({
        x: index,
        y: generateValue(),
    }));
};


/***/ }),

/***/ "s1Ul":
/*!***************************************************************!*\
  !*** ./examples/components/demo/common/demo-common.module.ts ***!
  \***************************************************************/
/*! exports provided: DemoCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoCommonModule", function() { return DemoCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _charts_test_harness_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charts-test-harness.component */ "W+IT");





let DemoCommonModule = class DemoCommonModule {
};
DemoCommonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _charts_test_harness_component__WEBPACK_IMPORTED_MODULE_4__["ChartsTestHarnessComponent"],
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ],
        exports: [
            _charts_test_harness_component__WEBPACK_IMPORTED_MODULE_4__["ChartsTestHarnessComponent"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ],
    })
], DemoCommonModule);



/***/ }),

/***/ "tYws":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/common/charts-test-harness.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>\n<div class=\"ml-3 mt-4\">\n    <div class=\"d-flex align-items-center\">\n        <input class=\"mb-2\"\n               type=\"checkbox\"\n               id=\"dark-theme\"\n               [ngModel]=\"themeSwitcher.isDarkModeEnabledSubject | async\"\n               (ngModelChange)=\"themeSwitcher.setDarkTheme($event)\"/>\n        <label class=\"px-3\" for=\"dark-theme\">Dark Theme</label>\n    </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map