import"./chunk-VBFW7A5V.js";var i=`<style>
    nui-spinner {
        margin: 0px 10px;
    }
</style>
<div class="container">
    <h4>Basic spinner</h4>
    <nui-spinner [show]="show"></nui-spinner>
    <hr />

    <h4>Big spinner</h4>
    <nui-spinner size="large" [show]="show"></nui-spinner>
    <hr />

    <h4>Indetermined spinner with text</h4>
    <nui-spinner
        [show]="show"
        message="Task Label"
        helpText="Optional description"
    >
    </nui-spinner>
    <nui-spinner
        size="large"
        [show]="show"
        message="Task Label"
        helpText="Optional description"
    >
    </nui-spinner>
    <hr />

    <h4>Determined spinner with text</h4>
    <nui-spinner [show]="show" [percent]="spinPercentage"> </nui-spinner>
    <nui-spinner size="large" [show]="show" [percent]="spinPercentage">
    </nui-spinner>
    <nui-spinner
        size="large"
        [show]="show"
        [percent]="spinPercentage"
        message="Task Label"
        helpText="Optional description"
    >
    </nui-spinner>
    <hr />

    <h4>Spinner with cancellation</h4>
    <nui-spinner
        [show]="showWithCancel"
        [percent]="spinPercentage"
        [allowCancel]="true"
        (cancel)="onCancel()"
    >
    </nui-spinner>
    <nui-spinner
        size="large"
        [show]="showWithCancel"
        [percent]="spinPercentage"
        [allowCancel]="true"
        (cancel)="onCancel()"
        id="nui-spinner-large-cancel"
    >
    </nui-spinner>
    <hr />
</div>
`;export{i as default};
