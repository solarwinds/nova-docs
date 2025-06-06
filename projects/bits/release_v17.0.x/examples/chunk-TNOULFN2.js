import"./chunk-XR34LRGE.js";var o=`<div
    class="nui-edge-definer nui-table__container"
    id="nui-demo-table-columns-add-remove"
>
    <section class="demo-options-section mb-3">
        <button
            type="button"
            id="nui-demo-table-columns-add-remove-edit-btn"
            nui-button
            icon="edit"
            (click)="open(content)"
            i18n
        >
            Edit columns
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
                            id="nui-demo-table-add-remove-checkboxes"
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
                                    id="nui-demo-table-add-remove-new-column-textbox"
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
                                    id="nui-demo-table-add-remove-new-column-btn"
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
                            id="nui-demo-table-columns-add-remove-submit-btn"
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
    <table nui-table [dataSource]="dataSource" id="nui-demo-custom-table-actions">
        <ng-container
            *ngFor="let column of displayedColumns"
            nuiColumnDef="{{ column }}"
        >
            <th nui-header-cell *nuiHeaderCellDef class="text-capitalize">
                {{ column }}
            </th>
            <td
                nui-cell
                *nuiCellDef="let element"
                [class.overflow-visible]="columnIsActions(column)"
            >
                <span *ngIf="!columnIsActions(column)">{{
                    element[column]
                }}</span>
                <span *ngIf="columnIsActions(column)">
                    <nui-menu icon="menu">
                        <nui-menu-action (actionDone)="prependRow()" i18n
                            >Add new row to the beginning</nui-menu-action
                        >
                        <nui-menu-action (actionDone)="appendRow()" i18n
                            >Add new row to the end</nui-menu-action
                        >
                        <nui-menu-action (actionDone)="deleteRow(element)" i18n
                            >Delete row</nui-menu-action
                        >
                    </nui-menu>
                </span>
            </td>
        </ng-container>
        <tr nui-header-row *nuiHeaderRowDef="displayedColumns"></tr>
        <tr nui-row *nuiRowDef="let row; columns: displayedColumns"></tr>
    </table>
</div>
`;export{o as default};
