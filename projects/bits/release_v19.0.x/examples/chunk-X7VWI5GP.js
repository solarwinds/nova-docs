import"./chunk-VBFW7A5V.js";var m=`<nui-time-frame-bar
    [minDate]="minDate"
    [maxDate]="maxDate"
    [(timeFrame)]="timeFrame"
>
    <!-- content for default projection slot -->
    <nui-icon icon="calendar" class="pr-3"></nui-icon>
    {{ timeFrame | timeFrame }}

    <!-- content for time frame selection projection slot -->
    <nui-quick-picker timeFrameSelection>
        <nui-time-frame-picker></nui-time-frame-picker>
    </nui-quick-picker>
</nui-time-frame-bar>

<!-- FOR DEMO ONLY -->
<pre>{{ timeFrame | json }}</pre>
`;export{m as default};
