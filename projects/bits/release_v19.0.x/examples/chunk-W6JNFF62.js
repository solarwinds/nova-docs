import"./chunk-VBFW7A5V.js";var t=`<div
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
        {{ item.title }}
        <div *cdkDragPreview>
            <p>This is the preview for {{ item.title }}</p>
            <img
                align="middle"
                width="100"
                [src]="item.preview"
                [alt]="item.title"
            />
        </div>
    </div>
</div>
`;export{t as default};
