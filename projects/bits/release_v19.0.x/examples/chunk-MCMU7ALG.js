import"./chunk-VBFW7A5V.js";var i=`<nui-popover
    trigger="click"
    [template]="popoverDayPicker"
    [hasPadding]="false"
    [closePopover]="closePopoverSubject"
    [unlimited]="true"
    [modal]="true"
>
    <span class="nui-text-link" style="cursor: pointer">Select day</span>
</nui-popover>

<p>
    Selected date:
    <em>{{ selectedDate?.format("MMMM Do, YYYY") }}</em>
</p>

<ng-template #popoverDayPicker>
    <div>
        <nui-quick-picker
            [presets]="presets"
            [selectedPreset]="selectedPresetKey"
            (presetSelected)="handlePresetSelection($event)"
            pickerTitle="Custom Date"
            i18n-pickerTitle
            presetsTitle="Baselines"
            i18n-presetsTitle
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
`;export{i as default};
