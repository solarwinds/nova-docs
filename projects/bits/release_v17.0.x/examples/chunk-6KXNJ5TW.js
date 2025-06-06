import"./chunk-XR34LRGE.js";var o=`<div class="container">
    <div>
        <nui-chips
            id="nui-demo-chips-flat-horizontal"
            [autoHide]="true"
            [itemsSource]="horizontalFlatItemsSource"
            (chipRemoved)="onClear($event)"
            (removeAll)="onClearAll()"
        >
        </nui-chips>
    </div>

    <div>
        <nui-chips
            id="nui-demo-chips-flat-vertical"
            [autoHide]="true"
            title="Statuses"
            [itemsSource]="verticalFlatItemsSource"
            orientation="vertical"
            (chipRemoved)="onClearVertical($event)"
            (removeAll)="onClearAllVerticalFlat()"
        >
        </nui-chips>
    </div>

    <div>
        <nui-chips
            id="nui-demo-chips-grouped-horizontal"
            [autoHide]="false"
            [itemsSource]="horizontalGroupedItemsSource"
            (chipRemoved)="onClearGroup($event)"
            (removeAll)="onClearAll()"
        >
        </nui-chips>
    </div>

    <div>
        <nui-chips
            id="nui-demo-chips-vertical"
            [autoHide]="false"
            [itemsSource]="verticalFlatItemsSource"
            orientation="vertical"
            (chipRemoved)="onClearVertical($event)"
            (removeAll)="onClearAllVerticalFlat()"
        >
        </nui-chips>
    </div>

    <div>
        <nui-chips
            id="nui-demo-chips-grouped-vertical"
            [autoHide]="true"
            title="Filters"
            [itemsSource]="verticalGroupedItemsSource"
            orientation="vertical"
            (chipRemoved)="onClearGroup($event)"
            (removeAll)="onClearAll()"
        >
        </nui-chips>
    </div>

    <div>
        <nui-chips
            id="nui-demo-chips-autohide"
            [autoHide]="false"
            [itemsSource]="horizontalFlatItemsSource"
            (chipRemoved)="onClear($event)"
            (removeAll)="onClearAll()"
        >
        </nui-chips>
    </div>

    <div>
        <nui-chips-overflow-example></nui-chips-overflow-example>
    </div>
</div>
`;export{o as default};
