import"./chunk-VBFW7A5V.js";var o=`@import (reference) "@nova-ui/bits/sdk/less/nui-framework-variables";
@import (reference) "@nova-ui/bits/sdk/less/mixins";

.dashboard {
    height: 800px;
}

// Styling for the custom configurator section
.kpi-description-configuration {
    &__accordion-content {
        padding: @nui-space-md @nui-space-md @nui-space-md
            (@nui-space-md * 2 + @icon-size-default);
    }

    &__custom-content-container {
        .setCssVariable(background-color, nui-color-bg-dark);
        border-radius: @nui-radius-default;
    }

    &__custom-content-header,
    &__custom-content {
        .setCssVariable(color, nui-color-text-light);
    }
}
`;export{o as default};
