import"./chunk-VBFW7A5V.js";var n=`<nui-select-v2
    placeholder="Select Item"
    i18n-placeholder
    [manualDropdownControl]="true"
    class="w-25"
>
    <nui-select-v2-option *ngFor="let item of items" [value]="item">
        {{ item }}
    </nui-select-v2-option>
</nui-select-v2>

<div class="ml-4 d-flex w-75">
    <button nui-button type="button" class="mr-3" (click)="showList($event)">
        Show
    </button>

    <button nui-button type="button" class="mr-3" (click)="hideList($event)">
        Hide
    </button>

    <button nui-button type="button" class="mr-3" (click)="toggleList($event)">
        Toggle
    </button>

    <div class="d-flex align-items-center">
        <nui-switch [(value)]="handleClicksOutside" i18n>
            Close on focus-out
        </nui-switch>
    </div>
</div>
`;export{n as default};
