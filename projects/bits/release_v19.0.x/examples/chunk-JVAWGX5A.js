import"./chunk-VBFW7A5V.js";var a=`<p>
    <nui-switch [(value)]="draggable" i18n>Draggable</nui-switch>
</p>
<nui-repeat
    (itemsReordered)="onItemsReordered($event)"
    [itemsSource]="companies"
    [repeatItemTemplateRef]="repeatItemTemplate"
    [draggable]="draggable"
>
</nui-repeat>

<!-- Content template for each item -->
<ng-template #repeatItemTemplate let-item="item">
    {{ item }}
</ng-template>
`;export{a as default};
