import"./chunk-VBFW7A5V.js";var s=`<div [@.disabled]="true">
    <div class="p-3">
        <button
            nui-button
            type="button"
            class="mr-3"
            id="spinnerButton1"
            (click)="show1 = !show1"
            displayStyle="primary"
            i18n
        >
            toggle delayed spinner
        </button>
        <nui-spinner
            id="spinner1"
            [show]="show1"
            [percent]="spinPercentage"
            [delay]="500"
        >
        </nui-spinner>
    </div>

    <div class="p-3">
        <button
            nui-button
            type="button"
            class="mr-3"
            id="spinnerButton2"
            (click)="show2 = !show2"
            displayStyle="primary"
            i18n
        >
            toggle default spinner
        </button>
        <nui-spinner id="spinner2" [show]="show2"> </nui-spinner>
    </div>
</div>
`;export{s as default};
