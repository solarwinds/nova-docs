import"./chunk-B7O3QC5Z.js";var e=`<div class="chart mb-5">
    <div
        [style.margin-left.px]="rowSize + iconSize"
        #gridChartPlaceholder
    ></div>
    <div cdkDropList class="example-list" (cdkDropListDropped)="drop($event)">
        <div
            *ngFor="let item of listItems; let i = index; let first = first"
            class="d-flex flex-row align-items-center waterfall-chart-list-item"
            cdkDrag
        >
            <nui-icon icon="{{ item.icon }}" class="p-1"></nui-icon>
            <div
                style="overflow: hidden"
                [style.width.px]="rowSize"
                class="p-1"
            >
                <span>{{ item.url }}</span>
            </div>
            <div class="d-flex">
                <div class="d-flex h-100" *ngIf="first"></div>
                <nui-chart
                    class="d-flex"
                    [chart]="item.chart"
                    nuiChartCollectionId="1"
                ></nui-chart>
            </div>
        </div>
    </div>
</div>

<ng-template #templatePortalGrid>
    <nui-chart
        class="d-flex"
        [chart]="gridChart"
        nuiChartCollectionId="1"
    ></nui-chart>
</ng-template>
`;export{e as default};
