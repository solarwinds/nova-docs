import"./chunk-VBFW7A5V.js";var a=`<div>
    <nui-tab-heading-group vertical="true" (selected)="updateContent($event)">
        <nui-tab-heading
            *ngFor="let tab of tabsetContent"
            [disabled]="tab.isDisabled"
            [tabId]="tab.id"
        >
            <div class="d-flex align-content-center">
                <span>{{ tab.title }}</span>
            </div>
        </nui-tab-heading>
    </nui-tab-heading-group>
</div>
`;export{a as default};
