import"./chunk-XR34LRGE.js";var i=`<nui-select-v2 placeholder="Select Item" i18n-placeholder>
    <nui-select-v2-option-group
        *ngFor="let itemGroup of items; let last = last"
    >
        <span class="nui-select-v2-option-group--header">{{
            itemGroup.header
        }}</span>
        <nui-select-v2-option
            *ngFor="let item of itemGroup.items"
            [value]="item"
        >
            {{ item.name }}
        </nui-select-v2-option>
        <nui-divider *ngIf="!last" size="extra-small"></nui-divider>
    </nui-select-v2-option-group>
</nui-select-v2>
`;export{i as default};
