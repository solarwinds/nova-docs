import"./chunk-VBFW7A5V.js";var t=`<nui-popup>
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
            <nui-menu-item tabindex="0" nuiTooltip="This icon is draggable">{{
                item
            }}</nui-menu-item>
        </ng-container>
    </div>
</nui-popup>
`;export{t as default};
