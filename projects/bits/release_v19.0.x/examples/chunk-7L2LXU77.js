import"./chunk-VBFW7A5V.js";var t=`<nui-checkbox-group
    id="nui-demo-checkbox-group-justified"
    name="vegetable"
    [values]="selectedVegetables"
>
    <nui-checkbox
        *ngFor="let vegetable of vegetables"
        [value]="vegetable"
        i18n-hint
        [hint]="
            hints.indexOf(vegetable) >= 0
                ? hints[hints.indexOf(vegetable)]
                : null
        "
        [checked]="isChecked(vegetable)"
        class="nui-checkbox--justified"
    >
        {{ vegetable }}
    </nui-checkbox>
</nui-checkbox-group>
`;export{t as default};
