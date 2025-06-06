import"./chunk-VBFW7A5V.js";var t=`<div class="nui-time-frame-bar-test">
    <nui-time-frame-bar
        [minDate]="fromDate"
        [maxDate]="toDate"
        [timeFrame]="timeFrame"
        (timeFrameChange)="onChange($event)"
        (undo)="timeFrame = history.undo()"
        (clear)="onChange()"
        [historyIndex]="history.index"
    >
        <nui-icon icon="calendar" class="pr-3"></nui-icon>
        {{ timeFrame | timeFrame }}
        <nui-quick-picker timeFrameSelection>
            <nui-time-frame-picker></nui-time-frame-picker>
        </nui-quick-picker>
    </nui-time-frame-bar>
    <button class="btn-zoom-in" (click)="zoomIn()">Zoom In</button>
    <button class="btn-set-default" (click)="resetDefault()">
        Set Default TimeFrame
    </button>
</div>
`;export{t as default};
