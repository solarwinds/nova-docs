import"./chunk-VBFW7A5V.js";var i=`@import (reference) "nui-framework-variables";
@import (reference) "mixins";

@box-width: 150px;
@box-height: 50px;

.draggable-container {
    width: @box-width;
    border-top: solid @nui-line-default @nui-color-line-default;
}

.item {
    padding: @nui-space-md;
    text-align: center;
}

.draggable-item:extend(.item) {
    height: @box-height;
    border: @dnd-item-border-width @nui-color-line-default solid;
    border-top: none;

    .transition(box-shadow 0.4s);

    // apply style only for items that are enabled
    &:hover:not(.cdk-drag-disabled) {
        cursor: move;
        .nui-dnd-hover-state();
        .nui-dnd-raised-state();
    }

    &.cdk-drag-disabled {
        color: @nui-color-disabled;
    }
}

.dnd-drag-preview:extend(.item, .nui-dnd-preview) {
}
`;export{i as default};
