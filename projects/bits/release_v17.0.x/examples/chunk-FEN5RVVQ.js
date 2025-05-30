import"./chunk-XR34LRGE.js";var n=`@import (reference) "nui-framework-variables";
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
    border: solid @nui-line-default @nui-color-line-default;
    border-top: none;
    .transition(box-shadow 0.4s);

    &:hover {
        cursor: move;
        .nui-dnd-hover-state();
        .nui-dnd-raised-state();
    }
}

.dnd-drag-preview:extend(.item, .nui-dnd-preview) {
}
`;export{n as default};
