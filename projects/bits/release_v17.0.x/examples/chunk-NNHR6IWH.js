import"./chunk-XR34LRGE.js";var i=`<div class="example">
    <p>
        <span i18n>Selection:</span>
        <span id="nui-demo-radio-non-required-selection-repeat-value">{{
            selectedColors | json
        }}</span>
    </p>
    <p>
        <nui-switch
            id="nui-demo-radio-non-required-selection-repeat-switch"
            #preventRowClick
            >prevent row click</nui-switch
        >
    </p>
    <nui-repeat
        id="nui-demo-radio-non-required-selection-repeat"
        [itemsSource]="colors"
        [selection]="selectedColors"
        [selectionMode]="selectedMode"
        [preventRowClick]="preventRowClick.value"
        (selectionChange)="selectedColors = $event"
        [repeatItemTemplateRef]="repeatItemTemplate"
    ></nui-repeat>
</div>

<ng-template #repeatItemTemplate let-item="item">
    <div>{{ item.color }}</div>
</ng-template>
`;export{i as default};
