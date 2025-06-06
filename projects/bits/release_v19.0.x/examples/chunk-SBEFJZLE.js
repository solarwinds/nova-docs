import"./chunk-VBFW7A5V.js";var n=`<nui-time-frame-bar
    [minDate]="minDate"
    [maxDate]="maxDate"
    [timeFrame]="timeFrame"
    (timeFrameChange)="onChange($event)"
    [historyIndex]="history.index"
    (undo)="onUndo()"
    (clear)="onChange()"
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
<button
    nui-button
    type="button"
    icon="zoom-in"
    displayStyle="primary"
    (click)="onZoomIn()"
    [disabled]="!canZoom()"
>
    Zoom In
</button>
`;export{n as default};
