import"./chunk-XR34LRGE.js";var i=`<div id="nui-demo-progress-busy" nui-busy [busy]="busy">
    <div class="busy-content">
        <nui-checkbox i18n>
            Attempts to change my checked state will fail when busy is enabled
        </nui-checkbox>
    </div>
    <nui-progress
        id="nui-demo-progress"
        i18n-message
        message="Hello from custom busy"
    ></nui-progress>
</div>
<button
    id="nui-demo-progress-button"
    nui-button
    type="button"
    displayStyle="primary"
    (click)="switchBusy()"
    i18n
>
    Switch busy state
</button>
`;export{i as default};
