import"./chunk-VBFW7A5V.js";var s=`<nui-progress
    id="nui-demo-basic-progress"
    i18n-message
    message="Task Label"
    [show]="show"
    [helpTemplateRef]="helpTemplate"
    [percent]="percent"
>
</nui-progress>
<ng-template #helpTemplate>
    <span i18n>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
    </span>
</ng-template>
<button
    nui-button
    class="mt-1"
    type="button"
    (click)="toggleProgress()"
    displayStyle="primary"
    i18n
>
    Start/stop progress
</button>
`;export{s as default};
