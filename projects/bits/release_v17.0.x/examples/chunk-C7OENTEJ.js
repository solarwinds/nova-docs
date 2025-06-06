import"./chunk-XR34LRGE.js";var i=`<nui-select-v2
    placeholder="Select Item"
    i18n-placeholder
    [formControl]="selectControl"
    [displayValueTemplate]="customTemplate"
    #select
>
    <nui-select-v2-option
        *ngFor="let item of items"
        [value]="item.id"
        [displayValueContext]="item"
    >
        Name is {{ item.name }} and icon is
        <nui-icon [icon]="item.icon"></nui-icon>
    </nui-select-v2-option>
</nui-select-v2>

<ng-template #customTemplate let-item>
    <div class="nui-select-v2__value">
        <div
            *ngIf="item; else empty"
            class="d-flex align-items-center nui-select-v2__value-content"
        >
            <nui-icon class="mr-2" [icon]="item.icon"></nui-icon>
            {{ item.name }}
        </div>

        <nui-icon
            [style.transform]="select.isDropdownOpen ? 'rotate(180deg)' : ''"
            icon="caret-down"
        ></nui-icon>
    </div>

    <ng-template #empty>
        <span class="nui-select-v2__placeholder">Select Item</span>
    </ng-template>
</ng-template>
`;export{i as default};
