import"./chunk-VBFW7A5V.js";var i=`<!-- Focus drop is an invisible item which can be used to drop the focus state to the start of the page if needed -->
<div class="focus-drop" tabindex="-1"></div>
<div class="row mb-3 justify-content-center">
    <h1>Combobox V2 Testing Page</h1>
</div>
<div class="row mb-3">
    <div class="col">
        <h4>Error State</h4>
        <nui-combobox-v2
            [isInErrorState]="!selectedItem"
            placeholder="Select Item"
            i18n-placeholder
            [displayWith]="displayFn"
            [formControl]="comboboxControl"
            id="error"
            [overlayConfig]="overlayConfig"
            #comboboxError
        >
            <nui-select-v2-option
                *ngFor="let item of customizedItems"
                [value]="item"
            >
                <span
                    class="mr-3"
                    [nuiComboboxV2OptionHighlight]="item.name"
                ></span>
                <nui-icon [icon]="item.icon"></nui-icon>
            </nui-select-v2-option>
        </nui-combobox-v2>
    </div>
    <div class="col">
        <h4>Reactive form</h4>
        <form [formGroup]="fancyForm" class="nui-edge-definer">
            <nui-form-field [control]="fancyForm.controls['combobox']">
                <nui-combobox-v2
                    placeholder="Select Item"
                    i18n-placeholder
                    formControlName="combobox"
                    id="form"
                    [overlayConfig]="overlayConfig"
                    #comboboxReactive
                >
                    <nui-select-v2-option
                        *ngFor="let item of items"
                        [value]="item"
                    >
                        <span [nuiComboboxV2OptionHighlight]="item"></span>
                    </nui-select-v2-option>
                </nui-combobox-v2>
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
        <nui-combobox-v2
            placeholder="Select Item"
            i18n-placeholder
            id="basic"
            [overlayConfig]="overlayConfig"
            #comboboxBasic
        >
            <nui-select-v2-option *ngFor="let item of items" [value]="item">
                <span [nuiComboboxV2OptionHighlight]="item"></span>
            </nui-select-v2-option>
        </nui-combobox-v2>
    </div>
</div>
<div class="row mb-3">
    <div class="col">
        <h4>Single select with create option</h4>
        <nui-combobox-v2
            placeholder="Select Item"
            i18n-placeholder
            [formControl]="comboboxControlSingle"
            id="single"
            [overlayConfig]="overlayConfig"
            #comboboxSingle
        >
            <nui-select-v2-option
                *ngFor="let option of options; index"
                [value]="option"
                [isDisabled]="isDisabled(option)"
            >
                <div class="d-flex align-items-center">
                    <span
                        class="mr-3 nui-select-v2-option__label"
                        [nuiComboboxV2OptionHighlight]="option"
                    ></span>
                </div>
            </nui-select-v2-option>

            <nui-overlay-item
                *ngIf="comboboxSingle.canCreateOption | async"
                class="nui-combobox-v2__create-option"
                (click)="createOption(comboboxSingle.inputValue)"
            >
                Create option "{{ comboboxSingle.inputValue }}"
            </nui-overlay-item>
            <div
                *ngIf="comboboxSingle.searchEmpty | async"
                class="nui-combobox-v2__empty-search"
                i18n
            >
                No other existing item available
            </div>
        </nui-combobox-v2>
    </div>
    <div class="col">
        <h4>Multiselect with create option</h4>
        <nui-combobox-v2
            [placeholder]="
                combobox.selectedOptions.length ? '' : 'Select Items'
            "
            [formControl]="comboboxControlMulti"
            [multiselect]="true"
            [overlayConfig]="overlayConfig"
            id="multi"
            #combobox
        >
            <ng-container selectedItems>
                <nui-chip
                    nuiMarkAsSelectedItem
                    *ngFor="let item of combobox?.value"
                    class="ml-2"
                    closeButtonTooltip="Remove"
                    [item]="convertToChip(item)"
                    (remove)="combobox.deselectItem(item)"
                    (mouseup)="$event.stopPropagation()"
                >
                </nui-chip>
            </ng-container>

            <nui-select-v2-option
                *ngFor="let option of optionsMulti"
                [value]="option"
                class="d-flex align-items-center"
            >
                <span
                    class="mr-3 nui-select-v2-option__label"
                    [nuiComboboxV2OptionHighlight]="option.name"
                ></span>
            </nui-select-v2-option>

            <nui-overlay-item
                *ngIf="combobox.canCreateOption | async"
                class="nui-combobox-v2__create-option"
                (click)="createOptionMulti(combobox.inputValue)"
            >
                Create option "{{ combobox.inputValue }}"
            </nui-overlay-item>
            <div
                *ngIf="combobox.searchEmpty | async"
                class="nui-combobox-v2__empty-search"
                i18n
            >
                No other existing item available
            </div>
        </nui-combobox-v2>
    </div>
    <div class="col">
        <h4>Disabled combobox and items</h4>
        <div class="row m-auto">
            <nui-combobox-v2
                [isDisabled]="isComboboxDisabled"
                placeholder="Select Item"
                i18n-placeholder
                id="disabled"
                [overlayConfig]="overlayConfig"
                class="flex-grow-1"
                #comboboxDisabled
            >
                <nui-select-v2-option
                    *ngFor="let item of optionsMulti.slice()"
                    [value]="item"
                    [isDisabled]="item.disabled"
                >
                    <span [nuiComboboxV2OptionHighlight]="item.name"></span>
                </nui-select-v2-option>
            </nui-combobox-v2>
            <button
                id="trigger-disabled"
                (click)="isComboboxDisabled = !isComboboxDisabled"
                class="ml-auto"
            >
                {{ isComboboxDisabled ? "enable" : "disable" }}
            </button>
        </div>
    </div>
</div>
<div class="row mb-3">
    <div class="col">
        <h4>Value removal</h4>
        <nui-combobox-v2
            placeholder="Select Item"
            i18n-placeholder
            [isRemoveValueEnabled]="false"
            id="removal"
            [overlayConfig]="overlayConfig"
            #comboboxValueRemoval
        >
            <nui-select-v2-option *ngFor="let item of items" [value]="item">
                <span [nuiComboboxV2OptionHighlight]="item"></span>
            </nui-select-v2-option>
        </nui-combobox-v2>
    </div>
    <div class="col"></div>
    <div class="col"></div>
</div>
<div class="row m-auto">
    <h4 class="w-100">Multiselect with manual dropdown control</h4>
    <nui-combobox-v2
        [placeholder]="
            comboboxMultiDimensions.selectedOptions.length ? '' : 'Select Items'
        "
        [multiselect]="true"
        [manualDropdownControl]="true"
        id="custom-control"
        [overlayConfig]="overlayConfig"
        #comboboxMultiDimensions
    >
        <ng-container selectedItems>
            <nui-chip
                nuiMarkAsSelectedItem
                class="ml-2"
                *ngFor="let item of comboboxMultiDimensions?.value"
                closeButtonTooltip="Remove"
                [item]="convertToChip(item)"
                (remove)="comboboxMultiDimensions.deselectItem(item)"
                (mouseup)="$event.stopPropagation()"
            >
            </nui-chip>
        </ng-container>
        <nui-select-v2-option
            *ngFor="let option of optionsMultiDimensions"
            [value]="option"
            class="d-flex align-items-center"
        >
            <span
                class="mr-3 nui-select-v2-option__label"
                [nuiComboboxV2OptionHighlight]="option.name"
            ></span>
        </nui-select-v2-option>
    </nui-combobox-v2>
    <button id="show" class="ml-3" (click)="showList($event)">Show</button>
    <button id="hide" class="ml-3" (click)="hideList($event)">Hide</button>
    <button id="toggle" class="ml-3" (click)="toggleList($event)">
        Toggle
    </button>
</div>
<div class="row m-auto">
    <h4 class="w-100">Virtual scroll</h4>
    <nui-combobox-v2
        placeholder="Select Item"
        i18n-placeholder
        #virtual
        id="virtual-combobox"
        [formControl]="comboboxControl"
        [overlayConfig]="overlayConfig"
        [isTypeaheadEnabled]="false"
    >
        <cdk-virtual-scroll-viewport
            itemSize="30"
            [minBufferPx]="300"
            [maxBufferPx]="600"
            [style.height.px]="containerHeight"
        >
            <div *cdkVirtualFor="let item of filteredItems | async; index as i">
                <nui-select-v2-option
                    [value]="item"
                    class="d-flex align-items-center"
                >
                    <span [nuiComboboxV2OptionHighlight]="item"></span>
                </nui-select-v2-option>
            </div>
        </cdk-virtual-scroll-viewport>
    </nui-combobox-v2>
</div>

<div class="row mb-3" style="position: fixed; bottom: 0" tabindex="-1">
    <h4 class="w-100">Multiselect with manual dropdown control</h4>
    <nui-combobox-v2
        [placeholder]="
            comboboxWithDialog.selectedOptions.length ? '' : 'Select Items'
        "
        [multiselect]="true"
        [manualDropdownControl]="true"
        [overlayConfig]="overlayConfig"
        class="w-100"
        #comboboxWithDialog
    >
        <ng-container selectedItems>
            <nui-chip
                nuiMarkAsSelectedItem
                class="ml-2"
                *ngFor="let item of comboboxWithDialog?.value"
                closeButtonTooltip="Remove"
                [item]="convertToChip(item)"
                (remove)="comboboxWithDialog.deselectItem(item)"
                (mouseup)="$event.stopPropagation()"
            >
            </nui-chip>
        </ng-container>

        <nui-select-v2-option
            *ngFor="let option of optionsMultiDimensions"
            [value]="option"
            class="d-flex align-items-center"
            (click)="openInOverlay(headerButtonsContent)"
        >
            <span
                class="mr-3 nui-select-v2-option__label"
                [nuiComboboxV2OptionHighlight]="option.name"
            ></span>
        </nui-select-v2-option>
    </nui-combobox-v2>
    <button class="ml-3" (click)="comboboxWithDialog.toggleDropdown()">
        Toggle
    </button>
</div>

<ng-template #content let-close="close" let-dismiss="dismiss">
    <nui-dialog-header
        title="Dialog title"
        i18n-title
        (closed)="close()"
    ></nui-dialog-header>
    <div class="dialog-body">
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
        <button
            nui-button
            type="button"
            (click)="actionCanceled(); close()"
            i18n
        >
            Cancel
        </button>
        <button
            nui-button
            type="button"
            displayStyle="primary"
            (click)="actionDone(); close()"
            i18n
        >
            Action
        </button>
    </nui-dialog-footer>
</ng-template>

<ng-template #headerButtonsContent let-close="close">
    <nui-dialog-header title="Dialog title" (closed)="close()">
        <button
            nui-button
            type="button"
            displayStyle="action"
            icon="fullscreen"
        ></button>
        <button
            nui-button
            type="button"
            displayStyle="action"
            icon="menu"
        ></button>
    </nui-dialog-header>
    <div class="dialog-body">
        <p>
            <nui-select-v2 placeholder="Select Item">
                <nui-select-v2-option
                    *ngFor="let item of dataset.items; let i = index"
                    [value]="item"
                >
                    <div class="d-flex align-items-center">
                        <button
                            nui-button
                            type="button"
                            (click)="confirm($event)"
                        >
                            boom!
                        </button>
                        {{ item }}
                        <div
                            #popoverContainer
                            id="nui-demo-popover-container"
                        ></div>
                        <nui-popover
                            id="nui-demo-popover-with-container"
                            [container]="popoverContainer"
                            [template]="popoverWithContainerTemplate"
                            i18n
                        >
                            Hover over me!
                        </nui-popover>

                        <nui-popover
                            popoverTitle="Modal Popover"
                            i18n-popoverTitle
                            trigger="click"
                            placement="right"
                            [template]="popoverModal"
                            [modal]="true"
                            [preventClosing]="true"
                            [closePopover]="closePopoverSubject"
                        >
                            <button
                                nui-button
                                type="button"
                                id="nui-demo-popover-modal"
                                i18n
                            >
                                Show modal popover
                            </button>
                        </nui-popover>

                        <ng-template #popoverModal>
                            <span i18n
                                >A modal popover can be used to grab the user's
                                attention.</span
                            >
                            <div class="mt-2 d-flex justify-content-end">
                                <button
                                    id="nui-demo-custom-close-popover"
                                    nui-button
                                    type="button"
                                    displayStyle="action"
                                    (click)="closePopover()"
                                    i18n
                                >
                                    Close
                                </button>
                                <button
                                    nui-button
                                    class="ml-3"
                                    type="button"
                                    displayStyle="primary"
                                    (click)="closePopover()"
                                    i18n
                                >
                                    Confirm
                                </button>
                            </div>
                        </ng-template>

                        <ng-template #popoverWithContainerTemplate i18n>
                            I'm appended to a container!
                        </ng-template>
                        <nui-menu icon="menu" *ngIf="!i">
                            <nui-menu-action *ngFor="let item of items">
                                {{ item }}
                            </nui-menu-action>
                        </nui-menu>
                    </div>
                </nui-select-v2-option>
            </nui-select-v2>
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
        <button nui-button type="button" (click)="onButtonClick('Cancel')">
            Cancel
        </button>
        <button
            nui-button
            type="button"
            displayStyle="primary"
            (click)="onButtonClick('Action')"
        >
            Action
        </button>
    </nui-dialog-footer>
</ng-template>
`;export{i as default};
