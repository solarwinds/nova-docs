import"./chunk-VBFW7A5V.js";var a=`<div
    cdkDropList
    class="draggable-container"
    (cdkDropListDropped)="onItemDropped($event)"
>
    <div
        cdkDrag
        cdkDragPreviewClass="dnd-drag-preview"
        class="draggable-item"
        *ngFor="let item of listItems"
    >
        {{ item }}
        <div class="draggable-placeholder" *cdkDragPlaceholder i18n>
            Placeholder
        </div>
    </div>
</div>
`;export{a as default};
