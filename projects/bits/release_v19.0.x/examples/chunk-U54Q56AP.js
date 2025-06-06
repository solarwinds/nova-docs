import"./chunk-VBFW7A5V.js";var o=`<div class="container">
    <div>
        <h3>Basic chips</h3>
        <nui-chips
            id="nui-demo-chips-flat-horizontal-visual"
            [itemsSource]="horizontalFlatItemsSource"
            (chipRemoved)="onClear($event)"
            (removeAll)="onClearAll()"
        >
        </nui-chips>
    </div>
    <hr />

    <div>
        <h3>Chips grouped</h3>
        <nui-chips
            id="nui-demo-chips-grouped-horizontal-visual"
            [itemsSource]="horizontalGroupedItemsSource"
            (chipRemoved)="onClearGroup($event)"
            (removeAll)="onClearAll()"
        >
        </nui-chips>
    </div>
    <hr />

    <div>
        <h3>Chips vertical</h3>
        <nui-chips
            id="nui-demo-chips-vertical-visual"
            [itemsSource]="verticalFlatItemsSource"
            title="Statuses"
            i18n-title
            orientation="vertical"
            (chipRemoved)="onClear($event)"
            (removeAll)="onClearAll()"
        >
        </nui-chips>
    </div>
    <hr />

    <div>
        <h3>Chips vertical grouped</h3>
        <nui-chips
            id="nui-demo-chips-grouped-vertical-visual"
            [itemsSource]="verticalGroupedItemsSource"
            title="Filters"
            i18n-title
            orientation="vertical"
            (chipRemoved)="onClear($event)"
            (removeAll)="onClearAll()"
        >
        </nui-chips>
    </div>
    <hr />

    <div>
        <h3>Chips overflow</h3>
        <nui-chips-overflow-example></nui-chips-overflow-example>
    </div>
    <hr />

    <div>
        <h3>Chip content-projection</h3>
        <nui-chip
            >Custom content
            <nui-icon class="ml-2" iconSize="small" icon="add"></nui-icon
        ></nui-chip>
    </div>
    <hr />

    <div>
        <h3>Chips Custom Css</h3>
        <nui-chips-custom-css-example></nui-chips-custom-css-example>
    </div>
    <hr />
</div>
`;export{o as default};
