import"./chunk-XR34LRGE.js";var a=`<nui-repeat
    [itemsSource]="companies"
    [dragHandleTemplateRef]="dragHandleTemplate"
    [repeatItemTemplateRef]="repeatItemTemplate"
    (itemsReordered)="onItemsReordered($event)"
>
</nui-repeat>

<!-- Content template for each item -->
<ng-template #repeatItemTemplate let-item="item">
    {{ item }}
</ng-template>

<!-- Drag handle template -->
<ng-template #dragHandleTemplate let-item="item">
    <nui-icon icon="drag"></nui-icon>
</ng-template>
`;export{a as default};
