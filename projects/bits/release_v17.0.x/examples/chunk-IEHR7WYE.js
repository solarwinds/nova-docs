import"./chunk-XR34LRGE.js";var s=`<nui-quick-picker
    [presets]="presets"
    [selectedPreset]="selectedPresetKey"
    (presetSelected)="handlePresetSelection($event)"
    pickerTitle="Custom percentiles"
    [presetKeysOrder]="presetKeysOrder"
    i18n-pickerTitle
>
    <nui-textbox-number
        [maxValue]="100"
        (valueChange)="handleCustomSelection($event)"
        [value]="getTextboxValue()"
    >
    </nui-textbox-number>
</nui-quick-picker>

<span class="nui-text-secondary"
    >Selected Quick Pick is {{ selectedPresetKey || "null" }}, Selected Value is
    {{ selectedValue }}</span
>
`;export{s as default};
