import"./chunk-XR34LRGE.js";var t=`<nui-breadcrumb
    id="nui-demo-breadcrumb-visual-test"
    [items]="breadcrumbSource"
    (navigation)="onNavigation($event)"
></nui-breadcrumb>
<div class="container">
    <div>
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
        id="nui-demo-breadcrumb-show-second-view"
        (click)="relativeNavigation('first-subroute')"
    >
        Show first level
    </button>
    <router-outlet></router-outlet>
</div>
`;export{t as default};
