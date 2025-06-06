import"./chunk-VBFW7A5V.js";var i=`<style>
    .nui-clipboard-demo {
        max-width: 460px;
    }
    .clipboard-panel {
        display: flex;
    }
    .nui-button {
        height: 30px;
    }
</style>

<div class="nui-clipboard-demo">
    <div class="clipboard-panel">
        <nui-textbox
            id="inputTextbox"
            placeholder="Enter text you want to copy to the clipboard"
            i18n-placeholder
            [value]="textToCopy"
            customBoxWidth="360px"
            (textChange)="onValueChange($event)"
            required="true"
        >
        </nui-textbox>
        <button
            id="clipboardButton"
            nui-button
            [nuiClipboard]="textToCopy"
            (clipboardSuccess)="onClipboardSuccess()"
            (clipboardError)="onClipboardError()"
            type="button"
            icon="copy"
        >
            Copy
        </button>
    </div>
    <div class="message-box">
        <nui-message type="ok" [allowDismiss]="true" *ngIf="copiedSuccessfully">
            <b i18n>Text was copied to the clipboard!</b>
        </nui-message>
        <nui-message
            type="critical"
            [allowDismiss]="true"
            *ngIf="copiedWithError"
        >
            <b i18n>Failed to copy text!</b>
        </nui-message>
    </div>
</div>
`;export{i as default};
