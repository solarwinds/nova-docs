import"./chunk-XR34LRGE.js";var s=`@import (reference) "nui-framework-variables";
@import (reference) "mixins";

// custom styles for each of standalone \`nui-chip\`
#standalone-chips {
    .standalone-chip-custom-styles {
        border: 1px solid;
        margin-right: @nui-space-xxs;
    }

    .custom-chip-critical {
        .setCssVariable(border-color, nui-color-semantic-critical);
        .setCssVariable(background-color, nui-color-semantic-critical-bg);
        &:hover {
            .setCssVariable(border-color, nui-color-semantic-critical-hover);
            .setCssVariable(background-color, nui-color-semantic-critical-bg-hover);
        }
    }

    .custom-chip-warning {
        .setCssVariable(border-color, nui-color-semantic-warning);
        .setCssVariable(background-color, nui-color-semantic-warning-bg);
        &:hover {
            .setCssVariable(border-color, nui-color-semantic-warning-hover);
            .setCssVariable(background-color, nui-color-semantic-warning-bg-hover);
        }
    }

    .custom-chip-info {
        .setCssVariable(border-color, nui-color-semantic-info);
        .setCssVariable(background-color, nui-color-semantic-info-bg);
        &:hover {
            .setCssVariable(border-color, nui-color-semantic-info-hover);
            .setCssVariable(background-color, nui-color-semantic-info-bg-hover);
        }
    }

    .custom-chip-disabled {
        cursor: not-allowed;
        .setCssVariable(border-color, nui-color-disabled-secondary);
        .setCssVariable(background-color, nui-color-disabled-secondary);
        .setCssVariable(color, nui-color-text-disabled);

        // change the color of "X" button
        .nui-chip__value-remove svg * {
            .setCssVariable(fill, nui-color-icon-disabled);
        }

        & > * > * {
            cursor: not-allowed;
        }
    }
}

// custom styles for \`nui-chips\`
#nui-demo-chips-custom-css {
    // custom styles for \`nui-chips\`
    .nui-chips-custom-styles {
        max-width: 400px;
        padding: @nui-space-md;
    }
}
`;export{s as default};
