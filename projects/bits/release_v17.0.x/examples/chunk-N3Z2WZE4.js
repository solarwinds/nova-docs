import"./chunk-XR34LRGE.js";var t=`@import (reference) "mixins/expander-base";

.nui-tree {
    .expander();

    &__header-title {
        width: 100%;
        line-height: 18px;
    }

    &__body {
        &--collapsed {
            overflow: hidden;
        }
    }

    &__leaf {
        display: flex;
        align-items: center;

        &-title {
            width: 100%;
        }
    }

    &__invisible {
        display: none;
    }

    .nui-badge-counter {
        position: relative;
        height: 18px;

        &:after {
            background: #555;
            width: 45px;
            height: 18px;
            line-height: 18px;
            top: inherit;
        }
    }
}
`;export{t as default};
