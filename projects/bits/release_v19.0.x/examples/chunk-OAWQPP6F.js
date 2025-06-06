import"./chunk-VBFW7A5V.js";var p=`<nui-popover
    id="nui-demo-popover-open-close-programmatically"
    popoverTitle="Opened Programmatically"
    i18n-popoverTitle
    trigger="openPopoverSubject"
    [template]="popoverOpenClose"
    [openPopover]="openPopoverSubject"
    [closePopover]="closePopoverSubject"
>
    <span i18n>This popover will be triggered programmatically!</span>
</nui-popover>

<ng-template #popoverOpenClose>
    <div id="nui-demo-popover-open-close" i18n>
        Hey, I'm opened programmatically.
    </div>
</ng-template>

<div class="mt-2">
    <button
        id="nui-demo-popover-close-programmatically-btn"
        nui-button
        type="button"
        (click)="closePopover()"
        i18n
    >
        Close popover
    </button>
    <button
        id="nui-demo-popover-open-programmatically-btn"
        nui-button
        class="ml-2"
        type="button"
        (click)="openPopover()"
        i18n
    >
        Open popover
    </button>
</div>
`;export{p as default};
