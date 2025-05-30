import"./chunk-VBFW7A5V.js";var t=`<div cdkDropListGroup>
    <!-- source from where the items will be dragged -->
    <div class="draggable-container pr-2" id="nui-demo-drop-list-1">
        <h3>Source</h3>
        <div
            cdkDropList
            class="dragzone draggable-list"
            [cdkDropListData]="sourceItems"
            [cdkDropListSortingDisabled]="true"
            [cdkDropListEnterPredicate]="sourceAcceptsItem"
        >
            <!-- display list of items -->
            <div class="items-container">
                <div
                    *ngFor="let item of sourceItems"
                    class="draggable-item"
                    cdkDrag
                    [cdkDragData]="item"
                    cdkDragPreviewClass="nui-dnd-preview"
                >
                    {{ item }}
                </div>
            </div>
        </div>
    </div>

    <!-- destination dropzone where the items will be dropped -->
    <div class="draggable-container pl-2" id="nui-demo-drop-list-2">
        <h3>Destination</h3>
        <div
            cdkDropList
            class="dropzone draggable-list"
            nuiDndDropTarget
            #destinationTarget="nuiDndDropTarget"
            [cdkDropListData]="destinationItems"
            [canBeDropped]="destinationAcceptsItem"
            (cdkDropListDropped)="onItemDropped($event)"
        >
            <!-- display list of items -->
            <div class="items-container">
                <!-- make items invisible while a drag operation is in progress and dropzone is active-->
                <div
                    *ngFor="let item of destinationItems"
                    class="item"
                    [class.invisible]="destinationTarget.isDropZoneActive"
                >
                    {{ item }}
                </div>
            </div>

            <!-- highlight dropzone area -->
            <ng-container
                *ngTemplateOutlet="
                    highlightDropzoneTemplate;
                    context: { target: destinationTarget }
                "
            ></ng-container>
        </div>
    </div>
</div>

<!-- template to highlight a dropzone and inform user about the drag operation outcome (accept item or not) -->
<ng-template #highlightDropzoneTemplate let-target="target">
    <div *ngIf="target.isDropZoneActive" class="centered-overlay text-center">
        <!-- default state, highlight item placeholder when dragging starts -->
        <div *ngIf="(target.showDropZone$ | async) !== true">
            <!-- This is a drop zone area where you can drag your items -->
            <nui-icon
                icon="plus"
                iconSize="medium"
                cssClass="drop-circle-permanent"
            ></nui-icon>
        </div>

        <!-- accepted item placeholder -->
        <div *ngIf="target.canLastDragItemBeDropped$ | async">
            <!-- The item currently dragged is accepted in this dropzone -->
            <nui-icon
                icon="plus"
                iconSize="medium"
                cssClass="drop-circle-allowed"
            ></nui-icon>
        </div>

        <!-- reject item placeholder-->
        <div *ngIf="(target.canLastDragItemBeDropped$ | async) === false">
            <!-- The item currently dragged is NOT accepted in this dropzone -->
            <div class="centered-overlay text-nowrap text-special" i18n>
                Not allowed
            </div>
            <nui-icon
                icon="close"
                iconSize="medium"
                cssClass="drop-circle-not-allowed"
            ></nui-icon>
        </div>
    </div>
</ng-template>
`;export{t as default};
