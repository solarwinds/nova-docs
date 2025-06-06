import"./chunk-VBFW7A5V.js";var t=`<nui-popover
    popoverTitle="Prevent close popover on click"
    i18n-popoverTitle
    id="nui-demo-popover-prevent-onclick"
    trigger="click"
    [template]="popoverPreventClose"
    [closePopover]="closePopoverSubject"
    [preventClosing]="true"
>
    <button nui-button type="button">
        <span i18n>Click me!</span>
    </button>
</nui-popover>

<ng-template #popoverPreventClose>
    <div id="nui-demo-popover-modal-prevent">
        <nui-checkbox id="nui-demo-checkbox-in-popover" i18n
            >Hi, check me!</nui-checkbox
        >
        <nui-combobox
            id="nui-demo-popover-combobox"
            [itemsSource]="dataset.items"
            placeholder="Select item"
            i18n-placeholder
        ></nui-combobox>
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
    </div>
</ng-template>
`;export{t as default};
