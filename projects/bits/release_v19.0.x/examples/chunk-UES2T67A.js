import"./chunk-VBFW7A5V.js";var i=`<div class="nui-table__container" id="nui-demo-table-select">
    <table
        nui-table
        [dataSource]="dataSource"
        [totalItems]="paginationTotal"
        [(selection)]="selection"
        [selectionConfig]="selectionConfig"
        [trackBy]="trackBy"
    >
        <ng-container nuiColumnDef="position">
            <th nui-header-cell *nuiHeaderCellDef i18n>No.</th>
            <td nui-cell *nuiCellDef="let element">{{ element.position }}</td>
        </ng-container>

        <ng-container nuiColumnDef="item">
            <th nui-header-cell *nuiHeaderCellDef i18n>Item</th>
            <td nui-cell *nuiCellDef="let element">{{ element.item }}</td>
        </ng-container>

        <ng-container nuiColumnDef="description">
            <th nui-header-cell *nuiHeaderCellDef i18n>Description</th>
            <td
                nui-cell
                *nuiCellDef="let element"
                [tooltipText]="element.description"
            >
                {{ element.description }}
            </td>
        </ng-container>

        <ng-container nuiColumnDef="status" type="icon">
            <th nui-header-cell *nuiHeaderCellDef>
                <div class="d-flex align-items-center">
                    <nui-icon [icon]="'enable'"></nui-icon>
                </div>
            </th>
            <td nui-cell *nuiCellDef="let element">
                <div class="d-flex align-items-center">
                    <nui-icon [icon]="element.status"></nui-icon>
                </div>
            </td>
        </ng-container>

        <ng-container nuiColumnDef="location">
            <th nui-header-cell *nuiHeaderCellDef i18n>Location</th>
            <td nui-cell *nuiCellDef="let element">{{ element.location }}</td>
        </ng-container>

        <tr nui-header-row *nuiHeaderRowDef="displayedColumns"></tr>
        <tr
            nui-row
            *nuiRowDef="let row; columns: displayedColumns"
            [rowObject]="row"
        ></tr>
    </table>
</div>
<nui-paginator
    id="nui-demo-table-select-paginator"
    [page]="1"
    [pageSize]="10"
    [total]="paginationTotal"
    activeClass="active"
    disabledClass="disabled"
    showPrevNext="true"
    (pagerAction)="changePagination($event)"
    #filteringPaginator
>
</nui-paginator>
<nui-divider></nui-divider>
<h2>Selection result</h2>
<div class="flex-row-container">
    <span class="flex-independent-row-item">
        {{ selection | json }}
    </span>
</div>
`;export{i as default};
