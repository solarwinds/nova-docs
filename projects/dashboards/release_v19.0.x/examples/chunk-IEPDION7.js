import"./chunk-VBFW7A5V.js";var e=`<div class="my-3 d-flex align-items-center">
    <nui-switch class="ml-3" [(value)]="editMode" i18n>Edit Mode</nui-switch>
    <button
        type="button"
        nui-button
        class="ml-4"
        (click)="onCreateWidget()"
        i18n
    >
        Create Widget
    </button>
</div>

<!--
    The nuiWidgetEditor directive uses a standard input binding for its persistence handler assignment.
-->
<div class="w-100 dashboard">
    <nui-dashboard
        [(dashboard)]="dashboard"
        [(gridsterConfig)]="gridsterConfig"
        [editMode]="editMode"
        [nuiWidgetEditor]="persistenceHandler"
    >
    </nui-dashboard>
</div>
`;export{e as default};
