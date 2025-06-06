import"./chunk-VBFW7A5V.js";var r=`<div cdkDropListGroup>
    <div class="draggable-container pr-2" id="nui-demo-drop-list-1">
        <h3>Companies</h3>
        <div
            cdkDropList
            class="dragzone draggable-list"
            [cdkDropListData]="companies"
            [cdkDropListSortingDisabled]="true"
            [cdkDropListEnterPredicate]="sourceAcceptsItem"
            (cdkDropListDropped)="onItemDropped($event)"
        >
            <div class="items-container">
                <div
                    *ngFor="let company of companies"
                    class="draggable-item"
                    cdkDrag
                    cdkDragPreviewClass="nui-dnd-preview"
                    [cdkDragData]="company"
                >
                    <div
                        class="draggable-placeholder"
                        *cdkDragPlaceholder
                    ></div>
                    {{ company.name }}
                </div>
            </div>
        </div>
    </div>

    <div class="draggable-container pl-2" id="nui-demo-drop-list-2">
        <h3>Industries</h3>
        <div
            #dropTarget="nuiDndDropTarget"
            id="cdk-drop-list"
            *ngFor="let industry of industries"
            class="dropzone draggable-list"
            cdkDropList
            [cdkDropListSortingDisabled]="true"
            [cdkDropListData]="industry.companies"
            nuiDndDropTarget
            [canBeDropped]="destinationAcceptsItem"
            (cdkDropListDropped)="onItemDropped($event)"
        >
            <div
                class="title"
                *ngIf="
                    dropTarget.isDropZoneActive || !industry.companies?.length
                "
            >
                {{ industry.name }}
                <!--
                ShowDropZone: {{ dropTarget.showDropZone$ | async}}
                CanDrop: {{ dropTarget.canDrop$ | async}}
                IsDropZoneActive: {{dropTarget.isDropZoneActive}}
                -->
            </div>
            <div class="items-container">
                <div
                    *ngFor="let company of industry.companies"
                    class="draggable-item"
                    cdkDrag
                    cdkDragPreviewClass="dropzone-preview"
                    [cdkDragData]="company"
                    [class.invisible]="dropTarget.isDropZoneActive"
                >
                    {{ company.name }}
                </div>
            </div>
            <div *ngIf="dropTarget.isDropZoneActive" class="centered-overlay">
                <!-- highlight item placeholder-->
                <div *ngIf="(dropTarget.showDropZone$ | async) !== true">
                    <nui-icon
                        icon="plus"
                        iconSize="medium"
                        cssClass="drop-circle-permanent"
                    ></nui-icon>
                </div>

                <!-- accepted item placeholder-->
                <div *ngIf="dropTarget.canLastDragItemBeDropped$ | async">
                    <nui-icon
                        icon="plus"
                        iconSize="medium"
                        cssClass="drop-circle-allowed"
                    ></nui-icon>
                </div>

                <!-- reject item placeholder-->
                <div
                    *ngIf="
                        (dropTarget.canLastDragItemBeDropped$ | async) === false
                    "
                >
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
        </div>
    </div>
</div>
`;export{r as default};
