import"./chunk-VBFW7A5V.js";var i=`<div class="d-flex flex-row">
    <nui-repeat
        class="app-virtual-scroll-list-repeat"
        selectionMode="none"
        [itemConfig]="itemConfig"
        [repeatItemTemplateRef]="listRepeatItemTemplate"
        [selection]="filteringState.repeat?.selectedItems"
        [itemsSource]="listItems$ | async"
        [virtualScroll]="true"
        [itemSize]="30"
    >
    </nui-repeat>
</div>

<ng-template #listRepeatItemTemplate let-item="item">
    <div class="container">
        <div class="row">
            <div *ngFor="let field of item | keyvalue" class="col-sm">
                {{ field.value }}
            </div>
        </div>
    </div>
</ng-template>
`;export{i as default};
