import"./chunk-VBFW7A5V.js";var i=`<ng-template #content let-close="close" let-dismiss="dismiss">
    <nui-dialog-header
        title="Dialog title"
        i18n-title
        (closed)="close()"
    ></nui-dialog-header>
    <div class="dialog-body">
        <p i18n>
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
        <button
            nui-button
            type="button"
            (click)="actionCanceled(); close()"
            i18n
        >
            Cancel
        </button>
        <button
            nui-button
            type="button"
            displayStyle="primary"
            (click)="actionDone(); close()"
            i18n
        >
            Action
        </button>
    </nui-dialog-footer>
</ng-template>

<button
    id="nui-demo-with-keyboard-dialog-btn"
    nui-button
    type="button"
    (click)="openWith(content)"
    i18n
>
    Close me with ESC button
</button>
<button
    id="nui-demo-without-keyboard-dialog-btn"
    class="ml-4"
    nui-button
    type="button"
    (click)="openWithout(content)"
    i18n
>
    ESC button won't close me
</button>
`;export{i as default};
