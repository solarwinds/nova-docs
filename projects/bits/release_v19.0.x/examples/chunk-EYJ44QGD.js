import"./chunk-VBFW7A5V.js";var n=`@import (reference) "nui-framework-colors";
@import (reference) "nui-framework-spaces";
@import (reference) "nui-framework-typography";

.step-content-wrapper {
    padding: @nui-space-md;
}

.overlay {
    &-class {
        display: flex;
        height: 100%;
        .setCssVariable(background-color, nui-color-overlay-busy);
    }

    &-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 460px;
        margin: auto;
        padding: (@nui-space-md * 2);
        .setCssVariable(background-color, nui-color-bg-content);

        .header {
            display: flex;
            justify-content: center;
            margin-bottom: @nui-space-md;
            .nui-text-widget();
        }

        .body {
            display: flex;
            text-align: center;
            .nui-text-size(default);
        }

        .footer {
            display: flex;
            flex-direction: row;
            justify-content: center;

            button[displayStyle="action"] {
                margin-right: @nui-space-md;
            }
        }
    }
}
`;export{n as default};
