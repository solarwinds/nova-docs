import"./chunk-VBFW7A5V.js";var u=`<div class="container">
    <div class="row">
        <div class="col">
            <h3>Basic small busy</h3>
            <div id="nui-busy-test-basic" nui-busy [busy]="busy">
                <div>Busy content</div>
                <div>
                    With any kind of content should have busy indication in the
                    center of parent container
                </div>
            </div>
            <hr />
        </div>
    </div>

    <div class="row">
        <div class="col">
            <h3>Custom busy</h3>
            <div id="nui-busy-test-custom" nui-busy [busy]="busy">
                <div class="visual-test-busy-content">Busy content</div>
                <nui-spinner
                    id="nui-demo-spinner"
                    size="large"
                    i18n-message
                    message="Hello from custom busy"
                ></nui-spinner>
            </div>
            <hr />
        </div>
    </div>

    <div class="row">
        <div class="col">
            <h3>Progress busy</h3>
            <div id="nui-busy-test-progress" nui-busy [busy]="busy">
                <div class="visual-test-busy-content">Busy content</div>
                <nui-progress
                    id="nui-demo-progress"
                    i18n-message
                    message="Hello from custom busy"
                ></nui-progress>
            </div>
            <hr />
        </div>
    </div>

    <div class="row">
        <div class="col">
            <h3>Progress busy from the start</h3>
            <div id="nui-busy-test-progress" nui-busy [busy]="busyAtTheStart">
                <div class="visual-test-busy-content">Busy content</div>
                <nui-progress
                    id="nui-demo-progress"
                    i18n-message
                    message="Hello from custom busy"
                ></nui-progress>
            </div>
            <hr />
        </div>
    </div>

    <div class="row">
        <div class="col">
            <h3>Custom busy</h3>
            <div id="nui-busy-test-custom" nui-busy [busy]="busyAtTheStart">
                <div class="visual-test-busy-content">Busy content</div>
                <nui-spinner
                    id="nui-demo-spinner"
                    size="large"
                    i18n-message
                    message="Hello from custom busy"
                ></nui-spinner>
            </div>
            <hr />
        </div>
    </div>

    <div class="row">
        <button id="nui-busy-test-button" (click)="switchBusy()">
            Switch busy state
        </button>
    </div>
</div>
`;export{u as default};
