import"./chunk-VBFW7A5V.js";var n=`<nui-date-picker
    [formControl]="control"
    [inline]="true"
    [preserveInsignificant]="true"
    (valueChange)="dateChanged($event)"
>
</nui-date-picker>

<div>
    <p class="mt-2">Value: {{ selectedDate }}</p>
    <p class="mt-2">Control Value: {{ control.value.toISOString() }}</p>
</div>
`;export{n as default};
