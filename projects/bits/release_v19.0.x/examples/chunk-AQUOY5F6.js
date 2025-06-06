import"./chunk-VBFW7A5V.js";var i=`<nui-popover
    trigger="click"
    [template]="popoverTimeFramePicker"
    [hasPadding]="false"
    [closePopover]="closePopoverSubject"
    [modal]="true"
>
    <span class="nui-text-link" style="cursor: pointer">{{
        acceptedTimeframe | timeFrame
    }}</span>
</nui-popover>

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
            i18n
        >
            Use
        </button>
    </nui-dialog-footer>
</ng-template>
`;export{i as default};
