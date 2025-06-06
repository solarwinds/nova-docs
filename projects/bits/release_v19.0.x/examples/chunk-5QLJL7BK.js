import"./chunk-VBFW7A5V.js";var i=`<div>
    <nui-tab-heading-group>
        <nui-tab-heading
            *ngFor="let tab of tabsetContent"
            [tabId]="tab.id"
            routerLink="/tabgroup/{{ tab.id }}"
            [active]="currentTabRoute === tab.id"
        >
            <div class="d-flex align-content-center">
                <div class="d-inline-flex align-items-center">
                    <nui-icon
                        *ngIf="icon && tab !== tabsetContent[2]"
                        [icon]="tab.icon.name"
                        [iconColor]="
                            currentTabRoute === tab.id
                                ? tab.icon.activeColor
                                : tab.icon.inactiveColor
                        "
                    ></nui-icon>
                    <span
                        class="pl-2"
                        *ngIf="tab !== tabsetContent[0]"
                        [title]="tab.title"
                        >{{ tab.title }}</span
                    >
                </div>
            </div>
        </nui-tab-heading>
    </nui-tab-heading-group>

    <!-- Tab content is placed below depending on the component used in a certain routing -->
    <router-outlet></router-outlet>
</div>
`;export{i as default};
