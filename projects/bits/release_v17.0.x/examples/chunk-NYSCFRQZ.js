import"./chunk-XR34LRGE.js";var l=`<h1 i18n>Selected color: {{ selectedColor }}</h1>
<nui-radio-group
    name="color"
    [(value)]="selectedColor"
    (valueChange)="showSelected()"
>
    <nui-radio
        *ngFor="let color of colors"
        [value]="color"
        [hint]="colorHints[color]"
    >
        {{ color }}
    </nui-radio>
</nui-radio-group>
`;export{l as default};
