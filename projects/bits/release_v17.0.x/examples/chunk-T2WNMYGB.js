import"./chunk-XR34LRGE.js";var l=`<div [style.height.px]="400" [style.max-width.px]="1300">
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
            [selectionConfig]="selectionConfig"
            [(selection)]="selection"
        >
            <!--         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  -->
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
            <!--\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228\u2228 -->
            <ng-template
                nuiRowDef
                cdkVirtualFor
                let-context
                [nuiRowDefColumns]="displayedColumns"
                [cdkVirtualForOf]="placeholderItems"
                [cdkVirtualForTemplateCacheSize]="10"
                [cdkVirtualForTrackBy]="trackByNo"
            >
                <tr nui-row [rowObject]="context"></tr>
            </ng-template>
            <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
        </table>
    </cdk-virtual-scroll-viewport>
</div>
<br />
{{ selection | json }}
`;export{l as default};
