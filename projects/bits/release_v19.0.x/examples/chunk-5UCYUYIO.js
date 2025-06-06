import"./chunk-VBFW7A5V.js";var t=`<div class="d-flex" *ngFor="let picker of pickers; let index = index">
    <nui-time-frame-service-scoper #scoper>
        <nui-popover
            trigger="click"
            [template]="popoverTimeFramePicker"
            [hasPadding]="false"
            [closePopover]="closePopoverSubject"
            [modal]="true"
            ><span class="nui-text-link" style="cursor: pointer">{{
                picker.acceptedTimeframe | timeFrame
            }}</span>
        </nui-popover>

        <ng-template #popoverTimeFramePicker>
            <div>
                <nui-quick-picker
                    [presets]="picker.presets"
                    [selectedPreset]="picker.acceptedTimeframe.selectedPresetId"
                    (presetSelected)="handlePresetSelection($event, index)"
                    pickerTitle="Custom Range"
                    i18n-pickerTitle
                >
                    <nui-time-frame-picker
                        [startModel]="picker.acceptedTimeframe"
                        (changed)="updateTf($event, index)"
                    ></nui-time-frame-picker>
                </nui-quick-picker>
            </div>
            <nui-dialog-footer *ngIf="showFooter">
                <button
                    nui-button
                    type="button"
                    displayStyle="action"
                    class="pr-3 nui-time-frame-picker__cancel"
                    (click)="cancelPopover(index)"
                    i18n
                >
                    Cancel
                </button>
                <button
                    nui-button
                    type="button"
                    displayStyle="primary"
                    class="nui-time-frame-picker__use"
                    (click)="confirmPopover(index)"
                    i18n
                >
                    Use
                </button>
            </nui-dialog-footer>
        </ng-template>
    </nui-time-frame-service-scoper>
</div>
`;export{t as default};
