import"./chunk-XR34LRGE.js";var t=`<div class="nui-table__container" id="nui-demo-table-select">
    <table
        nui-table
        [dataSource]="dataSource"
        [(selection)]="selection"
        [selectionConfig]="selectionConfig"
        [trackBy]="trackBy"
    >
        <ng-container nuiColumnDef="position">
            <th nui-header-cell *nuiHeaderCellDef i18n>No.</th>
            <td nui-cell *nuiCellDef="let element">{{ element.position }}</td>
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
            <td nui-cell *nuiCellDef="let element">
                <a
                    href="https://maps.google.com/?q={{ element.location }}"
                    target="_blank"
                    >{{ element.location }}</a
                >
            </td>
        </ng-container>

        <ng-container nuiColumnDef="actions">
            <th nui-header-cell *nuiHeaderCellDef>Actions</th>
            <td nui-cell *nuiCellDef="let element">
                <button nui-button type="button">Reply</button>
                <button nui-button type="button">Forward</button>
            </td>
        </ng-container>

        <tr nui-header-row *nuiHeaderRowDef="displayedColumns"></tr>
        <tr
            nui-row
            *nuiRowDef="let row; columns: displayedColumns"
            [rowObject]="row"
            [clickableRow]="true"
        ></tr>
    </table>
</div>
<h2>Selection result</h2>
<div class="flex-row-container">
    <span class="flex-independent-row-item">
        {{ selection | json }}
    </span>
</div>
`;export{t as default};
