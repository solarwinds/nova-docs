import"./chunk-VBFW7A5V.js";var r=`<nui-sorter
    id="nui-demo-sorter"
    i18n-caption
    caption="Sorter Caption"
    [itemsSource]="columns"
    [selectedItem]="sortBy"
    [sortDirection]="sortDirection"
    (sorterAction)="onSorterAction($event)"
>
</nui-sorter>
<button (click)="resetSorter()">reset sorter</button>
<button (click)="updateSorterByProperty()">update sorter by property</button>
<button (click)="updateSorterByMethod()">update sorter by method</button>
<button (click)="updateSorterDirection()">update sorter direction</button>

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
`;export{r as default};
