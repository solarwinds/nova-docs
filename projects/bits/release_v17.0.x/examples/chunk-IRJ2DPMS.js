import"./chunk-XR34LRGE.js";var l=`<div class="row mb-2">
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
            >
                <th nui-header-cell *nuiHeaderCellDef>{{ column }}</th>
                <td nui-cell *nuiCellDef="let element">
                    {{ element[column] }}
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
`;export{l as default};
