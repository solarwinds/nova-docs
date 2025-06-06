import"./chunk-VBFW7A5V.js";var i=`<ng-template #content let-close="close" let-dismiss="dismiss">
    <nui-dialog-header
        title="Dialog title"
        i18n-title
        (closed)="close()"
    ></nui-dialog-header>
    <div class="dialog-body responsive-mode">
        <section class="demo-options-section">
            <nui-date-time-picker
                (modelChanged)="onModelChanged($event)"
                displayMode="inline"
                [model]="dt"
            ></nui-date-time-picker>
            <p class="mt-2">{{ selectedDate }}</p>
        </section>
    </div>
    <nui-dialog-footer>
        <button nui-button type="button" (click)="close()" i18n>Close</button>
    </nui-dialog-footer>
</ng-template>

<button
    id="nui-demo-default-dialog-btn"
    nui-button
    type="button"
    (click)="open(content)"
    i18n
>
    Open dialog
</button>
`;export{i as default};
