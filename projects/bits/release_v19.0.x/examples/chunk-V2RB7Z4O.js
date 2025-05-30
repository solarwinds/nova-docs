import"./chunk-VBFW7A5V.js";var o=`<div class="arrow-example">
    <div class="d-flex justify-content-between align-items-center mb-5">
        <div class="dnd-button" cdkDrag #draggable="cdkDrag">
            <button
                nui-button
                class="toggle-button"
                #toggleButton
                type="button"
                [isEmpty]="false"
                (click)="overlay.toggle()"
                i18n
            >
                Draggable toggle
            </button>
        </div>

        <button
            nui-button
            class="h-50"
            type="button"
            [isEmpty]="false"
            (click)="draggable.reset()"
            i18n
        >
            Reset draggable button
        </button>
    </div>

    <nui-overlay
        #overlay
        [toggleReference]="toggleButton['el'].nativeElement"
        [overlayConfig]="overlayConfig"
    >
        <img
            src="https://cdn.stocksnap.io/img-thumbs/960w/thumbs%20up-hand_QUWPLI693K.jpg"
            alt="Thumbs up"
            class="w-100"
        />
        <nui-overlay-arrow *ngIf="arrowSelectControl.value"></nui-overlay-arrow>
    </nui-overlay>

    Position:
    <nui-select-v2
        placeholder="Select Position"
        i18n-placeholder
        [formControl]="positionSelectControl"
        class="select"
    >
        <nui-select-v2-option
            *ngFor="let position of possiblePositions"
            [value]="position"
            >{{ position }}</nui-select-v2-option
        >
    </nui-select-v2>

    Arrow:
    <nui-select-v2
        placeholder="Select Arrow"
        i18n-placeholder
        [formControl]="arrowSelectControl"
        class="select"
    >
        <nui-select-v2-option
            *ngFor="let arrow of [true, false]"
            [value]="arrow"
            >{{ arrow }}</nui-select-v2-option
        >
    </nui-select-v2>
</div>
`;export{o as default};
