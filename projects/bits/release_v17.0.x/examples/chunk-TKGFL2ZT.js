import"./chunk-XR34LRGE.js";var o=`<div class="container">
    <div class="row">
        <div class="col">
            <h3>Basic Checkbox-Group with Hint Text</h3>
            <nui-checkbox-group
                id="nui-demo-checkbox-group-basic"
                name="vegetable"
                [values]="selectedVegetables"
            >
                <nui-checkbox
                    *ngFor="let vegetable of vegetables"
                    [value]="vegetable"
                    hint="This is some help text"
                    [checked]="isChecked(vegetable)"
                >
                    {{ vegetable }}
                </nui-checkbox>
                <nui-checkbox
                    hint="If it's not disabled ring the alarm!"
                    id="nui-demo-checkbox-group-1-disabled-checkbox"
                    [value]="disabledOne"
                    [checked]="!isChecked(disabledOne)"
                    disabled="true"
                    >{{ disabledOne }}</nui-checkbox
                >
            </nui-checkbox-group>
            <hr />
        </div>
        <div class="col">
            <h3>Inline Checkbox-Group</h3>
            <nui-checkbox-group
                id="nui-demo-checkbox-group-inline"
                class="nui-checkbox-group-inline"
                [values]="selectedVegetables"
                name="vegetable"
            >
                <nui-checkbox
                    *ngFor="let vegetable of vegetables"
                    [value]="vegetable"
                >
                    {{ vegetable }}
                </nui-checkbox>
            </nui-checkbox-group>
            <hr />
        </div>
        <div class="w-100"></div>
        <div class="col">
            <h3>Justified Checkbox-Group</h3>
            <nui-checkbox-group
                id="nui-demo-checkbox-group-justified"
                name="vegetable"
                [values]="selectedVegetables"
            >
                <nui-checkbox
                    *ngFor="let vegetable of vegetables"
                    [value]="vegetable"
                    [checked]="isChecked(vegetable)"
                    class="nui-checkbox--justified"
                >
                    {{ vegetable }}
                </nui-checkbox>
            </nui-checkbox-group>
            <hr />
        </div>
        <div class="col">
            <h3>Disabled checkboxes within the form</h3>
            <form [formGroup]="testForm">
                <nui-checkbox-group
                    id="nui-demo-checkbox-group-in-form-disabled-checkboxes"
                    name="vegetable"
                    formControlName="enabledCheckboxGroup"
                >
                    <nui-checkbox
                        [value]="vegetables[0]"
                        [disabled]="true"
                        [checked]="isChecked(vegetables[0])"
                    >
                        {{ vegetables[0] }}</nui-checkbox
                    >
                    <nui-checkbox
                        [value]="vegetables[1]"
                        [disabled]="false"
                        [checked]="isChecked(vegetables[1])"
                    >
                        {{ vegetables[1] }}</nui-checkbox
                    >
                    <nui-checkbox
                        [value]="vegetables[2]"
                        [disabled]="true"
                        [checked]="isChecked(vegetables[2])"
                    >
                        {{ vegetables[2] }}</nui-checkbox
                    >
                    <nui-checkbox
                        [value]="vegetables[3]"
                        [disabled]="false"
                        [checked]="isChecked(vegetables[3])"
                    >
                        {{ vegetables[3] }}</nui-checkbox
                    >
                </nui-checkbox-group>
            </form>
        </div>
    </div>
    <div class="d-flex flex-column mt-5">
        <h3>Disabled checkboxes within the disabled form</h3>
        <form [formGroup]="testForm">
            <nui-checkbox-group
                id="nui-demo-checkbox-group-in-form"
                name="vegetable"
                formControlName="disabledCheckboxGroup"
            >
                <nui-checkbox
                    *ngFor="let vegetable of vegetables"
                    [value]="vegetable"
                    [checked]="isChecked(vegetable)"
                >
                    {{ vegetable }}
                </nui-checkbox>
            </nui-checkbox-group>
        </form>
    </div>
</div>
`;export{o as default};
