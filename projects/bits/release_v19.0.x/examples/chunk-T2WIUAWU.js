import"./chunk-VBFW7A5V.js";var n=`@import (reference) "nui-framework-variables";
@import (reference) "mixins";

@box-width: 150px;
@box-height: 100px;

.draggable-item {
    width: @box-width;
    height: @box-height;
    padding: @nui-space-md;
    box-sizing: border-box;
    border: solid 1px @gray;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 1;
    .transition(box-shadow 0.4s);

    &:hover,
    &.cdk-drag-dragging {
        .nui-dnd-hover-state();
        .nui-dnd-raised-state();
        cursor: move;
        padding: @nui-space-md;
    }
}
`;export{n as default};
