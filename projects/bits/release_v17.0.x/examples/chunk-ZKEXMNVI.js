import"./chunk-XR34LRGE.js";var i=`<div class="container">
    <h3>States of Checkbox</h3>
    <div class="row">
        <div class="col-xl-2">
            <nui-checkbox id="nui-demo-checkbox"></nui-checkbox>
        </div>
        <div class="col-xl-2">
            <nui-checkbox [disabled]="true"></nui-checkbox>
        </div>
        <div class="col-xl-2">
            <nui-checkbox [checked]="true"></nui-checkbox>
        </div>
        <div class="col-xl-2">
            <nui-checkbox [disabled]="true" [checked]="true"></nui-checkbox>
        </div>
        <div class="col-xl-2">
            <nui-checkbox [indeterminate]="true"></nui-checkbox>
        </div>
        <div class="col-xl-2">
            <nui-checkbox
                [disabled]="true"
                [indeterminate]="true"
            ></nui-checkbox>
        </div>
    </div>

    <h3>States of Checkbox with Label</h3>
    <div class="row">
        <div class="col-xl-2">
            <nui-checkbox id="nui-demo-checkbox-basic"> Empty </nui-checkbox>
        </div>
        <div class="col-xl-2">
            <nui-checkbox
                id="nui-demo-checkbox-basic-disabled"
                [disabled]="true"
            >
                Empty - Disabled
            </nui-checkbox>
        </div>
        <div class="col-xl-2">
            <nui-checkbox id="nui-demo-checkbox-checked" [checked]="true">
                Checked
            </nui-checkbox>
        </div>
        <div class="col-xl-2">
            <nui-checkbox
                id="nui-demo-checkbox-checked-disabled"
                [disabled]="true"
                [checked]="true"
            >
                Checked - Disabled
            </nui-checkbox>
        </div>
        <div class="col-xl-2">
            <nui-checkbox
                id="nui-demo-checkbox-indeterminate"
                [indeterminate]="true"
            >
                Indeterminate</nui-checkbox
            >
        </div>
        <div class="col-xl-2">
            <nui-checkbox
                id="nui-demo-checkbox-indeterminate-disabled"
                [disabled]="true"
                [indeterminate]="true"
            >
                Indeterminate - Disabled
            </nui-checkbox>
        </div>
    </div>

    <h3>Checkbox with a Hint</h3>
    <nui-checkbox
        id="nui-demo-checkbox-with-hint"
        hint="This is some help text"
        [checked]="true"
    >
        Checkbox with help text
    </nui-checkbox>

    <h3>Special Template of Checkbox</h3>
    <nui-checkbox
        id="nui-demo-checkbox-special"
        hint="Toggle state - Perform link action"
        [checked]="false"
    >
        Check-uncheck -
        <a
            href="../components/CheckboxComponent.html"
            target="_blank"
            class="link-in-checkbox"
        >
            Custom link action
        </a>
    </nui-checkbox>
</div>
`;export{i as default};
