import"./chunk-VBFW7A5V.js";var o=`@import (reference) "nui-framework-variables";
@import (reference) "mixins";

@box-width: 300px;
@box-height: 50px;

.draggable-container {
    width: @box-width;
    border-top: solid @nui-line-default @nui-color-line-default;
}

// generic item styling
.item {
    height: @box-height;
    padding: @nui-space-md;
    text-align: center;
    box-sizing: border-box;
    border: solid @nui-line-default @nui-color-line-default;
    border-top: none;
    position: relative;
}

// drag & drop styling
.draggable-item:extend(.item) {
    background: @nui-color-bg-content;
    .transition(box-shadow 0.4s);

    // for all ENABLED items we apply the hover style
    &:not(.cdk-drag-disabled) {
        &:hover {
            .nui-dnd-hover-state();
        }

        // we apply the raised state only for items without handle
        &:not(.with-handle):hover {
            cursor: move;
            .nui-dnd-raised-state();
        }
    }

    &.cdk-drag-disabled {
        color: @nui-color-disabled;
    }
}

.drag-handle {
    color: #ccc;
    cursor: move;
    display: inline;
}

.dnd-drag-preview:extend(.item, .nui-dnd-preview) {
}
`;export{o as default};
