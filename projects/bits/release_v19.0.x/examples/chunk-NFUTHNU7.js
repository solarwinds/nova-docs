import"./chunk-VBFW7A5V.js";var i=`<nui-menu icon="menu" id="nui-demo-multi-selection-menu">
    <nui-menu-group header="Item Types" i18n-header>
        <nui-menu-action (actionDone)="onActionDone()" i18n
            >Menu Action</nui-menu-action
        >
        <nui-menu-switch (actionDone)="onActionDone($event)" i18n
            >Menu Switch Item</nui-menu-switch
        >
        <nui-menu-option (actionDone)="onActionDone($event)" i18n
            >Menu Option</nui-menu-option
        >
        <nui-menu-link (actionDone)="onActionDone()" i18n
            >Menu Link</nui-menu-link
        >
        <nui-menu-item (actionDone)="onActionDone()" i18n
            >Menu Item (Default)</nui-menu-item
        >
    </nui-menu-group>
    <nui-menu-group header="Destructive items" i18n-header>
        <nui-menu-action
            type="destructive"
            (actionDone)="onActionDone()"
            icon="export-pdf"
            i18n
            >Destructive action</nui-menu-action
        >
    </nui-menu-group>
</nui-menu>
`;export{i as default};
