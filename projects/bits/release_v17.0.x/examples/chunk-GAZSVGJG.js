import"./chunk-XR34LRGE.js";var n=`<div class="nui-demo-event-propagation-service">
    <h2>Shouldn't propagate examples:</h2>
    <nui-textbox
        value="Textbox"
        customBoxWidth="150px"
        (click)="handleClick($event)"
    >
    </nui-textbox>
    <button
        nui-button
        type="button"
        (click)="handleClick($event)"
        displayStyle="primary"
    >
        Button
    </button>
    <nui-radio value="readonly" [checked]="false" (click)="handleClick($event)"
        >Radio
    </nui-radio>

    <nui-checkbox
        value="example"
        [checked]="false"
        (click)="handleClick($event)"
        >Checkbox
    </nui-checkbox>
    <a role="button" (click)="handleClick($event)">Link</a>
    <nui-divider></nui-divider>
    <h2>Should propagate examples:</h2>
    <div (click)="handleClick($event)">
        <nui-icon icon="severity_info" iconSize="small"></nui-icon>
        Icon
    </div>
    <h4 (click)="handleClick($event)">Header</h4>
    <p (click)="handleClick($event)">Paragraph</p>
</div>

<style>
    .nui-demo-event-propagation-service {
        max-width: 260px;
    }
</style>
`;export{n as default};
