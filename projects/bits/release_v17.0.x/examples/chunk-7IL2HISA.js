import"./chunk-XR34LRGE.js";var i=`<div class="d-flex justify-content-start align-items-center w-25">
    <button
        nui-button
        class="mr-auto"
        #tooltip="nuiTooltip"
        type="button"
        [nuiTooltip]="tooltipText"
        [nuiTooltipDisabled]="isDisabled"
        (click)="tooltip.toggle()"
        (mouseenter)="disableTooltip(true)"
        i18n
    >
        <strong>Toggle</strong> Tooltip
    </button>

    <div class="d-flex align-items-start flex-column">
        <button
            nui-button
            type="button"
            size="compact"
            displayStyle="action"
            (click)="handleClick($event, tooltip)"
            i18n
        >
            Click to <strong>show</strong> tooltip
        </button>

        <button
            nui-button
            type="button"
            size="compact"
            displayStyle="action"
            (click)="tooltip.hide()"
            i18n
        >
            Click to <strong>hide</strong> tooltip
        </button>
    </div>
</div>
`;export{i as default};
