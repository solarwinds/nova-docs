import"./chunk-VBFW7A5V.js";var r=`<div class="container">
    <h3>Basic Popover</h3>
    <nui-progress
        id="nui-demo-basic-progress"
        message="Task Label"
        helpText="Optional description"
        [show]="show"
        [percent]="percent"
    >
    </nui-progress>

    <button
        id="nui-demo-start-basic-progress"
        style="margin-top: 15px"
        nui-button
        type="button"
        (click)="startProgress()"
        displayStyle="primary"
    >
        Start progress
    </button>
    <hr />

    <h3>Popover with stacked header and progress percentage</h3>
    <nui-progress
        id="nui-demo-stacked-header"
        [show]="show"
        [stacked]="true"
        [percent]="percent"
        [showNumber]="true"
        [allowCancel]="true"
        message="Task Label"
        helpText="Optional description"
        (cancel)="onCancel()"
    >
    </nui-progress>
    <hr />

    <h3>Indeterminate Popover</h3>
    <nui-progress
        id="nui-demo-indeterminate-progress"
        [show]="show"
        [allowCancel]="true"
        message="Task Label"
        helpText="Optional description"
        (cancel)="onCancel()"
    >
    </nui-progress>
    <hr />
</div>
`;export{r as default};
