import"./chunk-XR34LRGE.js";var n=`<nui-select-v2
    placeholder="Select Item"
    i18n-placeholder
    class="action"
    #select
    [displayValueTemplate]="customTemplate"
>
    <nui-select-v2-option-group *ngFor="let item of items">
        <button
            nui-button
            type="button"
            displayStyle="action"
            [icon]="'add'"
            class="custom-box"
            (click)="actionSimulation()"
        >
            Add new filtered state
        </button>
        <nui-divider size="extra-small"></nui-divider>
        <span class="nui-select-v2-option-group--header">{{
            item.headerName
        }}</span>
        <nui-select-v2-option
            *ngFor="let option of item.options"
            [value]="option.id"
            [displayValueContext]="option"
        >
            {{ option.name }}
            <button
                nui-button
                type="button"
                displayStyle="action"
                [icon]="'menu'"
                (click)="actionSimulation($event)"
            ></button>
        </nui-select-v2-option>
    </nui-select-v2-option-group>
</nui-select-v2>

<ng-template #customTemplate let-context let-open="open">
    <div class="custom-container">
        <div *ngIf="context; else empty" class="custom-input-template">
            <span>{{ context.name }}</span>
            <nui-icon class="ml-2" [icon]="context.icon"></nui-icon>
        </div>

        <nui-icon
            [style.transform]="open ? 'rotate(180deg)' : ''"
            icon="caret-down"
        ></nui-icon>
    </div>

    <ng-template #empty>
        <span class="nui-select-v2__placeholder">Select Item</span>
    </ng-template>
</ng-template>
`;export{n as default};
