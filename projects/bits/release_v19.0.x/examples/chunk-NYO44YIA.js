import"./chunk-VBFW7A5V.js";var e=`<nui-popover
    popoverTitle="Modal Popover"
    i18n-popoverTitle
    trigger="click"
    placement="right"
    [template]="popoverModal"
    [modal]="true"
    [preventClosing]="true"
    [closePopover]="closePopoverSubject"
>
    <button nui-button type="button" id="nui-demo-popover-modal" i18n>
        Show modal popover
    </button>
</nui-popover>

<ng-template #popoverModal>
    <span i18n>A modal popover can be used to grab the user's attention.</span>
    <div class="mt-2 d-flex justify-content-end">
        <button
            id="nui-demo-custom-close-popover"
            nui-button
            type="button"
            displayStyle="action"
            (click)="closePopover()"
            i18n
        >
            Close
        </button>
        <button
            nui-button
            class="ml-3"
            type="button"
            displayStyle="primary"
            (click)="closePopover()"
            i18n
        >
            Confirm
        </button>
    </div>
</ng-template>
`;export{e as default};
