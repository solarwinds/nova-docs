import"./chunk-XR34LRGE.js";var a=`<ng-template #listRepeatItemTemplate let-item="item">
    <div>{{ item.color }}&nbsp;</div>
    <div>{{ item.status }}</div>
</ng-template>

<ng-template #emptyListTemplate>
    <div class="d-flex flex-column align-items-center">
        <nui-image [isWatermark]="true" image="no-data-to-show"></nui-image>
        <p class="nui-text-small">No data to show</p>
    </div>
</ng-template>

<div>
    <nui-panel [panelMode]="panelOptions.panelMode" id="collapsible-panel">
        <div nuiPanelEmbeddedHeading>{{ panelOptions.heading }}</div>
        <div nuiPanelEmbeddedBody>
            <nui-expander
                [open]="statusExpanderOptions.expanded"
                [header]="statusExpanderOptions.header"
                icon="orion-sitemaster"
                class="mb-5"
            >
                <nui-checkbox-group
                    id="nui-demo-checkbox-group-basic"
                    name="cType"
                    [values]="selectedColorTypes"
                    (valuesChange)="onSelectedColorTypesChange($event)"
                >
                    <nui-checkbox
                        *ngFor="let status of allStatuses; let i = index"
                        [value]="status"
                        [checked]="isColorTypeChecked(status)"
                    >
                        <div class="d-flex align-items-center">
                            <nui-icon
                                class="mr-2"
                                [icon]="statusIcons[status].iconName"
                            ></nui-icon>
                            <span class="mr-2">{{ status }}</span>
                            <span
                                *ngIf="isGreaterThanZero(showStatus(status))"
                                class="mr-2"
                                >{{ showStatus(status) }}</span
                            >
                        </div>
                    </nui-checkbox>
                </nui-checkbox-group>
            </nui-expander>
            <nui-expander
                [open]="colorExpanderOptions.expanded"
                [header]="colorExpanderOptions.header"
                icon="orion-sitemaster"
                class="mb-5"
            >
                <nui-checkbox-group
                    id="nui-demo-checkbox-group-basic"
                    name="criteriaColor"
                    [values]="selectedCriteriaColors"
                    (valuesChange)="onSelectedCriteriaChange($event)"
                >
                    <nui-checkbox
                        *ngFor="let color of allColors; let i = index"
                        [value]="color"
                        [checked]="isColorCriteriaChecked(color)"
                    >
                        <div class="d-flex align-items-center">
                            <nui-icon
                                class="mr-2"
                                [icon]="colorIcons[color].iconName"
                            ></nui-icon>
                            <span class="mr-2">{{ color }}</span>
                            <span
                                *ngIf="isGreaterThanZero(showColor(color))"
                                class="mr-2"
                                >{{ showColor(color) }}</span
                            >
                        </div>
                    </nui-checkbox>
                </nui-checkbox-group>
            </nui-expander>
        </div>
        <div class="push-down">
            <div class="d-flex flex-row">
                <div class="mb-3" [hidden]="!hasItems()">
                    <nui-sorter
                        [itemsSource]="sorterItems"
                        [selectedItem]="sortBy"
                        [sortDirection]="initialSortDirection"
                        (sorterAction)="onSorterAction($event)"
                        #filteringSorter
                    >
                    </nui-sorter>
                </div>
                <div class="ml-auto">
                    <nui-search
                        [value]="searchTerm"
                        (search)="applyFilters()"
                        #filteringSearch
                    >
                    </nui-search>
                </div>
            </div>
            <div *ngIf="hasItems(); else emptyListTemplate">
                <nui-repeat
                    [itemsSource]="filteringState?.repeat?.itemsSource"
                    [repeatItemTemplateRef]="listRepeatItemTemplate"
                    paddingSize="normal"
                    #filteringRepeat
                >
                </nui-repeat>
            </div>
            <div class="mt-3" [hidden]="!hasItems()">
                <nui-paginator
                    [page]="page"
                    [total]="filteringState?.paginator?.total"
                    (pagerAction)="applyFilters()"
                    #filteringPaginator
                >
                </nui-paginator>
            </div>
        </div>
    </nui-panel>
</div>
`;export{a as default};
