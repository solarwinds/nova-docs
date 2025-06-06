import"./chunk-XR34LRGE.js";var e=`<div class="row top-buffer">
    <div class="col-3 nui-text-default" i18n>Simple search bar</div>
    <div class="col-3 nui-text-default" i18n>
        Popover with Form and Checkbox Group Inside
    </div>
</div>
<div class="row top-buffer">
    <div class="col-3">
        <nui-popup>
            <button
                nui-button
                type="button"
                nuiPopupToggle
                icon="search"
            ></button>
            <div popupAreaContent>
                <ng-container>
                    <nui-search (click)="handleClick($event)"></nui-search>
                </ng-container>
            </div>
        </nui-popup>
    </div>
    <div class="col-3">
        <nui-popup
            [width]="width"
            contextClass="nui-demo-popover-custom-form-styles"
        >
            <a nuiPopupToggle i18n>More Options...</a>
            <div popupAreaContent>
                <ng-container>
                    <form
                        [formGroup]="demoFormGroup"
                        (click)="handleClick($event)"
                    >
                        <div class="form-group">
                            <nui-message
                                [allowDismiss]="false"
                                type="critical"
                                *ngIf="
                                    !demoFormGroup.controls['checkboxGroup']
                                        .valid &&
                                    demoFormGroup.controls['checkboxGroup']
                                        .touched
                                "
                            >
                                <b i18n>Select minimum 3 checkboxes!</b>
                            </nui-message>
                            <nui-checkbox-group
                                formControlName="checkboxGroup"
                                name="item"
                                required
                            >
                                <nui-checkbox
                                    *ngFor="let item of itemsSource"
                                    [value]="item"
                                >
                                    {{ item }}
                                </nui-checkbox>
                            </nui-checkbox-group>
                        </div>
                        <button
                            nui-button
                            type="submit"
                            [disabled]="
                                demoFormGroup.controls['checkboxGroup'].invalid
                            "
                            i18n
                        >
                            Submit
                        </button>
                    </form>
                </ng-container>
            </div>
        </nui-popup>
    </div>
</div>
`;export{e as default};
