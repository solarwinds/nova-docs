import"./chunk-XR34LRGE.js";var i=`<div class="container">
    <div class="row">
        <div class="col">
            <h3>Basic Select</h3>
            <nui-select
                id="nui-demo-basic-select"
                [itemsSource]="datasetBasic.items"
                placeholder="Select item"
            >
            </nui-select>
        </div>
        <div class="col">
            <h3>Disabled Select</h3>
            <nui-select
                id="nui-demo-basic-select-disabled"
                [itemsSource]="datasetDisabled.items"
                [value]="datasetDisabled.selectedItem"
                [isDisabled]="true"
            >
            </nui-select>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3>Required Select</h3>
            <nui-select
                id="nui-demo-basic-select-required"
                [itemsSource]="datasetBasic.items"
                [isInErrorState]="isInErrorState()"
                [value]="datasetBasic.selectedItem"
                (changed)="valueChange($event)"
            >
            </nui-select>
        </div>
        <div class="col">
            <h3>Select with separators</h3>
            <nui-select
                id="nui-demo-select-separators"
                [itemsSource]="datasetSeparator.itemsInGroups"
                [value]="datasetSeparator.selectedItem"
                (changed)="valueChange($event)"
            >
            </nui-select>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3>Inline Select</h3>
            <p>
                <span
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor.</span
                >
                <nui-select
                    id="nui-demo-inline-select"
                    [inline]="true"
                    [itemsSource]="datasetBasic.items"
                    placeholder="Select item"
                >
                </nui-select>
                <span
                    >Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.</span
                >
            </p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3>Filling the Parent Width</h3>
            <nui-select
                [value]="datasetBasic.selectedItem"
                id="nui-demo-select-justified"
                [justified]="true"
                [itemsSource]="datasetBasic.items"
            >
            </nui-select>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3>Custom Template for Select</h3>
            <ng-template #customSelectTemplate let-item="context">
                <div class="w-100">
                    <nui-icon [icon]="item.icon"></nui-icon>
                    <div
                        class="media-body"
                        class="select-examples-custom-template"
                    >
                        <h2>{{ item.value }}</h2>
                        <h5>{{ item.name }}</h5>
                        <nui-progress
                            [showProgress]="true"
                            [show]="true"
                            [percent]="item.progress"
                        >
                        </nui-progress>
                    </div>
                </div>
            </ng-template>
            <nui-select
                [value]="datasetCustom.selectedItem"
                id="nui-demo-select-with-template"
                [justified]="true"
                [itemsSource]="datasetCustom.items"
                [displayValue]="datasetCustom.displayValue"
                [customTemplate]="customSelectTemplate"
            ></nui-select>
        </div>
        <div class="col">
            <h3>Select with Reactive Forms</h3>
            <form [formGroup]="myForm" (submit)="onSubmit()">
                <div class="form-group">
                    <nui-select
                        placeholder="Select item"
                        id="nui-demo-basic-select-reactive-form"
                        formControlName="item"
                        [isInErrorState]="
                            myForm.controls['item'].invalid &&
                            myForm.controls['item'].touched
                        "
                        [itemsSource]="datasetBasic.items"
                        (changed)="valueChange($event)"
                    ></nui-select>
                    <button nui-button type="submit" class="mt-1">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
`;export{i as default};
