import"./chunk-VBFW7A5V.js";var i=`<input id="is-repeat-off" type="radio" [(ngModel)]="isRepeat" value="false" />
<input id="is-repeat-on" type="radio" [(ngModel)]="isRepeat" value="true" />
<span id="nui-demo-click-results">{{ count }}</span>

<button
    id="nui-demo-up-btn"
    nui-button
    type="button"
    [isRepeat]="isRepeat === 'true'"
    icon="caret-up"
    (click)="onCountUpClick()"
></button>
<button
    id="nui-demo-primary-compact-btn"
    nui-button
    type="button"
    size="compact"
    displayStyle="primary"
    i18n
>
    Compact
</button>
<button
    id="nui-demo-primary-large-plus-icon-btn"
    nui-button
    type="button"
    size="large"
    displayStyle="primary"
    icon="add"
    [iconRight]="true"
    i18n
>
    Large + icon
</button>
<button
    id="nui-demo-primary-large-plus-icon-disabled-btn"
    nui-button
    type="button"
    size="large"
    displayStyle="primary"
    icon="add"
    [iconRight]="true"
    [disabled]="true"
    i18n
>
    Disabled
</button>
<button
    id="nui-demo-primary-large-plus-icon-busy-btn"
    nui-button
    type="button"
    size="large"
    displayStyle="primary"
    icon="add"
    [iconRight]="true"
    [isBusy]="true"
    i18n
>
    Busy
</button>
<button
    nui-button
    id="nui-demo-default-compact-btn"
    type="button"
    size="compact"
    displayStyle="default"
    icon="add"
    i18n
>
    Compact
</button>
<button
    id="nui-default-large-btn"
    nui-button
    class="testClass"
    type="button"
    size="large"
    displayStyle="default"
    icon="add"
    i18n
>
    Large + icon
</button>
<button
    id="nui-demo-action-compact-btn"
    nui-button
    type="button"
    size="compact"
    displayStyle="action"
    i18n
>
    Compact
</button>
<button id="nui-demo-btn-with-icon" nui-button type="button" icon="add" i18n>
    Icon
</button>

<nui-with-button-long-text-example
    id="nui-demo-long-text-btn"
></nui-with-button-long-text-example>
`;export{i as default};
