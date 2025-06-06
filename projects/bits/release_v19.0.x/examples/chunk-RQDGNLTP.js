import"./chunk-VBFW7A5V.js";var i=`<div class="container">
    <h3>Basic Radio Group</h3>
    <nui-radio-group
        id="fruit-radio-group"
        name="fruit"
        [(value)]="selectedFruit"
    >
        <nui-radio
            *ngFor="let fruit of fruits"
            [value]="fruit"
            [checked]="fruit === 'Orange'"
            [disabled]="fruit === 'Kiwi'"
        >
            {{ fruit }}
        </nui-radio>
    </nui-radio-group>
    <hr />

    <h3>Radio Group with pre-selected option and hints</h3>
    <nui-radio-group
        id="color-radio-group"
        name="color"
        [(value)]="selectedColor"
    >
        <nui-radio
            *ngFor="let color of colors"
            [value]="color"
            [hint]="colorHints[color]"
            [disabled]="color === 'Blue'"
            [checked]="color === 'Green'"
        >
            {{ color }}
        </nui-radio>
    </nui-radio-group>
    <hr />

    <h3>Inline Horizontal Group</h3>
    <nui-radio-group
        class="nui-radio-group-inline"
        id="inline-color-radio-group"
        name="color"
        [(value)]="selectedColor"
    >
        <nui-radio
            *ngFor="let color of colors"
            [value]="color"
            [hint]="colorHints[color]"
            [disabled]="color === 'Red'"
            [checked]="color === 'Green'"
        >
            {{ color }}
        </nui-radio>
    </nui-radio-group>
    <hr />

    <h3>Part Of Form</h3>
    <nui-radio-group-in-form-example
        id="vegetable-radio-group"
    ></nui-radio-group-in-form-example>
    <hr />

    <form [formGroup]="disabledForm">
        <nui-form-field
            caption="Disabled Radio Group in form"
            [control]="disabledForm.controls['radioGroup']"
        >
            <nui-radio-group
                id="fruit-radio-group-disabled"
                formControlName="radioGroup"
                name="fruit-disabled"
            >
                <nui-radio *ngFor="let fruit of fruits" [value]="fruit">
                    {{ fruit }}
                </nui-radio>
            </nui-radio-group>
        </nui-form-field>
    </form>
</div>
`;export{i as default};
