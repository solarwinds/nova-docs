import"./chunk-VBFW7A5V.js";var p=`<p>
    <nui-popover
        id="nui-demo-popover-debounce-1"
        [template]="popoverDebounce1st"
        [delay]="1000"
        i18n
        >Hover over me 1st!</nui-popover
    >
</p>
<p>
    <nui-popover [template]="popoverDebounce2nd" [delay]="1000" i18n
        >Hover over me 2nd!</nui-popover
    >
</p>
<p>
    <nui-popover [template]="popoverDebounce3rd" [delay]="1000" i18n
        >Hover over me 3rd!</nui-popover
    >
</p>

<ng-template #popoverDebounce1st i18n>
    <span id="nui-demo-popover-modal-debounce-1"
        >I'm the 1st implementation with the debounce!</span
    >
</ng-template>

<ng-template #popoverDebounce2nd i18n>
    I'm the 2nd implementation with the debounce!
</ng-template>

<ng-template #popoverDebounce3rd i18n>
    I'm the 3rd implementation with the debounce!
</ng-template>
`;export{p as default};
