import"./chunk-XR34LRGE.js";var l=`<div class="mb-3">
    <div class="row">
        <div class="col-3">Sticky footer:</div>
    </div>
    <div class="row">
        <div class="col-3">
            <nui-switch [(value)]="makeSticky" i18n>
                {{ makeSticky ? "Sticky" : "Not Sticky" }}
            </nui-switch>
        </div>
    </div>
</div>

<div
    [style.height.px]="gridHeight"
    [style.max-width.px]="1300"
    style="border-color: lightgrey"
>
    <cdk-virtual-scroll-viewport
        [style.height.px]="gridHeight"
        tableVirtualScroll
        [rowHeight]="24"
        [rowCount]="users.length"
    >
        <table
            nui-table
            [dataSource]="users"
            [resizable]="false"
            [reorderable]="true"
        >
            <ng-container nuiColumnDef="no" [columnWidth]="50">
                <th nui-header-cell *nuiHeaderCellDef i18n>No.</th>
                <td nui-cell *nuiCellDef="let element">{{ element.no }}</td>
            </ng-container>

            <ng-container nuiColumnDef="nameTitle" [columnWidth]="100">
                <th nui-header-cell *nuiHeaderCellDef i18n>Title</th>
                <td nui-cell *nuiCellDef="let element">
                    {{ element.nameTitle }}
                </td>
            </ng-container>

            <ng-container nuiColumnDef="nameFirst" [columnWidth]="100">
                <th nui-header-cell *nuiHeaderCellDef i18n>First Name</th>
                <td nui-cell *nuiCellDef="let element">
                    {{ element.nameFirst }}
                </td>
            </ng-container>

            <ng-container nuiColumnDef="nameLast" [columnWidth]="100">
                <th nui-header-cell *nuiHeaderCellDef i18n>Last Name</th>
                <td nui-cell *nuiCellDef="let element">
                    {{ element.nameLast }}
                </td>
            </ng-container>

            <ng-container nuiColumnDef="gender" [columnWidth]="100">
                <th nui-header-cell *nuiHeaderCellDef i18n>Gender</th>
                <td nui-cell *nuiCellDef="let element">{{ element.gender }}</td>
            </ng-container>

            <ng-container nuiColumnDef="country" [columnWidth]="150">
                <th nui-header-cell *nuiHeaderCellDef i18n>Country</th>
                <td nui-cell *nuiCellDef="let element">
                    {{ element.country }}
                </td>
            </ng-container>

            <ng-container nuiColumnDef="city" [columnWidth]="100">
                <th nui-header-cell *nuiHeaderCellDef i18n>City</th>
                <td nui-cell *nuiCellDef="let element">{{ element.city }}</td>
            </ng-container>

            <ng-container nuiColumnDef="postcode" [columnWidth]="100">
                <th nui-header-cell *nuiHeaderCellDef i18n>Postcode</th>
                <td nui-cell *nuiCellDef="let element">
                    {{ element.postcode }}
                </td>
            </ng-container>

            <ng-container nuiColumnDef="email" [columnWidth]="200">
                <th nui-header-cell *nuiHeaderCellDef i18n>Email</th>
                <td nui-cell *nuiCellDef="let element">{{ element.email }}</td>
            </ng-container>

            <ng-container nuiColumnDef="cell" [columnWidth]="150">
                <th nui-header-cell *nuiHeaderCellDef i18n>Cell</th>
                <td
                    nui-cell
                    *nuiCellDef="let element"
                    style="overflow: visible"
                >
                    {{ element.cell }}
                </td>
            </ng-container>

            <tr
                nui-header-row
                *nuiHeaderRowDef="displayedColumns; sticky: true"
            ></tr>
            <tr
                nui-row
                *nuiRowDef="let row; columns: displayedColumns"
                density="tiny"
            ></tr>
        </table>

        <div *ngIf="!makeSticky">
            <ng-container *ngTemplateOutlet="footer"></ng-container>
        </div>
    </cdk-virtual-scroll-viewport>
</div>

<div *ngIf="makeSticky">
    <ng-container *ngTemplateOutlet="footer"></ng-container>
</div>

<ng-template #footer>
    <footer class="nui-demo-scrolling-footer">
        <div class="h-100 w-100">
            <div
                *ngIf="isBusy; else defaultText"
                class="d-flex justify-content-center align-items-center"
            >
                <nui-spinner
                    class="mr-2 d-inline-flex"
                    [show]="isBusy"
                    size="small"
                ></nui-spinner>
                <span>Loading next {{ range }} items...</span>
            </div>
            <ng-template #defaultText>
                <div
                    class="h-100 d-flex justify-content-center align-items-center"
                >
                    Showing
                    <span class="px-2">{{ users.length }}</span>
                    of
                    <span class="pl-2">{{ totalItems }}</span>
                    <span *ngIf="users.length !== totalItems; else endOfData"
                        >, scroll down for more.</span
                    >
                </div>
                <ng-template #endOfData
                    ><strong>. All items loaded.</strong></ng-template
                >
            </ng-template>
        </div>
    </footer>
</ng-template>
`;export{l as default};
