import"./chunk-VBFW7A5V.js";var c=`<nui-checkbox-group
    id="nui-demo-checkbox-group-basic"
    name="vegetable"
    [values]="selectedVegetables"
    (valuesChange)="onValueChange($event)"
>
    <nui-checkbox
        *ngFor="let vegetable of vegetables"
        [value]="vegetable"
        i18n-hint
        hint="This is some help text"
        [checked]="isChecked(vegetable)"
    >
        {{ vegetable }}
    </nui-checkbox>
</nui-checkbox-group>
`;export{c as default};
