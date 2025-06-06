import"./chunk-VBFW7A5V.js";var i=`<div class="example">
    <p>
        <span class="simple-label" i18n>Selection:</span>
        <span id="nui-demo-radioselect-value">{{ selectedColors | json }}</span>
    </p>
    <p>
        <nui-switch [(value)]="preventRowClick">prevent row click</nui-switch>
    </p>
    <nui-repeat
        id="nui-demo-radio-repeat"
        [itemsSource]="colors"
        [selection]="selectedColors"
        selectionMode="radio"
        [preventRowClick]="preventRowClick"
        [repeatItemTemplateRef]="repeatItemTemplate"
        (selectionChange)="selectedColors = $event"
    ></nui-repeat>
</div>

<ng-template #repeatItemTemplate let-item="item">
    <div>{{ item.color }}</div>
</ng-template>
`;export{i as default};
