import"./chunk-VBFW7A5V.js";var t=`<div class="container">
    <div class="row">
        <div class="col">
            <h3>Basic small busy</h3>
            <div id="nui-busy-test-basic" nui-busy [busy]="busy">
                <div class="test-busy-content">Busy content</div>
            </div>
            <hr />
        </div>
    </div>

    <div class="row">
        <div class="col">
            <h3>Progress busy</h3>
            <div id="nui-busy-test-progress" nui-busy [busy]="busy">
                <div class="test-busy-content">Busy content</div>
                <nui-progress
                    id="nui-demo-progress"
                    message="Hello from custom busy"
                ></nui-progress>
            </div>
            <hr />
        </div>
    </div>

    <div class="row">
        <div class="col">
            <h3>Custom busy</h3>
            <nui-select
                class="row justify-content-md-center"
                id="nui-busy-select-overlay"
                [appendToBody]="true"
                [itemsSource]="items"
            ></nui-select>
            <div id="nui-busy-test-custom" nui-busy [busy]="busy">
                <div class="test-busy-content">
                    <div>Busy content</div>
                    <div>A bit more content</div>
                    <div>A bit more content</div>
                    <div>
                        A bit more content to overlap with second item in the
                        select
                    </div>
                    <button id="focusable-button-inside-busy-component">
                        button
                    </button>
                    <a href="#">link</a>
                    <nui-checkbox i18n>
                        Attempts to change my checked state will fail when busy
                        is enabled
                    </nui-checkbox>
                </div>
                <nui-spinner
                    id="nui-demo-spinner"
                    size="large"
                    message="Hello from custom busy"
                ></nui-spinner>
            </div>
            <hr />
        </div>
    </div>

    <div class="row">
        <button
            id="nui-busy-test-button"
            nui-button
            type="button"
            (click)="switchBusy()"
        >
            Switch busy state
        </button>
    </div>
</div>
`;export{t as default};
