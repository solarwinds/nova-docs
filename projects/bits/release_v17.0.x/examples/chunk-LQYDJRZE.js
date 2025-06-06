import"./chunk-XR34LRGE.js";var m=`<h2>Time Picker</h2>
<nui-time-picker></nui-time-picker>

<h2>Date Time Picker</h2>
<nui-date-time-picker></nui-date-time-picker>

<h2>Time Frame Bar</h2>
<nui-time-frame-bar
    [minDate]="minDate"
    [maxDate]="maxDate"
    [(timeFrame)]="timeFrame"
>
    <nui-icon icon="calendar" class="pr-3"></nui-icon>
    {{ timeFrame | timeFrame }}

    <nui-quick-picker timeFrameSelection>
        <nui-time-frame-picker></nui-time-frame-picker>
    </nui-quick-picker>
</nui-time-frame-bar>
`;export{m as default};
