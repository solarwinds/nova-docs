import"./chunk-VBFW7A5V.js";var i=`<div class="example">
    <p>
        <span i18n>Selection:</span>
        <span>{{ selectedColors | json }}</span>
    </p>
    <p>
        <nui-switch [(value)]="preventRowClick">prevent row click</nui-switch>
    </p>
    <nui-repeat
        #repeat
        [itemsSource]="colors"
        [selection]="selectedColors"
        selectionMode="singleWithRequiredSelection"
        [preventRowClick]="preventRowClick"
        (selectionChange)="selectedColors = $event"
        [repeatItemTemplateRef]="repeatItemTemplate"
    ></nui-repeat>
</div>

<ng-template #repeatItemTemplate let-item="item">
    <div>{{ item.color }}</div>
</ng-template>
`;export{i as default};
