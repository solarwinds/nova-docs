import"./chunk-XR34LRGE.js";var m=`<nui-repeat
    [itemsSource]="companies"
    dragPreviewClass="nui-dnd-drag-preview"
    [dragPreviewTemplateRef]="dragPreviewTemplate"
    [repeatItemTemplateRef]="repeatItemTemplate"
    (itemsReordered)="onItemsReordered($event)"
>
</nui-repeat>

<!-- Content template for each item -->
<ng-template #repeatItemTemplate let-item="item">
    {{ item.name }}
</ng-template>

<!-- Drag preview template -->
<ng-template #dragPreviewTemplate let-item="item">
    <p>This is the preview for {{ item.name }}</p>
    <img width="100" [src]="item.preview" [alt]="item.name" />
</ng-template>
`;export{m as default};
