import"./chunk-XR34LRGE.js";var e=`<div class="container">
    <div class="row">
        <div class="col">
            <h3>Basic Combobox</h3>
            <nui-combobox
                id="nui-visual-test-basic-combobox"
                [itemsSource]="dataset.items"
            >
            </nui-combobox>
            <hr />
        </div>
        <div class="col">
            <h3>Combobox with Placeholder</h3>
            <nui-combobox
                id="nui-visual-test-combobox-with-placeholder"
                [itemsSource]="dataset.items"
                placeholder="Select item"
            >
            </nui-combobox>
            <hr />
        </div>
        <div class="w-100"></div>
        <div class="col">
            <h3>Disabled Combobox</h3>
            <nui-combobox
                id="nui-visual-test-combobox-disabled"
                [value]="dataset.selectedItem"
                [isDisabled]="true"
                [itemsSource]="dataset.items"
            >
            </nui-combobox>
            <hr />
        </div>
        <div class="col">
            <h3>Required Combobox</h3>
            <nui-combobox
                id="nui-visual-test-combobox-required"
                value=""
                [isInErrorState]="errorState"
                [itemsSource]="dataset.items"
                (changed)="valueChange($event)"
            >
            </nui-combobox>
            <hr />
        </div>
        <div class="w-100"></div>
        <div class="col">
            <h3>Justified Combobox</h3>
            <nui-combobox
                id="nui-visual-test-justified-combobox"
                [itemsSource]="dataset.items"
                placeholder="Select item"
                [justified]="true"
            >
            </nui-combobox>
            <hr />
        </div>
        <div class="w-100"></div>
        <div class="col">
            <h3>Combobox with Groups</h3>
            <nui-combobox
                id="nui-visual-test-combobox-separators"
                [itemsSource]="displayedItems"
                (changed)="textboxChanged($event)"
            >
            </nui-combobox>
            <hr />
        </div>
    </div>
</div>
`;export{e as default};
