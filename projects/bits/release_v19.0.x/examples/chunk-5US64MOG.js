import"./chunk-VBFW7A5V.js";var o=`<div class="row">
    <div class="col-3">
        <nui-popover
            popoverTitle="Popover with Right Placement"
            i18n-popoverTitle
            id="nui-demo-popover-placement-right"
            [template]="rightPlacementTemplate"
            placement="right"
            trigger="click"
        >
            <button nui-button type="button" i18n>open right</button>
        </nui-popover>
    </div>
    <div class="col-3">
        <nui-popover
            popoverTitle="Popover with Left Placement"
            i18n-popoverTitle
            placement="left"
            id="nui-demo-popover-placement-left"
            [template]="leftPlacementTemplate"
            trigger="click"
        >
            <button nui-button type="button" i18n>open left</button>
        </nui-popover>
    </div>
    <div class="col-3">
        <nui-popover
            popoverTitle="Popover with Top Placement"
            i18n-popoverTitle
            id="nui-demo-popover-placement-top"
            placement="top"
            [template]="topPlacementTemplate"
            trigger="click"
        >
            <button nui-button type="button" i18n>open top</button>
        </nui-popover>
    </div>
    <div class="col-3">
        <nui-popover
            popoverTitle="Popover with Bottom Placement"
            i18n-popoverTitle
            id="nui-demo-popover-placement-bottom"
            [template]="bottomPlacementTemplate"
            placement="bottom"
            trigger="click"
        >
            <button nui-button type="button" i18n>open bottom</button>
        </nui-popover>
    </div>
</div>

<ng-template #rightPlacementTemplate>
    <span id="nui-demo-popover-modal-placement-right" i18n>
        I'm shown on the right of the button.
    </span>
</ng-template>
<ng-template #leftPlacementTemplate>
    <span id="nui-demo-popover-modal-placement-left" i18n>
        I'm shown on the left of the button.
    </span>
</ng-template>
<ng-template #topPlacementTemplate>
    <span id="nui-demo-popover-modal-placement-top" i18n>
        I'm shown on top of the button.
    </span>
</ng-template>
<ng-template #bottomPlacementTemplate>
    <span id="nui-demo-popover-modal-placement-bottom" i18n>
        I'm shown under the button.
    </span>
</ng-template>
`;export{o as default};
