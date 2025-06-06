import"./chunk-XR34LRGE.js";var i=`<nui-tab-heading-group
    id="repeat-test-tab-group"
    (selected)="currentTabId = $event"
>
    <nui-tab-heading
        *ngFor="let tab of tabs"
        [tabId]="tab.id"
        [active]="currentTabId === tab.id"
        >{{ tab.title }}</nui-tab-heading
    >
</nui-tab-heading-group>
<div [style.display]="getTabDisplayMode(tabs[0].id)">
    No content in this tab. See other tab(s) for content.
</div>
<div [style.display]="getTabDisplayMode(tabs[1].id)">
    <repeat-virtual-scroll id="repeat-test-vscroll"></repeat-virtual-scroll>
</div>
<hr />
<nui-repeat-multi-selection-example></nui-repeat-multi-selection-example>
<nui-repeat-disabled-multi-selection-example></nui-repeat-disabled-multi-selection-example>
<nui-repeat-single-selection-mode-example></nui-repeat-single-selection-mode-example>
<button nui-button type="button" id="add-color" (click)="addNewColor()">
    Add color
</button>
<nui-repeat-radio-selection-mode-example
    [colors]="colors"
></nui-repeat-radio-selection-mode-example>
<nui-repeat-radio-with-non-required-selection-mode-example></nui-repeat-radio-with-non-required-selection-mode-example>
<nui-repeat-single-with-required-selection-mode-example></nui-repeat-single-with-required-selection-mode-example>
`;export{i as default};
