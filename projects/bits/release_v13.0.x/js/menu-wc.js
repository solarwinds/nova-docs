'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@nova-ui/bits documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Additional Documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/nova-styles.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-ce7aec8ff99d4b4f07f1f692bc1aa99970e5c85d9a39829aa468d406edd2b6d41fcde489ced10979390a7a09b0b25f0e3bd12f138d3dc3c29e33e7a26835d773"' : 'data-target="#xs-additional-page-ce7aec8ff99d4b4f07f1f692bc1aa99970e5c85d9a39829aa468d406edd2b6d41fcde489ced10979390a7a09b0b25f0e3bd12f138d3dc3c29e33e7a26835d773"' }>
                                                <span class="link-name">Nova Styles</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-ce7aec8ff99d4b4f07f1f692bc1aa99970e5c85d9a39829aa468d406edd2b6d41fcde489ced10979390a7a09b0b25f0e3bd12f138d3dc3c29e33e7a26835d773"' : 'id="xs-additional-page-ce7aec8ff99d4b4f07f1f692bc1aa99970e5c85d9a39829aa468d406edd2b6d41fcde489ced10979390a7a09b0b25f0e3bd12f138d3dc3c29e33e7a26835d773"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/nova-styles/typography.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Typography</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/nova-styles/framework-colors.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Framework Colors</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/nova-styles/framework-colors-dark.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Framework Colors Dark</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/nova-styles/theming.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Theming</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/nova-styles/design-tokens.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Design Tokens</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/nova-styles/links.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Links</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/nova-styles/badge.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Badge</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/nova-styles/tag.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Tag</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/convenience-components.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-ccd984dd346f07ca1092098c8f9e98f40e13c6fa7e3f858dc5d8842af383696d95ab16ecc9f1cd4f8c29bde17fabd031e48dc9b45d50de9634b224a624f066a3"' : 'data-target="#xs-additional-page-ccd984dd346f07ca1092098c8f9e98f40e13c6fa7e3f858dc5d8842af383696d95ab16ecc9f1cd4f8c29bde17fabd031e48dc9b45d50de9634b224a624f066a3"' }>
                                                <span class="link-name">Convenience Components</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-ccd984dd346f07ca1092098c8f9e98f40e13c6fa7e3f858dc5d8842af383696d95ab16ecc9f1cd4f8c29bde17fabd031e48dc9b45d50de9634b224a624f066a3"' : 'id="xs-additional-page-ccd984dd346f07ca1092098c8f9e98f40e13c6fa7e3f858dc5d8842af383696d95ab16ecc9f1cd4f8c29bde17fabd031e48dc9b45d50de9634b224a624f066a3"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/convenience-components/timeframebar.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">TimeFrameBar</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/external-libraries.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-cdbff9b708468bf7fb5cd23c77b273efc800623b7a39dfa80115105b1143889074e892d101c92f754b5b0aa2d63c2e5bc03b30a98671a9602911a5ac3c2cac1e"' : 'data-target="#xs-additional-page-cdbff9b708468bf7fb5cd23c77b273efc800623b7a39dfa80115105b1143889074e892d101c92f754b5b0aa2d63c2e5bc03b30a98671a9602911a5ac3c2cac1e"' }>
                                                <span class="link-name">External Libraries</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-cdbff9b708468bf7fb5cd23c77b273efc800623b7a39dfa80115105b1143889074e892d101c92f754b5b0aa2d63c2e5bc03b30a98671a9602911a5ac3c2cac1e"' : 'id="xs-additional-page-cdbff9b708468bf7fb5cd23c77b273efc800623b7a39dfa80115105b1143889074e892d101c92f754b5b0aa2d63c2e5bc03b30a98671a9602911a5ac3c2cac1e"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/external-libraries/drag-and-drop.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Drag and Drop</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/external-libraries/tree.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Tree</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/schematics.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-4702d564bab336815b77c4b0cf1cb3b718ffe66f468af7641d60880cf0762b748d242ef3ad482b4935e1d107d98616f37b24ab597b8a5870eafe7d1134cd44b4"' : 'data-target="#xs-additional-page-4702d564bab336815b77c4b0cf1cb3b718ffe66f468af7641d60880cf0762b748d242ef3ad482b4935e1d107d98616f37b24ab597b8a5870eafe7d1134cd44b4"' }>
                                                <span class="link-name">Schematics</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-4702d564bab336815b77c4b0cf1cb3b718ffe66f468af7641d60880cf0762b748d242ef3ad482b4935e1d107d98616f37b24ab597b8a5870eafe7d1134cd44b4"' : 'id="xs-additional-page-4702d564bab336815b77c4b0cf1cb3b718ffe66f468af7641d60880cf0762b748d242ef3ad482b4935e1d107d98616f37b24ab597b8a5870eafe7d1134cd44b4"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/schematics/filtered-view.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Filtered View</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/schematics/filter-group.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Filter Group</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/schematics/list.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">List</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/schematics/table.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Table</a>
                                            </li>
                                        </ul>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/NuiLayoutModule.html" data-type="entity-link" >NuiLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NuiLayoutModule-0fa95abcfd4cd263e267ba39f3ede8583b92a084ec81000c6caa9a17ab538d5ee5cefdbae89a0981f9856250073bee69ef086e5e2a3e35101d9791cbe0638084"' : 'data-target="#xs-components-links-module-NuiLayoutModule-0fa95abcfd4cd263e267ba39f3ede8583b92a084ec81000c6caa9a17ab538d5ee5cefdbae89a0981f9856250073bee69ef086e5e2a3e35101d9791cbe0638084"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NuiLayoutModule-0fa95abcfd4cd263e267ba39f3ede8583b92a084ec81000c6caa9a17ab538d5ee5cefdbae89a0981f9856250073bee69ef086e5e2a3e35101d9791cbe0638084"' :
                                            'id="xs-components-links-module-NuiLayoutModule-0fa95abcfd4cd263e267ba39f3ede8583b92a084ec81000c6caa9a17ab538d5ee5cefdbae89a0981f9856250073bee69ef086e5e2a3e35101d9791cbe0638084"' }>
                                            <li class="link">
                                                <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SheetGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SheetGroupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PopupAdapterModule.html" data-type="entity-link" >PopupAdapterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PopupAdapterModule-b6dcc4810aac63e3a5acb9c24b23260b02bad587c4b10d98021df9fe75d3366363950d07b5926a33782276d62d842bc620f6a103253ccbef5ad026bf85a886d8"' : 'data-target="#xs-components-links-module-PopupAdapterModule-b6dcc4810aac63e3a5acb9c24b23260b02bad587c4b10d98021df9fe75d3366363950d07b5926a33782276d62d842bc620f6a103253ccbef5ad026bf85a886d8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PopupAdapterModule-b6dcc4810aac63e3a5acb9c24b23260b02bad587c4b10d98021df9fe75d3366363950d07b5926a33782276d62d842bc620f6a103253ccbef5ad026bf85a886d8"' :
                                            'id="xs-components-links-module-PopupAdapterModule-b6dcc4810aac63e3a5acb9c24b23260b02bad587c4b10d98021df9fe75d3366363950d07b5926a33782276d62d842bc620f6a103253ccbef5ad026bf85a886d8"' }>
                                            <li class="link">
                                                <a href="components/PopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PopupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BreadcrumbComponent.html" data-type="entity-link" >BreadcrumbComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BusyComponent.html" data-type="entity-link" >BusyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ButtonComponent.html" data-type="entity-link" >ButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CheckboxComponent.html" data-type="entity-link" >CheckboxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CheckboxGroupComponent.html" data-type="entity-link" >CheckboxGroupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChipsComponent.html" data-type="entity-link" >ChipsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChipsOverflowComponent.html" data-type="entity-link" >ChipsOverflowComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ComboboxComponent.html" data-type="entity-link" class="deprecated-name">ComboboxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ComboboxV2Component.html" data-type="entity-link" >ComboboxV2Component</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomValidationMessageComponent.html" data-type="entity-link" >CustomValidationMessageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DatePickerComponent.html" data-type="entity-link" >DatePickerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DateTimePickerComponent.html" data-type="entity-link" >DateTimePickerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DialogComponent.html" data-type="entity-link" >DialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ExpanderComponent.html" data-type="entity-link" >ExpanderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormFieldComponent.html" data-type="entity-link" >FormFieldComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconComponent.html" data-type="entity-link" >IconComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ImageComponent.html" data-type="entity-link" >ImageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MenuComponent.html" data-type="entity-link" >MenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MessageComponent.html" data-type="entity-link" >MessageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OverlayComponent.html" data-type="entity-link" >OverlayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaginatorComponent.html" data-type="entity-link" >PaginatorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PanelComponent.html" data-type="entity-link" >PanelComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PopoverComponent.html" data-type="entity-link" >PopoverComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PopupDeprecatedComponent.html" data-type="entity-link" class="deprecated-name">PopupDeprecatedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProgressComponent.html" data-type="entity-link" >ProgressComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/QuickPickerComponent.html" data-type="entity-link" >QuickPickerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RadioGroupComponent.html" data-type="entity-link" >RadioGroupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RepeatComponent.html" data-type="entity-link" >RepeatComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchComponent.html" data-type="entity-link" >SearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SelectComponent.html" data-type="entity-link" class="deprecated-name">SelectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SelectV2Component.html" data-type="entity-link" >SelectV2Component</a>
                            </li>
                            <li class="link">
                                <a href="components/SorterComponent.html" data-type="entity-link" >SorterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpinnerComponent.html" data-type="entity-link" >SpinnerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SwitchComponent.html" data-type="entity-link" >SwitchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TabHeadingGroupComponent.html" data-type="entity-link" >TabHeadingGroupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TableComponent.html" data-type="entity-link" >TableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TextboxComponent.html" data-type="entity-link" >TextboxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TextboxNumberComponent.html" data-type="entity-link" >TextboxNumberComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimeFrameBarComponent.html" data-type="entity-link" >TimeFrameBarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimeFramePickerComponent.html" data-type="entity-link" >TimeFramePickerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimePickerComponent.html" data-type="entity-link" >TimePickerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ToastComponent.html" data-type="entity-link" >ToastComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ToolbarComponent.html" data-type="entity-link" >ToolbarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WizardComponent.html" data-type="entity-link" >WizardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WizardHorizontalComponent.html" data-type="entity-link" >WizardHorizontalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WizardStepComponent.html" data-type="entity-link" >WizardStepComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/BaseSelect.html" data-type="entity-link" class="deprecated-name">BaseSelect</a>
                                </li>
                                <li class="link">
                                    <a href="directives/BaseSelectV2.html" data-type="entity-link" >BaseSelectV2</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ClickInterceptorDirective.html" data-type="entity-link" >ClickInterceptorDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/DndDropTargetDirective.html" data-type="entity-link" >DndDropTargetDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/MarkAsSelectedItemDirective.html" data-type="entity-link" >MarkAsSelectedItemDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TableStickyHeaderDirective.html" data-type="entity-link" >TableStickyHeaderDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TableVirtualScrollDirective.html" data-type="entity-link" class="deprecated-name">TableVirtualScrollDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TableVirtualScrollLinearDirective.html" data-type="entity-link" >TableVirtualScrollLinearDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TooltipDirective.html" data-type="entity-link" >TooltipDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/WizardDirective.html" data-type="entity-link" >WizardDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/WizardStepFooterDirective.html" data-type="entity-link" >WizardStepFooterDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/WizardStepLabelDirective.html" data-type="entity-link" >WizardStepLabelDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DataSourceFeatures.html" data-type="entity-link" >DataSourceFeatures</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventDefinition.html" data-type="entity-link" >EventDefinition</a>
                            </li>
                            <li class="link">
                                <a href="classes/IEvent.html" data-type="entity-link" >IEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoopDataSourceService.html" data-type="entity-link" >NoopDataSourceService</a>
                            </li>
                            <li class="link">
                                <a href="classes/NuiFormFieldControl.html" data-type="entity-link" >NuiFormFieldControl</a>
                            </li>
                            <li class="link">
                                <a href="classes/OverlayUtilitiesService.html" data-type="entity-link" >OverlayUtilitiesService</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectionModel.html" data-type="entity-link" >SelectionModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableVirtualScrollLinearStrategy.html" data-type="entity-link" >TableVirtualScrollLinearStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableVirtualScrollStrategy.html" data-type="entity-link" class="deprecated-name">TableVirtualScrollStrategy</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ChipsOverflowService.html" data-type="entity-link" >ChipsOverflowService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientSideDataSource.html" data-type="entity-link" >ClientSideDataSource</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataFilterService.html" data-type="entity-link" >DataFilterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataSourceService.html" data-type="entity-link" >DataSourceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorStateMatcher.html" data-type="entity-link" >ErrorStateMatcher</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HistoryStorage.html" data-type="entity-link" >HistoryStorage</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListService.html" data-type="entity-link" >ListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalFilteringDataSource.html" data-type="entity-link" class="deprecated-name">LocalFilteringDataSource</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuKeyControlService.html" data-type="entity-link" >MenuKeyControlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OptionKeyControlService.html" data-type="entity-link" >OptionKeyControlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OverlayContainerService.html" data-type="entity-link" >OverlayContainerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OverlayCustomContainer.html" data-type="entity-link" >OverlayCustomContainer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OverlayPositionService.html" data-type="entity-link" >OverlayPositionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlunkerFiles.html" data-type="entity-link" >PlunkerFiles</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlunkerProjectService.html" data-type="entity-link" >PlunkerProjectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PopoverPositionService.html" data-type="entity-link" >PopoverPositionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PopupContainerService.html" data-type="entity-link" >PopupContainerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelectedItemsKeyControlService.html" data-type="entity-link" >SelectedItemsKeyControlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServerSideDataSource.html" data-type="entity-link" >ServerSideDataSource</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SorterKeyboardService.html" data-type="entity-link" >SorterKeyboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableStateHandlerService.html" data-type="entity-link" >TableStateHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TabNavigationService.html" data-type="entity-link" >TabNavigationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeSwitchService.html" data-type="entity-link" >ThemeSwitchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimePickerKeyboardService.html" data-type="entity-link" >TimePickerKeyboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToolbarKeyboardService.html" data-type="entity-link" >ToolbarKeyboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UnitConversionService.html" data-type="entity-link" >UnitConversionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VirtualViewportManager.html" data-type="entity-link" >VirtualViewportManager</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BreadcrumbItem.html" data-type="entity-link" >BreadcrumbItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClickableRowOptions.html" data-type="entity-link" >ClickableRowOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColumnType.html" data-type="entity-link" >ColumnType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColumnWidthInfo.html" data-type="entity-link" >ColumnWidthInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ComponentChange.html" data-type="entity-link" >ComponentChange</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DraggedOverCell.html" data-type="entity-link" >DraggedOverCell</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IActiveToast.html" data-type="entity-link" >IActiveToast</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBrokerValue.html" data-type="entity-link" >IBrokerValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBusyConfig.html" data-type="entity-link" >IBusyConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICache.html" data-type="entity-link" >ICache</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICheckboxComponent.html" data-type="entity-link" >ICheckboxComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChipRemoved.html" data-type="entity-link" >IChipRemoved</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChipsGroup.html" data-type="entity-link" >IChipsGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChipsItem.html" data-type="entity-link" >IChipsItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChipsItemsSource.html" data-type="entity-link" >IChipsItemsSource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IconData.html" data-type="entity-link" >IconData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfirmationDialogOptions.html" data-type="entity-link" >IConfirmationDialogOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataField.html" data-type="entity-link" >IDataField</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataFieldsConfig.html" data-type="entity-link" >IDataFieldsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataSource.html" data-type="entity-link" >IDataSource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataSourceDrilldown.html" data-type="entity-link" >IDataSourceDrilldown</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataSourceError.html" data-type="entity-link" >IDataSourceError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataSourceFeature.html" data-type="entity-link" >IDataSourceFeature</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataSourceFeatures.html" data-type="entity-link" >IDataSourceFeatures</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataSourceFeaturesConfiguration.html" data-type="entity-link" >IDataSourceFeaturesConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataSourceOutput.html" data-type="entity-link" >IDataSourceOutput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDialogOptions.html" data-type="entity-link" >IDialogOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDndItemDropped.html" data-type="entity-link" >IDndItemDropped</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEdgeDefinerMeasurements.html" data-type="entity-link" >IEdgeDefinerMeasurements</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEdgeDetectionCoordinates.html" data-type="entity-link" >IEdgeDetectionCoordinates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEdgeDetectionProperties.html" data-type="entity-link" >IEdgeDetectionProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEdgeDetectionResult.html" data-type="entity-link" >IEdgeDetectionResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEdgeDetectionService.html" data-type="entity-link" >IEdgeDetectionService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IElementInfo.html" data-type="entity-link" >IElementInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEventDefinition.html" data-type="entity-link" >IEventDefinition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEventPropagationService.html" data-type="entity-link" >IEventPropagationService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFilter.html" data-type="entity-link" >IFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFilterGroup.html" data-type="entity-link" >IFilterGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFilteringOutputs.html" data-type="entity-link" >IFilteringOutputs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFilteringParticipant.html" data-type="entity-link" >IFilteringParticipant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFilteringParticipants.html" data-type="entity-link" >IFilteringParticipants</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFilterItem.html" data-type="entity-link" >IFilterItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFilterPub.html" data-type="entity-link" >IFilterPub</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFilters.html" data-type="entity-link" >IFilters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFocusableElement.html" data-type="entity-link" >IFocusableElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHighlightArgs.html" data-type="entity-link" >IHighlightArgs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IImagesPresetItem.html" data-type="entity-link" >IImagesPresetItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IItemsReorderedEvent.html" data-type="entity-link" >IItemsReorderedEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMap.html" data-type="entity-link" >IMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMenuGroup.html" data-type="entity-link" >IMenuGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMenuItem.html" data-type="entity-link" >IMenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMultiFilter.html" data-type="entity-link" >IMultiFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMultiFilterMetadata.html" data-type="entity-link" >IMultiFilterMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INotificationService.html" data-type="entity-link" >INotificationService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INovaFilteringOutputs.html" data-type="entity-link" >INovaFilteringOutputs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INovaFilters.html" data-type="entity-link" >INovaFilters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOption.html" data-type="entity-link" >IOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOptionedComponent.html" data-type="entity-link" >IOptionedComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOptionValueObject.html" data-type="entity-link" >IOptionValueObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOverlayComponent.html" data-type="entity-link" >IOverlayComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOverlayPositionServiceConfig.html" data-type="entity-link" >IOverlayPositionServiceConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPaginatorItem.html" data-type="entity-link" >IPaginatorItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPopupActiveOptions.html" data-type="entity-link" >IPopupActiveOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IQuickPickPreset.html" data-type="entity-link" >IQuickPickPreset</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IQuickPickPresetDictionary.html" data-type="entity-link" >IQuickPickPresetDictionary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRange.html" data-type="entity-link" >IRange</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRepeatFilter.html" data-type="entity-link" >IRepeatFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRepeatItemConfig.html" data-type="entity-link" >IRepeatItemConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IResizeConfig.html" data-type="entity-link" >IResizeConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISearchService.html" data-type="entity-link" >ISearchService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISelectChangedEvent.html" data-type="entity-link" >ISelectChangedEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISelectGroup.html" data-type="entity-link" >ISelectGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISelection.html" data-type="entity-link" >ISelection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISelectorFilter.html" data-type="entity-link" >ISelectorFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISelectorState.html" data-type="entity-link" >ISelectorState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISortedItem.html" data-type="entity-link" >ISortedItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISorterChanges.html" data-type="entity-link" >ISorterChanges</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISorterFilter.html" data-type="entity-link" >ISorterFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITableSortingState.html" data-type="entity-link" >ITableSortingState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITableState.html" data-type="entity-link" >ITableState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITabNavigationService.html" data-type="entity-link" >ITabNavigationService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeframe.html" data-type="entity-link" >ITimeframe</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeFramePreset.html" data-type="entity-link" >ITimeFramePreset</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeFramePresetDictionary.html" data-type="entity-link" >ITimeFramePresetDictionary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToastConfig.html" data-type="entity-link" >IToastConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToastDeclaration.html" data-type="entity-link" >IToastDeclaration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToastRef.html" data-type="entity-link" >IToastRef</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToastService.html" data-type="entity-link" >IToastService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToolbarGroupContent.html" data-type="entity-link" >IToolbarGroupContent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToolbarSelectionState.html" data-type="entity-link" >IToolbarSelectionState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITypedIconData.html" data-type="entity-link" >ITypedIconData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITypedRepeatItem.html" data-type="entity-link" >ITypedRepeatItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUnitConversionConstants.html" data-type="entity-link" >IUnitConversionConstants</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUnitConversionResult.html" data-type="entity-link" >IUnitConversionResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVirtualPageConfig.html" data-type="entity-link" >IVirtualPageConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVirtualViewportResetOptions.html" data-type="entity-link" >IVirtualViewportResetOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWizardConfig.html" data-type="entity-link" >IWizardConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWizardSelectionEvent.html" data-type="entity-link" >IWizardSelectionEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWizardState.html" data-type="entity-link" >IWizardState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWizardStepComponent.html" data-type="entity-link" >IWizardStepComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWizardStepStateConfig.html" data-type="entity-link" >IWizardStepStateConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWizardWaitEvent.html" data-type="entity-link" >IWizardWaitEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Paginator.html" data-type="entity-link" >Paginator</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Repeat.html" data-type="entity-link" >Repeat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Selector.html" data-type="entity-link" >Selector</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableCellEdgeHighlight.html" data-type="entity-link" >TableCellEdgeHighlight</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableRowData.html" data-type="entity-link" >TableRowData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypedAnimationEvent.html" data-type="entity-link" >TypedAnimationEvent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/HighlightPipe.html" data-type="entity-link" >HighlightPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/LimitToPipe.html" data-type="entity-link" >LimitToPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/SliceRangePipe.html" data-type="entity-link" >SliceRangePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/TimeFrameFormatPipe.html" data-type="entity-link" >TimeFrameFormatPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/UnitConversionPipe.html" data-type="entity-link" >UnitConversionPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});