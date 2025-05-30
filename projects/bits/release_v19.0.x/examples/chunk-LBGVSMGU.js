import"./chunk-VBFW7A5V.js";var i=`<div class="d-flex">
    <div
        class="conversion d-flex flex-column align-items-center justify-content-center"
    >
        <div class="conversion__value">{{ valueDisplay }}</div>
        <!-- ngIf to hide the unit if the conversion result is determined to be NaN -->
        <div *ngIf="unitDisplay" class="conversion__unit">
            {{ unitDisplay }}
        </div>
    </div>
</div>
<hr />
<nui-form-field
    class="d-block mt-5"
    caption="Hertz"
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
