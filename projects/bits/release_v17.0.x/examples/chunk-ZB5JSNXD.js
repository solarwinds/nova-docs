import"./chunk-XR34LRGE.js";var n=`<div class="row">
    <div class="col">
        <div class="row">
            <div class="col nui-text-default" i18n>Bottom Right</div>
        </div>
        <div class="row">
            <div class="col">
                <nui-popup [directionRight]="true">
                    <button
                        nui-button
                        nuiPopupToggle
                        type="button"
                        [icon]="icon"
                        [iconRight]="true"
                        class="menu-button"
                        [isEmpty]="false"
                        i18n
                    >
                        Click
                    </button>
                    <div popupAreaContent>
                        <ng-container *ngFor="let item of itemsSource">
                            <nui-menu-item tabindex="0">{{
                                item
                            }}</nui-menu-item>
                        </ng-container>
                    </div>
                </nui-popup>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="row">
            <div class="col nui-text-default" i18n>Top Left</div>
        </div>
        <div class="row">
            <div class="col">
                <nui-popup [directionTop]="true">
                    <button
                        nui-button
                        nuiPopupToggle
                        type="button"
                        [icon]="icon"
                        [iconRight]="true"
                        class="menu-button"
                        [isEmpty]="false"
                        i18n
                    >
                        Click
                    </button>
                    <div popupAreaContent>
                        <ng-container *ngFor="let item of itemsSource">
                            <nui-menu-item tabindex="0">{{
                                item
                            }}</nui-menu-item>
                        </ng-container>
                    </div>
                </nui-popup>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="row">
            <div class="col nui-text-default" i18n>Top Right</div>
        </div>
        <div class="row">
            <div class="col">
                <nui-popup [directionTop]="true" [directionRight]="true">
                    <button
                        nui-button
                        nuiPopupToggle
                        type="button"
                        [icon]="icon"
                        [iconRight]="true"
                        class="menu-button"
                        [isEmpty]="false"
                        i18n
                    >
                        Click
                    </button>
                    <div popupAreaContent>
                        <ng-container *ngFor="let item of itemsSource">
                            <nui-menu-item tabindex="0">{{
                                item
                            }}</nui-menu-item>
                        </ng-container>
                    </div>
                </nui-popup>
            </div>
        </div>
    </div>
</div>
`;export{n as default};
