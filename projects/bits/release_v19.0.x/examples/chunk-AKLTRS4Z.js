import"./chunk-VBFW7A5V.js";var t=`<div class="container">
    <div class="row">
        <div class="col">
            <h2>Basic</h2>
            <nui-date-time-picker
                [model]="dt"
                id="nui-basic-date-time-picker"
            ></nui-date-time-picker>
            <hr />
        </div>
        <div class="col">
            <h2>Range</h2>
            <nui-date-time-picker
                [model]="dt"
                [minDate]="minDate"
                [maxDate]="maxDate"
                id="nui-date-time-picker-ranged"
            ></nui-date-time-picker>
            <hr />
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h2>Disabled</h2>
            <nui-date-time-picker
                [model]="dt"
                [isDisabled]="true"
                id="nui-date-time-picker-disabled"
            ></nui-date-time-picker>
            <hr />
        </div>
        <div class="col">
            <h2>Inline</h2>
            <nui-date-time-picker
                displayMode="inline"
                [model]="dt"
                id="nui-date-time-picker-inline"
            ></nui-date-time-picker>
            <hr />
        </div>
    </div>
    <div class="row">
        <div class="col">
            <ng-template #content let-close="close" let-dismiss="dismiss">
                <nui-dialog-header
                    title="Dialog title"
                    i18n-title
                    (closed)="close()"
                ></nui-dialog-header>
                <div class="dialog-body responsive-mode">
                    <section class="demo-options-section">
                        <nui-date-time-picker
                            displayMode="inline"
                            [model]="dt"
                            [appendToBody]="true"
                            id="nui-date-time-picker-dialog"
                        ></nui-date-time-picker>
                    </section>
                </div>
                <nui-dialog-footer>
                    <button nui-button type="button" (click)="close()" i18n>
                        Close
                    </button>
                </nui-dialog-footer>
            </ng-template>

            <button
                id="nui-visual-test-dialog-btn"
                nui-button
                type="button"
                (click)="open(content)"
                i18n
            >
                Open dialog
            </button>
        </div>
    </div>
</div>
`;export{t as default};
