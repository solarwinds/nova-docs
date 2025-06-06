import"./chunk-XR34LRGE.js";var t=`<div class="container">
    <div class="row">
        <div class="col">
            <h4>TimeFrame Picker in Popover</h4>
            <nui-popover
                trigger="click"
                [template]="popoverTimeFramePicker"
                [hasPadding]="false"
                [closePopover]="closePopoverSubject"
                [modal]="true"
                id="nui-demo-visual-default-popover"
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
                    >
                        Cancel
                    </button>
                    <button
                        nui-button
                        type="button"
                        displayStyle="primary"
                        class="nui-time-frame-picker__use"
                        (click)="confirmPopover()"
                    >
                        Use
                    </button>
                </nui-dialog-footer>
            </ng-template>
        </div>
        <div class="col">
            <h4>TimeFrame Picker with other components</h4>
            <nui-popover
                trigger="click"
                [template]="popoverDayPicker"
                [hasPadding]="false"
                [closePopover]="closePopoverSubject"
                [unlimited]="true"
                [modal]="true"
                id="nui-demo-visual-datepicker-popover"
            >
                <span class="nui-text-link" style="cursor: pointer"
                    >Select day</span
                >
            </nui-popover>

            <p>
                Selected date:
                <em>{{ selectedDate?.format("MMMM Do, YYYY") }}</em>
            </p>

            <ng-template #popoverDayPicker>
                <div>
                    <nui-quick-picker
                        [presets]="presetsDatePicker"
                        [selectedPreset]="selectedPresetKeyDatePicker"
                        (presetSelected)="
                            handlePresetSelectionDatePicker($event)
                        "
                        pickerTitle="Custom Date"
                        presetsTitle="Baselines"
                    >
                        <nui-date-picker
                            [inline]="true"
                            [value]="selectedDate"
                            [preserveInsignificant]="false"
                            (valueChange)="dateChanged($event)"
                        >
                        </nui-date-picker>
                    </nui-quick-picker>
                </div>
            </ng-template>
        </div>
        <div class="col">
            <h4>
                TimeFrame Picker + Date picker with unlimited width in Popover
            </h4>
            <nui-popover
                trigger="click"
                [template]="popoverTimeFramePickerUnlimited"
                [hasPadding]="false"
                [closePopover]="closePopoverSubject"
                [modal]="true"
                [unlimited]="true"
                id="nui-demo-visual-complex-popover"
            >
                <span class="nui-text-link" style="cursor: pointer">{{
                    acceptedTimeframe | timeFrame
                }}</span>
            </nui-popover>

            <ng-template #popoverTimeFramePickerUnlimited>
                <div>
                    <nui-quick-picker
                        [presets]="presets"
                        [selectedPreset]="acceptedTimeframe.selectedPresetId"
                        (presetSelected)="handlePresetSelection($event)"
                        pickerTitle="Custom Range"
                    >
                        <nui-time-frame-picker
                            [startModel]="acceptedTimeframe"
                            (changed)="updateTf($event)"
                        >
                        </nui-time-frame-picker>
                        <nui-date-picker
                            [inline]="true"
                            [value]="selectedDate"
                            [preserveInsignificant]="false"
                            (valueChange)="dateChanged($event)"
                        >
                        </nui-date-picker>
                    </nui-quick-picker>
                </div>
            </ng-template>
        </div>
    </div>
</div>
`;export{t as default};
