import"./chunk-VBFW7A5V.js";var i=`<div class="conversion d-flex flex-column align-items-end">
    {{ conversionDisplay }}
</div>
<hr />
<nui-form-field
    class="d-block mt-5"
    caption="Bytes"
    i18n-caption
    [showOptionalText]="false"
>
    <nui-textbox-number
        type="number"
        [ngModel]="num"
        (ngModelChange)="onNumberChange($event)"
        [minValue]="0"
        [step]="10"
        customBoxWidth="200px"
    ></nui-textbox-number>
</nui-form-field>
`;export{i as default};
