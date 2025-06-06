import"./chunk-XR34LRGE.js";var l=`<div class="nui-table__container" id="nui-demo-table-cell-reorder">
    <table
        nui-table
        [dataSource]="dataSource"
        [reorderable]="true"
        (columnsOrderChange)="toastColumns($event)"
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
                <div class="d-flex align-items-center">
                    <nui-icon
                        *ngFor="let icon of element.features"
                        [icon]="icon"
                        class="icon-margin"
                    ></nui-icon>
                </div>
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

        <ng-container nuiColumnDef="status" type="icon">
            <th nui-header-cell *nuiHeaderCellDef i18n>Status</th>
            <td nui-cell *nuiCellDef="let element">
                <div class="d-flex align-items-center justify-content-center">
                    <nui-icon [icon]="element.status"></nui-icon>
                </div>
            </td>
        </ng-container>

        <ng-container nuiColumnDef="outages">
            <th nui-header-cell *nuiHeaderCellDef i18n>Outages</th>
            <td nui-cell *nuiCellDef="let element">{{ element.outages }}</td>
        </ng-container>

        <ng-container nuiColumnDef="checks">
            <th nui-header-cell *nuiHeaderCellDef i18n>Checks</th>
            <td nui-cell *nuiCellDef="let element">
                <div class="d-flex align-items-center">
                    <ng-container *ngFor="let check of element.checks">
                        <nui-icon [icon]="check.icon"></nui-icon>
                        <div class="ml-2">{{ check.num }}</div>
                    </ng-container>
                </div>
            </td>
        </ng-container>
        <tr nui-header-row *nuiHeaderRowDef="displayedColumns"></tr>
        <tr nui-row *nuiRowDef="let row; columns: displayedColumns"></tr>
    </table>
</div>
`;export{l as default};
