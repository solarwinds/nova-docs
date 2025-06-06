import"./chunk-VBFW7A5V.js";var t=`<div class="container">
    <h3>Basic Paginator</h3>
    <nui-paginator
        id="nui-visual-test-basic-paginator"
        [page]="1"
        [pageSize]="10"
        [total]="1012"
    >
    </nui-paginator>

    <h3>Paginator Adjacent Page-Links</h3>
    <nui-paginator
        id="nui-visual-test-adjacent-paginator"
        [page]="41"
        [pageSize]="25"
        [total]="1012"
        [adjacent]="2"
    >
    </nui-paginator>

    <h3>
        Paginator With Custom Page Set and Without Previous and Next Buttons
    </h3>
    <nui-paginator
        id="nui-visual-test-custom-page-set-paginator"
        [page]="5"
        [pageSize]="2"
        [total]="18"
        [adjacent]="1"
        [pageSizeSet]="customPageSizeSet"
        [showPrevNext]="false"
    >
    </nui-paginator>

    <h3>Paginator With Custom Styling</h3>
    <nui-paginator
        id="nui-visual-test-paginator-styling"
        [page]="10"
        [pageSize]="25"
        [total]="1012"
        activeClass="nui-message-error"
        dots="\xB0\xB0\xB0"
    >
    </nui-paginator>

    <h3>Invisible Paginator</h3>
    <nui-paginator
        id="nui-visual-test-visibility-paginator"
        [page]="0"
        [pageSize]="0"
        [total]="0"
        [adjacent]="1"
        [hideIfEmpty]="true"
    >
    </nui-paginator>

    <h3>Paginator with Virtual Scroll</h3>
    <nui-paginator-virtual-scroll-example></nui-paginator-virtual-scroll-example>
</div>
`;export{t as default};
