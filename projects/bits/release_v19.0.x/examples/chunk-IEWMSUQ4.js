import"./chunk-VBFW7A5V.js";var e=`<div *ngIf="isDisplayed; else notoast">
    <nui-message type="info" [allowDismiss]="false">
        <div i18n>ID of last toast shown: {{ lastShown }}</div>
    </nui-message>
    <nui-message type="info" [allowDismiss]="false">
        <div id="toast-example-click-counter" i18n>
            Clicks on toast: {{ clickCount }}
        </div>
    </nui-message>
</div>
<ng-template #notoast
    ><nui-message type="info" [allowDismiss]="false" i18n
        >No toast displayed</nui-message
    ></ng-template
>
<nui-divider></nui-divider>
<button
    nui-button
    type="button"
    id="nui-toast-events-example"
    (click)="onShowToast($event)"
    i18n
>
    Show Toast
</button>
`;export{e as default};
