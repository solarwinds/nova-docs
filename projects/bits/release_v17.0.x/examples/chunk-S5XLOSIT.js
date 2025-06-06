import"./chunk-XR34LRGE.js";var t=`<!-- Focus drop is an invisible item which can be used to drop the focus state to the start of the page if needed -->
<div class="select-test-focus-drop" tabindex="-1"></div>

<div class="row mb-3 justify-content-center">
    <h1>Select V2 Testing Page</h1>
</div>
<div class="row mb-3">
    <div class="col">
        <h4>Error State</h4>
        <nui-select-v2
            [isInErrorState]="isInErrorState()"
            id="error-state"
            placeholder="Select Item"
            i18n-placeholder
            [formControl]="selectControl"
        >
            <nui-select-v2-option
                *ngFor="let item of items"
                [value]="item"
                i18n
                >{{ item }}</nui-select-v2-option
            >
        </nui-select-v2>
    </div>
    <div class="col">
        <h4>Reactive form</h4>
        <form [formGroup]="fancyForm">
            <nui-form-field
                caption="Select"
                i18n-caption
                hint="Some pretty long text with hint"
                i18n-hint
                info="text"
                [control]="fancyForm.controls['select']"
            >
                <nui-select-v2
                    placeholder="Select Item"
                    i18n-placeholder
                    id="reactive-form"
                    formControlName="select"
                >
                    <ng-container *ngFor="let item of items">
                        <nui-select-v2-option [value]="item" i18n>
                            {{ item }}
                        </nui-select-v2-option>
                    </ng-container>
                </nui-select-v2>
                <nui-validation-message for="required" i18n>
                    This field is required
                </nui-validation-message>
            </nui-form-field>
        </form>
    </div>
</div>
<div class="row mb-3">
    <div class="col">
        <h4>Basic</h4>
        <nui-select-v2 placeholder="Select Item" i18n-placeholder id="basic">
            <nui-select-v2-option
                *ngFor="let item of items"
                [value]="item"
                i18n
                >{{ item }}</nui-select-v2-option
            >
        </nui-select-v2>
    </div>
</div>
<div class="row mb-3">
    <div class="col">
        <h4>Display value (max-width = 200px)</h4>
        <nui-select-v2
            placeholder="Select Item"
            [displayValueTemplate]="iconsOnly"
            [style.max-width.px]="200"
            id="display-value-mw200"
        >
            <nui-select-v2-option
                *ngFor="let item of itemsWithIconsOnly"
                [value]="item"
            >
                String can't get long, can it?:)
                <nui-icon [icon]="item.icon"></nui-icon
            ></nui-select-v2-option>
        </nui-select-v2>
    </div>
    <div class="col">
        <h4>Display value (no width rescrictions)</h4>
        <nui-select-v2
            placeholder="Select Item"
            i18n-placeholder
            [displayValueTemplate]="temp"
            id="display-value"
        >
            <nui-select-v2-option
                *ngFor="let item of itemsDisplayValue"
                [value]="item"
                i18n
                [isDisabled]="item.disabled"
            >
                Name is {{ item.name }} and icon is
                <nui-icon [icon]="item.icon"></nui-icon
            ></nui-select-v2-option>
        </nui-select-v2>
    </div>
    <div class="col">
        <h4>Grouped items</h4>
        <nui-select-v2
            placeholder="Select Item"
            i18n-placeholder
            [displayValueTemplate]="displayValueTemplate"
            id="grouped"
        >
            <ng-container
                *ngFor="let itemGroup of groupedItems; let last = last"
            >
                <nui-select-v2-option-group>
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
            </ng-container>
        </nui-select-v2>
    </div>
</div>
<div class="row mb-3 align-items-center">
    <div class="col">
        <h4>Inline</h4>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <nui-select-v2
                class="d-inline-flex mr-3"
                placeholder="Select Item"
                i18n-placeholder
            >
                <ng-container *ngFor="let item of items">
                    <nui-select-v2-option [value]="item" i18n>
                        {{ item }}
                    </nui-select-v2-option>
                </ng-container>
            </nui-select-v2>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Massa id neque aliquam vestibulum morbi. Vestibulum rhoncus est
            pellentesque elit ullamcorper. Adipiscing enim eu turpis egestas
            pretium aenean pharetra magna.
            <nui-select-v2
                class="d-inline-flex"
                placeholder="Select Item"
                i18n-placeholder
            >
                <ng-container *ngFor="let item of items">
                    <nui-select-v2-option [value]="item" i18n>
                        {{ item }}
                    </nui-select-v2-option>
                </ng-container>
            </nui-select-v2>
            At erat pellentesque adipiscing commodo. Justo donec enim diam
            vulputate. Libero volutpat sed cras ornare arcu.
        </p>
    </div>
    <div class="col">
        <h4>Custom overlay styles</h4>
        <nui-select-v2
            placeholder="Select Item"
            i18n-placeholder
            [formControl]="selectControl"
            id="overlay-styles"
            [overlayConfig]="customStylesOverlayConfig"
        >
            <ng-container *ngFor="let item of items">
                <nui-select-v2-option [value]="item" i18n>
                    {{ item }}
                </nui-select-v2-option>
            </ng-container>
        </nui-select-v2>
    </div>
    <div class="col">
        <h4>Disabled</h4>
        <nui-select-v2
            [isDisabled]="true"
            placeholder="Select Item"
            i18n-placeholder
            id="disabled"
        >
            <nui-select-v2-option
                *ngFor="let item of items"
                [value]="item"
                i18n
                >{{ item }}</nui-select-v2-option
            >
        </nui-select-v2>
    </div>
</div>
<div class="row mb-3">
    <div class="col">
        <button id="dialog-btn" (click)="open(content)" i18n>
            Call dialog with select
        </button>
    </div>
    <div class="col"></div>
    <div class="col">
        <h4>Custom control</h4>
        <nui-select-v2
            placeholder="Select Item"
            i18n-placeholder
            [manualDropdownControl]="true"
            #custom_control
            id="custom-control"
        >
            <nui-select-v2-option
                *ngFor="let item of items"
                [value]="item"
                i18n
            >
                {{ item }}
            </nui-select-v2-option>
        </nui-select-v2>

        <div class="row m-auto align-items-center">
            <button
                #show
                id="show"
                type="button"
                class="mt-2"
                (click)="showList($event)"
            >
                Show
            </button>

            <button
                #hide
                id="hide"
                type="button"
                class="mt-2"
                (click)="hideList($event)"
            >
                Hide
            </button>

            <button
                #toggle
                id="toggle"
                type="button"
                class="mt-2"
                (click)="toggleList($event)"
            >
                Toggle
            </button>

            <nui-switch [(value)]="handleClicksOutside" i18n id="switch">
                Close on focus-out
            </nui-switch>
        </div>
    </div>
</div>

<ng-template #temp let-item let-open="open">
    <div class="nui-select-v2__value">
        <div
            *ngIf="item; else empty"
            class="d-flex align-items-center nui-select-v2__value-content"
        >
            <nui-icon class="mr-2" [icon]="item.icon"></nui-icon>
            {{ item.name }}
        </div>

        <nui-icon
            [style.transform]="open ? 'rotate(180deg)' : ''"
            icon="caret-down"
        ></nui-icon>
    </div>
</ng-template>

<ng-template #iconsOnly let-item let-open="open">
    <div class="nui-select-v2__value">
        <div
            *ngIf="item; else empty"
            class="d-flex align-items-center nui-select-v2__value-content"
        >
            <nui-icon class="mr-2" [icon]="item.icon"></nui-icon>
            {{ item.name }}
        </div>

        <nui-icon
            [style.transform]="open ? 'rotate(180deg)' : ''"
            icon="caret-down"
        ></nui-icon>
    </div>
</ng-template>

<ng-template #displayValueTemplate let-item let-open="open">
    <div class="nui-select-v2__value">
        <div
            *ngIf="item; else empty"
            class="d-flex align-items-center nui-select-v2__value-content"
        >
            {{ item.name }}
        </div>

        <nui-icon
            [style.transform]="open ? 'rotate(180deg)' : ''"
            icon="caret-down"
        ></nui-icon>
    </div>
</ng-template>

<ng-template #content let-close="close" let-dismiss="dismiss">
    <nui-dialog-header
        title="Dialog title"
        i18n-title
        (closed)="close()"
    ></nui-dialog-header>
    <div class="dialog-body">
        <nui-select-v2
            placeholder="Select Item"
            i18n-placeholder
            id="inside-dialog"
        >
            <nui-select-v2-option
                *ngFor="let item of items"
                [value]="item"
                i18n
                >{{ item }}</nui-select-v2-option
            >
        </nui-select-v2>
        <p i18n>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere.
            Etiam at pulvinar enim, nec interdum purus. Duis elit metus,
            lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia
            purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus.
            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam
            vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at
            ullamcorper lorem. Morbi non turpis nibh.
        </p>
    </div>
    <nui-dialog-footer>
        <button nui-button type="button" (click)="close()" i18n>Cancel</button>
        <button
            nui-button
            type="button"
            displayStyle="primary"
            (click)="close()"
            i18n
        >
            Action
        </button>
    </nui-dialog-footer>
</ng-template>

<ng-template #empty>
    <span class="nui-select-v2__placeholder">Select Item</span>
</ng-template>
`;export{t as default};
