import"./chunk-XR34LRGE.js";var t=`<button
    nui-button
    type="button"
    (click)="toggleSpinners()"
    displayStyle="primary"
>
    Start/stop progress
</button>
<nui-spinner
    [show]="show"
    [percent]="spinPercentage"
    [allowCancel]="true"
    (cancel)="onCancel()"
>
</nui-spinner>

<nui-spinner
    size="large"
    [show]="show"
    [percent]="spinPercentage"
    [allowCancel]="true"
    (cancel)="onCancel()"
>
</nui-spinner>
`;export{t as default};
