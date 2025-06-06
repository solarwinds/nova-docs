import"./chunk-XR34LRGE.js";var m=`<div class="container">
    <div class="row">
        <div class="col">
            <h3>Basic TimePicker</h3>
            <nui-time-picker
                [model]="myTime"
                id="nui-visual-test-timepicker-basic"
            ></nui-time-picker>
            <hr />
        </div>
        <div class="col">
            <h3>Disabled TimePicker</h3>
            <nui-time-picker
                [model]="myTime"
                id="nui-visual-test-timepicker-disabled"
                [isDisabled]="true"
            ></nui-time-picker>
            <hr />
        </div>
        <div class="w-100"></div>
        <div class="col">
            <h3>TimePicker with Custom Format</h3>
            <nui-time-picker
                [model]="myTime"
                id="nui-visual-test-custom-format-timepicker"
                timeFormat="h:mm:ss"
            ></nui-time-picker>
            <hr />
        </div>
        <div class="col">
            <h3>TimePicker with Custom Step</h3>
            <nui-time-picker
                [model]="myTime"
                id="nui-visual-test-custom-step-timepicker"
                [timeStep]="10"
            ></nui-time-picker>
            <hr />
        </div>
        <div class="w-100"></div>
        <div class="col-6">
            <h3>Using TimePicker with Validation</h3>
            <form [formGroup]="myForm">
                <div class="form-group">
                    <nui-time-picker
                        [model]="myTime"
                        id="nui-visual-test-required-timepicker"
                        formControlName="timePickerFormControl"
                        [isInErrorState]="
                            myForm.controls['timePickerFormControl'].invalid
                        "
                        (timeChanged)="valueChange($event)"
                    >
                    </nui-time-picker>
                </div>
            </form>
            <hr />
        </div>
    </div>
</div>
`;export{m as default};
