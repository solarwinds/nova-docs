import"./chunk-XR34LRGE.js";var o=`@import (reference) "nui-framework-variables";
@import (reference) "mixins";

.picker-tile-size() {
    width: 30px;
    height: 30px;
}

.color-box() {
    width: @nui-space-md + 1;
    height: @nui-space-md + 1;
    border-radius: @nui-radius-default;
    border: 1px solid;
    .setCssVariable(border-color, nui-color-line-default);
}

.color-box-input() {
    .color-box();
    width: @nui-space-md + @nui-space-xxs;
    height: @nui-space-md + @nui-space-xxs;
}

.box {
    .picker-tile-size();
}

.color-picker {
    &-container {
        padding: @nui-space-xs @nui-space-sm;
    }
    &-select {
        width: fit-content;
        min-width: unset;
        cursor: pointer;
    }

    &-input {
        display: flex;

        &__box {
            display: flex;
            align-items: center;
            flex-grow: 1;
        }

        &__color-box {
            .color-box-input();
            flex-grow: 1;
            margin: 0 10px;
        }

        &__toggle {
            display: flex;
            justify-content: center;
            align-items: center;
            border-left: 1px solid;
            .setCssVariable(border-left-color, nui-color-line-default);
            .picker-tile-size();
        }
    }

    &-option {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        &__color-box {
            .color-box();
            padding: 1px 0 0 1px;
        }

        &--selected {
            .setCssVariable(background-color, nui-color-selected);
            &:focus {
                outline: none;
            }
        }

        &__glyph {
            .nui-checkbox__glyph();
            background-repeat: no-repeat;
        }
    }
}
`;export{o as default};
