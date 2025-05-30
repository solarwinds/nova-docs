import"./chunk-XR34LRGE.js";var n=`<div *ngFor="let category of categories">
    <nui-expander [header]="category">
        <div class="row align-items-baseline">
            <div *ngFor="let icon of icons">
                <div
                    class="m-3"
                    *ngIf="icon.code && icon.category === category"
                >
                    <figure class="d-flex flex-column align-items-center">
                        <nui-icon [icon]="icon.name"></nui-icon>
                        <figcaption class="mt-2">{{ icon.name }}</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </nui-expander>
</div>
`;export{n as default};
