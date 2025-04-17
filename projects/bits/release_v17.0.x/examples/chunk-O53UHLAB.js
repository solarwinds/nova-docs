import"./chunk-XR34LRGE.js";var u=`<h1 i18n>Selected fruit: {{ selectedFruit }}</h1>
<nui-radio-group name="fruit" [(value)]="selectedFruit">
    <nui-radio
        *ngFor="let fruit of fruits"
        [value]="fruit"
        [checked]="fruit === 'Orange'"
    >
        {{ fruit }}
    </nui-radio>
</nui-radio-group>
`;export{u as default};
