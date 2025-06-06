import"./chunk-XR34LRGE.js";var t=`<div class="example single-selection-example">
    <p>
        <span i18n>Selection:</span>
        <span id="nui-demo-singleselect-value">{{
            selectedPeople | json
        }}</span>
    </p>
    <p>
        <nui-switch [(value)]="preventRowClick">prevent row click</nui-switch>
    </p>
    <nui-repeat
        id="nui-demo-single-repeat"
        [itemsSource]="people"
        [selection]="selectedPeople"
        selectionMode="single"
        [preventRowClick]="preventRowClick"
        (selectionChange)="selectedPeople = $event"
        [repeatItemTemplateRef]="repeatPeopleItemTemplate"
    >
    </nui-repeat>
</div>

<ng-template #repeatPeopleItemTemplate let-item="item">
    <nui-icon class="flex-row-item" icon="user"></nui-icon>
    <div class="flex-row-item flex-column-container">
        <div class="name-item">{{ item.name }}</div>
        <div [ngClass]="item.level">{{ item.level }}</div>
        <div class="status-item">{{ item.status }}</div>
    </div>
</ng-template>
`;export{t as default};
