import"./chunk-VBFW7A5V.js";var r=`@import (reference) "nui-framework-variables";
@import (reference) "mixins";

.nui-demo {
    &-drop-area {
        &__browse {
            cursor: pointer; // this would not be needed if nui-text-link had pointer - sadpanda
            margin-bottom: 0; // this is needed sadpanda2
        }
    }

    &-file-area {
        width: 100%;
        min-height: 30px; // icon size
        .setCssVariable(border-color, nui-border-fade);
        border-width: @nui-line-default;
        border-bottom-width: 0;
        border-style: solid;
    }
    &-file-area:last-child {
        border-bottom-width: @nui-line-default; // this helps to merge borders of divs to look nice
    }
}
`;export{r as default};
