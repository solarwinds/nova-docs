import"./chunk-XR34LRGE.js";var t=`<nui-popover
    popoverTitle="Disabled Popover"
    i18n-popoverTitle
    id="nui-demo-popover-disabled"
    trigger="click"
    [disabled]="disabled"
    [template]="popoverDisabled"
>
    <button nui-button type="button">
        <span i18n>Click me!</span>
    </button>
</nui-popover>

<div class="mt-2">
    <button
        id="nui-disable-popover-toggle"
        nui-button
        type="button"
        (click)="changeStatus()"
    >
        {{ buttonName }}
    </button>
</div>
<ng-template #popoverDisabled>
    <div id="nui-demo-popover-modal-disabled" i18n>
        Hi, I'm clicked after being enabled!
    </div>
</ng-template>
`;export{t as default};
