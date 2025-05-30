import"./chunk-VBFW7A5V.js";var l=`<div class="d-flex flex-column">
    <div class="d-flex flex-row mb-5">
        <span
            [nuiTooltip]="shortContent"
            [nuiTooltipEllipsis]="isEllipsisActive"
            i18n
            class="nui-text-ellipsis"
            style="width: 200px"
        >
            {{ shortContent }}
        </span>

        <span
            [nuiTooltip]="longContent"
            [nuiTooltipEllipsis]="isEllipsisActive"
            i18n
            class="nui-text-ellipsis"
            style="width: 200px"
        >
            {{ longContent }}
        </span>
    </div>
    <div class="d-flex flex-row">
        <nui-switch
            [value]="isEllipsisActive"
            (valueChange)="onValueChanged($event)"
            i18n
        >
            {{ message }}
        </nui-switch>
    </div>
</div>
`;export{l as default};
