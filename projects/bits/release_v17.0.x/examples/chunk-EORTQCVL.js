import"./chunk-XR34LRGE.js";var i=`<nui-combobox-v2
    placeholder="Select Item"
    i18n-placeholder
    [formControl]="comboboxControl"
    [isTypeaheadEnabled]="false"
    #combobox
>
    <cdk-virtual-scroll-viewport
        itemSize="30"
        [minBufferPx]="300"
        [maxBufferPx]="600"
        [style.height.px]="containerHeight"
    >
        <div *cdkVirtualFor="let item of filteredItems | async; index as i">
            <nui-select-v2-option
                [value]="item"
                class="d-flex align-items-center"
            >
                <span [nuiComboboxV2OptionHighlight]="item"></span>
            </nui-select-v2-option>
        </div>
    </cdk-virtual-scroll-viewport>
</nui-combobox-v2>
`;export{i as default};
