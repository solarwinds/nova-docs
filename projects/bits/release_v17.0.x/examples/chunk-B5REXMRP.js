import"./chunk-XR34LRGE.js";var n=`<section class="demo-options-section">
    <nui-form-field caption="Date Picker" [control]="control">
        <nui-date-picker
            [formControl]="control"
            [handleTimezone]="true"
        ></nui-date-picker>
    </nui-form-field>
    <p class="mt-2">Value: {{ selectedDate }}</p>

    <nui-combobox-v2
        placeholder="Select zones"
        [formControl]="selectedZone"
        (valueSelected)="changeZone($event)"
    >
        <nui-select-v2-option *ngFor="let o of zonesS()" [value]="o">
            {{ o }}
        </nui-select-v2-option>
    </nui-combobox-v2>
</section>
`;export{n as default};
