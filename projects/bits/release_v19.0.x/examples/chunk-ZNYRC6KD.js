import"./chunk-VBFW7A5V.js";var e=`<div>
    <nui-tab-heading-group [vertical]="true" (selected)="updateContent($event)">
        <nui-tab-heading
            *ngFor="let tab of tabsetContent"
            [disabled]="tab.isDisabled"
            [tabId]="tab.id"
        >
            <div class="d-flex align-content-center">
                <div class="d-inline-flex align-items-center">
                    <!-- That ternary operator below (bind to [iconColor]) applies different colors depending on 
                         whether the tab is disabled, active, or inactive. Note that the icon color must follow 
                         the tab title color, according to UX requirements -->
                    <nui-icon
                        class="pr-2"
                        [icon]="tab.icon.name"
                        [iconColor]="
                            tab.isDisabled
                                ? tab.icon.disabledColor
                                : currentTabId === tab.id
                                ? tab.icon.activeColor
                                : tab.icon.inactiveColor
                        "
                    ></nui-icon>
                    <span>{{ tab.title }}</span>
                </div>
            </div>
        </nui-tab-heading>
    </nui-tab-heading-group>
</div>
`;export{e as default};
