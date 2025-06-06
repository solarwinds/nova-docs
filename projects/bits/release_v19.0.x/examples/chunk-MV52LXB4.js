import"./chunk-VBFW7A5V.js";var t=`<nui-search
    id="nui-demo-search"
    [name]="name"
    [value]="value"
    [captureFocus]="captureFocus"
    [isInErrorState]="isInErrorState"
    (focusChange)="onFocusChange($event)"
    (inputChange)="onInputChange($event)"
    (search)="onSearch($event)"
    (cancel)="onCancel($event)"
>
</nui-search>
<div>
    <h3>Search Result:</h3>
    <div>
        <p [innerHTML]="stringToSearch | nuiHighlight : searchKey"></p>
    </div>
</div>
<h4>Input parameters:</h4>
<form>
    <div>
        <div>
            <code> captureFocus </code>
            <span> : {{ captureFocus ? "true" : "false" }}</span>
        </div>
        <button
            nui-button
            type="button"
            id="nui-demo-search-set-focus-btn"
            displayStyle="default"
            (click)="setFocus()"
        >
            Set Focus for {{ interval / 1000 }} sec.
        </button>
    </div>
</form>
`;export{t as default};
