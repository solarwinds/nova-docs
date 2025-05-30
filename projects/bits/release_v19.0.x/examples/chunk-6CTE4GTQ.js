import"./chunk-VBFW7A5V.js";var i=`<div class="example">
    <p>
        <span class="simple-label" i18n>Selection:</span>
        <span id="nui-demo-multi-repeat-values">{{
            selectedColors | json
        }}</span>
    </p>
    <p>
        <nui-switch
            id="nui-demo-multi-repeat-switch"
            [(value)]="preventRowClick"
            >prevent row click</nui-switch
        >
    </p>
    <nui-repeat
        id="nui-demo-multi-repeat"
        [itemsSource]="colors"
        selectionMode="multi"
        [preventRowClick]="preventRowClick"
        [selection]="selectedColors"
        (selectionChange)="selectedColors = $event"
        [repeatItemTemplateRef]="repeatItemTemplate"
    >
        <div repeatHeaderTemplate>
            <div class="template-header" i18n>repeat header from template</div>
        </div>
    </nui-repeat>
</div>

<ng-template #repeatItemTemplate let-item="item">
    <div>{{ item.color }}</div>
</ng-template>
`;export{i as default};
