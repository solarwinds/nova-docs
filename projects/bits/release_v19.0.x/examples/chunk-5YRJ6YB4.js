import"./chunk-VBFW7A5V.js";var o=`<nui-menu
    id="nui-demo-append-to-body-menu"
    title="Basic appended to body menu"
    [appendToBody]="true"
    i18n-title
>
    <nui-menu-group
        *ngFor="let group of dataset.itemsInGroups"
        [header]="group.header"
    >
        <nui-menu-action
            *ngFor="let item of group.items"
            (actionDone)="actionDone(item)"
        >
            {{ item }}
        </nui-menu-action>
    </nui-menu-group>
</nui-menu>
`;export{o as default};
