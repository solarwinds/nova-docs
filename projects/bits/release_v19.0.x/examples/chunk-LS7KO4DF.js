import"./chunk-VBFW7A5V.js";var n=`@import (reference) "nui-framework-colors";
@import (reference) "nui-framework-spaces";
@import (reference) "nui-framework-typography";

.overlay {
    &-class {
        // background: radial-gradient(circle, rgba(255,255,255,0.94) 70%, rgba(255,255,255,0) 100%);
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
        box-shadow: @nui-shadow-elevated;
        // background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, @nui-color-bg-content 5%, @nui-color-bg-content 95%, rgba(0, 0, 0, 0) 100%);

        .header {
            display: flex;
            justify-content: center;
            margin-bottom: @nui-space-md;
            .nui-text-widget();

            nui-icon {
                margin-right: @nui-space-xs;
            }
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

button[displayStyle="action"] {
    margin-right: @nui-space-md;
}

h1 {
    margin-bottom: @nui-space-md;
}
`;export{n as default};
