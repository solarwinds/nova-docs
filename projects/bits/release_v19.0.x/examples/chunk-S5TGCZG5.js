import"./chunk-VBFW7A5V.js";var i=`<div class="d-flex">
    <nui-switch class="p-2" [(value)]="draggable" i18n>Dragging</nui-switch>
    <nui-switch class="p-2" [(value)]="reorderable" i18n>Reordering</nui-switch>
</div>
<nui-repeat
    (itemsReordered)="onItemsReordered($event)"
    [itemsSource]="colors"
    [repeatItemTemplateRef]="repeatItemTemplate"
    [itemConfig]="itemConfig"
    [(draggable)]="draggable"
    [(reorderable)]="reorderable"
>
</nui-repeat>

<!-- Content template for each item -->
<ng-template #repeatItemTemplate let-item="item">
    <div [class.nui-text-secondary--disabled]="itemConfig.isDisabled(item)">
        {{ item.color }} - {{ item.description }}
    </div>
</ng-template>
`;export{i as default};
