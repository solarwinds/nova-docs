import"./chunk-VBFW7A5V.js";var o=`<div class="container">
    <nui-radio-group
        id="basic-radio-group"
        name="fruit"
        [(value)]="selectedFruit"
    >
        <nui-radio
            *ngFor="let fruit of fruits"
            [value]="fruit"
            [checked]="fruit === 'Orange'"
            [disabled]="fruit === 'Banana'"
        >
            {{ fruit }}
        </nui-radio>
    </nui-radio-group>

    <form [formGroup]="disabledForm">
        <nui-form-field
            caption="Radio Group"
            [control]="disabledForm.controls['radioGroup']"
        >
            <nui-radio-group
                id="disabled-radio-group"
                formControlName="radioGroup"
                name="vegetable"
            >
                <nui-radio
                    *ngFor="let vegetable of vegetables"
                    [value]="vegetable"
                >
                    {{ vegetable }}
                </nui-radio>
            </nui-radio-group>
        </nui-form-field>
    </form>
    <nui-checkbox
        id="toggle-disabled-group-checkbox"
        [checked]="true"
        (valueChange)="toggleDisabled($event)"
    >
        Disabled
    </nui-checkbox>
</div>
`;export{o as default};
