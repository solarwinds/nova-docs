import"./chunk-XR34LRGE.js";var o=`@import (reference) "../../../../../../src/styles/nui-framework-variables";
@import (reference) "../../../../../../src/styles/mixins.less";

.nui-wizard-custom-layout {
    .container {
        border: @nui-line-default solid;
        .setCssVariable(border-color, nui-color-line-default);
    }

    .nui-wizard-step-header {
        border: @nui-line-default solid;
        border-radius: 5px;
        .setCssVariable(border-color, nui-color-line-default);
        .setCssVariable(background, nui-color-bg-content);
        flex-direction: row-reverse;
        justify-content: flex-end;
        padding: 0 8px;
    }

    .nui-wizard-step-header--selected {
        .setCssVariable(background-color, nui-color-active);

        color: @nui-color-text-light;
        border-color: transparent;

        .nui-wizard-step-label {
            .setCssVariable(color, nui-color-text-inverse);
        }
    }

    .custom-header {
        .nui-wizard-horizontal-header-container {
            border-top: none;

            .nui-wizard-horizontal-line {
                margin: 0;
            }
        }

        //.nui-wizard-horizontal-content-container {
        //    padding: 0;
        //}

        .custom-summary {
            border-left: @nui-line-default @nui-color-line-default solid;
        }
    }

    .nui-wizard-footer {
        border: none;
        justify-content: space-between;

        button {
            min-width: 0;
            margin: 0;
        }
    }
}
`;export{o as default};
