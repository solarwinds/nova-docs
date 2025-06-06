import"./chunk-VBFW7A5V.js";var t=`<div class="container">
    <div class="row">
        <div class="col-xl">
            <h3>Basic Textbox number</h3>
            <nui-textbox-number
                id="nui-visual-test-textbox-number"
            ></nui-textbox-number>
            <hr />
        </div>
    </div>
    <div class="row">
        <div class="col-xl">
            <h3>Textbox number with min\\max</h3>
            <div [formGroup]="reactiveForm">
                <nui-textbox-number
                    id="nui-visual-test-textbox-number-min-max"
                    formControlName="number"
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
                id="nui-visual-test-textbox-number-disabled"
                value="-7"
                [disabled]="true"
            >
            </nui-textbox-number>
            <hr />
        </div>
    </div>
</div>
`;export{t as default};
