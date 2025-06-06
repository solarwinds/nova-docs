import"./chunk-XR34LRGE.js";var i=`<button
    id="nui-dialog-inside-overlay-with-date-time-picker-btn"
    nui-button
    type="button"
    (click)="openInOverlay(headerButtonsContent)"
    i18n
>
    Open Dialog
</button>

<ng-template #headerButtonsContent let-close="close">
    <nui-dialog-header
        title="Dialog Title"
        i18n-title
        (closed)="close()"
    ></nui-dialog-header>
    <div class="dialog-body">
        <p>
            <nui-date-time-picker
                id="date-time-picker"
                (modelChanged)="onModelChanged($event)"
                displayMode="inline"
                [model]="dt"
                [appendToBody]="true"
            ></nui-date-time-picker>
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
