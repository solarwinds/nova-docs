(function () {
  var _templateObject, _templateObject2;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-theming-theming-module"], {
    /***/
    "/5Gf":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/theming/custom-theme/custom-theme.example.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Gf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { DOCUMENT } from \"@angular/common\";\nimport { Component, Inject, OnDestroy, Renderer2, RendererFactory2, ViewEncapsulation } from \"@angular/core\";\n\n@Component({\n    selector: \"custom-theme-example\",\n    templateUrl: \"./custom-theme.example.component.html\",\n    styleUrls: [\"./custom-theme.example.component.less\"],\n    encapsulation: ViewEncapsulation.None,\n})\nexport class CustomThemeExampleComponent implements OnDestroy {\n    private readonly renderer: Renderer2;\n    private readonly containerElement: Element;\n    private readonly customClassName = \"clown-party-theme\";\n\n    // Inject the RendererFactory2 for manipulating the DOM and inject the document for manipulation\n    constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) document: Document) {\n        // Get the root html element\n        this.containerElement = document.children[0];\n        // Create a renderer instance\n        this.renderer = rendererFactory.createRenderer(null, null);\n    }\n\n    ngOnDestroy() {\n        // cleanup\n        this.renderer.removeClass(this.containerElement, this.customClassName);\n    }\n\n    public setTheme(value: boolean) {\n        // add/remove the custom class to the root html element based on the switch's value\n        this.renderer[value ? \"addClass\" : \"removeClass\"](this.containerElement, this.customClassName);\n    }\n}\n";
      /***/
    },

    /***/
    "2ATK":
    /*!*****************************************************************************************!*\
      !*** ./demo/src/components/demo/theming/theming-docs/theming-docs.example.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ThemingDocsExampleComponent */

    /***/
    function ATK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemingDocsExampleComponent", function () {
        return ThemingDocsExampleComponent;
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


      var _theme_switch_service_theme_switch_service_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../theme-switch-service/theme-switch-service.example.component */
      "69Gb");
      /* harmony import */


      var _src_lib_docs_example_code_example_code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/docs/example-code/example-code.component */
      "DTer");
      /* harmony import */


      var _custom_theme_custom_theme_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../custom-theme/custom-theme.example.component */
      "LPia");

      var ThemingDocsExampleComponent = function ThemingDocsExampleComponent() {
        _classCallCheck(this, ThemingDocsExampleComponent);

        this.lessCode = "\n@import (reference) \"nui-framework-variables\";\n\n.sample-class {\n    background: var(--nui-color-bg-workspace, @nui-color-bg-workspace)\n    border: 1px solid var(--nui-color-line-default, @nui-color-line-default);\n}";
      };

      ThemingDocsExampleComponent.ɵfac = function ThemingDocsExampleComponent_Factory(t) {
        return new (t || ThemingDocsExampleComponent)();
      };

      ThemingDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ThemingDocsExampleComponent,
        selectors: [["theming-docs-example"]],
        decls: 130,
        vars: 1,
        consts: [["href", "../injectables/ThemeSwitchService.html", "target", "_blank"], ["href", "../injectables/ThemeSwitchService.html#setDarkTheme", "target", "_blank"], ["href", "../injectables/ThemeSwitchService.html#enableColorSchemePreferenceHandling", "target", "_blank"], ["href", "../injectables/ThemeSwitchService.html#disableColorSchemePreferenceHandling", "target", "_blank"], ["href", "https://docs.microsoft.com/en-us/windows-hardware/customize/desktop/set-dark-mode", "target", "_blank"], ["href", "https://support.apple.com/en-us/HT208976", "target", "_blank"], ["filenamePrefix", "theme-switch-service.example", "exampleTitle", "Theme Switch Service"], ["href", "../injectables/ThemeSwitchService.html#isDarkModeEnabledSubject", "target", "_blank"], ["href", "../injectables/ThemeSwitchService.html#withRefreshRoute", "target", "_blank"], ["href", "https://www.w3schools.com/css/css3_variables.asp", "target", "_blank"], ["language", "less"], ["href", "https://github.com/solarwinds/nova/blob/main/packages/bits/src/styles/nui-framework-colors.less", "target", "_blank"], ["href", "https://angular.io/api/core/Renderer2", "target", "_blank"], ["filenamePrefix", "custom-theme.example", "exampleTitle", "Custom Themes"]],
        template: function ThemingDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Theming");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Nova currently supports two themes out of the box: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "light");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". By default, apps using Nova are styled with the light theme.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Theme Switch Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " To configure your app to use the dark theme, you can add the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "dark-nova-theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " class to the app's root ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " element. But, you don't have to do it manually. Nova provides a service that can be used to toggle the root ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " element class on demand. To enable the dark theme, inject the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ThemeSwitchService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " into a component and invoke its ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "setDarkTheme");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " method with a value of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ". To disable the dark theme invoke ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "setDarkTheme");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " with a value of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Additionally, the service can be used to configure your app to respond to the user's light/dark mode system preference. To configure your app to do this, invoke the service's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "enableColorSchemePreferenceHandling");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " method. If the user has configured their operating system to use the system-wide dark theme, your app will automatically be displayed with the dark theme. To disable system preference handling, invoke the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "disableColorSchemePreferenceHandling");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " method.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " The following example configures the service to respond to the user's light/dark system preference. To try it out, follow these links on how to change the setting for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Windows 10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "MacOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Additionally, the example invokes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "setDarkTheme");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " each time the switch is toggled.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "theme-switch-service-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Additional Properties");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "isDarkModeEnabledSubject");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " - The example above uses this ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "BehaviorSubject");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " in its template to determine whether dark mode is enabled. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "withRefreshRoute");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " - Set this boolean to true if you want the route to refresh each time the theme changes. This can come in handy if you have elements on the page whose styles can't be changed on the fly for some reason. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Participation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " To have the colors in your app participate in theming, ensure that the values of your color-oriented properties such as ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "background");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " take the form of CSS variables by invoking the CSS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "var");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " function with the desired color property name and an optional fallback value. This will convert the CSS color properties defined by Nova to CSS variables whose values will update to correspond to the active theme.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "nui-example-code", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Custom Themes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " It's possible to create a custom theme by doing the following:\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Provide alternate values for Nova's Less color variables defined ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Create a CSS class containing color properties that use the alternate color values. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Use Angular's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Renderer2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " to add the custom class to the element you want to apply the colors to. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " The following example applies a totally unusable clownish party theme to the root ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " element when the switch is turned on. To see how the alternate color variables and properties are defined, take a look at the less file in the source expander.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "nui-example-wrapper", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "custom-theme-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lessCode, "\n");
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _theme_switch_service_theme_switch_service_example_component__WEBPACK_IMPORTED_MODULE_2__["ThemeSwitchServiceExampleComponent"], _src_lib_docs_example_code_example_code_component__WEBPACK_IMPORTED_MODULE_3__["ExampleCodeComponent"], _custom_theme_custom_theme_example_component__WEBPACK_IMPORTED_MODULE_4__["CustomThemeExampleComponent"]],
        styles: ["[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: disc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1pbmctZG9jcy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQUE7QUFBUjtBQUZBO0VBSVksZ0JBQUE7QUFDWiIsImZpbGUiOiJ0aGVtaW5nLWRvY3MuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICB1bCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogZGlzYztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "2FH4":
    /*!**********************************************************************************************************!*\
      !*** ./demo/src/components/demo/theming sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \**********************************************************************************************************/

    /*! no static exports found */

    /***/
    function FH4(module, exports, __webpack_require__) {
      var map = {
        "./custom-theme/custom-theme.example.component.html": "uOnB",
        "./custom-theme/custom-theme.example.component.less": "VvdL",
        "./custom-theme/custom-theme.example.component.ts": "/5Gf",
        "./theme-switch-service/theme-switch-service.example.component.html": "Mr4U",
        "./theme-switch-service/theme-switch-service.example.component.ts": "lBqD",
        "./theming-docs/theming-docs.example.component.html": "TZ70",
        "./theming-docs/theming-docs.example.component.less": "I9ws",
        "./theming-docs/theming-docs.example.component.ts": "aIu8",
        "./theming.module.ts": "cN44"
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
      webpackContext.id = "2FH4";
      /***/
    },

    /***/
    "69Gb":
    /*!*********************************************************************************************************!*\
      !*** ./demo/src/components/demo/theming/theme-switch-service/theme-switch-service.example.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: ThemeSwitchServiceExampleComponent */

    /***/
    function Gb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeSwitchServiceExampleComponent", function () {
        return ThemeSwitchServiceExampleComponent;
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


      var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/switch/switch.component */
      "6CEj");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ThemeSwitchServiceExampleComponent = /*#__PURE__*/function () {
        // Inject the service
        function ThemeSwitchServiceExampleComponent(themeSwitchService) {
          _classCallCheck(this, ThemeSwitchServiceExampleComponent);

          this.themeSwitchService = themeSwitchService;
        }

        _createClass(ThemeSwitchServiceExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Configure the service to listen for changes to the system color scheme preference.
            // If the user already has dark mode enabled, the service will set the theme as soon
            // as this method is called.
            this.themeSwitchService.enableColorSchemePreferenceHandling();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Switch back to the default theme
            this.themeSwitchService.setDarkTheme(false); // Stop the service from listening for changes to the system color scheme preference.

            this.themeSwitchService.disableColorSchemePreferenceHandling();
          }
        }]);

        return ThemeSwitchServiceExampleComponent;
      }();

      ThemeSwitchServiceExampleComponent.ɵfac = function ThemeSwitchServiceExampleComponent_Factory(t) {
        return new (t || ThemeSwitchServiceExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ThemeSwitchService"]));
      };

      ThemeSwitchServiceExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ThemeSwitchServiceExampleComponent,
        selectors: [["theme-switch-service-example"]],
        decls: 3,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8950414640429407165$$DEMO_SRC_COMPONENTS_DEMO_THEMING_THEME_SWITCH_SERVICE_THEME_SWITCH_SERVICE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Dark Theme\n");
            i18n_0 = MSG_EXTERNAL_8950414640429407165$$DEMO_SRC_COMPONENTS_DEMO_THEMING_THEME_SWITCH_SERVICE_THEME_SWITCH_SERVICE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241F05479e7dc2d5177dcab1c7e0ac7df3595e4cc8d8\u241F8950414640429407165: Dark Theme\n"])));
          }

          return [[3, "value", "valueChange"], i18n_0];
        },
        template: function ThemeSwitchServiceExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-switch", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ThemeSwitchServiceExampleComponent_Template_nui_switch_valueChange_0_listener($event) {
              return ctx.themeSwitchService.setDarkTheme($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.themeSwitchService.isDarkModeEnabledSubject));
          }
        },
        directives: [_src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_2__["SwitchComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "I9ws":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/theming/theming-docs/theming-docs.example.component.less ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function I9ws(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n    ul {\n        padding-left: 40px;\n        li {\n            list-style: disc;\n        }\n    }\n}\n";
      /***/
    },

    /***/
    "LPia":
    /*!*****************************************************************************************!*\
      !*** ./demo/src/components/demo/theming/custom-theme/custom-theme.example.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: CustomThemeExampleComponent */

    /***/
    function LPia(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomThemeExampleComponent", function () {
        return CustomThemeExampleComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/switch/switch.component */
      "6CEj");

      var CustomThemeExampleComponent = /*#__PURE__*/function () {
        // Inject the RendererFactory2 for manipulating the DOM and inject the document for manipulation
        function CustomThemeExampleComponent(rendererFactory, document) {
          _classCallCheck(this, CustomThemeExampleComponent);

          this.customClassName = "clown-party-theme"; // Get the root html element

          this.containerElement = document.children[0]; // Create a renderer instance

          this.renderer = rendererFactory.createRenderer(null, null);
        }

        _createClass(CustomThemeExampleComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // cleanup
            this.renderer.removeClass(this.containerElement, this.customClassName);
          }
        }, {
          key: "setTheme",
          value: function setTheme(value) {
            // add/remove the custom class to the root html element based on the switch's value
            this.renderer[value ? "addClass" : "removeClass"](this.containerElement, this.customClassName);
          }
        }]);

        return CustomThemeExampleComponent;
      }();

      CustomThemeExampleComponent.ɵfac = function CustomThemeExampleComponent_Factory(t) {
        return new (t || CustomThemeExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      CustomThemeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CustomThemeExampleComponent,
        selectors: [["custom-theme-example"]],
        decls: 2,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9116155268546990677$$DEMO_SRC_COMPONENTS_DEMO_THEMING_CUSTOM_THEME_CUSTOM_THEME_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Clown Party Theme\n");
            i18n_0 = MSG_EXTERNAL_9116155268546990677$$DEMO_SRC_COMPONENTS_DEMO_THEMING_CUSTOM_THEME_CUSTOM_THEME_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241Fd0f6e85c4cd1b5bf3a514e420982f5214d002512\u241F9116155268546990677: Clown Party Theme\n"])));
          }

          return [[3, "valueChange"], i18n_0];
        },
        template: function CustomThemeExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-switch", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function CustomThemeExampleComponent_Template_nui_switch_valueChange_0_listener($event) {
              return ctx.setTheme($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_2__["SwitchComponent"]],
        styles: [".clown-party-theme {\n  --page-header-border-color: red;\n  --nui-color-bg-light: fuchsia;\n  --nui-color-bg-content: fuchsia;\n  --nui-color-bg-secondary: #009fc9;\n  --nui-color-semantic-ok-bg: #009fc9;\n  --nui-color-text-default: white;\n  --nui-color-text-link: #fdf40e;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS10aGVtZS5leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBO0VBQ0ksK0JBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7QUFkSiIsImZpbGUiOiJjdXN0b20tdGhlbWUuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFByb3ZpZGUgYWx0ZXJuYXRlIHZhbHVlcyBmb3IgdGhlIG5vdmEtZGVmaW5lZCBjb2xvciB2YXJpYWJsZXNcbi8vIE5vdGUgMTogVGhpcyBpcyBvbmx5IGEgc3Vic2V0IG9mIGFsbCBub3ZhLWRlZmluZWQgY29sb3JzIHRvIHByb3ZpZGUgdGhlIGRlc2lyZWQgZWZmZWN0IGZvciBkZW1vIHB1cnBvc2VzIG9ubHkuXG4vLyAgICAgICAgIFRoZSBjb21wbGV0ZSBzZXQgY2FuIGJlIGZvdW5kIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zb2xhcndpbmRzL25vdmEvYmxvYi9tYWluL3BhY2thZ2VzL2JpdHMvc3JjL3N0eWxlcy9udWktZnJhbWV3b3JrLWNvbG9ycy5sZXNzXG4vLyBOb3RlIDI6IFRoZSBhbHRlcm5hdGUgY29sb3IgdmFsdWVzIGNhbiBvcHRpb25hbGx5IGJlIHByb3ZpZGVkIGluIGEgc2VwYXJhdGUgZmlsZSBmcm9tIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50IHNob3duIGJlbG93LlxuQHBhZ2UtaGVhZGVyLWJvcmRlci1jb2xvcjogcmVkO1xuQG51aS1jb2xvci1iZy1saWdodDogZnVjaHNpYTtcbkBudWktY29sb3ItYmctY29udGVudDogZnVjaHNpYTtcbkBudWktY29sb3ItYmctc2Vjb25kYXJ5OiAjMDA5ZmM5O1xuQG51aS1jb2xvci1zZW1hbnRpYy1vay1iZzogIzAwOWZjOTtcbkBudWktY29sb3ItdGV4dC1kZWZhdWx0OiB3aGl0ZTtcbkBudWktY29sb3ItdGV4dC1saW5rOiAjZmRmNDBlO1xuXG4vLyBBc3NpZ24gdGhlIGFsdGVybmF0ZSBjb2xvcnMgZGVmaW5lZCBhYm92ZSB0byB0aGUgY29ycmVzcG9uZGluZyBwcm9wZXJ0aWVzIGluIHRoZSB0aGVtZSdzIENTUyBjbGFzc1xuLy8gTm90ZTogQXNzaWduaW5nIHRoZSBwcm9wZXJ0eSB2YWx1ZXMgY2FuIGJlIGF1dG9tYXRlZCBieSB0aGUgbWV0aG9kIHNob3duIGhlcmU6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vc29sYXJ3aW5kcy9ub3ZhL2Jsb2IvbWFpbi9wYWNrYWdlcy9iaXRzL3NyYy9zdHlsZXMvbnVpLWZyYW1ld29yay10aGVtZS5sZXNzXG4uY2xvd24tcGFydHktdGhlbWUge1xuICAgIC0tcGFnZS1oZWFkZXItYm9yZGVyLWNvbG9yOiBAcGFnZS1oZWFkZXItYm9yZGVyLWNvbG9yO1xuICAgIC0tbnVpLWNvbG9yLWJnLWxpZ2h0OiBAbnVpLWNvbG9yLWJnLWxpZ2h0O1xuICAgIC0tbnVpLWNvbG9yLWJnLWNvbnRlbnQ6IEBudWktY29sb3ItYmctY29udGVudDtcbiAgICAtLW51aS1jb2xvci1iZy1zZWNvbmRhcnk6IEBudWktY29sb3ItYmctc2Vjb25kYXJ5O1xuICAgIC0tbnVpLWNvbG9yLXNlbWFudGljLW9rLWJnOiBAbnVpLWNvbG9yLXNlbWFudGljLW9rLWJnO1xuICAgIC0tbnVpLWNvbG9yLXRleHQtZGVmYXVsdDogQG51aS1jb2xvci10ZXh0LWRlZmF1bHQ7XG4gICAgLS1udWktY29sb3ItdGV4dC1saW5rOiBAbnVpLWNvbG9yLXRleHQtbGluaztcbn1cbiJdfQ== */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Mr4U":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/theming/theme-switch-service/theme-switch-service.example.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Mr4U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-switch (valueChange)=\"themeSwitchService.setDarkTheme($event)\"\n            [value]=\"themeSwitchService.isDarkModeEnabledSubject | async\"\n            i18n>\n    Dark Theme\n</nui-switch>\n";
      /***/
    },

    /***/
    "TZ70":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/theming/theming-docs/theming-docs.example.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TZ70(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Theming</h1>\n\n<p>\n    Nova currently supports two themes out of the box: <em>light</em> and <em>dark</em>. By default,\n    apps using Nova are styled with the light theme.\n</p>\n\n<h2>Theme Switch Service</h2>\n<p>\n    To configure your app to use the dark theme, you can add the <code>dark-nova-theme</code> class to\n    the app's root <code>html</code> element. But, you don't have to do it manually. Nova provides a\n    service that can be used to toggle the root <code>html</code> element class on demand. To enable the\n    dark theme, inject the\n    <code><a href=\"../injectables/ThemeSwitchService.html\" target=\"_blank\">ThemeSwitchService</a></code>\n    into a component and invoke its\n    <code><a href=\"../injectables/ThemeSwitchService.html#setDarkTheme\" target=\"_blank\">setDarkTheme</a></code>\n    method with a value of <code>true</code>. To disable the dark theme invoke\n    <code><a href=\"../injectables/ThemeSwitchService.html#setDarkTheme\" target=\"_blank\">setDarkTheme</a></code>\n    with a value of <code>false</code>.\n</p>\n<p>\n    Additionally, the service can be used to configure your app to respond to the user's light/dark mode\n    system preference. To configure your app to do this, invoke the service's\n    <code><a href=\"../injectables/ThemeSwitchService.html#enableColorSchemePreferenceHandling\" target=\"_blank\">enableColorSchemePreferenceHandling</a></code>\n    method. If the user has configured their operating system to use the system-wide dark theme, your app\n    will automatically be displayed with the dark theme. To disable system preference handling, invoke the\n    <code><a href=\"../injectables/ThemeSwitchService.html#disableColorSchemePreferenceHandling\" target=\"_blank\">disableColorSchemePreferenceHandling</a></code>\n    method.\n</p>\n<p>\n    The following example configures the service to respond to the user's light/dark system preference.\n    To try it out, follow these links on how to change the setting for\n    <a href=\"https://docs.microsoft.com/en-us/windows-hardware/customize/desktop/set-dark-mode\" target=\"_blank\">Windows 10</a>\n    and\n    <a href=\"https://support.apple.com/en-us/HT208976\" target=\"_blank\">MacOS</a>.\n</p>\n<p>\n    Additionally, the example invokes\n    <code><a href=\"../injectables/ThemeSwitchService.html#setDarkTheme\" target=\"_blank\">setDarkTheme</a></code>\n    with <code>true</code> or <code>false</code> each time the switch is toggled.\n</p>\n<nui-example-wrapper filenamePrefix=\"theme-switch-service.example\" exampleTitle=\"Theme Switch Service\">\n    <theme-switch-service-example></theme-switch-service-example>\n</nui-example-wrapper>\n\n<h3>Additional Properties</h3>\n<ul>\n    <li>\n        <code><a href=\"../injectables/ThemeSwitchService.html#isDarkModeEnabledSubject\" target=\"_blank\">isDarkModeEnabledSubject</a></code> -\n        The example above uses this <code>BehaviorSubject</code> in its template to determine whether\n        dark mode is enabled.\n    </li>\n    <li>\n        <code><a href=\"../injectables/ThemeSwitchService.html#withRefreshRoute\" target=\"_blank\">withRefreshRoute</a></code> -\n        Set this boolean to true if you want the route to refresh each time the theme changes. This can come in handy\n        if you have elements on the page whose styles can't be changed on the fly for some reason.\n    </li>\n</ul>\n\n<h2>Participation</h2>\n<p>\n    To have the colors in your app participate in theming, ensure that the values of your color-oriented\n    properties such as <code>background</code> or <code>border</code> take the form of CSS variables by\n    invoking the CSS\n    <code><a href=\"https://www.w3schools.com/css/css3_variables.asp\" target=\"_blank\">var</a></code>\n    function with the desired color property name and an optional fallback value. This will\n    convert the CSS color properties defined by Nova to CSS variables whose values will update to\n    correspond to the active theme.\n</p>\n<nui-example-code language=\"less\">\n    {{lessCode}}\n</nui-example-code>\n\n<h2>Custom Themes</h2>\n<p>\n    It's possible to create a custom theme by doing the following:\n</p>\n<ol>\n    <li>\n        Provide alternate values for Nova's Less color variables defined\n        <a href=\"https://github.com/solarwinds/nova/blob/main/packages/bits/src/styles/nui-framework-colors.less\" target=\"_blank\">here</a>.\n    </li>\n    <li>\n        Create a CSS class containing color properties that use the alternate color values.\n    </li>\n    <li>\n        Use Angular's\n        <code><a href=\"https://angular.io/api/core/Renderer2\" target=\"_blank\">Renderer2</a></code> to add\n        the custom class to the element you want to apply the colors to.\n    </li>\n</ol>\n<p>\n    The following example applies a totally unusable clownish party theme to the root <code>html</code>\n    element when the switch is turned on. To see how the alternate color variables and properties are\n    defined, take a look at the less file in the source expander.\n</p>\n<nui-example-wrapper filenamePrefix=\"custom-theme.example\" exampleTitle=\"Custom Themes\">\n    <custom-theme-example></custom-theme-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "VvdL":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/theming/custom-theme/custom-theme.example.component.less ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VvdL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "// Provide alternate values for the nova-defined color variables\n// Note 1: This is only a subset of all nova-defined colors to provide the desired effect for demo purposes only.\n//         The complete set can be found here: https://github.com/solarwinds/nova/blob/main/packages/bits/src/styles/nui-framework-colors.less\n// Note 2: The alternate color values can optionally be provided in a separate file from the property assignment shown below.\n@page-header-border-color: red;\n@nui-color-bg-light: fuchsia;\n@nui-color-bg-content: fuchsia;\n@nui-color-bg-secondary: #009fc9;\n@nui-color-semantic-ok-bg: #009fc9;\n@nui-color-text-default: white;\n@nui-color-text-link: #fdf40e;\n\n// Assign the alternate colors defined above to the corresponding properties in the theme's CSS class\n// Note: Assigning the property values can be automated by the method shown here:\n// https://github.com/solarwinds/nova/blob/main/packages/bits/src/styles/nui-framework-theme.less\n.clown-party-theme {\n    --page-header-border-color: @page-header-border-color;\n    --nui-color-bg-light: @nui-color-bg-light;\n    --nui-color-bg-content: @nui-color-bg-content;\n    --nui-color-bg-secondary: @nui-color-bg-secondary;\n    --nui-color-semantic-ok-bg: @nui-color-semantic-ok-bg;\n    --nui-color-text-default: @nui-color-text-default;\n    --nui-color-text-link: @nui-color-text-link;\n}\n";
      /***/
    },

    /***/
    "aIu8":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/theming/theming-docs/theming-docs.example.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aIu8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"theming-docs-example\",\n    templateUrl: \"./theming-docs.example.component.html\",\n    styleUrls: [\"./theming-docs.example.component.less\"],\n})\n\nexport class ThemingDocsExampleComponent {\n    public lessCode = `\n@import (reference) \"nui-framework-variables\";\n\n.sample-class {\n    background: var(--nui-color-bg-workspace, @nui-color-bg-workspace)\n    border: 1px solid var(--nui-color-line-default, @nui-color-line-default);\n}`;\n}\n";
      /***/
    },

    /***/
    "cN44":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/theming/theming.module.ts ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cN44(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiDocsModule,\n    NuiMessageModule,\n    NuiSwitchModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport { CustomThemeExampleComponent } from \"./custom-theme/custom-theme.example.component\";\nimport { ThemeSwitchServiceExampleComponent } from \"./theme-switch-service/theme-switch-service.example.component\";\nimport { ThemingDocsExampleComponent } from \"./theming-docs/theming-docs.example.component\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: ThemingDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n        },\n    },\n    {\n        path: \"theme-switch-service\",\n        component: ThemeSwitchServiceExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"custom-theme\",\n        component: CustomThemeExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiMessageModule,\n        NuiDocsModule,\n        NuiSwitchModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        CustomThemeExampleComponent,\n        ThemingDocsExampleComponent,\n        ThemeSwitchServiceExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class ThemingModule {\n}\n";
      /***/
    },

    /***/
    "lBqD":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/theming/theme-switch-service/theme-switch-service.example.component.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lBqD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnDestroy, OnInit } from \"@angular/core\";\nimport { ThemeSwitchService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"theme-switch-service-example\",\n    templateUrl: \"./theme-switch-service.example.component.html\",\n})\n\nexport class ThemeSwitchServiceExampleComponent implements OnInit, OnDestroy {\n    // Inject the service\n    constructor(public themeSwitchService: ThemeSwitchService) {}\n\n    public ngOnInit() {\n        // Configure the service to listen for changes to the system color scheme preference.\n        // If the user already has dark mode enabled, the service will set the theme as soon\n        // as this method is called.\n        this.themeSwitchService.enableColorSchemePreferenceHandling();\n    }\n\n    public ngOnDestroy() {\n        // Switch back to the default theme\n        this.themeSwitchService.setDarkTheme(false);\n        // Stop the service from listening for changes to the system color scheme preference.\n        this.themeSwitchService.disableColorSchemePreferenceHandling();\n    }\n}\n";
      /***/
    },

    /***/
    "qQEB":
    /*!************************************************************!*\
      !*** ./demo/src/components/demo/theming/theming.module.ts ***!
      \************************************************************/

    /*! exports provided: ThemingModule */

    /***/
    function qQEB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemingModule", function () {
        return ThemingModule;
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


      var _custom_theme_custom_theme_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./custom-theme/custom-theme.example.component */
      "LPia");
      /* harmony import */


      var _theme_switch_service_theme_switch_service_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./theme-switch-service/theme-switch-service.example.component */
      "69Gb");
      /* harmony import */


      var _theming_docs_theming_docs_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./theming-docs/theming-docs.example.component */
      "2ATK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _theming_docs_theming_docs_example_component__WEBPACK_IMPORTED_MODULE_4__["ThemingDocsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga
          }
        }
      }, {
        path: "theme-switch-service",
        component: _theme_switch_service_theme_switch_service_example_component__WEBPACK_IMPORTED_MODULE_3__["ThemeSwitchServiceExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "custom-theme",
        component: _custom_theme_custom_theme_example_component__WEBPACK_IMPORTED_MODULE_2__["CustomThemeExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ThemingModule = function ThemingModule() {
        _classCallCheck(this, ThemingModule);
      };

      ThemingModule.ɵfac = function ThemingModule_Factory(t) {
        return new (t || ThemingModule)();
      };

      ThemingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: ThemingModule
      });
      ThemingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("2FH4");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSwitchModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ThemingModule, {
          declarations: [_custom_theme_custom_theme_example_component__WEBPACK_IMPORTED_MODULE_2__["CustomThemeExampleComponent"], _theming_docs_theming_docs_example_component__WEBPACK_IMPORTED_MODULE_4__["ThemingDocsExampleComponent"], _theme_switch_service_theme_switch_service_example_component__WEBPACK_IMPORTED_MODULE_3__["ThemeSwitchServiceExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSwitchModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "uOnB":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/theming/custom-theme/custom-theme.example.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uOnB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-switch (valueChange)=\"setTheme($event)\" i18n>\n    Clown Party Theme\n</nui-switch>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-theming-theming-module-es5.js.map