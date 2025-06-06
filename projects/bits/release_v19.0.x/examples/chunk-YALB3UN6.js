import"./chunk-VBFW7A5V.js";var a=`<div>
    <nui-tab-heading-group (selected)="updateContent($event)">
        <nui-tab-heading
            *ngFor="let tab of tabsetContent"
            [disabled]="tab.isDisabled"
            [tabId]="tab.id"
        >
            <div class="d-flex align-content-center">
                <div class="d-inline-flex align-items-center">
                    <nui-icon
                        [icon]="tab.icon.name"
                        [iconColor]="
                            tab.isDisabled
                                ? tab.icon.disabledColor
                                : currentTabId === tab.id
                                ? tab.icon.activeColor
                                : tab.icon.inactiveColor
                        "
                    >
                    </nui-icon>
                </div>
            </div>
        </nui-tab-heading>
    </nui-tab-heading-group>
</div>
`;export{a as default};
