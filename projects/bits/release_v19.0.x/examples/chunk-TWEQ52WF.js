import"./chunk-VBFW7A5V.js";var t=`<ng-template #repeatItemTemplate let-item="item">
    <div>{{ item.color }}</div>
</ng-template>
<div class="client-side-delayed-example">
    <div class="d-flex">
        <div class="flex-row">
            <nui-search
                [value]="searchTerm"
                (inputChange)="onSearch()"
                (cancel)="onSearch()"
                #filteringSearch
            >
            </nui-search>
            <nui-repeat
                [itemsSource]="state.repeat?.itemsSource"
                [repeatItemTemplateRef]="repeatItemTemplate"
                #filteringRepeat
            >
            </nui-repeat>
            <nui-paginator
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
