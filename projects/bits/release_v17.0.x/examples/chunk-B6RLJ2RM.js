import"./chunk-XR34LRGE.js";var t=`<div class="example">
    <p>
        <span class="simple-label" i18n>Selection:</span>
        <span id="nui-demo-multi-repeat-disabled-values">{{
            selectedColors | json
        }}</span>
    </p>
    <p>
        <nui-switch [(value)]="preventRowClick">prevent row click</nui-switch>
    </p>
    <nui-repeat
        id="nui-demo-multi-repeat-disabled"
        [itemsSource]="colors"
        selectionMode="multi"
        [preventRowClick]="preventRowClick"
        [selection]="selectedColors"
        (selectionChange)="selectedColors = $event"
        [repeatItemTemplateRef]="repeatItemColorBoxTemplate"
    ></nui-repeat>
</div>

<ng-template #repeatItemColorBoxTemplate let-item="item">
    <div class="color-box {{ item.color }}"></div>
    <div [attr.class]="item.disabled ? 'nui-text-secondary--disabled' : null">
        {{ item.color }}
    </div>
</ng-template>
`;export{t as default};
