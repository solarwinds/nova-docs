import"./chunk-VBFW7A5V.js";var e=`<h3>Small Size</h3>
<nui-content id="test-element-small" size="small">
    <div>
        <button
            nui-button
            type="button"
            id="test-element"
            (click)="changeButtonText($event)"
        >
            Click
        </button>
        {{ dynamicContent }}
    </div>
</nui-content>
<h3>Default Size</h3>
<nui-content id="test-element-normal">{{ dynamicContent }}</nui-content>
<h3>Large Size</h3>
<nui-content id="test-element-large" size="large">{{
    dynamicContent
}}</nui-content>
`;export{e as default};
