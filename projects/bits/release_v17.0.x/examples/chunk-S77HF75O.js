import"./chunk-XR34LRGE.js";var i=`@import (reference) "nui-framework-variables";
@import (reference)
    "../../../../../../src/styles/components/combobox-v2-addons.less";
@import (reference) "mixins";

nui-select-v2 {
    width: 320px;
    height: 36px;
}

nui-select-v2-option {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(.selected) {
        .setCssVariable(color, primary_blue) !important;
    }

    &.selected {
        .setCssVariable(background-color, nui-color-selected) !important;
    }
}

.custom-container {
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: @nui-space-xs @nui-space-sm;
}

.custom-input-template {
    display: flex;
    align-items: center;

    .setCssVariable(color, primary_blue);
    font-family: @font-family-open-sans;
    font-size: @nui-font-size-hero;
    font-weight: @nui-font-weight-regular;
    line-height: @nui-line-height-big;

    nui-icon {
        position: relative;
        top: -4px;
    }
}

.custom-box {
    .nui-combobox-v2__popup-box();
    width: 100%;
    max-width: unset !important;
    justify-content: flex-start !important;
}
`;export{i as default};
