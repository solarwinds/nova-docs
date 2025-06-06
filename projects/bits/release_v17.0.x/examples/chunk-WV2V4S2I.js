import"./chunk-XR34LRGE.js";var d=`<!-- list of draggable items  -->
<div
    cdkDropList
    class="draggable-container"
    (cdkDropListDropped)="onItemDropped($event)"
>
    <ng-container *ngFor="let item of listItems; let i = index">
        <div
            cdkDrag
            cdkDragPreviewClass="dnd-drag-preview"
            [cdkDragDisabled]="!item.enabled"
            class="draggable-item"
            [ngClass]="{
                'with-handle': item.hasHandle,
                'nui-dnd-raised-state': item.withHandle && mousedOver[i]
            }"
        >
            <!-- raised state style is applied ONLY when the mouse is over the handle -->
            <div
                *ngIf="item.withHandle"
                cdkDragHandle
                class="drag-handle"
                (mouseover)="mousedOver[i] = true"
                (mouseout)="mousedOver[i] = false"
            >
                <nui-icon icon="drag"></nui-icon>
            </div>
            {{ item.title }}
        </div>
    </ng-container>
</div>
`;export{d as default};
