import"./chunk-VBFW7A5V.js";var i=`<h2>Basic Datepicker</h2>
<nui-date-picker id="nui-demo-datepicker-basic"> </nui-date-picker>

<hr />

<h2>Datepicker with preserve insignificant</h2>
<nui-date-picker
    id="nui-demo-datepicker-preserve"
    [value]="dtPreserve"
    [preserveInsignificant]="true"
    (valueChange)="dateChangedPreserved($event)"
>
</nui-date-picker>
<p>
    Selected date:
    <span id="nui-demo-datepicker-active-date-value-preserve">{{
        localActiveDatePreserve.format()
    }}</span>
</p>

<hr />

<h2>Inline datepicker</h2>
<nui-date-picker
    id="nui-demo-datepicker-inline"
    [value]="dt"
    [inline]="true"
    (valueChange)="dateChanged($event)"
>
</nui-date-picker>
<p>
    Selected date:
    <span id="nui-demo-datepicker-active-date-value">{{
        localActiveDate.format()
    }}</span>
</p>

<hr />

<h2>Datepicker with min and max values</h2>
<nui-date-picker
    id="nui-demo-datepicker-min-max"
    [value]="dt"
    [minDate]="minDate"
    [maxDate]="maxDate"
    (valueChange)="dateChangedMinMax($event)"
>
</nui-date-picker>
<p>
    Selected date:
    <span id="nui-demo-datepicker-min-max-value">{{
        localActiveDateMinMax.format()
    }}</span>
</p>
<p>
    Min date:
    <span id="nui-demo-datepicker-min-date">{{ minDate.format() }}</span>
</p>
<p>
    Max date:
    <span id="nui-demo-datepicker-max-date">{{ maxDate.format() }}</span>
</p>

<hr />

<h2>Datepicker with reactive form</h2>
<form [formGroup]="reactiveDatepickerForm">
    <nui-date-picker
        id="nui-demo-date-picker-reactive"
        [isInErrorState]="reactiveDatepickerForm.controls['datePicker'].invalid"
        formControlName="datePicker"
    >
    </nui-date-picker>
</form>

<hr />

<h2>Datepicker with disabled dates</h2>
<nui-date-picker
    id="nui-demo-datepicker-disabled-dates"
    [value]="dt"
    [disabledDates]="dateDisabled"
    (valueChange)="dateChangedDisabledDates($event)"
>
</nui-date-picker>
<p>
    Selected date:
    <span id="nui-demo-datepicker-disabled-dates-value">{{
        localActiveDateDisabledDates.format()
    }}</span>
</p>
<p>
    Dates, disabled with <code>dateDisabled</code>: {{ dateDisabled | json }}&#125;
</p>

<hr />

<h2>Datepicker with disabled today button</h2>
<nui-date-picker
    id="nui-demo-datepicker-disabled-today"
    [disabledDates]="todayDateDisabled"
>
</nui-date-picker>

<hr />

<h2>Datepicker with initial date, time and preserve insignificant</h2>
<nui-date-picker
    id="nui-demo-datepicker-init-date-preserve"
    [value]="initDate"
    [preserveInsignificant]="true"
    (valueChange)="initDateChangedPreserved($event)"
>
</nui-date-picker>
<div id="nui-demo-datepicker-init-date-value-preserve">
    {{ initDatePreserve.format() }}
</div>

<hr />

<h2>Datepicker with custom first day of the week</h2>
<nui-date-picker
    id="nui-demo-datepicker-custom-first-day-of-the-week"
    [startingDay]="5"
>
</nui-date-picker>

<hr />

<h2>Datepicker with custom date format</h2>
<nui-date-picker
    id="nui-demo-datepicker-custom-date-format"
    dateFormat="MM/DD/YY"
>
</nui-date-picker>
`;export{i as default};
