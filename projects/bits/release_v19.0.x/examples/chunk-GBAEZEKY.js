import"./chunk-VBFW7A5V.js";var n=`<h5>selector</h5>
<nui-selector
    id="nui-demo-selector"
    (selectionChange)="onSelectionChange($event)"
    [checkboxStatus]="checkBoxStatus"
    [appendToBody]="appendToBody"
    [items]="availableStatuses"
>
</nui-selector>

<a
    href="javascript:;"
    (click)="makeIndeterminate()"
    id="nui-demo-make-indeterminate"
    i18n
    >Make indeterminate</a
>
<a
    href="javascript:;"
    (click)="makeAppendedToBody()"
    id="nui-demo-make-appended-to-body"
    i18n
    >Make appended to body</a
>
<pre>[Selection: <span id="nui-demo-selection-type">{{selection}}</span>, checkbox status: <span id="nui-demo-indeterminate">{{checkBoxStatus}}</span>]</pre>
`;export{n as default};
