import"./chunk-XR34LRGE.js";var i=`<div class="conversion d-flex flex-column align-items-end">
    {{ num | unitConversion : 2 : false : "bitsPerSecond" }}
</div>
<hr />
<nui-form-field
    class="d-block mt-5"
    caption="Bits Per Second"
    i18n-caption
    [showOptionalText]="false"
>
    <nui-textbox-number
        type="number"
        [(ngModel)]="num"
        [minValue]="0"
        [step]="10"
        customBoxWidth="200px"
    ></nui-textbox-number>
</nui-form-field>
`;export{i as default};
