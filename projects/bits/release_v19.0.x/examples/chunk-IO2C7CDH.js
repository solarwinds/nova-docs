import"./chunk-VBFW7A5V.js";var t=`<div class="d-flex justify-content-between">
    <nui-popover
        popoverTitle="Title"
        trigger="click"
        icon="application"
        [template]="popoverTemplate"
        [preventClosing]="true"
    >
        <button class="placement-check-btn">Show top left popover</button>
    </nui-popover>

    <nui-popover
        popoverTitle="Title"
        trigger="click"
        icon="application"
        [template]="popoverTemplate"
        [preventClosing]="true"
    >
        <button class="placement-check-btn">Show top right popover</button>
    </nui-popover>
</div>

<div class="container">
    <div class="row">
        <div class="col">
            <h3>Basic Popover</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="d-flex">
                <nui-popover
                    id="nui-demo-popover-basic"
                    [template]="popoverWithBasicUsage"
                >
                    Hover over me!
                </nui-popover>

                <ng-template #popoverWithBasicUsage>
                    I'm implemented with the simplest usage! Expand my source
                    code above to see how!
                </ng-template>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3>Popover - Prevent Closing on Click</h3>
        </div>
    </div>
    <div class="row">
        <div class="col col-8">
            <div class="d-flex">
                <nui-popover
                    popoverTitle="Prevent close popover on click"
                    trigger="click"
                    id="nui-demo-popover-prevent-closing"
                    [template]="popoverPreventClose"
                    [closePopover]="closePopoverSubject"
                    [preventClosing]="true"
                >
                    <button id="nui-demo-button-prevent-onclick">
                        <span>Click me!</span>
                    </button>
                </nui-popover>

                <ng-template #popoverPreventClose>
                    <div class="mb-2">
                        <nui-checkbox id="nui-demo-checkbox-in-popover"
                            >Hi, check me!</nui-checkbox
                        >
                    </div>
                    <div class="mb-2">
                        <nui-combobox
                            id="nui-demo-popover-combobox"
                            [itemsSource]="dataset.items"
                            placeholder="Select item combo"
                        ></nui-combobox>
                        <nui-combobox-v2
                            [overlayConfig]="overlayConfig"
                            id="nui-demo-combobox-v2-in-popover"
                            placeholder="Select item combo v2"
                        >
                            <nui-select-v2-option
                                *ngFor="let item of dataset.items"
                                [value]="item"
                                >{{ item }}</nui-select-v2-option
                            >
                        </nui-combobox-v2>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button
                            nui-button
                            type="button"
                            displayStyle="action"
                            (click)="closePopover()"
                        >
                            Close
                        </button>
                        <button
                            nui-button
                            class="ml-3"
                            type="button"
                            displayStyle="primary"
                            (click)="closePopover()"
                        >
                            Confirm
                        </button>
                    </div>
                </ng-template>
            </div>
        </div>
        <div class="col col-4">
            <div class="d-flex">
                <nui-popover
                    popoverTitle="Popover with Left Placement"
                    placement="left"
                    trigger="click"
                    [template]="popoverLeftPlacement"
                    [preventClosing]="true"
                >
                    <button class="placement-check-btn">
                        <span>Click me!</span>
                    </button>
                </nui-popover>

                <ng-template #popoverLeftPlacement>
                    <nui-checkbox
                        >Placement is set to LEFT in this case</nui-checkbox
                    >
                </ng-template>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3>Removing Padding</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="d-flex">
                <nui-popover
                    [hasPadding]="false"
                    id="nui-demo-popover-no-padding"
                    popoverTitle="My body has no padding"
                    [template]="popoverNoPadding"
                >
                    Hover over me!
                </nui-popover>

                <ng-template #popoverNoPadding>
                    I lack padding because I'm configured that way.
                </ng-template>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3>Icon</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="d-flex flex-column">
                <div>
                    <nui-popover
                        icon="application"
                        [template]="iconPopoverTemplateNoTitle"
                    >
                        Hover over me!
                    </nui-popover>
                </div>
                <div>
                    <nui-popover
                        popoverTitle="Popover with Icon"
                        icon="application"
                        [template]="iconPopoverTemplateWithTitle"
                    >
                        Hover over me, too!
                    </nui-popover>
                </div>

                <ng-template #iconPopoverTemplateNoTitle
                    >I have an application icon and no title!</ng-template
                >
                <ng-template #iconPopoverTemplateWithTitle
                    >I have an application icon and a title!</ng-template
                >
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3>Removing Width and Height Limitations</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="d-flex flex-column">
                <div>
                    <nui-popover
                        [template]="popoverUnlimited"
                        [unlimited]="true"
                        icon="application"
                        id="nui-demo-popover-no-limits"
                    >
                        Hover over me!
                    </nui-popover>
                </div>

                <div>
                    <nui-popover
                        [template]="popoverDefaultRestrictions"
                        id="nui-demo-popover-limited-and-multiline"
                    >
                        Hover over me!
                    </nui-popover>
                </div>

                <ng-template #popoverUnlimited>
                    I'm implemented without restrictions on my width and height!
                    That's why I'm taking up as much space as I have available
                    on the page. Expand my source code above to see how!
                </ng-template>

                <ng-template #popoverDefaultRestrictions>
                    I'm implemented with respect to the default
                    <code>max-width</code> and
                    <code>max-height</code> restrictions defined by the Nova
                    Design Language! That's why my text will nicely wrap when it
                    exceeds the <code>max-width</code> limit. Expand my source
                    code above to see how!
                </ng-template>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3>Modal Mode</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="d-flex">
                <nui-popover
                    popoverTitle="Title"
                    id="nui-demo-popover-modal"
                    trigger="click"
                    placement="right"
                    icon="application"
                    [template]="popoverTemplate"
                    [modal]="true"
                >
                    <button>Show modal popover</button>
                </nui-popover>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3>Large Trigger Element Height</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="d-flex">
                <nui-popover
                    popoverTitle="Popover with Top Placement"
                    placement="top"
                    [template]="popoverTemplate"
                    trigger="click"
                    [preventClosing]="true"
                >
                    <button class="large-height placement-check-btn">
                        open top
                    </button>
                </nui-popover>

                <nui-popover
                    popoverTitle="Popover with Bottom Placement"
                    placement="bottom"
                    [template]="popoverTemplate"
                    trigger="click"
                    [preventClosing]="true"
                >
                    <button class="large-height placement-check-btn">
                        open bottom
                    </button>
                </nui-popover>
            </div>
        </div>
    </div>
</div>

<div class="d-flex footer justify-content-between align-items-center p-2">
    <nui-popover
        popoverTitle="Title"
        id="nui-demo-popover-bottom-left"
        trigger="click"
        icon="application"
        [template]="popoverTemplate"
        [preventClosing]="true"
    >
        <button class="placement-check-btn">Show bottom-left popover</button>
    </nui-popover>
    <nui-popover
        popoverTitle="Title"
        id="nui-demo-popover-bottom-right"
        trigger="click"
        icon="application"
        [template]="popoverTemplate"
        [preventClosing]="true"
    >
        <button class="placement-check-btn">Show bottom-right popover</button>
    </nui-popover>
</div>

<ng-template #popoverTemplate> Test Template </ng-template>
`;export{t as default};
