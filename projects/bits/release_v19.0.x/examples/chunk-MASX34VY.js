import"./chunk-VBFW7A5V.js";var i=`<div>
    <nui-tab-heading-group (selected)="updateContent($event)">
        <nui-tab-heading
            *ngFor="let tab of tabsetContent"
            [disabled]="tab.isDisabled"
            [tabId]="tab.id"
        >
            <div class="d-flex align-content-center">
                <div class="ellipsis">
                    <span title="{{ tab.title }}">{{ tab.title }}</span>
                </div>
            </div>
        </nui-tab-heading>
    </nui-tab-heading-group>
</div>
`;export{i as default};
