import"./chunk-VBFW7A5V.js";var i=`<!-- Since we need the select input to show only the current color we need to use displayValueTemplate input and a corresponding template.
     Don't forget to disable the width synchronization, so that the overlay does not follow the toggle reference's width -->
<nui-select-v2
    placeholder="Select Item"
    i18n-placeholder
    class="color-picker-select"
    [overlayConfig]="overlayConfig"
    [syncWidth]="false"
    [displayValueTemplate]="colorSelectTemplate"
>
    <!-- The following block (along with the corresponding ng-template below) builds the markup of the color picker boxes inside the overlay. -->
    <div class="color-picker-container">
        <div
            class="d-inline-flex flex-wrap box"
            *ngFor="let item of backgroundColors"
        >
            <nui-select-v2-option
                [value]="item"
                [displayValueContext]="item"
                class="w-100 h-100 reset-box-sizes"
                #option
            >
                <!-- This block defines the overlay color boxes markup -->
                <div
                    class="color-picker-option"
                    [class.color-picker-option--selected]="option?.selected"
                >
                    <div
                        class="color-picker-option__color-box"
                        [style.background-color]="item"
                    >
                        <!-- Notice here how 'mix-blend-mode' is used conditionally. Since the glyph sign is always white and is being set as a background image, 
                                            we need a way to make it visible on white background. Since white background is default for the light theme, we bind to that and
                                            apply the property to mix and differ two backgrounds - the glyph and the underlaying box color background -->
                        <div
                            class="color-picker-option__glyph"
                            [style.mix-blend-mode]="
                                item === defaultColor ? 'difference' : null
                            "
                            *ngIf="option?.selected"
                        ></div>
                    </div>
                </div>
            </nui-select-v2-option>
        </div>
    </div>
</nui-select-v2>

<!-- This template defines the input markup -->
<ng-template #colorSelectTemplate let-item let-open="open">
    <div class="color-picker-input">
        <div class="color-picker-input__box">
            <div
                class="color-picker-input__color-box"
                [style.background-color]="item"
            ></div>
        </div>
        <div class="color-picker-input__toggle">
            <nui-icon
                [style.transform]="open ? 'rotate(180deg)' : ''"
                icon="caret-down"
            ></nui-icon>
        </div>
    </div>
</ng-template>
`;export{i as default};
