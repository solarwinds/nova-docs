import"./chunk-VBFW7A5V.js";var o=`<div class="ml-4">
    <div>
        <h3>Basic icon usage</h3>
        <nui-icon
            icon="add"
            iconHoverColor="gray"
            id="nui-icon-test-basic-usage"
        ></nui-icon>
        <hr />
    </div>

    <div>
        <h3>Icon with Differrent Sizes</h3>
        <nui-icon
            class="pr-2"
            icon="add"
            iconSize="small"
            id="nui-icon-test-small-size"
        ></nui-icon>
        <nui-icon
            class="pr-2"
            icon="add"
            id="nui-icon-test-default-size"
        ></nui-icon>
        <nui-icon
            class="pr-2"
            icon="add"
            iconSize="medium"
            id="nui-icon-test-medium-size"
        ></nui-icon>
        <hr />
    </div>

    <div>
        <h3>Icon with Color</h3>
        <div class="d-flex flex-row">
            <div class="d-flex flex-column pr-5">
                orange
                <nui-icon
                    icon="add"
                    iconColor="orange"
                    id="nui-icon-test-color"
                ></nui-icon>
            </div>
            <div class="d-flex flex-column pr-5">
                light-blue
                <nui-icon
                    icon="add"
                    iconColor="light-blue"
                    id="nui-icon-test-color"
                ></nui-icon>
            </div>
            <div class="d-flex flex-column pr-5">
                primary-blue
                <nui-icon
                    icon="add"
                    iconColor="primary-blue"
                    id="nui-icon-test-color"
                ></nui-icon>
            </div>
            <div class="d-flex flex-column pr-5">
                gray
                <nui-icon
                    icon="add"
                    iconColor="gray"
                    id="nui-icon-test-color"
                ></nui-icon>
            </div>
            <div class="d-flex flex-column pr-5">
                disabled-gray
                <nui-icon
                    icon="add"
                    iconColor="disabled-gray"
                    id="nui-icon-test-color"
                ></nui-icon>
            </div>
        </div>
        <hr />
    </div>

    <div>
        <h3>Icon with Status</h3>

        <div class="d-flex flex-row">
            <div
                class="d-flex flex-column pr-5"
                *ngFor="let status of iconStatuses"
            >
                {{ status
                }}<nui-icon icon="add" status="{{ status }}"></nui-icon>
            </div>
        </div>
        <hr />
    </div>

    <div>
        <h3>Icon with Child Status</h3>

        <div class="d-flex flex-row">
            <div
                class="d-flex flex-column pr-5"
                *ngFor="let status of iconStatuses"
            >
                {{ status
                }}<nui-icon
                    icon="add"
                    status="up"
                    childStatus="{{ status }}"
                ></nui-icon>
            </div>
        </div>
        <hr />
    </div>

    <div>
        <h3>Icon with Text Alignment</h3>
        <div class="d-inline-flex align-items-center">
            <nui-icon
                icon="printer"
                status="critical"
                childStatus="down"
            ></nui-icon>
            Managed entity name
        </div>
        <hr />
    </div>

    <div>
        <h3>Icon with Counter</h3>
        <nui-icon
            icon="email"
            [counter]="6"
            id="nui-icon-test-with-counter"
        ></nui-icon>
        <hr />
    </div>
</div>
`;export{o as default};
