import{a as p}from"./chunk-ZAFODXOL.js";import{a as b}from"./chunk-233T2DNW.js";import{a as u}from"./chunk-VIN6KFXN.js";import{pe as c,re as s}from"./chunk-DKNPFPFG.js";import{Ha as d,Pb as r,Vb as i,Wb as e,Xb as n,tc as t,wb as o}from"./chunk-FGVILFLG.js";var E=(()=>{class l{constructor(){this.tableConfigurationText=`
        "table": {
            ...
            properties: {
                // enabling selection here
                selectionConfiguration: {
                    // whether the selection is enabled or disabled
                    enabled: true,
                    // can be Multi | Radio | Single
                    selectionMode: TableSelectionMode.Multi,
                    // property that uniquely identifies row in a table
                    trackByProperty: "id",
                    // whether clicking on row should select it
                    clickableRow: true,
                },
            },
        },
    `,this.eventSubscriptionText=`
...
constructor(Inject(PIZZAGNA_EVENT_BUS) eventBus: EventBus<IEvent>) {
    eventBus
    .getStream(SELECTION)
    // don't forget to unsubscribe!
    .subscribe((selection: ISelection) => ...)
}
...
    `}static{this.\u0275fac=function(a){return new(a||l)}}static{this.\u0275cmp=d({type:l,selectors:[["nui-table-selectable-docs"]],decls:60,vars:2,consts:[["href","../additional-documentation/anatomy/data-sources.html","target","_blank"],["href","../additional-documentation/widget-types/table.html","target","_blank"],["filenamePrefix","table-widget-selectable-multi","exampleTitle","Table widget with multi select"],["filenamePrefix","table-widget-selectable-radio","exampleTitle","Table widget with radio select"],["filenamePrefix","table-widget-selectable-single","exampleTitle","Table widget with single select"],["language","typescript",3,"code"]],template:function(a,m){a&1&&(i(0,"h1"),t(1,"Table Widget with Select Functionality"),e(),i(2,"p"),t(3,` Table Widget can have select functionality. This page contains information only about setting up the select, so before proceeding get familiar with the following:
`),e(),i(4,"ul")(5,"li")(6,"a",0)(7,"code"),t(8,"Data Sources"),e()(),t(9," - for information about Data Sources and their Features. "),e(),i(10,"li")(11,"a",1)(12,"code"),t(13,"Table Widget"),e()(),t(14," - for configuring a table widget itself. "),e()(),i(15,"h2"),t(16,"Types of Select"),e(),i(17,"p"),t(18,"Table widget can be configured with 4 different types of select:"),e(),i(19,"ul")(20,"li")(21,"b"),t(22," Multi: "),e(),i(23,"p"),t(24," Allows to pick multiple table rows. Each row displays a checkbox in this mode and a selector for all items on the given page/all pages is displayed as well. "),e()(),i(25,"li")(26,"b"),t(27," Radio: "),e(),i(28,"p"),t(29," Allows to pick only one table row. Each row displays a radio button and the selector for all items is hidden. "),e()(),i(30,"li")(31,"b"),t(32," Single: "),e(),i(33,"p"),t(34," Same behavior as "),i(35,"b"),t(36,"Radio"),e(),t(37," mode but without buttons. Row is clickable by default. "),e()()(),i(38,"nui-example-wrapper",2),n(39,"table-widget-selectable-multi-example"),e(),i(40,"nui-example-wrapper",3),n(41,"table-widget-selectable-radio-example"),e(),i(42,"nui-example-wrapper",4),n(43,"table-widget-selectable-single-example"),e(),i(44,"h2"),t(45,"Configuring the Widget"),e(),i(46,"p"),t(47," To configure the widget you have to enable selection in the widget configuration. The configuration is of type "),i(48,"code"),t(49,"TableWidgetSelectionConfig"),e(),t(50,`.
`),e(),n(51,"nui-example-code",5),i(52,"h2"),t(53,"Accessing the Selection"),e(),i(54,"p"),t(55," On selection a "),i(56,"code"),t(57,"SELECTION"),e(),t(58,` pizzagna event is being triggered. You can access it in the following way:
`),e(),n(59,"nui-example-code",5)),a&2&&(o(51),r("code",m.tableConfigurationText),o(8),r("code",m.eventSubscriptionText))},dependencies:[s,c,p,b,u],encapsulation:2})}}return l})();export{E as a};
