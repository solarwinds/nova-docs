import"./chunk-VBFW7A5V.js";var t=`<nui-popover
    id="nui-demo-basic-time-frame-picker"
    trigger="click"
    [template]="popoverTimeFramePicker"
    [hasPadding]="false"
    [closePopover]="closePopoverSubject"
>
    <span class="nui-text-link" style="cursor: pointer">{{
        acceptedTimeframe | timeFrame
    }}</span>
</nui-popover>

<div>{{ acceptedTimeframe | timeFrame : "LL LTS" }}</div>

<ng-template #popoverTimeFramePicker>
    <div>
        <nui-quick-picker
            [presets]="presets"
            [selectedPreset]="acceptedTimeframe.selectedPresetId"
            (presetSelected)="handlePresetSelection($event)"
            pickerTitle="Custom Range"
            i18n-pickerTitle
        >
            <nui-time-frame-picker
                [startModel]="acceptedTimeframe"
                (changed)="updateTf($event)"
                [maxDate]="maxDate"
                [minDate]="minDate"
            >
            </nui-time-frame-picker>
        </nui-quick-picker>
    </div>
    <nui-dialog-footer *ngIf="showFooter">
        <button
            nui-button
            type="button"
            displayStyle="action"
            class="pr-3 nui-time-frame-picker__cancel"
            (click)="cancelPopover()"
            id="nui-demo-basic-time-frame-picker-cancel"
            i18n
        >
            Cancel
        </button>
        <button
            nui-button
            type="button"
            displayStyle="primary"
            class="nui-time-frame-picker__use"
            (click)="confirmPopover()"
            id="nui-demo-basic-time-frame-picker-use"
            i18n
        >
            Use
        </button>
    </nui-dialog-footer>
</ng-template>
`;export{t as default};
