import"./chunk-VBFW7A5V.js";var a=`<div class="container">
    <div class="row">
        <div class="col">
            <h3>Basic Expander</h3>
            <nui-expander id="nui-visual-test-expander-basic">
                <p>Content is here</p>
            </nui-expander>
            <hr />
        </div>
        <div class="col">
            <h3>Expander without Expand Line</h3>
            <nui-expander
                id="nui-visual-test-expander-without-border"
                [hideLeftBorder]="true"
            >
                <p>Content is here</p>
            </nui-expander>
            <hr />
        </div>
        <div class="w-100"></div>
        <div class="col">
            <h3>Expander with Text</h3>
            <nui-expander
                id="nui-visual-test-expander-header-text"
                header="Advanced Layout Settings"
            >
                <p>Content is here</p>
            </nui-expander>
            <hr />
        </div>
        <div class="col">
            <h3>Expander with Text and Icon</h3>
            <nui-expander
                id="nui-visual-test-expander-text-and-icon"
                header="Advanced Options"
                icon="orion-sitemaster"
            >
                <p>Content is here</p>
            </nui-expander>
            <hr />
        </div>
        <div class="w-100"></div>
        <div class="col-4">
            <h3>Expander with Custom Header</h3>
            <nui-expander id="nui-visual-test-expander-custom-header">
                <div
                    nuiExpanderHeader
                    class="d-flex align-items-center justify-content-between"
                >
                    <span>Advanced options</span>
                    <nui-menu
                        class="ml-3"
                        id="nui-demo-expander-header-menu"
                        icon="menu"
                        displayStyle="action"
                        nuiClickInterceptor
                        [itemsSource]="itemsSource"
                    ></nui-menu>
                </div>
                <p>Content is here</p>
            </nui-expander>
            <hr />
        </div>
        <div class="col-6 ml-auto">
            <h3>Staked Expanders</h3>
            <nui-expander
                id="nui-visual-test-staked-expander-1"
                header="Advanced Layout Settings"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam maximus faucibus bibendum. Aenean feugiat interdum
                    leo sed posuere. Etiam at pulvinar enim, nec interdum purus.
                    Duis elit metus, lobortis vitae quam a, malesuada cursus
                    quam. Duis vel lacinia purus. Maecenas eget arcu ac ante
                    sagittis eleifend vel ut purus.
                </p>
            </nui-expander>
            <nui-expander id="nui-visual-test-staked-expander-2">
                <div nuiExpanderHeader class="nui-text-default">
                    <span>Advanced options</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam maximus faucibus bibendum. Aenean feugiat interdum
                    leo sed posuere. Etiam at pulvinar enim, nec interdum purus.
                    Duis elit metus, lobortis vitae quam a, malesuada cursus
                    quam. Duis vel lacinia purus. Maecenas eget arcu ac ante
                    sagittis eleifend vel ut purus.
                </p>
            </nui-expander>
            <nui-expander id="nui-visual-test-staked-expander-3">
                <div nuiExpanderHeader class="nui-text-secondary">
                    <span>Advanced options</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam maximus faucibus bibendum. Aenean feugiat interdum
                    leo sed posuere. Etiam at pulvinar enim, nec interdum purus.
                    Duis elit metus, lobortis vitae quam a, malesuada cursus
                    quam. Duis vel lacinia purus. Maecenas eget arcu ac ante
                    sagittis eleifend vel ut purus.
                </p>
            </nui-expander>
            <hr />
        </div>
        <div class="col">
            <h3>Expander with Nested Expanders</h3>
            <nui-expander
                id="nui-visual-test-expander-nested-expander"
                header="Parent"
                [open]="true"
            >
                <p i18n>Content goes here</p>
                <nui-expander
                    id="nui-visual-test-expander-nested-expander-child"
                    header="Child"
                    [open]="true"
                >
                    <p i18n>Content goes here</p>
                </nui-expander>
            </nui-expander>
            <hr />
        </div>
    </div>
</div>
`;export{a as default};
