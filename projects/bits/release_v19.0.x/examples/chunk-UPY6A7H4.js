import"./chunk-VBFW7A5V.js";var i=`<nui-sorter
    id="nui-demo-sorter"
    caption="Sorter Caption"
    [itemsSource]="columns"
    [selectedItem]="sortBy"
    [sortDirection]="initialSortDirection"
    (sorterAction)="onSorterAction($event)"
>
</nui-sorter>
<nui-repeat [itemsSource]="items" [repeatItemTemplateRef]="repeatItemTemplate">
    <div repeatHeaderTemplate>
        <div class="sorter-flex-header">
            <div class="sorter-flex-row">
                <div
                    class="sorter-flex-item header-item"
                    *ngFor="let col of columns"
                >
                    {{ col.title }}
                </div>
            </div>
        </div>
    </div>
</nui-repeat>
<ng-template #repeatItemTemplate let-item="item">
    <div class="sorter-flex-row">
        <div class="sorter-flex-item">{{ item.title }}</div>
        <div class="sorter-flex-item">{{ item.year }}</div>
        <div class="sorter-flex-item">{{ item.director }}</div>
    </div>
</ng-template>
`;export{i as default};
