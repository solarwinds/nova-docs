import"./chunk-XR34LRGE.js";var t=`<nui-select-v2
    placeholder="Select Item"
    i18n-placeholder
    [formControl]="selectControl"
>
    <cdk-virtual-scroll-viewport
        itemSize="30"
        [minBufferPx]="containerHeight"
        [maxBufferPx]="containerHeight * 2"
        [style.height.px]="containerHeight"
    >
        <div *cdkVirtualFor="let item of items; index as i">
            <nui-select-v2-option
                [value]="item"
                [index]="i"
                class="d-flex align-items-center"
            >
                {{ item }}
            </nui-select-v2-option>
        </div>
    </cdk-virtual-scroll-viewport>
</nui-select-v2>
`;export{t as default};
