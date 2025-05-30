import"./chunk-XR34LRGE.js";var n=`<div class="row mb-2">
    <div class="col-3">
        <nui-switch
            [value]="makeSticky"
            (valueChange)="updateStickyState($event)"
            i18n
        >
            {{ makeSticky ? "Sticky" : "Not Sticky" }}
        </nui-switch>
    </div>
</div>

<div
    id="nui-demo-table-sticky-header"
    [style.height.px]="gridHeight"
    [style.max-width.px]="1300"
>
    <cdk-virtual-scroll-viewport
        tableStickyHeader
        class="h-100"
        [itemSize]="itemSize"
    >
        <!-- IMPORTANT Bind only visible rows to the table, otherwise, the table will render all rows in the DOM -->
        <table
            nui-table
            [dataSource]="visibleItems$ | async"
            [trackBy]="trackByNo"
            [sortable]="true"
        >
            <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
            <ng-container
                *ngFor="let column of displayedColumns"
                [nuiColumnDef]="column"
                [type]="column === 'icon' ? 'icon' : 'default'"
            >
                <th nui-header-cell *nuiHeaderCellDef>
                    <span *ngIf="column !== 'icon'; else headerIcon">{{
                        column
                    }}</span>
                    <ng-template #headerIcon>
                        <div
                            class="d-flex align-items-center justify-content-center"
                        >
                            <nui-icon icon="enable"></nui-icon>
                        </div>
                    </ng-template>
                </th>
                <td nui-cell *nuiCellDef="let element">
                    <span *ngIf="column !== 'icon'; else icon">{{
                        element[column]
                    }}</span>
                    <ng-template #icon>
                        <div
                            class="d-flex align-items-center justify-content-center"
                        >
                            <nui-icon [icon]="element[column]"></nui-icon>
                        </div>
                    </ng-template>
                </td>
            </ng-container>

            <tr nui-header-row *nuiHeaderRowDef="displayedColumns"></tr>
            <!-- IMPORTANT The actual difference between normal table and virtualized one-->
            <!-- \u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228 -->
            <ng-template
                nuiRowDef
                cdkVirtualFor
                let-context
                [nuiRowDefColumns]="displayedColumns"
                [cdkVirtualForOf]="placeholderItems"
                [cdkVirtualForTrackBy]="trackByNo"
            >
                <tr nui-row [rowObject]="context"></tr>
            </ng-template>
            <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
        </table>
    </cdk-virtual-scroll-viewport>
</div>
`;export{n as default};
