import"./chunk-VBFW7A5V.js";var r=`@import (reference) "nui-framework-variables";
@import (reference) "mixins";

@min-height: 50px;

.draggable-container {
    width: 50%;
    float: left;
    min-height: (@min-height * 5);

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

.item,
.draggable-item,
.draggable-placeholder {
    min-height: @min-height + @dnd-item-border-width;
    padding: @nui-space-md;
    box-sizing: border-box;
    text-align: center;
    border: @dnd-item-border-width @nui-color-line-default solid;
    .transition(box-shadow 0.4s);
}

.item,
.draggable-item {
    border-bottom-color: transparent;

    &.cdk-drag:hover:not(.cdk-drag-placeholder) {
        .nui-dnd-hover-state();
        .nui-dnd-raised-state();
        cursor: move;
        padding: @nui-space-md;
    }
}
&.items-container :last-child {
    border-bottom-color: @nui-color-line-default;
}

.centered-overlay .text-special {
    top: -25px;
}

// This class is added to a cdkDrag element when the user has stopped dragging.
// CDK will animate the element from its drop position to the final position inside the cdkDropList container
.cdk-drag-animating {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}
`;export{r as default};
