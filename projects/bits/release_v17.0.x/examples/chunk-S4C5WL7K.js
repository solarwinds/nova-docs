import"./chunk-XR34LRGE.js";var o=`<ng-template #customComboboxTemplate let-item="context">
    <nui-icon [icon]="item.icon"></nui-icon>
    <div class="media-body" class="combobox-examples-custom-template">
        <h2>{{ item.value }}</h2>
        <h5>{{ item.name }}</h5>
        <nui-progress
            [showProgress]="true"
            [show]="true"
            [percent]="item.progress"
        ></nui-progress>
    </div>
</ng-template>
<nui-combobox
    [value]="dataset.selectedItem"
    [itemsSource]="displayedItems"
    (changed)="textboxChanged($event)"
    [displayValue]="dataset.displayValue"
    [customTemplate]="customComboboxTemplate"
    placeholder="Select item"
    i18n-placeholder
></nui-combobox>
`;export{o as default};
