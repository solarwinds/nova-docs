import"./chunk-XR34LRGE.js";var l=`<div class="container">
    <div class="d-flex nested-row" #parent>
        <div class="w-100 h-100 col">
            <div class="container nested-row nested-row__child" #child1>
                Click the button below to trigger overlay over this text
            </div>
            <button
                nui-button
                type="button"
                class="mt-3 mr-auto ml-auto d-flex"
                (click)="triggerOverlay(child1, overlay1)"
            >
                Toggle Overlay
            </button>
        </div>
    </div>
    <button
        nui-button
        type="button"
        class="mt-3 mr-auto ml-auto d-flex"
        (click)="triggerOverlay(parent, overlay2)"
    >
        Toggle General Overlay
    </button>
</div>

<nui-overlay #overlay1>
    <div class="h-100 overlay-class_1">
        <div
            class="h-100 container d-flex flex-column justify-content-center align-items-center"
        >
            <h1>Overlay</h1>
            <p>(opacity: 0.7)</p>
        </div>
    </div>
</nui-overlay>

<nui-overlay #overlay2>
    <div class="h-100 overlay-class_2">
        <div
            class="h-100 container d-flex flex-column justify-content-center align-items-center"
        >
            <h1>Overlay 2</h1>
            <p>(opacity: 0.8)</p>
        </div>
    </div>
</nui-overlay>
`;export{l as default};
