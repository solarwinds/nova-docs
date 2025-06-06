import"./chunk-XR34LRGE.js";var o=`@import (reference) "nui-framework-variables";
@import (reference) "mixins";

@drop-zone-min-height: 50px;

:host {
    display: flex;
    padding: @nui-space-sm;
    width: 100%;
    min-height: @drop-zone-min-height;
    border-style: dashed; // TODO: no border-style-dashed in NUI
    border-width: @nui-line-default;
    .setCssVariable(border-color, nui-color-line-default);
    &.nui-file-drop {
        &--active,
        &--error {
            border-width: @nui-line-fat;
            border-style: solid;
        }
        &--active {
            .setCssVariable(border-color, nui-color-selected-contrast);
            .setCssVariable(background-color, nui-color-busy-default);
        }
        &--error {
            .setCssVariable(border-color, nui-color-line-critical);
            .setCssVariable(background-color, nui-color-busy-destructive);
        }
    }
}
`;export{o as default};
