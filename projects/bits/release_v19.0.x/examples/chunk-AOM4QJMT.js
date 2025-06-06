import"./chunk-VBFW7A5V.js";var r=`<nui-time-frame-bar
    [id]="bar.id"
    *ngFor="let bar of bars"
    [timeFrame]="bar.timeFrame"
    (timeFrameChange)="changeTimeFrame($event, bar)"
    (undo)="bar.undo()"
    (clear)="bar.change()"
    [historyIndex]="bar.history.index"
>
    <nui-icon icon="calendar" class="pr-3"></nui-icon>
    {{ bar.timeFrame | timeFrame }}
    <nui-quick-picker timeFrameSelection>
        <nui-time-frame-picker></nui-time-frame-picker>
    </nui-quick-picker>
</nui-time-frame-bar>

<nui-time-frame-bar
    [id]="barNoQuickPick.id"
    [(timeFrame)]="barNoQuickPick.timeFrame"
>
    <nui-icon icon="calendar" class="pr-3"></nui-icon>
    {{ barNoQuickPick.timeFrame | timeFrame }}
    <nui-time-frame-picker timeFrameSelection></nui-time-frame-picker>
</nui-time-frame-bar>
`;export{r as default};
