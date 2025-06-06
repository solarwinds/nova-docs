import"./chunk-VBFW7A5V.js";var t=`<div class="nui-table__container" id="nui-demo-sortable-table">
    <button
        nui-button
        type="button"
        class="mb-2"
        id="nui-demo-sortable-table-btn"
        (click)="sortByName()"
    >
        Sort By Name ({{ nameSortedDesc ? "Ascending" : "Descending" }})
    </button>

    <div class="mb-3">(sortOrderChanged) output: {{ sortedColumn | json }}</div>

    <table
        nui-table
        [dataSource]="dataSource"
        [sortable]="true"
        [sortedColumn]="sortedColumn"
        #sortableTable
        (sortOrderChanged)="sortData($event)"
    >
        <ng-container nuiColumnDef="position">
            <th nui-header-cell *nuiHeaderCellDef i18n>No.</th>
            <td nui-cell *nuiCellDef="let element">{{ element.position }}</td>
        </ng-container>

        <ng-container nuiColumnDef="name">
            <th nui-header-cell *nuiHeaderCellDef i18n>Name</th>
            <td nui-cell *nuiCellDef="let element">{{ element.name }}</td>
        </ng-container>

        <ng-container nuiColumnDef="features">
            <th nui-header-cell *nuiHeaderCellDef i18n>Features</th>
            <td nui-cell *nuiCellDef="let element">
                <nui-icon
                    *ngFor="let icon of element.features"
                    [icon]="icon"
                    class="icon-margin"
                ></nui-icon>
            </td>
        </ng-container>

        <ng-container nuiColumnDef="asset">
            <th nui-header-cell *nuiHeaderCellDef i18n>Asset Class</th>
            <td nui-cell *nuiCellDef="let element">{{ element.asset }}</td>
        </ng-container>

        <ng-container nuiColumnDef="location">
            <th nui-header-cell *nuiHeaderCellDef i18n>Location</th>
            <td nui-cell *nuiCellDef="let element">{{ element.location }}</td>
        </ng-container>

        <ng-container nuiColumnDef="status">
            <th nui-header-cell *nuiHeaderCellDef i18n>Status</th>
            <td nui-cell *nuiCellDef="let element">{{ element.status }}</td>
        </ng-container>

        <ng-container nuiColumnDef="outages">
            <th nui-header-cell *nuiHeaderCellDef i18n>Outages</th>
            <td nui-cell *nuiCellDef="let element">{{ element.outages }}</td>
        </ng-container>

        <ng-container nuiColumnDef="checks">
            <th
                nui-header-cell
                [isColumnSortingDisabled]="true"
                *nuiHeaderCellDef
                i18n
            >
                Checks
            </th>
            <td nui-cell *nuiCellDef="let element">
                <ng-container *ngFor="let check of element.checks">
                    <nui-icon [icon]="check.icon"></nui-icon>
                    {{ check.num }}
                </ng-container>
            </td>
        </ng-container>
        <tr nui-header-row *nuiHeaderRowDef="displayedColumns"></tr>
        <tr nui-row *nuiRowDef="let row; columns: displayedColumns"></tr>
    </table>
</div>
`;export{t as default};
