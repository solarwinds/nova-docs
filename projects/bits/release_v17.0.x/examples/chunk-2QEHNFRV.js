import"./chunk-XR34LRGE.js";var n=`<nui-select-v2
    [isInErrorState]="error"
    placeholder="Select Item"
    i18n-placeholder
    class="w-50 d-inline-flex"
>
    <ng-container *ngFor="let item of items">
        <nui-select-v2-option [value]="item">
            {{ item }}
        </nui-select-v2-option>
    </ng-container>
</nui-select-v2>

<nui-switch
    class="d-inline-flex"
    style="padding-left: 15px"
    [(value)]="error"
    i18n
>
    Toggle error state
</nui-switch>
`;export{n as default};
