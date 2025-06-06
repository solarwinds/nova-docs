import"./chunk-XR34LRGE.js";var e=`<div class="container">
    <div class="row mt-5">
        <div class="col">
            <p>Simple example</p>
            <nui-popup id="nui-demo-popup-simple">
                <button nuiPopupToggle>Click</button>
                <div popupAreaContent>
                    <ng-container *ngFor="let item of itemsSource">
                        <nui-menu-item tabindex="0">{{ item }}</nui-menu-item>
                    </ng-container>
                </div>
            </nui-popup>
        </div>
        <div class="col">
            <p>Custom width</p>
            <nui-popup [width]="width" id="nui-demo-popup-custom-width">
                <button nuiPopupToggle>Click</button>
                <div popupAreaContent>
                    <ng-container *ngFor="let item of itemsSource">
                        <nui-menu-item tabindex="0">{{ item }}</nui-menu-item>
                    </ng-container>
                </div>
            </nui-popup>
        </div>
        <div class="col">
            <p>Append to Body</p>
            <nui-popup
                [appendToBody]="true"
                [directionRight]="true"
                id="nui-demo-popup-append-to-body"
                contextClass="additional-host-class"
            >
                <button nuiPopupToggle>Click</button>
                <div popupAreaContent>
                    <ng-container *ngFor="let item of itemsSource">
                        <nui-menu-item tabindex="0">{{ item }}</nui-menu-item>
                    </ng-container>
                </div>
            </nui-popup>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col">
            <p>Open Direction Right</p>
            <nui-popup
                [directionRight]="true"
                id="nui-demo-popup-direction-right"
            >
                <button nuiPopupToggle>Click</button>
                <div popupAreaContent>
                    <ng-container *ngFor="let item of itemsSource">
                        <nui-menu-item tabindex="0">{{ item }}</nui-menu-item>
                    </ng-container>
                </div>
            </nui-popup>
        </div>
        <div class="col">
            <p>Open Direction Top</p>
            <nui-popup
                [directionRight]="false"
                [directionTop]="true"
                id="nui-demo-popup-direction-top"
            >
                <button nuiPopupToggle>Click</button>
                <div popupAreaContent>
                    <ng-container *ngFor="let item of itemsSource">
                        <nui-menu-item tabindex="0">{{ item }}</nui-menu-item>
                    </ng-container>
                </div>
            </nui-popup>
        </div>
        <div class="col">
            <p>IsOpen = true</p>
            <nui-popup id="nui-demo-popup-isOpen-true" [isOpen]="true">
                <button nuiPopupToggle>Click</button>
                <div popupAreaContent>
                    <ng-container *ngFor="let item of itemsSource">
                        <nui-menu-item tabindex="0">{{ item }}</nui-menu-item>
                    </ng-container>
                </div>
            </nui-popup>
        </div>
    </div>
</div>
`;export{e as default};
