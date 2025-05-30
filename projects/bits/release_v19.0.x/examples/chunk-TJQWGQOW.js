import"./chunk-VBFW7A5V.js";var t=`<div class="nui-table__options">
    <section class="demo-options-section">
        <button
            type="button"
            id="nui-demo-table-test-columns-table-parameters-btn"
            nui-button
            icon="edit"
            (click)="open(parameters)"
            i18n
        >
            Table parameters
        </button>

        <ng-template #parameters let-close="close" let-dismiss="dismiss">
            <nui-dialog-header
                i18n-title
                title="Table parameters"
                (closed)="close()"
            ></nui-dialog-header>
            <form [formGroup]="optionsForm">
                <div class="form-group">
                    <div class="dialog-body">
                        <nui-checkbox formControlName="reorderable">
                            Reorderable
                        </nui-checkbox>

                        <nui-checkbox formControlName="resizable">
                            Resizable
                        </nui-checkbox>

                        <nui-checkbox formControlName="sortable">
                            Sortable
                        </nui-checkbox>

                        <h5 i18n>Change cells content alignment</h5>
                        <nui-select
                            [itemsSource]="alignmentsArray"
                            id="nui-demo-table-test-columns-alignment-select"
                            placeholder="Select alignment"
                            formControlName="alignment"
                        >
                        </nui-select>

                        <h5 i18n>Change rows density</h5>
                        <nui-select
                            [itemsSource]="densitiesArray"
                            id="nui-demo-table-test-columns-density-select"
                            placeholder="Select row density"
                            formControlName="density"
                        >
                        </nui-select>

                        <h5 i18n>Change columns width</h5>
                        <nui-textbox-number
                            placeholder="Set columns width"
                            id="nui-demo-table-test-column-width"
                            formControlName="positionWidth"
                        >
                        </nui-textbox-number>
                    </div>

                    <nui-dialog-footer>
                        <button
                            nui-button
                            id="nui-demo-table-test-columns-dialog-close-btn"
                            type="button"
                            displayStyle="primary"
                            (click)="close('Cancel')"
                            i18n
                        >
                            Close
                        </button>
                    </nui-dialog-footer>
                </div>
            </form>
        </ng-template>
    </section>

    <section class="demo-options-section">
        <button
            type="button"
            id="nui-demo-table-test-columns-add-remove-edit-btn"
            nui-button
            icon="edit"
            (click)="open(content)"
            i18n
        >
            Edit columns
        </button>

        <br />
        <button
            type="button"
            id="nui-demo-table-test-limit-search-btn"
            nui-button
            (click)="limitSearch()"
            i18n
        >
            Toggle search by outages
        </button>

        <br />
        <button
            nui-button
            type="button"
            id="nui-demo-table-test-disable-column-sorting-btn"
            (click)="disableSorting()"
            i18n
        >
            Disable features column for sorting
        </button>

        <ng-template #content let-close="close" let-dismiss="dismiss">
            <nui-dialog-header
                i18n-title
                title="Edit columns"
                (closed)="close()"
            ></nui-dialog-header>
            <form [formGroup]="myForm">
                <div class="form-group">
                    <div class="dialog-body">
                        <nui-message
                            [allowDismiss]="true"
                            type="critical"
                            *ngIf="
                                !myForm.controls['checkboxGroup'].valid &&
                                myForm.controls['checkboxGroup'].touched
                            "
                        >
                            <b i18n>Select minimum 3 checkboxes!</b>
                        </nui-message>

                        <h5 i18n>Available columns</h5>
                        <nui-checkbox-group
                            id="nui-demo-table-test-add-remove-checkboxes"
                            [values]="displayedColumnsCopy"
                            (valuesChange)="columnsChanged($event)"
                            formControlName="checkboxGroup"
                            required
                        >
                            <nui-checkbox
                                *ngFor="let availableColumn of availableColumns"
                                [value]="availableColumn"
                                class="text-capitalize"
                                [checked]="isChecked(availableColumn)"
                            >
                                {{ availableColumn }}
                            </nui-checkbox>
                        </nui-checkbox-group>

                        <nui-divider></nui-divider>

                        <h5 i18n>Create new column</h5>
                        <div class="d-flex flex-row">
                            <div class="col">
                                <nui-textbox
                                    id="nui-demo-table-test-add-remove-new-column-textbox"
                                    [value]="newColumn"
                                    (textChange)="updateNewColumnValue($event)"
                                    i18n-placeholder
                                    placeholder="Enter new column title"
                                >
                                </nui-textbox>
                            </div>
                            <div class="col col-auto">
                                <button
                                    nui-button
                                    type="button"
                                    displayStyle="default"
                                    id="nui-demo-table-test-add-remove-new-column-btn"
                                    class="ml-3"
                                    (click)="addNewColumn()"
                                    i18n
                                >
                                    Add new column
                                </button>
                            </div>
                        </div>
                    </div>
                    <nui-dialog-footer>
                        <button
                            nui-button
                            type="button"
                            (click)="close('Cancel')"
                            i18n
                        >
                            Cancel
                        </button>
                        <button
                            nui-button
                            type="button"
                            id="nui-demo-table-test-columns-add-remove-submit-btn"
                            displayStyle="primary"
                            (click)="updateColumns(); close('Action')"
                            [disabled]="
                                myForm.controls['checkboxGroup'].invalid
                            "
                            i18n
                        >
                            Update columns
                        </button>
                    </nui-dialog-footer>
                </div>
            </form>
        </ng-template>
    </section>

    <div class="nui-searchable-table__search">
        <nui-search
            id="nui-demo-table-test-search"
            [value]="searchTerm"
            (search)="onSearch($event)"
            (cancel)="onSearchCancel()"
            #filteringSearch
        >
        </nui-search>
    </div>
</div>

<div class="nui-table__container" id="nui-test-table">
    <table
        nui-table
        #testTable
        [dataSource]="dataSource"
        [sortable]="sortable"
        #sortableTable
        (sortOrderChanged)="sortData()"
        #filteringTable
        [resizable]="resizable"
        [reorderable]="reorderable"
        [selectionConfig]="selectionConfig"
        [totalItems]="paginationTotal"
        (columnsOrderChange)="toastColumns($event)"
    >
        <ng-container nuiColumnDef="position" [columnWidth]="positionWidth">
            <th nui-header-cell *nuiHeaderCellDef i18n [alignment]="alignment">
                No.
            </th>
            <td nui-cell *nuiCellDef="let element" [alignment]="alignment">
                {{ element.position }}
            </td>
        </ng-container>

        <ng-container nuiColumnDef="name">
            <th nui-header-cell *nuiHeaderCellDef i18n [alignment]="alignment">
                Name
            </th>
            <td nui-cell *nuiCellDef="let element" [alignment]="alignment">
                {{ element.name }}
            </td>
        </ng-container>

        <ng-container nuiColumnDef="features">
            <th
                nui-header-cell
                [isColumnSortingDisabled]="isFeatureColumnDisabled"
                *nuiHeaderCellDef
                i18n
                [alignment]="alignment"
            >
                Features
            </th>
            <td nui-cell *nuiCellDef="let element" [alignment]="alignment">
                <nui-icon
                    *ngFor="let icon of element.features"
                    [icon]="icon"
                    class="icon-margin"
                >
                </nui-icon>
            </td>
        </ng-container>

        <ng-container nuiColumnDef="asset">
            <th nui-header-cell *nuiHeaderCellDef i18n [alignment]="alignment">
                Asset Class
            </th>
            <td nui-cell *nuiCellDef="let element" [alignment]="alignment">
                {{ element.asset }}
            </td>
        </ng-container>

        <ng-container nuiColumnDef="location">
            <th nui-header-cell *nuiHeaderCellDef i18n [alignment]="alignment">
                Location
            </th>
            <td nui-cell *nuiCellDef="let element" [alignment]="alignment">
                {{ element.location }}
            </td>
        </ng-container>

        <ng-container nuiColumnDef="status" type="icon">
            <th nui-header-cell *nuiHeaderCellDef i18n>
                <nui-icon icon="enable"></nui-icon>
            </th>
            <td nui-cell *nuiCellDef="let element">
                <nui-icon [icon]="element.status"></nui-icon>
            </td>
        </ng-container>

        <ng-container nuiColumnDef="outages">
            <th nui-header-cell *nuiHeaderCellDef i18n [alignment]="alignment">
                Outages
            </th>
            <td nui-cell *nuiCellDef="let element" [alignment]="alignment">
                {{ element.outages }}
            </td>
        </ng-container>

        <ng-container nuiColumnDef="checks">
            <th nui-header-cell *nuiHeaderCellDef i18n [alignment]="alignment">
                Checks
            </th>
            <td nui-cell *nuiCellDef="let element" [alignment]="alignment">
                <ng-container *ngFor="let check of element.checks">
                    <nui-icon [icon]="check.icon"></nui-icon>
                    {{ check.num }}
                </ng-container>
            </td>
        </ng-container>

        <tr
            nui-header-row
            *nuiHeaderRowDef="displayedColumns; sticky: true"
        ></tr>
        <tr
            nui-row
            *nuiRowDef="let row; columns: displayedColumns"
            [density]="density"
            [rowObject]="row"
        ></tr>
    </table>
</div>

<nui-paginator
    id="nui-demo-table-test-paginator"
    [page]="1"
    [pageSize]="10"
    [total]="paginationTotal"
    activeClass="active"
    disabledClass="disabled"
    showPrevNext="true"
    (pagerAction)="changePagination()"
    #filteringPaginator
>
</nui-paginator>
`;export{t as default};
