import"./chunk-VBFW7A5V.js";var i=`<h1>Basic</h1>
<nui-combobox
    id="nui-demo-basic-combobox"
    [itemsSource]="dataset"
    placeholder="Select item"
></nui-combobox>
<hr />
<h1>Clear On Blur</h1>
<nui-combobox
    id="nui-demo-combobox-with-clear-on-blur"
    [itemsSource]="dataset"
    [clearOnBlur]="true"
    placeholder="Select Item"
></nui-combobox>
<hr />
<h1>Disabled</h1>
<nui-combobox
    id="nui-demo-combobox-disabled"
    value="Item 1"
    [isDisabled]="true"
    [itemsSource]="dataset"
></nui-combobox>
<hr />
<h1>Display Value</h1>
<nui-combobox
    id="nui-demo-display-value-combobox"
    [itemsSource]="displayValueDataset"
    displayValue="name"
    (changed)="onDisplayValueChange($event)"
    placeholder="Select item"
></nui-combobox>
<p>You selected: {{ displayValueSelectedItem | json }}</p>
<hr />
<h1>With Icon</h1>
<nui-combobox
    id="nui-demo-combobox-with-icon"
    value="Item 1"
    icon="add"
    [itemsSource]="dataset"
></nui-combobox>
<hr />
<h1>Inline</h1>
<nui-combobox
    id="nui-demo-inline-combobox"
    [itemsSource]="dataset"
    [inline]="true"
    placeholder="Select item"
></nui-combobox>
<hr />
<h1>Reactive Form</h1>
<form [formGroup]="myForm" (submit)="onSubmit()">
    <div class="form-group">
        <nui-combobox
            id="nui-demo-combobox-reactive-form"
            formControlName="item"
            [isInErrorState]="
                myForm.controls['item'].invalid &&
                myForm.controls['item'].touched
            "
            [itemsSource]="dataset"
            placeholder="Select item"
            required
        ></nui-combobox>
        <button nui-button type="submit" class="mt-1">Submit</button>
    </div>
</form>
<hr />
<h1>Required</h1>
<nui-combobox
    id="nui-demo-combobox-required"
    value="Item 1"
    [isInErrorState]="errorState"
    [itemsSource]="dataset"
    (changed)="requiredValueChange($event)"
></nui-combobox>
<hr />
<h1>With Separators</h1>
<nui-combobox
    id="nui-demo-combobox-separators"
    [itemsSource]="separatorsDisplayedItems"
    (changed)="separatorsTextboxChanged($event)"
    placeholder="Select item"
></nui-combobox>
<hr />
<h1>Typeahead</h1>
<nui-combobox
    id="nui-demo-combobox-typeahead"
    [itemsSource]="typeaheadDisplayedItems"
    [clearOnBlur]="true"
    displayValue="label"
    (changed)="typeaheadTextboxChanged($event)"
    placeholder="Select item"
></nui-combobox>
<hr />
<h1>Justified</h1>
<div class="w-25">
    <nui-textbox-number
        id="nui-test-width-input"
        [value]="width"
        (valueChange)="changeWidth($event)"
    ></nui-textbox-number>
</div>
<div [style.width.px]="width" id="nui-demo-justified-combobox-container">
    <nui-combobox
        id="nui-demo-justified-combobox"
        [itemsSource]="dataset"
        placeholder="Select item"
        [justified]="true"
    ></nui-combobox>
</div>
<hr />
<h1>HTML in menu items</h1>
<nui-combobox
    id="nui-demo-combobox-html-in-items"
    [itemsSource]="htmlDisplayedItems"
></nui-combobox>
<hr />
<h1>Custom template</h1>
<nui-combobox
    id="nui-demo-combobox-with-template"
    [itemsSource]="customTemplateItems"
    displayValue="value"
    [customTemplate]="customComboboxTemplate"
></nui-combobox>
<ng-template #customComboboxTemplate let-item="context">
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
<hr />
<h1>Append to body</h1>
<nui-combobox
    id="nui-demo-combobox-append-to-body"
    [itemsSource]="dataset"
    [appendToBody]="true"
    placeholder="Select item"
></nui-combobox>
<hr />
<h1>Remove value button</h1>
<nui-combobox
    id="nui-demo-combobox-remove-value-button"
    [itemsSource]="dataset"
    [isRemoveValueEnabled]="true"
    placeholder="Select item"
></nui-combobox>
`;export{i as default};
