import"./chunk-VBFW7A5V.js";var r=`<nui-chips
    id="nui-demo-chips-overflow"
    [itemsSource]="horizontalGroupedItemsSource"
    [overflowLinesNumber]="overflowLinesNumber"
    [overflow]="true"
    (chipRemoved)="onClear($event)"
    (chipsOverflowed)="onChipsOverflow($event)"
    (removeAll)="onClearAll($event)"
>
    <div
        class="nui-chips-overflowed"
        #overflowCounterLabel
        *ngIf="overflowCounter > 0"
    >
        <nui-popover
            trigger="click"
            [popoverOverlayPosition]="overflowPopoverPosition"
            [template]="popoverWithClickTrigger"
        >
            <a class="nui-chips-overflowed__counter">+{{ overflowCounter }}</a>
        </nui-popover>
    </div>
</nui-chips>

<ng-template #popoverWithClickTrigger>
    <nui-chips-overflow
        [overflowSource]="overflowSource"
        [itemsSource]="horizontalGroupedItemsSource"
        (chipRemoved)="onClear($event)"
        orientation="vertical"
    >
    </nui-chips-overflow>
</ng-template>
`;export{r as default};
