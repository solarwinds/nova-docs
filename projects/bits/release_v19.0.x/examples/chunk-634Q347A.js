import"./chunk-VBFW7A5V.js";var t=`<div class="container">
    <div>
        <ng-template #content let-close="close">
            <nui-dialog-header
                title="Dialog title"
                [severity]="severity"
                (closed)="close()"
            >
            </nui-dialog-header>
            <div class="dialog-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam maximus faucibus bibendum. Aenean feugiat interdum
                    leo sed posuere. Etiam at pulvinar enim, nec interdum purus.
                    Duis elit metus, lobortis vitae quam a, malesuada cursus
                    quam. Duis vel lacinia purus. Maecenas eget arcu ac ante
                    sagittis eleifend vel ut purus. Pellentesque sit amet semper
                    ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis
                    non erat sit amet sem venenatis accumsan at ullamcorper
                    lorem. Morbi non turpis nibh.
                </p>
            </div>
            <nui-dialog-footer>
                <button
                    nui-button
                    type="button"
                    [isEmpty]="false"
                    (click)="onButtonClick('Cancel')"
                >
                    Cancel
                </button>
                <button
                    nui-button
                    type="button"
                    displayStyle="primary"
                    [isEmpty]="false"
                    (click)="onButtonClick('Action')"
                >
                    Action
                </button>
            </nui-dialog-footer>
        </ng-template>

        <div>
            <h3>Basic Dialog</h3>
            <button
                id="nui-visual-test-default-dialog-btn"
                (click)="open(content)"
            >
                Click me!
            </button>
            <hr />
        </div>

        <div>
            <h3>Dialogs with Different Severity</h3>
            <button
                id="nui-visual-test-critical-dialog-btn"
                (click)="open(content, 'critical')"
            >
                Show Critical
            </button>
            <button
                id="nui-visual-test-warning-dialog-btn"
                (click)="open(content, 'warning')"
            >
                Show Warning
            </button>
            <button
                id="nui-visual-test-info-dialog-btn"
                (click)="open(content, 'info')"
            >
                Show Info
            </button>
            <hr />
        </div>

        <div>
            <h3>Dialogs with Different Sizes</h3>
            <button
                id="nui-visual-test-small-dialog-btn"
                (click)="openSizes(content, 'sm')"
            >
                Show Small Dialog
            </button>
            <button
                id="nui-visual-test-medium-dialog-btn"
                (click)="openSizes(content, 'md')"
            >
                Show Medium Dialog
            </button>
            <button
                id="nui-visual-test-large-dialog-btn"
                (click)="openSizes(content, 'lg')"
            >
                Show Large Dialog
            </button>
            <hr />
        </div>
    </div>

    <div>
        <ng-template #headerButtonsContent let-close="close">
            <nui-dialog-header title="Dialog title" (closed)="close()">
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
                <p>
                    <nui-select
                        id="nui-visual-basic-select"
                        [itemsSource]="dataset.items"
                        placeholder="Select item"
                    ></nui-select>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam maximus faucibus bibendum. Aenean feugiat interdum
                    leo sed posuere. Etiam at pulvinar enim, nec interdum purus.
                    Duis elit metus, lobortis vitae quam a, malesuada cursus
                    quam. Duis vel lacinia purus. Maecenas eget arcu ac ante
                    sagittis eleifend vel ut purus. Pellentesque sit amet semper
                    ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis
                    non erat sit amet sem venenatis accumsan at ullamcorper
                    lorem. Morbi non turpis nibh.
                </p>
            </div>
            <nui-dialog-footer>
                <button
                    nui-button
                    type="button"
                    (click)="onButtonClick('Cancel')"
                >
                    Cancel
                </button>
                <button
                    nui-button
                    type="button"
                    displayStyle="primary"
                    (click)="onButtonClick('Action')"
                >
                    Action
                </button>
            </nui-dialog-footer>
        </ng-template>

        <div>
            <h3>Custom Dialog Header</h3>
            <button
                id="nui-visual-test-custom-actions-dialog-btn"
                (click)="open(headerButtonsContent)"
            >
                More actions
            </button>
            <hr />
        </div>
    </div>

    <div>
        <h3>Confirmation Dialogs with Defaults and Overrides</h3>
        <button
            id="nui-visual-test-confirmation-dialog-defaults-btn"
            (click)="confirmationDefaults()"
        >
            Show Confirmation with defaults
        </button>
        <button
            id="nui-visual-test-confirmation-dialog-overrides-btn"
            (click)="confirmationOverrides()"
        >
            Show Confirmation with overrides
        </button>
        <hr />
    </div>

    <div>
        <ng-template #contentResponsiveMode let-close="close">
            <nui-dialog-header
                title="Dialog title"
                (closed)="close()"
            ></nui-dialog-header>
            <div
                class="dialog-body"
                [ngClass]="{ 'responsive-mode': isResponsiveMode }"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam maximus faucibus bibendum. Aenean feugiat interdum
                    leo sed posuere. Etiam at pulvinar enim, nec interdum purus.
                    Duis elit metus, lobortis vitae quam a, malesuada cursus
                    quam. Duis vel lacinia purus. Maecenas eget arcu ac ante
                    sagittis eleifend vel ut purus. Pellentesque sit amet semper
                    ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis
                    non erat sit amet sem venenatis accumsan at ullamcorper
                    lorem. Morbi non turpis nibh.
                </p>

                <p>
                    Quisque ut pellentesque augue. Ut finibus malesuada lacus, a
                    elementum odio eleifend ac. Duis faucibus vehicula elit.
                    Pellentesque id metus enim. Praesent vestibulum ipsum vel
                    venenatis vehicula. Donec vel erat ex. Vivamus porta risus
                    vitae risus tempus accumsan.
                </p>

                <p>
                    Duis euismod erat id metus euismod, interdum iaculis turpis
                    tempus. Nulla facilisi. Pellentesque ut purus nec lorem
                    aliquam dictum ut sit amet enim. Mauris laoreet vel mi eget
                    suscipit. Aliquam ipsum lacus, varius sed felis non, aliquet
                    ultrices nisl. In tincidunt quam sed faucibus vulputate.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis pellentesque elit sem, id aliquet metus egestas sit
                    amet. Maecenas quis justo in turpis lacinia aliquet. Donec
                    dignissim dolor nunc, in ultricies ligula sodales tincidunt.
                    Phasellus in nisi ac metus rutrum efficitur eu sed mi.
                    Praesent et porta leo. Curabitur sed maximus lectus. Aenean
                    ac ex metus. Integer facilisis id sapien quis sodales. Nam
                    at eros sapien.
                </p>

                <p>
                    Mauris consequat lectus diam. Cras auctor vestibulum lectus,
                    id pharetra nisl dapibus id. Sed tempor enim vel diam
                    tincidunt condimentum. Ut elementum, ante in ultricies
                    pulvinar, elit metus faucibus mauris, eu sodales lectus
                    risus sit amet odio. Sed ullamcorper maximus ante, ut
                    lobortis libero rutrum lacinia. Nam pretium erat ac velit
                    egestas rutrum ultrices vel libero. Etiam sollicitudin
                    tempus leo. Quisque a elit a orci fringilla molestie.
                    Curabitur luctus dui risus, eget commodo lectus ullamcorper
                    sit amet. Nulla turpis ante, venenatis tempor ex semper,
                    semper vulputate enim. Duis sem nulla, egestas eu rhoncus
                    et, egestas malesuada neque.
                </p>

                <p>
                    Fusce ut malesuada est. Ut ut placerat nunc. Vivamus mauris
                    nisi, luctus nec turpis quis, luctus porta ante. Aliquam
                    erat volutpat. Nulla facilisi. Maecenas id vehicula sem. Sed
                    vitae sodales orci, sed pretium mauris. Maecenas orci est,
                    volutpat sit amet elit in, gravida finibus justo. Vestibulum
                    eget eros id risus elementum interdum eu quis nisi. Donec
                    ullamcorper enim tincidunt, volutpat sem et, gravida sem.
                    Fusce vitae tellus mauris. Nam non bibendum urna. Ut vel
                    pellentesque est, quis egestas ex. Nam lobortis quam eget
                    arcu tristique, id suscipit enim volutpat. Quisque pretium
                    vel nisl eu aliquet.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam maximus faucibus bibendum. Aenean feugiat interdum
                    leo sed posuere. Etiam at pulvinar enim, nec interdum purus.
                    Duis elit metus, lobortis vitae quam a, malesuada cursus
                    quam. Duis vel lacinia purus. Maecenas eget arcu ac ante
                    sagittis eleifend vel ut purus. Pellentesque sit amet semper
                    ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis
                    non erat sit amet sem venenatis accumsan at ullamcorper
                    lorem. Morbi non turpis nibh.
                </p>

                <p>
                    Quisque ut pellentesque augue. Ut finibus malesuada lacus, a
                    elementum odio eleifend ac. Duis faucibus vehicula elit.
                    Pellentesque id metus enim. Praesent vestibulum ipsum vel
                    venenatis vehicula. Donec vel erat ex. Vivamus porta risus
                    vitae risus tempus accumsan.
                </p>

                <p>
                    Duis euismod erat id metus euismod, interdum iaculis turpis
                    tempus. Nulla facilisi. Pellentesque ut purus nec lorem
                    aliquam dictum ut sit amet enim. Mauris laoreet vel mi eget
                    suscipit. Aliquam ipsum lacus, varius sed felis non, aliquet
                    ultrices nisl. In tincidunt quam sed faucibus vulputate.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis pellentesque elit sem, id aliquet metus egestas sit
                    amet. Maecenas quis justo in turpis lacinia aliquet. Donec
                    dignissim dolor nunc, in ultricies ligula sodales tincidunt.
                    Phasellus in nisi ac metus rutrum efficitur eu sed mi.
                    Praesent et porta leo. Curabitur sed maximus lectus. Aenean
                    ac ex metus. Integer facilisis id sapien quis sodales. Nam
                    at eros sapien.
                </p>

                <p>
                    Mauris consequat lectus diam. Cras auctor vestibulum lectus,
                    id pharetra nisl dapibus id. Sed tempor enim vel diam
                    tincidunt condimentum. Ut elementum, ante in ultricies
                    pulvinar, elit metus faucibus mauris, eu sodales lectus
                    risus sit amet odio. Sed ullamcorper maximus ante, ut
                    lobortis libero rutrum lacinia. Nam pretium erat ac velit
                    egestas rutrum ultrices vel libero. Etiam sollicitudin
                    tempus leo. Quisque a elit a orci fringilla molestie.
                    Curabitur luctus dui risus, eget commodo lectus ullamcorper
                    sit amet. Nulla turpis ante, venenatis tempor ex semper,
                    semper vulputate enim. Duis sem nulla, egestas eu rhoncus
                    et, egestas malesuada neque.
                </p>

                <p>
                    Fusce ut malesuada est. Ut ut placerat nunc. Vivamus mauris
                    nisi, luctus nec turpis quis, luctus porta ante. Aliquam
                    erat volutpat. Nulla facilisi. Maecenas id vehicula sem. Sed
                    vitae sodales orci, sed pretium mauris. Maecenas orci est,
                    volutpat sit amet elit in, gravida finibus justo. Vestibulum
                    eget eros id risus elementum interdum eu quis nisi. Donec
                    ullamcorper enim tincidunt, volutpat sem et, gravida sem.
                    Fusce vitae tellus mauris. Nam non bibendum urna. Ut vel
                    pellentesque est, quis egestas ex. Nam lobortis quam eget
                    arcu tristique, id suscipit enim volutpat. Quisque pretium
                    vel nisl eu aliquet.
                </p>
            </div>
            <nui-dialog-footer>
                <button
                    (click)="onButtonClick('Cancel')"
                    nui-button
                    type="button"
                >
                    Cancel
                </button>
                <button
                    displayStyle="primary"
                    (click)="onButtonClick('Action')"
                    nui-button
                    type="button"
                >
                    Action
                </button>
            </nui-dialog-footer>
        </ng-template>

        <div>
            <h3>Position on Screen</h3>
            <button
                id="nui-visual-test-long-dialog-btn"
                (click)="
                    openResponsive(contentResponsiveMode, {
                        isResponsiveMode: false
                    })
                "
            >
                Default mode
            </button>
            <button
                id="nui-visual-test-responsive-dialog-btn"
                (click)="
                    openResponsive(contentResponsiveMode, {
                        isResponsiveMode: true
                    })
                "
            >
                Responsive mode
            </button>
            <hr />
        </div>
    </div>
</div>
`;export{t as default};
