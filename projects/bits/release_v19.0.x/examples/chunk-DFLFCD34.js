import"./chunk-VBFW7A5V.js";var i=`<nui-select-v2
    id="select-to-open-dialog"
    placeholder="Select an item"
    i18n-placeholder
    [popupViewportMargin]="100"
>
    <nui-select-v2-option
        *ngFor="let option of options1"
        [value]="option"
        (click)="openInOverlay(headerButtonsContent)"
    >
        {{ option }}
    </nui-select-v2-option>
</nui-select-v2>

<ng-template #headerButtonsContent let-close="close">
    <nui-dialog-header
        title="Dialog Title"
        i18n-title
        (closed)="close()"
    ></nui-dialog-header>
    <div class="dialog-body">
        <p>
            <nui-select-v2 placeholder="Select an item" i18n-placeholder>
                <nui-select-v2-option
                    *ngFor="let option of options2"
                    [value]="option"
                >
                    {{ option }}
                </nui-select-v2-option>
            </nui-select-v2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere.
            Etiam at pulvinar enim, nec interdum purus. Duis elit metus,
            lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia
            purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus.
            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam
            vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at
            ullamcorper lorem. Morbi non turpis nibh.
        </p>
    </div>
    <nui-dialog-footer>
        <button nui-button type="button" (click)="onCancel()" i18n>
            Cancel
        </button>
        <button
            nui-button
            type="button"
            displayStyle="primary"
            (click)="onDone()"
            i18n
        >
            Action
        </button>
    </nui-dialog-footer>
</ng-template>
`;export{i as default};
