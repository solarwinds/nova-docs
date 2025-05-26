import{Qb as r,Wb as i,Xb as t,Yb as n,nb as o,yc as e,zb as d}from"./chunk-MC3BMXIX.js";var u=(()=>{class l{constructor(){this.alignmentCode=`<td nui-cell *nuiCellDef="let element">
     <div class="custom-class">
         {{element.status}}
     </div>
 </td>`,this.fetch='fetchURI = "${this.url}/?page=${end / (end - start)}&results=${end - start}"',this.dataSourceSetup={extendDS:`@Injectable()
export class RandomuserTableDataSource extends DataSourceService<ITableModel> {
    constructor(private searchService: SearchService) {
        super();
    }
}`,defineFields:`private readonly url = "https://yourserver.com/api";
private cache = Array.from<ITableModel>({ length: 0 });
public busy = new BehaviorSubject(false);`,getData:`public async getData(start: number = 0, end: number= 20): Promise<INovaFilteringOutputs> {
    let response: IRandomuserResponse = null;
    try {
        response = await
                    (await fetch("this.fetchURI"))
                        .json();
                            return {
                                users: response.results.map((result: IRandomuserResults, i: number) => ({
                                    no: this.cache.length + i + 1,
                                    nameTitle: result.name.title,
                                    nameFirst: result.name.first,
                                    nameLast: result.name.last,
                                    gender: result.gender,
                                    country: result.location.country,
                                    city: result.location.city,
                                    postcode: result.location.postcode,
                                    email: result.email,
                                    cell: result.cell,
                                })),
                                total: response.results.length,
                                start: start,
                            } as UsersQueryResponse;
    } catch (e) {
        console.error("Error responding from server. Please visit https://https://randomuser.me/ to see if it's available");
    }
}`,getFilteredData:`public async getFilteredData(filters: INovaFilters): Promise<INovaFilteringOutputs> {
    this.busy.next(true);
    const virtualScrollFilter = filters.virtualScroll && filters.virtualScroll.value;
    const start = virtualScrollFilter ? filters.virtualScroll.value.start : 0;
    const end = virtualScrollFilter ? filters.virtualScroll.value.end : 0;

    this.getData(start, end).then((response: UsersQueryResponse) => {
        if (!response) { return; }

        this.cache = this.cache.concat(response.users);
        this.dataSubject.next(this.cache);
        this.busy.next(false);
    });

    return {
        repeat: {
            itemsSource: this.cache,
        },
        totalItems: 200,
    }
}`},this.tableScrollingSetup={vars:`
private _totalItems: number = 0;
private _isBusy: boolean = false;

private range: number = 40;
private onDestroy$: Subject<void> = new Subject<void>();

get totalItems() { return this._totalItems; }
get isBusy() { return this._isBusy; }

public users: IRandomuserTableModel[] = [];
public displayedColumns: string[] = ["no", "nameTitle", "nameFirst", "nameLast", "gender", "country", "city", "postcode", "email", "cell"];
private dataSource: RandomuserTableDataSource;
`,viewportManagerImport:'import { VirtualViewportManager } from "@nova-ui/bits";',viewChildren:`
@ViewChild(CdkVirtualScrollViewport, { static: false }) viewport: CdkVirtualScrollViewport;
`,provideViewport:`
@Component({
    //
    providers: [VirtualViewportManager]
})
`,injectViewport:`
constructor(private viewportManager: VirtualViewportManager) {}
`,oninitSubscribeBusy:`
public ngOnInit(): void {
    this.dataSource.busy.subscribe(busy => {
        this._isBusy = busy;
    });
}`,registerScroll:`private registerVirtualScroll() {
    this.dataSource.registerComponent({
        virtualScroll: { componentInstance: this.viewportManager },
    });
 }`,ngAfterViewInitStart:`ngAfterViewInit(): void {
    this.registerVirtualScroll();
}`,ngAfterViewInitViewport:`this.viewportManager
    // Note: Initializing viewportManager with the repeat's CDK Viewport Ref
    .setViewport(this.viewport)
    // Note: Initializing the stream with the desired page size, based on which
    // VirtualViewportManager will perform the observations and will emit
    // distinct ranges with step equal to provided pageSize
    .observeNextPage$({pageSize: this.range}).pipe(
    // Note: In case we know the total number of items we can stop the stream when dataset end is reached
    // Otherwise we can let VirtualViewportManager to stop when last received page range will not match requested range
    filter(range => this.totalItems ? this.totalItems >= range.end : true),
    tap(() => this.dataSource.applyFilters()),
    // Note: Using the same stream to subscribe to the outputsSubject and update the items list
    switchMap(() => this.dataSource.outputsSubject.pipe(
        tap((outputs: IFilteringOutputs) => {
            this._totalItems = outputs.totalItems;
            this.users = outputs.repeat.itemsSource || [];
            this.cd.detectChanges();
        })
    )),
    takeUntil(this.onDestroy$)
).subscribe();
        `}}static{this.\u0275fac=function(a){return new(a||l)}}static{this.\u0275cmp=d({type:l,selectors:[["nui-table-docs-example"]],standalone:!1,decls:483,vars:6,consts:[["filenamePrefix","table-basic","exampleTitle","Basic Usage"],["filenamePrefix","table-pinned-header","exampleTitle","Pinned header"],["language","html",3,"code"],["filenamePrefix","table-cell-content-align","exampleTitle","Column Alignment"],["filenamePrefix","table-cell-width-set","exampleTitle","Column Width and Tooltips"],["filenamePrefix","table-row-height-set","exampleTitle","Row Density"],["filenamePrefix","table-reorder","exampleTitle","Column reordering"],["filenamePrefix","table-columns-add-remove","exampleTitle","Custom actions"],["filenamePrefix","table-resize","exampleTitle","Column resize"],["href","https://material.angular.io/cdk/table/overview#connecting-the-table-to-a-data-source","target","_blank"],["href","https://material.angular.io/cdk/table/overview","target","_blank"],["href","../interfaces/ISelection.html","target","_blank"],["type","warning",3,"allowDismiss"],["filenamePrefix","table-select","exampleTitle","Enabling Row Selection"],["filenamePrefix","table-row-clickable","exampleTitle","Clickable Table Row"],["filenamePrefix","table-virtual-scroll-steps-and-button","exampleTitle","Scrolling with Step Fetching and Optional Data Load"],["type","info",3,"allowDismiss"],["filenamePrefix","table-virtual-scroll-sticky-header","exampleTitle","Virtual Scroll with Sticky Header"],["filenamePrefix","table-virtual-scroll-select-sticky-header","exampleTitle","Virtual Scroll with Sticky Header and Select"],["href","../additional-documentation/schematics/table.html","target","_parent"]],template:function(a,m){a&1&&(i(0,"p"),e(1," A Data Table is used for presenting data in a logical table-layout structure, and "),i(2,"code"),e(3,"<nui-table>"),t(),e(4,` is the Nova component that provides this functionality.
`),t(),i(5,"h2"),e(6,"Required Modules"),t(),i(7,"ul")(8,"li")(9,"code"),e(10,"NuiTableModule"),t()()(),i(11,"h2"),e(12,"Basic Usage"),t(),i(13,"ul")(14,"li"),e(15," 1. Define columns to display "),i(16,"p"),e(17," A column definition is specified via an "),i(18,"code"),e(19,"ng-container"),t(),e(20," with the "),i(21,"code"),e(22,"nuiColumnDef"),t(),e(23," attribute, giving each column a name. Each column definition can contain a header-cell template with an "),i(24,"code"),e(25,"*nuiHeaderCellDef"),t(),e(26," attribute, a data-cell template with an "),i(27,"code"),e(28,"*nuiCellDef"),t(),e(29," attribute, and a footer-cell template with an "),i(30,"code"),e(31,"*nuiFooterCellDef"),t(),e(32," attribute. "),t()(),i(33,"li"),e(34," 2. Define the table's header-row and data-row "),i(35,"p"),e(36," This can be done via the "),i(37,"code"),e(38,"*nuiHeaderRowDef"),t(),e(39," and "),i(40,"code"),e(41,"*nuiRowDef"),t(),e(42," attributes respectively. "),t()(),i(43,"li"),e(44," 3. Initialize the "),i(45,"code"),e(46,"*nuiHeaderRowRef"),t(),e(47," attribute with the list of column names "),i(48,"p"),e(49," This one should be in sync with the column templates (i.e. four "),i(50,"code"),e(51,"nuiColumnDef"),t(),e(52," directives for four items in the columns array. "),t()(),i(53,"li"),e(54," 4. Assign some data to the "),i(55,"code"),e(56,"dataSource"),t(),e(57," input "),i(58,"p"),e(59," When this one changes, the table will re-render. Note: Table re-rendering will only occur when the actual reference of "),i(60,"code"),e(61,"dataSource"),t(),e(62," changes. "),t()()(),i(63,"p"),e(64," To make a table scroll horizontally, wrap it in a container with the class "),i(65,"code"),e(66,"nui-table__container"),t(),e(67,` or add this class to your existing wrapper. Without this class, a table that exceeds the width of its container will overlap the right edge of the container.
`),t(),i(68,"nui-example-wrapper",0),n(69,"nui-table-basic-example"),t(),i(70,"h2"),e(71,"Pinned Header"),t(),i(72,"p"),e(73," To make the header sticky, set the "),i(74,"code"),e(75,"sticky"),t(),e(76," input to true on the "),i(77,"code"),e(78,"*nuiHeaderRowDef"),t(),e(79,` directive.
`),t(),i(80,"nui-example-wrapper",1),n(81,"nui-table-pinned-header-example"),t(),i(82,"h2"),e(83,"Cell Content Alignment"),t(),i(84,"p"),e(85," By default, cell content in the form of text is aligned to the left, and numbers are aligned to the right (alignment for a cell is determined by its corresponding datasource item). All alignments can be set via the "),i(86,"code"),e(87,"alignment"),t(),e(88," input of an "),i(89,"code"),e(90,"nui-cell"),t(),e(91," or "),i(92,"code"),e(93,"nui-header-cell"),t(),e(94," directive. Valid options are: "),i(95,"b"),e(96,"left"),t(),e(97,", "),i(98,"b"),e(99,"right"),t(),e(100,", or "),i(101,"b"),e(102,"center"),t(),e(103,`.
`),t(),i(104,"p"),e(105,` If you want custom positioning and alignment inside table cells, just wrap everything inside your cell in the container and apply styles just as you need them:
`),t(),n(106,"nui-example-code",2),i(107,"p"),e(108," Or, you can apply some styling to the whole "),i(109,"code"),e(110,"td"),t(),e(111," by putting your class there: "),i(112,"code"),e(113,'<td nui-cell *nuiCellDef="let element" class="custom-class"></td>'),t()(),i(114,"p"),e(115,` For example, column "Location" is vertically aligned to the top, and column "Outages" is vertically aligned to the bottom.
`),t(),i(116,"p")(117,"b"),e(118,"Note:"),t(),e(119," Input "),i(120,"code"),e(121,'type="icon"'),t(),e(122," on the "),i(123,"code"),e(124,"nuiColumnDef"),t(),e(125,` directive will set width of that column's cells to 40px and center the cell content both vertically and horizontally.
`),t(),i(126,"nui-example-wrapper",3),n(127,"nui-table-cell-content-align-example"),t(),i(128,"h2"),e(129,"Column Width and Tooltips"),t(),i(130,"p"),e(131," To change width of a column, use Angular binding syntax to set the pixel value of "),i(132,"code"),e(133,"[style.width.px]"),t(),e(134," on the "),i(135,"code"),e(136,"<th>"),t(),e(137,` element of the column.
`),t(),i(138,"p"),e(139," To add a tooltip to a cell, set the "),i(140,"code"),e(141,"[tooltipText]"),t(),e(142," input on the "),i(143,"code"),e(144,"nuiHeaderCellDef"),t(),e(145," or "),i(146,"code"),e(147,"nuiCellDef"),t(),e(148,` directive.
`),t(),i(149,"h3"),e(150,"Default widths:"),t(),i(151,"ul")(152,"li")(153,"b"),e(154,"Table"),t(),i(155,"code"),e(156,"width"),t(),e(157," is "),i(158,"b"),e(159,"100%"),t(),e(160,"."),t(),i(161,"li")(162,"b"),e(163,"Column"),t(),i(164,"code"),e(165,"min-width"),t(),e(166," is "),i(167,"b"),e(168,"46px"),t(),e(169,"."),t()(),i(170,"nui-example-wrapper",4),n(171,"nui-table-cell-width-set"),t(),i(172,"h2"),e(173,"Row Density"),t(),i(174,"p"),e(175," Row height can be specified via the "),i(176,"code"),e(177,"density"),t(),e(178," input of "),i(179,"code"),e(180,"nui-row"),t(),e(181,". Valid options are: "),i(182,"b"),e(183,"default"),t(),e(184," - 40px, "),i(185,"b"),e(186,"compact"),t(),e(187," - 30px, or "),i(188,"b"),e(189,"tiny"),t(),e(190," - 24px. "),i(191,"code"),e(192,'density = "tiny"'),t(),e(193,` is used in the example below. The same for header height.
`),t(),i(194,"nui-example-wrapper",5),n(195,"nui-table-row-height-set"),t(),i(196,"h2"),e(197,"Column Reordering"),t(),i(198,"p"),e(199," To make a table reorderable, "),i(200,"code"),e(201,'[reorderable]="true"'),t(),e(202," should be specified on the "),i(203,"code"),e(204,"<nui-table>"),t(),e(205," element. Bind to the reordering event using the "),i(206,"code"),e(207,"(columnsOrderChange)"),t(),e(208,` output.
`),t(),i(209,"nui-example-wrapper",6),n(210,"nui-table-reorder-example"),t(),i(211,"h2"),e(212,"Custom Actions"),t(),i(213,"p"),e(214," Table supports custom user actions. To add or remove table columns, update the list of column names you are passing to the "),i(215,"code"),e(216,"nuiHeaderRowDef"),t(),e(217," and "),i(218,"code"),e(219,"nuiRowDef"),t(),e(220,` directives. The template for added columns should be provided, and, if a column is removed, the corresponding column template should also be removed.
`),t(),i(221,"p"),e(222,"To add or remove table rows you need to:"),t(),i(223,"ol")(224,"li"),e(225,"Add "),i(226,"code"),e(227,"@ViewChild"),t(),e(228," in your component."),t(),i(229,"li"),e(230,"Modify your "),i(231,"code"),e(232,"dataSource."),t()(),i(233,"li"),e(234," After modifying your data (adding or removing rows) you will need to call "),i(235,"code"),e(236,"renderRows"),t(),e(237," method on your table using "),i(238,"code"),e(239,"@ViewChild"),t(),e(240," variable. "),t()(),i(241,"p")(242,"b"),e(243,"Note 1:"),t(),e(244," If you want to use "),i(245,"code"),e(246,"nui-menu"),t(),e(247," or other components with dropdowns you will need to add class to "),i(248,"code"),e(249,"td"),t(),e(250," in your template where you will need to set "),i(251,"code"),e(252,"overflow:visible"),t(),e(253,`.
`),t(),i(254,"p")(255,"b"),e(256,"Note 2:"),t(),e(257," Class "),i(258,"code"),e(259,"nui-edge-definer"),t(),e(260," is added to table container in this example not to make menu open down in the last row and cause scroll because of "),i(261,"code"),e(262,"overflow:auto"),t(),e(263,`.
`),t(),i(264,"nui-example-wrapper",7),n(265,"nui-table-columns-add-remove-example"),t(),i(266,"h2"),e(267,"Column Resize"),t(),i(268,"p"),e(269," To enable the resizing of a table you need to set "),i(270,"code"),e(271,'[resizable]="true"'),t(),e(272,". When a table is resizable, it's layout is set to "),i(273,"code"),e(274,"table-layout: fixed"),t(),e(275,"; therefore, column widths will not be recalculated automatically as they are with the default table-layout. You can provide the desired width of a column in "),i(276,"code"),e(277,"px"),t(),e(278," on the "),i(279,"code"),e(280,"columnDef"),t(),e(281,` directive. The rest of the table width will be distributed among the other columns equally.
`),t(),i(282,"nui-example-wrapper",8),n(283,"nui-table-resize-example"),t(),i(284,"h2"),e(285,"Using trackBy"),t(),i(286,"p"),e(287," To improve performance, you can let Angular know which row elements in the table can be reused during a change detection cycle by binding a trackBy handler to "),i(288,"code"),e(289,"nui-table"),t(),e(290,"'s "),i(291,"code")(292,"a",9),e(293,"trackBy"),t()(),e(294," property inherited from "),i(295,"code")(296,"a",10),e(297,"CdkTable"),t()(),e(298,`. The trackBy handler should return a value that uniquely identifies each item in the table.
`),t(),i(299,"p"),e(300," Besides performance, another benefit of using trackBy is that the table can keep track of selections based on the identifier returned by the trackBy handler. This is necessary if table items are transmitted across the wire during user interaction. See "),i(301,"strong"),e(302,"Enabling Row Selection"),t(),e(303,` below for usage.
`),t(),i(304,"h2"),e(305,"Enabling Row Selection"),t(),i(306,"p"),e(307,"To be able to select rows, do the following:"),t(),n(308,"nui-table-row-selection-instructions"),i(309,"p")(310,"b"),e(311,"Note 1:"),t(),e(312,"To preselect rows in table and programmatically change selection you can use "),i(313,"code"),e(314,"[selection]"),t(),e(315," input which has "),i(316,"code")(317,"a",11),e(318,"ISelection"),t()(),e(319,` type.
`),t(),i(320,"p")(321,"b"),e(322,"Note 2:"),t(),e(323," If you need to use "),i(324,"code"),e(325,"paginator"),t(),e(326," with row selection, you need to pass count of all items on all pages into "),i(327,"code"),e(328,"totalItems"),t(),e(329,` input.
`),t(),i(330,"nui-message",12)(331,"p")(332,"strong"),e(333,"Important:"),t(),e(334," When working with data that's coming across the wire, it's necessary to bind a trackBy handler as mentioned above. This will allow selection tracking to be based on the identifier returned by the trackBy handler. If a trackBy is not provided, comparisons to determine whether items are selected will be based on object reference which of course won't work with items coming from a backend. "),t(),e(335,` Take a look at the source of the following example to see how.
`),t(),i(336,"nui-example-wrapper",13),n(337,"nui-table-select"),t(),i(338,"h3"),e(339,"Clickable Table Row"),t(),i(340,"p"),e(341," This option allows for making the whole row clickable for selecting or deselecting it instead of having the checkbox as the only selectable area. It should be combined with the "),i(342,"code"),e(343,"selectionConfig.enabled = true"),t(),e(344," input of the corresponding "),i(345,"code"),e(346,"TableComponent"),t(),e(347,`. When a table has no selectable rows configured, it's obviously not possible to enable row selection/deselection by clicking on any area of the row.
`),t(),i(348,"p"),e(349," In a very basic configuration, when the table has "),i(350,"code"),e(351,"selectionConfig.enabled = true"),t(),e(352," configured, adding "),i(353,"code"),e(354,"clickableRow = true"),t(),e(355," input to the "),i(356,"code"),e(357,"TR"),t(),e(358,` element introduces a behavior in which any click inside the row selects or deselects it.
`),t(),i(359,"p"),e(360," Sometimes it isn't desirable to select/deselect a row when certain elements within the row are clicked as they serve other purposes - e.g. when a button is located inside a row, a user would expect some action to be triggered on the button click, rather than selection of the row. So it's possible to configure the row click behavior to ignore clicks on some predefined elements. Such elements can be configured by providing their CSS selectors in the "),i(361,"code"),e(362,"ignoredSelectors"),t(),e(363," property of the "),i(364,"code"),e(365,"clickableRowConfig"),t(),e(366," input. The default value for this property is "),i(367,"code"),e(368,`["button", "input[type='button']", "a[href]"]`),t(),e(369,". It's also possible to explicitly configure elements to trigger row selection/deselection on click. This can be done by providing their CSS selectors in the "),i(370,"code"),e(371,"clickableSelectors"),t(),e(372," property of the "),i(373,"code"),e(374,"clickableRowConfig"),t(),e(375," input. It's default value is "),i(376,"code"),e(377,'["nui-row", "tr[nui-row]"]'),t(),e(378,`.
`),t(),i(379,"nui-example-wrapper",14),n(380,"nui-table-row-clickable"),t(),i(381,"h2"),e(382,"Infinite Scrolling Without Custom Strategy"),t(),i(383,"nui-message",12),e(384,` Please consult your UX team before using the example below.
`),t(),i(385,"p"),e(386," In case one doesn't want to create a custom virtual scroll strategy to implement scrolling for the "),i(387,"code"),e(388,"nui-table"),t(),e(389," there is a solution that does not use viewport indexes, and involves background data fetching. User is required to set a "),i(390,"code"),e(391,"step"),t(),e(392," and "),i(393,"code"),e(394,"itemsToLoad"),t(),e(395," fields to configure how many items they want to load per user action, and the step size. "),n(396,"br")(397,"br"),e(398," For example, if user wants 500 items loaded per user action, it may be heavy to load so many items at once. Setting the "),i(399,"code"),e(400,"step"),t(),e(401,` field sets the amount of data loaded on the background to smoothen user experience, and let user scroll through the loaded chunks instead of waiting for the entire dataset to get loaded. This means if we want 500 items loaded and set the step to 100, there will be total 5 API calls to fetch 100 items each. This allows the user to get chunks of data in the background and get them loaded into the table as they scroll through the results.
`),t(),e(402,` Consider the following in the example:
`),i(403,"ol")(404,"li")(405,"code"),e(406,"step"),t(),e(407," - sets the step (how many items are loaded per fetch on the background). Pay attention, there is logic that handles the leftover, which means if there are 500 items to load and we set the "),i(408,"code"),e(409,"step"),t(),e(410," to 200, there will be total 3 API calls fetching 200, 200, and the leftover of 100 items. "),t(),i(411,"li")(412,"code"),e(413,"itemsToLoad"),t(),e(414," - total amount of data to load per user action. "),t(),i(415,"li"),e(416," Optional "),i(417,"code"),e(418,"sticky footer"),t(),e(419,". When inside the sdk virtual scrolll viewport, the footer will scroll with the rest of the items. When sticky, it stays visible all the time. "),t(),i(420,"li")(421,"code"),e(422,"Load next X items"),t(),e(423," button in footer. This allows to fetch an additional chunk of data on demand, which may be more desirable in some cases. "),t()(),i(424,"nui-example-wrapper",15),n(425,"nui-table-virtual-scroll-steps-and-button-example"),t(),i(426,"h3"),e(427,"Virtual Scroll with Sticky Header"),t(),i(428,"p"),e(429," To be able to use Nova Table with CDK Virtual Scroll we provide a special directive "),i(430,"code"),e(431,"tableStickyHeader"),t(),e(432,` which will detach table head from scrollable viewport and will simulate the sticky/fixed position.
`),t(),i(433,"nui-message",12),e(434," Bind "),i(435,"strong"),e(436,"only visible rows"),t(),e(437," to the table's "),i(438,"strong"),e(439,"dataSource"),t(),e(440," and use "),i(441,"strong"),e(442,"cdkVirtualFor"),t(),e(443,` to render the rows.
`),t(),i(444,"nui-message",16)(445,"code"),e(446,"tableStickyHeader"),t(),e(447," directive supports runtime state switch by just binding a boolean value to it "),i(448,"code"),e(449,'[tableStickyHeader]="false"'),t(),e(450," or taking the "),i(451,"code"),e(452,"TableStickyHeaderDirective"),t(),e(453," reference via "),i(454,"code"),e(455,"ViewChild"),t(),e(456," decorator and updating the "),i(457,"code"),e(458,"tableStickyHeader"),t(),e(459,` property.
`),t(),i(460,"nui-example-wrapper",17),n(461,"nui-table-virtual-scroll-sticky-header-example"),t(),i(462,"h3"),e(463,"Virtual Scroll with Sticky Header and Row Selection"),t(),i(464,"p"),e(465," To implement selection on a table with virtual scroll you can start with the "),i(466,"strong"),e(467,"Virtual Scroll with Sticky Header"),t(),e(468," example and then follow the "),i(469,"strong"),e(470,"Enabling Row Selection"),t(),e(471,` steps:
`),t(),n(472,"nui-table-row-selection-instructions"),i(473,"nui-example-wrapper",18),n(474,"nui-table-virtual-scroll-select-sticky-header-example"),t(),i(475,"nui-message",16),e(476," Pagination, Virtual Scroll aren't natively part of the "),i(477,"code"),e(478,"nui-table"),t(),e(479," component but the "),i(480,"a",19),e(481,"Table Schematic documentation"),t(),e(482,` provides examples on how to use them; For sorting and search the same schematic can be used to generate automatically the code.
`),t()),a&2&&(o(106),r("code",m.alignmentCode),o(224),r("allowDismiss",!1),o(53),r("allowDismiss",!1),o(50),r("allowDismiss",!1),o(11),r("allowDismiss",!1),o(31),r("allowDismiss",!1))},styles:[".markers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:circle;text-indent:30px}"]})}}return l})(),h=(()=>{class l{static{this.\u0275fac=function(a){return new(a||l)}}static{this.\u0275cmp=d({type:l,selectors:[["nui-table-row-selection-instructions"]],standalone:!1,decls:70,vars:0,consts:[["href","https://material.angular.io/cdk/table/overview#connecting-the-table-to-a-data-source","target","_blank"],["href","https://material.angular.io/cdk/table/overview","target","_blank"],["href","../interfaces/ISelection.html","target","_blank"],["href","../injectables/SelectorService.html","target","_blank"]],template:function(a,m){a&1&&(i(0,"ol")(1,"li"),e(2," Specify "),i(3,"code"),e(4,"selectionConfig"),t(),e(5," input, with "),i(6,"code"),e(7,"enabled = true"),t(),e(8," and "),i(9,"code"),e(10,"selectionMode !== TableSelectionMode.None"),t(),e(11,". "),n(12,"br"),i(13,"strong"),e(14,"Deprecated: "),t(),e(15,"Specify "),i(16,"code"),e(17,"selectable = true"),t(),e(18," input. This approach will behave as if "),i(19,"code"),e(20,"selectionMode"),t(),e(21," was set to "),i(22,"code"),e(23,"TableSelectionMode.Multi"),t(),e(24,". "),t(),i(25,"li"),e(26," Bind a trackBy handler to the "),i(27,"code")(28,"a",0),e(29,"trackBy"),t()(),e(30," property inherited from "),i(31,"code")(32,"a",1),e(33,"CdkTable"),t()(),e(34,". The trackBy handler should return a value that uniquely identifies each item in the table. "),n(35,"br"),i(36,"strong"),e(37,"Note:"),t(),e(38," When "),i(39,"code"),e(40,"trackBy"),t(),e(41," is used, the "),i(42,"code")(43,"a",2),e(44,"ISelection"),t()(),e(45," will consist of the trackBy property values only and will not contain entire representations of the selected objects. As a result, it may be beneficial to keep a separate index mapping the selected item IDs to the corresponding objects. "),t(),i(46,"li"),e(47," Pass the row object to "),i(48,"code"),e(49,"nui-row"),t(),e(50," using the "),i(51,"code"),e(52,"rowObject"),t(),e(53," input. "),t(),i(54,"li"),e(55," Bind to the selection event using the "),i(56,"code"),e(57,"(selectionChange)"),t(),e(58," output. In this event table will emit "),i(59,"code")(60,"a",2),e(61,"ISelection"),t()(),e(62," object which should be converted to selected items by calling "),i(63,"code"),e(64,"getSelectedItems()"),t(),e(65," function from "),i(66,"code")(67,"a",3),e(68,"SelectorService"),t()(),e(69,". "),t()())},encapsulation:2})}}return l})();export{u as a,h as b};
