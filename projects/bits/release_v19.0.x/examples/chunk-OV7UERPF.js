import"./chunk-VBFW7A5V.js";var n=`<h2>Basic Usage</h2>
<nui-simple-dialog-example></nui-simple-dialog-example>

<h2>Usage as a Component</h2>
<nui-component-as-content-example></nui-component-as-content-example>

<h2>Severity</h2>
<nui-dialog-severity-example></nui-dialog-severity-example>

<h2>Custom Dialog header</h2>
<nui-header-buttons-example></nui-header-buttons-example>

<h2>Dialog Sizes</h2>
<nui-dialog-sizes-example></nui-dialog-sizes-example>

<h2>Position on screen</h2>
<nui-dialog-position-example></nui-dialog-position-example>

<h2>Custom class</h2>
<nui-dialog-custom-class-example></nui-dialog-custom-class-example>

<h2>Confirmation Dialog</h2>
<nui-confirmation-dialog-example></nui-confirmation-dialog-example>

<h2>Keyboard Options</h2>
<nui-dialog-with-keyboard-example></nui-dialog-with-keyboard-example>

<h2>Static Backdrop</h2>
<nui-dialog-with-static-backdrop-example></nui-dialog-with-static-backdrop-example>

<h2>Z-Index Strategy</h2>
<button
    id="nui-visual-test-open-overlay-btn"
    nui-button
    type="button"
    (click)="openOverlay(mainOverlayContent, '60%', '400px')"
>
    Open overlay
</button>

<ng-template #smallOverlayContent>
    <div class="overlay-container">
        <div class="overlay-body">
            <ng-container *ngTemplateOutlet="loremIpsum"></ng-container>
        </div>
    </div>
    <div class="overlay-footer">
        <button
            id="nui-visual-test-open-small-dialog-btn"
            nui-button
            type="button"
            (click)="openInnerDialog(smallDialogContent)"
        >
            Open small Dialog
        </button>
        <button
            id="nui-visual-test-close-overlay-from-small-btn"
            nui-button
            type="button"
            (click)="closeOverlay()"
        >
            Close overlay
        </button>
    </div>
</ng-template>
<ng-template #mainOverlayContent>
    <div class="overlay-container">
        <div class="overlay-body">
            <p>This is the content of an CDK overlay container.</p>
            <ng-container
                *ngTemplateOutlet="
                    tooltip;
                    context: { text: 'Main overlay tooltip' }
                "
            ></ng-container>
            <ng-container
                *ngTemplateOutlet="timeframeBarTemplate"
            ></ng-container>
            <ng-container *ngTemplateOutlet="menu"></ng-container>
            <ng-container *ngTemplateOutlet="popup"></ng-container>
            <ng-container *ngTemplateOutlet="select"></ng-container>
            <ng-container *ngTemplateOutlet="combobox"></ng-container>
            <ng-container *ngTemplateOutlet="popover"></ng-container>
            <ng-container *ngTemplateOutlet="dtPicker"></ng-container>
            <ng-container *ngTemplateOutlet="spinner"></ng-container>
            <ng-container
                *ngTemplateOutlet="
                    busyTemplate;
                    context: { text: 'Inner overlay tooltip' }
                "
            ></ng-container>
        </div>
    </div>
    <div class="overlay-footer">
        <button nui-button type="button" (click)="showToast()">
            Show toast
        </button>
        <button
            id="nui-visual-test-switch-appendToBody-btn"
            nui-button
            type="button"
            (click)="toggleAppendToBody()"
            i18n
        >
            appendToBody={{ appendToBody }}
        </button>
        <button
            id="nui-visual-test-switch-busy-btn"
            nui-button
            type="button"
            (click)="toggleBusy()"
            i18n
        >
            busy={{ busy }}
        </button>
        <button
            id="nui-visual-test-inner-dialog-btn"
            nui-button
            type="button"
            (click)="openInnerDialog(innerDialogContent)"
        >
            Open Inner Dialog
        </button>
        <button nui-button type="button" (click)="closeOverlay()">
            Close overlay
        </button>
    </div>
</ng-template>

<ng-template #smallDialogContent let-close="close" let-dismiss="dismiss">
    <nui-dialog-header
        title="Small Dialog Title"
        (closed)="close()"
    ></nui-dialog-header>
    <div class="dialog-body">
        <ng-container *ngTemplateOutlet="loremIpsum"></ng-container>
    </div>
    <nui-dialog-footer>
        <button
            id="nui-visual-test-close-small-dialog-btn"
            nui-button
            type="button"
            (click)="close()"
        >
            Close
        </button>
    </nui-dialog-footer>
</ng-template>

<ng-template #innerDialogContent let-close="close" let-dismiss="dismiss">
    <nui-dialog-header
        title="Inner Dialog Title"
        (closed)="close()"
    ></nui-dialog-header>
    <div class="dialog-body">
        <p>This is the content of a dialog.</p>
        <ng-container
            *ngTemplateOutlet="
                tooltip;
                context: { text: 'Inner dialog tooltip' }
            "
        ></ng-container>
        <ng-container *ngTemplateOutlet="timeframeBarTemplate"></ng-container>
        <ng-container *ngTemplateOutlet="menu"></ng-container>
        <ng-container *ngTemplateOutlet="popup"></ng-container>
        <ng-container *ngTemplateOutlet="select"></ng-container>
        <ng-container *ngTemplateOutlet="combobox"></ng-container>
        <ng-container *ngTemplateOutlet="popover"></ng-container>
        <ng-container *ngTemplateOutlet="dtPicker"></ng-container>
        <ng-container *ngTemplateOutlet="spinner"></ng-container>
        <ng-container
            *ngTemplateOutlet="
                busyTemplate;
                context: { text: 'Inner dialog tooltip' }
            "
        ></ng-container>
    </div>
    <nui-dialog-footer>
        <button
            id="nui-visual-test-open-overlay-from-dialog-btn"
            nui-button
            type="button"
            (click)="openOverlay(smallOverlayContent, '40%', '200px')"
        >
            +Overlay
        </button>
        <button
            id="nui-visual-test-open-small-dialog-from-dialog-btn"
            nui-button
            type="button"
            (click)="openInnerDialog(smallDialogContent)"
        >
            +Dialog
        </button>
        <button nui-button type="button" (click)="toggleBusy()" i18n>
            Switch busy
        </button>
        <button nui-button type="button" (click)="showToast()">
            Show toast
        </button>
        <button nui-button type="button" (click)="closeDialog(); close()">
            Close
        </button>
    </nui-dialog-footer>
</ng-template>

<ng-template #menu>
    <nui-menu
        [appendToBody]="appendToBody"
        title="Menu"
        class="clickable-visual-item"
    >
        <nui-menu-action *ngFor="let item of items">{{ item }}</nui-menu-action>
    </nui-menu>
</ng-template>

<ng-template #popup>
    <nui-popup [appendToBody]="appendToBody" class="clickable-visual-item">
        <button
            nui-button
            nuiPopupToggle
            type="button"
            icon="caret-down"
            [iconRight]="true"
            class="menu-button"
            [isEmpty]="false"
            i18n
        >
            Popup
        </button>
        <div popupAreaContent>
            <ng-container *ngFor="let item of items">
                <nui-menu-item
                    tabindex="0"
                    nuiTooltip="This tooltip is part of a menu item"
                    >{{ item }}</nui-menu-item
                >
            </ng-container>
        </div>
    </nui-popup>
</ng-template>

<ng-template #select>
    <!-- select v1 -->
    <nui-select
        class="clickable-visual-item"
        [itemsSource]="items"
        [inline]="true"
        [appendToBody]="appendToBody"
        placeholder="Select v1"
    ></nui-select>

    <!-- select v2 -->
    <nui-select-v2
        class="clickable-visual-item d-inline-flex"
        placeholder="Select v2"
    >
        <ng-container *ngFor="let item of items">
            <nui-select-v2-option [value]="item" i18n>{{
                item
            }}</nui-select-v2-option>
        </ng-container>
    </nui-select-v2>
</ng-template>

<ng-template #combobox>
    <nui-combobox
        class="clickable-visual-item"
        [itemsSource]="items"
        [inline]="true"
        [appendToBody]="appendToBody"
        i18n-placeholder
        placeholder="Combobox v1"
    ></nui-combobox>

    <nui-combobox-v2
        class="clickable-visual-item d-inline-flex"
        placeholder="Combobox v2"
    >
        <ng-container *ngFor="let item of items">
            <nui-select-v2-option [value]="item">
                <div class="d-flex align-items-center">
                    <span [nuiComboboxV2OptionHighlight]="item"></span>
                </div>
            </nui-select-v2-option>
        </ng-container>
    </nui-combobox-v2>
</ng-template>

<ng-template #spinner>
    <nui-spinner
        size="large"
        [show]="true"
        message="Spinner"
        i18n-message
        helpText="Optional spinner description"
        i18n-helpText
    >
    </nui-spinner>
</ng-template>

<ng-template #busyTemplate let-text="text">
    <div nui-busy [busy]="busy" class="busy-content">
        We used focus trigger so that the popover with a
        <span
            nuiTooltip="{{ text }} {{ longTextTooltip }}"
            tooltipPlacement="bottom"
            class="nui-text-widget--hoverable"
        >
            big tooltip
        </span>
        will remain open even after we move the mouse away from it even.
    </div>
</ng-template>

<ng-template #dtPicker>
    <div class="inline-flex">
        <nui-date-time-picker
            class="clickable-visual-item"
            [appendToBody]="appendToBody"
            [model]="dt"
            displayMode="inline"
        >
        </nui-date-time-picker>
    </div>
</ng-template>

<ng-template #timeframeBarTemplate>
    <nui-time-frame-bar [(timeFrame)]="timeFrame">
        <!-- content for default projection slot -->
        <nui-icon icon="calendar" class="pr-3"></nui-icon>
        {{ timeFrame | timeFrame }}

        <!-- content for time frame selection projection slot -->
        <nui-quick-picker timeFrameSelection>
            <nui-time-frame-picker></nui-time-frame-picker>
        </nui-quick-picker>
    </nui-time-frame-bar>
</ng-template>

<ng-template #popover>
    I'm a
    <nui-popover
        tabindex="1"
        class="clickable-visual-item"
        trigger="focus"
        [template]="popoverWithBasicUsage"
    >
        <span class="nui-text-widget--hoverable">popover</span>
    </nui-popover>
    with Focus Trigger
    <ng-template #popoverWithBasicUsage>
        <span>I'm a popover with some content with a</span>&nbsp;
        <span
            nuiTooltip="Tooltip inside popover {{ longTextTooltip }}"
            class="nui-text-widget--hoverable"
            >tooltip</span
        >
        &nbsp;inside.
        <ng-container *ngTemplateOutlet="loremIpsum"></ng-container>
    </ng-template>
</ng-template>

<ng-template #tooltip let-text="text">
    <span
        id="long-text-tooltip"
        nuiTooltip="Tooltip should appear on top of any other components (popup, popover, menu,etc.) even if it's displayed after the popover has been displayed."
        tooltipPlacement="bottom"
        class="nui-text-widget--hoverable"
        >I'm a long text tooltip!
    </span>
</ng-template>

<ng-template #loremIpsum>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus
        faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at
        pulvinar enim, nec interdum purus. Pellentesque sit amet semper ipsum,
        eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet
        sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.
    </p>
</ng-template>
`;export{n as default};
