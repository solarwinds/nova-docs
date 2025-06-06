import"./chunk-VBFW7A5V.js";var t=`<div class="nui-flex-container">
    <div>
        <nui-radio-group [(value)]="selectedPosition">
            <nui-radio
                *ngFor="let position of toastPositions"
                id="{{ 'nui-toast-position-' + position.className }}"
                [checked]="position.className === 'nui-toast--top-right'"
                [value]="position.className"
            >
                {{ position.displayValue }}
            </nui-radio>
        </nui-radio-group>
    </div>
</div>
<button
    nui-button
    type="button"
    id="nui-toast-position-example"
    (click)="onShowToast($event)"
    i18n
>
    Show Toast
</button>
`;export{t as default};
