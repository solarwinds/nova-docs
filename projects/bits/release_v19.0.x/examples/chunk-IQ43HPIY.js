import"./chunk-VBFW7A5V.js";var n=`<nui-menu title="Menu Custom Items" i18n-title>
    <nui-menu-item>
        <button nui-button type="button" (click)="doNotClosePopup($event)" i18n>
            This one does not close popup!
        </button>
    </nui-menu-item>
    <nui-menu-item (click)="switchClick($event)">
        <div class="nui-menu-item__switch d-flex">
            <nui-switch [value]="checked">
                <div
                    class="menu-custom-example__ellipsis"
                    i18n
                    title="This is wide ellipsified switch inside item"
                    i18n-title
                >
                    This is wide ellipsified switch inside item
                </div>
            </nui-switch>
        </div>
    </nui-menu-item>
    <nui-menu-item i18n> This one closes popup </nui-menu-item>
</nui-menu>
`;export{n as default};
