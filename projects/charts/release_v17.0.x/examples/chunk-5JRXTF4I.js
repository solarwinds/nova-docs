import"./chunk-7KJRK3NW.js";var e=`<div>
    <div cdkDropList class="example-list" (cdkDropListDropped)="drop($event)">
        <div
            *ngFor="let item of listItems; let i = index; let first = first"
            class="d-flex flex-row align-items-center waterfall-chart-list-item"
            cdkDrag
        >
            <nui-icon icon="{{ item.icon }}" class="p-2"></nui-icon>
            <div style="overflow: hidden" [style.width.px]="200" class="p-2">
                <span>{{ item.url }}</span>
            </div>
            <div class="d-flex">
                <div
                    class="d-flex h-100"
                    *ngIf="first"
                    #gridChartPlaceholder
                ></div>
                <nui-chart class="d-flex" [chart]="item.chart"></nui-chart>
            </div>
        </div>
    </div>
</div>

<ng-template #templatePortalGrid>
    <nui-chart class="d-flex" [chart]="gridChart"></nui-chart>
</ng-template>
`;export{e as default};
