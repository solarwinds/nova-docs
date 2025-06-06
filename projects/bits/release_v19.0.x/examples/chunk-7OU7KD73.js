import"./chunk-VBFW7A5V.js";var t=`<ng-template #repeatItemTemplate let-item="item">
    <div>{{ item.color }}</div>
</ng-template>

<div class="client-side-example">
    <div class="d-flex">
        <div class="flex-row">
            <nui-search
                class="searchBar"
                [value]="searchTerm"
                (search)="onSearch($event)"
                #filteringSearch
            >
            </nui-search>
            <nui-repeat
                class="repeater"
                [itemsSource]="state.repeat?.itemsSource"
                [repeatItemTemplateRef]="repeatItemTemplate"
                #filteringRepeat
            >
            </nui-repeat>
            <nui-paginator
                class="paginator"
                [page]="page"
                [total]="state.paginator?.total"
                activeClass="active"
                disabledClass="disabled"
                showPrevNext="true"
                (pagerAction)="changePagination()"
                #filteringPaginator
            >
            </nui-paginator>
        </div>
    </div>
</div>
`;export{t as default};
