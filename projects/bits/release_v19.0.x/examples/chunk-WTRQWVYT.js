import"./chunk-VBFW7A5V.js";var n=`<div class="nui">
    <form>
        <nui-radio-group>
            <nui-radio
                id="nui-demo-setfocus-radio-carrot"
                value="carrot"
                checked
                [nuiSetFocus]="carrotFocused"
                i18n
            >
                carrot
            </nui-radio>
            <nui-radio
                id="nui-demo-setfocus-radio-onion"
                value="onion"
                [nuiSetFocus]="onionFocused"
                i18n
            >
                onion
            </nui-radio>
        </nui-radio-group>
        <div>
            <button
                id="nui-demo-setfocus-button-carrot"
                nui-button
                type="button"
                (click)="setCarrotFocus()"
                i18n
            >
                temporary carrot focus
            </button>
            <button
                id="nui-demo-setfocus-button-onion"
                nui-button
                type="button"
                (click)="setOnionFocus()"
                i18n
            >
                temporary onion focus
            </button>
        </div>
        <div i18n>carrot focused: {{ carrotFocused }}</div>
        <div i18n>onion focused: {{ onionFocused }}</div>
    </form>
</div>
`;export{n as default};
