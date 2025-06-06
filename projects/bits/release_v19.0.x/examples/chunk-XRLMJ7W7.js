import"./chunk-VBFW7A5V.js";var t=`<div class="nui-table__container" id="nui-demo-table-cell-width-set">
    <section class="demo-options-section mb-1">
        <nui-textbox-number
            id="position-input"
            [value]="positionWidth"
            customBoxWidth="150px"
            (valueChange)="onOptionChange($event)"
        >
        </nui-textbox-number>
    </section>

    <table nui-table [dataSource]="dataSource">
        <ng-container nuiColumnDef="position">
            <!-- set the width of a column -->
            <th
                nui-header-cell
                *nuiHeaderCellDef
                [style.width.px]="positionWidth"
                i18n
            >
                No.
            </th>
            <td nui-cell *nuiCellDef="let element">{{ element.position }}</td>
        </ng-container>

        <ng-container nuiColumnDef="item">
            <th nui-header-cell *nuiHeaderCellDef i18n>Item</th>
            <td nui-cell *nuiCellDef="let element">{{ element.item }}</td>
        </ng-container>

        <ng-container nuiColumnDef="description">
            <th nui-header-cell *nuiHeaderCellDef i18n>Description</th>

            <!-- set the tooltip text for a cell -->
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
                    <nui-icon icon="enable"></nui-icon>
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
        <tr nui-row *nuiRowDef="let row; columns: displayedColumns"></tr>
    </table>
</div>
`;export{t as default};
