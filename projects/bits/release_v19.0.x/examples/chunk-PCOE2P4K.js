import"./chunk-VBFW7A5V.js";var e=`<div id="nui-demo-custom-spinner-busy" nui-busy [busy]="busy">
    <div class="busy-content">
        <nui-checkbox i18n>
            Attempts to change my checked state will fail when busy is enabled
        </nui-checkbox>
    </div>
    <nui-spinner
        id="nui-demo-spinner"
        size="large"
        i18n-message
        message="Hello from custom busy"
    ></nui-spinner>
</div>
<button
    id="nui-demo-spinner-button"
    nui-button
    type="button"
    displayStyle="primary"
    (click)="switchBusy()"
    i18n
>
    Switch busy state
</button>
`;export{e as default};
