import"./chunk-VBFW7A5V.js";var r=`@import (reference) "nui-framework-variables";
@import (reference) "mixins";

@min-height: 50px;

.draggable-container {
    width: 50%;
    float: left;
    min-height: (@min-height * 10);

    .draggable-list {
        border: solid @dnd-zone-border-width transparent;
        position: relative;
        padding: @nui-space-sm;
        transition: all 0.3s ease-in-out;

        .title {
            position: absolute;
        }
        &.cdk-drop-list-dragging,
        &.cdk-drop-list-receiving {
            .draggable-item:hover {
                box-shadow: none;
                background-color: initial;
            }
        }
    }
}

.dragzone {
    .cdk-drop-list-dragging .draggable-item:not(.cdk-drag-placeholder) {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
}

.dropzone {
    margin: 10px 0;
    min-height: (2 * (@min-height + @nui-space-md + @dnd-zone-border-width));

    .cdk-drag-placeholder,
    .draggable-placeholder {
        visibility: hidden;
        min-height: @min-height - @dnd-zone-border-width;
    }
}

.draggable-item,
.draggable-placeholder,
.dropzone-preview:extend(.nui-dnd-preview) {
    min-height: @min-height + @dnd-item-border-width;
    padding: @nui-space-md;
    box-sizing: border-box;
    text-align: center;
    border: @dnd-item-border-width @nui-color-line-default solid;
    .transition(box-shadow 0.4s);
}

.draggable-item {
    border-bottom-color: transparent;

    &:hover:not(.cdk-drag-placeholder) {
        .nui-dnd-hover-state();
        .nui-dnd-raised-state();
        cursor: move;
        padding: @nui-space-md;
    }
}
&.items-container :last-child {
    border-bottom-color: @nui-color-line-default;
}

.draggable-placeholder {
    min-height: @min-height + @dnd-zone-border-width - 1;
    border-width: @dnd-zone-border-width;
    border-style: dashed;
    background: @nui-color-bg-content-hover;
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}

.cdk-drag-animating {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}

.centered-overlay .text-special {
    top: -25px;
}
`;export{r as default};
