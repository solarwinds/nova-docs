import"./chunk-VBFW7A5V.js";var a=`<div class="d-flex">
    <nui-switch class="p-2" [(value)]="draggable" i18n>Draggable</nui-switch>
    <nui-switch class="p-2" [(value)]="reorderable" i18n
        >Reorderable</nui-switch
    >
</div>
<nui-repeat
    (itemsReordered)="onItemsReordered($event)"
    [itemsSource]="companies"
    [repeatItemTemplateRef]="repeatItemTemplate"
    [(draggable)]="draggable"
    [(reorderable)]="reorderable"
>
</nui-repeat>
<div class="d-flex m-2">
    <div><strong i18n>Event data</strong>:</div>
    <div class="ml-1">
        {{ droppedEventData ? (droppedEventData | json) : "N/A" }}
    </div>
</div>

<!-- Content template for each item -->
<ng-template #repeatItemTemplate let-item="item">
    {{ item }}
</ng-template>
`;export{a as default};
