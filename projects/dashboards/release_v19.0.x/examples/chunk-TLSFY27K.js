import"./chunk-VBFW7A5V.js";var e=`<div class="my-3 d-flex align-items-center">
    <nui-switch class="ml-3" [(value)]="editMode" i18n>Edit Mode</nui-switch>
    <button
        *ngIf="!dashboard?.widgets['widget1']"
        type="button"
        displayStyle="action"
        (click)="reInitializeDashboard()"
        nui-button
        i18n
    >
        Restore Widget
    </button>
</div>

<!--
    The nuiWidgetEditor directive uses a standard input binding for its persistence handler assignment.
-->
<div class="w-100 dashboard">
    <nui-dashboard
        *ngIf="dashboard"
        [(dashboard)]="dashboard"
        [(gridsterConfig)]="gridsterConfig"
        [editMode]="editMode"
        [nuiWidgetEditor]="persistenceHandler"
    >
    </nui-dashboard>
</div>
`;export{e as default};
