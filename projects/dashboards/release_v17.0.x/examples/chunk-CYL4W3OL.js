import"./chunk-T555DFTC.js";var i=`<div class="my-3 d-flex align-items-center">
    <nui-switch class="ml-3" [(value)]="editMode" i18n> Edit Mode </nui-switch>
    <button
        *ngIf="!dashboard?.widgets['embeddedContentWidgetId']"
        type="button"
        displayStyle="action"
        (click)="reInitializeDashboard()"
        nui-button
    >
        Restore Widget
    </button>
</div>

<div class="w-100 dashboard">
    <!--
        Note: The dashboard and gridsterConfig input assignments must use banana-in-a-box notation to keep
        the dashboard state updated with changes to the pizzagna.
    -->
    <nui-dashboard
        *ngIf="dashboard"
        [(dashboard)]="dashboard"
        [(gridsterConfig)]="gridsterConfig"
        [editMode]="editMode"
        nuiWidgetEditor
    >
    </nui-dashboard>
</div>
`;export{i as default};
