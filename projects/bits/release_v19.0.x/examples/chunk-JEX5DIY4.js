import"./chunk-VBFW7A5V.js";var a=`<ng-template #repeatItemTemplate let-item="item">
    <div>{{ item.color }}</div>
</ng-template>

<div class="client-side-example">
    <div class="d-flex">
        <div class="flex-row">
            <nui-selector
                (selectionChange)="onSelectorOutput($event)"
                [checkboxStatus]="state.selector?.selectorState.checkboxStatus"
                [items]="state.selector?.selectorState.selectorItems"
            >
            </nui-selector>
            <nui-search
                class="searchBar"
                [value]="searchTerm"
                (search)="applyFilters()"
            >
            </nui-search>
            <nui-repeat
                class="repeater"
                [itemsSource]="state.repeat?.itemsSource"
                [repeatItemTemplateRef]="repeatItemTemplate"
                selectionMode="multi"
                [selection]="state.repeat?.selectedItems"
                (selectionChange)="onRepeatOutput($event)"
            >
            </nui-repeat>
            <nui-paginator
                class="paginator"
                [page]="page"
                [pageSize]="10"
                [total]="state.paginator?.total"
                activeClass="active"
                disabledClass="disabled"
                showPrevNext="true"
                (pagerAction)="applyFilters()"
            >
            </nui-paginator>
        </div>
    </div>
</div>
`;export{a as default};
