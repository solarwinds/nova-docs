import"./chunk-VBFW7A5V.js";var a=`<div class="mb-2 d-flex align-items-center">
    <nui-switch class="ml-3 py-2" [(value)]="editMode" i18n>
        Edit Mode
    </nui-switch>
</div>

<div class="w-100 dashboard">
    <!--
        Note: The dashboard and gridsterConfig input assignments must use banana-in-a-box notation to keep
        the dashboard state updated with changes to the pizzagna.
    -->
    <nui-dashboard
        [(dashboard)]="dashboard"
        [editMode]="editMode"
        [(gridsterConfig)]="gridsterConfig"
        nuiWidgetEditor
    >
    </nui-dashboard>
</div>
`;export{a as default};
