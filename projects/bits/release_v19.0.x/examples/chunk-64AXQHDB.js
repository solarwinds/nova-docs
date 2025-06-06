import"./chunk-VBFW7A5V.js";var i=`<div class="container pt-5">
    <div class="row">
        <div class="col">
            <h3>Basic Toast Positioned defferently</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="d-flex justify-content-start" id="nui-toast-positions">
                <button
                    id="nui-toast-button-all-positions"
                    (click)="showToastsAllPositions($event, 200000)"
                >
                    Trigger all positions
                </button>
            </div>
            <div class="d-flex justify-content-start" id="nui-toast-fw">
                <button
                    id="nui-toast-position-fw"
                    (click)="showToastsFullWidth($event, 10000)"
                >
                    Full Width
                </button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3>Basic Toast Positioned defferently</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="d-flex justify-content-start">
                <button
                    id="nui-toast-clear-all-toasts"
                    (click)="clearToast($event)"
                >
                    Clear All Toasts
                </button>
                <button id="nui-toast-sticky" (click)="callStickyToast($event)">
                    Call Sticky Error!
                </button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3>Toast messages adjust size</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div
                class="d-flex justify-content-start"
                id="nui-toast-buttons-chain"
            >
                <button
                    id="nui-toast-adjust-size"
                    (click)="showToastsAdjustSize($event, 10000)"
                >
                    Trigger all toast messages
                </button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3>Toast messages with no header</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div
                class="d-flex justify-content-start"
                id="nui-toast-buttons-chain-no-header"
            >
                <button
                    id="nui-toast-no-header"
                    (click)="showToastsNoHeader($event, 10000)"
                >
                    Trigger all toast messages
                </button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3>Toast messages with progress bar</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="d-flex justify-content-start" id="nui-toast-positions">
                <button
                    id="nui-toast-button-all-positions-progress-bar"
                    (click)="showToastsAllPositions($event, 300000, true)"
                >
                    Trigger all positions
                </button>
            </div>
        </div>
    </div>
</div>
`;export{i as default};
