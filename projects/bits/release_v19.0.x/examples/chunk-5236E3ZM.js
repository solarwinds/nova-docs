import"./chunk-VBFW7A5V.js";var s=`<ng-template #customSelectTemplate let-item="context">
    <nui-icon [icon]="item.icon"></nui-icon>
    <div class="media-body" class="select-examples-custom-template">
        <h2>{{ item.value }}</h2>
        <h5>{{ item.name }}</h5>
        <nui-progress
            [showProgress]="true"
            [show]="true"
            [percent]="item.progress"
        ></nui-progress>
    </div>
</ng-template>
<nui-select
    [value]="dataset.selectedItem"
    id="nui-demo-select-with-template"
    [itemsSource]="dataset.items"
    [displayValue]="dataset.displayValue"
    [customTemplate]="customSelectTemplate"
></nui-select>
`;export{s as default};
