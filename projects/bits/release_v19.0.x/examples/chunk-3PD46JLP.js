import"./chunk-VBFW7A5V.js";var e=`<div class="d-flex flex-row justify-content-start">
    <div class="d-flex flex-column mr-5">
        <h4 i18n>Selected position:</h4>
        <nui-radio-group name="positions" [(value)]="selectedPosition">
            <nui-radio
                *ngFor="let position of positions"
                [value]="position"
                [checked]="position === 'top'"
                i18n
            >
                {{ position }}
            </nui-radio>
        </nui-radio-group>
    </div>
    <div class="d-flex ml-5">
        <div
            class="d-flex flex-column justify-content-center align-items-center container"
        >
            <div class="with-border">
                <span
                    nuiTooltip="I'm the Tooltip!"
                    [tooltipPlacement]="selectedPosition"
                    i18n
                    >Hover Over Me!</span
                >
            </div>
        </div>
    </div>
</div>
`;export{e as default};
