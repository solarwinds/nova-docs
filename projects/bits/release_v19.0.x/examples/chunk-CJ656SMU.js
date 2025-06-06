import"./chunk-VBFW7A5V.js";var r=`<div class="container">
    <div class="row">
        <div class="col">
            <div class="row"><h3>Basic Usage</h3></div>
            <div class="row">
                <nui-date-picker
                    id="nui-basic-usage-datepicker"
                    [value]="initDate"
                    [preserveInsignificant]="true"
                >
                </nui-date-picker>
            </div>
            <hr />
        </div>

        <div class="col">
            <div class="row"><h3>Disabled</h3></div>
            <div class="row">
                <nui-date-picker
                    id="nui-disabled-datepicker"
                    [value]="initDate"
                    [isDisabled]="true"
                    [preserveInsignificant]="true"
                >
                </nui-date-picker>
            </div>
            <hr />
        </div>

        <div class="col">
            <div class="row"><h3>Error State</h3></div>
            <div class="row">
                <form [formGroup]="myForm">
                    <div class="form-group">
                        <nui-date-picker
                            id="nui-error-state-datepicker"
                            formControlName="datePickerFormControl"
                            [preserveInsignificant]="true"
                            [isInErrorState]="true"
                        >
                        </nui-date-picker>
                    </div>
                </form>
            </div>
            <hr />
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="row"><h3>Inline State</h3></div>
            <div class="row">
                <nui-date-picker
                    id="nui-inline-state-datepicker"
                    [value]="initDate"
                    [inline]="true"
                    [preserveInsignificant]="true"
                >
                </nui-date-picker>
            </div>
            <hr />
        </div>

        <div class="col">
            <div class="row"><h3>Current Month State</h3></div>
            <div class="row">
                <nui-date-picker
                    id="nui-current-month-state-datepicker"
                    [value]="initDate"
                    [inline]="true"
                    [onlyCurrentMonth]="true"
                    [preserveInsignificant]="true"
                >
                </nui-date-picker>
            </div>
            <hr />
        </div>

        <div class="col">
            <div class="row"><h3>Show Weeks</h3></div>
            <div class="row">
                <nui-date-picker
                    id="nui-show-weeks-datepicker"
                    [value]="initDate"
                    [showWeeks]="true"
                    [inline]="true"
                    [preserveInsignificant]="true"
                >
                </nui-date-picker>
            </div>
            <hr />
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="row"><h3>Modes (month)</h3></div>
            <div class="row">
                <nui-date-picker
                    id="nui-modes-month-state-datepicker"
                    [value]="initDate"
                    datepickerMode="month"
                    [inline]="true"
                    [preserveInsignificant]="true"
                >
                </nui-date-picker>
            </div>
            <hr />
        </div>

        <div class="col">
            <div class="row"><h3>Modes (year)</h3></div>
            <div class="row">
                <nui-date-picker
                    id="nui-modes-year-state-datepicker"
                    [value]="initDate"
                    datepickerMode="year"
                    [inline]="true"
                    [preserveInsignificant]="true"
                >
                </nui-date-picker>
            </div>
            <hr />
        </div>

        <div class="col">
            <div class="row"><h3>Years Range</h3></div>
            <div class="row">
                <nui-date-picker
                    id="nui-modes-year-range-datepicker"
                    [value]="initDate"
                    [inline]="true"
                    datepickerMode="year"
                    [yearRange]="5"
                >
                    [preserveInsignificant]="true">
                </nui-date-picker>
            </div>
            <hr />
        </div>

        <div class="col">
            <div class="row"><h3>Formatting</h3></div>
            <div class="row">
                <nui-date-picker
                    id="nui-formatting-state-datepicker"
                    [value]="initDate"
                    [inline]="true"
                    formatDay="Do"
                    formatMonth="MMM"
                    formatYear="YY"
                    formatDayHeader="ddd"
                    formatDayTitle="MMM YY"
                    formatMonthTitle="YY"
                    [preserveInsignificant]="true"
                >
                </nui-date-picker>
            </div>
            <hr />
        </div>
    </div>
</div>
`;export{r as default};
