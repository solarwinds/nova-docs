import"./chunk-XR34LRGE.js";var s=`<nui-progress
    id="nui-demo-stacked-header"
    [show]="show"
    [stacked]="true"
    [percent]="percent"
    [showNumber]="true"
    [allowCancel]="true"
    i18n-message
    message="Task Label"
    i18n-helpText
    helpText="Optional description"
    (cancel)="onCancel()"
>
</nui-progress>

<button
    id="nui-demo-stacked-header-btn"
    nui-button
    class="mt-1"
    type="button"
    (click)="startProgress()"
    displayStyle="primary"
    i18n
>
    Start progress
</button>
`;export{s as default};
