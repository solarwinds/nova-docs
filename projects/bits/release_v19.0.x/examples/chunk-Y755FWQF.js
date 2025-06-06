import"./chunk-VBFW7A5V.js";var i=`<div class="container d-flex">
    <div class="d-flex flex-column mr-5">
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
    </div>
    <div class="d-flex flex-column mt-5">
        <nui-checkbox-group
            id="nui-demo-checkbox-group-justified"
            name="vegetable"
            [values]="selectedVegetables"
        >
            <nui-checkbox
                *ngFor="let vegetable of vegetables"
                [value]="vegetable"
                [hint]="
                    hints.indexOf(vegetable) >= 0
                        ? hints[hints.indexOf(vegetable)]
                        : null
                "
                [checked]="isChecked(vegetable)"
                class="nui-checkbox--justified"
            >
                {{ vegetable }}
            </nui-checkbox>
        </nui-checkbox-group>
    </div>
    <div class="d-flex flex-column mt-5">
        <form [formGroup]="testForm">
            <nui-checkbox-group
                id="nui-demo-checkbox-group-in-form-disabled-checkboxes"
                name="vegetable"
                formControlName="checkboxGroup2"
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
    <div class="d-flex flex-column mr-5">
        <nui-checkbox-group-in-form-example
            id="nui-demo-checkbox-group-part-of-form"
        ></nui-checkbox-group-in-form-example>
    </div>
</div>
`;export{i as default};
