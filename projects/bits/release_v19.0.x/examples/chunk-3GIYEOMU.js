import"./chunk-VBFW7A5V.js";var i=`<p>
    <code>&lt;nui-date-picker&gt;</code> allows user to select a specific date.
    Date Picker consists of Date Input Field with Date Icon and Daily Calendar.
    Clicking on the date input field opens the daily calendar. The date field
    itself allows user to either type a specific date directly into the field or
    select a date using the calendar in the popover. Note: The input for this
    field is validated. Date picker supports various attributes for user
    configuration using
    <code
        ><a href="../interfaces/IDatePickerConfig.html" target="_blank"
            >IDatePickerConfig</a
        ></code
    >.
</p>
<nui-message type="info" [allowDismiss]="false"
    >Note, BrowserAnimationModule is required to make DatePicker component
    work.</nui-message
>

<h2>Required Modules</h2>
<ul>
    <li>
        <code> NuiDatePickerModule </code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    To implement a date picker you need to use the
    <code>&lt;nui-date-picker&gt;</code> component.
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-basic"
    exampleTitle="Basic Usage"
>
    <nui-date-picker-basic-example></nui-date-picker-basic-example>
</nui-example-wrapper>

<h2>Value Change Event</h2>
<p>
    You can pass the <code>(valueChange)</code> input to the date picker and
    perform an action when the selected date changes.
    <code>(valueChange)</code> output emits <code>Moment</code> object.
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-value-change"
    exampleTitle="Value Change Event"
>
    <nui-date-picker-value-change-example></nui-date-picker-value-change-example>
</nui-example-wrapper>

<h2>Calendar Navigated Event</h2>
<p>
    Every time one navigates the calendar back and forth using navigation
    arrows, the <code>(calendarNavigated)</code> output is triggered to notify
    user with navigated date (first day of the month in a Moment format).
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-calendar-navigated"
    exampleTitle="Calendar Navigated Event"
>
    <nui-date-picker-calendar-navigated-example></nui-date-picker-calendar-navigated-example>
</nui-example-wrapper>

<h2>Disabled</h2>
<p>
    <code>[isDisabled]="true"</code> input is used to disable the date picker
    input field.
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-disabled"
    exampleTitle="Disabled"
>
    <nui-date-picker-disabled-example></nui-date-picker-disabled-example>
</nui-example-wrapper>

<h2>With Error</h2>
<p>
    <code>[isInErrorState]="true"</code> input is used to apply error state
    styles to the date picker.
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-with-error"
    exampleTitle="With Error"
>
    <nui-date-picker-with-error-example></nui-date-picker-with-error-example>
</nui-example-wrapper>

<h2>Inline</h2>
<p>
    To make date picker inline you can use <code>[inline]="true"</code> input.
</p>
<nui-example-wrapper filenamePrefix="date-picker-inline" exampleTitle="Inline">
    <nui-date-picker-inline-example></nui-date-picker-inline-example>
</nui-example-wrapper>

<h2>Current Month</h2>
<p>
    You can pass <code>[onlyCurrentMonth]="true"</code> input to show only the
    dates for the selected month in the day picker.
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-current-month"
    exampleTitle="Current Month"
>
    <nui-date-picker-current-month-example></nui-date-picker-current-month-example>
</nui-example-wrapper>

<h2>Show Weeks</h2>
<p>
    You can pass <code>[showWeeks]="true"</code> input to show weeks numbers
    from the start of the year.
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-show-weeks"
    exampleTitle="Show Weeks"
>
    <nui-date-picker-show-weeks-example></nui-date-picker-show-weeks-example>
</nui-example-wrapper>

<h2>First Day of the Week</h2>
<p>
    To set which day to use as the first day of the week use the
    <code>startingDay</code> attribute. <code>startingDay</code> must be
    specified as a <code>Number</code> in the range <b>0</b> to <b>6</b>, where
    <b>0</b> is <b>Sunday</b> and <b>6</b> is <b>Saturday</b>.
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-first-date-of-week"
    exampleTitle="First Day of the Week"
>
    <nui-date-picker-first-date-of-week-example></nui-date-picker-first-date-of-week-example>
</nui-example-wrapper>

<h2>Initial Date</h2>
<p>
    To set an initial preselected date use the <code>value</code> input of type
    <code>Moment</code>.
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-init-date"
    exampleTitle="Initial Date"
>
    <nui-date-picker-init-date-example></nui-date-picker-init-date-example>
</nui-example-wrapper>

<h2>Date Picker in a Reactive Form</h2>
<p>
    <code>&lt;nui-date-picker&gt;</code> may be used in a reactive form by
    setting the <code>formControl</code> input.
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-reactive-form"
    exampleTitle="Date Picker in a Reactive Form"
>
    <nui-date-picker-reactive-forms-example></nui-date-picker-reactive-forms-example>
</nui-example-wrapper>

<h2>Dates Range</h2>
<p>
    Attributes <code>minDate</code> and <code>maxDate</code> are used to set a
    selectable range of dates, making other dates disabled.
    <code>minDate</code> and <code>maxDate</code> must be specified as type
    <code>Moment</code>.
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-date-range"
    exampleTitle="Dates Range"
>
    <nui-date-picker-date-range-example></nui-date-picker-date-range-example>
</nui-example-wrapper>

<h2>Modes</h2>
<p>
    To change initial date picker view mode use
    <code>datepickerMode</code> attribute of type <code>String</code>. Supported
    values are <b>"day"</b> (default), <b>"month"</b> and <b>"year"</b>.
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-init-mode"
    exampleTitle="Modes"
>
    <nui-date-picker-init-mode-example></nui-date-picker-init-mode-example>
</nui-example-wrapper>

<h2>Modes Range</h2>
<p>
    To set constraints on the date picker view modes use the
    <code>minMode</code> and <code>maxMode</code> attributes of type
    <code>String</code> in combination with <code>datepickerMode</code>.
    Supported values are <b>"day"</b>, <b>"month"</b> and <b>"year"</b>.
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-modes-range"
    exampleTitle="Modes Range"
>
    <nui-date-picker-modes-range-example></nui-date-picker-modes-range-example>
</nui-example-wrapper>

<h2>Years Range</h2>
<p>
    The attribute <code>yearRange</code> is used to set the selectable range of
    years starting from the current year, making other years disabled.
    <code>yearRange</code> must be specified as a positive <code>Number</code>.
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-year-range"
    exampleTitle="Years Range"
>
    <nui-date-picker-year-range-example></nui-date-picker-year-range-example>
</nui-example-wrapper>

<h2>Disabled Dates</h2>
<p>
    Attribute <code>dateDisabled</code> of type
    <code
        ><a href="../interfaces/IDatePickerDisabledDates.html" target="_blank"
            >IDatePickerDisabledDates</a
        ></code
    >
    allows the user to specify an array of dates to be disabled for selection.
    The <code>date</code> field of each array element specifies the date to be
    disabled, and the <code>mode</code> field allows the user to specify the
    mode: <b>"day"</b> (default), <b>"month"</b> or <b>"year"</b>. For example,
    if <code>mode</code> is set to <b>"day"</b>, only the specified date will be
    disabled. If <code>mode</code> is set to <b>"month"</b>, the whole month of
    the specified date will be disabled. If <code>mode</code> is set to
    <b>"year"</b>, the whole year of the specified date will be disabled. If
    current date is disabled - "Today" button of day picker will also be
    disabled.
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-disable-date"
    exampleTitle="Disabled Dates"
>
    <nui-date-picker-disable-date-example></nui-date-picker-disable-date-example>
</nui-example-wrapper>

<h2>Formatting</h2>
<div>
    You can use custom formats to change the visualization of dates, days,
    months, years, and headings in the date picker. See
    <code
        ><a
            href="https://momentjs.com/docs/#/displaying/format/"
            target="_blank"
            >Moment.js date formats</a
        ></code
    >
    for more information about the construction of date formats. Use the
    following attributes of type <code>String</code>
    to apply custom formats:
    <ul>
        <li>
            <code>dateFormat</code> - textbox date format. The selected date or
            typed-in date, if valid, will be modified inline and displayed using
            this format. If the value of dateFormat is an invalid format, or if
            it isn't specified, it will be set to a default value of
            <code>"DD MMM YYYY"</code>.
        </li>
        <li><code>formatDay</code> - format of the days in the day picker</li>
        <li>
            <code>formatMonth</code> - format of the months in the month picker
        </li>
        <li>
            <code>formatYear</code> - format of the years in the year picker and
            of the year picker title
        </li>
        <li>
            <code>formatDayHeader</code> - format of the day of the week in the
            week header
        </li>
        <li><code>formatDayTitle</code> - format of the day picker title</li>
        <li>
            <code>formatMonthTitle</code> - format of the month picker title
        </li>
    </ul>
    Supported formats:
    <ul>
        <li>"D MMM YY": 3 Aug 18</li>
        <li>"D MMM YYYY": 3 Aug 2018</li>
        <li>"DD MMM YY": 03 Aug 18</li>
        <li>"DD MMM YYYY": 03 Aug 2018</li>
        <li>"Do MMM YY": 3rd Aug 18</li>
        <li>"Do MMM YYYY": 3rd Aug 2018</li>
        <li>"MMM D, YY": Aug 3, 18</li>
        <li>"MMM D, YYYY": Aug 3, 2018</li>
        <li>"MMM DD, YY": Aug 03, 18</li>
        <li>"MMM DD, YYYY": Aug 03, 2018</li>
        <li>"MMM Do, YY": Aug 3rd, 18</li>
        <li>"MMM Do, YYYY": Aug 3rd, 2018</li>
        <li>"M/D/YY": 8/3/18</li>
        <li>"M/D/YYYY": 8/3/2018</li>
        <li>"MM/DD/YY": 08/03/18</li>
        <li>"MM/DD/YYYY": 08/03/2018</li>
        <li>"M-D-YY": 8-3-18</li>
        <li>"M-D-YYYY": 8-3-2018</li>
        <li>"MM-DD-YY": 08-03-18</li>
        <li>"MM-DD-YYYY": 08-03-2018</li>
        <li>"M D YY": 8 3 18</li>
        <li>"M D YYYY": 8 3 2018</li>
        <li>"MM DD YY": 08 03 18</li>
        <li>"MM DD YYYY": 08 03 2018</li>
        <li>"M.D.YY": 8.3.18</li>
        <li>"M.D.YYYY": 8.3.2018</li>
        <li>"MM.DD.YY": 08.03.18</li>
        <li>"MM.DD.YYYY": 08.03.2018</li>
    </ul>
</div>
<nui-example-wrapper
    filenamePrefix="date-picker-formatting"
    exampleTitle="Formatting"
>
    <nui-date-picker-formatting-example></nui-date-picker-formatting-example>
</nui-example-wrapper>

<h2>Preserve Insignificant</h2>
<p>
    <code>[preserveInsignificant]="true"</code> input tells date picker whether
    to preserve the hours, minutes, seconds, and milliseconds of the date.
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-insignificant"
    exampleTitle="Preserve Insignificant"
>
    <nui-date-picker-insignificant-example></nui-date-picker-insignificant-example>
</nui-example-wrapper>

<h2>Date Picker using in different timezones</h2>
<p>
    It's possible to use <code>DatePickerComponent</code> in different
    timezones. To preserve timezone value set <code>handleTimezone</code> flag
    on the component to <code>true</code>
</p>
<nui-example-wrapper
    filenamePrefix="date-picker-timezone"
    exampleTitle="Basic Usage"
>
    <nui-date-picker-timezone-example></nui-date-picker-timezone-example>
</nui-example-wrapper>
`;export{i as default};
