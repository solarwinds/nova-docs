import"./chunk-VBFW7A5V.js";var p=`<nui-expander
    id="nui-demo-expander-open-change"
    i18n-header
    header="Advanced options"
    (openChange)="onOpenChange($event)"
    [open]="bindingExampleOpen"
>
    <p i18n>Content goes here</p>
</nui-expander>
<button
    type="button"
    class="nui-demo-expander-open-change-button"
    nui-button
    (click)="bindingExampleOpen = !bindingExampleOpen"
>
    {{ getButtonLabel() }}
</button>
`;export{p as default};
