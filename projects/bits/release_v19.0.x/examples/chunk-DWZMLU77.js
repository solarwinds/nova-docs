import"./chunk-VBFW7A5V.js";var n=`<ng-template #headerButtonsContent let-close="close">
    <nui-dialog-header title="Dialog title" i18n-title (closed)="close()">
        <button
            nui-button
            type="button"
            displayStyle="action"
            icon="fullscreen"
        ></button>
        <button
            nui-button
            type="button"
            displayStyle="action"
            icon="menu"
        ></button>
    </nui-dialog-header>
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
        <button nui-button type="button" (click)="onButtonClick('Cancel')" i18n>
            Cancel
        </button>
        <button
            nui-button
            type="button"
            displayStyle="primary"
            (click)="onButtonClick('Action')"
            i18n
        >
            Action
        </button>
    </nui-dialog-footer>
</ng-template>

<button
    id="nui-demo-custom-actions"
    nui-button
    type="button"
    (click)="open(headerButtonsContent)"
    i18n
>
    More actions
</button>
`;export{n as default};
