import"./chunk-VBFW7A5V.js";var i=`<nui-popup contextClass="nui-demo-custom-class">
    <button
        nui-button
        nuiPopupToggle
        width="90px"
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
            <nui-menu-item tabindex="0">{{ item }}</nui-menu-item>
        </ng-container>
    </div>
</nui-popup>
`;export{i as default};
