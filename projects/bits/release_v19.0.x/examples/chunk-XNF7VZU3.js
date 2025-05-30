import"./chunk-VBFW7A5V.js";var e=`<div>
    <nui-tab-heading-group (selected)="updateContent($event)">
        <nui-tab-heading
            *ngFor="let tab of tabsetContent"
            [tabId]="tab.id"
            [active]="currentTabId === tab.id"
        >
            <div class="d-flex align-content-center">
                <div class="d-inline-flex align-items-center">
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

<div class="m-5">
    <button nui-button type="button" (click)="addTab()" class="m-5">
        Add Tab To End
    </button>
    <button nui-button type="button" (click)="popTab()" class="m-5">
        Remove Tab From End
    </button>
</div>
`;export{e as default};
