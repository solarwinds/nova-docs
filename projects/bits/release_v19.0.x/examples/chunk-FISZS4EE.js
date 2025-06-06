import"./chunk-VBFW7A5V.js";var i=`<div class="container">
    <div class="row"><h3>Basic button</h3></div>
    <div class="row">
        <button
            nui-button
            type="button"
            id="basic-tooltip"
            nuiTooltip="Default tooltip"
        >
            Standard tooltip example
        </button>
    </div>

    <div class="row"><h3>Custom position: left, bottom, right</h3></div>
    <div class="row">
        <button
            nui-button
            id="left-tooltip"
            nuiTooltip="Left-side tooltip"
            tooltipPlacement="left"
            type="button"
        >
            Tooltip on the left
        </button>
        <button
            nui-button
            id="bottom-tooltip"
            nuiTooltip="Bottom-placed tooltip"
            tooltipPlacement="bottom"
            type="button"
        >
            Tooltip on the bottom
        </button>
        <button
            nui-button
            id="right-tooltip"
            nuiTooltip="Right-side tooltip"
            tooltipPlacement="right"
            type="button"
        >
            Tooltip on the right
        </button>
    </div>

    <div class="row"><h3>Manual Triggering</h3></div>
    <div class="row">
        <span #tooltip="nuiTooltip" [nuiTooltip]="tooltipMessage"> </span>
        <button
            id="manual-tooltip"
            nui-button
            type="button"
            (click)="tooltip.toggle()"
        >
            Manually toggle tooltip
        </button>
    </div>
</div>
`;export{i as default};
