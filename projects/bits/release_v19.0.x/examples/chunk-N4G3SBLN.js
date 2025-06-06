import"./chunk-VBFW7A5V.js";var t=`<div class="container">
    <div class="row">
        <div class="col-xl">
            <h3>Basic Textbox number</h3>
            <nui-textbox-number id="test-textbox-number"></nui-textbox-number>
            <hr />
        </div>
    </div>
    <div class="row">
        <div class="col-xl">
            <h3>Textbox number with min\\max</h3>
            <div>
                <nui-textbox-number
                    id="test-textbox-number-min-max"
                    placeholder="Enter value between 1 and 10"
                    [minValue]="1"
                    [maxValue]="10"
                >
                </nui-textbox-number>
            </div>
            <hr />
        </div>
    </div>
    <div class="row">
        <div class="col-xl">
            <h3>Disabled Textbox number</h3>
            <nui-textbox-number
                id="test-textbox-number-disabled"
                value="-7"
                [disabled]="true"
            >
            </nui-textbox-number>
            <hr />
        </div>
    </div>
    <div class="row">
        <div class="col-xl">
            <h3>Textbox number validation</h3>
            <form #form="ngForm">
                <nui-textbox-number
                    id="test-textbox-number-validation"
                    name="number"
                    [(ngModel)]="value"
                    [minValue]="1"
                    [maxValue]="10"
                >
                </nui-textbox-number>
                <div>
                    VALID =
                    <span class="test-textbox-number-validation__valid">{{
                        form.valid
                    }}</span>
                </div>
                <div>VALUE = [{{ value }}]</div>
            </form>
            <hr />
        </div>
    </div>
    <div class="row">
        <div class="col-xl">
            <h3>Textbox number reactive form value</h3>
            <div [formGroup]="reactiveForm">
                <nui-textbox-number
                    id="test-textbox-number-reactive"
                    formControlName="number"
                    [minValue]="1"
                    [maxValue]="10"
                >
                </nui-textbox-number>
                <div>FORM VALUE = [{{ reactiveForm.value | json }}]</div>
            </div>
            <hr />
        </div>
    </div>
</div>
`;export{t as default};
