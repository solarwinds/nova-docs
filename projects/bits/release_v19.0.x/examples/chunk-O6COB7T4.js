import"./chunk-VBFW7A5V.js";var r=`@import (reference) "nui-framework-variables";
@import (reference) "mixins";

@box-width: 150px;
@box-height: 50px;
@placeholder-border-width: @nui-line-default;

.draggable-container {
    width: @box-width;
    border: solid @nui-line-default @nui-color-line-default;

    :last-child {
        border: none;
    }
}

// generic item styling
.item {
    padding: @nui-space-md;
    text-align: center;
    box-sizing: border-box;
    border-bottom: solid @nui-line-default @nui-color-line-default;
}

// drag & drop styling
.draggable-item:extend(.item),
.draggable-placeholder:extend(.item) {
    height: @box-height;
    .transition(box-shadow 0.4s);

    &:hover {
        cursor: move;
        .nui-dnd-hover-state();
        .nui-dnd-raised-state();
    }
}

.draggable-placeholder {
    border: dashed @placeholder-border-width @nui-color-line-default;
    background: @nui-color-bg-content-hover;
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}

.dnd-drag-preview:extend(.item, .nui-dnd-preview) {
}
`;export{r as default};
