import"./chunk-VBFW7A5V.js";var e=`<nui-breadcrumb
    id="nui-demo-breadcrumb-basic"
    [items]="breadcrumbSource"
    (navigation)="onNavigation($event)"
></nui-breadcrumb>
<div class="container">
    <div i18n class="nui-text-default">
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
        explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione
        voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum,
        quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat
        voluptatem.
    </div>
    <button
        id="nui-demo-breadcrumb-show-countries"
        nui-button
        type="button"
        (click)="relativeNavigation('countries')"
        i18n
    >
        Show countries
    </button>
    <button
        id="nui-demo-breadcrumb-show-offices"
        nui-button
        class="ml-1"
        type="button"
        (click)="relativeNavigation('offices')"
        i18n
    >
        Show offices
    </button>
    <router-outlet></router-outlet>
</div>
`;export{e as default};
