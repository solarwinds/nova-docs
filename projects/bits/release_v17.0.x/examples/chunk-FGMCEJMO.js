import"./chunk-XR34LRGE.js";var n=`<div>
    <nui-tab-heading-group (selected)="updateContent($event)">
        <nui-tab-heading
            *ngFor="let tab of tabsetContent"
            [disabled]="tab.isDisabled"
            [tabId]="tab.id"
        >
            <div class="d-flex align-content-center">
                <div class="d-inline-flex align-items-center">
                    <nui-icon
                        class="pr-2"
                        *ngIf="icon"
                        [icon]="tab.icon.name"
                        [iconColor]="
                            tab.isDisabled
                                ? tab.icon.disabledColor
                                : currentTabId === tab.id
                                ? tab.icon.activeColor
                                : tab.icon.inactiveColor
                        "
                    ></nui-icon>
                    <div class="ellipsis">
                        <span [title]="tab.title">{{ tab.title }}</span>
                    </div>
                </div>
            </div>
        </nui-tab-heading>
    </nui-tab-heading-group>

    <div *ngFor="let tab of tabsetContent">
        <nui-content size="small" *ngIf="currentTabId === tab.id">
            <p>
                Tab titeled <strong>{{ tab.title }}</strong> with id
                <strong>{{ tab.id }}</strong
                >. It's content goes below:
            </p>
            <p>{{ tab.content }}</p>
        </nui-content>
    </div>
</div>
`;export{n as default};
