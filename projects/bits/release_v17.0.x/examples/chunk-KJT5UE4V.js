import"./chunk-XR34LRGE.js";var t=`<div
    cdkDropList
    class="draggable-container"
    (cdkDropListDropped)="onItemDropped($event)"
>
    <div
        *ngFor="let item of listItems"
        class="draggable-item"
        cdkDrag
        [cdkDragDisabled]="!item.enabled"
        cdkDragPreviewClass="dnd-drag-preview"
    >
        {{ item.title }} - {{ translatedStatus(item.enabled) }}
    </div>
</div>
`;export{t as default};
