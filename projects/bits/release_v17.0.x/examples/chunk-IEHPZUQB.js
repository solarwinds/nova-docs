import"./chunk-XR34LRGE.js";var o=`<div class="mb-2">
    <nui-search
        placeholder="Search book by title"
        i18n-placeholder
        [value]="''"
        (search)="onSearch()"
        (cancel)="onCancelSearch()"
    >
    </nui-search>
</div>

<ng-container *ngIf="!busy && (books$ | async).length === 0">
    No results
</ng-container>

<!-- Note that the height is defined in order to accommodate virtual scrolling -->
<nui-repeat
    [itemsSource]="books$ | async"
    [repeatItemTemplateRef]="userItemTemplate"
    [virtualScroll]="true"
    style="height: 300px"
    [itemSize]="30"
>
</nui-repeat>

<!--This progress bar is for demo purposes only. Please consult with your UX designer to determine an appropriate layout for your implementation.-->
<nui-progress [show]="busy" compactMode="true"></nui-progress>

<ng-template #userItemTemplate let-book="item">
    <div>
        <span class="nui-text-secondary">{{ book.title }}</span>
    </div>
</ng-template>
`;export{o as default};
